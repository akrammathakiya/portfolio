import React from 'react'
import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './components/Projects/Projects'

const App = () => {
  return (
    <div>
      <Nav/>
      <Home/>
      <About/>
      <Projects/>
    </div>
  )
}

export default App
