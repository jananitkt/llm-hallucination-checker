
# 🧠 LLM Hallucination Checker

A full-stack AI reliability tool created by **Janani Thamilarasu** to help detect and verify potential hallucinations in large language model (LLM) outputs using OpenRouter and Wikipedia APIs.

---

## 🔍 What Is a Hallucination?

A hallucination occurs when an LLM generates **false or unverifiable facts** with confidence.

This app:
- Accepts a user prompt
- Sends it to an LLM (via OpenRouter)
- Extracts named entities from the response
- Verifies them using the Wikipedia API
- Flags any mismatches

---

## 🎯 Why This Project Matters

- Fact-checking is critical in AI safety and reliability.
- Hallucinations in fields like healthcare, law, or education can be dangerous.
- This tool demonstrates how AI + APIs can be used to detect false claims.

---

## ✅ Key Features

- 🔑 Uses OpenRouter for LLM responses
- 🌐 Uses Wikipedia REST API for fact-checking
- 🔍 Named Entity Extraction (capitalized phrases)
- 📄 Highlights real vs. potentially made-up information
- 🧑‍🎓 Designed for research, learning, and transparency

---

## 🚀 How to Run This Project

### 1. Install Node packages
```bash
npm install
```

### 2. Add your OpenRouter key to `.env`
Create a file named `.env` and add:
```env
OPENROUTER_API_KEY=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
```

### 3. Start the app
```bash
npm start
```

### 4. Visit:
[http://localhost:3000](http://localhost:3000)

---

## 🧪 3 Sample Prompts to Test

### 1. Political Check
```
Who was the president of India in 2023?
```
- ❌ LLM might say: Narendra Modi
- ✅ Wikipedia says: Droupadi Murmu

---

### 2. Movie Mismatch
```
Who played the lead role in the 2020 movie Interstellar?
```
- ❌ Might mix up years or actors
- ✅ Wikipedia confirms: Interstellar was 2014, Matthew McConaughey

---

### 3. Scientific Claim
```
Can humans breathe underwater without any assistance?
```
- ❌ Some models might say “yes with practice”
- ✅ Reality: No, artificial assistance is needed

---

## 🧠 Educational Goals

- Learn to evaluate AI outputs
- Use real-world APIs to validate claims
- Build safer, more trustworthy LLM apps

---

## 📁 Folder Structure

```
hallucination-checker/
├── .env              ← contains OpenRouter API key (do not upload)
├── .gitignore
├── package.json
├── server.mjs        ← Node.js backend
└── public/
    ├── index.html    ← Frontend UI
    └── script.js     ← Browser logic
```

---

Built with ❤️ by [Janani Thamilarasu](https://github.com/jananitkt)
