(function (root, factory) {
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = factory(
      require('react'),
      require('react-dom'),
      require('prop-types'),
      require('create-react-class'),
      require('swipe-js-iso-ln'),
      require('object-assign')
    );
  } else {
    root.ReactSwipe = factory(
      root.React,
      root.ReactDOM,
      root.PropTypes,
      root.createReactClass,
      root.Swipe,
      root.objectAssign
    );
  }
})(this,
function (React, ReactDOM, PropTypes, createReactClass, Swipe, objectAssign) {
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

  var ReactSwipe = createReactClass({
    // https://github.com/thebird/Swipe#config-options
    propTypes: {
      startSlide      : PropTypes.number,
      slideToIndex    : PropTypes.number,
      shouldUpdate    : PropTypes.func,
      speed           : PropTypes.number,
      auto            : PropTypes.number,
      continuous      : PropTypes.bool,
      disableScroll   : PropTypes.bool,
      stopPropagation : PropTypes.bool,
      callback        : PropTypes.func,
      transitionEnd   : PropTypes.func,
      children        : PropTypes.array
    },

    componentDidMount: function () {
      for (var i = 0; i < this.props.children.length; i++) {
        this.refs[i].style.display = 'block';
      }

      var propsClone = Object.isFrozen(this.props) ?
        objectAssign({}, this.props) : this.props;

      this.swipe = Swipe(this.refs.container, propsClone);
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
        (typeof this.props.shouldUpdate !== 'undefined') &&
          this.props.shouldUpdate(nextProps)
      );
    },

    render: function() {
      return React.createElement('div', {
        ref: 'container',
        style: styles.container
      }, React.createElement('div', { style: styles.wrapper },
        React.Children.map(this.props.children, function (child, i) {
          var style = styles.child;

          if (!this.swipe && i !== this.props.startSlide) {
            style = objectAssign({}, styles.child);
            style.display = 'none';
          }

          return React.cloneElement(child, {
            ref: i,
            style: child.props.style ?
              objectAssign(child.props.style, style) : style
          });
        }, this)
      ));
    }
  });

  return ReactSwipe;
});
