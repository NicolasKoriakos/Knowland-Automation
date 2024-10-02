import { Page,expect } from "@playwright/test";

export default class AccountDetailsPage{
    page:Page;

    constructor(page: Page) {
        this.page = page;
    }

    async verifyElement(element:string) {
        expect (await this.page.locator(element).isVisible());
    } 

    async verifyContains(element: string, filter: string){
        const expectedText = await this.page.locator(filter).textContent();
        const realText = await this.page.locator(element).textContent();
    
        expect (expectedText).toBe(realText);
    }
      
}