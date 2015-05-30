(function (root, factory) {
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = factory(
      require('react/addons'),
      require('swipe-js-iso')
    );
  } else {
    root.ReactSwipe = factory(
      root.React,
      root.Swipe
    );
  }
})(this, function (React, Swipe) {
  // @@@
  var debug = require('debug')('React-Swipe');
  // @@@

  var styles = {
    container: {
      overflow: 'hidden',
      visibility: 'hidden',
      position: 'relative'
    },

    wrapper: {
      overflow: 'hidden',
      position: 'relative'
    },

    child: {
      float: 'left',
      width: '100%',
      position: 'relative'
    }
  };

  var ReactSwipe = React.createClass({
    // https://github.com/thebird/Swipe#config-options
    propTypes: {
      startSlide      : React.PropTypes.number,
      slideToIndex    : React.PropTypes.number,
      shouldUpdate    : React.PropTypes.func,
      speed           : React.PropTypes.number,
      auto            : React.PropTypes.number,
      continuous      : React.PropTypes.bool,
      disableScroll   : React.PropTypes.bool,
      stopPropagation : React.PropTypes.bool,
      callback        : React.PropTypes.func,
      transitionEnd   : React.PropTypes.func
    },

    componentWillMount: function () {
      debug('componentWillMount called');
      debug('startSlide', this.props.startSlide);
      debug('children', this.props.children.length);
      // server and client
    },

    componentWillReceiveProps: function () {
      debug('componentWillReceiveProps called');
      // called? client only?
    },

    componentDidMount: function () {
      debug('componentDidMount called');
      // client only after initial render

      if (this.isMounted()) {
        this.swipe = Swipe(React.findDOMNode(this), this.props);
      }
    },

    componentDidUpdate: function () {
      if (this.props.slideToIndex || this.props.slideToIndex === 0) {
        this.swipe.slide(this.props.slideToIndex);
      }
    },

    componentWillUnmount: function () {
      this.swipe.kill();
      delete this.swipe;
    },

    shouldComponentUpdate: function (nextProps) {
      debug('shouldComponentUpdate called');
      return (
        (this.props.slideToIndex !== nextProps.slideToIndex) ||
        (typeof this.props.shouldUpdate !== 'undefined') && this.props.shouldUpdate(nextProps)
      );
    },

    render: function() {
      return React.createElement('div', React.__spread({}, this.props, {style: styles.container}),
        React.createElement('div', {style: styles.wrapper},
          React.Children.map(this.props.children, function (child) {
            return React.addons.cloneWithProps(child, {style: styles.child});
          })
        )
      );
    }
  });

  return ReactSwipe;
});
