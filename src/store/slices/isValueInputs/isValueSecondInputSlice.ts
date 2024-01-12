import { createSlice } from '@reduxjs/toolkit'

export const isValueSecondInputSlice = createSlice({
  name: 'isValueSecondInput',
  initialState: { number: '' },
  reducers: {
    setIsValueSecondInput: (state, action) => {
      state.number = action.payload
    }
  }
})

export const { setIsValueSecondInput } = isValueSecondInputSlice.actions

export default isValueSecondInputSlice.reducer
