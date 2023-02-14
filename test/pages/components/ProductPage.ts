class ProductPage {


  get productTitle() {
    return $("div.title-group > h1 > span[itemprop='name']");
  }

  get addToCart () {
    return $("#addToBasket_vwdtnp_w");
  }

  get productPrice(){
    return $("ins#cena_w")
  }

  async getProductPrice ():Promise<string> {
    const price:WebdriverIO.Element = await this.productPrice;
    await price.waitForDisplayed();
    return await price.getText();
  }

  async addTocartClick () {
    const button:WebdriverIO.Element = await this.addToCart;
    await button.waitForDisplayed();
    await button.click();
  }

  async addToCartVisible () {
    const button:WebdriverIO.Element = await this.addToCart;
    await button.waitForDisplayed();
  }

  async getProductTitleValue ():Promise<string> {
    const title:WebdriverIO.Element = await this.productTitle;
    await title.waitForDisplayed();
    return await title.getText();

  }

  async getPorductTitleVisible()  {
    const title: WebdriverIO.Element = await this.productTitle;
    await title.waitForDisplayed();
  }
}

export default new ProductPage ();