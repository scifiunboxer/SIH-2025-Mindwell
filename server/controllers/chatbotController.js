import asyncHandler from 'express-async-handler';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const processMessage = asyncHandler(async (req, res) => {
  const { message } = req.body;

  if (!message) {
    res.status(400);
    throw new Error('Message is required');
  }

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});
    const chatContext = `You are a supportive and empathetic mental wellness assistant...`; // Your full prompt here
    const prompt = `${chatContext}\n\nStudent says: "${message}"\n\nYour response:`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const reply = response.text();
    res.json({ reply });
  } catch (error) {
    console.error("AI Generation Error:", error);
    res.status(500).json({ reply: "Sorry, I'm having a little trouble connecting right now." });
  }
});

export { processMessage };