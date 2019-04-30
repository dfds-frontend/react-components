import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
export var HelloWorld = function HelloWorld(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return ___EmotionJSX("div", {
    className: className
  }, "Hello world, this is my children: ", children);
};