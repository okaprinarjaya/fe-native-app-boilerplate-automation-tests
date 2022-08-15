const { Given, When, Then } = require('cucumber');

/**
 * customer can check out their product items added to the cart
 */
Given('customer has added some product items to the cart', async function () {
  // Go to shopping cart screen
  const aButton = await $('~ShoppingCart');

  await aButton.waitForExist({ timeout: 10000 });
  await aButton.click();

  // Add some product items to the cart
  const addToCartButton1 = await $('~Product1');

  // add 1 "Pampers Charm XL"
  await addToCartButton1.click();

  // add 1 "V-Soy Soy Milk Cocoa"
  await browser.pause(1500);
  const addToCartButton2 = await $('~Product2');
  await addToCartButton2.click();

  // add 1 "Rokok Sampoerna Mild 16 Batang"
  await browser.pause(1500);
  const addToCartButton3 = await $('~Product3');
  await addToCartButton3.click();

  // add 1 more "V-Soy Soy Milk Cocoa"
  await browser.pause(1500);
  await addToCartButton2.click();
});

When(
  'when they check out the product items in the shopping cart',
  async function () {
    const checkoutButton = await $('~CheckoutButton');
    await checkoutButton.click();
  },
);

Then('they should be taken to the check out screen', async function () {
  const text = await $('~ShoppingCheckoutScreenText');
  await expect(text).toHaveTextContaining('Shopping Checkout screen');
});

Then(
  'they can see all of their added product items with their details',
  async function () {
    const cartDetailsAsList = await $('~CartDetailsAsList');

    // Product ID: 1 -->
    const productItemNameText_1 = await cartDetailsAsList.$(
      '~ProductItem-1-Name',
    );
    const productItemAmountText_1 = await cartDetailsAsList.$(
      '~ProductItem-1-Amount',
    );

    // Product ID: 2 -->
    const productItemNameText_2 = await cartDetailsAsList.$(
      '~ProductItem-2-Name',
    );
    const productItemAmountText_2 = await cartDetailsAsList.$(
      '~ProductItem-2-Amount',
    );

    // Product ID: 3 -->
    const productItemNameText_3 = await cartDetailsAsList.$(
      '~ProductItem-3-Name',
    );
    const productItemAmountText_3 = await cartDetailsAsList.$(
      '~ProductItem-3-Amount',
    );

    await expect(productItemNameText_1)
      .toHaveTextContaining('Product item: Pampers Charm XL');
    await expect(productItemAmountText_1).toHaveTextContaining('Amount: 1');

    await expect(productItemNameText_2)
      .toHaveTextContaining('Product item: V-Soy Soy Milk Cocoa');
    await expect(productItemAmountText_2).toHaveTextContaining('Amount: 2');

    await expect(productItemNameText_3)
      .toHaveTextContaining('Product item: Rokok Sampoerna Mild 16 Batang');
    await expect(productItemAmountText_3).toHaveTextContaining('Amount: 1');
  },
);
