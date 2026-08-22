# Test Scenarios

High-level scenarios covered by this project. Each maps to detailed test cases in
`test-cases.xlsx` and to automated coverage in `tests/`.

| ID | Scenario | Priority | Automated? | Automation File |
|---|---|---|---|---|
| TS-001 | Verify user can log in with valid credentials | High | Manual only | — |
| TS-002 | Verify user cannot log in with invalid credentials | High | Yes | `tests/login.spec.js` |
| TS-003 | Verify signup is blocked for an already-registered email | Medium | Yes | `tests/login.spec.js` |
| TS-004 | Verify product search returns relevant results | High | Yes | `tests/search.spec.js` |
| TS-005 | Verify search with no matches shows empty results gracefully | Medium | Yes | `tests/search.spec.js` |
| TS-006 | Verify user can add a product to the cart | High | Yes | `tests/cart.spec.js` |
| TS-007 | Verify user can remove a product from the cart | High | Yes | `tests/cart.spec.js` |
| TS-008 | Verify checkout requires login/registration | Medium | Manual only | — |
| TS-009 | Verify Contact Us form submits successfully with valid input | Low | Manual only | — |
| TS-010 | Verify newsletter subscription accepts a valid email | Low | Manual only | — |
| TS-011 | Verify Products API returns a valid product list | High | Yes | `tests/api.spec.js` |
| TS-012 | Verify Brands API returns a valid brand list | Medium | Yes | `tests/api.spec.js` |
| TS-013 | Verify Search Product API returns matches for a valid keyword | High | Yes | `tests/api.spec.js` |
| TS-014 | Verify Search Product API returns a 400 error when the required param is missing | Medium | Yes | `tests/api.spec.js` |
| TS-015 | Verify Login API returns 404 for invalid credentials | High | Yes | `tests/api.spec.js` |
| TS-016 | Verify Login API returns 400 when required params are missing | Medium | Yes | `tests/api.spec.js` |
| TS-017 | Verify Login API returns 405 for an unsupported HTTP method | Low | Yes | `tests/api.spec.js` |

## Notes
- Scenarios marked "Manual only" are covered in the manual test case sheet (`test-cases.xlsx`) but
  not yet automated — candidates for future automation.
- Detailed step-by-step test cases (steps, expected results, actual results, pass/fail status) live
  in `test-cases.xlsx`, one row per scenario.
