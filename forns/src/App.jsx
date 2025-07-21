import React, { useRef, useState } from 'react'
import './App.css'

const App = () => {
  let emailinp=useRef()
  let passinp=useRef()
  let [passtype,setPasstype]=useState('password')

  let [errors,setErrors]=useState({})

  function Submit(e) {
    e.preventDefault()
    let email = emailinp.current.value
    let pass = passinp.current.value

    if( email === '' && pass === '') {
      setErrors({email: 'Email is required', pass: 'Password is required'})
      
    }else if(email === '') {
      setErrors({email: 'Email is required', pass: ''})
    }else if(pass === '') {
      setErrors({email: '', pass: 'Password is required'})
    }else if(!email.includes('@')) {
      setErrors({email: 'Invalid email format', pass: ''})
    }else if(email.legth<9) {
      setErrors({email: 'Email must be at least 9 characters', pass: ''})
    }else if(pass.length < 6) {
      setErrors({email: '', pass: 'Password must be at least 6 characters'})
    }
    else if(!pass.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/)) {
      setErrors({email: '', pass: 'Password must contain at least one uppercase letter, one lowercase letter, and one number'})
    }
 }


 function Eye(){
  setPasstype(passtype === 'password' ? 'text' : 'password')
  

 }
  return (
    <div>

      <form className="bg-sky-100 p-6 rounded-lg shadow-md m-auto d-flex h-75 w-50 g-5" style={{height: '45vh', width: '20vw',display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: 'auto'}}>
  <label className='text-2xl font-bold mb-4' for='email'>Email:</label>
        <input type='email' className='border' id='email' ref={emailinp} />
        <p className='text-red-500'>{errors.email}</p>
        <label className='text-2xl font-bold mb-4'for="pass">Pass:</label>
        <input className='border' type={passtype} id='pass' ref={passinp} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" />
       <p className='text-red-500'>{errors.pass}</p>
       <p onClick={Eye}>eye</p>
        

        <button className="bg-sky-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={Submit} >
          Submit
        </button>






      </form>
      


    </div>
  )
}


export default App
