import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { updateExperience, updateProjects } from '../components/Redux/resumeSlice';
import { Link } from 'react-router-dom';

function Experience() {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.resume.projects || []);

  const [formData, setFormData] = useState([{ projectname: '', project: '' }]); // For multiple projects

  const handleSummaryChange = (index, event) => {
    const { name, value } = event.target;

    // Create a new copy of formData
    const newFormData = [...formData];

    // Update the specific field in the copy
    newFormData[index] = { ...newFormData[index], [name]: value };

    // Update the local state with the new formData
    setFormData(newFormData);

    // Update the projects array in the Redux state
    dispatch(updateProjects({
      projects: newFormData,
    }));
  };

  const addSummaryField = () => {
    setFormData([...formData, { projectname: '', project: '' }]);
  };

  return (
    <div className='justify-start break-words grid grid-cols-12'>
      <div className='col-span-12 px-6'>
        <h1 className='text-3xl font-serif font-bold'>Mention Your Latest Project Details</h1>
        {/* <h3 className='mt-2'>We suggest you give Company name and role you worked on.</h3> */}

        <div className='mt-4'>
          <p className='font-semibold'>* indicates a required field</p>
          <form className='grid grid-cols-12 justify-between gap-8 mt-4' onSubmit={''}>
           
            <div className='col-span-8 md:col-span-10'>
              * Write about your Projects you worked on personal or company projects

              {formData.map((_, index) => (
                <div key={index} className='mt-4'>
                  <label>
                    Project Name {index + 1}
                    <input
                      className='mt-1 p-2 border border-cyan-400 rounded w-full'
                      placeholder={`Enter project name ${index + 1}`}
                      name="projectname"
                      value={formData[index].projectname}
                      onChange={(event) => handleSummaryChange(index, event)}
                    />
                  </label>

                  <label className='mt-4'>
                    Summary {index + 1}
                    <input
                      className='mt-1 p-2 border border-cyan-400 rounded w-full'
                      placeholder={`Enter summary ${index + 1}`}
                      name="project"
                      value={formData[index].project}
                      onChange={(event) => handleSummaryChange(index, event)}
                    />
                  </label>
                </div>
              ))}

              <button
                type="button"
                className='border col-span-2 border-red-300 bg-blue-200 mt-6 h-8 px-3 rounded-md'
                onClick={addSummaryField}
              >
                Add Another Project
              </button>
            </div>
          </form>
          <div className='col-span-8 md:col-span-10  flex justify-between'>
                <Link to={'/resume/certification'} className='mt-5 flex right-0 p-2 ps-3 left-0  w-20 rounded-md border border-blue-400 bg-blue-100'>Back <FaArrowLeft className='mt-1 mx-1 text-red-400 pt-1'/></Link>
                <Link to={'/resume/certification'} className='mt-5 flex right-0 p-2 ps-3 left-0  w-20 rounded-md border border-blue-400 bg-blue-100'>Next <FaArrowRight className='mt-1 mx-1 text-red-400 pt-1'/></Link>
                </div>
        </div>
      </div>
     
    </div>
  );
}

export default Experience;
