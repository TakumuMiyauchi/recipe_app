import express from "express";
// バリデーション
import { body } from "express-validator";
import {
  getAllRecipe,
  getRecipeById,
	DeleteRecipe,
  registRecipe,
  updateRecipe,
} from "../controllers/recipe.mjs";

const router = express.Router();

// const recipe = [
//   {
//     name: "ラーメン",
//     genre: "noodle",
//     url: "https://tabelog.com/saitama/C11234/rstLst/MC0101/",
//     memo: "おいしい",
//     created: new Date().toISOString(),
//     isDone: false,
//   },
// ];

// /api/recipe
router.get("/", getAllRecipe);

router.get("/:id", getRecipeById);

router.post(
  "/",
  // バリデーション
  body("name").notEmpty().withMessage("タイトルが空です"),
  body("genre")
    .custom((value) => value !== "select")
    .withMessage("ジャンルを選択してください"),
  body("url").notEmpty().withMessage("エラー"),
  // 処理
  registRecipe
);

router.delete("/:id", DeleteRecipe);

router.patch(
  "/:id",
  // バリデーション(変更があった点のみチェック)
  body("name").optional().notEmpty().withMessage("タイトルが空です"),
  body("genre")
    .optional()
    .custom((value) => value !== "select")
    .withMessage("ジャンルを選択してください"),
  body("url").optional().notEmpty().withMessage("エラー"),
  // 処理
  updateRecipe
);

export default router;
