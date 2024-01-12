import { createSlice } from '@reduxjs/toolkit'

export const checkFourthInputSlice = createSlice({
  name: 'checkFourthInput',
  initialState: { status: false },
  reducers: {
    setCheckFourthInput: (state, action) => {
      state.status = action.payload
    }
  }
})

export const { setCheckFourthInput } = checkFourthInputSlice.actions

export default checkFourthInputSlice.reducer
