import { createSlice } from '@reduxjs/toolkit'

export const checkSecondInputSlice = createSlice({
  name: 'checkSecondInput',
  initialState: { status: false },
  reducers: {
    setCheckSecondInput: (state, action) => {
      state.status = action.payload
    }
  }
})

export const { setCheckSecondInput } = checkSecondInputSlice.actions

export default checkSecondInputSlice.reducer
