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
    - [`<picture>`](#picture)
  - [Favicon](#favicon)
  - [Title](#title)
  - [Table](#table)


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
### `<picture>`
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
- The <title> element:
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