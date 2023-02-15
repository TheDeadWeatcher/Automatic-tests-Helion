import GlobalPage from "../../pages/GlobalPage";
import AccountPage from "../../pages/components/AccountPage";
import { helionHomeUrl } from "../../config/pagesUrl";
import { incorrectPhrase, labelErrorMessage } from "../../config/data";

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

    it("Should fill login and verify announcement", async ()=>{
        await AccountPage.typePhraseEmailInput(incorrectPhrase);
        await AccountPage.logInBtnClick();
        await expect ( await AccountPage.getLabelErrorMessage()).toContain(labelErrorMessage);

    });
});