import React, { useState } from 'react';
import Resumeview from './Resumeview';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { updateExperience } from '../components/Redux/resumeSlice';
import { Link } from 'react-router-dom';
function Experience() {
  const dispatch = useDispatch();
  const experience = useSelector((state) => state.resume.experience);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateExperience({
      ...experience,
      [name]: value,
      summaries: formData.map((item) => item.summary),
    }));
  };
  const [formData, setFormData] = useState([{ summary: '' }]); // For multiple summaries
//   const [data, setData] = useState({
//     company: '',
//     role: '',
//     city: '',
//     state: '',
//     summaries: [], // To store all summaries
//   });
// console.log(data)
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

  const handleSummaryChange = (index, event) => {
    const { value } = event.target;
    const newFormData = [...formData];
    newFormData[index].summary = value;
    setFormData(newFormData);
  };

  const addSummaryField = () => {
    setFormData([...formData, { summary: '' }]);
  };

   
  // const submitForm = (e) => {
  //   e.preventDefault();
  //   setData((prevData) => ({
  //     ...prevData,
  //     summaries: formData.map((item) => item.summary),
  //   }));
  //   console.log(data, 'Complete form data');
  // };

  return (
    <div className='justify-start break-words grid grid-cols-12'>
      <div className='col-span-12 px-6'>
        <h1 className='text-3xl font-serif font-bold'>Let us know your last or latest experience?</h1>
        <h3 className='mt-2'>We suggest you give Company name and role you worked on.</h3>

        <div className='mt-4'>
          <p className='font-semibold'>* indicates a required field</p>
          <form className='grid grid-cols-12 justify-between gap-8 mt-4' onSubmit={''}>
            <label className='block text-sm font-medium text-gray-700 col-span-8 md:col-span-5'>
              Company Name*
              <br />
              <input
                className='mt-1 p-2 border border-cyan-400 rounded w-full'
                placeholder='Company Name'
                name="company"
                value={experience.company || ''}
                onChange={handleChange}
              />
            </label>

            <label className='block text-sm font-medium text-gray-700 col-span-8 md:col-span-5'>
              Role or Department
              <br />
              <input
                className='mt-1 p-2 border border-cyan-400 rounded w-full'
                placeholder='Enter role'
                name="role"
                value={experience.role || ''}
                onChange={handleChange}
              />
            </label>


           

            <div className='col-span-8 md:col-span-10'>
               * Write about your experience and what you did in this company in points wise

            <p className='font-semibold'>Summary *</p>
              {formData.map((_, index) => (
                <div key={index} className='mt-4'>
                  <label>
                    Point {index + 1}
                    <input
                      className='mt-1 p-2 border border-cyan-400 rounded w-full'
                      placeholder={`Enter summary ${index + 1}`}
                      name="summary"
                      value={formData[index].summary}
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
                Add Point
              </button>
            <div className='flex justify-between'><label className='block text-sm font-medium text-gray-700 col-span-8 md:col-span-6'>
              City or Location
              <br />
              <input
                className='mt-1 p-2 border border-cyan-400 rounded w-full'
                placeholder='Enter city'
                name="city"
                value={experience.city || ''}
                onChange={handleChange}
              />
            </label>
            <label className='block text-sm font-medium text-gray-700 col-span-8 md:col-span-6'>
              State or Country
              <br />
              <input
                className='mt-1 p-2 border border-cyan-400 rounded w-full'
                placeholder='Enter state'
                name="state"
                value={experience.state || ''}
                onChange={handleChange}
              />
            </label>
            </div><br/>
            </div>
            
                </form>
                <div className='col-span-8 md:col-span-6 flex justify-between'>

                
                <Link to={'/resume/education'} className='mt-5 flex right-0 p-2 ps-3 left-0  w-20 rounded-md border border-blue-400 bg-blue-100'>Back <FaArrowLeft className='mt-1 mx-1 text-red-400 pt-1'/></Link>
                <Link to={'/resume/skills'} className='mt-5 flex right-0 p-2 ps-3 left-0  w-20 rounded-md border border-blue-400 bg-blue-100'>Next <FaArrowRight className='mt-1 mx-1 text-red-400 pt-1'/></Link>
                </div>
        </div>
      </div>

      
    </div>
  );
}

export default Experience;
