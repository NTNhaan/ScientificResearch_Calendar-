import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    tokens: null,
    userData: null,
    didTryAutoLogin: false,
  },
  reducers: {
    authenticate: (state, action) => {
      const { payload } = action;
      state.tokens = payload.tokens;
      state.userData = payload.userData;
      state.didTryAutoLogin = true;
    },
    setDidTryAutoLogin: (state, action) => {
      state.didTryAutoLogin = true;
    },
  },
});
export const authenticate = authSlice.actions.authenticate;
export default authSlice.reducer; // maybe wrong.
