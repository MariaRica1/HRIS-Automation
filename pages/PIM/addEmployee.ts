import { Page, Locator } from "@playwright/test";

export class newEmployeePage {
    readonly page: Page;
    readonly addButton: Locator;
    readonly addEmployeeLink: Locator;
    readonly firstNameInput: Locator;
    readonly middleNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly employeeIDInput: Locator;
    readonly loginDetailsToggle: Locator
    readonly saveButton: Locator;
    readonly cancelButton: Locator;


    constructor (page: Page) {
        this.page = page;
        this.addButton = page.locator(`//button[contains(.,'Add')]`);
        this.addEmployeeLink = page.locator(`//li[contains(.,'Add Employee')]`);
        this.firstNameInput = page.locator(`//input[@placeholder='First Name']`);
        this.middleNameInput = page.locator(`//input[@placeholder='Middle Name']`);
        this.lastNameInput = page.locator(`//input[@placeholder='Last Name']`);
        this.employeeIDInput = page.locator(`(//label[normalize-space(text())='Employee Id']/following::input)[1]`);
        this.loginDetailsToggle = page.locator(`//input[@type='checkbox']`);
        this.saveButton = page.locator(`//button[contains(.,'Save')]`);
        this.cancelButton = page.locator(`//button[contains(.,'Cancel')]`);

    }

    async inputFirstname(firstName: string){
        await this.firstNameInput.fill(firstName);
    }

    async inputMiddleName(middleName: string){
        await this.middleNameInput.fill(middleName);
    }

    async inputLastName(lastName: string){
        await this.lastNameInput.fill(lastName);
    }

    async inputEmployeeID(employeeID: number){
        await this.employeeIDInput.fill(employeeID.toString());
    }

    

}