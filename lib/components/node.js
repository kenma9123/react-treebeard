'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _objectWithoutProperties = require('babel-runtime/helpers/object-without-properties')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var _Object$assign = require('babel-runtime/core-js/object/assign')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _velocityReact = require('velocity-react');

var _header = require('./header');

var _header2 = _interopRequireDefault(_header);

var TreeNode = (function (_React$Component) {
    _inherits(TreeNode, _React$Component);

    function TreeNode() {
        _classCallCheck(this, TreeNode);

        _get(Object.getPrototypeOf(TreeNode.prototype), 'constructor', this).call(this);

        this.onClick = this.onClick.bind(this);
    }

    _createClass(TreeNode, [{
        key: 'onClick',
        value: function onClick() {
            var _props = this.props;
            var node = _props.node;
            var onToggle = _props.onToggle;
            var toggled = node.toggled;

            if (onToggle) {
                onToggle(node, !toggled);
            }
        }
    }, {
        key: 'animations',
        value: function animations() {
            var _props2 = this.props;
            var animations = _props2.animations;
            var node = _props2.node;

            if (animations === false) {
                return false;
            }

            var anim = _Object$assign({}, animations, node.animations);
            return {
                toggle: anim.toggle(this.props),
                drawer: anim.drawer(this.props)
            };
        }
    }, {
        key: 'decorators',
        value: function decorators() {
            // Merge Any Node Based Decorators Into The Pack
            var _props3 = this.props;
            var decorators = _props3.decorators;
            var node = _props3.node;

            var nodeDecorators = node.decorators || {};

            return _Object$assign({}, decorators, nodeDecorators);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this = this;

            var style = this.props.style;

            var decorators = this.decorators();
            var animations = this.animations();

            return _react2['default'].createElement(
                'li',
                { ref: function (ref) {
                        return _this.topLevelRef = ref;
                    },
                    style: style.base },
                this.renderHeader(decorators, animations),
                this.renderDrawer(decorators, animations)
            );
        }
    }, {
        key: 'renderDrawer',
        value: function renderDrawer(decorators, animations) {
            var _this2 = this;

            var toggled = this.props.node.toggled;

            if (!animations && !toggled) {
                return null;
            } else if (!animations && toggled) {
                return this.renderChildren(decorators, animations);
            }

            var _animations$drawer = animations.drawer;
            var animation = _animations$drawer.animation;
            var duration = _animations$drawer.duration;

            var restAnimationInfo = _objectWithoutProperties(_animations$drawer, ['animation', 'duration']);

            return _react2['default'].createElement(
                _velocityReact.VelocityTransitionGroup,
                _extends({}, restAnimationInfo, {
                    ref: function (ref) {
                        return _this2.velocityRef = ref;
                    } }),
                toggled ? this.renderChildren(decorators, animations) : null
            );
        }
    }, {
        key: 'renderHeader',
        value: function renderHeader(decorators, animations) {
            var _props4 = this.props;
            var node = _props4.node;
            var style = _props4.style;

            return _react2['default'].createElement(_header2['default'], { animations: animations,
                decorators: decorators,
                node: _Object$assign({}, node),
                onClick: this.onClick,
                style: style });
        }
    }, {
        key: 'renderChildren',
        value: function renderChildren(decorators) {
            var _this3 = this;

            var _props5 = this.props;
            var animations = _props5.animations;
            var propDecorators = _props5.decorators;
            var node = _props5.node;
            var style = _props5.style;

            if (node.loading) {
                return this.renderLoading(decorators);
            }

            var children = node.children;
            if (!Array.isArray(children)) {
                children = children ? [children] : [];
            }

            return _react2['default'].createElement(
                'ul',
                { style: style.subtree,
                    ref: function (ref) {
                        return _this3.subtreeRef = ref;
                    } },
                children.map(function (child, index) {
                    return _react2['default'].createElement(TreeNode, _extends({}, _this3._eventBubbles(), {
                        animations: animations,
                        decorators: propDecorators,
                        key: child.id || index,
                        node: child,
                        style: style }));
                })
            );
        }
    }, {
        key: 'renderLoading',
        value: function renderLoading(decorators) {
            var style = this.props.style;

            return _react2['default'].createElement(
                'ul',
                { style: style.subtree },
                _react2['default'].createElement(
                    'li',
                    null,
                    _react2['default'].createElement(decorators.Loading, { style: style.loading })
                )
            );
        }
    }, {
        key: '_eventBubbles',
        value: function _eventBubbles() {
            var onToggle = this.props.onToggle;

            return {
                onToggle: onToggle
            };
        }
    }]);

    return TreeNode;
})(_react2['default'].Component);

TreeNode.propTypes = {
    style: _propTypes2['default'].object.isRequired,
    node: _propTypes2['default'].object.isRequired,
    decorators: _propTypes2['default'].object.isRequired,
    animations: _propTypes2['default'].oneOfType([_propTypes2['default'].object, _propTypes2['default'].bool]).isRequired,
    onToggle: _propTypes2['default'].func
};

exports['default'] = TreeNode;
module.exports = exports['default'];