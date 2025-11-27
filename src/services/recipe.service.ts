import { Recipe } from "../models/Recipe";

export const recipeService = {
  async getPopularRecipes() {
    // qualquer lógica que você quiser (por exemplo: mais visualizadas, mais antigas, tags, etc)
    return Recipe.find().limit(6).lean();
  },

  async getQuickRecipes() {
    // aqui você pode filtrar receitas rápidas pela duração (se tiver essa info)
    return Recipe.find().limit(6).lean();
  }
};
