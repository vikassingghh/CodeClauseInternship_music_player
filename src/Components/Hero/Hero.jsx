import React from 'react'

const Hero = (props) => {
  return (
    <>
      {
        props.track.map((item)=>{
            return(
                <>
                <div className="flex justify-center items-center h-screen bg-black ">
                  <div className="max-w-xs rounded overflow-hidden shadow-lg">
                    <img className="w-full hover:scale-110 duration-500" src={item.album.images[0].url}  />
                    <div className="px-6 py-4">
                      <div className="font-bold text-white text-xl mb-2">{item.name}</div>
                      <p className="text-base text-white">{item.artists.name}</p>
                      <audio src={item.preview_url} controls className='w-100'></audio>
                    </div>
                  </div>
                </div>
                </>
            )
        })
      }
    </>
  )
}

export default Hero
