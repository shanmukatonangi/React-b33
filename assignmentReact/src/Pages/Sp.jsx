import React from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';


const Sp = () => {

let products = JSON.parse(localStorage.getItem('products'))  

    const { id } = useParams();

    let product=products.find((product)=> product.id===parseInt(id))
    console.log(product)

  return (
    <div>
        <Navbar />

        <h1>Product Details</h1>
        <h2>{product?.name}</h2>
        <p>Price: ${product.price}</p>
        <p>Category: {product.category}</p>
        <p>Rating: {product.rating}</p>
        <img src={product.image} alt={product.name} style={{ width: '200px', height: '200px' }} />
        <p>Description: This is a detailed description of {product.name}.</p>


      
    </div>
  )
}

export default Sp
