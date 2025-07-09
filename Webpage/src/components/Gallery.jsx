import React from 'react'
import '../App.css'

const Gallery = () => {
  return (
    <div>
        <div className='bg-stone-800 h-200 z-800 w-380 absolute top-200 flex justify-around items-center flex-wrap p-4'>

        <div className='bg-[url("https://wallpaperbat.com/img/53664-pretty-iphone-wallpaper-travel-photography-phone-wallpaper.jpg")] bg-cover bg-center size-100 h-150'></div>
        <div className='bg-[url("https://wallpaperbat.com/img/301049-beautifulcelebrities-egypt-film-museums-in-2020-airplane.jpg")] bg-cover bg-center size-100 h-150'></div>
        <div className='bg-[url("https://wallpaperbat.com/img/133270-phone-wallpaper-sky-aesthetic-travel-wallpaper-sunset-wallpaper.jpg")] bg-cover bg-center size-100 h-150'></div>

      
    </div>

    <h1 className='text-9xl text-white absolute top-280 z-999 left-130 font-light'>Dreams</h1>
    </div>
  )
}

export default Gallery
