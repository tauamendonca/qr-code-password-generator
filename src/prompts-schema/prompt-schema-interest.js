import chalk from "chalk";

const promptSchemaQRCode = [
    {
    name: "amount",
    description: chalk.yellow(`
      Insert principal (starting amount):`),
    pattern: /^(?!0\.00$)(?:0\.(?:0[1-9]|[1-9]\d)|[1-9]\d{0,9}(?:\.\d{2})?)$/,
    message: chalk.red.italic("Please type a valid number with two decimals like 1.00"),
    required: true,
  },
  {
    name: "capitalization",
    description: chalk.yellow(
      ` 
      Select capitalization frequency: 
        (1) Annual (12 months)
        (2) Semiannual (6 months)
        (3) Quarterly (3 months)
        (4) Monthly (30 days)
        (5) Daily (365 days)
      `
    ),
    pattern: /^[1-4]+$/,
    message: chalk.red.italic("Choose only from 1 to 5"),
    required: true,
  },
  {
    name: "rate",
    description: chalk.yellow(`
      Insert annual rate:`),
    pattern: /^(?!0{1,2}\.0+$)(?:0?[0-9]|[1-9][0-9])\.[0-9]{1,4}$/,
    message: chalk.red.italic("Please type a valid number with up to four decimals, between 0.0001 and 99.9999. Valid example: 1.34"),
    required: true,
  },
];

export default promptSchemaQRCode;
