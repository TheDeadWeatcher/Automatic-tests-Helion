import SearchbarPage from '../../pages/components/SearchbarPage';
import ProductPage from '../../pages/components/ProductPage';
import GlobalPage from '../../pages/GlobalPage';
import CartPage from '../../pages/CartPage';
import {
  helionHomeUrl,
  searchProductUrl,
  cartUrl,
} from '../../config/pagesUrl';
import {
  searchPhrase,
  alertText,
  deletedProductMessage,
} from '../../config/data';
import SearchResultPage from '../../pages/SearchResultPage';

describe('E2E - Products', async () => {
  let productTitle: string = '';
  let price: string = '';

  before(() => {
    browser.url(helionHomeUrl); // hook before
    GlobalPage.rodoAkcept();
  });

  it('Should type search pharse and click search icon', async () => {
    await SearchbarPage.typeSearchPhrase(searchPhrase);
    await SearchbarPage.clickOnSearchIcon();
    await expect(browser).toHaveUrl(searchProductUrl);
  });

  it('Should click to first book in page result, verify tittle of book and visible add to cart btn', async () => {
    await SearchResultPage.firstBookResultClick();
    await ProductPage.getPorductTitleVisible();
    await ProductPage.addToCartVisible();
    productTitle = await ProductPage.getProductTitleValue();
    price = await ProductPage.getProductPrice();
  });

  it('Should click on add to cart btn, compare prcie, ', async () => {
    await ProductPage.addTocartClick();
    await expect(browser).toHaveUrlContaining(cartUrl);
    await expect(await CartPage.getSuccessAlertValue()).toContain(productTitle);
    await expect(await CartPage.getFinallyPriceValue()).toContain(price);
  });

  it('Click on checkbox label, delete product from cart  ', async () => {
    await CartPage.ClickOnCheckBox();
    await CartPage.ClickOnSelectedLabel();
    await expect(await browser.getAlertText()).toContain(alertText);
    await CartPage.acceptDeleteAlert();
    await expect(await CartPage.getDeletedAlerMessageValue()).toContain(
      deletedProductMessage
    );
  });
});
