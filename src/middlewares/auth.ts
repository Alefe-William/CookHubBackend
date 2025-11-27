import type { FastifyReply, FastifyRequest } from "fastify";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET as string;

export default async function (req: FastifyRequest, reply: FastifyReply) {
  try {
    const auth = req.headers.authorization;
    if (!auth) {
      return reply.code(401).send({ error: "Token não informado" });
    }

    const token = auth.split(" ")[1];
    if (!token) {
      return reply.code(401).send({ error: "Token mal formatado" });
    }

    const decoded = jwt.verify(token, JWT_SECRET) as any;

    (req as any).user = { id: decoded.id };
  } catch {
    return reply.code(401).send({ error: "Token inválido" });
  }
}
