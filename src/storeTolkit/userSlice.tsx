import { createSlice } from '@reduxjs/toolkit';

type InitialStateType = {
  user: any | null;  // Replace 'any' with actual user type if available
  userDetail: any | null;
  isUpdate: boolean;
  isOnline: boolean;
  isReaderConnected: boolean;
  chatCount: any | null;
  notiCount: any | null;

};

const initialState: InitialStateType = {
  user: null, userDetail: null, isUpdate: false, isOnline: false, isReaderConnected: false, chatCount: 0, notiCount: 0
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
    setChatCount: (state, action) => {
      state.chatCount = action.payload;
    },
    setNotiCount: (state, action) => {
      state.notiCount = action.payload;
    },

    // Other reducers go here
  },
});

export const { setUser, setIsOnline, setIsReaderConnected, setUserDetail ,setChatCount,setNotiCount } = userSlice.actions;

export default userSlice.reducer;