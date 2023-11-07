import { expect } from '@playwright/test';
var _ = require('lodash');


const topPriceSelector = '.styles_monthPrice__eaztZ';
const bottomPriceSelector = '.styles_planBottomMonthlyPrice__OUh2X';


const planLengths = ["#a-0", "#a-1", "#a-2"];
const planButtons = ["Get Started", "Get One", "Get One+"];


class PricingPage {

  async selectRandomPlanLength(page) {
    // build element from one of the random ids from planLengths array
    const randomPlanTab = page.locator(_.sample(planLengths));
    // select that random tab
    await randomPlanTab.click();

    // checking if the element is enabled is not sufficient here - as DOM sees all the tab elements as enabled
    // added 'active' class is a uniq indentifier that only is being added to the clicked plan length
    await expect(randomPlanTab).toHaveClass(/active/);
  }

  async selectRandomPlan(page) {
    // generate a random selector for one of the plan buttons
    const randomPlanSelector = `section a:has-text("${_.sample(planButtons)}")`;
    await page.waitForSelector(randomPlanSelector);

    // take the first button as there are one more at the bottom with the same name
    const randomPlan = await page.locator(randomPlanSelector).nth(0);

    // select random plan
    await randomPlan.click();
    // expect to be forwarded to checkout page
    await expect(page).toHaveTitle("Sign up for Surfshark VPN account");
  }

  async currentPlanPrices(page) {
    await page.waitForTimeout(3000);

    const topPrices = await page.locator(topPriceSelector);
    // console.log(await topPrices.nth(0).innerText());
    const bottomPrices = await page.locator(bottomPriceSelector);
    // console.log(await bottomPrices.nth(0).innerText());

    // store all values into one array
    const prices = [];

    for (let i = 0; i < 3; i++) {
      prices.push(await topPrices.nth(i).innerText());
      prices.push(await bottomPrices.nth(i).innerText());
    }

    console.log(`Current prices: ${prices}`);
    return prices;
  }

  async comparePrices(page, defaultPrices, newPrices) {
    for (let i = 0; i < defaultPrices.length; i++) {
      console.log(`Comparing: ${defaultPrices[i]}, with: ${newPrices[i]}`);
      // expect values to be different
      await expect(defaultPrices[i] != newPrices[i]).toBeTruthy();
    }
  }

}

export default new PricingPage();
