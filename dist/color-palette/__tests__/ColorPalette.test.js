import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { render } from 'react-testing-library';
import ColorPalette from '../ColorPalette';
describe('<ColorPalette />', function () {
  it('should render without errors', function () {
    render(___EmotionJSX(ColorPalette, null));
  });
});