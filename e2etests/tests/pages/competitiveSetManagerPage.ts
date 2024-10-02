import { Page,expect } from "@playwright/test";

export default class CompetitiveSetManagerPage{
    page:Page;

    private originalContainer: string = '';

    constructor(page: Page) {
        this.page = page;
    }

    async originalValue(element:string){
        this.originalContainer = await this.page.locator(element).first().innerText(); 
        return this.originalContainer;
    }

    async clickOption(element:string){
        await this.page.locator(element).click();
    }

    async verifyChange(element:string){
        await this.page.waitForTimeout(5000)
        let newContainer = await this.page.locator(element).innerText();
        expect (newContainer).not.toBe(this.originalContainer);
    }
  
    async verifyContains(element: string, filter: string){
        const expectedText = await this.page.locator(filter).textContent();
        const realText = await this.page.locator(element).textContent();
    
        expect (expectedText).toBe(realText);
    }

    async selectClassElement(element:string) {
        await this.page.locator(element).first().click();
    }

    async selectCheckbox(element:string, first:number, second:number, third:number) {
        await this.page.locator(element).nth(4).click();
    }

}
    