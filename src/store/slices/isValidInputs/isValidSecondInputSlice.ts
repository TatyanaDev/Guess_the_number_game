import { createSlice } from '@reduxjs/toolkit'

export const isValidSecondInputSlice = createSlice({
  name: 'isValidSecondInput',
  initialState: { status: false },
  reducers: {
    setIsValidSecondInput: (state, action) => {
      state.status = action.payload
    }
  }
})

export const { setIsValidSecondInput } = isValidSecondInputSlice.actions

export default isValidSecondInputSlice.reducer
