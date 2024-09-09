import { expect, Page } from "@playwright/test";

export default class HomePage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async clickElement(element:string) {
    await this.page.waitForTimeout(20000);
    await this.page.locator(element).click();
  }

  async verifycontains(element:string, string:string) {
    await this.page.waitForTimeout(2000);
    let count = 0;
    const expectedText = string;
    let text;

    while (text != expectedText) {
      return text = this.page.locator(element).textContent;
      count++;
      if ((count = 10000)) {
        break;
      }
    }
  }

  async checkCounter (element:string, counter:string){
    let originalCounter = await this.page.locator(counter).innerText();
    await console.log(originalCounter);
    await this.page.locator(element).click();
    await this.page.waitForTimeout(2000);
    let newCounter = await this.page.locator(counter).innerText();
    await console.log(newCounter);
    
    if (originalCounter != newCounter){
      await console.log("the counter was changed");
    } else {
      await console.log("The counter is the same");
    }; 
  }
}
