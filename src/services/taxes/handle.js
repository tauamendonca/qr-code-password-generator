import { countries } from "../../db/database.js";
import chalk from "chalk";

async function handle(err, userResponse) {
  if (err) {
    console.log("error on application");
    return;
  }

  // receber os dados e cruzar com a tabela vinda do database
  const country = countries.find((e) => e.ID === userResponse.country);
  const baseValue = Number(userResponse.value);

  //calcular a conversão
  let taxedPrice = baseValue * (1 + country.tax);
 
  console.log(chalk.greenBright(`\nThe tax from ${country.name} today is: ${country.tax}`));
  console.log(chalk.green(`The price went up from $ ${baseValue.toFixed(2)} to the new value of $ ${taxedPrice.toFixed(2)}`));
}

export default handle;
