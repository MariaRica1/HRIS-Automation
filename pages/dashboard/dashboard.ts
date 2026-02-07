import { Page, Locator } from "@playwright/test";

export class DashboardPage {
    readonly page: Page;
    readonly pageTitle: Locator;

    constructor(page: Page) {
        this.page = page;
        this.pageTitle = page.locator('.OrangeHRM');

    }

}