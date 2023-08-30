import AboutBanner from '../../components/AboutBanner'
import Collapse from '../../components/Collapse'
import aboutArray from '../../datas/aboutArray.json'

function About() {
  

    return (
      <div>
      <AboutBanner/>
      {aboutArray.map((data, id)=>(
        <Collapse key={id} aboutTitle={data.aboutTitle} aboutText={data.aboutText} aboutCollapse="about_collapse"/>
      ))}
      </div>
    )
  }
  
  export default About