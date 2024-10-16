import React, { useState } from 'react'


import Resumeview from './Resumeview';
import { FaArrowRight } from "react-icons/fa";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { updatePersonalInfo } from '../components/Redux/resumeSlice';
import { Link } from 'react-router-dom';
function Heading() {
   
    // console.log(data)

    const dispatch = useDispatch();
  const personalInfo = useSelector((state) => state.resume.personalInfo);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updatePersonalInfo({
      ...personalInfo,
      [name]: value,
    }));
  };
   
    // form submission
    const submitform=(e)=>{
        e.preventDefault()
       
    
       
    }
  return (
    <div className='justify-start break-words grid grid-cols-12 '>
        <div className='col-span-12 px-6 '>
            <h1 className='text-3xl font-serif font-bold '>What’s the best way for employers to contact you?</h1>
            <h3 className='mt-2'>We suggest including an email and phone number.</h3>

            <div className='mt-4 '>
                <p className='font-semibold'>* indicates a required field</p>
                <form className='grid grid-cols-12 justify-between gap-8 mt-4' 
                // onSubmit={submitform}
                >
                <label className='block text-sm font-medium text-gray-700 col-span-8 md:col-span-5'>
                    First Name *
                    <br/>
                    <input 
                        className='mt-1 p-2 border border-cyan-400 rounded w-full ' 
                        placeholder='Enter Name'
                        name="firstname"
                        value={personalInfo.firstname || ''}
                        onChange={handleChange}
                        
                    />
                </label>
                <label className='block text-sm font-medium text-gray-700 col-span-8 md:col-span-5  '>
                    Last Name
                    <br/>
                    <input 
                        className='mt-1 p-2 border border-cyan-400 rounded w-full' 
                        placeholder='Enter Surename'
                        
                        
                        name="surename"
                        value={personalInfo.surename || ''}
                        onChange={handleChange}
                        
                    />
                </label>
                <label className='block text-sm font-medium text-gray-700 col-span-8 md:col-span-10 '>
                    Profession
                    <br/>
                    <input 
                        className='mt-1 p-2 border border-cyan-400 rounded w-full' 
                        placeholder='Enter Profession'
                        name="profession"
                        value={personalInfo.profession || ''}
                        onChange={handleChange}
                    />
                </label>
                <label className='block text-sm font-medium text-gray-700 col-span-8 md:col-span-5'>
                    Email
                    <br/>
                    <input 
                        className='mt-1 p-2 border border-cyan-400 rounded w-full ' 
                        placeholder='Enter Email'
                        name="email"
                        value={personalInfo.email || ''}
                        onChange={handleChange}
                    />
                </label>
                <label className='block text-sm font-medium text-gray-700 col-span-8 md:col-span-5  '>
                    Phone Number
                    <br/>
                    <input 
                        className='mt-1 p-2 border border-cyan-400 rounded w-full' 
                        placeholder='Enter Phone Number'
                        name="phonenumber"
                        value={personalInfo.phonenumber || ''}
                        onChange={handleChange}
                    />
                </label>
                <label className='block text-sm font-medium text-gray-700 col-span-8 md:col-span-5'>
                    Linkedin profile
                    <br/>
                    <input 
                        className='mt-1 p-2 border border-cyan-400 rounded w-full' 
                        placeholder='linkedin link'
                        name="linkedin"
                        value={personalInfo.linkedin || ''}
                        onChange={handleChange}
                    />
                </label>
                <label className='block text-sm font-medium text-gray-700 col-span-8 md:col-span-5'>
                    Github link
                    <br/>
                    <input 
                        className='mt-1 p-2 border border-cyan-400 rounded w-full' 
                        placeholder='Github link'
                        name="github"
                        value={personalInfo.github || ''}
                        onChange={handleChange}
                    />
                </label>
                <label className='block text-sm font-medium text-gray-700 col-span-8 md:col-span-5'>
                   Personal Portfolio
                    <br/>
                    <input 
                        className='mt-1 p-2 border border-cyan-400 rounded w-full' 
                        placeholder='Portfolio'
                        name="portfolio"
                        value={personalInfo.portfolio || ''}
                        onChange={handleChange}
                    />
                </label>


                <label className='block text-sm font-medium text-gray-700 col-span-8 md:col-span-5'>
                    City
                    <br/>
                    <input 
                        className='mt-1 p-2 border border-cyan-400 rounded w-full ' 
                        placeholder='Ex Hyderabad'
                        name="city"
                        value={personalInfo.city || ''}
                        onChange={handleChange}
                    />
                </label>
                <label className='block text-sm font-medium text-gray-700 col-span-8 md:col-span-5 '>
                    Pincode
                    <br/>
                    <input 
                        className='mt-1 p-2 border border-cyan-400 rounded w-full' 
                        placeholder='Enter Pincode'
                        name="pincode"
                        value={personalInfo.pincode || ''}
                        onChange={handleChange}
                    />
                </label>
                <label className='block text-sm font-medium text-gray-700 col-span-8 md:col-span-5 '>
                    Country
                    <br/>
                    <input 
                        className='mt-1 p-2 border border-cyan-400 rounded w-full' 
                        placeholder='Enter Name'
                        name="country"
                        value={personalInfo.country || ''}
                        onChange={handleChange}
                    />
                </label>
                {/* <button type='submit' className='mt-5 flex p-2 ps-3 col-span-5  rounded-md border border-blue-400 bg-blue-100'>Submit to view in template</button> */}
                </form>
                <Link to={'/resume/education'}  className='mt-5 flex right-0 p-2 ps-3 left-0  w-20 rounded-md border border-blue-400 bg-blue-100'>Next <FaArrowRight className='mt-1 mx-1 text-red-400 pt-1'/></Link>
            </div>
        </div>

       
    </div>
  )
}

export default Heading
