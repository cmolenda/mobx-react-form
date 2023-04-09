# MobX React Form DevTools

---

## Install

```bash
npm install --save mobx-react-form-devtools
```

## Demo

[MobX React Form DevTools Demo](https://foxhound87.github.io/mobx-react-form-demo/)

## Usage

```javascript
import MobxReactFormDevTools from 'mobx-react-form-devtools';

// register forms
MobxReactFormDevTools.register({
  loginForm,
  registerForm,
  supportForm,
});

// select form to show into the devtools
MobxReactFormDevTools.select('registerForm');

// open the devtools (closed by default)
MobxReactFormDevTools.open(true);

// render the component
<MobxReactFormDevTools.UI />
```

## Theme

```javascript
// custom theme colors
MobxReactFormDevTools.theme({
  base00: '#2b303b',
  base01: '#343d46',
  base02: '#4f5b66',
  base03: '#65737e',
  base04: '#a7adba',
  base05: '#c0c5ce',
  base06: '#dfe1e8',
  base07: '#eff1f5',
  base08: '#bf616a',
  base09: '#d08770',
  base0A: '#ebcb8b',
  base0B: '#a3be8c',
  base0C: '#96b5b4',
  base0D: '#8fa1b3',
  base0E: '#b48ead',
  base0F: '#ab7967',
});
```

## Screenshot

![DevTools](https://github.com/foxhound87/mobx-react-form-devtools/blob/master/screenshot.png?raw=true)
