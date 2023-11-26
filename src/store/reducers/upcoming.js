import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  data: null,
}

const counterSlice = createSlice({
  name: 'upcoming',
  initialState,
  reducers: {
    dataRequested: state => {
        state.data = []
      },
    dataLoaded: (state, action) => {
      state.data = action.payload
    },
    dataError: (state) => {
      state.data = []
    }
  }
})

export const {dataRequested, dataLoaded, dataError} = counterSlice.actions

export default counterSlice.reducer