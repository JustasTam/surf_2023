import { test, expect } from '@playwright/test';

import HomePage from "pages/HomePage";
import SharedPage from "pages/SharedPage";
import PricingPage from "pages/PricingPage";


test.beforeEach(async ({ page }, testInfo) => {
  // log current running test title
  console.log(`Running -> ${testInfo.title}`);
  // navigate to root path before each test
  await HomePage.gotoSurfshark(page);
});


test.describe('Specific', () => {

  test('After selecting a currency, the page should change currencies near all prices on the page', async ({ page }) => {
    // navigate to pricing page
    await HomePage.navigateToPricing(page);

    // get en prices
    const defaultPrices = await PricingPage.currentPlanPrices(page);

    // change to new random lang
    await SharedPage.changeToRandomLang(page);

    // prices should have changed
    const newPrices = await PricingPage.currentPlanPrices(page);

    // compare prices
    await PricingPage.comparePrices(page, defaultPrices, newPrices);

    // !note -> as of the day of writting this test -> your curencies do not change -> this test will fail
  });

});