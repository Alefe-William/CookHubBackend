import type { FastifyReply, FastifyRequest } from "fastify";
import { recipeService } from "../services/recipe.service";

export async function getPopularRecipes(req: FastifyRequest, reply: FastifyReply) {
  try {
    const recipes = await recipeService.getPopularRecipes();
    return reply.send({ recipes });
  } catch (err) {
    reply.code(500).send({ error: "Erro ao buscar receitas populares." });
  }
}

export async function getQuickRecipes(req: FastifyRequest, reply: FastifyReply) {
  try {
    const recipes = await recipeService.getQuickRecipes();
    return reply.send({ recipes });
  } catch (err) {
    reply.code(500).send({ error: "Erro ao buscar receitas rápidas." });
  }
}
