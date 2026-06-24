import {test, Locator, expect} from '@playwright/test'


test.beforeEach("Before Each " , async({page})=>{


await page.goto("https://www.w3schools.com/html/");

await expect(page).toHaveTitle("HTML Tutorial");

await page.locator("//a[text()='HTML Tables' and contains(@class, 'overview_header')]").click();
let htmltabepage:Locator=page.locator("//h2[text()='Define an HTML Table']");
await expect(htmltabepage).toBeVisible();

})


test.describe("XPatch axes" , ()=>{

test("self" , { tag : ['@xpathaxes', '@regression']} , async({page})=>{
console.log('Executing test self');


let germanyLoc:Locator=page.locator("//table[@id='customers']//td[text()='Germany']/self::td");
await expect(germanyLoc).toHaveText("Germany");
})



test("parent" , { tag : ['@xpathaxes', '@regression']} , async({page})=>{

console.log('Executing test parent');

//print second row contents
let rowtwo:Locator = page.locator("//td[text()='Francisco Chang']/parent::tr");

let rowtwotext = await rowtwo.innerText();
console.log('Row 2 text is:' , rowtwotext);



})

test("child" , { tag : ['@xpathaxes', '@regression']} , async({page})=>{

console.log('Executing test child');


let secondrowcolumns:Locator[]= await page.locator("//table[@id='customers']//tr[2]/child::td").all();

let loccount = secondrowcolumns.length;

for (let i=0 ; i < loccount ; i ++)
{
    console.log('Row two element is:' , await secondrowcolumns[i].innerText())
}


let thirdrowcolumns:Locator=  page.locator("//table[@id='customers']//tr[3]/child::td");

let loccount1 = await thirdrowcolumns.count();
for (let i=0; i < loccount1 ; i++)
{

  console.log("Third row element is:" ,await thirdrowcolumns.nth(i).innerText() );

}

})

test("preceding" , { tag : ['@xpathaxes', '@regression']} , async({page})=>{

console.log('Executing test preceding');

//preceeding two elements
let preceding1:Locator = page.locator("//td[text()='Francisco Chang']/preceding::td[1]");

let preceding1text = await preceding1.innerText();
console.log('Preceding1 text is:' , preceding1text);
await expect(preceding1).toHaveText("Centro comercial Moctezuma");

let preceding2:Locator = page.locator("//td[text()='Francisco Chang']/preceding::td").nth(2);
let preceding2text = await preceding2.textContent();
console.log('Preceding2 text is:' , preceding1text);

expect(preceding2text).toEqual("Germany");


})

test("precedingSibling" , { tag : ['@xpathaxes', '@regression']} , async({page})=>{

console.log('Executing test precedingSibling');

//preceeding sibling elements
let precedingsib1:Locator = page.locator("//td[text()='Francisco Chang']/preceding-sibling::td");

await expect(precedingsib1).toHaveCount(1);

let presib1 : any = await precedingsib1.nth(0).innerText();
console.log("preceding sibling1 text is",presib1 );

})


test("Following" , {tag: ['@regression, @xpathaxes']}, async({page})=>{

    console.log('Executing test Following');

    let followingfirstloc : Locator = page.locator("//td[text()='Ernst Handel']/following::td[1]");
    
    let followingsecloc : Locator = page.locator("//td[text()='Ernst Handel']/following::td").nth(3);
    await expect(followingfirstloc).toHaveText("Roland Mendel")
    await expect(followingsecloc).toHaveText("Helen Bennett")


})
test("FollowingSibling" , {tag: ['@regression, @xpathaxes']}, async({page})=>{

    console.log('Executing test FollowingSibling');

    let followingsibloc : Locator = page.locator("//td[text()='Ernst Handel']/following-sibling::td");
    
    await expect(followingsibloc).toHaveCount(2);

   expect(await followingsibloc.nth(0).innerText()).toBe("Roland Mendel")
})

})