import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Carrousel from "../../components/Carousel"
import Host from "../../components/Host"
import Collapse from "../../components/Collapse"
import Tag from '../../components/Tag'
import Rate from '../../components/Rate'

function Logement() {
  const navigate = useNavigate();

  const logement = useParams()

  const [currentLogement, setCurrentLogement] = useState([])

  useEffect(() => {
    axios.get("../../logements.json").then((response) => {
      const data = response.data.find((item) => item.id === logement.id)
    
      if (data === undefined) {
        navigate("/error")
      } else {
        setCurrentLogement(data)
      }
    
    });
  }, [logement.id, navigate])
  
  
  const hostName = currentLogement.host?.name || ""
  const hostPicture = currentLogement.host?.picture || ""
  const tags = currentLogement.tags ?? []
  const equipement = 
        currentLogement && currentLogement.equipments && currentLogement.equipments.map((item, index) => (
            <li key={index} className="equipementList">{item}</li>
            ))
  
  
    return (
      <div className='fiche_container'>
        <Carrousel  />
        <section className='host_info_container'>

          <div className='title_tag_container'>
            <div className='title_container'>
              <h1>{currentLogement.title}</h1>
              <h3>{currentLogement.location}</h3>
            </div>
          
            <div className='tag_container'>
              {tags.map((tag) => (<Tag key={tag} tag={tag} />))}
            </div>
          </div>

          <div className='rate_host_container'>
            <div className='host_container'>
              <Host hostName={hostName} hostPicture={hostPicture}  />
            </div>

            <div className='rate_container'>
              <Rate rating={currentLogement.rating} />
            </div>
          </div>  
        </section>
        <div className='collapse_container'>
            <Collapse aboutTitle="Description" aboutText={currentLogement.description} /> 
            <Collapse aboutTitle="Équipements" aboutText={equipement} />
          </div>
      </div>
    )
  }
  
  export default Logement