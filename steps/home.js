const { Given, When, Then } = require('cucumber');

/**
 * Customer can see the home screen
 */
Given('nothing', async function () {
});

When('customer is shown the home screen', async function () {
});

Then(
  'they should see a screen title {string} in home screen',
  async function (title) {
    const text = await $('~HomeScreenText');

    await text.waitForExist({ timeout: 10000 });
    await expect(text).toHaveTextContaining(title);
  },
);
