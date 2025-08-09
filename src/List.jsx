// 登録したリスト一覧
import PageTitle from "./components/PageTitle";
import Header from "./components/Header";

import { useDispatch, useSelector } from "react-redux";
import { setRecipes } from "./modules/recipes";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import recipeApi from "./api/recipe";

export default function List() {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes.value);

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const data = await recipeApi.getAll();
        if (!active) return;
        dispatch(setRecipes(data));
      } catch (e) {
        console.error("Failed to fetch recipes", e);
      }
    })();
    return () => {
      active = false;
    };
  }, [dispatch]);

  return (
    <>
      <Header />
      <PageTitle>レシピ一覧</PageTitle>
      <ul className="bg-base-100 rounded-box shadow-md mx-auto mt-10 w-[90%] sm:w-1/2 ">
        {recipes.map((item) => {
          const key = item._id ?? item.id;
          if (!key) console.warn("id missing", item);
          return (
            <li key={key} className="p-4 mt-10">
              <div>
                <img
                  className="size-20 rounded-box mt-4"
                  src="https://img.daisyui.com/images/profile/demo/1@94.webp"
                />
              </div>
              <p className="text-lg mt-4">{item.name}</p>
              <p className="badge badge-soft badge-secondary mt-4">
                {item.genre}
              </p>
              <a className="mt-4 block">{item.url}</a>
              <p className="mt-4">{item.memo}</p>
              <Link to="/about" className="mt-4 btn btn-sm">
                詳細
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
