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

    const chatContext = `You are a supportive and empathetic mental wellness assistant for college students. Your name is MindWell. Your primary goal is to provide helpful, safe, and brief first-aid coping strategies. You are NOT a therapist. If a student mentions anything related to self-harm, severe depression, or wanting to talk to a professional, you MUST gently and clearly guide them to the 'Book an Appointment' page on the platform to speak with a human counselor. Do not give medical advice. Keep your responses encouraging and under 75 words.`;
    const prompt = `${chatContext}\n\nStudent says: "${message}"\n\nYour response:`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const reply = response.text();

    res.json({ reply });
  } catch (error) {
    console.error("AI Generation Error:", error);
    res.status(500).json({ reply: "Sorry, I'm having a little trouble connecting right now. Please try again in a moment." });
  }
});

export { processMessage };