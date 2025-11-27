import type { FastifyPluginAsync } from "fastify";
import * as AuthController from "../controllers/auth.controller";
import authMiddleware from "../middlewares/auth";

const routes: FastifyPluginAsync = async (app) => {
  app.post("/register", AuthController.register);
  app.post("/login", AuthController.login);
  app.get("/me", { preHandler: [authMiddleware] }, AuthController.me);
};

export default routes;
