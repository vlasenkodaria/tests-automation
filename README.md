# tests-automation

This project uses [Playwright](https://playwright.dev/) for end-to-end testing.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/vlasenkodaria/tests-automation.git
   cd tests-automation
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Install Playwright browsers:**
   ```bash
   npx playwright install
   ```

## Running Tests

- **Run all tests:**
  ```bash
  npx playwright test
  ```

- **Run a specific test file:**
  ```bash
  npx playwright test tests/checkboxes.spec.js
  ```

- **View test results in the browser (headed mode is enabled by default):**
  No extra flags needed, as `headless: false` is set in `playwright.config.js`.

## Troubleshooting

- If you see an error like  
  `Error: browserType.launch: Executable doesn't exist ...`  
  make sure you have run:
  ```bash
  npx playwright install
  ```

- If you see  
  `Error: Cannot find module '@playwright/test'`  
  make sure you have run:
  ```bash
  npm install
  ```

## Project Structure

- `tests/` — Your test files
- `playwright.config.js` — Playwright configuration
- `package.json` & `package-lock.json` — Project dependencies

## Useful Links

-
