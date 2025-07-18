import React, { useEffect, useState } from 'react'

const Counter = () => {
    // let count=0
let [count,setCount]=useState(0)
    function Add(){
        // count=count+1

        setCount(count+1)
        console.log(count)

    }


    function Sub()
    {
        setCount(count-1)
        console.log(count)


    }

    useEffect(()=>{
        document.title=`Count is ${count}`

    }, [count])




  return (
    <div>
      <button onClick={Add}>Increment</button>
        <button onClick={Sub}>Decrement</button>
        <h1>{count}</h1>
    </div>
  )
}

export default Counter
