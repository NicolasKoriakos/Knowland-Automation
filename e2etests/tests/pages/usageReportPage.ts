import { Page,expect } from "@playwright/test";

export default class UsageReportPage{

    page:Page;

    private originalVal: string = '';

    constructor(page: Page) {
        this.page = page;
    }

    async originalValue(element:string){
        this.originalVal = await this.page.locator(element).first().innerText(); 
        return this.originalVal;
      }

    async clickElement(element: string){
        await this.page.locator(element).click();
      }

    async selectDate(element:string) {
        await this.page.locator(element).first().click();
      }

    async downloadURL (element:string) {
        // Escucha el evento de descarga
        const [download] = await Promise.all([
            this.page.waitForEvent('download'), // Espera a que se inicie la descarga
            this.page.click(element), // Reemplaza con el selector del botón que inicia la descarga
        ]);
    
        // Obtiene la URL de descarga
        const downloadUrl = download.url();
        
        expect (console.log('URL de descarga:', downloadUrl));
    };

    async verifySchedule(element:string){
        await this.page.waitForTimeout(5000)
        expect (this.page.locator(element).isVisible);
      }

    async verifyPopup (element:string) {
        const [popup] = await Promise.all([
        this.page.click (element) 
        ]);
        expect(popup).not.toBeNull();
    }
}