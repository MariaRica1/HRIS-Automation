import { test, expect } from '../../fixtures/baseTest';


test.describe('Admin - Job Title', () => {
    test('As an user I should able to add a Job Title', async ({ loginAs, adminPage, sidebarNav, jobPage }) => {
        await loginAs('Admin');
        await sidebarNav.navigateTo('Admin')
        await adminPage.selectSubMenu('Job', 'Job Titles')
        const Title = `QA Engineer ${Date.now()}`
        await jobPage.addJobTitle(Title, 'Responsible for automated testing.')

    });
})


