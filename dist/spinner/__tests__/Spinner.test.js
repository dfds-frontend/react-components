import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { render } from 'react-testing-library';
import Spinner from '../Spinner';
describe('<Spinner />', function () {
  it('should render without errors', function () {
    render(___EmotionJSX(Spinner, null));
  });
});