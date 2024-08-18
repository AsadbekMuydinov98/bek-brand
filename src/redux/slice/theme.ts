// themeSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mode: 'light', // Initial theme mode
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light'; // Toggle between light and dark modes
    },
    setTheme: (state, action) => {
      state.mode = action.payload; // Set theme mode directly
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;

export default themeSlice.reducer;
