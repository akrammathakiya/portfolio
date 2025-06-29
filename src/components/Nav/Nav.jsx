import React from 'react'
import "./Nav.css"
import { Link } from 'react-scroll'
const Nav = () => {
  return (
    <nav>
      <h1>PORTFOLIO</h1>
      <ul>
        <Link to="home" activeClass='active' spy={true} smooth={true} duration={500}><li>Home</li></Link>
        <Link to="about" activeClass='active' spy={true} smooth={true} duration={500}><li>About</li></Link>
        <Link to="projects" activeClass='active' spy={true} smooth={true} duration={500}><li>Projects</li></Link>
        <Link to="contact" activeClass='active' spy={true} smooth={true} duration={500}><li>Contact</li></Link>
      </ul>
    </nav>
  )
}

export default Nav
