import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'shared',
  initialState: {
    loading: true,
    error: null
  },
  reducers: {
    fetchRequest: state => {
      state.loading = true;
      state.error = null;
    },
    fetchLoaded: state => {
      state.loading = false;
      state.error = null;
    },
    fetchError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }
  }
})

export const { fetchRequest, fetchLoaded, fetchError } = counterSlice.actions

export default counterSlice.reducer