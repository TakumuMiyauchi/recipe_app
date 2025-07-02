// 登録したリスト一覧
import PageTitle from "./components/PageTitle";

import { useSelector } from "react-redux";

export default function List() {
  const addRecipe = useSelector((state) => state.recipes.value);

  return (
    <>
      <PageTitle>レシピ一覧</PageTitle>
      <div>
        {addRecipe.map((item) => {
          return (
            <>
              <div className="mx-auto w-[90%] sm:w-1/2">
                <div className="flex ">
                  <p>{item.genre}</p>
                  <h3>{item.name}</h3>
                  <button>詳細</button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
