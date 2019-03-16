const mongoose = require("mongoose");
const Recipe = mongoose.model("recipes");

exports.getRecipes = async (req, res) => {
  const recipes = await Recipe.find();

  if (recipes) {
    res.send(recipes);
  } else {
    return;
  }
};

exports.createRecipe = async (req, res) => {
  const { name, ingredients, recipe, chef } = req.body;
  const newRecipe = await new Recipe({
    name,
    ingredients,
    recipe,
    chef
  }).save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
};