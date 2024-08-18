import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeLink: ''
};

const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setActiveLink: (state, action) => {
      state.activeLink = action.payload;
    }
  }
});

export const { setActiveLink } = navSlice.actions;
export default navSlice.reducer;  
