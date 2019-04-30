import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { render } from 'react-testing-library';
import NavBar, { NavBarItem } from '../NavBar';
describe('<NavBar />', function () {
  it('should render without errors', function () {
    render(___EmotionJSX(NavBar, null));
  });
  it('should render children', function () {
    var _render = render(___EmotionJSX(NavBar, null, ___EmotionJSX(NavBarItem, {
      href: "#"
    }, "NavBarItem 1"), ___EmotionJSX(NavBarItem, {
      href: "#"
    }, "NavBarItem 2"))),
        container = _render.container;

    expect(container.querySelectorAll('a').length).toBe(3);
  });
  it('should render logo', function () {
    var _render2 = render(___EmotionJSX(NavBar, null)),
        container = _render2.container;

    expect(container.querySelectorAll('svg').length).toBe(1);
  });
  it('should render without logo with showLogo set to false', function () {
    var _render3 = render(___EmotionJSX(NavBar, {
      showLogo: false
    })),
        container = _render3.container;

    expect(container.querySelectorAll('svg').length).toBe(0);
  });
  it('should render anchor around logo with href', function () {
    var _render4 = render(___EmotionJSX(NavBar, {
      href: "/home"
    })),
        container = _render4.container;

    expect(container.querySelectorAll('a').length).toBe(1);
    var a = container.querySelectorAll('a')[0];
    expect(a.href).toContain('/home');
  });
});