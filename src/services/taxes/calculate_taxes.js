import handle from "./handle.js";

async function calculateTaxes() {
  console.log('');
  prompt.get(promptSchemaTaxes, handle);
  prompt.start();
}

export default calculateTaxes;
