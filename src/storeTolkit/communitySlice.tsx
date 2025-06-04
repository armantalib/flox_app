import { createSlice } from '@reduxjs/toolkit';

type InitialStateType = {
  postDetail: any | null;


};

const initialState: InitialStateType = {
  postDetail: null

};

const communitySlice = createSlice({
  name: 'hub',
  initialState,
  reducers: {
    setPostDetail: (state, action) => {
      state.postDetail = action.payload;
    },




    // Other reducers go here
  },
});

export const { setPostDetail, } = communitySlice.actions;

export default communitySlice.reducer;