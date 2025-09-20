import { Page } from "@playwright/test"
export default class LoginPage {

    constructor(public page: Page) { }

    async login(username, password) {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLoginBtn();
    }
     async enterUsername(username: string) {
        await this.page.locator("input[name='username']").fill(username)
    }
    async enterPassword(password: string){
        await this.page.locator("input[type='password']").fill(password)
    }
    async clickLoginBtn() {
        await Promise.all([
            this.page.waitForNavigation(),
            this.page.click("button[type='submit']")
        ])
    }
}