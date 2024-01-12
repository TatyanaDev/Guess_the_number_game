import { createSlice } from '@reduxjs/toolkit'

export const isGameSlice = createSlice({
  name: 'isGame',
  initialState: { status: false },
  reducers: {
    setIsGame: (state, action) => {
      state.status = action.payload
    }
  }
})

export const { setIsGame } = isGameSlice.actions

export default isGameSlice.reducer
