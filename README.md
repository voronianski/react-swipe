react-swipe
===========

[Brad Birdsall](https://github.com/thebird)'s [swipe.js](http://swipejs.com), as a [React](http://facebook.github.io/react) component.

Check out the [demo](https://jed.github.io/react-swipe/demo) from a mobile device (real or emulated).

Installation
------------

    npm install react-swipe

Usage
-----

```javascript
var React = require("react")
var Swipe = require("react-swipe")

var swipeOptions = {
  continuous: false
}

var carousel = Swipe(swipeOptions, // and/or usual DOM props
  React.DOM.div(null, "PANE 1"),
  React.DOM.div(null, "PANE 2"),
  React.DOM.div(null, "PANE 3")
)

React.renderComponent(carousel, document.body)
```

TODO
----

- Expose `.prev` and `.next` methods as component state.
