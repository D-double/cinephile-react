import {
  configureStore
} from '@reduxjs/toolkit';
import shared from './reducers/shared';
import upcoming from './reducers/upcoming';
import popular from './reducers/popular';
const store = configureStore({
  reducer: {
    shared,
    upcoming,
    popular,
  }
})

export default store;