// breakpoint used in DFDS-DIRECT
var breakPoints = {
  xl: 1260,
  lg: 992,
  md: 768,
  sm: 576,
  xs: 575 // TODO: get the types right
  // Code inspired by emotion-media-query

};

function getSizeFromBreakpoint(breakpointValue) {
  var breakpoints = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (breakpoints[breakpointValue]) {
    return breakpoints[breakpointValue] + 'px';
  } else if (parseInt(breakpointValue, 10)) {
    return breakpointValue + 'px';
  } else {
    console.error('emotion-media-query: No valid breakpoint or size specified for media.');
    return '0';
  }
}

export function generateMedia(breakpoints) {
  var lessThan = function lessThan(breakpoint) {
    return "\n    @media (max-width: ".concat(getSizeFromBreakpoint(breakpoint, breakpoints), ")");
  };

  var greaterThan = function greaterThan(breakpoint) {
    return "\n    @media (min-width: ".concat(getSizeFromBreakpoint(breakpoint, breakpoints), ")");
  };

  var between = function between(firstBreakpoint, secondBreakpoint) {
    return "\n    @media (min-width: ".concat(getSizeFromBreakpoint(firstBreakpoint, breakpoints), ") and (max-width: ").concat(getSizeFromBreakpoint(secondBreakpoint, breakpoints), ")");
  };

  return {
    lt: lessThan,
    gt: greaterThan,
    bt: between
  };
}
export var media = generateMedia(breakPoints);
export default media;