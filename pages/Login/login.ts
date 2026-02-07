import { Page, Locator } from "@playwright/test"


export default class LoginPage {

    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator("input[name='username']");
        this.passwordInput = page.locator("input[type='password']");
        this.loginButton = page.locator("button[type='submit']");

    }
    async navigate() {
        await this.page.goto('http://localhost/orangehrm/web/index.php/auth/login');
    }

    async login(user: string, pass: string) {
        await this.usernameInput.fill(user);
        await this.passwordInput.fill(pass);
        await this.loginButton.click();
    }

    
}