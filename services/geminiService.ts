import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

let chatSession: Chat | null = null;

const getAiClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key not found in environment variables");
  }
  return new GoogleGenAI({ apiKey });
};

export const initializeChat = () => {
  try {
    const ai = getAiClient();
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: `You are an expert cybersecurity consultant specialized in the EU NIS2 Directive (Network and Information Systems Directive 2). 
        Your goal is to assist users visiting a consultancy landing page.
        
        Guidelines:
        1. Explain NIS2 concepts simply but professionally.
        2. Help users understand if their sector (Energy, Transport, Banking, Health, Digital Infrastructure, etc.) falls under "Essential" or "Important" entities.
        3. Highlight the risks of non-compliance (fines, liability).
        4. Always gently encourage the user to book a formal audit or consultation using the contact form on the page for specific legal advice.
        5. Keep responses concise (under 150 words) unless asked for details.
        
        Tone: Professional, authoritative, yet accessible and helpful.`,
      },
    });
  } catch (error) {
    console.error("Failed to initialize chat session:", error);
  }
};

export const sendMessageToGeminiStream = async function* (message: string) {
  if (!chatSession) {
    initializeChat();
  }

  if (!chatSession) {
    yield "I'm having trouble connecting to the AI service right now. Please try again later.";
    return;
  }

  try {
    const result = await chatSession.sendMessageStream({ message });
    
    for await (const chunk of result) {
      const c = chunk as GenerateContentResponse;
      if (c.text) {
        yield c.text;
      }
    }
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    yield "An error occurred while processing your request. Please check your connection or try again.";
  }
};