class SearchResultPage {
  get pageTitle() {
    return $("h1#pageTitle");
  }

  get booksIteam() {
    return $$("ul.list > li");
  }

  get firstBookResult() {
    return $(".book-list-inner > ul > li > a > p:nth-child(1)");
  }

  async firstBookResultClick() {
    const book: WebdriverIO.Element = await this.firstBookResult;
    await book.waitForDisplayed();
    await book.click();
  }

  async getNumberOfBooks(): Promise<number> {
    const books: WebdriverIO.ElementArray = await this.booksIteam;
    return await books.length;
  }

  async getPageTitle(): Promise<string> {
    const h1: WebdriverIO.Element = await this.pageTitle;
    await h1.waitForDisplayed();
    return await h1.getText();
  }
}

export default new SearchResultPage();