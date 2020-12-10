import { launch } from 'puppeteer'

/**
 * Gets the CDN URL of a TikTok
 * 
 * @param tikTokLink The TikTok link
 * @returns The CDN URL
 */
export default async (tikTokLink: string) => {
    const browser = await launch({ headless: true, args: ['--no-sandbox'] });
    const page = await browser.newPage();
    
    await page.goto('https://musicallydown.com/');

    await page.type('#link_url', tikTokLink);
    await page.keyboard.press('Enter');
    await page.waitForNavigation();

    const cdnURL = await page.evaluate(() => { 
        const dlBtn = <HTMLLinkElement> document.querySelectorAll('a.btn')[3];
        return dlBtn.href;
    });

    browser.close();

    return cdnURL;
}