import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import { useState } from 'react'

const App = () => {
  let [loader,setLoader]=useState(true)


  setTimeout(()=>{
    setLoader(false)
  },3000)
  return (
    <>

    {loader ? <h1>Loading</h1> : <div>

    <Navbar />
    <Hero />
    <Gallery />

    <Footer />
      
    </div>}
    
    
    
    </>
  )
}

export default App
