import React from 'react'
import { useParams } from 'react-router-dom';

const Singleproductpage = ({products}) => {

    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));
    console.log(product);
    
  return (
    <div>
        <h1>Single Product Page</h1>
        <p>Product ID: {id}</p>
        <h1>{product.name}</h1>
        <p>Price: ${product.price}</p>
        <p>{product.description}</p>
        




      
    </div>
  )
}

export default Singleproductpage
