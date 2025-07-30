import React from 'react'
import { Link } from 'react-router-dom';

const Product = ({products}) => {

  console.log(products);
  return (
    <div>

      {products.map((product)=>(
        <Link to={`/product/${product.id}`} key={product.id}>
          <h2>{product.name}</h2>
          <p>Price: ${product.price}</p>
          <p>{product.description}</p>
          <img src={product.image} alt={product.name} style={{width: '200px', height: '200px'}} />
          <hr />
        </Link>
      ))}
     
    </div>
  )
}

export default Product
