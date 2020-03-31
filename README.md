# webcomponent + koa2

## Start

1. npm install
2. mongod --dbpath /path/to/your/mongodb
3. npm run watch
4. npm run dev
5. add file server/utils/keys.mjs

```javascript
export default 'charlesmoone&weDoctor';
```

## Design

> use webpack to handle '.mhtml' file, the loader is 'mhtmlLoader/index.js'

webcomponent need be used in `<template />`

```javascript
// mhtmlLoader/index.js
module.exports = function(source) {
  return `
    const template = document.createElement('template');
    template.innerHTML = \`${source}\`;
    export default template;
  `;
};
```

conver the html to string

use in html like:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Start your travel</title>
    <link rel="stylesheet" href="/css/reset.css" />
    <link rel="stylesheet" href="/css/home.css" />
    <script type="module" src="/js/webcomponent/cm-header.js"></script>
  </head>

  <body>
    <cm-header></cm-header>
  </body>
</html>
```

## Server

```bash
middleware            # middleware for router
routers               # the router
utils                 # common tools
controllers           # the controller
models                # the model to connect mongodb
index.mjs             # entry
```
