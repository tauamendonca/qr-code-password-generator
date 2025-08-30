import prompt from "prompt";

import promptSchemaMain from "../../prompts-schema/prompt-schema-main.js";

import createQRCode from "../qr-code/create_qr.js";
import createPassword from "../password/create_pass.js";
import calculateInterest from "../interest/calculate_interest.js";
import calculateTaxes from "../taxes/calculate_taxes.js";
import convertCurrency from "../converter/convert_currency.js";

async function main() {
  prompt.get(promptSchemaMain, async (err, choose) => {
    if (err) console.log(err);

    if (choose.select == 1) await createQRCode();
    if (choose.select == 2) await createPassword();
    if (choose.select == 3) await calculateTaxes();
    if (choose.select == 4) await convertCurrency();
    if (choose.select == 5) await calculateInterest();
  });

  prompt.start();
}

export default main;