(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define(['react', 'react-dom', 'swipe-js-iso'], factory);
  }else if (typeof exports === 'object') {
    module.exports = factory(
        require('react'),
        require('react-dom'),
        require('swipe-js-iso')
    );
  } else {
    root.ReactSwipe = factory(
        root.React,
        root.ReactDOM,
      root.Swipe
    );
  }
})(this, function (React, ReactDOM, Swipe ) {
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
      position: 'relative',
      transitionProperty: 'transform'
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

    componentDidMount: function () {
      if (this.isMounted()) {
        this.swipe = Swipe(ReactDOM.findDOMNode(this), Object.assign({}, this.props));
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
      return (
        (this.props.slideToIndex !== nextProps.slideToIndex) ||
        (typeof this.props.shouldUpdate !== 'undefined') && this.props.shouldUpdate(nextProps)
      );
    },

    render: function() {
      return React.createElement('div', React.__spread({}, {style: styles.container}, this.props),
        React.createElement('div', {style: styles.wrapper},
          React.Children.map(this.props.children, function (child) {
            return React.cloneElement(child, {
              ref: child.props.ref,
              key: child.props.key,
              style: child.props.style ? Object.assign(child.props.style, styles.child) : styles.child
            });
          })
        )
      );
    }
  });

  return ReactSwipe;
});
