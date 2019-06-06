# ts-jest-chrome-extension-starter

A starter template to create a Chrome extension with TypeScript and Jest.

## Features

- Write code with [TypeScript](https://www.typescriptlang.org/).
- Unit tests using [Jest](https://facebook.github.io/jest/) & [Sinon.JS](http://sinonjs.org/).
- Lint using [ESLint](https://eslint.org/).
- Format using [Prettier](https://prettier.io/).

## Developing

1. Clone the repository. `git clone https://github.com/ninoseki/ts-jest-chrome-extension-starter`.
1. Remove `.git` directory.
1. Run `npm install`.
1. Change the package information in `package.json`, i.e. name, description, etc.
1. Change the package information in `dist/manifest.json`, i.e. name, description, etc.
1. Run `npm run build`.
1. Load your extension on Chrome from `dist`.

## Unit testing

1. Run `npm run test`.

## Credits

This repository is inspired by [kobanyan/ts-react-chrome-extension-boilerplate](https://github.com/kobanyan/ts-react-chrome-extension-boilerplate).
