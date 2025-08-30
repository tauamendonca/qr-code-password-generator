import handle from "./handle.js";

async function calculateInterest() {
  console.log('');
  prompt.get(promptSchemaInterest, handle);
  prompt.start();
}

export default calculateInterest;
