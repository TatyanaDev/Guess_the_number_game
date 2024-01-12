import { createSlice } from '@reduxjs/toolkit'

export const checkFirstInputSlice = createSlice({
  name: 'checkFirstInput',
  initialState: { status: false },
  reducers: {
    setCheckFirstInput: (state, action) => {
      state.status = action.payload
    }
  }
})

export const { setCheckFirstInput } = checkFirstInputSlice.actions

export default checkFirstInputSlice.reducer
