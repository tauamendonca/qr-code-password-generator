import calculateCompoundInterest from "./utils/calculate.js";
import { getFrequency } from "./utils/frequency.js";
import chalk from "chalk";

async function handle(err, userResponse) {
  if (err) {
    console.log("error on application");
    return;
  }

  // recebe e separa em variáveis as respostas do usuário para melhor visualização
  const principal = Number(userResponse.amount);
  const annualRate = Number(userResponse.annualRate);
  const time = Number(userResponse.time);
  const timeUnit = userResponse.timeUnit;
  const frequency = getFrequency(userResponse.frequency);

  //chama a função para calcular os juros compostos
  let finalResult = calculateCompoundInterest(principal, annualRate, time, timeUnit, frequency);
  
  //exibe o resultado do cálculo
  console.log(chalk.whiteBright(`\nThese are your results after ${time} ${(timeUnit === 2) ? 'month(s)': 'year(s)'}:`));
  console.log(chalk.green('Total amount: ' + finalResult.finalAmount.toFixed(2)));
  console.log(chalk.green('Interest earned: ' + finalResult.interestEarned.toFixed(2)));
  console.log(chalk.green('Percentage return: ' + finalResult.percentageReturn.toFixed(2) + '%'));
  console.log(chalk.green('Total number of periods: ' + finalResult.totalPeriods));
}

export default handle;