import React from 'react'
import './Navbar.css'

const Navbar = (props) => {

// console.log(props.username) // {jfjsdfjh: "Shanmukh"}

// let props={
//   jfjsdfjh: "Shanmukh"
// }

  return (
    <div id='navbar'>
      <a>{props.username}</a>

        <a href="">Home</a>
        <a href="">Hero</a>
        <a href="">About</a>
        <a href="">Contact</a>

        
      
    </div>
  )
}

export default Navbar
