import { validationResult } from "express-validator";
import Recipe from "../models/recipe.mjs";

// GET
async function getAllRecipe(req, res) {
  const recipe = await Recipe.find();
  res.json(recipe);
}

async function getRecipeById(req, res) {
  const _id = req.params.id;
  const recipe = await Recipe.findById(_id);
	if(recipe === null ) {
		res.status(404).json({msg: "Page Not Found"});
	}
  res.json(recipe);
}

// POST
async function registRecipe(req, res) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const errs = errors.array();
    console.log(errs);
    return res.status(400).json(errs);
  }

  const body = req.body;
  const recipe = new Recipe(body);
  const newRecipe = await recipe.save();
  res.status(201).json(newRecipe);
}

// DELETE
async function DeleteRecipe(req, res) {
  const _id = req.params.id;
  console.log(_id);
  const {deletedCount} = await Recipe.deleteOne({ _id });
	if(deletedCount === 0 ) {
		res.status(404).json({msg: "Page Not Found"});
	}
	console.log(result);
  res.json({ msg: "Delete successed" });
}

// PATCH
async function updateRecipe(req, res) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const errs = errors.array();
    console.log(errs);
    return res.status(400).json(errs);
  }

  const { name, genre, url, memo } = req.body;
  const _id = req.params.id;
  console.log(_id);
  const recipe = await Recipe.findById(_id);
	// 指定したID値が存在しない場合の処理
	if(recipe === null ) {
		res.status(404).json({msg: "Target Recipe Not Found"});
	}
  if (name !== undefined) {
    recipe.name = name;
  }
  if (genre !== undefined) {
    recipe.genre = genre;
  }
  if (url !== undefined) {
    recipe.url = url;
  }
  if (memo !== undefined) {
    recipe.memo = memo;
  }
  await recipe.save();
  res.json(recipe);
}

export {
  getAllRecipe,
  getRecipeById,
  DeleteRecipe,
  registRecipe,
  updateRecipe,
};
