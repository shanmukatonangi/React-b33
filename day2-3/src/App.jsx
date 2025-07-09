import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'

const App = () => {

  let name="Shanmukh"


  return (
    <div>
      <Navbar username={name} />
      <Hero username={name} />
      <Footer />
      
    </div>
  )
}

export default App
