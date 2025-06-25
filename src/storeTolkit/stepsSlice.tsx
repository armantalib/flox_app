import { createSlice } from '@reduxjs/toolkit';

type InitialStateType = {
  steps: any | null;
  exploreStat: any | null;
  stepsData: any | null;  // Replace 'any' with actual user type if available
  stepsDataTemp: any | null;  // Replace 'any' with actual user type if available
  stepsDataUser: any | null;  // Replace 'any' with actual user type if available
  resourceData: any | null;  // Replace 'any' with actual user type if available
  isSameData: any | null;
  resourceFilter: any | null;
};

const initialState: InitialStateType = {
  steps: null,
  stepsData: null,
  stepsDataTemp: null,
  stepsDataUser: null,
  exploreStat: null,
  resourceData: [],
  isSameData: null,
  resourceFilter: [],
};

const stepsSlice = createSlice({
  name: 'steps',
  initialState,
  reducers: {
    setSteps: (state, action) => {
      state.steps = action.payload;
    },
    setStepsData: (state, action) => {
      state.stepsData = action.payload;
    },
    setStepsDataUser: (state, action) => {
      state.stepsDataUser = action.payload;
    },
       setStepsDataTemp: (state, action) => {
      state.stepsDataTemp = action.payload;
    },
    setExploreStat: (state, action) => {
      state.exploreStat = action.payload;
    },
     setResourceData: (state, action) => {
      state.resourceData = action.payload;
    },
      setIsSameData: (state, action) => {
      state.isSameData = action.payload;
    },
       setResourceFilter: (state, action) => {
      state.resourceFilter = action.payload;
    },


    // Other reducers go here
  },
});

export const { setSteps, setStepsData, setExploreStat,setStepsDataUser,setStepsDataTemp,setResourceData,setIsSameData,setResourceFilter } = stepsSlice.actions;

export default stepsSlice.reducer;