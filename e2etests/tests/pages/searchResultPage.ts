import { expect, Page } from "@playwright/test";

export default class SearchResultsPage{
    page:Page;

    constructor(page: Page) {
        this.page = page;
      }

  async verifyElement(element:string) {
    expect (await this.page.locator(element).isVisible());
    
   }  
}