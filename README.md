# react-swipe

## About This Fork
This is a fork of react-swipe 2.3.1 that:
* Shows the result of server-side rendering obeying the startSlide index option.
* Updated to use React 0.14.x

### What? Why?
The original does not show the result of server-side rendering and the maintainers stated they were not interested in this behavior. I say, "shows the result" because the server-side rendered markup was there, it was just hidden.

[Brad Birdsall](https://github.com/thebird)'s [Swipe.js](http://swipejs.com), as a [React](http://facebook.github.io/react) component.

Check out the [demo](https://jed.github.io/react-swipe/demo) from a mobile device (real or emulated).

## Installation

```bash
npm install react-swipe
```

_Please notice that starting from version `2.1.0` component depends on React `0.13.x`, latest version which depends on React `0.12.x` is `2.0.11`._

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

Properties are duplicates of options from [Swipe.js config](https://github.com/thebird/Swipe#config-options) but there are additional ones:

- **slideToIndex** Integer - set index position by Swipe's `.slide()` method on `componentDidUpdate` lifecycle method. It's useful when you need to control `ReactSwipe` by custom next/prev buttons - just update component with new index (it wont be updated if index number is the same as previous one).

- **shouldUpdate** Function, _arguments: nextProps {Object}_ - by default `<ReactSwipe />` component will rerender itself and children **only** if `slideToIndex` [property has changed](https://github.com/jed/react-swipe/blob/gh-pages/react-swipe.js#L65). But `shouldUpdate` prop allows to define a function and control rerendering of children on your own.

---

**MIT Licensed**
