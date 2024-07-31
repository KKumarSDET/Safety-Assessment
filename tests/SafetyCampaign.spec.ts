import { test, expect, Locator } from '@playwright/test';

test.describe.configure({ mode: 'parallel' }); // This will run each TCs of same file in multiple worker 
 //i.e. prallel execution. By default fullyParallel: true, is set in config so it will run in parallel. 

test('All headings are visible and correct', async ({ page }) => {
  await page.goto('./intl/v/safety/highlights');
  const CookiesReject : Locator = page.getByRole('button', { name: 'Reject All' });
  await CookiesReject.click();
  const H2UI : Locator = page.getByRole('heading', { level: 2, name: 'Zero collisions' } );
  await H2UI.scrollIntoViewIfNeeded();
  await H2UI.isVisible();
  
});

test('Footer is visible', async ({ page }) => {
  await page.goto('./intl/v/safety/highlights');
  const CookiesReject : Locator = page.getByRole('button', { name: 'Reject All' });
  await CookiesReject.click();

  await page.getByText('International').scrollIntoViewIfNeeded();
  await page.getByText('Back to top').isVisible();
  await expect(page).toHaveScreenshot('footer.png');
  
});



test('Has Volvo word in title', async ({ page }) => {
  await page.goto('./intl/v/safety/highlights');
  console.log (await page.title());
  await expect(page).toHaveTitle(/Volvo/);
  const CookiesReject : Locator = page.getByRole('button', { name: 'Reject All' });
  await CookiesReject.click();
  await expect(page).toHaveScreenshot('landing.png');
  const FirstfoldUIh1 : Locator = page.getByRole('heading', { level: 1 });
  await expect(FirstfoldUIh1).toHaveText('Safety');
  await expect(FirstfoldUIh1).toBeVisible();
});

test('All Submenu are clickable', async ({ page }) => {
  await page.goto('./intl/v/safety/highlights');
  const CookiesReject : Locator = page.getByRole('button', { name: 'Reject All' });
  await CookiesReject.click();
  const Features = page.getByRole('link', { name: 'Features' });
   await page.getByRole('link', { name: 'Culture & vision' }).isEnabled();
   await Features.isEnabled();
   await Features.click();
   await expect(page).toHaveScreenshot('Submenu.png');
   await page.getByRole('link', { name: 'Child safety' }).isEnabled();
   await page.getByRole('link', { name: 'Research' }).isEnabled();
   await page.getByRole('link', { name: 'Heritage' }).isEnabled();
  
});

// test('All Topbar buttons are clickable and Tabpanel and Tablist is present', async ({ page }) => {
//   await page.goto('./intl/v/safety/highlights');
//   const CookiesReject : Locator = page.getByRole('button', { name: 'Reject All' });
//   await CookiesReject.click();
//   // Comparing it with previous screenshot.
//    await page.getByRole('button', { name: 'Our Cars' }).click();
//    await page.waitForLoadState('domcontentloaded');
//    await expect(page).toHaveScreenshot('Ourcars.png');
//    await page.getByRole('link', { name: 'Shop' }).last().click();
//    await page.waitForLoadState('domcontentloaded');
//    await expect(page).toHaveScreenshot('Shop.png');
//    await page.getByRole('link', { name: 'Owners' }).click();
//    await page.waitForLoadState('domcontentloaded');
//    await expect(page).toHaveScreenshot('Owners.png');
//    await page.getByRole('link', { name: 'About us' }).click();
//    await page.waitForLoadState('domcontentloaded');
//    await expect(page).toHaveScreenshot('Aboutus.png');
// });

