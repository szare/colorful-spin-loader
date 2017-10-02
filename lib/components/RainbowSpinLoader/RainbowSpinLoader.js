'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n   0% { \n   transform: rotate(0deg); \n   }\n  100% { \n  transform: rotate(360deg); \n  }\n'], ['\n   0% { \n   transform: rotate(0deg); \n   }\n  100% { \n  transform: rotate(360deg); \n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  border: ', ';\n  border-radius: 50%;\n  border-top: ', ';\n  border-right: ', ';\n  border-bottom: ', ';\n  font-size: ', ';\n  height: 10em;\n  margin: 60px auto;\n  position: relative;\n  text-indent: -9999em;\n  transform: translateZ(0);\n  width: 10em;\n  &:after {\n    border-radius: 50%;\n    height: 10em;\n    width: 10em;\n  }\n  animation: ', ';\n'], ['\n  border: ', ';\n  border-radius: 50%;\n  border-top: ', ';\n  border-right: ', ';\n  border-bottom: ', ';\n  font-size: ', ';\n  height: 10em;\n  margin: 60px auto;\n  position: relative;\n  text-indent: -9999em;\n  transform: translateZ(0);\n  width: 10em;\n  &:after {\n    border-radius: 50%;\n    height: 10em;\n    width: 10em;\n  }\n  animation: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var loading = (0, _styledComponents.keyframes)(_templateObject);

var RainbowSpin = _styledComponents2.default.div(_templateObject2, function (props) {
  return '16px solid ' + props.leftColor;
}, function (props) {
  return '16px solid ' + props.topColor;
}, function (props) {
  return '16px solid ' + props.rightColor;
}, function (props) {
  return '16px solid ' + props.bottomColor;
}, function (props) {
  return props.size + 'px';
}, function (props) {
  return loading + ' ' + props.duration + 's infinite linear;';
});

var RainbowSpinLoader = function RainbowSpinLoader(props) {
  return _react2.default.createElement(RainbowSpin, props);
};

RainbowSpinLoader.propTypes = {
  topColor: _propTypes2.default.string,
  rightColor: _propTypes2.default.string,
  bottomColor: _propTypes2.default.string,
  leftColor: _propTypes2.default.string,
  duration: _propTypes2.default.number,
  size: _propTypes2.default.number
};

RainbowSpinLoader.defaultProps = {
  topColor: 'blue',
  rightColor: 'red',
  bottomColor: 'green',
  leftColor: 'yellow',
  duration: 1.5,
  size: 10
};

exports.default = RainbowSpinLoader;