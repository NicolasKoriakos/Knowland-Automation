import { When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import AccountDetailsPage from "../pages/accountDetailsPage";
import { getPage } from "../../corelib/corelib.spec";
import { AccountDetailsPageUtils } from '../utils/accountDetailsPage.utils';

let accountDetailsPage:AccountDetailsPage;

setDefaultTimeout(10000 * 100);

Then ("Then I confirm that I can see the {string}", async function (element) {
    accountDetailsPage = new AccountDetailsPage(getPage());
    await accountDetailsPage.verifyElement(element); 
});  

Then ("I verify that the {string} is the same as the {string}", async function (element, filter) {
    await accountDetailsPage.verifyContains(AccountDetailsPageUtils.getElement(element), AccountDetailsPageUtils.getElement(filter));    
});

 