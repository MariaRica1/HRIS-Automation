import { Page, Locator } from "@playwright/test";
import path from "path";


export class jobTitlePage {
    readonly page: Page;
    readonly addButton: Locator;
    readonly jobTitleInput: Locator;
    readonly jobDescriptionInput: Locator;
    readonly fileInput: Locator;
    readonly noteInput: Locator;
    readonly saveButton: Locator;
    readonly cancelButton: Locator;


    constructor(page: Page) { 
        this.page = page;
        this.addButton = page.locator(`//button[contains(.,'Add')]`);
        this.jobTitleInput = page. locator(`(//label[normalize-space(text())='Job Title']/following::input)[1]`);
        this.jobDescriptionInput = page.locator(`//textarea[@placeholder='Type description here']`);
        this.fileInput = page.locator(`//div[normalize-space(text())='No file chosen']`);
        this.noteInput = page.locator(`//textarea[@placeholder='Add note']`);
        this.saveButton = page.locator(`//button[contains(.,'Save')]`);
        this.cancelButton = page.locator(`//button[contains(.,'Cancel')]`)

        
    }
    async addJobTitle (title: string, description: string){
        await this.addButton.click();
        await this.jobTitleInput.fill(title)
        await this.jobDescriptionInput.fill(description);
    }

    async uploadJobSpecification(fileName: string){
        const filePath = path.resolve(__dirname, `../../data/${fileName}`);
        await this.fileInput.setInputFiles(filePath);
    }

    async addNote(note: any) {
        await this.noteInput.fill(note);
    }

    async clickSave(){
        await this.saveButton.click();
    }

    async clickCancel(){
        await this.cancelButton.click();
    }


}