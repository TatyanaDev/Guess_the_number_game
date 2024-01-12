import { createSlice } from '@reduxjs/toolkit'

export const firstNumberSlice = createSlice({
  name: 'firstNumber',
  initialState: { number: '' },
  reducers: {
    setFirstNumber: (state, action) => {
      state.number = action.payload
    }
  }
})

export const { setFirstNumber } = firstNumberSlice.actions

export default firstNumberSlice.reducer
