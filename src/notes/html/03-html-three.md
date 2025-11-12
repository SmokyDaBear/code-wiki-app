# HTML Forms

HTML forms are essential for collecting user input on web pages. They allow users to submit data, which can then be processed by a server or used within the client-side application.

## Form Element

The `<form>` element is the container for all form elements. It defines how the form data will be sent and where.

```html
<form action="/submit" method="post">
  <!-- Form elements go here -->
  <input type="text" name="username" placeholder="Enter your username" />
  <input type="password" name="password" placeholder="Enter your password" />
  <input type="submit" value="Submit" />
</form>
```

- `action`: Specifies the URL where the form data will be sent.
- `method`: Specifies the HTTP method to use when sending the form data (e.g., "get" or "post").

## Common Form Elements

Here are some commonly used form elements notice the types:

- **Text Input**: `<input type="text" />` for single-line text input.
- <input type="text" />
- **Password Input**: `<input type="password" />` for password input (hides characters).
- <input type="password" />
- **Email Input**: `<input type="email" />` for email addresses.
- <input type="email" />
- **Tel Input**: `<input type="tel" />` for telephone numbers.
- <input type="tel" />
- **URL Input**: `<input type="url" />` for website URLs.
- <input type="url" />
- **Textarea**: `<textarea></textarea>` for multi-line text input.
- <input type="textarea" />
- **Hidden Input**: `<input type="hidden" />` for storing hidden data.
- <input type="hidden" />
- **Number Input**: `<input type="number" />` for numeric input.
- <input type="number" />
- **Range Input**: `<input type="range" />` for selecting a value from a range.
- <input type="range" />
- **Color Input**: `<input type="color" />` for selecting a color.
- <input type="color" />
- **Date Input**: `<input type="date" />` for selecting dates.
- <input type="date" />
- **Time Input**: `<input type="time" />` for selecting times.
- <input type="time" />
- **File Input**: `<input type="file" />` for uploading files.
- <input type="file" />
- **Submit Button**: `<input type="submit" />` to submit the form.
- <input type="submit" />
- **Reset Button**: `<input type="reset" />` to reset the form fields.
- <input type="reset" />
- **Button**: `<button></button>` for clickable buttons.
- <button>Click Me</button>

## Other Form Elements

These elements are also commonly used in forms, but we'll go into more detail on them below:

- **Radio Buttons**: `<input type="radio" />` for selecting one option from a group.
- <input type="radio" for="radio-group"/><input type="radio" for="radio-group"/>
- **Checkboxes**: `<input type="checkbox" />` for selecting multiple options.
- <input type="checkbox" />
- **Dropdowns**: `<select>` for creating a dropdown list of options.
- <select name="dropdown"></select> <option for="dropdown">Dropdown Option</option>
- **Text Area**: `<textarea>` for multi-line text input.
- <textarea name="message" rows="4" cols="50">Enter your message here...</textarea>

### Example

```html
<form action="/submit" method="post">
  <label for="username">Username:</label>
  <input type="text" id="username" name="username" required />
  <label for="password">Password:</label>
  <input type="password" id="password" name="password" required />
  <input type="submit" value="Login" />
</form>
```

## Form Validation

Form validation ensures that the data entered by users is correct and complete before it is submitted. HTML provides built-in validation attributes such as `required`, `minlength`, `maxlength`, and `pattern`.

- required: Ensures that the field must be filled out before submission.
- minlength and maxlength: Specify the minimum and maximum number of characters allowed.
- pattern: Defines a regular expression [click here to learn about regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) that the input value must match.

### Example

```html
<input type="email" name="email" required />
<input type="text" name="username" minlength="4" maxlength="12" />
```

## Form Accessibility

To make forms accessible, use labels, fieldsets, and legends to provide context for screen readers. Ensure that form controls are keyboard-navigable.

### Example

```html
<form>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" />
</form>
```
