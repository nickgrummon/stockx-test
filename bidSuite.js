const puppeteer = require('puppeteer');
const assert = require('assert');

describe('Demo test bid functionality for stockx', () => {
var browser, page, pageLoaded;

beforeEach (async () => {
    // Open browser and use slow mo so you can watch the headful browser work. Remove these params to speed up
    // test runtime by 533%.
    browser = await puppeteer.launch({ headless: false, slowMo: 250 });
    // instantiate page object 
    page = await browser.newPage();
    // create promise that can be awaited to confirm load event is fired
    pageLoaded = page.waitForNavigation({'waitUntil': ['load']})
})

afterEach (() => {
    browser.close()
})

it('Test that if unauthorized user tries to make a bid, prompt user to auth', async () => {
    // Go to page that starts flow for making a bid
    await page.goto('https://stockx.com/buy/adidas-yeezy-boost-350-v2-butter');
    // Wait for page to load
    await pageLoaded;
    // Click "I understand" button on process page
    await page.click('[class="button right-button button-green"]');
    // Wait for page to load
    await pageLoaded;
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
    // assert that signup options are displayed
    assert(await page.waitForSelector('[class="access-wrap signup-wrap"]'));
    assert(await page.waitForSelector('[class="btn btn-facebook"]'))
    assert(await page.waitForSelector('[class="btn btn-twitter"]'))
  });
});