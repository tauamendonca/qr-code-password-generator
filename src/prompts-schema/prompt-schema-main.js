import chalk from "chalk";

const promptSchemaMain = [
  {
    name: "select",
    description: chalk.yellow.bold(
      ` 
      Select the app you want:
        (1) QRCODE 
        (2) PASSWORD
      `
    ),
    pattern: /^[1-2]+$/,
    message: chalk.red.italic("Choose only between 1 and 2"),
    required: true,
  },
];

export default promptSchemaMain;
