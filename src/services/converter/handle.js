import chalk from "chalk";

async function handle(err, userResponse) {
  if (err) {
    console.log("error on application");
    return;
  }

  
  const convertedCurrency = userResponse.currencyTo + userResponse.currencyFrom + userResponse.value;

  console.log(chalk.green("The value is:\n"));
  console.log(convertedCurrency);
}

export default handle;
