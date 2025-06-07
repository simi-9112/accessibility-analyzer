import axios from "axios";

export async function queryLLM(prompt) {
  const provider = process.env.AI_PROVIDER;
  console.log("🔍 Using AI Provider:", provider);

  if (provider === "together") {
    try {
      const response = await axios.post(
        "https://api.together.xyz/v1/chat/completions",
        {
          model: "mistralai/Mistral-7B-Instruct-v0.2",
          messages: [{ role: "user", content: prompt }],
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.TOGETHER_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      return response.data.choices[0].message.content;
    } catch (err) {
      console.error("❌ Together API Error:", err.response?.data || err.message);
      throw err;
    }
  }

  if (provider === "ollama") {
    try {
      const response = await axios.post(`${process.env.OLLAMA_HOST}/api/generate`, {
        model: "phi3",
        prompt: prompt,
        stream: false,
      });

      return response.data.response;
    } catch (err) {
      console.error("❌ Ollama API Error:", err.response?.data || err.message);
      throw err;
    }
  }

  throw new Error("Unsupported AI provider. Set AI_PROVIDER to 'together' or 'ollama'.");
}
