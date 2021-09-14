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
      const { id } = action.payload;
      // Construct a new array immutably
      const newTodos = state.filter((character) => character.id !== id);
      // "Mutate" the existing state to save the new array
      console.log(state);
      return newTodos;
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
