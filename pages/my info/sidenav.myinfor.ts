import { Page, Locator } from "@playwright/test";

export default class myInfoSide {
    readonly page: Page;
    readonly personalDetailLink: Locator;
    readonly contactDetailLink: Locator;
    readonly emergencyContactLink: Locator;
    readonly dependentsLink: Locator;
    readonly immigrationLink: Locator;
    readonly jobLink: Locator;
    readonly salaryLink: Locator;
    readonly reportToLink: Locator;
    readonly qualificationLink: Locator;
    readonly membershipLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.personalDetailLink = page.locator(`//a[normalize-space(text())='Personal Details']`);
        this.contactDetailLink = page.locator(`//a[normalize-space(text())='Contact Details']`);
        this.emergencyContactLink = page.locator(`//a[normalize-space(text())='Emergency Contacts']`);
        this.dependentsLink = page.locator(`//a[normalize-space(text())='Dependents']`);
        this.immigrationLink = page.locator(`//a[normalize-space(text())='Immigration']`);
        this.jobLink = page.locator(`//a[normalize-space(text())='Job']`);
        this.salaryLink = page.locator(`//a[normalize-space(text())='Salary']`);
        this.reportToLink = page.locator(`//a[normalize-space(text())='Report-to']`);
        this.qualificationLink = page.locator(`//a[normalize-space(text())='Qualifications']`);
        this.membershipLink = page.locator(`//a[normalize-space(text())='Memberships']`);
    }

    async navigateTo(info: 'Personal' | 'Contact' | 'Emergency' | 'Dependents' | 'Immigration' | 'Job' | 'Salary' | 'Report' | 'Qualification' | 'Membership') {
        const items = {
            'Personal': this.personalDetailLink,
            'Contact': this.contactDetailLink,
            'Emergency': this.emergencyContactLink,
            'Dependents': this.dependentsLink,
            'Immigration': this.immigrationLink,
            'Job': this.jobLink,
            'Salary': this.salaryLink,
            'Report': this.reportToLink,
            'Qualification': this.qualificationLink,
            'Membership': this.membershipLink
        }
        await items[info].click();
    }
}