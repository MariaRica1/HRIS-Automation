import { Page, Locator } from '@playwright/test';

export class adminNav {
    readonly page: Page;
    readonly userManagementLink: Locator;
    readonly jobLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.userManagementLink = page.locator(`//li[contains(.,'User Management')]`);
        this.jobLink = page.locator(`//li[contains(.,'Job')]`)
    }

    async selectSubMenu(parent: 'User Management' | 'Job', child: string) {
        const parentMap = {
            'User Management': this.userManagementLink,
            'Job': this.jobLink
        }
        await parentMap[parent].click();

        const subItem = this.page.locator('ul.oxd-dropdown-menu').locator(`text=${child}`);
        await subItem.click();
    }
}