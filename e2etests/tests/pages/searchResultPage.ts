import { expect, Page } from "@playwright/test";

export default class SearchResultsPage{
  
  page:Page;

    private originalCounter: string = '';

    constructor(page: Page) {
      this.page = page;
    }

    async originalValue(element:string){
      this.originalCounter = await this.page.locator(element).innerText(); 
      console.log(this.originalCounter);
    }

    async verifyElement(element:string) {
      expect (await this.page.locator(element).isVisible());
    }  

    async clickElement(element:string){
      await this.page.waitForSelector(element);
      await this.page.locator(element).click();
    }

    async verifySchedule(element:string){
      let newValues = await this.page.locator(element).innerText();
      expect (newValues).not.toBe(this.originalCounter);
    }

    async dropdownOption (element:string, option:string){
      await this.page.selectOption(element, { label: option });
    }
  }