# react-swipe

[![build status](http://img.shields.io/travis/voronianski/react-swipe.svg?style=flat)](https://travis-ci.org/voronianski/react-swipe)
[![npm version](http://badge.fury.io/js/react-swipe.svg)](http://badge.fury.io/js/react-swipe)
[![Download Count](http://img.shields.io/npm/dm/react-swipe.svg?style=flat)](http://www.npmjs.com/package/react-swipe)

> [Brad Birdsall](https://github.com/thebird)'s [Swipe.js](http://swipejs.com) as a [React](http://facebook.github.io/react) component.

## Demo

Check out the [demo](http://voronianski.github.io/react-swipe/demo/) from a mobile device (real or emulated).

<img src="https://dl.dropboxusercontent.com/u/100463011/react-swipe-demo.gif" width="600" />

## Install

```bash
npm install react swipe-js-iso react-swipe
```

## Usage

### Example

```javascript
import React from 'react'
import ReactDOM from 'react-dom';
import ReactSwipe from 'react-swipe';

class Carousel extends React.Component {
    render() {
        return (
            <ReactSwipe className="carousel" swipeOptions={{continuous: false}}>
                <div>PANE 1</div>
                <div>PANE 2</div>
                <div>PANE 3</div>
            </ReactSwipe>
        );
    }
}

ReactDOM.render(
    <Carousel />, 
    document.getElementById('app')
);
```

**Source code of [demo](http://voronianski.github.io/react-swipe/demo/) is available [here](https://github.com/voronianski/react-swipe/blob/gh-pages/demo/index.js).**

### Props

- `swipeOptions: ?Object` - supports all original options from [Swipe.js config](https://github.com/voronianski/swipe-js-iso#config-options)
- `style: ?Object` - object with 3 keys (see [defaults](https://github.com/voronianski/react-swipe/blob/gh-pages/src/reactSwipe.js#L28)):
    -  `container: ?Object`
    -  `wrapper: ?Object`
    -  `child: ?Object` 
- regular props as `className`, `id` for root component are also supported

## Methods

Component proxies all [Swipe.js instance methods](https://github.com/thebird/swipe#swipe-api).

### Re-rendering

See [related issue](https://github.com/jed/react-swipe/issues/23).

In order for `react-swipe` to know that it needs to be re-rendered, you should supply the `key` property to the component. By setting the `key` to the `length` of the images that you pass into `react-swipe`, re-rendering will take place when the `images.length` differs from the previous `render` pass:

```javascript
<ReactSwipe key={images.length}>
    {images}
</ReactSwipe>
```

---

**MIT Licensed**
