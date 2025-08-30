import chalk from "chalk";

const promptSchemaQRCode = [
  {
    name: "link",
    description: chalk.yellow("Insert link to generate a QR Code"),
  },
  {
    name: "type",
    description: chalk.yellow(
      ` 
      Select QR Code type 
        (1) NORMAL
        (2) TERMINAL
      `
    ),
    pattern: /^[1-2]+$/,
    message: chalk.red.italic("Choose only between 1 and 2"),
    required: true,
  },
];

export default promptSchemaQRCode;
