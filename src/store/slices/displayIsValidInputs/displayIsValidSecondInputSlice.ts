import { createSlice } from '@reduxjs/toolkit'

export const displayIsValidSecondInputSlice = createSlice({
  name: 'displayIsValidSecondInput',
  initialState: { status: false },
  reducers: {
    setDisplayIsValidSecondInput: (state, action) => {
      state.status = action.payload
    }
  }
})

export const { setDisplayIsValidSecondInput } = displayIsValidSecondInputSlice.actions

export default displayIsValidSecondInputSlice.reducer
