# vue-filter-pluralize
Simple pluralize filter for Vue.js

## Installation

install from npm
```bash
$ npm install vue-filter-pluralize
```
and register in you Vue app
```js
import Vue from 'vue';
import VueFilterPluralize from 'vue-filter-pluralize';

Vue.use(VueFilterPluralize);
```

## Usage

```html
<template>
  <!-- English -->
  <div>{{ number }} {{ number | pluralize('en', ['product', 'products']) }}</div>

  <!-- Ukrainian -->
  <div>{{ number }} {{ number | pluralize('uk', ['продукт', 'продукта', 'продуктів']) }}</div>
</template>
```

## Supported languages

[Localization and Plurals](https://developer.mozilla.org/en-US/docs/Mozilla/Localization/Localization_and_Plurals)

### Plural rule #0 (1 form)
- Chinese (zh)
- Japanese (ja)
- Korean (ko)
- Lao (lo)
- Persian (fa)
- Thai (th)
- Turkish (tr)

### Plural rule #1 (2 forms)
- Basque (eu)
- Catalan (ca)
- Danish (da)
- Dutch (nl)
- English (en)
- Estonian (et)
- Faroese (fo)
- Finnish (fi)
- Frisian (fy)
- German (de)
- Greek (el)
- Hebrew (he)
- Hungarian (hu)
- Italian (it)
- Norwegian (nb)
- Portuguese (pt)
- Spanish (es)
- Swedish (sv)
- Vietnamese (vi)

### Plural rule #2 (2 forms)
- Brazilian Portuguese (pt-BR)
- French (fr)

### Plural rule #3 (3 forms)
- Latgalian
- Latvian (lv)

### Plural rule #4 (4 forms)
- Scottish Gaelic (gd)

### Plural rule #5 (3 forms)

Not implemented

### Plural rule #6 (3 forms)

Not implemented

### Plural rule #7 (3 forms)

Not implemented

### Plural rule #8 (3 forms)

Not implemented

### Plural rule #9 (3 forms)

Not implemented

### Plural rule #10 (4 forms)

Not implemented

### Plural rule #11 (5 forms)

Not implemented

### Plural rule #12 (6 forms)

Not implemented

### Plural rule #13 (4 forms)

Not implemented

### Plural rule #14 (3 forms)

Not implemented

### Plural rule #15 (2 forms)

Not implemented

### Plural rule #16 (5 forms)

Not implemented

### Plural rule #17 (2 forms)

Not implemented

### Plural rule #18 (6 forms)

Not implemented

## License

MIT © [Ed Nikolenko](https://github.com/ednikolenko)
