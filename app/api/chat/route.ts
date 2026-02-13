import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    // Validate input
    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Invalid input message" }, { status: 400 });
    }

    // Use a fixed model name (avoid listModels, as it's not available)
    const modelName = "gemini-1.5-pro-latest"; // Updated to a valid Gemini model

    // Get the model instance
    const model = genAI.getGenerativeModel({ model: modelName });

    // Generate content using the model
    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: message }] }],
    });

    // Ensure a valid response
    if (!result || !result.response) {
      throw new Error("Invalid response from Gemini API");
    }

    const response = result.response.text();

    return NextResponse.json({ response });
  } catch (error) {
    console.error("Error in chat API:", error);
    
    return NextResponse.json(
      { error: "Failed to process the request", details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}

