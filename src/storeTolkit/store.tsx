// store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import orderReducer from './orderSlice';
import chatData from './ChatData';
import stepsSlice from './stepsSlice';
import marketplaceSlice from './marketplaceSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    order: orderReducer,
    chat: chatData,
    steps: stepsSlice,
    marketplace: marketplaceSlice,
    // Other reducers go here
  },
});
export default store;