import React from 'react'
import "./Contact.css"
import contact from "../../assets/contact.png"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useGSAP } from "@gsap/react"
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  useGSAP(() => {
  gsap.from(".leftcontact img", {
    x: -100,
    duration: 1,
    opacity: 0,
    stagger: 1,
    scrollTrigger: {
      trigger: ".leftcontact img",
      start: "top 60%",
      end: "top 30%",
      scrub: true
    }
  });

  gsap.from("form", {
    x: 100,
    duration: 1,
    opacity: 0,
    stagger: 1,
    scrollTrigger: {
      trigger: "form",
      start: "top 60%",
      end: "top 30%",
      scrub: true
    }
  });
},[])
  return (
    <div className='contact'>
      <div className="leftcontact">
        <img src={contact} alt="" />
      </div>
      <div className="rightcontact">
        <form action="https://formspree.io/f/myzjoegn" method='POST'>
            <input name='Username' type="text" placeholder='Name'/>
            <input name='Email' type="email" placeholder='Email'/>
            <textarea name="message" id="textarea" placeholder='Message Me'></textarea>
            <input type="submit" id='btn' value="Submit"/>
        </form>
      </div>
    </div>
  )
}

export default Contact
