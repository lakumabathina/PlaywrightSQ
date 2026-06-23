import {test, expect, Locator} from '@playwright/test'


test.describe('XPath Basic Locators' , ()=>{

test('relative xpath' ,  {
    tag: ['@xpathbasic', '@regression']  }, async({page})=>{

await page.goto("https://demowebshop.tricentis.com/");
await expect(page).toHaveURL("https://demowebshop.tricentis.com/");
await expect(page).toHaveTitle("Demo Web Shop")

//Get Images
let demowsImage:Locator = page.locator("//img[@alt='Tricentis Demo Web Shop']");
await expect(demowsImage).toBeVisible();

let searchBox:Locator=page.locator("//input[@id='small-searchterms' and @name='q']")

await expect(searchBox).toBeEnabled();
await expect(searchBox).toBeVisible();

let searchButton:Locator=page.locator("//input[@type='submit' or @value='Search']");
await expect(searchButton).toBeVisible();

let registerLink:Locator=page.locator("//a[@href='/register']");
await expect(registerLink).toBeVisible();

let computerLinks : Locator= page.locator("//a[contains(@href,'computer')]");

let cmLinkAll = await computerLinks.all();

for(const computer of cmLinkAll){

    console.log(await computer.textContent());
}




    })
    
})