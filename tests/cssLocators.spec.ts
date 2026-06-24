import {test, Locator, expect} from '@playwright/test'


test.beforeEach("Before Each" , async({page})=>{

await page.goto("https://automationexercise.com/");

await expect(page).toHaveTitle("Automation Exercise");
})

test.describe("CSSLocators" , ()=>{

test( "id" , {tag: ['@csslocators' , '@regression']} , async({page}) =>{

let divelem:Locator = page.locator("div#Women");

let classattr = await divelem.getAttribute("class");
console.log("Class attribute value is:" , classattr);
expect(classattr).toBe("panel-collapse collapse");


})

test("class" , {tag : ['@regression' , '@csslocators'] } , async({page})=>{

    let element : Locator = page.locator("i.fa-envelope");
    await expect(element).toBeVisible();
    
})

test("Attribute" , {tag:['@regression' , '@csslocators']} , async({page}) =>{

let link:Locator= page.locator("a[href='/api_list']").nth(0);
console.log("image text:" , await link.innerText());

})

test("ClassAttribute" , {tag:['@regression' , '@csslocators']} , async({page}) =>{
let link:Locator= page.locator("a.add-to-cart[data-product-id='2']").first();
console.log("link text:" , await link.textContent());

})


test("startswith" , {tag:['@regression' , '@csslocators']} , async({page}) =>{
let getlinks:Locator= page.locator("img[src^='/get']")

let linkcount= await getlinks.count();
expect(linkcount).toBe(34);

})


test("endswith" , {tag:['@regression' , '@csslocators']} , async({page}) =>{
let getlinks:Locator= page.locator("img[src$='2']")

let linkcount= await getlinks.count();
expect(linkcount).toBe(5);

})
test("contains" , {tag:['@regression' , '@csslocators']} , async({page}) =>{
let getlinks:Locator= page.locator("div[class*='image']")

let linkcount= await getlinks.count();
expect(linkcount).toBe(40);
await expect(getlinks).toHaveCount(40);

})

})


