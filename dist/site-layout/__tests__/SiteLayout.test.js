import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { render } from 'react-testing-library';
import SiteLayout from '../SiteLayout';
describe('<SiteLayout />', function () {
  it('should render without errors', function () {
    render(___EmotionJSX(SiteLayout.Grid, null, ___EmotionJSX(SiteLayout.Header, null, "Header"), ___EmotionJSX(SiteLayout.Main, null, "Main"), ___EmotionJSX(SiteLayout.Footer, null, "Footer")));
  });
});