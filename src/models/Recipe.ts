import { Schema, model, Document } from "mongoose";

export interface IIngredient {
  name: string;
  measure?: string;
}

export interface IRecipe extends Document {
  title: string;
  category: string;
  image?: string;
  time?: string;
  servings?: string;
  instructions?: string;
  ingredients?: IIngredient[];
  createdAt: Date;
}

const IngredientSchema = new Schema<IIngredient>(
  {
    name: { type: String, required: true },
    measure: { type: String },
  },
  { _id: false }
);

const RecipeSchema = new Schema<IRecipe>(
  {
    title: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String },
    time: { type: String },
    servings: { type: String },
    instructions: { type: String },
    ingredients: { type: [IngredientSchema], default: [] }
  },
  { timestamps: true }
);

export const Recipe = model<IRecipe>("Recipe", RecipeSchema);
