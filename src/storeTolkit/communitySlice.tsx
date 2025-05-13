import { createSlice } from '@reduxjs/toolkit';
import { constant } from '../constraints';

type InitialStateType = {
  community: any | null;
  communityDetail: any | null;  // Replace 'any' with actual user type if available

};

const initialState: InitialStateType = {
  community: null, 
  communityDetail:null
};

const communitySlice = createSlice({
  name: 'community',
  initialState,
  reducers: {
    setCommunity: (state, action) => {
      state.community = action.payload;
    },
    setCommunityDetail: (state, action) => {
      state.communityDetail = action.payload;
    },


    // Other reducers go here
  },
});

export const { setCommunity,setCommunityDetail } = communitySlice.actions;

export default communitySlice.reducer;