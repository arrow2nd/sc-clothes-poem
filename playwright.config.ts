import { defineConfig, devices } from "@playwright/test";

const prodUrl = "https://shiny-poems.vercel.app";
const localUrl = "http://localhost:3000";

export default defineConfig({
  reporter: "html",
  timeout: 30 * 1000,
  retries: 2,
  fullyParallel: true,
  expect: {
    timeout: 10 * 1000,
    toHaveScreenshot: {
      threshold: 0.2,
      maxDiffPixelRatio: 0.015
    }
  },
  use: {
    baseURL: process.env.PROD ? prodUrl : localUrl,
    trace: "retain-on-failure"
  },
  webServer: {
    command: "pnpm build && pnpm start",
    port: 3000,
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.PROD && !process.env.CI
  },
  projects: [
    {
      name: "chrome",
      use: {
        ...devices["Desktop Chrome"]
      }
    },
    {
      name: "firefox",
      use: {
        ...devices["Desktop Firefox"]
      }
    },
    {
      name: "safari",
      use: {
        ...devices["Desktop Safari"]
      }
    },
    {
      name: "android",
      grepInvert: /@desktop/,
      use: {
        ...devices["Pixel 5"]
      }
    },
    {
      name: "iphone",
      grepInvert: /@desktop/,
      use: {
        ...devices["iPhone 13"]
      }
    }
  ]
});
