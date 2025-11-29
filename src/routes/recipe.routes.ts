import type { FastifyInstance } from "fastify";
import {
  getPopularRecipes,
  getQuickRecipes,
  getRecipeById,
  getRecipesByCategory,
} from "../controllers/recipe.controller";

export default async function recipeRoutes(server: FastifyInstance) {
  server.get("/popular", getPopularRecipes);
  server.get("/quick", getQuickRecipes);
  server.get("/:id", getRecipeById);
  server.get("/category/:category", getRecipesByCategory);
}
