import { createSlice } from '@reduxjs/toolkit'

export const fourthNumberSlice = createSlice({
  name: 'fourthNumber',
  initialState: { number: '' },
  reducers: {
    setFourthNumber: (state, action) => {
      state.number = action.payload
    }
  }
})

export const { setFourthNumber } = fourthNumberSlice.actions

export default fourthNumberSlice.reducer
