import chalk from "chalk";
import handle from "./handle.js";

async function createPassword() {
  console.log(chalk.green("\nPassword generated successfully:"));
  const password = await handle();
  console.log(password);
  console.log('');
}

export default createPassword;
