import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import HomePage from "../pages/homePage"
import { getPage } from '../../corelib/corelib.spec';

let homePage: HomePage;

When ("I click on Accounts & Events tab {string}", async function (loc) {
    homePage = new HomePage(getPage());
    homePage.ClickButton(loc);
});

When ("I click on New Custom Search option {string}", async function (loc) {
    homePage.ClickButton(loc);
});

When ("I click on Read Single Day check box filter {string}", async function (loc) {
    homePage.ClickButton(loc);
});
        
When ("I click on Search button {string}", async function (loc) {
    homePage.ClickButton(loc);
});