import { createSlice } from '@reduxjs/toolkit'

export const isDisabledThirdInputSlice = createSlice({
  name: 'isDisabledThirdInput',
  initialState: { status: true },
  reducers: {
    setIsDisabledThirdInput: (state, action) => {
      state.status = action.payload
    }
  }
})

export const { setIsDisabledThirdInput } = isDisabledThirdInputSlice.actions

export default isDisabledThirdInputSlice.reducer
