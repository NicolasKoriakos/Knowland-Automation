import { Page } from "@playwright/test";

export default class AccountSearchPage{
    page:Page;

    constructor(page: Page) {
        this.page = page;
      }

      async clickElement(element: string) {
        await this.page.waitForTimeout(3000);
        await this.page.locator(element).click();
      }

      async clearImput(element: string) {
        await this.page.waitForTimeout(4000);
        await this.page.locator(element).clear();
      }

      async sendKeys(element: string, string: string) {
        await this.page.waitForTimeout(2000);
        await this.page.locator(element).fill(string);
      }
}