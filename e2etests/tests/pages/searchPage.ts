import { expect, Page } from "@playwright/test";

export default class SearchPage{
    page:Page;

    constructor(page: Page) {
        this.page = page;
      }  

  async verifyCounter(element:string, counter:string){
    await this.page.waitForSelector(counter);
    const originalCounter = await this.page.locator(counter).innerText();
    await this.page.locator(element).click();
    let newCounter = await this.page.locator(counter).innerText();
    expect (originalCounter != newCounter);
  }

  async clickElement(element: string){
    await this.page.waitForSelector(element);
    await this.page.locator(element).click();
  }
}