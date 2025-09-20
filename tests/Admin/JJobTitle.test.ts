import { chromium, test } from "@playwright/test"
import LoginPage from "../../Module/Login/login"
import sideBar from "../../Module/Sidebar/sidebar"
    const username = "Administrator"
    const password = "Sql123$%^"
test("Login - Administrator", async ({page}) => {
    const loginPage = new LoginPage(page)
    const SideBar = new sideBar(page)
    test.setTimeout(200_000)
    await page.goto("http://localhost/orangehrm/web/index.php/auth/login")
    await loginPage.enterUsername(username)
    await loginPage.enterPassword(password)
    await loginPage.clickLoginBtn()
    await SideBar.clickAdminBtn()
})
