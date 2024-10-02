import { UsageReportPageUtils } from './../utils/usageReportPage.util';
import { When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import UsageReportPage from "../../tests/pages/usageReportPage";
import { getPage } from "../../corelib/corelib.spec";

let usageReportPage:UsageReportPage;

When ("I click on {string} element on Usage Report Page", async function (element) {
    usageReportPage = new UsageReportPage(getPage());
    await usageReportPage.clickElement(UsageReportPageUtils.getElement(element));
})

When ("I check {string} on Usage Report Page"  , async function (element) {
    usageReportPage = new UsageReportPage(getPage());
    await usageReportPage.originalValue(UsageReportPageUtils.getElement(element));
})

When ("I click on {string} and verify that the download was successful", async function (element) {
    await usageReportPage.downloadURL(UsageReportPageUtils.getElement(element));
})

Then ("I verify that a popup appears when I click on {string}", async function (element) {
    await usageReportPage.verifyPopup(UsageReportPageUtils.getElement(element))
});