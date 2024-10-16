import React, { useEffect, useReducer, useRef } from 'react'
import Footer from './Footer'

import darkmodeImg from '../src/Assets/darkmode.png';
import tradition from '../src/Assets/tradition.png';
import modern from '../src/Assets/modern.png'
import template3 from '../src/Assets/template3.png'
import template4 from '../src/Assets/template4.png'
import { useSelector } from 'react-redux';
import Template5 from './Templates/Template5';
import Template1 from './Templates/Template1';
import Template2 from './Templates/Template2';
import Template3 from './Templates/Template3';
import ResumePDF from './Templates/Tradition';
import { Link } from 'react-router-dom';
function Dashboard() {

  // const templates ={
  //   temlate1:tradition,
  //   tempate2:modern,
  //   template3,
  //   template4,
  //   template5:darkmodeImg

  // }
  const resumeData = useSelector((state) => state.resume);
  const templates = { Tradition: ResumePDF, Template1, Template2,Template3, Template5, Template5 };

  const storedTemplate = localStorage.getItem('selecttemp') || 'Tradition';
  const initialTemplate = templates[storedTemplate];

  const templateRef = useRef(initialTemplate);
  const scrollRef = useRef(null);
  const [, forceUpdate] = useReducer(x => x + 1, 0);

  useEffect(() => {
      templateRef.current = templates[storedTemplate];
      console.log("Current template on mount:", templateRef.current);
  }, [storedTemplate]);

  const changetemp = (tempName) => {
      console.log("Changing to template:", tempName);
      if (templates[tempName]) {
          templateRef.current = templates[tempName];
          localStorage.setItem('selecttemp', tempName);
          forceUpdate();

      } else {
          console.error("Invalid template name:", tempName);
      }
  };

  const scrollLeft = () => {
      if (scrollRef.current) {
          scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
      }
  };

  const scrollRight = () => {
      if (scrollRef.current) {
          scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
      }
  };

  const templateProp = storedTemplate === 'Modern' ? 'darkMode' : 'elegant';

  // if (!templateRef.current) {
  //     return <div>Error: Template not found</div>;
  // }

  return (
    <div className='font-sans w-full text-center '>
      <div className='bg-gradient-to-r from-cyan-500 to-blue-500 h-64 justify-center flex items-center w-full'>

      <div className= '' >

      <h1 className='font-bold font-sans text-2xl text-red-500 border border-red-400 p-4 border-r-8  border-l-8 '>Welcome to the resume builder
        build your resume here
      </h1><br/>
      <button className='rounded-lg p-3 px-7 hover:border-yellow-200 border border-red-500 text-white '>Lets Start</button>
      </div>
      </div>
      {/* select Te        mplates */}
      <div className='p-5 grid grid-cols-12'>
      <h1 className='col-span-12 font-bold font-sans text-2xl text-blue-500 border border-blue-400 p-4 border-r-8  border-l-8 '>
        Select The Template to build
      </h1>
      {/* {Object.entries(templates).map(([key, temp]) => (
        <div key={key} className=" border border-blue-300 rounded-sm p-2 m-2 col-span-6 md:col-span-3 hover:border-red-400">
          <div className='relative -z-50'>
            <img  src={temp} alt={key} className="template-image w-full shadow-md  rounded p-3 -z-10  " />
            <div className="absolute inset-0 flex items-center justify-center  hover:cursor  bg-opacity-50 transition-opacity duration-300 ease-in-out">
              
            <button className=' -z-0  border border-red-400 px-10 p-3  hover:cursor-auto'>Choose</button>
            </div>
          </div>
          
          </div>
        ))} */}
      </div>
      {/* <Footer/> */}




      
            {/* <h1 className='border border-blue-200 p-2 text-center rounded-lg mb-1'>Choose Template</h1> */}
            <div className="flex items-center">
    <button onClick={scrollLeft} className="p-2 text-2xl">&larr;</button>
    
    <div
        className="flex overflow-x-auto space-x-4 p-2 border border-gray-300 rounded-lg scrollbar-hide"
        style={{ scrollBehavior: 'smooth', width: '1500px' }}
        ref={scrollRef}
    >
      
       <Link to='/resume/heading'> <img
            src={tradition}
            alt='Tradition Template'
            className='cursor-pointer border-2 border-gray-300 hover:border-blue-500 rounded-lg'
            onClick={() => changetemp('Tradition')}
            style={{ width: '300px', height: '200px' }}
        /></Link>
      <Link to='/resume/heading'>   <img
            src={modern}
            alt='Modern Template'
            className='cursor-pointer border-2 border-gray-300 hover:border-blue-500 rounded-lg'
            onClick={() => changetemp('Template1')}
            style={{ width: '300px', height: '200px' }}
        /></Link>
       <Link to='/resume/heading'>  <img
            src={darkmodeImg}
            alt='Template 2'
            className='cursor-pointer border-2 border-gray-300 hover:border-blue-500 rounded-lg'
            onClick={() => changetemp('Template2')}
            style={{ width: '300px', height: '200px' }}
        /></Link>
        <Link to='/resume/heading'> <img
            src={template3}
            alt='Template 3'
            className='cursor-pointer border-2 border-gray-300 hover:border-blue-500 rounded-lg'
            onClick={() => changetemp('Template3')}
            style={{ width: '300px', height: '200px' }}
        /></Link>
         <Link to='/resume/heading'> <img
            src={template4}
            alt='Template 4'
            className='cursor-pointer border-2 border-gray-300 hover:border-blue-500 rounded-lg'
            onClick={() => changetemp('Template4')}
            style={{ width: '300px', height: '200px' }}
        /></Link>
        <Link to='/resume/heading'>  <img
            src={template4}
            alt='Template 5'
            className='cursor-pointer border-2 border-gray-300 hover:border-blue-500 rounded-lg'
            onClick={() => changetemp('Template5')}
            style={{ width: '300px', height: '200px' }}
        /></Link>
    </div>
    <button onClick={scrollRight} className="p-2 text-2xl">&rarr;</button>
</div>
    </div>
  )
}

export default Dashboard
