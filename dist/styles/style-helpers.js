import { css } from '@emotion/core';
/**
 * This will hide the focus indicator if the element receives focus via the mouse,
 * but it will still show up on keyboard focus.
 * > https://github.com/WICG/focus-visible
 */

export var focusOutline = function focusOutline(outlineColor) {
  return (
    /*#__PURE__*/
    css("&:focus{outline:1px dashed ", outlineColor || 'currentColor', ";}.js-focus-visible &:focus:not([data-focus-visible-added]){outline:none;}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZXMvc3R5bGUtaGVscGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPMEQiLCJmaWxlIjoiLi4vLi4vc3JjL3N0eWxlcy9zdHlsZS1oZWxwZXJzLnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSdcclxuXHJcbi8qKlxyXG4gKiBUaGlzIHdpbGwgaGlkZSB0aGUgZm9jdXMgaW5kaWNhdG9yIGlmIHRoZSBlbGVtZW50IHJlY2VpdmVzIGZvY3VzIHZpYSB0aGUgbW91c2UsXHJcbiAqIGJ1dCBpdCB3aWxsIHN0aWxsIHNob3cgdXAgb24ga2V5Ym9hcmQgZm9jdXMuXHJcbiAqID4gaHR0cHM6Ly9naXRodWIuY29tL1dJQ0cvZm9jdXMtdmlzaWJsZVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGZvY3VzT3V0bGluZSA9IChvdXRsaW5lQ29sb3I/OiBzdHJpbmcpID0+IGNzc2BcclxuICAmOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IDFweCBkYXNoZWQgJHtvdXRsaW5lQ29sb3IgfHwgJ2N1cnJlbnRDb2xvcid9O1xyXG4gIH1cclxuICAuanMtZm9jdXMtdmlzaWJsZSAmIDpmb2N1czpub3QoW2RhdGEtZm9jdXMtdmlzaWJsZS1hZGRlZF0pIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG5gXHJcbiJdfQ== */"))
  );
};