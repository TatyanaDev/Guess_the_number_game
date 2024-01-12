import { createSlice } from '@reduxjs/toolkit'

export const isDisabledSecondInputSlice = createSlice({
  name: 'isDisabledSecondInput',
  initialState: { status: true },
  reducers: {
    setIsDisabledSecondInput: (state, action) => {
      state.status = action.payload
    }
  }
})

export const { setIsDisabledSecondInput } = isDisabledSecondInputSlice.actions

export default isDisabledSecondInputSlice.reducer
