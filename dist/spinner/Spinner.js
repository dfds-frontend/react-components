import _styled from "@emotion/styled-base";
import { jsx as ___EmotionJSX } from "@emotion/core";

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  from {\n    opacity: 0.1;\n  }\n  to {\n    opacity: 1;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React from 'react';
import { keyframes } from '@emotion/core';
import { SvgAnimatedSpinner } from '@dfds-shared/icons';
var spin = keyframes(_templateObject());
var fade = keyframes(_templateObject2());

var InstantSpinner =
/*#__PURE__*/
_styled(SvgAnimatedSpinner, {
  target: "eaid6y0"
})("width:", function (p) {
  return p.size || '1.5em';
}, ";height:", function (p) {
  return p.size || '1.5em';
}, ";path{animation:", spin, " 0.8s steps(8) infinite;}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zcGlubmVyL1NwaW5uZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCb0UiLCJmaWxlIjoiLi4vLi4vc3JjL3NwaW5uZXIvU3Bpbm5lci50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xyXG5pbXBvcnQgeyBTdmdBbmltYXRlZFNwaW5uZXIgfSBmcm9tICdAZGZkcy1zaGFyZWQvaWNvbnMnXHJcblxyXG50eXBlIFByb3BzID0geyBpbnN0YW50PzogYm9vbGVhbjsgc2l6ZT86IHN0cmluZzsgY2xhc3NOYW1lPzogc3RyaW5nIH1cclxuXHJcbmNvbnN0IHNwaW4gPSBrZXlmcmFtZXNgXHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAwLjE7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCBmYWRlID0ga2V5ZnJhbWVzYFxyXG4gIGZyb20ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIGBcclxuXHJcbmNvbnN0IEluc3RhbnRTcGlubmVyID0gc3R5bGVkKFN2Z0FuaW1hdGVkU3Bpbm5lcik8eyBzaXplPzogc3RyaW5nIH0+YFxyXG4gIHdpZHRoOiAke3AgPT4gcC5zaXplIHx8ICcxLjVlbSd9O1xyXG4gIGhlaWdodDogJHtwID0+IHAuc2l6ZSB8fCAnMS41ZW0nfTtcclxuXHJcbiAgcGF0aCB7XHJcbiAgICBhbmltYXRpb246ICR7c3Bpbn0gMC44cyBzdGVwcyg4KSBpbmZpbml0ZTtcclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IEZhZGVkU3Bpbm5lciA9IHN0eWxlZChJbnN0YW50U3Bpbm5lcilgXHJcbiAgb3BhY2l0eTogMDtcclxuICBhbmltYXRpb246ICR7ZmFkZX0gMnMgZWFzZSAwLjZzIGZvcndhcmRzO1xyXG5gXHJcblxyXG5mdW5jdGlvbiBTcGlubmVyKHsgaW5zdGFudCwgc2l6ZSwgY2xhc3NOYW1lIH06IFByb3BzKSB7XHJcbiAgY29uc3QgU3ZnID0gaW5zdGFudCA/IEluc3RhbnRTcGlubmVyIDogRmFkZWRTcGlubmVyXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxyXG4gICAgICA8U3ZnIHdpZHRoPXszMn0gaGVpZ2h0PXszMn0gdmlld0JveD1cIjAgMCAzMiAzMlwiIHNpemU9e3NpemV9IC8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcblNwaW5uZXIuZGlzcGxheU5hbWUgPSAnU3Bpbm5lcidcclxuXHJcbmV4cG9ydCBjb25zdCBDZW50ZXJlZFNwaW5uZXIgPSBzdHlsZWQoU3Bpbm5lcilgXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3Bpbm5lclxyXG4iXX0= */"));

var FadedSpinner =
/*#__PURE__*/
_styled(InstantSpinner, {
  target: "eaid6y1"
})("opacity:0;animation:", fade, " 2s ease 0.6s forwards;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zcGlubmVyL1NwaW5uZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1DMkMiLCJmaWxlIjoiLi4vLi4vc3JjL3NwaW5uZXIvU3Bpbm5lci50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xyXG5pbXBvcnQgeyBTdmdBbmltYXRlZFNwaW5uZXIgfSBmcm9tICdAZGZkcy1zaGFyZWQvaWNvbnMnXHJcblxyXG50eXBlIFByb3BzID0geyBpbnN0YW50PzogYm9vbGVhbjsgc2l6ZT86IHN0cmluZzsgY2xhc3NOYW1lPzogc3RyaW5nIH1cclxuXHJcbmNvbnN0IHNwaW4gPSBrZXlmcmFtZXNgXHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAwLjE7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCBmYWRlID0ga2V5ZnJhbWVzYFxyXG4gIGZyb20ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIGBcclxuXHJcbmNvbnN0IEluc3RhbnRTcGlubmVyID0gc3R5bGVkKFN2Z0FuaW1hdGVkU3Bpbm5lcik8eyBzaXplPzogc3RyaW5nIH0+YFxyXG4gIHdpZHRoOiAke3AgPT4gcC5zaXplIHx8ICcxLjVlbSd9O1xyXG4gIGhlaWdodDogJHtwID0+IHAuc2l6ZSB8fCAnMS41ZW0nfTtcclxuXHJcbiAgcGF0aCB7XHJcbiAgICBhbmltYXRpb246ICR7c3Bpbn0gMC44cyBzdGVwcyg4KSBpbmZpbml0ZTtcclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IEZhZGVkU3Bpbm5lciA9IHN0eWxlZChJbnN0YW50U3Bpbm5lcilgXHJcbiAgb3BhY2l0eTogMDtcclxuICBhbmltYXRpb246ICR7ZmFkZX0gMnMgZWFzZSAwLjZzIGZvcndhcmRzO1xyXG5gXHJcblxyXG5mdW5jdGlvbiBTcGlubmVyKHsgaW5zdGFudCwgc2l6ZSwgY2xhc3NOYW1lIH06IFByb3BzKSB7XHJcbiAgY29uc3QgU3ZnID0gaW5zdGFudCA/IEluc3RhbnRTcGlubmVyIDogRmFkZWRTcGlubmVyXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxyXG4gICAgICA8U3ZnIHdpZHRoPXszMn0gaGVpZ2h0PXszMn0gdmlld0JveD1cIjAgMCAzMiAzMlwiIHNpemU9e3NpemV9IC8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcblNwaW5uZXIuZGlzcGxheU5hbWUgPSAnU3Bpbm5lcidcclxuXHJcbmV4cG9ydCBjb25zdCBDZW50ZXJlZFNwaW5uZXIgPSBzdHlsZWQoU3Bpbm5lcilgXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3Bpbm5lclxyXG4iXX0= */"));

function Spinner(_ref) {
  var instant = _ref.instant,
      size = _ref.size,
      className = _ref.className;
  var Svg = instant ? InstantSpinner : FadedSpinner;
  return ___EmotionJSX("div", {
    className: className
  }, ___EmotionJSX(Svg, {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    size: size
  }));
}

Spinner.displayName = 'Spinner';
export var CenteredSpinner =
/*#__PURE__*/
_styled(Spinner, {
  target: "eaid6y2"
})(process.env.NODE_ENV === "production" ? {
  name: "1e53tp2",
  styles: "position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);"
} : {
  name: "1e53tp2",
  styles: "position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zcGlubmVyL1NwaW5uZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1EOEMiLCJmaWxlIjoiLi4vLi4vc3JjL3NwaW5uZXIvU3Bpbm5lci50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xyXG5pbXBvcnQgeyBTdmdBbmltYXRlZFNwaW5uZXIgfSBmcm9tICdAZGZkcy1zaGFyZWQvaWNvbnMnXHJcblxyXG50eXBlIFByb3BzID0geyBpbnN0YW50PzogYm9vbGVhbjsgc2l6ZT86IHN0cmluZzsgY2xhc3NOYW1lPzogc3RyaW5nIH1cclxuXHJcbmNvbnN0IHNwaW4gPSBrZXlmcmFtZXNgXHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAwLjE7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCBmYWRlID0ga2V5ZnJhbWVzYFxyXG4gIGZyb20ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIGBcclxuXHJcbmNvbnN0IEluc3RhbnRTcGlubmVyID0gc3R5bGVkKFN2Z0FuaW1hdGVkU3Bpbm5lcik8eyBzaXplPzogc3RyaW5nIH0+YFxyXG4gIHdpZHRoOiAke3AgPT4gcC5zaXplIHx8ICcxLjVlbSd9O1xyXG4gIGhlaWdodDogJHtwID0+IHAuc2l6ZSB8fCAnMS41ZW0nfTtcclxuXHJcbiAgcGF0aCB7XHJcbiAgICBhbmltYXRpb246ICR7c3Bpbn0gMC44cyBzdGVwcyg4KSBpbmZpbml0ZTtcclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IEZhZGVkU3Bpbm5lciA9IHN0eWxlZChJbnN0YW50U3Bpbm5lcilgXHJcbiAgb3BhY2l0eTogMDtcclxuICBhbmltYXRpb246ICR7ZmFkZX0gMnMgZWFzZSAwLjZzIGZvcndhcmRzO1xyXG5gXHJcblxyXG5mdW5jdGlvbiBTcGlubmVyKHsgaW5zdGFudCwgc2l6ZSwgY2xhc3NOYW1lIH06IFByb3BzKSB7XHJcbiAgY29uc3QgU3ZnID0gaW5zdGFudCA/IEluc3RhbnRTcGlubmVyIDogRmFkZWRTcGlubmVyXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxyXG4gICAgICA8U3ZnIHdpZHRoPXszMn0gaGVpZ2h0PXszMn0gdmlld0JveD1cIjAgMCAzMiAzMlwiIHNpemU9e3NpemV9IC8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcblNwaW5uZXIuZGlzcGxheU5hbWUgPSAnU3Bpbm5lcidcclxuXHJcbmV4cG9ydCBjb25zdCBDZW50ZXJlZFNwaW5uZXIgPSBzdHlsZWQoU3Bpbm5lcilgXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3Bpbm5lclxyXG4iXX0= */"
});
export default Spinner;