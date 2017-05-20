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

var _node = require('./node');

var _node2 = _interopRequireDefault(_node);

var _decorators = require('./decorators');

var _decorators2 = _interopRequireDefault(_decorators);

var _themesDefault = require('../themes/default');

var _themesDefault2 = _interopRequireDefault(_themesDefault);

var _themesAnimations = require('../themes/animations');

var _themesAnimations2 = _interopRequireDefault(_themesAnimations);

var TreeBeard = (function (_React$Component) {
    _inherits(TreeBeard, _React$Component);

    function TreeBeard() {
        _classCallCheck(this, TreeBeard);

        _get(Object.getPrototypeOf(TreeBeard.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(TreeBeard, [{
        key: 'render',
        value: function render() {
            var _this = this;

            var _props = this.props;
            var animations = _props.animations;
            var decorators = _props.decorators;
            var propsData = _props.data;
            var onToggle = _props.onToggle;
            var style = _props.style;

            var data = propsData;

            // Support Multiple Root Nodes. Its not formally a tree, but its a use-case.
            if (!Array.isArray(data)) {
                data = [data];
            }
            return _react2['default'].createElement(
                'ul',
                { style: style.tree.base,
                    ref: function (ref) {
                        return _this.treeBaseRef = ref;
                    } },
                data.map(function (node, index) {
                    return _react2['default'].createElement(_node2['default'], { animations: animations,
                        decorators: decorators,
                        key: node.id || index,
                        node: node,
                        onToggle: onToggle,
                        style: style.tree.node });
                })
            );
        }
    }]);

    return TreeBeard;
})(_react2['default'].Component);

TreeBeard.propTypes = {
    style: _propTypes2['default'].object,
    data: _propTypes2['default'].oneOfType([_propTypes2['default'].object, _propTypes2['default'].array]).isRequired,
    animations: _propTypes2['default'].oneOfType([_propTypes2['default'].object, _propTypes2['default'].bool]),
    onToggle: _propTypes2['default'].func,
    decorators: _propTypes2['default'].object
};

TreeBeard.defaultProps = {
    style: _themesDefault2['default'],
    animations: _themesAnimations2['default'],
    decorators: _decorators2['default']
};

exports['default'] = TreeBeard;
module.exports = exports['default'];