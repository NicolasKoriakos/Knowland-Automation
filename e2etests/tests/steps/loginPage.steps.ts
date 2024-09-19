import {Given, setDefaultTimeout, Then, When} from "@cucumber/cucumber";
import { getPage } from "../../corelib/corelib.spec";
import LoginPage from "../../tests/pages/loginPage";

let loginPage:LoginPage;

setDefaultTimeout(10000 * 100);

Given("I am on Knowland Login Page", async function () {
  loginPage = new LoginPage(getPage());
  await loginPage.goToApp();
});

When("I access with my credentials {string}, {string}", async function (username, password) {
  await loginPage.loginToApp(username, password);
});

When(
  "I choose unlimited_markets client on client", async function () {
  await loginPage.selectClient();
});


