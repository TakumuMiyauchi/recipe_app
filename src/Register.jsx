// レシピ登録ページ
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import PageTitle from "./components/PageTitle";

import Input_table_tr from "./components/table/Input_table_tr";
import Input_table_th from "./components/table/Input_table_th";
import Input_table_td from "./components/table/Input_table_td";

import Input_label from "./components/Input_label";
import Input_default from "./components/input_default";
import Textarea_default from "./components/textarea_default";
import Input_button from "./components/Input_button";
import Header from "./components/Header";

import { useDispatch } from "react-redux";
import { setRecipes } from "./modules/recipes";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    genre: "select",
    url: "",
    memo: "",
  });

  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch();

  const handleRecipeList = () => {
    dispatch(
      setRecipes({
        id: uuidv4(),
        name: form.name,
        genre: form.genre,
        url: form.url,
        memo: form.memo,
        created: new Date().toISOString(),
        isDone: false,
      })
    );
  };
  return (
    <>
      <div>
        <Header></Header>
        <PageTitle>登録ページ</PageTitle>
        <div className="w-full mx-auto">
          <div action="">
            <table className="table mx-auto w-[90%] sm:w-1/2">
              <tbody>
                <Input_table_tr>
                  <Input_table_th>
                    <Input_label htmlFor="name">レシピ名</Input_label>
                  </Input_table_th>
                  <Input_table_td>
                    <Input_default
                      id="name"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleForm}
                      placeholder="レシピ名を入力してください。"
                    />
                  </Input_table_td>
                </Input_table_tr>
                <Input_table_tr>
                  <Input_table_th>
                    <Input_label htmlFor="genre">ジャンル</Input_label>
                  </Input_table_th>
                  <Input_table_td>
                    <select
                      name="genre"
                      id="genre"
                      value={form.genre}
                      onChange={handleForm}
                      className="p-4"
                    >
                      <option value="select">---選択してください---</option>
                      <option value="meat">肉</option>
                      <option value="fish">魚</option>
                      <option value="salad">野菜・サラダ</option>
                      <option value="rice">ごはん・丼</option>
                      <option value="noodle">麺</option>
                      <option value="dessert">デザート</option>
                      <option value="others">その他</option>
                    </select>
                  </Input_table_td>
                </Input_table_tr>
                <Input_table_tr>
                  <Input_table_th>
                    <Input_label htmlFor="url">URL</Input_label>
                  </Input_table_th>
                  <Input_table_td>
                    <Input_default
                      id="url"
                      type="url"
                      name="url"
                      value={form.url}
                      onChange={handleForm}
                      placeholder="サイトのURLを記載してください。"
                    />
                  </Input_table_td>
                </Input_table_tr>
                <Input_table_tr>
                  <Input_table_th>
                    <Input_label htmlFor="memo">メモ</Input_label>
                  </Input_table_th>
                  <Input_table_td>
                    <Textarea_default
                      id="memo"
                      name="memo"
                      value={form.memo}
                      onChange={handleForm}
                      placeholder="自由に記載してください"
                    />
                  </Input_table_td>
                </Input_table_tr>
              </tbody>
            </table>
            <Input_button onClick={handleRecipeList}>登録</Input_button>
          </div>
        </div>
      </div>
    </>
  );
}
