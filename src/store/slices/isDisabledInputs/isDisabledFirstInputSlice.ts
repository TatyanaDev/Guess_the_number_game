import { createSlice } from '@reduxjs/toolkit'

export const isDisabledFirstInputSlice = createSlice({
  name: 'isDisabledFirstInput',
  initialState: { status: true },
  reducers: {
    setIsDisabledFirstInput: (state, action) => {
      state.status = action.payload
    }
  }
})

export const { setIsDisabledFirstInput } = isDisabledFirstInputSlice.actions

export default isDisabledFirstInputSlice.reducer
