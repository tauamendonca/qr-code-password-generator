import chalk from "chalk";

const promptSchemaInterest = [
    {
    name: "amount",
    description: chalk.yellow(`\nInsert principal (starting amount):`),
    pattern: /^(?!0\.00$)(?:0\.(?:0[1-9]|[1-9]\d)|[1-9]\d{0,9}(?:\.\d{2})?)$/,
    message: chalk.red.italic("Please type a valid number with two decimals like 1.00"),
    required: true,
  },
  {
    name: "frequency",
    description: chalk.yellow(
      `\nSelect capitalization frequency: 
        (1) Annual (12 months)
        (2) Semiannual (6 months)
        (3) Quarterly (3 months)
        (4) Monthly (30 days)
        (5) Daily (365 days)
      `
    ),
    pattern: /^[1-5]+$/,
    message: chalk.red.italic("Choose only from 1 to 5"),
    required: true,
  },
  {
    name: "annualRate",
    description: chalk.yellow(`\nInsert annual rate:`),
    pattern: /^(?!0{1,2}\.0+$)(?:0?[0-9]|[1-9][0-9])\.[0-9]{1,4}$/,
    message: chalk.red.italic("Please type a valid number with up to four decimals, between 0.0001 and 99.9999. Valid example: 1.34"),
    required: true,
  },
  {
    name: "timeUnit",
    description: chalk.yellow(
      `\nThe compound interest will run for how long?: 
        (1) One year or more
        (2) Eleven months or less 
      `
    ),
    pattern: /^[1-2]+$/,
    message: chalk.red.italic("Choose only 1 or 2"),
    required: true,
  },
  {
    name: "time",
    description: chalk.yellow(
      `\nInput the amount of time, relative to the option you chose earlier (in months if eleven months or less, for example): `
    ),
    pattern: /^(?:[1-9][0-9]{0,2}|1[0-9]{3}|2000)$/,
    message: chalk.red.italic("Input a valid number between 1 and 2000"),
    required: true,
  },
];

export default promptSchemaInterest;
