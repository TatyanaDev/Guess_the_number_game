import { createSlice } from '@reduxjs/toolkit'

export const isValueFourthInputSlice = createSlice({
  name: 'isValueFourthInput',
  initialState: { number: '' },
  reducers: {
    setIsValueFourthInput: (state, action) => {
      state.number = action.payload
    }
  }
})

export const { setIsValueFourthInput } = isValueFourthInputSlice.actions

export default isValueFourthInputSlice.reducer
