import { Page, Locator } from "@playwright/test";

export class employeeListPage{
    readonly page: Page;
    readonly employeeNameInput: Locator;
    readonly employeeIDInput: Locator;
    readonly employmentStatusDropdown: Locator;
    readonly includeDropdown: Locator;
    readonly supervisorNameInput: Locator;
    readonly jobTitleDropdown: Locator; 
    readonly subUnitDropdown: Locator;
    readonly resetButton: Locator;
    readonly searchButton: Locator;

    constructor (page: Page){
        this.page = page;
        this.employeeNameInput = page.locator('');
        this.employeeIDInput = page.locator('');
        this.employmentStatusDropdown = page.locator('');
        this.includeDropdown = page.locator('');
        this.supervisorNameInput = page.locator('');
        this.jobTitleDropdown = page.locator(`(//div[@class='oxd-select-text oxd-select-text--active'])[3]`);
        this.subUnitDropdown = page.locator('');
        this.resetButton = page.locator('');
        this.searchButton = page.locator('');
    }
    async inputEmployeeName(employeeName: string){
        await this.employeeNameInput.fill(employeeName);
    }
    async InputEmployeeID(employeeID: number){
        await this.employeeIDInput.fill(employeeID.toString())
    }
    // async dropdownEmploymentStatus(employmentStatus:string) {
    //     await this.employmentStatusDropdown.
    // }
    //     async dropdownJobTitle(jobTitle:string){
    //         await job
    //     }
    
}