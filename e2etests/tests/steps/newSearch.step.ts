import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import HomePage from "../pages/homePage"
import { getPage } from '../../corelib/corelib.spec';
import { KnowlandHomePageUtils } from '../utils/knowlandHomePage.utils';

let homePage: HomePage;

When ("I click on {string} element on Home Page", async function (element){
    homePage = new HomePage(getPage());
    homePage.clickElement(KnowlandHomePageUtils.getElement(element));
});

When ("I click on {string} element and check that the {string} has changed", async function (element, counter) {
    await homePage.checkCounter(KnowlandHomePageUtils.getElement(element), KnowlandHomePageUtils.getElement(counter));
});
        
When ("I click on Search button {string}", async function (loc) {
    homePage.clickElement(loc);
});
