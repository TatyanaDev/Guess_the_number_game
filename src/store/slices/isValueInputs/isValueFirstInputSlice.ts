import { createSlice } from '@reduxjs/toolkit'

export const isValueFirstInputSlice = createSlice({
  name: 'isValueFirstInput',
  initialState: { number: '' },
  reducers: {
    setIsValueFirstInput: (state, action) => {
      state.number = action.payload
    }
  }
})

export const { setIsValueFirstInput } = isValueFirstInputSlice.actions

export default isValueFirstInputSlice.reducer
