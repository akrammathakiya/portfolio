import React from "react";
import "./Home.css";
import man from "../../assets/man.png";
import Typewriter from "typewriter-effect";
import { Button } from "react-scroll";
import { useGSAP } from '@gsap/react'
import gsap from "gsap"



const Home = () => {
  useGSAP(()=>{
  let tl1 = gsap.timeline();
  tl1.from(".lineone",{
    y:80,
    duration:1,
    opacity:0
  })
    tl1.from(".linetwo",{
    y:80,
    duration:1,
    opacity:0
  })
    tl1.from(".linethree",{
    y:80,
    duration:1,
    opacity:0
  })
  gsap.from(".righthome img",{
    x:200,
    duration:1,
    opacity:0
  })
},[])
  return (
    <div className="home">
      <div className="lefthome">
        <div className="homedetails">
          <div className="lineone">I'M</div>
          <div className="linetwo">AKRAM MATHAKIYA</div>
          <div className="linethree">
            <Typewriter
              options={{
                strings: ["WEB DEVELOPER", "SOFTWARE DEVELOPER", "EDITOR"],
                autoStart: true,
                loop: true,
                delay: 100,
                deleteSpeed: 50,
                cursor: "|",
              }}
            />
          </div>
          <Button>HIRE ME</Button>
        </div>
      </div>
      <div className="righthome">
        <img src={man} alt="" />
      </div>
    </div>
  );
};

export default Home;
