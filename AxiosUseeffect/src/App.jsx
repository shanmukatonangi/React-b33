import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import { FaRegHeart } from "react-icons/fa";

const App = () => {
  let [posts,setPosts]=useState([])


  useEffect(()=>{
    axios.get("https://dummyjson.com/posts").then((response)=>setPosts(response.data.posts))
  },[])

  console.log(posts)

  

  return (
    <div style={{display:"grid", gridTemplateColumns:"auto auto auto auto", gap:"20px", padding:"20px"}}>

      {posts.map((post)=>(
        <div className='border-1 border-light m-2 p-2 rounded' key={post.id} >

          <h1 className='text-2xl font-normal'>{post.title}</h1>
          <p className='text-lg font-light'>{post.body}</p>
          <FaRegHeart className='text-red-500 text-2xl' /><span>{post.reactions.likes}</span>
          
          


        </div>

      ))}

      {/* <h1>{posts[0].title}</h1> */}
      hi
    </div>
  )
}

export default App
