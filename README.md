# htmllint-plugin-website
Provides htmllint rules for website.

This project has archived as it has been moved to [website-tools/htmllint-plugin-website](https://github.com/debitoor/website-tools/tree/master/packages/htmllint-plugin-website).

## Install
``` bash
$ npm install git+ssh://git@github.com/debitoor/htmllint-plugin-website.git
```

## Usage
``` javascript
import htmllint from 'htmllint';
import htmllintPluginWebsite from 'htmllint-plugin-website';

htmllint.use(htmllintPluginWebsite());

htmllint('<html><body><img src="/foo/bar.JPG"/></body></html>', {
	'img-src-absolute-path-lowercase': true
});
```

## Rules

### a-href-absolute-path

#### #### a-href-absolute-path-is-known

Checks that a href absolute path is known

```javascript
	htmllint('<html></html>', {
	'a-href-absolute-path-is-known': () => true
});
```

default: `false`;

#### a-href-absolute-path-lowercase

Checks that a href absolute path is lowercase

``` javascript
htmllint('<html></html>', {
	'a-href-absolute-path-lowercase': true
});
```

default: `false`;

#### a-href-absolute-path-no-trailing-slash

Checks that the a href absolute path does not have a trailing slash.

``` javascript
htmllint('<html></html>', {
	'a-href-absolute-path-no-trailing-slash': true,
});
```

default: `false`;

#### a-href-absolute-path-starts-with-a-slash

Chcecks that a href absolute path starts with a slash.

``` javascript
htmllint('<html></html>', {
	'a-href-absolute-path-starts-with-a-slash': true
});
```

default: `false`;

### a-href-should

#### a-href-should-not-contain-whitespaces

Checks that a href does not contain any whitespaces

``` javascript
htmllint('<html></html>', {
	'a-href-should-not-contain-whitespaces': true
});
```

### head-link-canonical

#### head-link-canonical-absolute

Checks that head link canonical href is an absolute url.

``` javascript
htmllint('<html></html>', {
	'head-link-canonical-absolute': true
});
```

default: `false`;

#### head-link-canonical-https

Checks that head link canonical href protocol is https.

``` javascript
htmllint('<html></html>', {
	'head-link-canonical-https': true
});
```

default: `false`;

#### head-link-canonical-lowercase

Checks that head link canonical href is lowercase.

``` javascript
htmllint('<html></html>', {
	'head-link-canonical-lowercase': true
});
```

default: `false`;

#### head-link-canonical-required

Checks that head link canonical exists.

``` javascript
htmllint('<html></html>', {
	'head-link-canonical-required': true
});
```

default: `false`;

### head-meta-description

#### head-meta-description-min-length

Checks that head meta description is at least the provided min length.

``` javascript
htmllint('<html></html>', {
	'head-meta-description-min-length': 70
});
```

default: `false`;

#### head-meta-description-max-length

Checks that head meta description is at most the provided max length.

``` javascript
htmllint('<html></html>', {
	'head-meta-description-max-length': 170
});
```

default: `false`;

#### head-meta-description-required

Checks that head meta description exists.

``` javascript
htmllint('<html></html>', {
	'head-meta-description-required': true
});
```

default: `false`;

### img-src-absolute-path

Checks that img src an absolute path.

``` javascript
htmllint('<html></html>', {
	'img-src-absolute-path': true
});
```

default: `false`;

#### img-src-absolute-path-is-known

Checks that img src absolute path is known using the provided function.

``` javascript
const knownUrls = new Set(['https://foo.bar/baz/qux']);

htmllint('<html></html>', {
	'img-src-absolute-path-is-known': (src) => knownUrls.has(src)
});
```

default: `false`;

#### img-src-absolute-path-lowercase

Checks that img src absolute path is lowercase.

``` javascript
htmllint('<html></html>', {
	'img-src-absolute-path-lowercase': true
});
```

default: `false`;

### internal-link

#### internal-link-should-be-absolute-path



``` javascript
htmllint('<html></html>', {
	'internal-link-should-be-absolute-path': () => new RegExp().test()
});
```

default: `false`;

## License

MIT License

Copyright (c) 2017 Debitoor

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.