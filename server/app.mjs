import express from "express";
import env from "dotenv";
env.config();

import "./helpers/db.mjs";
import apiRoutes from "./api-routes/index.mjs";

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

// CORSの設定
import cors from "cors";
app.use(cors({
	origin: 'http://localhost:5173',
}))

// APIの取得
app.use("/api", apiRoutes);

// ID値が不正な場合
app.use(function (err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  console.log(err);
  res.status(500).json({ msg: "不正なエラーが発生しました。" });
});

// パスが見つからなかった際の処理
app.use(function (req, res) {
  res.status(404).json({ msg: "Page Not Found" });
});

app.listen(port, () => {
  console.log(`Server Start: http://localhost:${port}`);
});
