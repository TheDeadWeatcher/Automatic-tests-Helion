class UserPage {
  get yourAccountBtn() {
    return $("div.your-profile");
  }

  get logInForm() {
    return $("#log_in.form");
  }

  get logInBtn() {
    return $("p>#log_in_submit");
  }

  get lostPasswordBtn() {
    return $("a.arrow-link");
  }

  get registerBtn() {
    return $("a.button");
  }

  get yourEmailInput() {
    return $("input[name='loginemail']");
  }

  get labelErrorMessage (){
    return $("p label.error");
  }

  async getLabelErrorMessage ():Promise<string>{
    const label: WebdriverIO.Element = await this.labelErrorMessage;
    await label.waitForDisplayed();
    return await label.getText();
  }

  async typePhraseEmailInput(value: string) {
    const input: WebdriverIO.Element = await this.yourEmailInput;
    await input.waitForDisplayed();
    await input.setValue(value);
  }

  async registerBtnVisible() {
    const btn: WebdriverIO.Element = await this.registerBtn;
    await btn.waitForDisplayed();
  }

  async lostPasswordBtnVisible() {
    const btn: WebdriverIO.Element = await this.lostPasswordBtn;
    await btn.waitForDisplayed();
  }

  async logInBtnVisible() {
    const btn: WebdriverIO.Element = await this.logInBtn;
    await btn.waitForDisplayed();
  }

  async logInBtnClick() {
    const btn: WebdriverIO.Element = await this.logInBtn;
    await btn.waitForDisplayed();
    await btn.click();
  }

  async logInFormVisible() {
    const form: WebdriverIO.Element = await this.logInForm;
    await form.waitForDisplayed();
  }

  async yourAccountBtnVisible() {
    const btn: WebdriverIO.Element = await this.yourAccountBtn;
    await btn.waitForDisplayed();
  }

  async yourAccountBtnClick() {
    const btn: WebdriverIO.Element = await this.yourAccountBtn;
    await btn.waitForDisplayed();
    await btn.click();
  }
}

export default new UserPage();