import { expect, Page } from "@playwright/test";

export default class HomePage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async clickElement(element: string){
    await this.page.waitForSelector(element);
    await this.page.locator(element).click();
  }

  async verifyContains(element: string, string: string){
    await this.page.waitForTimeout(2000);
    let count = 0;
    const expectedText = string;
    let text;

    while (string != expectedText){
      text = this.page.locator(element).textContent;
      count++;
      if ((count = 10000)) {
        break;
      }
    }
  }
}
