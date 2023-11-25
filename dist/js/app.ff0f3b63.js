(function () {
  "use strict";
  var t = {
      9490: function (t, e, s) {
        var r = {};
        s.r(r),
          s.d(r, {
            Arrow: function () {
              return ut;
            },
            Exit: function () {
              return st;
            },
            Fork: function () {
              return yt;
            },
            Home: function () {
              return T;
            },
            Logo: function () {
              return P;
            },
            Star: function () {
              return gt;
            },
          });
        var a = s(9242),
          n = s(3396);
        function o(t, e) {
          const s = (0, n.up)("router-view");
          return (0, n.wg)(), (0, n.j4)(s);
        }
        var i = s(89);
        const l = {},
          u = (0, i.Z)(l, [["render", o]]);
        var c = u,
          p = s(2483);
        const d = { class: "stories__list" },
          m = { class: "repositories__section" },
          v = { class: "repositories__list" };
        function C(t, e, s, r, a, o) {
          const i = (0, n.up)("Header"),
            l = (0, n.up)("User"),
            u = (0, n.up)("Topline"),
            c = (0, n.up)("Repository"),
            p = (0, n.up)("PostItem");
          return (
            (0, n.wg)(),
            (0, n.iD)(
              n.HY,
              null,
              [
                (0, n.Wm)(u, null, {
                  headline: (0, n.w5)(() => [
                    (0, n.Wm)(
                      i,
                      { avatarUrl: a.loginnedUser.avatarUrl },
                      null,
                      8,
                      ["avatarUrl"]
                    ),
                  ]),
                  content: (0, n.w5)(() => [
                    (0, n._)("ul", d, [
                      ((0, n.wg)(!0),
                      (0, n.iD)(
                        n.HY,
                        null,
                        (0, n.Ko)(
                          a.dbUsers,
                          (t) => (
                            (0, n.wg)(),
                            (0, n.iD)(
                              "li",
                              { class: "stories__item", key: t.id },
                              [
                                (0, n.Wm)(
                                  l,
                                  {
                                    username: t.username,
                                    avatarUrl: t.avatar,
                                    vClass: "stories",
                                  },
                                  null,
                                  8,
                                  ["username", "avatarUrl"]
                                ),
                              ]
                            )
                          )
                        ),
                        128
                      )),
                    ]),
                  ]),
                  _: 1,
                }),
                (0, n._)("div", m, [
                  (0, n._)("ul", v, [
                    ((0, n.wg)(!0),
                    (0, n.iD)(
                      n.HY,
                      null,
                      (0, n.Ko)(
                        a.dbUsers,
                        (t) => (
                          (0, n.wg)(),
                          (0, n.iD)(
                            "li",
                            { class: "repositories__item", key: t.id },
                            [
                              (0, n.Wm)(
                                p,
                                {
                                  username: t.username,
                                  avatarUrl: t.avatar,
                                  issues: t.posts[0].issues,
                                  postDate: t.posts[0].date,
                                },
                                {
                                  repository: (0, n.w5)(() => [
                                    (0, n.Wm)(
                                      c,
                                      {
                                        title: t.posts[0].title,
                                        text: t.posts[0].text,
                                        stats: t.posts[0].stats,
                                      },
                                      null,
                                      8,
                                      ["title", "text", "stats"]
                                    ),
                                  ]),
                                  _: 2,
                                },
                                1032,
                                ["username", "avatarUrl", "issues", "postDate"]
                              ),
                            ]
                          )
                        )
                      ),
                      128
                    )),
                  ]),
                ]),
              ],
              64
            )
          );
        }
        const g = { class: "c-topline" },
          f = { class: "x-container" },
          h = { class: "headline" },
          x = { key: 0, class: "content" };
        function w(t, e) {
          return (
            (0, n.wg)(),
            (0, n.iD)("div", g, [
              (0, n._)("div", f, [
                (0, n._)("div", h, [
                  (0, n.WI)(t.$slots, "headline", {}, void 0, !0),
                ]),
                t.$slots.content
                  ? ((0, n.wg)(),
                    (0, n.iD)("div", x, [
                      (0, n.WI)(t.$slots, "content", {}, void 0, !0),
                    ]))
                  : (0, n.kq)("", !0),
              ]),
            ])
          );
        }
        const _ = {},
          b = (0, i.Z)(_, [
            ["render", w],
            ["__scopeId", "data-v-3b983960"],
          ]);
        var y = b;
        const k = { class: "header" },
          I = { class: "header__logo" },
          V = { class: "header__nav" },
          M = { class: "header__nav-list" },
          L = { class: "header__nav-item" },
          S = { class: "header__btn" },
          O = { class: "header__nav-item" },
          Z = { class: "header__btn header__btn--avatar" },
          j = { class: "header__nav-item" },
          E = { class: "header__btn" };
        function H(t, e, s, r, a, o) {
          const i = (0, n.up)("Icon"),
            l = (0, n.up)("Avatar");
          return (
            (0, n.wg)(),
            (0, n.iD)("header", k, [
              (0, n._)("button", I, [(0, n.Wm)(i, { name: "Logo" })]),
              (0, n._)("nav", V, [
                (0, n._)("ul", M, [
                  (0, n._)("li", L, [
                    (0, n._)("button", S, [(0, n.Wm)(i, { name: "Home" })]),
                  ]),
                  (0, n._)("li", O, [
                    (0, n._)("button", Z, [
                      (0, n.Wm)(l, { avatarUrl: s.avatarUrl }, null, 8, [
                        "avatarUrl",
                      ]),
                    ]),
                  ]),
                  (0, n._)("li", j, [
                    (0, n._)("button", E, [(0, n.Wm)(i, { name: "Exit" })]),
                  ]),
                ]),
              ]),
            ])
          );
        }
        function A(t, e, s, r, a, o) {
          return (0, n.wg)(), (0, n.j4)((0, n.LL)(s.name));
        }
        const D = {
            viewBox: "0 0 32 33",
            preserveAspectRatio: "none",
            fill: "currentColor",
            xmlns: "http://www.w3.org/2000/svg",
          },
          J = (0, n._)(
            "path",
            {
              d: "M14.0692 4.06704C15.1853 3.12849 16.8147 3.12849 17.9308 4.06704L26.9308 11.6352C27.6087 12.2052 28 13.0456 28 13.9313V26.5C28 27.6046 27.1046 28.5 26 28.5H20.5C19.3954 28.5 18.5 27.6046 18.5 26.5V19.5H13.5V26.5C13.5 27.6046 12.6046 28.5 11.5 28.5H6C4.89543 28.5 4 27.6046 4 26.5V13.9313C4 13.0456 4.39135 12.2052 5.0692 11.6352L14.0692 4.06704Z",
              fill: "#currentColor",
            },
            null,
            -1
          ),
          R = [J];
        function U(t, e) {
          return (0, n.wg)(), (0, n.iD)("svg", D, R);
        }
        const q = {},
          W = (0, i.Z)(q, [["render", U]]);
        var T = W;
        const N = {
            preserveAspectRatio: "none",
            viewBox: "0 0 175 41",
            fill: "currentColor",
            xmlns: "http://www.w3.org/2000/svg",
          },
          B = (0, n.uE)(
            '<path d="M18.6664 14.4756H24.3009C23.5838 9.28933 19.0122 5.63971 13.0832 5.63971C6.15528 5.63971 0.815308 10.6339 0.815308 19.1369C0.815308 27.435 5.80953 32.5829 13.1984 32.5829C19.819 32.5829 24.5443 28.3954 24.5443 21.4931V18.1893H13.5698V22.3639H19.2043C19.1274 25.6166 16.9121 27.6783 13.224 27.6783C9.06217 27.6783 6.43701 24.5665 6.43701 19.0857C6.43701 13.6305 9.16462 10.5443 13.1728 10.5443C16.0285 10.5443 17.9621 12.0169 18.6664 14.4756Z" fill="CurrentColor"></path><path d="M28.5773 32.2243H34.0325V12.5548H28.5773V32.2243ZM31.3177 10.0193C32.944 10.0193 34.2758 8.7771 34.2758 7.25322C34.2758 5.74215 32.944 4.5 31.3177 4.5C29.7042 4.5 28.3724 5.74215 28.3724 7.25322C28.3724 8.7771 29.7042 10.0193 31.3177 10.0193Z" fill="CurrentColor"></path><path d="M47.6026 12.5548H43.9017V7.84229H38.4465V12.5548H35.7573V16.6526H38.4465V26.8972C38.4209 30.7517 41.046 32.6597 45.003 32.4932C46.4116 32.442 47.4105 32.1603 47.9611 31.981L47.1031 27.9216C46.8342 27.9728 46.258 28.1009 45.7457 28.1009C44.6572 28.1009 43.9017 27.6911 43.9017 26.18V16.6526H47.6026V12.5548Z" fill="CurrentColor"></path><path d="M58.5699 32.6085C64.5373 32.6085 68.251 28.5235 68.251 22.4664C68.251 16.3709 64.5373 12.2987 58.5699 12.2987C52.6024 12.2987 48.8888 16.3709 48.8888 22.4664C48.8888 28.5235 52.6024 32.6085 58.5699 32.6085ZM58.5955 28.3826C55.8422 28.3826 54.4336 25.8599 54.4336 22.428C54.4336 18.996 55.8422 16.4605 58.5955 16.4605C61.2975 16.4605 62.7061 18.996 62.7061 22.428C62.7061 25.8599 61.2975 28.3826 58.5955 28.3826Z" fill="CurrentColor"></path><path d="M79.3975 40.0102C85.0192 40.0102 89.0146 37.449 89.0146 32.4164V12.5548H83.5978V15.8586H83.3929C82.663 14.2579 81.0623 12.2987 77.7712 12.2987C73.4557 12.2987 69.8061 15.6538 69.8061 22.3511C69.8061 28.8948 73.3533 31.9426 77.784 31.9426C80.9214 31.9426 82.6758 30.3675 83.3929 28.7412H83.6234V32.3396C83.6234 35.0416 81.8947 36.0916 79.5256 36.0916C77.1181 36.0916 75.9016 35.0416 75.4534 33.8506L70.4079 34.5293C71.061 37.6283 74.096 40.0102 79.3975 40.0102ZM79.5128 27.8448C76.8364 27.8448 75.3766 25.719 75.3766 22.3255C75.3766 18.9832 76.8108 16.6398 79.5128 16.6398C82.1636 16.6398 83.649 18.8808 83.649 22.3255C83.649 25.7959 82.138 27.8448 79.5128 27.8448Z" fill="CurrentColor"></path><path d="M92.0936 32.2243H97.5488V21.0962C97.5488 18.6759 99.316 17.0112 101.723 17.0112C102.479 17.0112 103.516 17.1392 104.029 17.3057V12.4651C103.542 12.3499 102.863 12.2731 102.313 12.2731C100.11 12.2731 98.3044 13.5536 97.5873 15.9867H97.3824V12.5548H92.0936V32.2243Z" fill="CurrentColor"></path><path d="M110.632 32.5957C113.539 32.5957 115.422 31.3279 116.382 29.4967H116.536V32.2243H121.709V18.9576C121.709 14.2707 117.739 12.2987 113.36 12.2987C108.647 12.2987 105.548 14.5525 104.793 18.1381L109.838 18.5478C110.21 17.2417 111.375 16.2812 113.334 16.2812C115.191 16.2812 116.254 17.2161 116.254 18.8296V18.9064C116.254 20.1742 114.909 20.3406 111.49 20.6736C107.597 21.0321 104.101 22.3383 104.101 26.7307C104.101 30.6236 106.88 32.5957 110.632 32.5957ZM112.195 28.8308C110.517 28.8308 109.313 28.0497 109.313 26.5514C109.313 25.0147 110.581 24.2592 112.502 23.9903C113.693 23.8238 115.639 23.5421 116.292 23.1067V25.194C116.292 27.2557 114.589 28.8308 112.195 28.8308Z" fill="CurrentColor"></path><path d="M124.679 32.2243H130.135V20.4175C130.135 18.2405 131.518 16.7935 133.336 16.7935C135.129 16.7935 136.333 18.0228 136.333 19.9565V32.2243H141.621V20.2126C141.621 18.1765 142.787 16.7935 144.771 16.7935C146.513 16.7935 147.819 17.8819 147.819 20.0717V32.2243H153.262V18.996C153.262 14.7317 150.726 12.2987 147.064 12.2987C144.182 12.2987 141.941 13.7713 141.135 16.0251H140.93C140.302 13.7457 138.292 12.2987 135.59 12.2987C132.939 12.2987 130.929 13.7073 130.109 16.0251H129.878V12.5548H124.679V32.2243Z" fill="CurrentColor"></path><path d="M174.815 4.76892H170.116L161.664 36.1685H166.364L174.815 4.76892Z" fill="CurrentColor"></path>',
            9
          ),
          G = [B];
        function Y(t, e) {
          return (0, n.wg)(), (0, n.iD)("svg", N, G);
        }
        const z = {},
          X = (0, i.Z)(z, [["render", Y]]);
        var P = X;
        const Q = {
            preserveAspectRatio: "none",
            viewBox: "0 0 32 33",
            fill: "CurrentColor",
            xmlns: "http://www.w3.org/2000/svg",
          },
          K = (0, n._)(
            "path",
            {
              d: "M16 6.94273V14.625L16.0007 15.2562L25.3025 15.255L23.1495 13.1003C22.8167 12.7674 22.7865 12.2466 23.0589 11.8796L23.1497 11.7745C23.4826 11.4417 24.0034 11.4116 24.3704 11.6839L24.4755 11.7747L28.2213 15.5218C28.5538 15.8544 28.5842 16.3746 28.3125 16.7416L28.2219 16.8467L24.4762 20.601C24.1105 20.9676 23.5169 20.9683 23.1503 20.6026C22.8171 20.2701 22.7863 19.7493 23.0582 19.382L23.1488 19.2767L25.29 17.13L16.0007 17.1312L16 25.5625C16 26.1455 15.4735 26.5871 14.8994 26.4857L4.27444 24.6091C3.82651 24.53 3.5 24.1408 3.5 23.6859V8.68752C3.5 8.22839 3.83252 7.83681 4.28558 7.76241L14.9106 6.01762C15.4813 5.92389 16 6.36432 16 6.94273ZM11.6277 15.875C10.9358 15.875 10.375 16.4359 10.375 17.1277C10.375 17.8196 10.9358 18.3804 11.6277 18.3804C12.3195 18.3804 12.8804 17.8196 12.8804 17.1277C12.8804 16.4359 12.3195 15.875 11.6277 15.875ZM17.25 24.6266L18.2064 24.6268L18.3338 24.6183C18.7919 24.556 19.1447 24.163 19.1439 23.6878L19.135 18.375H17.25V24.6266ZM17.2525 14L17.25 12.4067V7.75002L18.1816 7.75002C18.6556 7.75002 19.0476 8.10192 19.1103 8.55891L19.1191 8.68597L19.1275 14H17.2525Z",
              fill: "CurrentColor",
            },
            null,
            -1
          ),
          F = [K];
        function $(t, e) {
          return (0, n.wg)(), (0, n.iD)("svg", Q, F);
        }
        const tt = {},
          et = (0, i.Z)(tt, [["render", $]]);
        var st = et;
        const rt = {
            viewBox: "0 0 16 16",
            preserveAspectRatio: "none",
            fill: "CurrentColor",
            xmlns: "http://www.w3.org/2000/svg",
          },
          at = (0, n._)(
            "path",
            {
              d: "M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",
              fill: "CurrentColor",
            },
            null,
            -1
          ),
          nt = [at];
        function ot(t, e) {
          return (0, n.wg)(), (0, n.iD)("svg", rt, nt);
        }
        const it = {},
          lt = (0, i.Z)(it, [["render", ot]]);
        var ut = lt;
        const ct = {
            preserveAspectRatio: "none",
            viewBox: "0 0 16 16",
            fill: "CurrentColor",
            xmlns: "http://www.w3.org/2000/svg",
          },
          pt = (0, n._)(
            "path",
            {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M8.00004 0.25C8.14006 0.24991 8.2773 0.289014 8.39624 0.362887C8.51518 0.43676 8.61106 0.542452 8.67304 0.668L10.555 4.483L14.765 5.095C14.9035 5.11511 15.0336 5.17355 15.1405 5.26372C15.2475 5.35388 15.3272 5.47218 15.3704 5.60523C15.4137 5.73829 15.4189 5.8808 15.3854 6.01665C15.352 6.1525 15.2812 6.27628 15.181 6.374L12.135 9.344L12.854 13.536C12.8777 13.6739 12.8624 13.8157 12.8097 13.9454C12.757 14.0751 12.6691 14.1874 12.5559 14.2697C12.4427 14.352 12.3087 14.401 12.1691 14.4111C12.0295 14.4212 11.8899 14.3921 11.766 14.327L8.00004 12.347L4.23404 14.327C4.11023 14.392 3.97071 14.4211 3.83123 14.411C3.69176 14.4009 3.55788 14.352 3.44472 14.2699C3.33157 14.1877 3.24363 14.0755 3.19086 13.946C3.13808 13.8165 3.12255 13.6749 3.14604 13.537L3.86604 9.343L0.818042 6.374C0.717608 6.27632 0.646541 6.15247 0.612894 6.01647C0.579246 5.88047 0.584364 5.73777 0.627666 5.60453C0.670969 5.47129 0.750725 5.35284 0.857898 5.26261C0.96507 5.17238 1.09537 5.11397 1.23404 5.094L5.44404 4.483L7.32704 0.668C7.38902 0.542452 7.48491 0.43676 7.60385 0.362887C7.72279 0.289014 7.86003 0.24991 8.00004 0.25ZM8.00004 2.695L6.61504 5.5C6.56126 5.6089 6.48183 5.70311 6.38359 5.77453C6.28534 5.84595 6.17122 5.89244 6.05104 5.91L2.95404 6.36L5.19404 8.544C5.28119 8.62886 5.3464 8.73365 5.38403 8.84933C5.42166 8.96501 5.43059 9.0881 5.41004 9.208L4.88204 12.292L7.65104 10.836C7.75867 10.7794 7.87845 10.7499 8.00004 10.7499C8.12164 10.7499 8.24141 10.7794 8.34904 10.836L11.119 12.292L10.589 9.208C10.5685 9.0881 10.5774 8.96501 10.615 8.84933C10.6527 8.73365 10.7179 8.62886 10.805 8.544L13.045 6.361L9.94904 5.911C9.82886 5.89344 9.71474 5.84695 9.6165 5.77553C9.51825 5.70411 9.43883 5.6099 9.38504 5.501L8.00004 2.694V2.695Z",
              fill: "#CurrentColor",
            },
            null,
            -1
          ),
          dt = [pt];
        function mt(t, e) {
          return (0, n.wg)(), (0, n.iD)("svg", ct, dt);
        }
        const vt = {},
          Ct = (0, i.Z)(vt, [["render", mt]]);
        var gt = Ct;
        const ft = {
            preserveAspectRatio: "none",
            viewBox: "0 0 16 16",
            fill: "CurrentColor",
            xmlns: "http://www.w3.org/2000/svg",
          },
          ht = (0, n._)(
            "path",
            {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M5 3.25001C5 3.44892 4.92099 3.63969 4.78033 3.78034C4.63968 3.92099 4.44892 4.00001 4.25 4.00001C4.05109 4.00001 3.86033 3.92099 3.71967 3.78034C3.57902 3.63969 3.5 3.44892 3.5 3.25001C3.5 3.05109 3.57902 2.86033 3.71967 2.71968C3.86033 2.57902 4.05109 2.50001 4.25 2.50001C4.44892 2.50001 4.63968 2.57902 4.78033 2.71968C4.92099 2.86033 5 3.05109 5 3.25001ZM5 5.37201C5.50042 5.19509 5.92217 4.84696 6.19073 4.38915C6.45929 3.93134 6.55735 3.39333 6.4676 2.87021C6.37785 2.34709 6.10605 1.87253 5.70025 1.53043C5.29445 1.18832 4.78077 1.00069 4.25 1.00069C3.71924 1.00069 3.20556 1.18832 2.79976 1.53043C2.39396 1.87253 2.12216 2.34709 2.03241 2.87021C1.94265 3.39333 2.04072 3.93134 2.30928 4.38915C2.57784 4.84696 2.99959 5.19509 3.5 5.37201V6.25001C3.5 6.84674 3.73706 7.41904 4.15901 7.841C4.58097 8.26295 5.15327 8.50001 5.75 8.50001H7.25V10.628C6.74932 10.8049 6.3273 11.1532 6.05855 11.6112C5.78981 12.0692 5.69164 12.6075 5.78139 13.1309C5.87115 13.6543 6.14306 14.1291 6.54905 14.4714C6.95504 14.8136 7.46897 15.0014 8 15.0014C8.53104 15.0014 9.04497 14.8136 9.45096 14.4714C9.85695 14.1291 10.1289 13.6543 10.2186 13.1309C10.3084 12.6075 10.2102 12.0692 9.94146 11.6112C9.67271 11.1532 9.25069 10.8049 8.75 10.628V8.50001H10.25C10.8467 8.50001 11.419 8.26295 11.841 7.841C12.263 7.41904 12.5 6.84674 12.5 6.25001V5.37201C13.0004 5.19509 13.4222 4.84696 13.6907 4.38915C13.9593 3.93134 14.0574 3.39333 13.9676 2.87021C13.8778 2.34709 13.6061 1.87253 13.2002 1.53043C12.7944 1.18832 12.2808 1.00069 11.75 1.00069C11.2192 1.00069 10.7056 1.18832 10.2998 1.53043C9.89396 1.87253 9.62216 2.34709 9.53241 2.87021C9.44265 3.39333 9.54072 3.93134 9.80928 4.38915C10.0778 4.84696 10.4996 5.19509 11 5.37201V6.25001C11 6.44892 10.921 6.63969 10.7803 6.78034C10.6397 6.92099 10.4489 7.00001 10.25 7.00001H5.75C5.55109 7.00001 5.36033 6.92099 5.21967 6.78034C5.07902 6.63969 5 6.44892 5 6.25001V5.37201ZM8.75 12.75C8.75 12.9489 8.67099 13.1397 8.53033 13.2803C8.38968 13.421 8.19892 13.5 8 13.5C7.80109 13.5 7.61033 13.421 7.46967 13.2803C7.32902 13.1397 7.25 12.9489 7.25 12.75C7.25 12.5511 7.32902 12.3603 7.46967 12.2197C7.61033 12.079 7.80109 12 8 12C8.19892 12 8.38968 12.079 8.53033 12.2197C8.67099 12.3603 8.75 12.5511 8.75 12.75ZM11.75 4.00001C11.9489 4.00001 12.1397 3.92099 12.2803 3.78034C12.421 3.63969 12.5 3.44892 12.5 3.25001C12.5 3.05109 12.421 2.86033 12.2803 2.71968C12.1397 2.57902 11.9489 2.50001 11.75 2.50001C11.5511 2.50001 11.3603 2.57902 11.2197 2.71968C11.079 2.86033 11 3.05109 11 3.25001C11 3.44892 11.079 3.63969 11.2197 3.78034C11.3603 3.92099 11.5511 4.00001 11.75 4.00001Z",
              fill: "#CurrentColor",
            },
            null,
            -1
          ),
          xt = [ht];
        function wt(t, e) {
          return (0, n.wg)(), (0, n.iD)("svg", ft, xt);
        }
        const _t = {},
          bt = (0, i.Z)(_t, [["render", wt]]);
        var yt = bt,
          kt = {
            name: "Icon",
            components: { ...r },
            props: {
              name: {
                type: String,
                required: !0,
                validator(t) {
                  return Object.keys(r).includes(t);
                },
              },
            },
          };
        const It = (0, i.Z)(kt, [["render", A]]);
        var Vt = It,
          Mt = s(7139);
        const Lt = ["src"];
        function St(t, e, s, r, a, o) {
          return (
            (0, n.wg)(),
            (0, n.iD)(
              "div",
              { class: (0, Mt.C_)(["avatar", s.vClass]) },
              [
                (0, n._)(
                  "img",
                  { src: s.avatarUrl, alt: "avatar" },
                  null,
                  8,
                  Lt
                ),
              ],
              2
            )
          );
        }
        var Ot = {
          name: "Avatar",
          props: {
            avatarUrl: {
              type: String,
              default:
                "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/271deea8-e28c-41a3-aaf5-2913f5f48be6/de7834s-6515bd40-8b2c-4dc6-a843-5ac1a95a8b55.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI3MWRlZWE4LWUyOGMtNDFhMy1hYWY1LTI5MTNmNWY0OGJlNlwvZGU3ODM0cy02NTE1YmQ0MC04YjJjLTRkYzYtYTg0My01YWMxYTk1YThiNTUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BopkDn1ptIwbmcKHdAOlYHyAOOACXW0Zfgbs0-6BY-E",
            },
            vClass: { type: String, required: !1 },
          },
        };
        const Zt = (0, i.Z)(Ot, [
          ["render", St],
          ["__scopeId", "data-v-ac7f4c54"],
        ]);
        var jt = Zt,
          Et = {
            name: "Navbar",
            components: { Icon: Vt, Avatar: jt },
            props: { avatarUrl: { type: String, required: !0 } },
          };
        const Ht = (0, i.Z)(Et, [
          ["render", H],
          ["__scopeId", "data-v-76bae746"],
        ]);
        var At = Ht,
          Dt = JSON.parse(
            '[{"id":0,"avatar":"https://vertex-academy.com/tutorials/wp-content/uploads/2019/03/chto-takoe-git-1.jpg","username":"2ytka2","posts":[{"title":"Vue.js","text":"JavaScript framework for building interactive web applications ⚡","date":"19 NOVEMBER","stats":{"stars":33,"forks":4},"issues":[{"id":1,"username":"John","text":"Enable performance measuring in production, at the user\'s request"},{"id":2,"username":"Morgan","text":"It\'s Impossible to Rename an Inherited Slot"},{"id":3,"username":"Alex","text":"transition-group with flex parent causes removed items to fly"},{"id":4,"username":"Alex","text":"transition-group with flex parent causes removed items to fly"},{"id":5,"username":"Alex","text":"transition-group with flex parent causes removed items to fly"},{"id":6,"username":"Alex","text":"transition-group with flex parent causes removed items to fly"},{"id":7,"username":"Alex","text":"transition-group with flex parent causes removed items to fly"}]},{"title":"Good morning2","text":"123123123 text"}]},{"id":1,"avatar":"https://vertex-academy.com/tutorials/wp-content/uploads/2019/03/chto-takoe-git-1.jpg","username":"bob","posts":[{"title":"React.js","text":"Open source JavaScript library used for designing user interfaces","date":"19 NOVEMBER","stats":{"stars":33,"forks":4},"issues":[{"id":0,"username":"Gleb_01","text":"transition-group with flex parent causes removed items to fly"},{"id":0,"username":"Maks22","text":"transition-group with flex parent causes removed items to fly"},{"id":0,"username":"__Alek__","text":"transition-group with flex parent causes removed items to fly "}]},{"title":"Good morning","text":"123123123 text"}]},{"id":2,"avatar":"https://vertex-academy.com/tutorials/wp-content/uploads/2019/03/chto-takoe-git-1.jpg","username":"morph","posts":[{"title":"Vue.js","text":"JavaScript framework for building interactive web applications ⚡","date":"19 NOVEMBER","stats":{"stars":33,"forks":4},"issues":[{"id":0,"username":"John","text":"Enable performance measuring in production, at the user\'s request"},{"id":0,"username":"Morgan","text":"It\'s Impossible to Rename an Inherited Slot"},{"id":0,"username":"Alex","text":"transition-group with flex parent causes removed items to fly"}]},{"title":"Good morning","text":"123123123 text"}]},{"id":3,"avatar":"https://vertex-academy.com/tutorials/wp-content/uploads/2019/03/chto-takoe-git-1.jpg","username":"bib","posts":[{"title":"Vue.js","text":"JavaScript framework for building interactive web applications ⚡","date":"19 NOVEMBER","stats":{"stars":33,"forks":4},"issues":[{"id":0,"username":"John","text":"Enable performance measuring in production, at the user\'s request"},{"id":0,"username":"Morgan","text":"It\'s Impossible to Rename an Inherited Slot"},{"id":0,"username":"Alex","text":"transition-group with flex parent causes removed items to fly"}]},{"title":"Good morning","text":"123123123 text"}]},{"id":4,"avatar":"https://vertex-academy.com/tutorials/wp-content/uploads/2019/03/chto-takoe-git-1.jpg","username":"hock","posts":[{"title":"Vue.js","text":"JavaScript framework for building interactive web applications ⚡","date":"19 NOVEMBER","stats":{"stars":33,"forks":4},"issues":[{"id":0,"username":"John","text":"Enable performance measuring in production, at the user\'s request"},{"id":0,"username":"Morgan","text":"It\'s Impossible to Rename an Inherited Slot"},{"id":0,"username":"Alex","text":"transition-group with flex parent causes removed items to fly"}]},{"title":"Good morning","text":"123123123 text"}]},{"id":5,"avatar":"https://vertex-academy.com/tutorials/wp-content/uploads/2019/03/chto-takoe-git-1.jpg","username":"hank","posts":[{"title":"Vue.js","text":"JavaScript framework for building interactive web applications ⚡","date":"19 NOVEMBER","stats":{"stars":33,"forks":4},"issues":[{"id":0,"username":"John","text":"Enable performance measuring in production, at the user\'s request"},{"id":0,"username":"Morgan","text":"It\'s Impossible to Rename an Inherited Slot"},{"id":0,"username":"Alex","text":"transition-group with flex parent causes removed items to fly"}]},{"title":"Good morning","text":"123123123 text"}]},{"id":6,"avatar":"https://vertex-academy.com/tutorials/wp-content/uploads/2019/03/chto-takoe-git-1.jpg","username":"2ytka2","posts":[{"title":"Vue.js","text":"JavaScript framework for building interactive web applications ⚡","date":"19 NOVEMBER","stats":{"stars":33,"forks":4},"issues":[{"id":0,"username":"John","text":"Enable performance measuring in production, at the user\'s request"},{"id":0,"username":"Morgan","text":"It\'s Impossible to Rename an Inherited Slot"},{"id":0,"username":"Alex","text":"transition-group with flex parent causes removed items to fly"}]},{"title":"Good morning","text":"123123123 text"}]},{"id":7,"avatar":"https://vertex-academy.com/tutorials/wp-content/uploads/2019/03/chto-takoe-git-1.jpg","username":"2ytka2","posts":[{"title":"Vue.js","text":"JavaScript framework for building interactive web applications ⚡","date":"19 NOVEMBER","stats":{"stars":33,"forks":4},"issues":[{"id":0,"username":"John","text":"Enable performance measuring in production, at the user\'s request"},{"id":0,"username":"Morgan","text":"It\'s Impossible to Rename an Inherited Slot"},{"id":0,"username":"Alex","text":"transition-group with flex parent causes removed items to fly"}]},{"title":"Good morning","text":"123123123 text"}]},{"id":8,"avatar":"https://vertex-academy.com/tutorials/wp-content/uploads/2019/03/chto-takoe-git-1.jpg","username":"2ytka2","posts":[{"title":"Vue.js","text":"JavaScript framework for building interactive web applications ⚡","date":"19 NOVEMBER","stats":{"stars":33,"forks":4},"issues":[{"id":0,"username":"John","text":"Enable performance measuring in production, at the user\'s request"},{"id":0,"username":"Morgan","text":"It\'s Impossible to Rename an Inherited Slot"},{"id":0,"username":"Alex","text":"transition-group with flex parent causes removed items to fly"}]},{"title":"Good morning","text":"123123123 text"}]},{"id":9,"avatar":"https://vertex-academy.com/tutorials/wp-content/uploads/2019/03/chto-takoe-git-1.jpg","username":"2ytka2","posts":[{"title":"Vue.js","text":"JavaScript framework for building interactive web applications ⚡","date":"19 NOVEMBER","stats":{"stars":33,"forks":4},"issues":[{"id":0,"username":"John","text":"Enable performance measuring in production, at the user\'s request"},{"id":0,"username":"Morgan","text":"It\'s Impossible to Rename an Inherited Slot"},{"id":0,"username":"Alex","text":"transition-group with flex parent causes removed items to fly"}]},{"title":"Good morning","text":"123123123 text"}]},{"id":10,"avatar":"https://vertex-academy.com/tutorials/wp-content/uploads/2019/03/chto-takoe-git-1.jpg","username":"2ytka2","posts":[{"title":"Vue.js","text":"JavaScript framework for building interactive web applications ⚡","date":"19 NOVEMBER","stats":{"stars":33,"forks":4},"issues":[{"id":0,"username":"John","text":"Enable performance measuring in production, at the user\'s request"},{"id":0,"username":"Morgan","text":"It\'s Impossible to Rename an Inherited Slot"},{"id":0,"username":"Alex","text":"transition-group with flex parent causes removed items to fly"}]},{"title":"Good morning","text":"123123123 text"}]},{"id":11,"avatar":"https://vertex-academy.com/tutorials/wp-content/uploads/2019/03/chto-takoe-git-1.jpg","username":"2ytka2","posts":[{"title":"Vue.js","text":"JavaScript framework for building interactive web applications ⚡","date":"19 NOVEMBER","stats":{"stars":33,"forks":4},"issues":[{"id":0,"username":"John","text":"Enable performance measuring in production, at the user\'s request"},{"id":0,"username":"Morgan","text":"It\'s Impossible to Rename an Inherited Slot"},{"id":0,"username":"Alex","text":"transition-group with flex parent causes removed items to fly"}]},{"title":"Good morning","text":"123123123 text"}]},{"id":12,"avatar":"https://vertex-academy.com/tutorials/wp-content/uploads/2019/03/chto-takoe-git-1.jpg","username":"2ytka2","posts":[{"title":"Vue.js","text":"JavaScript framework for building interactive web applications ⚡","date":"19 NOVEMBER","stats":{"stars":33,"forks":4},"issues":[{"id":0,"username":"John","text":"Enable performance measuring in production, at the user\'s request"},{"id":0,"username":"Morgan","text":"It\'s Impossible to Rename an Inherited Slot"},{"id":0,"username":"Alex","text":"transition-group with flex parent causes removed items to fly"}]},{"title":"Good morning","text":"123123123 text"}]},{"id":13,"avatar":"https://vertex-academy.com/tutorials/wp-content/uploads/2019/03/chto-takoe-git-1.jpg","username":"2ytka2","posts":[{"title":"Vue.js","text":"JavaScript framework for building interactive web applications ⚡","date":"19 NOVEMBER","stats":{"stars":33,"forks":4},"issues":[{"id":0,"username":"John","text":"Enable performance measuring in production, at the user\'s request"},{"id":0,"username":"Morgan","text":"It\'s Impossible to Rename an Inherited Slot"},{"id":0,"username":"Alex","text":"transition-group with flex parent causes removed items to fly"}]},{"title":"Good morning","text":"123123123 text"}]}]'
          );
        const Jt = { class: "user__avatar" },
          Rt = { class: "user__username" };
        function Ut(t, e, s, r, a, o) {
          const i = (0, n.up)("Avatar");
          return (
            (0, n.wg)(),
            (0, n.iD)(
              "div",
              { class: (0, Mt.C_)(["user", s.vClass]) },
              [
                (0, n._)("div", Jt, [
                  (0, n.Wm)(
                    i,
                    { avatarUrl: s.avatarUrl, vClass: s.vClass },
                    null,
                    8,
                    ["avatarUrl", "vClass"]
                  ),
                ]),
                (0, n._)("div", Rt, [
                  (0, n._)("p", null, (0, Mt.zw)(s.username), 1),
                ]),
              ],
              2
            )
          );
        }
        var qt = {
          name: "User",
          components: { Avatar: jt },
          props: {
            username: { type: String, required: !0 },
            avatarUrl: { type: String, required: !0 },
            vClass: { type: String, required: !1 },
          },
        };
        const Wt = (0, i.Z)(qt, [
          ["render", Ut],
          ["__scopeId", "data-v-4b702375"],
        ]);
        var Tt = Wt;
        const Nt = { class: "post" },
          Bt = { class: "post__user" },
          Gt = { class: "post__content" },
          Yt = { key: 0, class: "post__issues" },
          zt = { datetime: "", class: "post__date" };
        function Xt(t, e, s, r, a, o) {
          const i = (0, n.up)("User"),
            l = (0, n.up)("Issues");
          return (
            (0, n.wg)(),
            (0, n.iD)("div", Nt, [
              (0, n._)("div", Bt, [
                (0, n.Wm)(
                  i,
                  {
                    username: s.username,
                    avatarUrl: s.avatarUrl,
                    vClass: "posts",
                  },
                  null,
                  8,
                  ["username", "avatarUrl"]
                ),
              ]),
              (0, n._)("div", Gt, [
                (0, n.WI)(t.$slots, "repository", {}, void 0, !0),
              ]),
              s.issues
                ? ((0, n.wg)(),
                  (0, n.iD)("div", Yt, [
                    (0, n.Wm)(l, { comments: s.issues }, null, 8, ["comments"]),
                  ]))
                : (0, n.kq)("", !0),
              (0, n._)("time", zt, (0, Mt.zw)(s.postDate), 1),
            ])
          );
        }
        const Pt = { class: "c-issues" },
          Qt = { key: 0, class: "comments" },
          Kt = { class: "comments__list" },
          Ft = { key: 0, class: "comments__item" };
        function $t(t, e, s, r, a, o) {
          const i = (0, n.up)("Toggler"),
            l = (0, n.up)("Comment");
          return (
            (0, n.wg)(),
            (0, n.iD)("div", Pt, [
              (0, n.Wm)(
                i,
                { togglerText: "issues", onToggle: o.toggle },
                null,
                8,
                ["onToggle"]
              ),
              a.shown
                ? ((0, n.wg)(),
                  (0, n.iD)("div", Qt, [
                    (0, n._)("ul", Kt, [
                      ((0, n.wg)(!0),
                      (0, n.iD)(
                        n.HY,
                        null,
                        (0, n.Ko)(
                          s.comments,
                          (t) => (
                            (0, n.wg)(),
                            (0, n.iD)(
                              n.HY,
                              { key: t.id },
                              [
                                t.id <= this.shownCount
                                  ? ((0, n.wg)(),
                                    (0, n.iD)("li", Ft, [
                                      (0, n.Wm)(l, { comment: t }, null, 8, [
                                        "comment",
                                      ]),
                                    ]))
                                  : (0, n.kq)("", !0),
                              ],
                              64
                            )
                          )
                        ),
                        128
                      )),
                    ]),
                    s.comments.length > 3
                      ? ((0, n.wg)(),
                        (0, n.iD)(
                          "button",
                          {
                            key: 0,
                            class: "comments__show",
                            onClick:
                              e[0] ||
                              (e[0] = (...t) => o.showAll && o.showAll(...t)),
                          },
                          (0, Mt.zw)(
                            3 == this.shownCount
                              ? "Show all " + s.comments.length + " issues"
                              : "Hide issues"
                          ),
                          1
                        ))
                      : (0, n.kq)("", !0),
                  ]))
                : (0, n.kq)("", !0),
            ])
          );
        }
        const te = { class: "btn__text" },
          ee = { class: "btn__icon" };
        function se(t, e, s, r, a, o) {
          const i = (0, n.up)("Icon");
          return (
            (0, n.wg)(),
            (0, n.iD)(
              "button",
              {
                class: (0, Mt.C_)([
                  "btn",
                  "btn__toggler",
                  { "--active": a.isOpened },
                ]),
                onClick:
                  e[0] ||
                  (e[0] = (...t) => o.changeState && o.changeState(...t)),
              },
              [
                (0, n._)(
                  "div",
                  te,
                  (0, Mt.zw)(
                    a.isOpened
                      ? "Hide " + s.togglerText
                      : "Show " + s.togglerText
                  ),
                  1
                ),
                (0, n._)("div", ee, [(0, n.Wm)(i, { name: "Arrow" })]),
              ],
              2
            )
          );
        }
        var re = {
          name: "Toggler",
          emits: ["toggle"],
          data() {
            return { isOpened: !1 };
          },
          components: { Icon: Vt },
          props: { togglerText: { type: String, required: !0 } },
          methods: {
            changeState() {
              (this.isOpened = !this.isOpened),
                this.$emit("toggle", this.isOpened);
            },
          },
        };
        const ae = (0, i.Z)(re, [
          ["render", se],
          ["__scopeId", "data-v-3ce8464a"],
        ]);
        var ne = ae;
        const oe = { class: "comment" },
          ie = { class: "comment__username" },
          le = { class: "comment__text" };
        function ue(t, e, s, r, a, o) {
          return (
            (0, n.wg)(),
            (0, n.iD)("div", oe, [
              (0, n._)("div", ie, (0, Mt.zw)(s.comment.username), 1),
              (0, n._)("div", le, (0, Mt.zw)(s.comment.text), 1),
            ])
          );
        }
        var ce = {
          name: "Comment",
          props: { comment: { type: Object, required: !0 } },
        };
        const pe = (0, i.Z)(ce, [
          ["render", ue],
          ["__scopeId", "data-v-f330ee48"],
        ]);
        var de = pe,
          me = {
            name: "Issues",
            data() {
              return { shown: !1, shownCount: 3 };
            },
            components: { Toggler: ne, Comment: de },
            props: { comments: Array },
            methods: {
              toggle(t) {
                this.shown = t;
              },
              showAll() {
                this.shownCount =
                  3 == this.shownCount ? this.comments.length : 3;
              },
            },
          };
        const ve = (0, i.Z)(me, [
          ["render", $t],
          ["__scopeId", "data-v-241f5816"],
        ]);
        var Ce = ve,
          ge = {
            name: "PostItem",
            components: { User: Tt, Issues: Ce },
            props: {
              username: { type: String, required: !0 },
              avatarUrl: { type: String, required: !0 },
              issues: { type: Array, required: !0 },
              postDate: { type: String, required: !0 },
            },
          };
        const fe = (0, i.Z)(ge, [
          ["render", Xt],
          ["__scopeId", "data-v-6baddfca"],
        ]);
        var he = fe;
        const xe = { class: "repository" },
          we = { class: "repository__title" },
          _e = { class: "repository__desc" },
          be = { class: "repository__controls" };
        function ye(t, e, s, r, a, o) {
          const i = (0, n.up)("Controls");
          return (
            (0, n.wg)(),
            (0, n.iD)("div", xe, [
              (0, n._)("h1", we, (0, Mt.zw)(s.title), 1),
              (0, n._)("div", _e, [(0, n._)("p", null, (0, Mt.zw)(s.text), 1)]),
              (0, n._)("div", be, [
                (0, n.Wm)(i, { repoStats: s.stats }, null, 8, ["repoStats"]),
              ]),
            ])
          );
        }
        const ke = (t) => (
            (0, n.dD)("data-v-026fd217"), (t = t()), (0, n.Cn)(), t
          ),
          Ie = { class: "controls" },
          Ve = { class: "btn" },
          Me = { class: "btn__icon star" },
          Le = ke(() => (0, n._)("div", { class: "btn__title" }, "Star", -1)),
          Se = { class: "btn__count" },
          Oe = { class: "btn" },
          Ze = { class: "btn__icon fork" },
          je = ke(() =>
            (0, n._)("div", { class: "btn__title --bold" }, "Fork", -1)
          ),
          Ee = { class: "btn__count" };
        function He(t, e, s, r, a, o) {
          const i = (0, n.up)("Icon");
          return (
            (0, n.wg)(),
            (0, n.iD)("div", Ie, [
              (0, n._)("button", Ve, [
                (0, n._)("div", Me, [(0, n.Wm)(i, { name: "Star" })]),
                Le,
              ]),
              (0, n._)("div", Se, (0, Mt.zw)(s.repoStats.stars), 1),
              (0, n._)("button", Oe, [
                (0, n._)("div", Ze, [(0, n.Wm)(i, { name: "Fork" })]),
                je,
              ]),
              (0, n._)("div", Ee, (0, Mt.zw)(s.repoStats.forks), 1),
            ])
          );
        }
        var Ae = {
          name: "Controls",
          components: { Icon: Vt },
          props: { repoStats: { type: Object, required: !0 } },
        };
        const De = (0, i.Z)(Ae, [
          ["render", He],
          ["__scopeId", "data-v-026fd217"],
        ]);
        var Je = De,
          Re = {
            name: "Repository",
            components: { Controls: Je },
            props: {
              title: { type: String, required: !0 },
              text: { type: String, required: !0 },
              stats: { type: Object, required: !0 },
            },
          };
        const Ue = (0, i.Z)(Re, [
          ["render", ye],
          ["__scopeId", "data-v-07f8d0ca"],
        ]);
        var qe = Ue,
          We = {
            name: "feeds",
            data() {
              return {
                dbUsers: Dt,
                loginnedUser: {
                  id: 1293992,
                  username: "yLuTo4KA",
                  avatarUrl:
                    "https://sun9-14.userapi.com/impg/_tbr32K5b8enmy1zeQJtnApEq-STitZ_DZ2VTw/Eq_LzA9Ryds.jpg?size=1000x1000&quality=95&sign=841e637ee9a6209caccadfea9f1daef1&type=album",
                },
              };
            },
            components: {
              Topline: y,
              Header: At,
              User: Tt,
              PostItem: he,
              Repository: qe,
            },
          };
        const Te = (0, i.Z)(We, [
          ["render", C],
          ["__scopeId", "data-v-641ef615"],
        ]);
        var Ne = Te;
        const Be = [{ path: "/", name: "feedsPage", component: Ne }],
          Ge = (0, p.p7)({
            history: (0, p.PO)("/gitogramLS/dist/"),
            routes: Be,
          });
        var Ye = Ge,
          ze = s(65),
          Xe = (0, ze.MT)({
            state: {},
            getters: {},
            mutations: {},
            actions: {},
            modules: {},
          });
        (0, a.ri)(c).use(Xe).use(Ye).mount("#app");
      },
    },
    e = {};
  function s(r) {
    var a = e[r];
    if (void 0 !== a) return a.exports;
    var n = (e[r] = { exports: {} });
    return t[r].call(n.exports, n, n.exports, s), n.exports;
  }
  (s.m = t),
    (function () {
      var t = [];
      s.O = function (e, r, a, n) {
        if (!r) {
          var o = 1 / 0;
          for (c = 0; c < t.length; c++) {
            (r = t[c][0]), (a = t[c][1]), (n = t[c][2]);
            for (var i = !0, l = 0; l < r.length; l++)
              (!1 & n || o >= n) &&
              Object.keys(s.O).every(function (t) {
                return s.O[t](r[l]);
              })
                ? r.splice(l--, 1)
                : ((i = !1), n < o && (o = n));
            if (i) {
              t.splice(c--, 1);
              var u = a();
              void 0 !== u && (e = u);
            }
          }
          return e;
        }
        n = n || 0;
        for (var c = t.length; c > 0 && t[c - 1][2] > n; c--) t[c] = t[c - 1];
        t[c] = [r, a, n];
      };
    })(),
    (function () {
      s.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t["default"];
              }
            : function () {
                return t;
              };
        return s.d(e, { a: e }), e;
      };
    })(),
    (function () {
      s.d = function (t, e) {
        for (var r in e)
          s.o(e, r) &&
            !s.o(t, r) &&
            Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
      };
    })(),
    (function () {
      s.g = (function () {
        if ("object" === typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (t) {
          if ("object" === typeof window) return window;
        }
      })();
    })(),
    (function () {
      s.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      };
    })(),
    (function () {
      s.r = function (t) {
        "undefined" !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      };
    })(),
    (function () {
      var t = { 143: 0 };
      s.O.j = function (e) {
        return 0 === t[e];
      };
      var e = function (e, r) {
          var a,
            n,
            o = r[0],
            i = r[1],
            l = r[2],
            u = 0;
          if (
            o.some(function (e) {
              return 0 !== t[e];
            })
          ) {
            for (a in i) s.o(i, a) && (s.m[a] = i[a]);
            if (l) var c = l(s);
          }
          for (e && e(r); u < o.length; u++)
            (n = o[u]), s.o(t, n) && t[n] && t[n][0](), (t[n] = 0);
          return s.O(c);
        },
        r = (self["webpackChunkgitogram"] = self["webpackChunkgitogram"] || []);
      r.forEach(e.bind(null, 0)), (r.push = e.bind(null, r.push.bind(r)));
    })();
  var r = s.O(void 0, [998], function () {
    return s(9490);
  });
  r = s.O(r);
})();
//# sourceMappingURL=app.ff0f3b63.js.map
