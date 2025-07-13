// 登録したリスト一覧
import PageTitle from "./components/PageTitle";

import { useSelector } from "react-redux";

export default function List() {
  const addRecipe = useSelector((state) => state.recipes.value);

  return (
    <>
      <PageTitle>レシピ一覧</PageTitle>
      <ul className="bg-base-100 rounded-box shadow-md mx-auto mt-10 w-[90%] sm:w-1/2 ">
        {addRecipe.map((item) => {
					if (!item.id) console.warn("id missing", item);
          return (
						<li key={item.id} className="p-4 mt-10">
							<div><img className="size-20 rounded-box mt-4" src="https://img.daisyui.com/images/profile/demo/1@94.webp"/></div>
              <p className="text-lg mt-4">{item.name}</p>
              <p className="badge badge-soft badge-secondary mt-4">
                {item.genre}
              </p>
              <a className="mt-4 block">{item.url}</a>
              <p className="mt-4">{item.memo}</p>
              <button className="mt-4 btn btn-sm">詳細</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
