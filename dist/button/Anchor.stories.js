import _css from "@emotion/css";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { storiesOf } from '@storybook/react';
import Anchor from './Anchor';
var stories = storiesOf('UI|Buttons', module);
var styles = process.env.NODE_ENV === "production" ? {
  name: "7hkcry",
  styles: "margin:0.4rem;min-width:16rem;"
} : {
  name: "7hkcry",
  styles: "margin:0.4rem;min-width:16rem;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9idXR0b24vQW5jaG9yLnN0b3JpZXMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9rQiIsImZpbGUiOiIuLi8uLi9zcmMvYnV0dG9uL0FuY2hvci5zdG9yaWVzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgc3Rvcmllc09mIH0gZnJvbSAnQHN0b3J5Ym9vay9yZWFjdCdcclxuaW1wb3J0IEFuY2hvciBmcm9tICcuL0FuY2hvcidcclxuaW1wb3J0IGNzcyBmcm9tICdAZW1vdGlvbi9jc3MnXHJcblxyXG5jb25zdCBzdG9yaWVzID0gc3Rvcmllc09mKCdVSXxCdXR0b25zJywgbW9kdWxlKVxyXG5cclxuY29uc3Qgc3R5bGVzID0gY3NzYFxyXG4gIG1hcmdpbjogMC40cmVtO1xyXG4gIG1pbi13aWR0aDogMTZyZW07XHJcbmBcclxuc3Rvcmllcy5hZGQoJ0FuY2hvcnMnLCAoKSA9PiAoXHJcbiAgPD5cclxuICAgIDxBbmNob3IgdmFyaWF0aW9uPVwicHJpbWFyeVwiIGNzcz17c3R5bGVzfT5cclxuICAgICAgUHJpbWFyeVxyXG4gICAgPC9BbmNob3I+XHJcbiAgICA8YnIgLz5cclxuICAgIDxBbmNob3IgdmFyaWF0aW9uPVwic2Vjb25kYXJ5XCIgY3NzPXtzdHlsZXN9PlxyXG4gICAgICBTZWNvbmRhcnlcclxuICAgIDwvQW5jaG9yPlxyXG4gICAgPGJyIC8+XHJcbiAgPC8+XHJcbikpXHJcbiJdfQ== */"
};
stories.add('Anchors', function () {
  return ___EmotionJSX(React.Fragment, null, ___EmotionJSX(Anchor, {
    variation: "primary",
    css: styles
  }, "Primary"), ___EmotionJSX("br", null), ___EmotionJSX(Anchor, {
    variation: "secondary",
    css: styles
  }, "Secondary"), ___EmotionJSX("br", null));
});