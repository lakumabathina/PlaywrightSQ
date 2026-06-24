import {test, expect} from '@playwright/test'

test("My First test", {tag : '@sanity'}, async({page})=>{
console.log('Executing test My First test');

await page.goto("https://automationexercise.com/");
let pagetitle:string =  await page.title();
console.log("Title is:", pagetitle)
await expect(page).toHaveTitle("Automation Exercise");

await expect(page).toHaveURL("https://automationexercise.com/");
await expect(page).toHaveURL(/automationexercise.com/);

})
