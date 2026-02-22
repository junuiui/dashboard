HTML
===

- [HTML](#html)
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
<iframe src="https://www.w3schools.com/html/html_iframe.asp" name="iframe_w3" title="Iframe Example"> </iframe>
<p><a href="https://www.w3schools.com" target="iframe_w3">W3Schools.com</a></p>