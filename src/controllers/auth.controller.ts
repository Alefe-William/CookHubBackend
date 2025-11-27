import type { FastifyReply, FastifyRequest } from "fastify";
import * as AuthService from "../services/auth.service";

export const register = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const { name, email, password } = req.body as any;
    const result = await AuthService.registerUser(name, email, password);
    reply.code(201).send(result);
  } catch (err: any) {
    reply.code(400).send({ error: err.message });
  }
};

export const login = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const { email, password } = req.body as any;
    const result = await AuthService.loginUser(email, password);
    reply.send(result);
  } catch (err: any) {
    reply.code(400).send({ error: err.message });
  }
};

export const me = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const user = await AuthService.getUserById((req as any).user.id);
    reply.send(user);
  } catch (err: any) {
    reply.code(400).send({ error: err.message });
  }
};
