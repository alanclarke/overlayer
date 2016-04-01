# Overlayer
A tiny animating overlay backdrop lib using css3 animations

## installation
```
npm install overlayer
```

## demo
```
npm start
open http://localhost:1234
```

## usage
```js
var Overlayer = require('overlayer')
var overlayer = Overlayer([opts])

overlayer.show([speed]) // show overlay, default speed is 1000ms
overlayer.hide([speed]) // hide overlay, default speed is 1000ms
overlayer.destroy() // stops all animations and removes el from body
overlayer.el // ref to actual overlayer el

// e.g. To override the default styling
overlayer.el.style.background = 'green'


/*
options:
- auto // auto show (default: true)
- speed (ms) // default 1000
*/

## demo
```js
npm start
// open http://localhost:1234
```

## run tests
```
npm test
```
