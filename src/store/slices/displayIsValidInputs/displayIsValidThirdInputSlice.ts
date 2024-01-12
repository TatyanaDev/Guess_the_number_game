import { createSlice } from '@reduxjs/toolkit'

export const displayIsValidThirdInputSlice = createSlice({
  name: 'displayIsValidThirdInput',
  initialState: { status: false },
  reducers: {
    setDisplayIsValidThirdInput: (state, action) => {
      state.status = action.payload
    }
  }
})

export const { setDisplayIsValidThirdInput } = displayIsValidThirdInputSlice.actions

export default displayIsValidThirdInputSlice.reducer
