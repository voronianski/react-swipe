var React = require("react/addons")
var Swipe = require("./vendor/swipe")

var styles = {
  container: {
    overflow: "hidden",
    visibility: "hidden",
    position: "relative"
  },

  wrapper: {
    overflow: "hidden",
    position: "relative"
  },

  child: {
    float: "left",
    width: "100%",
    position: "relative"
  }
}

module.exports = React.createClass({
  displayName: "Swipe",

  // https://github.com/thebird/Swipe#config-options
  propTypes: {
    startSlide      : React.PropTypes.number,
    speed           : React.PropTypes.number,
    auto            : React.PropTypes.number,
    continuous      : React.PropTypes.bool,
    disableScroll   : React.PropTypes.bool,
    stopPropagation : React.PropTypes.bool,
    callback        : React.PropTypes.func,
    transitionEnd   : React.PropTypes.func
  },

  componentDidMount: function() {
    this.swipe = Swipe(this.getDOMNode(), this.props)
  },

  componentWillUnmount: function() {
    this.swipe.kill()

    delete this.swipe
  },

  render: function() {
    return <div {...this.props} style={styles.container}>
      <div style={styles.wrapper}>
        {this.props.children.map(function(child) {
          return React.addons.cloneWithProps(
            child, {key: child.key, style: styles.child})
        })}
      </div>
    </div>
  }

})
