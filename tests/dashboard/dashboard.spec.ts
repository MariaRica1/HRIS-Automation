import { test, expect } from '../../fixtures/baseTest';



test.describe('Dashboard Features', () => {


    test('As a user I can able to view the dashboard', async ({ dashboardPage }) => {
    await expect(dashboardPage.pageTitle).toHaveText('Dashboard')
});
})


