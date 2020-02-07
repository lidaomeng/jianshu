import { createGlobalStyle } from 'styled-components';

export const GlobalStyled2 = createGlobalStyle`
  @font-face {
    font-family: "iconfont";
    src: url('./iconfont.eot?t=1581064193579'); /* IE9 */
    src: url('./iconfont.eot?t=1581064193579#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
    url('./iconfont.woff?t=1581064193579') format('woff'),
    url('./iconfont.ttf?t=1581064193579') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1581064193579#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
`;


