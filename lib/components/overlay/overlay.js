'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _overlayStyles = require('./overlay-styles');

var _overlayStyles2 = _interopRequireDefault(_overlayStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Overlay = function (_Component) {
    _inherits(Overlay, _Component);

    function Overlay() {
        _classCallCheck(this, Overlay);

        return _possibleConstructorReturn(this, (Overlay.__proto__ || Object.getPrototypeOf(Overlay)).apply(this, arguments));
    }

    _createClass(Overlay, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.body = document.body;
            this.node = document.createElement('div');
            this.body.appendChild(this.node);
            this.handleRender();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.handleRender();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _reactDom2.default.unmountComponentAtNode(this.node);
            this.body.removeChild(this.node);
        }
    }, {
        key: 'handleRender',
        value: function handleRender() {
            var _props = this.props,
                children = _props.children,
                visible = _props.visible;


            _reactDom2.default.render(_react2.default.createElement(
                'div',
                { className: (_overlayStyles2.default['rprogress-overlay'] || 'rprogress-overlay') + ' ' + (visible ? _overlayStyles2.default['rprogress-overlay_active'] || 'rprogress-overlay_active' : '') },
                children
            ), this.node);
        }
    }, {
        key: 'render',
        value: function render() {
            return null;
        }
    }]);

    return Overlay;
}(_react.Component);

exports.default = Overlay;