import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero';

function App() {
  const [found, getfound] = useState("");
  const forFound = (value) => {
    getfound(value);

    // console.log(value)
  }
  const[track, settrack] = useState([]);
  const getTracks = async() => {
    let data = await fetch(`https://v1.nocodeapi.com/vikassingghh25/spotify/tXoWbrBRmJVBGulx/search?q=${found}&type=track&page=20`);
    let conData = await data.json();
    settrack(conData.tracks.items);
    console.log(conData.tracks.items);
  } 

  return (
    <>
    <Navbar getTracks={getTracks} forFound={forFound} found={found}/>
    <div className='grid grid-cols-1 lg:grid-cols-3 mt-20 gap-20'>
    <Hero track={track}/>

    </div>
    
    </>
  )
}

export default App
