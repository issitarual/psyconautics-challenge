import { createSlice, current } from "@reduxjs/toolkit";

// Define a type for the slice state
export interface FavoriteState {
  name: string;
  img: string;
  id: number;
}

const initialState: FavoriteState[] = [];

const favoriteCharacter = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    toDeleted(state, action) {
      const { name } = action.payload;
      console.log(name);
      // Construct a new array immutably
      const newFavorite = state.filter((character) => character.name !== name);
      // "Mutate" the existing state to save the new array
      console.log(current(state));
      return newFavorite
    },
    toAdd(state, action) {
      // Construct a new array immutably
      state.push(action.payload);
      console.log(current(state));
      // "Mutate" the existing state to save the new array
    },
  },
});

export const { toAdd, toDeleted } = favoriteCharacter.actions;

export default favoriteCharacter.reducer;
