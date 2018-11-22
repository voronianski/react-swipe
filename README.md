# react-swipe

[![build status](http://img.shields.io/travis/voronianski/react-swipe.svg?style=flat)](https://travis-ci.org/voronianski/react-swipe)
[![npm version](http://badge.fury.io/js/react-swipe.svg)](http://badge.fury.io/js/react-swipe)
[![Download Count](http://img.shields.io/npm/dm/react-swipe.svg?style=flat)](http://www.npmjs.com/package/react-swipe)
<a href="https://www.buymeacoffee.com/voronianski" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" height="20" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>

> [Brad Birdsall](https://github.com/thebird)'s [Swipe.js](https://github.com/voronianski/swipe-js-iso) as a [React](http://facebook.github.io/react) component.

## Demo

Check out the [demo](http://voronianski.github.io/react-swipe/demo/) from a mobile device (real or emulated).

<img src="https://user-images.githubusercontent.com/974035/34205307-30965ccc-e582-11e7-9384-fe1ce991ff4f.gif" width="600" />

## Install

```bash
npm install react swipe-js-iso react-swipe --save
```

## Usage

### Examples

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import ReactSwipe from 'react-swipe';

class Carousel extends React.Component {
  next() {
    this.reactSwipeEl.next();
  }

  prev() {
    this.reactSwipeEl.prev();
  }

  render() {
    return (
      <ReactSwipe
        className="carousel"
        swipeOptions={{ continuous: false }}
        ref={el => this.reactSwipeEl = el}
      >
        <div>PANE 1</div>
        <div>PANE 2</div>
        <div>PANE 3</div>
      </ReactSwipe>
      <button onClick={() => this.next()}>Next</button>
      <button onClick={() => this.prev()}>Previous</button>
    );
  }
}

ReactDOM.render(<Carousel />, document.getElementById('app'));
```

### Props

- `swipeOptions: ?Object` - supports all original options from [Swipe.js config](https://github.com/voronianski/swipe-js-iso#config-options)
- `style: ?Object` - object with 3 keys (see [defaults](https://github.com/voronianski/react-swipe/blob/gh-pages/src/reactSwipe.js#L28)):
  - `container: ?Object`
  - `wrapper: ?Object`
  - `child: ?Object`
- regular props as `className`, `id` for root component are also supported

## Methods

Component proxies all [Swipe.js instance methods](https://github.com/voronianski/swipe-js-iso/#swipe-api).

### Re-rendering

In order for `react-swipe` to know that it needs to be re-rendered you should supply the `childCount` property to the component.

By setting the `childCount` to the `length` of the images that you pass into `react-swipe` re-rendering will take place when the `images.length` differs from the previous `render` pass:

```javascript
<ReactSwipe childCount={images.length}>{images}</ReactSwipe>
```

### Playground

Configure the ReactSwipe component in a sandbox environment at [CodeSandbox](https://codesandbox.io/s/q86m8n9qnj).

---

**MIT Licensed**
