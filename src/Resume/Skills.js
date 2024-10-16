import React from 'react'


import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { updateSkills } from '../components/Redux/resumeSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
function Skills()  {
    const dispatch = useDispatch();
    const skills = useSelector((state) => state.resume.skills);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      dispatch(updateSkills({
        ...skills,
        [name]: value,
      }));
    };
     
   
    

  return (
    <div className='justify-start break-words grid grid-cols-12 '>
        <div className='col-span-12 px-6 '>
            <h1 className='text-3xl font-serif font-bold '>Adding Skills to Your Resume Is Advantage.</h1>
            <h3 className='mt-2'>We suggest include your skills.</h3>

            <div className='mt-4 '>
                <p className='font-semibold'>Mention your skills with seperated by comma</p>
                <p className='font-semibold'>* indicates a required field</p>
               
                <form className='grid grid-cols-12 justify-between gap-8 mt-4' 
                // onSubmit={submitform}
                >
                <label className='block text-sm font-medium text-gray-700 col-span-8 md:col-span-10'>
                    Technical Languages*
                    <br/>
                    <input 
                        className='mt-1 p-2 border border-cyan-400 rounded w-full ' 
                        placeholder='Ex: Js,Java,C'
                        name="language"
                        value={skills.language || ''}
                        onChange={handleChange}
                        
                    />
                </label>
                
                <label className='block text-sm font-medium text-gray-700 col-span-8 md:col-span-10  '>
                <p className='font-semibold'>Mention your Technologies with seperated by comma</p>
                <b>Technologies</b>
                    <br/>
                    <input 
                        className='mt-1 p-2 border border-cyan-400 rounded w-full' 
                        placeholder='Ex: ReactJS,Html,CSS'
                        
                        
                        name="technologies"
                        value={skills.technologies || ''}
                        onChange={handleChange}
                        
                    />
                </label>
                
                <label className='block text-sm font-medium text-gray-700 col-span-8 md:col-span-10 '>
                <p className='font-semibold'>Mention your skills with seperated by comma</p>
                    <b>Skills</b>
                    <br/>
                    <input 
                        className='mt-1 p-2 border border-cyan-400 rounded w-full' 
                        placeholder='Ex: Ms-Office,Xcel,React-Hooks3'
                        name="skill"
                        value={skills.skill || ''}
                        onChange={handleChange}
                    />
                </label>

                <label className='block text-sm font-medium text-gray-700 col-span-8 md:col-span-10 '>
                <p className='font-semibold'>Mention your skills with seperated by comma</p>
                    <b>Version Control</b>
                    <br/>
                    <input 
                        className='mt-1 p-2 border border-cyan-400 rounded w-full' 
                        placeholder='Ex: Git,Github'
                        name="vcontrol"
                        value={skills.vcontrol || ''}
                        onChange={handleChange}
                    />
                </label>

                
                </form>
                <div className='col-span-8 md:col-span-10  flex justify-between'>
                <Link to={'/resume/experience'} className='mt-5 flex right-0 p-2 ps-3 left-0  w-20 rounded-md border border-blue-400 bg-blue-100'>Back <FaArrowLeft className='mt-1 mx-1 text-red-400 pt-1'/></Link>
                <Link to={'/resume/certification'} className='mt-5 flex right-0 p-2 ps-3 left-0  w-20 rounded-md border border-blue-400 bg-blue-100'>Next <FaArrowRight className='mt-1 mx-1 text-red-400 pt-1'/></Link>
                </div>
            </div>
        </div>

        
    </div>
  )
}

export default Skills
