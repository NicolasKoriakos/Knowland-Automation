import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import HomePage from "../../tests/pages/homePage";
import { getPage } from "../../corelib/corelib.spec";

let homePage:HomePage;

setDefaultTimeout(10000 * 100);

When ("I click on Name Initials button {string}", async function (loc) {
    homePage = new HomePage(getPage());
    homePage.ClickButton (loc);
});

When ("I chooce Search Settings option {string}", async function (loc) {
    homePage.ClickButton(loc);
});

When ("I search Master Account ID {string}", async function (account) {
    homePage.changeMasterAccount(account);
});

Then ("Verify that {string} contains {string}", async function (loc, text) {
    homePage.verifycontains(loc, text);
});