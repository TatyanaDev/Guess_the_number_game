import { createSlice } from '@reduxjs/toolkit'

export const displayIsValidFourthInputSlice = createSlice({
  name: 'displayIsValidFourthInput',
  initialState: { status: false },
  reducers: {
    setDisplayIsValidFourthInput: (state, action) => {
      state.status = action.payload
    }
  }
})

export const { setDisplayIsValidFourthInput } = displayIsValidFourthInputSlice.actions

export default displayIsValidFourthInputSlice.reducer
