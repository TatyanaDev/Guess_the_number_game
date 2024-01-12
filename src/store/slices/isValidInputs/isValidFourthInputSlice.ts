import { createSlice } from '@reduxjs/toolkit'

export const isValidFourthInputSlice = createSlice({
  name: 'isValidFourthInput',
  initialState: { status: false },
  reducers: {
    setIsValidFourthInput: (state, action) => {
      state.status = action.payload
    }
  }
})

export const { setIsValidFourthInput } = isValidFourthInputSlice.actions

export default isValidFourthInputSlice.reducer
