import { Page } from "@playwright/test"
export default class sideBar {

    constructor(public page: Page) {}

    async clickAdminBtn(){
        await Promise.all([
            this.page.waitForNavigation(),
            this.page.click("//li[contains(.,'Admin')]")
        ])
    }
        async clickPIMBtn(){
        await Promise.all([
            this.page.waitForNavigation(),
            this.page.click("//li[contains(.,'PIM')]")
        ])
    }
    async clickLeaveBtn(){
        await Promise.all([
            this.page.waitForNavigation(),
            this.page.click("//li[contains(.,'Leave')]")
        ])
    }
        async clickTimeBtn(){
        await Promise.all([
            this.page.waitForNavigation(),
            this.page.click("//li[contains(.,'Time')]")
        ])
    }
    async clickRecruitmentBtn(){
        await Promise.all([
            this.page.waitForNavigation(),
            this.page.click("//li[contains(.,'Recruitment')]")
        ])
    }
    async clickMyInfoBtn(){
        await Promise.all([
            this.page.waitForNavigation(),
            this.page.click("//li[contains(.,'My Info')]")
        ])   
    }
    async clickPerfomanceBtn(){
        await Promise.all([
            this.page.waitForNavigation(),
            this.page.click("//li[contains(.,'Performance')]")
        ])   
    }
    async clickDashboardBtn(){
        await Promise.all([
            this.page.waitForNavigation(),
            this.page.click("//li[contains(.,'Dashboard')]")
        ])   
    }
    async clickDirectioryBtn(){
        await Promise.all([
            this.page.waitForNavigation(),
            this.page.click("//li[contains(.,'Directory')]")
        ])   
    }
    async clickMaintanceBtn(){
        await Promise.all([
            this.page.waitForNavigation(),
            this.page.click("//li[contains(.,'Maintenance')]")
        ])   
    }
    async clickClaimBtn(){
        await Promise.all([
            this.page.waitForNavigation(),
            this.page.click("//li[contains(.,'Claim')]")
        ])   
    }
    async clickBuzzBtn(){
        await Promise.all([
            this.page.waitForNavigation(),
            this.page.click("//li[contains(.,'Buzz')]")
        ])   
    }
}
