import { createSlice } from "@reduxjs/toolkit";

const initialState = [
 { id: '0', name: 'Aidan Lowson' },
 { id: '1', name: 'John Stern' },
 { id: '2', name: 'Chris Cringle' },
]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {

  }
})

export default usersSlice.reducer