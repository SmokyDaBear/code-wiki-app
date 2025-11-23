# Regular Expressions (RegEx)

Regular expressions in JavaScript are patterns used to match character combinations in strings. They are implemented using the `RegExp` object or by using literal syntax.

## Creating Regular Expressions

You can create a regular expression in two ways: using the `RegExp` constructor or using literal syntax.

### Using the RegExp Constructor

```javascript
const regex1 = new RegExp("ab+c"); // Matches 'a' followed by one or more 'b's and then 'c'
```

### Using Literal Syntax

```javascript
const regex2 = /ab+c/; // Same pattern as above
```

## Functions and Methods

### .test()

Returns a boolean if the string matches or not

```javascript
let regExp = /Hello/;
let string = "Hello, world!";
regExp.test(string); //returns true because the characters in the string match the expression
//Regular expressions are case sensitive
//so...
regExp = /hello/;
regExp.test(string); //returns false
regExp = /hello/i; //the "i" flag makes it case insensitive
regExp.test(string); //returns true
```

### .exec()

Executes a search with this regular expression for a match in a specified string and returns a result array, or null.

```javascript
const regexTwo = /fo+/g;
const strT = "table football, foosball";
let arrayT;

while ((arrayT = regexTwo.exec(strT)) !== null) {
  console.log(`Found ${arrayT[0]}. Next starts at ${regexTwo.lastIndex}.`);
  // Expected output: "Found foo. Next starts at 9."
  // Expected output: "Found foo. Next starts at 19."
}
```

## SOME String methods can also be used:

The function must be called on the STRING, and the regexp is passed as a parameter

### .match(..)

- Returns an array containing all of the matches, including capturing groups, or null if no match is found.

```javascript
regExp = /t(e)(st(\d?))/g;
string = "test1test2test3";
let matcherS = string.match(regExp);
console.log(matcherS); //prints the first found element that matches the expression
```

### .matchAll(..)

- Returns an iterator containing all of the matches, including capturing groups

### .search(..)

- Tests for a match in a string. It returns the index of the match, or -1 if the search fails.

### .replace(..)

- Executes a search for a match in a string, and replaces the matched substring with a replacement substring.

### .replaceAll(..)

- Executes a search for all matches in a string, and replaces the matched substrings with a replacement substring.

### .split(..)

- Uses a regular expression or a fixed string to break a string into an array of substrings.

### Others that will throw an error, as they are not allowed with reg Expressions

such as:

- .includes(..)
- .startsWith(..)
- .endsWith(..)

## Flags

Flags are added at the end of the regular expression i.e. : `/hello/i` -note the "i" at the end.

If using "new" they are passed as a string as the second param : new RegExp("pattern", "g")

Some common flags are:

- **d** - generate indices for substring matches

- **g** - global search

- **i** - case insensitive search

- **m** - Makes `^` and `$` match the start and end of each line instead of those of the entire string.

- **s** - Allows `.` to match newline characters.

- **u** - "Unicode" treat a pattern as a sequence of Unicode code points.

- **v** - An upgrade to the u mode with more Unicode features.

- **y** - Perform a "sticky" search that matches starting at the current position in the target string.

## Character classes:

visit the Mozilla Developer Network for a full cheat sheet: [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Cheatsheet)

Using the `\` (backslash) will allow an escape character to be used.

Also keep in mind if using the "new RegExp" method, backslashes must also be escaped, or doubled up like `\\d` to represent `\d`.

- **\d** - digit: is used to find numbers 0-9

- **\D**(CAPITALIZED) - non-digit: any character that is not 0-9

- **\w** - word: is used to find letters, numbers and underscore characters. Matches any alphanumeric character from the basic Latin alphabet, including the underscore. Equivalent to [A-Za-z0-9_].

- **\W** (CAPITALIZED) - non Word: Matches any character that is not a word character from the basic Latin alphabet. Equivalent to [^A-Za-z0-9_].

- **\s** - space character " "

- **\S** (CAPITALIZED) - Everything EXCEPT space character " "

- **\b** - word Boundary assertion: Word boundary assertion: Matches a word boundary. This is the position where a word character is not followed or preceded by another word-character, such as between a letter and a space. Note that a matched word boundary is not included in the match. In other words, the length of a matched word boundary is zero.
  Examples:

  - /\bm/ matches the "m" in "moon".
  - /oo\b/ does not match the "oo" in "moon", because "oo" is followed by "n" which is a word character.
  - /oon\b/ matches the "oon" in "moon", because "oon" is the end of the string, thus not followed by a word character.
  - /\w\b\w/ will never match anything, because a word character can never be followed by both a non-word and a word character.

- **\B** (CAPITALIZED) - Non-word-boundary assertion: Matches a non-word boundary. This is a position where the previous and next character are of the same type: Either both must be words,
  or both must be non-words, for example between two letters or between two spaces. The beginning and end of a string are considered non-words. Same as the matched word boundary, the matched
  non-word boundary is also not included in the match. For example, /\Bon/ matches "on" in "at noon", and /ye\B/ matches "ye" in "possibly yesterday".

## Other Important Characters

### \* - Asterisk:

put after the character to indicate that the character may either NOT match at all or can match MULTIPLE times. like this : /be\*r/ - will select "br","ber", "beer", "beeeeer" etc.

### + - Plus:

put after the character to indicate that the character can occur ONE OR MORE times. like this : /be\*r/ will select "ber", "beer", "beeeeer" but NOT "br".

### | - Pipe/OR:

this is an OR character similar to || in javaScript. Use like: /(b|d)og/ to select "bog" or "dog"

### \ - Escape Character:

used when a character such as "\*,{,},?,!" or any other symbol that represents a character class is to be checked literally. Like: /\.com/ checks for ".com"

### [] - Brackets:

Matches any one of the enclosed characters. You can specify a range of characters by using a hyphen, but if the hyphen appears as the first or last character enclosed in the square brackets,

- it is taken as a literal hyphen to be included in the character class as a normal character.
- use like [a-j] and then can add other things before and after

### {} - Curly Braces:

To express a certain number of occurrences of a character, at the end we write curly braces {n} along with how many times we want it to occur. i.e.`/be{2}r/` for "beer".

- Can also be used to determine a range. Must be separated by a comma "," like `/be{1,5}a?r/` will select "ber", "beer", "bear", and "beeeeear"

### () - Parentheses/Grouping:

We can group an expression and use these groups to reference or enforce some rules. To group an expression, we enclose () in parentheses. This is used to assign a reference to the group

For example:` /(ha)-\1,(haa)-\2/` "ha" is assigned reference "1", and "haa" is "2".

When we want to reference these groups later in the pattern, we use \1 for the first group and \2 for the second group.

You can also group an expression without "Capturing" it like this `/(?:ha)-ha,(haa)-\1/` now the first group in parentheses "`(?:ha)-`" is not stored while the second "`(haa)-\1`" is, and can be called later in the expression.

### $ - Dollar Sign:

used as a suffix to check for the expression at the END of the line. Like /html$/ selects the last html from "html-is-cool.'html'"

### ^ - Caret Sign:

used as a prefix to check for START of line. Like: /^Hello/ selects "Hello" from "Hello there and Hello again", but the second "Hello" is not selected if /m for multiline is selected will also match after line break

### ^ - Negated character class:

Matches anything that is not enclosed in the square brackets. You can specify a range of characters by using a hyphen, but if the hyphen appears as the first character

- after the ^ or the last character enclosed in the square brackets, it is taken as a literal hyphen to be included in the character class as a normal character.

For example, `[^abc]` is the same as `[^a-c]`. They initially match "o" in "bacon" and "h" in "chop".

### . - Wildcard:

Matches any single character except line terminators: `\n`, `\r`, `\u2028` or `\u2029`. For example,`/.y/` matches "my" and "ay", but not "yes", in "yes make my day", as there is no character before "y" in "yes". If the dotAll (s) flag is enabled, also matches line terminators. Inside a character class, the dot loses its special meaning and matches a literal dot.

### ? Question Mark:

has several uses such as lookaheads below, as well as to make a character optional when placed directly after i.e. `/colou?r/`will select both "color" and "colour"

## Lookaheads and Lookbehinds

### Positive lookahead:

`a+(?=bc)` looks for `a` followed by `bc`.

### Negative lookahead:

`\d+(?!PM)` matches digits not followed by `PM`.

### Positive lookbehind:

`\d+(?<=\$)` matches digits preceded by `$` (prices).

### Negative lookbehind:

`\d+(?<!\$)` matches digits not preceded by `$`.

### Greedy matching (default)

continues as long as possible.

#### Example greedy: `/.*r/` matches all occurrences up to the last `r`.

### Lazy matching

stops at the first possible match.

#### Example lazy: `/.*?r/` stops at first `r`.

## Examples of common patterns

### Minimum length example:

`/.{1,}/` ensures at least one character.

### Simple password validator (example pattern to refine):

`^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[A-Za-z\d]{6,}$` requires at least six characters including uppercase, lowercase, and a digit.
