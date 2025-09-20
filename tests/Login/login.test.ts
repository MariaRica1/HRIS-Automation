import { chromium, test } from "@playwright/test"
import LoginPage from "../../Module/Login/login";

    const username = "Administrator"
    const password = "Sql123$%^"
test("Login - Administrator", async ({page}) => {
    const loginPage = new LoginPage(page)
    test.setTimeout(200_000)
    await page.goto("http://localhost/orangehrm/web/index.php/auth/login")
    await loginPage.enterUsername(username)
    await loginPage.enterPassword(password)
    await loginPage.clickLoginBtn()

})
