import { test, expect } from "@playwright/test";

const UI_URL = "http://localhost:5173/";

test("should allow the user to log in", async ({ page }) => {
  await page.goto(UI_URL);

  await page.getByRole("link", { name: "Log in" }).click();

  await expect(
    page.getByRole("heading", { name: "Log in to your account" })
  ).toBeVisible();

  await page.locator("[name=email]").fill("1@1.com");
  await page.locator("[name=password]").fill("password123");

  await page.getByRole("button", { name: "Log in" }).click();

  await expect(page.getByRole("link", { name: "Account" })).toBeVisible();
  await expect(page.getByRole("button", { name: "Log out" })).toBeVisible();
});

test("should allow user to register", async ({ page }) => {
  const testEmail = `test_register_${
    Math.floor(Math.random() * 90000) + 10000
  }@test.com`;
  await page.goto(UI_URL);

  await page.getByRole("link", { name: "Log in" }).click();
  await page.getByRole("link", { name: "Create an account here" }).click();
  await expect(
    page.getByRole("heading", { name: "Join for free" })
  ).toBeVisible();

  await page.locator("[name=firstName]").fill("test_firstName");
  await page.locator("[name=lastName]").fill("test_lastName");
  await page.locator("[name=email]").fill(testEmail);
  await page.locator("[name=password]").fill("password123");
  await page.locator("[name=confirmPassword]").fill("password123");

  await page.getByRole("button", { name: "Create Account" }).click();

  await expect(page.getByRole("link", { name: "Account" })).toBeVisible();
  await expect(page.getByRole("button", { name: "Log out" })).toBeVisible();
});
