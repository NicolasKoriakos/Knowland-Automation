import { CompetitiveSetManagerPageUtils } from './../utils/competitiveSetManagerPage.utils';
import { When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import CompetitiveSetManagerPage from "../../tests/pages/competitiveSetManagerPage";
import { getPage } from "../../corelib/corelib.spec";

let competitiveSetManagerPage:CompetitiveSetManagerPage;

setDefaultTimeout(10000 * 100);

When ("I check {string} on Competitive Set Manager"  , async function (element) {
    competitiveSetManagerPage = new CompetitiveSetManagerPage(getPage());
    await competitiveSetManagerPage.originalValue(CompetitiveSetManagerPageUtils.getElement(element));
})

When ("I click on {string} element on Competitive Set Manager", async function (element) {
    competitiveSetManagerPage = new CompetitiveSetManagerPage(getPage());
    await competitiveSetManagerPage.clickOption(CompetitiveSetManagerPageUtils.getElement(element))
});

Then ("I check that the {string} contains the filter {string}", async function (element, filter){
    await competitiveSetManagerPage.verifyContains(CompetitiveSetManagerPageUtils.getElement(element), filter)
})

Then ("I confirm the {string} page updates", async function (element) {
    await competitiveSetManagerPage.verifyChange(CompetitiveSetManagerPageUtils.getElement(element))
})

When ("I click on {string} button on Competitive Set Manager", async function (element) {
    competitiveSetManagerPage = new CompetitiveSetManagerPage(getPage());
    await competitiveSetManagerPage.selectClassElement(CompetitiveSetManagerPageUtils.getElement(element))
})

When ("I select {string} {number}, {number} and {number}", async function (element, first, second, third) {
    
})