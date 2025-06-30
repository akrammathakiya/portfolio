import React from 'react'
import Card from "../Card/Card"
import "./Projects.css"
import va from "../../assets/va.png"
import fw from "../../assets/fw.png"
import cb from "../../assets/cb.png"
import tti from "../../assets/tti.png"
import br from "../../assets/br.png"
import ise from "../../assets/ise.png"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

const Projects = () => {
  useGSAP(() => {
    gsap.from("#para", {
      y: 100,
      duration: 2,
      opacity: 0,
      scrollTrigger: {
        trigger: "#para",
        start: "top 80%",
        end: "top 30%",
        scrub: true
      }
    });

    gsap.from(".slider", {
      y: 100,
      duration: 2,
      opacity: 0,
      scrollTrigger: {
        trigger: ".slider",
        start: "top 80%",
        end: "top 30%",
        scrub: true
      }
    });
  }, []);

  return (
    <div className='projects'>
      <h1 id='para'>1+ YEARS EXPERIENCE IN PROJECTS</h1>
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
