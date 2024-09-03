import {Given, setDefaultTimeout, When} from "@cucumber/cucumber";
import { getPage } from "../../corelib/corelib.spec";
import LoginPage from "../../tests/pages/loginPage";

let loginPage:LoginPage;

setDefaultTimeout(10000 * 100);

Given("I am on Knowland Login Page", async function () {
  loginPage = new LoginPage(getPage());
  loginPage.goToApp();
});

When("I access with my credentials {string}, {string}", async function (username, password) {
  loginPage.loginToApp(username, password);
});

When(
  "I choose unlimited_markets client on client", async function () {
  loginPage.selectClient();
});

When(
  "I am on Knowland Home Page", async function () {
  loginPage.confirmPage(); 
});
