import { Page } from "playwright-core";
import { expect } from "playwright/test";

export default class LoginPage{

    page:Page;

    constructor(page:Page){
        this.page = page;
    }

    async goToApp(){
        await this.page.goto("https://loginqa.knowland.com/");
    }

    async loginToApp (username:string , password:string) {
        await this.page.locator("#user").fill(username);
        await this.page.locator("#sso-button").click();
        await this.page.locator("#user-password-input").fill(password);
        await this.page.locator("#sign-in-button").click();
    }

    async selectClient(){
        await this.page.waitForTimeout(2000);
        let url = this.page.url();
        await this.page.locator("id=client-btn-7811").click();
        let newUrl = this.page.url();
        
        while (`${url}` === `${newUrl}`) {
        try {
            await this.page.locator("id=client-btn-7811").click();
        } catch (error) {}
        newUrl = this.page.url();
        }
    }
    
}