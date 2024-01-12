import { createSlice } from '@reduxjs/toolkit'

export const isLossSlice = createSlice({
  name: 'isLoss',
  initialState: { status: false },
  reducers: {
    setIsLoss: (state, action) => {
      state.status = action.payload
    }
  }
})

export const { setIsLoss } = isLossSlice.actions

export default isLossSlice.reducer
