CSS
===
## What is?
- Cascading Style Sheets (CSS): format the layout of a webpage
  - **Cascading**: style applied to a parent element will also apply to all children elements within the parent

## Using CSS
- CSS can be added to HTML documents in 3 ways
  1. `Inline` - by using the style attribute inside HTML elements
      ```html
      <h1 style="color:blue;">A Blue Heading</h1>
      <p style="color:red;">A red paragraph.</p>
      ```
  2. `Internal` - by using a &lt;style&gt; element in the &lt;head&gt; section
      ```html
      <head>
        <style>
          body {background-color: powderblue;}
          h1   {color: blue;}
          p    {color: red;}
        </style>
      </head>
      ```
  3. `External` - by using a &lt;link&gt; element to link to an external CSS file
      ```css
      body {
        background-color: powderblue;
      }
      h1 {
        color: blue;
      }
      p {
        color: red;
      }
      ```

      ```html
      <head>
        <link rel="stylesheet" href="styles.css">
      </head>
      ```

## CSS Border
- defines a border around an HTML element
  ```css
  p {
    border: 2px solid blue;
  }
  ```

## CSS Padding
- a padding (space) between the text and the border (inside)
  ```css
  p {
    border: 2px solid powderblue;
    padding: 30px;
  }
  ```

## CSS Margin
- defines a margin (space) outside the border
  ```css
  p {
    border: 2px solid powderblue;
    margin: 50px;
  }
  ```

## Link to External CSS
```html
<link rel="stylesheet" href="https://www.w3schools.com/html/styles.css">
```

