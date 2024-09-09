import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
};

export const selectFilter = (state) => {
  return state.filter.name;
};

const filtersSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilter: {
      reducer(state, action) {
        state.name = action.payload;
      },
    },
  },
});

export const filterReducer = filtersSlice.reducer;
export const { changeFilter } = filtersSlice.actions;
