function zc(e, t) {
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
function Oc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ic = { exports: {} },
  Wi = {},
  Fc = { exports: {} },
  Y = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _l = Symbol.for("react.element"),
  Dp = Symbol.for("react.portal"),
  Mp = Symbol.for("react.fragment"),
  zp = Symbol.for("react.strict_mode"),
  Op = Symbol.for("react.profiler"),
  Ip = Symbol.for("react.provider"),
  Fp = Symbol.for("react.context"),
  Up = Symbol.for("react.forward_ref"),
  Ap = Symbol.for("react.suspense"),
  Bp = Symbol.for("react.memo"),
  $p = Symbol.for("react.lazy"),
  es = Symbol.iterator;
function Hp(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (es && e[es]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var Uc = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Ac = Object.assign,
  Bc = {};
function _r(e, t, n) {
  ((this.props = e), (this.context = t), (this.refs = Bc), (this.updater = n || Uc));
}
_r.prototype.isReactComponent = {};
_r.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
_r.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function $c() {}
$c.prototype = _r.prototype;
function Ba(e, t, n) {
  ((this.props = e), (this.context = t), (this.refs = Bc), (this.updater = n || Uc));
}
var $a = (Ba.prototype = new $c());
$a.constructor = Ba;
Ac($a, _r.prototype);
$a.isPureReactComponent = !0;
var ts = Array.isArray,
  Hc = Object.prototype.hasOwnProperty,
  Ha = { current: null },
  Wc = { key: !0, ref: !0, __self: !0, __source: !0 };
function Vc(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (i = "" + t.key), t))
      Hc.call(t, r) && !Wc.hasOwnProperty(r) && (l[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) l.children = n;
  else if (1 < a) {
    for (var u = Array(a), s = 0; s < a; s++) u[s] = arguments[s + 2];
    l.children = u;
  }
  if (e && e.defaultProps) for (r in ((a = e.defaultProps), a)) l[r] === void 0 && (l[r] = a[r]);
  return { $$typeof: _l, type: e, key: i, ref: o, props: l, _owner: Ha.current };
}
function Wp(e, t) {
  return { $$typeof: _l, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Wa(e) {
  return typeof e == "object" && e !== null && e.$$typeof === _l;
}
function Vp(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var ns = /\/+/g;
function po(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Vp("" + e.key) : t.toString(36);
}
function ni(e, t, n, r, l) {
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
          case _l:
          case Dp:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === "" ? "." + po(o, 0) : r),
      ts(l)
        ? ((n = ""),
          e != null && (n = e.replace(ns, "$&/") + "/"),
          ni(l, t, n, "", function (s) {
            return s;
          }))
        : l != null &&
          (Wa(l) &&
            (l = Wp(
              l,
              n +
                (!l.key || (o && o.key === l.key) ? "" : ("" + l.key).replace(ns, "$&/") + "/") +
                e,
            )),
          t.push(l)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), ts(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var u = r + po(i, a);
      o += ni(i, t, n, u, l);
    }
  else if (((u = Hp(e)), typeof u == "function"))
    for (e = u.call(e), a = 0; !(i = e.next()).done; )
      ((i = i.value), (u = r + po(i, a++)), (o += ni(i, t, n, u, l)));
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
function Il(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    ni(e, r, "", "", function (i) {
      return t.call(n, i, l++);
    }),
    r
  );
}
function Qp(e) {
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
var $e = { current: null },
  ri = { transition: null },
  Kp = { ReactCurrentDispatcher: $e, ReactCurrentBatchConfig: ri, ReactCurrentOwner: Ha };
function Qc() {
  throw Error("act(...) is not supported in production builds of React.");
}
Y.Children = {
  map: Il,
  forEach: function (e, t, n) {
    Il(
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
      Il(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Il(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Wa(e))
      throw Error("React.Children.only expected to receive a single React element child.");
    return e;
  },
};
Y.Component = _r;
Y.Fragment = Mp;
Y.Profiler = Op;
Y.PureComponent = Ba;
Y.StrictMode = zp;
Y.Suspense = Ap;
Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Kp;
Y.act = Qc;
Y.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " + e + ".",
    );
  var r = Ac({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = Ha.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (u in t)
      Hc.call(t, u) &&
        !Wc.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    a = Array(u);
    for (var s = 0; s < u; s++) a[s] = arguments[s + 2];
    r.children = a;
  }
  return { $$typeof: _l, type: e.type, key: l, ref: i, props: r, _owner: o };
};
Y.createContext = function (e) {
  return (
    (e = {
      $$typeof: Fp,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Ip, _context: e }),
    (e.Consumer = e)
  );
};
Y.createElement = Vc;
Y.createFactory = function (e) {
  var t = Vc.bind(null, e);
  return ((t.type = e), t);
};
Y.createRef = function () {
  return { current: null };
};
Y.forwardRef = function (e) {
  return { $$typeof: Up, render: e };
};
Y.isValidElement = Wa;
Y.lazy = function (e) {
  return { $$typeof: $p, _payload: { _status: -1, _result: e }, _init: Qp };
};
Y.memo = function (e, t) {
  return { $$typeof: Bp, type: e, compare: t === void 0 ? null : t };
};
Y.startTransition = function (e) {
  var t = ri.transition;
  ri.transition = {};
  try {
    e();
  } finally {
    ri.transition = t;
  }
};
Y.unstable_act = Qc;
Y.useCallback = function (e, t) {
  return $e.current.useCallback(e, t);
};
Y.useContext = function (e) {
  return $e.current.useContext(e);
};
Y.useDebugValue = function () {};
Y.useDeferredValue = function (e) {
  return $e.current.useDeferredValue(e);
};
Y.useEffect = function (e, t) {
  return $e.current.useEffect(e, t);
};
Y.useId = function () {
  return $e.current.useId();
};
Y.useImperativeHandle = function (e, t, n) {
  return $e.current.useImperativeHandle(e, t, n);
};
Y.useInsertionEffect = function (e, t) {
  return $e.current.useInsertionEffect(e, t);
};
Y.useLayoutEffect = function (e, t) {
  return $e.current.useLayoutEffect(e, t);
};
Y.useMemo = function (e, t) {
  return $e.current.useMemo(e, t);
};
Y.useReducer = function (e, t, n) {
  return $e.current.useReducer(e, t, n);
};
Y.useRef = function (e) {
  return $e.current.useRef(e);
};
Y.useState = function (e) {
  return $e.current.useState(e);
};
Y.useSyncExternalStore = function (e, t, n) {
  return $e.current.useSyncExternalStore(e, t, n);
};
Y.useTransition = function () {
  return $e.current.useTransition();
};
Y.version = "18.3.1";
Fc.exports = Y;
var C = Fc.exports;
const Kc = Oc(C),
  Yp = zc({ __proto__: null, default: Kc }, [C]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xp = C,
  Gp = Symbol.for("react.element"),
  Jp = Symbol.for("react.fragment"),
  Zp = Object.prototype.hasOwnProperty,
  qp = Xp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  bp = { key: !0, ref: !0, __self: !0, __source: !0 };
function Yc(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  (n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref));
  for (r in t) Zp.call(t, r) && !bp.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: Gp, type: e, key: i, ref: o, props: l, _owner: qp.current };
}
Wi.Fragment = Jp;
Wi.jsx = Yc;
Wi.jsxs = Yc;
Ic.exports = Wi;
var w = Ic.exports,
  Xc = { exports: {} },
  tt = {},
  Gc = { exports: {} },
  Jc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(j, H) {
    var V = j.length;
    j.push(H);
    e: for (; 0 < V; ) {
      var te = (V - 1) >>> 1,
        ne = j[te];
      if (0 < l(ne, H)) ((j[te] = H), (j[V] = ne), (V = te));
      else break e;
    }
  }
  function n(j) {
    return j.length === 0 ? null : j[0];
  }
  function r(j) {
    if (j.length === 0) return null;
    var H = j[0],
      V = j.pop();
    if (V !== H) {
      j[0] = V;
      e: for (var te = 0, ne = j.length, ft = ne >>> 1; te < ft; ) {
        var Ge = 2 * (te + 1) - 1,
          Ie = j[Ge],
          Fe = Ge + 1,
          rt = j[Fe];
        if (0 > l(Ie, V))
          Fe < ne && 0 > l(rt, Ie)
            ? ((j[te] = rt), (j[Fe] = V), (te = Fe))
            : ((j[te] = Ie), (j[Ge] = V), (te = Ge));
        else if (Fe < ne && 0 > l(rt, V)) ((j[te] = rt), (j[Fe] = V), (te = Fe));
        else break e;
      }
    }
    return H;
  }
  function l(j, H) {
    var V = j.sortIndex - H.sortIndex;
    return V !== 0 ? V : j.id - H.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      a = o.now();
    e.unstable_now = function () {
      return o.now() - a;
    };
  }
  var u = [],
    s = [],
    f = 1,
    d = null,
    p = 3,
    S = !1,
    x = !1,
    E = !1,
    T = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(j) {
    for (var H = n(s); H !== null; ) {
      if (H.callback === null) r(s);
      else if (H.startTime <= j) (r(s), (H.sortIndex = H.expirationTime), t(u, H));
      else break;
      H = n(s);
    }
  }
  function k(j) {
    if (((E = !1), v(j), !x))
      if (n(u) !== null) ((x = !0), Qt(L));
      else {
        var H = n(s);
        H !== null && Kt(k, H.startTime - j);
      }
  }
  function L(j, H) {
    ((x = !1), E && ((E = !1), m(P), (P = -1)), (S = !0));
    var V = p;
    try {
      for (v(H), d = n(u); d !== null && (!(d.expirationTime > H) || (j && !q())); ) {
        var te = d.callback;
        if (typeof te == "function") {
          ((d.callback = null), (p = d.priorityLevel));
          var ne = te(d.expirationTime <= H);
          ((H = e.unstable_now()),
            typeof ne == "function" ? (d.callback = ne) : d === n(u) && r(u),
            v(H));
        } else r(u);
        d = n(u);
      }
      if (d !== null) var ft = !0;
      else {
        var Ge = n(s);
        (Ge !== null && Kt(k, Ge.startTime - H), (ft = !1));
      }
      return ft;
    } finally {
      ((d = null), (p = V), (S = !1));
    }
  }
  var z = !1,
    g = null,
    P = -1,
    $ = 5,
    D = -1;
  function q() {
    return !(e.unstable_now() - D < $);
  }
  function re() {
    if (g !== null) {
      var j = e.unstable_now();
      D = j;
      var H = !0;
      try {
        H = g(!0, j);
      } finally {
        H ? xe() : ((z = !1), (g = null));
      }
    } else z = !1;
  }
  var xe;
  if (typeof c == "function")
    xe = function () {
      c(re);
    };
  else if (typeof MessageChannel < "u") {
    var Pe = new MessageChannel(),
      ct = Pe.port2;
    ((Pe.port1.onmessage = re),
      (xe = function () {
        ct.postMessage(null);
      }));
  } else
    xe = function () {
      T(re, 0);
    };
  function Qt(j) {
    ((g = j), z || ((z = !0), xe()));
  }
  function Kt(j, H) {
    P = T(function () {
      j(e.unstable_now());
    }, H);
  }
  ((e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (j) {
      j.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      x || S || ((x = !0), Qt(L));
    }),
    (e.unstable_forceFrameRate = function (j) {
      0 > j || 125 < j
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : ($ = 0 < j ? Math.floor(1e3 / j) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (j) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var H = 3;
          break;
        default:
          H = p;
      }
      var V = p;
      p = H;
      try {
        return j();
      } finally {
        p = V;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (j, H) {
      switch (j) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          j = 3;
      }
      var V = p;
      p = j;
      try {
        return H();
      } finally {
        p = V;
      }
    }),
    (e.unstable_scheduleCallback = function (j, H, V) {
      var te = e.unstable_now();
      switch (
        (typeof V == "object" && V !== null
          ? ((V = V.delay), (V = typeof V == "number" && 0 < V ? te + V : te))
          : (V = te),
        j)
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
        (j = {
          id: f++,
          callback: H,
          priorityLevel: j,
          startTime: V,
          expirationTime: ne,
          sortIndex: -1,
        }),
        V > te
          ? ((j.sortIndex = V),
            t(s, j),
            n(u) === null && j === n(s) && (E ? (m(P), (P = -1)) : (E = !0), Kt(k, V - te)))
          : ((j.sortIndex = ne), t(u, j), x || S || ((x = !0), Qt(L))),
        j
      );
    }),
    (e.unstable_shouldYield = q),
    (e.unstable_wrapCallback = function (j) {
      var H = p;
      return function () {
        var V = p;
        p = H;
        try {
          return j.apply(this, arguments);
        } finally {
          p = V;
        }
      };
    }));
})(Jc);
Gc.exports = Jc;
var eh = Gc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var th = C,
  et = eh;
function R(e) {
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
var Zc = new Set(),
  rl = {};
function Bn(e, t) {
  (pr(e, t), pr(e + "Capture", t));
}
function pr(e, t) {
  for (rl[e] = t, e = 0; e < t.length; e++) Zc.add(t[e]);
}
var Ft = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Wo = Object.prototype.hasOwnProperty,
  nh =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  rs = {},
  ls = {};
function rh(e) {
  return Wo.call(ls, e) ? !0 : Wo.call(rs, e) ? !1 : nh.test(e) ? (ls[e] = !0) : ((rs[e] = !0), !1);
}
function lh(e, t, n, r) {
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
function ih(e, t, n, r) {
  if (t === null || typeof t > "u" || lh(e, t, n, r)) return !0;
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
function He(e, t, n, r, l, i, o) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o));
}
var je = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    je[e] = new He(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  je[t] = new He(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  je[e] = new He(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
  je[e] = new He(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    je[e] = new He(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  je[e] = new He(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  je[e] = new He(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  je[e] = new He(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  je[e] = new He(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Va = /[\-:]([a-z])/g;
function Qa(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Va, Qa);
    je[t] = new He(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Va, Qa);
    je[t] = new He(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Va, Qa);
  je[t] = new He(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  je[e] = new He(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
je.xlinkHref = new He("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
  je[e] = new He(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ka(e, t, n, r) {
  var l = je.hasOwnProperty(t) ? je[t] : null;
  (l !== null
    ? l.type !== 0
    : r || !(2 < t.length) || (t[0] !== "o" && t[0] !== "O") || (t[1] !== "n" && t[1] !== "N")) &&
    (ih(t, n, l, r) && (n = null),
    r || l === null
      ? rh(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var Ht = th.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Fl = Symbol.for("react.element"),
  Gn = Symbol.for("react.portal"),
  Jn = Symbol.for("react.fragment"),
  Ya = Symbol.for("react.strict_mode"),
  Vo = Symbol.for("react.profiler"),
  qc = Symbol.for("react.provider"),
  bc = Symbol.for("react.context"),
  Xa = Symbol.for("react.forward_ref"),
  Qo = Symbol.for("react.suspense"),
  Ko = Symbol.for("react.suspense_list"),
  Ga = Symbol.for("react.memo"),
  qt = Symbol.for("react.lazy"),
  ef = Symbol.for("react.offscreen"),
  is = Symbol.iterator;
function Tr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (is && e[is]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var pe = Object.assign,
  ho;
function Wr(e) {
  if (ho === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ho = (t && t[1]) || "";
    }
  return (
    `
` +
    ho +
    e
  );
}
var mo = !1;
function vo(e, t) {
  if (!e || mo) return "";
  mo = !0;
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
          a = i.length - 1;
        1 <= o && 0 <= a && l[o] !== i[a];

      )
        a--;
      for (; 1 <= o && 0 <= a; o--, a--)
        if (l[o] !== i[a]) {
          if (o !== 1 || a !== 1)
            do
              if ((o--, a--, 0 > a || l[o] !== i[a])) {
                var u =
                  `
` + l[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= o && 0 <= a);
          break;
        }
    }
  } finally {
    ((mo = !1), (Error.prepareStackTrace = n));
  }
  return (e = e ? e.displayName || e.name : "") ? Wr(e) : "";
}
function oh(e) {
  switch (e.tag) {
    case 5:
      return Wr(e.type);
    case 16:
      return Wr("Lazy");
    case 13:
      return Wr("Suspense");
    case 19:
      return Wr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((e = vo(e.type, !1)), e);
    case 11:
      return ((e = vo(e.type.render, !1)), e);
    case 1:
      return ((e = vo(e.type, !0)), e);
    default:
      return "";
  }
}
function Yo(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Jn:
      return "Fragment";
    case Gn:
      return "Portal";
    case Vo:
      return "Profiler";
    case Ya:
      return "StrictMode";
    case Qo:
      return "Suspense";
    case Ko:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case bc:
        return (e.displayName || "Context") + ".Consumer";
      case qc:
        return (e._context.displayName || "Context") + ".Provider";
      case Xa:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Ga:
        return ((t = e.displayName || null), t !== null ? t : Yo(e.type) || "Memo");
      case qt:
        ((t = e._payload), (e = e._init));
        try {
          return Yo(e(t));
        } catch {}
    }
  return null;
}
function ah(e) {
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
      return Yo(t);
    case 8:
      return t === Ya ? "StrictMode" : "Mode";
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
function hn(e) {
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
function tf(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function uh(e) {
  var t = tf(e) ? "checked" : "value",
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
function Ul(e) {
  e._valueTracker || (e._valueTracker = uh(e));
}
function nf(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = tf(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function mi(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")) return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Xo(e, t) {
  var n = t.checked;
  return pe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function os(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  ((n = hn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null,
    }));
}
function rf(e, t) {
  ((t = t.checked), t != null && Ka(e, "checked", t, !1));
}
function Go(e, t) {
  rf(e, t);
  var n = hn(t.value),
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
    ? Jo(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Jo(e, t.type, hn(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked));
}
function as(e, t, n) {
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
function Jo(e, t, n) {
  (t !== "number" || mi(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Vr = Array.isArray;
function ar(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      ((l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0));
  } else {
    for (n = "" + hn(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        ((e[l].selected = !0), r && (e[l].defaultSelected = !0));
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Zo(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(R(91));
  return pe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function us(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(R(92));
      if (Vr(n)) {
        if (1 < n.length) throw Error(R(93));
        n = n[0];
      }
      t = n;
    }
    (t == null && (t = ""), (n = t));
  }
  e._wrapperState = { initialValue: hn(n) };
}
function lf(e, t) {
  var n = hn(t.value),
    r = hn(t.defaultValue);
  (n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r));
}
function ss(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function of(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function qo(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? of(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var Al,
  af = (function (e) {
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
        Al = Al || document.createElement("div"),
          Al.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Al.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function ll(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Xr = {
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
  sh = ["Webkit", "ms", "Moz", "O"];
Object.keys(Xr).forEach(function (e) {
  sh.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Xr[t] = Xr[e]));
  });
});
function uf(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Xr.hasOwnProperty(e) && Xr[e])
      ? ("" + t).trim()
      : t + "px";
}
function sf(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = uf(n, t[n], r);
      (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l));
    }
}
var ch = pe(
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
function bo(e, t) {
  if (t) {
    if (ch[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(R(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(R(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
        throw Error(R(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(R(62));
  }
}
function ea(e, t) {
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
var ta = null;
function Ja(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var na = null,
  ur = null,
  sr = null;
function cs(e) {
  if ((e = Cl(e))) {
    if (typeof na != "function") throw Error(R(280));
    var t = e.stateNode;
    t && ((t = Xi(t)), na(e.stateNode, e.type, t));
  }
}
function cf(e) {
  ur ? (sr ? sr.push(e) : (sr = [e])) : (ur = e);
}
function ff() {
  if (ur) {
    var e = ur,
      t = sr;
    if (((sr = ur = null), cs(e), t)) for (e = 0; e < t.length; e++) cs(t[e]);
  }
}
function df(e, t) {
  return e(t);
}
function pf() {}
var go = !1;
function hf(e, t, n) {
  if (go) return e(t, n);
  go = !0;
  try {
    return df(e, t, n);
  } finally {
    ((go = !1), (ur !== null || sr !== null) && (pf(), ff()));
  }
}
function il(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Xi(n);
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
  if (n && typeof n != "function") throw Error(R(231, t, typeof n));
  return n;
}
var ra = !1;
if (Ft)
  try {
    var Dr = {};
    (Object.defineProperty(Dr, "passive", {
      get: function () {
        ra = !0;
      },
    }),
      window.addEventListener("test", Dr, Dr),
      window.removeEventListener("test", Dr, Dr));
  } catch {
    ra = !1;
  }
function fh(e, t, n, r, l, i, o, a, u) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (f) {
    this.onError(f);
  }
}
var Gr = !1,
  vi = null,
  gi = !1,
  la = null,
  dh = {
    onError: function (e) {
      ((Gr = !0), (vi = e));
    },
  };
function ph(e, t, n, r, l, i, o, a, u) {
  ((Gr = !1), (vi = null), fh.apply(dh, arguments));
}
function hh(e, t, n, r, l, i, o, a, u) {
  if ((ph.apply(this, arguments), Gr)) {
    if (Gr) {
      var s = vi;
      ((Gr = !1), (vi = null));
    } else throw Error(R(198));
    gi || ((gi = !0), (la = s));
  }
}
function $n(e) {
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
function mf(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
      return t.dehydrated;
  }
  return null;
}
function fs(e) {
  if ($n(e) !== e) throw Error(R(188));
}
function mh(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = $n(e)), t === null)) throw Error(R(188));
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
        if (i === n) return (fs(l), e);
        if (i === r) return (fs(l), t);
        i = i.sibling;
      }
      throw Error(R(188));
    }
    if (n.return !== r.return) ((n = l), (r = i));
    else {
      for (var o = !1, a = l.child; a; ) {
        if (a === n) {
          ((o = !0), (n = l), (r = i));
          break;
        }
        if (a === r) {
          ((o = !0), (r = l), (n = i));
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = i.child; a; ) {
          if (a === n) {
            ((o = !0), (n = i), (r = l));
            break;
          }
          if (a === r) {
            ((o = !0), (r = i), (n = l));
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(R(189));
      }
    }
    if (n.alternate !== r) throw Error(R(190));
  }
  if (n.tag !== 3) throw Error(R(188));
  return n.stateNode.current === n ? e : t;
}
function vf(e) {
  return ((e = mh(e)), e !== null ? gf(e) : null);
}
function gf(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = gf(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var yf = et.unstable_scheduleCallback,
  ds = et.unstable_cancelCallback,
  vh = et.unstable_shouldYield,
  gh = et.unstable_requestPaint,
  ge = et.unstable_now,
  yh = et.unstable_getCurrentPriorityLevel,
  Za = et.unstable_ImmediatePriority,
  wf = et.unstable_UserBlockingPriority,
  yi = et.unstable_NormalPriority,
  wh = et.unstable_LowPriority,
  Sf = et.unstable_IdlePriority,
  Vi = null,
  Pt = null;
function Sh(e) {
  if (Pt && typeof Pt.onCommitFiberRoot == "function")
    try {
      Pt.onCommitFiberRoot(Vi, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var gt = Math.clz32 ? Math.clz32 : Eh,
  xh = Math.log,
  _h = Math.LN2;
function Eh(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((xh(e) / _h) | 0)) | 0);
}
var Bl = 64,
  $l = 4194304;
function Qr(e) {
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
function wi(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var a = o & ~l;
    a !== 0 ? (r = Qr(a)) : ((i &= o), i !== 0 && (r = Qr(i)));
  } else ((o = n & ~l), o !== 0 ? (r = Qr(o)) : i !== 0 && (r = Qr(i)));
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
      ((n = 31 - gt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l));
  return r;
}
function kh(e, t) {
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
function Ch(e, t) {
  for (
    var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - gt(i),
      a = 1 << o,
      u = l[o];
    (u === -1 ? (!(a & n) || a & r) && (l[o] = kh(a, t)) : u <= t && (e.expiredLanes |= a),
      (i &= ~a));
  }
}
function ia(e) {
  return ((e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0);
}
function xf() {
  var e = Bl;
  return ((Bl <<= 1), !(Bl & 4194240) && (Bl = 64), e);
}
function yo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function El(e, t, n) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - gt(t)),
    (e[t] = n));
}
function Ph(e, t) {
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
    var l = 31 - gt(n),
      i = 1 << l;
    ((t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i));
  }
}
function qa(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - gt(n),
      l = 1 << r;
    ((l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l));
  }
}
var ee = 0;
function _f(e) {
  return ((e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1);
}
var Ef,
  ba,
  kf,
  Cf,
  Pf,
  oa = !1,
  Hl = [],
  on = null,
  an = null,
  un = null,
  ol = new Map(),
  al = new Map(),
  en = [],
  Nh =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function ps(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      on = null;
      break;
    case "dragenter":
    case "dragleave":
      an = null;
      break;
    case "mouseover":
    case "mouseout":
      un = null;
      break;
    case "pointerover":
    case "pointerout":
      ol.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      al.delete(t.pointerId);
  }
}
function Mr(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = Cl(t)), t !== null && ba(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Rh(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return ((on = Mr(on, e, t, n, r, l)), !0);
    case "dragenter":
      return ((an = Mr(an, e, t, n, r, l)), !0);
    case "mouseover":
      return ((un = Mr(un, e, t, n, r, l)), !0);
    case "pointerover":
      var i = l.pointerId;
      return (ol.set(i, Mr(ol.get(i) || null, e, t, n, r, l)), !0);
    case "gotpointercapture":
      return ((i = l.pointerId), al.set(i, Mr(al.get(i) || null, e, t, n, r, l)), !0);
  }
  return !1;
}
function Nf(e) {
  var t = Nn(e.target);
  if (t !== null) {
    var n = $n(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = mf(n)), t !== null)) {
          ((e.blockedOn = t),
            Pf(e.priority, function () {
              kf(n);
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
function li(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = aa(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ((ta = r), n.target.dispatchEvent(r), (ta = null));
    } else return ((t = Cl(n)), t !== null && ba(t), (e.blockedOn = n), !1);
    t.shift();
  }
  return !0;
}
function hs(e, t, n) {
  li(e) && n.delete(t);
}
function Lh() {
  ((oa = !1),
    on !== null && li(on) && (on = null),
    an !== null && li(an) && (an = null),
    un !== null && li(un) && (un = null),
    ol.forEach(hs),
    al.forEach(hs));
}
function zr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    oa || ((oa = !0), et.unstable_scheduleCallback(et.unstable_NormalPriority, Lh)));
}
function ul(e) {
  function t(l) {
    return zr(l, e);
  }
  if (0 < Hl.length) {
    zr(Hl[0], e);
    for (var n = 1; n < Hl.length; n++) {
      var r = Hl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    on !== null && zr(on, e),
      an !== null && zr(an, e),
      un !== null && zr(un, e),
      ol.forEach(t),
      al.forEach(t),
      n = 0;
    n < en.length;
    n++
  )
    ((r = en[n]), r.blockedOn === e && (r.blockedOn = null));
  for (; 0 < en.length && ((n = en[0]), n.blockedOn === null); )
    (Nf(n), n.blockedOn === null && en.shift());
}
var cr = Ht.ReactCurrentBatchConfig,
  Si = !0;
function jh(e, t, n, r) {
  var l = ee,
    i = cr.transition;
  cr.transition = null;
  try {
    ((ee = 1), eu(e, t, n, r));
  } finally {
    ((ee = l), (cr.transition = i));
  }
}
function Th(e, t, n, r) {
  var l = ee,
    i = cr.transition;
  cr.transition = null;
  try {
    ((ee = 4), eu(e, t, n, r));
  } finally {
    ((ee = l), (cr.transition = i));
  }
}
function eu(e, t, n, r) {
  if (Si) {
    var l = aa(e, t, n, r);
    if (l === null) (Ro(e, t, r, xi, n), ps(e, r));
    else if (Rh(l, e, t, n, r)) r.stopPropagation();
    else if ((ps(e, r), t & 4 && -1 < Nh.indexOf(e))) {
      for (; l !== null; ) {
        var i = Cl(l);
        if ((i !== null && Ef(i), (i = aa(e, t, n, r)), i === null && Ro(e, t, r, xi, n), i === l))
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else Ro(e, t, r, null, n);
  }
}
var xi = null;
function aa(e, t, n, r) {
  if (((xi = null), (e = Ja(r)), (e = Nn(e)), e !== null))
    if (((t = $n(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = mf(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((xi = e), null);
}
function Rf(e) {
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
      switch (yh()) {
        case Za:
          return 1;
        case wf:
          return 4;
        case yi:
        case wh:
          return 16;
        case Sf:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var nn = null,
  tu = null,
  ii = null;
function Lf() {
  if (ii) return ii;
  var e,
    t = tu,
    n = t.length,
    r,
    l = "value" in nn ? nn.value : nn.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
  return (ii = l.slice(e, 1 < r ? 1 - r : void 0));
}
function oi(e) {
  var t = e.keyCode;
  return (
    "charCode" in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Wl() {
  return !0;
}
function ms() {
  return !1;
}
function nt(e) {
  function t(n, r, l, i, o) {
    ((this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null));
    for (var a in e) e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Wl
        : ms),
      (this.isPropagationStopped = ms),
      this
    );
  }
  return (
    pe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Wl));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Wl));
      },
      persist: function () {},
      isPersistent: Wl,
    }),
    t
  );
}
var Er = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  nu = nt(Er),
  kl = pe({}, Er, { view: 0, detail: 0 }),
  Dh = nt(kl),
  wo,
  So,
  Or,
  Qi = pe({}, kl, {
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
    getModifierState: ru,
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
        : (e !== Or &&
            (Or && e.type === "mousemove"
              ? ((wo = e.screenX - Or.screenX), (So = e.screenY - Or.screenY))
              : (So = wo = 0),
            (Or = e)),
          wo);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : So;
    },
  }),
  vs = nt(Qi),
  Mh = pe({}, Qi, { dataTransfer: 0 }),
  zh = nt(Mh),
  Oh = pe({}, kl, { relatedTarget: 0 }),
  xo = nt(Oh),
  Ih = pe({}, Er, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Fh = nt(Ih),
  Uh = pe({}, Er, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Ah = nt(Uh),
  Bh = pe({}, Er, { data: 0 }),
  gs = nt(Bh),
  $h = {
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
  Hh = {
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
  Wh = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Vh(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Wh[e]) ? !!t[e] : !1;
}
function ru() {
  return Vh;
}
var Qh = pe({}, kl, {
    key: function (e) {
      if (e.key) {
        var t = $h[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = oi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? Hh[e.keyCode] || "Unidentified"
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
    getModifierState: ru,
    charCode: function (e) {
      return e.type === "keypress" ? oi(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? oi(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  Kh = nt(Qh),
  Yh = pe({}, Qi, {
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
  ys = nt(Yh),
  Xh = pe({}, kl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ru,
  }),
  Gh = nt(Xh),
  Jh = pe({}, Er, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Zh = nt(Jh),
  qh = pe({}, Qi, {
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
  bh = nt(qh),
  em = [9, 13, 27, 32],
  lu = Ft && "CompositionEvent" in window,
  Jr = null;
Ft && "documentMode" in document && (Jr = document.documentMode);
var tm = Ft && "TextEvent" in window && !Jr,
  jf = Ft && (!lu || (Jr && 8 < Jr && 11 >= Jr)),
  ws = " ",
  Ss = !1;
function Tf(e, t) {
  switch (e) {
    case "keyup":
      return em.indexOf(t.keyCode) !== -1;
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
function Df(e) {
  return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
}
var Zn = !1;
function nm(e, t) {
  switch (e) {
    case "compositionend":
      return Df(t);
    case "keypress":
      return t.which !== 32 ? null : ((Ss = !0), ws);
    case "textInput":
      return ((e = t.data), e === ws && Ss ? null : e);
    default:
      return null;
  }
}
function rm(e, t) {
  if (Zn)
    return e === "compositionend" || (!lu && Tf(e, t))
      ? ((e = Lf()), (ii = tu = nn = null), (Zn = !1), e)
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
      return jf && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var lm = {
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
function xs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!lm[e.type] : t === "textarea";
}
function Mf(e, t, n, r) {
  (cf(r),
    (t = _i(t, "onChange")),
    0 < t.length &&
      ((n = new nu("onChange", "change", null, n, r)), e.push({ event: n, listeners: t })));
}
var Zr = null,
  sl = null;
function im(e) {
  Vf(e, 0);
}
function Ki(e) {
  var t = er(e);
  if (nf(t)) return e;
}
function om(e, t) {
  if (e === "change") return t;
}
var zf = !1;
if (Ft) {
  var _o;
  if (Ft) {
    var Eo = "oninput" in document;
    if (!Eo) {
      var _s = document.createElement("div");
      (_s.setAttribute("oninput", "return;"), (Eo = typeof _s.oninput == "function"));
    }
    _o = Eo;
  } else _o = !1;
  zf = _o && (!document.documentMode || 9 < document.documentMode);
}
function Es() {
  Zr && (Zr.detachEvent("onpropertychange", Of), (sl = Zr = null));
}
function Of(e) {
  if (e.propertyName === "value" && Ki(sl)) {
    var t = [];
    (Mf(t, sl, e, Ja(e)), hf(im, t));
  }
}
function am(e, t, n) {
  e === "focusin"
    ? (Es(), (Zr = t), (sl = n), Zr.attachEvent("onpropertychange", Of))
    : e === "focusout" && Es();
}
function um(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ki(sl);
}
function sm(e, t) {
  if (e === "click") return Ki(t);
}
function cm(e, t) {
  if (e === "input" || e === "change") return Ki(t);
}
function fm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var wt = typeof Object.is == "function" ? Object.is : fm;
function cl(e, t) {
  if (wt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Wo.call(t, l) || !wt(e[l], t[l])) return !1;
  }
  return !0;
}
function ks(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Cs(e, t) {
  var n = ks(e);
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
    n = ks(n);
  }
}
function If(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? If(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function Ff() {
  for (var e = window, t = mi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = mi(e.document);
  }
  return t;
}
function iu(e) {
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
function dm(e) {
  var t = Ff(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && If(n.ownerDocument.documentElement, n)) {
    if (r !== null && iu(n)) {
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
          (l = Cs(n, i)));
        var o = Cs(n, r);
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
var pm = Ft && "documentMode" in document && 11 >= document.documentMode,
  qn = null,
  ua = null,
  qr = null,
  sa = !1;
function Ps(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  sa ||
    qn == null ||
    qn !== mi(r) ||
    ((r = qn),
    "selectionStart" in r && iu(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (qr && cl(qr, r)) ||
      ((qr = r),
      (r = _i(ua, "onSelect")),
      0 < r.length &&
        ((t = new nu("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = qn))));
}
function Vl(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var bn = {
    animationend: Vl("Animation", "AnimationEnd"),
    animationiteration: Vl("Animation", "AnimationIteration"),
    animationstart: Vl("Animation", "AnimationStart"),
    transitionend: Vl("Transition", "TransitionEnd"),
  },
  ko = {},
  Uf = {};
Ft &&
  ((Uf = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete bn.animationend.animation,
    delete bn.animationiteration.animation,
    delete bn.animationstart.animation),
  "TransitionEvent" in window || delete bn.transitionend.transition);
function Yi(e) {
  if (ko[e]) return ko[e];
  if (!bn[e]) return e;
  var t = bn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Uf) return (ko[e] = t[n]);
  return e;
}
var Af = Yi("animationend"),
  Bf = Yi("animationiteration"),
  $f = Yi("animationstart"),
  Hf = Yi("transitionend"),
  Wf = new Map(),
  Ns =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function vn(e, t) {
  (Wf.set(e, t), Bn(t, [e]));
}
for (var Co = 0; Co < Ns.length; Co++) {
  var Po = Ns[Co],
    hm = Po.toLowerCase(),
    mm = Po[0].toUpperCase() + Po.slice(1);
  vn(hm, "on" + mm);
}
vn(Af, "onAnimationEnd");
vn(Bf, "onAnimationIteration");
vn($f, "onAnimationStart");
vn("dblclick", "onDoubleClick");
vn("focusin", "onFocus");
vn("focusout", "onBlur");
vn(Hf, "onTransitionEnd");
pr("onMouseEnter", ["mouseout", "mouseover"]);
pr("onMouseLeave", ["mouseout", "mouseover"]);
pr("onPointerEnter", ["pointerout", "pointerover"]);
pr("onPointerLeave", ["pointerout", "pointerover"]);
Bn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Bn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "),
);
Bn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Bn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Bn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Bn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Kr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  vm = new Set("cancel close invalid load scroll toggle".split(" ").concat(Kr));
function Rs(e, t, n) {
  var r = e.type || "unknown-event";
  ((e.currentTarget = n), hh(r, t, void 0, e), (e.currentTarget = null));
}
function Vf(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var a = r[o],
            u = a.instance,
            s = a.currentTarget;
          if (((a = a.listener), u !== i && l.isPropagationStopped())) break e;
          (Rs(l, a, s), (i = u));
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((a = r[o]),
            (u = a.instance),
            (s = a.currentTarget),
            (a = a.listener),
            u !== i && l.isPropagationStopped())
          )
            break e;
          (Rs(l, a, s), (i = u));
        }
    }
  }
  if (gi) throw ((e = la), (gi = !1), (la = null), e);
}
function oe(e, t) {
  var n = t[ha];
  n === void 0 && (n = t[ha] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Qf(t, e, 2, !1), n.add(r));
}
function No(e, t, n) {
  var r = 0;
  (t && (r |= 4), Qf(n, e, r, t));
}
var Ql = "_reactListening" + Math.random().toString(36).slice(2);
function fl(e) {
  if (!e[Ql]) {
    ((e[Ql] = !0),
      Zc.forEach(function (n) {
        n !== "selectionchange" && (vm.has(n) || No(n, !1, e), No(n, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ql] || ((t[Ql] = !0), No("selectionchange", !1, t));
  }
}
function Qf(e, t, n, r) {
  switch (Rf(t)) {
    case 1:
      var l = jh;
      break;
    case 4:
      l = Th;
      break;
    default:
      l = eu;
  }
  ((n = l.bind(null, t, n, e)),
    (l = void 0),
    !ra || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
        ? e.addEventListener(t, n, { passive: l })
        : e.addEventListener(t, n, !1));
}
function Ro(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var a = r.stateNode.containerInfo;
        if (a === l || (a.nodeType === 8 && a.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var u = o.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = o.stateNode.containerInfo), u === l || (u.nodeType === 8 && u.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; a !== null; ) {
          if (((o = Nn(a)), o === null)) return;
          if (((u = o.tag), u === 5 || u === 6)) {
            r = i = o;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  hf(function () {
    var s = i,
      f = Ja(n),
      d = [];
    e: {
      var p = Wf.get(e);
      if (p !== void 0) {
        var S = nu,
          x = e;
        switch (e) {
          case "keypress":
            if (oi(n) === 0) break e;
          case "keydown":
          case "keyup":
            S = Kh;
            break;
          case "focusin":
            ((x = "focus"), (S = xo));
            break;
          case "focusout":
            ((x = "blur"), (S = xo));
            break;
          case "beforeblur":
          case "afterblur":
            S = xo;
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
            S = vs;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            S = zh;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            S = Gh;
            break;
          case Af:
          case Bf:
          case $f:
            S = Fh;
            break;
          case Hf:
            S = Zh;
            break;
          case "scroll":
            S = Dh;
            break;
          case "wheel":
            S = bh;
            break;
          case "copy":
          case "cut":
          case "paste":
            S = Ah;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            S = ys;
        }
        var E = (t & 4) !== 0,
          T = !E && e === "scroll",
          m = E ? (p !== null ? p + "Capture" : null) : p;
        E = [];
        for (var c = s, v; c !== null; ) {
          v = c;
          var k = v.stateNode;
          if (
            (v.tag === 5 &&
              k !== null &&
              ((v = k), m !== null && ((k = il(c, m)), k != null && E.push(dl(c, k, v)))),
            T)
          )
            break;
          c = c.return;
        }
        0 < E.length && ((p = new S(p, x, null, n, f)), d.push({ event: p, listeners: E }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (S = e === "mouseout" || e === "pointerout"),
          p && n !== ta && (x = n.relatedTarget || n.fromElement) && (Nn(x) || x[Ut]))
        )
          break e;
        if (
          (S || p) &&
          ((p =
            f.window === f ? f : (p = f.ownerDocument) ? p.defaultView || p.parentWindow : window),
          S
            ? ((x = n.relatedTarget || n.toElement),
              (S = s),
              (x = x ? Nn(x) : null),
              x !== null && ((T = $n(x)), x !== T || (x.tag !== 5 && x.tag !== 6)) && (x = null))
            : ((S = null), (x = s)),
          S !== x)
        ) {
          if (
            ((E = vs),
            (k = "onMouseLeave"),
            (m = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((E = ys), (k = "onPointerLeave"), (m = "onPointerEnter"), (c = "pointer")),
            (T = S == null ? p : er(S)),
            (v = x == null ? p : er(x)),
            (p = new E(k, c + "leave", S, n, f)),
            (p.target = T),
            (p.relatedTarget = v),
            (k = null),
            Nn(f) === s &&
              ((E = new E(m, c + "enter", x, n, f)),
              (E.target = v),
              (E.relatedTarget = T),
              (k = E)),
            (T = k),
            S && x)
          )
            t: {
              for (E = S, m = x, c = 0, v = E; v; v = Yn(v)) c++;
              for (v = 0, k = m; k; k = Yn(k)) v++;
              for (; 0 < c - v; ) ((E = Yn(E)), c--);
              for (; 0 < v - c; ) ((m = Yn(m)), v--);
              for (; c--; ) {
                if (E === m || (m !== null && E === m.alternate)) break t;
                ((E = Yn(E)), (m = Yn(m)));
              }
              E = null;
            }
          else E = null;
          (S !== null && Ls(d, p, S, E, !1), x !== null && T !== null && Ls(d, T, x, E, !0));
        }
      }
      e: {
        if (
          ((p = s ? er(s) : window),
          (S = p.nodeName && p.nodeName.toLowerCase()),
          S === "select" || (S === "input" && p.type === "file"))
        )
          var L = om;
        else if (xs(p))
          if (zf) L = cm;
          else {
            L = um;
            var z = am;
          }
        else
          (S = p.nodeName) &&
            S.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (L = sm);
        if (L && (L = L(e, s))) {
          Mf(d, L, n, f);
          break e;
        }
        (z && z(e, p, s),
          e === "focusout" &&
            (z = p._wrapperState) &&
            z.controlled &&
            p.type === "number" &&
            Jo(p, "number", p.value));
      }
      switch (((z = s ? er(s) : window), e)) {
        case "focusin":
          (xs(z) || z.contentEditable === "true") && ((qn = z), (ua = s), (qr = null));
          break;
        case "focusout":
          qr = ua = qn = null;
          break;
        case "mousedown":
          sa = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((sa = !1), Ps(d, n, f));
          break;
        case "selectionchange":
          if (pm) break;
        case "keydown":
        case "keyup":
          Ps(d, n, f);
      }
      var g;
      if (lu)
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
        Zn
          ? Tf(e, n) && (P = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      (P &&
        (jf &&
          n.locale !== "ko" &&
          (Zn || P !== "onCompositionStart"
            ? P === "onCompositionEnd" && Zn && (g = Lf())
            : ((nn = f), (tu = "value" in nn ? nn.value : nn.textContent), (Zn = !0))),
        (z = _i(s, P)),
        0 < z.length &&
          ((P = new gs(P, e, null, n, f)),
          d.push({ event: P, listeners: z }),
          g ? (P.data = g) : ((g = Df(n)), g !== null && (P.data = g)))),
        (g = tm ? nm(e, n) : rm(e, n)) &&
          ((s = _i(s, "onBeforeInput")),
          0 < s.length &&
            ((f = new gs("onBeforeInput", "beforeinput", null, n, f)),
            d.push({ event: f, listeners: s }),
            (f.data = g))));
    }
    Vf(d, t);
  });
}
function dl(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function _i(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    (l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = il(e, n)),
      i != null && r.unshift(dl(e, i, l)),
      (i = il(e, t)),
      i != null && r.push(dl(e, i, l))),
      (e = e.return));
  }
  return r;
}
function Yn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ls(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var a = n,
      u = a.alternate,
      s = a.stateNode;
    if (u !== null && u === r) break;
    (a.tag === 5 &&
      s !== null &&
      ((a = s),
      l
        ? ((u = il(n, i)), u != null && o.unshift(dl(n, u, a)))
        : l || ((u = il(n, i)), u != null && o.push(dl(n, u, a)))),
      (n = n.return));
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var gm = /\r\n?/g,
  ym = /\u0000|\uFFFD/g;
function js(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      gm,
      `
`,
    )
    .replace(ym, "");
}
function Kl(e, t, n) {
  if (((t = js(t)), js(e) !== t && n)) throw Error(R(425));
}
function Ei() {}
var ca = null,
  fa = null;
function da(e, t) {
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
var pa = typeof setTimeout == "function" ? setTimeout : void 0,
  wm = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Ts = typeof Promise == "function" ? Promise : void 0,
  Sm =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Ts < "u"
        ? function (e) {
            return Ts.resolve(null).then(e).catch(xm);
          }
        : pa;
function xm(e) {
  setTimeout(function () {
    throw e;
  });
}
function Lo(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          (e.removeChild(l), ul(t));
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  ul(t);
}
function sn(e) {
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
function Ds(e) {
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
var kr = Math.random().toString(36).slice(2),
  kt = "__reactFiber$" + kr,
  pl = "__reactProps$" + kr,
  Ut = "__reactContainer$" + kr,
  ha = "__reactEvents$" + kr,
  _m = "__reactListeners$" + kr,
  Em = "__reactHandles$" + kr;
function Nn(e) {
  var t = e[kt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ut] || n[kt])) {
      if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
        for (e = Ds(e); e !== null; ) {
          if ((n = e[kt])) return n;
          e = Ds(e);
        }
      return t;
    }
    ((e = n), (n = e.parentNode));
  }
  return null;
}
function Cl(e) {
  return (
    (e = e[kt] || e[Ut]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function er(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(R(33));
}
function Xi(e) {
  return e[pl] || null;
}
var ma = [],
  tr = -1;
function gn(e) {
  return { current: e };
}
function ae(e) {
  0 > tr || ((e.current = ma[tr]), (ma[tr] = null), tr--);
}
function ie(e, t) {
  (tr++, (ma[tr] = e.current), (e.current = t));
}
var mn = {},
  Oe = gn(mn),
  Ke = gn(!1),
  zn = mn;
function hr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return mn;
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
function Ye(e) {
  return ((e = e.childContextTypes), e != null);
}
function ki() {
  (ae(Ke), ae(Oe));
}
function Ms(e, t, n) {
  if (Oe.current !== mn) throw Error(R(168));
  (ie(Oe, t), ie(Ke, n));
}
function Kf(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function")) return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(R(108, ah(e) || "Unknown", l));
  return pe({}, n, r);
}
function Ci(e) {
  return (
    (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || mn),
    (zn = Oe.current),
    ie(Oe, e),
    ie(Ke, Ke.current),
    !0
  );
}
function zs(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(R(169));
  (n
    ? ((e = Kf(e, t, zn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ae(Ke),
      ae(Oe),
      ie(Oe, e))
    : ae(Ke),
    ie(Ke, n));
}
var Tt = null,
  Gi = !1,
  jo = !1;
function Yf(e) {
  Tt === null ? (Tt = [e]) : Tt.push(e);
}
function km(e) {
  ((Gi = !0), Yf(e));
}
function yn() {
  if (!jo && Tt !== null) {
    jo = !0;
    var e = 0,
      t = ee;
    try {
      var n = Tt;
      for (ee = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ((Tt = null), (Gi = !1));
    } catch (l) {
      throw (Tt !== null && (Tt = Tt.slice(e + 1)), yf(Za, yn), l);
    } finally {
      ((ee = t), (jo = !1));
    }
  }
  return null;
}
var nr = [],
  rr = 0,
  Pi = null,
  Ni = 0,
  lt = [],
  it = 0,
  On = null,
  Mt = 1,
  zt = "";
function En(e, t) {
  ((nr[rr++] = Ni), (nr[rr++] = Pi), (Pi = e), (Ni = t));
}
function Xf(e, t, n) {
  ((lt[it++] = Mt), (lt[it++] = zt), (lt[it++] = On), (On = e));
  var r = Mt;
  e = zt;
  var l = 32 - gt(r) - 1;
  ((r &= ~(1 << l)), (n += 1));
  var i = 32 - gt(t) + l;
  if (30 < i) {
    var o = l - (l % 5);
    ((i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (Mt = (1 << (32 - gt(t) + l)) | (n << l) | r),
      (zt = i + e));
  } else ((Mt = (1 << i) | (n << l) | r), (zt = e));
}
function ou(e) {
  e.return !== null && (En(e, 1), Xf(e, 1, 0));
}
function au(e) {
  for (; e === Pi; ) ((Pi = nr[--rr]), (nr[rr] = null), (Ni = nr[--rr]), (nr[rr] = null));
  for (; e === On; )
    ((On = lt[--it]),
      (lt[it] = null),
      (zt = lt[--it]),
      (lt[it] = null),
      (Mt = lt[--it]),
      (lt[it] = null));
}
var be = null,
  qe = null,
  se = !1,
  vt = null;
function Gf(e, t) {
  var n = ot(5, null, null, 0);
  ((n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function Os(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
        t !== null ? ((e.stateNode = t), (be = e), (qe = sn(t.firstChild)), !0) : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (be = e), (qe = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = On !== null ? { id: Mt, overflow: zt } : null),
            (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
            (n = ot(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (be = e),
            (qe = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function va(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ga(e) {
  if (se) {
    var t = qe;
    if (t) {
      var n = t;
      if (!Os(e, t)) {
        if (va(e)) throw Error(R(418));
        t = sn(n.nextSibling);
        var r = be;
        t && Os(e, t) ? Gf(r, n) : ((e.flags = (e.flags & -4097) | 2), (se = !1), (be = e));
      }
    } else {
      if (va(e)) throw Error(R(418));
      ((e.flags = (e.flags & -4097) | 2), (se = !1), (be = e));
    }
  }
}
function Is(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  be = e;
}
function Yl(e) {
  if (e !== be) return !1;
  if (!se) return (Is(e), (se = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type), (t = t !== "head" && t !== "body" && !da(e.type, e.memoizedProps))),
    t && (t = qe))
  ) {
    if (va(e)) throw (Jf(), Error(R(418)));
    for (; t; ) (Gf(e, t), (t = sn(t.nextSibling)));
  }
  if ((Is(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(R(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              qe = sn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      qe = null;
    }
  } else qe = be ? sn(e.stateNode.nextSibling) : null;
  return !0;
}
function Jf() {
  for (var e = qe; e; ) e = sn(e.nextSibling);
}
function mr() {
  ((qe = be = null), (se = !1));
}
function uu(e) {
  vt === null ? (vt = [e]) : vt.push(e);
}
var Cm = Ht.ReactCurrentBatchConfig;
function Ir(e, t, n) {
  if (((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(R(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(R(147, e));
      var l = r,
        i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var a = l.refs;
            o === null ? delete a[i] : (a[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(R(284));
    if (!n._owner) throw Error(R(290, e));
  }
  return e;
}
function Xl(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      R(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e),
    )
  );
}
function Fs(e) {
  var t = e._init;
  return t(e._payload);
}
function Zf(e) {
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
    return ((m = pn(m, c)), (m.index = 0), (m.sibling = null), m);
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
  function a(m, c, v, k) {
    return c === null || c.tag !== 6
      ? ((c = Fo(v, m.mode, k)), (c.return = m), c)
      : ((c = l(c, v)), (c.return = m), c);
  }
  function u(m, c, v, k) {
    var L = v.type;
    return L === Jn
      ? f(m, c, v.props.children, k, v.key)
      : c !== null &&
          (c.elementType === L ||
            (typeof L == "object" && L !== null && L.$$typeof === qt && Fs(L) === c.type))
        ? ((k = l(c, v.props)), (k.ref = Ir(m, c, v)), (k.return = m), k)
        : ((k = pi(v.type, v.key, v.props, null, m.mode, k)),
          (k.ref = Ir(m, c, v)),
          (k.return = m),
          k);
  }
  function s(m, c, v, k) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== v.containerInfo ||
      c.stateNode.implementation !== v.implementation
      ? ((c = Uo(v, m.mode, k)), (c.return = m), c)
      : ((c = l(c, v.children || [])), (c.return = m), c);
  }
  function f(m, c, v, k, L) {
    return c === null || c.tag !== 7
      ? ((c = Dn(v, m.mode, k, L)), (c.return = m), c)
      : ((c = l(c, v)), (c.return = m), c);
  }
  function d(m, c, v) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return ((c = Fo("" + c, m.mode, v)), (c.return = m), c);
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case Fl:
          return (
            (v = pi(c.type, c.key, c.props, null, m.mode, v)),
            (v.ref = Ir(m, null, c)),
            (v.return = m),
            v
          );
        case Gn:
          return ((c = Uo(c, m.mode, v)), (c.return = m), c);
        case qt:
          var k = c._init;
          return d(m, k(c._payload), v);
      }
      if (Vr(c) || Tr(c)) return ((c = Dn(c, m.mode, v, null)), (c.return = m), c);
      Xl(m, c);
    }
    return null;
  }
  function p(m, c, v, k) {
    var L = c !== null ? c.key : null;
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return L !== null ? null : a(m, c, "" + v, k);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Fl:
          return v.key === L ? u(m, c, v, k) : null;
        case Gn:
          return v.key === L ? s(m, c, v, k) : null;
        case qt:
          return ((L = v._init), p(m, c, L(v._payload), k));
      }
      if (Vr(v) || Tr(v)) return L !== null ? null : f(m, c, v, k, null);
      Xl(m, v);
    }
    return null;
  }
  function S(m, c, v, k, L) {
    if ((typeof k == "string" && k !== "") || typeof k == "number")
      return ((m = m.get(v) || null), a(c, m, "" + k, L));
    if (typeof k == "object" && k !== null) {
      switch (k.$$typeof) {
        case Fl:
          return ((m = m.get(k.key === null ? v : k.key) || null), u(c, m, k, L));
        case Gn:
          return ((m = m.get(k.key === null ? v : k.key) || null), s(c, m, k, L));
        case qt:
          var z = k._init;
          return S(m, c, v, z(k._payload), L);
      }
      if (Vr(k) || Tr(k)) return ((m = m.get(v) || null), f(c, m, k, L, null));
      Xl(c, k);
    }
    return null;
  }
  function x(m, c, v, k) {
    for (var L = null, z = null, g = c, P = (c = 0), $ = null; g !== null && P < v.length; P++) {
      g.index > P ? (($ = g), (g = null)) : ($ = g.sibling);
      var D = p(m, g, v[P], k);
      if (D === null) {
        g === null && (g = $);
        break;
      }
      (e && g && D.alternate === null && t(m, g),
        (c = i(D, c, P)),
        z === null ? (L = D) : (z.sibling = D),
        (z = D),
        (g = $));
    }
    if (P === v.length) return (n(m, g), se && En(m, P), L);
    if (g === null) {
      for (; P < v.length; P++)
        ((g = d(m, v[P], k)),
          g !== null && ((c = i(g, c, P)), z === null ? (L = g) : (z.sibling = g), (z = g)));
      return (se && En(m, P), L);
    }
    for (g = r(m, g); P < v.length; P++)
      (($ = S(g, m, P, v[P], k)),
        $ !== null &&
          (e && $.alternate !== null && g.delete($.key === null ? P : $.key),
          (c = i($, c, P)),
          z === null ? (L = $) : (z.sibling = $),
          (z = $)));
    return (
      e &&
        g.forEach(function (q) {
          return t(m, q);
        }),
      se && En(m, P),
      L
    );
  }
  function E(m, c, v, k) {
    var L = Tr(v);
    if (typeof L != "function") throw Error(R(150));
    if (((v = L.call(v)), v == null)) throw Error(R(151));
    for (
      var z = (L = null), g = c, P = (c = 0), $ = null, D = v.next();
      g !== null && !D.done;
      P++, D = v.next()
    ) {
      g.index > P ? (($ = g), (g = null)) : ($ = g.sibling);
      var q = p(m, g, D.value, k);
      if (q === null) {
        g === null && (g = $);
        break;
      }
      (e && g && q.alternate === null && t(m, g),
        (c = i(q, c, P)),
        z === null ? (L = q) : (z.sibling = q),
        (z = q),
        (g = $));
    }
    if (D.done) return (n(m, g), se && En(m, P), L);
    if (g === null) {
      for (; !D.done; P++, D = v.next())
        ((D = d(m, D.value, k)),
          D !== null && ((c = i(D, c, P)), z === null ? (L = D) : (z.sibling = D), (z = D)));
      return (se && En(m, P), L);
    }
    for (g = r(m, g); !D.done; P++, D = v.next())
      ((D = S(g, m, P, D.value, k)),
        D !== null &&
          (e && D.alternate !== null && g.delete(D.key === null ? P : D.key),
          (c = i(D, c, P)),
          z === null ? (L = D) : (z.sibling = D),
          (z = D)));
    return (
      e &&
        g.forEach(function (re) {
          return t(m, re);
        }),
      se && En(m, P),
      L
    );
  }
  function T(m, c, v, k) {
    if (
      (typeof v == "object" &&
        v !== null &&
        v.type === Jn &&
        v.key === null &&
        (v = v.props.children),
      typeof v == "object" && v !== null)
    ) {
      switch (v.$$typeof) {
        case Fl:
          e: {
            for (var L = v.key, z = c; z !== null; ) {
              if (z.key === L) {
                if (((L = v.type), L === Jn)) {
                  if (z.tag === 7) {
                    (n(m, z.sibling), (c = l(z, v.props.children)), (c.return = m), (m = c));
                    break e;
                  }
                } else if (
                  z.elementType === L ||
                  (typeof L == "object" && L !== null && L.$$typeof === qt && Fs(L) === z.type)
                ) {
                  (n(m, z.sibling),
                    (c = l(z, v.props)),
                    (c.ref = Ir(m, z, v)),
                    (c.return = m),
                    (m = c));
                  break e;
                }
                n(m, z);
                break;
              } else t(m, z);
              z = z.sibling;
            }
            v.type === Jn
              ? ((c = Dn(v.props.children, m.mode, k, v.key)), (c.return = m), (m = c))
              : ((k = pi(v.type, v.key, v.props, null, m.mode, k)),
                (k.ref = Ir(m, c, v)),
                (k.return = m),
                (m = k));
          }
          return o(m);
        case Gn:
          e: {
            for (z = v.key; c !== null; ) {
              if (c.key === z)
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
            ((c = Uo(v, m.mode, k)), (c.return = m), (m = c));
          }
          return o(m);
        case qt:
          return ((z = v._init), T(m, c, z(v._payload), k));
      }
      if (Vr(v)) return x(m, c, v, k);
      if (Tr(v)) return E(m, c, v, k);
      Xl(m, v);
    }
    return (typeof v == "string" && v !== "") || typeof v == "number"
      ? ((v = "" + v),
        c !== null && c.tag === 6
          ? (n(m, c.sibling), (c = l(c, v)), (c.return = m), (m = c))
          : (n(m, c), (c = Fo(v, m.mode, k)), (c.return = m), (m = c)),
        o(m))
      : n(m, c);
  }
  return T;
}
var vr = Zf(!0),
  qf = Zf(!1),
  Ri = gn(null),
  Li = null,
  lr = null,
  su = null;
function cu() {
  su = lr = Li = null;
}
function fu(e) {
  var t = Ri.current;
  (ae(Ri), (e._currentValue = t));
}
function ya(e, t, n) {
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
function fr(e, t) {
  ((Li = e),
    (su = lr = null),
    (e = e.dependencies),
    e !== null && e.firstContext !== null && (e.lanes & t && (Qe = !0), (e.firstContext = null)));
}
function ut(e) {
  var t = e._currentValue;
  if (su !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), lr === null)) {
      if (Li === null) throw Error(R(308));
      ((lr = e), (Li.dependencies = { lanes: 0, firstContext: e }));
    } else lr = lr.next = e;
  return t;
}
var Rn = null;
function du(e) {
  Rn === null ? (Rn = [e]) : Rn.push(e);
}
function bf(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), du(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    At(e, r)
  );
}
function At(e, t) {
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
var bt = !1;
function pu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function ed(e, t) {
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
function Ot(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function cn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), G & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      At(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), du(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    At(e, n)
  );
}
function ai(e, t, n) {
  if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), qa(e, n));
  }
}
function Us(e, t) {
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
function ji(e, t, n, r) {
  var l = e.updateQueue;
  bt = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    a = l.shared.pending;
  if (a !== null) {
    l.shared.pending = null;
    var u = a,
      s = u.next;
    ((u.next = null), o === null ? (i = s) : (o.next = s), (o = u));
    var f = e.alternate;
    f !== null &&
      ((f = f.updateQueue),
      (a = f.lastBaseUpdate),
      a !== o && (a === null ? (f.firstBaseUpdate = s) : (a.next = s), (f.lastBaseUpdate = u)));
  }
  if (i !== null) {
    var d = l.baseState;
    ((o = 0), (f = s = u = null), (a = i));
    do {
      var p = a.lane,
        S = a.eventTime;
      if ((r & p) === p) {
        f !== null &&
          (f = f.next =
            {
              eventTime: S,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var x = e,
            E = a;
          switch (((p = t), (S = n), E.tag)) {
            case 1:
              if (((x = E.payload), typeof x == "function")) {
                d = x.call(S, d, p);
                break e;
              }
              d = x;
              break e;
            case 3:
              x.flags = (x.flags & -65537) | 128;
            case 0:
              if (((x = E.payload), (p = typeof x == "function" ? x.call(S, d, p) : x), p == null))
                break e;
              d = pe({}, d, p);
              break e;
            case 2:
              bt = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64), (p = l.effects), p === null ? (l.effects = [a]) : p.push(a));
      } else
        ((S = {
          eventTime: S,
          lane: p,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          f === null ? ((s = f = S), (u = d)) : (f = f.next = S),
          (o |= p));
      if (((a = a.next), a === null)) {
        if (((a = l.shared.pending), a === null)) break;
        ((p = a), (a = p.next), (p.next = null), (l.lastBaseUpdate = p), (l.shared.pending = null));
      }
    } while (!0);
    if (
      (f === null && (u = d),
      (l.baseState = u),
      (l.firstBaseUpdate = s),
      (l.lastBaseUpdate = f),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do ((o |= l.lane), (l = l.next));
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    ((Fn |= o), (e.lanes = o), (e.memoizedState = d));
  }
}
function As(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function")) throw Error(R(191, l));
        l.call(r);
      }
    }
}
var Pl = {},
  Nt = gn(Pl),
  hl = gn(Pl),
  ml = gn(Pl);
function Ln(e) {
  if (e === Pl) throw Error(R(174));
  return e;
}
function hu(e, t) {
  switch ((ie(ml, t), ie(hl, e), ie(Nt, Pl), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : qo(null, "");
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = qo(t, e)));
  }
  (ae(Nt), ie(Nt, t));
}
function gr() {
  (ae(Nt), ae(hl), ae(ml));
}
function td(e) {
  Ln(ml.current);
  var t = Ln(Nt.current),
    n = qo(t, e.type);
  t !== n && (ie(hl, e), ie(Nt, n));
}
function mu(e) {
  hl.current === e && (ae(Nt), ae(hl));
}
var fe = gn(0);
function Ti(e) {
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
var To = [];
function vu() {
  for (var e = 0; e < To.length; e++) To[e]._workInProgressVersionPrimary = null;
  To.length = 0;
}
var ui = Ht.ReactCurrentDispatcher,
  Do = Ht.ReactCurrentBatchConfig,
  In = 0,
  de = null,
  _e = null,
  ke = null,
  Di = !1,
  br = !1,
  vl = 0,
  Pm = 0;
function Te() {
  throw Error(R(321));
}
function gu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!wt(e[n], t[n])) return !1;
  return !0;
}
function yu(e, t, n, r, l, i) {
  if (
    ((In = i),
    (de = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ui.current = e === null || e.memoizedState === null ? jm : Tm),
    (e = n(r, l)),
    br)
  ) {
    i = 0;
    do {
      if (((br = !1), (vl = 0), 25 <= i)) throw Error(R(301));
      ((i += 1), (ke = _e = null), (t.updateQueue = null), (ui.current = Dm), (e = n(r, l)));
    } while (br);
  }
  if (
    ((ui.current = Mi),
    (t = _e !== null && _e.next !== null),
    (In = 0),
    (ke = _e = de = null),
    (Di = !1),
    t)
  )
    throw Error(R(300));
  return e;
}
function wu() {
  var e = vl !== 0;
  return ((vl = 0), e);
}
function Et() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return (ke === null ? (de.memoizedState = ke = e) : (ke = ke.next = e), ke);
}
function st() {
  if (_e === null) {
    var e = de.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = _e.next;
  var t = ke === null ? de.memoizedState : ke.next;
  if (t !== null) ((ke = t), (_e = e));
  else {
    if (e === null) throw Error(R(310));
    ((_e = e),
      (e = {
        memoizedState: _e.memoizedState,
        baseState: _e.baseState,
        baseQueue: _e.baseQueue,
        queue: _e.queue,
        next: null,
      }),
      ke === null ? (de.memoizedState = ke = e) : (ke = ke.next = e));
  }
  return ke;
}
function gl(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Mo(e) {
  var t = st(),
    n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = _e,
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
    var a = (o = null),
      u = null,
      s = i;
    do {
      var f = s.lane;
      if ((In & f) === f)
        (u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: s.action,
              hasEagerState: s.hasEagerState,
              eagerState: s.eagerState,
              next: null,
            }),
          (r = s.hasEagerState ? s.eagerState : e(r, s.action)));
      else {
        var d = {
          lane: f,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null,
        };
        (u === null ? ((a = u = d), (o = r)) : (u = u.next = d), (de.lanes |= f), (Fn |= f));
      }
      s = s.next;
    } while (s !== null && s !== i);
    (u === null ? (o = r) : (u.next = a),
      wt(r, t.memoizedState) || (Qe = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = u),
      (n.lastRenderedState = r));
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do ((i = l.lane), (de.lanes |= i), (Fn |= i), (l = l.next));
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function zo(e) {
  var t = st(),
    n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = (l = l.next);
    do ((i = e(i, o.action)), (o = o.next));
    while (o !== l);
    (wt(i, t.memoizedState) || (Qe = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i));
  }
  return [i, r];
}
function nd() {}
function rd(e, t) {
  var n = de,
    r = st(),
    l = t(),
    i = !wt(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (Qe = !0)),
    (r = r.queue),
    Su(od.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (ke !== null && ke.memoizedState.tag & 1))
  ) {
    if (((n.flags |= 2048), yl(9, id.bind(null, n, r, l, t), void 0, null), Ce === null))
      throw Error(R(349));
    In & 30 || ld(n, t, l);
  }
  return l;
}
function ld(e, t, n) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = de.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (de.updateQueue = t), (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
}
function id(e, t, n, r) {
  ((t.value = n), (t.getSnapshot = r), ad(t) && ud(e));
}
function od(e, t, n) {
  return n(function () {
    ad(t) && ud(e);
  });
}
function ad(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !wt(e, n);
  } catch {
    return !0;
  }
}
function ud(e) {
  var t = At(e, 1);
  t !== null && yt(t, e, 1, -1);
}
function Bs(e) {
  var t = Et();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: gl,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Lm.bind(null, de, e)),
    [t.memoizedState, e]
  );
}
function yl(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = de.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (de.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function sd() {
  return st().memoizedState;
}
function si(e, t, n, r) {
  var l = Et();
  ((de.flags |= e), (l.memoizedState = yl(1 | t, n, void 0, r === void 0 ? null : r)));
}
function Ji(e, t, n, r) {
  var l = st();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (_e !== null) {
    var o = _e.memoizedState;
    if (((i = o.destroy), r !== null && gu(r, o.deps))) {
      l.memoizedState = yl(t, n, i, r);
      return;
    }
  }
  ((de.flags |= e), (l.memoizedState = yl(1 | t, n, i, r)));
}
function $s(e, t) {
  return si(8390656, 8, e, t);
}
function Su(e, t) {
  return Ji(2048, 8, e, t);
}
function cd(e, t) {
  return Ji(4, 2, e, t);
}
function fd(e, t) {
  return Ji(4, 4, e, t);
}
function dd(e, t) {
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
function pd(e, t, n) {
  return ((n = n != null ? n.concat([e]) : null), Ji(4, 4, dd.bind(null, t, e), n));
}
function xu() {}
function hd(e, t) {
  var n = st();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && gu(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function md(e, t) {
  var n = st();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && gu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function vd(e, t, n) {
  return In & 21
    ? (wt(n, t) || ((n = xf()), (de.lanes |= n), (Fn |= n), (e.baseState = !0)), t)
    : (e.baseState && ((e.baseState = !1), (Qe = !0)), (e.memoizedState = n));
}
function Nm(e, t) {
  var n = ee;
  ((ee = n !== 0 && 4 > n ? n : 4), e(!0));
  var r = Do.transition;
  Do.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((ee = n), (Do.transition = r));
  }
}
function gd() {
  return st().memoizedState;
}
function Rm(e, t, n) {
  var r = dn(e);
  if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), yd(e)))
    wd(t, n);
  else if (((n = bf(e, t, n, r)), n !== null)) {
    var l = Be();
    (yt(n, e, r, l), Sd(n, t, r));
  }
}
function Lm(e, t, n) {
  var r = dn(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (yd(e)) wd(t, l);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && ((i = t.lastRenderedReducer), i !== null))
      try {
        var o = t.lastRenderedState,
          a = i(o, n);
        if (((l.hasEagerState = !0), (l.eagerState = a), wt(a, o))) {
          var u = t.interleaved;
          (u === null ? ((l.next = l), du(t)) : ((l.next = u.next), (u.next = l)),
            (t.interleaved = l));
          return;
        }
      } catch {
      } finally {
      }
    ((n = bf(e, t, l, r)), n !== null && ((l = Be()), yt(n, e, r, l), Sd(n, t, r)));
  }
}
function yd(e) {
  var t = e.alternate;
  return e === de || (t !== null && t === de);
}
function wd(e, t) {
  br = Di = !0;
  var n = e.pending;
  (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
}
function Sd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), qa(e, n));
  }
}
var Mi = {
    readContext: ut,
    useCallback: Te,
    useContext: Te,
    useEffect: Te,
    useImperativeHandle: Te,
    useInsertionEffect: Te,
    useLayoutEffect: Te,
    useMemo: Te,
    useReducer: Te,
    useRef: Te,
    useState: Te,
    useDebugValue: Te,
    useDeferredValue: Te,
    useTransition: Te,
    useMutableSource: Te,
    useSyncExternalStore: Te,
    useId: Te,
    unstable_isNewReconciler: !1,
  },
  jm = {
    readContext: ut,
    useCallback: function (e, t) {
      return ((Et().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: ut,
    useEffect: $s,
    useImperativeHandle: function (e, t, n) {
      return ((n = n != null ? n.concat([e]) : null), si(4194308, 4, dd.bind(null, t, e), n));
    },
    useLayoutEffect: function (e, t) {
      return si(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return si(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Et();
      return ((t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e);
    },
    useReducer: function (e, t, n) {
      var r = Et();
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
        (e = e.dispatch = Rm.bind(null, de, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Et();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: Bs,
    useDebugValue: xu,
    useDeferredValue: function (e) {
      return (Et().memoizedState = e);
    },
    useTransition: function () {
      var e = Bs(!1),
        t = e[0];
      return ((e = Nm.bind(null, e[1])), (Et().memoizedState = e), [t, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = de,
        l = Et();
      if (se) {
        if (n === void 0) throw Error(R(407));
        n = n();
      } else {
        if (((n = t()), Ce === null)) throw Error(R(349));
        In & 30 || ld(r, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (l.queue = i),
        $s(od.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        yl(9, id.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Et(),
        t = Ce.identifierPrefix;
      if (se) {
        var n = zt,
          r = Mt;
        ((n = (r & ~(1 << (32 - gt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = vl++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":"));
      } else ((n = Pm++), (t = ":" + t + "r" + n.toString(32) + ":"));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Tm = {
    readContext: ut,
    useCallback: hd,
    useContext: ut,
    useEffect: Su,
    useImperativeHandle: pd,
    useInsertionEffect: cd,
    useLayoutEffect: fd,
    useMemo: md,
    useReducer: Mo,
    useRef: sd,
    useState: function () {
      return Mo(gl);
    },
    useDebugValue: xu,
    useDeferredValue: function (e) {
      var t = st();
      return vd(t, _e.memoizedState, e);
    },
    useTransition: function () {
      var e = Mo(gl)[0],
        t = st().memoizedState;
      return [e, t];
    },
    useMutableSource: nd,
    useSyncExternalStore: rd,
    useId: gd,
    unstable_isNewReconciler: !1,
  },
  Dm = {
    readContext: ut,
    useCallback: hd,
    useContext: ut,
    useEffect: Su,
    useImperativeHandle: pd,
    useInsertionEffect: cd,
    useLayoutEffect: fd,
    useMemo: md,
    useReducer: zo,
    useRef: sd,
    useState: function () {
      return zo(gl);
    },
    useDebugValue: xu,
    useDeferredValue: function (e) {
      var t = st();
      return _e === null ? (t.memoizedState = e) : vd(t, _e.memoizedState, e);
    },
    useTransition: function () {
      var e = zo(gl)[0],
        t = st().memoizedState;
      return [e, t];
    },
    useMutableSource: nd,
    useSyncExternalStore: rd,
    useId: gd,
    unstable_isNewReconciler: !1,
  };
function pt(e, t) {
  if (e && e.defaultProps) {
    ((t = pe({}, t)), (e = e.defaultProps));
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function wa(e, t, n, r) {
  ((t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : pe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n));
}
var Zi = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? $n(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Be(),
      l = dn(e),
      i = Ot(r, l);
    ((i.payload = t),
      n != null && (i.callback = n),
      (t = cn(e, i, l)),
      t !== null && (yt(t, e, l, r), ai(t, e, l)));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Be(),
      l = dn(e),
      i = Ot(r, l);
    ((i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = cn(e, i, l)),
      t !== null && (yt(t, e, l, r), ai(t, e, l)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Be(),
      r = dn(e),
      l = Ot(n, r);
    ((l.tag = 2),
      t != null && (l.callback = t),
      (t = cn(e, l, r)),
      t !== null && (yt(t, e, r, n), ai(t, e, r)));
  },
};
function Hs(e, t, n, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
        ? !cl(n, r) || !cl(l, i)
        : !0
  );
}
function xd(e, t, n) {
  var r = !1,
    l = mn,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = ut(i))
      : ((l = Ye(t) ? zn : Oe.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? hr(e, l) : mn)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Zi),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Ws(e, t, n, r) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Zi.enqueueReplaceState(t, t.state, null));
}
function Sa(e, t, n, r) {
  var l = e.stateNode;
  ((l.props = n), (l.state = e.memoizedState), (l.refs = {}), pu(e));
  var i = t.contextType;
  (typeof i == "object" && i !== null
    ? (l.context = ut(i))
    : ((i = Ye(t) ? zn : Oe.current), (l.context = hr(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (wa(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(),
      t !== l.state && Zi.enqueueReplaceState(l, l.state, null),
      ji(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308));
}
function yr(e, t) {
  try {
    var n = "",
      r = t;
    do ((n += oh(r)), (r = r.return));
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
function Oo(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function xa(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Mm = typeof WeakMap == "function" ? WeakMap : Map;
function _d(e, t, n) {
  ((n = Ot(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var r = t.value;
  return (
    (n.callback = function () {
      (Oi || ((Oi = !0), (Ta = r)), xa(e, t));
    }),
    n
  );
}
function Ed(e, t, n) {
  ((n = Ot(-1, n)), (n.tag = 3));
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    ((n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        xa(e, t);
      }));
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        (xa(e, t), typeof r != "function" && (fn === null ? (fn = new Set([this])) : fn.add(this)));
        var o = t.stack;
        this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
      }),
    n
  );
}
function Vs(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Mm();
    var l = new Set();
    r.set(t, l);
  } else ((l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l)));
  l.has(n) || (l.add(n), (e = Ym.bind(null, e, t, n)), t.then(e, e));
}
function Qs(e) {
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
function Ks(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null ? (n.tag = 17) : ((t = Ot(-1, 1)), (t.tag = 2), cn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var zm = Ht.ReactCurrentOwner,
  Qe = !1;
function Ae(e, t, n, r) {
  t.child = e === null ? qf(t, null, n, r) : vr(t, e.child, n, r);
}
function Ys(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return (
    fr(t, l),
    (r = yu(e, t, n, r, i, l)),
    (n = wu()),
    e !== null && !Qe
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), Bt(e, t, l))
      : (se && n && ou(t), (t.flags |= 1), Ae(e, t, r, l), t.child)
  );
}
function Xs(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Lu(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), kd(e, t, i, r, l))
      : ((e = pi(n.type, null, r, t, t.mode, l)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps;
    if (((n = n.compare), (n = n !== null ? n : cl), n(o, r) && e.ref === t.ref))
      return Bt(e, t, l);
  }
  return ((t.flags |= 1), (e = pn(i, r)), (e.ref = t.ref), (e.return = t), (t.child = e));
}
function kd(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (cl(i, r) && e.ref === t.ref)
      if (((Qe = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0)) e.flags & 131072 && (Qe = !0);
      else return ((t.lanes = e.lanes), Bt(e, t, l));
  }
  return _a(e, t, n, r, l);
}
function Cd(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ie(or, Je),
        (Je |= n));
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
          (t.updateQueue = null),
          ie(or, Je),
          (Je |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        ie(or, Je),
        (Je |= r));
    }
  else
    (i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ie(or, Je),
      (Je |= r));
  return (Ae(e, t, l, n), t.child);
}
function Pd(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function _a(e, t, n, r, l) {
  var i = Ye(n) ? zn : Oe.current;
  return (
    (i = hr(t, i)),
    fr(t, l),
    (n = yu(e, t, n, r, i, l)),
    (r = wu()),
    e !== null && !Qe
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), Bt(e, t, l))
      : (se && r && ou(t), (t.flags |= 1), Ae(e, t, n, l), t.child)
  );
}
function Gs(e, t, n, r, l) {
  if (Ye(n)) {
    var i = !0;
    Ci(t);
  } else i = !1;
  if ((fr(t, l), t.stateNode === null)) (ci(e, t), xd(t, n, r), Sa(t, n, r, l), (r = !0));
  else if (e === null) {
    var o = t.stateNode,
      a = t.memoizedProps;
    o.props = a;
    var u = o.context,
      s = n.contextType;
    typeof s == "object" && s !== null
      ? (s = ut(s))
      : ((s = Ye(n) ? zn : Oe.current), (s = hr(t, s)));
    var f = n.getDerivedStateFromProps,
      d = typeof f == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    (d ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== r || u !== s) && Ws(t, o, r, s)),
      (bt = !1));
    var p = t.memoizedState;
    ((o.state = p),
      ji(t, r, o, l),
      (u = t.memoizedState),
      a !== r || p !== u || Ke.current || bt
        ? (typeof f == "function" && (wa(t, n, f, r), (u = t.memoizedState)),
          (a = bt || Hs(t, n, a, r, p, u, s))
            ? (d ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" && o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (o.props = r),
          (o.state = u),
          (o.context = s),
          (r = a))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), (r = !1)));
  } else {
    ((o = t.stateNode),
      ed(e, t),
      (a = t.memoizedProps),
      (s = t.type === t.elementType ? a : pt(t.type, a)),
      (o.props = s),
      (d = t.pendingProps),
      (p = o.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = ut(u))
        : ((u = Ye(n) ? zn : Oe.current), (u = hr(t, u))));
    var S = n.getDerivedStateFromProps;
    ((f = typeof S == "function" || typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== d || p !== u) && Ws(t, o, r, u)),
      (bt = !1),
      (p = t.memoizedState),
      (o.state = p),
      ji(t, r, o, l));
    var x = t.memoizedState;
    a !== d || p !== x || Ke.current || bt
      ? (typeof S == "function" && (wa(t, n, S, r), (x = t.memoizedState)),
        (s = bt || Hs(t, n, s, r, p, x, u) || !1)
          ? (f ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, x, u),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, x, u)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (a === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = x)),
        (o.props = r),
        (o.state = x),
        (o.context = u),
        (r = s))
      : (typeof o.componentDidUpdate != "function" ||
          (a === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Ea(e, t, n, r, i, l);
}
function Ea(e, t, n, r, l, i) {
  Pd(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return (l && zs(t, n, !1), Bt(e, t, i));
  ((r = t.stateNode), (zm.current = t));
  var a = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = vr(t, e.child, null, i)), (t.child = vr(t, null, a, i)))
      : Ae(e, t, a, i),
    (t.memoizedState = r.state),
    l && zs(t, n, !0),
    t.child
  );
}
function Nd(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? Ms(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Ms(e, t.context, !1),
    hu(e, t.containerInfo));
}
function Js(e, t, n, r, l) {
  return (mr(), uu(l), (t.flags |= 256), Ae(e, t, n, r), t.child);
}
var ka = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ca(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Rd(e, t, n) {
  var r = t.pendingProps,
    l = fe.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    a;
  if (
    ((a = o) || (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    a ? ((i = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (l |= 1),
    ie(fe, l & 1),
    e === null)
  )
    return (
      ga(t),
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
                : (i = eo(o, r, 0, null)),
              (e = Dn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Ca(n)),
              (t.memoizedState = ka),
              e)
            : _u(t, o))
    );
  if (((l = e.memoizedState), l !== null && ((a = l.dehydrated), a !== null)))
    return Om(e, t, o, r, a, l, n);
  if (i) {
    ((i = r.fallback), (o = t.mode), (l = e.child), (a = l.sibling));
    var u = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== l
        ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = u), (t.deletions = null))
        : ((r = pn(l, u)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      a !== null ? (i = pn(a, i)) : ((i = Dn(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Ca(n)
          : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = ka),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = pn(i, { mode: "visible", children: r.children })),
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
function _u(e, t) {
  return (
    (t = eo({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Gl(e, t, n, r) {
  return (
    r !== null && uu(r),
    vr(t, e.child, null, n),
    (e = _u(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Om(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Oo(Error(R(422)))), Gl(e, t, o, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (l = t.mode),
          (r = eo({ mode: "visible", children: r.children }, l, 0, null)),
          (i = Dn(i, l, o, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && vr(t, e.child, null, o),
          (t.child.memoizedState = Ca(o)),
          (t.memoizedState = ka),
          i);
  if (!(t.mode & 1)) return Gl(e, t, o, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var a = r.dgst;
    return ((r = a), (i = Error(R(419))), (r = Oo(i, r, void 0)), Gl(e, t, o, r));
  }
  if (((a = (o & e.childLanes) !== 0), Qe || a)) {
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
        l !== 0 && l !== i.retryLane && ((i.retryLane = l), At(e, l), yt(r, e, l, -1)));
    }
    return (Ru(), (r = Oo(Error(R(421)))), Gl(e, t, o, r));
  }
  return l.data === "$?"
    ? ((t.flags |= 128), (t.child = e.child), (t = Xm.bind(null, e)), (l._reactRetry = t), null)
    : ((e = i.treeContext),
      (qe = sn(l.nextSibling)),
      (be = t),
      (se = !0),
      (vt = null),
      e !== null &&
        ((lt[it++] = Mt),
        (lt[it++] = zt),
        (lt[it++] = On),
        (Mt = e.id),
        (zt = e.overflow),
        (On = t)),
      (t = _u(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Zs(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  (r !== null && (r.lanes |= t), ya(e.return, t, n));
}
function Io(e, t, n, r, l) {
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
function Ld(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((Ae(e, t, r.children, n), (r = fe.current), r & 2)) ((r = (r & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Zs(e, n, t);
        else if (e.tag === 19) Zs(e, n, t);
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
  if ((ie(fe, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          ((e = n.alternate), e !== null && Ti(e) === null && (l = n), (n = n.sibling));
        ((n = l),
          n === null ? ((l = t.child), (t.child = null)) : ((l = n.sibling), (n.sibling = null)),
          Io(t, !1, l, n, i));
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Ti(e) === null)) {
            t.child = l;
            break;
          }
          ((e = l.sibling), (l.sibling = n), (n = l), (l = e));
        }
        Io(t, !0, n, null, i);
        break;
      case "together":
        Io(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function ci(e, t) {
  !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Bt(e, t, n) {
  if ((e !== null && (t.dependencies = e.dependencies), (Fn |= t.lanes), !(n & t.childLanes)))
    return null;
  if (e !== null && t.child !== e.child) throw Error(R(153));
  if (t.child !== null) {
    for (e = t.child, n = pn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      ((e = e.sibling), (n = n.sibling = pn(e, e.pendingProps)), (n.return = t));
    n.sibling = null;
  }
  return t.child;
}
function Im(e, t, n) {
  switch (t.tag) {
    case 3:
      (Nd(t), mr());
      break;
    case 5:
      td(t);
      break;
    case 1:
      Ye(t.type) && Ci(t);
      break;
    case 4:
      hu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      (ie(Ri, r._currentValue), (r._currentValue = l));
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ie(fe, fe.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Rd(e, t, n)
            : (ie(fe, fe.current & 1), (e = Bt(e, t, n)), e !== null ? e.sibling : null);
      ie(fe, fe.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Ld(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null && ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        ie(fe, fe.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), Cd(e, t, n));
  }
  return Bt(e, t, n);
}
var jd, Pa, Td, Dd;
jd = function (e, t) {
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
Pa = function () {};
Td = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    ((e = t.stateNode), Ln(Nt.current));
    var i = null;
    switch (n) {
      case "input":
        ((l = Xo(e, l)), (r = Xo(e, r)), (i = []));
        break;
      case "select":
        ((l = pe({}, l, { value: void 0 })), (r = pe({}, r, { value: void 0 })), (i = []));
        break;
      case "textarea":
        ((l = Zo(e, l)), (r = Zo(e, r)), (i = []));
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ei);
    }
    bo(n, r);
    var o;
    n = null;
    for (s in l)
      if (!r.hasOwnProperty(s) && l.hasOwnProperty(s) && l[s] != null)
        if (s === "style") {
          var a = l[s];
          for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          s !== "dangerouslySetInnerHTML" &&
            s !== "children" &&
            s !== "suppressContentEditableWarning" &&
            s !== "suppressHydrationWarning" &&
            s !== "autoFocus" &&
            (rl.hasOwnProperty(s) ? i || (i = []) : (i = i || []).push(s, null));
    for (s in r) {
      var u = r[s];
      if (
        ((a = l != null ? l[s] : void 0),
        r.hasOwnProperty(s) && u !== a && (u != null || a != null))
      )
        if (s === "style")
          if (a) {
            for (o in a)
              !a.hasOwnProperty(o) || (u && u.hasOwnProperty(o)) || (n || (n = {}), (n[o] = ""));
            for (o in u) u.hasOwnProperty(o) && a[o] !== u[o] && (n || (n = {}), (n[o] = u[o]));
          } else (n || (i || (i = []), i.push(s, n)), (n = u));
        else
          s === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (a = a ? a.__html : void 0),
              u != null && a !== u && (i = i || []).push(s, u))
            : s === "children"
              ? (typeof u != "string" && typeof u != "number") || (i = i || []).push(s, "" + u)
              : s !== "suppressContentEditableWarning" &&
                s !== "suppressHydrationWarning" &&
                (rl.hasOwnProperty(s)
                  ? (u != null && s === "onScroll" && oe("scroll", e), i || a === u || (i = []))
                  : (i = i || []).push(s, u));
    }
    n && (i = i || []).push("style", n);
    var s = i;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
Dd = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Fr(e, t) {
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
function Fm(e, t, n) {
  var r = t.pendingProps;
  switch ((au(t), t.tag)) {
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
      return (Ye(t.type) && ki(), De(t), null);
    case 3:
      return (
        (r = t.stateNode),
        gr(),
        ae(Ke),
        ae(Oe),
        vu(),
        r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Yl(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), vt !== null && (za(vt), (vt = null)))),
        Pa(e, t),
        De(t),
        null
      );
    case 5:
      mu(t);
      var l = Ln(ml.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        (Td(e, t, n, r, l), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(R(166));
          return (De(t), null);
        }
        if (((e = Ln(Nt.current)), Yl(t))) {
          ((r = t.stateNode), (n = t.type));
          var i = t.memoizedProps;
          switch (((r[kt] = t), (r[pl] = i), (e = (t.mode & 1) !== 0), n)) {
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
              for (l = 0; l < Kr.length; l++) oe(Kr[l], r);
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
              (os(r, i), oe("invalid", r));
              break;
            case "select":
              ((r._wrapperState = { wasMultiple: !!i.multiple }), oe("invalid", r));
              break;
            case "textarea":
              (us(r, i), oe("invalid", r));
          }
          (bo(n, i), (l = null));
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var a = i[o];
              o === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 && Kl(r.textContent, a, e),
                    (l = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (i.suppressHydrationWarning !== !0 && Kl(r.textContent, a, e),
                    (l = ["children", "" + a]))
                : rl.hasOwnProperty(o) && a != null && o === "onScroll" && oe("scroll", r);
            }
          switch (n) {
            case "input":
              (Ul(r), as(r, i, !0));
              break;
            case "textarea":
              (Ul(r), ss(r));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Ei);
          }
          ((r = l), (t.updateQueue = r), r !== null && (t.flags |= 4));
        } else {
          ((o = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = of(n)),
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
            (e[kt] = t),
            (e[pl] = r),
            jd(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((o = ea(n, r)), n)) {
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
                for (l = 0; l < Kr.length; l++) oe(Kr[l], e);
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
                (os(e, r), (l = Xo(e, r)), oe("invalid", e));
                break;
              case "option":
                l = r;
                break;
              case "select":
                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = pe({}, r, { value: void 0 })),
                  oe("invalid", e));
                break;
              case "textarea":
                (us(e, r), (l = Zo(e, r)), oe("invalid", e));
                break;
              default:
                l = r;
            }
            (bo(n, l), (a = l));
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var u = a[i];
                i === "style"
                  ? sf(e, u)
                  : i === "dangerouslySetInnerHTML"
                    ? ((u = u ? u.__html : void 0), u != null && af(e, u))
                    : i === "children"
                      ? typeof u == "string"
                        ? (n !== "textarea" || u !== "") && ll(e, u)
                        : typeof u == "number" && ll(e, "" + u)
                      : i !== "suppressContentEditableWarning" &&
                        i !== "suppressHydrationWarning" &&
                        i !== "autoFocus" &&
                        (rl.hasOwnProperty(i)
                          ? u != null && i === "onScroll" && oe("scroll", e)
                          : u != null && Ka(e, i, u, o));
              }
            switch (n) {
              case "input":
                (Ul(e), as(e, r, !1));
                break;
              case "textarea":
                (Ul(e), ss(e));
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + hn(r.value));
                break;
              case "select":
                ((e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? ar(e, !!r.multiple, i, !1)
                    : r.defaultValue != null && ar(e, !!r.multiple, r.defaultValue, !0));
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Ei);
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
      if (e && t.stateNode != null) Dd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(R(166));
        if (((n = Ln(ml.current)), Ln(Nt.current), Yl(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[kt] = t),
            (i = r.nodeValue !== n) && ((e = be), e !== null))
          )
            switch (e.tag) {
              case 3:
                Kl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Kl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[kt] = t),
            (t.stateNode = r));
      }
      return (De(t), null);
    case 13:
      if (
        (ae(fe),
        (r = t.memoizedState),
        e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (se && qe !== null && t.mode & 1 && !(t.flags & 128))
          (Jf(), mr(), (t.flags |= 98560), (i = !1));
        else if (((i = Yl(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(R(318));
            if (((i = t.memoizedState), (i = i !== null ? i.dehydrated : null), !i))
              throw Error(R(317));
            i[kt] = t;
          } else (mr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4));
          (De(t), (i = !1));
        } else (vt !== null && (za(vt), (vt = null)), (i = !0));
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 && (e === null || fe.current & 1 ? Ee === 0 && (Ee = 3) : Ru())),
          t.updateQueue !== null && (t.flags |= 4),
          De(t),
          null);
    case 4:
      return (gr(), Pa(e, t), e === null && fl(t.stateNode.containerInfo), De(t), null);
    case 10:
      return (fu(t.type._context), De(t), null);
    case 17:
      return (Ye(t.type) && ki(), De(t), null);
    case 19:
      if ((ae(fe), (i = t.memoizedState), i === null)) return (De(t), null);
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) Fr(i, !1);
        else {
          if (Ee !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = Ti(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    Fr(i, !1),
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
                return (ie(fe, (fe.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          i.tail !== null &&
            ge() > wr &&
            ((t.flags |= 128), (r = !0), Fr(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Ti(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Fr(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !se)
            )
              return (De(t), null);
          } else
            2 * ge() - i.renderingStartTime > wr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Fr(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last), n !== null ? (n.sibling = o) : (t.child = o), (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = ge()),
          (t.sibling = null),
          (n = fe.current),
          ie(fe, r ? (n & 1) | 2 : n & 1),
          t)
        : (De(t), null);
    case 22:
    case 23:
      return (
        Nu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Je & 1073741824 && (De(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : De(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(R(156, t.tag));
}
function Um(e, t) {
  switch ((au(t), t.tag)) {
    case 1:
      return (
        Ye(t.type) && ki(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        gr(),
        ae(Ke),
        ae(Oe),
        vu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return (mu(t), null);
    case 13:
      if ((ae(fe), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(R(340));
        mr();
      }
      return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
    case 19:
      return (ae(fe), null);
    case 4:
      return (gr(), null);
    case 10:
      return (fu(t.type._context), null);
    case 22:
    case 23:
      return (Nu(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var Jl = !1,
  ze = !1,
  Am = typeof WeakSet == "function" ? WeakSet : Set,
  O = null;
function ir(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ve(e, t, r);
      }
    else n.current = null;
}
function Na(e, t, n) {
  try {
    n();
  } catch (r) {
    ve(e, t, r);
  }
}
var qs = !1;
function Bm(e, t) {
  if (((ca = Si), (e = Ff()), iu(e))) {
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
            a = -1,
            u = -1,
            s = 0,
            f = 0,
            d = e,
            p = null;
          t: for (;;) {
            for (
              var S;
              d !== n || (l !== 0 && d.nodeType !== 3) || (a = o + l),
                d !== i || (r !== 0 && d.nodeType !== 3) || (u = o + r),
                d.nodeType === 3 && (o += d.nodeValue.length),
                (S = d.firstChild) !== null;

            )
              ((p = d), (d = S));
            for (;;) {
              if (d === e) break t;
              if (
                (p === n && ++s === l && (a = o),
                p === i && ++f === r && (u = o),
                (S = d.nextSibling) !== null)
              )
                break;
              ((d = p), (p = d.parentNode));
            }
            d = S;
          }
          n = a === -1 || u === -1 ? null : { start: a, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (fa = { focusedElem: e, selectionRange: n }, Si = !1, O = t; O !== null; )
    if (((t = O), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (O = e));
    else
      for (; O !== null; ) {
        t = O;
        try {
          var x = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (x !== null) {
                  var E = x.memoizedProps,
                    T = x.memoizedState,
                    m = t.stateNode,
                    c = m.getSnapshotBeforeUpdate(t.elementType === t.type ? E : pt(t.type, E), T);
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
                throw Error(R(163));
            }
        } catch (k) {
          ve(t, t.return, k);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (O = e));
          break;
        }
        O = t.return;
      }
  return ((x = qs), (qs = !1), x);
}
function el(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        ((l.destroy = void 0), i !== void 0 && Na(t, n, i));
      }
      l = l.next;
    } while (l !== r);
  }
}
function qi(e, t) {
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
function Ra(e) {
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
function Md(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), Md(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null && (delete t[kt], delete t[pl], delete t[ha], delete t[_m], delete t[Em])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function zd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function bs(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || zd(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      ((e.child.return = e), (e = e.child));
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function La(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = Ei)));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (La(e, t, n), e = e.sibling; e !== null; ) (La(e, t, n), (e = e.sibling));
}
function ja(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ja(e, t, n), e = e.sibling; e !== null; ) (ja(e, t, n), (e = e.sibling));
}
var Re = null,
  ht = !1;
function Gt(e, t, n) {
  for (n = n.child; n !== null; ) (Od(e, t, n), (n = n.sibling));
}
function Od(e, t, n) {
  if (Pt && typeof Pt.onCommitFiberUnmount == "function")
    try {
      Pt.onCommitFiberUnmount(Vi, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ze || ir(n, t);
    case 6:
      var r = Re,
        l = ht;
      ((Re = null),
        Gt(e, t, n),
        (Re = r),
        (ht = l),
        Re !== null &&
          (ht
            ? ((e = Re),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Re.removeChild(n.stateNode)));
      break;
    case 18:
      Re !== null &&
        (ht
          ? ((e = Re),
            (n = n.stateNode),
            e.nodeType === 8 ? Lo(e.parentNode, n) : e.nodeType === 1 && Lo(e, n),
            ul(e))
          : Lo(Re, n.stateNode));
      break;
    case 4:
      ((r = Re),
        (l = ht),
        (Re = n.stateNode.containerInfo),
        (ht = !0),
        Gt(e, t, n),
        (Re = r),
        (ht = l));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ze && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
        l = r = r.next;
        do {
          var i = l,
            o = i.destroy;
          ((i = i.tag), o !== void 0 && (i & 2 || i & 4) && Na(n, t, o), (l = l.next));
        } while (l !== r);
      }
      Gt(e, t, n);
      break;
    case 1:
      if (!ze && (ir(n, t), (r = n.stateNode), typeof r.componentWillUnmount == "function"))
        try {
          ((r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount());
        } catch (a) {
          ve(n, t, a);
        }
      Gt(e, t, n);
      break;
    case 21:
      Gt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ze = (r = ze) || n.memoizedState !== null), Gt(e, t, n), (ze = r))
        : Gt(e, t, n);
      break;
    default:
      Gt(e, t, n);
  }
}
function ec(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    (n === null && (n = e.stateNode = new Am()),
      t.forEach(function (r) {
        var l = Gm.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      }));
  }
}
function dt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e,
          o = t,
          a = o;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              ((Re = a.stateNode), (ht = !1));
              break e;
            case 3:
              ((Re = a.stateNode.containerInfo), (ht = !0));
              break e;
            case 4:
              ((Re = a.stateNode.containerInfo), (ht = !0));
              break e;
          }
          a = a.return;
        }
        if (Re === null) throw Error(R(160));
        (Od(i, o, l), (Re = null), (ht = !1));
        var u = l.alternate;
        (u !== null && (u.return = null), (l.return = null));
      } catch (s) {
        ve(l, t, s);
      }
    }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) (Id(t, e), (t = t.sibling));
}
function Id(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((dt(t, e), xt(e), r & 4)) {
        try {
          (el(3, e, e.return), qi(3, e));
        } catch (E) {
          ve(e, e.return, E);
        }
        try {
          el(5, e, e.return);
        } catch (E) {
          ve(e, e.return, E);
        }
      }
      break;
    case 1:
      (dt(t, e), xt(e), r & 512 && n !== null && ir(n, n.return));
      break;
    case 5:
      if ((dt(t, e), xt(e), r & 512 && n !== null && ir(n, n.return), e.flags & 32)) {
        var l = e.stateNode;
        try {
          ll(l, "");
        } catch (E) {
          ve(e, e.return, E);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          a = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            (a === "input" && i.type === "radio" && i.name != null && rf(l, i), ea(a, o));
            var s = ea(a, i);
            for (o = 0; o < u.length; o += 2) {
              var f = u[o],
                d = u[o + 1];
              f === "style"
                ? sf(l, d)
                : f === "dangerouslySetInnerHTML"
                  ? af(l, d)
                  : f === "children"
                    ? ll(l, d)
                    : Ka(l, f, d, s);
            }
            switch (a) {
              case "input":
                Go(l, i);
                break;
              case "textarea":
                lf(l, i);
                break;
              case "select":
                var p = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var S = i.value;
                S != null
                  ? ar(l, !!i.multiple, S, !1)
                  : p !== !!i.multiple &&
                    (i.defaultValue != null
                      ? ar(l, !!i.multiple, i.defaultValue, !0)
                      : ar(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[pl] = i;
          } catch (E) {
            ve(e, e.return, E);
          }
      }
      break;
    case 6:
      if ((dt(t, e), xt(e), r & 4)) {
        if (e.stateNode === null) throw Error(R(162));
        ((l = e.stateNode), (i = e.memoizedProps));
        try {
          l.nodeValue = i;
        } catch (E) {
          ve(e, e.return, E);
        }
      }
      break;
    case 3:
      if ((dt(t, e), xt(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
        try {
          ul(t.containerInfo);
        } catch (E) {
          ve(e, e.return, E);
        }
      break;
    case 4:
      (dt(t, e), xt(e));
      break;
    case 13:
      (dt(t, e),
        xt(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i || (l.alternate !== null && l.alternate.memoizedState !== null) || (Cu = ge())),
        r & 4 && ec(e));
      break;
    case 22:
      if (
        ((f = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ze = (s = ze) || f), dt(t, e), (ze = s)) : dt(t, e),
        xt(e),
        r & 8192)
      ) {
        if (((s = e.memoizedState !== null), (e.stateNode.isHidden = s) && !f && e.mode & 1))
          for (O = e, f = e.child; f !== null; ) {
            for (d = O = f; O !== null; ) {
              switch (((p = O), (S = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  el(4, p, p.return);
                  break;
                case 1:
                  ir(p, p.return);
                  var x = p.stateNode;
                  if (typeof x.componentWillUnmount == "function") {
                    ((r = p), (n = p.return));
                    try {
                      ((t = r),
                        (x.props = t.memoizedProps),
                        (x.state = t.memoizedState),
                        x.componentWillUnmount());
                    } catch (E) {
                      ve(r, n, E);
                    }
                  }
                  break;
                case 5:
                  ir(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    nc(d);
                    continue;
                  }
              }
              S !== null ? ((S.return = p), (O = S)) : nc(d);
            }
            f = f.sibling;
          }
        e: for (f = null, d = e; ; ) {
          if (d.tag === 5) {
            if (f === null) {
              f = d;
              try {
                ((l = d.stateNode),
                  s
                    ? ((i = l.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((a = d.stateNode),
                      (u = d.memoizedProps.style),
                      (o = u != null && u.hasOwnProperty("display") ? u.display : null),
                      (a.style.display = uf("display", o))));
              } catch (E) {
                ve(e, e.return, E);
              }
            }
          } else if (d.tag === 6) {
            if (f === null)
              try {
                d.stateNode.nodeValue = s ? "" : d.memoizedProps;
              } catch (E) {
                ve(e, e.return, E);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) || d.memoizedState === null || d === e) &&
            d.child !== null
          ) {
            ((d.child.return = d), (d = d.child));
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            (f === d && (f = null), (d = d.return));
          }
          (f === d && (f = null), (d.sibling.return = d.return), (d = d.sibling));
        }
      }
      break;
    case 19:
      (dt(t, e), xt(e), r & 4 && ec(e));
      break;
    case 21:
      break;
    default:
      (dt(t, e), xt(e));
  }
}
function xt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (zd(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(R(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (ll(l, ""), (r.flags &= -33));
          var i = bs(e);
          ja(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            a = bs(e);
          La(e, a, o);
          break;
        default:
          throw Error(R(161));
      }
    } catch (u) {
      ve(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function $m(e, t, n) {
  ((O = e), Fd(e));
}
function Fd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; O !== null; ) {
    var l = O,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || Jl;
      if (!o) {
        var a = l.alternate,
          u = (a !== null && a.memoizedState !== null) || ze;
        a = Jl;
        var s = ze;
        if (((Jl = o), (ze = u) && !s))
          for (O = l; O !== null; )
            ((o = O),
              (u = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? rc(l)
                : u !== null
                  ? ((u.return = o), (O = u))
                  : rc(l));
        for (; i !== null; ) ((O = i), Fd(i), (i = i.sibling));
        ((O = l), (Jl = a), (ze = s));
      }
      tc(e);
    } else l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (O = i)) : tc(e);
  }
}
function tc(e) {
  for (; O !== null; ) {
    var t = O;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ze || qi(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ze)
                if (n === null) r.componentDidMount();
                else {
                  var l = t.elementType === t.type ? n.memoizedProps : pt(t.type, n.memoizedProps);
                  r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var i = t.updateQueue;
              i !== null && As(t, i, r);
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
                As(t, o, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
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
                  var f = s.memoizedState;
                  if (f !== null) {
                    var d = f.dehydrated;
                    d !== null && ul(d);
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
              throw Error(R(163));
          }
        ze || (t.flags & 512 && Ra(t));
      } catch (p) {
        ve(t, t.return, p);
      }
    }
    if (t === e) {
      O = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      ((n.return = t.return), (O = n));
      break;
    }
    O = t.return;
  }
}
function nc(e) {
  for (; O !== null; ) {
    var t = O;
    if (t === e) {
      O = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      ((n.return = t.return), (O = n));
      break;
    }
    O = t.return;
  }
}
function rc(e) {
  for (; O !== null; ) {
    var t = O;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            qi(4, t);
          } catch (u) {
            ve(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              ve(t, l, u);
            }
          }
          var i = t.return;
          try {
            Ra(t);
          } catch (u) {
            ve(t, i, u);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Ra(t);
          } catch (u) {
            ve(t, o, u);
          }
      }
    } catch (u) {
      ve(t, t.return, u);
    }
    if (t === e) {
      O = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      ((a.return = t.return), (O = a));
      break;
    }
    O = t.return;
  }
}
var Hm = Math.ceil,
  zi = Ht.ReactCurrentDispatcher,
  Eu = Ht.ReactCurrentOwner,
  at = Ht.ReactCurrentBatchConfig,
  G = 0,
  Ce = null,
  Se = null,
  Le = 0,
  Je = 0,
  or = gn(0),
  Ee = 0,
  wl = null,
  Fn = 0,
  bi = 0,
  ku = 0,
  tl = null,
  Ve = null,
  Cu = 0,
  wr = 1 / 0,
  jt = null,
  Oi = !1,
  Ta = null,
  fn = null,
  Zl = !1,
  rn = null,
  Ii = 0,
  nl = 0,
  Da = null,
  fi = -1,
  di = 0;
function Be() {
  return G & 6 ? ge() : fi !== -1 ? fi : (fi = ge());
}
function dn(e) {
  return e.mode & 1
    ? G & 2 && Le !== 0
      ? Le & -Le
      : Cm.transition !== null
        ? (di === 0 && (di = xf()), di)
        : ((e = ee), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Rf(e.type))), e)
    : 1;
}
function yt(e, t, n, r) {
  if (50 < nl) throw ((nl = 0), (Da = null), Error(R(185)));
  (El(e, n, r),
    (!(G & 2) || e !== Ce) &&
      (e === Ce && (!(G & 2) && (bi |= n), Ee === 4 && tn(e, Le)),
      Xe(e, r),
      n === 1 && G === 0 && !(t.mode & 1) && ((wr = ge() + 500), Gi && yn())));
}
function Xe(e, t) {
  var n = e.callbackNode;
  Ch(e, t);
  var r = wi(e, e === Ce ? Le : 0);
  if (r === 0) (n !== null && ds(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && ds(n), t === 1))
      (e.tag === 0 ? km(lc.bind(null, e)) : Yf(lc.bind(null, e)),
        Sm(function () {
          !(G & 6) && yn();
        }),
        (n = null));
    else {
      switch (_f(r)) {
        case 1:
          n = Za;
          break;
        case 4:
          n = wf;
          break;
        case 16:
          n = yi;
          break;
        case 536870912:
          n = Sf;
          break;
        default:
          n = yi;
      }
      n = Qd(n, Ud.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = n));
  }
}
function Ud(e, t) {
  if (((fi = -1), (di = 0), G & 6)) throw Error(R(327));
  var n = e.callbackNode;
  if (dr() && e.callbackNode !== n) return null;
  var r = wi(e, e === Ce ? Le : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Fi(e, r);
  else {
    t = r;
    var l = G;
    G |= 2;
    var i = Bd();
    (Ce !== e || Le !== t) && ((jt = null), (wr = ge() + 500), Tn(e, t));
    do
      try {
        Qm();
        break;
      } catch (a) {
        Ad(e, a);
      }
    while (!0);
    (cu(), (zi.current = i), (G = l), Se !== null ? (t = 0) : ((Ce = null), (Le = 0), (t = Ee)));
  }
  if (t !== 0) {
    if ((t === 2 && ((l = ia(e)), l !== 0 && ((r = l), (t = Ma(e, l)))), t === 1))
      throw ((n = wl), Tn(e, 0), tn(e, r), Xe(e, ge()), n);
    if (t === 6) tn(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Wm(l) &&
          ((t = Fi(e, r)), t === 2 && ((i = ia(e)), i !== 0 && ((r = i), (t = Ma(e, i)))), t === 1))
      )
        throw ((n = wl), Tn(e, 0), tn(e, r), Xe(e, ge()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(R(345));
        case 2:
          kn(e, Ve, jt);
          break;
        case 3:
          if ((tn(e, r), (r & 130023424) === r && ((t = Cu + 500 - ge()), 10 < t))) {
            if (wi(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              (Be(), (e.pingedLanes |= e.suspendedLanes & l));
              break;
            }
            e.timeoutHandle = pa(kn.bind(null, e, Ve, jt), t);
            break;
          }
          kn(e, Ve, jt);
          break;
        case 4:
          if ((tn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - gt(r);
            ((i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i));
          }
          if (
            ((r = l),
            (r = ge() - r),
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
                          : 1960 * Hm(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = pa(kn.bind(null, e, Ve, jt), r);
            break;
          }
          kn(e, Ve, jt);
          break;
        case 5:
          kn(e, Ve, jt);
          break;
        default:
          throw Error(R(329));
      }
    }
  }
  return (Xe(e, ge()), e.callbackNode === n ? Ud.bind(null, e) : null);
}
function Ma(e, t) {
  var n = tl;
  return (
    e.current.memoizedState.isDehydrated && (Tn(e, t).flags |= 256),
    (e = Fi(e, t)),
    e !== 2 && ((t = Ve), (Ve = n), t !== null && za(t)),
    e
  );
}
function za(e) {
  Ve === null ? (Ve = e) : Ve.push.apply(Ve, e);
}
function Wm(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!wt(i(), l)) return !1;
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
function tn(e, t) {
  for (
    t &= ~ku, t &= ~bi, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - gt(t),
      r = 1 << n;
    ((e[n] = -1), (t &= ~r));
  }
}
function lc(e) {
  if (G & 6) throw Error(R(327));
  dr();
  var t = wi(e, 0);
  if (!(t & 1)) return (Xe(e, ge()), null);
  var n = Fi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ia(e);
    r !== 0 && ((t = r), (n = Ma(e, r)));
  }
  if (n === 1) throw ((n = wl), Tn(e, 0), tn(e, t), Xe(e, ge()), n);
  if (n === 6) throw Error(R(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    kn(e, Ve, jt),
    Xe(e, ge()),
    null
  );
}
function Pu(e, t) {
  var n = G;
  G |= 1;
  try {
    return e(t);
  } finally {
    ((G = n), G === 0 && ((wr = ge() + 500), Gi && yn()));
  }
}
function Un(e) {
  rn !== null && rn.tag === 0 && !(G & 6) && dr();
  var t = G;
  G |= 1;
  var n = at.transition,
    r = ee;
  try {
    if (((at.transition = null), (ee = 1), e)) return e();
  } finally {
    ((ee = r), (at.transition = n), (G = t), !(G & 6) && yn());
  }
}
function Nu() {
  ((Je = or.current), ae(or));
}
function Tn(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), wm(n)), Se !== null))
    for (n = Se.return; n !== null; ) {
      var r = n;
      switch ((au(r), r.tag)) {
        case 1:
          ((r = r.type.childContextTypes), r != null && ki());
          break;
        case 3:
          (gr(), ae(Ke), ae(Oe), vu());
          break;
        case 5:
          mu(r);
          break;
        case 4:
          gr();
          break;
        case 13:
          ae(fe);
          break;
        case 19:
          ae(fe);
          break;
        case 10:
          fu(r.type._context);
          break;
        case 22:
        case 23:
          Nu();
      }
      n = n.return;
    }
  if (
    ((Ce = e),
    (Se = e = pn(e.current, null)),
    (Le = Je = t),
    (Ee = 0),
    (wl = null),
    (ku = bi = Fn = 0),
    (Ve = tl = null),
    Rn !== null)
  ) {
    for (t = 0; t < Rn.length; t++)
      if (((n = Rn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          ((i.next = l), (r.next = o));
        }
        n.pending = r;
      }
    Rn = null;
  }
  return e;
}
function Ad(e, t) {
  do {
    var n = Se;
    try {
      if ((cu(), (ui.current = Mi), Di)) {
        for (var r = de.memoizedState; r !== null; ) {
          var l = r.queue;
          (l !== null && (l.pending = null), (r = r.next));
        }
        Di = !1;
      }
      if (
        ((In = 0),
        (ke = _e = de = null),
        (br = !1),
        (vl = 0),
        (Eu.current = null),
        n === null || n.return === null)
      ) {
        ((Ee = 1), (wl = t), (Se = null));
        break;
      }
      e: {
        var i = e,
          o = n.return,
          a = n,
          u = t;
        if (
          ((t = Le),
          (a.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var s = u,
            f = a,
            d = f.tag;
          if (!(f.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var p = f.alternate;
            p
              ? ((f.updateQueue = p.updateQueue),
                (f.memoizedState = p.memoizedState),
                (f.lanes = p.lanes))
              : ((f.updateQueue = null), (f.memoizedState = null));
          }
          var S = Qs(o);
          if (S !== null) {
            ((S.flags &= -257), Ks(S, o, a, i, t), S.mode & 1 && Vs(i, s, t), (t = S), (u = s));
            var x = t.updateQueue;
            if (x === null) {
              var E = new Set();
              (E.add(u), (t.updateQueue = E));
            } else x.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              (Vs(i, s, t), Ru());
              break e;
            }
            u = Error(R(426));
          }
        } else if (se && a.mode & 1) {
          var T = Qs(o);
          if (T !== null) {
            (!(T.flags & 65536) && (T.flags |= 256), Ks(T, o, a, i, t), uu(yr(u, a)));
            break e;
          }
        }
        ((i = u = yr(u, a)), Ee !== 4 && (Ee = 2), tl === null ? (tl = [i]) : tl.push(i), (i = o));
        do {
          switch (i.tag) {
            case 3:
              ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
              var m = _d(i, u, t);
              Us(i, m);
              break e;
            case 1:
              a = u;
              var c = i.type,
                v = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (v !== null &&
                    typeof v.componentDidCatch == "function" &&
                    (fn === null || !fn.has(v))))
              ) {
                ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
                var k = Ed(i, a, t);
                Us(i, k);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Hd(n);
    } catch (L) {
      ((t = L), Se === n && n !== null && (Se = n = n.return));
      continue;
    }
    break;
  } while (!0);
}
function Bd() {
  var e = zi.current;
  return ((zi.current = Mi), e === null ? Mi : e);
}
function Ru() {
  ((Ee === 0 || Ee === 3 || Ee === 2) && (Ee = 4),
    Ce === null || (!(Fn & 268435455) && !(bi & 268435455)) || tn(Ce, Le));
}
function Fi(e, t) {
  var n = G;
  G |= 2;
  var r = Bd();
  (Ce !== e || Le !== t) && ((jt = null), Tn(e, t));
  do
    try {
      Vm();
      break;
    } catch (l) {
      Ad(e, l);
    }
  while (!0);
  if ((cu(), (G = n), (zi.current = r), Se !== null)) throw Error(R(261));
  return ((Ce = null), (Le = 0), Ee);
}
function Vm() {
  for (; Se !== null; ) $d(Se);
}
function Qm() {
  for (; Se !== null && !vh(); ) $d(Se);
}
function $d(e) {
  var t = Vd(e.alternate, e, Je);
  ((e.memoizedProps = e.pendingProps), t === null ? Hd(e) : (Se = t), (Eu.current = null));
}
function Hd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Um(n, t)), n !== null)) {
        ((n.flags &= 32767), (Se = n));
        return;
      }
      if (e !== null) ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((Ee = 6), (Se = null));
        return;
      }
    } else if (((n = Fm(n, t, Je)), n !== null)) {
      Se = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Se = t;
      return;
    }
    Se = t = e;
  } while (t !== null);
  Ee === 0 && (Ee = 5);
}
function kn(e, t, n) {
  var r = ee,
    l = at.transition;
  try {
    ((at.transition = null), (ee = 1), Km(e, t, n, r));
  } finally {
    ((at.transition = l), (ee = r));
  }
  return null;
}
function Km(e, t, n, r) {
  do dr();
  while (rn !== null);
  if (G & 6) throw Error(R(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(R(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var i = n.lanes | n.childLanes;
  if (
    (Ph(e, i),
    e === Ce && ((Se = Ce = null), (Le = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Zl ||
      ((Zl = !0),
      Qd(yi, function () {
        return (dr(), null);
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    ((i = at.transition), (at.transition = null));
    var o = ee;
    ee = 1;
    var a = G;
    ((G |= 4),
      (Eu.current = null),
      Bm(e, n),
      Id(n, e),
      dm(fa),
      (Si = !!ca),
      (fa = ca = null),
      (e.current = n),
      $m(n),
      gh(),
      (G = a),
      (ee = o),
      (at.transition = i));
  } else e.current = n;
  if (
    (Zl && ((Zl = !1), (rn = e), (Ii = l)),
    (i = e.pendingLanes),
    i === 0 && (fn = null),
    Sh(n.stateNode),
    Xe(e, ge()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      ((l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest }));
  if (Oi) throw ((Oi = !1), (e = Ta), (Ta = null), e);
  return (
    Ii & 1 && e.tag !== 0 && dr(),
    (i = e.pendingLanes),
    i & 1 ? (e === Da ? nl++ : ((nl = 0), (Da = e))) : (nl = 0),
    yn(),
    null
  );
}
function dr() {
  if (rn !== null) {
    var e = _f(Ii),
      t = at.transition,
      n = ee;
    try {
      if (((at.transition = null), (ee = 16 > e ? 16 : e), rn === null)) var r = !1;
      else {
        if (((e = rn), (rn = null), (Ii = 0), G & 6)) throw Error(R(331));
        var l = G;
        for (G |= 4, O = e.current; O !== null; ) {
          var i = O,
            o = i.child;
          if (O.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var u = 0; u < a.length; u++) {
                var s = a[u];
                for (O = s; O !== null; ) {
                  var f = O;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      el(8, f, i);
                  }
                  var d = f.child;
                  if (d !== null) ((d.return = f), (O = d));
                  else
                    for (; O !== null; ) {
                      f = O;
                      var p = f.sibling,
                        S = f.return;
                      if ((Md(f), f === s)) {
                        O = null;
                        break;
                      }
                      if (p !== null) {
                        ((p.return = S), (O = p));
                        break;
                      }
                      O = S;
                    }
                }
              }
              var x = i.alternate;
              if (x !== null) {
                var E = x.child;
                if (E !== null) {
                  x.child = null;
                  do {
                    var T = E.sibling;
                    ((E.sibling = null), (E = T));
                  } while (E !== null);
                }
              }
              O = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) ((o.return = i), (O = o));
          else
            e: for (; O !== null; ) {
              if (((i = O), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    el(9, i, i.return);
                }
              var m = i.sibling;
              if (m !== null) {
                ((m.return = i.return), (O = m));
                break e;
              }
              O = i.return;
            }
        }
        var c = e.current;
        for (O = c; O !== null; ) {
          o = O;
          var v = o.child;
          if (o.subtreeFlags & 2064 && v !== null) ((v.return = o), (O = v));
          else
            e: for (o = c; O !== null; ) {
              if (((a = O), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      qi(9, a);
                  }
                } catch (L) {
                  ve(a, a.return, L);
                }
              if (a === o) {
                O = null;
                break e;
              }
              var k = a.sibling;
              if (k !== null) {
                ((k.return = a.return), (O = k));
                break e;
              }
              O = a.return;
            }
        }
        if (((G = l), yn(), Pt && typeof Pt.onPostCommitFiberRoot == "function"))
          try {
            Pt.onPostCommitFiberRoot(Vi, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ((ee = n), (at.transition = t));
    }
  }
  return !1;
}
function ic(e, t, n) {
  ((t = yr(n, t)),
    (t = _d(e, t, 1)),
    (e = cn(e, t, 1)),
    (t = Be()),
    e !== null && (El(e, 1, t), Xe(e, t)));
}
function ve(e, t, n) {
  if (e.tag === 3) ic(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        ic(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" && (fn === null || !fn.has(r)))
        ) {
          ((e = yr(n, e)),
            (e = Ed(t, e, 1)),
            (t = cn(t, e, 1)),
            (e = Be()),
            t !== null && (El(t, 1, e), Xe(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function Ym(e, t, n) {
  var r = e.pingCache;
  (r !== null && r.delete(t),
    (t = Be()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Ce === e &&
      (Le & n) === n &&
      (Ee === 4 || (Ee === 3 && (Le & 130023424) === Le && 500 > ge() - Cu) ? Tn(e, 0) : (ku |= n)),
    Xe(e, t));
}
function Wd(e, t) {
  t === 0 && (e.mode & 1 ? ((t = $l), ($l <<= 1), !($l & 130023424) && ($l = 4194304)) : (t = 1));
  var n = Be();
  ((e = At(e, t)), e !== null && (El(e, t, n), Xe(e, n)));
}
function Xm(e) {
  var t = e.memoizedState,
    n = 0;
  (t !== null && (n = t.retryLane), Wd(e, n));
}
function Gm(e, t) {
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
      throw Error(R(314));
  }
  (r !== null && r.delete(t), Wd(e, n));
}
var Vd;
Vd = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ke.current) Qe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ((Qe = !1), Im(e, t, n));
      Qe = !!(e.flags & 131072);
    }
  else ((Qe = !1), se && t.flags & 1048576 && Xf(t, Ni, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      (ci(e, t), (e = t.pendingProps));
      var l = hr(t, Oe.current);
      (fr(t, n), (l = yu(null, t, r, e, l, n)));
      var i = wu();
      return (
        (t.flags |= 1),
        typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ye(r) ? ((i = !0), Ci(t)) : (i = !1),
            (t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null),
            pu(t),
            (l.updater = Zi),
            (t.stateNode = l),
            (l._reactInternals = t),
            Sa(t, r, e, n),
            (t = Ea(null, t, r, !0, i, n)))
          : ((t.tag = 0), se && i && ou(t), Ae(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (ci(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Zm(r)),
          (e = pt(r, e)),
          l)
        ) {
          case 0:
            t = _a(null, t, r, e, n);
            break e;
          case 1:
            t = Gs(null, t, r, e, n);
            break e;
          case 11:
            t = Ys(null, t, r, e, n);
            break e;
          case 14:
            t = Xs(null, t, r, pt(r.type, e), n);
            break e;
        }
        throw Error(R(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : pt(r, l)),
        _a(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : pt(r, l)),
        Gs(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Nd(t), e === null)) throw Error(R(387));
        ((r = t.pendingProps), (i = t.memoizedState), (l = i.element), ed(e, t), ji(t, r, null, n));
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
            ((l = yr(Error(R(423)), t)), (t = Js(e, t, r, n, l)));
            break e;
          } else if (r !== l) {
            ((l = yr(Error(R(424)), t)), (t = Js(e, t, r, n, l)));
            break e;
          } else
            for (
              qe = sn(t.stateNode.containerInfo.firstChild),
                be = t,
                se = !0,
                vt = null,
                n = qf(t, null, r, n),
                t.child = n;
              n;

            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
        else {
          if ((mr(), r === l)) {
            t = Bt(e, t, n);
            break e;
          }
          Ae(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        td(t),
        e === null && ga(t),
        (r = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        da(r, l) ? (o = null) : i !== null && da(r, i) && (t.flags |= 32),
        Pd(e, t),
        Ae(e, t, o, n),
        t.child
      );
    case 6:
      return (e === null && ga(t), null);
    case 13:
      return Rd(e, t, n);
    case 4:
      return (
        hu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = vr(t, null, r, n)) : Ae(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : pt(r, l)),
        Ys(e, t, r, l, n)
      );
    case 7:
      return (Ae(e, t, t.pendingProps, n), t.child);
    case 8:
      return (Ae(e, t, t.pendingProps.children, n), t.child);
    case 12:
      return (Ae(e, t, t.pendingProps.children, n), t.child);
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (o = l.value),
          ie(Ri, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (wt(i.value, o)) {
            if (i.children === l.children && !Ke.current) {
              t = Bt(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                o = i.child;
                for (var u = a.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (i.tag === 1) {
                      ((u = Ot(-1, n & -n)), (u.tag = 2));
                      var s = i.updateQueue;
                      if (s !== null) {
                        s = s.shared;
                        var f = s.pending;
                        (f === null ? (u.next = u) : ((u.next = f.next), (f.next = u)),
                          (s.pending = u));
                      }
                    }
                    ((i.lanes |= n),
                      (u = i.alternate),
                      u !== null && (u.lanes |= n),
                      ya(i.return, n, t),
                      (a.lanes |= n));
                    break;
                  }
                  u = u.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(R(341));
                ((o.lanes |= n),
                  (a = o.alternate),
                  a !== null && (a.lanes |= n),
                  ya(o, n, t),
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
        (Ae(e, t, l.children, n), (t = t.child));
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        fr(t, n),
        (l = ut(l)),
        (r = r(l)),
        (t.flags |= 1),
        Ae(e, t, r, n),
        t.child
      );
    case 14:
      return ((r = t.type), (l = pt(r, t.pendingProps)), (l = pt(r.type, l)), Xs(e, t, r, l, n));
    case 15:
      return kd(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : pt(r, l)),
        ci(e, t),
        (t.tag = 1),
        Ye(r) ? ((e = !0), Ci(t)) : (e = !1),
        fr(t, n),
        xd(t, r, l),
        Sa(t, r, l, n),
        Ea(null, t, r, !0, e, n)
      );
    case 19:
      return Ld(e, t, n);
    case 22:
      return Cd(e, t, n);
  }
  throw Error(R(156, t.tag));
};
function Qd(e, t) {
  return yf(e, t);
}
function Jm(e, t, n, r) {
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
function ot(e, t, n, r) {
  return new Jm(e, t, n, r);
}
function Lu(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function Zm(e) {
  if (typeof e == "function") return Lu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Xa)) return 11;
    if (e === Ga) return 14;
  }
  return 2;
}
function pn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = ot(e.tag, t, e.key, e.mode)),
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
function pi(e, t, n, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == "function")) Lu(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Jn:
        return Dn(n.children, l, i, t);
      case Ya:
        ((o = 8), (l |= 8));
        break;
      case Vo:
        return ((e = ot(12, n, t, l | 2)), (e.elementType = Vo), (e.lanes = i), e);
      case Qo:
        return ((e = ot(13, n, t, l)), (e.elementType = Qo), (e.lanes = i), e);
      case Ko:
        return ((e = ot(19, n, t, l)), (e.elementType = Ko), (e.lanes = i), e);
      case ef:
        return eo(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case qc:
              o = 10;
              break e;
            case bc:
              o = 9;
              break e;
            case Xa:
              o = 11;
              break e;
            case Ga:
              o = 14;
              break e;
            case qt:
              ((o = 16), (r = null));
              break e;
          }
        throw Error(R(130, e == null ? e : typeof e, ""));
    }
  return ((t = ot(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t);
}
function Dn(e, t, n, r) {
  return ((e = ot(7, e, r, t)), (e.lanes = n), e);
}
function eo(e, t, n, r) {
  return (
    (e = ot(22, e, r, t)),
    (e.elementType = ef),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Fo(e, t, n) {
  return ((e = ot(6, e, null, t)), (e.lanes = n), e);
}
function Uo(e, t, n) {
  return (
    (t = ot(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function qm(e, t, n, r, l) {
  ((this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = yo(0)),
    (this.expirationTimes = yo(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = yo(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null));
}
function ju(e, t, n, r, l, i, o, a, u) {
  return (
    (e = new qm(e, t, n, a, u)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = ot(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    pu(i),
    e
  );
}
function bm(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Gn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Kd(e) {
  if (!e) return mn;
  e = e._reactInternals;
  e: {
    if ($n(e) !== e || e.tag !== 1) throw Error(R(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ye(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(R(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ye(n)) return Kf(e, n, t);
  }
  return t;
}
function Yd(e, t, n, r, l, i, o, a, u) {
  return (
    (e = ju(n, r, !0, e, l, i, o, a, u)),
    (e.context = Kd(null)),
    (n = e.current),
    (r = Be()),
    (l = dn(n)),
    (i = Ot(r, l)),
    (i.callback = t ?? null),
    cn(n, i, l),
    (e.current.lanes = l),
    El(e, l, r),
    Xe(e, r),
    e
  );
}
function to(e, t, n, r) {
  var l = t.current,
    i = Be(),
    o = dn(l);
  return (
    (n = Kd(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ot(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = cn(l, t, o)),
    e !== null && (yt(e, l, o, i), ai(e, l, o)),
    o
  );
}
function Ui(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function oc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Tu(e, t) {
  (oc(e, t), (e = e.alternate) && oc(e, t));
}
function ev() {
  return null;
}
var Xd =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Du(e) {
  this._internalRoot = e;
}
no.prototype.render = Du.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(R(409));
  to(e, t, null, null);
};
no.prototype.unmount = Du.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    (Un(function () {
      to(null, e, null, null);
    }),
      (t[Ut] = null));
  }
};
function no(e) {
  this._internalRoot = e;
}
no.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Cf();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < en.length && t !== 0 && t < en[n].priority; n++);
    (en.splice(n, 0, e), n === 0 && Nf(e));
  }
};
function Mu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ro(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function ac() {}
function tv(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var s = Ui(o);
        i.call(s);
      };
    }
    var o = Yd(t, r, e, 0, null, !1, !1, "", ac);
    return (
      (e._reactRootContainer = o),
      (e[Ut] = o.current),
      fl(e.nodeType === 8 ? e.parentNode : e),
      Un(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var s = Ui(u);
      a.call(s);
    };
  }
  var u = ju(e, 0, !1, null, null, !1, !1, "", ac);
  return (
    (e._reactRootContainer = u),
    (e[Ut] = u.current),
    fl(e.nodeType === 8 ? e.parentNode : e),
    Un(function () {
      to(t, u, n, r);
    }),
    u
  );
}
function lo(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var a = l;
      l = function () {
        var u = Ui(o);
        a.call(u);
      };
    }
    to(t, o, e, l);
  } else o = tv(n, t, e, l, r);
  return Ui(o);
}
Ef = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Qr(t.pendingLanes);
        n !== 0 && (qa(t, n | 1), Xe(t, ge()), !(G & 6) && ((wr = ge() + 500), yn()));
      }
      break;
    case 13:
      (Un(function () {
        var r = At(e, 1);
        if (r !== null) {
          var l = Be();
          yt(r, e, 1, l);
        }
      }),
        Tu(e, 1));
  }
};
ba = function (e) {
  if (e.tag === 13) {
    var t = At(e, 134217728);
    if (t !== null) {
      var n = Be();
      yt(t, e, 134217728, n);
    }
    Tu(e, 134217728);
  }
};
kf = function (e) {
  if (e.tag === 13) {
    var t = dn(e),
      n = At(e, t);
    if (n !== null) {
      var r = Be();
      yt(n, e, t, r);
    }
    Tu(e, t);
  }
};
Cf = function () {
  return ee;
};
Pf = function (e, t) {
  var n = ee;
  try {
    return ((ee = e), t());
  } finally {
    ee = n;
  }
};
na = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Go(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Xi(r);
            if (!l) throw Error(R(90));
            (nf(r), Go(r, l));
          }
        }
      }
      break;
    case "textarea":
      lf(e, n);
      break;
    case "select":
      ((t = n.value), t != null && ar(e, !!n.multiple, t, !1));
  }
};
df = Pu;
pf = Un;
var nv = { usingClientEntryPoint: !1, Events: [Cl, er, Xi, cf, ff, Pu] },
  Ur = {
    findFiberByHostInstance: Nn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  rv = {
    bundleType: Ur.bundleType,
    version: Ur.version,
    rendererPackageName: Ur.rendererPackageName,
    rendererConfig: Ur.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ht.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return ((e = vf(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: Ur.findFiberByHostInstance || ev,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ql = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ql.isDisabled && ql.supportsFiber)
    try {
      ((Vi = ql.inject(rv)), (Pt = ql));
    } catch {}
}
tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = nv;
tt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Mu(t)) throw Error(R(200));
  return bm(e, t, null, n);
};
tt.createRoot = function (e, t) {
  if (!Mu(e)) throw Error(R(299));
  var n = !1,
    r = "",
    l = Xd;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = ju(e, 1, !1, null, null, n, !1, r, l)),
    (e[Ut] = t.current),
    fl(e.nodeType === 8 ? e.parentNode : e),
    new Du(t)
  );
};
tt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(R(188))
      : ((e = Object.keys(e).join(",")), Error(R(268, e)));
  return ((e = vf(t)), (e = e === null ? null : e.stateNode), e);
};
tt.flushSync = function (e) {
  return Un(e);
};
tt.hydrate = function (e, t, n) {
  if (!ro(t)) throw Error(R(200));
  return lo(null, e, t, !0, n);
};
tt.hydrateRoot = function (e, t, n) {
  if (!Mu(e)) throw Error(R(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = "",
    o = Xd;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = Yd(t, null, e, 1, n ?? null, l, !1, i, o)),
    (e[Ut] = t.current),
    fl(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      ((n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l));
  return new no(t);
};
tt.render = function (e, t, n) {
  if (!ro(t)) throw Error(R(200));
  return lo(null, e, t, !1, n);
};
tt.unmountComponentAtNode = function (e) {
  if (!ro(e)) throw Error(R(40));
  return e._reactRootContainer
    ? (Un(function () {
        lo(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[Ut] = null));
        });
      }),
      !0)
    : !1;
};
tt.unstable_batchedUpdates = Pu;
tt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!ro(n)) throw Error(R(200));
  if (e == null || e._reactInternals === void 0) throw Error(R(38));
  return lo(e, t, n, !1, r);
};
tt.version = "18.3.1-next-f1338f8080-20240426";
function Gd() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gd);
    } catch (e) {
      console.error(e);
    }
}
(Gd(), (Xc.exports = tt));
var zu = Xc.exports;
const lv = Oc(zu),
  iv = zc({ __proto__: null, default: lv }, [zu]);
var Jd,
  uc = zu;
((Jd = uc.createRoot), uc.hydrateRoot);
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ue() {
  return (
    (ue = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ue.apply(this, arguments)
  );
}
var we;
(function (e) {
  ((e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE"));
})(we || (we = {}));
const sc = "popstate";
function ov(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let { pathname: i, search: o, hash: a } = r.location;
    return Sl(
      "",
      { pathname: i, search: o, hash: a },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || "default",
    );
  }
  function n(r, l) {
    return typeof l == "string" ? l : An(l);
  }
  return uv(t, n, null, e);
}
function K(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Sr(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function av() {
  return Math.random().toString(36).substr(2, 8);
}
function cc(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Sl(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    ue(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? wn(t) : t,
      { state: n, key: (t && t.key) || r || av() },
    )
  );
}
function An(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function wn(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    (r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))), e && (t.pathname = e));
  }
  return t;
}
function uv(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: i = !1 } = r,
    o = l.history,
    a = we.Pop,
    u = null,
    s = f();
  s == null && ((s = 0), o.replaceState(ue({}, o.state, { idx: s }), ""));
  function f() {
    return (o.state || { idx: null }).idx;
  }
  function d() {
    a = we.Pop;
    let T = f(),
      m = T == null ? null : T - s;
    ((s = T), u && u({ action: a, location: E.location, delta: m }));
  }
  function p(T, m) {
    a = we.Push;
    let c = Sl(E.location, T, m);
    s = f() + 1;
    let v = cc(c, s),
      k = E.createHref(c);
    try {
      o.pushState(v, "", k);
    } catch (L) {
      if (L instanceof DOMException && L.name === "DataCloneError") throw L;
      l.location.assign(k);
    }
    i && u && u({ action: a, location: E.location, delta: 1 });
  }
  function S(T, m) {
    a = we.Replace;
    let c = Sl(E.location, T, m);
    s = f();
    let v = cc(c, s),
      k = E.createHref(c);
    (o.replaceState(v, "", k), i && u && u({ action: a, location: E.location, delta: 0 }));
  }
  function x(T) {
    let m = l.location.origin !== "null" ? l.location.origin : l.location.href,
      c = typeof T == "string" ? T : An(T);
    return (
      (c = c.replace(/ $/, "%20")),
      K(m, "No window.location.(origin|href) available to create URL for href: " + c),
      new URL(c, m)
    );
  }
  let E = {
    get action() {
      return a;
    },
    get location() {
      return e(l, o);
    },
    listen(T) {
      if (u) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(sc, d),
        (u = T),
        () => {
          (l.removeEventListener(sc, d), (u = null));
        }
      );
    },
    createHref(T) {
      return t(l, T);
    },
    createURL: x,
    encodeLocation(T) {
      let m = x(T);
      return { pathname: m.pathname, search: m.search, hash: m.hash };
    },
    push: p,
    replace: S,
    go(T) {
      return o.go(T);
    },
  };
  return E;
}
var b;
(function (e) {
  ((e.data = "data"), (e.deferred = "deferred"), (e.redirect = "redirect"), (e.error = "error"));
})(b || (b = {}));
const sv = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
function cv(e) {
  return e.index === !0;
}
function Ai(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((l, i) => {
      let o = [...n, String(i)],
        a = typeof l.id == "string" ? l.id : o.join("-");
      if (
        (K(l.index !== !0 || !l.children, "Cannot specify children on an index route"),
        K(
          !r[a],
          'Found a route id collision on id "' +
            a +
            `".  Route id's must be globally unique within Data Router usages`,
        ),
        cv(l))
      ) {
        let u = ue({}, l, t(l), { id: a });
        return ((r[a] = u), u);
      } else {
        let u = ue({}, l, t(l), { id: a, children: void 0 });
        return ((r[a] = u), l.children && (u.children = Ai(l.children, t, o, r)), u);
      }
    })
  );
}
function Cn(e, t, n) {
  return (n === void 0 && (n = "/"), hi(e, t, n, !1));
}
function hi(e, t, n, r) {
  let l = typeof t == "string" ? wn(t) : t,
    i = $t(l.pathname || "/", n);
  if (i == null) return null;
  let o = Zd(e);
  dv(o);
  let a = null;
  for (let u = 0; a == null && u < o.length; ++u) {
    let s = Ev(i);
    a = xv(o[u], s, r);
  }
  return a;
}
function fv(e, t) {
  let { route: n, pathname: r, params: l } = e;
  return { id: n.id, pathname: r, params: l, data: t[n.id], handle: n.handle };
}
function Zd(e, t, n, r) {
  (t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = ""));
  let l = (i, o, a) => {
    let u = {
      relativePath: a === void 0 ? i.path || "" : a,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: o,
      route: i,
    };
    u.relativePath.startsWith("/") &&
      (K(
        u.relativePath.startsWith(r),
        'Absolute route path "' +
          u.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes.",
      ),
      (u.relativePath = u.relativePath.slice(r.length)));
    let s = It([r, u.relativePath]),
      f = n.concat(u);
    (i.children &&
      i.children.length > 0 &&
      (K(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + s + '".'),
      ),
      Zd(i.children, t, f, s)),
      !(i.path == null && !i.index) && t.push({ path: s, score: wv(s, i.index), routesMeta: f }));
  };
  return (
    e.forEach((i, o) => {
      var a;
      if (i.path === "" || !((a = i.path) != null && a.includes("?"))) l(i, o);
      else for (let u of qd(i.path)) l(i, o, u);
    }),
    t
  );
}
function qd(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return l ? [i, ""] : [i];
  let o = qd(r.join("/")),
    a = [];
  return (
    a.push(...o.map(u => (u === "" ? i : [i, u].join("/")))),
    l && a.push(...o),
    a.map(u => (e.startsWith("/") && u === "" ? "/" : u))
  );
}
function dv(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Sv(
          t.routesMeta.map(r => r.childrenIndex),
          n.routesMeta.map(r => r.childrenIndex),
        ),
  );
}
const pv = /^:[\w-]+$/,
  hv = 3,
  mv = 2,
  vv = 1,
  gv = 10,
  yv = -2,
  fc = e => e === "*";
function wv(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(fc) && (r += yv),
    t && (r += mv),
    n.filter(l => !fc(l)).reduce((l, i) => l + (pv.test(i) ? hv : i === "" ? vv : gv), r)
  );
}
function Sv(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function xv(e, t, n) {
  n === void 0 && (n = !1);
  let { routesMeta: r } = e,
    l = {},
    i = "/",
    o = [];
  for (let a = 0; a < r.length; ++a) {
    let u = r[a],
      s = a === r.length - 1,
      f = i === "/" ? t : t.slice(i.length) || "/",
      d = Bi({ path: u.relativePath, caseSensitive: u.caseSensitive, end: s }, f),
      p = u.route;
    if (
      (!d &&
        s &&
        n &&
        !r[r.length - 1].route.index &&
        (d = Bi({ path: u.relativePath, caseSensitive: u.caseSensitive, end: !1 }, f)),
      !d)
    )
      return null;
    (Object.assign(l, d.params),
      o.push({
        params: l,
        pathname: It([i, d.pathname]),
        pathnameBase: Pv(It([i, d.pathnameBase])),
        route: p,
      }),
      d.pathnameBase !== "/" && (i = It([i, d.pathnameBase])));
  }
  return o;
}
function Bi(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = _v(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let i = l[0],
    o = i.replace(/(.)\/+$/, "$1"),
    a = l.slice(1);
  return {
    params: r.reduce((s, f, d) => {
      let { paramName: p, isOptional: S } = f;
      if (p === "*") {
        let E = a[d] || "";
        o = i.slice(0, i.length - E.length).replace(/(.)\/+$/, "$1");
      }
      const x = a[d];
      return (S && !x ? (s[p] = void 0) : (s[p] = (x || "").replace(/%2F/g, "/")), s);
    }, {}),
    pathname: i,
    pathnameBase: o,
    pattern: e,
  };
}
function _v(e, t, n) {
  (t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Sr(
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
          (o, a, u) => (
            r.push({ paramName: a, isOptional: u != null }),
            u ? "/?([^\\/]+)?" : "/([^\\/]+)"
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
function Ev(e) {
  try {
    return e
      .split("/")
      .map(t => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      Sr(
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
function $t(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function kv(e, t) {
  t === void 0 && (t = "/");
  let { pathname: n, search: r = "", hash: l = "" } = typeof e == "string" ? wn(e) : e;
  return { pathname: n ? (n.startsWith("/") ? n : Cv(n, t)) : t, search: Nv(r), hash: Rv(l) };
}
function Cv(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach(l => {
      l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Ao(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function bd(e) {
  return e.filter((t, n) => n === 0 || (t.route.path && t.route.path.length > 0));
}
function io(e, t) {
  let n = bd(e);
  return t
    ? n.map((r, l) => (l === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map(r => r.pathnameBase);
}
function oo(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == "string"
    ? (l = wn(e))
    : ((l = ue({}, e)),
      K(!l.pathname || !l.pathname.includes("?"), Ao("?", "pathname", "search", l)),
      K(!l.pathname || !l.pathname.includes("#"), Ao("#", "pathname", "hash", l)),
      K(!l.search || !l.search.includes("#"), Ao("#", "search", "hash", l)));
  let i = e === "" || l.pathname === "",
    o = i ? "/" : l.pathname,
    a;
  if (o == null) a = n;
  else {
    let d = t.length - 1;
    if (!r && o.startsWith("..")) {
      let p = o.split("/");
      for (; p[0] === ".."; ) (p.shift(), (d -= 1));
      l.pathname = p.join("/");
    }
    a = d >= 0 ? t[d] : "/";
  }
  let u = kv(l, a),
    s = o && o !== "/" && o.endsWith("/"),
    f = (i || o === ".") && n.endsWith("/");
  return (!u.pathname.endsWith("/") && (s || f) && (u.pathname += "/"), u);
}
const It = e => e.join("/").replace(/\/\/+/g, "/"),
  Pv = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Nv = e => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Rv = e => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class $i {
  constructor(t, n, r, l) {
    (l === void 0 && (l = !1),
      (this.status = t),
      (this.statusText = n || ""),
      (this.internal = l),
      r instanceof Error ? ((this.data = r.toString()), (this.error = r)) : (this.data = r));
  }
}
function xl(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const ep = ["post", "put", "patch", "delete"],
  Lv = new Set(ep),
  jv = ["get", ...ep],
  Tv = new Set(jv),
  Dv = new Set([301, 302, 303, 307, 308]),
  Mv = new Set([307, 308]),
  Bo = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  zv = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Ar = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  Ou = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Ov = e => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  tp = "remix-router-transitions";
function Iv(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0,
    n = typeof t < "u" && typeof t.document < "u" && typeof t.document.createElement < "u",
    r = !n;
  K(e.routes.length > 0, "You must provide a non-empty routes array to createRouter");
  let l;
  if (e.mapRouteProperties) l = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let h = e.detectErrorBoundary;
    l = y => ({ hasErrorBoundary: h(y) });
  } else l = Ov;
  let i = {},
    o = Ai(e.routes, l, void 0, i),
    a,
    u = e.basename || "/",
    s = e.dataStrategy || Bv,
    f = e.patchRoutesOnNavigation,
    d = ue(
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
    p = null,
    S = new Set(),
    x = null,
    E = null,
    T = null,
    m = e.hydrationData != null,
    c = Cn(o, e.history.location, u),
    v = !1,
    k = null;
  if (c == null && !f) {
    let h = We(404, { pathname: e.history.location.pathname }),
      { matches: y, route: _ } = _c(o);
    ((c = y), (k = { [_.id]: h }));
  }
  c && !e.hydrationData && Dl(c, o, e.history.location.pathname).active && (c = null);
  let L;
  if (c)
    if (c.some(h => h.route.lazy)) L = !1;
    else if (!c.some(h => h.route.loader)) L = !0;
    else if (d.v7_partialHydration) {
      let h = e.hydrationData ? e.hydrationData.loaderData : null,
        y = e.hydrationData ? e.hydrationData.errors : null;
      if (y) {
        let _ = c.findIndex(N => y[N.route.id] !== void 0);
        L = c.slice(0, _ + 1).every(N => !Ia(N.route, h, y));
      } else L = c.every(_ => !Ia(_.route, h, y));
    } else L = e.hydrationData != null;
  else if (((L = !1), (c = []), d.v7_partialHydration)) {
    let h = Dl(null, o, e.history.location.pathname);
    h.active && h.matches && ((v = !0), (c = h.matches));
  }
  let z,
    g = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: c,
      initialized: L,
      navigation: Bo,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || k,
      fetchers: new Map(),
      blockers: new Map(),
    },
    P = we.Pop,
    $ = !1,
    D,
    q = !1,
    re = new Map(),
    xe = null,
    Pe = !1,
    ct = !1,
    Qt = [],
    Kt = new Set(),
    j = new Map(),
    H = 0,
    V = -1,
    te = new Map(),
    ne = new Set(),
    ft = new Map(),
    Ge = new Map(),
    Ie = new Set(),
    Fe = new Map(),
    rt = new Map(),
    Ll;
  function mp() {
    if (
      ((p = e.history.listen(h => {
        let { action: y, location: _, delta: N } = h;
        if (Ll) {
          (Ll(), (Ll = void 0));
          return;
        }
        Sr(
          rt.size === 0 || N != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.",
        );
        let M = Ju({ currentLocation: g.location, nextLocation: _, historyAction: y });
        if (M && N != null) {
          let B = new Promise(W => {
            Ll = W;
          });
          (e.history.go(N * -1),
            Tl(M, {
              state: "blocked",
              location: _,
              proceed() {
                (Tl(M, { state: "proceeding", proceed: void 0, reset: void 0, location: _ }),
                  B.then(() => e.history.go(N)));
              },
              reset() {
                let W = new Map(g.blockers);
                (W.set(M, Ar), Ue({ blockers: W }));
              },
            }));
          return;
        }
        return Sn(y, _);
      })),
      n)
    ) {
      eg(t, re);
      let h = () => tg(t, re);
      (t.addEventListener("pagehide", h), (xe = () => t.removeEventListener("pagehide", h)));
    }
    return (g.initialized || Sn(we.Pop, g.location, { initialHydration: !0 }), z);
  }
  function vp() {
    (p && p(),
      xe && xe(),
      S.clear(),
      D && D.abort(),
      g.fetchers.forEach((h, y) => jl(y)),
      g.blockers.forEach((h, y) => Gu(y)));
  }
  function gp(h) {
    return (S.add(h), () => S.delete(h));
  }
  function Ue(h, y) {
    (y === void 0 && (y = {}), (g = ue({}, g, h)));
    let _ = [],
      N = [];
    (d.v7_fetcherPersist &&
      g.fetchers.forEach((M, B) => {
        M.state === "idle" && (Ie.has(B) ? N.push(B) : _.push(B));
      }),
      Ie.forEach(M => {
        !g.fetchers.has(M) && !j.has(M) && N.push(M);
      }),
      [...S].forEach(M =>
        M(g, {
          deletedFetchers: N,
          viewTransitionOpts: y.viewTransitionOpts,
          flushSync: y.flushSync === !0,
        }),
      ),
      d.v7_fetcherPersist
        ? (_.forEach(M => g.fetchers.delete(M)), N.forEach(M => jl(M)))
        : N.forEach(M => Ie.delete(M)));
  }
  function Wn(h, y, _) {
    var N, M;
    let { flushSync: B } = _ === void 0 ? {} : _,
      W =
        g.actionData != null &&
        g.navigation.formMethod != null &&
        mt(g.navigation.formMethod) &&
        g.navigation.state === "loading" &&
        ((N = h.state) == null ? void 0 : N._isRedirect) !== !0,
      F;
    y.actionData
      ? Object.keys(y.actionData).length > 0
        ? (F = y.actionData)
        : (F = null)
      : W
        ? (F = g.actionData)
        : (F = null);
    let U = y.loaderData ? Sc(g.loaderData, y.loaderData, y.matches || [], y.errors) : g.loaderData,
      I = g.blockers;
    I.size > 0 && ((I = new Map(I)), I.forEach((X, Ne) => I.set(Ne, Ar)));
    let A =
      $ === !0 ||
      (g.navigation.formMethod != null &&
        mt(g.navigation.formMethod) &&
        ((M = h.state) == null ? void 0 : M._isRedirect) !== !0);
    (a && ((o = a), (a = void 0)),
      Pe ||
        P === we.Pop ||
        (P === we.Push
          ? e.history.push(h, h.state)
          : P === we.Replace && e.history.replace(h, h.state)));
    let Q;
    if (P === we.Pop) {
      let X = re.get(g.location.pathname);
      X && X.has(h.pathname)
        ? (Q = { currentLocation: g.location, nextLocation: h })
        : re.has(h.pathname) && (Q = { currentLocation: h, nextLocation: g.location });
    } else if (q) {
      let X = re.get(g.location.pathname);
      (X ? X.add(h.pathname) : ((X = new Set([h.pathname])), re.set(g.location.pathname, X)),
        (Q = { currentLocation: g.location, nextLocation: h }));
    }
    (Ue(
      ue({}, y, {
        actionData: F,
        loaderData: U,
        historyAction: P,
        location: h,
        initialized: !0,
        navigation: Bo,
        revalidation: "idle",
        restoreScrollPosition: qu(h, y.matches || g.matches),
        preventScrollReset: A,
        blockers: I,
      }),
      { viewTransitionOpts: Q, flushSync: B === !0 },
    ),
      (P = we.Pop),
      ($ = !1),
      (q = !1),
      (Pe = !1),
      (ct = !1),
      (Qt = []));
  }
  async function Hu(h, y) {
    if (typeof h == "number") {
      e.history.go(h);
      return;
    }
    let _ = Oa(
        g.location,
        g.matches,
        u,
        d.v7_prependBasename,
        h,
        d.v7_relativeSplatPath,
        y == null ? void 0 : y.fromRouteId,
        y == null ? void 0 : y.relative,
      ),
      { path: N, submission: M, error: B } = dc(d.v7_normalizeFormMethod, !1, _, y),
      W = g.location,
      F = Sl(g.location, N, y && y.state);
    F = ue({}, F, e.history.encodeLocation(F));
    let U = y && y.replace != null ? y.replace : void 0,
      I = we.Push;
    U === !0
      ? (I = we.Replace)
      : U === !1 ||
        (M != null &&
          mt(M.formMethod) &&
          M.formAction === g.location.pathname + g.location.search &&
          (I = we.Replace));
    let A = y && "preventScrollReset" in y ? y.preventScrollReset === !0 : void 0,
      Q = (y && y.flushSync) === !0,
      X = Ju({ currentLocation: W, nextLocation: F, historyAction: I });
    if (X) {
      Tl(X, {
        state: "blocked",
        location: F,
        proceed() {
          (Tl(X, { state: "proceeding", proceed: void 0, reset: void 0, location: F }), Hu(h, y));
        },
        reset() {
          let Ne = new Map(g.blockers);
          (Ne.set(X, Ar), Ue({ blockers: Ne }));
        },
      });
      return;
    }
    return await Sn(I, F, {
      submission: M,
      pendingError: B,
      preventScrollReset: A,
      replace: y && y.replace,
      enableViewTransition: y && y.viewTransition,
      flushSync: Q,
    });
  }
  function yp() {
    if ((uo(), Ue({ revalidation: "loading" }), g.navigation.state !== "submitting")) {
      if (g.navigation.state === "idle") {
        Sn(g.historyAction, g.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      Sn(P || g.historyAction, g.navigation.location, {
        overrideNavigation: g.navigation,
        enableViewTransition: q === !0,
      });
    }
  }
  async function Sn(h, y, _) {
    (D && D.abort(),
      (D = null),
      (P = h),
      (Pe = (_ && _.startUninterruptedRevalidation) === !0),
      Rp(g.location, g.matches),
      ($ = (_ && _.preventScrollReset) === !0),
      (q = (_ && _.enableViewTransition) === !0));
    let N = a || o,
      M = _ && _.overrideNavigation,
      B =
        _ != null && _.initialHydration && g.matches && g.matches.length > 0 && !v
          ? g.matches
          : Cn(N, y, u),
      W = (_ && _.flushSync) === !0;
    if (
      B &&
      g.initialized &&
      !ct &&
      Kv(g.location, y) &&
      !(_ && _.submission && mt(_.submission.formMethod))
    ) {
      Wn(y, { matches: B }, { flushSync: W });
      return;
    }
    let F = Dl(B, N, y.pathname);
    if ((F.active && F.matches && (B = F.matches), !B)) {
      let { error: le, notFoundMatches: Z, route: he } = so(y.pathname);
      Wn(y, { matches: Z, loaderData: {}, errors: { [he.id]: le } }, { flushSync: W });
      return;
    }
    D = new AbortController();
    let U = Xn(e.history, y, D.signal, _ && _.submission),
      I;
    if (_ && _.pendingError) I = [Pn(B).route.id, { type: b.error, error: _.pendingError }];
    else if (_ && _.submission && mt(_.submission.formMethod)) {
      let le = await wp(U, y, _.submission, B, F.active, { replace: _.replace, flushSync: W });
      if (le.shortCircuited) return;
      if (le.pendingActionResult) {
        let [Z, he] = le.pendingActionResult;
        if (Ze(he) && xl(he.error) && he.error.status === 404) {
          ((D = null), Wn(y, { matches: le.matches, loaderData: {}, errors: { [Z]: he.error } }));
          return;
        }
      }
      ((B = le.matches || B),
        (I = le.pendingActionResult),
        (M = $o(y, _.submission)),
        (W = !1),
        (F.active = !1),
        (U = Xn(e.history, U.url, U.signal)));
    }
    let {
      shortCircuited: A,
      matches: Q,
      loaderData: X,
      errors: Ne,
    } = await Sp(
      U,
      y,
      B,
      F.active,
      M,
      _ && _.submission,
      _ && _.fetcherSubmission,
      _ && _.replace,
      _ && _.initialHydration === !0,
      W,
      I,
    );
    A || ((D = null), Wn(y, ue({ matches: Q || B }, xc(I), { loaderData: X, errors: Ne })));
  }
  async function wp(h, y, _, N, M, B) {
    (B === void 0 && (B = {}), uo());
    let W = qv(y, _);
    if ((Ue({ navigation: W }, { flushSync: B.flushSync === !0 }), M)) {
      let I = await Ml(N, y.pathname, h.signal);
      if (I.type === "aborted") return { shortCircuited: !0 };
      if (I.type === "error") {
        let A = Pn(I.partialMatches).route.id;
        return {
          matches: I.partialMatches,
          pendingActionResult: [A, { type: b.error, error: I.error }],
        };
      } else if (I.matches) N = I.matches;
      else {
        let { notFoundMatches: A, error: Q, route: X } = so(y.pathname);
        return { matches: A, pendingActionResult: [X.id, { type: b.error, error: Q }] };
      }
    }
    let F,
      U = Yr(N, y);
    if (!U.route.action && !U.route.lazy)
      F = {
        type: b.error,
        error: We(405, { method: h.method, pathname: y.pathname, routeId: U.route.id }),
      };
    else if (((F = (await Nr("action", g, h, [U], N, null))[U.route.id]), h.signal.aborted))
      return { shortCircuited: !0 };
    if (jn(F)) {
      let I;
      return (
        B && B.replace != null
          ? (I = B.replace)
          : (I =
              gc(F.response.headers.get("Location"), new URL(h.url), u) ===
              g.location.pathname + g.location.search),
        await xn(h, F, !0, { submission: _, replace: I }),
        { shortCircuited: !0 }
      );
    }
    if (ln(F)) throw We(400, { type: "defer-action" });
    if (Ze(F)) {
      let I = Pn(N, U.route.id);
      return (
        (B && B.replace) !== !0 && (P = we.Push),
        { matches: N, pendingActionResult: [I.route.id, F] }
      );
    }
    return { matches: N, pendingActionResult: [U.route.id, F] };
  }
  async function Sp(h, y, _, N, M, B, W, F, U, I, A) {
    let Q = M || $o(y, B),
      X = B || W || kc(Q),
      Ne = !Pe && (!d.v7_partialHydration || !U);
    if (N) {
      if (Ne) {
        let me = Wu(A);
        Ue(ue({ navigation: Q }, me !== void 0 ? { actionData: me } : {}), { flushSync: I });
      }
      let J = await Ml(_, y.pathname, h.signal);
      if (J.type === "aborted") return { shortCircuited: !0 };
      if (J.type === "error") {
        let me = Pn(J.partialMatches).route.id;
        return { matches: J.partialMatches, loaderData: {}, errors: { [me]: J.error } };
      } else if (J.matches) _ = J.matches;
      else {
        let { error: me, notFoundMatches: Qn, route: jr } = so(y.pathname);
        return { matches: Qn, loaderData: {}, errors: { [jr.id]: me } };
      }
    }
    let le = a || o,
      [Z, he] = hc(
        e.history,
        g,
        _,
        X,
        y,
        d.v7_partialHydration && U === !0,
        d.v7_skipActionErrorRevalidation,
        ct,
        Qt,
        Kt,
        Ie,
        ft,
        ne,
        le,
        u,
        A,
      );
    if (
      (co(J => !(_ && _.some(me => me.route.id === J)) || (Z && Z.some(me => me.route.id === J))),
      (V = ++H),
      Z.length === 0 && he.length === 0)
    ) {
      let J = Yu();
      return (
        Wn(
          y,
          ue(
            { matches: _, loaderData: {}, errors: A && Ze(A[1]) ? { [A[0]]: A[1].error } : null },
            xc(A),
            J ? { fetchers: new Map(g.fetchers) } : {},
          ),
          { flushSync: I },
        ),
        { shortCircuited: !0 }
      );
    }
    if (Ne) {
      let J = {};
      if (!N) {
        J.navigation = Q;
        let me = Wu(A);
        me !== void 0 && (J.actionData = me);
      }
      (he.length > 0 && (J.fetchers = xp(he)), Ue(J, { flushSync: I }));
    }
    he.forEach(J => {
      (Xt(J.key), J.controller && j.set(J.key, J.controller));
    });
    let Vn = () => he.forEach(J => Xt(J.key));
    D && D.signal.addEventListener("abort", Vn);
    let { loaderResults: Rr, fetcherResults: Lt } = await Vu(g, _, Z, he, h);
    if (h.signal.aborted) return { shortCircuited: !0 };
    (D && D.signal.removeEventListener("abort", Vn), he.forEach(J => j.delete(J.key)));
    let St = bl(Rr);
    if (St) return (await xn(h, St.result, !0, { replace: F }), { shortCircuited: !0 });
    if (((St = bl(Lt)), St))
      return (ne.add(St.key), await xn(h, St.result, !0, { replace: F }), { shortCircuited: !0 });
    let { loaderData: fo, errors: Lr } = wc(g, _, Rr, A, he, Lt, Fe);
    (Fe.forEach((J, me) => {
      J.subscribe(Qn => {
        (Qn || J.done) && Fe.delete(me);
      });
    }),
      d.v7_partialHydration && U && g.errors && (Lr = ue({}, g.errors, Lr)));
    let _n = Yu(),
      zl = Xu(V),
      Ol = _n || zl || he.length > 0;
    return ue(
      { matches: _, loaderData: fo, errors: Lr },
      Ol ? { fetchers: new Map(g.fetchers) } : {},
    );
  }
  function Wu(h) {
    if (h && !Ze(h[1])) return { [h[0]]: h[1].data };
    if (g.actionData) return Object.keys(g.actionData).length === 0 ? null : g.actionData;
  }
  function xp(h) {
    return (
      h.forEach(y => {
        let _ = g.fetchers.get(y.key),
          N = Br(void 0, _ ? _.data : void 0);
        g.fetchers.set(y.key, N);
      }),
      new Map(g.fetchers)
    );
  }
  function _p(h, y, _, N) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.",
      );
    Xt(h);
    let M = (N && N.flushSync) === !0,
      B = a || o,
      W = Oa(
        g.location,
        g.matches,
        u,
        d.v7_prependBasename,
        _,
        d.v7_relativeSplatPath,
        y,
        N == null ? void 0 : N.relative,
      ),
      F = Cn(B, W, u),
      U = Dl(F, B, W);
    if ((U.active && U.matches && (F = U.matches), !F)) {
      Rt(h, y, We(404, { pathname: W }), { flushSync: M });
      return;
    }
    let { path: I, submission: A, error: Q } = dc(d.v7_normalizeFormMethod, !0, W, N);
    if (Q) {
      Rt(h, y, Q, { flushSync: M });
      return;
    }
    let X = Yr(F, I),
      Ne = (N && N.preventScrollReset) === !0;
    if (A && mt(A.formMethod)) {
      Ep(h, y, I, X, F, U.active, M, Ne, A);
      return;
    }
    (ft.set(h, { routeId: y, path: I }), kp(h, y, I, X, F, U.active, M, Ne, A));
  }
  async function Ep(h, y, _, N, M, B, W, F, U) {
    (uo(), ft.delete(h));
    function I(ye) {
      if (!ye.route.action && !ye.route.lazy) {
        let Kn = We(405, { method: U.formMethod, pathname: _, routeId: y });
        return (Rt(h, y, Kn, { flushSync: W }), !0);
      }
      return !1;
    }
    if (!B && I(N)) return;
    let A = g.fetchers.get(h);
    Yt(h, bv(U, A), { flushSync: W });
    let Q = new AbortController(),
      X = Xn(e.history, _, Q.signal, U);
    if (B) {
      let ye = await Ml(M, new URL(X.url).pathname, X.signal, h);
      if (ye.type === "aborted") return;
      if (ye.type === "error") {
        Rt(h, y, ye.error, { flushSync: W });
        return;
      } else if (ye.matches) {
        if (((M = ye.matches), (N = Yr(M, _)), I(N))) return;
      } else {
        Rt(h, y, We(404, { pathname: _ }), { flushSync: W });
        return;
      }
    }
    j.set(h, Q);
    let Ne = H,
      Z = (await Nr("action", g, X, [N], M, h))[N.route.id];
    if (X.signal.aborted) {
      j.get(h) === Q && j.delete(h);
      return;
    }
    if (d.v7_fetcherPersist && Ie.has(h)) {
      if (jn(Z) || Ze(Z)) {
        Yt(h, Zt(void 0));
        return;
      }
    } else {
      if (jn(Z))
        if ((j.delete(h), V > Ne)) {
          Yt(h, Zt(void 0));
          return;
        } else
          return (
            ne.add(h),
            Yt(h, Br(U)),
            xn(X, Z, !1, { fetcherSubmission: U, preventScrollReset: F })
          );
      if (Ze(Z)) {
        Rt(h, y, Z.error);
        return;
      }
    }
    if (ln(Z)) throw We(400, { type: "defer-action" });
    let he = g.navigation.location || g.location,
      Vn = Xn(e.history, he, Q.signal),
      Rr = a || o,
      Lt = g.navigation.state !== "idle" ? Cn(Rr, g.navigation.location, u) : g.matches;
    K(Lt, "Didn't find any matches after fetcher action");
    let St = ++H;
    te.set(h, St);
    let fo = Br(U, Z.data);
    g.fetchers.set(h, fo);
    let [Lr, _n] = hc(
      e.history,
      g,
      Lt,
      U,
      he,
      !1,
      d.v7_skipActionErrorRevalidation,
      ct,
      Qt,
      Kt,
      Ie,
      ft,
      ne,
      Rr,
      u,
      [N.route.id, Z],
    );
    (_n
      .filter(ye => ye.key !== h)
      .forEach(ye => {
        let Kn = ye.key,
          bu = g.fetchers.get(Kn),
          Tp = Br(void 0, bu ? bu.data : void 0);
        (g.fetchers.set(Kn, Tp), Xt(Kn), ye.controller && j.set(Kn, ye.controller));
      }),
      Ue({ fetchers: new Map(g.fetchers) }));
    let zl = () => _n.forEach(ye => Xt(ye.key));
    Q.signal.addEventListener("abort", zl);
    let { loaderResults: Ol, fetcherResults: J } = await Vu(g, Lt, Lr, _n, Vn);
    if (Q.signal.aborted) return;
    (Q.signal.removeEventListener("abort", zl),
      te.delete(h),
      j.delete(h),
      _n.forEach(ye => j.delete(ye.key)));
    let me = bl(Ol);
    if (me) return xn(Vn, me.result, !1, { preventScrollReset: F });
    if (((me = bl(J)), me))
      return (ne.add(me.key), xn(Vn, me.result, !1, { preventScrollReset: F }));
    let { loaderData: Qn, errors: jr } = wc(g, Lt, Ol, void 0, _n, J, Fe);
    if (g.fetchers.has(h)) {
      let ye = Zt(Z.data);
      g.fetchers.set(h, ye);
    }
    (Xu(St),
      g.navigation.state === "loading" && St > V
        ? (K(P, "Expected pending action"),
          D && D.abort(),
          Wn(g.navigation.location, {
            matches: Lt,
            loaderData: Qn,
            errors: jr,
            fetchers: new Map(g.fetchers),
          }))
        : (Ue({
            errors: jr,
            loaderData: Sc(g.loaderData, Qn, Lt, jr),
            fetchers: new Map(g.fetchers),
          }),
          (ct = !1)));
  }
  async function kp(h, y, _, N, M, B, W, F, U) {
    let I = g.fetchers.get(h);
    Yt(h, Br(U, I ? I.data : void 0), { flushSync: W });
    let A = new AbortController(),
      Q = Xn(e.history, _, A.signal);
    if (B) {
      let Z = await Ml(M, new URL(Q.url).pathname, Q.signal, h);
      if (Z.type === "aborted") return;
      if (Z.type === "error") {
        Rt(h, y, Z.error, { flushSync: W });
        return;
      } else if (Z.matches) ((M = Z.matches), (N = Yr(M, _)));
      else {
        Rt(h, y, We(404, { pathname: _ }), { flushSync: W });
        return;
      }
    }
    j.set(h, A);
    let X = H,
      le = (await Nr("loader", g, Q, [N], M, h))[N.route.id];
    if (
      (ln(le) && (le = (await Iu(le, Q.signal, !0)) || le),
      j.get(h) === A && j.delete(h),
      !Q.signal.aborted)
    ) {
      if (Ie.has(h)) {
        Yt(h, Zt(void 0));
        return;
      }
      if (jn(le))
        if (V > X) {
          Yt(h, Zt(void 0));
          return;
        } else {
          (ne.add(h), await xn(Q, le, !1, { preventScrollReset: F }));
          return;
        }
      if (Ze(le)) {
        Rt(h, y, le.error);
        return;
      }
      (K(!ln(le), "Unhandled fetcher deferred data"), Yt(h, Zt(le.data)));
    }
  }
  async function xn(h, y, _, N) {
    let {
      submission: M,
      fetcherSubmission: B,
      preventScrollReset: W,
      replace: F,
    } = N === void 0 ? {} : N;
    y.response.headers.has("X-Remix-Revalidate") && (ct = !0);
    let U = y.response.headers.get("Location");
    (K(U, "Expected a Location header on the redirect Response"), (U = gc(U, new URL(h.url), u)));
    let I = Sl(g.location, U, { _isRedirect: !0 });
    if (n) {
      let Z = !1;
      if (y.response.headers.has("X-Remix-Reload-Document")) Z = !0;
      else if (Ou.test(U)) {
        const he = e.history.createURL(U);
        Z = he.origin !== t.location.origin || $t(he.pathname, u) == null;
      }
      if (Z) {
        F ? t.location.replace(U) : t.location.assign(U);
        return;
      }
    }
    D = null;
    let A = F === !0 || y.response.headers.has("X-Remix-Replace") ? we.Replace : we.Push,
      { formMethod: Q, formAction: X, formEncType: Ne } = g.navigation;
    !M && !B && Q && X && Ne && (M = kc(g.navigation));
    let le = M || B;
    if (Mv.has(y.response.status) && le && mt(le.formMethod))
      await Sn(A, I, {
        submission: ue({}, le, { formAction: U }),
        preventScrollReset: W || $,
        enableViewTransition: _ ? q : void 0,
      });
    else {
      let Z = $o(I, M);
      await Sn(A, I, {
        overrideNavigation: Z,
        fetcherSubmission: B,
        preventScrollReset: W || $,
        enableViewTransition: _ ? q : void 0,
      });
    }
  }
  async function Nr(h, y, _, N, M, B) {
    let W,
      F = {};
    try {
      W = await $v(s, h, y, _, N, M, B, i, l);
    } catch (U) {
      return (
        N.forEach(I => {
          F[I.route.id] = { type: b.error, error: U };
        }),
        F
      );
    }
    for (let [U, I] of Object.entries(W))
      if (Yv(I)) {
        let A = I.result;
        F[U] = { type: b.redirect, response: Vv(A, _, U, M, u, d.v7_relativeSplatPath) };
      } else F[U] = await Wv(I);
    return F;
  }
  async function Vu(h, y, _, N, M) {
    let B = h.matches,
      W = Nr("loader", h, M, _, y, null),
      F = Promise.all(
        N.map(async A => {
          if (A.matches && A.match && A.controller) {
            let X = (
              await Nr(
                "loader",
                h,
                Xn(e.history, A.path, A.controller.signal),
                [A.match],
                A.matches,
                A.key,
              )
            )[A.match.route.id];
            return { [A.key]: X };
          } else
            return Promise.resolve({
              [A.key]: { type: b.error, error: We(404, { pathname: A.path }) },
            });
        }),
      ),
      U = await W,
      I = (await F).reduce((A, Q) => Object.assign(A, Q), {});
    return (
      await Promise.all([Jv(y, U, M.signal, B, h.loaderData), Zv(y, I, N)]),
      { loaderResults: U, fetcherResults: I }
    );
  }
  function uo() {
    ((ct = !0),
      Qt.push(...co()),
      ft.forEach((h, y) => {
        (j.has(y) && Kt.add(y), Xt(y));
      }));
  }
  function Yt(h, y, _) {
    (_ === void 0 && (_ = {}),
      g.fetchers.set(h, y),
      Ue({ fetchers: new Map(g.fetchers) }, { flushSync: (_ && _.flushSync) === !0 }));
  }
  function Rt(h, y, _, N) {
    N === void 0 && (N = {});
    let M = Pn(g.matches, y);
    (jl(h),
      Ue(
        { errors: { [M.route.id]: _ }, fetchers: new Map(g.fetchers) },
        { flushSync: (N && N.flushSync) === !0 },
      ));
  }
  function Qu(h) {
    return (Ge.set(h, (Ge.get(h) || 0) + 1), Ie.has(h) && Ie.delete(h), g.fetchers.get(h) || zv);
  }
  function jl(h) {
    let y = g.fetchers.get(h);
    (j.has(h) && !(y && y.state === "loading" && te.has(h)) && Xt(h),
      ft.delete(h),
      te.delete(h),
      ne.delete(h),
      d.v7_fetcherPersist && Ie.delete(h),
      Kt.delete(h),
      g.fetchers.delete(h));
  }
  function Cp(h) {
    let y = (Ge.get(h) || 0) - 1;
    (y <= 0 ? (Ge.delete(h), Ie.add(h), d.v7_fetcherPersist || jl(h)) : Ge.set(h, y),
      Ue({ fetchers: new Map(g.fetchers) }));
  }
  function Xt(h) {
    let y = j.get(h);
    y && (y.abort(), j.delete(h));
  }
  function Ku(h) {
    for (let y of h) {
      let _ = Qu(y),
        N = Zt(_.data);
      g.fetchers.set(y, N);
    }
  }
  function Yu() {
    let h = [],
      y = !1;
    for (let _ of ne) {
      let N = g.fetchers.get(_);
      (K(N, "Expected fetcher: " + _),
        N.state === "loading" && (ne.delete(_), h.push(_), (y = !0)));
    }
    return (Ku(h), y);
  }
  function Xu(h) {
    let y = [];
    for (let [_, N] of te)
      if (N < h) {
        let M = g.fetchers.get(_);
        (K(M, "Expected fetcher: " + _), M.state === "loading" && (Xt(_), te.delete(_), y.push(_)));
      }
    return (Ku(y), y.length > 0);
  }
  function Pp(h, y) {
    let _ = g.blockers.get(h) || Ar;
    return (rt.get(h) !== y && rt.set(h, y), _);
  }
  function Gu(h) {
    (g.blockers.delete(h), rt.delete(h));
  }
  function Tl(h, y) {
    let _ = g.blockers.get(h) || Ar;
    K(
      (_.state === "unblocked" && y.state === "blocked") ||
        (_.state === "blocked" && y.state === "blocked") ||
        (_.state === "blocked" && y.state === "proceeding") ||
        (_.state === "blocked" && y.state === "unblocked") ||
        (_.state === "proceeding" && y.state === "unblocked"),
      "Invalid blocker state transition: " + _.state + " -> " + y.state,
    );
    let N = new Map(g.blockers);
    (N.set(h, y), Ue({ blockers: N }));
  }
  function Ju(h) {
    let { currentLocation: y, nextLocation: _, historyAction: N } = h;
    if (rt.size === 0) return;
    rt.size > 1 && Sr(!1, "A router only supports one blocker at a time");
    let M = Array.from(rt.entries()),
      [B, W] = M[M.length - 1],
      F = g.blockers.get(B);
    if (
      !(F && F.state === "proceeding") &&
      W({ currentLocation: y, nextLocation: _, historyAction: N })
    )
      return B;
  }
  function so(h) {
    let y = We(404, { pathname: h }),
      _ = a || o,
      { matches: N, route: M } = _c(_);
    return (co(), { notFoundMatches: N, route: M, error: y });
  }
  function co(h) {
    let y = [];
    return (
      Fe.forEach((_, N) => {
        (!h || h(N)) && (_.cancel(), y.push(N), Fe.delete(N));
      }),
      y
    );
  }
  function Np(h, y, _) {
    if (((x = h), (T = y), (E = _ || null), !m && g.navigation === Bo)) {
      m = !0;
      let N = qu(g.location, g.matches);
      N != null && Ue({ restoreScrollPosition: N });
    }
    return () => {
      ((x = null), (T = null), (E = null));
    };
  }
  function Zu(h, y) {
    return (
      (E &&
        E(
          h,
          y.map(N => fv(N, g.loaderData)),
        )) ||
      h.key
    );
  }
  function Rp(h, y) {
    if (x && T) {
      let _ = Zu(h, y);
      x[_] = T();
    }
  }
  function qu(h, y) {
    if (x) {
      let _ = Zu(h, y),
        N = x[_];
      if (typeof N == "number") return N;
    }
    return null;
  }
  function Dl(h, y, _) {
    if (f)
      if (h) {
        if (Object.keys(h[0].params).length > 0) return { active: !0, matches: hi(y, _, u, !0) };
      } else return { active: !0, matches: hi(y, _, u, !0) || [] };
    return { active: !1, matches: null };
  }
  async function Ml(h, y, _, N) {
    if (!f) return { type: "success", matches: h };
    let M = h;
    for (;;) {
      let B = a == null,
        W = a || o,
        F = i;
      try {
        await f({
          signal: _,
          path: y,
          matches: M,
          fetcherKey: N,
          patch: (A, Q) => {
            _.aborted || vc(A, Q, W, F, l);
          },
        });
      } catch (A) {
        return { type: "error", error: A, partialMatches: M };
      } finally {
        B && !_.aborted && (o = [...o]);
      }
      if (_.aborted) return { type: "aborted" };
      let U = Cn(W, y, u);
      if (U) return { type: "success", matches: U };
      let I = hi(W, y, u, !0);
      if (!I || (M.length === I.length && M.every((A, Q) => A.route.id === I[Q].route.id)))
        return { type: "success", matches: null };
      M = I;
    }
  }
  function Lp(h) {
    ((i = {}), (a = Ai(h, l, void 0, i)));
  }
  function jp(h, y) {
    let _ = a == null;
    (vc(h, y, a || o, i, l), _ && ((o = [...o]), Ue({})));
  }
  return (
    (z = {
      get basename() {
        return u;
      },
      get future() {
        return d;
      },
      get state() {
        return g;
      },
      get routes() {
        return o;
      },
      get window() {
        return t;
      },
      initialize: mp,
      subscribe: gp,
      enableScrollRestoration: Np,
      navigate: Hu,
      fetch: _p,
      revalidate: yp,
      createHref: h => e.history.createHref(h),
      encodeLocation: h => e.history.encodeLocation(h),
      getFetcher: Qu,
      deleteFetcher: Cp,
      dispose: vp,
      getBlocker: Pp,
      deleteBlocker: Gu,
      patchRoutes: jp,
      _internalFetchControllers: j,
      _internalActiveDeferreds: Fe,
      _internalSetRoutes: Lp,
    }),
    z
  );
}
function Fv(e) {
  return (
    e != null && (("formData" in e && e.formData != null) || ("body" in e && e.body !== void 0))
  );
}
function Oa(e, t, n, r, l, i, o, a) {
  let u, s;
  if (o) {
    u = [];
    for (let d of t)
      if ((u.push(d), d.route.id === o)) {
        s = d;
        break;
      }
  } else ((u = t), (s = t[t.length - 1]));
  let f = oo(l || ".", io(u, i), $t(e.pathname, n) || e.pathname, a === "path");
  if (
    (l == null && ((f.search = e.search), (f.hash = e.hash)),
    (l == null || l === "" || l === ".") && s)
  ) {
    let d = Fu(f.search);
    if (s.route.index && !d) f.search = f.search ? f.search.replace(/^\?/, "?index&") : "?index";
    else if (!s.route.index && d) {
      let p = new URLSearchParams(f.search),
        S = p.getAll("index");
      (p.delete("index"), S.filter(E => E).forEach(E => p.append("index", E)));
      let x = p.toString();
      f.search = x ? "?" + x : "";
    }
  }
  return (r && n !== "/" && (f.pathname = f.pathname === "/" ? n : It([n, f.pathname])), An(f));
}
function dc(e, t, n, r) {
  if (!r || !Fv(r)) return { path: n };
  if (r.formMethod && !Gv(r.formMethod))
    return { path: n, error: We(405, { method: r.formMethod }) };
  let l = () => ({ path: n, error: We(400, { type: "invalid-body" }) }),
    i = r.formMethod || "get",
    o = e ? i.toUpperCase() : i.toLowerCase(),
    a = lp(n);
  if (r.body !== void 0) {
    if (r.formEncType === "text/plain") {
      if (!mt(o)) return l();
      let p =
        typeof r.body == "string"
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
            ? Array.from(r.body.entries()).reduce((S, x) => {
                let [E, T] = x;
                return (
                  "" +
                  S +
                  E +
                  "=" +
                  T +
                  `
`
                );
              }, "")
            : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: o,
          formAction: a,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: p,
        },
      };
    } else if (r.formEncType === "application/json") {
      if (!mt(o)) return l();
      try {
        let p = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: o,
            formAction: a,
            formEncType: r.formEncType,
            formData: void 0,
            json: p,
            text: void 0,
          },
        };
      } catch {
        return l();
      }
    }
  }
  K(typeof FormData == "function", "FormData is not available in this environment");
  let u, s;
  if (r.formData) ((u = Fa(r.formData)), (s = r.formData));
  else if (r.body instanceof FormData) ((u = Fa(r.body)), (s = r.body));
  else if (r.body instanceof URLSearchParams) ((u = r.body), (s = yc(u)));
  else if (r.body == null) ((u = new URLSearchParams()), (s = new FormData()));
  else
    try {
      ((u = new URLSearchParams(r.body)), (s = yc(u)));
    } catch {
      return l();
    }
  let f = {
    formMethod: o,
    formAction: a,
    formEncType: (r && r.formEncType) || "application/x-www-form-urlencoded",
    formData: s,
    json: void 0,
    text: void 0,
  };
  if (mt(f.formMethod)) return { path: n, submission: f };
  let d = wn(n);
  return (
    t && d.search && Fu(d.search) && u.append("index", ""),
    (d.search = "?" + u),
    { path: An(d), submission: f }
  );
}
function pc(e, t, n) {
  n === void 0 && (n = !1);
  let r = e.findIndex(l => l.route.id === t);
  return r >= 0 ? e.slice(0, n ? r + 1 : r) : e;
}
function hc(e, t, n, r, l, i, o, a, u, s, f, d, p, S, x, E) {
  let T = E ? (Ze(E[1]) ? E[1].error : E[1].data) : void 0,
    m = e.createURL(t.location),
    c = e.createURL(l),
    v = n;
  i && t.errors ? (v = pc(n, Object.keys(t.errors)[0], !0)) : E && Ze(E[1]) && (v = pc(n, E[0]));
  let k = E ? E[1].statusCode : void 0,
    L = o && k && k >= 400,
    z = v.filter((P, $) => {
      let { route: D } = P;
      if (D.lazy) return !0;
      if (D.loader == null) return !1;
      if (i) return Ia(D, t.loaderData, t.errors);
      if (Uv(t.loaderData, t.matches[$], P) || u.some(xe => xe === P.route.id)) return !0;
      let q = t.matches[$],
        re = P;
      return mc(
        P,
        ue({ currentUrl: m, currentParams: q.params, nextUrl: c, nextParams: re.params }, r, {
          actionResult: T,
          actionStatus: k,
          defaultShouldRevalidate: L
            ? !1
            : a ||
              m.pathname + m.search === c.pathname + c.search ||
              m.search !== c.search ||
              np(q, re),
        }),
      );
    }),
    g = [];
  return (
    d.forEach((P, $) => {
      if (i || !n.some(Pe => Pe.route.id === P.routeId) || f.has($)) return;
      let D = Cn(S, P.path, x);
      if (!D) {
        g.push({
          key: $,
          routeId: P.routeId,
          path: P.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let q = t.fetchers.get($),
        re = Yr(D, P.path),
        xe = !1;
      (p.has($)
        ? (xe = !1)
        : s.has($)
          ? (s.delete($), (xe = !0))
          : q && q.state !== "idle" && q.data === void 0
            ? (xe = a)
            : (xe = mc(
                re,
                ue(
                  {
                    currentUrl: m,
                    currentParams: t.matches[t.matches.length - 1].params,
                    nextUrl: c,
                    nextParams: n[n.length - 1].params,
                  },
                  r,
                  { actionResult: T, actionStatus: k, defaultShouldRevalidate: L ? !1 : a },
                ),
              )),
        xe &&
          g.push({
            key: $,
            routeId: P.routeId,
            path: P.path,
            matches: D,
            match: re,
            controller: new AbortController(),
          }));
    }),
    [z, g]
  );
}
function Ia(e, t, n) {
  if (e.lazy) return !0;
  if (!e.loader) return !1;
  let r = t != null && t[e.id] !== void 0,
    l = n != null && n[e.id] !== void 0;
  return !r && l ? !1 : typeof e.loader == "function" && e.loader.hydrate === !0 ? !0 : !r && !l;
}
function Uv(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    l = e[n.route.id] === void 0;
  return r || l;
}
function np(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname || (n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function mc(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == "boolean") return n;
  }
  return t.defaultShouldRevalidate;
}
function vc(e, t, n, r, l) {
  var i;
  let o;
  if (e) {
    let s = r[e];
    (K(s, "No route found to patch children into: routeId = " + e),
      s.children || (s.children = []),
      (o = s.children));
  } else o = n;
  let a = t.filter(s => !o.some(f => rp(s, f))),
    u = Ai(a, l, [e || "_", "patch", String(((i = o) == null ? void 0 : i.length) || "0")], r);
  o.push(...u);
}
function rp(e, t) {
  return "id" in e && "id" in t && e.id === t.id
    ? !0
    : e.index === t.index && e.path === t.path && e.caseSensitive === t.caseSensitive
      ? (!e.children || e.children.length === 0) && (!t.children || t.children.length === 0)
        ? !0
        : e.children.every((n, r) => {
            var l;
            return (l = t.children) == null ? void 0 : l.some(i => rp(n, i));
          })
      : !1;
}
async function Av(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let l = n[e.id];
  K(l, "No route found in manifest");
  let i = {};
  for (let o in r) {
    let u = l[o] !== void 0 && o !== "hasErrorBoundary";
    (Sr(
      !u,
      'Route "' +
        l.id +
        '" has a static property "' +
        o +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + o + '" will be ignored.'),
    ),
      !u && !sv.has(o) && (i[o] = r[o]));
  }
  (Object.assign(l, i), Object.assign(l, ue({}, t(l), { lazy: void 0 })));
}
async function Bv(e) {
  let { matches: t } = e,
    n = t.filter(l => l.shouldLoad);
  return (await Promise.all(n.map(l => l.resolve()))).reduce(
    (l, i, o) => Object.assign(l, { [n[o].route.id]: i }),
    {},
  );
}
async function $v(e, t, n, r, l, i, o, a, u, s) {
  let f = i.map(S => (S.route.lazy ? Av(S.route, u, a) : void 0)),
    d = i.map((S, x) => {
      let E = f[x],
        T = l.some(c => c.route.id === S.route.id);
      return ue({}, S, {
        shouldLoad: T,
        resolve: async c => (
          c && r.method === "GET" && (S.route.lazy || S.route.loader) && (T = !0),
          T ? Hv(t, r, S, E, c, s) : Promise.resolve({ type: b.data, result: void 0 })
        ),
      });
    }),
    p = await e({ matches: d, request: r, params: i[0].params, fetcherKey: o, context: s });
  try {
    await Promise.all(f);
  } catch {}
  return p;
}
async function Hv(e, t, n, r, l, i) {
  let o,
    a,
    u = s => {
      let f,
        d = new Promise((x, E) => (f = E));
      ((a = () => f()), t.signal.addEventListener("abort", a));
      let p = x =>
          typeof s != "function"
            ? Promise.reject(
                new Error(
                  "You cannot call the handler for a route which defines a boolean " +
                    ('"' + e + '" [routeId: ' + n.route.id + "]"),
                ),
              )
            : s({ request: t, params: n.params, context: i }, ...(x !== void 0 ? [x] : [])),
        S = (async () => {
          try {
            return { type: "data", result: await (l ? l(E => p(E)) : p()) };
          } catch (x) {
            return { type: "error", result: x };
          }
        })();
      return Promise.race([S, d]);
    };
  try {
    let s = n.route[e];
    if (r)
      if (s) {
        let f,
          [d] = await Promise.all([
            u(s).catch(p => {
              f = p;
            }),
            r,
          ]);
        if (f !== void 0) throw f;
        o = d;
      } else if ((await r, (s = n.route[e]), s)) o = await u(s);
      else if (e === "action") {
        let f = new URL(t.url),
          d = f.pathname + f.search;
        throw We(405, { method: t.method, pathname: d, routeId: n.route.id });
      } else return { type: b.data, result: void 0 };
    else if (s) o = await u(s);
    else {
      let f = new URL(t.url),
        d = f.pathname + f.search;
      throw We(404, { pathname: d });
    }
    K(
      o.result !== void 0,
      "You defined " +
        (e === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' + n.route.id + "\" but didn't return anything from your `" + e + "` ") +
        "function. Please return a value or `null`.",
    );
  } catch (s) {
    return { type: b.error, result: s };
  } finally {
    a && t.signal.removeEventListener("abort", a);
  }
  return o;
}
async function Wv(e) {
  let { result: t, type: n } = e;
  if (ip(t)) {
    let d;
    try {
      let p = t.headers.get("Content-Type");
      p && /\bapplication\/json\b/.test(p)
        ? t.body == null
          ? (d = null)
          : (d = await t.json())
        : (d = await t.text());
    } catch (p) {
      return { type: b.error, error: p };
    }
    return n === b.error
      ? {
          type: b.error,
          error: new $i(t.status, t.statusText, d),
          statusCode: t.status,
          headers: t.headers,
        }
      : { type: b.data, data: d, statusCode: t.status, headers: t.headers };
  }
  if (n === b.error) {
    if (Ec(t)) {
      var r, l;
      if (t.data instanceof Error) {
        var i, o;
        return {
          type: b.error,
          error: t.data,
          statusCode: (i = t.init) == null ? void 0 : i.status,
          headers: (o = t.init) != null && o.headers ? new Headers(t.init.headers) : void 0,
        };
      }
      return {
        type: b.error,
        error: new $i(((r = t.init) == null ? void 0 : r.status) || 500, void 0, t.data),
        statusCode: xl(t) ? t.status : void 0,
        headers: (l = t.init) != null && l.headers ? new Headers(t.init.headers) : void 0,
      };
    }
    return { type: b.error, error: t, statusCode: xl(t) ? t.status : void 0 };
  }
  if (Xv(t)) {
    var a, u;
    return {
      type: b.deferred,
      deferredData: t,
      statusCode: (a = t.init) == null ? void 0 : a.status,
      headers: ((u = t.init) == null ? void 0 : u.headers) && new Headers(t.init.headers),
    };
  }
  if (Ec(t)) {
    var s, f;
    return {
      type: b.data,
      data: t.data,
      statusCode: (s = t.init) == null ? void 0 : s.status,
      headers: (f = t.init) != null && f.headers ? new Headers(t.init.headers) : void 0,
    };
  }
  return { type: b.data, data: t };
}
function Vv(e, t, n, r, l, i) {
  let o = e.headers.get("Location");
  if (
    (K(o, "Redirects returned/thrown from loaders/actions must have a Location header"),
    !Ou.test(o))
  ) {
    let a = r.slice(0, r.findIndex(u => u.route.id === n) + 1);
    ((o = Oa(new URL(t.url), a, l, !0, o, i)), e.headers.set("Location", o));
  }
  return e;
}
function gc(e, t, n) {
  if (Ou.test(e)) {
    let r = e,
      l = r.startsWith("//") ? new URL(t.protocol + r) : new URL(r),
      i = $t(l.pathname, n) != null;
    if (l.origin === t.origin && i) return l.pathname + l.search + l.hash;
  }
  return e;
}
function Xn(e, t, n, r) {
  let l = e.createURL(lp(t)).toString(),
    i = { signal: n };
  if (r && mt(r.formMethod)) {
    let { formMethod: o, formEncType: a } = r;
    ((i.method = o.toUpperCase()),
      a === "application/json"
        ? ((i.headers = new Headers({ "Content-Type": a })), (i.body = JSON.stringify(r.json)))
        : a === "text/plain"
          ? (i.body = r.text)
          : a === "application/x-www-form-urlencoded" && r.formData
            ? (i.body = Fa(r.formData))
            : (i.body = r.formData));
  }
  return new Request(l, i);
}
function Fa(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries()) t.append(n, typeof r == "string" ? r : r.name);
  return t;
}
function yc(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function Qv(e, t, n, r, l) {
  let i = {},
    o = null,
    a,
    u = !1,
    s = {},
    f = n && Ze(n[1]) ? n[1].error : void 0;
  return (
    e.forEach(d => {
      if (!(d.route.id in t)) return;
      let p = d.route.id,
        S = t[p];
      if ((K(!jn(S), "Cannot handle redirect results in processLoaderData"), Ze(S))) {
        let x = S.error;
        (f !== void 0 && ((x = f), (f = void 0)), (o = o || {}));
        {
          let E = Pn(e, p);
          o[E.route.id] == null && (o[E.route.id] = x);
        }
        ((i[p] = void 0),
          u || ((u = !0), (a = xl(S.error) ? S.error.status : 500)),
          S.headers && (s[p] = S.headers));
      } else
        ln(S)
          ? (r.set(p, S.deferredData),
            (i[p] = S.deferredData.data),
            S.statusCode != null && S.statusCode !== 200 && !u && (a = S.statusCode),
            S.headers && (s[p] = S.headers))
          : ((i[p] = S.data),
            S.statusCode && S.statusCode !== 200 && !u && (a = S.statusCode),
            S.headers && (s[p] = S.headers));
    }),
    f !== void 0 && n && ((o = { [n[0]]: f }), (i[n[0]] = void 0)),
    { loaderData: i, errors: o, statusCode: a || 200, loaderHeaders: s }
  );
}
function wc(e, t, n, r, l, i, o) {
  let { loaderData: a, errors: u } = Qv(t, n, r, o);
  return (
    l.forEach(s => {
      let { key: f, match: d, controller: p } = s,
        S = i[f];
      if ((K(S, "Did not find corresponding fetcher result"), !(p && p.signal.aborted)))
        if (Ze(S)) {
          let x = Pn(e.matches, d == null ? void 0 : d.route.id);
          ((u && u[x.route.id]) || (u = ue({}, u, { [x.route.id]: S.error })),
            e.fetchers.delete(f));
        } else if (jn(S)) K(!1, "Unhandled fetcher revalidation redirect");
        else if (ln(S)) K(!1, "Unhandled fetcher deferred data");
        else {
          let x = Zt(S.data);
          e.fetchers.set(f, x);
        }
    }),
    { loaderData: a, errors: u }
  );
}
function Sc(e, t, n, r) {
  let l = ue({}, t);
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
function xc(e) {
  return e ? (Ze(e[1]) ? { actionData: {} } : { actionData: { [e[0]]: e[1].data } }) : {};
}
function Pn(e, t) {
  return (
    (t ? e.slice(0, e.findIndex(r => r.route.id === t) + 1) : [...e])
      .reverse()
      .find(r => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function _c(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find(n => n.index || !n.path || n.path === "/") || { id: "__shim-error-route__" };
  return { matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }], route: t };
}
function We(e, t) {
  let { pathname: n, routeId: r, method: l, type: i, message: o } = t === void 0 ? {} : t,
    a = "Unknown Server Error",
    u = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((a = "Bad Request"),
        l && n && r
          ? (u =
              "You made a " +
              l +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : i === "defer-action"
            ? (u = "defer() is not supported in actions")
            : i === "invalid-body" && (u = "Unable to encode submission body"))
      : e === 403
        ? ((a = "Forbidden"), (u = 'Route "' + r + '" does not match URL "' + n + '"'))
        : e === 404
          ? ((a = "Not Found"), (u = 'No route matches URL "' + n + '"'))
          : e === 405 &&
            ((a = "Method Not Allowed"),
            l && n && r
              ? (u =
                  "You made a " +
                  l.toUpperCase() +
                  ' request to "' +
                  n +
                  '" but ' +
                  ('did not provide an `action` for route "' + r + '", ') +
                  "so there is no way to handle the request.")
              : l && (u = 'Invalid request method "' + l.toUpperCase() + '"')),
    new $i(e || 500, a, new Error(u), !0)
  );
}
function bl(e) {
  let t = Object.entries(e);
  for (let n = t.length - 1; n >= 0; n--) {
    let [r, l] = t[n];
    if (jn(l)) return { key: r, result: l };
  }
}
function lp(e) {
  let t = typeof e == "string" ? wn(e) : e;
  return An(ue({}, t, { hash: "" }));
}
function Kv(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
      ? t.hash !== ""
      : e.hash === t.hash
        ? !0
        : t.hash !== "";
}
function Yv(e) {
  return ip(e.result) && Dv.has(e.result.status);
}
function ln(e) {
  return e.type === b.deferred;
}
function Ze(e) {
  return e.type === b.error;
}
function jn(e) {
  return (e && e.type) === b.redirect;
}
function Ec(e) {
  return (
    typeof e == "object" &&
    e != null &&
    "type" in e &&
    "data" in e &&
    "init" in e &&
    e.type === "DataWithResponseInit"
  );
}
function Xv(e) {
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
function ip(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function Gv(e) {
  return Tv.has(e.toLowerCase());
}
function mt(e) {
  return Lv.has(e.toLowerCase());
}
async function Jv(e, t, n, r, l) {
  let i = Object.entries(t);
  for (let o = 0; o < i.length; o++) {
    let [a, u] = i[o],
      s = e.find(p => (p == null ? void 0 : p.route.id) === a);
    if (!s) continue;
    let f = r.find(p => p.route.id === s.route.id),
      d = f != null && !np(f, s) && (l && l[s.route.id]) !== void 0;
    ln(u) &&
      d &&
      (await Iu(u, n, !1).then(p => {
        p && (t[a] = p);
      }));
  }
}
async function Zv(e, t, n) {
  for (let r = 0; r < n.length; r++) {
    let { key: l, routeId: i, controller: o } = n[r],
      a = t[l];
    e.find(s => (s == null ? void 0 : s.route.id) === i) &&
      ln(a) &&
      (K(o, "Expected an AbortController for revalidating fetcher deferred result"),
      await Iu(a, o.signal, !0).then(s => {
        s && (t[l] = s);
      }));
  }
}
async function Iu(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: b.data, data: e.deferredData.unwrappedData };
      } catch (l) {
        return { type: b.error, error: l };
      }
    return { type: b.data, data: e.deferredData.data };
  }
}
function Fu(e) {
  return new URLSearchParams(e).getAll("index").some(t => t === "");
}
function Yr(e, t) {
  let n = typeof t == "string" ? wn(t).search : t.search;
  if (e[e.length - 1].route.index && Fu(n || "")) return e[e.length - 1];
  let r = bd(e);
  return r[r.length - 1];
}
function kc(e) {
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
function $o(e, t) {
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
function qv(e, t) {
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
function Br(e, t) {
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
function bv(e, t) {
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
function Zt(e) {
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
function eg(e, t) {
  try {
    let n = e.sessionStorage.getItem(tp);
    if (n) {
      let r = JSON.parse(n);
      for (let [l, i] of Object.entries(r || {}))
        i && Array.isArray(i) && t.set(l, new Set(i || []));
    }
  } catch {}
}
function tg(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [r, l] of t) n[r] = [...l];
    try {
      e.sessionStorage.setItem(tp, JSON.stringify(n));
    } catch (r) {
      Sr(!1, "Failed to save applied view transitions in sessionStorage (" + r + ").");
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
 */ function Hi() {
  return (
    (Hi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Hi.apply(this, arguments)
  );
}
const Nl = C.createContext(null),
  Uu = C.createContext(null),
  Wt = C.createContext(null),
  Au = C.createContext(null),
  Vt = C.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  op = C.createContext(null);
function ng(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Cr() || K(!1);
  let { basename: r, navigator: l } = C.useContext(Wt),
    { hash: i, pathname: o, search: a } = ao(e, { relative: n }),
    u = o;
  return (
    r !== "/" && (u = o === "/" ? r : It([r, o])),
    l.createHref({ pathname: u, search: a, hash: i })
  );
}
function Cr() {
  return C.useContext(Au) != null;
}
function Hn() {
  return (Cr() || K(!1), C.useContext(Au).location);
}
function ap(e) {
  C.useContext(Wt).static || C.useLayoutEffect(e);
}
function Rl() {
  let { isDataRoute: e } = C.useContext(Vt);
  return e ? vg() : rg();
}
function rg() {
  Cr() || K(!1);
  let e = C.useContext(Nl),
    { basename: t, future: n, navigator: r } = C.useContext(Wt),
    { matches: l } = C.useContext(Vt),
    { pathname: i } = Hn(),
    o = JSON.stringify(io(l, n.v7_relativeSplatPath)),
    a = C.useRef(!1);
  return (
    ap(() => {
      a.current = !0;
    }),
    C.useCallback(
      function (s, f) {
        if ((f === void 0 && (f = {}), !a.current)) return;
        if (typeof s == "number") {
          r.go(s);
          return;
        }
        let d = oo(s, JSON.parse(o), i, f.relative === "path");
        (e == null && t !== "/" && (d.pathname = d.pathname === "/" ? t : It([t, d.pathname])),
          (f.replace ? r.replace : r.push)(d, f.state, f));
      },
      [t, r, o, i, e],
    )
  );
}
const lg = C.createContext(null);
function ig(e) {
  let t = C.useContext(Vt).outlet;
  return t && C.createElement(lg.Provider, { value: e }, t);
}
function ao(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = C.useContext(Wt),
    { matches: l } = C.useContext(Vt),
    { pathname: i } = Hn(),
    o = JSON.stringify(io(l, r.v7_relativeSplatPath));
  return C.useMemo(() => oo(e, JSON.parse(o), i, n === "path"), [e, o, i, n]);
}
function og(e, t, n, r) {
  Cr() || K(!1);
  let { navigator: l } = C.useContext(Wt),
    { matches: i } = C.useContext(Vt),
    o = i[i.length - 1],
    a = o ? o.params : {};
  o && o.pathname;
  let u = o ? o.pathnameBase : "/";
  o && o.route;
  let s = Hn(),
    f;
  f = s;
  let d = f.pathname || "/",
    p = d;
  if (u !== "/") {
    let E = u.replace(/^\//, "").split("/");
    p = "/" + d.replace(/^\//, "").split("/").slice(E.length).join("/");
  }
  let S = Cn(e, { pathname: p });
  return fg(
    S &&
      S.map(E =>
        Object.assign({}, E, {
          params: Object.assign({}, a, E.params),
          pathname: It([u, l.encodeLocation ? l.encodeLocation(E.pathname).pathname : E.pathname]),
          pathnameBase:
            E.pathnameBase === "/"
              ? u
              : It([
                  u,
                  l.encodeLocation ? l.encodeLocation(E.pathnameBase).pathname : E.pathnameBase,
                ]),
        }),
      ),
    i,
    n,
    r,
  );
}
function ag() {
  let e = mg(),
    t = xl(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return C.createElement(
    C.Fragment,
    null,
    C.createElement("h2", null, "Unexpected Application Error!"),
    C.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? C.createElement("pre", { style: l }, n) : null,
    null,
  );
}
const ug = C.createElement(ag, null);
class sg extends C.Component {
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
      ? C.createElement(
          Vt.Provider,
          { value: this.props.routeContext },
          C.createElement(op.Provider, { value: this.state.error, children: this.props.component }),
        )
      : this.props.children;
  }
}
function cg(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = C.useContext(Nl);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    C.createElement(Vt.Provider, { value: t }, r)
  );
}
function fg(e, t, n, r) {
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
    a = (l = n) == null ? void 0 : l.errors;
  if (a != null) {
    let f = o.findIndex(d => d.route.id && (a == null ? void 0 : a[d.route.id]) !== void 0);
    (f >= 0 || K(!1), (o = o.slice(0, Math.min(o.length, f + 1))));
  }
  let u = !1,
    s = -1;
  if (n && r && r.v7_partialHydration)
    for (let f = 0; f < o.length; f++) {
      let d = o[f];
      if (((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (s = f), d.route.id)) {
        let { loaderData: p, errors: S } = n,
          x = d.route.loader && p[d.route.id] === void 0 && (!S || S[d.route.id] === void 0);
        if (d.route.lazy || x) {
          ((u = !0), s >= 0 ? (o = o.slice(0, s + 1)) : (o = [o[0]]));
          break;
        }
      }
    }
  return o.reduceRight((f, d, p) => {
    let S,
      x = !1,
      E = null,
      T = null;
    n &&
      ((S = a && d.route.id ? a[d.route.id] : void 0),
      (E = d.route.errorElement || ug),
      u &&
        (s < 0 && p === 0
          ? (gg("route-fallback"), (x = !0), (T = null))
          : s === p && ((x = !0), (T = d.route.hydrateFallbackElement || null))));
    let m = t.concat(o.slice(0, p + 1)),
      c = () => {
        let v;
        return (
          S
            ? (v = E)
            : x
              ? (v = T)
              : d.route.Component
                ? (v = C.createElement(d.route.Component, null))
                : d.route.element
                  ? (v = d.route.element)
                  : (v = f),
          C.createElement(cg, {
            match: d,
            routeContext: { outlet: f, matches: m, isDataRoute: n != null },
            children: v,
          })
        );
      };
    return n && (d.route.ErrorBoundary || d.route.errorElement || p === 0)
      ? C.createElement(sg, {
          location: n.location,
          revalidation: n.revalidation,
          component: E,
          error: S,
          children: c(),
          routeContext: { outlet: null, matches: m, isDataRoute: !0 },
        })
      : c();
  }, null);
}
var up = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(up || {}),
  sp = (function (e) {
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
  })(sp || {});
function dg(e) {
  let t = C.useContext(Nl);
  return (t || K(!1), t);
}
function pg(e) {
  let t = C.useContext(Uu);
  return (t || K(!1), t);
}
function hg(e) {
  let t = C.useContext(Vt);
  return (t || K(!1), t);
}
function cp(e) {
  let t = hg(),
    n = t.matches[t.matches.length - 1];
  return (n.route.id || K(!1), n.route.id);
}
function mg() {
  var e;
  let t = C.useContext(op),
    n = pg(sp.UseRouteError),
    r = cp();
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function vg() {
  let { router: e } = dg(up.UseNavigateStable),
    t = cp(),
    n = C.useRef(!1);
  return (
    ap(() => {
      n.current = !0;
    }),
    C.useCallback(
      function (l, i) {
        (i === void 0 && (i = {}),
          n.current &&
            (typeof l == "number" ? e.navigate(l) : e.navigate(l, Hi({ fromRouteId: t }, i))));
      },
      [e, t],
    )
  );
}
const Cc = {};
function gg(e, t, n) {
  Cc[e] || (Cc[e] = !0);
}
function yg(e, t) {
  (e == null || e.v7_startTransition,
    (e == null ? void 0 : e.v7_relativeSplatPath) === void 0 && (!t || t.v7_relativeSplatPath),
    t &&
      (t.v7_fetcherPersist,
      t.v7_normalizeFormMethod,
      t.v7_partialHydration,
      t.v7_skipActionErrorRevalidation));
}
function Pc(e) {
  let { to: t, replace: n, state: r, relative: l } = e;
  Cr() || K(!1);
  let { future: i, static: o } = C.useContext(Wt),
    { matches: a } = C.useContext(Vt),
    { pathname: u } = Hn(),
    s = Rl(),
    f = oo(t, io(a, i.v7_relativeSplatPath), u, l === "path"),
    d = JSON.stringify(f);
  return (
    C.useEffect(() => s(JSON.parse(d), { replace: n, state: r, relative: l }), [s, d, l, n, r]),
    null
  );
}
function wg(e) {
  return ig(e.context);
}
function Sg(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: l = we.Pop,
    navigator: i,
    static: o = !1,
    future: a,
  } = e;
  Cr() && K(!1);
  let u = t.replace(/^\/*/, "/"),
    s = C.useMemo(
      () => ({ basename: u, navigator: i, static: o, future: Hi({ v7_relativeSplatPath: !1 }, a) }),
      [u, a, i, o],
    );
  typeof r == "string" && (r = wn(r));
  let { pathname: f = "/", search: d = "", hash: p = "", state: S = null, key: x = "default" } = r,
    E = C.useMemo(() => {
      let T = $t(f, u);
      return T == null
        ? null
        : { location: { pathname: T, search: d, hash: p, state: S, key: x }, navigationType: l };
    }, [u, f, d, p, S, x, l]);
  return E == null
    ? null
    : C.createElement(
        Wt.Provider,
        { value: s },
        C.createElement(Au.Provider, { children: n, value: E }),
      );
}
new Promise(() => {});
function xg(e) {
  let t = { hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null };
  return (
    e.Component && Object.assign(t, { element: C.createElement(e.Component), Component: void 0 }),
    e.HydrateFallback &&
      Object.assign(t, {
        hydrateFallbackElement: C.createElement(e.HydrateFallback),
        HydrateFallback: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, { errorElement: C.createElement(e.ErrorBoundary), ErrorBoundary: void 0 }),
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
 */ function xr() {
  return (
    (xr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    xr.apply(this, arguments)
  );
}
function fp(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    i;
  for (i = 0; i < r.length; i++) ((l = r[i]), !(t.indexOf(l) >= 0) && (n[l] = e[l]));
  return n;
}
function _g(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Eg(e, t) {
  return e.button === 0 && (!t || t === "_self") && !_g(e);
}
const kg = [
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
  Cg = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "viewTransition",
    "children",
  ],
  Pg = "6";
try {
  window.__reactRouterVersion = Pg;
} catch {}
function Ng(e, t) {
  return Iv({
    basename: void 0,
    future: xr({}, void 0, { v7_prependBasename: !0 }),
    history: ov({ window: void 0 }),
    hydrationData: Rg(),
    routes: e,
    mapRouteProperties: xg,
    dataStrategy: void 0,
    patchRoutesOnNavigation: void 0,
    window: void 0,
  }).initialize();
}
function Rg() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return (t && t.errors && (t = xr({}, t, { errors: Lg(t.errors) })), t);
}
function Lg(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, l] of t)
    if (l && l.__type === "RouteErrorResponse")
      n[r] = new $i(l.status, l.statusText, l.data, l.internal === !0);
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
const dp = C.createContext({ isTransitioning: !1 }),
  jg = C.createContext(new Map()),
  Tg = "startTransition",
  Nc = Yp[Tg],
  Dg = "flushSync",
  Rc = iv[Dg];
function Mg(e) {
  Nc ? Nc(e) : e();
}
function $r(e) {
  Rc ? Rc(e) : e();
}
class zg {
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
function Og(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [l, i] = C.useState(n.state),
    [o, a] = C.useState(),
    [u, s] = C.useState({ isTransitioning: !1 }),
    [f, d] = C.useState(),
    [p, S] = C.useState(),
    [x, E] = C.useState(),
    T = C.useRef(new Map()),
    { v7_startTransition: m } = r || {},
    c = C.useCallback(
      P => {
        m ? Mg(P) : P();
      },
      [m],
    ),
    v = C.useCallback(
      (P, $) => {
        let { deletedFetchers: D, flushSync: q, viewTransitionOpts: re } = $;
        (P.fetchers.forEach((Pe, ct) => {
          Pe.data !== void 0 && T.current.set(ct, Pe.data);
        }),
          D.forEach(Pe => T.current.delete(Pe)));
        let xe =
          n.window == null ||
          n.window.document == null ||
          typeof n.window.document.startViewTransition != "function";
        if (!re || xe) {
          q ? $r(() => i(P)) : c(() => i(P));
          return;
        }
        if (q) {
          $r(() => {
            (p && (f && f.resolve(), p.skipTransition()),
              s({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: re.currentLocation,
                nextLocation: re.nextLocation,
              }));
          });
          let Pe = n.window.document.startViewTransition(() => {
            $r(() => i(P));
          });
          (Pe.finished.finally(() => {
            $r(() => {
              (d(void 0), S(void 0), a(void 0), s({ isTransitioning: !1 }));
            });
          }),
            $r(() => S(Pe)));
          return;
        }
        p
          ? (f && f.resolve(),
            p.skipTransition(),
            E({ state: P, currentLocation: re.currentLocation, nextLocation: re.nextLocation }))
          : (a(P),
            s({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: re.currentLocation,
              nextLocation: re.nextLocation,
            }));
      },
      [n.window, p, f, T, c],
    );
  (C.useLayoutEffect(() => n.subscribe(v), [n, v]),
    C.useEffect(() => {
      u.isTransitioning && !u.flushSync && d(new zg());
    }, [u]),
    C.useEffect(() => {
      if (f && o && n.window) {
        let P = o,
          $ = f.promise,
          D = n.window.document.startViewTransition(async () => {
            (c(() => i(P)), await $);
          });
        (D.finished.finally(() => {
          (d(void 0), S(void 0), a(void 0), s({ isTransitioning: !1 }));
        }),
          S(D));
      }
    }, [c, o, f, n.window]),
    C.useEffect(() => {
      f && o && l.location.key === o.location.key && f.resolve();
    }, [f, p, l.location, o]),
    C.useEffect(() => {
      !u.isTransitioning &&
        x &&
        (a(x.state),
        s({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: x.currentLocation,
          nextLocation: x.nextLocation,
        }),
        E(void 0));
    }, [u.isTransitioning, x]),
    C.useEffect(() => {}, []));
  let k = C.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: P => n.navigate(P),
        push: (P, $, D) =>
          n.navigate(P, {
            state: $,
            preventScrollReset: D == null ? void 0 : D.preventScrollReset,
          }),
        replace: (P, $, D) =>
          n.navigate(P, {
            replace: !0,
            state: $,
            preventScrollReset: D == null ? void 0 : D.preventScrollReset,
          }),
      }),
      [n],
    ),
    L = n.basename || "/",
    z = C.useMemo(() => ({ router: n, navigator: k, static: !1, basename: L }), [n, k, L]),
    g = C.useMemo(
      () => ({ v7_relativeSplatPath: n.future.v7_relativeSplatPath }),
      [n.future.v7_relativeSplatPath],
    );
  return (
    C.useEffect(() => yg(r, n.future), [r, n.future]),
    C.createElement(
      C.Fragment,
      null,
      C.createElement(
        Nl.Provider,
        { value: z },
        C.createElement(
          Uu.Provider,
          { value: l },
          C.createElement(
            jg.Provider,
            { value: T.current },
            C.createElement(
              dp.Provider,
              { value: u },
              C.createElement(
                Sg,
                {
                  basename: L,
                  location: l.location,
                  navigationType: l.historyAction,
                  navigator: k,
                  future: g,
                },
                l.initialized || n.future.v7_partialHydration
                  ? C.createElement(Ig, { routes: n.routes, future: n.future, state: l })
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
const Ig = C.memo(Fg);
function Fg(e) {
  let { routes: t, future: n, state: r } = e;
  return og(t, void 0, r, n);
}
const Ug =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Ag = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Bu = C.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: l,
        reloadDocument: i,
        replace: o,
        state: a,
        target: u,
        to: s,
        preventScrollReset: f,
        viewTransition: d,
      } = t,
      p = fp(t, kg),
      { basename: S } = C.useContext(Wt),
      x,
      E = !1;
    if (typeof s == "string" && Ag.test(s) && ((x = s), Ug))
      try {
        let v = new URL(window.location.href),
          k = s.startsWith("//") ? new URL(v.protocol + s) : new URL(s),
          L = $t(k.pathname, S);
        k.origin === v.origin && L != null ? (s = L + k.search + k.hash) : (E = !0);
      } catch {}
    let T = ng(s, { relative: l }),
      m = Hg(s, {
        replace: o,
        state: a,
        target: u,
        preventScrollReset: f,
        relative: l,
        viewTransition: d,
      });
    function c(v) {
      (r && r(v), v.defaultPrevented || m(v));
    }
    return C.createElement(
      "a",
      xr({}, p, { href: x || T, onClick: E || i ? r : c, ref: n, target: u }),
    );
  }),
  Bg = C.forwardRef(function (t, n) {
    let {
        "aria-current": r = "page",
        caseSensitive: l = !1,
        className: i = "",
        end: o = !1,
        style: a,
        to: u,
        viewTransition: s,
        children: f,
      } = t,
      d = fp(t, Cg),
      p = ao(u, { relative: d.relative }),
      S = Hn(),
      x = C.useContext(Uu),
      { navigator: E, basename: T } = C.useContext(Wt),
      m = x != null && Wg(p) && s === !0,
      c = E.encodeLocation ? E.encodeLocation(p).pathname : p.pathname,
      v = S.pathname,
      k = x && x.navigation && x.navigation.location ? x.navigation.location.pathname : null;
    (l || ((v = v.toLowerCase()), (k = k ? k.toLowerCase() : null), (c = c.toLowerCase())),
      k && T && (k = $t(k, T) || k));
    const L = c !== "/" && c.endsWith("/") ? c.length - 1 : c.length;
    let z = v === c || (!o && v.startsWith(c) && v.charAt(L) === "/"),
      g = k != null && (k === c || (!o && k.startsWith(c) && k.charAt(c.length) === "/")),
      P = { isActive: z, isPending: g, isTransitioning: m },
      $ = z ? r : void 0,
      D;
    typeof i == "function"
      ? (D = i(P))
      : (D = [i, z ? "active" : null, g ? "pending" : null, m ? "transitioning" : null]
          .filter(Boolean)
          .join(" "));
    let q = typeof a == "function" ? a(P) : a;
    return C.createElement(
      Bu,
      xr({}, d, { "aria-current": $, className: D, ref: n, style: q, to: u, viewTransition: s }),
      typeof f == "function" ? f(P) : f,
    );
  });
var Ua;
(function (e) {
  ((e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState"));
})(Ua || (Ua = {}));
var Lc;
(function (e) {
  ((e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration"));
})(Lc || (Lc = {}));
function $g(e) {
  let t = C.useContext(Nl);
  return (t || K(!1), t);
}
function Hg(e, t) {
  let {
      target: n,
      replace: r,
      state: l,
      preventScrollReset: i,
      relative: o,
      viewTransition: a,
    } = t === void 0 ? {} : t,
    u = Rl(),
    s = Hn(),
    f = ao(e, { relative: o });
  return C.useCallback(
    d => {
      if (Eg(d, n)) {
        d.preventDefault();
        let p = r !== void 0 ? r : An(s) === An(f);
        u(e, { replace: p, state: l, preventScrollReset: i, relative: o, viewTransition: a });
      }
    },
    [s, u, f, r, l, n, e, i, o, a],
  );
}
function Wg(e, t) {
  t === void 0 && (t = {});
  let n = C.useContext(dp);
  n == null && K(!1);
  let { basename: r } = $g(Ua.useViewTransitionState),
    l = ao(e, { relative: t.relative });
  if (!n.isTransitioning) return !1;
  let i = $t(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    o = $t(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return Bi(l.pathname, o) != null || Bi(l.pathname, i) != null;
}
const Vg = "_app_t6nec_1",
  Qg = "_screen_t6nec_7",
  jc = { app: Vg, screen: Qg },
  Kg = "_nav_1c2gy_1",
  Yg = "_item_1c2gy_14",
  Xg = "_active_1c2gy_24",
  Aa = { nav: Kg, item: Yg, active: Xg },
  Ho = ({ to: e, icon: t, label: n }) =>
    w.jsxs(Bg, {
      to: e,
      className: ({ isActive: r }) => [Aa.item, r ? Aa.active : ""].join(" "),
      children: [t, w.jsx("span", { children: n })],
    });
function Gg() {
  return w.jsxs("nav", {
    className: Aa.nav,
    children: [
      w.jsx(Ho, { to: "/", label: "Home", icon: w.jsx(Jg, {}) }),
      w.jsx(Ho, { to: "/search", label: "Search", icon: w.jsx(Zg, {}) }),
      w.jsx(Ho, { to: "/profile", label: "Profile", icon: w.jsx(qg, {}) }),
    ],
  });
}
const Jg = () =>
    w.jsx("svg", {
      width: "22",
      height: "22",
      viewBox: "0 0 24 24",
      fill: "none",
      children: w.jsx("path", {
        d: "M3 10.5 12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-10.5Z",
        stroke: "currentColor",
        strokeWidth: "1.6",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    }),
  Zg = () =>
    w.jsxs("svg", {
      width: "22",
      height: "22",
      viewBox: "0 0 24 24",
      fill: "none",
      children: [
        w.jsx("circle", { cx: "11", cy: "11", r: "7", stroke: "currentColor", strokeWidth: "1.6" }),
        w.jsx("path", {
          d: "M20 20l-3.5-3.5",
          stroke: "currentColor",
          strokeWidth: "1.6",
          strokeLinecap: "round",
        }),
      ],
    }),
  qg = () =>
    w.jsxs("svg", {
      width: "22",
      height: "22",
      viewBox: "0 0 24 24",
      fill: "none",
      children: [
        w.jsx("circle", { cx: "12", cy: "8", r: "4", stroke: "currentColor", strokeWidth: "1.6" }),
        w.jsx("path", {
          d: "M4 21c1.8-4 5.2-6 8-6s6.2 2 8 6",
          stroke: "currentColor",
          strokeWidth: "1.6",
          strokeLinecap: "round",
        }),
      ],
    });
function Tc() {
  const { pathname: e } = Hn(),
    t = e.startsWith("/auth");
  return w.jsx("div", {
    className: jc.app,
    children: w.jsxs("div", {
      className: jc.screen,
      children: [w.jsx(wg, {}), !t && w.jsx(Gg, {})],
    }),
  });
}
const bg = "_header_bo17a_1",
  ey = "_title_bo17a_8",
  ty = "_side_bo17a_13",
  ny = "_iconButton_bo17a_19",
  Jt = { header: bg, title: ey, side: ty, iconButton: ny };
function Pr({ title: e, back: t = !1, menu: n = !1 }) {
  const r = Rl(),
    l = () => {
      r(-1);
    },
    i = () => {
      console.log("Menu clicked");
    };
  return w.jsxs("header", {
    className: Jt.header,
    children: [
      w.jsxs("div", {
        className: Jt.side,
        children: [
          t &&
            w.jsx("button", {
              onClick: l,
              className: `${Jt.iconButton} ${Jt.backButton}`,
              "aria-label": "Go back",
              children: w.jsx(ry, {}),
            }),
          n &&
            w.jsx("button", {
              onClick: i,
              className: `${Jt.iconButton} ${Jt.menuButton}`,
              "aria-label": "Open menu",
              children: w.jsx(ly, {}),
            }),
        ],
      }),
      w.jsx("h2", { className: Jt.title, children: e }),
      w.jsx("div", { className: Jt.side }),
    ],
  });
}
const ry = () =>
    w.jsx("svg", {
      width: "22",
      height: "22",
      viewBox: "0 0 24 24",
      fill: "none",
      children: w.jsx("path", {
        d: "M15 19l-7-7 7-7",
        stroke: "currentColor",
        strokeWidth: "1.6",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    }),
  ly = () =>
    w.jsx("svg", {
      width: "22",
      height: "22",
      viewBox: "0 0 24 24",
      fill: "none",
      children: w.jsx("path", {
        d: "M4 6h16M4 12h16M4 18h16",
        stroke: "currentColor",
        strokeWidth: "1.6",
        strokeLinecap: "round",
      }),
    }),
  iy = "_btn_8y0tq_1",
  oy = "_primary_8y0tq_9",
  ay = "_ghost_8y0tq_14",
  Dc = { btn: iy, primary: oy, ghost: ay };
function $u({ children: e, variant: t = "primary", ...n }) {
  return w.jsx("button", { className: [Dc.btn, Dc[t]].join(" "), ...n, children: e });
}
const uy = "_wrap_7owt6_1",
  sy = "_label_7owt6_5",
  cy = "_input_7owt6_11",
  fy = "_error_7owt6_23",
  dy = "_errText_7owt6_27",
  Hr = { wrap: uy, label: sy, input: cy, error: fy, errText: dy };
function Mn({ label: e, error: t, ...n }) {
  return w.jsxs("label", {
    className: Hr.wrap,
    children: [
      e && w.jsx("span", { className: Hr.label, children: e }),
      w.jsx("input", { className: [Hr.input, t ? Hr.error : ""].join(" "), ...n }),
      t && w.jsx("span", { className: Hr.errText, children: t }),
    ],
  });
}
const py = "_main_37t3z_1",
  hy = "_hero_37t3z_4",
  my = "_lead_37t3z_10",
  vy = "_search_37t3z_16",
  ei = { main: py, hero: hy, lead: my, search: vy };
function gy() {
  return w.jsxs(w.Fragment, {
    children: [
      w.jsx(Pr, { title: "SkillShare Hub" }),
      w.jsxs("main", {
        className: ei.main,
        children: [
          w.jsxs("h1", {
            className: ei.hero,
            children: ["Learn and Teach.", w.jsx("br", {}), "Exchange Skills."],
          }),
          w.jsx("p", {
            className: ei.lead,
            children:
              "SkillShare Hub is a community-driven platform where you can exchange skills and knowledge with others.",
          }),
          w.jsx("div", {
            className: ei.search,
            children: w.jsx(Mn, { placeholder: "Search for skills" }),
          }),
          w.jsx($u, { children: "Get Started" }),
        ],
      }),
    ],
  });
}
const yy = "_tag_1g5dw_1",
  wy = { tag: yy };
function Dt({ children: e }) {
  return w.jsx("span", { className: wy.tag, children: e });
}
const Sy = "_main_vs10s_1",
  xy = "_filters_vs10s_4",
  _y = "_section_vs10s_7",
  Ey = "_grid_vs10s_12",
  ky = "_person_vs10s_17",
  Cy = "_avatar_vs10s_20",
  Py = "_name_vs10s_31",
  Ny = "_sub_vs10s_34",
  Ry = "_meta_vs10s_39",
  _t = {
    main: Sy,
    filters: xy,
    section: _y,
    grid: Ey,
    person: ky,
    avatar: Cy,
    name: Py,
    sub: Ny,
    meta: Ry,
  },
  Ly = [
    { id: 1, name: "Ethan Carter", subtitle: "Photography, Editing", rating: "4.8", lessons: 12 },
    {
      id: 2,
      name: "Sophia Bennett",
      subtitle: "Graphic Design, Illustration",
      rating: "4.9",
      lessons: 15,
    },
    { id: 3, name: "Liam Harper", subtitle: "Coding, Web Development", rating: "4.7", lessons: 10 },
    {
      id: 4,
      name: "Olivia Hayes",
      subtitle: "Writing, Content Creation",
      rating: "4.6",
      lessons: 8,
    },
  ],
  jy = e => {
    const [t, n] = C.useState(null),
      [r, l] = C.useState(!0),
      [i, o] = C.useState(null);
    return (
      C.useEffect(() => {
        (l(!0), o(null));
        const a = setTimeout(() => {
          (n(Ly), l(!1));
        }, 1500);
        return () => clearTimeout(a);
      }, [e]),
      { data: t, loading: r, error: i }
    );
  };
function Ty() {
  const { data: e, loading: t, error: n } = jy("/users"),
    r = () =>
      t
        ? w.jsx("p", { children: "Loading results..." })
        : n
          ? w.jsxs("p", { className: _t.error, children: ["Failed to load results: ", n.message] })
          : !e || e.length === 0
            ? w.jsx("p", { children: "No results found." })
            : w.jsx("div", {
                className: _t.grid,
                children: e.map(l =>
                  w.jsxs(
                    "div",
                    {
                      className: _t.person,
                      children: [
                        w.jsx("div", { className: _t.avatar, children: l.name[0] }),
                        w.jsx("div", { className: _t.name, children: l.name }),
                        w.jsx("div", { className: _t.sub, children: l.subtitle }),
                        w.jsxs("div", {
                          className: _t.meta,
                          children: [l.rating, " • ", l.lessons, " lessons"],
                        }),
                      ],
                    },
                    l.id,
                  ),
                ),
              });
  return w.jsxs(w.Fragment, {
    children: [
      w.jsx(Pr, { title: "Find a Partner", back: !0 }),
      w.jsxs("main", {
        className: _t.main,
        children: [
          w.jsx(Mn, { placeholder: "Search" }),
          w.jsxs("div", {
            className: _t.filters,
            children: [
              w.jsx(Dt, { children: "Skills" }),
              w.jsx(Dt, { children: "Interests" }),
              w.jsx(Dt, { children: "Availability" }),
            ],
          }),
          w.jsx("h3", { className: _t.section, children: "Results" }),
          r(),
        ],
      }),
    ],
  });
}
const Dy = "_main_4i1d6_1",
  My = "_center_4i1d6_4",
  zy = "_avatar_4i1d6_7",
  Oy = "_name_4i1d6_18",
  Iy = "_role_4i1d6_22",
  Fy = "_muted_4i1d6_26",
  Uy = "_bio_4i1d6_30",
  Ay = "_h3_4i1d6_35",
  By = "_tags_4i1d6_39",
  $y = "_ratingCard_4i1d6_43",
  Hy = "_score_4i1d6_50",
  Wy = "_stars_4i1d6_54",
  Vy = "_rev_4i1d6_58",
  Qy = "_bars_4i1d6_64",
  Ky = "_row_4i1d6_67",
  Yy = "_bar_4i1d6_64",
  Xy = "_mutedText_4i1d6_85",
  Gy = "_calendar_4i1d6_91",
  Jy = "_cell_4i1d6_97",
  Zy = "_active_4i1d6_106",
  ce = {
    main: Dy,
    center: My,
    avatar: zy,
    name: Oy,
    role: Iy,
    muted: Fy,
    bio: Uy,
    h3: Ay,
    tags: By,
    ratingCard: $y,
    score: Hy,
    stars: Wy,
    rev: Vy,
    bars: Qy,
    row: Ky,
    bar: Yy,
    mutedText: Xy,
    calendar: Gy,
    cell: Jy,
    active: Zy,
  };
function qy() {
  return w.jsxs(w.Fragment, {
    children: [
      w.jsx(Pr, { title: "Profile", back: !0 }),
      w.jsxs("main", {
        className: ce.main,
        children: [
          w.jsxs("div", {
            className: ce.center,
            children: [
              w.jsx("div", { className: ce.avatar, children: "S" }),
              w.jsx("h2", { className: ce.name, children: "Sophia Carter" }),
              w.jsx("div", { className: ce.role, children: "Software Engineer" }),
              w.jsx("div", { className: ce.muted, children: "Joined 2022" }),
            ],
          }),
          w.jsx("p", {
            className: ce.bio,
            children: "Passionate about coding and sharing knowledge. Let's learn together!",
          }),
          w.jsx("h3", { className: ce.h3, children: "Skills I Can Teach" }),
          w.jsxs("div", {
            className: ce.tags,
            children: [
              w.jsx(Dt, { children: "Python" }),
              w.jsx(Dt, { children: "Data Analysis" }),
              w.jsx(Dt, { children: "Web Development" }),
            ],
          }),
          w.jsx("h3", { className: ce.h3, children: "Skills I Want to Learn" }),
          w.jsxs("div", {
            className: ce.tags,
            children: [
              w.jsx(Dt, { children: "Machine Learning" }),
              w.jsx(Dt, { children: "Cloud Computing" }),
              w.jsx(Dt, { children: "Cybersecurity" }),
            ],
          }),
          w.jsxs("div", {
            className: ce.ratingCard,
            children: [
              w.jsx("div", { className: ce.score, children: "4.8" }),
              w.jsx("div", { className: ce.stars, children: "★★★★★" }),
              w.jsx("div", { className: ce.rev, children: "25 reviews" }),
              w.jsx("div", {
                className: ce.bars,
                children: [70, 20, 5, 3, 2].map((e, t) =>
                  w.jsxs(
                    "div",
                    {
                      className: ce.row,
                      children: [
                        w.jsx("span", { children: 5 - t }),
                        w.jsx("div", {
                          className: ce.bar,
                          children: w.jsx("i", { style: { width: `${e}%` } }),
                        }),
                        w.jsxs("span", { className: ce.mutedText, children: [e, "%"] }),
                      ],
                    },
                    t,
                  ),
                ),
              }),
            ],
          }),
          w.jsx("h3", { className: ce.h3, children: "Availability" }),
          w.jsx("div", {
            className: ce.calendar,
            children: Array.from({ length: 35 }).map((e, t) => {
              const n = t - 1,
                r = [5].includes(t);
              return w.jsx(
                "div",
                {
                  className: [ce.cell, r ? ce.active : ""].join(" "),
                  children: n > 0 && n <= 30 ? n : "",
                },
                t,
              );
            }),
          }),
        ],
      }),
    ],
  });
}
const by = "_schedule_1ccvr_1",
  e0 = "_content_1ccvr_6",
  t0 = "_upcoming_1ccvr_11",
  n0 = "_sectionTitle_1ccvr_15",
  r0 = "_events_1ccvr_22",
  l0 = "_event_1ccvr_22",
  i0 = "_eventDate_1ccvr_37",
  o0 = "_day_1ccvr_49",
  a0 = "_month_1ccvr_55",
  u0 = "_eventDetails_1ccvr_61",
  s0 = "_eventTitle_1ccvr_68",
  c0 = "_eventTime_1ccvr_75",
  f0 = "_badge_1ccvr_81",
  d0 = "_online_1ccvr_92",
  p0 = "_offline_1ccvr_97",
  h0 = "_addButton_1ccvr_102",
  m0 = "_addIcon_1ccvr_118",
  Me = {
    schedule: by,
    content: e0,
    upcoming: t0,
    sectionTitle: n0,
    events: r0,
    event: l0,
    eventDate: i0,
    day: o0,
    month: a0,
    eventDetails: u0,
    eventTitle: s0,
    eventTime: c0,
    badge: f0,
    online: d0,
    offline: p0,
    addButton: h0,
    addIcon: m0,
  };
function v0() {
  const e = [
    {
      id: 1,
      title: "Python Session with John",
      date: "2025-11-04",
      time: "14:00 - 15:00",
      type: "online",
    },
    {
      id: 2,
      title: "Web Dev Practice",
      date: "2025-11-05",
      time: "10:00 - 11:30",
      type: "offline",
    },
    {
      id: 3,
      title: "Data Analysis Workshop",
      date: "2025-11-06",
      time: "16:00 - 17:00",
      type: "online",
    },
  ];
  return w.jsxs("div", {
    className: Me.schedule,
    children: [
      w.jsx(Pr, { title: "Schedule", menu: !0 }),
      w.jsxs("div", {
        className: Me.content,
        children: [
          w.jsxs("section", {
            className: Me.upcoming,
            children: [
              w.jsx("h3", { className: Me.sectionTitle, children: "Upcoming Sessions" }),
              w.jsx("div", {
                className: Me.events,
                children: e.map(t =>
                  w.jsxs(
                    "div",
                    {
                      className: Me.event,
                      children: [
                        w.jsxs("div", {
                          className: Me.eventDate,
                          children: [
                            w.jsx("span", {
                              className: Me.day,
                              children: new Date(t.date).getDate(),
                            }),
                            w.jsx("span", {
                              className: Me.month,
                              children: new Date(t.date).toLocaleDateString("en", {
                                month: "short",
                              }),
                            }),
                          ],
                        }),
                        w.jsxs("div", {
                          className: Me.eventDetails,
                          children: [
                            w.jsx("h4", { className: Me.eventTitle, children: t.title }),
                            w.jsx("p", { className: Me.eventTime, children: t.time }),
                            w.jsx("span", {
                              className: `${Me.badge} ${Me[t.type]}`,
                              children: t.type,
                            }),
                          ],
                        }),
                      ],
                    },
                    t.id,
                  ),
                ),
              }),
            ],
          }),
          w.jsxs("button", {
            className: Me.addButton,
            children: [
              w.jsx("span", { className: Me.addIcon, children: "+" }),
              "Schedule New Session",
            ],
          }),
        ],
      }),
    ],
  });
}
function Mc() {
  return w.jsx("div", { children: "Chat" });
}
const g0 = "_auth_yv77z_1",
  y0 = "_welcome_yv77z_4",
  w0 = "_form_yv77z_8",
  S0 = "_small_yv77z_13",
  x0 = "_apiError_yv77z_23",
  Ct = { auth: g0, welcome: y0, form: w0, small: S0, apiError: x0 },
  pp = C.createContext(null),
  ti = "skillshare_user";
function _0({ children: e }) {
  const [t, n] = C.useState(null),
    [r, l] = C.useState(!0);
  C.useEffect(() => {
    (l(!0),
      setTimeout(() => {
        const s = localStorage.getItem(ti);
        (s && n(JSON.parse(s)), l(!1));
      }, 500));
  }, []);
  const i = C.useCallback(
      s =>
        new Promise((f, d) => {
          setTimeout(() => {
            const { email: p, password: S } = s;
            if (p === "exists@user.com") {
              d(new Error("User with this email already exists"));
              return;
            }
            const x = { id: Date.now(), email: p };
            (localStorage.setItem(ti, JSON.stringify(x)), n(x), f(x));
          }, 1e3);
        }),
      [],
    ),
    o = C.useCallback(
      s =>
        new Promise((f, d) => {
          setTimeout(() => {
            const { email: p, password: S } = s;
            if (S === "wrong") {
              d(new Error("Invalid email or password"));
              return;
            }
            const x = { id: 1, email: p };
            (localStorage.setItem(ti, JSON.stringify(x)), n(x), f(x));
          }, 1e3);
        }),
      [],
    ),
    a = C.useCallback(() => {
      (localStorage.removeItem(ti), n(null));
    }, []),
    u = { user: t, loadingAuth: r, isAuthenticated: !!t, login: o, register: i, logout: a };
  return w.jsx(pp.Provider, { value: u, children: e });
}
const hp = () => {
  const e = C.useContext(pp);
  if (!e) throw new Error("useAuth must be used within an AuthProvider");
  return e;
};
function E0() {
  const [e, t] = C.useState({ email: "", password: "" }),
    [n, r] = C.useState({}),
    [l, i] = C.useState(!1),
    o = Rl(),
    { login: a } = hp(),
    u = async s => {
      (s.preventDefault(), r({}), i(!0));
      const f = {};
      if (
        (e.email.includes("@") || (f.email = "Enter a valid email"),
        e.password || (f.password = "Password is required"),
        Object.keys(f).length > 0)
      ) {
        (r(f), i(!1));
        return;
      }
      try {
        (await a({ email: e.email, password: e.password }), o("/"));
      } catch (d) {
        r({ api: d.message });
      } finally {
        i(!1);
      }
    };
  return w.jsxs(w.Fragment, {
    children: [
      w.jsx(Pr, { title: "SkillShare Hub" }),
      w.jsxs("main", {
        className: Ct.auth,
        children: [
          w.jsx("h1", { className: Ct.welcome, children: "Welcome" }),
          w.jsxs("form", {
            onSubmit: u,
            className: Ct.form,
            children: [
              n.api && w.jsx("p", { className: Ct.apiError, children: n.api }),
              w.jsx(Mn, {
                placeholder: "Email",
                value: e.email,
                onChange: s => t(f => ({ ...f, email: s.target.value })),
                error: n.email,
                disabled: l,
              }),
              w.jsx(Mn, {
                placeholder: "Password",
                type: "password",
                value: e.password,
                onChange: s => t(f => ({ ...f, password: s.target.value })),
                error: n.password,
                disabled: l,
              }),
              w.jsx($u, { type: "submit", disabled: l, children: l ? "Logging in..." : "Log In" }),
            ],
          }),
          w.jsxs("p", {
            className: Ct.small,
            children: [
              "Don't have an account? ",
              w.jsx(Bu, { to: "/auth/register", children: "Sign Up" }),
            ],
          }),
        ],
      }),
    ],
  });
}
function k0() {
  const [e, t] = C.useState({ email: "", password: "", confirm: "" }),
    [n, r] = C.useState({}),
    [l, i] = C.useState(!1),
    o = Rl(),
    { register: a } = hp(),
    u = async s => {
      (s.preventDefault(), r({}), i(!0));
      const f = {};
      if (
        (e.email.includes("@") || (f.email = "Enter a valid email"),
        e.password.length < 6 && (f.password = "Min 6 characters"),
        e.confirm !== e.password && (f.confirm = "Passwords do not match"),
        Object.keys(f).length > 0)
      ) {
        (r(f), i(!1));
        return;
      }
      try {
        (await a({ email: e.email, password: e.password }), o("/"));
      } catch (d) {
        r({ api: d.message });
      } finally {
        i(!1);
      }
    };
  return w.jsxs(w.Fragment, {
    children: [
      w.jsx(Pr, { title: "SkillShare Hub" }),
      w.jsxs("main", {
        className: Ct.auth,
        children: [
          w.jsx("h1", { className: Ct.welcome, children: "Create account" }),
          w.jsxs("form", {
            onSubmit: u,
            className: Ct.form,
            children: [
              n.api && w.jsx("p", { className: Ct.apiError, children: n.api }),
              w.jsx(Mn, {
                placeholder: "Email",
                value: e.email,
                onChange: s => t(f => ({ ...f, email: s.target.value })),
                error: n.email,
                disabled: l,
              }),
              w.jsx(Mn, {
                placeholder: "Password",
                type: "password",
                value: e.password,
                onChange: s => t(f => ({ ...f, password: s.target.value })),
                error: n.password,
                disabled: l,
              }),
              w.jsx(Mn, {
                placeholder: "Confirm password",
                type: "password",
                value: e.confirm,
                onChange: s => t(f => ({ ...f, confirm: s.target.value })),
                error: n.confirm,
                disabled: l,
              }),
              w.jsx($u, {
                type: "submit",
                disabled: l,
                children: l ? "Creating account..." : "Sign Up",
              }),
            ],
          }),
          w.jsxs("p", {
            className: Ct.small,
            children: [
              "Already have an account? ",
              w.jsx(Bu, { to: "/auth/login", children: "Log In" }),
            ],
          }),
        ],
      }),
    ],
  });
}
const C0 = Ng([
  {
    path: "/",
    element: w.jsx(Tc, {}),
    children: [
      { index: !0, element: w.jsx(gy, {}) },
      { path: "search", element: w.jsx(Ty, {}) },
      { path: "profile", element: w.jsx(qy, {}) },
      { path: "schedule", element: w.jsx(v0, {}) },
      { path: "chat", element: w.jsx(Mc, {}) },
      { path: "chat/:matchId", element: w.jsx(Mc, {}) },
    ],
  },
  {
    path: "/auth",
    element: w.jsx(Tc, {}),
    children: [
      { index: !0, element: w.jsx(Pc, { to: "/auth/login", replace: !0 }) },
      { path: "login", element: w.jsx(E0, {}) },
      { path: "register", element: w.jsx(k0, {}) },
    ],
  },
  { path: "*", element: w.jsx(Pc, { to: "/", replace: !0 }) },
]);
Jd(document.getElementById("root")).render(
  w.jsx(Kc.StrictMode, { children: w.jsxs(_0, { children: [" ", w.jsx(Og, { router: C0 })] }) }),
);
