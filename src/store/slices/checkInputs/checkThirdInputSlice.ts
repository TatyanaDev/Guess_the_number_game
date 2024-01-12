import { createSlice } from '@reduxjs/toolkit'

export const checkThirdInputSlice = createSlice({
  name: 'checkThirdInput',
  initialState: { status: false },
  reducers: {
    setCheckThirdInput: (state, action) => {
      state.status = action.payload
    }
  }
})

export const { setCheckThirdInput } = checkThirdInputSlice.actions

export default checkThirdInputSlice.reducer
