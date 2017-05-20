'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _Object$keys = require('babel-runtime/core-js/object/keys')['default'];

var _Object$assign = require('babel-runtime/core-js/object/assign')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _shallowequal = require('shallowequal');

var _shallowequal2 = _interopRequireDefault(_shallowequal);

var _deepEqual = require('deep-equal');

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var NodeHeader = (function (_React$Component) {
    _inherits(NodeHeader, _React$Component);

    function NodeHeader() {
        _classCallCheck(this, NodeHeader);

        _get(Object.getPrototypeOf(NodeHeader.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(NodeHeader, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps) {
            var props = this.props;
            var nextPropKeys = _Object$keys(nextProps);

            for (var i = 0; i < nextPropKeys.length; i++) {
                var key = nextPropKeys[i];
                if (key === 'animations') {
                    continue;
                }

                var isEqual = (0, _shallowequal2['default'])(props[key], nextProps[key]);
                if (!isEqual) {
                    return true;
                }
            }

            return !(0, _deepEqual2['default'])(props.animations, nextProps.animations, { strict: true });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props;
            var animations = _props.animations;
            var decorators = _props.decorators;
            var node = _props.node;
            var onClick = _props.onClick;
            var style = _props.style;
            var active = node.active;
            var children = node.children;

            var terminal = !children;
            var container = [style.link, active ? style.activeLink : null];
            var headerStyles = _Object$assign({ container: container }, style);

            return _react2['default'].createElement(decorators.Container, { animations: animations,
                decorators: decorators,
                node: node,
                onClick: onClick,
                style: headerStyles,
                terminal: terminal });
        }
    }]);

    return NodeHeader;
})(_react2['default'].Component);

NodeHeader.propTypes = {
    style: _propTypes2['default'].object.isRequired,
    decorators: _propTypes2['default'].object.isRequired,
    animations: _propTypes2['default'].oneOfType([_propTypes2['default'].object, _propTypes2['default'].bool]).isRequired,
    node: _propTypes2['default'].object.isRequired,
    onClick: _propTypes2['default'].func
};

exports['default'] = NodeHeader;
module.exports = exports['default'];