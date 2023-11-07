import { expect } from '@playwright/test';
import CommonFunctions from "helpers/CommonFunctions";
import { testCreditCard } from 'helpers/TestingData';


const emailInputSelector = 'input[data-test="input-email"]';
const ccNameInputSelector = 'input[placeholder="Name on card"]';
const complePurchaseButtonSelector = 'button[data-test="complete-purchase-button"]';
const errorsSelector = 'div[data-test="errors-block"]';



class CheckoutPage {

  async fillForm(page) {
    // get a random email and put it inside email input field
    const email = await CommonFunctions.buildRandomEmail();
    await page.fill(emailInputSelector, email);

    // !note that payment provider could also be chosen randomly
    await this.fillCcDetailsAndPurchase(page);
  }

  async fillCcDetailsAndPurchase(page) {
    // fill in fake details
    // wait for the iframe to be ready
    await page.waitForSelector('iframe[class="processout-field-cc-iframe"]');
    const frames = page.frameLocator('.processout-field-cc-iframe');
    // fill cc number
    await frames.nth(0).locator('input[name="cc-number"]').fill(testCreditCard.number);
    // fill exp date
    await frames.nth(1).locator('input[name="cc-exp"]').pressSequentially(testCreditCard.expDate);    
    // fill cvc
    await frames.nth(2).locator('input[name="cc-cvc"]').fill(testCreditCard.cvc);
    // fil name
    await page.fill(ccNameInputSelector, testCreditCard.name);

    // click purchase
    await page.click(complePurchaseButtonSelector);

    // expect successful payment
  }


}

export default new CheckoutPage();