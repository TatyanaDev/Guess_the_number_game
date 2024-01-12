import { createSlice } from '@reduxjs/toolkit'

export const secondNumberSlice = createSlice({
  name: 'secondNumber',
  initialState: { number: '' },
  reducers: {
    setSecondNumber: (state, action) => {
      state.number = action.payload
    }
  }
})

export const { setSecondNumber } = secondNumberSlice.actions

export default secondNumberSlice.reducer
