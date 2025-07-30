import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Pages/Home';
import Product from './Pages/Product';
import Singleproductpage from './Pages/Singleproductpage';

const App = () => {

  let products=[
    {id:1,
      name:"Adidas Shoes",
      price: 100,
      description: "High quality running shoes",
      image: "https://example.com/adidas-shoes.jpg"
    },
    {id:2,
      name:"Nike T-Shirt",
      price: 50,
      description: "Comfortable cotton t-shirt",
      image: "https://example.com/nike-tshirt.jpg"
    },
    {id:3,
      name:"Puma Shorts",
      price: 30,
      description: "Lightweight sports shorts",
      image: "https://example.com/puma-shorts.jpg"  
    },
    {id:4,
      name:"Reebok Jacket",
      price: 80,
      description: "Warm and stylish jacket",
      image: "https://example.com/reebok-jacket.jpg"
    }
  ]



  return (
    <Router>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product products={products} />} />
        <Route path="/product/:id" element={<Singleproductpage products={products} />} />


      </Routes>




      </Router>
    
  )
}

export default App
