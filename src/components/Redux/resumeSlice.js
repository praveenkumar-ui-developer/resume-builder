import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  personalInfo: {firstname:'',
    surename:'',
    profession:'',
    email:'',
    phonenumber:'',
    city:'',
    pincode:'',
    country:'',
    linkedin:'',
    github:'',
    portfolio:''},


  experience: {
    company: '',
    profession: '',
    city: '',
    state: '',
    summaries:[],
  },

  projects:{
    projects:{},
    projectname:{}
  },
  certification:{
    certificate:{},
    description:{}
  },

  education: { collegename:'',
    course:'',
    branch:'',
    place:'',
    percentage:'',
    city:'',
    pincode:'',
    country:'',
    percentage:'',
    startdate:'',
    enddate:''
    },

    skills:{
      language:'',
      technologies:'',
      skill:'',
      vcontrol:''
    }
  
};

const resumeSlice = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    updatePersonalInfo: (state, action) => {
      state.personalInfo = action.payload;
    },
    updateExperience: (state, action) => {
      state.experience = action.payload;
    },
    updateEducation: (state, action) => {
      state.education = action.payload;
    },
    updateSkills: (state, action) => {
      state.skills = action.payload;
    },
    updateProjects:(state,action)=>{
      state.projects = action.payload
    },
    updateCertification:(state,action)=>{
      state.certification = action.payload
    }
  },
});

export const { updatePersonalInfo, updateExperience, updateEducation, updateSkills, updateProjects,updateCertification } = resumeSlice.actions;
export default resumeSlice.reducer;
