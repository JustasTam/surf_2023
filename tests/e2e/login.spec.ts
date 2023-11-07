import { test, expect } from '@playwright/test';
import { wrongUserCredentials, validUserCredentials } from 'helpers/TestingData';

import LoginPage from "pages/LoginPage";

const errorsSelector = 'div[data-test="login-error"]';


test.beforeEach(async ({ page }, testInfo) => {
  // log current running test title
  console.log(`Running -> ${testInfo.title}`);
  // navigate to root path before each test
  await LoginPage.gotoLogin(page);
});


test.describe('Login', () => {

  test('User should not be able to login (wrong credentials)', async ({ page }) => {
    // provide credentials
    LoginPage.fillLoginForm(page, wrongUserCredentials);
    await page.waitForTimeout(2000);

    // expect to get an error
    await expect(page.locator(errorsSelector)).toBeVisible();
  });

  // just an example of how same functions can be reused
  // test would obvously fails -> as there is no such user
  test.skip('User should be able to login', async ({ page }) => {
    LoginPage.fillLoginForm(page, validUserCredentials);
    await page.waitForTimeout(2000);

    // expect to be logged in / see welcome screen
  });

});