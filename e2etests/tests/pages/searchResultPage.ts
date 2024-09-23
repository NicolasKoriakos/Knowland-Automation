import { expect, Page } from "@playwright/test";

export default class SearchResultsPage{
  
  page:Page;

    private originalVal: string = '';

    constructor(page: Page) {
      this.page = page;
    }

    async originalValue(element:string){
      this.originalVal = await this.page.locator(element).innerText(); 
      console.log(this.originalVal);
    }

    async verifyElement(element:string) {
      expect (await this.page.locator(element).isVisible());
    }  

    async clickElement(element:string){
      await this.page.waitForSelector(element);
      await this.page.locator(element).click();
    }

    async verifySchedule(element:string){
      await this.page.waitForTimeout(5000)
      let newValues = await this.page.locator(element).innerText();
      expect (newValues).not.toBe(this.originalVal);
    }

  }