"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _swipeJsIso = _interopRequireDefault(require("swipe-js-iso"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ReactSwipe =
/*#__PURE__*/
function (_Component) {
  _inherits(ReactSwipe, _Component);

  function ReactSwipe() {
    _classCallCheck(this, ReactSwipe);

    return _possibleConstructorReturn(this, _getPrototypeOf(ReactSwipe).apply(this, arguments));
  }

  _createClass(ReactSwipe, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.swipe = (0, _swipeJsIso.default)(this.containerEl, this.props.swipeOptions);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var childCount = this.props.childCount;

      if (prevProps.childCount !== childCount) {
        this.swipe.kill();
        this.swipe = (0, _swipeJsIso.default)(this.containerEl, this.props.swipeOptions);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.swipe.kill();
      this.swipe = void 0;
    }
  }, {
    key: "next",
    value: function next() {
      this.swipe.next();
    }
  }, {
    key: "prev",
    value: function prev() {
      this.swipe.prev();
    }
  }, {
    key: "slide",
    value: function slide() {
      var _this$swipe;

      (_this$swipe = this.swipe).slide.apply(_this$swipe, arguments);
    }
  }, {
    key: "getPos",
    value: function getPos() {
      return this.swipe.getPos();
    }
  }, {
    key: "getNumSlides",
    value: function getNumSlides() {
      return this.swipe.getNumSlides();
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          id = _this$props.id,
          className = _this$props.className,
          style = _this$props.style,
          children = _this$props.children;
      return _react.default.createElement("div", {
        id: id,
        ref: function ref(el) {
          return _this.containerEl = el;
        },
        className: "react-swipe-container ".concat(className),
        style: style.container
      }, _react.default.createElement("div", {
        style: style.wrapper
      }, _react.default.Children.map(children, function (child) {
        if (!child) {
          return null;
        }

        var childStyle = child.props.style ? _objectSpread({}, style.child, child.props.style) : style.child;
        return _react.default.cloneElement(child, {
          style: childStyle
        });
      })));
    }
  }]);

  return ReactSwipe;
}(_react.Component);

_defineProperty(ReactSwipe, "propTypes", {
  swipeOptions: _propTypes.default.shape({
    startSlide: _propTypes.default.number,
    speed: _propTypes.default.number,
    auto: _propTypes.default.number,
    continuous: _propTypes.default.bool,
    disableScroll: _propTypes.default.bool,
    stopPropagation: _propTypes.default.bool,
    swiping: _propTypes.default.func,
    callback: _propTypes.default.func,
    transitionEnd: _propTypes.default.func
  }),
  style: _propTypes.default.shape({
    container: _propTypes.default.object,
    wrapper: _propTypes.default.object,
    child: _propTypes.default.object
  }),
  id: _propTypes.default.string,
  className: _propTypes.default.string,
  childCount: _propTypes.default.number
});

_defineProperty(ReactSwipe, "defaultProps", {
  swipeOptions: {},
  style: {
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
  },
  className: '',
  childCount: 0
});

var _default = ReactSwipe;
exports.default = _default;
module.exports = exports["default"];
