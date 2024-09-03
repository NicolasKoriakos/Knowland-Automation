import { setDefaultTimeout } from '@cucumber/cucumber';
import { Page, expect } from "@playwright/test";

export default class HomePage{

    page:Page;

    constructor(page:Page){
        this.page = page;
    }

    async ClickButton (loc:string){
        await this.page.waitForTimeout(15000);
        await this.page.locator(loc).click();
    }

    async changeMasterAccount (account:string){
        await this.page.waitForTimeout(10000);
        await this.page.locator("id=master_account_id_for_override").clear();
        await this.page.waitForTimeout(2000);
        await this.page.locator("id=master_account_id_for_override").fill(account);
        await this.page.waitForTimeout(2000);
        await this.page.locator("id=master_account_id_search").click();
        await this.page.waitForTimeout(2000);
        await this.page.locator("id=applyandexit").click();
    }

    async verifycontains (loc:string, text:string){
        await this.page.waitForTimeout(2000);
        let contador=0;
        const expectedText = text;
        
            while (text != expectedText){
    
            let text = this.page.locator(loc).textContent;
            contador++;
            if(contador = 10000){
            break}
        }
        
        //const elemento = page.locator(loc);
        //const texto = await elemento.textContent(); 
        //expect(texto).toContain('Marriott Albuquerque');
        //await this.page.locator(loc).click();
        //await expect(this.page.locator(loc)).toHaveText(text);
        //let element = this.page.locator(loc).textContent();
        //expect (element).toBe(text);
    }
    
}