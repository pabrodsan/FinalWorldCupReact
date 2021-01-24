import { configureStore } from '@reduxjs/toolkit';
import scoreBoardReducer from '../components/scoreBoard/scoreBoardSlice';

export default configureStore({
  reducer: {
    scoreBoard: scoreBoardReducer,
  },
});
