import { queryLLM } from "./llmClient.js";
import { buildPrompt } from "./promptBuilder.js";

export async function generateFixSuggestion(violation) {
  const prompt = buildPrompt(violation);
  const suggestion = await queryLLM(prompt);
  return suggestion;
}
