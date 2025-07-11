import React from 'react'
import './App.css'
import AllStudents from './components/AllStudents'

const App = () => {

  // let names=[ "John", "Doe", "Jane", "Smith"]

  let students=[{
    name: "John",
    class: "10th",
    age: 15
  },{
    name: "Doe",
    class: "12th",
    age: 17
  },{
    name: "Jane",
    class: "11th",
    age: 16
  },]
 return (
    <div>

      {/* {names.map((name)=><h1>{name}</h1>)} */}

<AllStudents students={students} />
     

     <button className='bg-sky-500 ' onClick={()=> alert("you have clicked me")}>Click Me</button>
      
    </div>
  )
}

export default App
