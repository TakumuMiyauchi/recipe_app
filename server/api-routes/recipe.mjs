import express from "express";
// バリデーション
import { body } from "express-validator";
import { requestErrorHandler } from "../helpers/helper.mjs";

import {
  getAllRecipe,
  getRecipeById,
  DeleteRecipe,
  registRecipe,
  updateRecipe,
} from "../controllers/recipe.mjs";

const router = express.Router();

router.get("/", requestErrorHandler(getAllRecipe));

router.get("/:id", requestErrorHandler(getRecipeById));

router.post(
  "/",
  // バリデーション
  body("name").notEmpty().withMessage("タイトルが空です"),
  body("genre")
    .custom((value) => value !== "select")
    .withMessage("ジャンルを選択してください"),
  body("url").notEmpty().withMessage("エラー"),
  // 処理
  requestErrorHandler(registRecipe)
);

router.delete("/:id", requestErrorHandler(DeleteRecipe));

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
  requestErrorHandler(updateRecipe)
);

export default router;
