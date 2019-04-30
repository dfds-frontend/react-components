// replacement for the rem function from polished
export var rem = function rem(targetPixelValue) {
  var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 16;
  return targetPixelValue / base + 'rem';
};