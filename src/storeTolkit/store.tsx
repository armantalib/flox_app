// store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import orderReducer from './orderSlice';
import chatData from './ChatData';
import communitySlice from './communitySlice';
import marketplaceSlice from './marketplaceSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    order: orderReducer,
    chat: chatData,
    community: communitySlice,
    marketplace: marketplaceSlice,
    // Other reducers go here
  },
});
export default store;