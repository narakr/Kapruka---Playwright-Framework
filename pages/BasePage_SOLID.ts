//code for textbox, mouseclick

import {Page, Locator} from '@playwright/test';   //Page and Locator are libraries 

export abstract class BasePage_SOLID
{
    readonly page : Page; //readonly -> cannot reinitialise it

    constructor(page:Page)
    {
        this.page = page;   //LHS this.page -> object, RHS page -> constructor parameter

    }

    //Playwright Page -> Browser/tab
    //Locator -> element on the webpage

    async click(locator: Locator): Promise <void>
    {
        await locator.waitFor({state: 'visible'});
        await locator.click();
    }

    async navigate(url: string): Promise<void>
    {
        await this.page.goto(url, {waitUntil: 'load'});
    }

    async fill(locator: Locator, value: string): Promise<void>
    {
        await locator.waitFor({state: 'visible'});
        await locator.fill(value);
    }

    abstract isLoaded(): Promise<void>;
}

    //can write for scroll method also
    //control - Open closed principle open for extension, closed for modification
