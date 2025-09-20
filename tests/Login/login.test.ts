import { chromium, test } from "@playwright/test"
import loginPage from "../../Module/Login/login";

    const username = "Administrator"
    const password = "Sql123$%^"
test("Login - Administrator", async ({page}) => {
    const LoginPage = new loginPage(page)
    await page.goto("")
    await LoginPage.enterUsername(username)
    await LoginPage.enterPassword(password)
    await LoginPage.clickLoginBtn()

})
