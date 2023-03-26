import { createSlice } from "@reduxjs/toolkit"
 
 const initialState={token:'',isLogin:false}
export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login: (state, payload) => {},
  },
});