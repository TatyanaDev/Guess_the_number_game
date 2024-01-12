import { createSlice } from '@reduxjs/toolkit'

export const isValidThirdInputSlice = createSlice({
  name: 'isValidThirdInput',
  initialState: { status: false },
  reducers: {
    setIsValidThirdInput: (state, action) => {
      state.status = action.payload
    }
  }
})

export const { setIsValidThirdInput } = isValidThirdInputSlice.actions

export default isValidThirdInputSlice.reducer
