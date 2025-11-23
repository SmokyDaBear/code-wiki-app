# Template Strings

Template strings (also known as template literals) in JavaScript are a way to work with strings that allow for easier embedding of expressions and multi-line strings.

They are enclosed by backticks (`` ` ` ``) instead of single ( `' '`) or double (`" "`) quotes.

## Features of Template Strings

1. **Expression Interpolation**: You can embed expressions inside a template string using `${expression}` syntax. The expression is evaluated, and the result is included in the string.

   - An expression can be a variable, a mathematical operation, a function call, or any valid JavaScript expression.
     - It must be enclosed within `${}` to be evaluated, and the result is converted to a string and inserted into the template.

   ```javascript
   const name = "Alice";
   const age = 30;
   const greeting = `Hello, my name is ${name} and I am ${age} years old.`;
   console.log(greeting); // Output: Hello, my name is Alice and I am 30 years old.
   ```

2. **Multi-line Strings**: Template strings can span multiple lines without the need for escape characters.

   ```javascript
   const multiLineString = `This is a string
   that spans multiple
   lines.`;
   console.log(multiLineString);
   // Output:
   // This is a string
   // that spans multiple
   // lines.
   ```

3. **Tagged Templates**: You can create custom functions (tags) that process template strings. The tag function receives the string parts and the values of the expressions as arguments.

   ```javascript
   function tag(strings, ...values) {
     console.log(strings); // Array of string parts
     console.log(values); // Array of expression values
   }

   const result = tag`Hello, ${name}! You are ${age} years old.`; // Output:
   // strings: [ 'Hello, ', '! You are ', ' years old.' ]
   // values: [ 'Alice', 30 ]
   ```

   The `tag` function can then manipulate or format the strings and values as needed.
   The 'strings' parameter is an array containing the literal sections of the template string, while 'values' is an array of the evaluated expressions.

   4. **Conditional Expressions**: You can use conditional (ternary) operators within template strings for dynamic content.

   ```javascript
   const isMember = true;
   const membershipStatus = `You are ${
     isMember ? "a member" : "not a member"
   }.`;
   console.log(membershipStatus); // Output: You are a member.
   ```
