import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import HomePage from "../../tests/pages/homePage";
import { getPage } from "../../corelib/corelib.spec";
import { KnowlandHomePageUtils } from '../utils/knowlandHomePage.utils';

let homePage:HomePage;

setDefaultTimeout(10000 * 100);

When ("I click on {string} element on Home Page", async function (element) {
    homePage = new HomePage(getPage());
    homePage.clickElement(KnowlandHomePageUtils.getElement(element));
});

Then ("Verify than {string} changes to {string} on Home Page", async function (element, string) {
    homePage.verifycontains(KnowlandHomePageUtils.getElement(element), string);
})