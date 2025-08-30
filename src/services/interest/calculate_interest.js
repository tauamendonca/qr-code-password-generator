import chalk from "chalk";
import handle from "./handle.js";

async function calculateInterest() {
  console.log('');
  console.log(chalk.green("Password generated successfully:"));
  const password = await handle();
  console.log(password);
  console.log('');
}

export default calculateInterest;
