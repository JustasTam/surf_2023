import { expect } from '@playwright/test';


const getSurfsharkBtn = `header a:has-text("Get Surfshark")`;


class HomePage {

  async gotoSurfshark(page) {
    await page.goto('https://surfshark.com/');
    // just a double check assertion
    await expect(page).toHaveTitle(/Surfshark/);
  }

  async navigateToPricing(page) {
    // click on the get surfshark btn in header navbar
    await page.click(getSurfsharkBtn);
    // assert if the test has left the home page and entered pricing page
    await page.waitForLoadState(); // wait for page load
    await expect(page).toHaveTitle("How much does Surfshark cost? Check the pricing - Surfshark");
  }

}

export default new HomePage();