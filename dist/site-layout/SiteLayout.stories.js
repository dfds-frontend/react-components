import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { storiesOf } from '@storybook/react';
import { BurgerMenu, EnGlobal, Account } from '@dfds-shared/icons';
import SiteLayout from './SiteLayout';
import { NavBar, NavBarItem, NavBarIcon } from '../nav-bar';
import { Footer } from '../footer';
var stories = storiesOf('UI|SiteLayout', module);

var ExampleNavBar = function ExampleNavBar() {
  return ___EmotionJSX(React.Fragment, null, ___EmotionJSX(NavBar, {
    href: "/"
  }, ___EmotionJSX(NavBarItem, {
    href: "#"
  }, "DFDS Platform"), ___EmotionJSX(NavBarItem, {
    href: "#"
  }, "Rest of DFDS"), ___EmotionJSX(NavBarIcon, {
    href: "#",
    alignment: "right"
  }, ___EmotionJSX(BurgerMenu, null)), ___EmotionJSX(NavBarIcon, {
    href: "#"
  }, ___EmotionJSX(Account, null)), ___EmotionJSX(NavBarIcon, {
    href: "#"
  }, ___EmotionJSX(EnGlobal, null))));
};

stories.add('SiteLayout', function () {
  return ___EmotionJSX(React.Fragment, null, ___EmotionJSX(SiteLayout.Grid, null, ___EmotionJSX(SiteLayout.Header, null, ___EmotionJSX(ExampleNavBar, null)), ___EmotionJSX(SiteLayout.Main, null, ___EmotionJSX("h2", null, "Content"), ___EmotionJSX("p", null, "Main content")), ___EmotionJSX(SiteLayout.Footer, null, ___EmotionJSX(Footer, null))));
});