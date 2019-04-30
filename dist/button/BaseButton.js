import { jsx as ___EmotionJSX } from "@emotion/core";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import { baseButtonStyle, primaryButtonStyles, secondaryButtonStyles, outlinedButtonStyles } from './button-style';
export var BaseButton = function BaseButton(props) {
  return ___EmotionJSX("button", _extends({
    css: baseButtonStyle
  }, props));
};
export function geButtonVariationStyle(variation) {
  switch (variation) {
    default:
    case 'primary':
      return primaryButtonStyles;

    case 'secondary':
      return secondaryButtonStyles;

    case 'outlined':
      return outlinedButtonStyles;
  }
}