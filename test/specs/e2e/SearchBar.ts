import GlobalPage from "../../pages/GlobalPage";
import SearchBarPage from "../../pages/components/SearchbarPage";
import SearchResultPage from "../../pages/SearchResultPage";
import { helionHomeUrl, incorrectUrl, searchPageUrl } from "../../config/pagesUrl";
import { incorrectPhrase, notFoundMsg, searchPhrase, searchResultTitle } from "../../config/data";

describe("E2E - SearchBar",async () => {
    it("Should open Helion home page, verify url and visibale searchbar, akcept rodo popup",async () => {
        await GlobalPage.openPage(helionHomeUrl, helionHomeUrl);
        await SearchBarPage.searchBarIsVisible();
        await GlobalPage.rodoAkcept();
    });


    it("Should verify url and click on search icon",async () => {
        await SearchBarPage.clickOnSearchIcon();
        await expect(browser).toHaveUrl(helionHomeUrl);
    });

    it("Should type search value and verify visible popup", async () => {
        await SearchBarPage.typeSearchPhrase(searchPhrase);
        await SearchBarPage.suggestPopupIsVisible(); 
         
    });


    it("Should click on see all books btn",async () => { //  expect robi buga
        await SearchBarPage.clickOnSeeAllBooksBtn();
        await expect(browser).toHaveUrl(searchPageUrl);
        
    })

    it("Should verify visible correctly title and number of books",async () => { // wyżej bug to i tu bug 
        const  title:string = await SearchResultPage.getPageTitle();
        await expect(title).toContain(searchResultTitle);
        const numberOfBooks:number = await SearchResultPage.getNumberOfBooks();
        await expect(numberOfBooks).toEqual(20);
        
    });

    it("Should clear input value, verify is inup clear",async () => {
        await SearchBarPage.clearSearchBar();
        await expect ( await SearchBarPage.getInputValue()).toContain("");
    });

    it("Should type incorrect book name and verify alert", async () =>{
        await SearchBarPage.typeSearchPhrase(incorrectPhrase);
        await SearchBarPage.clickOnSearchIcon();
        await expect ( await SearchBarPage.getNotFoundAlert()).toContain(notFoundMsg);
    });

    it("Should clear inpu value and click on search icon", async () => {
        await SearchBarPage.clearSearchBar();
        await SearchBarPage.clickOnSearchIcon();
        await expect (await SearchBarPage.getInputValue()).toContain(incorrectPhrase);
        await expect (await browser).toHaveUrl(incorrectUrl);
    });

});