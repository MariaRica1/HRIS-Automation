import { chromium, test } from "@playwright/test"

test("Login - Administrator", async () => {
   const browsers = await chromium.launch({
    headless: false
   });
   const context = await browsers.newContext();
   const page = await context.newPage();

   await page.goto("http://localhost/orangehrm/web/index.php/auth/login")
   await page.fill("input[name='username']", "Administrator")
   await page.fill("input[type='password']", "Sql123$%^")
   await page.click("button[type='submit']")

})
