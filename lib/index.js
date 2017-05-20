'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _componentsTreebeard = require('./components/treebeard');

var _componentsTreebeard2 = _interopRequireDefault(_componentsTreebeard);

var _componentsDecorators = require('./components/decorators');

var _componentsDecorators2 = _interopRequireDefault(_componentsDecorators);

var _themesAnimations = require('./themes/animations');

var _themesAnimations2 = _interopRequireDefault(_themesAnimations);

var _themesDefault = require('./themes/default');

var _themesDefault2 = _interopRequireDefault(_themesDefault);

exports['default'] = {
    Treebeard: _componentsTreebeard2['default'],
    decorators: _componentsDecorators2['default'],
    animations: _themesAnimations2['default'],
    theme: _themesDefault2['default']
};
module.exports = exports['default'];