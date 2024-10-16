import React, { useState } from 'react'
import SideNav from './SideNav'
import { Route, Router, Routes } from 'react-router-dom'
import Heading from '../Resume/Heading'

import Education from '../Resume/Education'
import Experience from '../Resume/Experience'
import Resumeview from '../Resume/Resumeview'
import Projects from '../Resume/Projects'
import { useSelector } from 'react-redux'
import Skills from '../Resume/Skills'
import Certification from '../Resume/Certification'

function Home() {
  const resumeData = useSelector((state) => state.resume);
  // all form data 

  

  return (
    <div className='grid grid-cols-12 h-screen justify-between'>
    <div className=' col-span-2 bg-red-500 h-full flex  '>
    <SideNav/>
    </div>
   
   <div className='col-span-10 md:col-span-7 flex-1 overflow-y-auto ps-28 sm:ps-20  md:ps-14 lg:ps-6'>
    
   <Routes>
    <Route path='heading' element={<Heading />}/>
    <Route path='education' element={<Education />}/>
    <Route path='experience' element={<Experience />}/>
    <Route path='skills' element={<Skills />}/>
    <Route path='projects' element={<Projects />}/>
    <Route path='certification' element={<Certification />}/>
   </Routes>
   
   </div>
   <div className='col-span-3 bg-white hidden md:block overflow-y-auto'>

        
        <Resumeview resumeData={resumeData}/>

        
   </div>
   </div>
  )
}

export default Home
