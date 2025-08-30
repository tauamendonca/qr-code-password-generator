import chalk from "chalk";

const promptSchemaCurrency = [
  {
    name: "type",
    description: chalk.yellow(
      ` 
      Select the currency you are using:
        (1) BRAZILIAN REAL
        (2) CANADIAN DOLLAR
        (3) CHINESE YUAN 
        (4) EUROPEAN EURO
        (5) INDIAN RUPPEE
        (6) JAPANESE YEN
        (7) USA DOLLAR
      `
    ),
    pattern: /^[1-7]+$/,
    message: chalk.red.italic("Choose only from 1 to 7"),
    required: true,
  },
  {
    name: "currency",
    description: chalk.yellow(
      ` 
      Select the currency you want to convert to:
        (1) BRAZILIAN REAL
        (2) CANADIAN DOLLAR
        (3) CHINESE YUAN 
        (4) EUROPEAN EURO
        (5) INDIAN RUPPEE
        (6) JAPANESE YEN
        (7) USA DOLLAR
      `
    ),
    pattern: /^[1-7]+$/,
    message: chalk.red.italic("Choose only from 1 to 7"),
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