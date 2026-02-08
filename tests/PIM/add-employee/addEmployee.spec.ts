import { test, expect } from "../../../fixtures/baseTest"

test.describe('Adding new employee', () => {
    test(' As a userI should able to add new employee', async({ loginAs, sidebarNav, addEmployeePage}) =>{
        await loginAs('Admin')
        await sidebarNav.navigateTo('PIM')
        await addEmployeePage.addButton.click();
        await addEmployeePage.inputFirstname('');
        await addEmployeePage.inputMiddleName('');
        await addEmployeePage.inputLastName('');
        await addEmployeePage.inputEmployeeID.toString();
        await addEmployeePage.loginDetailsToggle.click();
        await addEmployeePage.saveButton.click();

    })
})