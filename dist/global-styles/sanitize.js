import { css } from '@emotion/core';
export var sanitize = process.env.NODE_ENV === "production" ? {
  name: "11560ua",
  styles: "*,::before,::after{background-repeat:no-repeat;box-sizing:inherit;}::before,::after{text-decoration:inherit;vertical-align:inherit;}figcaption,figure,main{display:block;}hr{box-sizing:content-box;height:0;overflow:visible;}a{background-color:transparent;text-decoration-skip:objects;}ul{list-style:none;margin-left:0;margin-right:0;}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted;}b,strong{font-weight:bolder;}small{font-size:80%;}audio,canvas,iframe,img,svg,video{vertical-align:middle;}audio,video{display:inline-block;}img{border-style:none;}svg{fill:currentColor;}svg:not(:root){overflow:visible;}table{border-collapse:collapse;}button,input,optgroup,select,textarea{margin:0;}button,input,select,textarea{background-color:transparent;color:inherit;font-size:inherit;line-height:inherit;}button,select{text-transform:none;}textarea{overflow:auto;resize:vertical;}a,area,button,input,label,select,summary,textarea,[tabindex='0']{touch-action:manipulation;}button::-moz-focus-inner,[type='button']::-moz-focus-inner,[type='reset']::-moz-focus-inner,[type='submit']::-moz-focus-inner{border-style:none;padding:0;}button:-moz-focusring,[type='button']:-moz-focusring,[type='reset']:-moz-focusring,[type='submit']:-moz-focusring{outline:1px dotted ButtonText;}[hidden]{display:none;}[aria-busy='true']{cursor:progress;}[aria-controls]{cursor:pointer;}[aria-hidden='false'][hidden]:not(:focus){clip:rect(0,0,0,0);display:inherit;position:absolute;}[aria-disabled]{cursor:default;}"
} : {
  name: "11560ua",
  styles: "*,::before,::after{background-repeat:no-repeat;box-sizing:inherit;}::before,::after{text-decoration:inherit;vertical-align:inherit;}figcaption,figure,main{display:block;}hr{box-sizing:content-box;height:0;overflow:visible;}a{background-color:transparent;text-decoration-skip:objects;}ul{list-style:none;margin-left:0;margin-right:0;}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted;}b,strong{font-weight:bolder;}small{font-size:80%;}audio,canvas,iframe,img,svg,video{vertical-align:middle;}audio,video{display:inline-block;}img{border-style:none;}svg{fill:currentColor;}svg:not(:root){overflow:visible;}table{border-collapse:collapse;}button,input,optgroup,select,textarea{margin:0;}button,input,select,textarea{background-color:transparent;color:inherit;font-size:inherit;line-height:inherit;}button,select{text-transform:none;}textarea{overflow:auto;resize:vertical;}a,area,button,input,label,select,summary,textarea,[tabindex='0']{touch-action:manipulation;}button::-moz-focus-inner,[type='button']::-moz-focus-inner,[type='reset']::-moz-focus-inner,[type='submit']::-moz-focus-inner{border-style:none;padding:0;}button:-moz-focusring,[type='button']:-moz-focusring,[type='reset']:-moz-focusring,[type='submit']:-moz-focusring{outline:1px dotted ButtonText;}[hidden]{display:none;}[aria-busy='true']{cursor:progress;}[aria-controls]{cursor:pointer;}[aria-hidden='false'][hidden]:not(:focus){clip:rect(0,0,0,0);display:inherit;position:absolute;}[aria-disabled]{cursor:default;}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nbG9iYWwtc3R5bGVzL3Nhbml0aXplLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUUyQiIsImZpbGUiOiIuLi8uLi9zcmMvZ2xvYmFsLXN0eWxlcy9zYW5pdGl6ZS50cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXHJcblxyXG5leHBvcnQgY29uc3Qgc2FuaXRpemUgPSBjc3NgXHJcbiAgKixcclxuICA6OmJlZm9yZSxcclxuICA6OmFmdGVyIHtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IC8qIDEgKi9cclxuICAgIGJveC1zaXppbmc6IGluaGVyaXQ7IC8qIDIgKi9cclxuICB9XHJcblxyXG4gIDo6YmVmb3JlLFxyXG4gIDo6YWZ0ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0OyAvKiAxICovXHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogaW5oZXJpdDsgLyogMiAqL1xyXG4gIH1cclxuXHJcbiAgZmlnY2FwdGlvbixcclxuICBmaWd1cmUsXHJcbiAgbWFpbiB7XHJcbiAgICAvKiAxICovXHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gIGhyIHtcclxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiAxICovXHJcbiAgICBoZWlnaHQ6IDA7IC8qIDEgKi9cclxuICAgIG92ZXJmbG93OiB2aXNpYmxlOyAvKiAyICovXHJcbiAgfVxyXG5cclxuICBhIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyAvKiAxICovXHJcbiAgICB0ZXh0LWRlY29yYXRpb24tc2tpcDogb2JqZWN0czsgLyogMiAqL1xyXG4gIH1cclxuXHJcbiAgdWwge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gIH1cclxuXHJcbiAgYWJiclt0aXRsZV0ge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIDIgKi9cclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDsgLyogMiAqL1xyXG4gIH1cclxuXHJcbiAgYixcclxuICBzdHJvbmcge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICB9XHJcblxyXG4gIHNtYWxsIHtcclxuICAgIGZvbnQtc2l6ZTogODAlO1xyXG4gIH1cclxuXHJcbiAgYXVkaW8sXHJcbiAgY2FudmFzLFxyXG4gIGlmcmFtZSxcclxuICBpbWcsXHJcbiAgc3ZnLFxyXG4gIHZpZGVvIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgfVxyXG5cclxuICBhdWRpbyxcclxuICB2aWRlbyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG5cclxuICBpbWcge1xyXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xyXG4gIH1cclxuXHJcbiAgc3ZnIHtcclxuICAgIGZpbGw6IGN1cnJlbnRDb2xvcjtcclxuICB9XHJcblxyXG4gIHN2Zzpub3QoOnJvb3QpIHtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gIH1cclxuXHJcbiAgdGFibGUge1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICB9XHJcblxyXG4gIGJ1dHRvbixcclxuICBpbnB1dCxcclxuICBvcHRncm91cCxcclxuICBzZWxlY3QsXHJcbiAgdGV4dGFyZWEge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uLFxyXG4gIGlucHV0LFxyXG4gIHNlbGVjdCxcclxuICB0ZXh0YXJlYSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgfVxyXG5cclxuICBidXR0b24sXHJcbiAgc2VsZWN0IHtcclxuICAgIC8qIDEgKi9cclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gIH1cclxuXHJcbiAgdGV4dGFyZWEge1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87IC8qIDEgKi9cclxuICAgIHJlc2l6ZTogdmVydGljYWw7IC8qIDIgKi9cclxuICB9XHJcblxyXG4gIGEsXHJcbiAgYXJlYSxcclxuICBidXR0b24sXHJcbiAgaW5wdXQsXHJcbiAgbGFiZWwsXHJcbiAgc2VsZWN0LFxyXG4gIHN1bW1hcnksXHJcbiAgdGV4dGFyZWEsXHJcbiAgW3RhYmluZGV4PScwJ10ge1xyXG4gICAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XHJcbiAgfVxyXG5cclxuICBidXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXHJcbiAgW3R5cGU9J2J1dHRvbiddOjotbW96LWZvY3VzLWlubmVyLFxyXG4gIFt0eXBlPSdyZXNldCddOjotbW96LWZvY3VzLWlubmVyLFxyXG4gIFt0eXBlPSdzdWJtaXQnXTo6LW1vei1mb2N1cy1pbm5lciB7XHJcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxyXG4gIFt0eXBlPSdidXR0b24nXTotbW96LWZvY3VzcmluZyxcclxuICBbdHlwZT0ncmVzZXQnXTotbW96LWZvY3VzcmluZyxcclxuICBbdHlwZT0nc3VibWl0J106LW1vei1mb2N1c3Jpbmcge1xyXG4gICAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xyXG4gIH1cclxuXHJcbiAgW2hpZGRlbl0ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIFthcmlhLWJ1c3k9J3RydWUnXSB7XHJcbiAgICBjdXJzb3I6IHByb2dyZXNzO1xyXG4gIH1cclxuXHJcbiAgW2FyaWEtY29udHJvbHNdIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIFthcmlhLWhpZGRlbj0nZmFsc2UnXVtoaWRkZW5dOm5vdCg6Zm9jdXMpIHtcclxuICAgIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XHJcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIH1cclxuXHJcbiAgW2FyaWEtZGlzYWJsZWRdIHtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICB9XHJcbmBcclxuIl19 */"
};