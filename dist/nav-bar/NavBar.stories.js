import _css from "@emotion/css";
import _styled from "@emotion/styled-base";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { storiesOf } from '@storybook/react';
import NavBar, { NavBarItem, NavBarIcon, NavBarDropdown } from './NavBar';
import Menu from '../menu/Menu';
import { Account, BurgerMenu, EnGlobal } from '@dfds-shared/icons';
var stories = storiesOf('UI|NavBar', module);

var AccountIcon =
/*#__PURE__*/
_styled(Account, {
  target: "ehiq42w0"
})(process.env.NODE_ENV === "production" ? {
  name: "la3nd4",
  styles: "font-size:1.5rem;"
} : {
  name: "la3nd4",
  styles: "font-size:1.5rem;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9uYXYtYmFyL05hdkJhci5zdG9yaWVzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVbUMiLCJmaWxlIjoiLi4vLi4vc3JjL25hdi1iYXIvTmF2QmFyLnN0b3JpZXMudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBzdG9yaWVzT2YgfSBmcm9tICdAc3Rvcnlib29rL3JlYWN0J1xyXG5pbXBvcnQgTmF2QmFyLCB7IE5hdkJhckl0ZW0sIE5hdkJhckljb24sIE5hdkJhckRyb3Bkb3duIH0gZnJvbSAnLi9OYXZCYXInXHJcbmltcG9ydCBNZW51IGZyb20gJy4uL21lbnUvTWVudSdcclxuaW1wb3J0IHsgQWNjb3VudCwgQnVyZ2VyTWVudSwgRW5HbG9iYWwgfSBmcm9tICdAZGZkcy1zaGFyZWQvaWNvbnMnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xyXG5pbXBvcnQgY3NzIGZyb20gJ0BlbW90aW9uL2NzcydcclxuXHJcbmNvbnN0IHN0b3JpZXMgPSBzdG9yaWVzT2YoJ1VJfE5hdkJhcicsIG1vZHVsZSlcclxuXHJcbmNvbnN0IEFjY291bnRJY29uID0gc3R5bGVkKEFjY291bnQpYFxyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG5gXHJcblxyXG5zdG9yaWVzLmFkZCgnTmF2QmFyJywgKCkgPT4gKFxyXG4gIDw+XHJcbiAgICA8TmF2QmFyIGhyZWY9XCIvXCI+XHJcbiAgICAgIDxOYXZCYXJJdGVtIGhyZWY9XCIjXCI+REZEUyBQbGF0Zm9ybTwvTmF2QmFySXRlbT5cclxuICAgICAgPE5hdkJhckl0ZW0gaHJlZj1cIiNcIj5SZXN0IG9mIERGRFM8L05hdkJhckl0ZW0+XHJcbiAgICAgIDxOYXZCYXJJY29uXHJcbiAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgIGFsaWdubWVudD1cInJpZ2h0XCJcclxuICAgICAgICB0aXRsZT1cIk1lbnVcIlxyXG4gICAgICAgIG1lbnU9e1xyXG4gICAgICAgICAgPE5hdkJhckRyb3Bkb3duIGNzcz17Y3NzYGB9PlxyXG4gICAgICAgICAgICA8TWVudT5cclxuICAgICAgICAgICAgICA8TWVudS5IZWFkZXI+SGVhZGVyPC9NZW51LkhlYWRlcj5cclxuICAgICAgICAgICAgICA8TWVudS5MaW5rIHVybD1cIiNcIj5GaXJzdCBpdGVtPC9NZW51Lkxpbms+XHJcbiAgICAgICAgICAgIDwvTWVudT5cclxuICAgICAgICAgIDwvTmF2QmFyRHJvcGRvd24+XHJcbiAgICAgICAgfVxyXG4gICAgICA+XHJcbiAgICAgICAgPEJ1cmdlck1lbnUgLz5cclxuICAgICAgPC9OYXZCYXJJY29uPlxyXG4gICAgICA8TmF2QmFySWNvbiBocmVmPVwiI1wiIGFsaWdubWVudD1cInJpZ2h0XCIgdGl0bGU9XCJBY2NvdW50XCI+XHJcbiAgICAgICAgPEFjY291bnRJY29uIC8+XHJcbiAgICAgIDwvTmF2QmFySWNvbj5cclxuICAgICAgPE5hdkJhckljb24gaHJlZj1cIiNcIiBhbGlnbm1lbnQ9XCJyaWdodFwiIHRpdGxlPVwiTGFuZ3VhZ2VcIj5cclxuICAgICAgICA8RW5HbG9iYWwgLz5cclxuICAgICAgPC9OYXZCYXJJY29uPlxyXG4gICAgPC9OYXZCYXI+XHJcbiAgPC8+XHJcbikpXHJcbiJdfQ== */"
});

stories.add('NavBar', function () {
  return ___EmotionJSX(React.Fragment, null, ___EmotionJSX(NavBar, {
    href: "/"
  }, ___EmotionJSX(NavBarItem, {
    href: "#"
  }, "DFDS Platform"), ___EmotionJSX(NavBarItem, {
    href: "#"
  }, "Rest of DFDS"), ___EmotionJSX(NavBarIcon, {
    href: "#",
    alignment: "right",
    title: "Menu",
    menu: ___EmotionJSX(NavBarDropdown, {
      css:
      /*#__PURE__*/
      _css(process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9uYXYtYmFyL05hdkJhci5zdG9yaWVzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3QmtDIiwiZmlsZSI6Ii4uLy4uL3NyYy9uYXYtYmFyL05hdkJhci5zdG9yaWVzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgc3Rvcmllc09mIH0gZnJvbSAnQHN0b3J5Ym9vay9yZWFjdCdcclxuaW1wb3J0IE5hdkJhciwgeyBOYXZCYXJJdGVtLCBOYXZCYXJJY29uLCBOYXZCYXJEcm9wZG93biB9IGZyb20gJy4vTmF2QmFyJ1xyXG5pbXBvcnQgTWVudSBmcm9tICcuLi9tZW51L01lbnUnXHJcbmltcG9ydCB7IEFjY291bnQsIEJ1cmdlck1lbnUsIEVuR2xvYmFsIH0gZnJvbSAnQGRmZHMtc2hhcmVkL2ljb25zJ1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcclxuaW1wb3J0IGNzcyBmcm9tICdAZW1vdGlvbi9jc3MnXHJcblxyXG5jb25zdCBzdG9yaWVzID0gc3Rvcmllc09mKCdVSXxOYXZCYXInLCBtb2R1bGUpXHJcblxyXG5jb25zdCBBY2NvdW50SWNvbiA9IHN0eWxlZChBY2NvdW50KWBcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuYFxyXG5cclxuc3Rvcmllcy5hZGQoJ05hdkJhcicsICgpID0+IChcclxuICA8PlxyXG4gICAgPE5hdkJhciBocmVmPVwiL1wiPlxyXG4gICAgICA8TmF2QmFySXRlbSBocmVmPVwiI1wiPkRGRFMgUGxhdGZvcm08L05hdkJhckl0ZW0+XHJcbiAgICAgIDxOYXZCYXJJdGVtIGhyZWY9XCIjXCI+UmVzdCBvZiBERkRTPC9OYXZCYXJJdGVtPlxyXG4gICAgICA8TmF2QmFySWNvblxyXG4gICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICBhbGlnbm1lbnQ9XCJyaWdodFwiXHJcbiAgICAgICAgdGl0bGU9XCJNZW51XCJcclxuICAgICAgICBtZW51PXtcclxuICAgICAgICAgIDxOYXZCYXJEcm9wZG93biBjc3M9e2Nzc2BgfT5cclxuICAgICAgICAgICAgPE1lbnU+XHJcbiAgICAgICAgICAgICAgPE1lbnUuSGVhZGVyPkhlYWRlcjwvTWVudS5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgPE1lbnUuTGluayB1cmw9XCIjXCI+Rmlyc3QgaXRlbTwvTWVudS5MaW5rPlxyXG4gICAgICAgICAgICA8L01lbnU+XHJcbiAgICAgICAgICA8L05hdkJhckRyb3Bkb3duPlxyXG4gICAgICAgIH1cclxuICAgICAgPlxyXG4gICAgICAgIDxCdXJnZXJNZW51IC8+XHJcbiAgICAgIDwvTmF2QmFySWNvbj5cclxuICAgICAgPE5hdkJhckljb24gaHJlZj1cIiNcIiBhbGlnbm1lbnQ9XCJyaWdodFwiIHRpdGxlPVwiQWNjb3VudFwiPlxyXG4gICAgICAgIDxBY2NvdW50SWNvbiAvPlxyXG4gICAgICA8L05hdkJhckljb24+XHJcbiAgICAgIDxOYXZCYXJJY29uIGhyZWY9XCIjXCIgYWxpZ25tZW50PVwicmlnaHRcIiB0aXRsZT1cIkxhbmd1YWdlXCI+XHJcbiAgICAgICAgPEVuR2xvYmFsIC8+XHJcbiAgICAgIDwvTmF2QmFySWNvbj5cclxuICAgIDwvTmF2QmFyPlxyXG4gIDwvPlxyXG4pKVxyXG4iXX0= */")
    }, ___EmotionJSX(Menu, null, ___EmotionJSX(Menu.Header, null, "Header"), ___EmotionJSX(Menu.Link, {
      url: "#"
    }, "First item")))
  }, ___EmotionJSX(BurgerMenu, null)), ___EmotionJSX(NavBarIcon, {
    href: "#",
    alignment: "right",
    title: "Account"
  }, ___EmotionJSX(AccountIcon, null)), ___EmotionJSX(NavBarIcon, {
    href: "#",
    alignment: "right",
    title: "Language"
  }, ___EmotionJSX(EnGlobal, null))));
});