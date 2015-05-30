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
  // var debug = require('debug')('React-Swipe');
  // @@@

  var styles = {
    container: {
      overflow: 'hidden',
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

    componentDidMount: function () {
      if (this.isMounted()) {
        for (var i = 0; i < this.props.children.length; i++) {
          React.findDOMNode(this.refs[i]).style.display = 'block';
        }
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
      return (
        (this.props.slideToIndex !== nextProps.slideToIndex) ||
        (typeof this.props.shouldUpdate !== 'undefined') && this.props.shouldUpdate(nextProps)
      );
    },

    render: function() {
      return React.createElement('div', React.__spread({}, this.props, {style: styles.container}),
        React.createElement('div', {style: styles.wrapper},
          React.Children.map(this.props.children, function (child, i) {
            var style = styles.child;

            if (!this.swipe && i !== this.props.startSlide) {
              style = JSON.parse(JSON.stringify(styles.child));
              style.display = 'none';
            }

            return React.addons.cloneWithProps(child, {style: style, ref: i});
          }, this)
        )
      );
    }
  });

  return ReactSwipe;
});
