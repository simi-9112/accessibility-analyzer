import express from "express";
import { generateFixSuggestion } from "../ai/suggestFix.js";

const router = express.Router();

router.post("/suggest", async (req, res) => {
  try {
    console.log("📨 Received violation:", req.body.violation?.help);
    const { violation } = req.body;

    const suggestion = await generateFixSuggestion(violation);
    res.json({ suggestion });
  } catch (err) {
    console.error("❌ AI Suggestion Error:", err.message);
    res.status(500).send("AI suggestion failed");
  }
});

export default router;
