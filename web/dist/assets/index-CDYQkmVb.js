function dc(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const i = Object.getOwnPropertyDescriptor(r, l);
          i && Object.defineProperty(e, l, i.get ? i : { enumerable: !0, get: () => r[l] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver(l => {
    for (const i of l)
      if (i.type === "childList")
        for (const o of i.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : l.crossOrigin === "anonymous"
          ? (i.credentials = "omit")
          : (i.credentials = "same-origin"),
      i
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = n(l);
    fetch(l.href, i);
  }
})();
function pc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var hc = { exports: {} },
  Ti = {},
  mc = { exports: {} },
  K = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var dl = Symbol.for("react.element"),
  ap = Symbol.for("react.portal"),
  sp = Symbol.for("react.fragment"),
  cp = Symbol.for("react.strict_mode"),
  fp = Symbol.for("react.profiler"),
  dp = Symbol.for("react.provider"),
  pp = Symbol.for("react.context"),
  hp = Symbol.for("react.forward_ref"),
  mp = Symbol.for("react.suspense"),
  vp = Symbol.for("react.memo"),
  yp = Symbol.for("react.lazy"),
  ja = Symbol.iterator;
function gp(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ja && e[ja]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var vc = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  yc = Object.assign,
  gc = {};
function pr(e, t, n) {
  ((this.props = e), (this.context = t), (this.refs = gc), (this.updater = n || vc));
}
pr.prototype.isReactComponent = {};
pr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
pr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function wc() {}
wc.prototype = pr.prototype;
function ku(e, t, n) {
  ((this.props = e), (this.context = t), (this.refs = gc), (this.updater = n || vc));
}
var xu = (ku.prototype = new wc());
xu.constructor = ku;
yc(xu, pr.prototype);
xu.isPureReactComponent = !0;
var Fa = Array.isArray,
  Sc = Object.prototype.hasOwnProperty,
  Cu = { current: null },
  Ec = { key: !0, ref: !0, __self: !0, __source: !0 };
function kc(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (i = "" + t.key), t))
      Sc.call(t, r) && !Ec.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var a = Array(u), s = 0; s < u; s++) a[s] = arguments[s + 2];
    l.children = a;
  }
  if (e && e.defaultProps) for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return { $$typeof: dl, type: e, key: i, ref: o, props: l, _owner: Cu.current };
}
function wp(e, t) {
  return { $$typeof: dl, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Pu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === dl;
}
function Sp(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Ia = /\/+/g;
function Zi(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Sp("" + e.key) : t.toString(36);
}
function Vl(e, t, n, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case dl:
          case ap:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === "" ? "." + Zi(o, 0) : r),
      Fa(l)
        ? ((n = ""),
          e != null && (n = e.replace(Ia, "$&/") + "/"),
          Vl(l, t, n, "", function (s) {
            return s;
          }))
        : l != null &&
          (Pu(l) &&
            (l = wp(
              l,
              n +
                (!l.key || (o && o.key === l.key) ? "" : ("" + l.key).replace(Ia, "$&/") + "/") +
                e,
            )),
          t.push(l)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), Fa(e)))
    for (var u = 0; u < e.length; u++) {
      i = e[u];
      var a = r + Zi(i, u);
      o += Vl(i, t, n, a, l);
    }
  else if (((a = gp(e)), typeof a == "function"))
    for (e = a.call(e), u = 0; !(i = e.next()).done; )
      ((i = i.value), (a = r + Zi(i, u++)), (o += Vl(i, t, n, a, l)));
  else if (i === "object")
    throw (
      (t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) +
          "). If you meant to render a collection of children, use an array instead.",
      )
    );
  return o;
}
function Pl(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Vl(e, r, "", "", function (i) {
      return t.call(n, i, l++);
    }),
    r
  );
}
function Ep(e) {
  if (e._status === -1) {
    var t = e._result;
    ((t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t)));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ae = { current: null },
  Wl = { transition: null },
  kp = { ReactCurrentDispatcher: Ae, ReactCurrentBatchConfig: Wl, ReactCurrentOwner: Cu };
function xc() {
  throw Error("act(...) is not supported in production builds of React.");
}
K.Children = {
  map: Pl,
  forEach: function (e, t, n) {
    Pl(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Pl(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Pl(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Pu(e))
      throw Error("React.Children.only expected to receive a single React element child.");
    return e;
  },
};
K.Component = pr;
K.Fragment = sp;
K.Profiler = fp;
K.PureComponent = ku;
K.StrictMode = cp;
K.Suspense = mp;
K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = kp;
K.act = xc;
K.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " + e + ".",
    );
  var r = yc({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = Cu.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (a in t)
      Sc.call(t, a) &&
        !Ec.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && u !== void 0 ? u[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    u = Array(a);
    for (var s = 0; s < a; s++) u[s] = arguments[s + 2];
    r.children = u;
  }
  return { $$typeof: dl, type: e.type, key: l, ref: i, props: r, _owner: o };
};
K.createContext = function (e) {
  return (
    (e = {
      $$typeof: pp,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: dp, _context: e }),
    (e.Consumer = e)
  );
};
K.createElement = kc;
K.createFactory = function (e) {
  var t = kc.bind(null, e);
  return ((t.type = e), t);
};
K.createRef = function () {
  return { current: null };
};
K.forwardRef = function (e) {
  return { $$typeof: hp, render: e };
};
K.isValidElement = Pu;
K.lazy = function (e) {
  return { $$typeof: yp, _payload: { _status: -1, _result: e }, _init: Ep };
};
K.memo = function (e, t) {
  return { $$typeof: vp, type: e, compare: t === void 0 ? null : t };
};
K.startTransition = function (e) {
  var t = Wl.transition;
  Wl.transition = {};
  try {
    e();
  } finally {
    Wl.transition = t;
  }
};
K.unstable_act = xc;
K.useCallback = function (e, t) {
  return Ae.current.useCallback(e, t);
};
K.useContext = function (e) {
  return Ae.current.useContext(e);
};
K.useDebugValue = function () {};
K.useDeferredValue = function (e) {
  return Ae.current.useDeferredValue(e);
};
K.useEffect = function (e, t) {
  return Ae.current.useEffect(e, t);
};
K.useId = function () {
  return Ae.current.useId();
};
K.useImperativeHandle = function (e, t, n) {
  return Ae.current.useImperativeHandle(e, t, n);
};
K.useInsertionEffect = function (e, t) {
  return Ae.current.useInsertionEffect(e, t);
};
K.useLayoutEffect = function (e, t) {
  return Ae.current.useLayoutEffect(e, t);
};
K.useMemo = function (e, t) {
  return Ae.current.useMemo(e, t);
};
K.useReducer = function (e, t, n) {
  return Ae.current.useReducer(e, t, n);
};
K.useRef = function (e) {
  return Ae.current.useRef(e);
};
K.useState = function (e) {
  return Ae.current.useState(e);
};
K.useSyncExternalStore = function (e, t, n) {
  return Ae.current.useSyncExternalStore(e, t, n);
};
K.useTransition = function () {
  return Ae.current.useTransition();
};
K.version = "18.3.1";
mc.exports = K;
var R = mc.exports;
const Cc = pc(R),
  xp = dc({ __proto__: null, default: Cc }, [R]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Cp = R,
  Pp = Symbol.for("react.element"),
  _p = Symbol.for("react.fragment"),
  Rp = Object.prototype.hasOwnProperty,
  Lp = Cp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Tp = { key: !0, ref: !0, __self: !0, __source: !0 };
function Pc(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  (n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref));
  for (r in t) Rp.call(t, r) && !Tp.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: Pp, type: e, key: i, ref: o, props: l, _owner: Lp.current };
}
Ti.Fragment = _p;
Ti.jsx = Pc;
Ti.jsxs = Pc;
hc.exports = Ti;
var Q = hc.exports,
  _c = { exports: {} },
  be = {},
  Rc = { exports: {} },
  Lc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(T, $) {
    var V = T.length;
    T.push($);
    e: for (; 0 < V; ) {
      var te = (V - 1) >>> 1,
        ne = T[te];
      if (0 < l(ne, $)) ((T[te] = $), (T[V] = ne), (V = te));
      else break e;
    }
  }
  function n(T) {
    return T.length === 0 ? null : T[0];
  }
  function r(T) {
    if (T.length === 0) return null;
    var $ = T[0],
      V = T.pop();
    if (V !== $) {
      T[0] = V;
      e: for (var te = 0, ne = T.length, st = ne >>> 1; te < st; ) {
        var Ye = 2 * (te + 1) - 1,
          Oe = T[Ye],
          je = Ye + 1,
          tt = T[je];
        if (0 > l(Oe, V))
          je < ne && 0 > l(tt, Oe)
            ? ((T[te] = tt), (T[je] = V), (te = je))
            : ((T[te] = Oe), (T[Ye] = V), (te = Ye));
        else if (je < ne && 0 > l(tt, V)) ((T[te] = tt), (T[je] = V), (te = je));
        else break e;
      }
    }
    return $;
  }
  function l(T, $) {
    var V = T.sortIndex - $.sortIndex;
    return V !== 0 ? V : T.id - $.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      u = o.now();
    e.unstable_now = function () {
      return o.now() - u;
    };
  }
  var a = [],
    s = [],
    d = 1,
    f = null,
    h = 3,
    w = !1,
    k = !1,
    E = !1,
    D = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(T) {
    for (var $ = n(s); $ !== null; ) {
      if ($.callback === null) r(s);
      else if ($.startTime <= T) (r(s), ($.sortIndex = $.expirationTime), t(a, $));
      else break;
      $ = n(s);
    }
  }
  function x(T) {
    if (((E = !1), v(T), !k))
      if (n(a) !== null) ((k = !0), It(L));
      else {
        var $ = n(s);
        $ !== null && Ut(x, $.startTime - T);
      }
  }
  function L(T, $) {
    ((k = !1), E && ((E = !1), m(P), (P = -1)), (w = !0));
    var V = h;
    try {
      for (v($), f = n(a); f !== null && (!(f.expirationTime > $) || (T && !ee())); ) {
        var te = f.callback;
        if (typeof te == "function") {
          ((f.callback = null), (h = f.priorityLevel));
          var ne = te(f.expirationTime <= $);
          (($ = e.unstable_now()),
            typeof ne == "function" ? (f.callback = ne) : f === n(a) && r(a),
            v($));
        } else r(a);
        f = n(a);
      }
      if (f !== null) var st = !0;
      else {
        var Ye = n(s);
        (Ye !== null && Ut(x, Ye.startTime - $), (st = !1));
      }
      return st;
    } finally {
      ((f = null), (h = V), (w = !1));
    }
  }
  var O = !1,
    y = null,
    P = -1,
    B = 5,
    M = -1;
  function ee() {
    return !(e.unstable_now() - M < B);
  }
  function re() {
    if (y !== null) {
      var T = e.unstable_now();
      M = T;
      var $ = !0;
      try {
        $ = y(!0, T);
      } finally {
        $ ? Se() : ((O = !1), (y = null));
      }
    } else O = !1;
  }
  var Se;
  if (typeof c == "function")
    Se = function () {
      c(re);
    };
  else if (typeof MessageChannel < "u") {
    var Pe = new MessageChannel(),
      at = Pe.port2;
    ((Pe.port1.onmessage = re),
      (Se = function () {
        at.postMessage(null);
      }));
  } else
    Se = function () {
      D(re, 0);
    };
  function It(T) {
    ((y = T), O || ((O = !0), Se()));
  }
  function Ut(T, $) {
    P = D(function () {
      T(e.unstable_now());
    }, $);
  }
  ((e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (T) {
      T.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      k || w || ((k = !0), It(L));
    }),
    (e.unstable_forceFrameRate = function (T) {
      0 > T || 125 < T
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (B = 0 < T ? Math.floor(1e3 / T) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (T) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var $ = 3;
          break;
        default:
          $ = h;
      }
      var V = h;
      h = $;
      try {
        return T();
      } finally {
        h = V;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (T, $) {
      switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          T = 3;
      }
      var V = h;
      h = T;
      try {
        return $();
      } finally {
        h = V;
      }
    }),
    (e.unstable_scheduleCallback = function (T, $, V) {
      var te = e.unstable_now();
      switch (
        (typeof V == "object" && V !== null
          ? ((V = V.delay), (V = typeof V == "number" && 0 < V ? te + V : te))
          : (V = te),
        T)
      ) {
        case 1:
          var ne = -1;
          break;
        case 2:
          ne = 250;
          break;
        case 5:
          ne = 1073741823;
          break;
        case 4:
          ne = 1e4;
          break;
        default:
          ne = 5e3;
      }
      return (
        (ne = V + ne),
        (T = {
          id: d++,
          callback: $,
          priorityLevel: T,
          startTime: V,
          expirationTime: ne,
          sortIndex: -1,
        }),
        V > te
          ? ((T.sortIndex = V),
            t(s, T),
            n(a) === null && T === n(s) && (E ? (m(P), (P = -1)) : (E = !0), Ut(x, V - te)))
          : ((T.sortIndex = ne), t(a, T), k || w || ((k = !0), It(L))),
        T
      );
    }),
    (e.unstable_shouldYield = ee),
    (e.unstable_wrapCallback = function (T) {
      var $ = h;
      return function () {
        var V = h;
        h = $;
        try {
          return T.apply(this, arguments);
        } finally {
          h = V;
        }
      };
    }));
})(Lc);
Rc.exports = Lc;
var Np = Rc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Dp = R,
  qe = Np;
function _(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Tc = new Set(),
  Kr = {};
function Dn(e, t) {
  (ir(e, t), ir(e + "Capture", t));
}
function ir(e, t) {
  for (Kr[e] = t, e = 0; e < t.length; e++) Tc.add(t[e]);
}
var Mt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Ro = Object.prototype.hasOwnProperty,
  Mp =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ua = {},
  Aa = {};
function zp(e) {
  return Ro.call(Aa, e) ? !0 : Ro.call(Ua, e) ? !1 : Mp.test(e) ? (Aa[e] = !0) : ((Ua[e] = !0), !1);
}
function Op(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function jp(e, t, n, r) {
  if (t === null || typeof t > "u" || Op(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Be(e, t, n, r, l, i, o) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o));
}
var Te = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Te[e] = new Be(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Te[t] = new Be(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Te[e] = new Be(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
  Te[e] = new Be(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Te[e] = new Be(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Te[e] = new Be(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Te[e] = new Be(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Te[e] = new Be(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Te[e] = new Be(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var _u = /[\-:]([a-z])/g;
function Ru(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(_u, Ru);
    Te[t] = new Be(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(_u, Ru);
    Te[t] = new Be(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(_u, Ru);
  Te[t] = new Be(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Te[e] = new Be(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Te.xlinkHref = new Be("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
  Te[e] = new Be(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Lu(e, t, n, r) {
  var l = Te.hasOwnProperty(t) ? Te[t] : null;
  (l !== null
    ? l.type !== 0
    : r || !(2 < t.length) || (t[0] !== "o" && t[0] !== "O") || (t[1] !== "n" && t[1] !== "N")) &&
    (jp(t, n, l, r) && (n = null),
    r || l === null
      ? zp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
        ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
        : ((t = l.attributeName),
          (r = l.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((l = l.type),
              (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ft = Dp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  _l = Symbol.for("react.element"),
  $n = Symbol.for("react.portal"),
  Hn = Symbol.for("react.fragment"),
  Tu = Symbol.for("react.strict_mode"),
  Lo = Symbol.for("react.profiler"),
  Nc = Symbol.for("react.provider"),
  Dc = Symbol.for("react.context"),
  Nu = Symbol.for("react.forward_ref"),
  To = Symbol.for("react.suspense"),
  No = Symbol.for("react.suspense_list"),
  Du = Symbol.for("react.memo"),
  Vt = Symbol.for("react.lazy"),
  Mc = Symbol.for("react.offscreen"),
  Ba = Symbol.iterator;
function Er(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ba && e[Ba]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var de = Object.assign,
  qi;
function Mr(e) {
  if (qi === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      qi = (t && t[1]) || "";
    }
  return (
    `
` +
    qi +
    e
  );
}
var bi = !1;
function eo(e, t) {
  if (!e || bi) return "";
  bi = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (s) {
          var r = s;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (s) {
          r = s;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (s) {
        r = s;
      }
      e();
    }
  } catch (s) {
    if (s && r && typeof s.stack == "string") {
      for (
        var l = s.stack.split(`
`),
          i = r.stack.split(`
`),
          o = l.length - 1,
          u = i.length - 1;
        1 <= o && 0 <= u && l[o] !== i[u];

      )
        u--;
      for (; 1 <= o && 0 <= u; o--, u--)
        if (l[o] !== i[u]) {
          if (o !== 1 || u !== 1)
            do
              if ((o--, u--, 0 > u || l[o] !== i[u])) {
                var a =
                  `
` + l[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= o && 0 <= u);
          break;
        }
    }
  } finally {
    ((bi = !1), (Error.prepareStackTrace = n));
  }
  return (e = e ? e.displayName || e.name : "") ? Mr(e) : "";
}
function Fp(e) {
  switch (e.tag) {
    case 5:
      return Mr(e.type);
    case 16:
      return Mr("Lazy");
    case 13:
      return Mr("Suspense");
    case 19:
      return Mr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((e = eo(e.type, !1)), e);
    case 11:
      return ((e = eo(e.type.render, !1)), e);
    case 1:
      return ((e = eo(e.type, !0)), e);
    default:
      return "";
  }
}
function Do(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Hn:
      return "Fragment";
    case $n:
      return "Portal";
    case Lo:
      return "Profiler";
    case Tu:
      return "StrictMode";
    case To:
      return "Suspense";
    case No:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Dc:
        return (e.displayName || "Context") + ".Consumer";
      case Nc:
        return (e._context.displayName || "Context") + ".Provider";
      case Nu:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Du:
        return ((t = e.displayName || null), t !== null ? t : Do(e.type) || "Memo");
      case Vt:
        ((t = e._payload), (e = e._init));
        try {
          return Do(e(t));
        } catch {}
    }
  return null;
}
function Ip(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Do(t);
    case 8:
      return t === Tu ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function ln(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function zc(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Up(e) {
  var t = zc(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          ((r = "" + o), i.call(this, o));
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          ((e._valueTracker = null), delete e[t]);
        },
      }
    );
  }
}
function Rl(e) {
  e._valueTracker || (e._valueTracker = Up(e));
}
function Oc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = zc(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function ni(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")) return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Mo(e, t) {
  var n = t.checked;
  return de({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function $a(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  ((n = ln(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null,
    }));
}
function jc(e, t) {
  ((t = t.checked), t != null && Lu(e, "checked", t, !1));
}
function zo(e, t) {
  jc(e, t);
  var n = ln(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  (t.hasOwnProperty("value")
    ? Oo(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Oo(e, t.type, ln(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked));
}
function Ha(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!((r !== "submit" && r !== "reset") || (t.value !== void 0 && t.value !== null))) return;
    ((t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t));
  }
  ((n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n));
}
function Oo(e, t, n) {
  (t !== "number" || ni(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var zr = Array.isArray;
function bn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      ((l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0));
  } else {
    for (n = "" + ln(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        ((e[l].selected = !0), r && (e[l].defaultSelected = !0));
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function jo(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(_(91));
  return de({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Va(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(_(92));
      if (zr(n)) {
        if (1 < n.length) throw Error(_(93));
        n = n[0];
      }
      t = n;
    }
    (t == null && (t = ""), (n = t));
  }
  e._wrapperState = { initialValue: ln(n) };
}
function Fc(e, t) {
  var n = ln(t.value),
    r = ln(t.defaultValue);
  (n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r));
}
function Wa(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Ic(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Fo(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Ic(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var Ll,
  Uc = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (
        Ll = Ll || document.createElement("div"),
          Ll.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Ll.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Yr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Ir = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Ap = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ir).forEach(function (e) {
  Ap.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Ir[t] = Ir[e]));
  });
});
function Ac(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Ir.hasOwnProperty(e) && Ir[e])
      ? ("" + t).trim()
      : t + "px";
}
function Bc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = Ac(n, t[n], r);
      (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l));
    }
}
var Bp = de(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function Io(e, t) {
  if (t) {
    if (Bp[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(_(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(_(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
        throw Error(_(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(_(62));
  }
}
function Uo(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Ao = null;
function Mu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Bo = null,
  er = null,
  tr = null;
function Qa(e) {
  if ((e = ml(e))) {
    if (typeof Bo != "function") throw Error(_(280));
    var t = e.stateNode;
    t && ((t = Oi(t)), Bo(e.stateNode, e.type, t));
  }
}
function $c(e) {
  er ? (tr ? tr.push(e) : (tr = [e])) : (er = e);
}
function Hc() {
  if (er) {
    var e = er,
      t = tr;
    if (((tr = er = null), Qa(e), t)) for (e = 0; e < t.length; e++) Qa(t[e]);
  }
}
function Vc(e, t) {
  return e(t);
}
function Wc() {}
var to = !1;
function Qc(e, t, n) {
  if (to) return e(t, n);
  to = !0;
  try {
    return Vc(e, t, n);
  } finally {
    ((to = !1), (er !== null || tr !== null) && (Wc(), Hc()));
  }
}
function Xr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Oi(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      ((r = !r.disabled) ||
        ((e = e.type),
        (r = !(e === "button" || e === "input" || e === "select" || e === "textarea"))),
        (e = !r));
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(_(231, t, typeof n));
  return n;
}
var $o = !1;
if (Mt)
  try {
    var kr = {};
    (Object.defineProperty(kr, "passive", {
      get: function () {
        $o = !0;
      },
    }),
      window.addEventListener("test", kr, kr),
      window.removeEventListener("test", kr, kr));
  } catch {
    $o = !1;
  }
function $p(e, t, n, r, l, i, o, u, a) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (d) {
    this.onError(d);
  }
}
var Ur = !1,
  ri = null,
  li = !1,
  Ho = null,
  Hp = {
    onError: function (e) {
      ((Ur = !0), (ri = e));
    },
  };
function Vp(e, t, n, r, l, i, o, u, a) {
  ((Ur = !1), (ri = null), $p.apply(Hp, arguments));
}
function Wp(e, t, n, r, l, i, o, u, a) {
  if ((Vp.apply(this, arguments), Ur)) {
    if (Ur) {
      var s = ri;
      ((Ur = !1), (ri = null));
    } else throw Error(_(198));
    li || ((li = !0), (Ho = s));
  }
}
function Mn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Kc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
      return t.dehydrated;
  }
  return null;
}
function Ka(e) {
  if (Mn(e) !== e) throw Error(_(188));
}
function Qp(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Mn(e)), t === null)) throw Error(_(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return (Ka(l), e);
        if (i === r) return (Ka(l), t);
        i = i.sibling;
      }
      throw Error(_(188));
    }
    if (n.return !== r.return) ((n = l), (r = i));
    else {
      for (var o = !1, u = l.child; u; ) {
        if (u === n) {
          ((o = !0), (n = l), (r = i));
          break;
        }
        if (u === r) {
          ((o = !0), (r = l), (n = i));
          break;
        }
        u = u.sibling;
      }
      if (!o) {
        for (u = i.child; u; ) {
          if (u === n) {
            ((o = !0), (n = i), (r = l));
            break;
          }
          if (u === r) {
            ((o = !0), (r = i), (n = l));
            break;
          }
          u = u.sibling;
        }
        if (!o) throw Error(_(189));
      }
    }
    if (n.alternate !== r) throw Error(_(190));
  }
  if (n.tag !== 3) throw Error(_(188));
  return n.stateNode.current === n ? e : t;
}
function Yc(e) {
  return ((e = Qp(e)), e !== null ? Xc(e) : null);
}
function Xc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Xc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Gc = qe.unstable_scheduleCallback,
  Ya = qe.unstable_cancelCallback,
  Kp = qe.unstable_shouldYield,
  Yp = qe.unstable_requestPaint,
  ve = qe.unstable_now,
  Xp = qe.unstable_getCurrentPriorityLevel,
  zu = qe.unstable_ImmediatePriority,
  Jc = qe.unstable_UserBlockingPriority,
  ii = qe.unstable_NormalPriority,
  Gp = qe.unstable_LowPriority,
  Zc = qe.unstable_IdlePriority,
  Ni = null,
  kt = null;
function Jp(e) {
  if (kt && typeof kt.onCommitFiberRoot == "function")
    try {
      kt.onCommitFiberRoot(Ni, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var mt = Math.clz32 ? Math.clz32 : bp,
  Zp = Math.log,
  qp = Math.LN2;
function bp(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((Zp(e) / qp) | 0)) | 0);
}
var Tl = 64,
  Nl = 4194304;
function Or(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function oi(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var u = o & ~l;
    u !== 0 ? (r = Or(u)) : ((i &= o), i !== 0 && (r = Or(i)));
  } else ((o = n & ~l), o !== 0 ? (r = Or(o)) : i !== 0 && (r = Or(i)));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      ((n = 31 - mt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l));
  return r;
}
function eh(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function th(e, t) {
  for (
    var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - mt(i),
      u = 1 << o,
      a = l[o];
    (a === -1 ? (!(u & n) || u & r) && (l[o] = eh(u, t)) : a <= t && (e.expiredLanes |= u),
      (i &= ~u));
  }
}
function Vo(e) {
  return ((e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0);
}
function qc() {
  var e = Tl;
  return ((Tl <<= 1), !(Tl & 4194240) && (Tl = 64), e);
}
function no(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function pl(e, t, n) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - mt(t)),
    (e[t] = n));
}
function nh(e, t) {
  var n = e.pendingLanes & ~t;
  ((e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements));
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - mt(n),
      i = 1 << l;
    ((t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i));
  }
}
function Ou(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - mt(n),
      l = 1 << r;
    ((l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l));
  }
}
var b = 0;
function bc(e) {
  return ((e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1);
}
var ef,
  ju,
  tf,
  nf,
  rf,
  Wo = !1,
  Dl = [],
  Jt = null,
  Zt = null,
  qt = null,
  Gr = new Map(),
  Jr = new Map(),
  Qt = [],
  rh =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function Xa(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Jt = null;
      break;
    case "dragenter":
    case "dragleave":
      Zt = null;
      break;
    case "mouseover":
    case "mouseout":
      qt = null;
      break;
    case "pointerover":
    case "pointerout":
      Gr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Jr.delete(t.pointerId);
  }
}
function xr(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = ml(t)), t !== null && ju(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function lh(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return ((Jt = xr(Jt, e, t, n, r, l)), !0);
    case "dragenter":
      return ((Zt = xr(Zt, e, t, n, r, l)), !0);
    case "mouseover":
      return ((qt = xr(qt, e, t, n, r, l)), !0);
    case "pointerover":
      var i = l.pointerId;
      return (Gr.set(i, xr(Gr.get(i) || null, e, t, n, r, l)), !0);
    case "gotpointercapture":
      return ((i = l.pointerId), Jr.set(i, xr(Jr.get(i) || null, e, t, n, r, l)), !0);
  }
  return !1;
}
function lf(e) {
  var t = wn(e.target);
  if (t !== null) {
    var n = Mn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Kc(n)), t !== null)) {
          ((e.blockedOn = t),
            rf(e.priority, function () {
              tf(n);
            }));
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ql(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Qo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ((Ao = r), n.target.dispatchEvent(r), (Ao = null));
    } else return ((t = ml(n)), t !== null && ju(t), (e.blockedOn = n), !1);
    t.shift();
  }
  return !0;
}
function Ga(e, t, n) {
  Ql(e) && n.delete(t);
}
function ih() {
  ((Wo = !1),
    Jt !== null && Ql(Jt) && (Jt = null),
    Zt !== null && Ql(Zt) && (Zt = null),
    qt !== null && Ql(qt) && (qt = null),
    Gr.forEach(Ga),
    Jr.forEach(Ga));
}
function Cr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Wo || ((Wo = !0), qe.unstable_scheduleCallback(qe.unstable_NormalPriority, ih)));
}
function Zr(e) {
  function t(l) {
    return Cr(l, e);
  }
  if (0 < Dl.length) {
    Cr(Dl[0], e);
    for (var n = 1; n < Dl.length; n++) {
      var r = Dl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Jt !== null && Cr(Jt, e),
      Zt !== null && Cr(Zt, e),
      qt !== null && Cr(qt, e),
      Gr.forEach(t),
      Jr.forEach(t),
      n = 0;
    n < Qt.length;
    n++
  )
    ((r = Qt[n]), r.blockedOn === e && (r.blockedOn = null));
  for (; 0 < Qt.length && ((n = Qt[0]), n.blockedOn === null); )
    (lf(n), n.blockedOn === null && Qt.shift());
}
var nr = Ft.ReactCurrentBatchConfig,
  ui = !0;
function oh(e, t, n, r) {
  var l = b,
    i = nr.transition;
  nr.transition = null;
  try {
    ((b = 1), Fu(e, t, n, r));
  } finally {
    ((b = l), (nr.transition = i));
  }
}
function uh(e, t, n, r) {
  var l = b,
    i = nr.transition;
  nr.transition = null;
  try {
    ((b = 4), Fu(e, t, n, r));
  } finally {
    ((b = l), (nr.transition = i));
  }
}
function Fu(e, t, n, r) {
  if (ui) {
    var l = Qo(e, t, n, r);
    if (l === null) (po(e, t, r, ai, n), Xa(e, r));
    else if (lh(l, e, t, n, r)) r.stopPropagation();
    else if ((Xa(e, r), t & 4 && -1 < rh.indexOf(e))) {
      for (; l !== null; ) {
        var i = ml(l);
        if ((i !== null && ef(i), (i = Qo(e, t, n, r)), i === null && po(e, t, r, ai, n), i === l))
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else po(e, t, r, null, n);
  }
}
var ai = null;
function Qo(e, t, n, r) {
  if (((ai = null), (e = Mu(r)), (e = wn(e)), e !== null))
    if (((t = Mn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Kc(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((ai = e), null);
}
function of(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Xp()) {
        case zu:
          return 1;
        case Jc:
          return 4;
        case ii:
        case Gp:
          return 16;
        case Zc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Yt = null,
  Iu = null,
  Kl = null;
function uf() {
  if (Kl) return Kl;
  var e,
    t = Iu,
    n = t.length,
    r,
    l = "value" in Yt ? Yt.value : Yt.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
  return (Kl = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Yl(e) {
  var t = e.keyCode;
  return (
    "charCode" in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ml() {
  return !0;
}
function Ja() {
  return !1;
}
function et(e) {
  function t(n, r, l, i, o) {
    ((this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null));
    for (var u in e) e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(i) : i[u]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Ml
        : Ja),
      (this.isPropagationStopped = Ja),
      this
    );
  }
  return (
    de(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Ml));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ml));
      },
      persist: function () {},
      isPersistent: Ml,
    }),
    t
  );
}
var hr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Uu = et(hr),
  hl = de({}, hr, { view: 0, detail: 0 }),
  ah = et(hl),
  ro,
  lo,
  Pr,
  Di = de({}, hl, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Au,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Pr &&
            (Pr && e.type === "mousemove"
              ? ((ro = e.screenX - Pr.screenX), (lo = e.screenY - Pr.screenY))
              : (lo = ro = 0),
            (Pr = e)),
          ro);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : lo;
    },
  }),
  Za = et(Di),
  sh = de({}, Di, { dataTransfer: 0 }),
  ch = et(sh),
  fh = de({}, hl, { relatedTarget: 0 }),
  io = et(fh),
  dh = de({}, hr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  ph = et(dh),
  hh = de({}, hr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  mh = et(hh),
  vh = de({}, hr, { data: 0 }),
  qa = et(vh),
  yh = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  gh = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  wh = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Sh(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = wh[e]) ? !!t[e] : !1;
}
function Au() {
  return Sh;
}
var Eh = de({}, hl, {
    key: function (e) {
      if (e.key) {
        var t = yh[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Yl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? gh[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Au,
    charCode: function (e) {
      return e.type === "keypress" ? Yl(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Yl(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  kh = et(Eh),
  xh = de({}, Di, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  ba = et(xh),
  Ch = de({}, hl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Au,
  }),
  Ph = et(Ch),
  _h = de({}, hr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Rh = et(_h),
  Lh = de({}, Di, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Th = et(Lh),
  Nh = [9, 13, 27, 32],
  Bu = Mt && "CompositionEvent" in window,
  Ar = null;
Mt && "documentMode" in document && (Ar = document.documentMode);
var Dh = Mt && "TextEvent" in window && !Ar,
  af = Mt && (!Bu || (Ar && 8 < Ar && 11 >= Ar)),
  es = " ",
  ts = !1;
function sf(e, t) {
  switch (e) {
    case "keyup":
      return Nh.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function cf(e) {
  return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
}
var Vn = !1;
function Mh(e, t) {
  switch (e) {
    case "compositionend":
      return cf(t);
    case "keypress":
      return t.which !== 32 ? null : ((ts = !0), es);
    case "textInput":
      return ((e = t.data), e === es && ts ? null : e);
    default:
      return null;
  }
}
function zh(e, t) {
  if (Vn)
    return e === "compositionend" || (!Bu && sf(e, t))
      ? ((e = uf()), (Kl = Iu = Yt = null), (Vn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return af && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Oh = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function ns(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Oh[e.type] : t === "textarea";
}
function ff(e, t, n, r) {
  ($c(r),
    (t = si(t, "onChange")),
    0 < t.length &&
      ((n = new Uu("onChange", "change", null, n, r)), e.push({ event: n, listeners: t })));
}
var Br = null,
  qr = null;
function jh(e) {
  kf(e, 0);
}
function Mi(e) {
  var t = Kn(e);
  if (Oc(t)) return e;
}
function Fh(e, t) {
  if (e === "change") return t;
}
var df = !1;
if (Mt) {
  var oo;
  if (Mt) {
    var uo = "oninput" in document;
    if (!uo) {
      var rs = document.createElement("div");
      (rs.setAttribute("oninput", "return;"), (uo = typeof rs.oninput == "function"));
    }
    oo = uo;
  } else oo = !1;
  df = oo && (!document.documentMode || 9 < document.documentMode);
}
function ls() {
  Br && (Br.detachEvent("onpropertychange", pf), (qr = Br = null));
}
function pf(e) {
  if (e.propertyName === "value" && Mi(qr)) {
    var t = [];
    (ff(t, qr, e, Mu(e)), Qc(jh, t));
  }
}
function Ih(e, t, n) {
  e === "focusin"
    ? (ls(), (Br = t), (qr = n), Br.attachEvent("onpropertychange", pf))
    : e === "focusout" && ls();
}
function Uh(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Mi(qr);
}
function Ah(e, t) {
  if (e === "click") return Mi(t);
}
function Bh(e, t) {
  if (e === "input" || e === "change") return Mi(t);
}
function $h(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var yt = typeof Object.is == "function" ? Object.is : $h;
function br(e, t) {
  if (yt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Ro.call(t, l) || !yt(e[l], t[l])) return !1;
  }
  return !0;
}
function is(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function os(e, t) {
  var n = is(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = is(n);
  }
}
function hf(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? hf(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function mf() {
  for (var e = window, t = ni(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ni(e.document);
  }
  return t;
}
function $u(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Hh(e) {
  var t = mf(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && hf(n.ownerDocument.documentElement, n)) {
    if (r !== null && $u(n)) {
      if (((t = r.start), (e = r.end), e === void 0 && (e = t), "selectionStart" in n))
        ((n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length)));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          i = Math.min(r.start, l);
        ((r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = os(n, i)));
        var o = os(n, r);
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      ((e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top));
  }
}
var Vh = Mt && "documentMode" in document && 11 >= document.documentMode,
  Wn = null,
  Ko = null,
  $r = null,
  Yo = !1;
function us(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Yo ||
    Wn == null ||
    Wn !== ni(r) ||
    ((r = Wn),
    "selectionStart" in r && $u(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    ($r && br($r, r)) ||
      (($r = r),
      (r = si(Ko, "onSelect")),
      0 < r.length &&
        ((t = new Uu("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Wn))));
}
function zl(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Qn = {
    animationend: zl("Animation", "AnimationEnd"),
    animationiteration: zl("Animation", "AnimationIteration"),
    animationstart: zl("Animation", "AnimationStart"),
    transitionend: zl("Transition", "TransitionEnd"),
  },
  ao = {},
  vf = {};
Mt &&
  ((vf = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Qn.animationend.animation,
    delete Qn.animationiteration.animation,
    delete Qn.animationstart.animation),
  "TransitionEvent" in window || delete Qn.transitionend.transition);
function zi(e) {
  if (ao[e]) return ao[e];
  if (!Qn[e]) return e;
  var t = Qn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in vf) return (ao[e] = t[n]);
  return e;
}
var yf = zi("animationend"),
  gf = zi("animationiteration"),
  wf = zi("animationstart"),
  Sf = zi("transitionend"),
  Ef = new Map(),
  as =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function un(e, t) {
  (Ef.set(e, t), Dn(t, [e]));
}
for (var so = 0; so < as.length; so++) {
  var co = as[so],
    Wh = co.toLowerCase(),
    Qh = co[0].toUpperCase() + co.slice(1);
  un(Wh, "on" + Qh);
}
un(yf, "onAnimationEnd");
un(gf, "onAnimationIteration");
un(wf, "onAnimationStart");
un("dblclick", "onDoubleClick");
un("focusin", "onFocus");
un("focusout", "onBlur");
un(Sf, "onTransitionEnd");
ir("onMouseEnter", ["mouseout", "mouseover"]);
ir("onMouseLeave", ["mouseout", "mouseover"]);
ir("onPointerEnter", ["pointerout", "pointerover"]);
ir("onPointerLeave", ["pointerout", "pointerover"]);
Dn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Dn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "),
);
Dn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Dn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Dn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Dn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var jr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  Kh = new Set("cancel close invalid load scroll toggle".split(" ").concat(jr));
function ss(e, t, n) {
  var r = e.type || "unknown-event";
  ((e.currentTarget = n), Wp(r, t, void 0, e), (e.currentTarget = null));
}
function kf(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var u = r[o],
            a = u.instance,
            s = u.currentTarget;
          if (((u = u.listener), a !== i && l.isPropagationStopped())) break e;
          (ss(l, u, s), (i = a));
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((u = r[o]),
            (a = u.instance),
            (s = u.currentTarget),
            (u = u.listener),
            a !== i && l.isPropagationStopped())
          )
            break e;
          (ss(l, u, s), (i = a));
        }
    }
  }
  if (li) throw ((e = Ho), (li = !1), (Ho = null), e);
}
function oe(e, t) {
  var n = t[qo];
  n === void 0 && (n = t[qo] = new Set());
  var r = e + "__bubble";
  n.has(r) || (xf(t, e, 2, !1), n.add(r));
}
function fo(e, t, n) {
  var r = 0;
  (t && (r |= 4), xf(n, e, r, t));
}
var Ol = "_reactListening" + Math.random().toString(36).slice(2);
function el(e) {
  if (!e[Ol]) {
    ((e[Ol] = !0),
      Tc.forEach(function (n) {
        n !== "selectionchange" && (Kh.has(n) || fo(n, !1, e), fo(n, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ol] || ((t[Ol] = !0), fo("selectionchange", !1, t));
  }
}
function xf(e, t, n, r) {
  switch (of(t)) {
    case 1:
      var l = oh;
      break;
    case 4:
      l = uh;
      break;
    default:
      l = Fu;
  }
  ((n = l.bind(null, t, n, e)),
    (l = void 0),
    !$o || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
        ? e.addEventListener(t, n, { passive: l })
        : e.addEventListener(t, n, !1));
}
function po(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var a = o.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = o.stateNode.containerInfo), a === l || (a.nodeType === 8 && a.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; u !== null; ) {
          if (((o = wn(u)), o === null)) return;
          if (((a = o.tag), a === 5 || a === 6)) {
            r = i = o;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  Qc(function () {
    var s = i,
      d = Mu(n),
      f = [];
    e: {
      var h = Ef.get(e);
      if (h !== void 0) {
        var w = Uu,
          k = e;
        switch (e) {
          case "keypress":
            if (Yl(n) === 0) break e;
          case "keydown":
          case "keyup":
            w = kh;
            break;
          case "focusin":
            ((k = "focus"), (w = io));
            break;
          case "focusout":
            ((k = "blur"), (w = io));
            break;
          case "beforeblur":
          case "afterblur":
            w = io;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            w = Za;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = ch;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = Ph;
            break;
          case yf:
          case gf:
          case wf:
            w = ph;
            break;
          case Sf:
            w = Rh;
            break;
          case "scroll":
            w = ah;
            break;
          case "wheel":
            w = Th;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = mh;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = ba;
        }
        var E = (t & 4) !== 0,
          D = !E && e === "scroll",
          m = E ? (h !== null ? h + "Capture" : null) : h;
        E = [];
        for (var c = s, v; c !== null; ) {
          v = c;
          var x = v.stateNode;
          if (
            (v.tag === 5 &&
              x !== null &&
              ((v = x), m !== null && ((x = Xr(c, m)), x != null && E.push(tl(c, x, v)))),
            D)
          )
            break;
          c = c.return;
        }
        0 < E.length && ((h = new w(h, k, null, n, d)), f.push({ event: h, listeners: E }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (w = e === "mouseout" || e === "pointerout"),
          h && n !== Ao && (k = n.relatedTarget || n.fromElement) && (wn(k) || k[zt]))
        )
          break e;
        if (
          (w || h) &&
          ((h =
            d.window === d ? d : (h = d.ownerDocument) ? h.defaultView || h.parentWindow : window),
          w
            ? ((k = n.relatedTarget || n.toElement),
              (w = s),
              (k = k ? wn(k) : null),
              k !== null && ((D = Mn(k)), k !== D || (k.tag !== 5 && k.tag !== 6)) && (k = null))
            : ((w = null), (k = s)),
          w !== k)
        ) {
          if (
            ((E = Za),
            (x = "onMouseLeave"),
            (m = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((E = ba), (x = "onPointerLeave"), (m = "onPointerEnter"), (c = "pointer")),
            (D = w == null ? h : Kn(w)),
            (v = k == null ? h : Kn(k)),
            (h = new E(x, c + "leave", w, n, d)),
            (h.target = D),
            (h.relatedTarget = v),
            (x = null),
            wn(d) === s &&
              ((E = new E(m, c + "enter", k, n, d)),
              (E.target = v),
              (E.relatedTarget = D),
              (x = E)),
            (D = x),
            w && k)
          )
            t: {
              for (E = w, m = k, c = 0, v = E; v; v = Un(v)) c++;
              for (v = 0, x = m; x; x = Un(x)) v++;
              for (; 0 < c - v; ) ((E = Un(E)), c--);
              for (; 0 < v - c; ) ((m = Un(m)), v--);
              for (; c--; ) {
                if (E === m || (m !== null && E === m.alternate)) break t;
                ((E = Un(E)), (m = Un(m)));
              }
              E = null;
            }
          else E = null;
          (w !== null && cs(f, h, w, E, !1), k !== null && D !== null && cs(f, D, k, E, !0));
        }
      }
      e: {
        if (
          ((h = s ? Kn(s) : window),
          (w = h.nodeName && h.nodeName.toLowerCase()),
          w === "select" || (w === "input" && h.type === "file"))
        )
          var L = Fh;
        else if (ns(h))
          if (df) L = Bh;
          else {
            L = Uh;
            var O = Ih;
          }
        else
          (w = h.nodeName) &&
            w.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (L = Ah);
        if (L && (L = L(e, s))) {
          ff(f, L, n, d);
          break e;
        }
        (O && O(e, h, s),
          e === "focusout" &&
            (O = h._wrapperState) &&
            O.controlled &&
            h.type === "number" &&
            Oo(h, "number", h.value));
      }
      switch (((O = s ? Kn(s) : window), e)) {
        case "focusin":
          (ns(O) || O.contentEditable === "true") && ((Wn = O), (Ko = s), ($r = null));
          break;
        case "focusout":
          $r = Ko = Wn = null;
          break;
        case "mousedown":
          Yo = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((Yo = !1), us(f, n, d));
          break;
        case "selectionchange":
          if (Vh) break;
        case "keydown":
        case "keyup":
          us(f, n, d);
      }
      var y;
      if (Bu)
        e: {
          switch (e) {
            case "compositionstart":
              var P = "onCompositionStart";
              break e;
            case "compositionend":
              P = "onCompositionEnd";
              break e;
            case "compositionupdate":
              P = "onCompositionUpdate";
              break e;
          }
          P = void 0;
        }
      else
        Vn
          ? sf(e, n) && (P = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      (P &&
        (af &&
          n.locale !== "ko" &&
          (Vn || P !== "onCompositionStart"
            ? P === "onCompositionEnd" && Vn && (y = uf())
            : ((Yt = d), (Iu = "value" in Yt ? Yt.value : Yt.textContent), (Vn = !0))),
        (O = si(s, P)),
        0 < O.length &&
          ((P = new qa(P, e, null, n, d)),
          f.push({ event: P, listeners: O }),
          y ? (P.data = y) : ((y = cf(n)), y !== null && (P.data = y)))),
        (y = Dh ? Mh(e, n) : zh(e, n)) &&
          ((s = si(s, "onBeforeInput")),
          0 < s.length &&
            ((d = new qa("onBeforeInput", "beforeinput", null, n, d)),
            f.push({ event: d, listeners: s }),
            (d.data = y))));
    }
    kf(f, t);
  });
}
function tl(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function si(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    (l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = Xr(e, n)),
      i != null && r.unshift(tl(e, i, l)),
      (i = Xr(e, t)),
      i != null && r.push(tl(e, i, l))),
      (e = e.return));
  }
  return r;
}
function Un(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function cs(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var u = n,
      a = u.alternate,
      s = u.stateNode;
    if (a !== null && a === r) break;
    (u.tag === 5 &&
      s !== null &&
      ((u = s),
      l
        ? ((a = Xr(n, i)), a != null && o.unshift(tl(n, a, u)))
        : l || ((a = Xr(n, i)), a != null && o.push(tl(n, a, u)))),
      (n = n.return));
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Yh = /\r\n?/g,
  Xh = /\u0000|\uFFFD/g;
function fs(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Yh,
      `
`,
    )
    .replace(Xh, "");
}
function jl(e, t, n) {
  if (((t = fs(t)), fs(e) !== t && n)) throw Error(_(425));
}
function ci() {}
var Xo = null,
  Go = null;
function Jo(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Zo = typeof setTimeout == "function" ? setTimeout : void 0,
  Gh = typeof clearTimeout == "function" ? clearTimeout : void 0,
  ds = typeof Promise == "function" ? Promise : void 0,
  Jh =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof ds < "u"
        ? function (e) {
            return ds.resolve(null).then(e).catch(Zh);
          }
        : Zo;
function Zh(e) {
  setTimeout(function () {
    throw e;
  });
}
function ho(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          (e.removeChild(l), Zr(t));
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Zr(t);
}
function bt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function ps(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var mr = Math.random().toString(36).slice(2),
  Et = "__reactFiber$" + mr,
  nl = "__reactProps$" + mr,
  zt = "__reactContainer$" + mr,
  qo = "__reactEvents$" + mr,
  qh = "__reactListeners$" + mr,
  bh = "__reactHandles$" + mr;
function wn(e) {
  var t = e[Et];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[zt] || n[Et])) {
      if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
        for (e = ps(e); e !== null; ) {
          if ((n = e[Et])) return n;
          e = ps(e);
        }
      return t;
    }
    ((e = n), (n = e.parentNode));
  }
  return null;
}
function ml(e) {
  return (
    (e = e[Et] || e[zt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Kn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(_(33));
}
function Oi(e) {
  return e[nl] || null;
}
var bo = [],
  Yn = -1;
function an(e) {
  return { current: e };
}
function ue(e) {
  0 > Yn || ((e.current = bo[Yn]), (bo[Yn] = null), Yn--);
}
function ie(e, t) {
  (Yn++, (bo[Yn] = e.current), (e.current = t));
}
var on = {},
  ze = an(on),
  We = an(!1),
  Pn = on;
function or(e, t) {
  var n = e.type.contextTypes;
  if (!n) return on;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in n) l[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function Qe(e) {
  return ((e = e.childContextTypes), e != null);
}
function fi() {
  (ue(We), ue(ze));
}
function hs(e, t, n) {
  if (ze.current !== on) throw Error(_(168));
  (ie(ze, t), ie(We, n));
}
function Cf(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function")) return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(_(108, Ip(e) || "Unknown", l));
  return de({}, n, r);
}
function di(e) {
  return (
    (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || on),
    (Pn = ze.current),
    ie(ze, e),
    ie(We, We.current),
    !0
  );
}
function ms(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(_(169));
  (n
    ? ((e = Cf(e, t, Pn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ue(We),
      ue(ze),
      ie(ze, e))
    : ue(We),
    ie(We, n));
}
var Rt = null,
  ji = !1,
  mo = !1;
function Pf(e) {
  Rt === null ? (Rt = [e]) : Rt.push(e);
}
function em(e) {
  ((ji = !0), Pf(e));
}
function sn() {
  if (!mo && Rt !== null) {
    mo = !0;
    var e = 0,
      t = b;
    try {
      var n = Rt;
      for (b = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ((Rt = null), (ji = !1));
    } catch (l) {
      throw (Rt !== null && (Rt = Rt.slice(e + 1)), Gc(zu, sn), l);
    } finally {
      ((b = t), (mo = !1));
    }
  }
  return null;
}
var Xn = [],
  Gn = 0,
  pi = null,
  hi = 0,
  nt = [],
  rt = 0,
  _n = null,
  Lt = 1,
  Tt = "";
function mn(e, t) {
  ((Xn[Gn++] = hi), (Xn[Gn++] = pi), (pi = e), (hi = t));
}
function _f(e, t, n) {
  ((nt[rt++] = Lt), (nt[rt++] = Tt), (nt[rt++] = _n), (_n = e));
  var r = Lt;
  e = Tt;
  var l = 32 - mt(r) - 1;
  ((r &= ~(1 << l)), (n += 1));
  var i = 32 - mt(t) + l;
  if (30 < i) {
    var o = l - (l % 5);
    ((i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (Lt = (1 << (32 - mt(t) + l)) | (n << l) | r),
      (Tt = i + e));
  } else ((Lt = (1 << i) | (n << l) | r), (Tt = e));
}
function Hu(e) {
  e.return !== null && (mn(e, 1), _f(e, 1, 0));
}
function Vu(e) {
  for (; e === pi; ) ((pi = Xn[--Gn]), (Xn[Gn] = null), (hi = Xn[--Gn]), (Xn[Gn] = null));
  for (; e === _n; )
    ((_n = nt[--rt]),
      (nt[rt] = null),
      (Tt = nt[--rt]),
      (nt[rt] = null),
      (Lt = nt[--rt]),
      (nt[rt] = null));
}
var Ze = null,
  Je = null,
  se = !1,
  ht = null;
function Rf(e, t) {
  var n = lt(5, null, null, 0);
  ((n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function vs(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
        t !== null ? ((e.stateNode = t), (Ze = e), (Je = bt(t.firstChild)), !0) : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ze = e), (Je = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = _n !== null ? { id: Lt, overflow: Tt } : null),
            (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
            (n = lt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ze = e),
            (Je = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function eu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function tu(e) {
  if (se) {
    var t = Je;
    if (t) {
      var n = t;
      if (!vs(e, t)) {
        if (eu(e)) throw Error(_(418));
        t = bt(n.nextSibling);
        var r = Ze;
        t && vs(e, t) ? Rf(r, n) : ((e.flags = (e.flags & -4097) | 2), (se = !1), (Ze = e));
      }
    } else {
      if (eu(e)) throw Error(_(418));
      ((e.flags = (e.flags & -4097) | 2), (se = !1), (Ze = e));
    }
  }
}
function ys(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Ze = e;
}
function Fl(e) {
  if (e !== Ze) return !1;
  if (!se) return (ys(e), (se = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type), (t = t !== "head" && t !== "body" && !Jo(e.type, e.memoizedProps))),
    t && (t = Je))
  ) {
    if (eu(e)) throw (Lf(), Error(_(418)));
    for (; t; ) (Rf(e, t), (t = bt(t.nextSibling)));
  }
  if ((ys(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(_(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Je = bt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Je = null;
    }
  } else Je = Ze ? bt(e.stateNode.nextSibling) : null;
  return !0;
}
function Lf() {
  for (var e = Je; e; ) e = bt(e.nextSibling);
}
function ur() {
  ((Je = Ze = null), (se = !1));
}
function Wu(e) {
  ht === null ? (ht = [e]) : ht.push(e);
}
var tm = Ft.ReactCurrentBatchConfig;
function _r(e, t, n) {
  if (((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(_(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(_(147, e));
      var l = r,
        i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var u = l.refs;
            o === null ? delete u[i] : (u[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(_(284));
    if (!n._owner) throw Error(_(290, e));
  }
  return e;
}
function Il(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      _(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e),
    )
  );
}
function gs(e) {
  var t = e._init;
  return t(e._payload);
}
function Tf(e) {
  function t(m, c) {
    if (e) {
      var v = m.deletions;
      v === null ? ((m.deletions = [c]), (m.flags |= 16)) : v.push(c);
    }
  }
  function n(m, c) {
    if (!e) return null;
    for (; c !== null; ) (t(m, c), (c = c.sibling));
    return null;
  }
  function r(m, c) {
    for (m = new Map(); c !== null; )
      (c.key !== null ? m.set(c.key, c) : m.set(c.index, c), (c = c.sibling));
    return m;
  }
  function l(m, c) {
    return ((m = rn(m, c)), (m.index = 0), (m.sibling = null), m);
  }
  function i(m, c, v) {
    return (
      (m.index = v),
      e
        ? ((v = m.alternate),
          v !== null ? ((v = v.index), v < c ? ((m.flags |= 2), c) : v) : ((m.flags |= 2), c))
        : ((m.flags |= 1048576), c)
    );
  }
  function o(m) {
    return (e && m.alternate === null && (m.flags |= 2), m);
  }
  function u(m, c, v, x) {
    return c === null || c.tag !== 6
      ? ((c = ko(v, m.mode, x)), (c.return = m), c)
      : ((c = l(c, v)), (c.return = m), c);
  }
  function a(m, c, v, x) {
    var L = v.type;
    return L === Hn
      ? d(m, c, v.props.children, x, v.key)
      : c !== null &&
          (c.elementType === L ||
            (typeof L == "object" && L !== null && L.$$typeof === Vt && gs(L) === c.type))
        ? ((x = l(c, v.props)), (x.ref = _r(m, c, v)), (x.return = m), x)
        : ((x = ei(v.type, v.key, v.props, null, m.mode, x)),
          (x.ref = _r(m, c, v)),
          (x.return = m),
          x);
  }
  function s(m, c, v, x) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== v.containerInfo ||
      c.stateNode.implementation !== v.implementation
      ? ((c = xo(v, m.mode, x)), (c.return = m), c)
      : ((c = l(c, v.children || [])), (c.return = m), c);
  }
  function d(m, c, v, x, L) {
    return c === null || c.tag !== 7
      ? ((c = Cn(v, m.mode, x, L)), (c.return = m), c)
      : ((c = l(c, v)), (c.return = m), c);
  }
  function f(m, c, v) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return ((c = ko("" + c, m.mode, v)), (c.return = m), c);
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case _l:
          return (
            (v = ei(c.type, c.key, c.props, null, m.mode, v)),
            (v.ref = _r(m, null, c)),
            (v.return = m),
            v
          );
        case $n:
          return ((c = xo(c, m.mode, v)), (c.return = m), c);
        case Vt:
          var x = c._init;
          return f(m, x(c._payload), v);
      }
      if (zr(c) || Er(c)) return ((c = Cn(c, m.mode, v, null)), (c.return = m), c);
      Il(m, c);
    }
    return null;
  }
  function h(m, c, v, x) {
    var L = c !== null ? c.key : null;
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return L !== null ? null : u(m, c, "" + v, x);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case _l:
          return v.key === L ? a(m, c, v, x) : null;
        case $n:
          return v.key === L ? s(m, c, v, x) : null;
        case Vt:
          return ((L = v._init), h(m, c, L(v._payload), x));
      }
      if (zr(v) || Er(v)) return L !== null ? null : d(m, c, v, x, null);
      Il(m, v);
    }
    return null;
  }
  function w(m, c, v, x, L) {
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return ((m = m.get(v) || null), u(c, m, "" + x, L));
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case _l:
          return ((m = m.get(x.key === null ? v : x.key) || null), a(c, m, x, L));
        case $n:
          return ((m = m.get(x.key === null ? v : x.key) || null), s(c, m, x, L));
        case Vt:
          var O = x._init;
          return w(m, c, v, O(x._payload), L);
      }
      if (zr(x) || Er(x)) return ((m = m.get(v) || null), d(c, m, x, L, null));
      Il(c, x);
    }
    return null;
  }
  function k(m, c, v, x) {
    for (var L = null, O = null, y = c, P = (c = 0), B = null; y !== null && P < v.length; P++) {
      y.index > P ? ((B = y), (y = null)) : (B = y.sibling);
      var M = h(m, y, v[P], x);
      if (M === null) {
        y === null && (y = B);
        break;
      }
      (e && y && M.alternate === null && t(m, y),
        (c = i(M, c, P)),
        O === null ? (L = M) : (O.sibling = M),
        (O = M),
        (y = B));
    }
    if (P === v.length) return (n(m, y), se && mn(m, P), L);
    if (y === null) {
      for (; P < v.length; P++)
        ((y = f(m, v[P], x)),
          y !== null && ((c = i(y, c, P)), O === null ? (L = y) : (O.sibling = y), (O = y)));
      return (se && mn(m, P), L);
    }
    for (y = r(m, y); P < v.length; P++)
      ((B = w(y, m, P, v[P], x)),
        B !== null &&
          (e && B.alternate !== null && y.delete(B.key === null ? P : B.key),
          (c = i(B, c, P)),
          O === null ? (L = B) : (O.sibling = B),
          (O = B)));
    return (
      e &&
        y.forEach(function (ee) {
          return t(m, ee);
        }),
      se && mn(m, P),
      L
    );
  }
  function E(m, c, v, x) {
    var L = Er(v);
    if (typeof L != "function") throw Error(_(150));
    if (((v = L.call(v)), v == null)) throw Error(_(151));
    for (
      var O = (L = null), y = c, P = (c = 0), B = null, M = v.next();
      y !== null && !M.done;
      P++, M = v.next()
    ) {
      y.index > P ? ((B = y), (y = null)) : (B = y.sibling);
      var ee = h(m, y, M.value, x);
      if (ee === null) {
        y === null && (y = B);
        break;
      }
      (e && y && ee.alternate === null && t(m, y),
        (c = i(ee, c, P)),
        O === null ? (L = ee) : (O.sibling = ee),
        (O = ee),
        (y = B));
    }
    if (M.done) return (n(m, y), se && mn(m, P), L);
    if (y === null) {
      for (; !M.done; P++, M = v.next())
        ((M = f(m, M.value, x)),
          M !== null && ((c = i(M, c, P)), O === null ? (L = M) : (O.sibling = M), (O = M)));
      return (se && mn(m, P), L);
    }
    for (y = r(m, y); !M.done; P++, M = v.next())
      ((M = w(y, m, P, M.value, x)),
        M !== null &&
          (e && M.alternate !== null && y.delete(M.key === null ? P : M.key),
          (c = i(M, c, P)),
          O === null ? (L = M) : (O.sibling = M),
          (O = M)));
    return (
      e &&
        y.forEach(function (re) {
          return t(m, re);
        }),
      se && mn(m, P),
      L
    );
  }
  function D(m, c, v, x) {
    if (
      (typeof v == "object" &&
        v !== null &&
        v.type === Hn &&
        v.key === null &&
        (v = v.props.children),
      typeof v == "object" && v !== null)
    ) {
      switch (v.$$typeof) {
        case _l:
          e: {
            for (var L = v.key, O = c; O !== null; ) {
              if (O.key === L) {
                if (((L = v.type), L === Hn)) {
                  if (O.tag === 7) {
                    (n(m, O.sibling), (c = l(O, v.props.children)), (c.return = m), (m = c));
                    break e;
                  }
                } else if (
                  O.elementType === L ||
                  (typeof L == "object" && L !== null && L.$$typeof === Vt && gs(L) === O.type)
                ) {
                  (n(m, O.sibling),
                    (c = l(O, v.props)),
                    (c.ref = _r(m, O, v)),
                    (c.return = m),
                    (m = c));
                  break e;
                }
                n(m, O);
                break;
              } else t(m, O);
              O = O.sibling;
            }
            v.type === Hn
              ? ((c = Cn(v.props.children, m.mode, x, v.key)), (c.return = m), (m = c))
              : ((x = ei(v.type, v.key, v.props, null, m.mode, x)),
                (x.ref = _r(m, c, v)),
                (x.return = m),
                (m = x));
          }
          return o(m);
        case $n:
          e: {
            for (O = v.key; c !== null; ) {
              if (c.key === O)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === v.containerInfo &&
                  c.stateNode.implementation === v.implementation
                ) {
                  (n(m, c.sibling), (c = l(c, v.children || [])), (c.return = m), (m = c));
                  break e;
                } else {
                  n(m, c);
                  break;
                }
              else t(m, c);
              c = c.sibling;
            }
            ((c = xo(v, m.mode, x)), (c.return = m), (m = c));
          }
          return o(m);
        case Vt:
          return ((O = v._init), D(m, c, O(v._payload), x));
      }
      if (zr(v)) return k(m, c, v, x);
      if (Er(v)) return E(m, c, v, x);
      Il(m, v);
    }
    return (typeof v == "string" && v !== "") || typeof v == "number"
      ? ((v = "" + v),
        c !== null && c.tag === 6
          ? (n(m, c.sibling), (c = l(c, v)), (c.return = m), (m = c))
          : (n(m, c), (c = ko(v, m.mode, x)), (c.return = m), (m = c)),
        o(m))
      : n(m, c);
  }
  return D;
}
var ar = Tf(!0),
  Nf = Tf(!1),
  mi = an(null),
  vi = null,
  Jn = null,
  Qu = null;
function Ku() {
  Qu = Jn = vi = null;
}
function Yu(e) {
  var t = mi.current;
  (ue(mi), (e._currentValue = t));
}
function nu(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function rr(e, t) {
  ((vi = e),
    (Qu = Jn = null),
    (e = e.dependencies),
    e !== null && e.firstContext !== null && (e.lanes & t && (Ve = !0), (e.firstContext = null)));
}
function ot(e) {
  var t = e._currentValue;
  if (Qu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Jn === null)) {
      if (vi === null) throw Error(_(308));
      ((Jn = e), (vi.dependencies = { lanes: 0, firstContext: e }));
    } else Jn = Jn.next = e;
  return t;
}
var Sn = null;
function Xu(e) {
  Sn === null ? (Sn = [e]) : Sn.push(e);
}
function Df(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Xu(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Ot(e, r)
  );
}
function Ot(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    ((e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return));
  return n.tag === 3 ? n.stateNode : null;
}
var Wt = !1;
function Gu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Mf(e, t) {
  ((e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      }));
}
function Nt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function en(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), G & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Ot(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Xu(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Ot(e, n)
  );
}
function Xl(e, t, n) {
  if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Ou(e, n));
  }
}
function ws(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        (i === null ? (l = i = o) : (i = i.next = o), (n = n.next));
      } while (n !== null);
      i === null ? (l = i = t) : (i = i.next = t);
    } else l = i = t;
    ((n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n));
    return;
  }
  ((e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t));
}
function yi(e, t, n, r) {
  var l = e.updateQueue;
  Wt = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var a = u,
      s = a.next;
    ((a.next = null), o === null ? (i = s) : (o.next = s), (o = a));
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (u = d.lastBaseUpdate),
      u !== o && (u === null ? (d.firstBaseUpdate = s) : (u.next = s), (d.lastBaseUpdate = a)));
  }
  if (i !== null) {
    var f = l.baseState;
    ((o = 0), (d = s = a = null), (u = i));
    do {
      var h = u.lane,
        w = u.eventTime;
      if ((r & h) === h) {
        d !== null &&
          (d = d.next =
            {
              eventTime: w,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var k = e,
            E = u;
          switch (((h = t), (w = n), E.tag)) {
            case 1:
              if (((k = E.payload), typeof k == "function")) {
                f = k.call(w, f, h);
                break e;
              }
              f = k;
              break e;
            case 3:
              k.flags = (k.flags & -65537) | 128;
            case 0:
              if (((k = E.payload), (h = typeof k == "function" ? k.call(w, f, h) : k), h == null))
                break e;
              f = de({}, f, h);
              break e;
            case 2:
              Wt = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64), (h = l.effects), h === null ? (l.effects = [u]) : h.push(u));
      } else
        ((w = {
          eventTime: w,
          lane: h,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          d === null ? ((s = d = w), (a = f)) : (d = d.next = w),
          (o |= h));
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        ((h = u), (u = h.next), (h.next = null), (l.lastBaseUpdate = h), (l.shared.pending = null));
      }
    } while (!0);
    if (
      (d === null && (a = f),
      (l.baseState = a),
      (l.firstBaseUpdate = s),
      (l.lastBaseUpdate = d),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do ((o |= l.lane), (l = l.next));
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    ((Ln |= o), (e.lanes = o), (e.memoizedState = f));
  }
}
function Ss(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function")) throw Error(_(191, l));
        l.call(r);
      }
    }
}
var vl = {},
  xt = an(vl),
  rl = an(vl),
  ll = an(vl);
function En(e) {
  if (e === vl) throw Error(_(174));
  return e;
}
function Ju(e, t) {
  switch ((ie(ll, t), ie(rl, e), ie(xt, vl), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Fo(null, "");
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Fo(t, e)));
  }
  (ue(xt), ie(xt, t));
}
function sr() {
  (ue(xt), ue(rl), ue(ll));
}
function zf(e) {
  En(ll.current);
  var t = En(xt.current),
    n = Fo(t, e.type);
  t !== n && (ie(rl, e), ie(xt, n));
}
function Zu(e) {
  rl.current === e && (ue(xt), ue(rl));
}
var ce = an(0);
function gi(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!"))
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      ((t.child.return = t), (t = t.child));
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    ((t.sibling.return = t.return), (t = t.sibling));
  }
  return null;
}
var vo = [];
function qu() {
  for (var e = 0; e < vo.length; e++) vo[e]._workInProgressVersionPrimary = null;
  vo.length = 0;
}
var Gl = Ft.ReactCurrentDispatcher,
  yo = Ft.ReactCurrentBatchConfig,
  Rn = 0,
  fe = null,
  Ee = null,
  xe = null,
  wi = !1,
  Hr = !1,
  il = 0,
  nm = 0;
function Ne() {
  throw Error(_(321));
}
function bu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!yt(e[n], t[n])) return !1;
  return !0;
}
function ea(e, t, n, r, l, i) {
  if (
    ((Rn = i),
    (fe = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Gl.current = e === null || e.memoizedState === null ? om : um),
    (e = n(r, l)),
    Hr)
  ) {
    i = 0;
    do {
      if (((Hr = !1), (il = 0), 25 <= i)) throw Error(_(301));
      ((i += 1), (xe = Ee = null), (t.updateQueue = null), (Gl.current = am), (e = n(r, l)));
    } while (Hr);
  }
  if (
    ((Gl.current = Si),
    (t = Ee !== null && Ee.next !== null),
    (Rn = 0),
    (xe = Ee = fe = null),
    (wi = !1),
    t)
  )
    throw Error(_(300));
  return e;
}
function ta() {
  var e = il !== 0;
  return ((il = 0), e);
}
function St() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return (xe === null ? (fe.memoizedState = xe = e) : (xe = xe.next = e), xe);
}
function ut() {
  if (Ee === null) {
    var e = fe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ee.next;
  var t = xe === null ? fe.memoizedState : xe.next;
  if (t !== null) ((xe = t), (Ee = e));
  else {
    if (e === null) throw Error(_(310));
    ((Ee = e),
      (e = {
        memoizedState: Ee.memoizedState,
        baseState: Ee.baseState,
        baseQueue: Ee.baseQueue,
        queue: Ee.queue,
        next: null,
      }),
      xe === null ? (fe.memoizedState = xe = e) : (xe = xe.next = e));
  }
  return xe;
}
function ol(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function go(e) {
  var t = ut(),
    n = t.queue;
  if (n === null) throw Error(_(311));
  n.lastRenderedReducer = e;
  var r = Ee,
    l = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      ((l.next = i.next), (i.next = o));
    }
    ((r.baseQueue = l = i), (n.pending = null));
  }
  if (l !== null) {
    ((i = l.next), (r = r.baseState));
    var u = (o = null),
      a = null,
      s = i;
    do {
      var d = s.lane;
      if ((Rn & d) === d)
        (a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: s.action,
              hasEagerState: s.hasEagerState,
              eagerState: s.eagerState,
              next: null,
            }),
          (r = s.hasEagerState ? s.eagerState : e(r, s.action)));
      else {
        var f = {
          lane: d,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null,
        };
        (a === null ? ((u = a = f), (o = r)) : (a = a.next = f), (fe.lanes |= d), (Ln |= d));
      }
      s = s.next;
    } while (s !== null && s !== i);
    (a === null ? (o = r) : (a.next = u),
      yt(r, t.memoizedState) || (Ve = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = a),
      (n.lastRenderedState = r));
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do ((i = l.lane), (fe.lanes |= i), (Ln |= i), (l = l.next));
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function wo(e) {
  var t = ut(),
    n = t.queue;
  if (n === null) throw Error(_(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = (l = l.next);
    do ((i = e(i, o.action)), (o = o.next));
    while (o !== l);
    (yt(i, t.memoizedState) || (Ve = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i));
  }
  return [i, r];
}
function Of() {}
function jf(e, t) {
  var n = fe,
    r = ut(),
    l = t(),
    i = !yt(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (Ve = !0)),
    (r = r.queue),
    na(Uf.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (xe !== null && xe.memoizedState.tag & 1))
  ) {
    if (((n.flags |= 2048), ul(9, If.bind(null, n, r, l, t), void 0, null), Ce === null))
      throw Error(_(349));
    Rn & 30 || Ff(n, t, l);
  }
  return l;
}
function Ff(e, t, n) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = fe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (fe.updateQueue = t), (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
}
function If(e, t, n, r) {
  ((t.value = n), (t.getSnapshot = r), Af(t) && Bf(e));
}
function Uf(e, t, n) {
  return n(function () {
    Af(t) && Bf(e);
  });
}
function Af(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !yt(e, n);
  } catch {
    return !0;
  }
}
function Bf(e) {
  var t = Ot(e, 1);
  t !== null && vt(t, e, 1, -1);
}
function Es(e) {
  var t = St();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ol,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = im.bind(null, fe, e)),
    [t.memoizedState, e]
  );
}
function ul(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = fe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (fe.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function $f() {
  return ut().memoizedState;
}
function Jl(e, t, n, r) {
  var l = St();
  ((fe.flags |= e), (l.memoizedState = ul(1 | t, n, void 0, r === void 0 ? null : r)));
}
function Fi(e, t, n, r) {
  var l = ut();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Ee !== null) {
    var o = Ee.memoizedState;
    if (((i = o.destroy), r !== null && bu(r, o.deps))) {
      l.memoizedState = ul(t, n, i, r);
      return;
    }
  }
  ((fe.flags |= e), (l.memoizedState = ul(1 | t, n, i, r)));
}
function ks(e, t) {
  return Jl(8390656, 8, e, t);
}
function na(e, t) {
  return Fi(2048, 8, e, t);
}
function Hf(e, t) {
  return Fi(4, 2, e, t);
}
function Vf(e, t) {
  return Fi(4, 4, e, t);
}
function Wf(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Qf(e, t, n) {
  return ((n = n != null ? n.concat([e]) : null), Fi(4, 4, Wf.bind(null, t, e), n));
}
function ra() {}
function Kf(e, t) {
  var n = ut();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && bu(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function Yf(e, t) {
  var n = ut();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && bu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Xf(e, t, n) {
  return Rn & 21
    ? (yt(n, t) || ((n = qc()), (fe.lanes |= n), (Ln |= n), (e.baseState = !0)), t)
    : (e.baseState && ((e.baseState = !1), (Ve = !0)), (e.memoizedState = n));
}
function rm(e, t) {
  var n = b;
  ((b = n !== 0 && 4 > n ? n : 4), e(!0));
  var r = yo.transition;
  yo.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((b = n), (yo.transition = r));
  }
}
function Gf() {
  return ut().memoizedState;
}
function lm(e, t, n) {
  var r = nn(e);
  if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), Jf(e)))
    Zf(t, n);
  else if (((n = Df(e, t, n, r)), n !== null)) {
    var l = Ue();
    (vt(n, e, r, l), qf(n, t, r));
  }
}
function im(e, t, n) {
  var r = nn(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Jf(e)) Zf(t, l);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && ((i = t.lastRenderedReducer), i !== null))
      try {
        var o = t.lastRenderedState,
          u = i(o, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), yt(u, o))) {
          var a = t.interleaved;
          (a === null ? ((l.next = l), Xu(t)) : ((l.next = a.next), (a.next = l)),
            (t.interleaved = l));
          return;
        }
      } catch {
      } finally {
      }
    ((n = Df(e, t, l, r)), n !== null && ((l = Ue()), vt(n, e, r, l), qf(n, t, r)));
  }
}
function Jf(e) {
  var t = e.alternate;
  return e === fe || (t !== null && t === fe);
}
function Zf(e, t) {
  Hr = wi = !0;
  var n = e.pending;
  (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
}
function qf(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Ou(e, n));
  }
}
var Si = {
    readContext: ot,
    useCallback: Ne,
    useContext: Ne,
    useEffect: Ne,
    useImperativeHandle: Ne,
    useInsertionEffect: Ne,
    useLayoutEffect: Ne,
    useMemo: Ne,
    useReducer: Ne,
    useRef: Ne,
    useState: Ne,
    useDebugValue: Ne,
    useDeferredValue: Ne,
    useTransition: Ne,
    useMutableSource: Ne,
    useSyncExternalStore: Ne,
    useId: Ne,
    unstable_isNewReconciler: !1,
  },
  om = {
    readContext: ot,
    useCallback: function (e, t) {
      return ((St().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: ot,
    useEffect: ks,
    useImperativeHandle: function (e, t, n) {
      return ((n = n != null ? n.concat([e]) : null), Jl(4194308, 4, Wf.bind(null, t, e), n));
    },
    useLayoutEffect: function (e, t) {
      return Jl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Jl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = St();
      return ((t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e);
    },
    useReducer: function (e, t, n) {
      var r = St();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = lm.bind(null, fe, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = St();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: Es,
    useDebugValue: ra,
    useDeferredValue: function (e) {
      return (St().memoizedState = e);
    },
    useTransition: function () {
      var e = Es(!1),
        t = e[0];
      return ((e = rm.bind(null, e[1])), (St().memoizedState = e), [t, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = fe,
        l = St();
      if (se) {
        if (n === void 0) throw Error(_(407));
        n = n();
      } else {
        if (((n = t()), Ce === null)) throw Error(_(349));
        Rn & 30 || Ff(r, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (l.queue = i),
        ks(Uf.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        ul(9, If.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = St(),
        t = Ce.identifierPrefix;
      if (se) {
        var n = Tt,
          r = Lt;
        ((n = (r & ~(1 << (32 - mt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = il++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":"));
      } else ((n = nm++), (t = ":" + t + "r" + n.toString(32) + ":"));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  um = {
    readContext: ot,
    useCallback: Kf,
    useContext: ot,
    useEffect: na,
    useImperativeHandle: Qf,
    useInsertionEffect: Hf,
    useLayoutEffect: Vf,
    useMemo: Yf,
    useReducer: go,
    useRef: $f,
    useState: function () {
      return go(ol);
    },
    useDebugValue: ra,
    useDeferredValue: function (e) {
      var t = ut();
      return Xf(t, Ee.memoizedState, e);
    },
    useTransition: function () {
      var e = go(ol)[0],
        t = ut().memoizedState;
      return [e, t];
    },
    useMutableSource: Of,
    useSyncExternalStore: jf,
    useId: Gf,
    unstable_isNewReconciler: !1,
  },
  am = {
    readContext: ot,
    useCallback: Kf,
    useContext: ot,
    useEffect: na,
    useImperativeHandle: Qf,
    useInsertionEffect: Hf,
    useLayoutEffect: Vf,
    useMemo: Yf,
    useReducer: wo,
    useRef: $f,
    useState: function () {
      return wo(ol);
    },
    useDebugValue: ra,
    useDeferredValue: function (e) {
      var t = ut();
      return Ee === null ? (t.memoizedState = e) : Xf(t, Ee.memoizedState, e);
    },
    useTransition: function () {
      var e = wo(ol)[0],
        t = ut().memoizedState;
      return [e, t];
    },
    useMutableSource: Of,
    useSyncExternalStore: jf,
    useId: Gf,
    unstable_isNewReconciler: !1,
  };
function ft(e, t) {
  if (e && e.defaultProps) {
    ((t = de({}, t)), (e = e.defaultProps));
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function ru(e, t, n, r) {
  ((t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : de({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n));
}
var Ii = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Mn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ue(),
      l = nn(e),
      i = Nt(r, l);
    ((i.payload = t),
      n != null && (i.callback = n),
      (t = en(e, i, l)),
      t !== null && (vt(t, e, l, r), Xl(t, e, l)));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ue(),
      l = nn(e),
      i = Nt(r, l);
    ((i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = en(e, i, l)),
      t !== null && (vt(t, e, l, r), Xl(t, e, l)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ue(),
      r = nn(e),
      l = Nt(n, r);
    ((l.tag = 2),
      t != null && (l.callback = t),
      (t = en(e, l, r)),
      t !== null && (vt(t, e, r, n), Xl(t, e, r)));
  },
};
function xs(e, t, n, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
        ? !br(n, r) || !br(l, i)
        : !0
  );
}
function bf(e, t, n) {
  var r = !1,
    l = on,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = ot(i))
      : ((l = Qe(t) ? Pn : ze.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? or(e, l) : on)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ii),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Cs(e, t, n, r) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ii.enqueueReplaceState(t, t.state, null));
}
function lu(e, t, n, r) {
  var l = e.stateNode;
  ((l.props = n), (l.state = e.memoizedState), (l.refs = {}), Gu(e));
  var i = t.contextType;
  (typeof i == "object" && i !== null
    ? (l.context = ot(i))
    : ((i = Qe(t) ? Pn : ze.current), (l.context = or(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (ru(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(),
      t !== l.state && Ii.enqueueReplaceState(l, l.state, null),
      yi(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308));
}
function cr(e, t) {
  try {
    var n = "",
      r = t;
    do ((n += Fp(r)), (r = r.return));
    while (r);
    var l = n;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function So(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function iu(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var sm = typeof WeakMap == "function" ? WeakMap : Map;
function ed(e, t, n) {
  ((n = Nt(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var r = t.value;
  return (
    (n.callback = function () {
      (ki || ((ki = !0), (mu = r)), iu(e, t));
    }),
    n
  );
}
function td(e, t, n) {
  ((n = Nt(-1, n)), (n.tag = 3));
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    ((n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        iu(e, t);
      }));
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        (iu(e, t), typeof r != "function" && (tn === null ? (tn = new Set([this])) : tn.add(this)));
        var o = t.stack;
        this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
      }),
    n
  );
}
function Ps(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new sm();
    var l = new Set();
    r.set(t, l);
  } else ((l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l)));
  l.has(n) || (l.add(n), (e = xm.bind(null, e, t, n)), t.then(e, e));
}
function _s(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Rs(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null ? (n.tag = 17) : ((t = Nt(-1, 1)), (t.tag = 2), en(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var cm = Ft.ReactCurrentOwner,
  Ve = !1;
function Ie(e, t, n, r) {
  t.child = e === null ? Nf(t, null, n, r) : ar(t, e.child, n, r);
}
function Ls(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return (
    rr(t, l),
    (r = ea(e, t, n, r, i, l)),
    (n = ta()),
    e !== null && !Ve
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), jt(e, t, l))
      : (se && n && Hu(t), (t.flags |= 1), Ie(e, t, r, l), t.child)
  );
}
function Ts(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !fa(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), nd(e, t, i, r, l))
      : ((e = ei(n.type, null, r, t, t.mode, l)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps;
    if (((n = n.compare), (n = n !== null ? n : br), n(o, r) && e.ref === t.ref))
      return jt(e, t, l);
  }
  return ((t.flags |= 1), (e = rn(i, r)), (e.ref = t.ref), (e.return = t), (t.child = e));
}
function nd(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (br(i, r) && e.ref === t.ref)
      if (((Ve = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0)) e.flags & 131072 && (Ve = !0);
      else return ((t.lanes = e.lanes), jt(e, t, l));
  }
  return ou(e, t, n, r, l);
}
function rd(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ie(qn, Xe),
        (Xe |= n));
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
          (t.updateQueue = null),
          ie(qn, Xe),
          (Xe |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        ie(qn, Xe),
        (Xe |= r));
    }
  else
    (i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ie(qn, Xe),
      (Xe |= r));
  return (Ie(e, t, l, n), t.child);
}
function ld(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ou(e, t, n, r, l) {
  var i = Qe(n) ? Pn : ze.current;
  return (
    (i = or(t, i)),
    rr(t, l),
    (n = ea(e, t, n, r, i, l)),
    (r = ta()),
    e !== null && !Ve
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), jt(e, t, l))
      : (se && r && Hu(t), (t.flags |= 1), Ie(e, t, n, l), t.child)
  );
}
function Ns(e, t, n, r, l) {
  if (Qe(n)) {
    var i = !0;
    di(t);
  } else i = !1;
  if ((rr(t, l), t.stateNode === null)) (Zl(e, t), bf(t, n, r), lu(t, n, r, l), (r = !0));
  else if (e === null) {
    var o = t.stateNode,
      u = t.memoizedProps;
    o.props = u;
    var a = o.context,
      s = n.contextType;
    typeof s == "object" && s !== null
      ? (s = ot(s))
      : ((s = Qe(n) ? Pn : ze.current), (s = or(t, s)));
    var d = n.getDerivedStateFromProps,
      f = typeof d == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    (f ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== r || a !== s) && Cs(t, o, r, s)),
      (Wt = !1));
    var h = t.memoizedState;
    ((o.state = h),
      yi(t, r, o, l),
      (a = t.memoizedState),
      u !== r || h !== a || We.current || Wt
        ? (typeof d == "function" && (ru(t, n, d, r), (a = t.memoizedState)),
          (u = Wt || xs(t, n, u, r, h, a, s))
            ? (f ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" && o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (o.props = r),
          (o.state = a),
          (o.context = s),
          (r = u))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), (r = !1)));
  } else {
    ((o = t.stateNode),
      Mf(e, t),
      (u = t.memoizedProps),
      (s = t.type === t.elementType ? u : ft(t.type, u)),
      (o.props = s),
      (f = t.pendingProps),
      (h = o.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = ot(a))
        : ((a = Qe(n) ? Pn : ze.current), (a = or(t, a))));
    var w = n.getDerivedStateFromProps;
    ((d = typeof w == "function" || typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== f || h !== a) && Cs(t, o, r, a)),
      (Wt = !1),
      (h = t.memoizedState),
      (o.state = h),
      yi(t, r, o, l));
    var k = t.memoizedState;
    u !== f || h !== k || We.current || Wt
      ? (typeof w == "function" && (ru(t, n, w, r), (k = t.memoizedState)),
        (s = Wt || xs(t, n, s, r, h, k, a) || !1)
          ? (d ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, k, a),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, k, a)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (u === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = k)),
        (o.props = r),
        (o.state = k),
        (o.context = a),
        (r = s))
      : (typeof o.componentDidUpdate != "function" ||
          (u === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return uu(e, t, n, r, i, l);
}
function uu(e, t, n, r, l, i) {
  ld(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return (l && ms(t, n, !1), jt(e, t, i));
  ((r = t.stateNode), (cm.current = t));
  var u = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = ar(t, e.child, null, i)), (t.child = ar(t, null, u, i)))
      : Ie(e, t, u, i),
    (t.memoizedState = r.state),
    l && ms(t, n, !0),
    t.child
  );
}
function id(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? hs(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && hs(e, t.context, !1),
    Ju(e, t.containerInfo));
}
function Ds(e, t, n, r, l) {
  return (ur(), Wu(l), (t.flags |= 256), Ie(e, t, n, r), t.child);
}
var au = { dehydrated: null, treeContext: null, retryLane: 0 };
function su(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function od(e, t, n) {
  var r = t.pendingProps,
    l = ce.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    u;
  if (
    ((u = o) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u ? ((i = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (l |= 1),
    ie(ce, l & 1),
    e === null)
  )
    return (
      tu(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1 ? (e.data === "$!" ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = Bi(o, r, 0, null)),
              (e = Cn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = su(n)),
              (t.memoizedState = au),
              e)
            : la(t, o))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return fm(e, t, o, r, u, l, n);
  if (i) {
    ((i = r.fallback), (o = t.mode), (l = e.child), (u = l.sibling));
    var a = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== l
        ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = a), (t.deletions = null))
        : ((r = rn(l, a)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (i = rn(u, i)) : ((i = Cn(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? su(n)
          : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = au),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = rn(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function la(e, t) {
  return (
    (t = Bi({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Ul(e, t, n, r) {
  return (
    r !== null && Wu(r),
    ar(t, e.child, null, n),
    (e = la(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function fm(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = So(Error(_(422)))), Ul(e, t, o, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (l = t.mode),
          (r = Bi({ mode: "visible", children: r.children }, l, 0, null)),
          (i = Cn(i, l, o, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && ar(t, e.child, null, o),
          (t.child.memoizedState = su(o)),
          (t.memoizedState = au),
          i);
  if (!(t.mode & 1)) return Ul(e, t, o, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return ((r = u), (i = Error(_(419))), (r = So(i, r, void 0)), Ul(e, t, o, r));
  }
  if (((u = (o & e.childLanes) !== 0), Ve || u)) {
    if (((r = Ce), r !== null)) {
      switch (o & -o) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      ((l = l & (r.suspendedLanes | o) ? 0 : l),
        l !== 0 && l !== i.retryLane && ((i.retryLane = l), Ot(e, l), vt(r, e, l, -1)));
    }
    return (ca(), (r = So(Error(_(421)))), Ul(e, t, o, r));
  }
  return l.data === "$?"
    ? ((t.flags |= 128), (t.child = e.child), (t = Cm.bind(null, e)), (l._reactRetry = t), null)
    : ((e = i.treeContext),
      (Je = bt(l.nextSibling)),
      (Ze = t),
      (se = !0),
      (ht = null),
      e !== null &&
        ((nt[rt++] = Lt),
        (nt[rt++] = Tt),
        (nt[rt++] = _n),
        (Lt = e.id),
        (Tt = e.overflow),
        (_n = t)),
      (t = la(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Ms(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  (r !== null && (r.lanes |= t), nu(e.return, t, n));
}
function Eo(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = l));
}
function ud(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((Ie(e, t, r.children, n), (r = ce.current), r & 2)) ((r = (r & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ms(e, n, t);
        else if (e.tag === 19) Ms(e, n, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    r &= 1;
  }
  if ((ie(ce, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          ((e = n.alternate), e !== null && gi(e) === null && (l = n), (n = n.sibling));
        ((n = l),
          n === null ? ((l = t.child), (t.child = null)) : ((l = n.sibling), (n.sibling = null)),
          Eo(t, !1, l, n, i));
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && gi(e) === null)) {
            t.child = l;
            break;
          }
          ((e = l.sibling), (l.sibling = n), (n = l), (l = e));
        }
        Eo(t, !0, n, null, i);
        break;
      case "together":
        Eo(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Zl(e, t) {
  !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function jt(e, t, n) {
  if ((e !== null && (t.dependencies = e.dependencies), (Ln |= t.lanes), !(n & t.childLanes)))
    return null;
  if (e !== null && t.child !== e.child) throw Error(_(153));
  if (t.child !== null) {
    for (e = t.child, n = rn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      ((e = e.sibling), (n = n.sibling = rn(e, e.pendingProps)), (n.return = t));
    n.sibling = null;
  }
  return t.child;
}
function dm(e, t, n) {
  switch (t.tag) {
    case 3:
      (id(t), ur());
      break;
    case 5:
      zf(t);
      break;
    case 1:
      Qe(t.type) && di(t);
      break;
    case 4:
      Ju(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      (ie(mi, r._currentValue), (r._currentValue = l));
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ie(ce, ce.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? od(e, t, n)
            : (ie(ce, ce.current & 1), (e = jt(e, t, n)), e !== null ? e.sibling : null);
      ie(ce, ce.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return ud(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null && ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        ie(ce, ce.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), rd(e, t, n));
  }
  return jt(e, t, n);
}
var ad, cu, sd, cd;
ad = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      ((n.child.return = n), (n = n.child));
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    ((n.sibling.return = n.return), (n = n.sibling));
  }
};
cu = function () {};
sd = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    ((e = t.stateNode), En(xt.current));
    var i = null;
    switch (n) {
      case "input":
        ((l = Mo(e, l)), (r = Mo(e, r)), (i = []));
        break;
      case "select":
        ((l = de({}, l, { value: void 0 })), (r = de({}, r, { value: void 0 })), (i = []));
        break;
      case "textarea":
        ((l = jo(e, l)), (r = jo(e, r)), (i = []));
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ci);
    }
    Io(n, r);
    var o;
    n = null;
    for (s in l)
      if (!r.hasOwnProperty(s) && l.hasOwnProperty(s) && l[s] != null)
        if (s === "style") {
          var u = l[s];
          for (o in u) u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          s !== "dangerouslySetInnerHTML" &&
            s !== "children" &&
            s !== "suppressContentEditableWarning" &&
            s !== "suppressHydrationWarning" &&
            s !== "autoFocus" &&
            (Kr.hasOwnProperty(s) ? i || (i = []) : (i = i || []).push(s, null));
    for (s in r) {
      var a = r[s];
      if (
        ((u = l != null ? l[s] : void 0),
        r.hasOwnProperty(s) && a !== u && (a != null || u != null))
      )
        if (s === "style")
          if (u) {
            for (o in u)
              !u.hasOwnProperty(o) || (a && a.hasOwnProperty(o)) || (n || (n = {}), (n[o] = ""));
            for (o in a) a.hasOwnProperty(o) && u[o] !== a[o] && (n || (n = {}), (n[o] = a[o]));
          } else (n || (i || (i = []), i.push(s, n)), (n = a));
        else
          s === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (u = u ? u.__html : void 0),
              a != null && u !== a && (i = i || []).push(s, a))
            : s === "children"
              ? (typeof a != "string" && typeof a != "number") || (i = i || []).push(s, "" + a)
              : s !== "suppressContentEditableWarning" &&
                s !== "suppressHydrationWarning" &&
                (Kr.hasOwnProperty(s)
                  ? (a != null && s === "onScroll" && oe("scroll", e), i || u === a || (i = []))
                  : (i = i || []).push(s, a));
    }
    n && (i = i || []).push("style", n);
    var s = i;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
cd = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Rr(e, t) {
  if (!se)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; ) (t.alternate !== null && (n = t), (t = t.sibling));
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; ) (n.alternate !== null && (r = n), (n = n.sibling));
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function De(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      ((n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling));
  else
    for (l = e.child; l !== null; )
      ((n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling));
  return ((e.subtreeFlags |= r), (e.childLanes = n), t);
}
function pm(e, t, n) {
  var r = t.pendingProps;
  switch ((Vu(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return (De(t), null);
    case 1:
      return (Qe(t.type) && fi(), De(t), null);
    case 3:
      return (
        (r = t.stateNode),
        sr(),
        ue(We),
        ue(ze),
        qu(),
        r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Fl(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), ht !== null && (gu(ht), (ht = null)))),
        cu(e, t),
        De(t),
        null
      );
    case 5:
      Zu(t);
      var l = En(ll.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        (sd(e, t, n, r, l), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(_(166));
          return (De(t), null);
        }
        if (((e = En(xt.current)), Fl(t))) {
          ((r = t.stateNode), (n = t.type));
          var i = t.memoizedProps;
          switch (((r[Et] = t), (r[nl] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              (oe("cancel", r), oe("close", r));
              break;
            case "iframe":
            case "object":
            case "embed":
              oe("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < jr.length; l++) oe(jr[l], r);
              break;
            case "source":
              oe("error", r);
              break;
            case "img":
            case "image":
            case "link":
              (oe("error", r), oe("load", r));
              break;
            case "details":
              oe("toggle", r);
              break;
            case "input":
              ($a(r, i), oe("invalid", r));
              break;
            case "select":
              ((r._wrapperState = { wasMultiple: !!i.multiple }), oe("invalid", r));
              break;
            case "textarea":
              (Va(r, i), oe("invalid", r));
          }
          (Io(n, i), (l = null));
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var u = i[o];
              o === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (i.suppressHydrationWarning !== !0 && jl(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (i.suppressHydrationWarning !== !0 && jl(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : Kr.hasOwnProperty(o) && u != null && o === "onScroll" && oe("scroll", r);
            }
          switch (n) {
            case "input":
              (Rl(r), Ha(r, i, !0));
              break;
            case "textarea":
              (Rl(r), Wa(r));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = ci);
          }
          ((r = l), (t.updateQueue = r), r !== null && (t.flags |= 4));
        } else {
          ((o = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Ic(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = o.createElement(n, { is: r.is }))
                  : ((e = o.createElement(n)),
                    n === "select" &&
                      ((o = e), r.multiple ? (o.multiple = !0) : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[Et] = t),
            (e[nl] = r),
            ad(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((o = Uo(n, r)), n)) {
              case "dialog":
                (oe("cancel", e), oe("close", e), (l = r));
                break;
              case "iframe":
              case "object":
              case "embed":
                (oe("load", e), (l = r));
                break;
              case "video":
              case "audio":
                for (l = 0; l < jr.length; l++) oe(jr[l], e);
                l = r;
                break;
              case "source":
                (oe("error", e), (l = r));
                break;
              case "img":
              case "image":
              case "link":
                (oe("error", e), oe("load", e), (l = r));
                break;
              case "details":
                (oe("toggle", e), (l = r));
                break;
              case "input":
                ($a(e, r), (l = Mo(e, r)), oe("invalid", e));
                break;
              case "option":
                l = r;
                break;
              case "select":
                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = de({}, r, { value: void 0 })),
                  oe("invalid", e));
                break;
              case "textarea":
                (Va(e, r), (l = jo(e, r)), oe("invalid", e));
                break;
              default:
                l = r;
            }
            (Io(n, l), (u = l));
            for (i in u)
              if (u.hasOwnProperty(i)) {
                var a = u[i];
                i === "style"
                  ? Bc(e, a)
                  : i === "dangerouslySetInnerHTML"
                    ? ((a = a ? a.__html : void 0), a != null && Uc(e, a))
                    : i === "children"
                      ? typeof a == "string"
                        ? (n !== "textarea" || a !== "") && Yr(e, a)
                        : typeof a == "number" && Yr(e, "" + a)
                      : i !== "suppressContentEditableWarning" &&
                        i !== "suppressHydrationWarning" &&
                        i !== "autoFocus" &&
                        (Kr.hasOwnProperty(i)
                          ? a != null && i === "onScroll" && oe("scroll", e)
                          : a != null && Lu(e, i, a, o));
              }
            switch (n) {
              case "input":
                (Rl(e), Ha(e, r, !1));
                break;
              case "textarea":
                (Rl(e), Wa(e));
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + ln(r.value));
                break;
              case "select":
                ((e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? bn(e, !!r.multiple, i, !1)
                    : r.defaultValue != null && bn(e, !!r.multiple, r.defaultValue, !0));
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = ci);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return (De(t), null);
    case 6:
      if (e && t.stateNode != null) cd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(_(166));
        if (((n = En(ll.current)), En(xt.current), Fl(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Et] = t),
            (i = r.nodeValue !== n) && ((e = Ze), e !== null))
          )
            switch (e.tag) {
              case 3:
                jl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  jl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Et] = t),
            (t.stateNode = r));
      }
      return (De(t), null);
    case 13:
      if (
        (ue(ce),
        (r = t.memoizedState),
        e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (se && Je !== null && t.mode & 1 && !(t.flags & 128))
          (Lf(), ur(), (t.flags |= 98560), (i = !1));
        else if (((i = Fl(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(_(318));
            if (((i = t.memoizedState), (i = i !== null ? i.dehydrated : null), !i))
              throw Error(_(317));
            i[Et] = t;
          } else (ur(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4));
          (De(t), (i = !1));
        } else (ht !== null && (gu(ht), (ht = null)), (i = !0));
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 && (e === null || ce.current & 1 ? ke === 0 && (ke = 3) : ca())),
          t.updateQueue !== null && (t.flags |= 4),
          De(t),
          null);
    case 4:
      return (sr(), cu(e, t), e === null && el(t.stateNode.containerInfo), De(t), null);
    case 10:
      return (Yu(t.type._context), De(t), null);
    case 17:
      return (Qe(t.type) && fi(), De(t), null);
    case 19:
      if ((ue(ce), (i = t.memoizedState), i === null)) return (De(t), null);
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) Rr(i, !1);
        else {
          if (ke !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = gi(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    Rr(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  ((i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                    (n = n.sibling));
                return (ie(ce, (ce.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          i.tail !== null &&
            ve() > fr &&
            ((t.flags |= 128), (r = !0), Rr(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = gi(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Rr(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !se)
            )
              return (De(t), null);
          } else
            2 * ve() - i.renderingStartTime > fr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Rr(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last), n !== null ? (n.sibling = o) : (t.child = o), (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = ve()),
          (t.sibling = null),
          (n = ce.current),
          ie(ce, r ? (n & 1) | 2 : n & 1),
          t)
        : (De(t), null);
    case 22:
    case 23:
      return (
        sa(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Xe & 1073741824 && (De(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : De(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(_(156, t.tag));
}
function hm(e, t) {
  switch ((Vu(t), t.tag)) {
    case 1:
      return (
        Qe(t.type) && fi(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        sr(),
        ue(We),
        ue(ze),
        qu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return (Zu(t), null);
    case 13:
      if ((ue(ce), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(_(340));
        ur();
      }
      return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
    case 19:
      return (ue(ce), null);
    case 4:
      return (sr(), null);
    case 10:
      return (Yu(t.type._context), null);
    case 22:
    case 23:
      return (sa(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var Al = !1,
  Me = !1,
  mm = typeof WeakSet == "function" ? WeakSet : Set,
  z = null;
function Zn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        me(e, t, r);
      }
    else n.current = null;
}
function fu(e, t, n) {
  try {
    n();
  } catch (r) {
    me(e, t, r);
  }
}
var zs = !1;
function vm(e, t) {
  if (((Xo = ui), (e = mf()), $u(e))) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            (n.nodeType, i.nodeType);
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            u = -1,
            a = -1,
            s = 0,
            d = 0,
            f = e,
            h = null;
          t: for (;;) {
            for (
              var w;
              f !== n || (l !== 0 && f.nodeType !== 3) || (u = o + l),
                f !== i || (r !== 0 && f.nodeType !== 3) || (a = o + r),
                f.nodeType === 3 && (o += f.nodeValue.length),
                (w = f.firstChild) !== null;

            )
              ((h = f), (f = w));
            for (;;) {
              if (f === e) break t;
              if (
                (h === n && ++s === l && (u = o),
                h === i && ++d === r && (a = o),
                (w = f.nextSibling) !== null)
              )
                break;
              ((f = h), (h = f.parentNode));
            }
            f = w;
          }
          n = u === -1 || a === -1 ? null : { start: u, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Go = { focusedElem: e, selectionRange: n }, ui = !1, z = t; z !== null; )
    if (((t = z), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (z = e));
    else
      for (; z !== null; ) {
        t = z;
        try {
          var k = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (k !== null) {
                  var E = k.memoizedProps,
                    D = k.memoizedState,
                    m = t.stateNode,
                    c = m.getSnapshotBeforeUpdate(t.elementType === t.type ? E : ft(t.type, E), D);
                  m.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var v = t.stateNode.containerInfo;
                v.nodeType === 1
                  ? (v.textContent = "")
                  : v.nodeType === 9 && v.documentElement && v.removeChild(v.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(_(163));
            }
        } catch (x) {
          me(t, t.return, x);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (z = e));
          break;
        }
        z = t.return;
      }
  return ((k = zs), (zs = !1), k);
}
function Vr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        ((l.destroy = void 0), i !== void 0 && fu(t, n, i));
      }
      l = l.next;
    } while (l !== r);
  }
}
function Ui(e, t) {
  if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function du(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function fd(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), fd(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null && (delete t[Et], delete t[nl], delete t[qo], delete t[qh], delete t[bh])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function dd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Os(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || dd(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      ((e.child.return = e), (e = e.child));
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function pu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = ci)));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (pu(e, t, n), e = e.sibling; e !== null; ) (pu(e, t, n), (e = e.sibling));
}
function hu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (hu(e, t, n), e = e.sibling; e !== null; ) (hu(e, t, n), (e = e.sibling));
}
var Re = null,
  dt = !1;
function $t(e, t, n) {
  for (n = n.child; n !== null; ) (pd(e, t, n), (n = n.sibling));
}
function pd(e, t, n) {
  if (kt && typeof kt.onCommitFiberUnmount == "function")
    try {
      kt.onCommitFiberUnmount(Ni, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Me || Zn(n, t);
    case 6:
      var r = Re,
        l = dt;
      ((Re = null),
        $t(e, t, n),
        (Re = r),
        (dt = l),
        Re !== null &&
          (dt
            ? ((e = Re),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Re.removeChild(n.stateNode)));
      break;
    case 18:
      Re !== null &&
        (dt
          ? ((e = Re),
            (n = n.stateNode),
            e.nodeType === 8 ? ho(e.parentNode, n) : e.nodeType === 1 && ho(e, n),
            Zr(e))
          : ho(Re, n.stateNode));
      break;
    case 4:
      ((r = Re),
        (l = dt),
        (Re = n.stateNode.containerInfo),
        (dt = !0),
        $t(e, t, n),
        (Re = r),
        (dt = l));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Me && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
        l = r = r.next;
        do {
          var i = l,
            o = i.destroy;
          ((i = i.tag), o !== void 0 && (i & 2 || i & 4) && fu(n, t, o), (l = l.next));
        } while (l !== r);
      }
      $t(e, t, n);
      break;
    case 1:
      if (!Me && (Zn(n, t), (r = n.stateNode), typeof r.componentWillUnmount == "function"))
        try {
          ((r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount());
        } catch (u) {
          me(n, t, u);
        }
      $t(e, t, n);
      break;
    case 21:
      $t(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Me = (r = Me) || n.memoizedState !== null), $t(e, t, n), (Me = r))
        : $t(e, t, n);
      break;
    default:
      $t(e, t, n);
  }
}
function js(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    (n === null && (n = e.stateNode = new mm()),
      t.forEach(function (r) {
        var l = Pm.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      }));
  }
}
function ct(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e,
          o = t,
          u = o;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              ((Re = u.stateNode), (dt = !1));
              break e;
            case 3:
              ((Re = u.stateNode.containerInfo), (dt = !0));
              break e;
            case 4:
              ((Re = u.stateNode.containerInfo), (dt = !0));
              break e;
          }
          u = u.return;
        }
        if (Re === null) throw Error(_(160));
        (pd(i, o, l), (Re = null), (dt = !1));
        var a = l.alternate;
        (a !== null && (a.return = null), (l.return = null));
      } catch (s) {
        me(l, t, s);
      }
    }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) (hd(t, e), (t = t.sibling));
}
function hd(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ct(t, e), wt(e), r & 4)) {
        try {
          (Vr(3, e, e.return), Ui(3, e));
        } catch (E) {
          me(e, e.return, E);
        }
        try {
          Vr(5, e, e.return);
        } catch (E) {
          me(e, e.return, E);
        }
      }
      break;
    case 1:
      (ct(t, e), wt(e), r & 512 && n !== null && Zn(n, n.return));
      break;
    case 5:
      if ((ct(t, e), wt(e), r & 512 && n !== null && Zn(n, n.return), e.flags & 32)) {
        var l = e.stateNode;
        try {
          Yr(l, "");
        } catch (E) {
          me(e, e.return, E);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          u = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            (u === "input" && i.type === "radio" && i.name != null && jc(l, i), Uo(u, o));
            var s = Uo(u, i);
            for (o = 0; o < a.length; o += 2) {
              var d = a[o],
                f = a[o + 1];
              d === "style"
                ? Bc(l, f)
                : d === "dangerouslySetInnerHTML"
                  ? Uc(l, f)
                  : d === "children"
                    ? Yr(l, f)
                    : Lu(l, d, f, s);
            }
            switch (u) {
              case "input":
                zo(l, i);
                break;
              case "textarea":
                Fc(l, i);
                break;
              case "select":
                var h = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var w = i.value;
                w != null
                  ? bn(l, !!i.multiple, w, !1)
                  : h !== !!i.multiple &&
                    (i.defaultValue != null
                      ? bn(l, !!i.multiple, i.defaultValue, !0)
                      : bn(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[nl] = i;
          } catch (E) {
            me(e, e.return, E);
          }
      }
      break;
    case 6:
      if ((ct(t, e), wt(e), r & 4)) {
        if (e.stateNode === null) throw Error(_(162));
        ((l = e.stateNode), (i = e.memoizedProps));
        try {
          l.nodeValue = i;
        } catch (E) {
          me(e, e.return, E);
        }
      }
      break;
    case 3:
      if ((ct(t, e), wt(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
        try {
          Zr(t.containerInfo);
        } catch (E) {
          me(e, e.return, E);
        }
      break;
    case 4:
      (ct(t, e), wt(e));
      break;
    case 13:
      (ct(t, e),
        wt(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i || (l.alternate !== null && l.alternate.memoizedState !== null) || (ua = ve())),
        r & 4 && js(e));
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Me = (s = Me) || d), ct(t, e), (Me = s)) : ct(t, e),
        wt(e),
        r & 8192)
      ) {
        if (((s = e.memoizedState !== null), (e.stateNode.isHidden = s) && !d && e.mode & 1))
          for (z = e, d = e.child; d !== null; ) {
            for (f = z = d; z !== null; ) {
              switch (((h = z), (w = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Vr(4, h, h.return);
                  break;
                case 1:
                  Zn(h, h.return);
                  var k = h.stateNode;
                  if (typeof k.componentWillUnmount == "function") {
                    ((r = h), (n = h.return));
                    try {
                      ((t = r),
                        (k.props = t.memoizedProps),
                        (k.state = t.memoizedState),
                        k.componentWillUnmount());
                    } catch (E) {
                      me(r, n, E);
                    }
                  }
                  break;
                case 5:
                  Zn(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    Is(f);
                    continue;
                  }
              }
              w !== null ? ((w.return = h), (z = w)) : Is(f);
            }
            d = d.sibling;
          }
        e: for (d = null, f = e; ; ) {
          if (f.tag === 5) {
            if (d === null) {
              d = f;
              try {
                ((l = f.stateNode),
                  s
                    ? ((i = l.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((u = f.stateNode),
                      (a = f.memoizedProps.style),
                      (o = a != null && a.hasOwnProperty("display") ? a.display : null),
                      (u.style.display = Ac("display", o))));
              } catch (E) {
                me(e, e.return, E);
              }
            }
          } else if (f.tag === 6) {
            if (d === null)
              try {
                f.stateNode.nodeValue = s ? "" : f.memoizedProps;
              } catch (E) {
                me(e, e.return, E);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) || f.memoizedState === null || f === e) &&
            f.child !== null
          ) {
            ((f.child.return = f), (f = f.child));
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            (d === f && (d = null), (f = f.return));
          }
          (d === f && (d = null), (f.sibling.return = f.return), (f = f.sibling));
        }
      }
      break;
    case 19:
      (ct(t, e), wt(e), r & 4 && js(e));
      break;
    case 21:
      break;
    default:
      (ct(t, e), wt(e));
  }
}
function wt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (dd(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(_(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Yr(l, ""), (r.flags &= -33));
          var i = Os(e);
          hu(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            u = Os(e);
          pu(e, u, o);
          break;
        default:
          throw Error(_(161));
      }
    } catch (a) {
      me(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function ym(e, t, n) {
  ((z = e), md(e));
}
function md(e, t, n) {
  for (var r = (e.mode & 1) !== 0; z !== null; ) {
    var l = z,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || Al;
      if (!o) {
        var u = l.alternate,
          a = (u !== null && u.memoizedState !== null) || Me;
        u = Al;
        var s = Me;
        if (((Al = o), (Me = a) && !s))
          for (z = l; z !== null; )
            ((o = z),
              (a = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Us(l)
                : a !== null
                  ? ((a.return = o), (z = a))
                  : Us(l));
        for (; i !== null; ) ((z = i), md(i), (i = i.sibling));
        ((z = l), (Al = u), (Me = s));
      }
      Fs(e);
    } else l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (z = i)) : Fs(e);
  }
}
function Fs(e) {
  for (; z !== null; ) {
    var t = z;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Me || Ui(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Me)
                if (n === null) r.componentDidMount();
                else {
                  var l = t.elementType === t.type ? n.memoizedProps : ft(t.type, n.memoizedProps);
                  r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var i = t.updateQueue;
              i !== null && Ss(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Ss(t, o, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var s = t.alternate;
                if (s !== null) {
                  var d = s.memoizedState;
                  if (d !== null) {
                    var f = d.dehydrated;
                    f !== null && Zr(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(_(163));
          }
        Me || (t.flags & 512 && du(t));
      } catch (h) {
        me(t, t.return, h);
      }
    }
    if (t === e) {
      z = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      ((n.return = t.return), (z = n));
      break;
    }
    z = t.return;
  }
}
function Is(e) {
  for (; z !== null; ) {
    var t = z;
    if (t === e) {
      z = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      ((n.return = t.return), (z = n));
      break;
    }
    z = t.return;
  }
}
function Us(e) {
  for (; z !== null; ) {
    var t = z;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ui(4, t);
          } catch (a) {
            me(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              me(t, l, a);
            }
          }
          var i = t.return;
          try {
            du(t);
          } catch (a) {
            me(t, i, a);
          }
          break;
        case 5:
          var o = t.return;
          try {
            du(t);
          } catch (a) {
            me(t, o, a);
          }
      }
    } catch (a) {
      me(t, t.return, a);
    }
    if (t === e) {
      z = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      ((u.return = t.return), (z = u));
      break;
    }
    z = t.return;
  }
}
var gm = Math.ceil,
  Ei = Ft.ReactCurrentDispatcher,
  ia = Ft.ReactCurrentOwner,
  it = Ft.ReactCurrentBatchConfig,
  G = 0,
  Ce = null,
  we = null,
  Le = 0,
  Xe = 0,
  qn = an(0),
  ke = 0,
  al = null,
  Ln = 0,
  Ai = 0,
  oa = 0,
  Wr = null,
  He = null,
  ua = 0,
  fr = 1 / 0,
  _t = null,
  ki = !1,
  mu = null,
  tn = null,
  Bl = !1,
  Xt = null,
  xi = 0,
  Qr = 0,
  vu = null,
  ql = -1,
  bl = 0;
function Ue() {
  return G & 6 ? ve() : ql !== -1 ? ql : (ql = ve());
}
function nn(e) {
  return e.mode & 1
    ? G & 2 && Le !== 0
      ? Le & -Le
      : tm.transition !== null
        ? (bl === 0 && (bl = qc()), bl)
        : ((e = b), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : of(e.type))), e)
    : 1;
}
function vt(e, t, n, r) {
  if (50 < Qr) throw ((Qr = 0), (vu = null), Error(_(185)));
  (pl(e, n, r),
    (!(G & 2) || e !== Ce) &&
      (e === Ce && (!(G & 2) && (Ai |= n), ke === 4 && Kt(e, Le)),
      Ke(e, r),
      n === 1 && G === 0 && !(t.mode & 1) && ((fr = ve() + 500), ji && sn())));
}
function Ke(e, t) {
  var n = e.callbackNode;
  th(e, t);
  var r = oi(e, e === Ce ? Le : 0);
  if (r === 0) (n !== null && Ya(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Ya(n), t === 1))
      (e.tag === 0 ? em(As.bind(null, e)) : Pf(As.bind(null, e)),
        Jh(function () {
          !(G & 6) && sn();
        }),
        (n = null));
    else {
      switch (bc(r)) {
        case 1:
          n = zu;
          break;
        case 4:
          n = Jc;
          break;
        case 16:
          n = ii;
          break;
        case 536870912:
          n = Zc;
          break;
        default:
          n = ii;
      }
      n = xd(n, vd.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = n));
  }
}
function vd(e, t) {
  if (((ql = -1), (bl = 0), G & 6)) throw Error(_(327));
  var n = e.callbackNode;
  if (lr() && e.callbackNode !== n) return null;
  var r = oi(e, e === Ce ? Le : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ci(e, r);
  else {
    t = r;
    var l = G;
    G |= 2;
    var i = gd();
    (Ce !== e || Le !== t) && ((_t = null), (fr = ve() + 500), xn(e, t));
    do
      try {
        Em();
        break;
      } catch (u) {
        yd(e, u);
      }
    while (!0);
    (Ku(), (Ei.current = i), (G = l), we !== null ? (t = 0) : ((Ce = null), (Le = 0), (t = ke)));
  }
  if (t !== 0) {
    if ((t === 2 && ((l = Vo(e)), l !== 0 && ((r = l), (t = yu(e, l)))), t === 1))
      throw ((n = al), xn(e, 0), Kt(e, r), Ke(e, ve()), n);
    if (t === 6) Kt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !wm(l) &&
          ((t = Ci(e, r)), t === 2 && ((i = Vo(e)), i !== 0 && ((r = i), (t = yu(e, i)))), t === 1))
      )
        throw ((n = al), xn(e, 0), Kt(e, r), Ke(e, ve()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(_(345));
        case 2:
          vn(e, He, _t);
          break;
        case 3:
          if ((Kt(e, r), (r & 130023424) === r && ((t = ua + 500 - ve()), 10 < t))) {
            if (oi(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              (Ue(), (e.pingedLanes |= e.suspendedLanes & l));
              break;
            }
            e.timeoutHandle = Zo(vn.bind(null, e, He, _t), t);
            break;
          }
          vn(e, He, _t);
          break;
        case 4:
          if ((Kt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - mt(r);
            ((i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i));
          }
          if (
            ((r = l),
            (r = ve() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * gm(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Zo(vn.bind(null, e, He, _t), r);
            break;
          }
          vn(e, He, _t);
          break;
        case 5:
          vn(e, He, _t);
          break;
        default:
          throw Error(_(329));
      }
    }
  }
  return (Ke(e, ve()), e.callbackNode === n ? vd.bind(null, e) : null);
}
function yu(e, t) {
  var n = Wr;
  return (
    e.current.memoizedState.isDehydrated && (xn(e, t).flags |= 256),
    (e = Ci(e, t)),
    e !== 2 && ((t = He), (He = n), t !== null && gu(t)),
    e
  );
}
function gu(e) {
  He === null ? (He = e) : He.push.apply(He, e);
}
function wm(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!yt(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) ((n.return = t), (t = n));
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
  }
  return !0;
}
function Kt(e, t) {
  for (
    t &= ~oa, t &= ~Ai, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - mt(t),
      r = 1 << n;
    ((e[n] = -1), (t &= ~r));
  }
}
function As(e) {
  if (G & 6) throw Error(_(327));
  lr();
  var t = oi(e, 0);
  if (!(t & 1)) return (Ke(e, ve()), null);
  var n = Ci(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Vo(e);
    r !== 0 && ((t = r), (n = yu(e, r)));
  }
  if (n === 1) throw ((n = al), xn(e, 0), Kt(e, t), Ke(e, ve()), n);
  if (n === 6) throw Error(_(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    vn(e, He, _t),
    Ke(e, ve()),
    null
  );
}
function aa(e, t) {
  var n = G;
  G |= 1;
  try {
    return e(t);
  } finally {
    ((G = n), G === 0 && ((fr = ve() + 500), ji && sn()));
  }
}
function Tn(e) {
  Xt !== null && Xt.tag === 0 && !(G & 6) && lr();
  var t = G;
  G |= 1;
  var n = it.transition,
    r = b;
  try {
    if (((it.transition = null), (b = 1), e)) return e();
  } finally {
    ((b = r), (it.transition = n), (G = t), !(G & 6) && sn());
  }
}
function sa() {
  ((Xe = qn.current), ue(qn));
}
function xn(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Gh(n)), we !== null))
    for (n = we.return; n !== null; ) {
      var r = n;
      switch ((Vu(r), r.tag)) {
        case 1:
          ((r = r.type.childContextTypes), r != null && fi());
          break;
        case 3:
          (sr(), ue(We), ue(ze), qu());
          break;
        case 5:
          Zu(r);
          break;
        case 4:
          sr();
          break;
        case 13:
          ue(ce);
          break;
        case 19:
          ue(ce);
          break;
        case 10:
          Yu(r.type._context);
          break;
        case 22:
        case 23:
          sa();
      }
      n = n.return;
    }
  if (
    ((Ce = e),
    (we = e = rn(e.current, null)),
    (Le = Xe = t),
    (ke = 0),
    (al = null),
    (oa = Ai = Ln = 0),
    (He = Wr = null),
    Sn !== null)
  ) {
    for (t = 0; t < Sn.length; t++)
      if (((n = Sn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          ((i.next = l), (r.next = o));
        }
        n.pending = r;
      }
    Sn = null;
  }
  return e;
}
function yd(e, t) {
  do {
    var n = we;
    try {
      if ((Ku(), (Gl.current = Si), wi)) {
        for (var r = fe.memoizedState; r !== null; ) {
          var l = r.queue;
          (l !== null && (l.pending = null), (r = r.next));
        }
        wi = !1;
      }
      if (
        ((Rn = 0),
        (xe = Ee = fe = null),
        (Hr = !1),
        (il = 0),
        (ia.current = null),
        n === null || n.return === null)
      ) {
        ((ke = 1), (al = t), (we = null));
        break;
      }
      e: {
        var i = e,
          o = n.return,
          u = n,
          a = t;
        if (
          ((t = Le),
          (u.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var s = a,
            d = u,
            f = d.tag;
          if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var h = d.alternate;
            h
              ? ((d.updateQueue = h.updateQueue),
                (d.memoizedState = h.memoizedState),
                (d.lanes = h.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var w = _s(o);
          if (w !== null) {
            ((w.flags &= -257), Rs(w, o, u, i, t), w.mode & 1 && Ps(i, s, t), (t = w), (a = s));
            var k = t.updateQueue;
            if (k === null) {
              var E = new Set();
              (E.add(a), (t.updateQueue = E));
            } else k.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              (Ps(i, s, t), ca());
              break e;
            }
            a = Error(_(426));
          }
        } else if (se && u.mode & 1) {
          var D = _s(o);
          if (D !== null) {
            (!(D.flags & 65536) && (D.flags |= 256), Rs(D, o, u, i, t), Wu(cr(a, u)));
            break e;
          }
        }
        ((i = a = cr(a, u)), ke !== 4 && (ke = 2), Wr === null ? (Wr = [i]) : Wr.push(i), (i = o));
        do {
          switch (i.tag) {
            case 3:
              ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
              var m = ed(i, a, t);
              ws(i, m);
              break e;
            case 1:
              u = a;
              var c = i.type,
                v = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (v !== null &&
                    typeof v.componentDidCatch == "function" &&
                    (tn === null || !tn.has(v))))
              ) {
                ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
                var x = td(i, u, t);
                ws(i, x);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Sd(n);
    } catch (L) {
      ((t = L), we === n && n !== null && (we = n = n.return));
      continue;
    }
    break;
  } while (!0);
}
function gd() {
  var e = Ei.current;
  return ((Ei.current = Si), e === null ? Si : e);
}
function ca() {
  ((ke === 0 || ke === 3 || ke === 2) && (ke = 4),
    Ce === null || (!(Ln & 268435455) && !(Ai & 268435455)) || Kt(Ce, Le));
}
function Ci(e, t) {
  var n = G;
  G |= 2;
  var r = gd();
  (Ce !== e || Le !== t) && ((_t = null), xn(e, t));
  do
    try {
      Sm();
      break;
    } catch (l) {
      yd(e, l);
    }
  while (!0);
  if ((Ku(), (G = n), (Ei.current = r), we !== null)) throw Error(_(261));
  return ((Ce = null), (Le = 0), ke);
}
function Sm() {
  for (; we !== null; ) wd(we);
}
function Em() {
  for (; we !== null && !Kp(); ) wd(we);
}
function wd(e) {
  var t = kd(e.alternate, e, Xe);
  ((e.memoizedProps = e.pendingProps), t === null ? Sd(e) : (we = t), (ia.current = null));
}
function Sd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = hm(n, t)), n !== null)) {
        ((n.flags &= 32767), (we = n));
        return;
      }
      if (e !== null) ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((ke = 6), (we = null));
        return;
      }
    } else if (((n = pm(n, t, Xe)), n !== null)) {
      we = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      we = t;
      return;
    }
    we = t = e;
  } while (t !== null);
  ke === 0 && (ke = 5);
}
function vn(e, t, n) {
  var r = b,
    l = it.transition;
  try {
    ((it.transition = null), (b = 1), km(e, t, n, r));
  } finally {
    ((it.transition = l), (b = r));
  }
  return null;
}
function km(e, t, n, r) {
  do lr();
  while (Xt !== null);
  if (G & 6) throw Error(_(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(_(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var i = n.lanes | n.childLanes;
  if (
    (nh(e, i),
    e === Ce && ((we = Ce = null), (Le = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Bl ||
      ((Bl = !0),
      xd(ii, function () {
        return (lr(), null);
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    ((i = it.transition), (it.transition = null));
    var o = b;
    b = 1;
    var u = G;
    ((G |= 4),
      (ia.current = null),
      vm(e, n),
      hd(n, e),
      Hh(Go),
      (ui = !!Xo),
      (Go = Xo = null),
      (e.current = n),
      ym(n),
      Yp(),
      (G = u),
      (b = o),
      (it.transition = i));
  } else e.current = n;
  if (
    (Bl && ((Bl = !1), (Xt = e), (xi = l)),
    (i = e.pendingLanes),
    i === 0 && (tn = null),
    Jp(n.stateNode),
    Ke(e, ve()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      ((l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest }));
  if (ki) throw ((ki = !1), (e = mu), (mu = null), e);
  return (
    xi & 1 && e.tag !== 0 && lr(),
    (i = e.pendingLanes),
    i & 1 ? (e === vu ? Qr++ : ((Qr = 0), (vu = e))) : (Qr = 0),
    sn(),
    null
  );
}
function lr() {
  if (Xt !== null) {
    var e = bc(xi),
      t = it.transition,
      n = b;
    try {
      if (((it.transition = null), (b = 16 > e ? 16 : e), Xt === null)) var r = !1;
      else {
        if (((e = Xt), (Xt = null), (xi = 0), G & 6)) throw Error(_(331));
        var l = G;
        for (G |= 4, z = e.current; z !== null; ) {
          var i = z,
            o = i.child;
          if (z.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var a = 0; a < u.length; a++) {
                var s = u[a];
                for (z = s; z !== null; ) {
                  var d = z;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Vr(8, d, i);
                  }
                  var f = d.child;
                  if (f !== null) ((f.return = d), (z = f));
                  else
                    for (; z !== null; ) {
                      d = z;
                      var h = d.sibling,
                        w = d.return;
                      if ((fd(d), d === s)) {
                        z = null;
                        break;
                      }
                      if (h !== null) {
                        ((h.return = w), (z = h));
                        break;
                      }
                      z = w;
                    }
                }
              }
              var k = i.alternate;
              if (k !== null) {
                var E = k.child;
                if (E !== null) {
                  k.child = null;
                  do {
                    var D = E.sibling;
                    ((E.sibling = null), (E = D));
                  } while (E !== null);
                }
              }
              z = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) ((o.return = i), (z = o));
          else
            e: for (; z !== null; ) {
              if (((i = z), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Vr(9, i, i.return);
                }
              var m = i.sibling;
              if (m !== null) {
                ((m.return = i.return), (z = m));
                break e;
              }
              z = i.return;
            }
        }
        var c = e.current;
        for (z = c; z !== null; ) {
          o = z;
          var v = o.child;
          if (o.subtreeFlags & 2064 && v !== null) ((v.return = o), (z = v));
          else
            e: for (o = c; z !== null; ) {
              if (((u = z), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ui(9, u);
                  }
                } catch (L) {
                  me(u, u.return, L);
                }
              if (u === o) {
                z = null;
                break e;
              }
              var x = u.sibling;
              if (x !== null) {
                ((x.return = u.return), (z = x));
                break e;
              }
              z = u.return;
            }
        }
        if (((G = l), sn(), kt && typeof kt.onPostCommitFiberRoot == "function"))
          try {
            kt.onPostCommitFiberRoot(Ni, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ((b = n), (it.transition = t));
    }
  }
  return !1;
}
function Bs(e, t, n) {
  ((t = cr(n, t)),
    (t = ed(e, t, 1)),
    (e = en(e, t, 1)),
    (t = Ue()),
    e !== null && (pl(e, 1, t), Ke(e, t)));
}
function me(e, t, n) {
  if (e.tag === 3) Bs(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Bs(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" && (tn === null || !tn.has(r)))
        ) {
          ((e = cr(n, e)),
            (e = td(t, e, 1)),
            (t = en(t, e, 1)),
            (e = Ue()),
            t !== null && (pl(t, 1, e), Ke(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function xm(e, t, n) {
  var r = e.pingCache;
  (r !== null && r.delete(t),
    (t = Ue()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Ce === e &&
      (Le & n) === n &&
      (ke === 4 || (ke === 3 && (Le & 130023424) === Le && 500 > ve() - ua) ? xn(e, 0) : (oa |= n)),
    Ke(e, t));
}
function Ed(e, t) {
  t === 0 && (e.mode & 1 ? ((t = Nl), (Nl <<= 1), !(Nl & 130023424) && (Nl = 4194304)) : (t = 1));
  var n = Ue();
  ((e = Ot(e, t)), e !== null && (pl(e, t, n), Ke(e, n)));
}
function Cm(e) {
  var t = e.memoizedState,
    n = 0;
  (t !== null && (n = t.retryLane), Ed(e, n));
}
function Pm(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(_(314));
  }
  (r !== null && r.delete(t), Ed(e, n));
}
var kd;
kd = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || We.current) Ve = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ((Ve = !1), dm(e, t, n));
      Ve = !!(e.flags & 131072);
    }
  else ((Ve = !1), se && t.flags & 1048576 && _f(t, hi, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      (Zl(e, t), (e = t.pendingProps));
      var l = or(t, ze.current);
      (rr(t, n), (l = ea(null, t, r, e, l, n)));
      var i = ta();
      return (
        (t.flags |= 1),
        typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Qe(r) ? ((i = !0), di(t)) : (i = !1),
            (t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null),
            Gu(t),
            (l.updater = Ii),
            (t.stateNode = l),
            (l._reactInternals = t),
            lu(t, r, e, n),
            (t = uu(null, t, r, !0, i, n)))
          : ((t.tag = 0), se && i && Hu(t), Ie(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Zl(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Rm(r)),
          (e = ft(r, e)),
          l)
        ) {
          case 0:
            t = ou(null, t, r, e, n);
            break e;
          case 1:
            t = Ns(null, t, r, e, n);
            break e;
          case 11:
            t = Ls(null, t, r, e, n);
            break e;
          case 14:
            t = Ts(null, t, r, ft(r.type, e), n);
            break e;
        }
        throw Error(_(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ft(r, l)),
        ou(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ft(r, l)),
        Ns(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((id(t), e === null)) throw Error(_(387));
        ((r = t.pendingProps), (i = t.memoizedState), (l = i.element), Mf(e, t), yi(t, r, null, n));
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            ((l = cr(Error(_(423)), t)), (t = Ds(e, t, r, n, l)));
            break e;
          } else if (r !== l) {
            ((l = cr(Error(_(424)), t)), (t = Ds(e, t, r, n, l)));
            break e;
          } else
            for (
              Je = bt(t.stateNode.containerInfo.firstChild),
                Ze = t,
                se = !0,
                ht = null,
                n = Nf(t, null, r, n),
                t.child = n;
              n;

            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
        else {
          if ((ur(), r === l)) {
            t = jt(e, t, n);
            break e;
          }
          Ie(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        zf(t),
        e === null && tu(t),
        (r = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        Jo(r, l) ? (o = null) : i !== null && Jo(r, i) && (t.flags |= 32),
        ld(e, t),
        Ie(e, t, o, n),
        t.child
      );
    case 6:
      return (e === null && tu(t), null);
    case 13:
      return od(e, t, n);
    case 4:
      return (
        Ju(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = ar(t, null, r, n)) : Ie(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ft(r, l)),
        Ls(e, t, r, l, n)
      );
    case 7:
      return (Ie(e, t, t.pendingProps, n), t.child);
    case 8:
      return (Ie(e, t, t.pendingProps.children, n), t.child);
    case 12:
      return (Ie(e, t, t.pendingProps.children, n), t.child);
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (o = l.value),
          ie(mi, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (yt(i.value, o)) {
            if (i.children === l.children && !We.current) {
              t = jt(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var u = i.dependencies;
              if (u !== null) {
                o = i.child;
                for (var a = u.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (i.tag === 1) {
                      ((a = Nt(-1, n & -n)), (a.tag = 2));
                      var s = i.updateQueue;
                      if (s !== null) {
                        s = s.shared;
                        var d = s.pending;
                        (d === null ? (a.next = a) : ((a.next = d.next), (d.next = a)),
                          (s.pending = a));
                      }
                    }
                    ((i.lanes |= n),
                      (a = i.alternate),
                      a !== null && (a.lanes |= n),
                      nu(i.return, n, t),
                      (u.lanes |= n));
                    break;
                  }
                  a = a.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(_(341));
                ((o.lanes |= n),
                  (u = o.alternate),
                  u !== null && (u.lanes |= n),
                  nu(o, n, t),
                  (o = i.sibling));
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    ((i.return = o.return), (o = i));
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        (Ie(e, t, l.children, n), (t = t.child));
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        rr(t, n),
        (l = ot(l)),
        (r = r(l)),
        (t.flags |= 1),
        Ie(e, t, r, n),
        t.child
      );
    case 14:
      return ((r = t.type), (l = ft(r, t.pendingProps)), (l = ft(r.type, l)), Ts(e, t, r, l, n));
    case 15:
      return nd(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ft(r, l)),
        Zl(e, t),
        (t.tag = 1),
        Qe(r) ? ((e = !0), di(t)) : (e = !1),
        rr(t, n),
        bf(t, r, l),
        lu(t, r, l, n),
        uu(null, t, r, !0, e, n)
      );
    case 19:
      return ud(e, t, n);
    case 22:
      return rd(e, t, n);
  }
  throw Error(_(156, t.tag));
};
function xd(e, t) {
  return Gc(e, t);
}
function _m(e, t, n, r) {
  ((this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null));
}
function lt(e, t, n, r) {
  return new _m(e, t, n, r);
}
function fa(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function Rm(e) {
  if (typeof e == "function") return fa(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Nu)) return 11;
    if (e === Du) return 14;
  }
  return 2;
}
function rn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = lt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function ei(e, t, n, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == "function")) fa(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Hn:
        return Cn(n.children, l, i, t);
      case Tu:
        ((o = 8), (l |= 8));
        break;
      case Lo:
        return ((e = lt(12, n, t, l | 2)), (e.elementType = Lo), (e.lanes = i), e);
      case To:
        return ((e = lt(13, n, t, l)), (e.elementType = To), (e.lanes = i), e);
      case No:
        return ((e = lt(19, n, t, l)), (e.elementType = No), (e.lanes = i), e);
      case Mc:
        return Bi(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Nc:
              o = 10;
              break e;
            case Dc:
              o = 9;
              break e;
            case Nu:
              o = 11;
              break e;
            case Du:
              o = 14;
              break e;
            case Vt:
              ((o = 16), (r = null));
              break e;
          }
        throw Error(_(130, e == null ? e : typeof e, ""));
    }
  return ((t = lt(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t);
}
function Cn(e, t, n, r) {
  return ((e = lt(7, e, r, t)), (e.lanes = n), e);
}
function Bi(e, t, n, r) {
  return (
    (e = lt(22, e, r, t)),
    (e.elementType = Mc),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ko(e, t, n) {
  return ((e = lt(6, e, null, t)), (e.lanes = n), e);
}
function xo(e, t, n) {
  return (
    (t = lt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Lm(e, t, n, r, l) {
  ((this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = no(0)),
    (this.expirationTimes = no(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = no(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null));
}
function da(e, t, n, r, l, i, o, u, a) {
  return (
    (e = new Lm(e, t, n, u, a)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = lt(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Gu(i),
    e
  );
}
function Tm(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: $n,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Cd(e) {
  if (!e) return on;
  e = e._reactInternals;
  e: {
    if (Mn(e) !== e || e.tag !== 1) throw Error(_(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Qe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(_(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Qe(n)) return Cf(e, n, t);
  }
  return t;
}
function Pd(e, t, n, r, l, i, o, u, a) {
  return (
    (e = da(n, r, !0, e, l, i, o, u, a)),
    (e.context = Cd(null)),
    (n = e.current),
    (r = Ue()),
    (l = nn(n)),
    (i = Nt(r, l)),
    (i.callback = t ?? null),
    en(n, i, l),
    (e.current.lanes = l),
    pl(e, l, r),
    Ke(e, r),
    e
  );
}
function $i(e, t, n, r) {
  var l = t.current,
    i = Ue(),
    o = nn(l);
  return (
    (n = Cd(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Nt(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = en(l, t, o)),
    e !== null && (vt(e, l, o, i), Xl(e, l, o)),
    o
  );
}
function Pi(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function $s(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function pa(e, t) {
  ($s(e, t), (e = e.alternate) && $s(e, t));
}
function Nm() {
  return null;
}
var _d =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ha(e) {
  this._internalRoot = e;
}
Hi.prototype.render = ha.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(_(409));
  $i(e, t, null, null);
};
Hi.prototype.unmount = ha.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    (Tn(function () {
      $i(null, e, null, null);
    }),
      (t[zt] = null));
  }
};
function Hi(e) {
  this._internalRoot = e;
}
Hi.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = nf();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Qt.length && t !== 0 && t < Qt[n].priority; n++);
    (Qt.splice(n, 0, e), n === 0 && lf(e));
  }
};
function ma(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Vi(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Hs() {}
function Dm(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var s = Pi(o);
        i.call(s);
      };
    }
    var o = Pd(t, r, e, 0, null, !1, !1, "", Hs);
    return (
      (e._reactRootContainer = o),
      (e[zt] = o.current),
      el(e.nodeType === 8 ? e.parentNode : e),
      Tn(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var s = Pi(a);
      u.call(s);
    };
  }
  var a = da(e, 0, !1, null, null, !1, !1, "", Hs);
  return (
    (e._reactRootContainer = a),
    (e[zt] = a.current),
    el(e.nodeType === 8 ? e.parentNode : e),
    Tn(function () {
      $i(t, a, n, r);
    }),
    a
  );
}
function Wi(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var a = Pi(o);
        u.call(a);
      };
    }
    $i(t, o, e, l);
  } else o = Dm(n, t, e, l, r);
  return Pi(o);
}
ef = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Or(t.pendingLanes);
        n !== 0 && (Ou(t, n | 1), Ke(t, ve()), !(G & 6) && ((fr = ve() + 500), sn()));
      }
      break;
    case 13:
      (Tn(function () {
        var r = Ot(e, 1);
        if (r !== null) {
          var l = Ue();
          vt(r, e, 1, l);
        }
      }),
        pa(e, 1));
  }
};
ju = function (e) {
  if (e.tag === 13) {
    var t = Ot(e, 134217728);
    if (t !== null) {
      var n = Ue();
      vt(t, e, 134217728, n);
    }
    pa(e, 134217728);
  }
};
tf = function (e) {
  if (e.tag === 13) {
    var t = nn(e),
      n = Ot(e, t);
    if (n !== null) {
      var r = Ue();
      vt(n, e, t, r);
    }
    pa(e, t);
  }
};
nf = function () {
  return b;
};
rf = function (e, t) {
  var n = b;
  try {
    return ((b = e), t());
  } finally {
    b = n;
  }
};
Bo = function (e, t, n) {
  switch (t) {
    case "input":
      if ((zo(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Oi(r);
            if (!l) throw Error(_(90));
            (Oc(r), zo(r, l));
          }
        }
      }
      break;
    case "textarea":
      Fc(e, n);
      break;
    case "select":
      ((t = n.value), t != null && bn(e, !!n.multiple, t, !1));
  }
};
Vc = aa;
Wc = Tn;
var Mm = { usingClientEntryPoint: !1, Events: [ml, Kn, Oi, $c, Hc, aa] },
  Lr = {
    findFiberByHostInstance: wn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  zm = {
    bundleType: Lr.bundleType,
    version: Lr.version,
    rendererPackageName: Lr.rendererPackageName,
    rendererConfig: Lr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ft.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return ((e = Yc(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: Lr.findFiberByHostInstance || Nm,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var $l = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!$l.isDisabled && $l.supportsFiber)
    try {
      ((Ni = $l.inject(zm)), (kt = $l));
    } catch {}
}
be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Mm;
be.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ma(t)) throw Error(_(200));
  return Tm(e, t, null, n);
};
be.createRoot = function (e, t) {
  if (!ma(e)) throw Error(_(299));
  var n = !1,
    r = "",
    l = _d;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = da(e, 1, !1, null, null, n, !1, r, l)),
    (e[zt] = t.current),
    el(e.nodeType === 8 ? e.parentNode : e),
    new ha(t)
  );
};
be.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(_(188))
      : ((e = Object.keys(e).join(",")), Error(_(268, e)));
  return ((e = Yc(t)), (e = e === null ? null : e.stateNode), e);
};
be.flushSync = function (e) {
  return Tn(e);
};
be.hydrate = function (e, t, n) {
  if (!Vi(t)) throw Error(_(200));
  return Wi(null, e, t, !0, n);
};
be.hydrateRoot = function (e, t, n) {
  if (!ma(e)) throw Error(_(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = "",
    o = _d;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = Pd(t, null, e, 1, n ?? null, l, !1, i, o)),
    (e[zt] = t.current),
    el(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      ((n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l));
  return new Hi(t);
};
be.render = function (e, t, n) {
  if (!Vi(t)) throw Error(_(200));
  return Wi(null, e, t, !1, n);
};
be.unmountComponentAtNode = function (e) {
  if (!Vi(e)) throw Error(_(40));
  return e._reactRootContainer
    ? (Tn(function () {
        Wi(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[zt] = null));
        });
      }),
      !0)
    : !1;
};
be.unstable_batchedUpdates = aa;
be.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Vi(n)) throw Error(_(200));
  if (e == null || e._reactInternals === void 0) throw Error(_(38));
  return Wi(e, t, n, !1, r);
};
be.version = "18.3.1-next-f1338f8080-20240426";
function Rd() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Rd);
    } catch (e) {
      console.error(e);
    }
}
(Rd(), (_c.exports = be));
var va = _c.exports;
const Om = pc(va),
  jm = dc({ __proto__: null, default: Om }, [va]);
var Ld,
  Vs = va;
((Ld = Vs.createRoot), Vs.hydrateRoot);
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ae() {
  return (
    (ae = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ae.apply(this, arguments)
  );
}
var ge;
(function (e) {
  ((e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE"));
})(ge || (ge = {}));
const Ws = "popstate";
function Fm(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let { pathname: i, search: o, hash: u } = r.location;
    return sl(
      "",
      { pathname: i, search: o, hash: u },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || "default",
    );
  }
  function n(r, l) {
    return typeof l == "string" ? l : Nn(l);
  }
  return Um(t, n, null, e);
}
function Y(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function dr(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Im() {
  return Math.random().toString(36).substr(2, 8);
}
function Qs(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function sl(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    ae(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? cn(t) : t,
      { state: n, key: (t && t.key) || r || Im() },
    )
  );
}
function Nn(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function cn(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    (r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))), e && (t.pathname = e));
  }
  return t;
}
function Um(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: i = !1 } = r,
    o = l.history,
    u = ge.Pop,
    a = null,
    s = d();
  s == null && ((s = 0), o.replaceState(ae({}, o.state, { idx: s }), ""));
  function d() {
    return (o.state || { idx: null }).idx;
  }
  function f() {
    u = ge.Pop;
    let D = d(),
      m = D == null ? null : D - s;
    ((s = D), a && a({ action: u, location: E.location, delta: m }));
  }
  function h(D, m) {
    u = ge.Push;
    let c = sl(E.location, D, m);
    s = d() + 1;
    let v = Qs(c, s),
      x = E.createHref(c);
    try {
      o.pushState(v, "", x);
    } catch (L) {
      if (L instanceof DOMException && L.name === "DataCloneError") throw L;
      l.location.assign(x);
    }
    i && a && a({ action: u, location: E.location, delta: 1 });
  }
  function w(D, m) {
    u = ge.Replace;
    let c = sl(E.location, D, m);
    s = d();
    let v = Qs(c, s),
      x = E.createHref(c);
    (o.replaceState(v, "", x), i && a && a({ action: u, location: E.location, delta: 0 }));
  }
  function k(D) {
    let m = l.location.origin !== "null" ? l.location.origin : l.location.href,
      c = typeof D == "string" ? D : Nn(D);
    return (
      (c = c.replace(/ $/, "%20")),
      Y(m, "No window.location.(origin|href) available to create URL for href: " + c),
      new URL(c, m)
    );
  }
  let E = {
    get action() {
      return u;
    },
    get location() {
      return e(l, o);
    },
    listen(D) {
      if (a) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(Ws, f),
        (a = D),
        () => {
          (l.removeEventListener(Ws, f), (a = null));
        }
      );
    },
    createHref(D) {
      return t(l, D);
    },
    createURL: k,
    encodeLocation(D) {
      let m = k(D);
      return { pathname: m.pathname, search: m.search, hash: m.hash };
    },
    push: h,
    replace: w,
    go(D) {
      return o.go(D);
    },
  };
  return E;
}
var q;
(function (e) {
  ((e.data = "data"), (e.deferred = "deferred"), (e.redirect = "redirect"), (e.error = "error"));
})(q || (q = {}));
const Am = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
function Bm(e) {
  return e.index === !0;
}
function _i(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((l, i) => {
      let o = [...n, String(i)],
        u = typeof l.id == "string" ? l.id : o.join("-");
      if (
        (Y(l.index !== !0 || !l.children, "Cannot specify children on an index route"),
        Y(
          !r[u],
          'Found a route id collision on id "' +
            u +
            `".  Route id's must be globally unique within Data Router usages`,
        ),
        Bm(l))
      ) {
        let a = ae({}, l, t(l), { id: u });
        return ((r[u] = a), a);
      } else {
        let a = ae({}, l, t(l), { id: u, children: void 0 });
        return ((r[u] = a), l.children && (a.children = _i(l.children, t, o, r)), a);
      }
    })
  );
}
function yn(e, t, n) {
  return (n === void 0 && (n = "/"), ti(e, t, n, !1));
}
function ti(e, t, n, r) {
  let l = typeof t == "string" ? cn(t) : t,
    i = vr(l.pathname || "/", n);
  if (i == null) return null;
  let o = Td(e);
  Hm(o);
  let u = null;
  for (let a = 0; u == null && a < o.length; ++a) {
    let s = bm(i);
    u = Zm(o[a], s, r);
  }
  return u;
}
function $m(e, t) {
  let { route: n, pathname: r, params: l } = e;
  return { id: n.id, pathname: r, params: l, data: t[n.id], handle: n.handle };
}
function Td(e, t, n, r) {
  (t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = ""));
  let l = (i, o, u) => {
    let a = {
      relativePath: u === void 0 ? i.path || "" : u,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: o,
      route: i,
    };
    a.relativePath.startsWith("/") &&
      (Y(
        a.relativePath.startsWith(r),
        'Absolute route path "' +
          a.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes.",
      ),
      (a.relativePath = a.relativePath.slice(r.length)));
    let s = Dt([r, a.relativePath]),
      d = n.concat(a);
    (i.children &&
      i.children.length > 0 &&
      (Y(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + s + '".'),
      ),
      Td(i.children, t, d, s)),
      !(i.path == null && !i.index) && t.push({ path: s, score: Gm(s, i.index), routesMeta: d }));
  };
  return (
    e.forEach((i, o) => {
      var u;
      if (i.path === "" || !((u = i.path) != null && u.includes("?"))) l(i, o);
      else for (let a of Nd(i.path)) l(i, o, a);
    }),
    t
  );
}
function Nd(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return l ? [i, ""] : [i];
  let o = Nd(r.join("/")),
    u = [];
  return (
    u.push(...o.map(a => (a === "" ? i : [i, a].join("/")))),
    l && u.push(...o),
    u.map(a => (e.startsWith("/") && a === "" ? "/" : a))
  );
}
function Hm(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Jm(
          t.routesMeta.map(r => r.childrenIndex),
          n.routesMeta.map(r => r.childrenIndex),
        ),
  );
}
const Vm = /^:[\w-]+$/,
  Wm = 3,
  Qm = 2,
  Km = 1,
  Ym = 10,
  Xm = -2,
  Ks = e => e === "*";
function Gm(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Ks) && (r += Xm),
    t && (r += Qm),
    n.filter(l => !Ks(l)).reduce((l, i) => l + (Vm.test(i) ? Wm : i === "" ? Km : Ym), r)
  );
}
function Jm(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Zm(e, t, n) {
  n === void 0 && (n = !1);
  let { routesMeta: r } = e,
    l = {},
    i = "/",
    o = [];
  for (let u = 0; u < r.length; ++u) {
    let a = r[u],
      s = u === r.length - 1,
      d = i === "/" ? t : t.slice(i.length) || "/",
      f = Ys({ path: a.relativePath, caseSensitive: a.caseSensitive, end: s }, d),
      h = a.route;
    if (
      (!f &&
        s &&
        n &&
        !r[r.length - 1].route.index &&
        (f = Ys({ path: a.relativePath, caseSensitive: a.caseSensitive, end: !1 }, d)),
      !f)
    )
      return null;
    (Object.assign(l, f.params),
      o.push({
        params: l,
        pathname: Dt([i, f.pathname]),
        pathnameBase: nv(Dt([i, f.pathnameBase])),
        route: h,
      }),
      f.pathnameBase !== "/" && (i = Dt([i, f.pathnameBase])));
  }
  return o;
}
function Ys(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = qm(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let i = l[0],
    o = i.replace(/(.)\/+$/, "$1"),
    u = l.slice(1);
  return {
    params: r.reduce((s, d, f) => {
      let { paramName: h, isOptional: w } = d;
      if (h === "*") {
        let E = u[f] || "";
        o = i.slice(0, i.length - E.length).replace(/(.)\/+$/, "$1");
      }
      const k = u[f];
      return (w && !k ? (s[h] = void 0) : (s[h] = (k || "").replace(/%2F/g, "/")), s);
    }, {}),
    pathname: i,
    pathnameBase: o,
    pattern: e,
  };
}
function qm(e, t, n) {
  (t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    dr(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'),
    ));
  let r = [],
    l =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (o, u, a) => (
            r.push({ paramName: u, isOptional: a != null }),
            a ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }), (l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
        ? (l += "\\/*$")
        : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l, t ? void 0 : "i"), r]
  );
}
function bm(e) {
  try {
    return e
      .split("/")
      .map(t => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      dr(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ")."),
      ),
      e
    );
  }
}
function vr(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function ev(e, t) {
  t === void 0 && (t = "/");
  let { pathname: n, search: r = "", hash: l = "" } = typeof e == "string" ? cn(e) : e;
  return { pathname: n ? (n.startsWith("/") ? n : tv(n, t)) : t, search: rv(r), hash: lv(l) };
}
function tv(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach(l => {
      l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Co(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Dd(e) {
  return e.filter((t, n) => n === 0 || (t.route.path && t.route.path.length > 0));
}
function ya(e, t) {
  let n = Dd(e);
  return t
    ? n.map((r, l) => (l === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map(r => r.pathnameBase);
}
function ga(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == "string"
    ? (l = cn(e))
    : ((l = ae({}, e)),
      Y(!l.pathname || !l.pathname.includes("?"), Co("?", "pathname", "search", l)),
      Y(!l.pathname || !l.pathname.includes("#"), Co("#", "pathname", "hash", l)),
      Y(!l.search || !l.search.includes("#"), Co("#", "search", "hash", l)));
  let i = e === "" || l.pathname === "",
    o = i ? "/" : l.pathname,
    u;
  if (o == null) u = n;
  else {
    let f = t.length - 1;
    if (!r && o.startsWith("..")) {
      let h = o.split("/");
      for (; h[0] === ".."; ) (h.shift(), (f -= 1));
      l.pathname = h.join("/");
    }
    u = f >= 0 ? t[f] : "/";
  }
  let a = ev(l, u),
    s = o && o !== "/" && o.endsWith("/"),
    d = (i || o === ".") && n.endsWith("/");
  return (!a.pathname.endsWith("/") && (s || d) && (a.pathname += "/"), a);
}
const Dt = e => e.join("/").replace(/\/\/+/g, "/"),
  nv = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  rv = e => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  lv = e => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class Ri {
  constructor(t, n, r, l) {
    (l === void 0 && (l = !1),
      (this.status = t),
      (this.statusText = n || ""),
      (this.internal = l),
      r instanceof Error ? ((this.data = r.toString()), (this.error = r)) : (this.data = r));
  }
}
function cl(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Md = ["post", "put", "patch", "delete"],
  iv = new Set(Md),
  ov = ["get", ...Md],
  uv = new Set(ov),
  av = new Set([301, 302, 303, 307, 308]),
  sv = new Set([307, 308]),
  Po = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  cv = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Tr = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  wa = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  fv = e => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  zd = "remix-router-transitions";
function dv(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0,
    n = typeof t < "u" && typeof t.document < "u" && typeof t.document.createElement < "u",
    r = !n;
  Y(e.routes.length > 0, "You must provide a non-empty routes array to createRouter");
  let l;
  if (e.mapRouteProperties) l = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let p = e.detectErrorBoundary;
    l = g => ({ hasErrorBoundary: p(g) });
  } else l = fv;
  let i = {},
    o = _i(e.routes, l, void 0, i),
    u,
    a = e.basename || "/",
    s = e.dataStrategy || vv,
    d = e.patchRoutesOnNavigation,
    f = ae(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
        v7_skipActionErrorRevalidation: !1,
      },
      e.future,
    ),
    h = null,
    w = new Set(),
    k = null,
    E = null,
    D = null,
    m = e.hydrationData != null,
    c = yn(o, e.history.location, a),
    v = !1,
    x = null;
  if (c == null && !d) {
    let p = $e(404, { pathname: e.history.location.pathname }),
      { matches: g, route: S } = lc(o);
    ((c = g), (x = { [S.id]: p }));
  }
  c && !e.hydrationData && El(c, o, e.history.location.pathname).active && (c = null);
  let L;
  if (c)
    if (c.some(p => p.route.lazy)) L = !1;
    else if (!c.some(p => p.route.loader)) L = !0;
    else if (f.v7_partialHydration) {
      let p = e.hydrationData ? e.hydrationData.loaderData : null,
        g = e.hydrationData ? e.hydrationData.errors : null;
      if (g) {
        let S = c.findIndex(C => g[C.route.id] !== void 0);
        L = c.slice(0, S + 1).every(C => !Su(C.route, p, g));
      } else L = c.every(S => !Su(S.route, p, g));
    } else L = e.hydrationData != null;
  else if (((L = !1), (c = []), f.v7_partialHydration)) {
    let p = El(null, o, e.history.location.pathname);
    p.active && p.matches && ((v = !0), (c = p.matches));
  }
  let O,
    y = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: c,
      initialized: L,
      navigation: Po,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || x,
      fetchers: new Map(),
      blockers: new Map(),
    },
    P = ge.Pop,
    B = !1,
    M,
    ee = !1,
    re = new Map(),
    Se = null,
    Pe = !1,
    at = !1,
    It = [],
    Ut = new Set(),
    T = new Map(),
    $ = 0,
    V = -1,
    te = new Map(),
    ne = new Set(),
    st = new Map(),
    Ye = new Map(),
    Oe = new Set(),
    je = new Map(),
    tt = new Map(),
    gl;
  function Qd() {
    if (
      ((h = e.history.listen(p => {
        let { action: g, location: S, delta: C } = p;
        if (gl) {
          (gl(), (gl = void 0));
          return;
        }
        dr(
          tt.size === 0 || C != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.",
        );
        let N = Da({ currentLocation: y.location, nextLocation: S, historyAction: g });
        if (N && C != null) {
          let A = new Promise(H => {
            gl = H;
          });
          (e.history.go(C * -1),
            Sl(N, {
              state: "blocked",
              location: S,
              proceed() {
                (Sl(N, { state: "proceeding", proceed: void 0, reset: void 0, location: S }),
                  A.then(() => e.history.go(C)));
              },
              reset() {
                let H = new Map(y.blockers);
                (H.set(N, Tr), Fe({ blockers: H }));
              },
            }));
          return;
        }
        return dn(g, S);
      })),
      n)
    ) {
      Nv(t, re);
      let p = () => Dv(t, re);
      (t.addEventListener("pagehide", p), (Se = () => t.removeEventListener("pagehide", p)));
    }
    return (y.initialized || dn(ge.Pop, y.location, { initialHydration: !0 }), O);
  }
  function Kd() {
    (h && h(),
      Se && Se(),
      w.clear(),
      M && M.abort(),
      y.fetchers.forEach((p, g) => wl(g)),
      y.blockers.forEach((p, g) => Na(g)));
  }
  function Yd(p) {
    return (w.add(p), () => w.delete(p));
  }
  function Fe(p, g) {
    (g === void 0 && (g = {}), (y = ae({}, y, p)));
    let S = [],
      C = [];
    (f.v7_fetcherPersist &&
      y.fetchers.forEach((N, A) => {
        N.state === "idle" && (Oe.has(A) ? C.push(A) : S.push(A));
      }),
      Oe.forEach(N => {
        !y.fetchers.has(N) && !T.has(N) && C.push(N);
      }),
      [...w].forEach(N =>
        N(y, {
          deletedFetchers: C,
          viewTransitionOpts: g.viewTransitionOpts,
          flushSync: g.flushSync === !0,
        }),
      ),
      f.v7_fetcherPersist
        ? (S.forEach(N => y.fetchers.delete(N)), C.forEach(N => wl(N)))
        : C.forEach(N => Oe.delete(N)));
  }
  function On(p, g, S) {
    var C, N;
    let { flushSync: A } = S === void 0 ? {} : S,
      H =
        y.actionData != null &&
        y.navigation.formMethod != null &&
        pt(y.navigation.formMethod) &&
        y.navigation.state === "loading" &&
        ((C = p.state) == null ? void 0 : C._isRedirect) !== !0,
      F;
    g.actionData
      ? Object.keys(g.actionData).length > 0
        ? (F = g.actionData)
        : (F = null)
      : H
        ? (F = y.actionData)
        : (F = null);
    let I = g.loaderData ? nc(y.loaderData, g.loaderData, g.matches || [], g.errors) : y.loaderData,
      j = y.blockers;
    j.size > 0 && ((j = new Map(j)), j.forEach((X, _e) => j.set(_e, Tr)));
    let U =
      B === !0 ||
      (y.navigation.formMethod != null &&
        pt(y.navigation.formMethod) &&
        ((N = p.state) == null ? void 0 : N._isRedirect) !== !0);
    (u && ((o = u), (u = void 0)),
      Pe ||
        P === ge.Pop ||
        (P === ge.Push
          ? e.history.push(p, p.state)
          : P === ge.Replace && e.history.replace(p, p.state)));
    let W;
    if (P === ge.Pop) {
      let X = re.get(y.location.pathname);
      X && X.has(p.pathname)
        ? (W = { currentLocation: y.location, nextLocation: p })
        : re.has(p.pathname) && (W = { currentLocation: p, nextLocation: y.location });
    } else if (ee) {
      let X = re.get(y.location.pathname);
      (X ? X.add(p.pathname) : ((X = new Set([p.pathname])), re.set(y.location.pathname, X)),
        (W = { currentLocation: y.location, nextLocation: p }));
    }
    (Fe(
      ae({}, g, {
        actionData: F,
        loaderData: I,
        historyAction: P,
        location: p,
        initialized: !0,
        navigation: Po,
        revalidation: "idle",
        restoreScrollPosition: za(p, g.matches || y.matches),
        preventScrollReset: U,
        blockers: j,
      }),
      { viewTransitionOpts: W, flushSync: A === !0 },
    ),
      (P = ge.Pop),
      (B = !1),
      (ee = !1),
      (Pe = !1),
      (at = !1),
      (It = []));
  }
  async function xa(p, g) {
    if (typeof p == "number") {
      e.history.go(p);
      return;
    }
    let S = wu(
        y.location,
        y.matches,
        a,
        f.v7_prependBasename,
        p,
        f.v7_relativeSplatPath,
        g == null ? void 0 : g.fromRouteId,
        g == null ? void 0 : g.relative,
      ),
      { path: C, submission: N, error: A } = Xs(f.v7_normalizeFormMethod, !1, S, g),
      H = y.location,
      F = sl(y.location, C, g && g.state);
    F = ae({}, F, e.history.encodeLocation(F));
    let I = g && g.replace != null ? g.replace : void 0,
      j = ge.Push;
    I === !0
      ? (j = ge.Replace)
      : I === !1 ||
        (N != null &&
          pt(N.formMethod) &&
          N.formAction === y.location.pathname + y.location.search &&
          (j = ge.Replace));
    let U = g && "preventScrollReset" in g ? g.preventScrollReset === !0 : void 0,
      W = (g && g.flushSync) === !0,
      X = Da({ currentLocation: H, nextLocation: F, historyAction: j });
    if (X) {
      Sl(X, {
        state: "blocked",
        location: F,
        proceed() {
          (Sl(X, { state: "proceeding", proceed: void 0, reset: void 0, location: F }), xa(p, g));
        },
        reset() {
          let _e = new Map(y.blockers);
          (_e.set(X, Tr), Fe({ blockers: _e }));
        },
      });
      return;
    }
    return await dn(j, F, {
      submission: N,
      pendingError: A,
      preventScrollReset: U,
      replace: g && g.replace,
      enableViewTransition: g && g.viewTransition,
      flushSync: W,
    });
  }
  function Xd() {
    if ((Yi(), Fe({ revalidation: "loading" }), y.navigation.state !== "submitting")) {
      if (y.navigation.state === "idle") {
        dn(y.historyAction, y.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      dn(P || y.historyAction, y.navigation.location, {
        overrideNavigation: y.navigation,
        enableViewTransition: ee === !0,
      });
    }
  }
  async function dn(p, g, S) {
    (M && M.abort(),
      (M = null),
      (P = p),
      (Pe = (S && S.startUninterruptedRevalidation) === !0),
      lp(y.location, y.matches),
      (B = (S && S.preventScrollReset) === !0),
      (ee = (S && S.enableViewTransition) === !0));
    let C = u || o,
      N = S && S.overrideNavigation,
      A =
        S != null && S.initialHydration && y.matches && y.matches.length > 0 && !v
          ? y.matches
          : yn(C, g, a),
      H = (S && S.flushSync) === !0;
    if (
      A &&
      y.initialized &&
      !at &&
      kv(y.location, g) &&
      !(S && S.submission && pt(S.submission.formMethod))
    ) {
      On(g, { matches: A }, { flushSync: H });
      return;
    }
    let F = El(A, C, g.pathname);
    if ((F.active && F.matches && (A = F.matches), !A)) {
      let { error: le, notFoundMatches: Z, route: pe } = Xi(g.pathname);
      On(g, { matches: Z, loaderData: {}, errors: { [pe.id]: le } }, { flushSync: H });
      return;
    }
    M = new AbortController();
    let I = An(e.history, g, M.signal, S && S.submission),
      j;
    if (S && S.pendingError) j = [gn(A).route.id, { type: q.error, error: S.pendingError }];
    else if (S && S.submission && pt(S.submission.formMethod)) {
      let le = await Gd(I, g, S.submission, A, F.active, { replace: S.replace, flushSync: H });
      if (le.shortCircuited) return;
      if (le.pendingActionResult) {
        let [Z, pe] = le.pendingActionResult;
        if (Ge(pe) && cl(pe.error) && pe.error.status === 404) {
          ((M = null), On(g, { matches: le.matches, loaderData: {}, errors: { [Z]: pe.error } }));
          return;
        }
      }
      ((A = le.matches || A),
        (j = le.pendingActionResult),
        (N = _o(g, S.submission)),
        (H = !1),
        (F.active = !1),
        (I = An(e.history, I.url, I.signal)));
    }
    let {
      shortCircuited: U,
      matches: W,
      loaderData: X,
      errors: _e,
    } = await Jd(
      I,
      g,
      A,
      F.active,
      N,
      S && S.submission,
      S && S.fetcherSubmission,
      S && S.replace,
      S && S.initialHydration === !0,
      H,
      j,
    );
    U || ((M = null), On(g, ae({ matches: W || A }, rc(j), { loaderData: X, errors: _e })));
  }
  async function Gd(p, g, S, C, N, A) {
    (A === void 0 && (A = {}), Yi());
    let H = Lv(g, S);
    if ((Fe({ navigation: H }, { flushSync: A.flushSync === !0 }), N)) {
      let j = await kl(C, g.pathname, p.signal);
      if (j.type === "aborted") return { shortCircuited: !0 };
      if (j.type === "error") {
        let U = gn(j.partialMatches).route.id;
        return {
          matches: j.partialMatches,
          pendingActionResult: [U, { type: q.error, error: j.error }],
        };
      } else if (j.matches) C = j.matches;
      else {
        let { notFoundMatches: U, error: W, route: X } = Xi(g.pathname);
        return { matches: U, pendingActionResult: [X.id, { type: q.error, error: W }] };
      }
    }
    let F,
      I = Fr(C, g);
    if (!I.route.action && !I.route.lazy)
      F = {
        type: q.error,
        error: $e(405, { method: p.method, pathname: g.pathname, routeId: I.route.id }),
      };
    else if (((F = (await yr("action", y, p, [I], C, null))[I.route.id]), p.signal.aborted))
      return { shortCircuited: !0 };
    if (kn(F)) {
      let j;
      return (
        A && A.replace != null
          ? (j = A.replace)
          : (j =
              bs(F.response.headers.get("Location"), new URL(p.url), a) ===
              y.location.pathname + y.location.search),
        await pn(p, F, !0, { submission: S, replace: j }),
        { shortCircuited: !0 }
      );
    }
    if (Gt(F)) throw $e(400, { type: "defer-action" });
    if (Ge(F)) {
      let j = gn(C, I.route.id);
      return (
        (A && A.replace) !== !0 && (P = ge.Push),
        { matches: C, pendingActionResult: [j.route.id, F] }
      );
    }
    return { matches: C, pendingActionResult: [I.route.id, F] };
  }
  async function Jd(p, g, S, C, N, A, H, F, I, j, U) {
    let W = N || _o(g, A),
      X = A || H || oc(W),
      _e = !Pe && (!f.v7_partialHydration || !I);
    if (C) {
      if (_e) {
        let he = Ca(U);
        Fe(ae({ navigation: W }, he !== void 0 ? { actionData: he } : {}), { flushSync: j });
      }
      let J = await kl(S, g.pathname, p.signal);
      if (J.type === "aborted") return { shortCircuited: !0 };
      if (J.type === "error") {
        let he = gn(J.partialMatches).route.id;
        return { matches: J.partialMatches, loaderData: {}, errors: { [he]: J.error } };
      } else if (J.matches) S = J.matches;
      else {
        let { error: he, notFoundMatches: Fn, route: Sr } = Xi(g.pathname);
        return { matches: Fn, loaderData: {}, errors: { [Sr.id]: he } };
      }
    }
    let le = u || o,
      [Z, pe] = Js(
        e.history,
        y,
        S,
        X,
        g,
        f.v7_partialHydration && I === !0,
        f.v7_skipActionErrorRevalidation,
        at,
        It,
        Ut,
        Oe,
        st,
        ne,
        le,
        a,
        U,
      );
    if (
      (Gi(J => !(S && S.some(he => he.route.id === J)) || (Z && Z.some(he => he.route.id === J))),
      (V = ++$),
      Z.length === 0 && pe.length === 0)
    ) {
      let J = La();
      return (
        On(
          g,
          ae(
            { matches: S, loaderData: {}, errors: U && Ge(U[1]) ? { [U[0]]: U[1].error } : null },
            rc(U),
            J ? { fetchers: new Map(y.fetchers) } : {},
          ),
          { flushSync: j },
        ),
        { shortCircuited: !0 }
      );
    }
    if (_e) {
      let J = {};
      if (!C) {
        J.navigation = W;
        let he = Ca(U);
        he !== void 0 && (J.actionData = he);
      }
      (pe.length > 0 && (J.fetchers = Zd(pe)), Fe(J, { flushSync: j }));
    }
    pe.forEach(J => {
      (Bt(J.key), J.controller && T.set(J.key, J.controller));
    });
    let jn = () => pe.forEach(J => Bt(J.key));
    M && M.signal.addEventListener("abort", jn);
    let { loaderResults: gr, fetcherResults: Pt } = await Pa(y, S, Z, pe, p);
    if (p.signal.aborted) return { shortCircuited: !0 };
    (M && M.signal.removeEventListener("abort", jn), pe.forEach(J => T.delete(J.key)));
    let gt = Hl(gr);
    if (gt) return (await pn(p, gt.result, !0, { replace: F }), { shortCircuited: !0 });
    if (((gt = Hl(Pt)), gt))
      return (ne.add(gt.key), await pn(p, gt.result, !0, { replace: F }), { shortCircuited: !0 });
    let { loaderData: Ji, errors: wr } = tc(y, S, gr, U, pe, Pt, je);
    (je.forEach((J, he) => {
      J.subscribe(Fn => {
        (Fn || J.done) && je.delete(he);
      });
    }),
      f.v7_partialHydration && I && y.errors && (wr = ae({}, y.errors, wr)));
    let hn = La(),
      xl = Ta(V),
      Cl = hn || xl || pe.length > 0;
    return ae(
      { matches: S, loaderData: Ji, errors: wr },
      Cl ? { fetchers: new Map(y.fetchers) } : {},
    );
  }
  function Ca(p) {
    if (p && !Ge(p[1])) return { [p[0]]: p[1].data };
    if (y.actionData) return Object.keys(y.actionData).length === 0 ? null : y.actionData;
  }
  function Zd(p) {
    return (
      p.forEach(g => {
        let S = y.fetchers.get(g.key),
          C = Nr(void 0, S ? S.data : void 0);
        y.fetchers.set(g.key, C);
      }),
      new Map(y.fetchers)
    );
  }
  function qd(p, g, S, C) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.",
      );
    Bt(p);
    let N = (C && C.flushSync) === !0,
      A = u || o,
      H = wu(
        y.location,
        y.matches,
        a,
        f.v7_prependBasename,
        S,
        f.v7_relativeSplatPath,
        g,
        C == null ? void 0 : C.relative,
      ),
      F = yn(A, H, a),
      I = El(F, A, H);
    if ((I.active && I.matches && (F = I.matches), !F)) {
      Ct(p, g, $e(404, { pathname: H }), { flushSync: N });
      return;
    }
    let { path: j, submission: U, error: W } = Xs(f.v7_normalizeFormMethod, !0, H, C);
    if (W) {
      Ct(p, g, W, { flushSync: N });
      return;
    }
    let X = Fr(F, j),
      _e = (C && C.preventScrollReset) === !0;
    if (U && pt(U.formMethod)) {
      bd(p, g, j, X, F, I.active, N, _e, U);
      return;
    }
    (st.set(p, { routeId: g, path: j }), ep(p, g, j, X, F, I.active, N, _e, U));
  }
  async function bd(p, g, S, C, N, A, H, F, I) {
    (Yi(), st.delete(p));
    function j(ye) {
      if (!ye.route.action && !ye.route.lazy) {
        let In = $e(405, { method: I.formMethod, pathname: S, routeId: g });
        return (Ct(p, g, In, { flushSync: H }), !0);
      }
      return !1;
    }
    if (!A && j(C)) return;
    let U = y.fetchers.get(p);
    At(p, Tv(I, U), { flushSync: H });
    let W = new AbortController(),
      X = An(e.history, S, W.signal, I);
    if (A) {
      let ye = await kl(N, new URL(X.url).pathname, X.signal, p);
      if (ye.type === "aborted") return;
      if (ye.type === "error") {
        Ct(p, g, ye.error, { flushSync: H });
        return;
      } else if (ye.matches) {
        if (((N = ye.matches), (C = Fr(N, S)), j(C))) return;
      } else {
        Ct(p, g, $e(404, { pathname: S }), { flushSync: H });
        return;
      }
    }
    T.set(p, W);
    let _e = $,
      Z = (await yr("action", y, X, [C], N, p))[C.route.id];
    if (X.signal.aborted) {
      T.get(p) === W && T.delete(p);
      return;
    }
    if (f.v7_fetcherPersist && Oe.has(p)) {
      if (kn(Z) || Ge(Z)) {
        At(p, Ht(void 0));
        return;
      }
    } else {
      if (kn(Z))
        if ((T.delete(p), V > _e)) {
          At(p, Ht(void 0));
          return;
        } else
          return (
            ne.add(p),
            At(p, Nr(I)),
            pn(X, Z, !1, { fetcherSubmission: I, preventScrollReset: F })
          );
      if (Ge(Z)) {
        Ct(p, g, Z.error);
        return;
      }
    }
    if (Gt(Z)) throw $e(400, { type: "defer-action" });
    let pe = y.navigation.location || y.location,
      jn = An(e.history, pe, W.signal),
      gr = u || o,
      Pt = y.navigation.state !== "idle" ? yn(gr, y.navigation.location, a) : y.matches;
    Y(Pt, "Didn't find any matches after fetcher action");
    let gt = ++$;
    te.set(p, gt);
    let Ji = Nr(I, Z.data);
    y.fetchers.set(p, Ji);
    let [wr, hn] = Js(
      e.history,
      y,
      Pt,
      I,
      pe,
      !1,
      f.v7_skipActionErrorRevalidation,
      at,
      It,
      Ut,
      Oe,
      st,
      ne,
      gr,
      a,
      [C.route.id, Z],
    );
    (hn
      .filter(ye => ye.key !== p)
      .forEach(ye => {
        let In = ye.key,
          Oa = y.fetchers.get(In),
          up = Nr(void 0, Oa ? Oa.data : void 0);
        (y.fetchers.set(In, up), Bt(In), ye.controller && T.set(In, ye.controller));
      }),
      Fe({ fetchers: new Map(y.fetchers) }));
    let xl = () => hn.forEach(ye => Bt(ye.key));
    W.signal.addEventListener("abort", xl);
    let { loaderResults: Cl, fetcherResults: J } = await Pa(y, Pt, wr, hn, jn);
    if (W.signal.aborted) return;
    (W.signal.removeEventListener("abort", xl),
      te.delete(p),
      T.delete(p),
      hn.forEach(ye => T.delete(ye.key)));
    let he = Hl(Cl);
    if (he) return pn(jn, he.result, !1, { preventScrollReset: F });
    if (((he = Hl(J)), he))
      return (ne.add(he.key), pn(jn, he.result, !1, { preventScrollReset: F }));
    let { loaderData: Fn, errors: Sr } = tc(y, Pt, Cl, void 0, hn, J, je);
    if (y.fetchers.has(p)) {
      let ye = Ht(Z.data);
      y.fetchers.set(p, ye);
    }
    (Ta(gt),
      y.navigation.state === "loading" && gt > V
        ? (Y(P, "Expected pending action"),
          M && M.abort(),
          On(y.navigation.location, {
            matches: Pt,
            loaderData: Fn,
            errors: Sr,
            fetchers: new Map(y.fetchers),
          }))
        : (Fe({
            errors: Sr,
            loaderData: nc(y.loaderData, Fn, Pt, Sr),
            fetchers: new Map(y.fetchers),
          }),
          (at = !1)));
  }
  async function ep(p, g, S, C, N, A, H, F, I) {
    let j = y.fetchers.get(p);
    At(p, Nr(I, j ? j.data : void 0), { flushSync: H });
    let U = new AbortController(),
      W = An(e.history, S, U.signal);
    if (A) {
      let Z = await kl(N, new URL(W.url).pathname, W.signal, p);
      if (Z.type === "aborted") return;
      if (Z.type === "error") {
        Ct(p, g, Z.error, { flushSync: H });
        return;
      } else if (Z.matches) ((N = Z.matches), (C = Fr(N, S)));
      else {
        Ct(p, g, $e(404, { pathname: S }), { flushSync: H });
        return;
      }
    }
    T.set(p, U);
    let X = $,
      le = (await yr("loader", y, W, [C], N, p))[C.route.id];
    if (
      (Gt(le) && (le = (await Sa(le, W.signal, !0)) || le),
      T.get(p) === U && T.delete(p),
      !W.signal.aborted)
    ) {
      if (Oe.has(p)) {
        At(p, Ht(void 0));
        return;
      }
      if (kn(le))
        if (V > X) {
          At(p, Ht(void 0));
          return;
        } else {
          (ne.add(p), await pn(W, le, !1, { preventScrollReset: F }));
          return;
        }
      if (Ge(le)) {
        Ct(p, g, le.error);
        return;
      }
      (Y(!Gt(le), "Unhandled fetcher deferred data"), At(p, Ht(le.data)));
    }
  }
  async function pn(p, g, S, C) {
    let {
      submission: N,
      fetcherSubmission: A,
      preventScrollReset: H,
      replace: F,
    } = C === void 0 ? {} : C;
    g.response.headers.has("X-Remix-Revalidate") && (at = !0);
    let I = g.response.headers.get("Location");
    (Y(I, "Expected a Location header on the redirect Response"), (I = bs(I, new URL(p.url), a)));
    let j = sl(y.location, I, { _isRedirect: !0 });
    if (n) {
      let Z = !1;
      if (g.response.headers.has("X-Remix-Reload-Document")) Z = !0;
      else if (wa.test(I)) {
        const pe = e.history.createURL(I);
        Z = pe.origin !== t.location.origin || vr(pe.pathname, a) == null;
      }
      if (Z) {
        F ? t.location.replace(I) : t.location.assign(I);
        return;
      }
    }
    M = null;
    let U = F === !0 || g.response.headers.has("X-Remix-Replace") ? ge.Replace : ge.Push,
      { formMethod: W, formAction: X, formEncType: _e } = y.navigation;
    !N && !A && W && X && _e && (N = oc(y.navigation));
    let le = N || A;
    if (sv.has(g.response.status) && le && pt(le.formMethod))
      await dn(U, j, {
        submission: ae({}, le, { formAction: I }),
        preventScrollReset: H || B,
        enableViewTransition: S ? ee : void 0,
      });
    else {
      let Z = _o(j, N);
      await dn(U, j, {
        overrideNavigation: Z,
        fetcherSubmission: A,
        preventScrollReset: H || B,
        enableViewTransition: S ? ee : void 0,
      });
    }
  }
  async function yr(p, g, S, C, N, A) {
    let H,
      F = {};
    try {
      H = await yv(s, p, g, S, C, N, A, i, l);
    } catch (I) {
      return (
        C.forEach(j => {
          F[j.route.id] = { type: q.error, error: I };
        }),
        F
      );
    }
    for (let [I, j] of Object.entries(H))
      if (xv(j)) {
        let U = j.result;
        F[I] = { type: q.redirect, response: Sv(U, S, I, N, a, f.v7_relativeSplatPath) };
      } else F[I] = await wv(j);
    return F;
  }
  async function Pa(p, g, S, C, N) {
    let A = p.matches,
      H = yr("loader", p, N, S, g, null),
      F = Promise.all(
        C.map(async U => {
          if (U.matches && U.match && U.controller) {
            let X = (
              await yr(
                "loader",
                p,
                An(e.history, U.path, U.controller.signal),
                [U.match],
                U.matches,
                U.key,
              )
            )[U.match.route.id];
            return { [U.key]: X };
          } else
            return Promise.resolve({
              [U.key]: { type: q.error, error: $e(404, { pathname: U.path }) },
            });
        }),
      ),
      I = await H,
      j = (await F).reduce((U, W) => Object.assign(U, W), {});
    return (
      await Promise.all([_v(g, I, N.signal, A, p.loaderData), Rv(g, j, C)]),
      { loaderResults: I, fetcherResults: j }
    );
  }
  function Yi() {
    ((at = !0),
      It.push(...Gi()),
      st.forEach((p, g) => {
        (T.has(g) && Ut.add(g), Bt(g));
      }));
  }
  function At(p, g, S) {
    (S === void 0 && (S = {}),
      y.fetchers.set(p, g),
      Fe({ fetchers: new Map(y.fetchers) }, { flushSync: (S && S.flushSync) === !0 }));
  }
  function Ct(p, g, S, C) {
    C === void 0 && (C = {});
    let N = gn(y.matches, g);
    (wl(p),
      Fe(
        { errors: { [N.route.id]: S }, fetchers: new Map(y.fetchers) },
        { flushSync: (C && C.flushSync) === !0 },
      ));
  }
  function _a(p) {
    return (Ye.set(p, (Ye.get(p) || 0) + 1), Oe.has(p) && Oe.delete(p), y.fetchers.get(p) || cv);
  }
  function wl(p) {
    let g = y.fetchers.get(p);
    (T.has(p) && !(g && g.state === "loading" && te.has(p)) && Bt(p),
      st.delete(p),
      te.delete(p),
      ne.delete(p),
      f.v7_fetcherPersist && Oe.delete(p),
      Ut.delete(p),
      y.fetchers.delete(p));
  }
  function tp(p) {
    let g = (Ye.get(p) || 0) - 1;
    (g <= 0 ? (Ye.delete(p), Oe.add(p), f.v7_fetcherPersist || wl(p)) : Ye.set(p, g),
      Fe({ fetchers: new Map(y.fetchers) }));
  }
  function Bt(p) {
    let g = T.get(p);
    g && (g.abort(), T.delete(p));
  }
  function Ra(p) {
    for (let g of p) {
      let S = _a(g),
        C = Ht(S.data);
      y.fetchers.set(g, C);
    }
  }
  function La() {
    let p = [],
      g = !1;
    for (let S of ne) {
      let C = y.fetchers.get(S);
      (Y(C, "Expected fetcher: " + S),
        C.state === "loading" && (ne.delete(S), p.push(S), (g = !0)));
    }
    return (Ra(p), g);
  }
  function Ta(p) {
    let g = [];
    for (let [S, C] of te)
      if (C < p) {
        let N = y.fetchers.get(S);
        (Y(N, "Expected fetcher: " + S), N.state === "loading" && (Bt(S), te.delete(S), g.push(S)));
      }
    return (Ra(g), g.length > 0);
  }
  function np(p, g) {
    let S = y.blockers.get(p) || Tr;
    return (tt.get(p) !== g && tt.set(p, g), S);
  }
  function Na(p) {
    (y.blockers.delete(p), tt.delete(p));
  }
  function Sl(p, g) {
    let S = y.blockers.get(p) || Tr;
    Y(
      (S.state === "unblocked" && g.state === "blocked") ||
        (S.state === "blocked" && g.state === "blocked") ||
        (S.state === "blocked" && g.state === "proceeding") ||
        (S.state === "blocked" && g.state === "unblocked") ||
        (S.state === "proceeding" && g.state === "unblocked"),
      "Invalid blocker state transition: " + S.state + " -> " + g.state,
    );
    let C = new Map(y.blockers);
    (C.set(p, g), Fe({ blockers: C }));
  }
  function Da(p) {
    let { currentLocation: g, nextLocation: S, historyAction: C } = p;
    if (tt.size === 0) return;
    tt.size > 1 && dr(!1, "A router only supports one blocker at a time");
    let N = Array.from(tt.entries()),
      [A, H] = N[N.length - 1],
      F = y.blockers.get(A);
    if (
      !(F && F.state === "proceeding") &&
      H({ currentLocation: g, nextLocation: S, historyAction: C })
    )
      return A;
  }
  function Xi(p) {
    let g = $e(404, { pathname: p }),
      S = u || o,
      { matches: C, route: N } = lc(S);
    return (Gi(), { notFoundMatches: C, route: N, error: g });
  }
  function Gi(p) {
    let g = [];
    return (
      je.forEach((S, C) => {
        (!p || p(C)) && (S.cancel(), g.push(C), je.delete(C));
      }),
      g
    );
  }
  function rp(p, g, S) {
    if (((k = p), (D = g), (E = S || null), !m && y.navigation === Po)) {
      m = !0;
      let C = za(y.location, y.matches);
      C != null && Fe({ restoreScrollPosition: C });
    }
    return () => {
      ((k = null), (D = null), (E = null));
    };
  }
  function Ma(p, g) {
    return (
      (E &&
        E(
          p,
          g.map(C => $m(C, y.loaderData)),
        )) ||
      p.key
    );
  }
  function lp(p, g) {
    if (k && D) {
      let S = Ma(p, g);
      k[S] = D();
    }
  }
  function za(p, g) {
    if (k) {
      let S = Ma(p, g),
        C = k[S];
      if (typeof C == "number") return C;
    }
    return null;
  }
  function El(p, g, S) {
    if (d)
      if (p) {
        if (Object.keys(p[0].params).length > 0) return { active: !0, matches: ti(g, S, a, !0) };
      } else return { active: !0, matches: ti(g, S, a, !0) || [] };
    return { active: !1, matches: null };
  }
  async function kl(p, g, S, C) {
    if (!d) return { type: "success", matches: p };
    let N = p;
    for (;;) {
      let A = u == null,
        H = u || o,
        F = i;
      try {
        await d({
          signal: S,
          path: g,
          matches: N,
          fetcherKey: C,
          patch: (U, W) => {
            S.aborted || qs(U, W, H, F, l);
          },
        });
      } catch (U) {
        return { type: "error", error: U, partialMatches: N };
      } finally {
        A && !S.aborted && (o = [...o]);
      }
      if (S.aborted) return { type: "aborted" };
      let I = yn(H, g, a);
      if (I) return { type: "success", matches: I };
      let j = ti(H, g, a, !0);
      if (!j || (N.length === j.length && N.every((U, W) => U.route.id === j[W].route.id)))
        return { type: "success", matches: null };
      N = j;
    }
  }
  function ip(p) {
    ((i = {}), (u = _i(p, l, void 0, i)));
  }
  function op(p, g) {
    let S = u == null;
    (qs(p, g, u || o, i, l), S && ((o = [...o]), Fe({})));
  }
  return (
    (O = {
      get basename() {
        return a;
      },
      get future() {
        return f;
      },
      get state() {
        return y;
      },
      get routes() {
        return o;
      },
      get window() {
        return t;
      },
      initialize: Qd,
      subscribe: Yd,
      enableScrollRestoration: rp,
      navigate: xa,
      fetch: qd,
      revalidate: Xd,
      createHref: p => e.history.createHref(p),
      encodeLocation: p => e.history.encodeLocation(p),
      getFetcher: _a,
      deleteFetcher: tp,
      dispose: Kd,
      getBlocker: np,
      deleteBlocker: Na,
      patchRoutes: op,
      _internalFetchControllers: T,
      _internalActiveDeferreds: je,
      _internalSetRoutes: ip,
    }),
    O
  );
}
function pv(e) {
  return (
    e != null && (("formData" in e && e.formData != null) || ("body" in e && e.body !== void 0))
  );
}
function wu(e, t, n, r, l, i, o, u) {
  let a, s;
  if (o) {
    a = [];
    for (let f of t)
      if ((a.push(f), f.route.id === o)) {
        s = f;
        break;
      }
  } else ((a = t), (s = t[t.length - 1]));
  let d = ga(l || ".", ya(a, i), vr(e.pathname, n) || e.pathname, u === "path");
  if (
    (l == null && ((d.search = e.search), (d.hash = e.hash)),
    (l == null || l === "" || l === ".") && s)
  ) {
    let f = Ea(d.search);
    if (s.route.index && !f) d.search = d.search ? d.search.replace(/^\?/, "?index&") : "?index";
    else if (!s.route.index && f) {
      let h = new URLSearchParams(d.search),
        w = h.getAll("index");
      (h.delete("index"), w.filter(E => E).forEach(E => h.append("index", E)));
      let k = h.toString();
      d.search = k ? "?" + k : "";
    }
  }
  return (r && n !== "/" && (d.pathname = d.pathname === "/" ? n : Dt([n, d.pathname])), Nn(d));
}
function Xs(e, t, n, r) {
  if (!r || !pv(r)) return { path: n };
  if (r.formMethod && !Pv(r.formMethod))
    return { path: n, error: $e(405, { method: r.formMethod }) };
  let l = () => ({ path: n, error: $e(400, { type: "invalid-body" }) }),
    i = r.formMethod || "get",
    o = e ? i.toUpperCase() : i.toLowerCase(),
    u = Fd(n);
  if (r.body !== void 0) {
    if (r.formEncType === "text/plain") {
      if (!pt(o)) return l();
      let h =
        typeof r.body == "string"
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
            ? Array.from(r.body.entries()).reduce((w, k) => {
                let [E, D] = k;
                return (
                  "" +
                  w +
                  E +
                  "=" +
                  D +
                  `
`
                );
              }, "")
            : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: o,
          formAction: u,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: h,
        },
      };
    } else if (r.formEncType === "application/json") {
      if (!pt(o)) return l();
      try {
        let h = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: o,
            formAction: u,
            formEncType: r.formEncType,
            formData: void 0,
            json: h,
            text: void 0,
          },
        };
      } catch {
        return l();
      }
    }
  }
  Y(typeof FormData == "function", "FormData is not available in this environment");
  let a, s;
  if (r.formData) ((a = Eu(r.formData)), (s = r.formData));
  else if (r.body instanceof FormData) ((a = Eu(r.body)), (s = r.body));
  else if (r.body instanceof URLSearchParams) ((a = r.body), (s = ec(a)));
  else if (r.body == null) ((a = new URLSearchParams()), (s = new FormData()));
  else
    try {
      ((a = new URLSearchParams(r.body)), (s = ec(a)));
    } catch {
      return l();
    }
  let d = {
    formMethod: o,
    formAction: u,
    formEncType: (r && r.formEncType) || "application/x-www-form-urlencoded",
    formData: s,
    json: void 0,
    text: void 0,
  };
  if (pt(d.formMethod)) return { path: n, submission: d };
  let f = cn(n);
  return (
    t && f.search && Ea(f.search) && a.append("index", ""),
    (f.search = "?" + a),
    { path: Nn(f), submission: d }
  );
}
function Gs(e, t, n) {
  n === void 0 && (n = !1);
  let r = e.findIndex(l => l.route.id === t);
  return r >= 0 ? e.slice(0, n ? r + 1 : r) : e;
}
function Js(e, t, n, r, l, i, o, u, a, s, d, f, h, w, k, E) {
  let D = E ? (Ge(E[1]) ? E[1].error : E[1].data) : void 0,
    m = e.createURL(t.location),
    c = e.createURL(l),
    v = n;
  i && t.errors ? (v = Gs(n, Object.keys(t.errors)[0], !0)) : E && Ge(E[1]) && (v = Gs(n, E[0]));
  let x = E ? E[1].statusCode : void 0,
    L = o && x && x >= 400,
    O = v.filter((P, B) => {
      let { route: M } = P;
      if (M.lazy) return !0;
      if (M.loader == null) return !1;
      if (i) return Su(M, t.loaderData, t.errors);
      if (hv(t.loaderData, t.matches[B], P) || a.some(Se => Se === P.route.id)) return !0;
      let ee = t.matches[B],
        re = P;
      return Zs(
        P,
        ae({ currentUrl: m, currentParams: ee.params, nextUrl: c, nextParams: re.params }, r, {
          actionResult: D,
          actionStatus: x,
          defaultShouldRevalidate: L
            ? !1
            : u ||
              m.pathname + m.search === c.pathname + c.search ||
              m.search !== c.search ||
              Od(ee, re),
        }),
      );
    }),
    y = [];
  return (
    f.forEach((P, B) => {
      if (i || !n.some(Pe => Pe.route.id === P.routeId) || d.has(B)) return;
      let M = yn(w, P.path, k);
      if (!M) {
        y.push({
          key: B,
          routeId: P.routeId,
          path: P.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let ee = t.fetchers.get(B),
        re = Fr(M, P.path),
        Se = !1;
      (h.has(B)
        ? (Se = !1)
        : s.has(B)
          ? (s.delete(B), (Se = !0))
          : ee && ee.state !== "idle" && ee.data === void 0
            ? (Se = u)
            : (Se = Zs(
                re,
                ae(
                  {
                    currentUrl: m,
                    currentParams: t.matches[t.matches.length - 1].params,
                    nextUrl: c,
                    nextParams: n[n.length - 1].params,
                  },
                  r,
                  { actionResult: D, actionStatus: x, defaultShouldRevalidate: L ? !1 : u },
                ),
              )),
        Se &&
          y.push({
            key: B,
            routeId: P.routeId,
            path: P.path,
            matches: M,
            match: re,
            controller: new AbortController(),
          }));
    }),
    [O, y]
  );
}
function Su(e, t, n) {
  if (e.lazy) return !0;
  if (!e.loader) return !1;
  let r = t != null && t[e.id] !== void 0,
    l = n != null && n[e.id] !== void 0;
  return !r && l ? !1 : typeof e.loader == "function" && e.loader.hydrate === !0 ? !0 : !r && !l;
}
function hv(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    l = e[n.route.id] === void 0;
  return r || l;
}
function Od(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname || (n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function Zs(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == "boolean") return n;
  }
  return t.defaultShouldRevalidate;
}
function qs(e, t, n, r, l) {
  var i;
  let o;
  if (e) {
    let s = r[e];
    (Y(s, "No route found to patch children into: routeId = " + e),
      s.children || (s.children = []),
      (o = s.children));
  } else o = n;
  let u = t.filter(s => !o.some(d => jd(s, d))),
    a = _i(u, l, [e || "_", "patch", String(((i = o) == null ? void 0 : i.length) || "0")], r);
  o.push(...a);
}
function jd(e, t) {
  return "id" in e && "id" in t && e.id === t.id
    ? !0
    : e.index === t.index && e.path === t.path && e.caseSensitive === t.caseSensitive
      ? (!e.children || e.children.length === 0) && (!t.children || t.children.length === 0)
        ? !0
        : e.children.every((n, r) => {
            var l;
            return (l = t.children) == null ? void 0 : l.some(i => jd(n, i));
          })
      : !1;
}
async function mv(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let l = n[e.id];
  Y(l, "No route found in manifest");
  let i = {};
  for (let o in r) {
    let a = l[o] !== void 0 && o !== "hasErrorBoundary";
    (dr(
      !a,
      'Route "' +
        l.id +
        '" has a static property "' +
        o +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + o + '" will be ignored.'),
    ),
      !a && !Am.has(o) && (i[o] = r[o]));
  }
  (Object.assign(l, i), Object.assign(l, ae({}, t(l), { lazy: void 0 })));
}
async function vv(e) {
  let { matches: t } = e,
    n = t.filter(l => l.shouldLoad);
  return (await Promise.all(n.map(l => l.resolve()))).reduce(
    (l, i, o) => Object.assign(l, { [n[o].route.id]: i }),
    {},
  );
}
async function yv(e, t, n, r, l, i, o, u, a, s) {
  let d = i.map(w => (w.route.lazy ? mv(w.route, a, u) : void 0)),
    f = i.map((w, k) => {
      let E = d[k],
        D = l.some(c => c.route.id === w.route.id);
      return ae({}, w, {
        shouldLoad: D,
        resolve: async c => (
          c && r.method === "GET" && (w.route.lazy || w.route.loader) && (D = !0),
          D ? gv(t, r, w, E, c, s) : Promise.resolve({ type: q.data, result: void 0 })
        ),
      });
    }),
    h = await e({ matches: f, request: r, params: i[0].params, fetcherKey: o, context: s });
  try {
    await Promise.all(d);
  } catch {}
  return h;
}
async function gv(e, t, n, r, l, i) {
  let o,
    u,
    a = s => {
      let d,
        f = new Promise((k, E) => (d = E));
      ((u = () => d()), t.signal.addEventListener("abort", u));
      let h = k =>
          typeof s != "function"
            ? Promise.reject(
                new Error(
                  "You cannot call the handler for a route which defines a boolean " +
                    ('"' + e + '" [routeId: ' + n.route.id + "]"),
                ),
              )
            : s({ request: t, params: n.params, context: i }, ...(k !== void 0 ? [k] : [])),
        w = (async () => {
          try {
            return { type: "data", result: await (l ? l(E => h(E)) : h()) };
          } catch (k) {
            return { type: "error", result: k };
          }
        })();
      return Promise.race([w, f]);
    };
  try {
    let s = n.route[e];
    if (r)
      if (s) {
        let d,
          [f] = await Promise.all([
            a(s).catch(h => {
              d = h;
            }),
            r,
          ]);
        if (d !== void 0) throw d;
        o = f;
      } else if ((await r, (s = n.route[e]), s)) o = await a(s);
      else if (e === "action") {
        let d = new URL(t.url),
          f = d.pathname + d.search;
        throw $e(405, { method: t.method, pathname: f, routeId: n.route.id });
      } else return { type: q.data, result: void 0 };
    else if (s) o = await a(s);
    else {
      let d = new URL(t.url),
        f = d.pathname + d.search;
      throw $e(404, { pathname: f });
    }
    Y(
      o.result !== void 0,
      "You defined " +
        (e === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' + n.route.id + "\" but didn't return anything from your `" + e + "` ") +
        "function. Please return a value or `null`.",
    );
  } catch (s) {
    return { type: q.error, result: s };
  } finally {
    u && t.signal.removeEventListener("abort", u);
  }
  return o;
}
async function wv(e) {
  let { result: t, type: n } = e;
  if (Id(t)) {
    let f;
    try {
      let h = t.headers.get("Content-Type");
      h && /\bapplication\/json\b/.test(h)
        ? t.body == null
          ? (f = null)
          : (f = await t.json())
        : (f = await t.text());
    } catch (h) {
      return { type: q.error, error: h };
    }
    return n === q.error
      ? {
          type: q.error,
          error: new Ri(t.status, t.statusText, f),
          statusCode: t.status,
          headers: t.headers,
        }
      : { type: q.data, data: f, statusCode: t.status, headers: t.headers };
  }
  if (n === q.error) {
    if (ic(t)) {
      var r, l;
      if (t.data instanceof Error) {
        var i, o;
        return {
          type: q.error,
          error: t.data,
          statusCode: (i = t.init) == null ? void 0 : i.status,
          headers: (o = t.init) != null && o.headers ? new Headers(t.init.headers) : void 0,
        };
      }
      return {
        type: q.error,
        error: new Ri(((r = t.init) == null ? void 0 : r.status) || 500, void 0, t.data),
        statusCode: cl(t) ? t.status : void 0,
        headers: (l = t.init) != null && l.headers ? new Headers(t.init.headers) : void 0,
      };
    }
    return { type: q.error, error: t, statusCode: cl(t) ? t.status : void 0 };
  }
  if (Cv(t)) {
    var u, a;
    return {
      type: q.deferred,
      deferredData: t,
      statusCode: (u = t.init) == null ? void 0 : u.status,
      headers: ((a = t.init) == null ? void 0 : a.headers) && new Headers(t.init.headers),
    };
  }
  if (ic(t)) {
    var s, d;
    return {
      type: q.data,
      data: t.data,
      statusCode: (s = t.init) == null ? void 0 : s.status,
      headers: (d = t.init) != null && d.headers ? new Headers(t.init.headers) : void 0,
    };
  }
  return { type: q.data, data: t };
}
function Sv(e, t, n, r, l, i) {
  let o = e.headers.get("Location");
  if (
    (Y(o, "Redirects returned/thrown from loaders/actions must have a Location header"),
    !wa.test(o))
  ) {
    let u = r.slice(0, r.findIndex(a => a.route.id === n) + 1);
    ((o = wu(new URL(t.url), u, l, !0, o, i)), e.headers.set("Location", o));
  }
  return e;
}
function bs(e, t, n) {
  if (wa.test(e)) {
    let r = e,
      l = r.startsWith("//") ? new URL(t.protocol + r) : new URL(r),
      i = vr(l.pathname, n) != null;
    if (l.origin === t.origin && i) return l.pathname + l.search + l.hash;
  }
  return e;
}
function An(e, t, n, r) {
  let l = e.createURL(Fd(t)).toString(),
    i = { signal: n };
  if (r && pt(r.formMethod)) {
    let { formMethod: o, formEncType: u } = r;
    ((i.method = o.toUpperCase()),
      u === "application/json"
        ? ((i.headers = new Headers({ "Content-Type": u })), (i.body = JSON.stringify(r.json)))
        : u === "text/plain"
          ? (i.body = r.text)
          : u === "application/x-www-form-urlencoded" && r.formData
            ? (i.body = Eu(r.formData))
            : (i.body = r.formData));
  }
  return new Request(l, i);
}
function Eu(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries()) t.append(n, typeof r == "string" ? r : r.name);
  return t;
}
function ec(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function Ev(e, t, n, r, l) {
  let i = {},
    o = null,
    u,
    a = !1,
    s = {},
    d = n && Ge(n[1]) ? n[1].error : void 0;
  return (
    e.forEach(f => {
      if (!(f.route.id in t)) return;
      let h = f.route.id,
        w = t[h];
      if ((Y(!kn(w), "Cannot handle redirect results in processLoaderData"), Ge(w))) {
        let k = w.error;
        (d !== void 0 && ((k = d), (d = void 0)), (o = o || {}));
        {
          let E = gn(e, h);
          o[E.route.id] == null && (o[E.route.id] = k);
        }
        ((i[h] = void 0),
          a || ((a = !0), (u = cl(w.error) ? w.error.status : 500)),
          w.headers && (s[h] = w.headers));
      } else
        Gt(w)
          ? (r.set(h, w.deferredData),
            (i[h] = w.deferredData.data),
            w.statusCode != null && w.statusCode !== 200 && !a && (u = w.statusCode),
            w.headers && (s[h] = w.headers))
          : ((i[h] = w.data),
            w.statusCode && w.statusCode !== 200 && !a && (u = w.statusCode),
            w.headers && (s[h] = w.headers));
    }),
    d !== void 0 && n && ((o = { [n[0]]: d }), (i[n[0]] = void 0)),
    { loaderData: i, errors: o, statusCode: u || 200, loaderHeaders: s }
  );
}
function tc(e, t, n, r, l, i, o) {
  let { loaderData: u, errors: a } = Ev(t, n, r, o);
  return (
    l.forEach(s => {
      let { key: d, match: f, controller: h } = s,
        w = i[d];
      if ((Y(w, "Did not find corresponding fetcher result"), !(h && h.signal.aborted)))
        if (Ge(w)) {
          let k = gn(e.matches, f == null ? void 0 : f.route.id);
          ((a && a[k.route.id]) || (a = ae({}, a, { [k.route.id]: w.error })),
            e.fetchers.delete(d));
        } else if (kn(w)) Y(!1, "Unhandled fetcher revalidation redirect");
        else if (Gt(w)) Y(!1, "Unhandled fetcher deferred data");
        else {
          let k = Ht(w.data);
          e.fetchers.set(d, k);
        }
    }),
    { loaderData: u, errors: a }
  );
}
function nc(e, t, n, r) {
  let l = ae({}, t);
  for (let i of n) {
    let o = i.route.id;
    if (
      (t.hasOwnProperty(o)
        ? t[o] !== void 0 && (l[o] = t[o])
        : e[o] !== void 0 && i.route.loader && (l[o] = e[o]),
      r && r.hasOwnProperty(o))
    )
      break;
  }
  return l;
}
function rc(e) {
  return e ? (Ge(e[1]) ? { actionData: {} } : { actionData: { [e[0]]: e[1].data } }) : {};
}
function gn(e, t) {
  return (
    (t ? e.slice(0, e.findIndex(r => r.route.id === t) + 1) : [...e])
      .reverse()
      .find(r => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function lc(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find(n => n.index || !n.path || n.path === "/") || { id: "__shim-error-route__" };
  return { matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }], route: t };
}
function $e(e, t) {
  let { pathname: n, routeId: r, method: l, type: i, message: o } = t === void 0 ? {} : t,
    u = "Unknown Server Error",
    a = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((u = "Bad Request"),
        l && n && r
          ? (a =
              "You made a " +
              l +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : i === "defer-action"
            ? (a = "defer() is not supported in actions")
            : i === "invalid-body" && (a = "Unable to encode submission body"))
      : e === 403
        ? ((u = "Forbidden"), (a = 'Route "' + r + '" does not match URL "' + n + '"'))
        : e === 404
          ? ((u = "Not Found"), (a = 'No route matches URL "' + n + '"'))
          : e === 405 &&
            ((u = "Method Not Allowed"),
            l && n && r
              ? (a =
                  "You made a " +
                  l.toUpperCase() +
                  ' request to "' +
                  n +
                  '" but ' +
                  ('did not provide an `action` for route "' + r + '", ') +
                  "so there is no way to handle the request.")
              : l && (a = 'Invalid request method "' + l.toUpperCase() + '"')),
    new Ri(e || 500, u, new Error(a), !0)
  );
}
function Hl(e) {
  let t = Object.entries(e);
  for (let n = t.length - 1; n >= 0; n--) {
    let [r, l] = t[n];
    if (kn(l)) return { key: r, result: l };
  }
}
function Fd(e) {
  let t = typeof e == "string" ? cn(e) : e;
  return Nn(ae({}, t, { hash: "" }));
}
function kv(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
      ? t.hash !== ""
      : e.hash === t.hash
        ? !0
        : t.hash !== "";
}
function xv(e) {
  return Id(e.result) && av.has(e.result.status);
}
function Gt(e) {
  return e.type === q.deferred;
}
function Ge(e) {
  return e.type === q.error;
}
function kn(e) {
  return (e && e.type) === q.redirect;
}
function ic(e) {
  return (
    typeof e == "object" &&
    e != null &&
    "type" in e &&
    "data" in e &&
    "init" in e &&
    e.type === "DataWithResponseInit"
  );
}
function Cv(e) {
  let t = e;
  return (
    t &&
    typeof t == "object" &&
    typeof t.data == "object" &&
    typeof t.subscribe == "function" &&
    typeof t.cancel == "function" &&
    typeof t.resolveData == "function"
  );
}
function Id(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function Pv(e) {
  return uv.has(e.toLowerCase());
}
function pt(e) {
  return iv.has(e.toLowerCase());
}
async function _v(e, t, n, r, l) {
  let i = Object.entries(t);
  for (let o = 0; o < i.length; o++) {
    let [u, a] = i[o],
      s = e.find(h => (h == null ? void 0 : h.route.id) === u);
    if (!s) continue;
    let d = r.find(h => h.route.id === s.route.id),
      f = d != null && !Od(d, s) && (l && l[s.route.id]) !== void 0;
    Gt(a) &&
      f &&
      (await Sa(a, n, !1).then(h => {
        h && (t[u] = h);
      }));
  }
}
async function Rv(e, t, n) {
  for (let r = 0; r < n.length; r++) {
    let { key: l, routeId: i, controller: o } = n[r],
      u = t[l];
    e.find(s => (s == null ? void 0 : s.route.id) === i) &&
      Gt(u) &&
      (Y(o, "Expected an AbortController for revalidating fetcher deferred result"),
      await Sa(u, o.signal, !0).then(s => {
        s && (t[l] = s);
      }));
  }
}
async function Sa(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: q.data, data: e.deferredData.unwrappedData };
      } catch (l) {
        return { type: q.error, error: l };
      }
    return { type: q.data, data: e.deferredData.data };
  }
}
function Ea(e) {
  return new URLSearchParams(e).getAll("index").some(t => t === "");
}
function Fr(e, t) {
  let n = typeof t == "string" ? cn(t).search : t.search;
  if (e[e.length - 1].route.index && Ea(n || "")) return e[e.length - 1];
  let r = Dd(e);
  return r[r.length - 1];
}
function oc(e) {
  let { formMethod: t, formAction: n, formEncType: r, text: l, formData: i, json: o } = e;
  if (!(!t || !n || !r)) {
    if (l != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: l,
      };
    if (i != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: i,
        json: void 0,
        text: void 0,
      };
    if (o !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: o,
        text: void 0,
      };
  }
}
function _o(e, t) {
  return t
    ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function Lv(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function Nr(e, t) {
  return e
    ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function Tv(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function Ht(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function Nv(e, t) {
  try {
    let n = e.sessionStorage.getItem(zd);
    if (n) {
      let r = JSON.parse(n);
      for (let [l, i] of Object.entries(r || {}))
        i && Array.isArray(i) && t.set(l, new Set(i || []));
    }
  } catch {}
}
function Dv(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [r, l] of t) n[r] = [...l];
    try {
      e.sessionStorage.setItem(zd, JSON.stringify(n));
    } catch (r) {
      dr(!1, "Failed to save applied view transitions in sessionStorage (" + r + ").");
    }
  }
}
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Li() {
  return (
    (Li = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Li.apply(this, arguments)
  );
}
const Qi = R.createContext(null),
  Ud = R.createContext(null),
  zn = R.createContext(null),
  ka = R.createContext(null),
  fn = R.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Ad = R.createContext(null);
function Mv(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  yl() || Y(!1);
  let { basename: r, navigator: l } = R.useContext(zn),
    { hash: i, pathname: o, search: u } = $d(e, { relative: n }),
    a = o;
  return (
    r !== "/" && (a = o === "/" ? r : Dt([r, o])),
    l.createHref({ pathname: a, search: u, hash: i })
  );
}
function yl() {
  return R.useContext(ka) != null;
}
function Ki() {
  return (yl() || Y(!1), R.useContext(ka).location);
}
function Bd(e) {
  R.useContext(zn).static || R.useLayoutEffect(e);
}
function zv() {
  let { isDataRoute: e } = R.useContext(fn);
  return e ? Yv() : Ov();
}
function Ov() {
  yl() || Y(!1);
  let e = R.useContext(Qi),
    { basename: t, future: n, navigator: r } = R.useContext(zn),
    { matches: l } = R.useContext(fn),
    { pathname: i } = Ki(),
    o = JSON.stringify(ya(l, n.v7_relativeSplatPath)),
    u = R.useRef(!1);
  return (
    Bd(() => {
      u.current = !0;
    }),
    R.useCallback(
      function (s, d) {
        if ((d === void 0 && (d = {}), !u.current)) return;
        if (typeof s == "number") {
          r.go(s);
          return;
        }
        let f = ga(s, JSON.parse(o), i, d.relative === "path");
        (e == null && t !== "/" && (f.pathname = f.pathname === "/" ? t : Dt([t, f.pathname])),
          (d.replace ? r.replace : r.push)(f, d.state, d));
      },
      [t, r, o, i, e],
    )
  );
}
const jv = R.createContext(null);
function Fv(e) {
  let t = R.useContext(fn).outlet;
  return t && R.createElement(jv.Provider, { value: e }, t);
}
function $d(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = R.useContext(zn),
    { matches: l } = R.useContext(fn),
    { pathname: i } = Ki(),
    o = JSON.stringify(ya(l, r.v7_relativeSplatPath));
  return R.useMemo(() => ga(e, JSON.parse(o), i, n === "path"), [e, o, i, n]);
}
function Iv(e, t, n, r) {
  yl() || Y(!1);
  let { navigator: l } = R.useContext(zn),
    { matches: i } = R.useContext(fn),
    o = i[i.length - 1],
    u = o ? o.params : {};
  o && o.pathname;
  let a = o ? o.pathnameBase : "/";
  o && o.route;
  let s = Ki(),
    d;
  d = s;
  let f = d.pathname || "/",
    h = f;
  if (a !== "/") {
    let E = a.replace(/^\//, "").split("/");
    h = "/" + f.replace(/^\//, "").split("/").slice(E.length).join("/");
  }
  let w = yn(e, { pathname: h });
  return Hv(
    w &&
      w.map(E =>
        Object.assign({}, E, {
          params: Object.assign({}, u, E.params),
          pathname: Dt([a, l.encodeLocation ? l.encodeLocation(E.pathname).pathname : E.pathname]),
          pathnameBase:
            E.pathnameBase === "/"
              ? a
              : Dt([
                  a,
                  l.encodeLocation ? l.encodeLocation(E.pathnameBase).pathname : E.pathnameBase,
                ]),
        }),
      ),
    i,
    n,
    r,
  );
}
function Uv() {
  let e = Kv(),
    t = cl(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return R.createElement(
    R.Fragment,
    null,
    R.createElement("h2", null, "Unexpected Application Error!"),
    R.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? R.createElement("pre", { style: l }, n) : null,
    null,
  );
}
const Av = R.createElement(Uv, null);
class Bv extends R.Component {
  constructor(t) {
    (super(t),
      (this.state = { location: t.location, revalidation: t.revalidation, error: t.error }));
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location || (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error("React Router caught the following error during render", t, n);
  }
  render() {
    return this.state.error !== void 0
      ? R.createElement(
          fn.Provider,
          { value: this.props.routeContext },
          R.createElement(Ad.Provider, { value: this.state.error, children: this.props.component }),
        )
      : this.props.children;
  }
}
function $v(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = R.useContext(Qi);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    R.createElement(fn.Provider, { value: t }, r)
  );
}
function Hv(e, t, n, r) {
  var l;
  if (
    (t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null)
  ) {
    var i;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (i = r) != null &&
      i.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let o = e,
    u = (l = n) == null ? void 0 : l.errors;
  if (u != null) {
    let d = o.findIndex(f => f.route.id && (u == null ? void 0 : u[f.route.id]) !== void 0);
    (d >= 0 || Y(!1), (o = o.slice(0, Math.min(o.length, d + 1))));
  }
  let a = !1,
    s = -1;
  if (n && r && r.v7_partialHydration)
    for (let d = 0; d < o.length; d++) {
      let f = o[d];
      if (((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (s = d), f.route.id)) {
        let { loaderData: h, errors: w } = n,
          k = f.route.loader && h[f.route.id] === void 0 && (!w || w[f.route.id] === void 0);
        if (f.route.lazy || k) {
          ((a = !0), s >= 0 ? (o = o.slice(0, s + 1)) : (o = [o[0]]));
          break;
        }
      }
    }
  return o.reduceRight((d, f, h) => {
    let w,
      k = !1,
      E = null,
      D = null;
    n &&
      ((w = u && f.route.id ? u[f.route.id] : void 0),
      (E = f.route.errorElement || Av),
      a &&
        (s < 0 && h === 0
          ? (Xv("route-fallback"), (k = !0), (D = null))
          : s === h && ((k = !0), (D = f.route.hydrateFallbackElement || null))));
    let m = t.concat(o.slice(0, h + 1)),
      c = () => {
        let v;
        return (
          w
            ? (v = E)
            : k
              ? (v = D)
              : f.route.Component
                ? (v = R.createElement(f.route.Component, null))
                : f.route.element
                  ? (v = f.route.element)
                  : (v = d),
          R.createElement($v, {
            match: f,
            routeContext: { outlet: d, matches: m, isDataRoute: n != null },
            children: v,
          })
        );
      };
    return n && (f.route.ErrorBoundary || f.route.errorElement || h === 0)
      ? R.createElement(Bv, {
          location: n.location,
          revalidation: n.revalidation,
          component: E,
          error: w,
          children: c(),
          routeContext: { outlet: null, matches: m, isDataRoute: !0 },
        })
      : c();
  }, null);
}
var Hd = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Hd || {}),
  Vd = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(Vd || {});
function Vv(e) {
  let t = R.useContext(Qi);
  return (t || Y(!1), t);
}
function Wv(e) {
  let t = R.useContext(Ud);
  return (t || Y(!1), t);
}
function Qv(e) {
  let t = R.useContext(fn);
  return (t || Y(!1), t);
}
function Wd(e) {
  let t = Qv(),
    n = t.matches[t.matches.length - 1];
  return (n.route.id || Y(!1), n.route.id);
}
function Kv() {
  var e;
  let t = R.useContext(Ad),
    n = Wv(Vd.UseRouteError),
    r = Wd();
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function Yv() {
  let { router: e } = Vv(Hd.UseNavigateStable),
    t = Wd(),
    n = R.useRef(!1);
  return (
    Bd(() => {
      n.current = !0;
    }),
    R.useCallback(
      function (l, i) {
        (i === void 0 && (i = {}),
          n.current &&
            (typeof l == "number" ? e.navigate(l) : e.navigate(l, Li({ fromRouteId: t }, i))));
      },
      [e, t],
    )
  );
}
const uc = {};
function Xv(e, t, n) {
  uc[e] || (uc[e] = !0);
}
function Gv(e, t) {
  (e == null || e.v7_startTransition,
    (e == null ? void 0 : e.v7_relativeSplatPath) === void 0 && (!t || t.v7_relativeSplatPath),
    t &&
      (t.v7_fetcherPersist,
      t.v7_normalizeFormMethod,
      t.v7_partialHydration,
      t.v7_skipActionErrorRevalidation));
}
function Jv(e) {
  return Fv(e.context);
}
function Zv(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: l = ge.Pop,
    navigator: i,
    static: o = !1,
    future: u,
  } = e;
  yl() && Y(!1);
  let a = t.replace(/^\/*/, "/"),
    s = R.useMemo(
      () => ({ basename: a, navigator: i, static: o, future: Li({ v7_relativeSplatPath: !1 }, u) }),
      [a, u, i, o],
    );
  typeof r == "string" && (r = cn(r));
  let { pathname: d = "/", search: f = "", hash: h = "", state: w = null, key: k = "default" } = r,
    E = R.useMemo(() => {
      let D = vr(d, a);
      return D == null
        ? null
        : { location: { pathname: D, search: f, hash: h, state: w, key: k }, navigationType: l };
    }, [a, d, f, h, w, k, l]);
  return E == null
    ? null
    : R.createElement(
        zn.Provider,
        { value: s },
        R.createElement(ka.Provider, { children: n, value: E }),
      );
}
new Promise(() => {});
function qv(e) {
  let t = { hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null };
  return (
    e.Component && Object.assign(t, { element: R.createElement(e.Component), Component: void 0 }),
    e.HydrateFallback &&
      Object.assign(t, {
        hydrateFallbackElement: R.createElement(e.HydrateFallback),
        HydrateFallback: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, { errorElement: R.createElement(e.ErrorBoundary), ErrorBoundary: void 0 }),
    t
  );
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function fl() {
  return (
    (fl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    fl.apply(this, arguments)
  );
}
function bv(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    i;
  for (i = 0; i < r.length; i++) ((l = r[i]), !(t.indexOf(l) >= 0) && (n[l] = e[l]));
  return n;
}
function ey(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function ty(e, t) {
  return e.button === 0 && (!t || t === "_self") && !ey(e);
}
const ny = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "viewTransition",
  ],
  ry = "6";
try {
  window.__reactRouterVersion = ry;
} catch {}
function ly(e, t) {
  return dv({
    basename: void 0,
    future: fl({}, void 0, { v7_prependBasename: !0 }),
    history: Fm({ window: void 0 }),
    hydrationData: iy(),
    routes: e,
    mapRouteProperties: qv,
    dataStrategy: void 0,
    patchRoutesOnNavigation: void 0,
    window: void 0,
  }).initialize();
}
function iy() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return (t && t.errors && (t = fl({}, t, { errors: oy(t.errors) })), t);
}
function oy(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, l] of t)
    if (l && l.__type === "RouteErrorResponse")
      n[r] = new Ri(l.status, l.statusText, l.data, l.internal === !0);
    else if (l && l.__type === "Error") {
      if (l.__subType) {
        let i = window[l.__subType];
        if (typeof i == "function")
          try {
            let o = new i(l.message);
            ((o.stack = ""), (n[r] = o));
          } catch {}
      }
      if (n[r] == null) {
        let i = new Error(l.message);
        ((i.stack = ""), (n[r] = i));
      }
    } else n[r] = l;
  return n;
}
const uy = R.createContext({ isTransitioning: !1 }),
  ay = R.createContext(new Map()),
  sy = "startTransition",
  ac = xp[sy],
  cy = "flushSync",
  sc = jm[cy];
function fy(e) {
  ac ? ac(e) : e();
}
function Dr(e) {
  sc ? sc(e) : e();
}
class dy {
  constructor() {
    ((this.status = "pending"),
      (this.promise = new Promise((t, n) => {
        ((this.resolve = r => {
          this.status === "pending" && ((this.status = "resolved"), t(r));
        }),
          (this.reject = r => {
            this.status === "pending" && ((this.status = "rejected"), n(r));
          }));
      })));
  }
}
function py(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [l, i] = R.useState(n.state),
    [o, u] = R.useState(),
    [a, s] = R.useState({ isTransitioning: !1 }),
    [d, f] = R.useState(),
    [h, w] = R.useState(),
    [k, E] = R.useState(),
    D = R.useRef(new Map()),
    { v7_startTransition: m } = r || {},
    c = R.useCallback(
      P => {
        m ? fy(P) : P();
      },
      [m],
    ),
    v = R.useCallback(
      (P, B) => {
        let { deletedFetchers: M, flushSync: ee, viewTransitionOpts: re } = B;
        (P.fetchers.forEach((Pe, at) => {
          Pe.data !== void 0 && D.current.set(at, Pe.data);
        }),
          M.forEach(Pe => D.current.delete(Pe)));
        let Se =
          n.window == null ||
          n.window.document == null ||
          typeof n.window.document.startViewTransition != "function";
        if (!re || Se) {
          ee ? Dr(() => i(P)) : c(() => i(P));
          return;
        }
        if (ee) {
          Dr(() => {
            (h && (d && d.resolve(), h.skipTransition()),
              s({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: re.currentLocation,
                nextLocation: re.nextLocation,
              }));
          });
          let Pe = n.window.document.startViewTransition(() => {
            Dr(() => i(P));
          });
          (Pe.finished.finally(() => {
            Dr(() => {
              (f(void 0), w(void 0), u(void 0), s({ isTransitioning: !1 }));
            });
          }),
            Dr(() => w(Pe)));
          return;
        }
        h
          ? (d && d.resolve(),
            h.skipTransition(),
            E({ state: P, currentLocation: re.currentLocation, nextLocation: re.nextLocation }))
          : (u(P),
            s({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: re.currentLocation,
              nextLocation: re.nextLocation,
            }));
      },
      [n.window, h, d, D, c],
    );
  (R.useLayoutEffect(() => n.subscribe(v), [n, v]),
    R.useEffect(() => {
      a.isTransitioning && !a.flushSync && f(new dy());
    }, [a]),
    R.useEffect(() => {
      if (d && o && n.window) {
        let P = o,
          B = d.promise,
          M = n.window.document.startViewTransition(async () => {
            (c(() => i(P)), await B);
          });
        (M.finished.finally(() => {
          (f(void 0), w(void 0), u(void 0), s({ isTransitioning: !1 }));
        }),
          w(M));
      }
    }, [c, o, d, n.window]),
    R.useEffect(() => {
      d && o && l.location.key === o.location.key && d.resolve();
    }, [d, h, l.location, o]),
    R.useEffect(() => {
      !a.isTransitioning &&
        k &&
        (u(k.state),
        s({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: k.currentLocation,
          nextLocation: k.nextLocation,
        }),
        E(void 0));
    }, [a.isTransitioning, k]),
    R.useEffect(() => {}, []));
  let x = R.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: P => n.navigate(P),
        push: (P, B, M) =>
          n.navigate(P, {
            state: B,
            preventScrollReset: M == null ? void 0 : M.preventScrollReset,
          }),
        replace: (P, B, M) =>
          n.navigate(P, {
            replace: !0,
            state: B,
            preventScrollReset: M == null ? void 0 : M.preventScrollReset,
          }),
      }),
      [n],
    ),
    L = n.basename || "/",
    O = R.useMemo(() => ({ router: n, navigator: x, static: !1, basename: L }), [n, x, L]),
    y = R.useMemo(
      () => ({ v7_relativeSplatPath: n.future.v7_relativeSplatPath }),
      [n.future.v7_relativeSplatPath],
    );
  return (
    R.useEffect(() => Gv(r, n.future), [r, n.future]),
    R.createElement(
      R.Fragment,
      null,
      R.createElement(
        Qi.Provider,
        { value: O },
        R.createElement(
          Ud.Provider,
          { value: l },
          R.createElement(
            ay.Provider,
            { value: D.current },
            R.createElement(
              uy.Provider,
              { value: a },
              R.createElement(
                Zv,
                {
                  basename: L,
                  location: l.location,
                  navigationType: l.historyAction,
                  navigator: x,
                  future: y,
                },
                l.initialized || n.future.v7_partialHydration
                  ? R.createElement(hy, { routes: n.routes, future: n.future, state: l })
                  : t,
              ),
            ),
          ),
        ),
      ),
      null,
    )
  );
}
const hy = R.memo(my);
function my(e) {
  let { routes: t, future: n, state: r } = e;
  return Iv(t, void 0, r, n);
}
const vy =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  yy = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Bn = R.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: l,
        reloadDocument: i,
        replace: o,
        state: u,
        target: a,
        to: s,
        preventScrollReset: d,
        viewTransition: f,
      } = t,
      h = bv(t, ny),
      { basename: w } = R.useContext(zn),
      k,
      E = !1;
    if (typeof s == "string" && yy.test(s) && ((k = s), vy))
      try {
        let v = new URL(window.location.href),
          x = s.startsWith("//") ? new URL(v.protocol + s) : new URL(s),
          L = vr(x.pathname, w);
        x.origin === v.origin && L != null ? (s = L + x.search + x.hash) : (E = !0);
      } catch {}
    let D = Mv(s, { relative: l }),
      m = gy(s, {
        replace: o,
        state: u,
        target: a,
        preventScrollReset: d,
        relative: l,
        viewTransition: f,
      });
    function c(v) {
      (r && r(v), v.defaultPrevented || m(v));
    }
    return R.createElement(
      "a",
      fl({}, h, { href: k || D, onClick: E || i ? r : c, ref: n, target: a }),
    );
  });
var cc;
(function (e) {
  ((e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState"));
})(cc || (cc = {}));
var fc;
(function (e) {
  ((e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration"));
})(fc || (fc = {}));
function gy(e, t) {
  let {
      target: n,
      replace: r,
      state: l,
      preventScrollReset: i,
      relative: o,
      viewTransition: u,
    } = t === void 0 ? {} : t,
    a = zv(),
    s = Ki(),
    d = $d(e, { relative: o });
  return R.useCallback(
    f => {
      if (ty(f, n)) {
        f.preventDefault();
        let h = r !== void 0 ? r : Nn(s) === Nn(d);
        a(e, { replace: h, state: l, preventScrollReset: i, relative: o, viewTransition: u });
      }
    },
    [s, a, d, r, l, n, e, i, o, u],
  );
}
function wy() {
  return Q.jsxs("div", {
    className: "min-h-screen bg-gray-50 text-gray-900",
    children: [
      Q.jsx("header", {
        className: "border-b bg-white",
        children: Q.jsxs("div", {
          className: "mx-auto max-w-5xl flex items-center gap-4 p-4",
          children: [
            Q.jsx("h1", { className: "font-bold", children: "Skillshare Hub" }),
            Q.jsxs("nav", {
              className: "flex gap-3 text-sm",
              children: [
                Q.jsx(Bn, { to: "/", children: "Home" }),
                Q.jsx(Bn, { to: "/search", children: "Search" }),
                Q.jsx(Bn, { to: "/schedule", children: "Schedule" }),
                Q.jsx(Bn, { to: "/chat", children: "Chat" }),
                Q.jsx(Bn, { to: "/profile", children: "Profile" }),
                Q.jsx(Bn, { to: "/auth/login", children: "Login" }),
              ],
            }),
          ],
        }),
      }),
      Q.jsx("main", { className: "mx-auto max-w-5xl p-6", children: Q.jsx(Jv, {}) }),
    ],
  });
}
function Sy() {
  return Q.jsx("div", { children: "Home" });
}
function Ey() {
  return Q.jsx("div", { children: "Profile" });
}
function ky() {
  return Q.jsx("div", { children: "Search" });
}
function xy() {
  return Q.jsx("div", { children: "Schedule" });
}
function Cy() {
  return Q.jsx("div", { children: "Chat" });
}
const Py = wy ?? void 0 ?? (() => Q.jsx("div", { children: "App" })),
  _y = Sy ?? void 0 ?? (() => Q.jsx("div", { children: "Home" })),
  Ry = () => Q.jsx("div", { children: "Login" }),
  Ly = () => Q.jsx("div", { children: "Register" }),
  Ty = Ey ?? void 0 ?? (() => Q.jsx("div", { children: "Profile" })),
  Ny = ky ?? void 0 ?? (() => Q.jsx("div", { children: "Search" })),
  Dy = xy ?? void 0 ?? (() => Q.jsx("div", { children: "Schedule" })),
  My = Cy ?? void 0 ?? (() => Q.jsx("div", { children: "Chat" })),
  zy = ly([
    {
      path: "/",
      element: Q.jsx(Py, {}),
      children: [
        { index: !0, element: Q.jsx(_y, {}) },
        { path: "auth/login", element: Q.jsx(Ry, {}) },
        { path: "auth/register", element: Q.jsx(Ly, {}) },
        { path: "profile", element: Q.jsx(Ty, {}) },
        { path: "search", element: Q.jsx(Ny, {}) },
        { path: "schedule", element: Q.jsx(Dy, {}) },
        { path: "chat", element: Q.jsx(My, {}) },
      ],
    },
    { path: "*", element: Q.jsx("div", { children: "Not found" }) },
  ]);
Ld(document.getElementById("root")).render(
  Q.jsx(Cc.StrictMode, { children: Q.jsx(py, { router: zy }) }),
);
