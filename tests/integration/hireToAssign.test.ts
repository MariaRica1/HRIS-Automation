import { test, expect } from "../../fixtures/baseTest";
import { DbHandler } from "../../utils/dbHandler";



test.describe('Job Title - integrates', () => {
    const db = new DbHandler();
    test('As a user I should able to see the job tille in PIM job title dropdown', async ({ loginAs, adminPage, sidebarNav, EmployeeListPage, jobPage }) => {
        await loginAs('Admin');
        await sidebarNav.navigateTo('Admin');
        const uniqueTitle = `Software Quality Assurance`
        const description = 'Ensuring the delivery of high-quality, reliable software by designing rigorous testing protocols, identifying defects, and optimizing development processes to meet both technical standards and user expectations.'
        await adminPage.selectSubMenu('Job', 'Job Titles')
        await jobPage.addJobTitle(uniqueTitle, description);
        await jobPage.clickSave();
        await db.connect();
        const dbResult = await db.executeQuery(
            'SELECT job_title, job_description from ohrm_job_title WHERE job_title = ?', [uniqueTitle]
        );
        //Assert that exactly one record exists
        expect(dbResult.length).toBe(1);
        expect(dbResult[0].job_title).toBe(uniqueTitle);
        expect(dbResult[0].job_description).toBe(description);
        await sidebarNav.navigateTo('PIM');
        await EmployeeListPage.jobTitleDropdown.click()
        await expect(EmployeeListPage.page.locator('.oxd-select-dropdown')).toContainText(uniqueTitle);
    })
})