import {test, Locator, expect} from '@playwright/test'


test.beforeEach("Before each", async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/")
expect (page).toHaveURL("https://testautomationpractice.blogspot.com/");
})


test.describe("StaticSelectOptionTests" , ()=>{

test("StaticSelectOption" , { tag : ['@inputbox', '@regression']}  , async({page}) =>{

let countrylabel:Locator = page.getByLabel("Country:")
await expect(countrylabel).toBeVisible();

let countrySelect:Locator = page.getByRole('combobox' , {name: 'country'})
await expect(countrySelect).toBeVisible();

let countryoptions: Locator = page.locator("select[id='country']>option");
let countryoptionscount = await countryoptions.count();

//Check number of options present
console.log("Country count in dropdown is:" , countryoptionscount);


//select option from dropdown
//await countrySelect.selectOption("United States")  //select by Visible text
//await countrySelect.selectOption({value: 'canada'});
//await countrySelect.selectOption({label:'India'})
await countrySelect.selectOption({index:3})

//Check whether one option is present in list of options

let optionstext: String[] = await countryoptions.allTextContents();
let trimmedoptionstext: String[] = optionstext.map(text=>text.trim());

console.log(trimmedoptionstext);

expect(trimmedoptionstext).toContain('Japan');

})


test("StaticmultiSelectOption" , { tag : ['@inputbox', '@regression']}  , async({page}) =>{

let colourslabel:Locator= page.getByLabel("Colors:");
 await expect(colourslabel).toBeVisible();

 let selectdropdown:Locator= page.locator("#colors");
await expect(selectdropdown).toBeVisible();

let alloptionsText: String[] =  await selectdropdown.allInnerTexts();
console.log(alloptionsText);

//await selectdropdown.selectOption(['Red','Green']);  //using visual text
//await selectdropdown.selectOption([{'value' : 'red'} , {'value':'blue'}]); //using value
//await selectdropdown.selectOption([{'label' : 'Red'} , {'label' : 'White'}]) //using label
await selectdropdown.selectOption([{'index':0 } , {'index' : 2}]); //using index
//print all options from colour dropdown


 let selectoptions:Locator= page.locator("#colors>option");
let options:Locator[] = await selectoptions.all()
 let optionsCount=await selectoptions.count();
 console.log("colors count:" , optionsCount)
 expect(optionsCount).toBe(7);


 for (const option of options ){
    console.log("Country using of loop:",await option.innerText());
       
 }


 for (let i=0 ; i < optionsCount ; i++ ){
    let option:string = await options[i].innerText();
    console.log("Country using normal for loop:",option )
 }

 console.log("Second color is:" , await selectoptions.nth(2).innerText())


await page.waitForTimeout(5000);



})
})