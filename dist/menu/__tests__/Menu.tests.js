import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { render } from 'react-testing-library';
import Menu from '../Menu';
describe('<Menu />', function () {
  it('should render without errors', function () {
    render(___EmotionJSX(Menu, null));
  });
});