import { test, expect } from '../../fixtures/baseTest';
import { DbHandler } from '../../utils/dbHandler';



test.describe('Admin - Job Title', () => {
    const db = new DbHandler();
    test('As an user I should able to add a Job Title', async ({ loginAs, adminPage, sidebarNav, jobPage }) => {
        await loginAs('Admin');
        await sidebarNav.navigateTo('Admin')
        await adminPage.selectSubMenu('Job', 'Job Titles')
        const Title = `QA Engineer ${Date.now()}`
        await jobPage.addJobTitle(Title, 'Responsible for automated testing.')
    });

    test('Verify job title in Database', async ({ loginAs, adminPage, sidebarNav, jobPage }) => {
        const uniqueTitle = `DB_Verify_${Date.now}`
        await loginAs('Admin');
        await sidebarNav.navigateTo('Admin')
        await adminPage.selectSubMenu('Job', 'Job Titles')
        await jobPage.addJobTitle(uniqueTitle, 'Testing DB integration');
        await db.connect();
        const results = await db.executeQuery(
            'SELECT * FROM ohrm_job_title WHERE job_title = ?',
            [uniqueTitle]
        );
        expect(results.length).toBe(1);
        expect(results[0].job_description).toBe('Testing DB integration');
    })
})


