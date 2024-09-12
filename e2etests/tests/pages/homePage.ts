import { Page } from "@playwright/test";

export default class HomePage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async clickElement(element: string) {
    await this.page.waitForTimeout(15000);
    await this.page.locator(element).click();
  }


  async verifycontains(element: string, string: string) {
    await this.page.waitForTimeout(2000);
    let count = 0;
    const expectedText = string;
    let text;

    while (string != expectedText) {
      text = this.page.locator(element).textContent;
      count++;
      if ((count = 10000)) {
        break;
      }
    }
  }
}
