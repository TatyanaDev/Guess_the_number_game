import { createSlice } from '@reduxjs/toolkit'

export const isWinnSlice = createSlice({
  name: 'isWinn',
  initialState: { status: false },
  reducers: {
    setIsWinn: (state, action) => {
      state.status = action.payload
    }
  }
})

export const { setIsWinn } = isWinnSlice.actions

export default isWinnSlice.reducer
