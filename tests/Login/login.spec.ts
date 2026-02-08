import { test, expect } from '../../fixtures/baseTest';

test.describe('Data-Driven Login Test', () => {

    test(`As a user I should able to logged in administrator account`, async ({ loginAs }) => {
        const dashboardPage = await loginAs('Admin')
        await expect(dashboardPage.page).toHaveURL('dashboard/index');
        // await dashboardPage.page.pause();
    });

})
