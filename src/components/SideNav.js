import React from 'react'
import { Link, useParams } from 'react-router-dom'

function SideNav() {
  const { '*': currentPage } = useParams(); 
  
  return (
    <div className="fixed  top-16 flex-shrink-0 w-52 h-screen flex flex-col items-start bg-gray-900 text-white p-6 space-y-6">
      <h1 className={`text-2xl text-white font-bold`}>Resume</h1>
       
      <div className={`flex items-center space-x-4 `}>
        <div className={`w-8 h-8 flex items-center justify-center rounded-full ${currentPage==='heading'?"bg-white text-gray-900":"border-2 border-white text-white"}  font-bold`}>1</div>
        <Link to={'heading'} >Heading</Link>
      </div>
      <div className="flex items-center space-x-4">
      <div className={`w-8 h-8 flex items-center justify-center rounded-full ${currentPage==='education'?"bg-white text-gray-900":"border-2 border-white text-white"} font-bold`}>2</div>
        <Link to={'education'}>Education</Link>
      </div>
      <div className="flex items-center space-x-4">
        <div className={`w-8 h-8 flex items-center justify-center rounded-full ${currentPage==='experience'?"bg-white text-gray-900":"border-2 border-white text-white"} font-bold`}>3</div>
        <Link to={'experience'}>Experience</Link>
      </div>
      <div className="flex items-center space-x-4">
        <div className={`w-8 h-8 flex items-center justify-center rounded-full ${currentPage==='skills'?"bg-white text-gray-900":"border-2 border-white text-white"} font-bold`}>4</div>
        <Link to={'skills'}>Skills</Link>
      </div>
      <div className="flex items-center space-x-4">
        <div className={`w-8 h-8 flex items-center justify-center rounded-full ${currentPage==='certification'?"bg-white text-gray-900":"border-2 border-white text-white"} font-bold`}>5</div>
        <Link to={'certification'}>Certification</Link>
      </div>
      <div className="flex items-center space-x-4">
        <div className={`w-8 h-8 flex items-center justify-center rounded-full ${currentPage==='projects'?"bg-white text-gray-900":"border-2 border-white text-white"} font-bold`}>6</div>
        <Link to={'projects'}>Projects</Link>
      </div>
    </div>
  )
}

export default SideNav
