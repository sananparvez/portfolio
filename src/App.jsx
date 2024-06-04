import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import About from  './Components/About/About'
import Contact from './Components/Contact/Contact'
import MyWork from './Components/MyWork/MyWork'
import Footer from './Components/Footer/Footer'
import Hero from './Components/Hero/Hero'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <MyWork/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
