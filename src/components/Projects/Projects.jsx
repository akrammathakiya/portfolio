import React from 'react'
import Card from "../Card/Card"
import "./Projects.css"
import va from "../../assets/va.png"
import fw from "../../assets/fw.png"
import cb from "../../assets/cb.png"
import tti from "../../assets/tti.png"
import br from "../../assets/br.png"
import ise from "../../assets/ise.png"

const Projects = () => {
  return (
    <div className='projects'>
      <h1 id='para'>1+ YEARS EXPERIENCE IN  PROJECTS</h1>
      <div className="slider">
        <Card title="VIRTUAL ASSISTANCE" image={va}/>
        <Card title="AI POWERED FITNESS WEBSITE" image={fw}/>
        <Card title="AI CHAT BOAT" image={cb}/>
        <Card title="AI TEXT TO IMAGE" image={tti}/>
        <Card title="AI BACKGROUND REMOVER" image={br}/>
        <Card title="IMAGE SEARCH ENGINE" image={ise}/>
        
      </div>
    </div>
  )
}

export default Projects
