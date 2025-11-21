# Inheritance in CSS

Inheritance is a fundamental concept in CSS that allows certain properties to be passed down from parent elements to their child elements. This mechanism helps maintain consistency in styling and reduces redundancy in CSS code.

## How Inheritance Works

When a CSS property is set on a parent element, that property can be inherited by its child elements unless the child elements have their own specific styles defined for that property. Not all CSS properties are inheritable; only certain properties related to text and font styling are inherited by default.

### Inheritable Properties

Some common CSS properties that are inheritable include:

- color
- font-family
- font-size
- font-style
- font-variant
- font-weight
- letter-spacing
- line-height
- text-align
- text-indent
- text-shadow
- text-transform
- visibility
- white-space
- word-spacing

### Non-Inheritable Properties

Properties that are not inheritable by default include (and for good reason, just imagine if these were inherited and had to be overridden all the time):

- margin
- padding
- border
- width
- height
- background
- display
- position
- float
- box-shadow
