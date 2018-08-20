const puppeteer = require('puppeteer');
const assert = require('assert');

describe('Demo test bid functionality for stockx', () => {
  var browser, page;

    beforeEach (async () => {
        browser = await puppeteer.launch({ headless: false });
        page = await browser.newPage();
      })

    afterEach (() => {
        browser.close()
      })

    it('Test that if unauthorized user tries to make a bid, prompt user to auth', async () => {
        // Set high timout for this test
        await page.goto('https://stockx.com/buy/adidas-yeezy-boost-350-v2-butter');
        // Wait for page to load
        await delay(5000);
        // Click "I understand" button
        await page.click('[class="button right-button button-green"]');
        // Wait for page to load
        await delay(1000);
        // Check to see if the select size grid header is present
        await page.waitForSelector('[class="tile-subvalue"]');
        // Click the smallest size to bid on
        await page.click('[class="tile-subvalue"]');
        // Check for enter bid input
        await page.waitForSelector('[name="ask-amount"]');
        // Enter a bid amount
        await page.type('[name="ask-amount"]','270');
        // Click next button
        await page.click('[class="button right-button button button-green"]');
        // assert that signup wrapper appears
        assert(await page.waitForSelector('[class="access-wrap signup-wrap"]'));
      });

    // Promise function to allow delay with await
    function delay(time) {
    return new Promise(function(resolve) { 
       setTimeout(resolve, time)
        });
    }
});