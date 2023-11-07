import { test, expect } from '@playwright/test';

import HomePage from "pages/HomePage"; 
import PricingPage from "pages/PricingPage";
import CheckoutPage from "pages/CheckoutPage";


test.beforeEach(async ({ page }, testInfo) => {
  // log current running test title
  console.log(`Running -> ${testInfo.title}`);
  // navigate to root path before each test
  await HomePage.gotoSurfshark(page);
});


test.describe('Registration', () => {

  test('Happy path - user should be able to sign up for Surfshark VPN account (random plan and length)', async ({ page }) => {
    // navigate to pricing page
    await HomePage.navigateToPricing(page);
    // select random length
    await PricingPage.selectRandomPlanLength(page);
    // select random plan
    await PricingPage.selectRandomPlan(page);
    // fill details and confirm
    await CheckoutPage.fillForm(page);
  });

});