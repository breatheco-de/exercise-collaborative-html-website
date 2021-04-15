# HTML Template Engine [(live demo)](https://alesanchezr.github.io/html-template-engine/demo/)

Include other files into your current file:
```html
<!-- Include other html files into your own -->
<span require-file="./parts/footer.html"></span>
```

## Instalation
- Using NPM
```sh
$ npm install html-template-engine --save
```
- Or using a **simple script tag** before your body closing tag and use the **autoload** feature to avoid using any Javascript whatsoever.
```html
<script type="text/javascript" src="html-template-engine.min.js?autoload"></script>
```
Important! Please notice the **?autoload** at the end of the script url, [here is the library code](../../tree/master/dist)

## Usage (Remember to install the library first)

On your HTML paste the following code whenever you want to include another html file
```html
<!-- Include other html files into your own -->
<span require-file="./parts/footer.html"></span>

<!-- You can also include svg files -->
<span require-file="./parts/images/name.svg"></span>
```

Only for NPM installations:
```js
import TemplateManager from 'html-template-engine';

//if you want to load the templates when the website finishes loading
window.onload = function(){ TemplateManager.start(); }
```

### Additional Available Params

1. Log on the console all the pieces being loaded into the html
```html
    <body log-template-requests="true">
```

2. Set a base template path for all your url's
```html
    <body base-template-path="./parts/">
    ...
        <span require-file="footer.html"></span>
    </body>
```

## Authors
| ![Alejandro Sanchez](https://www.gravatar.com/avatar/92dc7ea3850dea745ac8a4932583827d?s=20) | Alejandro Sanchez | [@alesanchezr](https://twitter.com) | [alesanchezr.com](https://alesanchezr.com) |
|---------------------------------------------------------------------------------------------|-------------------|-------------------------------------|--------|
