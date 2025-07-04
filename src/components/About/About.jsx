import React from "react";
import "./About.css";
import Card from "../Card/Card";
import mern from "../../assets/mern.png";
import github from "../../assets/github.png";
import postman from "../../assets/postman.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
useGSAP(() => {
  gsap.from(".circle", {
    x: -100,
    duration: 1,
    opacity: 0,
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".circleline",
      start: "top 60%",
      end: "top 30%",
      scrub: true
    }
  });

  gsap.from(".line", {
    x: -100,
    duration: 1,
    opacity: 0,
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".circleline",
      start: "top 60%",
      end: "top 30%",
      scrub: true
    }
  });

  gsap.from(".aboutdetails h1", {
    x: -100,
    duration: 1,
    opacity: 0,
    stagger: 0.5,
    scrollTrigger: {
      trigger: ".aboutdetails",
      start: "top 60%",
      end: "top 30%",
      scrub: true
    }
  });

  gsap.from(".aboutdetails ul li", {
    y: 100,
    duration: 1,
    opacity: 0,
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".aboutdetails",
      start: "top 60%",
      end: "top 30%",
      scrub: true
    }
  });

  gsap.from(".rightabout", {
    x: 100,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
      trigger: ".rightabout",
      start: "top 60%",
      end: "top 30%",
      scrub: true
    }
  });
}, []);


  return (
    <div className="about">
      <div className="leftabout">
        <div className="circleline">
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
        </div>
        <div className="aboutdetails">
          <div className="personalinfo">
            <h1>Personal Info</h1>
            <ul>
              <li><span>NAME</span>: AKRAM MATHAKIYA</li>
              <li><span>AGE</span>: 21 Years</li>
              <li><span>GENDER</span>: MALE</li>
              <li><span>LANGUAGE KNOW</span>: GUJARATI, HINDI, ENGLISH</li>
            </ul>
          </div>
          <div className="education">
            <h1>Education</h1>
            <ul>
              <li><span>DEGREE</span>: BCA (BACHELOR OF COMPUTER APPLICATION)</li>
              <li><span>CGPA</span>: 8.60</li>
              <li><span>12ᵗʰ(HSEB)</span>: 74.83%</li>
              <li><span>10ᵗʰ(GSEB)</span>: 77.67%</li>
            </ul>
          </div>
          <div className="Skills">
            <h1>Skills</h1>
            <ul>
              <li>MERN STACK WEB DEVELOPER</li>
              <li>GIT AND GITHUB</li>
              <li>POSTMAN FOR API TESTING</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="rightabout">
        <Card title="MERN STACK WEB DEVELOPER" image={mern} />
        <Card title="VERSION CONTROL SYSTEM (GIT & GITHUB)" image={github} />
        <Card title="POSTMAN & API TESTING" image={postman} />
      </div>
    </div>
  );
};

export default About;
