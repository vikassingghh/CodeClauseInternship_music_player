import React from 'react'
import logo from '../Images/logo.jpeg'
const Navbar = (props) => {
  return (
    <>
      <nav className="bg-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className='flex items-center gap-10'>
            <img className='w-12' src={logo} alt="" />
            <div className="text-white text-xl font-bold hidden md:block">Feel the Music</div>
        </div>
        <div className="flex items-center">
          
          <div className="ml-4">
            <input value={props.found} onChange={(event)=>props.forFound(event.target.value)} type="text" placeholder="Search..." className="px-3 py-2 rounded-md text-gray-800 bg-gray-300 focus:outline-none focus:bg-white focus:text-gray-900" />
            <button onClick={props.getTracks} className="bg-slate-200 hover:bg-white text-black ml-5 py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Search
            </button>
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar
