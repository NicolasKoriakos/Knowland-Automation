import {After, Before, Given, setDefaultTimeout, When} from "@cucumber/cucumber";
import { Browser, BrowserContext, Page, chromium } from "playwright";
import { getPage } from "../../corelib/corelib.spec";

setDefaultTimeout(10000 * 100);

Given("I am on Knowland Login Page", async function () {
  getPage().goto("https://loginqa.knowland.com/");
});

When(
  "I access with my credentials {string}, {string}",
  async function (username, password) {
    await getPage().locator("css=#user").fill(username);
    await getPage().locator("css=#sso-button").click();
    await getPage().locator("css=#user-password-input").fill(password);
    await getPage().locator("css=#sign-in-button").click();
  }
);

When(
  "I choose {string} client on client page by {string}",
  async function () {
    await getPage().waitForTimeout(2000);
    let url = getPage().url();
    await getPage().locator("#client-btn-7811").click();

    let newUrl = getPage().url();
    while (`${url}` === `${newUrl}`) {
      try {
        await getPage().locator("#client-btn-7811").click();
      } catch (error) {}
      await getPage().waitForTimeout(2000);
      newUrl = getPage().url();
    }
  }
);
