import { test as base } from '@playwright/test';
import LoginPage from '../pages/Login/login';
import { DashboardPage } from '../pages/dashboard/dashboard';
import * as testData from '../data/users.json'
import { jobTitlePage } from '../pages/admin/AdminPage/Job/job';
import { Sidebar } from '../pages/components/Sidebar';
import { adminNav } from '../pages/components/admin.nav';
import { newEmployeePage } from '../pages/PIM/addEmployee';
import myInfoSide from '../pages/my info/sidenav.myinfor';
import { employeeListPage } from '../pages/PIM/employeeList';


type myFixture = {

    loginPage: LoginPage;
    dashboardPage: DashboardPage;
    loginAs: (role: string) => Promise<DashboardPage>
    sidebarNav: Sidebar;
    adminPage: adminNav;
    jobPage: jobTitlePage;
    addEmployeePage: newEmployeePage;
    infoSide: myInfoSide;
    EmployeeListPage: employeeListPage;
};

export const test = base.extend<myFixture>({
    //this is prepares the login page object

    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
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
    },

    //defualt login user
    dashboardPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        const dashboardPage = new DashboardPage(page);
        await loginPage.navigate();
        await loginPage.login('Administrator', 'Sql123$%^');
        await use(dashboardPage);

    },

    sidebarNav: async ({ page }, use) => {
        await use(new Sidebar(page))
    },

    adminPage: async ({ page }, use) => {
        await use(new adminNav(page))
    },

    jobPage: async ({ page }, use) => {
        await use(new jobTitlePage(page))
    },

    addEmployeePage: async ({ page }, use) => {
        await use(new newEmployeePage(page))
    },

    infoSide: async ({ page }, use) => {
        await use(new myInfoSide(page))
    },
    EmployeeListPage: async ({ page }, use) => {
        await use(new employeeListPage(page))
    }
});

export { expect } from '@playwright/test';