import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { storiesOf } from '@storybook/react';
var stories = storiesOf('Typography', module);
stories.add('Typography', function () {
  return ___EmotionJSX(React.Fragment, null, ___EmotionJSX("h1", null, "Hero headline"), ___EmotionJSX("h2", null, "Section header"));
});