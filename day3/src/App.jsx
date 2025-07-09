import React from 'react'
import Box from './components/Box'
import './App.css'

const App = () => {

  let img1="https://m.media-amazon.com/images/I/61Ix+r8wtDL._AC_SY200_.jpg";
   let img2="https://m.media-amazon.com/images/I/710g0n5gXTL._AC_SY200_.jpg";
   let img3="https://m.media-amazon.com/images/I/71qimMnXNoL._AC_SY200_.jpg";
   let img4="https://m.media-amazon.com/images/I/71-DmGe75fL._AC_SY200_.jpg";
   let img5="https://m.media-amazon.com/images/I/815vi+Sg2xL._AC_SY200_.jpg"
   let img6="https://m.media-amazon.com/images/I/71qimMnXNoL._AC_SY200_.jpg";

  let name="Shanmukh"
  


  return (
    <div id='container'>

      <Box img={img1} />
      <Box img={img2} />
      <Box img={img3} />
      <Box img={img4}/>
      <Box img={img5} />
      <Box img={img6} />
   
    </div>
  )
}

export default App
