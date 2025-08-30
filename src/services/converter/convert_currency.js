import handle from "./handle.js";

async function convertCurrency() {
  console.log('');
  prompt.get(promptSchemaCurrency, handle);
  prompt.start();
}

export default convertCurrency;
