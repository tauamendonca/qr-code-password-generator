import chalk from "chalk";

const promptSchemaMain = [
  {
    name: "select",
    description: chalk.yellow.bold(
      ` 
      Select the app you want:
        (1) QRCODE 
        (2) PASSWORD
        (3) TAXES CALCULATOR
        (4) CURRENCY CONVERTER
        (5) COMPOUND INTEREST CALCULATOR
      `
    ),
    pattern: /^[1-5]+$/,
    message: chalk.red.italic("Choose only between 1 and 5"),
    required: true,
  },
];

export default promptSchemaMain;
