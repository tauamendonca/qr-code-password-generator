import chalk from "chalk";

const promptSchemaCurrency = [
  {
    name: "type",
    description: chalk.yellow(
      ` 
      Select Currency
        (1) BRAZILIAN REAL
        (2) EUROPEAN EURO
        (3) CANADIAN DOLLAR
        (4) CHINESE YUAN 
        (5) JAPANESE YEN
        (6) USA DOLLAR
      `
    ),
    pattern: /^[1-2]+$/,
    message: chalk.red.italic("Choose only from 1 to 6"),
    required: true,
  },
  {
    name: "value",
    description: chalk.yellow("Insert value you would like to convert:"),
    pattern: /^(?!0\.00$)(?:0\.(?:0[1-9]|[1-9]\d)|[1-9]\d{0,9}(?:\.\d{2})?)$/,
    message: chalk.red.italic("Please type a valid number with two decimals like 1.00"),
    required: true,
  },
];

export default promptSchemaCurrency;