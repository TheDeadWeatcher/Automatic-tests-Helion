import GlobalPage from "../../pages/GlobalPage";
import AccountPage from "../../pages/components/AccountPage";
import { helionHomeUrl, registerUrl } from "../../config/pagesUrl";
import { incorrectPhrase, labelErrorMessage, fictionalEmail, fictionalPassword, alertTextUser, registerTitle } from "../../config/data";
import RegisterPage from "../../pages/components/RegisterPage";

describe("Users - account panel verification", async ()=>{
    it("Should open and verify url of home page Helion, verify url and verify visible of account btn", async()=>{
        await GlobalPage.openPage(helionHomeUrl, helionHomeUrl);
        await GlobalPage.rodoAkcept();
        await AccountPage.yourAccountBtnVisible();
    });

    it("Should click on your account btn and verify: visible of login panel, btn zaloguj się, fraza nie pamietam hasła, btn zarejestruj się", async ()=> {
        await AccountPage.yourAccountBtnClick();
        await AccountPage.logInFormVisible();
        await AccountPage.logInBtnVisible();
        await AccountPage.registerBtnVisible();
        await AccountPage.lostPasswordBtnVisible();
    });

    it("Should fill login and verify announcement after clear input value", async ()=>{
        await AccountPage.typePhraseEmailInput(incorrectPhrase);
        await AccountPage.logInBtnClick();
        await expect ( await AccountPage.getLabelErrorMessage()).toContain(labelErrorMessage);
        await AccountPage.clearEmailInput();
    });

    it("Should type value of email and pass, click sign in btn, verify allert text", async ()=> {
        await AccountPage.typePhraseEmailInput(fictionalEmail);
        await AccountPage.typePhrasePasswordInput(fictionalPassword);
        await AccountPage.logInBtnClick();
        await expect ( await AccountPage.getLoginIncorrectText()).toContain(alertTextUser)

    });

    it("Should click on register btn, verify url, verify visible of h1, verify fill form",async ()=> {
        await AccountPage.ClickOnRegisterBtn();
        await expect (browser).toHaveUrl(registerUrl);
        await expect ( await RegisterPage.getPageTitleText()).toContain(registerTitle);
        await RegisterPage.registerFormVisible();
    });

});