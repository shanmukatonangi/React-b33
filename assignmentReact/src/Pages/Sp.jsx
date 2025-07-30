import React from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';


const Sp = () => {

    let products=[
  {
    id: 1,
    name: 'Product Name 1',
    price: 100,
    category: 'Category A',
    rating: 4.5,
    image: 'https://m.media-amazon.com/images/I/61AkAm4EAML._AC_SY200_.jpg',
  },
  {
    id: 2,
    name: 'Product Name 2',
    price: 200,
    category: 'Category B',
    rating: 4.0,
    image: 'https://m.media-amazon.com/images/I/719-ckJZDvL._AC_SY200_.jpg',
  },
  {
    id: 3,
    name: 'Product Name 3',
    price: 300,
    category: 'Category A',
    rating: 4.5,
    image: 'https://m.media-amazon.com/images/I/61wZ84VJbvL._AC_SY200_.jpg',
  },
  {
    id: 5,
    name: 'Product Entri 3',
    price: 300,
    category: 'Category A',
    rating: 4.5,
    image: 'https://m.media-amazon.com/images/I/61wZ84VJbvL._AC_SY200_.jpg',
  },
  {
    id: 4,
    name: 'Product Name 4',
    price: 400,
    category: 'Category B',
    rating: 4.0,
    image: 'https://m.media-amazon.com/images/I/614N5-I3GtL._AC_SY200_.jpg',
    }

]

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
