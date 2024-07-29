import { createSlice } from '@reduxjs/toolkit'

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    data: [], // Initial state should define the structure of the state
  },
  reducers: {
    setData(state, action) {
      state.data = action.payload
    },
  },
})

export const { setData } = dataSlice.actions
export default dataSlice.reducer
