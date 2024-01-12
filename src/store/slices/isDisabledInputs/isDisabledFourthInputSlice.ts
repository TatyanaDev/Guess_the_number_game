import { createSlice } from '@reduxjs/toolkit'

export const isDisabledFourthInputSlice = createSlice({
  name: 'isDisabledFourthInput',
  initialState: { status: true },
  reducers: {
    setIsDisabledFourthInput: (state, action) => {
      state.status = action.payload
    }
  }
})

export const { setIsDisabledFourthInput } = isDisabledFourthInputSlice.actions

export default isDisabledFourthInputSlice.reducer
