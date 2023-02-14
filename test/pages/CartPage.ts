class CartPage {
  get successAlert() {
    return $("div.successbox > p");
  }

  get finallyPriceValue() {
    return $("h3#cart-edit-summary");
  }

  get checkbox () {
    return $("#formularz tr th.checkbox");
  }

  get deleteSelectedLabel (){
    return $("#usun p a");
  }


  get deletedAlertMessage () {
    return $("div.infobox > p");
  }

  async getDeletedAlerMessageValue (): Promise<string>{
    const alert: WebdriverIO.Element = await this.deletedAlertMessage;
    await alert.waitForDisplayed();
    return await alert.getText();

  }

  async acceptDeleteAlert () {
    await browser.acceptAlert();
  }

  async ClickOnSelectedLabel () {
    const label: WebdriverIO.Element = await this.deleteSelectedLabel;
    await label.waitForDisplayed();
    await label.scrollIntoView();
    await label.click ();
  }

  async ClickOnCheckBox () {
    const checkBox: WebdriverIO.Element = await this.checkbox;
    await checkBox.waitForDisplayed();
    await checkBox.scrollIntoView();
    await checkBox.click ();
  }

  async getSuccessAlertValue(): Promise<string> {
    const alert: WebdriverIO.Element = await this.successAlert;
    await alert.waitForDisplayed();
    return await alert.getText();
  }


  async getFinallyPriceValue(): Promise<string> {
    const price: WebdriverIO.Element = await this.finallyPriceValue;
    await price.waitForDisplayed();
    return await price.getText();
  }
}

export default new CartPage();