# react-swipe

[Brad Birdsall](https://github.com/thebird)'s [Swipe.js](http://swipejs.com), as a [React](http://facebook.github.io/react) component.

Check out the [demo](https://jed.github.io/react-swipe/demo) from a mobile device (real or emulated).

## Installation

```bash
npm install react-swipe
```

## Usage

```javascript
var React = require('react')
var ReactSwipe = require('react-swipe')

var Carousel = React.createClass({
    render: function () {
        return (
            <ReactSwipe
                continuous={false}
            >
                <div>'PANE 1'</div>
                <div>'PANE 2'</div>
                <div>'PANE 3'</div>
            </ReactSwipe>
        );
    }
});

React.render(<Carousel />, document.body)
```

## Props

Properties are duplicates of options from [Swipe.js config](https://github.com/thebird/Swipe#config-options) but there is additional one:

- **slideToIndex** Integer - set index position by Swipe's `.slide()` method on `componentDidUpdate` lifecycle method. It's useful when you need to control `ReactSwipe` by custom next/prev buttons - just update component with new index (it wont be updated if index number is the same as previous one).

---

**MIT Licensed**
