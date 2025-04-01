import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

const callLLM = async (prompt) => {
  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "mistralai/mistral-7b-instruct:free",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 400
    })
  });

  const data = await response.json();
  return data.choices?.[0]?.message?.content || "No response";
};

const checkWikipedia = async (query) => {
  const response = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(query)}`);
  if (!response.ok) return "Not found";
  const data = await response.json();
  return data.extract || "No extract found";
};

app.post("/api/check", async (req, res) => {
  const { prompt } = req.body;

  const llmResponse = await callLLM(prompt);
  const namedEntities = (llmResponse.match(/\b[A-Z][a-z]+(?:\s[A-Z][a-z]+)*\b/g) || []).filter(word => word.length > 4);
  const uniqueEntities = [...new Set(namedEntities)];

  const verificationResults = await Promise.all(uniqueEntities.map(async (term) => {
    const wiki = await checkWikipedia(term);
    return { term, summary: wiki };
  }));

  res.json({ llmResponse, verificationResults });
});

app.listen(PORT, () => {
  console.log(`🧠 Hallucination Checker running at http://localhost:${PORT}`);
});
