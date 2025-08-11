// 登録したリスト一覧
import PageTitle from "./components/PageTitle";
import Header from "./components/Header";

import { useDispatch, useSelector } from "react-redux";
import { setRecipes, deleteRecipe } from "./modules/recipes";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import recipeApi from "./api/recipe";



export default function List() {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes.value);
  //ボタン押下から削除までの処理を遷移する
  //stateが該当idを保持している際は、ボタン押下できない。
  const [deletingId, setDeletingId] = useState(null);

  useEffect(() => {
    //
    let active = true;
    // 即時関数
    (async () => {
      try {
        // APIから全レシピを取得
        const data = await recipeApi.getAll();
        // falseの場合は、Redux更新をスキップ
        if (!active) return;
        // dispatch関数で、Reduxにデータ反映
        dispatch(setRecipes(data));
      } catch (e) {
        console.error("Failed to fetch recipes", e);
      }
    })();
    // クリーンナップ処理
    // ※ページ遷移やreloadなどでコンポーネントが消滅した際に、「更新は行わない」判断をfalseにして入れる。
    // ※止めないと裏でセッターが動き続ける。
    return () => {
      active = false;
    };
  }, [dispatch]);

  const handleDeleteRecipe = async (id) => {
    if (!window.confirm("このレシピを削除しますか？")) return;
    try {
      setDeletingId(id); //stateを処理中の状態にする
      await recipeApi.delete(id); //APIの呼び出し
      dispatch(deleteRecipe(id)); ///Reduxからid指定のものを削除
    } catch (err) {
      console.error("レシピ削除に失敗しました", err);
      alert("削除に失敗しました。時間をおいて再度お試しください。");
    } finally {
      //処理が完了し、初期値と同じstateに戻る
      setDeletingId(null);
    }
  };
  return (
    <>
      <Header />
      <PageTitle>レシピ一覧</PageTitle>
      <ul className="bg-base-100 rounded-box shadow-md mx-auto mt-10 w-[90%] sm:w-1/2 ">
			{/* レシピが存在しない場合 */}
        {recipes.length === 0 ? (
          <li className="p-4 text-center text-gray-500">
            登録されているレシピが存在しません
          </li>
        ) :
				// レシピが存在する場合
				(
          recipes.map((item) => {
            const key = item._id ?? item.id;
            if (!key) console.warn("id missing", item);
            return (
              <>
                <li key={key} className="p-4 mt-10">
                  <div>
                    <img
                      className="size-20 rounded-box mt-4"
											src={item.image || "/src/public/no_image_square.jpg"}
											alt={item.image ? item.name : "画像がありません"}
                    />
                  </div>
                  <p className="text-lg mt-4">{item.name}</p>
                  <p className="badge badge-soft badge-secondary mt-4">
                    {item.genre}
                  </p>
                  <a className="mt-4 block">{item.url}</a>
                  <p className="mt-4">{item.memo}</p>
                  <Link to={`/about/${item._id}`} className="mt-4 btn btn-sm">
                    詳細
                  </Link>
                  <button
                    onClick={() => handleDeleteRecipe(key)}
                    className="mt-4 btn btn-sm"
                    disabled={deletingId === key}
                  >
                    {deletingId === key ? "削除中..." : "削除"}
                  </button>
                </li>
              </>
            );
          })
        )}
      </ul>
    </>
  );
}
