import { createSlice } from '@reduxjs/toolkit';

type InitialStateType = {
  steps: any | null;
  exploreStat: any | null;
  stepsData: any | null;  // Replace 'any' with actual user type if available

};

const initialState: InitialStateType = {
  steps: null, 
  stepsData:null,
  exploreStat:null
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
    setExploreStat: (state, action) => {
      state.exploreStat = action.payload;
    },


    // Other reducers go here
  },
});

export const { setSteps,setStepsData,setExploreStat } = stepsSlice.actions;

export default stepsSlice.reducer;