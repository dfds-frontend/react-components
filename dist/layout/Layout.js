import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import regular from '@dfds-shared/fonts/fonts/DFDS-Regular.woff';
import regular2 from '@dfds-shared/fonts/fonts/DFDS-Regular.woff2';
import italic from '@dfds-shared/fonts/fonts/DFDS-Italic.woff';
import italic2 from '@dfds-shared/fonts/fonts/DFDS-Italic.woff2';
import bold from '@dfds-shared/fonts/fonts/DFDS-Bold.woff';
import bold2 from '@dfds-shared/fonts/fonts/DFDS-Bold.woff2';
import light from '@dfds-shared/fonts/fonts/DFDS-Light.woff';
import light2 from '@dfds-shared/fonts/fonts/DFDS-Light.woff2';
import { Global, css } from '@emotion/core';
var DFDS_FONTS = [{
  fontFamily: 'DFDS',
  woff: regular,
  woff2: regular2,
  fontWeight: 400
}, {
  fontFamily: 'DFDS',
  woff: italic,
  woff2: italic2,
  fontWeight: 400,
  fontStyle: 'italic'
}, {
  fontFamily: 'DFDS',
  woff: bold,
  woff2: bold2,
  fontWeight: 700
}, {
  fontFamily: 'DFDS',
  woff: light,
  woff2: light2,
  fontWeight: 100
}];

function fontFace(_ref) {
  var fontFamily = _ref.fontFamily,
      woff = _ref.woff,
      woff2 = _ref.woff2,
      _ref$fontWeight = _ref.fontWeight,
      fontWeight = _ref$fontWeight === void 0 ? 400 : _ref$fontWeight,
      _ref$fontStyle = _ref.fontStyle,
      fontStyle = _ref$fontStyle === void 0 ? 'normal' : _ref$fontStyle,
      _ref$fontDisplay = _ref.fontDisplay,
      fontDisplay = _ref$fontDisplay === void 0 ? 'fallback' : _ref$fontDisplay;
  return "\n  @font-face {\n    font-family: ".concat(fontFamily, ";\n    src:url(").concat(woff2, ") format('woff2'),\n      url(").concat(woff, ") format('woff');\n    font-weight: ").concat(fontWeight, ";\n    font-style: ").concat(fontStyle, ";\n    font-display: ").concat(fontDisplay, ";\n  }");
}

export var Layout = function Layout() {
  var sty =
  /*#__PURE__*/
  css(DFDS_FONTS.reduce(function (prev, cur) {
    return prev += fontFace(cur);
  }, ''), " *{font-family:DFDS;}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sYXlvdXQvTGF5b3V0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRGlCIiwiZmlsZSI6Ii4uLy4uL3NyYy9sYXlvdXQvTGF5b3V0LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCByZWd1bGFyIGZyb20gJ0BkZmRzLXNoYXJlZC9mb250cy9mb250cy9ERkRTLVJlZ3VsYXIud29mZidcclxuaW1wb3J0IHJlZ3VsYXIyIGZyb20gJ0BkZmRzLXNoYXJlZC9mb250cy9mb250cy9ERkRTLVJlZ3VsYXIud29mZjInXHJcbmltcG9ydCBpdGFsaWMgZnJvbSAnQGRmZHMtc2hhcmVkL2ZvbnRzL2ZvbnRzL0RGRFMtSXRhbGljLndvZmYnXHJcbmltcG9ydCBpdGFsaWMyIGZyb20gJ0BkZmRzLXNoYXJlZC9mb250cy9mb250cy9ERkRTLUl0YWxpYy53b2ZmMidcclxuaW1wb3J0IGJvbGQgZnJvbSAnQGRmZHMtc2hhcmVkL2ZvbnRzL2ZvbnRzL0RGRFMtQm9sZC53b2ZmJ1xyXG5pbXBvcnQgYm9sZDIgZnJvbSAnQGRmZHMtc2hhcmVkL2ZvbnRzL2ZvbnRzL0RGRFMtQm9sZC53b2ZmMidcclxuaW1wb3J0IGxpZ2h0IGZyb20gJ0BkZmRzLXNoYXJlZC9mb250cy9mb250cy9ERkRTLUxpZ2h0LndvZmYnXHJcbmltcG9ydCBsaWdodDIgZnJvbSAnQGRmZHMtc2hhcmVkL2ZvbnRzL2ZvbnRzL0RGRFMtTGlnaHQud29mZjInXHJcblxyXG5pbXBvcnQgeyBHbG9iYWwsIGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXHJcblxyXG50eXBlIEZvbnREZWZpbml0aW9uID0ge1xyXG4gIGZvbnRGYW1pbHk6IHN0cmluZ1xyXG4gIHdvZmY6IHN0cmluZ1xyXG4gIHdvZmYyOiBzdHJpbmdcclxuICBmb250V2VpZ2h0PzogMTAwIHwgMjAwIHwgMzAwIHwgNDAwIHwgNTAwIHwgNjAwIHwgNzAwIHwgODAwXHJcbiAgZm9udFN0eWxlPzogJ25vcm1hbCcgfCAnaXRhbGljJyB8ICdvYmxpcXVlJ1xyXG4gIGZvbnREaXNwbGF5PzogJ2F1dG8nIHwgJ2Jsb2NrJyB8ICdzd2FwJyB8ICdmYWxsYmFjaycgfCAnb3B0aW9uYWwnXHJcbn1cclxuXHJcbmNvbnN0IERGRFNfRk9OVFM6IEZvbnREZWZpbml0aW9uW10gPSBbXHJcbiAgeyBmb250RmFtaWx5OiAnREZEUycsIHdvZmY6IHJlZ3VsYXIsIHdvZmYyOiByZWd1bGFyMiwgZm9udFdlaWdodDogNDAwIH0sXHJcbiAgeyBmb250RmFtaWx5OiAnREZEUycsIHdvZmY6IGl0YWxpYywgd29mZjI6IGl0YWxpYzIsIGZvbnRXZWlnaHQ6IDQwMCwgZm9udFN0eWxlOiAnaXRhbGljJyB9LFxyXG4gIHsgZm9udEZhbWlseTogJ0RGRFMnLCB3b2ZmOiBib2xkLCB3b2ZmMjogYm9sZDIsIGZvbnRXZWlnaHQ6IDcwMCB9LFxyXG4gIHsgZm9udEZhbWlseTogJ0RGRFMnLCB3b2ZmOiBsaWdodCwgd29mZjI6IGxpZ2h0MiwgZm9udFdlaWdodDogMTAwIH0sXHJcbl1cclxuXHJcbmZ1bmN0aW9uIGZvbnRGYWNlKHtcclxuICBmb250RmFtaWx5LFxyXG4gIHdvZmYsXHJcbiAgd29mZjIsXHJcbiAgZm9udFdlaWdodCA9IDQwMCxcclxuICBmb250U3R5bGUgPSAnbm9ybWFsJyxcclxuICBmb250RGlzcGxheSA9ICdmYWxsYmFjaycsXHJcbn06IEZvbnREZWZpbml0aW9uKSB7XHJcbiAgcmV0dXJuIGBcclxuICBAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAke2ZvbnRGYW1pbHl9O1xyXG4gICAgc3JjOnVybCgke3dvZmYyfSkgZm9ybWF0KCd3b2ZmMicpLFxyXG4gICAgICB1cmwoJHt3b2ZmfSkgZm9ybWF0KCd3b2ZmJyk7XHJcbiAgICBmb250LXdlaWdodDogJHtmb250V2VpZ2h0fTtcclxuICAgIGZvbnQtc3R5bGU6ICR7Zm9udFN0eWxlfTtcclxuICAgIGZvbnQtZGlzcGxheTogJHtmb250RGlzcGxheX07XHJcbiAgfWBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IExheW91dCA9ICgpID0+IHtcclxuICBjb25zdCBzdHkgPSBjc3NgXHJcbiAgICAke0RGRFNfRk9OVFMucmVkdWNlKChwcmV2LCBjdXIpID0+IChwcmV2ICs9IGZvbnRGYWNlKGN1cikpLCAnJyl9XHJcblxyXG4gICAgKiB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBERkRTO1xyXG4gICAgfVxyXG4gIGBcclxuICByZXR1cm4gPEdsb2JhbCBzdHlsZXM9e3N0eX0gLz5cclxufVxyXG4iXX0= */"));
  return ___EmotionJSX(Global, {
    styles: sty
  });
};