# react-static-site-template

This project is a template that I've found useful to quickly prototyping personal projects in 2017
and 2018. It is based on [Create React App](https://github.com/facebookincubator/create-react-app)
and adds a couple of additional features and sane defaults:

 - React-router
 - Helmet for setting title and other head tags
 - Snapshotting to static HTML
 - A deploy script to sync the build to S3, strip `.html` extensions, and set content type headers
 - A string lint configuration
 - CircleCI config

This also adds a few things that may be controversial or are not applicable to all applications:

 - Sass support
 - Bootstrap
 - Purifycss to remove unused CSS classes (only needed because of the above)

I generally support the move to component-based styling, but it's hard to beat the
batteries-included nature of Bootstrap for quickly prototyping.

For more information on create-react-app and the scripts it provides see the create-react-app README [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Folder Structure

```
react-static-site-template/
  .circleci/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    components/
      home.js
      404.js
    App.js
    App.test.js
    index.js
    scss/
      App.scss
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn run test`
Runs the linter and test suite and generates a coverage report.

### `yarn run lint`
Runs eslint

### `yarn run deploy`

Builds the app for production to the `build` folder and uploads the build to S3.<br>
It bundles React in production mode, crawls the app and generates static
html snapshots, and then uploads these to S3. It also uses purifycss to remove all unused css
classes.

The script will prompt you to confirm changes before it applies them.

## Lint rules
This project's lint rules are based on AirBNB's JavaScript style guide. We
prefer [stateless components](https://hackernoon.com/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc).

## Supported Language Features and Polyfills

This project supports a superset of the latest JavaScript standard.<br>
In addition to [ES6](https://github.com/lukehoban/es6features) syntax features, it also supports:

* [Exponentiation Operator](https://github.com/rwaldron/exponentiation-operator) (ES2016).
* [Async/await](https://github.com/tc39/ecmascript-asyncawait) (ES2017).
* [Object Rest/Spread Properties](https://github.com/sebmarkbage/ecmascript-rest-spread) (stage 3 proposal).
* [Dynamic import()](https://github.com/tc39/proposal-dynamic-import) (stage 3 proposal)
* [Class Fields and Static Properties](https://github.com/tc39/proposal-class-public-fields) (part of stage 3 proposal).
* [JSX](https://facebook.github.io/react/docs/introducing-jsx.html) and [Flow](https://flowtype.org/) syntax.

Note that **the project only includes a few ES6 [polyfills](https://en.wikipedia.org/wiki/Polyfill)**:

* [`Object.assign()`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) via [`object-assign`](https://github.com/sindresorhus/object-assign).
* [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) via [`promise`](https://github.com/then/promise).
* [`fetch()`](https://developer.mozilla.org/en/docs/Web/API/Fetch_API) via [`whatwg-fetch`](https://github.com/github/fetch).

If you use any other ES6+ features that need **runtime support** (such as `Array.from()` or `Symbol`), make sure you are including the appropriate polyfills manually, or that the browsers you are targeting already support them.

Also note that using some newer syntax features like `for...of` or `[...nonArrayValue]` causes Babel to emit code that depends on ES6 runtime features and might not work without a polyfill. When in doubt, use [Babel REPL](https://babeljs.io/repl/) to see what any specific syntax compiles down to.

## Syntax Highlighting and Linting in the Editor

To configure the syntax highlighting in your favorite text editor, head to the [relevant Babel documentation page](https://babeljs.io/docs/editors) and follow the instructions. Some of the most popular editors are covered.

Most editors also offer a plugin to show lint errors, eg. this [Atom plugin](https://github.com/AtomLinter/linter-eslint).

## Running Tests

This project uses Jest, a Node-based runner.

`yarn test` runs the linter and test suite and generates a coverage report.

`yarn run tdd` watches for changes and re-runs the test suite on change.

### Filename Conventions

Jest will look for test files with any of the following popular naming conventions:

* Files with `.js` suffix in `__tests__` folders.
* Files with `.test.js` suffix.
* Files with `.spec.js` suffix.

### Writing Tests

To create tests, add `it()` (or `test()`) blocks with the name of the test and its code. You may optionally wrap them in `describe()` blocks for logical grouping but this is neither required nor recommended.

Jest provides a built-in `expect()` global function for making assertions. A basic test could look like this:

```js
import sum from './sum';

it('sums numbers', () => {
  expect(sum(1, 2)).toEqual(3);
  expect(sum(2, 2)).toEqual(4);
});
```

All `expect()` matchers supported by Jest are [extensively documented here](https://facebook.github.io/jest/docs/en/expect.html#content).<br>
You can also use [`jest.fn()` and `expect(fn).toBeCalled()`](https://facebook.github.io/jest/docs/en/expect.html#tohavebeencalled) to create “spies” or mock functions.


# See also
- create-react-app [README](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md)
