var React = require('react/addons');
var Swipe = require('./vendor/swipe.js');

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

module.exports = React.createClass({
  displayName: 'Swipe',

  // https://github.com/thebird/Swipe#config-options
  propTypes: {
    startSlide      : React.PropTypes.number,
    slideToIndex    : React.PropTypes.number,
    speed           : React.PropTypes.number,
    auto            : React.PropTypes.number,
    continuous      : React.PropTypes.bool,
    disableScroll   : React.PropTypes.bool,
    stopPropagation : React.PropTypes.bool,
    callback        : React.PropTypes.func,
    transitionEnd   : React.PropTypes.func
  },

  getDefaultProps: function () {
    return {
        startSlide: 0,
        slideToIndex: 0
    };
  },

  componentDidMount: function () {
    this.swipe = Swipe(this.getDOMNode(), this.props);
  },

  componentDidUpdate: function () {
    return this.swipe.slide(this.props.slideToIndex);
  },

  componentWillUnmount: function () {
    this.swipe.kill();
    delete this.swipe;
  },

  shouldComponentUpdate: function (nextProps) {
    return this.props.slideToIndex !== nextProps.slideToIndex;
  },

  reinit: function() {
    this.swipe.kill()
    delete this.swipe
    this.swipe = Swipe(this.getDOMNode(), this.props)
  },

  render: function() {
    var container = React.DOM.div(this.props,
      React.DOM.div({style: styles.wrapper},
        React.Children.map(this.props.children, function(child) {
          return React.addons.cloneWithProps(child, {style: styles.child});
        })
      )
    );

    return React.addons.cloneWithProps(container, {style: styles.container});
  }
});
