import React, { useState } from 'react'

import { IoClose } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import { Link } from 'react-router-dom';
function Navbar() {
    
    const [open,setOpen]=useState(true)
  return (
    <div className='sticky top-0   w-full'><img className='h-14 absolute z-50 pl-10 mt-1' src='https://play-lh.googleusercontent.com/6d0URXxFDuw9jcfD31ulFdUgsKiocnogHDwxuX2ttkGPHx3ZkSvvmZnN2xhpslLyc-g' alt='resume-logo'/>
      <div className=' z-40 relative px-10 bg-gray-600 text-blue-300 h-16 flex items-start justify-center   border-black border-b-2'>
          
          <nav className=" hidden md:flex flex-row space-x-8 mt-4  ">
            <Link to="/" className="text-blue-400">Home</Link>
            <Link to="resume/heading" className="text-white">Resume</Link>
            <a href="#" className="text-white">Services</a>
            <a href="/contact" className="text-white">Contact</a>
          </nav>
          
          <button
            onClick={()=>setOpen(!open)}
            className="text-blue-600 focus:outline-none text-3xl mt-3 fixed right-5 z-10 md:hidden"
          >
            
            {open?<IoIosMenu/>:<IoClose/>}
          </button>
          <div
        className={`fixed top-0 p-9 pt-9 right-0 h-full w-64 bg-gray-800 transform ${
          open ? 'translate-x-full':'translate-x-0' 
        } transition-transform duration-700 ease-in-out md:hidden`}
      >
        <div>
          <nav className="flex flex-col space-y-2 mt-7">
            <a href="/" className="text-white">Home</a>
            <a href="/" className="text-white">About</a>
            <a href="/" className="text-white">Services</a>
            <a href="/contact" className="text-white">Contact</a>
          </nav>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Navbar
