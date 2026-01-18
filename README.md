# Sauce Demo Test Suite

Automated tests for [Sauce Labs Demo Application](https://www.saucedemo.com/) using Nightwatch.js.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18+) - includes npm
- [Chrome browser](https://www.google.com/chrome/)

**Note**: Java is not required. This suite uses ChromeDriver directly via WebDriver mode. If you encounter any issues related to Java, it can be downloaded from [here](https://www.java.com/en/download/).
## Installation

### 1. Clone the repository

**HTTPS (recommended):**
```bash
git clone <[https://github.com/torbjornsteff/test-suite-demo.git](https://github.com/torbjornsteff/test-suite-demo.git)
cd test-suite-demo
```

**SSH:**
```bash
git clone [git@github.com:torbjornsteff/test-suite-demo.git](git@github.com:torbjornsteff/test-suite-demo.git)
cd test-suite-demo
```

### 2. Install dependencies
```bash
npm install
```

## Running Tests

```bash
# Run all tests
npm run test

# Run specific test
npx nightwatch -c src/nightwatch.conf.js "src/tests/00-happyFlow.js"

# Run with visible browser
npx nightwatch -c src/nightwatch.conf.js --no-headless "src/tests/00-happyFlow.js"

# Run by tag
npx nightwatch -c src/nightwatch.conf.js --grep "happy-path"
```

## Project Structure

```
src/
├── pages/           # Page objects
├── helpers/         # logHelper, loginHelper
├── tests/           # Test files
│   ├── 00-happyFlow.js
│   ├── 01-invalidLogin.test.js
│   ├── 02-formValidation.test.js
│   └── 03-lockedOutUser.test.js
└── nightwatch.conf.js
```

## Tests

- **Happy Flow** - Complete purchase flow
- **Invalid Login** - Login with wrong password
- **Form Validation** - Empty checkout fields
- **Locked-Out User** - Locked account login attempt

## Test Credentials

Located in `src/pages/login_credentials.js`:
- `standard_user` - Valid credentials
- `locked_out_user` - Locked account

## Notes

- Uses Page Object Model pattern
- Comprehensive logging via `logHelper`
- Price validation with 1-cent tolerance
- All tests use persistent browser session

## Known Limitations

- Tests run against a public demo site (https://www.saucedemo.com/) - may be affected by external downtime
- ChromeDriver version must match installed Chrome browser version
- Tests designed for Chrome only (can be extended to other browsers)
- Network delays may occasionally cause timeouts on slower connections