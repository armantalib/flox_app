import { createSlice } from '@reduxjs/toolkit';

type InitialStateType = {
  categoriesHub: any | null;
  categoryExplore: any | null;
  hubPostDetail: any | null;
  musicDetail: any | null;


};

const initialState: InitialStateType = {
  categoriesHub: null, 
  hubPostDetail:null,
  categoryExplore:null,
  musicDetail:null,

};

const hubSlice = createSlice({
  name: 'hub',
  initialState,
  reducers: {
    setCategoriesHub: (state, action) => {
      state.categoriesHub = action.payload;
    },
    setHubPostDetail: (state, action) => {
      state.hubPostDetail = action.payload;
    },
    setCategoryExplore: (state, action) => {
      state.categoryExplore = action.payload;
    },
    setMusicDetail: (state, action) => {
      state.musicDetail = action.payload;
    },



    // Other reducers go here
  },
});

export const { setCategoriesHub,setHubPostDetail,setCategoryExplore,setMusicDetail } = hubSlice.actions;

export default hubSlice.reducer;