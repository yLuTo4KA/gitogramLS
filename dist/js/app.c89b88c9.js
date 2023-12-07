(function () {
  "use strict";
  var e = {
      1735: function (e, t, r) {
        var s = {};
        r.r(s),
          r.d(s, {
            Arrow: function () {
              return le;
            },
            ArrowNext: function () {
              return Ee;
            },
            Close: function () {
              return Me;
            },
            Exit: function () {
              return te;
            },
            Fork: function () {
              return be;
            },
            GitCat: function () {
              return Fe;
            },
            Home: function () {
              return T;
            },
            Loading: function () {
              return Ue;
            },
            Logo: function () {
              return G;
            },
            Star: function () {
              return ge;
            },
          });
        var a = r(3233),
          n = r(3396);
        function o(e, t) {
          const r = (0, n.up)("router-view");
          return (0, n.wg)(), (0, n.j4)(r);
        }
        var i = r(89);
        const l = {},
          d = (0, i.Z)(l, [["render", o]]);
        var c = d,
          u = r(2483);
        const p = { class: "repositories__section" },
          m = { class: "repositories__list" };
        function v(e, t, r, s, a, o) {
          const i = (0, n.up)("Header"),
            l = (0, n.up)("User"),
            d = (0, n.up)("SwiperSlide"),
            c = (0, n.up)("Swiper"),
            u = (0, n.up)("Topline"),
            v = (0, n.up)("Repository"),
            g = (0, n.up)("PostItem");
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
                    (0, n.Wm)(
                      c,
                      {
                        class: "stories__list",
                        freeMode: !0,
                        "slides-per-view": "auto",
                        "space-between": 0,
                        modules: s.modules,
                      },
                      {
                        default: (0, n.w5)(() => [
                          ((0, n.wg)(!0),
                          (0, n.iD)(
                            n.HY,
                            null,
                            (0, n.Ko)(
                              e.trandPost.data,
                              (e, t) => (
                                (0, n.wg)(),
                                (0, n.j4)(
                                  d,
                                  { class: "stories__item", key: e.id },
                                  {
                                    default: (0, n.w5)(() => [
                                      (0, n.Wm)(
                                        l,
                                        {
                                          onClick: (e) => o.routeTo(t),
                                          username: e.owner.login,
                                          avatarUrl: e.owner.avatar_url,
                                          vClass: "stories",
                                        },
                                        null,
                                        8,
                                        ["onClick", "username", "avatarUrl"]
                                      ),
                                    ]),
                                    _: 2,
                                  },
                                  1024
                                )
                              )
                            ),
                            128
                          )),
                        ]),
                        _: 1,
                      },
                      8,
                      ["modules"]
                    ),
                  ]),
                  _: 1,
                }),
                (0, n._)("div", p, [
                  (0, n._)("ul", m, [
                    ((0, n.wg)(!0),
                    (0, n.iD)(
                      n.HY,
                      null,
                      (0, n.Ko)(
                        e.trandPost.data,
                        (e) => (
                          (0, n.wg)(),
                          (0, n.iD)(
                            "li",
                            { class: "repositories__item", key: e.id },
                            [
                              (0, n.Wm)(
                                g,
                                { postData: o.getFeedData(e).postData },
                                {
                                  repository: (0, n.w5)(() => [
                                    (0, n.Wm)(
                                      v,
                                      {
                                        repositoryData:
                                          o.getFeedData(e).repositoryData,
                                      },
                                      null,
                                      8,
                                      ["repositoryData"]
                                    ),
                                  ]),
                                  _: 2,
                                },
                                1032,
                                ["postData"]
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
        r(560);
        const g = { class: "c-topline" },
          C = { class: "x-container" },
          h = { class: "headline" },
          w = { key: 0, class: "content" };
        function _(e, t) {
          return (
            (0, n.wg)(),
            (0, n.iD)("div", g, [
              (0, n._)("div", C, [
                (0, n._)("div", h, [
                  (0, n.WI)(e.$slots, "headline", {}, void 0, !0),
                ]),
                e.$slots.content
                  ? ((0, n.wg)(),
                    (0, n.iD)("div", w, [
                      (0, n.WI)(e.$slots, "content", {}, void 0, !0),
                    ]))
                  : (0, n.kq)("", !0),
              ]),
            ])
          );
        }
        const f = {},
          x = (0, i.Z)(f, [
            ["render", _],
            ["__scopeId", "data-v-42c65fa2"],
          ]);
        var b = x;
        const y = { class: "header" },
          L = { class: "header__logo" },
          S = { class: "header__nav" },
          k = { class: "header__nav-list" },
          I = { class: "header__nav-item" },
          D = { class: "header__btn" },
          M = { class: "header__nav-item" },
          V = { class: "header__btn header__btn--avatar" },
          Z = { class: "header__nav-item" },
          R = { class: "header__btn" };
        function O(e, t, r, s, a, o) {
          const i = (0, n.up)("Icon"),
            l = (0, n.up)("Avatar");
          return (
            (0, n.wg)(),
            (0, n.iD)("header", y, [
              (0, n._)("button", L, [(0, n.Wm)(i, { name: "Logo" })]),
              (0, n._)("nav", S, [
                (0, n._)("ul", k, [
                  (0, n._)("li", I, [
                    (0, n._)("button", D, [(0, n.Wm)(i, { name: "Home" })]),
                  ]),
                  (0, n._)("li", M, [
                    (0, n._)("button", V, [
                      (0, n.Wm)(l, { avatarUrl: r.avatarUrl }, null, 8, [
                        "avatarUrl",
                      ]),
                    ]),
                  ]),
                  (0, n._)("li", Z, [
                    (0, n._)("button", R, [(0, n.Wm)(i, { name: "Exit" })]),
                  ]),
                ]),
              ]),
            ])
          );
        }
        function j(e, t, r, s, a, o) {
          return (0, n.wg)(), (0, n.j4)((0, n.LL)(r.name));
        }
        const A = {
            viewBox: "0 0 32 33",
            preserveAspectRatio: "none",
            fill: "currentColor",
            xmlns: "http://www.w3.org/2000/svg",
          },
          E = (0, n._)(
            "path",
            {
              d: "M14.0692 4.06704C15.1853 3.12849 16.8147 3.12849 17.9308 4.06704L26.9308 11.6352C27.6087 12.2052 28 13.0456 28 13.9313V26.5C28 27.6046 27.1046 28.5 26 28.5H20.5C19.3954 28.5 18.5 27.6046 18.5 26.5V19.5H13.5V26.5C13.5 27.6046 12.6046 28.5 11.5 28.5H6C4.89543 28.5 4 27.6046 4 26.5V13.9313C4 13.0456 4.39135 12.2052 5.0692 11.6352L14.0692 4.06704Z",
              fill: "#currentColor",
            },
            null,
            -1
          ),
          H = [E];
        function N(e, t) {
          return (0, n.wg)(), (0, n.iD)("svg", A, H);
        }
        const W = {},
          B = (0, i.Z)(W, [["render", N]]);
        var T = B;
        const q = {
            preserveAspectRatio: "none",
            viewBox: "0 0 175 41",
            fill: "currentColor",
            xmlns: "http://www.w3.org/2000/svg",
          },
          U = (0, n.uE)(
            '<path d="M18.6664 14.4756H24.3009C23.5838 9.28933 19.0122 5.63971 13.0832 5.63971C6.15528 5.63971 0.815308 10.6339 0.815308 19.1369C0.815308 27.435 5.80953 32.5829 13.1984 32.5829C19.819 32.5829 24.5443 28.3954 24.5443 21.4931V18.1893H13.5698V22.3639H19.2043C19.1274 25.6166 16.9121 27.6783 13.224 27.6783C9.06217 27.6783 6.43701 24.5665 6.43701 19.0857C6.43701 13.6305 9.16462 10.5443 13.1728 10.5443C16.0285 10.5443 17.9621 12.0169 18.6664 14.4756Z" fill="CurrentColor"></path><path d="M28.5773 32.2243H34.0325V12.5548H28.5773V32.2243ZM31.3177 10.0193C32.944 10.0193 34.2758 8.7771 34.2758 7.25322C34.2758 5.74215 32.944 4.5 31.3177 4.5C29.7042 4.5 28.3724 5.74215 28.3724 7.25322C28.3724 8.7771 29.7042 10.0193 31.3177 10.0193Z" fill="CurrentColor"></path><path d="M47.6026 12.5548H43.9017V7.84229H38.4465V12.5548H35.7573V16.6526H38.4465V26.8972C38.4209 30.7517 41.046 32.6597 45.003 32.4932C46.4116 32.442 47.4105 32.1603 47.9611 31.981L47.1031 27.9216C46.8342 27.9728 46.258 28.1009 45.7457 28.1009C44.6572 28.1009 43.9017 27.6911 43.9017 26.18V16.6526H47.6026V12.5548Z" fill="CurrentColor"></path><path d="M58.5699 32.6085C64.5373 32.6085 68.251 28.5235 68.251 22.4664C68.251 16.3709 64.5373 12.2987 58.5699 12.2987C52.6024 12.2987 48.8888 16.3709 48.8888 22.4664C48.8888 28.5235 52.6024 32.6085 58.5699 32.6085ZM58.5955 28.3826C55.8422 28.3826 54.4336 25.8599 54.4336 22.428C54.4336 18.996 55.8422 16.4605 58.5955 16.4605C61.2975 16.4605 62.7061 18.996 62.7061 22.428C62.7061 25.8599 61.2975 28.3826 58.5955 28.3826Z" fill="CurrentColor"></path><path d="M79.3975 40.0102C85.0192 40.0102 89.0146 37.449 89.0146 32.4164V12.5548H83.5978V15.8586H83.3929C82.663 14.2579 81.0623 12.2987 77.7712 12.2987C73.4557 12.2987 69.8061 15.6538 69.8061 22.3511C69.8061 28.8948 73.3533 31.9426 77.784 31.9426C80.9214 31.9426 82.6758 30.3675 83.3929 28.7412H83.6234V32.3396C83.6234 35.0416 81.8947 36.0916 79.5256 36.0916C77.1181 36.0916 75.9016 35.0416 75.4534 33.8506L70.4079 34.5293C71.061 37.6283 74.096 40.0102 79.3975 40.0102ZM79.5128 27.8448C76.8364 27.8448 75.3766 25.719 75.3766 22.3255C75.3766 18.9832 76.8108 16.6398 79.5128 16.6398C82.1636 16.6398 83.649 18.8808 83.649 22.3255C83.649 25.7959 82.138 27.8448 79.5128 27.8448Z" fill="CurrentColor"></path><path d="M92.0936 32.2243H97.5488V21.0962C97.5488 18.6759 99.316 17.0112 101.723 17.0112C102.479 17.0112 103.516 17.1392 104.029 17.3057V12.4651C103.542 12.3499 102.863 12.2731 102.313 12.2731C100.11 12.2731 98.3044 13.5536 97.5873 15.9867H97.3824V12.5548H92.0936V32.2243Z" fill="CurrentColor"></path><path d="M110.632 32.5957C113.539 32.5957 115.422 31.3279 116.382 29.4967H116.536V32.2243H121.709V18.9576C121.709 14.2707 117.739 12.2987 113.36 12.2987C108.647 12.2987 105.548 14.5525 104.793 18.1381L109.838 18.5478C110.21 17.2417 111.375 16.2812 113.334 16.2812C115.191 16.2812 116.254 17.2161 116.254 18.8296V18.9064C116.254 20.1742 114.909 20.3406 111.49 20.6736C107.597 21.0321 104.101 22.3383 104.101 26.7307C104.101 30.6236 106.88 32.5957 110.632 32.5957ZM112.195 28.8308C110.517 28.8308 109.313 28.0497 109.313 26.5514C109.313 25.0147 110.581 24.2592 112.502 23.9903C113.693 23.8238 115.639 23.5421 116.292 23.1067V25.194C116.292 27.2557 114.589 28.8308 112.195 28.8308Z" fill="CurrentColor"></path><path d="M124.679 32.2243H130.135V20.4175C130.135 18.2405 131.518 16.7935 133.336 16.7935C135.129 16.7935 136.333 18.0228 136.333 19.9565V32.2243H141.621V20.2126C141.621 18.1765 142.787 16.7935 144.771 16.7935C146.513 16.7935 147.819 17.8819 147.819 20.0717V32.2243H153.262V18.996C153.262 14.7317 150.726 12.2987 147.064 12.2987C144.182 12.2987 141.941 13.7713 141.135 16.0251H140.93C140.302 13.7457 138.292 12.2987 135.59 12.2987C132.939 12.2987 130.929 13.7073 130.109 16.0251H129.878V12.5548H124.679V32.2243Z" fill="CurrentColor"></path><path d="M174.815 4.76892H170.116L161.664 36.1685H166.364L174.815 4.76892Z" fill="CurrentColor"></path>',
            9
          ),
          J = [U];
        function P(e, t) {
          return (0, n.wg)(), (0, n.iD)("svg", q, J);
        }
        const Y = {},
          z = (0, i.Z)(Y, [["render", P]]);
        var G = z;
        const $ = {
            preserveAspectRatio: "none",
            viewBox: "0 0 32 33",
            fill: "CurrentColor",
            xmlns: "http://www.w3.org/2000/svg",
          },
          F = (0, n._)(
            "path",
            {
              d: "M16 6.94273V14.625L16.0007 15.2562L25.3025 15.255L23.1495 13.1003C22.8167 12.7674 22.7865 12.2466 23.0589 11.8796L23.1497 11.7745C23.4826 11.4417 24.0034 11.4116 24.3704 11.6839L24.4755 11.7747L28.2213 15.5218C28.5538 15.8544 28.5842 16.3746 28.3125 16.7416L28.2219 16.8467L24.4762 20.601C24.1105 20.9676 23.5169 20.9683 23.1503 20.6026C22.8171 20.2701 22.7863 19.7493 23.0582 19.382L23.1488 19.2767L25.29 17.13L16.0007 17.1312L16 25.5625C16 26.1455 15.4735 26.5871 14.8994 26.4857L4.27444 24.6091C3.82651 24.53 3.5 24.1408 3.5 23.6859V8.68752C3.5 8.22839 3.83252 7.83681 4.28558 7.76241L14.9106 6.01762C15.4813 5.92389 16 6.36432 16 6.94273ZM11.6277 15.875C10.9358 15.875 10.375 16.4359 10.375 17.1277C10.375 17.8196 10.9358 18.3804 11.6277 18.3804C12.3195 18.3804 12.8804 17.8196 12.8804 17.1277C12.8804 16.4359 12.3195 15.875 11.6277 15.875ZM17.25 24.6266L18.2064 24.6268L18.3338 24.6183C18.7919 24.556 19.1447 24.163 19.1439 23.6878L19.135 18.375H17.25V24.6266ZM17.2525 14L17.25 12.4067V7.75002L18.1816 7.75002C18.6556 7.75002 19.0476 8.10192 19.1103 8.55891L19.1191 8.68597L19.1275 14H17.2525Z",
              fill: "CurrentColor",
            },
            null,
            -1
          ),
          X = [F];
        function K(e, t) {
          return (0, n.wg)(), (0, n.iD)("svg", $, X);
        }
        const Q = {},
          ee = (0, i.Z)(Q, [["render", K]]);
        var te = ee;
        const re = {
            viewBox: "0 0 16 16",
            preserveAspectRatio: "none",
            fill: "CurrentColor",
            xmlns: "http://www.w3.org/2000/svg",
          },
          se = (0, n._)(
            "path",
            {
              d: "M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",
              fill: "CurrentColor",
            },
            null,
            -1
          ),
          ae = [se];
        function ne(e, t) {
          return (0, n.wg)(), (0, n.iD)("svg", re, ae);
        }
        const oe = {},
          ie = (0, i.Z)(oe, [["render", ne]]);
        var le = ie;
        const de = {
            preserveAspectRatio: "none",
            viewBox: "0 0 16 16",
            fill: "CurrentColor",
            xmlns: "http://www.w3.org/2000/svg",
          },
          ce = (0, n._)(
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
          ue = [ce];
        function pe(e, t) {
          return (0, n.wg)(), (0, n.iD)("svg", de, ue);
        }
        const me = {},
          ve = (0, i.Z)(me, [["render", pe]]);
        var ge = ve;
        const Ce = {
            preserveAspectRatio: "none",
            viewBox: "0 0 16 16",
            fill: "CurrentColor",
            xmlns: "http://www.w3.org/2000/svg",
          },
          he = (0, n._)(
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
          we = [he];
        function _e(e, t) {
          return (0, n.wg)(), (0, n.iD)("svg", Ce, we);
        }
        const fe = {},
          xe = (0, i.Z)(fe, [["render", _e]]);
        var be = xe;
        const ye = {
            preserveAspectRatio: "none",
            viewBox: "0 0 23 23",
            fill: "CurrentColor",
            xmlns: "http://www.w3.org/2000/svg",
          },
          Le = (0, n._)(
            "path",
            {
              d: "M0.899054 0.887401L1.01256 0.762563C1.65578 0.119347 2.67513 0.0815103 3.3626 0.649054L3.48744 0.762563L11.75 9.025L20.0126 0.762563C20.696 0.0791457 21.804 0.0791457 22.4874 0.762563C23.1709 1.44598 23.1709 2.55402 22.4874 3.23744L14.225 11.5L22.4874 19.7626C23.1307 20.4058 23.1685 21.4251 22.6009 22.1126L22.4874 22.2374C21.8442 22.8807 20.8249 22.9185 20.1374 22.3509L20.0126 22.2374L11.75 13.975L3.48744 22.2374C2.80402 22.9209 1.69598 22.9209 1.01256 22.2374C0.329146 21.554 0.329146 20.446 1.01256 19.7626L9.275 11.5L1.01256 3.23744C0.369347 2.59422 0.33151 1.57487 0.899054 0.887401L1.01256 0.762563L0.899054 0.887401Z",
              fill: "CurrentColor",
            },
            null,
            -1
          ),
          Se = [Le];
        function ke(e, t) {
          return (0, n.wg)(), (0, n.iD)("svg", ye, Se);
        }
        const Ie = {},
          De = (0, i.Z)(Ie, [["render", ke]]);
        var Me = De;
        const Ve = {
            preserveAspectRatio: "none",
            viewBox: "0 0 20 18",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          Ze = (0, n._)(
            "path",
            {
              d: "M8.72228 17.4388L8.56806 17.3056L1.23322 9.9708L1.08692 9.79854C0.740634 9.31559 0.745078 8.65876 1.10023 8.18029L1.23341 8.02607L8.56954 0.692742L8.72378 0.55964C9.26215 0.160342 10.026 0.204864 10.5141 0.693113C11.0021 1.18136 11.0464 1.94525 10.6469 2.48346L10.5137 2.63766L5.52663 7.62504L17.7916 7.62504L17.9782 7.63759C18.5883 7.72036 19.0713 8.20333 19.1541 8.81346L19.1666 9.00004L19.1541 9.18662C19.0713 9.79675 18.5883 10.2797 17.9782 10.3625L17.7916 10.375L5.52663 10.375L10.5126 15.3611L10.6589 15.5333C11.0051 16.0162 11.0008 16.673 10.6457 17.1514L10.5126 17.3056L10.3404 17.4519C9.85749 17.7982 9.20076 17.7938 8.72228 17.4388Z",
              fill: "currentColor",
            },
            null,
            -1
          ),
          Re = [Ze];
        function Oe(e, t) {
          return (0, n.wg)(), (0, n.iD)("svg", Ve, Re);
        }
        const je = {},
          Ae = (0, i.Z)(je, [["render", Oe]]);
        var Ee = Ae;
        const He = {
            preserveAspectRation: "none",
            viewBox: "0 0 28 28",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          Ne = (0, n._)(
            "path",
            {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M22.0049 14.0024C22.0049 9.58281 18.4221 6 14.0024 6C13.4501 6 13.0024 5.55228 13.0024 5C13.0024 4.44772 13.4501 4 14.0024 4C19.5266 4 24.0049 8.47824 24.0049 14.0024C24.0049 19.5266 19.5266 24.0049 14.0024 24.0049C8.47824 24.0049 4 19.5266 4 14.0024C4 13.4501 4.44772 13.0024 5 13.0024C5.55228 13.0024 6 13.4501 6 14.0024C6 18.4221 9.58281 22.0049 14.0024 22.0049C18.4221 22.0049 22.0049 18.4221 22.0049 14.0024Z",
              fill: "CurrentColor",
            },
            null,
            -1
          ),
          We = [Ne];
        function Be(e, t) {
          return (0, n.wg)(), (0, n.iD)("svg", He, We);
        }
        const Te = {},
          qe = (0, i.Z)(Te, [["render", Be]]);
        var Ue = qe;
        const Je = {
            preserveAspectRation: "none",
            viewBox: "0 0 202 194",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          Pe = (0, n._)(
            "path",
            {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M86.854 1.52203C45.136 7.21403 10.99 38.642 2.45801 79.2C0.0700114 90.551 0.527011 111.504 3.41501 123.105C6.18601 134.238 10.951 145.074 17.054 154.122C27.011 168.885 44.27 183.183 60.054 189.746C71.031 194.311 72.463 194.537 74.913 192.087C76.731 190.269 77 188.796 77 180.649V171.298L67.75 171.399C60.043 171.483 57.833 171.139 54.5 169.338C48.968 166.347 44.511 161.412 42.002 155.5C40.623 152.248 37.746 148.511 33.774 144.811C27.728 139.178 27.693 139.115 30.307 138.459C34.503 137.406 41.473 141.379 45.931 147.365C50.706 153.778 53.712 156.568 57.315 157.933C60.846 159.271 68.384 159.299 73.093 157.991C76.153 157.141 76.874 156.363 77.956 152.746C78.654 150.411 80.075 147.306 81.113 145.846C82.151 144.386 83 142.969 83 142.698C83 142.427 79.963 141.695 76.25 141.071C57.925 137.991 46.159 129.106 40.767 114.275C39.094 109.675 38.652 106.059 38.595 96.5C38.516 83.431 39.169 80.984 45.08 72.226C47.941 67.988 48.108 67.302 47.099 63.937C46.495 61.919 46 58.489 46 56.315C46 50.913 48.76 42 50.433 42C53.631 42 64.936 46.229 70.078 49.348L75.655 52.732L82.078 51.405C96.145 48.499 111.748 48.766 122.589 52.099C125.267 52.923 126.461 52.576 131.589 49.488C136.968 46.248 148.278 42 151.525 42C152.335 42 153.454 44.7 154.439 49.031C155.785 54.95 155.847 57.098 154.832 62.607C154.048 66.861 153.971 69.387 154.611 69.826C156.416 71.061 159.62 76.442 161.563 81.5C163.001 85.244 163.463 88.886 163.404 96C163.181 122.869 149.8 137.839 122.75 141.483C117.721 142.16 117.023 142.944 119.566 145.055C123.759 148.534 124.433 151.892 124.975 171.973C125.493 191.174 125.533 191.463 127.85 192.615C130.901 194.133 135 193.022 145.911 187.72C172.418 174.84 191.549 151.373 198.585 123.105C202.025 109.288 202.018 89.269 198.569 75.672C188.47 35.862 155.605 6.97603 114.129 1.45403C101.598 -0.213971 99.542 -0.208971 86.854 1.52203Z",
              fill: "currentColor",
            },
            null,
            -1
          ),
          Ye = [Pe];
        function ze(e, t) {
          return (0, n.wg)(), (0, n.iD)("svg", Je, Ye);
        }
        const Ge = {},
          $e = (0, i.Z)(Ge, [["render", ze]]);
        var Fe = $e,
          Xe = {
            name: "Icon",
            components: { ...s },
            props: {
              name: {
                type: String,
                required: !0,
                validator(e) {
                  return Object.keys(s).includes(e);
                },
              },
            },
          };
        const Ke = (0, i.Z)(Xe, [["render", j]]);
        var Qe = Ke,
          et = r(7156);
        const tt = ["src"];
        function rt(e, t, r, s, a, o) {
          return (
            (0, n.wg)(),
            (0, n.iD)(
              "div",
              { class: (0, et.C_)(["avatar", r.vClass]) },
              [
                (0, n._)(
                  "img",
                  { src: r.avatarUrl, alt: "avatar" },
                  null,
                  8,
                  tt
                ),
              ],
              2
            )
          );
        }
        var st = {
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
        const at = (0, i.Z)(st, [
          ["render", rt],
          ["__scopeId", "data-v-756c0481"],
        ]);
        var nt = at,
          ot = {
            name: "Navbar",
            components: { Icon: Qe, Avatar: nt },
            props: { avatarUrl: { type: String, required: !0 } },
          };
        const it = (0, i.Z)(ot, [
          ["render", O],
          ["__scopeId", "data-v-c8e916bc"],
        ]);
        var lt = it,
          dt = JSON.parse(
            '[{"id":0,"avatar":"https://vertex-academy.com/tutorials/wp-content/uploads/2019/03/chto-takoe-git-1.jpg","username":"2ytka2","posts":[{"title":"Vue.js","text":"JavaScript framework for building interactive web applications ⚡","date":"19 NOVEMBER","stats":{"stars":33,"forks":4},"issues":[{"id":1,"username":"John","text":"Enable performance measuring in production, at the user\'s request"},{"id":2,"username":"Morgan","text":"It\'s Impossible to Rename an Inherited Slot"},{"id":3,"username":"Alex","text":"transition-group with flex parent causes removed items to fly"},{"id":4,"username":"Alex","text":"transition-group with flex parent causes removed items to fly"},{"id":5,"username":"Alex","text":"transition-group with flex parent causes removed items to fly"},{"id":6,"username":"Alex","text":"transition-group with flex parent causes removed items to fly"},{"id":7,"username":"Alex","text":"transition-group with flex parent causes removed items to fly"}]},{"title":"Good morning2","text":"123123123 text"}]},{"id":1,"avatar":"https://vertex-academy.com/tutorials/wp-content/uploads/2019/03/chto-takoe-git-1.jpg","username":"bob","posts":[{"title":"React.js","text":"Open source JavaScript library used for designing user interfaces","date":"19 NOVEMBER","stats":{"stars":33,"forks":4},"issues":[{"id":0,"username":"Gleb_01","text":"transition-group with flex parent causes removed items to fly"},{"id":0,"username":"Maks22","text":"transition-group with flex parent causes removed items to fly"},{"id":0,"username":"__Alek__","text":"transition-group with flex parent causes removed items to fly "}]},{"title":"Good morning","text":"123123123 text"}]},{"id":2,"avatar":"https://vertex-academy.com/tutorials/wp-content/uploads/2019/03/chto-takoe-git-1.jpg","username":"morph","posts":[{"title":"Vue.js","text":"JavaScript framework for building interactive web applications ⚡","date":"19 NOVEMBER","stats":{"stars":33,"forks":4},"issues":[{"id":0,"username":"John","text":"Enable performance measuring in production, at the user\'s request"},{"id":0,"username":"Morgan","text":"It\'s Impossible to Rename an Inherited Slot"},{"id":0,"username":"Alex","text":"transition-group with flex parent causes removed items to fly"}]},{"title":"Good morning","text":"123123123 text"}]},{"id":3,"avatar":"https://vertex-academy.com/tutorials/wp-content/uploads/2019/03/chto-takoe-git-1.jpg","username":"bib","posts":[{"title":"Vue.js","text":"JavaScript framework for building interactive web applications ⚡","date":"19 NOVEMBER","stats":{"stars":33,"forks":4},"issues":[{"id":0,"username":"John","text":"Enable performance measuring in production, at the user\'s request"},{"id":0,"username":"Morgan","text":"It\'s Impossible to Rename an Inherited Slot"},{"id":0,"username":"Alex","text":"transition-group with flex parent causes removed items to fly"}]},{"title":"Good morning","text":"123123123 text"}]},{"id":4,"avatar":"https://vertex-academy.com/tutorials/wp-content/uploads/2019/03/chto-takoe-git-1.jpg","username":"hock","posts":[{"title":"Vue.js","text":"JavaScript framework for building interactive web applications ⚡","date":"19 NOVEMBER","stats":{"stars":33,"forks":4},"issues":[{"id":0,"username":"John","text":"Enable performance measuring in production, at the user\'s request"},{"id":0,"username":"Morgan","text":"It\'s Impossible to Rename an Inherited Slot"},{"id":0,"username":"Alex","text":"transition-group with flex parent causes removed items to fly"}]},{"title":"Good morning","text":"123123123 text"}]},{"id":5,"avatar":"https://vertex-academy.com/tutorials/wp-content/uploads/2019/03/chto-takoe-git-1.jpg","username":"hank","posts":[{"title":"Vue.js","text":"JavaScript framework for building interactive web applications ⚡","date":"19 NOVEMBER","stats":{"stars":33,"forks":4},"issues":[{"id":0,"username":"John","text":"Enable performance measuring in production, at the user\'s request"},{"id":0,"username":"Morgan","text":"It\'s Impossible to Rename an Inherited Slot"},{"id":0,"username":"Alex","text":"transition-group with flex parent causes removed items to fly"}]},{"title":"Good morning","text":"123123123 text"}]},{"id":6,"avatar":"https://vertex-academy.com/tutorials/wp-content/uploads/2019/03/chto-takoe-git-1.jpg","username":"2ytka2","posts":[{"title":"Vue.js","text":"JavaScript framework for building interactive web applications ⚡","date":"19 NOVEMBER","stats":{"stars":33,"forks":4},"issues":[{"id":0,"username":"John","text":"Enable performance measuring in production, at the user\'s request"},{"id":0,"username":"Morgan","text":"It\'s Impossible to Rename an Inherited Slot"},{"id":0,"username":"Alex","text":"transition-group with flex parent causes removed items to fly"}]},{"title":"Good morning","text":"123123123 text"}]},{"id":7,"avatar":"https://vertex-academy.com/tutorials/wp-content/uploads/2019/03/chto-takoe-git-1.jpg","username":"2ytka2","posts":[{"title":"Vue.js","text":"JavaScript framework for building interactive web applications ⚡","date":"19 NOVEMBER","stats":{"stars":33,"forks":4},"issues":[{"id":0,"username":"John","text":"Enable performance measuring in production, at the user\'s request"},{"id":0,"username":"Morgan","text":"It\'s Impossible to Rename an Inherited Slot"},{"id":0,"username":"Alex","text":"transition-group with flex parent causes removed items to fly"}]},{"title":"Good morning","text":"123123123 text"}]},{"id":8,"avatar":"https://vertex-academy.com/tutorials/wp-content/uploads/2019/03/chto-takoe-git-1.jpg","username":"2ytka2","posts":[{"title":"Vue.js","text":"JavaScript framework for building interactive web applications ⚡","date":"19 NOVEMBER","stats":{"stars":33,"forks":4},"issues":[{"id":0,"username":"John","text":"Enable performance measuring in production, at the user\'s request"},{"id":0,"username":"Morgan","text":"It\'s Impossible to Rename an Inherited Slot"},{"id":0,"username":"Alex","text":"transition-group with flex parent causes removed items to fly"}]},{"title":"Good morning","text":"123123123 text"}]},{"id":9,"avatar":"https://vertex-academy.com/tutorials/wp-content/uploads/2019/03/chto-takoe-git-1.jpg","username":"2ytka2","posts":[{"title":"Vue.js","text":"JavaScript framework for building interactive web applications ⚡","date":"19 NOVEMBER","stats":{"stars":33,"forks":4},"issues":[{"id":0,"username":"John","text":"Enable performance measuring in production, at the user\'s request"},{"id":0,"username":"Morgan","text":"It\'s Impossible to Rename an Inherited Slot"},{"id":0,"username":"Alex","text":"transition-group with flex parent causes removed items to fly"}]},{"title":"Good morning","text":"123123123 text"}]},{"id":10,"avatar":"https://vertex-academy.com/tutorials/wp-content/uploads/2019/03/chto-takoe-git-1.jpg","username":"2ytka2","posts":[{"title":"Vue.js","text":"JavaScript framework for building interactive web applications ⚡","date":"19 NOVEMBER","stats":{"stars":33,"forks":4},"issues":[{"id":0,"username":"John","text":"Enable performance measuring in production, at the user\'s request"},{"id":0,"username":"Morgan","text":"It\'s Impossible to Rename an Inherited Slot"},{"id":0,"username":"Alex","text":"transition-group with flex parent causes removed items to fly"}]},{"title":"Good morning","text":"123123123 text"}]},{"id":11,"avatar":"https://vertex-academy.com/tutorials/wp-content/uploads/2019/03/chto-takoe-git-1.jpg","username":"2ytka2","posts":[{"title":"Vue.js","text":"JavaScript framework for building interactive web applications ⚡","date":"19 NOVEMBER","stats":{"stars":33,"forks":4},"issues":[{"id":0,"username":"John","text":"Enable performance measuring in production, at the user\'s request"},{"id":0,"username":"Morgan","text":"It\'s Impossible to Rename an Inherited Slot"},{"id":0,"username":"Alex","text":"transition-group with flex parent causes removed items to fly"}]},{"title":"Good morning","text":"123123123 text"}]},{"id":12,"avatar":"https://vertex-academy.com/tutorials/wp-content/uploads/2019/03/chto-takoe-git-1.jpg","username":"2ytka2","posts":[{"title":"Vue.js","text":"JavaScript framework for building interactive web applications ⚡","date":"19 NOVEMBER","stats":{"stars":33,"forks":4},"issues":[{"id":0,"username":"John","text":"Enable performance measuring in production, at the user\'s request"},{"id":0,"username":"Morgan","text":"It\'s Impossible to Rename an Inherited Slot"},{"id":0,"username":"Alex","text":"transition-group with flex parent causes removed items to fly"}]},{"title":"Good morning","text":"123123123 text"}]},{"id":13,"avatar":"https://vertex-academy.com/tutorials/wp-content/uploads/2019/03/chto-takoe-git-1.jpg","username":"2ytka2","posts":[{"title":"Vue.js","text":"JavaScript framework for building interactive web applications ⚡","date":"19 NOVEMBER","stats":{"stars":33,"forks":4},"issues":[{"id":0,"username":"John","text":"Enable performance measuring in production, at the user\'s request"},{"id":0,"username":"Morgan","text":"It\'s Impossible to Rename an Inherited Slot"},{"id":0,"username":"Alex","text":"transition-group with flex parent causes removed items to fly"}]},{"title":"Good morning","text":"123123123 text"}]}]'
          );
        const ct = { class: "user__avatar" },
          ut = { class: "user__username" };
        function pt(e, t, r, s, a, o) {
          const i = (0, n.up)("Avatar");
          return (
            (0, n.wg)(),
            (0, n.iD)(
              "div",
              { class: (0, et.C_)(["user", r.vClass]) },
              [
                (0, n._)("div", ct, [
                  (0, n.Wm)(
                    i,
                    { avatarUrl: r.avatarUrl, vClass: r.vClass },
                    null,
                    8,
                    ["avatarUrl", "vClass"]
                  ),
                ]),
                (0, n._)("div", ut, [
                  (0, n._)("p", null, (0, et.zw)(r.username), 1),
                ]),
              ],
              2
            )
          );
        }
        var mt = {
          name: "User",
          components: { Avatar: nt },
          props: {
            username: { type: String, required: !0 },
            avatarUrl: { type: String, required: !0 },
            vClass: { type: String, required: !1 },
          },
        };
        const vt = (0, i.Z)(mt, [
          ["render", pt],
          ["__scopeId", "data-v-42d8e5f4"],
        ]);
        var gt = vt;
        const Ct = { class: "post" },
          ht = { class: "post__user" },
          wt = { class: "post__content" },
          _t = { key: 0, class: "post__issues" },
          ft = { datetime: "", class: "post__date" };
        function xt(e, t, r, s, a, o) {
          const i = (0, n.up)("User"),
            l = (0, n.up)("Issues");
          return (
            (0, n.wg)(),
            (0, n.iD)("div", Ct, [
              (0, n._)("div", ht, [
                (0, n.Wm)(
                  i,
                  {
                    username: r.postData.username,
                    avatarUrl: r.postData.avatarUrl,
                    vClass: "posts",
                  },
                  null,
                  8,
                  ["username", "avatarUrl"]
                ),
              ]),
              (0, n._)("div", wt, [
                (0, n.WI)(e.$slots, "repository", {}, void 0, !0),
              ]),
              r.postData.issues
                ? ((0, n.wg)(),
                  (0, n.iD)("div", _t, [
                    (0, n.Wm)(l, { comments: r.postData.issues }, null, 8, [
                      "comments",
                    ]),
                  ]))
                : (0, n.kq)("", !0),
              (0, n._)("time", ft, (0, et.zw)(r.postData.postDate), 1),
            ])
          );
        }
        const bt = { class: "c-issues" },
          yt = { key: 0, class: "comments" },
          Lt = { class: "comments__list" },
          St = { key: 0, class: "comments__item" };
        function kt(e, t, r, s, a, o) {
          const i = (0, n.up)("Toggler"),
            l = (0, n.up)("Comment");
          return (
            (0, n.wg)(),
            (0, n.iD)("div", bt, [
              (0, n.Wm)(
                i,
                { togglerText: "issues", onToggle: o.toggle },
                null,
                8,
                ["onToggle"]
              ),
              a.shown
                ? ((0, n.wg)(),
                  (0, n.iD)("div", yt, [
                    (0, n._)("ul", Lt, [
                      ((0, n.wg)(!0),
                      (0, n.iD)(
                        n.HY,
                        null,
                        (0, n.Ko)(
                          r.comments,
                          (e) => (
                            (0, n.wg)(),
                            (0, n.iD)(
                              n.HY,
                              { key: e.id },
                              [
                                e.id <= this.shownCount
                                  ? ((0, n.wg)(),
                                    (0, n.iD)("li", St, [
                                      (0, n.Wm)(l, { comment: e }, null, 8, [
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
                    r.comments.length > 3
                      ? ((0, n.wg)(),
                        (0, n.iD)(
                          "button",
                          {
                            key: 0,
                            class: "comments__show",
                            onClick:
                              t[0] ||
                              (t[0] = (...e) => o.showAll && o.showAll(...e)),
                          },
                          (0, et.zw)(
                            3 == this.shownCount
                              ? "Show all " + r.comments.length + " issues"
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
        const It = { class: "btn__text" },
          Dt = { class: "btn__icon" };
        function Mt(e, t, r, s, a, o) {
          const i = (0, n.up)("Icon");
          return (
            (0, n.wg)(),
            (0, n.iD)(
              "button",
              {
                class: (0, et.C_)([
                  "btn",
                  "btn__toggler",
                  { "--active": a.isOpened },
                ]),
                onClick:
                  t[0] ||
                  (t[0] = (...e) => o.changeState && o.changeState(...e)),
              },
              [
                (0, n._)(
                  "div",
                  It,
                  (0, et.zw)(
                    a.isOpened
                      ? "Hide " + r.togglerText
                      : "Show " + r.togglerText
                  ),
                  1
                ),
                (0, n._)("div", Dt, [(0, n.Wm)(i, { name: "Arrow" })]),
              ],
              2
            )
          );
        }
        var Vt = {
          name: "Toggler",
          emits: ["toggle"],
          data() {
            return { isOpened: !1 };
          },
          components: { Icon: Qe },
          props: { togglerText: { type: String, required: !0 } },
          methods: {
            changeState() {
              (this.isOpened = !this.isOpened),
                this.$emit("toggle", this.isOpened);
            },
          },
        };
        const Zt = (0, i.Z)(Vt, [
          ["render", Mt],
          ["__scopeId", "data-v-20c65754"],
        ]);
        var Rt = Zt;
        const Ot = { class: "comment" },
          jt = { class: "comment__username" },
          At = { class: "comment__text" };
        function Et(e, t, r, s, a, o) {
          return (
            (0, n.wg)(),
            (0, n.iD)("div", Ot, [
              (0, n._)("div", jt, (0, et.zw)(r.comment.username), 1),
              (0, n._)("div", At, (0, et.zw)(r.comment.text), 1),
            ])
          );
        }
        var Ht = {
          name: "Comment",
          props: { comment: { type: Object, required: !0 } },
        };
        const Nt = (0, i.Z)(Ht, [
          ["render", Et],
          ["__scopeId", "data-v-736a4b93"],
        ]);
        var Wt = Nt,
          Bt = {
            name: "Issues",
            data() {
              return { shown: !1, shownCount: 3 };
            },
            components: { Toggler: Rt, Comment: Wt },
            props: { comments: Array },
            methods: {
              toggle(e) {
                this.shown = e;
              },
              showAll() {
                this.shownCount =
                  3 == this.shownCount ? this.comments.length : 3;
              },
            },
          };
        const Tt = (0, i.Z)(Bt, [
          ["render", kt],
          ["__scopeId", "data-v-2d3cf90b"],
        ]);
        var qt = Tt,
          Ut = {
            name: "PostItem",
            components: { User: gt, Issues: qt },
            props: { postData: { type: Object, required: !0 } },
          };
        const Jt = (0, i.Z)(Ut, [
          ["render", xt],
          ["__scopeId", "data-v-ac64e6bc"],
        ]);
        var Pt = Jt;
        const Yt = { class: "repository" },
          zt = { class: "repository__title" },
          Gt = { class: "repository__desc" },
          $t = { class: "repository__controls" };
        function Ft(e, t, r, s, a, o) {
          const i = (0, n.up)("Controls");
          return (
            (0, n.wg)(),
            (0, n.iD)("div", Yt, [
              (0, n._)("h1", zt, (0, et.zw)(r.repositoryData.title), 1),
              (0, n._)("div", Gt, [
                (0, n._)("p", null, (0, et.zw)(r.repositoryData.text), 1),
              ]),
              (0, n._)("div", $t, [
                (0, n.Wm)(i, { repoStats: r.repositoryData.stats }, null, 8, [
                  "repoStats",
                ]),
              ]),
            ])
          );
        }
        const Xt = (e) => (
            (0, n.dD)("data-v-57b138c8"), (e = e()), (0, n.Cn)(), e
          ),
          Kt = { class: "controls" },
          Qt = { class: "btn" },
          er = { class: "btn__icon star" },
          tr = Xt(() => (0, n._)("div", { class: "btn__title" }, "Star", -1)),
          rr = { class: "btn__count" },
          sr = { class: "btn" },
          ar = { class: "btn__icon fork" },
          nr = Xt(() =>
            (0, n._)("div", { class: "btn__title --bold" }, "Fork", -1)
          ),
          or = { class: "btn__count --bold" };
        function ir(e, t, r, s, a, o) {
          const i = (0, n.up)("Icon");
          return (
            (0, n.wg)(),
            (0, n.iD)("div", Kt, [
              (0, n._)("button", Qt, [
                (0, n._)("div", er, [(0, n.Wm)(i, { name: "Star" })]),
                tr,
              ]),
              (0, n._)("div", rr, (0, et.zw)(r.repoStats.stars), 1),
              (0, n._)("button", sr, [
                (0, n._)("div", ar, [(0, n.Wm)(i, { name: "Fork" })]),
                nr,
              ]),
              (0, n._)("div", or, (0, et.zw)(r.repoStats.forks), 1),
            ])
          );
        }
        var lr = {
          name: "Controls",
          components: { Icon: Qe },
          props: { repoStats: { type: Object, required: !0 } },
        };
        const dr = (0, i.Z)(lr, [
          ["render", ir],
          ["__scopeId", "data-v-57b138c8"],
        ]);
        var cr = dr,
          ur = {
            name: "Repository",
            components: { Controls: cr },
            props: { repositoryData: { type: Object, required: !0 } },
          };
        const pr = (0, i.Z)(ur, [
          ["render", Ft],
          ["__scopeId", "data-v-52e156cb"],
        ]);
        var mr = pr,
          vr = r(4528),
          gr = r(1569),
          Cr = r(7139);
        const hr = (e) => (e < 10 ? `0${e}` : e),
          wr = (e) => {
            const t = new Date(e),
              r = t.toLocaleDateString("en-Us", {
                month: "long",
                day: "2-digit",
              });
            return r.split(" ").reverse().join(" ");
          };
        var _r = {
          name: "feeds",
          data() {
            return {
              dbUsers: dt,
              loginnedUser: {
                id: 1293992,
                username: "yLuTo4KA",
                avatarUrl:
                  "https://sun9-14.userapi.com/impg/_tbr32K5b8enmy1zeQJtnApEq-STitZ_DZ2VTw/Eq_LzA9Ryds.jpg?size=1000x1000&quality=95&sign=841e637ee9a6209caccadfea9f1daef1&type=album",
              },
              responseData: [],
            };
          },
          components: {
            Topline: b,
            Header: lt,
            User: gt,
            PostItem: Pt,
            Repository: mr,
            Swiper: vr.tq,
            SwiperSlide: vr.o5,
          },
          setup() {
            return { modules: [gr.Rv] };
          },
          computed: {
            ...(0, Cr.rn)({ trandPost: (e) => e.repositories.trandPost }),
          },
          methods: {
            ...(0, Cr.nv)("repositories", ["getTrandRepo"]),
            getFeedData(e) {
              return {
                postData: {
                  username: e.owner.login,
                  avatarUrl: e.owner.avatar_url,
                  postDate: wr(e.created_at),
                  issues: e.issue_comment_url,
                },
                repositoryData: {
                  title: e.name,
                  text: e.description,
                  stats: { stars: e.stargazers_count, forks: e.forks },
                },
              };
            },
            routeTo(e) {
              this.$router.push({
                name: "stories",
                params: { openedSlide: e },
              });
            },
          },
          created() {
            this.getTrandRepo();
          },
        };
        const fr = (0, i.Z)(_r, [
          ["render", v],
          ["__scopeId", "data-v-a703b27e"],
        ]);
        var xr = fr;
        const br = { class: "wrapper" },
          yr = { class: "header" },
          Lr = { class: "x-container" },
          Sr = { class: "header__content" },
          kr = { class: "slider__wrapper" };
        function Ir(e, t, r, s, a, o) {
          const i = (0, n.up)("Icon"),
            l = (0, n.up)("StoriesSlider");
          return (
            (0, n.wg)(),
            (0, n.iD)("div", br, [
              (0, n._)("header", yr, [
                (0, n._)("div", Lr, [
                  (0, n._)("div", Sr, [
                    (0, n._)(
                      "button",
                      {
                        class: "header__logo",
                        onClick: t[0] || (t[0] = (t) => e.$router.push("/")),
                      },
                      [(0, n.Wm)(i, { name: "logo" })]
                    ),
                    (0, n._)(
                      "button",
                      {
                        class: "header__close",
                        onClick: t[1] || (t[1] = (t) => e.$router.push("/")),
                      },
                      [(0, n.Wm)(i, { name: "close" })]
                    ),
                  ]),
                ]),
              ]),
              (0, n._)("div", kr, [(0, n.Wm)(l)]),
            ])
          );
        }
        const Dr = { class: "slider__wrapper" },
          Mr = { class: "slider__container" },
          Vr = { class: "slider__stories-list", ref: "storiesList" };
        function Zr(e, t, r, s, a, o) {
          const i = (0, n.up)("SlideItem");
          return (
            (0, n.wg)(),
            (0, n.iD)("div", Dr, [
              (0, n._)("div", Mr, [
                (0, n._)(
                  "ul",
                  Vr,
                  [
                    ((0, n.wg)(!0),
                    (0, n.iD)(
                      n.HY,
                      null,
                      (0, n.Ko)(
                        e.trandPost.data,
                        (t, r) => (
                          (0, n.wg)(),
                          (0, n.iD)(
                            "li",
                            {
                              class: "slider__stories-item",
                              ref_for: !0,
                              ref: "storiesItem",
                              key: t.id,
                            },
                            [
                              (0, n.Wm)(
                                i,
                                {
                                  data: o.getStoryData(t),
                                  active: a.slideNdx == r && a.readyState,
                                  btnsShown: o.activeBtns,
                                  progressBar: a.slideNdx == r && e.progressBar,
                                  loading: a.slideNdx == r && a.loading,
                                  onOnPrevSlide: (e) => o.handleSlide(r - 1),
                                  onOnNextSlide: (e) => o.handleSlide(r + 1),
                                },
                                null,
                                8,
                                [
                                  "data",
                                  "active",
                                  "btnsShown",
                                  "progressBar",
                                  "loading",
                                  "onOnPrevSlide",
                                  "onOnNextSlide",
                                ]
                              ),
                            ]
                          )
                        )
                      ),
                      128
                    )),
                  ],
                  512
                ),
              ]),
            ])
          );
        }
        const Rr = { class: "slide" },
          Or = { class: "slide__header" },
          jr = { class: "slide__progress-bar" },
          Ar = { class: "slide__user" },
          Er = { class: "slide__content" },
          Hr = { key: 0, class: "slide__content-loader" },
          Nr = { key: 1, class: "slide__content-view" },
          Wr = ["innerHTML"],
          Br = { class: "slide__footer" },
          Tr = { class: "arrow__icon" },
          qr = { class: "arrow__icon" };
        function Ur(e, t, r, s, a, o) {
          const i = (0, n.up)("ProgressBar"),
            l = (0, n.up)("User"),
            d = (0, n.up)("Spinner"),
            c = (0, n.up)("Preloader"),
            u = (0, n.up)("Button"),
            p = (0, n.up)("Icon");
          return (
            (0, n.wg)(),
            (0, n.iD)(
              "div",
              { class: (0, et.C_)(["slide__wrapper", { active: r.active }]) },
              [
                (0, n._)("div", Rr, [
                  (0, n._)("div", Or, [
                    (0, n._)("div", jr, [
                      (0, n.Wm)(
                        i,
                        {
                          active: r.active,
                          onOnFinish:
                            t[0] || (t[0] = (t) => e.$emit("onNextSlide")),
                        },
                        null,
                        8,
                        ["active"]
                      ),
                    ]),
                    (0, n._)("div", Ar, [
                      (0, n.Wm)(
                        l,
                        {
                          username: r.data.username,
                          avatarUrl: r.data.userAvatar,
                          vClass: "slide-user",
                        },
                        null,
                        8,
                        ["username", "avatarUrl"]
                      ),
                    ]),
                  ]),
                  (0, n._)("div", Er, [
                    r.loading
                      ? ((0, n.wg)(), (0, n.iD)("div", Hr, [(0, n.Wm)(d)]))
                      : ((0, n.wg)(),
                        (0, n.iD)("div", Nr, [
                          r.data?.content?.length
                            ? ((0, n.wg)(),
                              (0, n.iD)(
                                "div",
                                {
                                  key: 0,
                                  class: "slide__content-text",
                                  innerHTML: r.data.content,
                                },
                                null,
                                8,
                                Wr
                              ))
                            : ((0, n.wg)(),
                              (0, n.j4)(c, { key: 1, paragraphs: 2 })),
                        ])),
                  ]),
                  (0, n._)("div", Br, [
                    (0, n.Wm)(u, { text: "Follow", bg: "green" }),
                  ]),
                ]),
                r.active
                  ? ((0, n.wg)(),
                    (0, n.iD)(
                      n.HY,
                      { key: 0 },
                      [
                        r.btnsShown.includes("prev")
                          ? ((0, n.wg)(),
                            (0, n.iD)(
                              "button",
                              {
                                key: 0,
                                class: "arrow arrow__prev",
                                onClick:
                                  t[1] ||
                                  (t[1] = (t) => e.$emit("onPrevSlide")),
                              },
                              [
                                (0, n._)("div", Tr, [
                                  (0, n.Wm)(p, { name: "ArrowNext" }),
                                ]),
                              ]
                            ))
                          : (0, n.kq)("", !0),
                        r.btnsShown.includes("next")
                          ? ((0, n.wg)(),
                            (0, n.iD)(
                              "button",
                              {
                                key: 1,
                                class: "arrow arrow__next",
                                onClick:
                                  t[2] ||
                                  (t[2] = (t) => e.$emit("onNextSlide")),
                              },
                              [
                                (0, n._)("div", qr, [
                                  (0, n.Wm)(p, { name: "ArrowNext" }),
                                ]),
                              ]
                            ))
                          : (0, n.kq)("", !0),
                      ],
                      64
                    ))
                  : (0, n.kq)("", !0),
              ],
              2
            )
          );
        }
        const Jr = { ref: "indicator", class: "progress-bar__indicator" };
        function Pr(e, t, r, s, a, o) {
          return (
            (0, n.wg)(),
            (0, n.iD)(
              "div",
              { class: (0, et.C_)(["progress-bar", { active: r.active }]) },
              [(0, n._)("div", Jr, null, 512)],
              2
            )
          );
        }
        var Yr = {
          props: { active: { type: Boolean } },
          emits: ["onFinish"],
          methods: {
            emitOnFinish() {
              this.$emit("onFinish");
            },
          },
          mounted() {
            this.$refs.indicator.addEventListener(
              "transitionend",
              this.emitOnFinish
            );
          },
          beforeUnmount() {
            this.$refs.indicator.removeEventListener(
              "transitionend",
              this.emitOnFinish
            );
          },
        };
        const zr = (0, i.Z)(Yr, [
          ["render", Pr],
          ["__scopeId", "data-v-f9c7b33e"],
        ]);
        var Gr = zr;
        const $r = { class: "btn__text" };
        function Fr(e, t, r, s, a, o) {
          return (
            (0, n.wg)(),
            (0, n.iD)(
              "button",
              { class: (0, et.C_)(["btn", r.bg, r.size]) },
              [
                (0, n._)("div", $r, [
                  (0, n._)("p", null, (0, et.zw)(r.text), 1),
                ]),
              ],
              2
            )
          );
        }
        var Xr = {
          name: "Button",
          props: {
            bg: { type: String, required: !1, default: "green" },
            size: { type: String, required: !1 },
            text: { type: String, required: !0 },
          },
        };
        const Kr = (0, i.Z)(Xr, [
          ["render", Fr],
          ["__scopeId", "data-v-cda47d56"],
        ]);
        var Qr = Kr;
        const es = { class: "spinner" };
        function ts(e, t, r, s, a, o) {
          const i = (0, n.up)("Icon");
          return (
            (0, n.wg)(),
            (0, n.iD)("div", es, [(0, n.Wm)(i, { name: "loading" })])
          );
        }
        var rs = { components: { Icon: Qe } };
        const ss = (0, i.Z)(rs, [
          ["render", ts],
          ["__scopeId", "data-v-f28b7894"],
        ]);
        var as = ss;
        const ns = (e) => (
            (0, n.dD)("data-v-52ef7994"), (e = e()), (0, n.Cn)(), e
          ),
          os = { class: "preloader" },
          is = ns(() =>
            (0, n._)("div", { class: "preloader__maincontent" }, null, -1)
          ),
          ls = ns(() => (0, n._)("div", { class: "subcontent" }, null, -1)),
          ds = [ls];
        function cs(e, t, r, s, a, o) {
          return (
            (0, n.wg)(),
            (0, n.iD)("div", os, [
              is,
              ((0, n.wg)(!0),
              (0, n.iD)(
                n.HY,
                null,
                (0, n.Ko)(
                  r.paragraphs,
                  (e) => (
                    (0, n.wg)(),
                    (0, n.iD)(
                      "div",
                      { class: "preloader__subcontent", key: e },
                      ds
                    )
                  )
                ),
                128
              )),
            ])
          );
        }
        var us = {
          props: { paragraphs: { type: Number, required: !1, default: 1 } },
        };
        const ps = (0, i.Z)(us, [
          ["render", cs],
          ["__scopeId", "data-v-52ef7994"],
        ]);
        var ms = ps,
          vs = {
            name: "SlideItem",
            components: {
              ProgressBar: Gr,
              User: gt,
              Icon: Qe,
              Button: Qr,
              Spinner: as,
              Preloader: ms,
            },
            emits: ["onPrevSlider", "onNextSlide"],
            props: {
              data: { type: Object, required: !0 },
              active: { type: Boolean },
              loading: { type: Boolean },
              btnsShown: {
                type: Array,
                default: () => ["next", "prev"],
                validator(e) {
                  return e.every((e) => "next" == e || "prev" == e);
                },
              },
            },
          };
        const gs = (0, i.Z)(vs, [
          ["render", Ur],
          ["__scopeId", "data-v-010f26be"],
        ]);
        var Cs = gs,
          hs = {
            data() {
              return {
                slideNdx: 0,
                loading: !1,
                btnsShown: !0,
                readyState: !1,
              };
            },
            components: { SlideItem: Cs },
            computed: {
              ...(0, Cr.rn)({ trandPost: (e) => e.repositories.trandPost }),
              activeBtns() {
                return 0 == this.btnsShown
                  ? []
                  : 0 == this.slideNdx
                  ? ["next"]
                  : this.slideNdx == this.trandPost.data.length - 1
                  ? ["prev"]
                  : ["next", "prev"];
              },
            },
            methods: {
              ...(0, Cr.nv)({
                getTrandRepo: "repositories/getTrandRepo",
                getReadme: "repositories/getReadme",
              }),
              getStoryData(e) {
                return {
                  id: e.id,
                  userAvatar: e.owner?.avatar_url,
                  username: e.owner?.login,
                  content: e.readme,
                };
              },
              async handleSlide(e) {
                e < this.trandPost.data.length &&
                  (this.openSlide(e), await this.loadReadme());
              },
              openSlide(e) {
                const { storiesList: t, storiesItem: r } = this.$refs,
                  s = parseInt(getComputedStyle(r[0]).width, null);
                (this.slideNdx = e),
                  (t.style.transform = `translateX(-${s * e}px)`);
              },
              async getActiveReadme() {
                const {
                  id: e,
                  owner: t,
                  name: r,
                } = this.trandPost.data[this.slideNdx];
                await this.getReadme({ id: e, owner: t.login, repo: r });
              },
              async loadReadme() {
                (this.loading = !0), (this.btnsShown = !1);
                try {
                  await this.getActiveReadme();
                } catch (e) {
                  console.log(e);
                } finally {
                  (this.loading = !1), (this.btnsShown = !0);
                }
              },
            },
            async created() {
              await this.getTrandRepo(), await this.loadReadme();
            },
            async mounted() {
              setTimeout(() => {
                this.readyState = !0;
              }, 10),
                this.$route.params.openedSlide &&
                  (this.handleSlide(this.$route.params.openedSlide),
                  this.$router.replace("/stories"));
            },
          };
        const ws = (0, i.Z)(hs, [
          ["render", Zr],
          ["__scopeId", "data-v-1b3d4daf"],
        ]);
        var _s = ws,
          fs = { components: { Icon: Qe, StoriesSlider: _s } };
        const xs = (0, i.Z)(fs, [
          ["render", Ir],
          ["__scopeId", "data-v-850db3cc"],
        ]);
        var bs = xs;
        const ys = (e) => (
            (0, n.dD)("data-v-2bbc75c5"), (e = e()), (0, n.Cn)(), e
          ),
          Ls = { class: "not-found" },
          Ss = { class: "icon" },
          ks = ys(() =>
            (0, n._)("h1", { class: "title" }, "404 Not Found", -1)
          );
        function Is(e, t, r, s, a, o) {
          const i = (0, n.up)("Icon");
          return (
            (0, n.wg)(),
            (0, n.iD)("div", Ls, [
              (0, n._)("div", Ss, [(0, n.Wm)(i, { name: "GitCat" })]),
              ks,
              (0, n._)(
                "button",
                {
                  class: "btn-back",
                  onClick: t[0] || (t[0] = (t) => e.$router.go(-1)),
                },
                "go back"
              ),
            ])
          );
        }
        var Ds = { components: { Icon: Qe } };
        const Ms = (0, i.Z)(Ds, [
          ["render", Is],
          ["__scopeId", "data-v-2bbc75c5"],
        ]);
        var Vs = Ms;
        const Zs = [
            { path: "/", name: "feedsPage", component: xr },
            { path: "/stories/:openedSlide?", name: "stories", component: bs },
            { path: "/:pathMatch(.*)*", name: "404", component: Vs },
          ],
          Rs = (0, u.p7)({
            history: (0, u.PO)("/gitogramLS/dist/"),
            routes: Zs,
          });
        var Os = Rs,
          js = (r(8858), r(1318), r(3228), r(1076));
        const As = "https://api.github.com",
          Es = ({ url: e, method: t = "get", data: r = {}, headers: s = {} }) =>
            (0, js.Z)({ url: e, method: t, data: r, baseURL: As, headers: s }),
          Hs = async (e = "javascript") => {
            const t = new URLSearchParams(),
              r = 6048e5,
              s = new Date(Date.now() - r),
              a = [s.getFullYear(), hr(s.getMonth() + 1), hr(s.getDate())].join(
                "-"
              );
            return (
              t.append("order", "desc"),
              t.append("sort", "stars"),
              t.append("q", `language:${e} created:>${a}`),
              t.append("per_page", "10"),
              Es({ url: `/search/repositories?${t}` })
            );
          },
          Ns = async ({ owner: e, repo: t }) =>
            Es({
              url: `/repos/${e}/${t}/readme`,
              headers: { accept: "application/vnd.github.v3.html+json" },
            });
        var Ws = {
            namespaced: !0,
            state: { trandPost: { data: {}, loading: !1, error: !1 } },
            getters: {
              getRepoById: (e) => (t) =>
                e.trandPost.data.find((e) => e.id == t),
            },
            mutations: {
              setData(e, t) {
                e.trandPost.data = t;
              },
              setReadme(e, t) {
                e.trandPost.data = e.trandPost.data.map(
                  (e) => (t.id == e.id && (e.readme = t.content), e)
                );
              },
              dataLoading(e, t) {
                e.trandPost.loading = t;
              },
            },
            actions: {
              async getTrandRepo({ commit: e }) {
                e("dataLoading", !0);
                try {
                  const { data: t } = await Hs(),
                    r = t.items;
                  e("setData", r);
                } catch (t) {
                  console.log(t);
                } finally {
                  e("dataLoading", !1);
                }
              },
              async getReadme(
                { commit: e, getters: t },
                { id: r, owner: s, repo: a }
              ) {
                const n = t.getRepoById(r);
                if (void 0 === n.readme)
                  try {
                    const { data: t } = await Ns({ owner: s, repo: a });
                    e("setReadme", { id: r, content: t });
                  } catch (o) {
                    e("setReadme", { id: r, content: "404 not found" });
                  }
              },
            },
          },
          Bs = (0, Cr.MT)({ modules: { repositories: Ws } });
        (0, a.ri)(c).use(Bs).use(Os).mount("#app");
      },
    },
    t = {};
  function r(s) {
    var a = t[s];
    if (void 0 !== a) return a.exports;
    var n = (t[s] = { exports: {} });
    return e[s].call(n.exports, n, n.exports, r), n.exports;
  }
  (r.m = e),
    (function () {
      var e = [];
      r.O = function (t, s, a, n) {
        if (!s) {
          var o = 1 / 0;
          for (c = 0; c < e.length; c++) {
            (s = e[c][0]), (a = e[c][1]), (n = e[c][2]);
            for (var i = !0, l = 0; l < s.length; l++)
              (!1 & n || o >= n) &&
              Object.keys(r.O).every(function (e) {
                return r.O[e](s[l]);
              })
                ? s.splice(l--, 1)
                : ((i = !1), n < o && (o = n));
            if (i) {
              e.splice(c--, 1);
              var d = a();
              void 0 !== d && (t = d);
            }
          }
          return t;
        }
        n = n || 0;
        for (var c = e.length; c > 0 && e[c - 1][2] > n; c--) e[c] = e[c - 1];
        e[c] = [s, a, n];
      };
    })(),
    (function () {
      r.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e["default"];
              }
            : function () {
                return e;
              };
        return r.d(t, { a: t }), t;
      };
    })(),
    (function () {
      r.d = function (e, t) {
        for (var s in t)
          r.o(t, s) &&
            !r.o(e, s) &&
            Object.defineProperty(e, s, { enumerable: !0, get: t[s] });
      };
    })(),
    (function () {
      r.g = (function () {
        if ("object" === typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (e) {
          if ("object" === typeof window) return window;
        }
      })();
    })(),
    (function () {
      r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      };
    })(),
    (function () {
      r.r = function (e) {
        "undefined" !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      };
    })(),
    (function () {
      var e = { 143: 0 };
      r.O.j = function (t) {
        return 0 === e[t];
      };
      var t = function (t, s) {
          var a,
            n,
            o = s[0],
            i = s[1],
            l = s[2],
            d = 0;
          if (
            o.some(function (t) {
              return 0 !== e[t];
            })
          ) {
            for (a in i) r.o(i, a) && (r.m[a] = i[a]);
            if (l) var c = l(r);
          }
          for (t && t(s); d < o.length; d++)
            (n = o[d]), r.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
          return r.O(c);
        },
        s = (self["webpackChunkgitogram"] = self["webpackChunkgitogram"] || []);
      s.forEach(t.bind(null, 0)), (s.push = t.bind(null, s.push.bind(s)));
    })();
  var s = r.O(void 0, [998], function () {
    return r(1735);
  });
  s = r.O(s);
})();
//# sourceMappingURL=app.c89b88c9.js.map
