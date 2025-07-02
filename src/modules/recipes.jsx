import {createSlice} from "@reduxjs/toolkit"

const recipes = createSlice({
	name: "recipes",
	initialState: {
		value: []
	},
	reducers: {
    setRecipes: (state, {payload}) => {
			// スプレッド構文でオブジェクトの中身をすべてコピーし、
			return {
				...state,
				value: [...state.value, payload],
			}
    }
	}
})

export const {setRecipes} = recipes.actions;
export default recipes.reducer
