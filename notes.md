# JavaScript Syntax:

Keep this under your pillow: [JavaScript Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

### types

```javascript
console.log('New York City');
console.log(40.7);  
console.log(true); 
console.log(null); 
```

### math assignment

```javascript

let x = 4;
x += 2; // x equals 6

let y = 4;
y -= 2; // y equals 2

let z = 4;
z *= 2; // z equals 8

let r = 4;
r++; // r equals 5

let t = 4;
t--; // t equals 3

```

### constants

`const` and `let` are used to define constants:

```javascript
const noChange = "Hard coded"; // immutable

let canChange = "Can be reassigned"; // mutable

// then you can do this without errors
canChange = false;

```

### string formatting (ES6)

```javascript

let myPet = 'moose';

console.log(`I own a pet ${myPet}.`)
// I own a pet moose.

```
## control flow (conditionals)

```javascript

let needsCoffee = true;

if (needsCoffee === true) {
    console.log('Finding coffee');
} else {
    console.log('Keep on keeping on!');
}

```

