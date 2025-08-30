import chalk from "chalk";

const promptSchemaMain = [
  {
    name: "select",
    description: chalk.yellow.bold(
      ` 
      Select the app you want:
        (1) QRCODE 
        (2) PASSWORD
        (3) TAX CALCULATOR
        (4) CURRENCY CONVERTER
      `
    ),
    pattern: /^[1-4]+$/,
    message: chalk.red.italic("Choose only between 1 and 4"),
    required: true,
  },
];

export default promptSchemaMain;
