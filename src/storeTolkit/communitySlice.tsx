import { createSlice } from '@reduxjs/toolkit';

type InitialStateType = {
  postDetail: any | null;
  communityData: any | null;
  communityDataUser: any | null;
  commentReply: any | null;
  isReply: any | null;
  isSameUserVisit: any | null;


};

const initialState: InitialStateType = {
  postDetail: null,
  commentReply: null,
  isReply: false,
  communityData: [],
  communityDataUser: [],
  isSameUserVisit: null

};

const communitySlice = createSlice({
  name: 'hub',
  initialState,
  reducers: {
    setPostDetail: (state, action) => {
      state.postDetail = action.payload;
    },
    setCommentReply: (state, action) => {
      state.commentReply = action.payload;
    },
    setCommunityData: (state, action) => {
      state.communityData = action.payload;
    },
     setCommunityDataUser: (state, action) => {
      state.communityDataUser = action.payload;
    },
    setIsReply: (state, action) => {
      state.isReply = action.payload;
    },
    setIsSameUserVisit: (state, action) => {
      state.isSameUserVisit = action.payload;
    },




    // Other reducers go here
  },
});

export const { setPostDetail, setCommentReply, setIsReply, setCommunityData, setIsSameUserVisit,setCommunityDataUser } = communitySlice.actions;

export default communitySlice.reducer;