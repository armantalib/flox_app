import { createSlice } from '@reduxjs/toolkit';

type InitialStateType = {
  postDetail: any | null;
  commentReply: any | null;
  isReply: any | null;


};

const initialState: InitialStateType = {
  postDetail: null,
  commentReply: null,
  isReply: false,

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
      setIsReply: (state, action) => {
      state.isReply = action.payload;
    },




    // Other reducers go here
  },
});

export const { setPostDetail, setCommentReply,setIsReply } = communitySlice.actions;

export default communitySlice.reducer;