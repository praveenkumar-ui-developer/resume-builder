import React from 'react'


import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { updateEducation } from '../components/Redux/resumeSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
function Education()  {
    const dispatch = useDispatch();
    const education = useSelector((state) => state.resume.education);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      dispatch(updateEducation({
        ...education,
        [name]: value,
      }));
    };
     
   
    

  return (
    <div className='justify-start break-words grid grid-cols-12 '>
        <div className='col-span-12 px-6 '>
            <h1 className='text-3xl font-serif font-bold '>It's Time to Fill Your Academic Details</h1>
            <h3 className='mt-2'>We suggest including an College Name.</h3>

            <div className='mt-4 '>
                <p className='font-semibold'>* indicates a required field</p>
                <form className='grid grid-cols-12 justify-between gap-8 mt-4' 
                // onSubmit={submitform}
                >
                <label className='block text-sm font-medium text-gray-700 col-span-8 md:col-span-5'>
                    College Name *
                    <br/>
                    <input 
                        className='mt-1 p-2 border border-cyan-400 rounded w-full ' 
                        placeholder='Enter College Name'
                        name="collegename"
                        value={education.collegename || ''}
                        onChange={handleChange}
                        
                    />
                </label>
                <label className='block text-sm font-medium text-gray-700 col-span-8 md:col-span-5  '>
                    Course
                    <br/>
                    <input 
                        className='mt-1 p-2 border border-cyan-400 rounded w-full' 
                        placeholder='Ex: B.tech'
                        
                        
                        name="course"
                        value={education.course || ''}
                        onChange={handleChange}
                        
                    />
                </label>
                <label className='block text-sm font-medium text-gray-700 col-span-8 md:col-span-10 '>
                    Branch
                    <br/>
                    <input 
                        className='mt-1 p-2 border border-cyan-400 rounded w-full' 
                        placeholder='Ex: Mechanical'
                        name="branch"
                        value={education.branch || ''}
                        onChange={handleChange}
                    />
                </label>

                <label className='block text-sm font-medium text-gray-700 col-span-8 md:col-span-5'>
                    Place
                    <br/>
                    <input 
                        className='mt-1 p-2 border border-cyan-400 rounded w-full ' 
                        placeholder='Enter place'
                        name="place"
                        value={education.place || ''}
                        onChange={handleChange}
                    />
                </label>
                <label className='block text-sm font-medium text-gray-700 col-span-8 md:col-span-5'>
                    Percentage or CGPA
                    <br/>
                    <input 
                        className='mt-1 p-2 border border-cyan-400 rounded w-full ' 
                        placeholder='Enter percentage'
                        name="percentage"
                        value={education.percentage || ''}
                        onChange={handleChange}
                    />
                </label>
               

                <label className='block text-sm font-medium text-gray-700 col-span-8 md:col-span-5'>
                    Start Month and Year
                    <br/>
                    <input 
                        className='mt-1 p-2 border border-cyan-400 rounded w-full ' 
                        placeholder='Ex: July-2020'
                        name="startdate"
                        value={education.startdate || ''}
                        onChange={handleChange}
                    />
                </label>
                <label className='block text-sm font-medium text-gray-700 col-span-8 md:col-span-5'>
                    End Month and Year
                    <br/>
                    <input 
                        className='mt-1 p-2 border border-cyan-400 rounded w-full ' 
                        placeholder='Ex: Sept-2024'
                        name="enddate"
                        value={education.enddate || ''}
                        onChange={handleChange}
                    />
                </label>
                {/* <button type='submit' className='mt-5 flex p-2 ps-3  w-20 rounded-md border border-blue-400 bg-blue-100'>Submit </button> */}
                </form>
                <div className=' col-span-8 md:col-span-5 justify-between flex'>

                <Link to={'/resume/heading'} className='mt-5 flex right-0 p-2 ps-3 left-0  w-20 rounded-md border border-blue-400 bg-blue-100'>Back <FaArrowLeft className='mt-1 mx-1 text-red-400 pt-1'/></Link>
                <Link to={'/resume/experience'} className='mt-5 flex right-0 p-2 ps-3 left-0  w-20 rounded-md border border-blue-400 bg-blue-100'>Next <FaArrowRight className='mt-1 mx-1 text-red-400 pt-1'/></Link>
                </div>
            </div>
        </div>

        
    </div>
  )
}

export default Education
