import express from "express";
import env from "dotenv";
env.config();

import "./helpers/db.mjs"
import apiRoutes from "./api-routes/index.mjs";

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

// APIの取得
app.use("/api",apiRoutes);

// パスが見つからなかった際の処理
app.use(function(req,res) {
	res.status(404).json({msg: "Page Not Found"});
})

app.listen(port, () => {
	console.log(`Server Start: http://localhost:${port}`);
});
