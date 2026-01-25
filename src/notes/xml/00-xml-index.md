# XML

XML or eXtensible Markup Language is a markup language that defines a set of rules for encoding documents in a format that is both human-readable and machine-readable.

It is widely used for data representation, storage, and transmission across various applications and systems.

# XML Vs. HTML

The key differences between XML and HTML are:

- **Purpose**: XML is designed to store and transport data, while HTML is designed to display data and focus on how data looks.
- **Structure**: XML is strict about closing tags and case sensitivity, whereas HTML is more lenient.
- **Custom Tags**: XML allows users to create their own tags, while HTML has a predefined set of tags.
- **Data Handling**: XML is used for data interchange between systems, while HTML is used for rendering web pages in browsers.

## Basic Syntax

Like HTML, XML uses tags to define elements. However, XML tags are not predefined, and users can create their own tags. Here are some basic syntax rules for XML:

- **Prolog**: An XML document may start with an optional prolog that includes the XML declaration.
  ```xml
  <?xml version="1.0" encoding="UTF-8"?>
  ```
- **Elements**: Elements are defined by tags, and every opening tag must have a corresponding closing tag.
  ```xml
  <page>
    <title>My XML Page</title>
    <content>This is a sample XML content.</content>
  </page>
  ```
- **Attributes**: Elements can have attributes that provide additional information.
  ```xml
  <page lang="en">
    <title>My XML Page</title>
  </page>
  ```
- **Nesting**: Elements can be nested within other elements to create a hierarchical structure.
  ```xml
  <book>
    <title>XML Basics</title>
    <author>John Doe</author>
    <chapters>
      <chapter>Introduction</chapter>
      <chapter>XML Syntax</chapter>
    </chapters>
  </book>
  ```

XML is a software- and hardware-independent tool for storing and transporting data, making it a versatile choice for various applications.

It also doesn't DO anyting on its own; it simply defines a structure for data that other systems can interpret and use.

It is designed to carry data, displaying it is up to other software.

## XMLHTTPRequest

The `xmlhttprequest` object is used in JavaScript to interact with servers. It allows you to send HTTP requests and receive responses from a web server asynchronously.

This also allows web pages to update dynamically without needing to reload the entire page.

Example of using `XMLHttpRequest` to fetch an XML file:

First, initialize a new `XMLHttpRequest` object and set up a callback function to handle the response:

```javascript
const xhr = new XMLHttpRequest();
```

Next, `onreadystatechange` event is triggered whenever the `readyState` property changes.

This request is executed asynchronously everytime the status of the request changes.

You can check if the request is complete and was successful by checking if `readyState` is 4 and `status` is 200:

```javascript
xhr.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    const xmlDoc = this.responseXML;
    // Process the XML document here
    console.log(xmlDoc);
    // You can insert the fetched data into an element on the page
    document.getElementById("output").innerHTML = xhr.responseText;
  }
};
```

Finally, open and send the request:

```javascript
xhr.open("GET", "data.xml", true);
xhr.send();
```
