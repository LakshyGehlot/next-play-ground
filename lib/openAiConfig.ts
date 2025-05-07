import { OpenAI } from "openai";

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API,
  baseURL: "https://models.inference.ai.azure.com",
});
