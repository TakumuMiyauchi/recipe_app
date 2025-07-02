import { configureStore } from "@reduxjs/toolkit";
import reducer from "../modules/recipes"

export const store = configureStore({
	reducer:{
		recipes: reducer
	}
});
