# Overlayer
A tiny animating overlay backdrop lib using css3 animations

## installation
```
npm install --save overlayer
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
```
## run tests
```
npm test
```

## demo
[link](https://overlayer-prnmkkpfif.now.sh/)


## browser compatibility
works in all good browsers! (also in ie9+)


## Want to work on this for your day job?

This project was created by the Engineering team at Qubit. As we use open source libraries, we make our projects public where possible.

We’re currently looking to grow our team, so if you’re a JavaScript engineer and keen on ES2016 React+Redux applications and Node micro services, why not get in touch? Work with like minded engineers in an environment that has fantastic perks, including an annual ski trip, yoga, a competitive foosball league, and copious amounts of yogurt.

Find more details on our Engineering site. Don’t have an up to date CV? Just link us your Github profile! Better yet, send us a pull request that improves this project.`
Contact GitHub API Training Shop Blog About
