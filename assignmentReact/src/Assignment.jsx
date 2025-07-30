import React, { useRef, useState } from 'react'
import "./App.css"

const App = () => {
  let [products,setProducts] =useState( [
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

])
let searchfeild=useRef()

let [cart,setCart]=useState([])

function Addtocart(id){
  let product=products.find((product)=> product.id===id)
  setCart([...cart,product])
}

function SearchButton(){
  let searchvalue=searchfeild.current.value
  let filteredproducts=products.filter((product)=> product.name.trim(" ").toLowerCase().includes(searchvalue.trim(" ").toLowerCase()))
  // let filtprod=products.find((product)=>product.name.trim(" ").toLowerCase() ===searchvalue.trim(" ").toLowerCase())
  setProducts([...filteredproducts])
  console.log(filteredproducts)
  
 searchfeild.current.value=""
 
}

function High(){
  let sortedproducts=products.sort((a,b)=>b.price-a.price)
  console.log(sortedproducts)
  setProducts([...sortedproducts])
}

function Low(){
  let sortedproducts=products.sort((a,b)=>a.price-b.price)
  console.log(sortedproducts)
  setProducts([...sortedproducts])
}

// products.sort((a,b)=>a.name.localeCompare(b.name))



  return (
    <div>
      <input placeholder='search items' ref={searchfeild} onChange={(e)=>e.preventDefault()} />
      <button onClick={()=>SearchButton()}>Search</button>

      <button onClick={High}>High</button>
      <button onClick={Low}>Low</button>

      <div className='card border ' style={{height:"400px",width:"800px",overflow:"scroll"}}>
        {cart.map((ca)=>( <div className='card'>
          <img src={ca.image} alt={ca.name} />
          <h2>{ca.name}</h2>
          <p>Price: ${ca.price}</p>
          <p>Category: {ca.category}</p>
          <p>Rating: {ca.rating}/5</p>
          


        </div>))}
      </div>

     <div className="container border m-auto" style={{display:'grid',gridTemplateColumns:"auto auto",margin:"auto"}}>
       {products.map((product)=>(
        <div className='card' key={product.id}>
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p>Price: ${product.price}</p>
          <p>Category: {product.category}</p>
          <p>Rating: {product.rating}/5</p>
          <button onClick={()=>Addtocart(product.id)}>Add to cart</button>


        </div>
      ))}
      
     </div>
    </div>
  )
}

export default App
