import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    popularMovies: [],
  },
  reducers: {
    setPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
  },
});

export const { setPopularMovies } = userSlice.actions;

export const selectPopularMovies = (state) => state.user.popularMovies;

export default userSlice.reducer;
