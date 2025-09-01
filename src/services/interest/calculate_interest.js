import handle from "./handle.js";
import prompt from "prompt";
import promptSchemaInterest from "../../prompts-schema/prompt-schema-interest.js";

async function calculateInterest() {
  console.log('');
  prompt.get(promptSchemaInterest, handle);
  prompt.start();
}

export default calculateInterest;
