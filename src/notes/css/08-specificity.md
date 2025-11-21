# Specificity in CSS

CSS follows a set of rules to determine which styles are applied to an element when multiple rules could apply. Two key concepts in this process are specificity and inheritance.

## Specificity

Specificity is a measure of how specific a CSS selector is. When multiple rules target the same element, the rule with the highest specificity takes precedence. Specificity is calculated based on the types of selectors used:

- Inline styles (e.g., `style="..."`) have the highest specificity, these are placed directly on the HTML element, or in JavaScript using the `style` property.
- ID selectors (e.g., `#header`) have high specificity.
- Class selectors (e.g., `.menu`), attribute selectors (e.g., `[type="text"]`), and pseudo-classes (e.g., `:hover`) have moderate specificity.
- Element selectors (e.g., `div`, `p`) and pseudo-elements (e.g., `::before`) have the lowest specificity.

  When calculating specificity, each type of selector is assigned a value, and the total specificity is determined by combining these values. If two rules have the same specificity, the one that appears later in the CSS file takes precedence.

| Selector Type                          | Specificity Value |
| -------------------------------------- | ----------------- |
| Inline Styles                          | 1000              |
| ID Selectors                           | 100               |
| Class/Attribute/Pseudo-class Selectors | 10                |
| Element/Pseudo-element Selectors       | 1                 |

### Stacking Specificity

When multiple selectors are combined, their specificity values are added together. For example:

```css
#header .menu li a {
  color: blue;
}
```

In this case, the specificity would be calculated as follows:

- ID selector (`#header`): 100
- Class selector (`.menu`): 10
- Element selectors (`li` and `a`): 1 + 1 = 2
  Total Specificity: 100 + 10 + 2 = 112

#### Overriding Styles

The best practice is to use specificity intentionally to override styles when necessary. However, overusing high-specificity selectors can lead to maintenance challenges. It's often better to structure your CSS in a way that minimizes the need for high specificity.

## The !important Declaration

The `!important` declaration can be added to a CSS rule to give it the highest priority, overriding any other conflicting rules, regardless of specificity. For example:

```css
.red-text {
  color: red !important;
}
```

The only way to override an `!important` rule is to use another `!important` rule with equal or higher specificity, or to use inline styles with `!important`.

```html
<p style="color: blue !important;">This text will be blue.</p>
```
