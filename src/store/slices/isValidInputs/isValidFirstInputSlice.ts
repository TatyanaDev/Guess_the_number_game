import { createSlice } from '@reduxjs/toolkit'

export const isValidFirstInputSlice = createSlice({
  name: 'isValidFirstInput',
  initialState: { status: false },
  reducers: {
    setIsValidFirstInput: (state, action) => {
      state.status = action.payload
    }
  }
})

export const { setIsValidFirstInput } = isValidFirstInputSlice.actions

export default isValidFirstInputSlice.reducer
