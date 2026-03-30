import { test, expect } from '@playwright/test';

const viewports = [
  { name: 'mobile', width: 375, height: 812 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1280, height: 900 },
];

const sections = ['#hero', '#projects', '#experience', '#about', '#contact'];

for (const vp of viewports) {
  test.describe(`${vp.name} (${vp.width}x${vp.height})`, () => {
    test.use({ viewport: { width: vp.width, height: vp.height } });

    test('full page screenshot', async ({ page }) => {
      await page.goto('http://localhost:3001');
      await page.waitForLoadState('networkidle');
      await page.screenshot({
        path: `tests/visual/screenshots/${vp.name}-full.png`,
        fullPage: true,
      });
    });

    for (const section of sections) {
      test(`section ${section}`, async ({ page }) => {
        await page.goto('http://localhost:3001');
        await page.waitForLoadState('networkidle');
        const el = page.locator(section);
        if (await el.count() > 0) {
          await el.scrollIntoViewIfNeeded();
          await page.waitForTimeout(500);
          await el.screenshot({
            path: `tests/visual/screenshots/${vp.name}-${section.replace('#', '')}.png`,
          });
        }
      });
    }
  });
}

test('no horizontal overflow on mobile', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('http://localhost:3001');
  await page.waitForLoadState('networkidle');
  const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
  expect(bodyWidth).toBeLessThanOrEqual(375);
});

test('no horizontal overflow on tablet', async ({ page }) => {
  await page.setViewportSize({ width: 768, height: 1024 });
  await page.goto('http://localhost:3001');
  await page.waitForLoadState('networkidle');
  const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
  expect(bodyWidth).toBeLessThanOrEqual(768);
});

test('navigation visible on desktop', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto('http://localhost:3001');
  const nav = page.locator('nav');
  await expect(nav).toBeVisible();
});

test('all images load', async ({ page }) => {
  await page.goto('http://localhost:3001');
  await page.waitForLoadState('networkidle');
  const images = page.locator('img');
  const count = await images.count();
  for (let i = 0; i < count; i++) {
    const img = images.nth(i);
    const naturalWidth = await img.evaluate(
      (el: HTMLImageElement) => el.naturalWidth
    );
    expect(naturalWidth).toBeGreaterThan(0);
  }
});

test('no console errors', async ({ page }) => {
  const errors: string[] = [];
  page.on('console', msg => {
    if (msg.type() === 'error') errors.push(msg.text());
  });
  await page.goto('http://localhost:3001');
  await page.waitForLoadState('networkidle');
  expect(errors).toEqual([]);
});
