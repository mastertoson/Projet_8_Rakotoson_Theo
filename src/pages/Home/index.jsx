import { useEffect, useState} from 'react'
import Cards from '../../components/Cards'
import axios from "axios";
import { Link } from "react-router-dom";
import Banner from '../../components/Banner'

function Home() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get("../../logements.json").then((res) => {
      setData(res.data)
    })
  }, [])
  return (
    <div className='home_container'>
      <Banner />  

      <div className='cards_container'>
        {data.map((data) => (
          <div  key={data.id}>
            <Link className='link_card_logement' to={'/logement/'+data.id}>
              <Cards card_cover={data.cover} title={data.title} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home


