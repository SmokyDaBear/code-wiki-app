# Importing and Exporting JavaScript Code

In JavaScript, you can organize your code into separate files and modules using the `import` and `export` statements. This allows you to reuse code across different parts of your application and maintain a cleaner codebase.

For browser environments, you can use ES6 modules with the `type="module"` attribute in your HTML script tags.

```html
<script type="module" src="main.js"></script>
```

## Exporting

You can export variables, functions, or classes from a module using the `export` keyword.

### Named Exports

You can export multiple items by their names.

```javascript
// math.js
export const pi = 3.14;
export function add(a, b) {
  return a + b;
}
```

### Default Exports

You can export a single item as the default export of a module.

```javascript
// calculator.js
export default function multiply(a, b) {
  return a * b;
}
```

Or, you can create the function first and then export it as default:

```javascript
function multiply(a, b) {
  return a * b;
}

export default multiply;
```

## Importing

You can import variables, functions, or classes from other modules using the `import` keyword.

### Named Imports

You can import specific items by their names.

```javascript
// main.js
import { pi, add } from "./math.js";
console.log(pi); // Output: 3.14
console.log(add(2, 3)); // Output: 5
```

### Default Imports

You can import the default export of a module without using curly braces.

```javascript
// main.js
import multiply from "./calculator.js";
console.log(multiply(2, 3)); // Output: 6
```

### Using the `as` Keyword

You can use the `as` keyword to rename imports or exports.

```javascript
// math.js
export const pi = 3.14;
export function add(a, b) {
  return a + b;
}
```

```javascript
// main.js
import { pi as PI, add as sum } from "./math.js";
console.log(PI); // Output: 3.14
console.log(sum(2, 3)); // Output: 5
```

## Importing All Exports

You can import all exports from a module as a single object using the `* as` syntax.

```javascript
// main.js
import * as math from "./math.js";
console.log(math.pi); // Output: 3.14
console.log(math.add(2, 3)); // Output: 5
```

## Require (CommonJS)

In Node.js and some other environments, you can use the CommonJS module system with `require` and `module.exports`.

### Exporting with module.exports

```javascript
// math.js
const pi = 3.14;
function add(a, b) {
  return a + b;
}
module.exports = { pi, add };
```

### Importing with require

```javascript
// main.js
const math = require("./math.js");
console.log(math.pi); // Output: 3.14
console.log(math.add(2, 3)); // Output: 5
```

## Summary

- Use `export` to make variables, functions, or classes available for import in other modules.
- Use `import` to bring in exported items from other modules.
- ES6 modules use `import` and `export`, while CommonJS uses `require` and `module.exports`.
- You can have named exports, default exports, and import all exports as an object.
