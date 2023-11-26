import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  moviesList: [],
  tvsList: [],
  totalPages: 1
}

const counterSlice = createSlice({
  name: 'popular',
  initialState,
  reducers: {
    dataRequested: state => {
        state.data = []
      },
    dataLoaded: (state, action) => {
      state.totalPages = action.payload.totalPages;
      if (action.payload.type == 'movie') {
        state.moviesList = action.payload.array;
      } else {
        state.tvsList = action.payload.array;        
      }
      
    },
    dataError: (state) => {
      state.data = []
    }
  }
})

export const {dataRequested, dataLoaded, dataError} = counterSlice.actions

export default counterSlice.reducer