# Testing Guide for Travels Project

This project uses **Vitest** for unit testing, which is a blazing-fast unit test framework optimized for Vite projects.

## Installation

Testing dependencies are already installed. If you need to reinstall them, run:

```bash
npm install -D vitest @vitest/ui @testing-library/react @testing-library/jest-dom jsdom
```

## Available Test Commands

### Run tests in watch mode
```bash
npm test
```

### Run tests with UI dashboard
```bash
npm run test:ui
```

### Run tests once (CI mode)
```bash
npm run test:run
```

### Generate coverage report
```bash
npm run test:coverage
```

## Project Structure

Test files are co-located with their source files:

```
src/
├── components/
│   ├── SEOMeta.jsx
│   ├── SEOMeta.test.jsx          # Component tests
│   ├── LazyImage.jsx
│   └── LazyImage.test.jsx         # Component tests
├── utils/
│   ├── imageOptimization.js
│   ├── imageOptimization.test.js  # Utility tests
│   ├── submitEnquiry.js
│   └── submitEnquiry.test.js      # Utility tests
└── test/
    └── setup.js                    # Test configuration & global mocks
```

## Test Files Overview

### Component Tests

#### `SEOMeta.test.jsx`
- Tests meta tags rendering
- Validates default and custom props
- Checks Open Graph and Twitter card tags
- Verifies structured data (JSON-LD)

#### `LazyImage.test.jsx`
- Tests lazy loading functionality
- Validates image attributes (alt, src, className)
- Tests style application (object-fit, width, height)
- Checks onLoad callback execution
- Verifies opacity transitions

### Utility Tests

#### `imageOptimization.test.js`
- Tests image URL optimization for Unsplash
- Validates responsive image srcSet generation
- Tests placeholder, thumbnail, and full-quality URLs
- Handles non-Unsplash URLs gracefully

#### `submitEnquiry.test.js`
- Tests Google Apps Script submission
- Validates request method and headers
- Checks no-cors mode configuration
- Tests success and error handling
- Handles special characters in data

## Writing New Tests

### Example Component Test
```javascript
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import YourComponent from '../components/YourComponent'

describe('YourComponent', () => {
  it('renders correctly', () => {
    render(<YourComponent />)
    expect(screen.getByText('Expected Text')).toBeTruthy()
  })
})
```

### Example Utility Test
```javascript
import { describe, it, expect } from 'vitest'
import { yourFunction } from '../utils/yourFile'

describe('yourFunction', () => {
  it('returns expected result', () => {
    const result = yourFunction('input')
    expect(result).toBe('expected output')
  })
})
```

## Mocking

The project includes pre-configured mocks in `src/test/setup.js`:

- `window.matchMedia` - For media query testing
- `IntersectionObserver` - For lazy loading testing
- DOM environment (jsdom) - For DOM testing

## Coverage Reports

After running `npm run test:coverage`, view the HTML report:

```bash
open coverage/index.html
```

## Best Practices

1. **Naming**: Name test files with `.test.js` or `.spec.js` extension
2. **Organization**: Group related tests using `describe()`
3. **Isolation**: Mock external dependencies (API calls, timers, etc.)
4. **Clarity**: Use clear, descriptive test names
5. **Coverage**: Aim for >80% code coverage

## Continuous Integration

Add this to your CI/CD pipeline:

```bash
npm run test:run && npm run test:coverage
```

## Debugging Tests

### Run specific test file
```bash
npm test -- src/components/SEOMeta.test.jsx
```

### Run tests matching a pattern
```bash
npm test -- --grep "SEOMeta"
```

### Run with debug output
```bash
npm test -- --reporter=verbose
```

## Resources

- [Vitest Documentation](https://vitest.dev)
- [Testing Library Docs](https://testing-library.com)
- [Jest DOM Matchers](https://github.com/testing-library/jest-dom)
