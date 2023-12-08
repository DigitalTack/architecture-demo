import { expect, test } from "@playwright/test";

test.describe("Test", () => {
  test("true to be true", ({ page }) => {
    expect(true).toBeTruthy();
  });
});
