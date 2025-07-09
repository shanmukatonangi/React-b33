import React from 'react'
import '../App.css'

const Navbar = () => {
  return (
    <div>
   <div className='fixed w-380 top-0 bg-transparent flex justify-between items-center p-4 z-500'>

    <img src='https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg' className='size-20' />

    <div className='flex justify-around items-center space-x-4 w-100 '>
        <p>About us</p>
        <p>Contact us</p>
        <p>Blog</p>
        <p>Careers</p>
    </div>
 </div>
</div>
  )
}

export default Navbar
