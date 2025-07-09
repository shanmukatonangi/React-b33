import React from 'react'
import './products.css'

const Product = (props) => {
  console.log(props)
  return (
    <div id='product'>

      <h1>{props.name}</h1>
      
    </div>
  )
}

export default Product
