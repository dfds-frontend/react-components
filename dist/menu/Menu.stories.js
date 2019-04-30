import _css from "@emotion/css";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { storiesOf } from '@storybook/react';
import Menu from './Menu';
var stories = storiesOf('UI|Menu', module);

var _ref = process.env.NODE_ENV === "production" ? {
  name: "1lfg5n9",
  styles: "margin:10px;width:200px;"
} : {
  name: "1lfg5n9",
  styles: "margin:10px;width:200px;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tZW51L01lbnUuc3Rvcmllcy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVWMiLCJmaWxlIjoiLi4vLi4vc3JjL21lbnUvTWVudS5zdG9yaWVzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgc3Rvcmllc09mIH0gZnJvbSAnQHN0b3J5Ym9vay9yZWFjdCdcclxuaW1wb3J0IE1lbnUgZnJvbSAnLi9NZW51J1xyXG5pbXBvcnQgY3NzIGZyb20gJ0BlbW90aW9uL2NzcydcclxuXHJcbmNvbnN0IHN0b3JpZXMgPSBzdG9yaWVzT2YoJ1VJfE1lbnUnLCBtb2R1bGUpXHJcblxyXG5zdG9yaWVzLmFkZCgnTWVudScsICgpID0+IChcclxuICA8PlxyXG4gICAgPE1lbnVcclxuICAgICAgY3NzPXtjc3NgXHJcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgYH1cclxuICAgID5cclxuICAgICAgPE1lbnUuSGVhZGVyPkhlYWRlcjwvTWVudS5IZWFkZXI+XHJcbiAgICAgIDxNZW51LlNlcGFyYXRvciAvPlxyXG4gICAgICA8TWVudS5MaW5rIHVybD1cIiNcIj5NZW51IGxpbmsgMTwvTWVudS5MaW5rPlxyXG4gICAgICA8TWVudS5MaW5rIHVybD1cIiNcIj5NZW51IGxpbmsgMjwvTWVudS5MaW5rPlxyXG4gICAgICA8TWVudS5MaW5rIHVybD1cIiNcIj5NZW51IGxpbmsgMzwvTWVudS5MaW5rPlxyXG4gICAgICA8TWVudS5MaW5rIHVybD1cIiNcIj5NZW51IGxpbmsgNDwvTWVudS5MaW5rPlxyXG4gICAgPC9NZW51PlxyXG4gIDwvPlxyXG4pKVxyXG4iXX0= */"
};

stories.add('Menu', function () {
  return ___EmotionJSX(React.Fragment, null, ___EmotionJSX(Menu, {
    css: _ref
  }, ___EmotionJSX(Menu.Header, null, "Header"), ___EmotionJSX(Menu.Separator, null), ___EmotionJSX(Menu.Link, {
    url: "#"
  }, "Menu link 1"), ___EmotionJSX(Menu.Link, {
    url: "#"
  }, "Menu link 2"), ___EmotionJSX(Menu.Link, {
    url: "#"
  }, "Menu link 3"), ___EmotionJSX(Menu.Link, {
    url: "#"
  }, "Menu link 4")));
});