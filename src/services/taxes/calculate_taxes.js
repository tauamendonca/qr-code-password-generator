import promptSchemaTaxes from "../../prompts-schema/prompt-schema-taxes.js";
import handle from "./handle.js";
import prompt from "prompt";

async function calculateTaxes() {
  console.log('');
  prompt.get(promptSchemaTaxes, handle);
  prompt.start();
}

export default calculateTaxes;
