# JavaScript Syntax:

Keep this under my pillow: [JavaScript Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

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
let needsToUseBathroom = false;

if (needsCoffee === true) {
    console.log('Finding coffee');
} else if (!needsToUseBathroom) {
    console.log('Keep on keeping on!');
} else {
    console.log('Finding toilet immediately')
}
```
- "both must be true," we use `&&`.
- "either can be true," we use `||`.

## switch statement


```javascript

let groceryItem = 'papaya';

switch (groceryItem) {
  case 'tomato':
    console.log('Tomatoes are $0.49');
    break;
  case 'lime':
    console.log('Limes are $1.49');
    break;
  case 'papaya':
    console.log('Papayas are $1.29');
    break;
  default:
    console.log('Invalid item');
    break;
}
```


