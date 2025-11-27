console.log("JWT_SECRET carregado:", process.env.JWT_SECRET)
import User from "../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET as string;

export const registerUser = async (name: string, email: string, password: string) => {
  const exists = await User.findOne({ email });
  if (exists) throw new Error("Email já cadastrado");

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await User.create({ name, email, password: hash });

  const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "7d" });

  return { user, token };
};

export const loginUser = async (email: string, password: string) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("Credenciais inválidas");

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) throw new Error("Credenciais inválidas");

  const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "7d" });

  return { user, token };
};

export const getUserById = (id: string) => User.findById(id).select("-password");
