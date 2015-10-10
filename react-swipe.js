(function (root, factory) {
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = factory(
      require('react'),
      require('react-dom'),
      require('swipe-js-iso'),
      require('object-assign')
    );
  } else {
    root.ReactSwipe = factory(
      root.React,
      root.ReactDOM,
      root.Swipe,
      root.objectAssign
    );
  }
})(this, function (React, ReactDOM, Swipe, objectAssign) {
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
      var propsClone;
      if (this.isMounted()) {
        for (var i = 0; i < this.props.children.length; i++) {
          this.refs[i].style.display = 'block';
        }

        propsClone = Object.isFrozen(this.props) ?
          objectAssign({}, this.props) : this.props;

        this.swipe = Swipe(ReactDOM.findDOMNode(this), propsClone);
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
              style = objectAssign({}, styles.child);
              style.display = 'none';
            }

            return React.cloneElement(child, {
              ref: i,
              key: child.props.key,
              style: child.props.style ? objectAssign(child.props.style, style) : style
            });
          }, this)
        )
      );
    }
  });

  return ReactSwipe;
});
