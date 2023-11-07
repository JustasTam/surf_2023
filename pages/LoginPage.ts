import { expect } from '@playwright/test';


const emailInputSelector = 'input[name="emailField"]';
const passwordInputSelector = 'input[name="passwordField"]';
const loginButtonSelector = '#loginSubmit';


class LoginPage {

  async gotoLogin(page) {
    await page.goto('https://my.surfshark.com/auth/login');
    // just a double check assertion
    await expect(page).toHaveTitle("Surfshark: my account");
  }

  async fillLoginForm(page, credentials) {
    await page.fill(emailInputSelector, credentials.email);
    await page.fill(passwordInputSelector, credentials.password);

    await page.click(loginButtonSelector);
  }

  // async navigateToPricing(page) {
  //   // click on the get surfshark btn in header navbar
  //   await page.click(getSurfsharkBtn);
  //   // assert if the test has left the home page and entered pricing page
  //   await page.waitForLoadState(); // wait for page load
  //   await expect(page).toHaveTitle("How much does Surfshark cost? Check the pricing - Surfshark");
  // }

}

export default new LoginPage();