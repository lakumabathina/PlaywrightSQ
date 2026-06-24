import {test, expect, Locator} from '@playwright/test'


test.describe('XPath Basic Locators' , ()=>{

test('relative xpath' ,  {
    tag: ['@xpathbasic', '@regression']  }, async({page})=>{

        console.log('Executing test relative xpath');
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

let buildlinks : Locator = page.locator("//a[starts-with(@href,'/build')]");

let countlinks = await buildlinks.count();
console.log("First link", await buildlinks.first().textContent())
console.log("Last link", await buildlinks.last().textContent())

/*
for(let i = 0 ; i < countlinks ; i++)
{
    let textlink: any = await buildlinks.nth(i).textContent();
      let textlink1: any = await buildlinks.nth(i).innerText();

    console.log("Inner text is:" , textlink1);
    }

*/
    let alllinksTexts = await page.locator("//a").allInnerTexts();
    
    console.log("Number of links:", alllinksTexts.length );

   for (let text in alllinksTexts){
    console.log("Link Text is:" , alllinksTexts[text]);
   }
/*
   for (let text of  alllinksTexts){
    console.log("Link Text in of loop:" , text);
   }
*/
 let googlepluslink:Locator= page.locator("//div[@class='column follow-us']//li[position()=5]");
 await expect(googlepluslink).toBeVisible();


    })
    
})