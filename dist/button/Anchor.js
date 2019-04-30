import { jsx as ___EmotionJSX } from "@emotion/core";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import { css } from '@emotion/core';
import { palette } from '@dfds-shared/colors';
import { baseButtonStyle } from './button-style';
import { geButtonVariationStyle } from './BaseButton';
var linkStyle =
/*#__PURE__*/
css("color:", palette.linkBlue.primary, ";&:hover{color:", palette.linkBlue.hover, ";}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9idXR0b24vQW5jaG9yLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNcUIiLCJmaWxlIjoiLi4vLi4vc3JjL2J1dHRvbi9BbmNob3IudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXHJcbmltcG9ydCB7IHBhbGV0dGUgfSBmcm9tICdAZGZkcy1zaGFyZWQvY29sb3JzJ1xyXG5pbXBvcnQgeyBiYXNlQnV0dG9uU3R5bGUgfSBmcm9tICcuL2J1dHRvbi1zdHlsZSdcclxuaW1wb3J0IHsgQnV0dG9uVmFyaWF0aW9uUHJvcHMsIGdlQnV0dG9uVmFyaWF0aW9uU3R5bGUgfSBmcm9tICcuL0Jhc2VCdXR0b24nXHJcblxyXG5jb25zdCBsaW5rU3R5bGUgPSBjc3NgXHJcbiAgY29sb3I6ICR7cGFsZXR0ZS5saW5rQmx1ZS5wcmltYXJ5fTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBjb2xvcjogJHtwYWxldHRlLmxpbmtCbHVlLmhvdmVyfTtcclxuICB9XHJcbmBcclxudHlwZSBBbmNob3JQcm9wcyA9IFJlYWN0LlByb3BzV2l0aG91dFJlZjxKU1guSW50cmluc2ljRWxlbWVudHNbJ2EnXT4gJiBCdXR0b25WYXJpYXRpb25Qcm9wc1xyXG5cclxuY29uc3QgQW5jaG9yID0gKHByb3BzOiBBbmNob3JQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHZhcmlhdGlvblN0eWxlID0gZ2VCdXR0b25WYXJpYXRpb25TdHlsZShwcm9wcy52YXJpYXRpb24pXHJcbiAgY29uc3Qgc3R5bGVzID0gW2Jhc2VCdXR0b25TdHlsZSwgbGlua1N0eWxlLCB2YXJpYXRpb25TdHlsZV1cclxuICBpZiAoJ2hyZWYnIGluIHByb3BzICYmIHByb3BzLmhyZWYpIHtcclxuICAgIHJldHVybiA8YSBjc3M9e3N0eWxlc30gey4uLnByb3BzfSAvPlxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gPGEgaHJlZj1cIiNcIiBjc3M9e3N0eWxlc30gey4uLnByb3BzfSAvPlxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQW5jaG9yXHJcbiJdfQ== */"));

var Anchor = function Anchor(props) {
  var variationStyle = geButtonVariationStyle(props.variation);
  var styles = [baseButtonStyle, linkStyle, variationStyle];

  if ('href' in props && props.href) {
    return ___EmotionJSX("a", _extends({
      css: styles
    }, props));
  } else {
    return ___EmotionJSX("a", _extends({
      href: "#",
      css: styles
    }, props));
  }
};

export default Anchor;