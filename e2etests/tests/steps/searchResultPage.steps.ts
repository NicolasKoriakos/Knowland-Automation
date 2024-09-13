import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import SearchResultPage from "../pages/searchResultPage";
import { getPage } from "../../corelib/corelib.spec";
import { SearchResultsPageUtils } from '../utils/searchResultsPage.utils';

let searchResultsPage:SearchResultPage;

setDefaultTimeout(10000 * 100);

When ("I verify the {string} are displayed on Search Results Page", async function (element) {
    searchResultsPage = new SearchResultPage(getPage());
    await searchResultsPage.verifyElement(SearchResultsPageUtils.getElement(element));
});
