import React from 'react'
import '../App.css'

const Box = ({student}) => {
  return (
    <div>


        
        <div className='border-2 border-gray-300 p-4 m-2 rounded-lg shadow-lg'>
          <h1 className='text-xl font-light'>{student.name}</h1>
          <p>Class:10 {student.class}</p>
          <p>Age: 15 {student.age}</p>


        </div>
      
      
    </div>
  )
}

export default Box
