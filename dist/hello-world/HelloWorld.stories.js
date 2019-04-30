import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { storiesOf } from '@storybook/react';
import { HelloWorld } from './HelloWorld';
import { css } from '@emotion/core';
var stories = storiesOf('HelloWorld', module);
var styles = process.env.NODE_ENV === "production" ? {
  name: "1vph6sm",
  styles: "border:10px solid green;"
} : {
  name: "1vph6sm",
  styles: "border:10px solid green;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWxsby13b3JsZC9IZWxsb1dvcmxkLnN0b3JpZXMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9rQiIsImZpbGUiOiIuLi8uLi9zcmMvaGVsbG8td29ybGQvSGVsbG9Xb3JsZC5zdG9yaWVzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgc3Rvcmllc09mIH0gZnJvbSAnQHN0b3J5Ym9vay9yZWFjdCdcclxuaW1wb3J0IHsgSGVsbG9Xb3JsZCB9IGZyb20gJy4vSGVsbG9Xb3JsZCdcclxuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSdcclxuXHJcbmNvbnN0IHN0b3JpZXMgPSBzdG9yaWVzT2YoJ0hlbGxvV29ybGQnLCBtb2R1bGUpXHJcblxyXG5jb25zdCBzdHlsZXMgPSBjc3NgXHJcbiAgYm9yZGVyOiAxMHB4IHNvbGlkIGdyZWVuO1xyXG5gXHJcblxyXG5zdG9yaWVzLmFkZCgnSGVsbG9Xb3JsZCcsICgpID0+IChcclxuICA8PlxyXG4gICAgPEhlbGxvV29ybGQgY3NzPXtzdHlsZXN9IC8+XHJcbiAgPC8+XHJcbikpXHJcbiJdfQ== */"
};
stories.add('HelloWorld', function () {
  return ___EmotionJSX(React.Fragment, null, ___EmotionJSX(HelloWorld, {
    css: styles
  }));
});