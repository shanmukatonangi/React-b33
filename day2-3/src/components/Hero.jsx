import React from 'react'
import Product from './Product'
import './hero.css'

const Hero = (props) => {
  

  //props.username=shanmukh
  return (
    <div id='hero'>
        <Product name={props.username} />
        <Product name="kalpana" />
        <Product name="vyshnavi" />
        <Product name='lakshmi'/>
      
    </div>
  )
}

export default Hero
