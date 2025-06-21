// レシピ登録ページ
import { useState } from "react";
import Input_default from "./components/input_default";
import Textarea_default from "./components/textarea_default";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    url: "",
    memo: "",
  });

  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h2>登録ページ</h2>
      <form action="">
        <div>
          <div>
            <label htmlFor="name">レシピ名</label>
            <Input_default
							id="name"
              type="text"
							name="name"
              value={form.name}
              onChange={handleForm}
              placeholder="レシピ名を入力してください。"
            />
          </div>
          <div>
            <label>ジャンル</label>
          </div>
          <div>
            <label htmlFor="url">URL</label>
            <Input_default
							id="url"
              type="url"
							name="url"
              value={form.url}
              onChange={handleForm}
              placeholder="サイトのURLを記載してください。"
            />
          </div>
          <div>
            <label htmlFor="memo">メモ</label>
            <Textarea_default
							id="memo"
							name="memo"
              value={form.memo}
              onChange={handleForm}
              placeholder="自由に記載してください"
            />
          </div>
        </div>
      </form>
    </>
  );
}
