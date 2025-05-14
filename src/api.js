import { InferenceClient } from "@huggingface/inference";

console.log("ENV:", import.meta.env);

// Get API Key from environment variable
const HF_ACCESS_TOKEN = import.meta.env.VITE_HF_ACCESS_TOKEN;

if (!HF_ACCESS_TOKEN) {
    throw new Error("Hugging Face access token not found in environment variables");
}

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page.
`;

// Initialize Hugging Face client
const hf = new InferenceClient(HF_ACCESS_TOKEN);

// Main function to get recipe using Mistral
export async function getRecipe(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ");
    try {
        const response = await hf.chatCompletion({
            model: "mistralai/Mistral-7B-Instruct-v0.3",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` }
            ],
            max_tokens: 1024,
        });
        return response.choices[0].message.content;
    } catch (err) {
        console.error("Error getting recipe:", err.message);
        throw err;
    }
}
