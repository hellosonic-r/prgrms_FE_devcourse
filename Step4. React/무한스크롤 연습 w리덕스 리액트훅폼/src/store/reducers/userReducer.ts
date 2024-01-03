import { createSlice } from '@reduxjs/toolkit';

interface IUserState {
  email: string | null;
  password: string | null;
}

const initialState: IUserState = {
  email: null,
  password: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userSlice: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
