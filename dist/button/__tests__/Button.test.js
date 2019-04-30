import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { render } from 'react-testing-library';
import Button from '../Button';
describe('<Button />', function () {
  it('should render without errors', function () {
    render(___EmotionJSX(Button, null, "Click me"));
  });
  it('should render title attribute with content if it a string', function () {
    render(___EmotionJSX(Button, null, "Click me"));
  });
});