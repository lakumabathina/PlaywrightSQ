import {test, expect , Locator} from '@playwright/test'

test.describe("locators group1" , ()=> {
test("get By Text" , { tag : '@builtinlocators' } , async({page})=>{

await page.goto("https://automationexercise.com/");

await expect(page).toHaveTitle("Automation Exercise");

let locator1 : Locator = page.getByText("Home");
let locator2 : Locator = page.getByText("Features Items")
await expect(locator1).toBeVisible();
await expect(locator2).toBeVisible();

})


test("get By AltText" , { tag : '@builtinlocators' } , async({page})=>{

await page.goto("https://automationexercise.com/");

await expect(page).toHaveTitle("Automation Exercise");

let image:Locator = page.getByAltText("Website for automation");

await expect(image).toBeVisible();

})


test("get by Role" , { tag: '@builtinlocators'} , async ({page})=>{
await page.goto("https://automationexercise.com/");

await expect(page).toHaveTitle("Automation Exercise");

let locator : Locator = page.getByRole('heading' , { name: 'Full-Fledged practice website for Automation Engineers'});

await expect (locator).toBeVisible();


let locator1 : Locator = page.getByRole('link' , { name : ' Signup / Login'})
await expect (locator1).toBeVisible();

await locator1.click();


let locator2 : Locator = page.getByRole("textbox" , {name:'name'}).first();
await expect (locator2).toBeVisible();

await locator2.fill("Lavanya");

let locator3 : Locator = page.getByRole("textbox", { name: 'email'}).nth(1);
await expect (locator3).toBeVisible();

await locator3.fill("abc@gmail.com");

await page.waitForTimeout(5000);

await page.goto("https://demoqa.com/text-box");
await expect(page).toHaveTitle("demosite")

let textbox1: Locator = page.getByPlaceholder("Full Name")
await textbox1.fill("abc");

let textbox2 : Locator = page.getByPlaceholder("name@example.com");
await textbox2.fill("abc@gmail.com");

let button1 : Locator = page.getByRole('button' , {name: 'Submit'});
await expect(button1).toBeEnabled();
await button1.click();

let result1 : Locator = page.getByText("Email:abc@gmail.com");
await expect(result1).toBeVisible();

})





})

