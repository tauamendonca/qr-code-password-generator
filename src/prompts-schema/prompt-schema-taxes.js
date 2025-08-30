import chalk from "chalk";

const promptSchemaTaxes = [
  {
    name: "select",
    description: chalk.yellow(
      ` 
      Select Country 
        (1) BRAZIL
        (2) CHINA
        (3) ENGLAND
        (4) FRANCE 
        (5) GERMANY
        (6) JAPAN
        (7) USA
      `
    ),
    pattern: /^[1-7]+$/,
    message: chalk.red.italic("Choose only from 1 to 7"),
    required: true,
  },
  {
    name: "type",
    description: chalk.yellow(`Insert the value of your product:`),
    pattern: /^(?!0\.00$)(?:0\.(?:0[1-9]|[1-9]\d)|[1-9]\d{0,9}(?:\.\d{2})?)$/,
    message: chalk.red.italic("Please type a valid number with two decimals like 1.00"),
    required: true,
  },
];

export default promptSchemaTaxes;
