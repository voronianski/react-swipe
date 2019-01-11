import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import querystring from 'querystring';
import ReactSwipe from '../src';

const query = querystring.parse(window.location.search.slice(1));

// generate slide panes
const numberOfSlides = parseInt(query.slidesNum, 10) || 20;
const paneNodes = Array.apply(null, Array(numberOfSlides)).map((_, i) => {
  return (
    <div key={i}>
      <div className="item">{i}</div>
    </div>
  );
});

// change Swipe.js options by query params
const startSlide = parseInt(query.startSlide, 10) || 0;
const swipeOptions = {
  startSlide: startSlide < paneNodes.length && startSlide >= 0 ? startSlide : 0,
  auto: parseInt(query.auto, 10) || 0,
  speed: parseInt(query.speed, 10) || 300,
  disableScroll: query.disableScroll === 'true',
  continuous: query.continuous === 'true',
  widthOfSiblingSlidePreview:
    parseInt(query.widthOfSiblingSlidePreview, 10) || 0,
  callback() {
    console.log('slide changed');
  },
  transitionEnd() {
    console.log('ended transition');
  }
};

const Page = () => {
  let reactSwipeEl;

  return (
    <div className="center">
      <h1>ReactSwipe.js</h1>
      <h2>Open this page from a mobile device (real or emulated).</h2>
      <h2>
        You can pass{' '}
        <a href="https://github.com/voronianski/swipe-js-iso#config-options">
          Swipe.js options
        </a>{' '}
        as query params.
      </h2>

      <ReactSwipe
        className="mySwipe"
        swipeOptions={swipeOptions}
        ref={el => (reactSwipeEl = el)}
      >
        {paneNodes}
      </ReactSwipe>
      <button onClick={() => reactSwipeEl.prev()}>Prev</button>
      <button onClick={() => reactSwipeEl.next()}>Next</button>
    </div>
  );
};

ReactDOM.render(<Page />, document.getElementById('app'));
