import {test, Locator, expect} from '@playwright/test'


test.beforeEach("Before each", async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/")
expect (page).toHaveURL("https://testautomationpractice.blogspot.com/");
})


test.describe("InputboxTests" , ()=>{

test("Inputboxfill" , { tag : ['@inputbox', '@regression']}  , async({page}) =>{

    let namebox: Locator = page.locator("input#name");
    await expect(namebox).toBeVisible();
    await expect(namebox).toBeEnabled();

    let maxlengthvalue = await namebox.getAttribute("maxlength");
    expect(maxlengthvalue).toBe("15");
    await namebox.fill("Lavanya");
 
    let nameinput  = await namebox.inputValue();
    console.log("Name textbob input is:" , nameinput);
    expect(nameinput).toBe("Lavanya");
    

} )
})
test.describe("CheckboxTests" , ()=>{

test("CheckboxStatus" , { tag : ['@inputbox', '@regression']}  , async({page}) =>{

    let friday : string = "Firday";

    let fridaycheck : Locator = page.getByLabel("Friday");
    await expect(fridaycheck).toBeVisible();

    expect(await fridaycheck.isChecked()).toBe(false);
    await fridaycheck.check();
    await expect(fridaycheck).toBeChecked();
    expect(await fridaycheck.isChecked()).toBe(true);

     await fridaycheck.uncheck()
   await expect(fridaycheck).not.toBeChecked();
    expect(await fridaycheck.isChecked()).toBe(false);

})



test("CheckLastThree" , { tag : ['@inputbox', '@regression']}  , async({page}) =>{

let days: string[] = ['Sunday' , 'Monday' , 'Tuesday' , 'Wednesday', 'Thursday', 'Friday', 'Saturday' , ]

    let daysLocators : Locator[] =  days.map(day => page.getByLabel(day))


    for ( const dayLocator of daysLocators.slice(-3)){

     await dayLocator.check();
     await expect(dayLocator).toBeChecked();

    }


})


test("RadioButton" , { tag : ['@inputbox', '@regression']}  , async({page}) =>{

let maleradio:Locator = page.locator("input#male");
let femaleradio:Locator = page.locator("input#female");

await expect(maleradio).toBeVisible();
expect(await maleradio.isChecked()).toBe(false);

await maleradio.check();
await expect(maleradio).toBeChecked();
expect(await maleradio.isChecked()).toBe(true);


await femaleradio.check();
await expect(maleradio).not.toBeChecked();
expect(await maleradio.isChecked()).toBe(false);

})



})
