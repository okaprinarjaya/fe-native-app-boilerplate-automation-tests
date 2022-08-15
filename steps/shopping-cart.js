const { Given, When, Then } = require('cucumber');

/**
 * Customer can go to and see the shopping cart screen
 */
When('customer navigating to the shopping cart screen', async function () {
  const aButton = await $('~ShoppingCart');

  await aButton.waitForExist({ timeout: 10000 });
  await aButton.click();
});

Then(
  'they should see a screen title {string} in shopping cart screen',
  async function (title) {
    const text = await $('~ShoppingCartScreenText');
    await expect(text).toHaveTextContaining(title);
  },
);


const products = [
  { name: 'Pampers Charm XL', id: '1' },
  { name: 'V-Soy Soy Milk Cocoa', id: '2' },
  { name: 'Rokok Sampoerna Mild 16 Batang', id: '3' },
];

/**
 * Customer can add a product item to the cart
 */
Given('the customer\'s cart is empty', async function () {
});

When(
  'they add a product item named {string} to the cart',
  async function (spesificProductItemName) {
    const spesificProduct = products.find(item =>
      item.name === spesificProductItemName);
    const productsAsList = await $('~ProductList');

    const addToCartButton = await productsAsList.$(`~Product${spesificProduct.id}`);
    await addToCartButton.click();
  },
);

Then(
  'the cart should contain {int} {string} product item',
  async function (cartSpesificProductItemAmount, spesificProductItemName) {
    const spesificProduct = products.find(item =>
      item.name === spesificProductItemName);

    const cartDetailsAsList = await $('~CartDetailsAsList');
    const productItemNameText = await cartDetailsAsList.$(`~ProductItem-${spesificProduct.id}-Name`);
    const productItemAmountText = await cartDetailsAsList.$(`~ProductItem-${spesificProduct.id}-Amount`);

    await expect(productItemNameText).toHaveTextContaining(`Product item: ${spesificProductItemName}`);
    await expect(productItemAmountText).toHaveTextContaining(`Amount: ${cartSpesificProductItemAmount}`);
  },
);

Then('total items in the cart are 1', async function () {
  const text = await $('~CartItemsAmountText');
  await expect(text).toHaveTextContaining('Cart: 1');
});


/**
 * Customer can add the same product item to the cart
 */
Given('the customer\'s cart is not empty', async function () {
});

When(
  'they add the same product item named {string} to the cart',
  async function (spesificProductItemName) {
    const spesificProduct = products.find(item =>
      item.name === spesificProductItemName);
    const productsAsList = await $('~ProductList');

    const addToCartButton = await productsAsList.$(`~Product${spesificProduct.id}`);
    await addToCartButton.click();
  },
);

Then(
  'the cart should contain {int} {string} product items',
  async function (cartSpesificProductItemAmount, spesificProductItemName) {
    const spesificProduct = products.find(item =>
      item.name === spesificProductItemName);

    const cartDetailsAsList = await $('~CartDetailsAsList');
    const productItemNameText = await cartDetailsAsList.$(`~ProductItem-${spesificProduct.id}-Name`);
    const productItemAmountText = await cartDetailsAsList.$(`~ProductItem-${spesificProduct.id}-Amount`);

    await expect(productItemNameText).toHaveTextContaining(`Product item: ${spesificProductItemName}`);
    await expect(productItemAmountText).toHaveTextContaining(`Amount: ${cartSpesificProductItemAmount}`);
  },
);

Then('total items in the cart are 2', async function () {
  const text = await $('~CartItemsAmountText');
  await expect(text).toHaveTextContaining('Cart: 2');
});
