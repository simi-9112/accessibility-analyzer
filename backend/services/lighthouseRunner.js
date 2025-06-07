import puppeteer from 'puppeteer';
import lighthouse from 'lighthouse';
import { URL } from 'url';

export default async function runLighthouse(url) {
  // Launch browser with remote debugging port
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--remote-debugging-port=9222', '--no-sandbox', '--disable-setuid-sandbox'],
  });

  // Extract the debugging port dynamically from browser endpoint
  const wsEndpoint = browser.wsEndpoint();
  const urlObj = new URL(wsEndpoint);
  const port = urlObj.port;

  // Run Lighthouse connected to the Puppeteer browser
  const result = await lighthouse(url, {
    port: parseInt(port, 10),
    output: 'json',
    logLevel: 'info',
  });

  await browser.close();

  // Return accessibility score in percentage
  return result.lhr.categories.accessibility.score * 100;
}
