import { createSlice } from '@reduxjs/toolkit'

export const attemptCounterSlice = createSlice({
  name: 'attemptCounter',
  initialState: { count: 0 },
  reducers: {
    setAttemptCounter: (state, action) => {
      state.count = action.payload
    },
    incrementAttemptCounter: state => {
      state.count += 1
    }
  }
})

export const { setAttemptCounter, incrementAttemptCounter } = attemptCounterSlice.actions

export default attemptCounterSlice.reducer
