import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { TextInput } from './TextInput';
var stories = storiesOf('Forms|TextInput', module);
stories.addDecorator(withKnobs);
stories.add('TextInput', function () {
  return ___EmotionJSX(React.Fragment, null, ___EmotionJSX(TextInput, {
    type: "text",
    name: "test"
  }));
});