import { createSlice } from '@reduxjs/toolkit';
import { constant } from '../constraints';

type InitialStateType = {
  user: any | null;  // Replace 'any' with actual user type if available
  userDetail: any | null; 
  isUpdate: boolean;
  isOnline: boolean;
  isReaderConnected: boolean;
};

const initialState: InitialStateType = {
  user: null,userDetail:null, isUpdate: false, isOnline: false, isReaderConnected: false
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },

    setUserDetail: (state, action) => {
      state.userDetail = action.payload;
    },
    setIsUserUpdate: (state, action) => {
      state.isUpdate = action.payload;
    },
    setIsOnline: (state, action) => {
      state.isOnline = action.payload;
    },
  
    setIsReaderConnected: (state, action) => {
      state.isReaderConnected = action.payload;
    },

    // Other reducers go here
  },
});

export const { setUser, setIsOnline,setIsReaderConnected,setUserDetail } = userSlice.actions;

export default userSlice.reducer;