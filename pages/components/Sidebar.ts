import { Page, Locator } from '@playwright/test';

export class Sidebar {
    readonly page: Page;
    readonly adminLink: Locator;
    readonly pimLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.adminLink = page.locator(`//li[contains(.,'Admin')]`);
        this.pimLink = page.locator(`//li[contains(.,'PIM')]`)
    }

    async navigateTo(menuItem: 'Admin' | 'PIM') {
        const items = {
            'Admin': this.adminLink,
            'PIM': this.pimLink
        }
        await items[menuItem].click()
    }
}