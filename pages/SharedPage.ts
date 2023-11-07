// This page can store header / footer functionality
// as these buttons/hrefs... should be accessible in every page
import { expect } from '@playwright/test';
var _ = require('lodash');


const selectLangSelector = `select[name="Change your language"]`;
const enTitle = `How much does Surfshark cost? Check the pricing - Surfshark`;


const langSelections = [
  "de", "es", "fr", "it", "nl",
  "pl", "pt-br", "fi", "tr", "ru", "uk",
  "ko", "zh", "zh-hk", "zh-tw", "ja",
];


class SharedPage {

  async changeToRandomLang(page) {
    const langOptionsSelector = await page.locator(selectLangSelector);

    // select random lang from all options
    const randomLang = _.sample(langSelections);
    await langOptionsSelector.selectOption({ value: randomLang });

    // let the page refresh
    await page.waitForTimeout(2000);

    // en is not in the lang selection list - so there is no way to select en
    await expect(page).not.toHaveTitle(enTitle);
  }

}

export default new SharedPage();




