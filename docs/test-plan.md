# Test Plan — AutomationExercise QA Automation

## Project
QA automation portfolio project covering [AutomationExercise.com](https://automationexercise.com),
a public e-commerce demo application.

## Application Under Test
AutomationExercise.com — an e-commerce site with product browsing, cart, checkout, account
management, and a public REST API.

## Testing Objective
Validate core user-facing flows (login, search, cart) and backend API behavior (products, brands,
search, login verification) through a combination of manual exploratory testing and automated
regression testing.

## Scope

**In scope**
- User login and signup (positive and negative cases)
- Product search and filtering
- Shopping cart: add / remove items
- Public REST API: products, brands, search, login verification
- Cross-browser execution (Chromium, Firefox)

**Out of scope**
- Payment gateway / real transaction processing
- Performance and load testing
- Mobile responsiveness / mobile app testing
- Security penetration testing

## Testing Types
- Functional testing (manual + automated)
- UI regression testing (Playwright, Page Object Model)
- API testing (Playwright request context)
- Negative / boundary testing (invalid inputs, missing fields, unsupported methods)

## Environment
- Application: https://automationexercise.com (live demo environment)
- Browsers: Chromium, Firefox (via Playwright)
- OS: Windows 11
- CI: GitHub Actions (ubuntu-latest runner)

## Tools
- Playwright (Test Runner + API request context) — automation
- Node.js / JavaScript — scripting language
- GitHub Actions — CI/CD
- Excel / Google Sheets — manual test case tracking and bug reporting

## Entry Criteria
- Application is publicly accessible and stable
- Test environment (Node.js, Playwright browsers) is installed
- Test data (`.env` with `TEST_EMAIL`) is configured for tests that require a pre-registered account

## Exit Criteria
- All planned test cases have been executed (manually and/or automated)
- All identified defects are logged with severity/priority in the bug report log
- Automated suite passes consistently in CI (excluding known, documented site behavior)

## Risks
- Live third-party demo site may change without notice, breaking locators or expected data
- Shared/public test data (e.g. product catalog) may change between runs
- No isolated test environment — tests run directly against the live public site
