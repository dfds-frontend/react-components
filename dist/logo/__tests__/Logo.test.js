import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { render } from 'react-testing-library';
import Logo from '../Logo';
describe('<Logo />', function () {
  it('should render without errors', function () {
    render(___EmotionJSX(Logo, null));
  });
});