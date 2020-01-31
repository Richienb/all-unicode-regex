# All Unicode Regex [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/all-unicode-regex/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/all-unicode-regex)

A regex which matches all unicode characters.

[![NPM Badge](https://nodei.co/npm/all-unicode-regex.png)](https://npmjs.com/package/all-unicode-regex)

## Install

```sh
npm install all-unicode-regex
```

## Usage

```js
const allUnicodeRegex = require("all-unicode-regex");

"a😃中文".replace(allUnicodeRegex, ".");
//=> '....'
```

## API

### allUnicodeRegex
