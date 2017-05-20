'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _velocityReact = require('velocity-react');

var Loading = function Loading(_ref) {
    var style = _ref.style;

    return _react2['default'].createElement(
        'div',
        { style: style },
        'loading...'
    );
};
Loading.propTypes = {
    style: _propTypes2['default'].object
};

var Toggle = function Toggle(_ref2) {
    var style = _ref2.style;
    var height = style.height;
    var width = style.width;

    var midHeight = height * 0.5;
    var points = '0,0 0,' + height + ' ' + width + ',' + midHeight;

    return _react2['default'].createElement(
        'div',
        { style: style.base },
        _react2['default'].createElement(
            'div',
            { style: style.wrapper },
            _react2['default'].createElement(
                'svg',
                { height: height, width: width },
                _react2['default'].createElement('polygon', { points: points,
                    style: style.arrow })
            )
        )
    );
};
Toggle.propTypes = {
    style: _propTypes2['default'].object
};

var Header = function Header(_ref3) {
    var node = _ref3.node;
    var style = _ref3.style;

    return _react2['default'].createElement(
        'div',
        { style: style.base },
        _react2['default'].createElement(
            'div',
            { style: style.title },
            node.name
        )
    );
};
Header.propTypes = {
    style: _propTypes2['default'].object,
    node: _propTypes2['default'].object.isRequired
};

var Container = (function (_React$Component) {
    _inherits(Container, _React$Component);

    function Container() {
        _classCallCheck(this, _Container);

        _get(Object.getPrototypeOf(_Container.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Container, [{
        key: 'render',
        value: function render() {
            var _this = this;

            var _props = this.props;
            var style = _props.style;
            var decorators = _props.decorators;
            var terminal = _props.terminal;
            var onClick = _props.onClick;
            var node = _props.node;

            return _react2['default'].createElement(
                'div',
                { onClick: onClick,
                    ref: function (ref) {
                        return _this.clickableRef = ref;
                    },
                    style: style.container },
                !terminal ? this.renderToggle() : null,
                _react2['default'].createElement(decorators.Header, { node: node,
                    style: style.header })
            );
        }
    }, {
        key: 'renderToggle',
        value: function renderToggle() {
            var _this2 = this;

            var animations = this.props.animations;

            if (!animations) {
                return this.renderToggleDecorator();
            }

            return _react2['default'].createElement(
                _velocityReact.VelocityComponent,
                { animation: animations.toggle.animation,
                    duration: animations.toggle.duration,
                    ref: function (ref) {
                        return _this2.velocityRef = ref;
                    } },
                this.renderToggleDecorator()
            );
        }
    }, {
        key: 'renderToggleDecorator',
        value: function renderToggleDecorator() {
            var _props2 = this.props;
            var style = _props2.style;
            var decorators = _props2.decorators;

            return _react2['default'].createElement(decorators.Toggle, { style: style.toggle });
        }
    }]);

    var _Container = Container;
    Container = (0, _radium2['default'])(Container) || Container;
    return Container;
})(_react2['default'].Component);

Container.propTypes = {
    style: _propTypes2['default'].object.isRequired,
    decorators: _propTypes2['default'].object.isRequired,
    terminal: _propTypes2['default'].bool.isRequired,
    onClick: _propTypes2['default'].func.isRequired,
    animations: _propTypes2['default'].oneOfType([_propTypes2['default'].object, _propTypes2['default'].bool]).isRequired,
    node: _propTypes2['default'].object.isRequired
};

exports['default'] = {
    Loading: Loading,
    Toggle: Toggle,
    Header: Header,
    Container: Container
};
module.exports = exports['default'];