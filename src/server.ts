import dotenv from "dotenv";
dotenv.config();

import Fastify from "fastify";
import cors from "@fastify/cors";
import connectDB from "./config/database";
import authRoutes from "./routes/auth.routes";
import recipeRoutes from "./routes/recipe.routes";

const server = Fastify({ logger: true });

server.register(cors, { origin: true });

connectDB(process.env.DATABASE_URL as string);

server.register(authRoutes, { prefix: "/api/auth" });
server.register(recipeRoutes, { prefix: "/api/recipes" });

const start = async () => {
  try {
    const port = Number(process.env.PORT) || 3001;
    await server.listen({ port, host: "0.0.0.0" });
    console.log("Server rodando na porta", port);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();
