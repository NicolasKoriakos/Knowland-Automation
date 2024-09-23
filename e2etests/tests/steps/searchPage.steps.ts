import { When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import SearchPage from "../pages/searchPage";
import { getPage } from "../../corelib/corelib.spec";
import { SearchPageUtils } from '../utils/searchPage.utils';

let searchPage:SearchPage;

setDefaultTimeout(10000 * 100);

When ("I click on {string} element on Search Page", async function (element) {
    await searchPage.clickElement(SearchPageUtils.getElement(element));
})

When ("I click on {string} and confirm that {string} changes", async function (element, counter) {
    searchPage = new SearchPage(getPage());
    await searchPage.verifyCounter(SearchPageUtils.getElement(element), SearchPageUtils.getElement(counter));
});