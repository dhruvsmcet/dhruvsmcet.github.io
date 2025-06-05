(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [977],
  {
    3585: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => a });
      let a = (0, r(1018).A)("Mail", [
        [
          "rect",
          { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" },
        ],
        [
          "path",
          { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" },
        ],
      ]);
    },
    4666: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => a });
      let a = (0, r(1018).A)("MapPin", [
        [
          "path",
          {
            d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
            key: "1r0f0z",
          },
        ],
        ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
      ]);
    },
    5160: (e, t, r) => {
      "use strict";
      r.d(t, { $: () => c });
      var a = r(8081),
        i = r(2149),
        s = r(7051),
        l = r(3484),
        n = r(7687);
      let o = (0, l.F)(
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
        c = i.forwardRef((e, t) => {
          let { className: r, variant: i, size: l, asChild: c = !1, ...d } = e,
            m = c ? s.DX : "button";
          return (0, a.jsx)(m, {
            className: (0, n.cn)(o({ variant: i, size: l, className: r })),
            ref: t,
            ...d,
          });
        });
      c.displayName = "Button";
    },
    5516: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => a });
      let a = (0, r(1018).A)("Calendar", [
        ["path", { d: "M8 2v4", key: "1cmpym" }],
        ["path", { d: "M16 2v4", key: "4m81vk" }],
        [
          "rect",
          { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" },
        ],
        ["path", { d: "M3 10h18", key: "8toen8" }],
      ]);
    },
    6810: (e, t, r) => {
      "use strict";
      r.d(t, { Wu: () => c, ZB: () => o, Zp: () => l, aR: () => n });
      var a = r(8081),
        i = r(2149),
        s = r(7687);
      let l = i.forwardRef((e, t) => {
        let { className: r, ...i } = e;
        return (0, a.jsx)("div", {
          ref: t,
          className: (0, s.cn)(
            "rounded-lg border bg-card text-card-foreground shadow-sm",
            r
          ),
          ...i,
        });
      });
      l.displayName = "Card";
      let n = i.forwardRef((e, t) => {
        let { className: r, ...i } = e;
        return (0, a.jsx)("div", {
          ref: t,
          className: (0, s.cn)("flex flex-col space-y-1.5 p-6", r),
          ...i,
        });
      });
      n.displayName = "CardHeader";
      let o = i.forwardRef((e, t) => {
        let { className: r, ...i } = e;
        return (0, a.jsx)("div", {
          ref: t,
          className: (0, s.cn)(
            "text-2xl font-semibold leading-none tracking-tight",
            r
          ),
          ...i,
        });
      });
      (o.displayName = "CardTitle"),
        (i.forwardRef((e, t) => {
          let { className: r, ...i } = e;
          return (0, a.jsx)("div", {
            ref: t,
            className: (0, s.cn)("text-sm text-muted-foreground", r),
            ...i,
          });
        }).displayName = "CardDescription");
      let c = i.forwardRef((e, t) => {
        let { className: r, ...i } = e;
        return (0, a.jsx)("div", {
          ref: t,
          className: (0, s.cn)("p-6 pt-0", r),
          ...i,
        });
      });
      (c.displayName = "CardContent"),
        (i.forwardRef((e, t) => {
          let { className: r, ...i } = e;
          return (0, a.jsx)("div", {
            ref: t,
            className: (0, s.cn)("flex items-center p-6 pt-0", r),
            ...i,
          });
        }).displayName = "CardFooter");
    },
    7051: (e, t, r) => {
      "use strict";
      r.d(t, { DX: () => l });
      var a = r(2149);
      function i(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t);
      }
      var s = r(8081),
        l = a.forwardRef((e, t) => {
          let { children: r, ...i } = e,
            l = a.Children.toArray(r),
            o = l.find(c);
          if (o) {
            let e = o.props.children,
              r = l.map((t) =>
                t !== o
                  ? t
                  : a.Children.count(e) > 1
                  ? a.Children.only(null)
                  : a.isValidElement(e)
                  ? e.props.children
                  : null
              );
            return (0, s.jsx)(n, {
              ...i,
              ref: t,
              children: a.isValidElement(e)
                ? a.cloneElement(e, void 0, r)
                : null,
            });
          }
          return (0, s.jsx)(n, { ...i, ref: t, children: r });
        });
      l.displayName = "Slot";
      var n = a.forwardRef((e, t) => {
        let { children: r, ...s } = e;
        if (a.isValidElement(r)) {
          let e = (function (e) {
            let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
              r = t && "isReactWarning" in t && t.isReactWarning;
            return r
              ? e.ref
              : (r =
                  (t = Object.getOwnPropertyDescriptor(e, "ref")?.get) &&
                  "isReactWarning" in t &&
                  t.isReactWarning)
              ? e.props.ref
              : e.props.ref || e.ref;
          })(r);
          return a.cloneElement(r, {
            ...(function (e, t) {
              let r = { ...t };
              for (let a in t) {
                let i = e[a],
                  s = t[a];
                /^on[A-Z]/.test(a)
                  ? i && s
                    ? (r[a] = (...e) => {
                        s(...e), i(...e);
                      })
                    : i && (r[a] = i)
                  : "style" === a
                  ? (r[a] = { ...i, ...s })
                  : "className" === a &&
                    (r[a] = [i, s].filter(Boolean).join(" "));
              }
              return { ...e, ...r };
            })(s, r.props),
            ref: t
              ? (function (...e) {
                  return (t) => {
                    let r = !1,
                      a = e.map((e) => {
                        let a = i(e, t);
                        return r || "function" != typeof a || (r = !0), a;
                      });
                    if (r)
                      return () => {
                        for (let t = 0; t < a.length; t++) {
                          let r = a[t];
                          "function" == typeof r ? r() : i(e[t], null);
                        }
                      };
                  };
                })(t, e)
              : e,
          });
        }
        return a.Children.count(r) > 1 ? a.Children.only(null) : null;
      });
      n.displayName = "SlotClone";
      var o = ({ children: e }) => (0, s.jsx)(s.Fragment, { children: e });
      function c(e) {
        return a.isValidElement(e) && e.type === o;
      }
    },
    7332: (e, t, r) => {
      Promise.resolve().then(r.bind(r, 8632));
    },
    7687: (e, t, r) => {
      "use strict";
      r.d(t, { cn: () => s });
      var a = r(6522),
        i = r(4483);
      function s() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        return (0, i.QP)((0, a.$)(t));
      }
    },
    7810: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => s });
      var a = r(8081),
        i = r(6808);
      function s(e) {
        let { children: t } = e;
        return (0, a.jsx)(i.P.div, {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -20 },
          transition: { duration: 0.5, ease: "easeInOut" },
          className: "min-h-screen",
          children: t,
        });
      }
    },
    8024: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => a });
      let a = (0, r(1018).A)("Linkedin", [
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
      r.d(t, { A: () => a });
      let a = (0, r(1018).A)("Github", [
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
    8632: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => j });
      var a = r(8081),
        i = r(6808),
        s = r(7810),
        l = r(6810),
        n = r(5160),
        o = r(2149),
        c = r(7687);
      let d = o.forwardRef((e, t) => {
        let { className: r, type: i, ...s } = e;
        return (0, a.jsx)("input", {
          type: i,
          className: (0, c.cn)(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            r
          ),
          ref: t,
          ...s,
        });
      });
      d.displayName = "Input";
      let m = o.forwardRef((e, t) => {
        let { className: r, ...i } = e;
        return (0, a.jsx)("textarea", {
          className: (0, c.cn)(
            "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            r
          ),
          ref: t,
          ...i,
        });
      });
      m.displayName = "Textarea";
      var h = r(3585),
        x = r(1018);
      let u = (0, x.A)("Phone", [
        [
          "path",
          {
            d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
            key: "foiqr5",
          },
        ],
      ]);
      var p = r(5516),
        f = r(4666),
        y = r(8024),
        g = r(8305);
      let v = (0, x.A)("MessageCircle", [
          ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }],
        ]),
        b = (0, x.A)("Send", [
          [
            "path",
            {
              d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
              key: "1ffxy3",
            },
          ],
          ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }],
        ]);
      function j() {
        let e = [
            {
              icon: h.A,
              label: "Email",
              value: "dhruvsmcet@gmail.com",
              href: "mailto:dhruvsmcet@gmail.com",
              color: "emerald",
            },
            {
              icon: u,
              label: "Phone",
              value: "+91 9798731609",
              href: "tel:+919798731609",
              color: "blue",
            },
            {
              icon: p.A,
              label: "Date of Birth",
              value: "June 17, 1995",
              href: null,
              color: "purple",
            },
            {
              icon: f.A,
              label: "Graduation",
              value: "2016 (ECE)",
              href: null,
              color: "orange",
            },
          ],
          t = [
            {
              icon: y.A,
              label: "LinkedIn",
              value: "linkedin.com/in/dhruvsmcet",
              href: "https://www.linkedin.com/in/dhruv-kumar-118bb8200/",
              color: "blue",
            },
            {
              icon: g.A,
              label: "GitHub",
              value: "github.com/dhruvsmcet",
              href: "https://github.com/dhruvsmcet",
              color: "gray",
            },
          ],
          r = {
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: "easeOut" },
            },
          };
        return (0, a.jsx)(s.Z, {
          children: (0, a.jsx)("div", {
            className:
              "min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50",
            children: (0, a.jsx)("div", {
              className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20",
              children: (0, a.jsxs)(i.P.div, {
                variants: {
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
                  },
                },
                initial: "hidden",
                animate: "visible",
                children: [
                  (0, a.jsxs)(i.P.div, {
                    variants: r,
                    className: "text-center mb-16",
                    children: [
                      (0, a.jsxs)("div", {
                        className:
                          "flex items-center justify-center gap-3 mb-6",
                        children: [
                          (0, a.jsx)(v, {
                            className: "w-8 h-8 text-emerald-600",
                          }),
                          (0, a.jsx)("h1", {
                            className: "text-5xl font-bold text-gray-900",
                            children: "Get In Touch",
                          }),
                        ],
                      }),
                      (0, a.jsx)("p", {
                        className: "text-xl text-gray-600 max-w-3xl mx-auto",
                        children:
                          "Ready to start your next project? Let's discuss how we can work together to create something amazing.",
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "grid lg:grid-cols-2 gap-12",
                    children: [
                      (0, a.jsx)(i.P.div, {
                        variants: r,
                        children: (0, a.jsxs)(l.Zp, {
                          children: [
                            (0, a.jsxs)(l.aR, {
                              children: [
                                (0, a.jsx)(l.ZB, {
                                  className: "text-2xl text-gray-900",
                                  children: "Send Me a Message",
                                }),
                                (0, a.jsx)("p", {
                                  className: "text-gray-600",
                                  children:
                                    "Fill out the form below and I'll get back to you as soon as possible.",
                                }),
                              ],
                            }),
                            (0, a.jsx)(l.Wu, {
                              children: (0, a.jsxs)("form", {
                                className: "space-y-6",
                                children: [
                                  (0, a.jsxs)("div", {
                                    className: "grid md:grid-cols-2 gap-4",
                                    children: [
                                      (0, a.jsxs)(i.P.div, {
                                        initial: { opacity: 0, x: -20 },
                                        whileInView: { opacity: 1, x: 0 },
                                        viewport: { once: !0 },
                                        transition: { delay: 0.1 },
                                        children: [
                                          (0, a.jsx)("label", {
                                            htmlFor: "firstName",
                                            className:
                                              "block text-sm font-medium text-gray-700 mb-2",
                                            children: "First Name",
                                          }),
                                          (0, a.jsx)(d, {
                                            id: "firstName",
                                            placeholder: "John",
                                          }),
                                        ],
                                      }),
                                      (0, a.jsxs)(i.P.div, {
                                        initial: { opacity: 0, x: 20 },
                                        whileInView: { opacity: 1, x: 0 },
                                        viewport: { once: !0 },
                                        transition: { delay: 0.2 },
                                        children: [
                                          (0, a.jsx)("label", {
                                            htmlFor: "lastName",
                                            className:
                                              "block text-sm font-medium text-gray-700 mb-2",
                                            children: "Last Name",
                                          }),
                                          (0, a.jsx)(d, {
                                            id: "lastName",
                                            placeholder: "Doe",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, a.jsxs)(i.P.div, {
                                    initial: { opacity: 0, y: 20 },
                                    whileInView: { opacity: 1, y: 0 },
                                    viewport: { once: !0 },
                                    transition: { delay: 0.3 },
                                    children: [
                                      (0, a.jsx)("label", {
                                        htmlFor: "email",
                                        className:
                                          "block text-sm font-medium text-gray-700 mb-2",
                                        children: "Email Address",
                                      }),
                                      (0, a.jsx)(d, {
                                        id: "email",
                                        type: "email",
                                        placeholder: "john@example.com",
                                      }),
                                    ],
                                  }),
                                  (0, a.jsxs)(i.P.div, {
                                    initial: { opacity: 0, y: 20 },
                                    whileInView: { opacity: 1, y: 0 },
                                    viewport: { once: !0 },
                                    transition: { delay: 0.4 },
                                    children: [
                                      (0, a.jsx)("label", {
                                        htmlFor: "subject",
                                        className:
                                          "block text-sm font-medium text-gray-700 mb-2",
                                        children: "Subject",
                                      }),
                                      (0, a.jsx)(d, {
                                        id: "subject",
                                        placeholder: "Project Discussion",
                                      }),
                                    ],
                                  }),
                                  (0, a.jsxs)(i.P.div, {
                                    initial: { opacity: 0, y: 20 },
                                    whileInView: { opacity: 1, y: 0 },
                                    viewport: { once: !0 },
                                    transition: { delay: 0.5 },
                                    children: [
                                      (0, a.jsx)("label", {
                                        htmlFor: "message",
                                        className:
                                          "block text-sm font-medium text-gray-700 mb-2",
                                        children: "Message",
                                      }),
                                      (0, a.jsx)(m, {
                                        id: "message",
                                        rows: 6,
                                        placeholder:
                                          "Tell me about your project, timeline, and requirements...",
                                      }),
                                    ],
                                  }),
                                  (0, a.jsx)(i.P.div, {
                                    initial: { opacity: 0, y: 20 },
                                    whileInView: { opacity: 1, y: 0 },
                                    viewport: { once: !0 },
                                    transition: { delay: 0.6 },
                                    whileHover: { scale: 1.02 },
                                    whileTap: { scale: 0.98 },
                                    children: (0, a.jsxs)(n.$, {
                                      className:
                                        "w-full bg-emerald-600 hover:bg-emerald-700 text-white",
                                      children: [
                                        (0, a.jsx)(b, {
                                          className: "w-4 h-4 mr-2",
                                        }),
                                        "Send Message",
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                      (0, a.jsxs)(i.P.div, {
                        variants: r,
                        className: "space-y-8",
                        children: [
                          (0, a.jsxs)(l.Zp, {
                            children: [
                              (0, a.jsxs)(l.aR, {
                                children: [
                                  (0, a.jsx)(l.ZB, {
                                    className: "text-2xl text-gray-900",
                                    children: "Contact Information",
                                  }),
                                  (0, a.jsx)("p", {
                                    className: "text-gray-600",
                                    children:
                                      "Prefer to reach out directly? Here are my contact details.",
                                  }),
                                ],
                              }),
                              (0, a.jsx)(l.Wu, {
                                children: (0, a.jsx)("div", {
                                  className: "space-y-6",
                                  children: e.map((e, t) =>
                                    (0, a.jsxs)(
                                      i.P.div,
                                      {
                                        initial: { opacity: 0, x: -20 },
                                        whileInView: { opacity: 1, x: 0 },
                                        viewport: { once: !0 },
                                        transition: { delay: 0.1 * t },
                                        whileHover: { scale: 1.02 },
                                        className:
                                          "flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors",
                                        children: [
                                          (0, a.jsx)("div", {
                                            className: "w-12 h-12 bg-".concat(
                                              e.color,
                                              "-100 rounded-lg flex items-center justify-center"
                                            ),
                                            children: (0, a.jsx)(e.icon, {
                                              className: "w-5 h-5 text-".concat(
                                                e.color,
                                                "-600"
                                              ),
                                            }),
                                          }),
                                          (0, a.jsxs)("div", {
                                            children: [
                                              (0, a.jsx)("div", {
                                                className:
                                                  "font-medium text-gray-900",
                                                children: e.label,
                                              }),
                                              e.href
                                                ? (0, a.jsx)("a", {
                                                    href: e.href,
                                                    className:
                                                      "text-gray-600 hover:text-emerald-600 transition-colors",
                                                    children: e.value,
                                                  })
                                                : (0, a.jsx)("div", {
                                                    className: "text-gray-600",
                                                    children: e.value,
                                                  }),
                                            ],
                                          }),
                                        ],
                                      },
                                      e.label
                                    )
                                  ),
                                }),
                              }),
                            ],
                          }),
                          (0, a.jsxs)(l.Zp, {
                            children: [
                              (0, a.jsxs)(l.aR, {
                                children: [
                                  (0, a.jsx)(l.ZB, {
                                    className: "text-2xl text-gray-900",
                                    children: "Connect With Me",
                                  }),
                                  (0, a.jsx)("p", {
                                    className: "text-gray-600",
                                    children:
                                      "Follow my work and connect on social platforms.",
                                  }),
                                ],
                              }),
                              (0, a.jsx)(l.Wu, {
                                children: (0, a.jsx)("div", {
                                  className: "space-y-4",
                                  children: t.map((e, t) =>
                                    (0, a.jsx)(
                                      i.P.div,
                                      {
                                        initial: { opacity: 0, x: -20 },
                                        whileInView: { opacity: 1, x: 0 },
                                        viewport: { once: !0 },
                                        transition: { delay: 0.1 * t },
                                        whileHover: { scale: 1.02 },
                                        children: (0, a.jsxs)("a", {
                                          href: e.href,
                                          target: "_blank",
                                          rel: "noopener noreferrer",
                                          className:
                                            "flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors group",
                                          children: [
                                            (0, a.jsx)("div", {
                                              className: "w-12 h-12 bg-".concat(
                                                e.color,
                                                "-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform"
                                              ),
                                              children: (0, a.jsx)(e.icon, {
                                                className:
                                                  "w-5 h-5 text-".concat(
                                                    e.color,
                                                    "-600"
                                                  ),
                                              }),
                                            }),
                                            (0, a.jsxs)("div", {
                                              children: [
                                                (0, a.jsx)("div", {
                                                  className:
                                                    "font-medium text-gray-900",
                                                  children: e.label,
                                                }),
                                                (0, a.jsx)("div", {
                                                  className:
                                                    "text-gray-600 group-hover:text-emerald-600 transition-colors",
                                                  children: e.value,
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      },
                                      e.label
                                    )
                                  ),
                                }),
                              }),
                            ],
                          }),
                          (0, a.jsx)(l.Zp, {
                            className:
                              "bg-gradient-to-r from-emerald-50 to-teal-50 border-emerald-200",
                            children: (0, a.jsxs)(l.Wu, {
                              className: "p-6",
                              children: [
                                (0, a.jsx)("h3", {
                                  className:
                                    "text-lg font-semibold text-gray-900 mb-3",
                                  children: "Current Availability",
                                }),
                                (0, a.jsx)("p", {
                                  className: "text-gray-700 mb-4",
                                  children:
                                    "I'm currently open to new opportunities and freelance projects. Let's discuss how I can help bring your ideas to life!",
                                }),
                                (0, a.jsxs)("div", {
                                  className:
                                    "flex items-center gap-2 text-emerald-600",
                                  children: [
                                    (0, a.jsx)("div", {
                                      className:
                                        "w-2 h-2 bg-emerald-600 rounded-full animate-pulse",
                                    }),
                                    (0, a.jsx)("span", {
                                      className: "font-medium",
                                      children: "Available for new projects",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsx)(i.P.div, {
                    variants: r,
                    className: "mt-16",
                    children: (0, a.jsxs)(l.Zp, {
                      children: [
                        (0, a.jsx)(l.aR, {
                          children: (0, a.jsx)(l.ZB, {
                            className: "text-2xl text-gray-900 text-center",
                            children: "Frequently Asked Questions",
                          }),
                        }),
                        (0, a.jsx)(l.Wu, {
                          children: (0, a.jsxs)("div", {
                            className: "grid md:grid-cols-2 gap-8",
                            children: [
                              (0, a.jsxs)("div", {
                                className: "space-y-6",
                                children: [
                                  (0, a.jsxs)("div", {
                                    children: [
                                      (0, a.jsx)("h4", {
                                        className:
                                          "font-semibold text-gray-900 mb-2",
                                        children:
                                          "What's your typical response time?",
                                      }),
                                      (0, a.jsx)("p", {
                                        className: "text-gray-700 text-sm",
                                        children:
                                          "I usually respond to emails within 24 hours during business days.",
                                      }),
                                    ],
                                  }),
                                  (0, a.jsxs)("div", {
                                    children: [
                                      (0, a.jsx)("h4", {
                                        className:
                                          "font-semibold text-gray-900 mb-2",
                                        children:
                                          "Do you work on freelance projects?",
                                      }),
                                      (0, a.jsx)("p", {
                                        className: "text-gray-700 text-sm",
                                        children:
                                          "Yes, I'm open to freelance opportunities that align with my skills and schedule.",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className: "space-y-6",
                                children: [
                                  (0, a.jsxs)("div", {
                                    children: [
                                      (0, a.jsx)("h4", {
                                        className:
                                          "font-semibold text-gray-900 mb-2",
                                        children:
                                          "What technologies do you specialize in?",
                                      }),
                                      (0, a.jsx)("p", {
                                        className: "text-gray-700 text-sm",
                                        children:
                                          "I specialize in React, Angular, and modern frontend technologies with a focus on responsive design.",
                                      }),
                                    ],
                                  }),
                                  (0, a.jsxs)("div", {
                                    children: [
                                      (0, a.jsx)("h4", {
                                        className:
                                          "font-semibold text-gray-900 mb-2",
                                        children:
                                          "Are you available for remote work?",
                                      }),
                                      (0, a.jsx)("p", {
                                        className: "text-gray-700 text-sm",
                                        children:
                                          "I have experience working remotely and collaborating with distributed teams.",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          }),
        });
      }
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [570, 497, 954, 358], () => t(7332)), (_N_E = e.O());
  },
]);
