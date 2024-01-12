import { createSlice } from '@reduxjs/toolkit'

export const isValueThirdInputSlice = createSlice({
  name: 'isValueThirdInput',
  initialState: { number: '' },
  reducers: {
    setIsValueThirdInput: (state, action) => {
      state.number = action.payload
    }
  }
})

export const { setIsValueThirdInput } = isValueThirdInputSlice.actions

export default isValueThirdInputSlice.reducer
