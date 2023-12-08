import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './test',
  timeout: 1 * 60 * 1000,
  expect: {
    timeout: 1 * 60 * 1000
  },
  workers: 3,
  reporter: [["list"], ["html", { open: "never" }]],
  use: {
    baseURL: "http://localhost:3000/",
    headless: true,
    ignoreHTTPSErrors: true,
    video: "on",
    trace: "on",
    screenshot: "on",
  },
  projects: [
    {
      name: "demo",
      retries: 0,
    },
  ]
})
