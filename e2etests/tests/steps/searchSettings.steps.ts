import { When, setDefaultTimeout } from '@cucumber/cucumber';
import AccountSearchPage from '../pages/accountSearchPage';
import { getPage } from '../../corelib/corelib.spec';
import {AccountSearchPageUtils} from '../utils/accountSearchPage.util';

let accountSearchPage:AccountSearchPage;


setDefaultTimeout(10000 * 100);


When ("I clear {string} element on Account Search Page", async function (element) {
    accountSearchPage = new AccountSearchPage(getPage());
    await accountSearchPage.clearImput(AccountSearchPageUtils.getElement(element));
});

When ("I click on {string} element on Account Search Page", async function (element) {
    await accountSearchPage.clickElement(AccountSearchPageUtils.getElement(element));
});

When ("I send the keys {string} to the {string} element on Account Search Page", async function name(input, element) {
    await accountSearchPage.sendKeys(AccountSearchPageUtils.getElement(element), input);
});