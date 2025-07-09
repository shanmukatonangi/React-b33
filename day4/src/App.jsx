// import React from 'react'

// const App = () => {
//   let user="shanmukh"

//   if(user){
//     return (
//     <div>

//       <h1>Hi {user}</h1>
      
//     </div>
//   )
//   }else{
//     return (
//     <div>

//       <h1>Hi User</h1>
      
//     </div>
//   )
//   }

  
// }

// export default App

// import React from 'react'

// const App = () => {
//   let user

//   return (
//     <div>
//       {user ?<h1>hi {user}</h1> : <h1>hi User</h1>}

      
//     </div>
//   )
// }

// export default App


// function Shanmukh(){
// console.log("Hello Shanmukh")
// }
// Shanmukh()

// const Shanmukh = () =>{
//   console.log("Hello Shanmukh")
// }
// Shanmukh()

import React from 'react'
import './App.css'

const App = () => {
  let user
  return (
    <div>

      {user && <h1 class="text-3xl font-bold underline">Hi {user}</h1>}

      {!user && <h1 class="text-3xl font-bold underline">
    Hello world!

    <div class="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
  <img class="size-12 shrink-0" src="https://cdn-icons-png.flaticon.com/128/724/724715.png" alt="ChitChat Logo" />
  <div>
    <h1 class="text-xl font-medium text-black dark:text-white">ChitChat</h1>
    <p class="text-gray-800 text-sm ">You have a new message!</p>
  </div>
</div>
  </h1>}

  <button class="bg-sky-500 hover:bg-sky-700 p-2 rounded-xl text-white">Save changes</button>
      
    </div>
  )
}

export default App
