HTML
===

- [HTML](#html)
- [Basic](#basic)
  - [meta](#meta)
    - [Viewpoint](#viewpoint)
    - [base](#base)
  - [Links](#links)
    - [Syntax](#syntax)
    - [Target Attribute](#target-attribute)
    - [mailto:](#mailto)
    - [Button link](#button-link)
    - [title Attribute](#title-attribute)
    - [Bookmark](#bookmark)
  - [Images](#images)
    - [Image Maps](#image-maps)
    - [Background image](#background-image)
    - [picture](#picture)
  - [Favicon](#favicon)
  - [Title](#title)
  - [Table](#table)
    - [Table Styles](#table-styles)
    - [Spacing](#spacing)
    - [Span](#span)
    - [Styling](#styling)
    - [Colgroup](#colgroup)
  - [Lists](#lists)
    - [ul (Unordered List)](#ul-unordered-list)
    - [ol (Ordered List)](#ol-ordered-list)
    - [dl (Description List)](#dl-description-list)
  - [div](#div)
    - [Flex (1-D)](#flex-1-d)
    - [Grid (2-D)](#grid-2-d)
  - [Class](#class)
  - [id](#id)
  - [Buttons](#buttons)
    - [Syntax](#syntax-1)
    - [Types](#types)
  - [Iframes](#iframes)
  - [JavaScript](#javascript)
    - [Select an HTML element](#select-an-html-element)
  - [Computercode](#computercode)
    - [Keyboard Input](#keyboard-input)
    - [Program Output](#program-output)
    - [Computer code](#computer-code)
    - [Preserve Line-breaks](#preserve-line-breaks)
    - [Variable / Mathematical Expression](#variable--mathematical-expression)
  - [Semantics](#semantics)
- [Form](#form)
    - [form types](#form-types)
    - [attributes](#attributes)
    - [`<form>`](#form-1)
    - [Elements](#elements)
    - [Input types](#input-types)
    - [Input Attributes](#input-attributes)

# Basic
## meta
- specify the caracter set, page description, keywords, author of the document and viewpoint setting
- Usage
  - Define the character set
    - `<meta charset="UTF-8">`
  - Define keywords for search engines:
    - `<meta name="keywords" content="HTML, CSS, JavaScript">`
  - Define a description of your web page:
    - `<meta name="description" content="Free Web tutorials">`
  - Define the author of a page:
    - `<meta name="author" content="John Doe">`
  - Refresh document every 30 seconds:
    - `<meta http-equiv="refresh" content="30">`
  - Setting the viewport to make your website look good on all devices:
    - `<meta name="viewport" content="width=device-width, initial-scale=1.0">`

### Viewpoint
- user's visible area of a web page. It varies with the device - it will be smaller on a mobile phone than on a computer screen.

### base
- The `<base>` element specifies the base URL and/or target for all relative URLs in a page.
- The `<base>` tag must have either an href or a target attribute present, or both.
- There can only be one single `<base>`element in a document!



## Links
- HTML links are **hyperlinks**

### Syntax
`<a href="url">link text</a>`

### Target Attribute
- By default, the linked page will be displayed in the current browser window, To chanage this, you musch specify another target for the link.
- `target` specifies where to open the linked document
- `target` can have one of the follwing values:
  - `_self`: Default. Opens the document in the same window/tab as it was clicked
  - `_blank`: Opens the document in a new window or tab
  - `_parent`: Opens the document in the parent frame
  - `_top`: Opens the document in the full body of the window

### mailto:
- scheme inside the `href` attribute to create a link that opens the user's email program
`<a href="mailto:someone@example.com">Send email</a>`

### Button link
`<button onclick="document.location='default.asp'">HTML Tutorial</button>`

### title Attribute
`<a href="https://www.w3schools.com/html/" title="Go to W3Schools HTML section">Visit our HTML Tutorial</a>`

### Bookmark
```html
<h2 id="C4">Chapter 4</h2>
<a href="#C4">Jump to Chapter 4</a>

<!-- or you can -->
<a href="html_demo.html#C4">Jump to Chapter 4</a>
```

## Images
- Use the HTML `<img>` element to define an image
- Use the HTML `src` attribute to define the URL of the image
- Use the HTML `alt` attribute to define an alternate text for an image, if it cannot be displayed
- Use the HTML `width` and `height` attributes or the CSS `width` and `height` properties to define the size of the image
- Use the CSS `float` property to let the image float to the left or to the right

### Image Maps
- `<map>` - defines an image map. Image with clickable areas. The areas are defined with one or more `<area>` tags.
  ```html
  <img src="workplace.jpg" alt="Workplace" usemap="#workmap">

  <map name="workmap">
    <area shape="rect" coords="34,44,270,350" alt="Computer" href="computer.htm">
    <area shape="rect" coords="290,172,333,250" alt="Phone" href="phone.htm">
    <area shape="circle" coords="337,300,44" alt="Coffee" href="coffee.htm">
  </map>
  ```
- Areas
  - `rect` - defines a rectangular region
  - `circle` - defines a circular region
  - `poly` - defines a polygonal region
  - `default` - defines the entire region

### Background image
- add a background image on an THMl element
  ```html
  <p style="background-image: url('img_girl.jpg');">
  ```
- If the background image is **smaller** than the element, the image will **repeat itself**, **horizontally** and **vertically**, until it reaches the end of the element
- **No repeat**
  - `background-repeat: no-repeat;`
- **Cover**
  - If you want the background image to cover the entire element, you can set the background-size property to cover.
  - Also, to make sure the entire element is always covered, set the background-attachment property to fixed:
  - This way, the background image will cover the entire element, with no stretching 
  ```html
  <style>
  body {
    background-image: url('img_girl.jpg');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover; ==> 고정비율
    // background-size: 100% 100%; ==> w/h 100% stretch
  }
  </style>
  ```
### picture
- Show different images for different screen sizes
  ```html
  <picture>
    <source media="(min-width: 650px)" srcset="img_food.jpg">
    <source media="(min-width: 465px)" srcset="img_car.jpg">
    <img src="img_girl.jpg">
  </picture>
  ```

## Favicon
- A favicon is a small image displayed next to the page title in the browser tab.

  ```html
  <head>
    <title>My Page Title</title>
    <link rel="icon" type="image/x-icon" href="/images/favicon.ico">
  </head>
  ```

## Title
- The `<title>` element adds a title to your page
  ```html
  <head>
    <title>HTML Tutorial</title>
  </head>
  ```
- The `<title>` element:
  - defines a title in the browser toolbar
  - provides a title for the page when it is added to favorites
  - displays a title for the page in search engine-results
  - `Search engine Optimization` (SEO)!!!

## Table
- `<tr>`: table row
  - `<th>`: table header
- `<td>`: table data
  ```html
  <table>
    <tr>
      <th>Company</th>
      <th>Contact</th>
      <th>Country</th>
    </tr>
    <tr>
      <td>Alfreds Futterkiste</td>
      <td>Maria Anders</td>
      <td>Germany</td>
    </tr>
    <tr>
      <td>Centro comercial Moctezuma</td>
      <td>Francisco Chang</td>
      <td>Mexico</td>
    </tr>
  </table>
  ```
- example
  <table>
    <tr>
      <th>Company</th>
      <th>Contact</th>
      <th>Country</th>
    </tr>
    <tr>
      <td>Alfreds Futterkiste</td>
      <td>Maria Anders</td>
      <td>Germany</td>
    </tr>
    <tr>
      <td>Centro comercial Moctezuma</td>
      <td>Francisco Chang</td>
      <td>Mexico</td>
    </tr>
  </table>

- `<table>`	Defines a table
- `<th>`	Defines a header cell in a table
- `<tr>`	Defines a row in a table
- `<td>`	Defines a cell in a table
- `<caption>`	Defines a table caption
- `<colgroup>`	Specifies a group of one or more columns in a table for formatting
- `<col>`	Specifies column properties for each column within a `<colgroup>` element
- `<thead>`	Groups the header content in a table
- `<tbody>`	Groups the body content in a table
- `<tfoot>`	Groups the footer content in a table

<table>
  <caption>Fruit Table</caption>

  <colgroup>
    <col style="background-color: rgba(0,0,0,0);">
    <col>
  </colgroup>

  <thead>
    <tr>
      <th>Name</th>
      <th>Price</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Apple</td>
      <td>$2</td>
    </tr>
  </tbody>

  <tfoot>
    <tr>
      <td>Total</td>
      <td>$2</td>
    </tr>
  </tfoot>
</table>

### Table Styles
- `border-style`
  - `dotted`     
  - `dashed`     
  - `solid`     
  - `double`     
  - `groove`     
  - `ridge`     
  - `inset`     
  - `outset`     
  - `none`     
  - `hidden` 
- `border-color`

  ```html
  table, th, td {
    border: 1px solid black;
    border-radius: 10px;
    border-style: dotted;
    border-color: #96D4D4;
  }
  ```

### Spacing
- `padding: 15px`: padding inside each cell
- `border-spacing: 30px`: Cell spacing = between each cell

### Span
- `<th colspan="2">Name</th>`
- `<th rowspan="2">Phone</th>`

### Styling
  ```html
  tr:nth-child(even) {
    background-color: #D6EEEE;
  }

  td:nth-child(even), th:nth-child(even) {
    background-color: #D6EEEE;
  }
  ```
- `tr:hover {background-color: #D6EEEE;}`

### Colgroup
- The `<colgroup>` element should be used as a container for the column specifications.
- Each group is specified with a `<col>` element.
- The span attribute specifies how many columns get the style.
- The style attribute specifies the style to give the columns.
- Empty
  ```html
  <colgroup>
    <col span="3">
    <col span="2" style="background-color: pink">
  </colgroup>
  ```
- visibility: `<col span="3" style="visibility: collapse">` : hide columns

## Lists
### ul (Unordered List)
  - change list item marker: `list-style-type: `
    - `disc`
    - `circle`
    - `square`
    - `none`
  - horizontal listing
    ```html
    li {
      float: left;
    }
    ```
  - `overflow: hidden;`: float crack prevention (parent can't recog child height)
### ol (Ordered List)
- change the list item marker: `<ol type="1">`
  - `type="1"`
  - `type="A"`
  - `type="a"`
  - `type="I"`
  - `type="i"`
### dl (Description List)
- description list: list of terms, with a description of each term
  - `<dl>` -> defines description list
  - `<dt>` -> defines the term (name)
  - `<dd>` -> describes each term

## div
### Flex (1-D)
- Make it easie rto design flexible responsive layout structure without using float or positioning
- `display: flex;`

### Grid (2-D)
- grid-based layout - rows and columns
- **A Grid Container** - The parent (container) element, where the display property is set to `grid` or `inline-grid`
- **One or more Grid Items** - The direct children of the grid container automatically becomes grid items

    ```css
    .container {
      display: grid;
      grid-template-columns: auto auto auto;
      background-color: dodgerblue;
      padding: 10px;
    }
    .container div {
      background-color: #f1f1f1;
      border: 1px solid black;
      padding: 10px;
      font-size: 30px;
      text-align: center;
    }
    ```

## Class
- `class` attribute: 
  - used to point to a class name in a style sheet
  - used for JavaScript to access and manipulate elements with the specific class name
- `.className` with css

## id
- `id` attribute:
  - specifies a **UNIQUE** id for an HTML element
  - the value of the id must be **UNIQUE** within the HTML document
  - used to point to a specific style declaration in a style sheet
  - used for JavaScript to access and manipulate elements with the specific id
- `#id` with css

## Buttons
### Syntax
`<button> Click me </button>`

### Types
- `type="button"`: Normal clickable buton (does nothing by default)
- `type="submit"`: Submits a form
- `type="reset"`: Resets all form fields

## Iframes
- The HTML `<iframe>` tag specifies an inline frame
- The src attribute defines the URL of the page to embed
- Always include a title attribute (for screen readers)
- The height and width attributes specify the size of the iframe
- Use border:none; to remove the border around the iframe
  
Example
```html
<iframe src="demo_iframe.htm" name="iframe_a" height="300px" width="100%" title="Iframe Example"></iframe>

<p><a href="https://www.w3schools.com" target="iframe_a">W3Schools.com</a></p>
```

## JavaScript
- `<script>`: used to define a client-side script (js)
  - element either contains script statements, or it points to an external script file through the src attribute

### Select an HTML element
`document.getElementById()` method

```html
<script>
  document.getElementById("demo").innerHTML = "Hello JavaScript!";
  document.getElementById("demo").style.fontSize = "25px";
  document.getElementById("demo").style.color = "red";
  document.getElementById("demo").style.backgroundColor = "yellow";
  document.getElementById("image").src = "picture.gif";
</script>

```

## Computercode
### Keyboard Input
```html
<p>Save the document by pressing <kbd>Ctrl + S</kbd></p>
```

### Program Output
```html
<p>Message from my computer:</p>
<p><samp>File not found.<br>Press F1 to continue</samp></p>
```

### Computer code
```html
<code>
x = 5;
y = 6;
z = x + y;
</code>
```

### Preserve Line-breaks
```html
<!-- Since <code> does not preserve extra whitespace and line-break -->
<pre>
<code>
x = 5;
y = 6;
z = x + y;
</code>
</pre>
```

### Variable / Mathematical Expression
```html
<!-- <var> -->
<p>The area of a triangle is: 1/2 x <var>b</var> x <var>h</var>, where <var>b</var> is the base, and <var>h</var> is the vertical height.</p>
```

## Semantics
- `<article>`	Defines independent, self-contained content
- `<aside>`	Defines content aside from the page content
- `<details>`	Defines additional details that the user can view or hide
- `<figcaption>`	Defines a caption for a `<figure>` element
- `<figure>`	Specifies self-contained content, like illustrations, diagrams, photos, code listings, etc.
- `<footer>`	Defines a footer for a document or section
- `<header>`	Specifies a header for a document or section
- `<main>`	Specifies the main content of a document
- `<mark>`	Defines marked/highlighted text
- `<nav>`	Defines navigation links
- `<section>`	Defines a section in a document
- `<summary>`	Defines a visible heading for a `<details>` element
- `<time>`	Defines a date/time

# Form

### form types
- `<input type="text">`	Displays a single-line text input field
- `<input type="radio">`	Displays a radio button (for selecting one of many choices)
- `<input type="checkbox">`	Displays a checkbox (for selecting zero or more of many choices)
- `<input type="submit">`	Displays a submit button (for submitting the form)
- `<input type="button">`	Displays a clickable button

### attributes
- `type` : defines the type
- `id`: unique id
- `name`: name of the input
- `value`: name of the input
- `for`: pointing input id of the label
- `action`: form-handler (put beside form element as attribute) - triggers when `<input type="submit">`	is clicked

### `<form>` 
- `action` attribute
  - defines the action to be performed when the form is submitted.
  - Usually, the form data is wsent to a file on the server when the user clicks on the submit button

- `target` attribute
  - specifies where to display the response that is received after submitting the form
  - _blank	The response is displayed in a new window or tab
  - `_self`	The response is displayed in the current window
  - `_parent`	The response is displayed in the parent frame
  - `_top`	The response is displayed in the full body of the window
  - `framename`	The response is displayed in a named iframe

- `method` attribute
  - specifies the HTTP method to be used when submitting the form data
  - `get`: good for non-secure data
  - `post`: appends the form data inside the body of the TTP request
  
- `autocomplete` attribute
  - specifies whether a form should have autocomplete on or off
  - When autocomplete is on, the browser automatically complete values based on values that the user has entered before
  
- `nonvalidate` attribute
  - boolean, when present, it specifies the form-data (input) should not be validated when submitted

### Elements
- `<input>`: displayed in serveral ways, depending on the type attribute
- `<label>`: The `for` attribute of the `<label>` tag should be equal to the `id` attribute of the `<input>` element to bind them together.
- `<select>`
  - The `<option>` element defines an option that can be selected.
    - `selected`: pre-selected option
  - `size='_'`: specify the number of visible values
  - `multiple`: use to select more than one value

### Input types
- `type=reset`: resets all form values to default
- `type=date`: input fields that should contain date
  - `min=2000-01-02`, `max=2999-12-31`
- `type="datetime-local"`: specifies a date and time input field with no time zone
- `type=file`: file-select field
- `hidden`: hidden input field
- `type=number`
  - `min`, `max`
- `type="range"`: slider control
- `type="tel"`: telephone number
  - `<input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}">`

### Input Attributes
- `list="___"`: attributes refers to a `<datalist>` element that contains pre-defined options for `<input>` element

  ```html
  <form>
    <input list="browsers">
    <datalist id="browsers">
      <option value="Edge">
      <option value="Firefox">
      <option value="Chrome">
      <option value="Opera">
      <option value="Safari">
    </datalist>
  </form>
  ```
