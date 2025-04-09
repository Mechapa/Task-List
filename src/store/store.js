import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './taskSlise';
const store = configureStore({
  reducer: {
    tasks: taskReducer,
  }
});

export default store