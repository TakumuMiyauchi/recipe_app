import {createSlice} from "@reduxjs/toolkit"

const recipes = createSlice({
	name: "recipes",
	initialState: {
		value: []
	},
	reducers: {
    setRecipes: (state, {payload}) => {
			return {
				...state, //元のstateオブジェクト（★例：{ value: [...] }）のすべてのプロパティを展開（コピー）します。
				value: [...state.value, payload], // valueプロパティを、既存の配列(...state.value)にpayloadを追加した新しい配列に★上書きする。→既にあるvalueプロパティを上書き
			}
    }
	}
})



export const {setRecipes} = recipes.actions;
export default recipes.reducer
