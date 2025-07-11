import React from 'react'
import '../App.css'
import Box from './Box'

const AllStudents = ({students}) => {
    console.log(students);
  return (
    <div>

        {students.map((student)=>( <div className='border-2 border-gray-300 p-4 m-2 rounded-lg shadow-lg'>
          <h1 className='text-xl font-light'>{student.name}</h1>
          <p>Class: {student.class}</p>
          <p>Age: {student.age}</p>


        </div>))}
      
    </div>
  )
}

export default AllStudents
