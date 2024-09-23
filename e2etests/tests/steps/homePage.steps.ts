import { When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import HomePage from "../../tests/pages/homePage";
import { getPage } from "../../corelib/corelib.spec";
import { KnowlandHomePageUtils } from '../utils/knowlandHomePage.utils';

let homePage:HomePage;

setDefaultTimeout(10000 * 100);

Then ("I am on {string} Home Page", async function (element) {
    homePage = new HomePage(getPage());
    await homePage.confirmPage(element); 
});  

When ("I click on {string} element on Home Page", async function (element) {
    await homePage.clickElement(KnowlandHomePageUtils.getElement(element));
});

Then ("Verify than {string} changed to {string} on Home Page", async function (element, string) {
    await homePage.verifyContains(KnowlandHomePageUtils.getElement(element), string);
});

Then ("I click on first {string} on Home Page", async function (element) {
    homePage = new HomePage(getPage());
    await homePage.selectLink(KnowlandHomePageUtils.getElement(element));
});
 