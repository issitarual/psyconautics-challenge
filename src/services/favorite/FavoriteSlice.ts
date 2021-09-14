import { createSlice } from "@reduxjs/toolkit";

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
      const newFavorite = state.filter((character) => character.name !== name);
      return newFavorite
    },
    toAdd(state, action) {
      state.push(action.payload);
    },
  },
});

export const { toAdd, toDeleted } = favoriteCharacter.actions;

export default favoriteCharacter.reducer;
