class SearchBarPage {

  get searchInput() {
    return $("#inputSearch");
  }

  get searchIcon() {
    return $("//button[contains(text(), 'Szukaj')]");
  }

  get suggestPopup (){
    return $("form#szukanie div.suggest-list");
  }

  get seeAllBooksBtn(){
    return $("li.wszystkie>p>a");
  }

  get alerNotFound (){
    return $("div.not-found");
  }

 

  async getNotFoundAlert():Promise<string> {
    const alert:WebdriverIO.Element= await this.alerNotFound;
    await alert.waitForDisplayed();
    return await alert.getText();

  }

  async clickOnSeeAllBooksBtn(){
    const btn:WebdriverIO.Element = await this.seeAllBooksBtn;
    await btn.waitForDisplayed();
    //await btn.scrollIntoView();
    await btn.click(); 
  }

  async suggestPopupIsVisible (){
    const popup: WebdriverIO.Element = await this.suggestPopup;
    await popup.waitForDisplayed();
  }

  async clickOnSearchIcon() {
    const icon: WebdriverIO.Element = await this.searchIcon;
    await icon.waitForDisplayed();
    await icon.click();
  }

  async searchBarIsVisible() {
    const input: WebdriverIO.Element = await this.searchInput;
    await input.waitForDisplayed();
  }

  async clearSearchBar (){
    const input:WebdriverIO.Element = await this.searchInput;
    await input.waitForDisplayed();
    await input.clearValue();
  }

  async getInputValue(){
    const input:WebdriverIO.Element = await this.searchInput;
    await input.waitForDisplayed();
    return await input.getValue();
  }

  async typeSearchPhrase(value: string) {
    const input:WebdriverIO.Element = await this.searchInput;
    await input.waitForDisplayed();
    await input.setValue(value);
  }
}

export default new SearchBarPage();
