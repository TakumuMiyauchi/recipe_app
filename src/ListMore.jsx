// リスト詳細ページ

import PageTitle from "./components/PageTitle";
import Header from "./components/Header";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import recipeApi from "./api/recipe";


export default function ListMore() {
	const { id } = useParams();
	// 詳細情報は,ReduxにアクセスせずにそのままDBから取得した情報をstateで管理する。
	const [recipe, setRecipe] = useState(null);

	// URLのidが更新される度に、DBを取得しレンダリングする	
	useEffect(() => {
		//即時関数
		(async () => {
			try {
				const data = await recipeApi.get(id);
				setRecipe(data);
			}catch(err) {
				console.error("Error fetching recipe:", err);
			}
		})();
	},[id]);

	if (!recipe) return <p>読み込み中...</p>

  return (
    <>
			<Header />
      <PageTitle>詳細ページ</PageTitle>
			<div className="p-6">
      <h1 className="text-2xl font-bold">{recipe?.name}</h1>
      <p className="mt-2">{recipe?.genre}</p>
      <a className="text-blue-500" href={recipe?.url} target="_blank" rel="noreferrer">
        {recipe?.url}
      </a>
      <p className="mt-4">{recipe?.memo}</p>
    </div>
    </>
  );
}
