"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[5096],{273778:function(Se,En,r){r.r(En),r.d(En,{default:function(){return Mr}});var kn=r(805574),C=r.n(kn),Cn=r(294184),w=r.n(Cn),Vn=r(727484),gn=r.n(Vn),Yn=r(533852),c=r(606641),f=r(667294),V=r(715778),Bn=r(634577),h=r(302559),mn=r(438746),te=r(168400),v=r.n(te),H=r(370917),k=r(65630),n=r(785893),On,zn={1:"#fff",2:"#fafafa",3:"#f5f5f5",4:"#f0f0f0",5:"#d9d9d9",6:"#bfbfbf",7:"#8c8c8c",8:"#595959",9:"#434343",10:"#262626",11:"#1f1f1f",12:"#141414",13:"#000"},pe=function(){var e=(0,k.Fg)(),t=function l(d){var g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;return g<=10?`
.palette-`.concat(d,"-").concat(g,` {
  background: `).concat(e["".concat(d,"-").concat(g)],`;
}
`).concat(l(d,g+1),`
    `):""},i=function l(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;return d<=13?`
.palette-gray-`.concat(d,` {
  background: `).concat(zn[d],`;
}
`).concat(l(d+1),`
    `):""};return(0,n.jsx)(H.xB,{styles:(0,H.iv)(On||(On=v()([`
        .color-palettes {
          margin: 0 1%;

          &-dark {
            margin: 0;
            padding: 0 28px;
            background-color: #141414;

            .color-title {
              color: rgba(255, 255, 255, 0.85);
            }

            .color-description {
              color: rgba(255, 255, 255, 0.45);
            }

            .color-palette {
              margin: 45px 3.5% 45px 0;

              &:nth-of-type(3n) {
                margin-right: 0;
              }

              .main-color-item {
                margin-right: 0;

                &:hover {
                  margin-right: -8px;
                }
              }
            }
          }
        }

        .color-palette {
          display: inline-block;
          width: 31%;
          margin: 45px 1%;

          &-pick {
            margin: 0 0 20px;
            font-size: 20px;
            text-align: center;
          }

          &-picker {
            margin: 24px 0;

            &-value {
              position: relative;
              top: -3px;
              margin-left: 16px;
              font-size: 14px;
              font-family: Consolas, sans-serif;

              .ant-row-rtl & {
                margin-right: 16px;
                margin-left: 0;
              }
            }

            &-validation {
              position: relative;
              top: -3px;
              margin-left: 16px;
              color: `,`;
              font-size: 13px;

              .ant-row-rtl & {
                margin-right: 16px;
                margin-left: 0;
              }

              &-dark {
                margin-left: 0;
              }
            }
          }
        }

        .main-color {
          `,`
          `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`

  text-align: left;

          &-item {
            position: relative;
            height: 44px;
            margin-right: 4px;
            padding: 0 12px;
            font-size: 14px;
            font-family: Consolas, sans-serif;
            line-height: 44px;
            cursor: pointer;
            transition: all 0.2s;

            &:first-child {
              border-radius: 4px 4px 0 0;
            }

            &:last-child {
              border-radius: 0 0 4px 4px;
            }

            &:hover {
              margin-right: -8px;
              border-radius: 0 4px 4px 0;
            }
          }

          &-item &-text {
            float: left;
            transition: all 0.3s;
          }

          &-item &-value {
            position: relative;
            left: 3px;
            float: right;
            transform: scale(0.85);
            transform-origin: 100% 50%;
            opacity: 0;
            transition: all 0.3s;
          }
        }

        .color-title {
          margin: 0 0 24px;
          color: #5c6b77;
          font-weight: 500;
          font-size: 22px;
          text-align: center;
          text-transform: capitalize;
        }

        .color-description {
          display: block;
          color: #777;
          font-weight: lighter;
          font-size: 14px;
        }

        .main-color:hover {
          .main-color-value {
            left: 0;
            opacity: 0.7;
          }
        }

        .color-palette-horizontal {
          box-sizing: border-box;
          width: 100%;

          &-dark {
            height: 303px;
            padding: 32px 28px;
            background-color: #141414;

            .color-palette-picker {
              margin-bottom: 0;
            }

            .color-palette-pick {
              color: rgba(255, 255, 255, 0.65);
              text-align: left;

              &-hex {
                color: rgba(255, 255, 255, 0.65);
              }

              .ant-row-rtl & {
                direction: rtl;
                text-align: right;
              }
            }
          }

          .main-color {
            display: flex;

            &-item {
              position: relative;
              flex: 1;
              box-sizing: border-box;
              height: 86px;
              margin-right: 0;
              padding: 37px 0 0;
              line-height: normal;
              text-align: center;
              border-radius: 0;

              .main-color-text {
                float: none;
              }

              &:hover {
                height: 96px;
                margin-top: -10px;
                border-radius: 4px 4px 0 0;
              }
            }

            &-value {
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              text-align: center;
              transform-origin: unset;
            }

            &:hover {
              .main-color-item {
                padding-top: 8px;
              }

              .main-color-value {
                bottom: 8px;
                opacity: 0.7;
              }
            }
          }
        }
      `])),e.colorError,t("blue"),t("purple"),t("cyan"),t("green"),t("magenta"),t("red"),t("volcano"),t("orange"),t("gold"),t("yellow"),t("lime"),t("geekblue"),i())})},oe=pe,Kn,me=function(){return(0,n.jsx)(H.xB,{styles:(0,H.iv)(Kn||(Kn=v()([`
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        > a[aria-hidden]:first-child {
          float: left;
          width: 20px;
          padding-inline-end: 4px;
          font-size: 0;
          line-height: inherit;
          text-align: right;
          padding-inline-end: 4px;
          margin-inline-start: -24px;

          [data-direction='rtl'] & {
            float: right;
          }

          &:hover {
            border: 0;
          }

          > .icon-link::before {
            font-size: 20px;
            content: '#';
          }
        }

        &:not(:hover) > a[aria-hidden]:first-child > .icon-link {
          visibility: hidden;
        }
      }
    `])))})},re,ae=function(){var a=(0,k.Fg)();return(0,n.jsx)(H.xB,{styles:(0,H.iv)(re||(re=v()([`
        @font-face {
          font-weight: normal;
          font-family: AlibabaPuHuiTi;
          src: url('//at.alicdn.com/t/webfont_6e11e43nfj.woff2') format('woff2'),
            url('//at.alicdn.com/t/webfont_6e11e43nfj.woff') format('woff'),
            /* chrome\u3001firefox */ url('//at.alicdn.com/t/webfont_6e11e43nfj.ttf') format('truetype'); /* chrome\u3001firefox\u3001opera\u3001Safari, Android, iOS 4.2+ */
          font-display: swap;
        }

        @font-face {
          font-weight: bold;
          font-family: AlibabaPuHuiTi;
          src: url('//at.alicdn.com/t/webfont_exesdog9toj.woff2') format('woff2'),
            url('//at.alicdn.com/t/webfont_exesdog9toj.woff') format('woff'),
            /* chrome\u3001firefox */ url('//at.alicdn.com/t/webfont_exesdog9toj.ttf')
              format('truetype'); /* chrome\u3001firefox\u3001opera\u3001Safari, Android, iOS 4.2+ */
          font-display: swap;
        }

        // \u7EC4\u4EF6\u4E30\u5BCC\uFF0C\u9009\u7528\u81EA\u5982\u5B9A\u5236\u4E3B\u9898\u968F\u5FC3\u6240\u6B32\u8BBE\u8BA1\u8BED\u8A00\u4E0E\u7814\u53D1\u6846\u67B61234567890 QWERTYUIOPLKJHGFDSAZXCVBNM,.mnbvcxzasdfghjklpoiuytrewq
        /* CDN \u670D\u52A1\u4EC5\u4F9B\u5E73\u53F0\u4F53\u9A8C\u548C\u8C03\u8BD5\u4F7F\u7528\uFF0C\u5E73\u53F0\u4E0D\u627F\u8BFA\u670D\u52A1\u7684\u7A33\u5B9A\u6027\uFF0C\u4F01\u4E1A\u5BA2\u6237\u9700\u4E0B\u8F7D\u5B57\u4F53\u5305\u81EA\u884C\u53D1\u5E03\u4F7F\u7528\u5E76\u505A\u597D\u5907\u4EFD\u3002 */
        @font-face {
          font-weight: 900;
          font-family: 'AliPuHui';
          src: url('//at.alicdn.com/wf/webfont/exMpJIukiCms/Gsw2PSKrftc1yNWMNlXgw.woff2')
              format('woff2'),
            url('//at.alicdn.com/wf/webfont/exMpJIukiCms/vtu73by4O2gEBcvBuLgeu.woff') format('woff');
          font-display: swap;
        }

        html {
          direction: initial;

          &.rtl {
            direction: rtl;
          }
        }

        body {
          overflow-x: hidden;
          color: `,`;
          font-size: `,`px;
          font-family: `,`;
          line-height: `,`;
          background: `,`;
          transition: background-color 1s cubic-bezier(0.075, 0.82, 0.165, 1);
        }
      `])),a.colorText,a.fontSize,a.fontFamily,a.lineHeight,a.colorBgContainer)})},ie,he=function(){return(0,n.jsx)(H.xB,{styles:(0,H.iv)(ie||(ie=v()([`
      body,
      div,
      dl,
      dt,
      dd,
      ul,
      ol,
      li,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      pre,
      code,
      form,
      fieldset,
      legend,
      input,
      textarea,
      p,
      blockquote,
      th,
      td,
      hr,
      button,
      article,
      aside,
      details,
      figcaption,
      figure,
      footer,
      header,
      hgroup,
      menu,
      nav,
      section {
        margin: 0;
        padding: 0;
      }

      ul,
      ol {
        list-style: none;
      }

      img {
        vertical-align: middle;
        border-style: none;
      }
    `])))})},Fn=r(510274),Jn,Qn=function(){var e=(0,k.Fg)(),t=e.antCls,i=e.colorPrimary;return(0,n.jsx)(H.xB,{styles:(0,H.iv)(Jn||(Jn=v()([`
        .markdown {
          color: `,`;
          font-size: 14px;
          line-height: 2;
        }

        .highlight {
          line-height: 1.5;
        }

        .markdown img {
          max-width: calc(100% - 32px);
          max-height: 100%;
        }

        .markdown p > img {
          margin: 34px auto;
          box-shadow: 0 8px 20px rgba(143, 168, 191, 0.35);
          max-width: 1024px;
          width: 100%;
          display: block;
        }

        .markdown p > img.markdown-inline-image {
          margin: 0;
          box-shadow: none;
        }

        .markdown h1 {
          margin-top: 8px;
          margin-bottom: 20px;
          color: `,`;
          font-weight: 500;
          font-size: 30px;
          font-family: Avenir, `,`, sans-serif;
          line-height: 38px;

          .subtitle {
            margin-left: 12px;
          }
        }

        .markdown h2 {
          font-size: 24px;
          line-height: 32px;
        }

        .markdown h2,
        .markdown h3,
        .markdown h4,
        .markdown h5,
        .markdown h6 {
          clear: both;
          margin: 1.6em 0 0.6em;
          color: `,`;
          font-weight: 500;
          font-family: Avenir, `,`, sans-serif;
        }

        .markdown h3 {
          font-size: 18px;
        }

        .markdown h4 {
          font-size: 16px;
        }

        .markdown h5 {
          font-size: 14px;
        }

        .markdown h6 {
          font-size: 12px;
        }

        .markdown hr {
          clear: both;
          height: 1px;
          margin: 24px 0;
          background: `,`;
          border: 0;
        }

        .markdown p,
        .markdown pre {
          margin: 1em 0;

          `,`-row-rtl & {
            direction: rtl;
            text-align: right;
          }
        }

        .markdown ul > li {
          margin-left: 20px;
          padding-left: 4px;
          list-style-type: circle;

          .rtl & {
            margin-right: 20px;
            margin-left: 0;
            padding-right: 4px;
            padding-left: 0;
          }

          &:empty {
            display: none;
          }
        }

        .markdown ol > li {
          margin-left: 20px;
          padding-left: 4px;
          list-style-type: decimal;

          `,`-row-rtl & {
            margin-right: 20px;
            margin-left: 0;
            padding-right: 4px;
            padding-left: 0;
          }
        }

        .markdown ul > li > p,
        .markdown ol > li > p {
          margin: 0.2em 0;
        }

        .markdown code {
          margin: 0 1px;
          padding: 0.2em 0.4em;
          font-size: 0.9em;
          background: `,`;
          border: 1px solid `,`;
          border-radius: 3px;
        }

        .markdown pre {
          font-family: `,`;
          background: `,`;
          border-radius: `,`px;
        }

        .markdown pre code {
          margin: 0;
          padding: 0;
          overflow: auto;
          color: `,`;
          font-size: `,`px;
          direction: ltr;
          text-align: left;
          background: #f5f5f5;
          border: none;
        }

        .markdown strong,
        .markdown b {
          font-weight: 500;
        }

        .markdown .dumi-default-source-code {
          margin: 1em 0;
          background-color: `,`;
          border-radius: `,`px;
          > pre.prism-code {
            padding: 12px 20px;
            font-size: 13px;
            line-height: 2;
          }
        }
        .pic-plus {
          & > * {
            display: inline-block !important;
            vertical-align: middle;
          }
          span {
            margin: 0 20px;
            color: #aaa;
            font-size: 30px;
          }
        }
        .antd-site-snippet {
          .ant-tabs-tab {
            .snippet-label {
              display: flex;
              align-items: center;
              justify-content: center;
              svg {
                margin-inline-end: 8px;
              }
            }
          }
          .dumi-default-source-code {
            margin: 0 auto;
            background-color: `,`;
            border-radius: `,`px;
            > pre.prism-code {
              padding: 12px 20px;
              font-size: 13px;
              line-height: 2;
            }
          }
        }

        .markdown table td > a:not(:last-child) {
          margin-right: 0 !important;

          &::after {
            position: relative !important;
          }
        }

        .markdown blockquote {
          margin: 1em 0;
          padding-left: 0.8em;
          color: `,`;
          font-size: 90%;
          border-left: 4px solid `,`;

          .rtl & {
            padding-right: 0.8em;
            padding-left: 0;
            border-right: 4px solid `,`;
            border-left: none;
          }
        }

        .markdown blockquote p {
          margin: 0;
        }

        .markdown .anchor {
          margin-left: 8px;
          opacity: 0;
          transition: opacity 0.3s;

          .rtl & {
            margin-right: 8px;
            margin-left: 0;
          }
        }

        .markdown .waiting {
          color: #ccc;
          cursor: not-allowed;
        }

        .markdown a.edit-button {
          display: inline-block;
          margin-left: 8px;
          text-decoration: none;

          .rtl & {
            margin-right: 8px;
            margin-left: 0;
            transform: rotateY(180deg);
          }

          `,`icon {
            display: block;
            color: `,`;
            font-size: 16px;
            transition: all 0.3s;

            &:hover {
              color: `,`;
            }
          }
        }

        .markdown h1:hover .anchor,
        .markdown h2:hover .anchor,
        .markdown h3:hover .anchor,
        .markdown h4:hover .anchor,
        .markdown h5:hover .anchor,
        .markdown h6:hover .anchor {
          display: inline-block;
          opacity: 1;
        }

        .markdown > br,
        .markdown > p > br {
          clear: both;
        }

        .markdown .dumi-default-table {
          table {
            margin: 0;
            overflow-x: auto;
            overflow-y: hidden;
            direction: ltr;
            empty-cells: show;
            border: 1px solid `,`;
            border-collapse: collapse;
            border-spacing: 0;

            th,
            td {
              padding: 12px 24px;
              text-align: left;
              border: 1px solid `,`;

              &:first-child {
                border-left: 1px solid `,`;
              }

              &:last-child {
                border-right: 1px solid `,`;
              }

              img {
                max-width: unset;
              }
            }

            th {
              color: #5c6b77;
              font-weight: 500;
              white-space: nowrap;
              background: rgba(0, 0, 0, 0.02);
              border-width: 1px 1px 2px;
            }

            tbody tr {
              transition: all 0.3s;

              &:hover {
                background: rgba(60, 90, 100, 0.04);
              }
            }
          }

          table.component-api-table {
            margin: 0;
            overflow-x: auto;
            overflow-y: hidden;
            font-size: `,`px;
            font-family: `,`;
            line-height: `,`;
            border: 1px solid `,`;
            border-width: 0 1px;

            th {
              border-width: 1px 0 2px;
            }

            td {
              border-width: 1px 0;
              &:first-child {
                width: 18%;
                min-width: 58px;
                color: #595959;
                font-weight: 600;
                white-space: nowrap;
              }

              &:nth-child(2) {
                width: 55%;
                min-width: 160px;
              }

              &:nth-child(3) {
                width: 22%;
                color: `,`;
                font-size: `,`px;
              }

              &:nth-child(4) {
                width: 15%;
                font-size: `,`px;
              }

              &:nth-child(5) {
                width: 8%;
                font-size: `,`px;
              }

              &:nth-last-child(3):first-child {
                width: 38%;
              }

              &:nth-last-child(3):first-child ~ td:nth-last-child(2) {
                width: 70%;
              }
            }
          }
        }

        .grid-demo,
        [id^='components-grid-demo-'] {
          `,`-row > div,
            .code-box-demo `,`-row > div {
            min-height: 30px;
            margin-top: 8px;
            margin-bottom: 8px;
            color: #fff;
            text-align: center;
            border-radius: 0;
          }

          .code-box-demo `,`-row > div:not(.gutter-row) {
            padding: 16px 0;
            background: `,`;

            &:nth-child(2n + 1) {
              background: `,`;
            }
          }

          `,`-row .demo-col,
            .code-box-demo `,`-row .demo-col {
            margin-top: 0;
            margin-bottom: 0;
            padding: 30px 0;
            color: `,`;
            font-size: 18px;
            text-align: center;
            border: none;
          }

          `,`-row .demo-col-1 {
            background: `,`;
          }

          `,`-row .demo-col-2,
            .code-box-demo `,`-row .demo-col-2 {
            background: `,`;
          }

          `,`-row .demo-col-3,
            .code-box-demo `,`-row .demo-col-3 {
            color: #999;
            background: rgba(255, 255, 255, 0.2);
          }

          `,`-row .demo-col-4,
            .code-box-demo `,`-row .demo-col-4 {
            background: `,`;
          }

          `,`-row .demo-col-5,
            .code-box-demo `,`-row .demo-col-5 {
            color: #999;
            background: rgba(255, 255, 255, 0.2);
          }

          .code-box-demo .height-100 {
            height: 100px;
            line-height: 100px;
          }

          .code-box-demo .height-50 {
            height: 50px;
            line-height: 50px;
          }

          .code-box-demo .height-120 {
            height: 120px;
            line-height: 120px;
          }

          .code-box-demo .height-80 {
            height: 80px;
            line-height: 80px;
          }
        }

        [id='components-grid-demo-playground'],
        [id='components-grid-demo-gutter'] {
          > .code-box-demo `,`-row > div {
            margin-top: 0;
            margin-bottom: 0;
          }
        }
      `])),e.colorText,e.colorTextHeading,e.fontFamily,e.colorTextHeading,e.fontFamily,e.colorSplit,t,t,e.siteMarkdownCodeBg,e.colorSplit,e.codeFamily,e.siteMarkdownCodeBg,e.borderRadius,e.colorText,Math.max(e.fontSize-1,12),e.siteMarkdownCodeBg,e.borderRadius,e.siteMarkdownCodeBg,e.borderRadius,e.colorTextSecondary,e.colorSplit,e.colorSplit,t,e.colorTextSecondary,e.colorText,e.colorSplit,e.colorSplit,e.colorSplit,e.colorSplit,Math.max(e.fontSize-1,12),e.codeFamily,e.lineHeight,e.colorSplit,e.magenta7,Math.max(e.fontSize-1,12),Math.max(e.fontSize-1,12),Math.max(e.fontSize-1,12),t,t,t,i,new Fn.C(i).setAlpha(.75).toHex8String(),t,t,e.colorWhite,t,new Fn.C(i).setAlpha(.75).toHexString(),t,t,new Fn.C(i).setAlpha(.75).toHexString(),t,t,t,t,new Fn.C(i).setAlpha(.6).toHexString(),t,t,t)})},ge=Qn,le,fn=function(){var a=(0,k.Fg)();return(0,n.jsx)(H.xB,{styles:(0,H.iv)(le||(le=v()([`
        /**
* prism.js default theme for JavaScript, CSS and HTML
* Based on dabblet (http://dabblet.com)
* @author Lea Verou
*/

        pre code {
          display: block;
          padding: 16px 32px;
          color: `,`;
          font-size: `,`px;
          font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
          line-height: 2;
          white-space: pre;
          background: white;
          border: 1px solid #e9e9e9;
          border-radius: `,`px;
        }

        code[class*='language-'],
        pre[class*='language-'] {
          color: black;
          font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
          line-height: 1.5;
          direction: ltr;
          white-space: pre;
          text-align: left;
          word-wrap: normal;
          word-break: normal;
          word-spacing: normal;
          tab-size: 4;
          hyphens: none;
          background: none;
        }

        code[class*='css'] {
          direction: ltr;
        }

        pre[class*='language-'] ::selection,
        code[class*='language-'] ::selection {
          text-shadow: none;
          background: #b3d4fc;
        }

        @media print {
          code[class*='language-'],
          pre[class*='language-'] {
            text-shadow: none;
          }
        }

        /* Code blocks */
        pre[class*='language-'] {
          margin: 16px 0;
          padding: 12px 20px;
          overflow: auto;
        }

        :not(pre) > code[class*='language-'],
        pre[class*='language-'] {
          background: #f5f5f5;
        }

        /* Inline code */
        :not(pre) > code[class*='language-'] {
          padding: 0.1em;
          white-space: normal;
          border-radius: 0.3em;
        }

        .token.comment,
        .token.prolog,
        .token.doctype,
        .token.cdata {
          color: slategray;
        }

        .token.punctuation {
          color: #999;
        }

        .namespace {
          opacity: 0.7;
        }

        .markdown {
          .token.property,
          .token.tag,
          .token.boolean,
          .token.number,
          .token.constant,
          .token.symbol,
          .token.deleted {
            color: #f81d22;
          }

          .token.selector,
          .token.attr-name,
          .token.string,
          .token.char,
          .token.builtin,
          .token.inserted {
            color: #0b8235;
          }

          .token.operator,
          .token.entity,
          .token.url,
          .language-css .token.string,
          .style .token.string {
            color: #0b8235;
          }

          .token.atrule,
          .token.attr-value,
          .token.keyword {
            color: #008dff;
          }

          .token.function {
            color: #f81d22;
          }

          .token.regex,
          .token.important,
          .token.variable {
            color: #e90;
          }

          .token.important,
          .token.bold {
            font-weight: bold;
          }

          .token.italic {
            font-style: italic;
          }

          .token.entity {
            cursor: help;
          }
        }
      `])),a.colorText,a.fontSize,a.borderRadius)})},u,$=function(){var e=(0,k.Fg)(),t=e.antCls,i=e.iconCls;return(0,n.jsx)(H.xB,{styles:(0,H.iv)(u||(u=v()([`
        .code-boxes-col-1-1 {
          width: 100%;
        }

        .code-boxes-col-2-1 {
          display: inline-block;
          vertical-align: top;
        }

        .code-box {
          position: relative;
          display: inline-block;
          width: 100%;
          margin: 0 0 16px;
          background-color: `,`;
          border: 1px solid `,`;
          border-radius: `,`px;
          transition: all 0.2s;

          .code-box-title {
            &,
            a {
              color: `,` !important;
              background: `,`;
            }
          }

          .code-box-demo {
            background-color: `,`;
            border-radius: `,"px ",`px 0 0;
          }

          .markdown {
            pre {
              margin: 0.5em 0;
              padding: 6px 12px;
            }

            pre code {
              margin: 0;
              background: #f5f5f5;
            }
          }

          &:target {
            border: 1px solid `,`;
          }

          &-expand-trigger {
            position: relative;
            color: #3b4357;
            font-size: 20px;
            cursor: pointer;
            opacity: 0.75;
            transition: all 0.3s;
            margin-inline-start: 12px;

            &:hover {
              opacity: 1;
            }
          }

          &-title {
            position: absolute;
            top: -14px;
            padding: 1px 8px;
            color: #777;
            background: `,`;
            border-radius: `,"px ",`px 0 0;
            transition: background-color 0.4s;
            margin-inline-start: 16px;

            `,`-row-rtl & {
              border-radius: `,"px 0 0 ",`px;
            }

            a,
            a:hover {
              color: `,`;
              font-weight: 500;
              font-size: `,`px;
            }
          }

          &-description {
            padding: 18px 24px 12px;
          }

          a.edit-button {
            position: absolute;
            top: 7px;
            right: -16px;
            font-size: 12px;
            text-decoration: none;
            background: inherit;
            transform: scale(0.9);
            padding-inline-end: 6px;

            `,` {
              color: `,`;
              transition: all 0.3s;

              &:hover {
                color: `,`;
              }
            }

            `,"-row",`-row-rtl & {
              right: auto;
              left: -22px;
            }
          }

          &-demo {
            padding: 42px 24px 50px;
            color: `,`;
            border-bottom: 1px solid `,`;
          }

          iframe {
            width: 100%;
            border: 0;
          }

          &-meta {
            &.markdown {
              position: relative;
              width: 100%;
              font-size: `,`px;
              border-radius: 0 0 `,"px ",`px;
              transition: background-color 0.4s;
            }

            blockquote {
              line-height: 1.5;
            }

            h4,
            section& p {
              margin: 0;
            }

            > p {
              width: 100%;
              margin: 0.5em 0;
              font-size: 12px;
              word-break: break-word;
              padding-inline-end: 25px;
            }
          }

          &.expand &-meta {
            border-bottom: 1px dashed `,`;
            border-radius: 0;
          }

          .code-expand-icon {
            position: relative;
            width: 16px;
            height: 16px;
            cursor: pointer;
          }

          .code-expand-icon-show,
          .code-expand-icon-hide {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            max-width: 100%;
            margin: 0;
            box-shadow: none;
            transition: all 0.4s;
            user-select: none;

            `,`-row-rtl & {
              right: 0;
              left: auto;
            }
          }

          .code-expand-icon-show {
            opacity: 0.55;
            pointer-events: auto;

            &:hover {
              opacity: 1;
            }
          }

          .code-expand-icon`,`-tooltip-open .code-expand-icon-show {
            opacity: 1;
          }

          .code-expand-icon-hide {
            opacity: 0;
            pointer-events: none;
          }

          .highlight-wrapper {
            display: none;
            overflow: auto;
            border-radius: 0 0 `,"px ",`px;

            &-expand {
              display: block;
            }
          }

          .highlight {
            position: relative;

            pre {
              margin: 0;
              padding: 0;
              background: `,`;
            }

            &:not(:first-child) {
              border-top: 1px dashed `,`;
            }
          }

          &-actions {
            display: flex;
            justify-content: center;
            padding: 12px 0;
            border-top: 1px dashed `,`;
            opacity: 0.7;
            transition: opacity 0.3s;

            &:hover {
              opacity: 1;
            }
          }

          &-actions &-code-action {
            position: relative;
            display: flex;
            align-items: center;
            width: 16px;
            height: 16px;
            color: `,`;
            cursor: pointer;
            transition: all 0.24s;

            &:hover {
              color: `,`;
            }

            `,` {
              display: block;
            }
          }

          &-code-copy {
            width: 14px;
            height: 14px;
            font-size: 14px;
            text-align: center;
            background: `,`;
            cursor: pointer;
            transition: transform 0.24s;

            &`,`-check {
              color: `,` !important;
              font-weight: bold;
            }
          }

          &-codepen {
            width: 14px;
            height: 14px;
            overflow: hidden;
            border: 0;
            cursor: pointer;
          }

          &-riddle {
            width: 14px;
            height: 14px;
            overflow: hidden;
            border: 0;
            cursor: pointer;
          }

          &-codesandbox {
            width: 16px;
            height: 16px;
            overflow: hidden;
            border: 0;
            cursor: pointer;

            &:hover {
              opacity: 1;
            }
          }

          .highlight-wrapper:hover &-code-copy,
          .highlight-wrapper:hover &-codepen,
          .highlight-wrapper:hover &-codesandbox,
          .highlight-wrapper:hover &-riddle {
            opacity: 1;
          }

          pre {
            width: auto;
            margin: 0;

            code {
              background: `,`;
              border: none;
              box-shadow: unset;
            }
          }

          &-debug {
            border-color: `,`;
          }

          &-debug &-title a {
            color: `,`;
          }
        }

        .demo-wrapper {
          position: relative;
        }

        .all-code-box-controls {
          position: absolute;
          top: -32px;
          inset-inline-end: 0;
        }

        `,`-row-rtl {
          #components-tooltip-demo-placement,
          #components-popover-demo-placement,
          #components-popconfirm-demo-placement {
            .code-box-demo {
              direction: ltr;
            }
          }
        }
      `])),e.colorBgContainer,e.colorSplit,e.borderRadius,e.colorText,e.colorBgContainer,e.colorBgContainer,e.borderRadius,e.borderRadius,e.colorPrimary,e.colorBgContainer,e.borderRadius,e.borderRadius,t,e.borderRadius,e.borderRadius,e.colorText,e.fontSize,i,e.colorTextSecondary,e.colorText,t,t,e.colorText,e.colorSplit,e.fontSize,e.borderRadius,e.borderRadius,e.colorSplit,t,t,e.borderRadius,e.borderRadius,e.colorBgContainer,e.colorSplit,e.colorSplit,e.colorTextSecondary,e.colorText,i,e.colorBgContainer,i,e.green6,e.colorBgContainer,e.purple3,e.purple6,t)})},m=$,o,s=function(){var a=(0,k.Fg)(),e=a.antCls,t=a.iconCls;return(0,n.jsx)(H.xB,{styles:(0,H.iv)(o||(o=v()([`
        ul.anticons-list {
          margin: 10px 0;
          overflow: hidden;
          direction: ltr;
          list-style: none;

          li {
            position: relative;
            float: left;
            width: 16.66%;
            height: 100px;
            margin: 3px 0;
            padding: 10px 0 0;
            overflow: hidden;
            color: #555;
            text-align: center;
            list-style: none;
            background-color: inherit;
            border-radius: 4px;
            cursor: pointer;
            transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;

            .rtl & {
              margin: 3px 0;
              padding: 10px 0 0;
            }

            `,` {
              margin: 12px 0 8px;
              font-size: 36px;
              transition: transform 0.3s ease-in-out;
              will-change: transform;
            }

            .anticon-class {
              display: block;
              font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono',
                monospace;
              white-space: nowrap;
              text-align: center;
              transform: scale(0.83);

              `,`-badge {
                transition: color 0.3s ease-in-out;
              }
            }

            &:hover {
              color: #fff;
              background-color: `,`;

              `,` {
                transform: scale(1.4);
              }

              `,`-badge {
                color: #fff;
              }
            }

            &.TwoTone:hover {
              background-color: #8ecafe;
            }

            &.copied:hover {
              color: rgba(255, 255, 255, 0.2);
            }

            &::after {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              color: #fff;
              line-height: 110px;
              text-align: center;
              background: #1677ff;
              opacity: 0;
              transition: all 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
              content: 'Copied!';
            }

            &.copied::after {
              opacity: 1;
            }
          }
        }

        .copied-code {
          padding: 2px 4px;
          font-size: 12px;
          background: #f5f5f5;
          border-radius: 2px;
        }
      `])),t,e,a.colorPrimary,t,e)})},b,S=function(){var a=(0,k.Fg)(),e=a.iconCls;return(0,n.jsx)(H.xB,{styles:(0,H.iv)(b||(b=v()([`
        .icon-pic-searcher {
          display: inline-block;
          margin: 0 8px;

          .icon-pic-btn {
            color: `,`;
            cursor: pointer;
            transition: all 0.3s;

            &:hover {
              color: `,`;
            }
          }
        }

        .icon-pic-preview {
          width: 66px;
          height: 66px;
          margin-top: 10px;
          padding: 8px;
          text-align: center;
          border: 1px solid `,`;
          border-radius: 4px;

          > img {
            max-width: 50px;
            max-height: 50px;
          }
        }

        .icon-pic-search-result {
          min-height: 50px;
          padding: 0 10px;

          > .result-tip {
            padding: 10px 0;
            color: `,`;
          }

          > table {
            width: 100%;

            .col-icon {
              width: 80px;
              padding: 10px 0;

              > `,` {
                font-size: 30px;

                :hover {
                  color: `,`;
                }
              }
            }
          }
        }
      `])),a.colorIcon,a.colorIconHover,a.colorBorder,a.colorTextSecondary,e,a.colorLinkHover)})},N,I=function(){return(0,n.jsx)(H.xB,{styles:(0,H.iv)(N||(N=v()([`
      /* Browser mockup code
 * Contribute: https://gist.github.com/jarthod/8719db9fef8deb937f4f
 * Live example: https://updown.io
 */

      .browser-mockup {
        position: relative;
        border-top: 2em solid rgba(230, 230, 230, 0.7);
        border-radius: 3px 3px 0 0;
        box-shadow: 0 0.1em 0.5em 0 rgba(0, 0, 0, 0.28);
      }

      .browser-mockup::before {
        position: absolute;
        top: -1.25em;
        left: 1em;
        display: block;
        width: 0.5em;
        height: 0.5em;
        background-color: #f44;
        border-radius: 50%;
        box-shadow: 0 0 0 2px #f44, 1.5em 0 0 2px #9b3, 3em 0 0 2px #fb5;
        content: '';
      }

      .browser-mockup.with-tab::after {
        position: absolute;
        top: -2em;
        left: 5.5em;
        display: block;
        width: 20%;
        height: 0;
        border-right: 0.8em solid transparent;
        border-bottom: 2em solid white;
        border-left: 0.8em solid transparent;
        content: '';
      }

      .browser-mockup.with-url::after {
        position: absolute;
        top: -1.6em;
        left: 5.5em;
        display: block;
        width: calc(100% - 6em);
        height: 1.2em;
        background-color: white;
        border-radius: 2px;
        content: '';
      }

      .browser-mockup > * {
        display: block;
      }
    `])))})},P,x=function(){var a=(0,k.Fg)();return(0,n.jsx)(H.xB,{styles:(0,H.iv)(P||(P=v()([`
        .nav-phone-icon {
          position: absolute;
          top: 25px;
          right: 30px;
          z-index: 1;
          display: none;
          width: 16px;
          height: 22px;
          cursor: pointer;
        }

        @media only screen and (max-width: `,`px) {
          .code-boxes-col-2-1,
          .code-boxes-col-1-1 {
            float: none;
            width: 100%;
            max-width: unset;
          }
        }

        @media only screen and (max-width: 767.99px) {
          .preview-image-boxes {
            float: none;
            width: 100%;
            margin: 0 !important;
          }

          .preview-image-box {
            width: 100%;
            margin: 10px 0;
            padding: 0;
          }

          .image-wrapper {
            display: none;
          }

          div.version {
            display: block;
            margin: 29px auto 16px;
          }

          .toc {
            display: none;
          }

          .nav-phone-icon {
            display: block;
          }

          .main {
            height: calc(100% - 86px);
          }

          .aside-container {
            float: none;
            width: auto;
            padding-bottom: 30px;
            border-right: 0;
          }

          .ant-row-rtl {
            margin-right: 0;
            margin-left: 0;
            padding-right: 16px;
            padding-left: 16px;

            > .markdown > * {
              width: 100% !important;
            }
          }

          .main-wrapper {
            width: 100%;
            margin: 0;
            border-radius: 0;
          }

          .prev-next-nav {
            width: calc(100% - 32px);
            margin-left: 16px;

            .ant-row-rtl & {
              margin-right: 16px;
              margin-left: 64px;
            }
          }

          .drawer {
            .ant-menu-inline .ant-menu-item::after,
            .ant-menu-vertical .ant-menu-item::after {
              right: auto;
              left: 0;
            }
          }

          /** home \u533A\u5757 **/
          .home-page-wrapper {
            .page {
              h2 {
                margin: 80px auto 64px;
              }
            }

            .parallax-bg {
              display: none;
            }
          }

          .banner {
            display: block;
            height: 632px;

            &-bg-wrapper {
              display: none;
            }

            .img-wrapper,
            .text-wrapper {
              display: inline-block;
              width: 100%;
              min-width: unset;
              max-width: unset;
              margin: auto;
              text-align: center;
            }

            .img-wrapper {
              position: initial;
              margin-top: 20px;
              text-align: center;

              svg {
                width: 100%;
                max-width: 260px;
                height: auto;
                margin: 0 auto;
              }
            }

            .text-wrapper {
              min-height: 200px;
              margin-top: 32px;
              padding: 0;

              h1 {
                display: none;
              }

              p {
                color: #314659;
                font-size: 14px;
                line-height: 28px;
              }

              .banner-btns {
                display: block;
                min-width: 100%;
                white-space: nowrap;
                text-align: center;

                .banner-btn {
                  padding: 0 20px;
                  font-size: 14px;
                }
              }

              .banner-promote {
                min-width: 100%;
                margin-top: 32px;

                .ant-divider {
                  display: none;
                }

                a {
                  font-size: 14px;
                  white-space: nowrap;

                  img {
                    width: 20px;
                  }
                }
              }
            }
          }

          .page1 {
            min-height: 1300px;

            .ant-row {
              margin: 24px auto 64px;

              > div {
                margin-bottom: 48px;
              }
            }
          }

          .page2 {
            min-height: 840px;
            background: `,`;

            &-content {
              box-shadow: none;
            }

            &-components {
              display: none;
            }

            &-product {
              min-height: auto;
              padding: 0 16px;

              .product-block {
                margin-bottom: 34px;
                padding-bottom: 35px;
                border-bottom: 1px solid `,`;

                &:last-child {
                  margin-bottom: 32px;
                  border-bottom: none;

                  .block-text-wrapper {
                    height: auto;
                  }
                }

                .block-image-wrapper {
                  height: 88px;

                  img {
                    height: 100%;
                  }
                }

                .block-text-wrapper {
                  padding-bottom: 0;
                  border-bottom: none;

                  h4 {
                    margin-bottom: 4px;
                    font-size: 18px;
                    line-height: 24px;
                  }

                  p {
                    margin-bottom: 8px;
                    font-size: 12px;
                    line-height: 20px;
                  }

                  a {
                    line-height: 20px;
                  }

                  .components-button-wrapper {
                    margin-top: 16px;
                    font-size: 12px;

                    a {
                      display: block;
                    }
                  }

                  a.more-mobile-react,
                  a.more-mobile-angular {
                    margin-top: 0;
                    color: `,`;
                  }

                  a.more-mobile-react:hover,
                  a.more-mobile-angular:hover {
                    color: #40a9ff;
                  }
                }
              }
            }
          }

          .page3 {
            min-height: 688px;
            background: url('https://gw.alipayobjects.com/zos/rmsportal/qICoJIqqQRMeRGhPHBBS.svg')
              no-repeat;
            background-size: cover;

            .ant-row {
              margin: 0 8px;
            }

            .page3-block {
              margin-bottom: 32px;
              padding: 24px;
              background: `,`;
              border-radius: 4px;
              box-shadow: 0 8px 16px rgba(174, 185, 193, 0.3);

              &:nth-child(2) {
                .page3-img-wrapper img {
                  display: block;
                  width: 70%;
                  margin: auto;
                }
              }

              p {
                font-size: 12px;
              }

              .page3-img-wrapper {
                width: 20%;

                img {
                  width: 100%;
                }
              }

              .page3-text-wrapper {
                width: 80%;
                max-width: initial;
                margin: 0;
                padding-left: 16px;
              }
            }
          }
        }
      `])),a.screenLG,a.colorBgContainer,a.colorSplit,a.colorLink,a.colorBgContainer)})},X,G=function(){var a=(0,k.Fg)();return(0,n.jsx)(H.xB,{styles:(0,H.iv)(X||(X=v()([`
        #nprogress {
          .bar {
            background: `,`;
          }

          .peg {
            box-shadow: 0 0 10px `,", 0 0 5px ",`;
          }

          .spinner-icon {
            border-top-color: `,`;
            border-left-color: `,`;
          }
        }
      `])),a.colorPrimary,a.colorPrimary,a.colorPrimary,a.colorPrimary,a.colorPrimary)})},J,nn=function(){var a=(0,k.Fg)();return(0,n.jsx)(H.xB,{styles:(0,H.iv)(J||(J=v()([`
        .preview-image-boxes {
          display: flex;
          float: right;
          clear: both;
          width: 496px;
          margin: 0 0 70px 64px;

          &-with-carousel {
            width: 420px;

            .preview-image-box img {
              padding: 0;
            }
          }

          .ant-row-rtl & {
            float: left;
            margin: 0 64px 70px 0;
          }
        }

        .preview-image-boxes + .preview-image-boxes {
          margin-top: -35px;
        }

        .preview-image-box {
          float: left;
          width: 100%;
        }

        .preview-image-box + .preview-image-box {
          margin-left: 24px;

          .ant-row-rtl & {
            margin-right: 24px;
            margin-left: 0;
          }
        }

        .preview-image-wrapper {
          position: relative;
          display: inline-block;
          width: 100%;
          padding: 16px;
          text-align: center;
          background: #f2f4f5;
          box-sizing: border-box;
        }

        .preview-image-wrapper.video {
          display: block;
          padding: 0;
          background: 0;
        }

        .preview-image-wrapper video {
          display: block;
          width: 100%;

          + svg {
            position: absolute;
            top: 0;
            left: 0;
          }
        }

        .preview-image-wrapper.good::after {
          position: absolute;
          bottom: 0;
          left: 0;
          display: block;
          width: 100%;
          height: 3px;
          background: `,`;
          content: '';
        }

        .preview-image-wrapper.bad::after {
          position: absolute;
          bottom: 0;
          left: 0;
          display: block;
          width: 100%;
          height: 3px;
          background: `,`;
          content: '';
        }

        .preview-image-title {
          margin-top: 20px;
          color: `,`;
          font-size: 12px;
        }

        .preview-image-description {
          margin-top: 2px;
          color: `,`;
          font-size: 12px;
          line-height: 1.5;
        }

        .preview-image-description hr {
          margin: 2px 0;
          background: none;
          border: 0;
        }

        .preview-image-box img {
          box-sizing: border-box;
          max-width: 100%;
          padding: 12px;
          background: `,`;
          border-radius: `,`px;
          cursor: pointer;
          transition: all 0.3s;

          &.no-padding {
            padding: 0;
            background: none;
          }
        }

        .preview-image-boxes.preview-image-boxes-with-carousel img {
          padding: 0;
          box-shadow: 0 1px 0 0 #ddd, 0 3px 0 0 `,`, 0 4px 0 0 #ddd,
            0 6px 0 0 `,`, 0 7px 0 0 #ddd;
        }

        .preview-image-box img:hover {
          box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.3);
        }

        .transition-video-player,
        .motion-video-min {
          float: right;
          width: 600px;
          padding: 0 0 70px 20px;

          .preview-image-wrapper {
            padding: 0;
          }

          .ant-row-rtl & {
            float: left;
          }
        }

        .motion-video-min {
          width: 390px;
        }

        .motion-principle-wrapper {
          width: 100%;
          max-width: 900px;
          margin: 48px 0 24px;
        }

        .principle-wrapper {
          width: 100%;

          .principle {
            display: inline-block;
            box-sizing: border-box;
            width: 100%;
            min-height: 180px;
            margin-right: 12.5%;
            margin-bottom: 24px;
            padding: 24px;
            font-size: 24px;
            text-align: center;
            border: 1px solid #e8e8e8;
            border-radius: 4px;

            &:last-child {
              margin-right: 0;
            }

            h4 {
              margin: 16px 0 8px;
            }

            p {
              font-size: 12px;
              line-height: 24px;
            }
          }
        }
      `])),a.colorPrimary,a.colorError,a.colorText,a.colorTextSecondary,a.colorBgContainer,a.borderRadius,a.colorBgContainer,a.colorBgContainer)})},rn,en="dumi-default-",an=function(){var a=(0,k.Fg)();return(0,n.jsx)(H.xB,{styles:(0,H.iv)(rn||(rn=v()([`
        html {
          .`,`search-bar {
            &-input {
              color: `,`;
              background: `,`;
              &:focus {
                background: `,`;
              }
              &::placeholder {
                color: `,` !important;
              }
            }
          }
          .`,`search-popover {
            background-color: `,` !important;
            &::before {
              border-bottom-color: `,` !important;
            }
          }
          .`,`search-result {
            dl {
              dt {
                background-color: `,` !important;
              }
              dd {
                a {
                  &:hover {
                    background-color: `,`;
                    h4,
                    p {
                      color: `,` !important;
                    }
                    svg {
                      fill: `,` !important;
                    }
                  }
                }
              }
            }
          }
        }
      `])),en,a.colorText,a.colorBgContainer,a.colorBgContainer,a.colorTextPlaceholder,en,a.colorBgElevated,a.colorBgElevated,en,a.controlItemBgActive,a.controlItemBgHover,a.colorText,a.colorText)})},O,hn=function(){return(0,n.jsx)(H.xB,{styles:(0,H.iv)(O||(O=v()([`
      .design-inline-cards {
        display: flex;
        margin: 0 -20px;
      }
      .design-inline-cards > * {
        flex: 10%;
        margin: 0 20px;
      }
      .design-inline-cards img {
        width: 100%;
        max-width: 100%;
      }
      .design-inline-cards h4 {
        margin-bottom: 0;
      }
    `])))})},Q=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(ae,{}),(0,n.jsx)(he,{}),(0,n.jsx)(ge,{}),(0,n.jsx)(fn,{}),(0,n.jsx)(m,{}),(0,n.jsx)(s,{}),(0,n.jsx)(S,{}),(0,n.jsx)(I,{}),(0,n.jsx)(x,{}),(0,n.jsx)(G,{}),(0,n.jsx)(nn,{}),(0,n.jsx)(hn,{}),(0,n.jsx)(oe,{}),(0,n.jsx)(me,{}),(0,n.jsx)(an,{})]})},un=Q,jn=r(969854),pn=r(705705),ln=r(400166),xn=r(664778),qn=r(533113),An=r(82773),_=r(88910),vn=r(263783),Hn=r(621917),se=r(229177),$n=r(149526),fe=r(173224),_n=r(391298),ye=r(630770),In=r(438199),xe=r(693399),Wn="ant-where-checker",De={cn:{whereNotSupport:"\u4F60\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u73B0\u4EE3 CSS Selector\uFF0C\u8BF7\u4F7F\u7528\u73B0\u4EE3\u6D4F\u89C8\u5668\uFF08\u5982 Chrome\u3001Firefox \u7B49\u7B49\uFF09\u67E5\u770B\u5B98\u7F51\u3002\u5982\u679C\u9700\u8981\u5BF9\u65E7\u7248\u6D4F\u89C8\u5668\u8FDB\u884C\u6837\u5F0F\u652F\u6301\uFF0C\u6B22\u8FCE\u67E5\u9605\u914D\u7F6E\u6587\u6863\uFF1A",whereDocTitle:"\u517C\u5BB9\u6027\u8C03\u6574\uFF08\u8BF7\u4F7F\u7528\u73B0\u4EE3\u6D4F\u89C8\u5668\u8BBF\u95EE\uFF09",whereDocUrl:"/docs/react/customize-theme-cn#\u517C\u5BB9\u6027\u8C03\u6574"},en:{whereNotSupport:"Your browser not support modern CSS Selector. Please use modern browser to view (e.g. Chrome, Firefox, etc). If you want to compatible style with legacy browser, please refer to the configuration document:",whereDocTitle:"Compatible adjustment (Please use modern browser to visit)",whereDocUrl:"/docs/react/customize-theme#compatible-adjustment"}};function He(){var a=(0,h.Z)(De),e=C()(a,1),t=e[0],i=f.useState(!0),l=C()(i,2),d=l[0],g=l[1];return f.useEffect(function(){var y=document.createElement("p");y.className=Wn,y.style.position="fixed",y.style.pointerEvents="none",y.style.visibility="hidden",y.style.width="0",document.body.appendChild(y),(0,xe.updateCSS)(`
:where(.`.concat(Wn,`) {
  content: "__CHECK__";
}
    `),Wn);var j=getComputedStyle(y),p=j.content;g(String(p).includes("CHECK")),document.body.removeChild(y),(0,xe.removeCSS)(Wn)},[]),d?null:(0,n.jsx)("div",{style:{position:"fixed",left:0,right:0,top:0,bottom:0,zIndex:99999999,background:"rgba(0,0,0,0.65)",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,n.jsxs)("div",{style:{border:"1px solid #ffe58f",background:"#fffbe6",color:"rgba(0,0,0,0.88)",padding:"8px 12px",borderRadius:"8px",zIndex:9999999999,lineHeight:"22px",width:520},children:[t.whereNotSupport," ",(0,n.jsx)("a",{style:{color:"#1677ff",textDecoration:"none"},href:t.whereDocUrl,children:t.whereDocTitle})]})})}var ne,ce,ke={cn:{owner:"\u8682\u8681\u96C6\u56E2\u548C Ant Design \u5F00\u6E90\u793E\u533A"},en:{owner:"Ant Group and Ant Design Community"}},Ze=function(){var e=(0,f.useContext)(In.Z),t=e.isMobile;return(0,k.kc)(function(i){var l=i.token,d=i.css,g=new Fn.C((0,ye.Z)("#f0f3fa","#fff")).onBackground(l.colorBgContainer).toHexString();return{holder:d(ne||(ne=v()([`
      background: `,`;
    `])),g),footer:d(ce||(ce=v()([`
      background: `,`;
      color: `,`;
      box-shadow: inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);

      * {
        box-sizing: border-box;
      }

      h2,
      a {
        color: `,`;
      }

      .rc-footer-column {
        margin-bottom: `,`px;
        :last-child {
          margin-bottom: `,`px;
        }
      }

      .rc-footer-item-icon {
        top: -1.5px;
      }

      .rc-footer-container {
        max-width: 1208px;
        margin-inline: auto;
        padding-inline: `,`px;
      }

      .rc-footer-bottom {
        box-shadow: inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);
        .rc-footer-bottom-container {
          font-size: `,`px;
        }
      }
    `])),g,l.colorTextSecondary,l.colorText,t?60:0,t?20:0,l.marginXXL,l.fontSize)}})()},Re=function(){var e=(0,mn.Z)(),t=(0,h.Z)(ke),i=C()(t,2),l=i[0],d=i[1],g=Ze(),y=g.styles,j=e.getLink,p=f.useMemo(function(){var B=d==="cn",F={title:(0,n.jsx)(c._H,{id:"app.footer.resources"}),items:[{title:"Ant Design Charts",url:"https://charts.ant.design",openExternal:!0},{title:"Ant Design Pro",url:"https://pro.ant.design",openExternal:!0},{title:"Ant Design Pro Components",url:"https://procomponents.ant.design",openExternal:!0},{title:"Ant Design Mobile",url:"https://mobile.ant.design",openExternal:!0},{title:"Ant Design Mini",url:"https://mini.ant.design",openExternal:!0},{title:"Ant Design Landing",description:(0,n.jsx)(c._H,{id:"app.footer.landing"}),url:"https://landing.ant.design",openExternal:!0},{title:"Scaffolds",description:(0,n.jsx)(c._H,{id:"app.footer.scaffolds"}),url:"https://scaffold.ant.design",openExternal:!0},{title:"Umi",description:(0,n.jsx)(c._H,{id:"app.footer.umi"}),url:"https://umijs.org",openExternal:!0},{title:"dumi",description:(0,n.jsx)(c._H,{id:"app.footer.dumi"}),url:"https://d.umijs.org",openExternal:!0},{title:"qiankun",description:(0,n.jsx)(c._H,{id:"app.footer.qiankun"}),url:"https://qiankun.umijs.org",openExternal:!0},{title:"ahooks",description:(0,n.jsx)(c._H,{id:"app.footer.hooks"}),url:"https://github.com/alibaba/hooks",openExternal:!0},{title:"Ant Motion",description:(0,n.jsx)(c._H,{id:"app.footer.motion"}),url:"https://motion.ant.design",openExternal:!0},{title:(0,n.jsx)(c._H,{id:"app.footer.chinamirror"}),url:"https://ant-design.antgroup.com"}]},z={title:(0,n.jsx)(c._H,{id:"app.footer.community"}),items:[{icon:(0,n.jsx)(jn.Z,{}),title:(0,n.jsx)(c._H,{id:"app.footer.awesome"}),url:"https://github.com/websemantics/awesome-ant-design",openExternal:!0},{icon:(0,n.jsx)(pn.Z,{}),title:"Medium",url:"http://medium.com/ant-design/",openExternal:!0},{icon:(0,n.jsx)(ln.Z,{style:{color:"#1DA1F2"}}),title:"Twitter",url:"http://twitter.com/antdesignui",openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",width:16,height:16,alt:"yuque"}),title:(0,n.jsx)(c._H,{id:"app.footer.yuque.repo"}),url:"https://yuque.com/ant-design/ant-design",openExternal:!0},{icon:(0,n.jsx)(xn.Z,{style:{color:"#056de8"}}),title:(0,n.jsx)(c._H,{id:"app.footer.zhihu"}),url:"https://www.zhihu.com/column/c_1564262000561106944",openExternal:!0},{icon:(0,n.jsx)(xn.Z,{style:{color:"#056de8"}}),title:(0,n.jsx)(c._H,{id:"app.footer.zhihu.xtech"}),url:"https://www.zhihu.com/column/c_1543658574504751104",openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/mZBWtboYbnMkTBaRIuWQ.png",width:16,height:16,alt:"seeconf"}),title:"SEE Conf",description:(0,n.jsx)(c._H,{id:"app.footer.seeconf"}),url:"https://seeconf.antfin.com/",openExternal:!0}]};B&&z.items.push({icon:(0,n.jsx)(qn.Z,{}),title:(0,n.jsx)(c._H,{id:"app.footer.work_with_us"}),url:j("/docs/resources",{cn:"\u52A0\u5165\u6211\u4EEC",en:"JoinUs"}),LinkComponent:c.rU});var T={title:(0,n.jsx)(c._H,{id:"app.footer.help"}),items:[{icon:(0,n.jsx)(An.Z,{}),title:"GitHub",url:"https://github.com/ant-design/ant-design",openExternal:!0},{icon:(0,n.jsx)(_.Z,{}),title:(0,n.jsx)(c._H,{id:"app.footer.change-log"}),url:j("/changelog"),LinkComponent:c.rU},{icon:(0,n.jsx)(vn.Z,{}),title:(0,n.jsx)(c._H,{id:"app.footer.faq"}),url:j("/docs/react/faq"),LinkComponent:c.rU},{icon:(0,n.jsx)(Hn.Z,{}),title:(0,n.jsx)(c._H,{id:"app.footer.bug-report"}),url:"https://new-issue.ant.design/",openExternal:!0},{icon:(0,n.jsx)(se.Z,{}),title:(0,n.jsx)(c._H,{id:"app.footer.issues"}),url:"https://github.com/ant-design/ant-design/issues",openExternal:!0},{icon:(0,n.jsx)($n.Z,{}),title:(0,n.jsx)(c._H,{id:"app.footer.discussions"}),url:"https://github.com/ant-design/ant-design/discussions",openExternal:!0},{icon:(0,n.jsx)(vn.Z,{}),title:(0,n.jsx)(c._H,{id:"app.footer.stackoverflow"}),url:"http://stackoverflow.com/questions/tagged/antd",openExternal:!0},{icon:(0,n.jsx)(vn.Z,{}),title:(0,n.jsx)(c._H,{id:"app.footer.segmentfault"}),url:"https://segmentfault.com/t/antd",openExternal:!0}]},U={icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",width:22,height:22,alt:"Ant XTech"}),title:(0,n.jsx)(c._H,{id:"app.footer.more-product"}),items:[{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",width:16,height:16,alt:"yuque"}),title:(0,n.jsx)(c._H,{id:"app.footer.yuque"}),url:"https://yuque.com",description:(0,n.jsx)(c._H,{id:"app.footer.yuque.slogan"}),openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/antfincdn/nc7Fc0XBg5/8a6844f5-a6ed-4630-9177-4fa5d0b7dd47.png",width:16,height:16,alt:"AntV"}),title:"AntV",url:"https://antv.vision",description:(0,n.jsx)(c._H,{id:"app.footer.antv.slogan"}),openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://www.eggjs.org/logo.svg",alt:"Egg",width:16,height:16}),title:"Egg",url:"https://eggjs.org",description:(0,n.jsx)(c._H,{id:"app.footer.egg.slogan"}),openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/DMDOlAUhmktLyEODCMBR.ico",width:16,height:16,alt:"kitchen"}),title:"Kitchen",description:(0,n.jsx)(c._H,{id:"app.footer.kitchen"}),url:"https://kitchen.alipay.com",openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",width:16,height:16,alt:"xtech"}),title:(0,n.jsx)(c._H,{id:"app.footer.xtech"}),url:"https://xtech.antfin.com/",openExternal:!0},{icon:(0,n.jsx)(fe.Z,{}),title:(0,n.jsx)(c._H,{id:"app.footer.theme"}),url:j("/theme-editor"),LinkComponent:c.rU}]};return[F,z,T,U]},[d,e.search]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(_n.Z,{columns:p,className:y.footer,bottom:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{style:{opacity:"0.4"},children:["Made with ",(0,n.jsx)("span",{style:{color:"#fff"},children:"\u2764"})," by"]}),(0,n.jsx)("div",{children:l.owner})]})}),(0,n.jsx)(He,{})]})},ze=Re,Oe=r(97857),R=r.n(Oe),Ne=r(9783),we=r.n(Ne),Be=r(53682),Fe=r(39199),$e=r(98651),We=r(469181),Xe=r(344682),Ae=r(664095),Ce=r(883458),Y=r(316165),sn="M448 64l512 0 0 128-128 0 0 768-128 0 0-768-128 0 0 768-128 0 0-448c-123.712 0-224-100.288-224-224s100.288-224 224-224zM64 448l256 224-256 224z",cn="M256 64l512 0 0 128-128 0 0 768-128 0 0-768-128 0 0 768-128 0 0-448c-123.712 0-224-100.288-224-224s100.288-224 224-224zM960 896l-256-224 256-224z",Zn=function(e){return(0,n.jsx)(Y.Z,R()(R()({},e),{},{children:(0,n.jsx)("svg",{viewBox:"0 0 1024 1024",fill:"currentColor",children:(0,n.jsx)("path",{d:e.direction==="ltr"?sn:cn})})}))},Nn=Zn,bn=r(373638),ve,Rn,be=(0,k.kc)(function(a){var e=a.token,t=a.css,i=e.headerHeight,l=e.colorTextHeading,d=e.fontFamily,g=e.mobileMaxWidth;return{logo:t(ve||(ve=v()([`
      height: `,`px;
      padding-inline-start: 40px;
      overflow: hidden;
      color: `,`;
      font-weight: bold;
      font-size: 18px;
      font-family: AlibabaPuHuiTi, `,`, sans-serif;
      line-height: `,`px;
      letter-spacing: -0.18px;
      white-space: nowrap;
      text-decoration: none;
      display: inline-flex;
      align-items: center;

      &:hover {
        color: `,`;
      }

      img {
        height: 32px;
        vertical-align: middle;
        margin-inline-end: 12px;
      }

      @media only screen and (max-width: `,`px) {
        padding-inline-start: 0;
        padding-inline-end: 0;
      }
    `])),i,l,d,i,l,g),title:t(Rn||(Rn=v()([`
      line-height: 32px;
    `])))}}),Pe=function(e){var t=e.isZhCN,i=(0,c.TH)(),l=i.search,d=be(),g=d.styles;return(0,n.jsx)("h1",{children:(0,n.jsxs)(c.rU,{to:bn.J1("/",t,l),className:g.logo,children:[(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",height:32,width:32,alt:"logo"}),(0,n.jsx)("span",{className:g.title,children:"Ant Design"})]})})},Ee=Pe,ho=r(534804),go=r(963918),de=r(905303),qe,_e,nt,et,tt=(0,k.kc)(function(a){var e=a.css,t=a.token;return{smallStyle:e(qe||(qe=v()([`
    font-size: 12px;
    color: #777;
    margin-left: 0.3em;
  `]))),down:e(_e||(_e=v()([`
    color: `,`;
  `])),t.colorTextQuaternary),downOutlined:e(nt||(nt=v()([`
    font-size: 9px;
    margin: -1px 0 0 2px;
    vertical-align: middle;
  `]))),downOutlinedRTL:e(et||(et=v()([`
    font-size: 9px;
    margin: -1px 2px 0 0;
    vertical-align: middle;
  `])))}}),ot=function(){var e=tt(),t=e.styles;return(0,n.jsxs)("span",{className:t.smallStyle,children:["(",(0,n.jsx)(c._H,{id:"app.implementation.community"}),")"]})},rt=function(){return[{label:(0,n.jsx)("a",{href:"https://charts.ant.design",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(c._H,{id:"app.header.menu.charts"})}),key:"charts"},{label:(0,n.jsx)("a",{href:"http://pro.ant.design",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(c._H,{id:"app.header.menu.pro.v4"})}),key:"pro"},{label:(0,n.jsx)("a",{href:"http://procomponents.ant.design",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(c._H,{id:"app.header.menu.pro.components"})}),key:"procomponents"},{label:(0,n.jsxs)("a",{href:"http://ng.ant.design",target:"_blank",rel:"noopener noreferrer",children:["Ant Design of Angular",(0,n.jsx)(ot,{})]}),key:"ng"},{label:(0,n.jsxs)("a",{href:"http://antdv.com",target:"_blank",rel:"noopener noreferrer",children:["Ant Design of Vue",(0,n.jsx)(ot,{})]}),key:"vue"}]},fo=function(e){var t=e.isRTL,i=tt(),l=i.styles;return(0,n.jsx)(go.Z,{menu:{items:rt()},placement:"bottomRight",children:(0,n.jsxs)(de.ZP,{size:"small",children:[(0,n.jsx)(c._H,{id:"app.header.menu.more"}),(0,n.jsx)(ho.Z,{className:w()(t?l.downOutlinedRTL:l.downOutlined,l.down)})]})})},xo=fo,vo=r(719632),ee=r.n(vo),at=r(923232),bo=r(952677),yo=r.n(bo),wo=r(513769),Co=r.n(wo),jo=r(574865),it=r.n(jo),So=["to","children"],ko=(0,f.forwardRef)(function(a,e){var t=a.to,i=a.children,l=Co()(a,So),d=(0,f.useTransition)(),g=C()(d,2),y=g[0],j=g[1],p=(0,c.s0)(),B=(0,c.TH)(),F=B.pathname,z=(0,f.useMemo)(function(){return yo()(t)==="object"?"".concat(t.pathname||F).concat(t.search||"").concat(t.hash||""):t},[t]),T=function(M){z.startsWith("http")||!M.metaKey&&!M.ctrlKey&&!M.shiftKey&&(M.preventDefault(),j(function(){p(z)}))};return(0,f.useLayoutEffect)(function(){y?it().start():it().done()},[y]),(0,n.jsx)("a",R()(R()({ref:e,href:z,onClick:T},l),{},{children:i}))}),Xn=ko,lt,st,zo={cn:{design:"\u8BBE\u8BA1",development:"\u7814\u53D1",components:"\u7EC4\u4EF6",resources:"\u8D44\u6E90",blog:"\u535A\u5BA2"},en:{design:"Design",development:"Development",components:"Components",resources:"Resources",blog:"Blog"}},No=(0,k.kc)(function(a){var e=a.token,t=e.antCls,i=e.iconCls,l=e.fontFamily,d=e.headerHeight,g=e.menuItemBorder,y=e.colorPrimary;return{nav:(0,k.iv)(lt||(lt=v()([`
      height: 100%;
      font-size: 14px;
      font-family: Avenir, `,`, sans-serif;
      border: 0;

      &`,`-menu-horizontal {
        border-bottom: none;

        & > `,"-menu-item, & > ",`-menu-submenu {
          min-width: `,`px;
          height: `,`px;
          padding-right: 12px;
          padding-left: 12px;
          line-height: `,`px;

          &::after {
            top: 0;
            right: 12px;
            bottom: auto;
            left: 12px;
            border-width: `,`px;
          }
        }

        & `,"-menu-submenu-title ",` {
          margin: 0;
        }

        & > `,`-menu-item-selected {
          a {
            color: `,`;
          }
        }
      }

      & > `,"-menu-item, & > ",`-menu-submenu {
        text-align: center;
      }
    `])),l,t,t,t,40+12*2,d,d,g,t,i,t,y,t,t),popoverMenuNav:(0,k.iv)(st||(st=v()([`
      `,`-menu-item,
      `,`-menu-submenu {
        text-align: left;
      }

      `,`-menu-item-group-title {
        padding-left: 24px;
      }

      `,`-menu-item-group-list {
        padding: 0 16px;
      }

      `,`-menu-item,
      a {
        color: #333;
      }
    `])),t,t,t,t,t)}}),Lo=function(a){var e,t,i,l=a.isZhCN,d=a.isClient,g=a.isMobile,y=a.responsive,j=a.directionText,p=a.onLangChange,B=a.onDirectionChange,F=(0,c.TH)(),z=F.pathname,T=F.search,U=(0,h.Z)(zo),M=C()(U,1),L=M[0],D=(0,c.yh)(),Z=((e=D["/docs/blog"])===null||e===void 0||(t=e[0])===null||t===void 0?void 0:t.children)||[],W=No(),A=W.styles,tn=g?"inline":"horizontal",Sn=z.split("/").filter(function(E){return E}).slice(0,-1).join("/"),Ln=Sn||"home";z.startsWith("/changelog")?Ln="docs/react":z.startsWith("/docs/resources")&&(Ln="docs/resources");var dn,Pn=[{label:(0,n.jsx)("a",{href:"https://github.com/ant-design/ant-design",target:"_blank",rel:"noopener noreferrer",children:"GitHub"}),key:"github"},{label:(0,n.jsx)(c._H,{id:"app.header.lang"}),onClick:p,key:"switch-lang"},{label:j,onClick:B,key:"switch-direction"}].concat(ee()(rt()));g?dn=Pn:y==="crowded"&&(dn=[{label:(0,n.jsx)(Be.Z,{}),key:"additional",children:ee()(Pn)}]);var Tn=[{label:(0,n.jsx)(Xn,{to:bn.J1("/docs/spec/introduce",l,T),children:L.design}),key:"docs/spec"},{label:(0,n.jsx)(Xn,{to:bn.J1("/docs/react/introduce",l,T),children:L.development}),key:"docs/react"},{label:(0,n.jsx)(Xn,{to:bn.J1("/components/overview/",l,T),children:L.components}),key:"components"},Z.length?{label:(0,n.jsx)(Xn,{to:bn.J1(Z.sort(function(E,yn){return E.frontmatter.date>yn.frontmatter.date?-1:1})[0].link,l,T),children:L.blog}),key:"docs/blog"}:null,{label:(0,n.jsx)(Xn,{to:bn.J1("/docs/resources",l,T),children:L.resources}),key:"docs/resources"},l&&d&&window.location.host!=="ant-design.antgroup.com"&&window.location.host!=="ant-design.gitee.io"?{label:"\u56FD\u5185\u955C\u50CF",key:"mirror",children:[{label:(0,n.jsx)("a",{href:"https://ant-design.antgroup.com",children:"\u5B98\u65B9\u955C\u50CF"}),icon:(0,n.jsx)("img",{alt:"logo",src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",width:16,style:{verticalAlign:"text-bottom"}}),key:"antgroup"},{label:(0,n.jsx)("a",{href:"https://ant-design.gitee.io",children:"Gitee \u955C\u50CF"}),icon:(0,n.jsx)("img",{alt:"gitee",src:"https://gw.alipayobjects.com/zos/bmw-prod/9e91e124-9bab-4113-b500-301412f6b370.svg",width:16,style:{verticalAlign:"text-bottom"}}),key:"gitee"}]}:null].concat(ee()((i=dn)!==null&&i!==void 0?i:[]));return(0,n.jsx)(at.Z,{mode:tn,selectedKeys:[Ln],className:A.nav,disabledOverflow:!0,items:Tn,style:{borderRight:0}})},ct=r(879587),dt,ut,pt,mt,ht,je="1.2em",To=(0,k.kc)(function(a){var e=a.token,t=a.css,i=e.colorText,l=e.colorBorder,d=e.colorBgContainer,g=e.colorBgTextHover,y=e.borderRadius,j=e.controlHeight,p=e.motionDurationMid;return{btn:t(dt||(dt=v()([`
      color: `,`;
      border-color: `,`;
      padding: 0 !important;
      width: `,`px;
      height: `,`px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: none;
      background: transparent;
      border-radius: `,`px;
      transition: all `,`;
      cursor: pointer;
      .btn-inner {
        transition: all `,`;
      }
      &:hover {
        background: `,`;
      }
      img {
        width: `,`;
        height: `,`;
      }
      .anticon {
        font-size: `,`;
      }
    `])),i,l,j,j,y,p,p,g,je,je,je),innerDiv:t(ut||(ut=v()([`
      position: relative;
      width: `,`;
      height: `,`;
    `])),je,je),labelStyle:t(pt||(pt=v()([`
      position: absolute;
      font-size: `,`;
      line-height: 1;
      border: 1px solid `,`;
      color: `,`;
    `])),je,i,i),label1Style:t(mt||(mt=v()([`
      left: -5%;
      top: 0;
      z-index: 1;
      background-color: `,`;
      color: `,`;
      transform: scale(0.7);
      transform-origin: 0 0;
    `])),i,d),label2Style:t(ht||(ht=v()([`
      right: -5%;
      bottom: 0;
      z-index: 0;
      transform: scale(0.5);
      transform-origin: 100% 100%;
    `])))}}),Bo=function(e){var t=e.label1,i=e.label2,l=e.tooltip1,d=e.tooltip2,g=e.value,y=e.pure,j=e.onClick,p=To(),B=p.styles,F=B.btn,z=B.innerDiv,T=B.labelStyle,U=B.label1Style,M=B.label2Style,L=(0,n.jsx)("button",{onClick:j,className:F,"aria-label":e["aria-label"],children:(0,n.jsxs)("div",{className:"btn-inner",children:[y&&(g===1?t:i),!y&&(0,n.jsxs)("div",{className:z,children:[(0,n.jsx)("span",{className:w()(T,g===1?U:M),children:t}),(0,n.jsx)("span",{className:w()(T,g===1?M:U),children:i})]})]})},"lang-button");return l||d?(0,n.jsx)(ct.Z,{title:g===1?l:d,children:L}):L},Ge=Bo,gt,ft,xt,vt=1120,bt=1200,Ao=(0,k.kc)(function(a){var e=a.token,t=a.css,i="#ced4d9";return{header:t(gt||(gt=v()([`
      position: relative;
      z-index: 10;
      max-width: 100%;
      background: `,`;
      box-shadow: `,`;

      @media only screen and (max-width: `,`px) {
        text-align: center;
      }

      .nav-search-wrapper {
        display: flex;
        flex: auto;
      }

      .dumi-default-search-bar {
        border-inline-start: 1px solid rgba(0, 0, 0, 0.06);

        > svg {
          width: 14px;
          fill: `,`;
        }

        > input {
          height: 22px;
          border: 0;

          &:focus {
            box-shadow: none;
          }

          &::placeholder {
            color: `,`;
          }
        }

        .dumi-default-search-shortcut {
          color: `,`;
          background-color: rgba(150, 150, 150, 0.06);
          border-color: rgba(100, 100, 100, 0.2);
          border-radius: 4px;
        }

        .dumi-default-search-popover {
          inset-inline-start: 11px;
          inset-inline-end: unset;

          &::before {
            inset-inline-start: 100px;
            inset-inline-end: unset;
          }
        }
      }
    `])),e.colorBgContainer,e.boxShadowTertiary,e.mobileMaxWidth,i,i,i),menuRow:t(ft||(ft=v()([`
      display: flex;
      align-items: center;
      margin: 0;

      > * {
        flex: none;
        margin: 0;
        margin-inline-end: 12px;

        &:last-child {
          margin-inline-end: 40px;
        }
      }
    `]))),dataDirectionIcon:t(xt||(xt=v()([`
      width: 16px;
    `]))),popoverMenu:we()({width:300},"".concat(e.antCls,"-popover-inner-content"),{padding:0})}}),yt="ANT_DESIGN_DO_NOT_OPEN_MIRROR_MODAL";function wt(){window.localStorage.setItem(yt,"true")}function Po(){return!window.localStorage.getItem(yt)}var Eo=function(){var e=f.useState(!1),t=C()(e,2),i=t[0],l=t[1],d=(0,h.Z)(),g=C()(d,2),y=g[1],j=(0,c.WF)(),p=j.pkg,B=(0,bn.Is)(),F=(0,f.useState)({menuVisible:!1,windowWidth:1400,searching:!1}),z=C()(F,2),T=z[0],U=z[1],M=(0,f.useContext)(In.Z),L=M.direction,D=M.isMobile,Z=M.updateSiteConfig,W=(0,f.useRef)(null),A=(0,c.TH)(),tn=A.pathname,Sn=A.search,Ln=Ao(),dn=Ln.styles,Pn=(0,f.useCallback)(function(){U(function(on){return R()(R()({},on),{},{menuVisible:!1})})},[]),Tn=(0,f.useCallback)(function(){U(function(on){return R()(R()({},on),{},{windowWidth:window.innerWidth})})},[]),E=(0,f.useCallback)(function(){U(function(on){return R()(R()({},on),{},{menuVisible:!0})})},[]),yn=(0,f.useCallback)(function(on){U(function(Un){return R()(R()({},Un),{},{menuVisible:on})})},[]),Mn=function(){Z({direction:L!=="rtl"?"rtl":"ltr"})};(0,f.useEffect)(function(){Pn()},[A]),(0,f.useEffect)(function(){return l(typeof window!="undefined"),Tn(),window.addEventListener("resize",Tn),W.current=(0,bn.qE)(function(on){on!=="timeout"&&on!=="error"&&window.location.host!=="ant-design.antgroup.com"&&Po()&&$e.Z.confirm({title:"\u63D0\u793A",content:"\u5185\u7F51\u7528\u6237\u63A8\u8350\u8BBF\u95EE\u56FD\u5185\u955C\u50CF\u4EE5\u83B7\u5F97\u6781\u901F\u4F53\u9A8C\uFF5E",okText:"\u{1F680} \u7ACB\u523B\u524D\u5F80",cancelText:"\u4E0D\u518D\u5F39\u51FA",closable:!0,zIndex:99999,onOk:function(){window.open("https://ant-design.antgroup.com","_self"),wt()},onCancel:function(){wt()}})}),function(){window.removeEventListener("resize",Tn),W.current&&clearTimeout(W.current)}},[]);var Dn=(0,f.useCallback)(function(on){var Un=window.location.href,Or=window.location.pathname;if(/overview/.test(Or)&&/0?[1-39][0-3]?x/.test(on)){window.location.href=Un.replace(window.location.origin,on).replace(/\/components\/overview/,"/docs".concat(/0(9|10)x/.test(on)?"":"/react","/introduce")).replace(/\/$/,"");return}var Qe=new URL(Un.replace(window.location.origin,on));Qe.host.includes("antgroup")&&(window.location.href="".concat(Qe.href.replace(/\/$/,""),"/")),window.location.href=Qe.href.replace(/\/$/,"")},[]),Gn=(0,f.useCallback)(function(){var on="".concat(window.location.protocol,"//"),Un=window.location.href.slice(on.length);bn.Fy()&&localStorage.setItem("locale",bn.KE(tn)?"en-US":"zh-CN"),window.location.href=on+Un.replace(window.location.pathname,bn.J1(tn,!bn.KE(tn),Sn).pathname)},[A]),K=(0,f.useMemo)(function(){return L!=="rtl"?"RTL":"LTR"},[L]),q=(0,f.useMemo)(function(){return L==="rtl"?{direction:"ltr",textAlign:"right"}:{}},[L]),wn=T.menuVisible,ue=T.windowWidth,so=T.searching,co=R()(we()({},p.version,p.version),B==null?void 0:B.docVersions),Dr=Object.keys(co).map(function(on){return{value:co[on],label:on}}),uo=["","index","index-cn"].includes(tn),Hr=y==="cn",Zr=L==="rtl",Ke=null;ue<vt?Ke="crowded":ue<bt&&(Ke="narrow");var Rr=w()(dn.header,"clearfix",{"home-header":uo}),Je={isZhCN:Hr,isRTL:Zr,isClient:i},po=(0,n.jsx)(Lo,R()(R()({},Je),{},{responsive:Ke,isMobile:D,directionText:K,onLangChange:Gn,onDirectionChange:Mn}),"nav"),Te=[po,(0,n.jsx)(We.Z,{className:"version",size:"small",defaultValue:p.version,onChange:Dn,dropdownStyle:q,popupMatchSelectWidth:!1,getPopupContainer:function(Un){return Un.parentNode},options:Dr},"version"),(0,n.jsx)(xo,R()({},Je),"more"),(0,n.jsx)(Ge,{onClick:Gn,value:bn.KE(tn)?1:2,label1:"\u4E2D",label2:"En",tooltip1:"\u4E2D\u6587 / English",tooltip2:"English / \u4E2D\u6587"},"lang"),(0,n.jsx)(Ge,{onClick:Mn,value:L==="rtl"?2:1,label1:(0,n.jsx)(Nn,{className:dn.dataDirectionIcon,direction:"ltr"}),tooltip1:"LTR",label2:(0,n.jsx)(Nn,{className:dn.dataDirectionIcon,direction:"rtl"}),tooltip2:"RTL",pure:!0,"aria-label":"RTL Switch Button"},"direction"),(0,n.jsx)("a",{href:"https://github.com/ant-design/ant-design",target:"_blank",rel:"noreferrer",children:(0,n.jsx)(Ge,{value:1,label1:(0,n.jsx)(An.Z,{}),tooltip1:"Github",label2:null,pure:!0})},"github")];ue<vt?Te=so?[]:[po]:ue<bt&&(Te=so?[]:Te);var mo=uo?[{flex:"none"},{flex:"auto"}]:[{xxl:4,xl:5,lg:6,md:6,sm:24,xs:24},{xxl:20,xl:19,lg:18,md:18,sm:0,xs:0}];return(0,n.jsxs)("header",{className:Rr,children:[D&&(0,n.jsx)(Xe.Z,{overlayClassName:dn.popoverMenu,placement:"bottomRight",content:Te,trigger:"click",open:wn,arrow:{arrowPointAtCenter:!0},onOpenChange:yn,children:(0,n.jsx)(Be.Z,{className:"nav-phone-icon",onClick:E})}),(0,n.jsxs)(Ae.Z,{style:{flexFlow:"nowrap",height:64},children:[(0,n.jsx)(Ce.Z,R()(R()({},mo[0]),{},{children:(0,n.jsx)(Ee,R()(R()({},Je),{},{location:A}))})),(0,n.jsxs)(Ce.Z,R()(R()({},mo[1]),{},{className:dn.menuRow,children:[(0,n.jsx)("div",{className:"nav-search-wrapper",children:(0,n.jsx)(Fe.ZP,{})}),!D&&Te]}))]})]})},Io=Eo,Fr=r(945462),Mo=r(377376),Ie=r(185209),Do=function(){var e=(0,c.eL)(),t=(0,f.useMemo)(function(){var g;if(!e.frontmatter.subtitle&&!e.frontmatter.title)g="404 Not Found - Ant Design";else{var y;g="".concat(e.frontmatter.subtitle||""," ").concat(((y=e.frontmatter)===null||y===void 0?void 0:y.title)||""," - Ant Design")}var j=e.frontmatter.description||"";return[g,j]},[e]),i=C()(t,2),l=i[0],d=i[1];return(0,n.jsxs)(c.ql,{children:[(0,n.jsx)("title",{children:l}),(0,n.jsx)("meta",{property:"og:title",content:l}),d&&(0,n.jsx)("meta",{name:"description",content:d})]})},Ct=Do,jt=r(148050),Ho=r(823493),Zo=r.n(Ho),Ro=r(517951),Oo=r(658192),St,kt,zt,Nt=["scroll","resize"],Fo=(0,k.kc)(function(a){var e=a.token,t=a.css,i=e.boxShadowSecondary,l=e.antCls;return{affixTabs:t(St||(St=v()([`
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      z-index: 11;
      padding: 0 40px;
      background: #fff;
      box-shadow: `,`;
      transform: translate3d(0, -100%, 0);
      opacity: 0;
      transition: opacity 0.3s, transform 0.3s;

      `,`-tabs {
        max-width: 1208px;
        margin: 0 auto;

        `,`-tabs-nav {
          margin: 0;

          &::before {
            border-bottom-color: transparent;
          }

          `,`-tabs-tab {
            padding: 21px 0;
          }
        }
      }
    `])),i,l,l,l),affixTabsFixed:t(kt||(kt=v()([`
      transform: translate3d(0, 0, 0);
      opacity: 1;
    `]))),span:t(zt||(zt=v()([`
      text-transform: capitalize;
    `])))}}),Lt=32,$o=function(){var e=f.useRef(null),t=f.useRef([]),i=f.useState(!1),l=C()(i,2),d=l[0],g=l[1],y=f.useState(null),j=C()(y,2),p=j[0],B=j[1],F=Fo(),z=F.styles,T=z.affixTabs,U=z.affixTabsFixed,M=z.span;function L(Z){var W=document.getElementById(Z);if(W){var A=W.offsetTop-e.current.offsetHeight-Lt;(0,Oo.Z)(A)}}f.useEffect(function(){t.current=Array.from(document.querySelectorAll("h2[id]")).map(function(Z){var W=Z.id;return W}),g(!0)},[]),f.useEffect(function(){var Z=decodeURIComponent((location.hash||"").slice(1));Z&&L(Z)},[d]);var D=f.useMemo(function(){function Z(){for(var W=window,A=W.scrollY,tn=e.current.offsetHeight,Sn=t.current.length-1;Sn>=0;Sn-=1){var Ln=t.current[Sn],dn=document.getElementById(Ln),Pn=dn.offsetTop-tn-Lt;if(Pn<=A){B(Ln);return}}B(null)}return Zo()(Z)},[]);return f.useEffect(function(){return Nt.forEach(function(Z){return window.addEventListener(Z,D)}),D(),function(){Nt.forEach(function(Z){return window.removeEventListener(Z,D)})}},[]),(0,n.jsx)("div",{className:w()(T,p&&U),ref:e,children:(0,n.jsx)(Ro.Z,{activeKey:p,onChange:L,items:t.current.map(function(Z){return{key:Z,label:(0,n.jsx)("span",{className:M,children:Z.replace(/-/g," ")})}})})})},Wo=$o,Tt,Bt,At,Pt=40,Me=1208,Ue=24,Xo=(0,k.kc)(function(a){var e=a.token,t=a.css,i=e.antCls;return{resourcePage:t(Tt||(Tt=v()([`
      footer {
        margin-top: 176px;

        .rc-footer-container {
          max-width: `,`px;
          margin: 0 auto;
          padding-right: 0;
          padding-left: 0;
        }
      }
    `])),Me),resourceContent:t(Bt||(Bt=v()([`
      padding: 0 `,`px;
      max-width: `,`px;
      margin: 0 auto;
      box-sizing: content-box;
      min-height: 100vh;

      > .markdown {
        > p {
          margin-bottom: 56px;
        }

        h2 {
          margin-top: 124px;
          color: #314659;
          font-weight: lighter;
          font-size: 30px;
          line-height: 38px;

          &:first-child {
            margin-top: 88px;
          }
        }

        h3 {
          margin-top: 56px;
          font-weight: 400;
          font-size: 24px;
          line-height: 32px;
        }

        p {
          color: #697b8c;
        }
      }

      @media only screen and (max-width: 767.99px) {
        & {
          article {
            padding: 0 `,`px;
          }

          `,`-col {
            padding-top: 16px !important;
            padding-bottom: 16px !important;
          }
        }
      }
    `])),Pt,Me,Ue,i),banner:t(At||(At=v()([`
      padding: 0 `,`px;
      overflow: hidden;
      background: url('https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*y_r7RogIG1wAAAAAAAAAAABkARQnAQ');
      background-size: cover;

      h1 {
        box-sizing: content-box;
        max-width: `,`px;
        margin: 56px auto 16px;
      }

      section {
        max-width: `,`px;
        margin: 0 auto 56px;
        font-weight: 200;
        font-size: 16px;
        line-height: 24px;
      }

      @media only screen and (max-width: 767.99px) {
        & {
          margin: 0 -`,`px;
          padding: 0 `,`px;
        }
      }
    `])),Pt,Me,Me,Ue,Ue)}}),Go=function(e){var t,i=e.children,l=Xo(),d=l.styles,g=(0,c.eL)();return(0,n.jsx)(Bn.ZP,{theme:{token:{colorBgLayout:"#fff"}},children:(0,n.jsxs)(Mo.Z,{children:[(0,n.jsx)(Ct,{}),(0,n.jsxs)("div",{id:"resources-page",className:d.resourcePage,children:[(0,n.jsx)(Wo,{}),(0,n.jsxs)("div",{className:d.banner,children:[(0,n.jsxs)(Ie.Z.Title,{style:{fontSize:30},children:[(t=g.frontmatter)===null||t===void 0?void 0:t.title,(0,n.jsx)(jt.Z,{title:(0,n.jsx)(c._H,{id:"app.content.edit-page"}),filename:g.frontmatter.filename})]}),(0,n.jsx)("section",{children:g.frontmatter.description})]}),(0,n.jsx)("div",{className:d.resourceContent,children:i}),(0,n.jsx)(ze,{})]})]})})},Uo=Go,Vo=r(197302),Yo=r(538294),Et=r(575054),It=r(796586),Ko=r(252901),Jo=r(605071),Ve=r(945016),Qo=r(217187),Le=r(743929),Mt=r(437653),qo=r(965516),_o=r(899242),nr=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=(0,c.yh)(),i=(0,mn.Z)(),l=i.pathname,d=i.search,g=(0,c.tx)(),y=e.before,j=e.after,p=qo.Z.useToken(),B=p.token,F=(0,f.useMemo)(function(){var z,T=ee()(g!=null?g:[]);if(l.startsWith("/docs/spec")){var U=T.splice(0,1);T.push.apply(T,ee()(U))}if(l.startsWith("/docs/react")){var M,L=(M=Object.entries(t).find(function(W){var A=C()(W,1),tn=A[0];return tn.startsWith("/changelog")}))===null||M===void 0?void 0:M[1];L&&T.push.apply(T,ee()(L))}if(l.startsWith("/changelog")){var D,Z=(D=Object.entries(t).find(function(W){var A=C()(W,1),tn=A[0];return tn.startsWith("/docs/react")}))===null||D===void 0?void 0:D[1];Z&&T.unshift.apply(T,ee()(Z))}return(z=T==null?void 0:T.reduce(function(W,A){if(A!=null&&A.title)if(l.startsWith("/docs/spec")){var tn,Sn,Ln=A.children.reduce(function(E,yn){var Mn,Dn=(Mn=yn.frontmatter.type)!==null&&Mn!==void 0?Mn:"default";return E[Dn]||(E[Dn]=[]),E[Dn].push(yn),E},{}),dn=[];dn.push.apply(dn,ee()((tn=(Sn=Ln.default)===null||Sn===void 0?void 0:Sn.map(function(E){return{label:(0,n.jsxs)(Xn,{to:"".concat(E.link).concat(d),children:[y,E==null?void 0:E.title,j]}),key:E.link.replace(/(-cn$)/g,"")}}))!==null&&tn!==void 0?tn:[])),Object.entries(Ln).forEach(function(E){var yn=C()(E,2),Mn=yn[0],Dn=yn[1];Mn!=="default"&&dn.push({type:"group",label:Mn,key:Mn,children:Dn==null?void 0:Dn.map(function(Gn){return{label:(0,n.jsxs)(Xn,{to:"".concat(Gn.link).concat(d),children:[y,Gn==null?void 0:Gn.title,j]}),key:Gn.link.replace(/(-cn$)/g,"")}})})}),W.push({label:A==null?void 0:A.title,key:A==null?void 0:A.title,children:dn})}else{var Pn;W.push({type:"group",label:A==null?void 0:A.title,key:A==null?void 0:A.title,children:(Pn=A.children)===null||Pn===void 0?void 0:Pn.map(function(E){return{label:(0,n.jsxs)(Xn,{to:"".concat(E.link).concat(d),children:[y,(0,n.jsx)("span",{children:E==null?void 0:E.title},"english"),(0,n.jsx)("span",{className:"chinese",children:E.frontmatter.subtitle},"chinese"),E.frontmatter.tag&&(0,n.jsx)(_o.Z,{color:"warning",style:{marginInlineStart:B.marginXS},children:E.frontmatter.tag}),j]}),key:E.link.replace(/(-cn$)/g,"")}})})}else{var Tn=A.children||[];Tn.every(function(E){var yn;return E==null||(yn=E.frontmatter)===null||yn===void 0?void 0:yn.date})&&Tn.sort(function(E,yn){return E.frontmatter.date>yn.frontmatter.date?-1:1}),W.push.apply(W,ee()(Tn.map(function(E){return{label:(0,n.jsxs)(Xn,{to:"".concat(E.link).concat(d),children:[y,E==null?void 0:E.title,j]}),key:E.link.replace(/(-cn$)/g,"")}})))}return W},[]))!==null&&z!==void 0?z:[]},[g,t,l,d,e]);return[F,l]},Dt=nr,Ht,Zt,Rt,Ot,er=(0,k.kc)(function(a){var e=a.token,t=a.css,i=e.colorSplit,l=e.iconCls,d=e.fontSizeIcon;return{prevNextNav:t(Ht||(Ht=v()([`
      width: calc(100% - 234px);
      margin-inline-end: 170px;
      margin-inline-start: 64px;
      overflow: hidden;
      font-size: 14px;
      border-top: 1px solid `,`;
      display: flex;
    `])),i),pageNav:t(Zt||(Zt=v()([`
      flex: 1;
      height: 72px;
      line-height: 72px;
      text-decoration: none;

      `,` {
        color: #999;
        font-size: `,`px;
        transition: all 0.3s;
      }

      .chinese {
        margin-inline-start: 4px;
      }
    `])),l,d),prevNav:t(Rt||(Rt=v()([`
      text-align: start;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      .footer-nav-icon-after {
        display: none;
      }

      .footer-nav-icon-before {
        position: relative;
        line-height: 0;
        vertical-align: middle;
        transition: inset-inline-end 0.3s;
        margin-inline-end: 1em;
        inset-inline-end: 0;
      }

      &:hover .footer-nav-icon-before {
        inset-inline-end: 0.2em;
      }
    `]))),nextNav:t(Ot||(Ot=v()([`
      text-align: end;
      display: flex;
      justify-content: flex-end;
      align-items: center;

      .footer-nav-icon-before {
        display: none;
      }

      .footer-nav-icon-after {
        position: relative;
        margin-bottom: 1px;
        line-height: 0;
        vertical-align: middle;
        transition: inset-inline-start 0.3s;
        margin-inline-start: 1em;
        inset-inline-start: 0;
      }

      &:hover .footer-nav-icon-after {
        inset-inline-start: 0.2em;
      }
    `])))}}),tr=function a(e){return Array.isArray(e)?e.reduce(function(t,i){if(!i)return t;if("children"in i&&i.children){var l;return t.concat((l=a(i.children))!==null&&l!==void 0?l:[])}return t.concat(i)},[]):null},or=function(e){var t=e.rtl,i=er(),l=i.styles,d={className:"footer-nav-icon-before"},g={className:"footer-nav-icon-after"},y=t?(0,n.jsx)(Le.Z,R()({},d)):(0,n.jsx)(Mt.Z,R()({},d)),j=t?(0,n.jsx)(Mt.Z,R()({},g)):(0,n.jsx)(Le.Z,R()({},g)),p=Dt({before:y,after:j}),B=C()(p,2),F=B[0],z=B[1],T=(0,f.useContext)(In.Z),U=T.isMobile,M=(0,f.useMemo)(function(){var W=tr(F);if(!W)return[null,null];var A=-1;return W.forEach(function(tn,Sn){tn&&tn.key===z&&(A=Sn)}),[W[A-1],W[A+1]]},[F,z]),L=C()(M,2),D=L[0],Z=L[1];return U?null:(0,n.jsxs)("section",{className:l.prevNextNav,children:[D&&f.cloneElement(D.label,{className:w()(l.pageNav,l.prevNav,D.className)}),Z&&f.cloneElement(Z.label,{className:w()(l.pageNav,l.nextNav,Z.className)})]})},rr=or,ar=r(302281),ir=r(15060),lr=r(889812),Ft,$t,Wt,sr=(0,k.kc)(function(a){var e=a.token,t=a.css;return{history:t(Ft||(Ft=v()([`
    position: absolute;
    top: 0;
    inset-inline-end: 0;
  `]))),li:t($t||($t=v()([`
    // white-space: pre;
  `]))),ref:t(Wt||(Wt=v()([`
    margin-left: `,`px;
  `])),e.marginXS)}}),cr={cn:{full:"\u5B8C\u6574\u66F4\u65B0\u65E5\u5FD7",changelog:"\u66F4\u65B0\u65E5\u5FD7",loading:"\u52A0\u8F7D\u4E2D...",empty:"\u6682\u65E0\u66F4\u65B0"},en:{full:"Full Changelog",changelog:"Changelog",loading:"loading...",empty:"Nothing update"}};function dr(a){var e=a.changelog,t=e===void 0?"":e,i=a.refs,l=i===void 0?[]:i,d=a.styles,g=f.useMemo(function(){for(var y=[],j=!1,p="",B=0;B<t.length;B+=1){var F=t[B];if(F!=="`")p+=F;else{var z=p;j&&(z=(0,n.jsx)("code",{children:z})),y.push(z),p="",j=!j}}return y.push(p),y},[t]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{children:g}),l==null?void 0:l.map(function(y){var j;return(0,n.jsxs)("a",{className:d.ref,href:y,target:"_blank",rel:"noreferrer",children:["#",(j=y.match(/^.*\/(\d+)$/))===null||j===void 0?void 0:j[1]]},y)})]})}function ur(a,e){var t=(0,lr.Z)(e==="cn"?{key:"component-changelog-cn",request:function(){return r.e(2104).then(r.t.bind(r,332104,19))}}:{key:"component-changelog-en",request:function(){return r.e(5212).then(r.t.bind(r,365212,19))}});return(0,f.useMemo)(function(){var i=a.replace(/-/g,""),l=Object.keys(t).find(function(d){return d.toLowerCase()===i.toLowerCase()});return t[l]},[t,a])}function pr(a){var e,t=a.pathname,i=t===void 0?"":t,l=(0,h.Z)(cr),d=C()(l,2),g=d[0],y=d[1],j=f.useState(!1),p=C()(j,2),B=p[0],F=p[1],z=sr(),T=z.styles,U=((e=i.match(/\/components\/([^/]+)/))===null||e===void 0?void 0:e[1])||"",M=ur(U,y),L=f.useMemo(function(){var D={};return M==null||M.forEach(function(Z){D[Z.version]=D[Z.version]||[],D[Z.version].push(Z)}),Object.keys(D).map(function(Z){var W=D[Z];return{children:(0,n.jsxs)(Ie.Z,{children:[(0,n.jsx)("h4",{children:Z}),(0,n.jsx)("ul",{children:W.map(function(A,tn){return(0,n.jsx)("li",{className:T.li,children:(0,n.jsx)(dr,R()(R()({},A),{},{styles:T}))},tn)})})]})}})},[M]);return!M||!M.length?null:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(de.ZP,{className:T.history,icon:(0,n.jsx)(_.Z,{}),onClick:function(){F(!0)},children:g.changelog}),(0,n.jsx)(ar.Z,{title:g.changelog,extra:(0,n.jsx)(Xn,{style:{fontSize:14},to:"/changelog".concat(y==="cn"?"-cn":""),children:g.full}),open:B,width:"40vw",onClose:function(){F(!1)},destroyOnClose:!0,children:(0,n.jsx)(ir.Z,{items:L})})]})}var mr=function(a){return(0,n.jsx)(f.Suspense,{fallback:null,children:(0,n.jsx)(pr,R()({},a))})},hr=r(524229),Xt=r(793914),gr=r(294047),Gt=r(315816),fr=function(e){var t=e.className,i=e.style;return(0,n.jsx)("svg",{className:t,style:i,xmlns:"http://www.w3.org/2000/svg",width:"36",height:"28",viewBox:"0 0 36 28",fill:"none",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.5875 6.77268L21.8232 3.40505L17.5875 0.00748237L17.5837 0L13.3555 3.39757L17.5837 6.76894L17.5875 6.77268ZM17.5863 17.3955H17.59L28.5161 8.77432L25.5526 6.39453L17.59 12.6808H17.5863L17.5825 12.6845L9.61993 6.40201L6.66016 8.78181L17.5825 17.3992L17.5863 17.3955ZM17.5828 23.2891L17.5865 23.2854L32.2133 11.7456L35.1768 14.1254L28.5238 19.3752L17.5865 28L0.284376 14.3574L0 14.1291L2.95977 11.7531L17.5828 23.2891Z",fill:"currentColor"})})},Ut=fr,Vt,Yt,Kt,Jt,Qt,qt,_t,Ye="https://picx.zhimg.com/v2-3b2bca09c2771e7a82a81562e806be4d.jpg?source=d16d100b",xr=(0,k.kc)(function(a){var e=a.token,t=a.css;return{card:t(Vt||(Vt=v()([`
      width: 100%;
      margin: 40px 0;
      transition: all 0.2s;
      background-color: `,`;
    `])),e.colorFillQuaternary),bigTitle:t(Yt||(Yt=v()([`
      font-size: 16px;
      color: #121212;
      margin-bottom: 24px;
      font-weight: 600;
    `]))),cardBody:t(Kt||(Kt=v()([`
      display: flex;
      justify-content: space-between;
      align-items: center;
    `]))),left:t(Jt||(Jt=v()([`
      display: flex;
      justify-content: flex-start;
      align-items: center;
      img {
        width: 200px;
        margin-right: 24px;
        overflow: hidden;
        border-radius: 8px;
      }
    `]))),title:t(Qt||(Qt=v()([`
      color: #444;
      font-size: 16px;
      font-weight: 600;
    `]))),subTitle:t(qt||(qt=v()([`
      display: flex;
      justify-content: flex-start;
      align-items: center;
      color: #646464;
      font-size: 14px;
      font-weight: 400;
      margin-top: 8px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      .logo {
        width: 24px;
        height: 24px;
        font-size: 24px;
        &.zhihu-logo {
          color: #056de8;
        }
        &.yuque-logo {
          color: #00b96b;
        }
        &.juejin-logo {
          color: #1e80ff;
        }
      }
      .arrowIcon {
        margin: 0 8px;
        color: #8a8f8d;
        font-size: 12px;
      }
      .zl-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        color: #646464;
      }
    `]))),btn:t(_t||(_t=v()([`
      display: flex;
      justify-content: center;
      align-items: center;
    `])))}}),vr={cn:{bigTitle:"\u6587\u7AE0\u88AB\u4EE5\u4E0B\u4E13\u680F\u6536\u5F55\uFF1A",zhiHu:"\u4E00\u4E2A UI \u8BBE\u8BA1\u4F53\u7CFB",yuQue:"Ant Design \u5B98\u65B9\u4E13\u680F",junjin:"Ant Design \u5F00\u6E90\u4E13\u680F",buttonText:"\u6211\u6709\u60F3\u6CD5\uFF0C\u53BB\u53C2\u4E0E\u8BA8\u8BBA"},en:{bigTitle:"Articles are included in the column:",zhiHu:"A UI design system",yuQue:"Ant Design official column",junjin:"Ant Design Open Source Column",buttonText:"Go to discuss"}},br=function(e){var t=e.zhihuLink,i=e.yuqueLink,l=e.juejinLink,d=(0,h.Z)(vr),g=C()(d,1),y=g[0],j=xr(),p=j.styles,B=p.card,F=p.bigTitle,z=p.cardBody,T=p.left,U=p.title,M=p.subTitle,L=p.btn;return!t&&!i&&!l?null:(0,n.jsxs)(gr.Z,{className:B,bordered:!1,children:[(0,n.jsx)("h3",{className:F,children:y.bigTitle}),t&&(0,n.jsxs)("div",{className:z,children:[(0,n.jsxs)("div",{className:T,children:[(0,n.jsx)("img",{src:Ye,alt:"antd"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:U,children:"Ant Design"}),(0,n.jsxs)("div",{className:M,children:[(0,n.jsx)(xn.Z,{className:"logo zhihu-logo"}),(0,n.jsx)(Le.Z,{className:"arrowIcon"}),(0,n.jsx)(de.ZP,{target:"_blank",href:"https://www.zhihu.com/column/c_1564262000561106944",className:"zl-btn",type:"link",children:y.zhiHu})]})]})]}),(0,n.jsx)(de.ZP,{type:"primary",className:L,icon:(0,n.jsx)(xn.Z,{style:{fontSize:16}}),ghost:!0,target:"_blank",href:t,children:y.buttonText})]}),i&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Gt.Z,{}),(0,n.jsxs)("div",{className:z,children:[(0,n.jsxs)("div",{className:T,children:[(0,n.jsx)("img",{src:Ye,alt:"antd"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:U,children:"Ant Design"}),(0,n.jsxs)("div",{className:M,children:[(0,n.jsx)(Xt.Z,{className:"logo yuque-logo"}),(0,n.jsx)(Le.Z,{className:"arrowIcon"}),(0,n.jsx)(de.ZP,{target:"_blank",href:"https://www.yuque.com/ant-design/ant-design",className:"zl-btn",type:"link",children:y.yuQue})]})]})]}),(0,n.jsx)(de.ZP,{type:"primary",className:L,icon:(0,n.jsx)(Xt.Z,{style:{fontSize:16}}),ghost:!0,target:"_blank",href:i,children:y.buttonText})]})]}),l&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Gt.Z,{}),(0,n.jsxs)("div",{className:z,children:[(0,n.jsxs)("div",{className:T,children:[(0,n.jsx)("img",{src:Ye,alt:"antd"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:U,children:"Ant Design"}),(0,n.jsxs)("div",{className:M,children:[(0,n.jsx)(Ut,{className:"logo juejin-logo"}),(0,n.jsx)(Le.Z,{className:"arrowIcon"}),(0,n.jsx)(de.ZP,{target:"_blank",href:"https://juejin.cn/column/7247354308258054200",className:"zl-btn",type:"link",children:y.junjin})]})]})]}),(0,n.jsx)(de.ZP,{type:"primary",className:L,icon:(0,n.jsx)(Ut,{style:{fontSize:16,width:16,height:16}}),ghost:!0,target:"_blank",href:l,children:y.buttonText})]})]})]})},yr=br,no,eo,to,oo,ro,wr=(0,k.kc)(function(a){var e=a.token,t=a.css,i=e.antCls;return{contributorsList:t(no||(no=v()([`
      display: flex;
      flex-wrap: wrap;
      margin-top: 120px !important;
      clear: both;

      li {
        height: 24px;
      }

      li,
      `,"-avatar + ",`-avatar {
        transition: all `,`;
        margin-inline-end: -8px;
      }
      &:hover {
        li,
        `,`-avatar {
          margin-inline-end: 0;
        }
      }
    `])),i,i,e.motionDurationSlow,i),listMobile:t(eo||(eo=v()([`
      margin: 1em 0 !important;
    `]))),toc:t(to||(to=v()([`
      `,`-anchor {
        `,`-anchor-link-title {
          font-size: 12px;
        }
      }
    `])),i,i),tocWrapper:t(oo||(oo=v()([`
      position: absolute;
      top: 8px;
      inset-inline-end: 0;
      width: 160px;
      margin: 12px 0;
      padding: 8px 0;
      padding-inline: 4px 8px;
      backdrop-filter: blur(8px);
      border-radius: `,`px;
      box-sizing: border-box;

      .toc-debug {
        color: `,`;

        &:hover {
          color: `,`;
        }
      }

      > div {
        box-sizing: border-box;
        width: 100%;
        max-height: calc(100vh - 40px) !important;
        margin: 0 auto;
        overflow: auto;
        padding-inline: 4px;
      }

      @media only screen and (max-width: `,`px) {
        display: none;
      }
    `])),e.borderRadius,e.purple6,e.purple5,e.screenLG),articleWrapper:t(ro||(ro=v()([`
      padding: 0 170px 32px 64px;

      &.rtl {
        padding: 0 64px 144px 170px;
      }

      @media only screen and (max-width: `,`px) {
        &,
        &.rtl {
          padding: 0 48px;
        }
      }
    `])),e.screenLG)}}),Cr=function(e){var t=e.num,i=t===void 0?3:t;return(0,n.jsx)("li",{children:Array.from({length:i}).map(function(l,d){return(0,n.jsx)(Et.Z.Avatar,{size:"small",active:!0,style:{marginLeft:d===0?0:-8}},d)})})},jr=function(e){var t=e.name,i=e.avatar,l=(0,f.useState)(!0),d=C()(l,2),g=d[0],y=d[1],j=(0,f.useState)(!1),p=C()(j,2),B=p[0],F=p[1];return(0,f.useLayoutEffect)(function(){var z=new Image;z.src=i,z.onload=function(){return y(!1)},z.onerror=function(){return F(!0)}},[]),B?null:g?(0,n.jsx)(Et.Z.Avatar,{size:"small",active:!0}):(0,n.jsx)(It.C,{size:"small",src:i,alt:t,children:t})},Sr=function(e){var t,i,l,d,g,y,j=e.children,p=(0,c.eL)(),B=(0,c.zh)(),F=(0,mn.Z)(),z=F.pathname,T=F.hash,U=(0,c.YB)(),M=U.formatMessage,L=wr(),D=L.styles,Z=(0,k.Fg)(),W=(0,f.useContext)(In.Z),A=W.direction,tn=W.isMobile,Sn=(0,Qo.Z)(!1),Ln=C()(Sn,2),dn=Ln[0],Pn=Ln[1],Tn=(0,f.useMemo)(function(){var K;return((K=p.toc)===null||K===void 0?void 0:K.filter(function(q){return q._debug_demo}).map(function(q){return q.id}))||[]},[p]),E=Tn.includes(T.slice(1));(0,f.useLayoutEffect)(function(){Pn(E)},[]);var yn=(0,f.useMemo)(function(){return{showDebug:dn,setShowDebug:Pn}},[dn,Tn]),Mn=(0,f.useMemo)(function(){return((B==null?void 0:B.toc)||p.toc).reduce(function(K,q){if(q.depth===2)K.push(R()({},q));else if(q.depth===3){var wn=K[K.length-1];wn&&(wn.children=wn.children||[],wn.children.push(R()({},q)))}return K},[])},[B==null?void 0:B.toc,p.toc]),Dn=A==="rtl",Gn=(0,f.useMemo)(function(){var K=p.frontmatter.author;return K?typeof K=="string"?K.split(",").map(function(q){return{name:q,avatar:"https://github.com/".concat(q,".png")}}):Array.isArray(K)?K:[]:[]},[p.frontmatter.author]);return(0,n.jsx)(hr.Z.Provider,{value:yn,children:(0,n.jsxs)(Ce.Z,{xxl:20,xl:19,lg:18,md:18,sm:24,xs:24,children:[(0,n.jsx)(Ko.Z,{children:(0,n.jsx)("section",{className:D.tocWrapper,children:(0,n.jsx)(Jo.Z,{className:D.toc,affix:!1,targetOffset:Z.marginXXL,showInkInFixed:!0,items:Mn.map(function(K){var q;return{href:"#".concat(K.id),title:K.title,key:K.id,children:(q=K.children)===null||q===void 0?void 0:q.filter(function(wn){return dn||!Tn.includes(wn.id)}).map(function(wn){return{key:wn.id,href:"#".concat(wn.id),title:(0,n.jsx)("span",{className:w()(Tn.includes(wn.id)&&"toc-debug"),children:wn==null?void 0:wn.title})}})}})})})}),(0,n.jsxs)("article",{className:w()(D.articleWrapper,{rtl:Dn}),children:[(t=p.frontmatter)!==null&&t!==void 0&&t.title?(0,n.jsxs)(Ie.Z.Title,{style:{fontSize:30,position:"relative"},children:[(0,n.jsxs)(Ve.Z,{size:"small",children:[(i=p.frontmatter)===null||i===void 0?void 0:i.title,(l=p.frontmatter)===null||l===void 0?void 0:l.subtitle,!z.startsWith("/components/overview")&&(0,n.jsx)(jt.Z,{title:(0,n.jsx)(c._H,{id:"app.content.edit-page"}),filename:p.frontmatter.filename})]}),z.startsWith("/components/")&&(0,n.jsx)(mr,{pathname:z})]}):null,p.frontmatter.date||p.frontmatter.author?(0,n.jsx)(Ie.Z.Paragraph,{children:(0,n.jsxs)(Ve.Z,{children:[p.frontmatter.date&&(0,n.jsxs)("span",{style:{opacity:.65},children:[(0,n.jsx)(Vo.Z,{})," ",gn()(p.frontmatter.date).format("YYYY-MM-DD")]}),Gn.map(function(K){return(0,n.jsx)("a",{href:"https://github.com/".concat(K.name),target:"_blank",rel:"noopener noreferrer",children:(0,n.jsxs)(Ve.Z,{size:3,children:[(0,n.jsx)(jr,{name:K.name,avatar:K.avatar}),(0,n.jsxs)("span",{style:{opacity:.65},children:["@",K.name]})]})},K.name)})]})}):null,!p.frontmatter.__autoDescription&&p.frontmatter.description,(0,n.jsx)("div",{style:{minHeight:"calc(100vh - 64px)"},children:j}),(((d=p.frontmatter)===null||d===void 0?void 0:d.zhihu_url)||((g=p.frontmatter)===null||g===void 0?void 0:g.yuque_url)||((y=p.frontmatter)===null||y===void 0?void 0:y.juejin_url))&&(0,n.jsx)(yr,{zhihuLink:p.frontmatter.zhihu_url,yuqueLink:p.frontmatter.yuque_url,juejinLink:p.frontmatter.juejin_url}),p.frontmatter.filename&&(0,n.jsx)(Yo.Z,{cache:!0,repo:"ant-design",owner:"ant-design",className:w()(D.contributorsList,we()({},D.listMobile,tn)),fileName:p.frontmatter.filename,renderItem:function(q,wn){var ue;return!q||wn?(0,n.jsx)(Cr,{}):(ue=q.username)!==null&&ue!==void 0&&ue.includes("github-actions")?null:(0,n.jsx)(ct.Z,{mouseEnterDelay:.3,title:"".concat(M({id:"app.content.contributors"}),": ").concat(q.username),children:(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"https://github.com/".concat(q.username),target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(It.C,{size:"small",src:q.url,alt:q.username,children:q.username})})})},q.username)}})]}),(0,n.jsx)(rr,{rtl:Dn}),(0,n.jsx)(ze,{})]})})},kr=Sr,zr=r(650010),ao,io,Nr=(0,k.kc)(function(a){var e=a.token,t=a.css,i=e.antCls,l=e.fontFamily,d=e.colorSplit;return{asideContainer:t(ao||(ao=v()([`
      min-height: 100%;
      padding-bottom: 48px;
      font-family: Avenir, `,`, sans-serif;

      &`,`-menu-inline {
        `,`-menu-submenu-title h4,
        > `,`-menu-item,
        `,`-menu-item a {
          overflow: hidden;
          font-size: 14px;
          text-overflow: ellipsis;
        }

        > `,"-menu-item-group > ",`-menu-item-group-title {
          margin-top: 16px;
          margin-bottom: 16px;
          font-size: 13px;

          &::after {
            position: relative;
            top: 12px;
            display: block;
            width: calc(100% - 20px);
            height: 1px;
            background: `,`;
            content: '';
          }
        }

        > `,`-menu-item,
        > `,`-menu-submenu
        > `,`-menu-submenu-title,
        > `,`-menu-item-group
        > `,`-menu-item-group-title,
        > `,`-menu-item-group
        > `,`-menu-item-group-list
        > `,`-menu-item,
        &`,`-menu-inline
        > `,`-menu-item-group
        > `,`-menu-item-group-list
        > `,`-menu-item {
          padding-left: 40px !important;

          `,`-row-rtl & {
            padding-right: 40px !important;
            padding-left: 16px !important;
          }
        }

        // Nest Category > Type > Article
        &`,`-menu-inline {
          `,`-menu-item-group-title {
            margin-left: 4px;
            padding-left: 60px;

            `,`-row-rtl & {
              padding-right: 60px;
              padding-left: 16px;
            }
          }

          `,"-menu-item-group-list > ",`-menu-item {
            padding-left: 80px !important;

            `,`-row-rtl & {
              padding-right: 80px !important;
              padding-left: 16px !important;
            }
          }
        }

        `,`-menu-item-group:first-child {
          `,`-menu-item-group-title {
            margin-top: 0;
          }
        }
      }

      a[disabled] {
        color: #ccc;
      }

      .chinese {
        margin-left: 6px;
        font-weight: normal;
        font-size: 12px;
        opacity: 0.67;
      }
    `])),l,i,i,i,i,i,i,d,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),mainMenu:t(io||(io=v()([`
      z-index: 1;

      .main-menu-inner {
        position: sticky;
        top: 0;
        width: 100%;
        height: 100%;
        max-height: 100vh;
        overflow: hidden;
      }

      &:hover .main-menu-inner {
        overflow-y: auto;
      }
    `])))}}),Lr=function(){var e=(0,c.tx)(),t=(0,f.useContext)(In.Z),i=t.isMobile,l=t.theme,d=Nr(),g=d.styles,y=Dt(),j=C()(y,2),p=j[0],B=j[1],F=l.includes("dark"),z=(0,k.Fg)(),T=z.colorBgContainer,U=(0,n.jsx)(Bn.ZP,{theme:{components:{Menu:{itemBg:T,darkItemBg:T}}},children:(0,n.jsx)(at.Z,{items:p,inlineIndent:30,className:g.asideContainer,mode:"inline",theme:F?"dark":"light",selectedKeys:[B],defaultOpenKeys:e==null?void 0:e.map(function(M){var L=M.title;return L}).filter(function(M){return M})})});return i?(0,n.jsx)(zr.Z,{children:U},"Mobile-menu"):(0,n.jsx)(Ce.Z,{xxl:4,xl:5,lg:6,md:6,sm:24,xs:24,className:g.mainMenu,children:(0,n.jsx)("section",{className:"main-menu-inner",children:U})})},Tr=Lr,lo,Br=(0,k.kc)(function(a){var e=a.css;return{main:e(lo||(lo=v()([`
    display: flex;
    margin-top: 40px;
  `])))}}),Ar=function(e){var t=e.children,i=Br(),l=i.styles;return(0,n.jsxs)("main",{className:l.main,children:[(0,n.jsx)(Ct,{}),(0,n.jsx)(Tr,{}),(0,n.jsx)(kr,{children:t})]})},Pr=Ar,Er={cn:{title:"Ant Design - \u4E00\u5957\u4F01\u4E1A\u7EA7 UI \u8BBE\u8BA1\u8BED\u8A00\u548C React \u7EC4\u4EF6\u5E93",description:"\u57FA\u4E8E Ant Design \u8BBE\u8BA1\u4F53\u7CFB\u7684 React UI \u7EC4\u4EF6\u5E93\uFF0C\u7528\u4E8E\u7814\u53D1\u4F01\u4E1A\u7EA7\u4E2D\u540E\u53F0\u4EA7\u54C1\u3002"},en:{title:"Ant Design - The world's second most popular React UI framework",description:"An enterprise-class UI design language and React UI library with a set of high-quality React components, one of best React UI library for enterprises"}},Ir=function(){var e=(0,c.pC)(),t=(0,mn.Z)(),i=t.pathname,l=t.search,d=t.hash,g=(0,h.Z)(Er),y=C()(g,2),j=y[0],p=y[1],B=(0,f.useRef)(null),F=(0,f.useContext)(In.Z),z=F.direction,T=(0,c.WF)(),U=T.loading;(0,f.useLayoutEffect)(function(){p==="cn"?gn().locale("zh-cn"):gn().locale("en")},[]),(0,f.useEffect)(function(){var L=document.getElementById("nprogress-style");L&&(B.current=setTimeout(function(){var D;(D=L.parentNode)===null||D===void 0||D.removeChild(L)},0))},[]),(0,f.useEffect)(function(){var L,D=d.replace("#","");D&&((L=document.getElementById(decodeURIComponent(D)))===null||L===void 0||L.scrollIntoView())},[U,d]),f.useEffect(function(){typeof window.ga!="undefined"&&window.ga("send","pageview",i+l),typeof window._hmt!="undefined"&&window._hmt.push(["_trackPageview",i+l])},[t]);var M=(0,f.useMemo)(function(){return["","/"].some(function(L){return L===i})||["/index"].some(function(L){return i.startsWith(L)})?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{style:{minHeight:"100vh"},children:e}),(0,n.jsx)(ze,{})]}):i.startsWith("/docs/resource")?(0,n.jsx)(Uo,{children:e}):i.startsWith("/theme-editor")?e:(0,n.jsx)(Pr,{children:e})},[i,e]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(c.ql,{encodeSpecialCharacters:!1,children:[(0,n.jsx)("html",{lang:p==="cn"?"zh-CN":p,"data-direction":z,className:w()({rtl:z==="rtl"})}),(0,n.jsx)("title",{children:j==null?void 0:j.title}),(0,n.jsx)("link",{sizes:"144x144",href:"https://gw.alipayobjects.com/zos/antfincdn/UmVnt3t4T0/antd.png"}),(0,n.jsx)("meta",{name:"description",content:j.description}),(0,n.jsx)("meta",{property:"og:title",content:j==null?void 0:j.title}),(0,n.jsx)("meta",{property:"og:description",content:j.description}),(0,n.jsx)("meta",{property:"og:type",content:"website"}),(0,n.jsx)("meta",{property:"og:image",content:"https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png"})]}),(0,n.jsxs)(Bn.ZP,{direction:z,locale:p==="cn"?V.Z:void 0,children:[(0,n.jsx)(un,{}),(0,n.jsx)(Io,{}),M]})]})},Mr=Ir},605071:function(Se,En,r){r.d(En,{Z:function(){return $}});var kn=r(97857),C=r.n(kn),Cn=r(9783),w=r.n(Cn),Vn=r(719632),gn=r.n(Vn),Yn=r(805574),c=r.n(Yn),f=r(294184),V=r.n(f),Bn=r(318545),h=r(667294),mn=r(517423),te=r(982673),v=r(658192),H=r(252901),k=r(73287),n=h.createContext(void 0),On=n,zn=r(785893),pe=function(o){var s=o.href,b=o.title,S=o.prefixCls,N=o.children,I=o.className,P=o.target,x=o.replace,X=h.useContext(On),G=X||{},J=G.registerLink,nn=G.unregisterLink,rn=G.scrollTo,en=G.onClick,an=G.activeLink,O=G.direction;h.useEffect(function(){return J==null||J(s),function(){nn==null||nn(s)}},[s]);var hn=function(An){x&&(An.preventDefault(),window.location.replace(s)),en==null||en(An,{title:b,href:s}),rn==null||rn(s)},Q=h.useContext(k.E_),un=Q.getPrefixCls,jn=un("anchor",S),pn=an===s,ln=V()("".concat(jn,"-link"),I,w()({},"".concat(jn,"-link-active"),pn)),xn=V()("".concat(jn,"-link-title"),w()({},"".concat(jn,"-link-title-active"),pn));return(0,zn.jsxs)("div",{className:ln,children:[(0,zn.jsx)("a",{className:xn,href:s,title:typeof b=="string"?b:"",target:P,onClick:hn,children:b}),O!=="horizontal"?N:null]})},oe=pe,Kn=r(548073),me=r(141035),re=r(986943),ae=function(o){var s,b,S=o.componentCls,N=o.holderOffsetBlock,I=o.motionDurationSlow,P=o.lineWidthBold,x=o.colorPrimary,X=o.lineType,G=o.colorSplit;return w()({},"".concat(S,"-wrapper"),(b={marginBlockStart:-N,paddingBlockStart:N},w()(b,S,C()(C()({},(0,Kn.Wf)(o)),{},w()({position:"relative",paddingInlineStart:P},"".concat(S,"-link"),(s={paddingBlock:o.linkPaddingBlock,paddingInline:"".concat(o.linkPaddingInlineStart,"px 0"),"&-title":C()(C()({},Kn.vS),{},{position:"relative",display:"block",marginBlockEnd:o.anchorTitleBlock,color:o.colorText,transition:"all ".concat(o.motionDurationSlow),"&:only-child":{marginBlockEnd:0}})},w()(s,"&-active > ".concat(S,"-link-title"),{color:o.colorPrimary}),w()(s,"".concat(S,"-link"),{paddingBlock:o.anchorPaddingBlockSecondary}),s)))),w()(b,"&:not(".concat(S,"-wrapper-horizontal)"),w()({},S,w()({"&::before":{position:"absolute",insetInlineStart:0,top:0,height:"100%",borderInlineStart:"".concat(P,"px ").concat(X," ").concat(G),content:'" "'}},"".concat(S,"-ink"),w()({position:"absolute",insetInlineStart:0,display:"none",transform:"translateY(-50%)",transition:"top ".concat(I," ease-in-out"),width:P,backgroundColor:x},"&".concat(S,"-ink-visible"),{display:"inline-block"})))),w()(b,"".concat(S,"-fixed ").concat(S,"-ink ").concat(S,"-ink"),{display:"none"}),b))},ie=function(o){var s,b=o.componentCls,S=o.motionDurationSlow,N=o.lineWidthBold,I=o.colorPrimary;return w()({},"".concat(b,"-wrapper-horizontal"),w()({position:"relative","&::before":{position:"absolute",left:{_skip_check_:!0,value:0},right:{_skip_check_:!0,value:0},bottom:0,borderBottom:"1px ".concat(o.lineType," ").concat(o.colorSplit),content:'" "'}},b,(s={overflowX:"scroll",position:"relative",display:"flex",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},w()(s,"".concat(b,"-link:first-of-type"),{paddingInline:0}),w()(s,"".concat(b,"-ink"),{position:"absolute",bottom:0,transition:"left ".concat(S," ease-in-out, width ").concat(S," ease-in-out"),height:N,backgroundColor:I}),s)))},he=(0,me.Z)("Anchor",function(m){var o=m.fontSize,s=m.fontSizeLG,b=m.paddingXXS,S=(0,re.TS)(m,{holderOffsetBlock:b,anchorPaddingBlockSecondary:b/2,anchorTitleBlock:o/14*3,anchorBallSize:s/2});return[ae(S),ie(S)]},function(m){return{linkPaddingBlock:m.paddingXXS,linkPaddingInlineStart:m.padding}});function Fn(){return window}function Jn(m,o){if(!m.getClientRects().length)return 0;var s=m.getBoundingClientRect();return s.width||s.height?o===window?(o=m.ownerDocument.documentElement,s.top-o.clientTop):s.top-o.getBoundingClientRect().top:s.top}var Qn=/#([\S ]+)$/,ge=function(o){var s,b,S=o.rootClassName,N=o.anchorPrefixCls,I=o.className,P=o.style,x=o.offsetTop,X=o.affix,G=X===void 0?!0:X,J=o.showInkInFixed,nn=J===void 0?!1:J,rn=o.children,en=o.items,an=o.direction,O=an===void 0?"vertical":an,hn=o.bounds,Q=o.targetOffset,un=o.onClick,jn=o.onChange,pn=o.getContainer,ln=o.getCurrentAnchor,xn=o.replace,qn=h.useState([]),An=c()(qn,2),_=An[0],vn=An[1],Hn=h.useState(null),se=c()(Hn,2),$n=se[0],fe=se[1],_n=h.useRef($n),ye=h.useRef(null),In=h.useRef(null),xe=h.useRef(!1),Wn=h.useContext(k.E_),De=Wn.direction,He=Wn.getTargetContainer,ne=Wn.anchor,ce=(s=pn!=null?pn:He)!==null&&s!==void 0?s:Fn,ke=JSON.stringify(_),Ze=(0,Bn.default)(function(Y){_.includes(Y)||vn(function(sn){return[].concat(gn()(sn),[Y])})}),Re=(0,Bn.default)(function(Y){_.includes(Y)&&vn(function(sn){return sn.filter(function(cn){return cn!==Y})})}),ze=function(){var sn,cn=(sn=ye.current)===null||sn===void 0?void 0:sn.querySelector(".".concat(N,"-link-title-active"));if(cn&&In.current){var Zn=In.current.style,Nn=O==="horizontal";Zn.top=Nn?"":"".concat(cn.offsetTop+cn.clientHeight/2,"px"),Zn.height=Nn?"":"".concat(cn.clientHeight,"px"),Zn.left=Nn?"".concat(cn.offsetLeft,"px"):"",Zn.width=Nn?"".concat(cn.clientWidth,"px"):"",Nn&&(0,mn.Z)(cn,{scrollMode:"if-needed",block:"nearest"})}},Oe=function(sn){var cn=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,Zn=arguments.length>2&&arguments[2]!==void 0?arguments[2]:5,Nn=[],bn=ce();if(sn.forEach(function(Rn){var be=Qn.exec(Rn==null?void 0:Rn.toString());if(be){var Pe=document.getElementById(be[1]);if(Pe){var Ee=Jn(Pe,bn);Ee<cn+Zn&&Nn.push({link:Rn,top:Ee})}}}),Nn.length){var ve=Nn.reduce(function(Rn,be){return be.top>Rn.top?be:Rn});return ve.link}return""},R=(0,Bn.default)(function(Y){if(_n.current!==Y){var sn=typeof ln=="function"?ln(Y):Y;fe(sn),_n.current=sn,jn==null||jn(Y)}}),Ne=h.useCallback(function(){if(!xe.current){var Y=Oe(_,Q!==void 0?Q:x||0,hn);R(Y)}},[ke,Q,x]),we=h.useCallback(function(Y){R(Y);var sn=Qn.exec(Y);if(sn){var cn=document.getElementById(sn[1]);if(cn){var Zn=ce(),Nn=(0,te.Z)(Zn,!0),bn=Jn(cn,Zn),ve=Nn+bn;ve-=Q!==void 0?Q:x||0,xe.current=!0,(0,v.Z)(ve,{getContainer:ce,callback:function(){xe.current=!1}})}}},[Q,x]),Be=V()(S,"".concat(N,"-wrapper"),(b={},w()(b,"".concat(N,"-wrapper-horizontal"),O==="horizontal"),w()(b,"".concat(N,"-rtl"),De==="rtl"),b),I,ne==null?void 0:ne.className),Fe=V()(N,w()({},"".concat(N,"-fixed"),!G&&!nn)),$e=V()("".concat(N,"-ink"),w()({},"".concat(N,"-ink-visible"),$n)),We=C()(C()({maxHeight:x?"calc(100vh - ".concat(x,"px)"):"100vh"},ne==null?void 0:ne.style),P),Xe=function Y(sn){return Array.isArray(sn)?sn.map(function(cn){return(0,h.createElement)(oe,C()(C()({replace:xn},cn),{},{key:cn.key}),O==="vertical"&&Y(cn.children))}):null},Ae=(0,zn.jsx)("div",{ref:ye,className:Be,style:We,children:(0,zn.jsxs)("div",{className:Fe,children:[(0,zn.jsx)("span",{className:$e,ref:In}),"items"in o?Xe(en):rn]})});h.useEffect(function(){var Y=ce();return Ne(),Y==null||Y.addEventListener("scroll",Ne),function(){Y==null||Y.removeEventListener("scroll",Ne)}},[ke]),h.useEffect(function(){typeof ln=="function"&&R(ln(_n.current||""))},[ln]),h.useEffect(function(){ze()},[O,ln,ke,$n]);var Ce=h.useMemo(function(){return{registerLink:Ze,unregisterLink:Re,scrollTo:we,activeLink:$n,onClick:un,direction:O}},[$n,un,we,O]);return(0,zn.jsx)(On.Provider,{value:Ce,children:G?(0,zn.jsx)(H.Z,{offsetTop:x,target:ce,children:Ae}):Ae})},le=function(o){var s=o.prefixCls,b=o.rootClassName,S=h.useContext(k.E_),N=S.getPrefixCls,I=N("anchor",s),P=he(I),x=c()(P,2),X=x[0],G=x[1];return X((0,zn.jsx)(ge,C()(C()({},o),{},{rootClassName:V()(G,b),anchorPrefixCls:I})))},fn=le,u=fn;u.Link=oe;var $=u},302281:function(Se,En,r){r.d(En,{Z:function(){return le}});var kn=r(97857),C=r.n(kn),Cn=r(9783),w=r.n(Cn),Vn=r(805574),gn=r.n(Vn),Yn=r(513769),c=r.n(Yn),f=r(294184),V=r.n(f),Bn=r(650010),h=r(667294),mn=r(851863),te=r(73287),v=r(976883),H=r(46287),k=r(785893),n=function(u){var $=u.prefixCls,m=u.title,o=u.footer,s=u.extra,b=u.closeIcon,S=u.closable,N=u.onClose,I=u.headerStyle,P=u.drawerStyle,x=u.bodyStyle,X=u.footerStyle,G=u.children,J=h.useCallback(function(Q){return(0,k.jsx)("button",{type:"button",onClick:N,"aria-label":"Close",className:"".concat($,"-close"),children:Q})},[N]),nn=(0,H.Z)(S,b,J,void 0,!0),rn=gn()(nn,2),en=rn[0],an=rn[1],O=h.useMemo(function(){return!m&&!en?null:(0,k.jsxs)("div",{style:I,className:V()("".concat($,"-header"),w()({},"".concat($,"-header-close-only"),en&&!m&&!s)),children:[(0,k.jsxs)("div",{className:"".concat($,"-header-title"),children:[an,m&&(0,k.jsx)("div",{className:"".concat($,"-title"),children:m})]}),s&&(0,k.jsx)("div",{className:"".concat($,"-extra"),children:s})]})},[en,an,s,I,$,m]),hn=h.useMemo(function(){if(!o)return null;var Q="".concat($,"-footer");return(0,k.jsx)("div",{className:Q,style:X,children:o})},[o,X,$]);return(0,k.jsxs)("div",{className:"".concat($,"-wrapper-body"),style:P,children:[O,(0,k.jsx)("div",{className:"".concat($,"-body"),style:x,children:G}),hn]})},On=n,zn=r(578294),pe=r(141035),oe=r(986943),Kn=function(u){var $,m=u.componentCls,o=u.motionDurationSlow,s={"&-enter, &-appear, &-leave":{"&-start":{transition:"none"},"&-active":{transition:"all ".concat(o)}}};return w()({},m,($={},w()($,"".concat(m,"-mask-motion"),{"&-enter, &-appear, &-leave":{"&-active":{transition:"all ".concat(o)}},"&-enter, &-appear":{opacity:0,"&-active":{opacity:1}},"&-leave":{opacity:1,"&-active":{opacity:0}}}),w()($,"".concat(m,"-panel-motion"),{"&-left":[s,{"&-enter, &-appear":{"&-start":{transform:"translateX(-100%) !important"},"&-active":{transform:"translateX(0)"}},"&-leave":{transform:"translateX(0)","&-active":{transform:"translateX(-100%)"}}}],"&-right":[s,{"&-enter, &-appear":{"&-start":{transform:"translateX(100%) !important"},"&-active":{transform:"translateX(0)"}},"&-leave":{transform:"translateX(0)","&-active":{transform:"translateX(100%)"}}}],"&-top":[s,{"&-enter, &-appear":{"&-start":{transform:"translateY(-100%) !important"},"&-active":{transform:"translateY(0)"}},"&-leave":{transform:"translateY(0)","&-active":{transform:"translateY(-100%)"}}}],"&-bottom":[s,{"&-enter, &-appear":{"&-start":{transform:"translateY(100%) !important"},"&-active":{transform:"translateY(0)"}},"&-leave":{transform:"translateY(0)","&-active":{transform:"translateY(100%)"}}}]}),$))},me=Kn,re=function(u){var $,m,o=u.componentCls,s=u.zIndexPopup,b=u.colorBgMask,S=u.colorBgElevated,N=u.motionDurationSlow,I=u.motionDurationMid,P=u.padding,x=u.paddingLG,X=u.fontSizeLG,G=u.lineHeightLG,J=u.lineWidth,nn=u.lineType,rn=u.colorSplit,en=u.marginSM,an=u.colorIcon,O=u.colorIconHover,hn=u.colorText,Q=u.fontWeightStrong,un=u.footerPaddingBlock,jn=u.footerPaddingInline,pn="".concat(o,"-content-wrapper");return w()({},o,(m={position:"fixed",inset:0,zIndex:s,pointerEvents:"none","&-pure":($={position:"relative",background:S},w()($,"&".concat(o,"-left"),{boxShadow:u.boxShadowDrawerLeft}),w()($,"&".concat(o,"-right"),{boxShadow:u.boxShadowDrawerRight}),w()($,"&".concat(o,"-top"),{boxShadow:u.boxShadowDrawerUp}),w()($,"&".concat(o,"-bottom"),{boxShadow:u.boxShadowDrawerDown}),$),"&-inline":{position:"absolute"}},w()(m,"".concat(o,"-mask"),{position:"absolute",inset:0,zIndex:s,background:b,pointerEvents:"auto"}),w()(m,pn,{position:"absolute",zIndex:s,maxWidth:"100vw",transition:"all ".concat(N),"&-hidden":{display:"none"}}),w()(m,"&-left > ".concat(pn),{top:0,bottom:0,left:{_skip_check_:!0,value:0},boxShadow:u.boxShadowDrawerLeft}),w()(m,"&-right > ".concat(pn),{top:0,right:{_skip_check_:!0,value:0},bottom:0,boxShadow:u.boxShadowDrawerRight}),w()(m,"&-top > ".concat(pn),{top:0,insetInline:0,boxShadow:u.boxShadowDrawerUp}),w()(m,"&-bottom > ".concat(pn),{bottom:0,insetInline:0,boxShadow:u.boxShadowDrawerDown}),w()(m,"".concat(o,"-content"),{width:"100%",height:"100%",overflow:"auto",background:S,pointerEvents:"auto"}),w()(m,"".concat(o,"-wrapper-body"),{display:"flex",flexDirection:"column",width:"100%",height:"100%"}),w()(m,"".concat(o,"-header"),{display:"flex",flex:0,alignItems:"center",padding:"".concat(P,"px ").concat(x,"px"),fontSize:X,lineHeight:G,borderBottom:"".concat(J,"px ").concat(nn," ").concat(rn),"&-title":{display:"flex",flex:1,alignItems:"center",minWidth:0,minHeight:0}}),w()(m,"".concat(o,"-extra"),{flex:"none"}),w()(m,"".concat(o,"-close"),{display:"inline-block",marginInlineEnd:en,color:an,fontWeight:Q,fontSize:X,fontStyle:"normal",lineHeight:1,textAlign:"center",textTransform:"none",textDecoration:"none",background:"transparent",border:0,outline:0,cursor:"pointer",transition:"color ".concat(I),textRendering:"auto","&:focus, &:hover":{color:O,textDecoration:"none"}}),w()(m,"".concat(o,"-title"),{flex:1,margin:0,color:hn,fontWeight:u.fontWeightStrong,fontSize:X,lineHeight:G}),w()(m,"".concat(o,"-body"),{flex:1,minWidth:0,minHeight:0,padding:x,overflow:"auto"}),w()(m,"".concat(o,"-footer"),{flexShrink:0,padding:"".concat(un,"px ").concat(jn,"px"),borderTop:"".concat(J,"px ").concat(nn," ").concat(rn)}),w()(m,"&-rtl",{direction:"rtl"}),m))},ae=(0,pe.Z)("Drawer",function(fn){var u=(0,oe.TS)(fn,{});return[re(u),me(u)]},function(fn){return{zIndexPopup:fn.zIndexPopupBase,footerPaddingBlock:fn.paddingXS,footerPaddingInline:fn.padding}}),ie=["rootClassName","width","height","size","mask","push","open","afterOpenChange","onClose","prefixCls","getContainer","style","className","visible","afterVisibleChange"],he=["prefixCls","style","className","placement"],Fn=null,Jn={distance:180},Qn=function(u){var $=u.rootClassName,m=u.width,o=u.height,s=u.size,b=s===void 0?"default":s,S=u.mask,N=S===void 0?!0:S,I=u.push,P=I===void 0?Jn:I,x=u.open,X=u.afterOpenChange,G=u.onClose,J=u.prefixCls,nn=u.getContainer,rn=u.style,en=u.className,an=u.visible,O=u.afterVisibleChange,hn=c()(u,ie),Q=h.useContext(te.E_),un=Q.getPopupContainer,jn=Q.getPrefixCls,pn=Q.direction,ln=Q.drawer,xn=jn("drawer",J),qn=ae(xn),An=gn()(qn,2),_=An[0],vn=An[1],Hn=nn===void 0&&un?function(){return un(document.body)}:nn,se=V()(w()({"no-mask":!N},"".concat(xn,"-rtl"),pn==="rtl"),$,vn);if(!1)var $n;var fe=h.useMemo(function(){return m!=null?m:b==="large"?736:378},[m,b]),_n=h.useMemo(function(){return o!=null?o:b==="large"?736:378},[o,b]),ye={motionName:(0,mn.m)(xn,"mask-motion"),motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500},In=function(Wn){return{motionName:(0,mn.m)(xn,"panel-motion-".concat(Wn)),motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500}};return _((0,k.jsx)(zn.BR,{children:(0,k.jsx)(v.Ux,{status:!0,override:!0,children:(0,k.jsx)(Bn.Z,C()(C()({prefixCls:xn,onClose:G,maskMotion:ye,motion:In},hn),{},{open:x!=null?x:an,mask:N,push:P,width:fe,height:_n,style:C()(C()({},ln==null?void 0:ln.style),rn),className:V()(ln==null?void 0:ln.className,en),rootClassName:se,getContainer:Hn,afterOpenChange:X!=null?X:O,children:(0,k.jsx)(On,C()(C()({prefixCls:xn},hn),{},{onClose:G}))}))})}))},ge=function(u){var $=u.prefixCls,m=u.style,o=u.className,s=u.placement,b=s===void 0?"right":s,S=c()(u,he),N=h.useContext(te.E_),I=N.getPrefixCls,P=I("drawer",$),x=ae(P),X=gn()(x,2),G=X[0],J=X[1],nn=V()(P,"".concat(P,"-pure"),"".concat(P,"-").concat(b),J,o);return G((0,k.jsx)("div",{className:nn,style:m,children:(0,k.jsx)(On,C()({prefixCls:P},S))}))};Qn._InternalPanelDoNotUseOrYouWillBeFired=ge;var le=Qn},377376:function(Se,En,r){var kn=r(83996),C=r(296708),Cn=kn.ZP;Cn.Header=kn.h4,Cn.Footer=kn.$_,Cn.Content=kn.VY,Cn.Sider=C.Z,En.Z=Cn},715778:function(Se,En,r){r.d(En,{Z:function(){return h}});var kn=r(174219),C=r(97857),Cn=r.n(C),w=r(585369),Vn={placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",rangePlaceholder:["\u5F00\u59CB\u65F6\u95F4","\u7ED3\u675F\u65F6\u95F4"]},gn=Vn,Yn={lang:Cn()({placeholder:"\u8BF7\u9009\u62E9\u65E5\u671F",yearPlaceholder:"\u8BF7\u9009\u62E9\u5E74\u4EFD",quarterPlaceholder:"\u8BF7\u9009\u62E9\u5B63\u5EA6",monthPlaceholder:"\u8BF7\u9009\u62E9\u6708\u4EFD",weekPlaceholder:"\u8BF7\u9009\u62E9\u5468",rangePlaceholder:["\u5F00\u59CB\u65E5\u671F","\u7ED3\u675F\u65E5\u671F"],rangeYearPlaceholder:["\u5F00\u59CB\u5E74\u4EFD","\u7ED3\u675F\u5E74\u4EFD"],rangeMonthPlaceholder:["\u5F00\u59CB\u6708\u4EFD","\u7ED3\u675F\u6708\u4EFD"],rangeQuarterPlaceholder:["\u5F00\u59CB\u5B63\u5EA6","\u7ED3\u675F\u5B63\u5EA6"],rangeWeekPlaceholder:["\u5F00\u59CB\u5468","\u7ED3\u675F\u5468"]},w.Z),timePickerLocale:Cn()({},gn)};Yn.lang.ok="\u786E\u5B9A";var c=Yn,f=c,V="${label}\u4E0D\u662F\u4E00\u4E2A\u6709\u6548\u7684${type}",Bn={locale:"zh-cn",Pagination:kn.Z,DatePicker:c,TimePicker:gn,Calendar:f,global:{placeholder:"\u8BF7\u9009\u62E9"},Table:{filterTitle:"\u7B5B\u9009",filterConfirm:"\u786E\u5B9A",filterReset:"\u91CD\u7F6E",filterEmptyText:"\u65E0\u7B5B\u9009\u9879",filterCheckall:"\u5168\u9009",filterSearchPlaceholder:"\u5728\u7B5B\u9009\u9879\u4E2D\u641C\u7D22",selectAll:"\u5168\u9009\u5F53\u9875",selectInvert:"\u53CD\u9009\u5F53\u9875",selectNone:"\u6E05\u7A7A\u6240\u6709",selectionAll:"\u5168\u9009\u6240\u6709",sortTitle:"\u6392\u5E8F",expand:"\u5C55\u5F00\u884C",collapse:"\u5173\u95ED\u884C",triggerDesc:"\u70B9\u51FB\u964D\u5E8F",triggerAsc:"\u70B9\u51FB\u5347\u5E8F",cancelSort:"\u53D6\u6D88\u6392\u5E8F"},Modal:{okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",justOkText:"\u77E5\u9053\u4E86"},Tour:{Next:"\u4E0B\u4E00\u6B65",Previous:"\u4E0A\u4E00\u6B65",Finish:"\u7ED3\u675F\u5BFC\u89C8"},Popconfirm:{cancelText:"\u53D6\u6D88",okText:"\u786E\u5B9A"},Transfer:{titles:["",""],searchPlaceholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9",itemUnit:"\u9879",itemsUnit:"\u9879",remove:"\u5220\u9664",selectCurrent:"\u5168\u9009\u5F53\u9875",removeCurrent:"\u5220\u9664\u5F53\u9875",selectAll:"\u5168\u9009\u6240\u6709",removeAll:"\u5220\u9664\u5168\u90E8",selectInvert:"\u53CD\u9009\u5F53\u9875"},Upload:{uploading:"\u6587\u4EF6\u4E0A\u4F20\u4E2D",removeFile:"\u5220\u9664\u6587\u4EF6",uploadError:"\u4E0A\u4F20\u9519\u8BEF",previewFile:"\u9884\u89C8\u6587\u4EF6",downloadFile:"\u4E0B\u8F7D\u6587\u4EF6"},Empty:{description:"\u6682\u65E0\u6570\u636E"},Icon:{icon:"\u56FE\u6807"},Text:{edit:"\u7F16\u8F91",copy:"\u590D\u5236",copied:"\u590D\u5236\u6210\u529F",expand:"\u5C55\u5F00"},PageHeader:{back:"\u8FD4\u56DE"},Form:{optional:"\uFF08\u53EF\u9009\uFF09",defaultValidateMessages:{default:"\u5B57\u6BB5\u9A8C\u8BC1\u9519\u8BEF${label}",required:"\u8BF7\u8F93\u5165${label}",enum:"${label}\u5FC5\u987B\u662F\u5176\u4E2D\u4E00\u4E2A[${enum}]",whitespace:"${label}\u4E0D\u80FD\u4E3A\u7A7A\u5B57\u7B26",date:{format:"${label}\u65E5\u671F\u683C\u5F0F\u65E0\u6548",parse:"${label}\u4E0D\u80FD\u8F6C\u6362\u4E3A\u65E5\u671F",invalid:"${label}\u662F\u4E00\u4E2A\u65E0\u6548\u65E5\u671F"},types:{string:V,method:V,array:V,object:V,number:V,date:V,boolean:V,integer:V,float:V,regexp:V,email:V,url:V,hex:V},string:{len:"${label}\u987B\u4E3A${len}\u4E2A\u5B57\u7B26",min:"${label}\u6700\u5C11${min}\u4E2A\u5B57\u7B26",max:"${label}\u6700\u591A${max}\u4E2A\u5B57\u7B26",range:"${label}\u987B\u5728${min}-${max}\u5B57\u7B26\u4E4B\u95F4"},number:{len:"${label}\u5FC5\u987B\u7B49\u4E8E${len}",min:"${label}\u6700\u5C0F\u503C\u4E3A${min}",max:"${label}\u6700\u5927\u503C\u4E3A${max}",range:"${label}\u987B\u5728${min}-${max}\u4E4B\u95F4"},array:{len:"\u987B\u4E3A${len}\u4E2A${label}",min:"\u6700\u5C11${min}\u4E2A${label}",max:"\u6700\u591A${max}\u4E2A${label}",range:"${label}\u6570\u91CF\u987B\u5728${min}-${max}\u4E4B\u95F4"},pattern:{mismatch:"${label}\u4E0E\u6A21\u5F0F\u4E0D\u5339\u914D${pattern}"}}},Image:{preview:"\u9884\u89C8"},QRCode:{expired:"\u4E8C\u7EF4\u7801\u8FC7\u671F",refresh:"\u70B9\u51FB\u5237\u65B0"},ColorPicker:{presetEmpty:"\u6682\u65E0"}},h=Bn},15060:function(Se,En,r){r.d(En,{Z:function(){return $}});var kn=r(97857),C=r.n(kn),Cn=r(805574),w=r.n(Cn),Vn=r(513769),gn=r.n(Vn),Yn=r(294184),c=r.n(Yn),f=r(667294),V=r(73287),Bn=r(9783),h=r.n(Bn),mn=r(785893),te=["prefixCls","className","color","dot","pending","position","label","children"],v=function(o){var s,b=o.prefixCls,S=o.className,N=o.color,I=N===void 0?"blue":N,P=o.dot,x=o.pending,X=x===void 0?!1:x,G=o.position,J=o.label,nn=o.children,rn=gn()(o,te),en=f.useContext(V.E_),an=en.getPrefixCls,O=an("timeline",b),hn=c()("".concat(O,"-item"),h()({},"".concat(O,"-item-pending"),X),S),Q=/blue|red|green|gray/.test(I||"")?void 0:I,un=c()("".concat(O,"-item-head"),(s={},h()(s,"".concat(O,"-item-head-custom"),!!P),h()(s,"".concat(O,"-item-head-").concat(I),!Q),s));return(0,mn.jsxs)("li",C()(C()({},rn),{},{className:hn,children:[J&&(0,mn.jsx)("div",{className:"".concat(O,"-item-label"),children:J}),(0,mn.jsx)("div",{className:"".concat(O,"-item-tail")}),(0,mn.jsx)("div",{className:un,style:{borderColor:Q,color:Q},children:P}),(0,mn.jsx)("div",{className:"".concat(O,"-item-content"),children:nn})]}))},H=v,k=r(719632),n=r.n(k),On=r(100628),zn=r.n(On),pe=["prefixCls","className","pending","children","items","rootClassName","reverse","direction","hashId","pendingDot","mode"],oe=["className"],Kn=function(o){var s,b=o.prefixCls,S=o.className,N=o.pending,I=N===void 0?!1:N,P=o.children,x=o.items,X=o.rootClassName,G=o.reverse,J=G===void 0?!1:G,nn=o.direction,rn=o.hashId,en=o.pendingDot,an=o.mode,O=an===void 0?"":an,hn=gn()(o,pe),Q=function(vn,Hn){return O==="alternate"?vn==="right"?"".concat(b,"-item-right"):vn==="left"||Hn%2===0?"".concat(b,"-item-left"):"".concat(b,"-item-right"):O==="left"?"".concat(b,"-item-left"):O==="right"||vn==="right"?"".concat(b,"-item-right"):""},un=n()(x||[]),jn=typeof I=="boolean"?null:I;I&&un.push({pending:!!I,dot:en||(0,mn.jsx)(zn(),{}),children:jn}),J&&un.reverse();var pn=un.length,ln="".concat(b,"-item-last"),xn=un.filter(function(_){return!!_}).map(function(_,vn){var Hn,se=vn===pn-2?ln:"",$n=vn===pn-1?ln:"",fe=_.className,_n=gn()(_,oe);return(0,f.createElement)(H,C()(C()({},_n),{},{className:c()([fe,!J&&I?se:$n,Q((Hn=_==null?void 0:_.position)!==null&&Hn!==void 0?Hn:"",vn)]),key:(_==null?void 0:_.key)||vn}))}),qn=un.some(function(_){return!!(_!=null&&_.label)}),An=c()(b,(s={},h()(s,"".concat(b,"-pending"),!!I),h()(s,"".concat(b,"-reverse"),!!J),h()(s,"".concat(b,"-").concat(O),!!O&&!qn),h()(s,"".concat(b,"-label"),qn),h()(s,"".concat(b,"-rtl"),nn==="rtl"),s),S,X,rn);return(0,mn.jsx)("ul",C()(C()({},hn),{},{className:An,children:xn}))},me=Kn,re=r(45598);function ae(m,o){return m&&Array.isArray(m)?m:(0,re.default)(o).map(function(s){var b,S;return C()({children:(b=s==null||(S=s.props)===null||S===void 0?void 0:S.children)!==null&&b!==void 0?b:""},s.props)})}var ie=ae,he=r(548073),Fn=r(141035),Jn=r(986943),Qn=function(o){var s,b,S,N,I,P,x=o.componentCls;return h()({},x,C()(C()({},(0,he.Wf)(o)),{},(P={margin:0,padding:0,listStyle:"none"},h()(P,"".concat(x,"-item"),{position:"relative",margin:0,paddingBottom:o.itemPaddingBottom,fontSize:o.fontSize,listStyle:"none","&-tail":{position:"absolute",insetBlockStart:o.itemHeadSize,insetInlineStart:(o.itemHeadSize-o.tailWidth)/2,height:"calc(100% - ".concat(o.itemHeadSize,"px)"),borderInlineStart:"".concat(o.tailWidth,"px ").concat(o.lineType," ").concat(o.tailColor)},"&-pending":(s={},h()(s,"".concat(x,"-item-head"),{fontSize:o.fontSizeSM,backgroundColor:"transparent"}),h()(s,"".concat(x,"-item-tail"),{display:"none"}),s),"&-head":{position:"absolute",width:o.itemHeadSize,height:o.itemHeadSize,backgroundColor:o.dotBg,border:"".concat(o.dotBorderWidth,"px ").concat(o.lineType," transparent"),borderRadius:"50%","&-blue":{color:o.colorPrimary,borderColor:o.colorPrimary},"&-red":{color:o.colorError,borderColor:o.colorError},"&-green":{color:o.colorSuccess,borderColor:o.colorSuccess},"&-gray":{color:o.colorTextDisabled,borderColor:o.colorTextDisabled}},"&-head-custom":{position:"absolute",insetBlockStart:o.itemHeadSize/2,insetInlineStart:o.itemHeadSize/2,width:"auto",height:"auto",marginBlockStart:0,paddingBlock:o.customHeadPaddingVertical,lineHeight:1,textAlign:"center",border:0,borderRadius:0,transform:"translate(-50%, -50%)"},"&-content":{position:"relative",insetBlockStart:-(o.fontSize*o.lineHeight-o.fontSize)+o.lineWidth,marginInlineStart:o.margin+o.itemHeadSize,marginInlineEnd:0,marginBlockStart:0,marginBlockEnd:0,wordBreak:"break-word"},"&-last":(b={},h()(b,"> ".concat(x,"-item-tail"),{display:"none"}),h()(b,"> ".concat(x,"-item-content"),{minHeight:o.controlHeightLG*1.2}),b)}),h()(P,"&".concat(x,`-alternate,
        &`).concat(x,`-right,
        &`).concat(x,"-label"),h()({},"".concat(x,"-item"),{"&-tail, &-head, &-head-custom":{insetInlineStart:"50%"},"&-head":{marginInlineStart:"-".concat(o.marginXXS,"px"),"&-custom":{marginInlineStart:o.tailWidth/2}},"&-left":h()({},"".concat(x,"-item-content"),{insetInlineStart:"calc(50% - ".concat(o.marginXXS,"px)"),width:"calc(50% - ".concat(o.marginSM,"px)"),textAlign:"start"}),"&-right":h()({},"".concat(x,"-item-content"),{width:"calc(50% - ".concat(o.marginSM,"px)"),margin:0,textAlign:"end"})})),h()(P,"&".concat(x,"-right"),h()({},"".concat(x,"-item-right"),(S={},h()(S,"".concat(x,`-item-tail,
            `).concat(x,`-item-head,
            `).concat(x,"-item-head-custom"),{insetInlineStart:"calc(100% - ".concat((o.itemHeadSize+o.tailWidth)/2,"px)")}),h()(S,"".concat(x,"-item-content"),{width:"calc(100% - ".concat(o.itemHeadSize+o.marginXS,"px)")}),S))),h()(P,"&".concat(x,`-pending
        `).concat(x,`-item-last
        `).concat(x,"-item-tail"),{display:"block",height:"calc(100% - ".concat(o.margin,"px)"),borderInlineStart:"".concat(o.tailWidth,"px dotted ").concat(o.tailColor)}),h()(P,"&".concat(x,`-reverse
        `).concat(x,`-item-last
        `).concat(x,"-item-tail"),{display:"none"}),h()(P,"&".concat(x,"-reverse ").concat(x,"-item-pending"),(N={},h()(N,"".concat(x,"-item-tail"),{insetBlockStart:o.margin,display:"block",height:"calc(100% - ".concat(o.margin,"px)"),borderInlineStart:"".concat(o.tailWidth,"px dotted ").concat(o.tailColor)}),h()(N,"".concat(x,"-item-content"),{minHeight:o.controlHeightLG*1.2}),N)),h()(P,"&".concat(x,"-label"),(I={},h()(I,"".concat(x,"-item-label"),{position:"absolute",insetBlockStart:-(o.fontSize*o.lineHeight-o.fontSize)+o.tailWidth,width:"calc(50% - ".concat(o.marginSM,"px)"),textAlign:"end"}),h()(I,"".concat(x,"-item-right"),h()({},"".concat(x,"-item-label"),{insetInlineStart:"calc(50% + ".concat(o.marginSM,"px)"),width:"calc(50% - ".concat(o.marginSM,"px)"),textAlign:"start"})),I)),h()(P,"&-rtl",h()({direction:"rtl"},"".concat(x,"-item-head-custom"),{transform:"translate(50%, -50%)"})),P)))},ge=(0,Fn.Z)("Timeline",function(m){var o=(0,Jn.TS)(m,{itemHeadSize:10,customHeadPaddingVertical:m.paddingXXS,paddingInlineEnd:2});return[Qn(o)]},function(m){return{tailColor:m.colorSplit,tailWidth:m.lineWidthBold,dotBorderWidth:m.wireframe?m.lineWidthBold:m.lineWidth*3,dotBg:m.colorBgContainer,itemPaddingBottom:m.padding*1.25}}),le=["prefixCls","children","items","className","style"],fn=function(o){var s=f.useContext(V.E_),b=s.getPrefixCls,S=s.direction,N=s.timeline,I=o.prefixCls,P=o.children,x=o.items,X=o.className,G=o.style,J=gn()(o,le),nn=b("timeline",I),rn=ge(nn),en=w()(rn,2),an=en[0],O=en[1],hn=ie(x,P);return an((0,mn.jsx)(me,C()(C()({},J),{},{className:c()(N==null?void 0:N.className,X),style:C()(C()({},N==null?void 0:N.style),G),prefixCls:nn,direction:S,items:hn,hashId:O})))};fn.Item=H;var u=fn,$=u}}]);
