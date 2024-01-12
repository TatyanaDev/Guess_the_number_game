import { createSlice } from '@reduxjs/toolkit'

export const displayIsValidFirstInputSlice = createSlice({
  name: 'displayIsValidFirstInput',
  initialState: { status: false },
  reducers: {
    setDisplayIsValidFirstInput: (state, action) => {
      state.status = action.payload
    }
  }
})

export const { setDisplayIsValidFirstInput } = displayIsValidFirstInputSlice.actions

export default displayIsValidFirstInputSlice.reducer
