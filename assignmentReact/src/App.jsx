import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Errorpage from './Pages/Errorpage';
import Sp from './Pages/Sp';

const App = () => {
  return (
    <Router>
        <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/product/:id' element={<Sp />} />
            {/* <Route path='/about' element={<About />} />
            <Route path='*' element={<h1></h1>} /> */}




        </Routes>



    </Router>
    
  )
}

export default App
