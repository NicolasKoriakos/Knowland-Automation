import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import HomePage from "../pages/homePage"
import { getPage } from '../../corelib/corelib.spec';
import { KnowlandHomePageUtils } from '../utils/knowlandHomePage.utils';

let homePage: HomePage;

When ("I click on Accounts & Events tab {string}", async function (element){
    homePage = new HomePage(getPage());
    homePage.clickElement(KnowlandHomePageUtils.getElement(element));
});

When ("I click on New Custom Search option {string}", async function (element) {
    homePage.clickElement(KnowlandHomePageUtils.getElement(element));

});

When ("I click on Read Single Day check box filter {string}", async function (loc) {
    homePage.clickElement(loc);
});
        
When ("I click on Search button {string}", async function (loc) {
    homePage.clickElement(loc);
});