class RegisterPage {
    
    get pageTitle(){
        return $("div #page-title");
    }

    get registerForm(){
        return $(".page-form>#rejestracja");
    }

    async registerFormVisible(){
        const form: WebdriverIO.Element = await this.registerForm;
        await form.waitForDisplayed();
    }

    async getPageTitleText ():Promise<string>{
        const title: WebdriverIO.Element = await this.pageTitle;
        await title.waitForDisplayed();
        return await title.getText();
    }

}

export default new RegisterPage();