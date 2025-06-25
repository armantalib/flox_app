import { createSlice } from '@reduxjs/toolkit';

type InitialStateType = {
  categoriesHub: any | null;
  categoryExplore: any | null;
  hubPostDetail: any | null;
  musicDetail: any | null;
  exploreData: any | null;
  filterData: any | null;
  isSameData: any | null;


};

const initialState: InitialStateType = {
  categoriesHub: null, 
  hubPostDetail:null,
  categoryExplore:null,
  musicDetail:null,
  exploreData:[],
  filterData:[],
  isSameData:null,

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
     setExploreData: (state, action) => {
      state.exploreData = action.payload;
    },
     setFilterData: (state, action) => {
      state.filterData = action.payload;
    },
      setIsSameData: (state, action) => {
      state.isSameData = action.payload;
    },



    // Other reducers go here
  },
});

export const { setCategoriesHub,setHubPostDetail,setCategoryExplore,setMusicDetail,setExploreData ,setFilterData,setIsSameData } = hubSlice.actions;

export default hubSlice.reducer;