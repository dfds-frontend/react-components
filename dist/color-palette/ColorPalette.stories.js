import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Layout } from '../layout/Layout';
import ColorPalette from './ColorPalette';
var stories = storiesOf('ColorPalette', module);
stories.add('ColorPalette', function () {
  return ___EmotionJSX(React.Fragment, null, ___EmotionJSX(Layout, null), ___EmotionJSX(ColorPalette, null));
});