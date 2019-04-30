import _styled from "@emotion/styled-base";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { getIntentColor } from '../common/intent';

var StyledButton = _styled("button", {
  target: "e1dy5mbp0"
})("background-color:", function (props) {
  return getIntentColor(props.intent).primary;
}, ";border:0;padding:0.8rem 2rem;color:white;text-transform:uppercase;font-size:1.2rem;cursor:pointer;:hover{background-color:", function (props) {
  return getIntentColor(props.intent).hover;
}, ";}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9idXR0b24vT2xkQnV0dG9uLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVMEMiLCJmaWxlIjoiLi4vLi4vc3JjL2J1dHRvbi9PbGRCdXR0b24udHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcclxuaW1wb3J0IHsgSW50ZW50LCBnZXRJbnRlbnRDb2xvciB9IGZyb20gJy4uL2NvbW1vbi9pbnRlbnQnXHJcblxyXG5pbnRlcmZhY2UgSVByb3BzIHtcclxuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZVxyXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xyXG4gIGludGVudD86IEludGVudFxyXG59XHJcblxyXG5jb25zdCBTdHlsZWRCdXR0b24gPSBzdHlsZWQuYnV0dG9uPElQcm9wcz5gXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBnZXRJbnRlbnRDb2xvcihwcm9wcy5pbnRlbnQpLnByaW1hcnl9O1xyXG4gIGJvcmRlcjogMDtcclxuICBwYWRkaW5nOiAwLjhyZW0gMnJlbTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gZ2V0SW50ZW50Q29sb3IocHJvcHMuaW50ZW50KS5ob3Zlcn07XHJcbiAgfVxyXG5gXHJcbmV4cG9ydCBjb25zdCBCdXR0b24gPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBpbnRlbnQgfTogSVByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTdHlsZWRCdXR0b24gY2xhc3NOYW1lPXtjbGFzc05hbWV9IGludGVudD17aW50ZW50fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9TdHlsZWRCdXR0b24+XHJcbiAgKVxyXG59XHJcbiJdfQ== */"));

export var Button = function Button(_ref) {
  var children = _ref.children,
      className = _ref.className,
      intent = _ref.intent;
  return ___EmotionJSX(StyledButton, {
    className: className,
    intent: intent
  }, children);
};