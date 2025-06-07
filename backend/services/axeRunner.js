import puppeteer from 'puppeteer';
import axe from 'axe-core';

const axeSource = axe.source;

export default async function runAxe(url) {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();

  // Navigate to the URL
  await page.goto(url, { waitUntil: 'networkidle2' });

  // Inject axe-core script into the page context
  await page.evaluate(axeSource);

  // Run axe-core accessibility scan
  const results = await page.evaluate(async () => {
    return await axe.run();
  });

  await browser.close();

  // Return only the violations
  return results.violations;
}
