import { test as base } from '@playwright/test';
import LoginPage from '../pages/Login/login';
import { DashboardPage } from '../pages/dashboard/dashboard';
import * as testData from '../data/users.json'


type myFixture = {

    loginPage: LoginPage;
    dashboardPage: DashboardPage;
    loginAs: (role: string) => Promise<DashboardPage>
};

export const test = base.extend<myFixture>({
    //this is prepares the login page object

    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },


    //defualt login user
    dashboardPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        const dashboardPage = new DashboardPage(page);
        await loginPage.navigate();
        await loginPage.login('Administrator', 'Sql123$%^');
        await use(dashboardPage);
    },

    
    loginAs: async ({ page }, use) => {
        const loginAs = async (role: string) => {
            const loginPage = new LoginPage(page);
            const user = testData.users.find(u => u.role === role);

            if (!user) throw new Error(`Role ${role} not found in test data`);

            await loginPage.navigate()
            await loginPage.login(user.username, user.password);
            return new DashboardPage(page);
        };
        await use(loginAs);
    }

});

export { expect } from '@playwright/test';