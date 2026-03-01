import { Page, Locator } from "@playwright/test";
import path from "path";

export class contactDetailPage {
    readonly page: Page;
    readonly streetOneInput: Locator;
    readonly streetTwoInput: Locator;
    readonly cityInput: Locator;
    readonly stateProvinceInput: Locator;
    readonly zipPostalCodeInput: Locator;
    readonly countrySelect: Locator;
    readonly homeInput: Locator;
    readonly mobileInput: Locator;
    readonly workInput: Locator;
    readonly workEmailInput: Locator;
    readonly otherEmailInput: Locator;
    readonly saveButton: Locator;
    readonly addAttachmentButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.streetOneInput = page.locator(``);
        this.streetTwoInput = page.locator(``);
        this.cityInput = page.locator(``);
        this.stateProvinceInput = page.locator(``);
        this.zipPostalCodeInput = page.locator(``);
        this.countrySelect = page.locator(``);
        this.homeInput = page.locator(``);
        this.mobileInput = page.locator(``);
        this.workInput = page.locator(``);
        this.workEmailInput = page.locator(``);
        this.otherEmailInput = page.locator(``);
        this.saveButton = page.locator(``);
        this.addAttachmentButton = page.locator(``);
    }
    async inputStreetOne(streetOne: any) {
        await this.streetOneInput.fill(streetOne);
    }
    async inputStreetTwo(streetTwo: any) {
        await this.streetTwoInput.fill(streetTwo);
    }
    async inputCity(city: any) {
        await this.cityInput.fill(city);
    }
    async inputStateProvince(stateProvince: string) {
        await this.stateProvinceInput.fill(stateProvince);
    }
    async inputZipPostal(zipPostal: number) {
        await this.zipPostalCodeInput.fill(zipPostal.toString());
    }
    async selectCountry() {

    }
    async inputHome(home: number) {
        await this.homeInput.fill(home.toString());
    }
    async inputMobile(mobile: number) {
        await this.mobileInput.fill(Number.toString());
    }
    async inputWorkEmail(workEmail: string) {
        await this.workEmailInput.fill(workEmail);
    }
    async inputOtherEmail(otherEmail: string) {
        await this.otherEmailInput.fill(otherEmail);
    }
    async uploadAttachment(fileName: string) {
        const filePath = path.resolve(__dirname, `../../data/${fileName}`);
        await this.addAttachmentButton.setInputFiles(filePath);
    }
}