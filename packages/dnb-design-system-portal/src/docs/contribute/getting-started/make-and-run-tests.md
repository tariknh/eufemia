---
title: 'Make and run tests'
order: 4
---

## Make and run tests

Make tests for the new component (or for your current issue) and set up screenshot tests from the Eufemia portal. The tests should be located under `__tests__` in the component folder.

- Tip 1: Create tests for each _prop_ that change your component.
- Tip 2: Always check and make the tests fail when you are writing tests.

More on testing in the [UI Library](/uilib/usage/best-practices/for-testing#testing-frontend-code).

### Running tests locally

Run the commands from the repository's root folder. Replace `breadcrumb` with your component's name in the commands.

1. Run the integration tests:

```bash
# Run all tests
yarn test
```

```bash
# Execute the tests on file (git) changes
yarn test:watch

# Run all tests including the word 'breadcrumb'
yarn test breadcrumb

# Or be more specific
yarn test /breadcrumb.test.tsx

# Run several together
yarn test breadcrumb avatar button
```

2. Update the changed snapshots:

```bash
yarn test:update

# More specific
yarn test:update breadcrumb avatar
```

3. Run the visual test against the portal:

**NB:** Make sure you have the portal running locally on port 8000.

```bash
# 1. First start the portal
yarn start

# 2. Then run all screenshot tests including 'breadcrumb' or 'avatar'
yarn test:screenshots breadcrumb avatar
```

4. Update eventually new or valid visual PNG snapshots:

```bash
# Update all screenshot tests including 'breadcrumb'
yarn test:screenshots:update breadcrumb
```

You can also press the `u` during a watch mode to update outdated snapshots.

5. How to deal with failing visual tests?

When a visual test fails, a visual comparison file (diff) will be created. Its location and name will be:

- `**/__tests__/__image_snapshots__/__diff_output__/*.snap-diff.png`

You find a report entry (`index.html`), that lists all of the failed tests here:

- `/packages/dnb-eufemia/jest-visual-diff-report/index.html`

You may check out the CI/CLI logs for more details.

**GitHub Actions:** If visual screenshot test is failing on the CI, you can navigate to the test "Summary" where you find "Artifacts". There you can download the **visual-test-artifact** zip file, containing the visual diff files as well as the report entry inside `/jest-visual-diff-report`.

### Support SCSS snapshot test

Add a similar code snippet to your tests for watching changes in the SCSS you just created.

```js
import { loadScss } from '../../../core/jest/jestSetup'
describe('Breadcrumb scss', () => {
  it('have to match snapshot', () => {
    const scss = loadScss(require.resolve('../style/dnb-breadcrumb.scss'))
    expect(scss).toMatchSnapshot()
  })
})
```

### Support Axe test

Add a similar code snippet to your tests (as the last test). It will test the accessibility of your new component. Read more on [Jest Axe](https://github.com/nickcolley/jest-axe).

```js
describe('Breadcrumb aria', () => {
  it('should validate', async () => {
    const Component = render(
      <Breadcrumb
        data={[
          { href: '/' },
          { href: '/page1', text: 'Page 1' },
          { href: '/page1/page2', text: 'Page 2' },
        ]}
        variant="collapse"
        isCollapsed={false}
      />
    )
    expect(await axeComponent(Component)).toHaveNoViolations()
  })
})
```