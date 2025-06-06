(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [177],
  {
    366: (e) => {
      e.exports = {
        style: { fontFamily: "'Inter', 'Inter Fallback'", fontStyle: "normal" },
        className: "__className_3c4126",
      };
    },
    886: (e, t, r) => {
      "use strict";
      r.d(t, { Navigation: () => M });
      var n = r(8081),
        s = r(2149),
        i = r(7950),
        a = r.n(i),
        l = r(4571),
        o = r(6808),
        c = r(341),
        d = r(6181),
        h = r(1446),
        u = r(1037),
        m = r(4271),
        f = r(868);
      class p extends s.Component {
        getSnapshotBeforeUpdate(e) {
          let t = this.props.childRef.current;
          if (t && e.isPresent && !this.props.isPresent) {
            let e = t.offsetParent,
              r = ((0, m.s)(e) && e.offsetWidth) || 0,
              n = this.props.sizeRef.current;
            (n.height = t.offsetHeight || 0),
              (n.width = t.offsetWidth || 0),
              (n.top = t.offsetTop),
              (n.left = t.offsetLeft),
              (n.right = r - n.width - n.left);
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }
      function x(e) {
        let { children: t, isPresent: r, anchorX: i } = e,
          a = (0, s.useId)(),
          l = (0, s.useRef)(null),
          o = (0, s.useRef)({ width: 0, height: 0, top: 0, left: 0, right: 0 }),
          { nonce: c } = (0, s.useContext)(f.Q);
        return (
          (0, s.useInsertionEffect)(() => {
            let { width: e, height: t, top: n, left: s, right: d } = o.current;
            if (r || !l.current || !e || !t) return;
            l.current.dataset.motionPopId = a;
            let h = document.createElement("style");
            return (
              c && (h.nonce = c),
              document.head.appendChild(h),
              h.sheet &&
                h.sheet.insertRule(
                  '\n          [data-motion-pop-id="'
                    .concat(
                      a,
                      '"] {\n            position: absolute !important;\n            width: '
                    )
                    .concat(e, "px !important;\n            height: ")
                    .concat(t, "px !important;\n            ")
                    .concat(
                      "left" === i ? "left: ".concat(s) : "right: ".concat(d),
                      "px !important;\n            top: "
                    )
                    .concat(n, "px !important;\n          }\n        ")
                ),
              () => {
                document.head.contains(h) && document.head.removeChild(h);
              }
            );
          }, [r]),
          (0, n.jsx)(p, {
            isPresent: r,
            childRef: l,
            sizeRef: o,
            children: s.cloneElement(t, { ref: l }),
          })
        );
      }
      let v = (e) => {
        let {
            children: t,
            initial: r,
            isPresent: i,
            onExitComplete: a,
            custom: l,
            presenceAffectsLayout: o,
            mode: c,
            anchorX: h,
          } = e,
          m = (0, d.M)(g),
          f = (0, s.useId)(),
          p = !0,
          v = (0, s.useMemo)(
            () => (
              (p = !1),
              {
                id: f,
                initial: r,
                isPresent: i,
                custom: l,
                onExitComplete: (e) => {
                  for (let t of (m.set(e, !0), m.values())) if (!t) return;
                  a && a();
                },
                register: (e) => (m.set(e, !1), () => m.delete(e)),
              }
            ),
            [i, m, a]
          );
        return (
          o && p && (v = { ...v }),
          (0, s.useMemo)(() => {
            m.forEach((e, t) => m.set(t, !1));
          }, [i]),
          s.useEffect(() => {
            i || m.size || !a || a();
          }, [i]),
          "popLayout" === c &&
            (t = (0, n.jsx)(x, { isPresent: i, anchorX: h, children: t })),
          (0, n.jsx)(u.t.Provider, { value: v, children: t })
        );
      };
      function g() {
        return new Map();
      }
      var b = r(3906);
      let y = (e) => e.key || "";
      function j(e) {
        let t = [];
        return (
          s.Children.forEach(e, (e) => {
            (0, s.isValidElement)(e) && t.push(e);
          }),
          t
        );
      }
      let k = (e) => {
        let {
            children: t,
            custom: r,
            initial: i = !0,
            onExitComplete: a,
            presenceAffectsLayout: l = !0,
            mode: o = "sync",
            propagate: u = !1,
            anchorX: m = "left",
          } = e,
          [f, p] = (0, b.xQ)(u),
          x = (0, s.useMemo)(() => j(t), [t]),
          g = u && !f ? [] : x.map(y),
          k = (0, s.useRef)(!0),
          w = (0, s.useRef)(x),
          N = (0, d.M)(() => new Map()),
          [P, C] = (0, s.useState)(x),
          [E, _] = (0, s.useState)(x);
        (0, h.E)(() => {
          (k.current = !1), (w.current = x);
          for (let e = 0; e < E.length; e++) {
            let t = y(E[e]);
            g.includes(t) ? N.delete(t) : !0 !== N.get(t) && N.set(t, !1);
          }
        }, [E, g.length, g.join("-")]);
        let A = [];
        if (x !== P) {
          let e = [...x];
          for (let t = 0; t < E.length; t++) {
            let r = E[t],
              n = y(r);
            g.includes(n) || (e.splice(t, 0, r), A.push(r));
          }
          return "wait" === o && A.length && (e = A), _(j(e)), C(x), null;
        }
        let { forceRender: z } = (0, s.useContext)(c.L);
        return (0, n.jsx)(n.Fragment, {
          children: E.map((e) => {
            let t = y(e),
              s = (!u || !!f) && (x === E || g.includes(t));
            return (0, n.jsx)(
              v,
              {
                isPresent: s,
                initial: (!k.current || !!i) && void 0,
                custom: r,
                presenceAffectsLayout: l,
                mode: o,
                onExitComplete: s
                  ? void 0
                  : () => {
                      if (!N.has(t)) return;
                      N.set(t, !0);
                      let e = !0;
                      N.forEach((t) => {
                        t || (e = !1);
                      }),
                        e &&
                          (null == z || z(),
                          _(w.current),
                          u && (null == p || p()),
                          a && a());
                    },
                anchorX: m,
                children: e,
              },
              t
            );
          }),
        });
      };
      var w = r(5160),
        N = r(8024),
        P = r(8305),
        C = r(1018);
      let E = (0, C.A)("X", [
          ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
          ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
        ]),
        _ = (0, C.A)("Menu", [
          ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
          ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
          ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
        ]);
      var A = r(7687);
      let z = [
        { href: "/", label: "Home" },
        { href: "/about.html", label: "About" },
        { href: "/skills.html", label: "Skills" },
        { href: "/experience.html", label: "Experience" },
        { href: "/projects.html", label: "Projects" },
        { href: "/education.html", label: "Education" },
        { href: "/contact.html", label: "Contact" },
      ];
      function M() {
        let [e, t] = (0, s.useState)(!1),
          r = (0, l.usePathname)();
        return (0, n.jsx)(o.P.header, {
          initial: { y: -100, opacity: 0 },
          animate: { y: 0, opacity: 1 },
          transition: { duration: 0.6, ease: "easeOut" },
          className:
            "fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50",
          children: (0, n.jsxs)("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
              (0, n.jsxs)("div", {
                className: "flex justify-between items-center h-16",
                children: [
                  (0, n.jsx)(o.P.div, {
                    whileHover: { scale: 1.05 },
                    whileTap: { scale: 0.95 },
                    children: (0, n.jsx)(a(), {
                      href: "/",
                      className:
                        "text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent",
                      children: "Dhruv Kumar",
                    }),
                  }),
                  (0, n.jsx)("nav", {
                    className: "hidden md:flex items-center space-x-1",
                    children: z.map((e) =>
                      (0, n.jsx)(
                        o.P.div,
                        {
                          whileHover: { scale: 1.05 },
                          whileTap: { scale: 0.95 },
                          children: (0, n.jsx)(a(), {
                            href: e.href,
                            className: (0, A.cn)(
                              "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                              r === e.href
                                ? "bg-emerald-100 text-emerald-700"
                                : "text-gray-600 hover:text-emerald-600 hover:bg-emerald-50"
                            ),
                            children: e.label,
                          }),
                        },
                        e.href
                      )
                    ),
                  }),
                  (0, n.jsxs)("div", {
                    className: "hidden md:flex items-center space-x-2",
                    children: [
                      (0, n.jsx)(o.P.div, {
                        whileHover: { scale: 1.1, rotate: 5 },
                        whileTap: { scale: 0.9 },
                        children: (0, n.jsx)(w.$, {
                          variant: "ghost",
                          size: "sm",
                          asChild: !0,
                          children: (0, n.jsx)("a", {
                            href: "https://www.linkedin.com/in/dhruv-kumar-118bb8200/",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: (0, n.jsx)(N.A, { className: "w-4 h-4" }),
                          }),
                        }),
                      }),
                      (0, n.jsx)(o.P.div, {
                        whileHover: { scale: 1.1, rotate: -5 },
                        whileTap: { scale: 0.9 },
                        children: (0, n.jsx)(w.$, {
                          variant: "ghost",
                          size: "sm",
                          asChild: !0,
                          children: (0, n.jsx)("a", {
                            href: "https://github.com/dhruvsmcet",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: (0, n.jsx)(P.A, { className: "w-4 h-4" }),
                          }),
                        }),
                      }),
                    ],
                  }),
                  (0, n.jsx)(o.P.button, {
                    whileTap: { scale: 0.9 },
                    onClick: () => t(!e),
                    className:
                      "md:hidden p-2 rounded-lg text-gray-600 hover:text-emerald-600 hover:bg-emerald-50",
                    children: e
                      ? (0, n.jsx)(E, { className: "w-5 h-5" })
                      : (0, n.jsx)(_, { className: "w-5 h-5" }),
                  }),
                ],
              }),
              (0, n.jsx)(k, {
                children:
                  e &&
                  (0, n.jsx)(o.P.div, {
                    initial: { opacity: 0, height: 0 },
                    animate: { opacity: 1, height: "auto" },
                    exit: { opacity: 0, height: 0 },
                    transition: { duration: 0.3 },
                    className:
                      "md:hidden border-t border-gray-200/50 bg-white/90 backdrop-blur-md",
                    children: (0, n.jsxs)("nav", {
                      className: "py-4 space-y-2",
                      children: [
                        z.map((e, s) =>
                          (0, n.jsx)(
                            o.P.div,
                            {
                              initial: { opacity: 0, x: -20 },
                              animate: { opacity: 1, x: 0 },
                              transition: { delay: 0.1 * s },
                              children: (0, n.jsx)(a(), {
                                href: e.href,
                                onClick: () => t(!1),
                                className: (0, A.cn)(
                                  "block px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                                  r === e.href
                                    ? "bg-emerald-100 text-emerald-700"
                                    : "text-gray-600 hover:text-emerald-600 hover:bg-emerald-50"
                                ),
                                children: e.label,
                              }),
                            },
                            e.href
                          )
                        ),
                        (0, n.jsxs)("div", {
                          className:
                            "flex items-center justify-center space-x-4 pt-4 border-t border-gray-200/50",
                          children: [
                            (0, n.jsx)(o.P.div, {
                              whileHover: { scale: 1.1 },
                              whileTap: { scale: 0.9 },
                              children: (0, n.jsx)(w.$, {
                                variant: "ghost",
                                size: "sm",
                                asChild: !0,
                                children: (0, n.jsxs)("a", {
                                  href: "https://www.linkedin.com/in/dhruv-kumar-118bb8200/",
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  children: [
                                    (0, n.jsx)(N.A, {
                                      className: "w-4 h-4 mr-2",
                                    }),
                                    "LinkedIn",
                                  ],
                                }),
                              }),
                            }),
                            (0, n.jsx)(o.P.div, {
                              whileHover: { scale: 1.1 },
                              whileTap: { scale: 0.9 },
                              children: (0, n.jsx)(w.$, {
                                variant: "ghost",
                                size: "sm",
                                asChild: !0,
                                children: (0, n.jsxs)("a", {
                                  href: "https://github.com/dhruvsmcet",
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  children: [
                                    (0, n.jsx)(P.A, {
                                      className: "w-4 h-4 mr-2",
                                    }),
                                    "GitHub",
                                  ],
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
              }),
            ],
          }),
        });
      }
    },
    5160: (e, t, r) => {
      "use strict";
      r.d(t, { $: () => c });
      var n = r(8081),
        s = r(2149),
        i = r(7051),
        a = r(3484),
        l = r(7687);
      let o = (0, a.F)(
          "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
          {
            variants: {
              variant: {
                default:
                  "bg-primary text-primary-foreground hover:bg-primary/90",
                destructive:
                  "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                outline:
                  "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                secondary:
                  "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
              },
              size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
                icon: "h-10 w-10",
              },
            },
            defaultVariants: { variant: "default", size: "default" },
          }
        ),
        c = s.forwardRef((e, t) => {
          let { className: r, variant: s, size: a, asChild: c = !1, ...d } = e,
            h = c ? i.DX : "button";
          return (0, n.jsx)(h, {
            className: (0, l.cn)(o({ variant: s, size: a, className: r })),
            ref: t,
            ...d,
          });
        });
      c.displayName = "Button";
    },
    6146: () => {},
    7687: (e, t, r) => {
      "use strict";
      r.d(t, { cn: () => i });
      var n = r(6522),
        s = r(4483);
      function i() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        return (0, s.QP)((0, n.$)(t));
      }
    },
    7879: (e, t, r) => {
      Promise.resolve().then(r.bind(r, 886)),
        Promise.resolve().then(r.t.bind(r, 366, 23)),
        Promise.resolve().then(r.t.bind(r, 6146, 23));
    },
    8024: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => n });
      let n = (0, r(1018).A)("Linkedin", [
        [
          "path",
          {
            d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
            key: "c2jq9f",
          },
        ],
        ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
        ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }],
      ]);
    },
    8305: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => n });
      let n = (0, r(1018).A)("Github", [
        [
          "path",
          {
            d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
            key: "tonef",
          },
        ],
        ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }],
      ]);
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [47, 570, 58, 497, 954, 358], () => t(7879)), (_N_E = e.O());
  },
]);
