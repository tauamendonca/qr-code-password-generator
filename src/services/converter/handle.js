import chalk from "chalk";
import { currencies } from "../../db/database.js";

async function handle(err, userResponse) {
  if (err) {
    console.log("error on application");
    return;
  }

  // receber os dados e cruzar com a tabela vinda do database
  const currencyFrom = currencies.find((e) => e.ID === userResponse.currencyFrom);
  const currencyTo = currencies.find((e) => e.ID === userResponse.currencyTo);
  const baseValue = Number(userResponse.value);

  //calcular a conversão
  let convertedCurrency = baseValue * (currencyTo.value / currencyFrom.value);
  
  console.log(chalk.greenBright(`\nThe conversion of ${baseValue} ${currencyFrom.name} to ${currencyTo.name} is:`));
  console.log(chalk.green(currencyTo.code + ' ' + convertedCurrency));
}

export default handle;
