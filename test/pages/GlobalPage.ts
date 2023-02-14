class GlobalPage {

    get rodo() {
        return $ ("a#rodo-ok")
    }

    async openPage(pageUrl: string, expectedPageUrl: string){
        await browser.url(pageUrl);
        await expect(browser).toHaveUrl(expectedPageUrl);
    };

    async rodoAkcept(){
        const btnOk: WebdriverIO.Element = await this.rodo;
        await btnOk.click(); 
    }
     

};

export default new GlobalPage();