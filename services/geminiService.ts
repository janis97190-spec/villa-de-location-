import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { VILLAS, EXCURSIONS } from '../constants';

const API_KEY = process.env.API_KEY || '';

// System instruction to give the AI context about the website's data
const SYSTEM_INSTRUCTION = `
Tu es 'Ti'Punch', l'assistant virtuel expert et chaleureux de 'GuadaVillas & Évasions', un site de location de villas et d'excursions en Guadeloupe.
Ton rôle est d'aider les utilisateurs à trouver la villa ou l'excursion parfaite en fonction de leurs besoins.

Voici les données actuelles du site (Catalogue) :
VILLAS: ${JSON.stringify(VILLAS.map(v => ({ name: v.name, location: v.location, price: v.pricePerNight, capacity: v.capacity, amenities: v.amenities })))}
EXCURSIONS: ${JSON.stringify(EXCURSIONS.map(e => ({ name: e.name, type: e.type, price: e.price, location: e.location })))}

Règles de comportement :
1. Sois toujours poli, enjoué et utile. Utilise un ton "vacances".
2. Si un utilisateur cherche une villa, propose des options spécifiques de la liste ci-dessus qui correspondent à ses critères (prix, lieu, capacité).
3. Si un utilisateur cherche une activité, propose des excursions du catalogue.
4. Tu peux aussi donner des conseils généraux sur la Guadeloupe (météo, plages, culture).
5. Réponds de manière concise mais informative.
6. Ne pas inventer de villas ou d'excursions qui ne sont pas dans la liste.
`;

let chatSession: Chat | null = null;

export const initializeChat = (): Chat => {
  if (!API_KEY) {
    console.warn("API Key is missing for Gemini Service");
    // Return a dummy object or handle gracefully if no key, 
    // but the app structure assumes key is present for AI features.
  }

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
    },
  });
  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!chatSession) {
    initializeChat();
  }
  
  if (!chatSession) {
      return "Désolé, je ne peux pas me connecter au service d'IA pour le moment. Vérifiez la clé API.";
  }

  try {
    const response: GenerateContentResponse = await chatSession.sendMessage({ message });
    return response.text || "Désolé, je n'ai pas compris.";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "Oups, j'ai eu un petit coup de chaud. Réessayez plus tard !";
  }
};