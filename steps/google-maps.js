const { When, Then } = require('cucumber');

/**
 * Customer can go to and see the Google Maps screen
 */
When('customer navigating to the Google Maps screen', async function () {
  const aButton = await $('~GoogleMaps');

  await aButton.waitForExist({ timeout: 10000 });
  await aButton.click();
});

Then(
  'they should see a screen title {string} in Google Maps screen',
  async function (title) {
    const text = await $('~GoogleMapsScreenText');
    await expect(text).toHaveTextContaining(title);
  },
);
