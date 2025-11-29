import type { FastifyRequest, FastifyReply } from "fastify";
import { Recipe } from "../models/Recipe";

export async function getPopularRecipes(
  req: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const recipes = await Recipe.find().limit(6).lean();
    return reply.send(recipes);
  } catch (error) {
    return reply
      .code(500)
      .send({ error: "Erro ao carregar receitas populares" });
  }
}

export async function getQuickRecipes(
  req: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const recipes = await Recipe.find({ category: "Rápidas" })
      .limit(6)
      .lean();

    return reply.send(recipes);
  } catch (error) {
    return reply
      .code(500)
      .send({ error: "Erro ao carregar receitas rápidas" });
  }
}

export async function getRecipeById(
  req: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) {
  try {
    const recipe = await Recipe.findById(req.params.id).lean();

    if (!recipe) {
      return reply.code(404).send({ error: "Receita não encontrada" });
    }

    return reply.send(recipe);
  } catch (error) {
    return reply.code(500).send({ error: "Erro ao buscar receita" });
  }
}

export async function getRecipesByCategory(
  req: FastifyRequest<{ Params: { category: string } }>,
  reply: FastifyReply
) {
  try {
    const category = req.params.category;

    const results = await Recipe.find({ category }).lean();
    return reply.send(results);
  } catch (error) {
    return reply
      .code(500)
      .send({ error: "Erro ao carregar receitas da categoria" });
  }
}
