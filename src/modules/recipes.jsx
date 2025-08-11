import { createSlice } from "@reduxjs/toolkit";

const recipes = createSlice({
  name: "recipes",
  initialState: {
    value: [],
  },
  reducers: {
    setRecipes: (state, { payload }) => {
      state.value = Array.isArray(payload) ? payload : [];
    },

    addRecipe: (state, { payload }) => {
      state.value.push(payload);
    },

    deleteRecipe: (state, { payload }) => {
      state.value = state.value.filter((val) => (val._id ?? val.id) != payload);
    },
  },
});

export const { setRecipes, addRecipe, deleteRecipe } = recipes.actions;
export default recipes.reducer;
