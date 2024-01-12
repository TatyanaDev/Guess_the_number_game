import { createSlice } from '@reduxjs/toolkit'

export const thirdNumberSlice = createSlice({
  name: 'thirdNumber',
  initialState: { number: '' },
  reducers: {
    setThirdNumber: (state, action) => {
      state.number = action.payload
    }
  }
})

export const { setThirdNumber } = thirdNumberSlice.actions

export default thirdNumberSlice.reducer
