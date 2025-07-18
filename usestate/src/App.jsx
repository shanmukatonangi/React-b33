import React, { useState } from 'react'
import { useRef } from 'react'
import Counter from './Counter'

const App = () => {
  // let contacts=["Vyshnavi","kalpana","joe","siva","karthik","sai","priya","sai"]

  let [contacts,setContacts]=useState(["Vyshnavi","kalpana","joe","siva","karthik","sai","priya","sai"])

  let inputvalue=useRef()

  function Save(){
    setContacts([...contacts,inputvalue.current.value])
  }
 return (
    <div>

      {/* <input type="text" placeholder='Search' ref={inputvalue}  />
      <button onClick={Save}>save</button>

      {contacts.map((contact)=><p style={{margin:"auto"}}>{contact}</p>)} */}

      <Counter />
      
    </div>
  )
}

export default App
