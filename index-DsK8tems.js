var uc = e => {
    throw TypeError(e)
};
var nl = (e, t, n) => t.has(e) || uc("Cannot " + n);
var T = (e, t, n) => (nl(e, t, "read from private field"), n ? n.call(e) : t.get(e)),
    q = (e, t, n) => t.has(e) ? uc("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n),
    H = (e, t, n, r) => (nl(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n),
    Pe = (e, t, n) => (nl(e, t, "access private method"), n);
var si = (e, t, n, r) => ({
    set _(o) {
        H(e, t, o, n)
    },
    get _() {
        return T(e, t, r)
    }
});

function Dg(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const o in r)
                if (o !== "default" && !(o in e)) {
                    const i = Object.getOwnPropertyDescriptor(r, o);
                    i && Object.defineProperty(e, o, i.get ? i : {
                        enumerable: !0,
                        get: () => r[o]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
    new MutationObserver(o => {
        for (const i of o)
            if (i.type === "childList")
                for (const s of i.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && r(s)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(o) {
        const i = {};
        return o.integrity && (i.integrity = o.integrity), o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? i.credentials = "include" : o.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i
    }

    function r(o) {
        if (o.ep) return;
        o.ep = !0;
        const i = n(o);
        fetch(o.href, i)
    }
})();

function hf(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var mf = {
        exports: {}
    },
    Ss = {},
    gf = {
        exports: {}
    },
    Y = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xo = Symbol.for("react.element"),
    Ig = Symbol.for("react.portal"),
    Fg = Symbol.for("react.fragment"),
    zg = Symbol.for("react.strict_mode"),
    $g = Symbol.for("react.profiler"),
    Ug = Symbol.for("react.provider"),
    Bg = Symbol.for("react.context"),
    Vg = Symbol.for("react.forward_ref"),
    Hg = Symbol.for("react.suspense"),
    Wg = Symbol.for("react.memo"),
    Qg = Symbol.for("react.lazy"),
    cc = Symbol.iterator;

function Kg(e) {
    return e === null || typeof e != "object" ? null : (e = cc && e[cc] || e["@@iterator"], typeof e == "function" ? e : null)
}
var vf = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    },
    yf = Object.assign,
    wf = {};

function Qr(e, t, n) {
    this.props = e, this.context = t, this.refs = wf, this.updater = n || vf
}
Qr.prototype.isReactComponent = {};
Qr.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
};
Qr.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function xf() {}
xf.prototype = Qr.prototype;

function Ka(e, t, n) {
    this.props = e, this.context = t, this.refs = wf, this.updater = n || vf
}
var Ya = Ka.prototype = new xf;
Ya.constructor = Ka;
yf(Ya, Qr.prototype);
Ya.isPureReactComponent = !0;
var dc = Array.isArray,
    Ef = Object.prototype.hasOwnProperty,
    Ga = {
        current: null
    },
    Sf = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function Cf(e, t, n) {
    var r, o = {},
        i = null,
        s = null;
    if (t != null)
        for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t) Ef.call(t, r) && !Sf.hasOwnProperty(r) && (o[r] = t[r]);
    var l = arguments.length - 2;
    if (l === 1) o.children = n;
    else if (1 < l) {
        for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
        o.children = a
    }
    if (e && e.defaultProps)
        for (r in l = e.defaultProps, l) o[r] === void 0 && (o[r] = l[r]);
    return {
        $$typeof: Xo,
        type: e,
        key: i,
        ref: s,
        props: o,
        _owner: Ga.current
    }
}

function Yg(e, t) {
    return {
        $$typeof: Xo,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}

function Xa(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Xo
}

function Gg(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var fc = /\/+/g;

function rl(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? Gg("" + e.key) : t.toString(36)
}

function Oi(e, t, n, r, o) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var s = !1;
    if (e === null) s = !0;
    else switch (i) {
        case "string":
        case "number":
            s = !0;
            break;
        case "object":
            switch (e.$$typeof) {
                case Xo:
                case Ig:
                    s = !0
            }
    }
    if (s) return s = e, o = o(s), e = r === "" ? "." + rl(s, 0) : r, dc(o) ? (n = "", e != null && (n = e.replace(fc, "$&/") + "/"), Oi(o, t, n, "", function(u) {
        return u
    })) : o != null && (Xa(o) && (o = Yg(o, n + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(fc, "$&/") + "/") + e)), t.push(o)), 1;
    if (s = 0, r = r === "" ? "." : r + ":", dc(e))
        for (var l = 0; l < e.length; l++) {
            i = e[l];
            var a = r + rl(i, l);
            s += Oi(i, t, n, a, o)
        } else if (a = Kg(e), typeof a == "function")
            for (e = a.call(e), l = 0; !(i = e.next()).done;) i = i.value, a = r + rl(i, l++), s += Oi(i, t, n, a, o);
        else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return s
}

function li(e, t, n) {
    if (e == null) return e;
    var r = [],
        o = 0;
    return Oi(e, r, "", "", function(i) {
        return t.call(n, i, o++)
    }), r
}

function Xg(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(), t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
        }), e._status === -1 && (e._status = 0, e._result = t)
    }
    if (e._status === 1) return e._result.default;
    throw e._result
}
var De = {
        current: null
    },
    ji = {
        transition: null
    },
    qg = {
        ReactCurrentDispatcher: De,
        ReactCurrentBatchConfig: ji,
        ReactCurrentOwner: Ga
    };

function kf() {
    throw Error("act(...) is not supported in production builds of React.")
}
Y.Children = {
    map: li,
    forEach: function(e, t, n) {
        li(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return li(e, function() {
            t++
        }), t
    },
    toArray: function(e) {
        return li(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Xa(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
Y.Component = Qr;
Y.Fragment = Fg;
Y.Profiler = $g;
Y.PureComponent = Ka;
Y.StrictMode = zg;
Y.Suspense = Hg;
Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = qg;
Y.act = kf;
Y.cloneElement = function(e, t, n) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = yf({}, e.props),
        o = e.key,
        i = e.ref,
        s = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (i = t.ref, s = Ga.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
        for (a in t) Ef.call(t, a) && !Sf.hasOwnProperty(a) && (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a])
    }
    var a = arguments.length - 2;
    if (a === 1) r.children = n;
    else if (1 < a) {
        l = Array(a);
        for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
        r.children = l
    }
    return {
        $$typeof: Xo,
        type: e.type,
        key: o,
        ref: i,
        props: r,
        _owner: s
    }
};
Y.createContext = function(e) {
    return e = {
        $$typeof: Bg,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }, e.Provider = {
        $$typeof: Ug,
        _context: e
    }, e.Consumer = e
};
Y.createElement = Cf;
Y.createFactory = function(e) {
    var t = Cf.bind(null, e);
    return t.type = e, t
};
Y.createRef = function() {
    return {
        current: null
    }
};
Y.forwardRef = function(e) {
    return {
        $$typeof: Vg,
        render: e
    }
};
Y.isValidElement = Xa;
Y.lazy = function(e) {
    return {
        $$typeof: Qg,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: Xg
    }
};
Y.memo = function(e, t) {
    return {
        $$typeof: Wg,
        type: e,
        compare: t === void 0 ? null : t
    }
};
Y.startTransition = function(e) {
    var t = ji.transition;
    ji.transition = {};
    try {
        e()
    } finally {
        ji.transition = t
    }
};
Y.unstable_act = kf;
Y.useCallback = function(e, t) {
    return De.current.useCallback(e, t)
};
Y.useContext = function(e) {
    return De.current.useContext(e)
};
Y.useDebugValue = function() {};
Y.useDeferredValue = function(e) {
    return De.current.useDeferredValue(e)
};
Y.useEffect = function(e, t) {
    return De.current.useEffect(e, t)
};
Y.useId = function() {
    return De.current.useId()
};
Y.useImperativeHandle = function(e, t, n) {
    return De.current.useImperativeHandle(e, t, n)
};
Y.useInsertionEffect = function(e, t) {
    return De.current.useInsertionEffect(e, t)
};
Y.useLayoutEffect = function(e, t) {
    return De.current.useLayoutEffect(e, t)
};
Y.useMemo = function(e, t) {
    return De.current.useMemo(e, t)
};
Y.useReducer = function(e, t, n) {
    return De.current.useReducer(e, t, n)
};
Y.useRef = function(e) {
    return De.current.useRef(e)
};
Y.useState = function(e) {
    return De.current.useState(e)
};
Y.useSyncExternalStore = function(e, t, n) {
    return De.current.useSyncExternalStore(e, t, n)
};
Y.useTransition = function() {
    return De.current.useTransition()
};
Y.version = "18.3.1";
gf.exports = Y;
var g = gf.exports;
const j = hf(g),
    Jg = Dg({
        __proto__: null,
        default: j
    }, [g]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zg = g,
    ev = Symbol.for("react.element"),
    tv = Symbol.for("react.fragment"),
    nv = Object.prototype.hasOwnProperty,
    rv = Zg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    ov = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function bf(e, t, n) {
    var r, o = {},
        i = null,
        s = null;
    n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
    for (r in t) nv.call(t, r) && !ov.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
    return {
        $$typeof: ev,
        type: e,
        key: i,
        ref: s,
        props: o,
        _owner: rv.current
    }
}
Ss.Fragment = tv;
Ss.jsx = bf;
Ss.jsxs = bf;
mf.exports = Ss;
var y = mf.exports,
    Pf = {
        exports: {}
    },
    tt = {},
    Nf = {
        exports: {}
    },
    Tf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(b, O) {
        var F = b.length;
        b.push(O);
        e: for (; 0 < F;) {
            var D = F - 1 >>> 1,
                z = b[D];
            if (0 < o(z, O)) b[D] = O, b[F] = z, F = D;
            else break e
        }
    }

    function n(b) {
        return b.length === 0 ? null : b[0]
    }

    function r(b) {
        if (b.length === 0) return null;
        var O = b[0],
            F = b.pop();
        if (F !== O) {
            b[0] = F;
            e: for (var D = 0, z = b.length, G = z >>> 1; D < G;) {
                var le = 2 * (D + 1) - 1,
                    We = b[le],
                    J = le + 1,
                    ct = b[J];
                if (0 > o(We, F)) J < z && 0 > o(ct, We) ? (b[D] = ct, b[J] = F, D = J) : (b[D] = We, b[le] = F, D = le);
                else if (J < z && 0 > o(ct, F)) b[D] = ct, b[J] = F, D = J;
                else break e
            }
        }
        return O
    }

    function o(b, O) {
        var F = b.sortIndex - O.sortIndex;
        return F !== 0 ? F : b.id - O.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        e.unstable_now = function() {
            return i.now()
        }
    } else {
        var s = Date,
            l = s.now();
        e.unstable_now = function() {
            return s.now() - l
        }
    }
    var a = [],
        u = [],
        d = 1,
        f = null,
        c = 3,
        v = !1,
        x = !1,
        w = !1,
        E = typeof setTimeout == "function" ? setTimeout : null,
        h = typeof clearTimeout == "function" ? clearTimeout : null,
        p = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function m(b) {
        for (var O = n(u); O !== null;) {
            if (O.callback === null) r(u);
            else if (O.startTime <= b) r(u), O.sortIndex = O.expirationTime, t(a, O);
            else break;
            O = n(u)
        }
    }

    function S(b) {
        if (w = !1, m(b), !x)
            if (n(a) !== null) x = !0, U(C);
            else {
                var O = n(u);
                O !== null && K(S, O.startTime - b)
            }
    }

    function C(b, O) {
        x = !1, w && (w = !1, h(N), N = -1), v = !0;
        var F = c;
        try {
            for (m(O), f = n(a); f !== null && (!(f.expirationTime > O) || b && !$());) {
                var D = f.callback;
                if (typeof D == "function") {
                    f.callback = null, c = f.priorityLevel;
                    var z = D(f.expirationTime <= O);
                    O = e.unstable_now(), typeof z == "function" ? f.callback = z : f === n(a) && r(a), m(O)
                } else r(a);
                f = n(a)
            }
            if (f !== null) var G = !0;
            else {
                var le = n(u);
                le !== null && K(S, le.startTime - O), G = !1
            }
            return G
        } finally {
            f = null, c = F, v = !1
        }
    }
    var P = !1,
        k = null,
        N = -1,
        M = 5,
        A = -1;

    function $() {
        return !(e.unstable_now() - A < M)
    }

    function I() {
        if (k !== null) {
            var b = e.unstable_now();
            A = b;
            var O = !0;
            try {
                O = k(!0, b)
            } finally {
                O ? W() : (P = !1, k = null)
            }
        } else P = !1
    }
    var W;
    if (typeof p == "function") W = function() {
        p(I)
    };
    else if (typeof MessageChannel < "u") {
        var _ = new MessageChannel,
            Q = _.port2;
        _.port1.onmessage = I, W = function() {
            Q.postMessage(null)
        }
    } else W = function() {
        E(I, 0)
    };

    function U(b) {
        k = b, P || (P = !0, W())
    }

    function K(b, O) {
        N = E(function() {
            b(e.unstable_now())
        }, O)
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(b) {
        b.callback = null
    }, e.unstable_continueExecution = function() {
        x || v || (x = !0, U(C))
    }, e.unstable_forceFrameRate = function(b) {
        0 > b || 125 < b ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : M = 0 < b ? Math.floor(1e3 / b) : 5
    }, e.unstable_getCurrentPriorityLevel = function() {
        return c
    }, e.unstable_getFirstCallbackNode = function() {
        return n(a)
    }, e.unstable_next = function(b) {
        switch (c) {
            case 1:
            case 2:
            case 3:
                var O = 3;
                break;
            default:
                O = c
        }
        var F = c;
        c = O;
        try {
            return b()
        } finally {
            c = F
        }
    }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(b, O) {
        switch (b) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                b = 3
        }
        var F = c;
        c = b;
        try {
            return O()
        } finally {
            c = F
        }
    }, e.unstable_scheduleCallback = function(b, O, F) {
        var D = e.unstable_now();
        switch (typeof F == "object" && F !== null ? (F = F.delay, F = typeof F == "number" && 0 < F ? D + F : D) : F = D, b) {
            case 1:
                var z = -1;
                break;
            case 2:
                z = 250;
                break;
            case 5:
                z = 1073741823;
                break;
            case 4:
                z = 1e4;
                break;
            default:
                z = 5e3
        }
        return z = F + z, b = {
            id: d++,
            callback: O,
            priorityLevel: b,
            startTime: F,
            expirationTime: z,
            sortIndex: -1
        }, F > D ? (b.sortIndex = F, t(u, b), n(a) === null && b === n(u) && (w ? (h(N), N = -1) : w = !0, K(S, F - D))) : (b.sortIndex = z, t(a, b), x || v || (x = !0, U(C))), b
    }, e.unstable_shouldYield = $, e.unstable_wrapCallback = function(b) {
        var O = c;
        return function() {
            var F = c;
            c = O;
            try {
                return b.apply(this, arguments)
            } finally {
                c = F
            }
        }
    }
})(Tf);
Nf.exports = Tf;
var iv = Nf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sv = g,
    Ze = iv;

function R(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Rf = new Set,
    Po = {};

function er(e, t) {
    Ir(e, t), Ir(e + "Capture", t)
}

function Ir(e, t) {
    for (Po[e] = t, e = 0; e < t.length; e++) Rf.add(t[e])
}
var Vt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    Dl = Object.prototype.hasOwnProperty,
    lv = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    pc = {},
    hc = {};

function av(e) {
    return Dl.call(hc, e) ? !0 : Dl.call(pc, e) ? !1 : lv.test(e) ? hc[e] = !0 : (pc[e] = !0, !1)
}

function uv(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}

function cv(e, t, n, r) {
    if (t === null || typeof t > "u" || uv(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
    }
    return !1
}

function Ie(e, t, n, r, o, i, s) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = s
}
var be = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    be[e] = new Ie(e, 0, !1, e, null, !1, !1)
});
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
].forEach(function(e) {
    var t = e[0];
    be[t] = new Ie(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    be[e] = new Ie(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    be[e] = new Ie(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    be[e] = new Ie(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    be[e] = new Ie(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function(e) {
    be[e] = new Ie(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    be[e] = new Ie(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function(e) {
    be[e] = new Ie(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var qa = /[\-:]([a-z])/g;

function Ja(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(qa, Ja);
    be[t] = new Ie(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(qa, Ja);
    be[t] = new Ie(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(qa, Ja);
    be[t] = new Ie(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    be[e] = new Ie(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
be.xlinkHref = new Ie("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
    be[e] = new Ie(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function Za(e, t, n, r) {
    var o = be.hasOwnProperty(t) ? be[t] : null;
    (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (cv(t, n, o, r) && (n = null), r || o === null ? av(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Gt = sv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    ai = Symbol.for("react.element"),
    lr = Symbol.for("react.portal"),
    ar = Symbol.for("react.fragment"),
    eu = Symbol.for("react.strict_mode"),
    Il = Symbol.for("react.profiler"),
    Of = Symbol.for("react.provider"),
    jf = Symbol.for("react.context"),
    tu = Symbol.for("react.forward_ref"),
    Fl = Symbol.for("react.suspense"),
    zl = Symbol.for("react.suspense_list"),
    nu = Symbol.for("react.memo"),
    sn = Symbol.for("react.lazy"),
    Af = Symbol.for("react.offscreen"),
    mc = Symbol.iterator;

function eo(e) {
    return e === null || typeof e != "object" ? null : (e = mc && e[mc] || e["@@iterator"], typeof e == "function" ? e : null)
}
var ce = Object.assign,
    ol;

function co(e) {
    if (ol === void 0) try {
        throw Error()
    } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        ol = t && t[1] || ""
    }
    return `
` + ol + e
}
var il = !1;

function sl(e, t) {
    if (!e || il) return "";
    il = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                    throw Error()
                }, Object.defineProperty(t.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var o = u.stack.split(`
`), i = r.stack.split(`
`), s = o.length - 1, l = i.length - 1; 1 <= s && 0 <= l && o[s] !== i[l];) l--;
            for (; 1 <= s && 0 <= l; s--, l--)
                if (o[s] !== i[l]) {
                    if (s !== 1 || l !== 1)
                        do
                            if (s--, l--, 0 > l || o[s] !== i[l]) {
                                var a = `
` + o[s].replace(" at new ", " at ");
                                return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)), a
                            }
                    while (1 <= s && 0 <= l);
                    break
                }
        }
    } finally {
        il = !1, Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? co(e) : ""
}

function dv(e) {
    switch (e.tag) {
        case 5:
            return co(e.type);
        case 16:
            return co("Lazy");
        case 13:
            return co("Suspense");
        case 19:
            return co("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = sl(e.type, !1), e;
        case 11:
            return e = sl(e.type.render, !1), e;
        case 1:
            return e = sl(e.type, !0), e;
        default:
            return ""
    }
}

function $l(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case ar:
            return "Fragment";
        case lr:
            return "Portal";
        case Il:
            return "Profiler";
        case eu:
            return "StrictMode";
        case Fl:
            return "Suspense";
        case zl:
            return "SuspenseList"
    }
    if (typeof e == "object") switch (e.$$typeof) {
        case jf:
            return (e.displayName || "Context") + ".Consumer";
        case Of:
            return (e._context.displayName || "Context") + ".Provider";
        case tu:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case nu:
            return t = e.displayName || null, t !== null ? t : $l(e.type) || "Memo";
        case sn:
            t = e._payload, e = e._init;
            try {
                return $l(e(t))
            } catch {}
    }
    return null
}

function fv(e) {
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
            return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
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
            return $l(t);
        case 8:
            return t === eu ? "StrictMode" : "Mode";
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
            if (typeof t == "string") return t
    }
    return null
}

function Pn(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
    }
}

function _f(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function pv(e) {
    var t = _f(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var o = n.get,
            i = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return o.call(this)
            },
            set: function(s) {
                r = "" + s, i.call(this, s)
            }
        }), Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }), {
            getValue: function() {
                return r
            },
            setValue: function(s) {
                r = "" + s
            },
            stopTracking: function() {
                e._valueTracker = null, delete e[t]
            }
        }
    }
}

function ui(e) {
    e._valueTracker || (e._valueTracker = pv(e))
}

function Lf(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = _f(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function Wi(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}

function Ul(e, t) {
    var n = t.checked;
    return ce({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ? ? e._wrapperState.initialChecked
    })
}

function gc(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    n = Pn(t.value != null ? t.value : n), e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}

function Mf(e, t) {
    t = t.checked, t != null && Za(e, "checked", t, !1)
}

function Bl(e, t) {
    Mf(e, t);
    var n = Pn(t.value),
        r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Vl(e, t.type, n) : t.hasOwnProperty("defaultValue") && Vl(e, t.type, Pn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function vc(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function Vl(e, t, n) {
    (t !== "number" || Wi(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var fo = Array.isArray;

function wr(e, t, n, r) {
    if (e = e.options, t) {
        t = {};
        for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + Pn(n), t = null, o = 0; o < e.length; o++) {
            if (e[o].value === n) {
                e[o].selected = !0, r && (e[o].defaultSelected = !0);
                return
            }
            t !== null || e[o].disabled || (t = e[o])
        }
        t !== null && (t.selected = !0)
    }
}

function Hl(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(R(91));
    return ce({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}

function yc(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children, t = t.defaultValue, n != null) {
            if (t != null) throw Error(R(92));
            if (fo(n)) {
                if (1 < n.length) throw Error(R(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""), n = t
    }
    e._wrapperState = {
        initialValue: Pn(n)
    }
}

function Df(e, t) {
    var n = Pn(t.value),
        r = Pn(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function wc(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function If(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function Wl(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? If(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var ci, Ff = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, o)
        })
    } : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
        for (ci = ci || document.createElement("div"), ci.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ci.firstChild; e.firstChild;) e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild)
    }
});

function No(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var mo = {
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
        strokeWidth: !0
    },
    hv = ["Webkit", "ms", "Moz", "O"];
Object.keys(mo).forEach(function(e) {
    hv.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), mo[t] = mo[e]
    })
});

function zf(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || mo.hasOwnProperty(e) && mo[e] ? ("" + t).trim() : t + "px"
}

function $f(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                o = zf(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o
        }
}
var mv = ce({
    menuitem: !0
}, {
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
    wbr: !0
});

function Ql(e, t) {
    if (t) {
        if (mv[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(R(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(R(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(R(61))
        }
        if (t.style != null && typeof t.style != "object") throw Error(R(62))
    }
}

function Kl(e, t) {
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
            return !0
    }
}
var Yl = null;

function ru(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var Gl = null,
    xr = null,
    Er = null;

function xc(e) {
    if (e = Zo(e)) {
        if (typeof Gl != "function") throw Error(R(280));
        var t = e.stateNode;
        t && (t = Ns(t), Gl(e.stateNode, e.type, t))
    }
}

function Uf(e) {
    xr ? Er ? Er.push(e) : Er = [e] : xr = e
}

function Bf() {
    if (xr) {
        var e = xr,
            t = Er;
        if (Er = xr = null, xc(e), t)
            for (e = 0; e < t.length; e++) xc(t[e])
    }
}

function Vf(e, t) {
    return e(t)
}

function Hf() {}
var ll = !1;

function Wf(e, t, n) {
    if (ll) return e(t, n);
    ll = !0;
    try {
        return Vf(e, t, n)
    } finally {
        ll = !1, (xr !== null || Er !== null) && (Hf(), Bf())
    }
}

function To(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Ns(n);
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
            (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
            break e;
        default:
            e = !1
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(R(231, t, typeof n));
    return n
}
var Xl = !1;
if (Vt) try {
    var to = {};
    Object.defineProperty(to, "passive", {
        get: function() {
            Xl = !0
        }
    }), window.addEventListener("test", to, to), window.removeEventListener("test", to, to)
} catch {
    Xl = !1
}

function gv(e, t, n, r, o, i, s, l, a) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (d) {
        this.onError(d)
    }
}
var go = !1,
    Qi = null,
    Ki = !1,
    ql = null,
    vv = {
        onError: function(e) {
            go = !0, Qi = e
        }
    };

function yv(e, t, n, r, o, i, s, l, a) {
    go = !1, Qi = null, gv.apply(vv, arguments)
}

function wv(e, t, n, r, o, i, s, l, a) {
    if (yv.apply(this, arguments), go) {
        if (go) {
            var u = Qi;
            go = !1, Qi = null
        } else throw Error(R(198));
        Ki || (Ki = !0, ql = u)
    }
}

function tr(e) {
    var t = e,
        n = e;
    if (e.alternate)
        for (; t.return;) t = t.return;
    else {
        e = t;
        do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
    }
    return t.tag === 3 ? n : null
}

function Qf(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
    }
    return null
}

function Ec(e) {
    if (tr(e) !== e) throw Error(R(188))
}

function xv(e) {
    var t = e.alternate;
    if (!t) {
        if (t = tr(e), t === null) throw Error(R(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t;;) {
        var o = n.return;
        if (o === null) break;
        var i = o.alternate;
        if (i === null) {
            if (r = o.return, r !== null) {
                n = r;
                continue
            }
            break
        }
        if (o.child === i.child) {
            for (i = o.child; i;) {
                if (i === n) return Ec(o), e;
                if (i === r) return Ec(o), t;
                i = i.sibling
            }
            throw Error(R(188))
        }
        if (n.return !== r.return) n = o, r = i;
        else {
            for (var s = !1, l = o.child; l;) {
                if (l === n) {
                    s = !0, n = o, r = i;
                    break
                }
                if (l === r) {
                    s = !0, r = o, n = i;
                    break
                }
                l = l.sibling
            }
            if (!s) {
                for (l = i.child; l;) {
                    if (l === n) {
                        s = !0, n = i, r = o;
                        break
                    }
                    if (l === r) {
                        s = !0, r = i, n = o;
                        break
                    }
                    l = l.sibling
                }
                if (!s) throw Error(R(189))
            }
        }
        if (n.alternate !== r) throw Error(R(190))
    }
    if (n.tag !== 3) throw Error(R(188));
    return n.stateNode.current === n ? e : t
}

function Kf(e) {
    return e = xv(e), e !== null ? Yf(e) : null
}

function Yf(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
        var t = Yf(e);
        if (t !== null) return t;
        e = e.sibling
    }
    return null
}
var Gf = Ze.unstable_scheduleCallback,
    Sc = Ze.unstable_cancelCallback,
    Ev = Ze.unstable_shouldYield,
    Sv = Ze.unstable_requestPaint,
    he = Ze.unstable_now,
    Cv = Ze.unstable_getCurrentPriorityLevel,
    ou = Ze.unstable_ImmediatePriority,
    Xf = Ze.unstable_UserBlockingPriority,
    Yi = Ze.unstable_NormalPriority,
    kv = Ze.unstable_LowPriority,
    qf = Ze.unstable_IdlePriority,
    Cs = null,
    jt = null;

function bv(e) {
    if (jt && typeof jt.onCommitFiberRoot == "function") try {
        jt.onCommitFiberRoot(Cs, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var vt = Math.clz32 ? Math.clz32 : Tv,
    Pv = Math.log,
    Nv = Math.LN2;

function Tv(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Pv(e) / Nv | 0) | 0
}
var di = 64,
    fi = 4194304;

function po(e) {
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
            return e
    }
}

function Gi(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        o = e.suspendedLanes,
        i = e.pingedLanes,
        s = n & 268435455;
    if (s !== 0) {
        var l = s & ~o;
        l !== 0 ? r = po(l) : (i &= s, i !== 0 && (r = po(i)))
    } else s = n & ~o, s !== 0 ? r = po(s) : i !== 0 && (r = po(i));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
        for (e = e.entanglements, t &= r; 0 < t;) n = 31 - vt(t), o = 1 << n, r |= e[n], t &= ~o;
    return r
}

function Rv(e, t) {
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
            return -1
    }
}

function Ov(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i;) {
        var s = 31 - vt(i),
            l = 1 << s,
            a = o[s];
        a === -1 ? (!(l & n) || l & r) && (o[s] = Rv(l, t)) : a <= t && (e.expiredLanes |= l), i &= ~l
    }
}

function Jl(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function Jf() {
    var e = di;
    return di <<= 1, !(di & 4194240) && (di = 64), e
}

function al(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t
}

function qo(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - vt(t), e[t] = n
}

function jv(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
        var o = 31 - vt(n),
            i = 1 << o;
        t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i
    }
}

function iu(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - vt(n),
            o = 1 << r;
        o & t | e[r] & t && (e[r] |= t), n &= ~o
    }
}
var Z = 0;

function Zf(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var ep, su, tp, np, rp, Zl = !1,
    pi = [],
    yn = null,
    wn = null,
    xn = null,
    Ro = new Map,
    Oo = new Map,
    an = [],
    Av = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function Cc(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            yn = null;
            break;
        case "dragenter":
        case "dragleave":
            wn = null;
            break;
        case "mouseover":
        case "mouseout":
            xn = null;
            break;
        case "pointerover":
        case "pointerout":
            Ro.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Oo.delete(t.pointerId)
    }
}

function no(e, t, n, r, o, i) {
    return e === null || e.nativeEvent !== i ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o]
    }, t !== null && (t = Zo(t), t !== null && su(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e)
}

function _v(e, t, n, r, o) {
    switch (t) {
        case "focusin":
            return yn = no(yn, e, t, n, r, o), !0;
        case "dragenter":
            return wn = no(wn, e, t, n, r, o), !0;
        case "mouseover":
            return xn = no(xn, e, t, n, r, o), !0;
        case "pointerover":
            var i = o.pointerId;
            return Ro.set(i, no(Ro.get(i) || null, e, t, n, r, o)), !0;
        case "gotpointercapture":
            return i = o.pointerId, Oo.set(i, no(Oo.get(i) || null, e, t, n, r, o)), !0
    }
    return !1
}

function op(e) {
    var t = Fn(e.target);
    if (t !== null) {
        var n = tr(t);
        if (n !== null) {
            if (t = n.tag, t === 13) {
                if (t = Qf(n), t !== null) {
                    e.blockedOn = t, rp(e.priority, function() {
                        tp(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}

function Ai(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = ea(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            Yl = r, n.target.dispatchEvent(r), Yl = null
        } else return t = Zo(n), t !== null && su(t), e.blockedOn = n, !1;
        t.shift()
    }
    return !0
}

function kc(e, t, n) {
    Ai(e) && n.delete(t)
}

function Lv() {
    Zl = !1, yn !== null && Ai(yn) && (yn = null), wn !== null && Ai(wn) && (wn = null), xn !== null && Ai(xn) && (xn = null), Ro.forEach(kc), Oo.forEach(kc)
}

function ro(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Zl || (Zl = !0, Ze.unstable_scheduleCallback(Ze.unstable_NormalPriority, Lv)))
}

function jo(e) {
    function t(o) {
        return ro(o, e)
    }
    if (0 < pi.length) {
        ro(pi[0], e);
        for (var n = 1; n < pi.length; n++) {
            var r = pi[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (yn !== null && ro(yn, e), wn !== null && ro(wn, e), xn !== null && ro(xn, e), Ro.forEach(t), Oo.forEach(t), n = 0; n < an.length; n++) r = an[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < an.length && (n = an[0], n.blockedOn === null);) op(n), n.blockedOn === null && an.shift()
}
var Sr = Gt.ReactCurrentBatchConfig,
    Xi = !0;

function Mv(e, t, n, r) {
    var o = Z,
        i = Sr.transition;
    Sr.transition = null;
    try {
        Z = 1, lu(e, t, n, r)
    } finally {
        Z = o, Sr.transition = i
    }
}

function Dv(e, t, n, r) {
    var o = Z,
        i = Sr.transition;
    Sr.transition = null;
    try {
        Z = 4, lu(e, t, n, r)
    } finally {
        Z = o, Sr.transition = i
    }
}

function lu(e, t, n, r) {
    if (Xi) {
        var o = ea(e, t, n, r);
        if (o === null) yl(e, t, r, qi, n), Cc(e, r);
        else if (_v(o, e, t, n, r)) r.stopPropagation();
        else if (Cc(e, r), t & 4 && -1 < Av.indexOf(e)) {
            for (; o !== null;) {
                var i = Zo(o);
                if (i !== null && ep(i), i = ea(e, t, n, r), i === null && yl(e, t, r, qi, n), i === o) break;
                o = i
            }
            o !== null && r.stopPropagation()
        } else yl(e, t, r, null, n)
    }
}
var qi = null;

function ea(e, t, n, r) {
    if (qi = null, e = ru(r), e = Fn(e), e !== null)
        if (t = tr(e), t === null) e = null;
        else if (n = t.tag, n === 13) {
        if (e = Qf(t), e !== null) return e;
        e = null
    } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null
    } else t !== e && (e = null);
    return qi = e, null
}

function ip(e) {
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
            switch (Cv()) {
                case ou:
                    return 1;
                case Xf:
                    return 4;
                case Yi:
                case kv:
                    return 16;
                case qf:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var mn = null,
    au = null,
    _i = null;

function sp() {
    if (_i) return _i;
    var e, t = au,
        n = t.length,
        r, o = "value" in mn ? mn.value : mn.textContent,
        i = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++);
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
    return _i = o.slice(e, 1 < r ? 1 - r : void 0)
}

function Li(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function hi() {
    return !0
}

function bc() {
    return !1
}

function nt(e) {
    function t(n, r, o, i, s) {
        this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = s, this.currentTarget = null;
        for (var l in e) e.hasOwnProperty(l) && (n = e[l], this[l] = n ? n(i) : i[l]);
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? hi : bc, this.isPropagationStopped = bc, this
    }
    return ce(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = hi)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = hi)
        },
        persist: function() {},
        isPersistent: hi
    }), t
}
var Kr = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    },
    uu = nt(Kr),
    Jo = ce({}, Kr, {
        view: 0,
        detail: 0
    }),
    Iv = nt(Jo),
    ul, cl, oo, ks = ce({}, Jo, {
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
        getModifierState: cu,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== oo && (oo && e.type === "mousemove" ? (ul = e.screenX - oo.screenX, cl = e.screenY - oo.screenY) : cl = ul = 0, oo = e), ul)
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : cl
        }
    }),
    Pc = nt(ks),
    Fv = ce({}, ks, {
        dataTransfer: 0
    }),
    zv = nt(Fv),
    $v = ce({}, Jo, {
        relatedTarget: 0
    }),
    dl = nt($v),
    Uv = ce({}, Kr, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    Bv = nt(Uv),
    Vv = ce({}, Kr, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }),
    Hv = nt(Vv),
    Wv = ce({}, Kr, {
        data: 0
    }),
    Nc = nt(Wv),
    Qv = {
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
        MozPrintableKey: "Unidentified"
    },
    Kv = {
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
        224: "Meta"
    },
    Yv = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };

function Gv(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Yv[e]) ? !!t[e] : !1
}

function cu() {
    return Gv
}
var Xv = ce({}, Jo, {
        key: function(e) {
            if (e.key) {
                var t = Qv[e.key] || e.key;
                if (t !== "Unidentified") return t
            }
            return e.type === "keypress" ? (e = Li(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Kv[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: cu,
        charCode: function(e) {
            return e.type === "keypress" ? Li(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? Li(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    }),
    qv = nt(Xv),
    Jv = ce({}, ks, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    }),
    Tc = nt(Jv),
    Zv = ce({}, Jo, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: cu
    }),
    ey = nt(Zv),
    ty = ce({}, Kr, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    ny = nt(ty),
    ry = ce({}, ks, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    }),
    oy = nt(ry),
    iy = [9, 13, 27, 32],
    du = Vt && "CompositionEvent" in window,
    vo = null;
Vt && "documentMode" in document && (vo = document.documentMode);
var sy = Vt && "TextEvent" in window && !vo,
    lp = Vt && (!du || vo && 8 < vo && 11 >= vo),
    Rc = " ",
    Oc = !1;

function ap(e, t) {
    switch (e) {
        case "keyup":
            return iy.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}

function up(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var ur = !1;

function ly(e, t) {
    switch (e) {
        case "compositionend":
            return up(t);
        case "keypress":
            return t.which !== 32 ? null : (Oc = !0, Rc);
        case "textInput":
            return e = t.data, e === Rc && Oc ? null : e;
        default:
            return null
    }
}

function ay(e, t) {
    if (ur) return e === "compositionend" || !du && ap(e, t) ? (e = sp(), _i = au = mn = null, ur = !1, e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return lp && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}
var uy = {
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
    week: !0
};

function jc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!uy[e.type] : t === "textarea"
}

function cp(e, t, n, r) {
    Uf(r), t = Ji(t, "onChange"), 0 < t.length && (n = new uu("onChange", "change", null, n, r), e.push({
        event: n,
        listeners: t
    }))
}
var yo = null,
    Ao = null;

function cy(e) {
    Ep(e, 0)
}

function bs(e) {
    var t = fr(e);
    if (Lf(t)) return e
}

function dy(e, t) {
    if (e === "change") return t
}
var dp = !1;
if (Vt) {
    var fl;
    if (Vt) {
        var pl = "oninput" in document;
        if (!pl) {
            var Ac = document.createElement("div");
            Ac.setAttribute("oninput", "return;"), pl = typeof Ac.oninput == "function"
        }
        fl = pl
    } else fl = !1;
    dp = fl && (!document.documentMode || 9 < document.documentMode)
}

function _c() {
    yo && (yo.detachEvent("onpropertychange", fp), Ao = yo = null)
}

function fp(e) {
    if (e.propertyName === "value" && bs(Ao)) {
        var t = [];
        cp(t, Ao, e, ru(e)), Wf(cy, t)
    }
}

function fy(e, t, n) {
    e === "focusin" ? (_c(), yo = t, Ao = n, yo.attachEvent("onpropertychange", fp)) : e === "focusout" && _c()
}

function py(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return bs(Ao)
}

function hy(e, t) {
    if (e === "click") return bs(t)
}

function my(e, t) {
    if (e === "input" || e === "change") return bs(t)
}

function gy(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var wt = typeof Object.is == "function" ? Object.is : gy;

function _o(e, t) {
    if (wt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var o = n[r];
        if (!Dl.call(t, o) || !wt(e[o], t[o])) return !1
    }
    return !0
}

function Lc(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
}

function Mc(e, t) {
    var n = Lc(e);
    e = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length, e <= t && r >= t) return {
                node: n,
                offset: t - e
            };
            e = r
        }
        e: {
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Lc(n)
    }
}

function pp(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? pp(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function hp() {
    for (var e = window, t = Wi(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n) e = t.contentWindow;
        else break;
        t = Wi(e.document)
    }
    return t
}

function fu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function vy(e) {
    var t = hp(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && pp(n.ownerDocument.documentElement, n)) {
        if (r !== null && fu(n)) {
            if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                e = e.getSelection();
                var o = n.textContent.length,
                    i = Math.min(r.start, o);
                r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = Mc(n, i);
                var s = Mc(n, r);
                o && s && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)))
            }
        }
        for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
        });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
    }
}
var yy = Vt && "documentMode" in document && 11 >= document.documentMode,
    cr = null,
    ta = null,
    wo = null,
    na = !1;

function Dc(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    na || cr == null || cr !== Wi(r) || (r = cr, "selectionStart" in r && fu(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }), wo && _o(wo, r) || (wo = r, r = Ji(ta, "onSelect"), 0 < r.length && (t = new uu("onSelect", "select", null, t, n), e.push({
        event: t,
        listeners: r
    }), t.target = cr)))
}

function mi(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}
var dr = {
        animationend: mi("Animation", "AnimationEnd"),
        animationiteration: mi("Animation", "AnimationIteration"),
        animationstart: mi("Animation", "AnimationStart"),
        transitionend: mi("Transition", "TransitionEnd")
    },
    hl = {},
    mp = {};
Vt && (mp = document.createElement("div").style, "AnimationEvent" in window || (delete dr.animationend.animation, delete dr.animationiteration.animation, delete dr.animationstart.animation), "TransitionEvent" in window || delete dr.transitionend.transition);

function Ps(e) {
    if (hl[e]) return hl[e];
    if (!dr[e]) return e;
    var t = dr[e],
        n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in mp) return hl[e] = t[n];
    return e
}
var gp = Ps("animationend"),
    vp = Ps("animationiteration"),
    yp = Ps("animationstart"),
    wp = Ps("transitionend"),
    xp = new Map,
    Ic = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function An(e, t) {
    xp.set(e, t), er(t, [e])
}
for (var ml = 0; ml < Ic.length; ml++) {
    var gl = Ic[ml],
        wy = gl.toLowerCase(),
        xy = gl[0].toUpperCase() + gl.slice(1);
    An(wy, "on" + xy)
}
An(gp, "onAnimationEnd");
An(vp, "onAnimationIteration");
An(yp, "onAnimationStart");
An("dblclick", "onDoubleClick");
An("focusin", "onFocus");
An("focusout", "onBlur");
An(wp, "onTransitionEnd");
Ir("onMouseEnter", ["mouseout", "mouseover"]);
Ir("onMouseLeave", ["mouseout", "mouseover"]);
Ir("onPointerEnter", ["pointerout", "pointerover"]);
Ir("onPointerLeave", ["pointerout", "pointerover"]);
er("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
er("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
er("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
er("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
er("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
er("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var ho = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    Ey = new Set("cancel close invalid load scroll toggle".split(" ").concat(ho));

function Fc(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, wv(r, t, void 0, e), e.currentTarget = null
}

function Ep(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            o = r.event;
        r = r.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var s = r.length - 1; 0 <= s; s--) {
                    var l = r[s],
                        a = l.instance,
                        u = l.currentTarget;
                    if (l = l.listener, a !== i && o.isPropagationStopped()) break e;
                    Fc(o, l, u), i = a
                } else
                    for (s = 0; s < r.length; s++) {
                        if (l = r[s], a = l.instance, u = l.currentTarget, l = l.listener, a !== i && o.isPropagationStopped()) break e;
                        Fc(o, l, u), i = a
                    }
        }
    }
    if (Ki) throw e = ql, Ki = !1, ql = null, e
}

function oe(e, t) {
    var n = t[la];
    n === void 0 && (n = t[la] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Sp(t, e, 2, !1), n.add(r))
}

function vl(e, t, n) {
    var r = 0;
    t && (r |= 4), Sp(n, e, r, t)
}
var gi = "_reactListening" + Math.random().toString(36).slice(2);

function Lo(e) {
    if (!e[gi]) {
        e[gi] = !0, Rf.forEach(function(n) {
            n !== "selectionchange" && (Ey.has(n) || vl(n, !1, e), vl(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[gi] || (t[gi] = !0, vl("selectionchange", !1, t))
    }
}

function Sp(e, t, n, r) {
    switch (ip(t)) {
        case 1:
            var o = Mv;
            break;
        case 4:
            o = Dv;
            break;
        default:
            o = lu
    }
    n = o.bind(null, t, n, e), o = void 0, !Xl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: o
    }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
        passive: o
    }) : e.addEventListener(t, n, !1)
}

function yl(e, t, n, r, o) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null) e: for (;;) {
        if (r === null) return;
        var s = r.tag;
        if (s === 3 || s === 4) {
            var l = r.stateNode.containerInfo;
            if (l === o || l.nodeType === 8 && l.parentNode === o) break;
            if (s === 4)
                for (s = r.return; s !== null;) {
                    var a = s.tag;
                    if ((a === 3 || a === 4) && (a = s.stateNode.containerInfo, a === o || a.nodeType === 8 && a.parentNode === o)) return;
                    s = s.return
                }
            for (; l !== null;) {
                if (s = Fn(l), s === null) return;
                if (a = s.tag, a === 5 || a === 6) {
                    r = i = s;
                    continue e
                }
                l = l.parentNode
            }
        }
        r = r.return
    }
    Wf(function() {
        var u = i,
            d = ru(n),
            f = [];
        e: {
            var c = xp.get(e);
            if (c !== void 0) {
                var v = uu,
                    x = e;
                switch (e) {
                    case "keypress":
                        if (Li(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        v = qv;
                        break;
                    case "focusin":
                        x = "focus", v = dl;
                        break;
                    case "focusout":
                        x = "blur", v = dl;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        v = dl;
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
                        v = Pc;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        v = zv;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        v = ey;
                        break;
                    case gp:
                    case vp:
                    case yp:
                        v = Bv;
                        break;
                    case wp:
                        v = ny;
                        break;
                    case "scroll":
                        v = Iv;
                        break;
                    case "wheel":
                        v = oy;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        v = Hv;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        v = Tc
                }
                var w = (t & 4) !== 0,
                    E = !w && e === "scroll",
                    h = w ? c !== null ? c + "Capture" : null : c;
                w = [];
                for (var p = u, m; p !== null;) {
                    m = p;
                    var S = m.stateNode;
                    if (m.tag === 5 && S !== null && (m = S, h !== null && (S = To(p, h), S != null && w.push(Mo(p, S, m)))), E) break;
                    p = p.return
                }
                0 < w.length && (c = new v(c, x, null, n, d), f.push({
                    event: c,
                    listeners: w
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (c = e === "mouseover" || e === "pointerover", v = e === "mouseout" || e === "pointerout", c && n !== Yl && (x = n.relatedTarget || n.fromElement) && (Fn(x) || x[Ht])) break e;
                if ((v || c) && (c = d.window === d ? d : (c = d.ownerDocument) ? c.defaultView || c.parentWindow : window, v ? (x = n.relatedTarget || n.toElement, v = u, x = x ? Fn(x) : null, x !== null && (E = tr(x), x !== E || x.tag !== 5 && x.tag !== 6) && (x = null)) : (v = null, x = u), v !== x)) {
                    if (w = Pc, S = "onMouseLeave", h = "onMouseEnter", p = "mouse", (e === "pointerout" || e === "pointerover") && (w = Tc, S = "onPointerLeave", h = "onPointerEnter", p = "pointer"), E = v == null ? c : fr(v), m = x == null ? c : fr(x), c = new w(S, p + "leave", v, n, d), c.target = E, c.relatedTarget = m, S = null, Fn(d) === u && (w = new w(h, p + "enter", x, n, d), w.target = m, w.relatedTarget = E, S = w), E = S, v && x) t: {
                        for (w = v, h = x, p = 0, m = w; m; m = sr(m)) p++;
                        for (m = 0, S = h; S; S = sr(S)) m++;
                        for (; 0 < p - m;) w = sr(w),
                        p--;
                        for (; 0 < m - p;) h = sr(h),
                        m--;
                        for (; p--;) {
                            if (w === h || h !== null && w === h.alternate) break t;
                            w = sr(w), h = sr(h)
                        }
                        w = null
                    }
                    else w = null;
                    v !== null && zc(f, c, v, w, !1), x !== null && E !== null && zc(f, E, x, w, !0)
                }
            }
            e: {
                if (c = u ? fr(u) : window, v = c.nodeName && c.nodeName.toLowerCase(), v === "select" || v === "input" && c.type === "file") var C = dy;
                else if (jc(c))
                    if (dp) C = my;
                    else {
                        C = py;
                        var P = fy
                    }
                else(v = c.nodeName) && v.toLowerCase() === "input" && (c.type === "checkbox" || c.type === "radio") && (C = hy);
                if (C && (C = C(e, u))) {
                    cp(f, C, n, d);
                    break e
                }
                P && P(e, c, u),
                e === "focusout" && (P = c._wrapperState) && P.controlled && c.type === "number" && Vl(c, "number", c.value)
            }
            switch (P = u ? fr(u) : window, e) {
                case "focusin":
                    (jc(P) || P.contentEditable === "true") && (cr = P, ta = u, wo = null);
                    break;
                case "focusout":
                    wo = ta = cr = null;
                    break;
                case "mousedown":
                    na = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    na = !1, Dc(f, n, d);
                    break;
                case "selectionchange":
                    if (yy) break;
                case "keydown":
                case "keyup":
                    Dc(f, n, d)
            }
            var k;
            if (du) e: {
                switch (e) {
                    case "compositionstart":
                        var N = "onCompositionStart";
                        break e;
                    case "compositionend":
                        N = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        N = "onCompositionUpdate";
                        break e
                }
                N = void 0
            }
            else ur ? ap(e, n) && (N = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");N && (lp && n.locale !== "ko" && (ur || N !== "onCompositionStart" ? N === "onCompositionEnd" && ur && (k = sp()) : (mn = d, au = "value" in mn ? mn.value : mn.textContent, ur = !0)), P = Ji(u, N), 0 < P.length && (N = new Nc(N, e, null, n, d), f.push({
                event: N,
                listeners: P
            }), k ? N.data = k : (k = up(n), k !== null && (N.data = k)))),
            (k = sy ? ly(e, n) : ay(e, n)) && (u = Ji(u, "onBeforeInput"), 0 < u.length && (d = new Nc("onBeforeInput", "beforeinput", null, n, d), f.push({
                event: d,
                listeners: u
            }), d.data = k))
        }
        Ep(f, t)
    })
}

function Mo(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}

function Ji(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var o = e,
            i = o.stateNode;
        o.tag === 5 && i !== null && (o = i, i = To(e, n), i != null && r.unshift(Mo(e, i, o)), i = To(e, t), i != null && r.push(Mo(e, i, o))), e = e.return
    }
    return r
}

function sr(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null
}

function zc(e, t, n, r, o) {
    for (var i = t._reactName, s = []; n !== null && n !== r;) {
        var l = n,
            a = l.alternate,
            u = l.stateNode;
        if (a !== null && a === r) break;
        l.tag === 5 && u !== null && (l = u, o ? (a = To(n, i), a != null && s.unshift(Mo(n, a, l))) : o || (a = To(n, i), a != null && s.push(Mo(n, a, l)))), n = n.return
    }
    s.length !== 0 && e.push({
        event: t,
        listeners: s
    })
}
var Sy = /\r\n?/g,
    Cy = /\u0000|\uFFFD/g;

function $c(e) {
    return (typeof e == "string" ? e : "" + e).replace(Sy, `
`).replace(Cy, "")
}

function vi(e, t, n) {
    if (t = $c(t), $c(e) !== t && n) throw Error(R(425))
}

function Zi() {}
var ra = null,
    oa = null;

function ia(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var sa = typeof setTimeout == "function" ? setTimeout : void 0,
    ky = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Uc = typeof Promise == "function" ? Promise : void 0,
    by = typeof queueMicrotask == "function" ? queueMicrotask : typeof Uc < "u" ? function(e) {
        return Uc.resolve(null).then(e).catch(Py)
    } : sa;

function Py(e) {
    setTimeout(function() {
        throw e
    })
}

function wl(e, t) {
    var n = t,
        r = 0;
    do {
        var o = n.nextSibling;
        if (e.removeChild(n), o && o.nodeType === 8)
            if (n = o.data, n === "/$") {
                if (r === 0) {
                    e.removeChild(o), jo(t);
                    return
                }
                r--
            } else n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = o
    } while (n);
    jo(t)
}

function En(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
            if (t === "/$") return null
        }
    }
    return e
}

function Bc(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--
            } else n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var Yr = Math.random().toString(36).slice(2),
    Ot = "__reactFiber$" + Yr,
    Do = "__reactProps$" + Yr,
    Ht = "__reactContainer$" + Yr,
    la = "__reactEvents$" + Yr,
    Ny = "__reactListeners$" + Yr,
    Ty = "__reactHandles$" + Yr;

function Fn(e) {
    var t = e[Ot];
    if (t) return t;
    for (var n = e.parentNode; n;) {
        if (t = n[Ht] || n[Ot]) {
            if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                for (e = Bc(e); e !== null;) {
                    if (n = e[Ot]) return n;
                    e = Bc(e)
                }
            return t
        }
        e = n, n = e.parentNode
    }
    return null
}

function Zo(e) {
    return e = e[Ot] || e[Ht], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function fr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(R(33))
}

function Ns(e) {
    return e[Do] || null
}
var aa = [],
    pr = -1;

function _n(e) {
    return {
        current: e
    }
}

function ie(e) {
    0 > pr || (e.current = aa[pr], aa[pr] = null, pr--)
}

function te(e, t) {
    pr++, aa[pr] = e.current, e.current = t
}
var Nn = {},
    je = _n(Nn),
    $e = _n(!1),
    Yn = Nn;

function Fr(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Nn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var o = {},
        i;
    for (i in n) o[i] = t[i];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o
}

function Ue(e) {
    return e = e.childContextTypes, e != null
}

function es() {
    ie($e), ie(je)
}

function Vc(e, t, n) {
    if (je.current !== Nn) throw Error(R(168));
    te(je, t), te($e, n)
}

function Cp(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var o in r)
        if (!(o in t)) throw Error(R(108, fv(e) || "Unknown", o));
    return ce({}, n, r)
}

function ts(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Nn, Yn = je.current, te(je, e), te($e, $e.current), !0
}

function Hc(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(R(169));
    n ? (e = Cp(e, t, Yn), r.__reactInternalMemoizedMergedChildContext = e, ie($e), ie(je), te(je, e)) : ie($e), te($e, n)
}
var zt = null,
    Ts = !1,
    xl = !1;

function kp(e) {
    zt === null ? zt = [e] : zt.push(e)
}

function Ry(e) {
    Ts = !0, kp(e)
}

function Ln() {
    if (!xl && zt !== null) {
        xl = !0;
        var e = 0,
            t = Z;
        try {
            var n = zt;
            for (Z = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0); while (r !== null)
            }
            zt = null, Ts = !1
        } catch (o) {
            throw zt !== null && (zt = zt.slice(e + 1)), Gf(ou, Ln), o
        } finally {
            Z = t, xl = !1
        }
    }
    return null
}
var hr = [],
    mr = 0,
    ns = null,
    rs = 0,
    ot = [],
    it = 0,
    Gn = null,
    $t = 1,
    Ut = "";

function Dn(e, t) {
    hr[mr++] = rs, hr[mr++] = ns, ns = e, rs = t
}

function bp(e, t, n) {
    ot[it++] = $t, ot[it++] = Ut, ot[it++] = Gn, Gn = e;
    var r = $t;
    e = Ut;
    var o = 32 - vt(r) - 1;
    r &= ~(1 << o), n += 1;
    var i = 32 - vt(t) + o;
    if (30 < i) {
        var s = o - o % 5;
        i = (r & (1 << s) - 1).toString(32), r >>= s, o -= s, $t = 1 << 32 - vt(t) + o | n << o | r, Ut = i + e
    } else $t = 1 << i | n << o | r, Ut = e
}

function pu(e) {
    e.return !== null && (Dn(e, 1), bp(e, 1, 0))
}

function hu(e) {
    for (; e === ns;) ns = hr[--mr], hr[mr] = null, rs = hr[--mr], hr[mr] = null;
    for (; e === Gn;) Gn = ot[--it], ot[it] = null, Ut = ot[--it], ot[it] = null, $t = ot[--it], ot[it] = null
}
var qe = null,
    Xe = null,
    se = !1,
    gt = null;

function Pp(e, t) {
    var n = st(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function Wc(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, qe = e, Xe = En(t.firstChild), !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, qe = e, Xe = null, !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Gn !== null ? {
                id: $t,
                overflow: Ut
            } : null, e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824
            }, n = st(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, qe = e, Xe = null, !0) : !1;
        default:
            return !1
    }
}

function ua(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function ca(e) {
    if (se) {
        var t = Xe;
        if (t) {
            var n = t;
            if (!Wc(e, t)) {
                if (ua(e)) throw Error(R(418));
                t = En(n.nextSibling);
                var r = qe;
                t && Wc(e, t) ? Pp(r, n) : (e.flags = e.flags & -4097 | 2, se = !1, qe = e)
            }
        } else {
            if (ua(e)) throw Error(R(418));
            e.flags = e.flags & -4097 | 2, se = !1, qe = e
        }
    }
}

function Qc(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    qe = e
}

function yi(e) {
    if (e !== qe) return !1;
    if (!se) return Qc(e), se = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ia(e.type, e.memoizedProps)), t && (t = Xe)) {
        if (ua(e)) throw Np(), Error(R(418));
        for (; t;) Pp(e, t), t = En(t.nextSibling)
    }
    if (Qc(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(R(317));
        e: {
            for (e = e.nextSibling, t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Xe = En(e.nextSibling);
                            break e
                        }
                        t--
                    } else n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Xe = null
        }
    } else Xe = qe ? En(e.stateNode.nextSibling) : null;
    return !0
}

function Np() {
    for (var e = Xe; e;) e = En(e.nextSibling)
}

function zr() {
    Xe = qe = null, se = !1
}

function mu(e) {
    gt === null ? gt = [e] : gt.push(e)
}
var Oy = Gt.ReactCurrentBatchConfig;

function io(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner, n) {
                if (n.tag !== 1) throw Error(R(309));
                var r = n.stateNode
            }
            if (!r) throw Error(R(147, e));
            var o = r,
                i = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(s) {
                var l = o.refs;
                s === null ? delete l[i] : l[i] = s
            }, t._stringRef = i, t)
        }
        if (typeof e != "string") throw Error(R(284));
        if (!n._owner) throw Error(R(290, e))
    }
    return e
}

function wi(e, t) {
    throw e = Object.prototype.toString.call(t), Error(R(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function Kc(e) {
    var t = e._init;
    return t(e._payload)
}

function Tp(e) {
    function t(h, p) {
        if (e) {
            var m = h.deletions;
            m === null ? (h.deletions = [p], h.flags |= 16) : m.push(p)
        }
    }

    function n(h, p) {
        if (!e) return null;
        for (; p !== null;) t(h, p), p = p.sibling;
        return null
    }

    function r(h, p) {
        for (h = new Map; p !== null;) p.key !== null ? h.set(p.key, p) : h.set(p.index, p), p = p.sibling;
        return h
    }

    function o(h, p) {
        return h = bn(h, p), h.index = 0, h.sibling = null, h
    }

    function i(h, p, m) {
        return h.index = m, e ? (m = h.alternate, m !== null ? (m = m.index, m < p ? (h.flags |= 2, p) : m) : (h.flags |= 2, p)) : (h.flags |= 1048576, p)
    }

    function s(h) {
        return e && h.alternate === null && (h.flags |= 2), h
    }

    function l(h, p, m, S) {
        return p === null || p.tag !== 6 ? (p = Nl(m, h.mode, S), p.return = h, p) : (p = o(p, m), p.return = h, p)
    }

    function a(h, p, m, S) {
        var C = m.type;
        return C === ar ? d(h, p, m.props.children, S, m.key) : p !== null && (p.elementType === C || typeof C == "object" && C !== null && C.$$typeof === sn && Kc(C) === p.type) ? (S = o(p, m.props), S.ref = io(h, p, m), S.return = h, S) : (S = Ui(m.type, m.key, m.props, null, h.mode, S), S.ref = io(h, p, m), S.return = h, S)
    }

    function u(h, p, m, S) {
        return p === null || p.tag !== 4 || p.stateNode.containerInfo !== m.containerInfo || p.stateNode.implementation !== m.implementation ? (p = Tl(m, h.mode, S), p.return = h, p) : (p = o(p, m.children || []), p.return = h, p)
    }

    function d(h, p, m, S, C) {
        return p === null || p.tag !== 7 ? (p = Qn(m, h.mode, S, C), p.return = h, p) : (p = o(p, m), p.return = h, p)
    }

    function f(h, p, m) {
        if (typeof p == "string" && p !== "" || typeof p == "number") return p = Nl("" + p, h.mode, m), p.return = h, p;
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
                case ai:
                    return m = Ui(p.type, p.key, p.props, null, h.mode, m), m.ref = io(h, null, p), m.return = h, m;
                case lr:
                    return p = Tl(p, h.mode, m), p.return = h, p;
                case sn:
                    var S = p._init;
                    return f(h, S(p._payload), m)
            }
            if (fo(p) || eo(p)) return p = Qn(p, h.mode, m, null), p.return = h, p;
            wi(h, p)
        }
        return null
    }

    function c(h, p, m, S) {
        var C = p !== null ? p.key : null;
        if (typeof m == "string" && m !== "" || typeof m == "number") return C !== null ? null : l(h, p, "" + m, S);
        if (typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
                case ai:
                    return m.key === C ? a(h, p, m, S) : null;
                case lr:
                    return m.key === C ? u(h, p, m, S) : null;
                case sn:
                    return C = m._init, c(h, p, C(m._payload), S)
            }
            if (fo(m) || eo(m)) return C !== null ? null : d(h, p, m, S, null);
            wi(h, m)
        }
        return null
    }

    function v(h, p, m, S, C) {
        if (typeof S == "string" && S !== "" || typeof S == "number") return h = h.get(m) || null, l(p, h, "" + S, C);
        if (typeof S == "object" && S !== null) {
            switch (S.$$typeof) {
                case ai:
                    return h = h.get(S.key === null ? m : S.key) || null, a(p, h, S, C);
                case lr:
                    return h = h.get(S.key === null ? m : S.key) || null, u(p, h, S, C);
                case sn:
                    var P = S._init;
                    return v(h, p, m, P(S._payload), C)
            }
            if (fo(S) || eo(S)) return h = h.get(m) || null, d(p, h, S, C, null);
            wi(p, S)
        }
        return null
    }

    function x(h, p, m, S) {
        for (var C = null, P = null, k = p, N = p = 0, M = null; k !== null && N < m.length; N++) {
            k.index > N ? (M = k, k = null) : M = k.sibling;
            var A = c(h, k, m[N], S);
            if (A === null) {
                k === null && (k = M);
                break
            }
            e && k && A.alternate === null && t(h, k), p = i(A, p, N), P === null ? C = A : P.sibling = A, P = A, k = M
        }
        if (N === m.length) return n(h, k), se && Dn(h, N), C;
        if (k === null) {
            for (; N < m.length; N++) k = f(h, m[N], S), k !== null && (p = i(k, p, N), P === null ? C = k : P.sibling = k, P = k);
            return se && Dn(h, N), C
        }
        for (k = r(h, k); N < m.length; N++) M = v(k, h, N, m[N], S), M !== null && (e && M.alternate !== null && k.delete(M.key === null ? N : M.key), p = i(M, p, N), P === null ? C = M : P.sibling = M, P = M);
        return e && k.forEach(function($) {
            return t(h, $)
        }), se && Dn(h, N), C
    }

    function w(h, p, m, S) {
        var C = eo(m);
        if (typeof C != "function") throw Error(R(150));
        if (m = C.call(m), m == null) throw Error(R(151));
        for (var P = C = null, k = p, N = p = 0, M = null, A = m.next(); k !== null && !A.done; N++, A = m.next()) {
            k.index > N ? (M = k, k = null) : M = k.sibling;
            var $ = c(h, k, A.value, S);
            if ($ === null) {
                k === null && (k = M);
                break
            }
            e && k && $.alternate === null && t(h, k), p = i($, p, N), P === null ? C = $ : P.sibling = $, P = $, k = M
        }
        if (A.done) return n(h, k), se && Dn(h, N), C;
        if (k === null) {
            for (; !A.done; N++, A = m.next()) A = f(h, A.value, S), A !== null && (p = i(A, p, N), P === null ? C = A : P.sibling = A, P = A);
            return se && Dn(h, N), C
        }
        for (k = r(h, k); !A.done; N++, A = m.next()) A = v(k, h, N, A.value, S), A !== null && (e && A.alternate !== null && k.delete(A.key === null ? N : A.key), p = i(A, p, N), P === null ? C = A : P.sibling = A, P = A);
        return e && k.forEach(function(I) {
            return t(h, I)
        }), se && Dn(h, N), C
    }

    function E(h, p, m, S) {
        if (typeof m == "object" && m !== null && m.type === ar && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
                case ai:
                    e: {
                        for (var C = m.key, P = p; P !== null;) {
                            if (P.key === C) {
                                if (C = m.type, C === ar) {
                                    if (P.tag === 7) {
                                        n(h, P.sibling), p = o(P, m.props.children), p.return = h, h = p;
                                        break e
                                    }
                                } else if (P.elementType === C || typeof C == "object" && C !== null && C.$$typeof === sn && Kc(C) === P.type) {
                                    n(h, P.sibling), p = o(P, m.props), p.ref = io(h, P, m), p.return = h, h = p;
                                    break e
                                }
                                n(h, P);
                                break
                            } else t(h, P);
                            P = P.sibling
                        }
                        m.type === ar ? (p = Qn(m.props.children, h.mode, S, m.key), p.return = h, h = p) : (S = Ui(m.type, m.key, m.props, null, h.mode, S), S.ref = io(h, p, m), S.return = h, h = S)
                    }
                    return s(h);
                case lr:
                    e: {
                        for (P = m.key; p !== null;) {
                            if (p.key === P)
                                if (p.tag === 4 && p.stateNode.containerInfo === m.containerInfo && p.stateNode.implementation === m.implementation) {
                                    n(h, p.sibling), p = o(p, m.children || []), p.return = h, h = p;
                                    break e
                                } else {
                                    n(h, p);
                                    break
                                }
                            else t(h, p);
                            p = p.sibling
                        }
                        p = Tl(m, h.mode, S),
                        p.return = h,
                        h = p
                    }
                    return s(h);
                case sn:
                    return P = m._init, E(h, p, P(m._payload), S)
            }
            if (fo(m)) return x(h, p, m, S);
            if (eo(m)) return w(h, p, m, S);
            wi(h, m)
        }
        return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m, p !== null && p.tag === 6 ? (n(h, p.sibling), p = o(p, m), p.return = h, h = p) : (n(h, p), p = Nl(m, h.mode, S), p.return = h, h = p), s(h)) : n(h, p)
    }
    return E
}
var $r = Tp(!0),
    Rp = Tp(!1),
    os = _n(null),
    is = null,
    gr = null,
    gu = null;

function vu() {
    gu = gr = is = null
}

function yu(e) {
    var t = os.current;
    ie(os), e._currentValue = t
}

function da(e, t, n) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
        e = e.return
    }
}

function Cr(e, t) {
    is = e, gu = gr = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (ze = !0), e.firstContext = null)
}

function at(e) {
    var t = e._currentValue;
    if (gu !== e)
        if (e = {
                context: e,
                memoizedValue: t,
                next: null
            }, gr === null) {
            if (is === null) throw Error(R(308));
            gr = e, is.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else gr = gr.next = e;
    return t
}
var zn = null;

function wu(e) {
    zn === null ? zn = [e] : zn.push(e)
}

function Op(e, t, n, r) {
    var o = t.interleaved;
    return o === null ? (n.next = n, wu(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Wt(e, r)
}

function Wt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var ln = !1;

function xu(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}

function jp(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}

function Bt(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}

function Sn(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, X & 2) {
        var o = r.pending;
        return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Wt(e, n)
    }
    return o = r.interleaved, o === null ? (t.next = t, wu(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Wt(e, n)
}

function Mi(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, iu(e, n)
    }
}

function Yc(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
        var o = null,
            i = null;
        if (n = n.firstBaseUpdate, n !== null) {
            do {
                var s = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                i === null ? o = i = s : i = i.next = s, n = n.next
            } while (n !== null);
            i === null ? o = i = t : i = i.next = t
        } else o = i = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: o,
            lastBaseUpdate: i,
            shared: r.shared,
            effects: r.effects
        }, e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function ss(e, t, n, r) {
    var o = e.updateQueue;
    ln = !1;
    var i = o.firstBaseUpdate,
        s = o.lastBaseUpdate,
        l = o.shared.pending;
    if (l !== null) {
        o.shared.pending = null;
        var a = l,
            u = a.next;
        a.next = null, s === null ? i = u : s.next = u, s = a;
        var d = e.alternate;
        d !== null && (d = d.updateQueue, l = d.lastBaseUpdate, l !== s && (l === null ? d.firstBaseUpdate = u : l.next = u, d.lastBaseUpdate = a))
    }
    if (i !== null) {
        var f = o.baseState;
        s = 0, d = u = a = null, l = i;
        do {
            var c = l.lane,
                v = l.eventTime;
            if ((r & c) === c) {
                d !== null && (d = d.next = {
                    eventTime: v,
                    lane: 0,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                });
                e: {
                    var x = e,
                        w = l;
                    switch (c = t, v = n, w.tag) {
                        case 1:
                            if (x = w.payload, typeof x == "function") {
                                f = x.call(v, f, c);
                                break e
                            }
                            f = x;
                            break e;
                        case 3:
                            x.flags = x.flags & -65537 | 128;
                        case 0:
                            if (x = w.payload, c = typeof x == "function" ? x.call(v, f, c) : x, c == null) break e;
                            f = ce({}, f, c);
                            break e;
                        case 2:
                            ln = !0
                    }
                }
                l.callback !== null && l.lane !== 0 && (e.flags |= 64, c = o.effects, c === null ? o.effects = [l] : c.push(l))
            } else v = {
                eventTime: v,
                lane: c,
                tag: l.tag,
                payload: l.payload,
                callback: l.callback,
                next: null
            }, d === null ? (u = d = v, a = f) : d = d.next = v, s |= c;
            if (l = l.next, l === null) {
                if (l = o.shared.pending, l === null) break;
                c = l, l = c.next, c.next = null, o.lastBaseUpdate = c, o.shared.pending = null
            }
        } while (!0);
        if (d === null && (a = f), o.baseState = a, o.firstBaseUpdate = u, o.lastBaseUpdate = d, t = o.shared.interleaved, t !== null) {
            o = t;
            do s |= o.lane, o = o.next; while (o !== t)
        } else i === null && (o.shared.lanes = 0);
        qn |= s, e.lanes = s, e.memoizedState = f
    }
}

function Gc(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                o = r.callback;
            if (o !== null) {
                if (r.callback = null, r = n, typeof o != "function") throw Error(R(191, o));
                o.call(r)
            }
        }
}
var ei = {},
    At = _n(ei),
    Io = _n(ei),
    Fo = _n(ei);

function $n(e) {
    if (e === ei) throw Error(R(174));
    return e
}

function Eu(e, t) {
    switch (te(Fo, t), te(Io, e), te(At, ei), e = t.nodeType, e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : Wl(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Wl(t, e)
    }
    ie(At), te(At, t)
}

function Ur() {
    ie(At), ie(Io), ie(Fo)
}

function Ap(e) {
    $n(Fo.current);
    var t = $n(At.current),
        n = Wl(t, e.type);
    t !== n && (te(Io, e), te(At, n))
}

function Su(e) {
    Io.current === e && (ie(At), ie(Io))
}
var ae = _n(0);

function ls(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t
        } else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue
        }
        if (t === e) break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return null;
            t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
    }
    return null
}
var El = [];

function Cu() {
    for (var e = 0; e < El.length; e++) El[e]._workInProgressVersionPrimary = null;
    El.length = 0
}
var Di = Gt.ReactCurrentDispatcher,
    Sl = Gt.ReactCurrentBatchConfig,
    Xn = 0,
    ue = null,
    ve = null,
    xe = null,
    as = !1,
    xo = !1,
    zo = 0,
    jy = 0;

function Ne() {
    throw Error(R(321))
}

function ku(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!wt(e[n], t[n])) return !1;
    return !0
}

function bu(e, t, n, r, o, i) {
    if (Xn = i, ue = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Di.current = e === null || e.memoizedState === null ? My : Dy, e = n(r, o), xo) {
        i = 0;
        do {
            if (xo = !1, zo = 0, 25 <= i) throw Error(R(301));
            i += 1, xe = ve = null, t.updateQueue = null, Di.current = Iy, e = n(r, o)
        } while (xo)
    }
    if (Di.current = us, t = ve !== null && ve.next !== null, Xn = 0, xe = ve = ue = null, as = !1, t) throw Error(R(300));
    return e
}

function Pu() {
    var e = zo !== 0;
    return zo = 0, e
}

function Pt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return xe === null ? ue.memoizedState = xe = e : xe = xe.next = e, xe
}

function ut() {
    if (ve === null) {
        var e = ue.alternate;
        e = e !== null ? e.memoizedState : null
    } else e = ve.next;
    var t = xe === null ? ue.memoizedState : xe.next;
    if (t !== null) xe = t, ve = e;
    else {
        if (e === null) throw Error(R(310));
        ve = e, e = {
            memoizedState: ve.memoizedState,
            baseState: ve.baseState,
            baseQueue: ve.baseQueue,
            queue: ve.queue,
            next: null
        }, xe === null ? ue.memoizedState = xe = e : xe = xe.next = e
    }
    return xe
}

function $o(e, t) {
    return typeof t == "function" ? t(e) : t
}

function Cl(e) {
    var t = ut(),
        n = t.queue;
    if (n === null) throw Error(R(311));
    n.lastRenderedReducer = e;
    var r = ve,
        o = r.baseQueue,
        i = n.pending;
    if (i !== null) {
        if (o !== null) {
            var s = o.next;
            o.next = i.next, i.next = s
        }
        r.baseQueue = o = i, n.pending = null
    }
    if (o !== null) {
        i = o.next, r = r.baseState;
        var l = s = null,
            a = null,
            u = i;
        do {
            var d = u.lane;
            if ((Xn & d) === d) a !== null && (a = a.next = {
                lane: 0,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null
            }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var f = {
                    lane: d,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                a === null ? (l = a = f, s = r) : a = a.next = f, ue.lanes |= d, qn |= d
            }
            u = u.next
        } while (u !== null && u !== i);
        a === null ? s = r : a.next = l, wt(r, t.memoizedState) || (ze = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = a, n.lastRenderedState = r
    }
    if (e = n.interleaved, e !== null) {
        o = e;
        do i = o.lane, ue.lanes |= i, qn |= i, o = o.next; while (o !== e)
    } else o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}

function kl(e) {
    var t = ut(),
        n = t.queue;
    if (n === null) throw Error(R(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        o = n.pending,
        i = t.memoizedState;
    if (o !== null) {
        n.pending = null;
        var s = o = o.next;
        do i = e(i, s.action), s = s.next; while (s !== o);
        wt(i, t.memoizedState) || (ze = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i
    }
    return [i, r]
}

function _p() {}

function Lp(e, t) {
    var n = ue,
        r = ut(),
        o = t(),
        i = !wt(r.memoizedState, o);
    if (i && (r.memoizedState = o, ze = !0), r = r.queue, Nu(Ip.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || xe !== null && xe.memoizedState.tag & 1) {
        if (n.flags |= 2048, Uo(9, Dp.bind(null, n, r, o, t), void 0, null), Ee === null) throw Error(R(349));
        Xn & 30 || Mp(n, t, o)
    }
    return o
}

function Mp(e, t, n) {
    e.flags |= 16384, e = {
        getSnapshot: t,
        value: n
    }, t = ue.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, ue.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function Dp(e, t, n, r) {
    t.value = n, t.getSnapshot = r, Fp(t) && zp(e)
}

function Ip(e, t, n) {
    return n(function() {
        Fp(t) && zp(e)
    })
}

function Fp(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !wt(e, n)
    } catch {
        return !0
    }
}

function zp(e) {
    var t = Wt(e, 1);
    t !== null && yt(t, e, 1, -1)
}

function Xc(e) {
    var t = Pt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: $o,
        lastRenderedState: e
    }, t.queue = e, e = e.dispatch = Ly.bind(null, ue, e), [t.memoizedState, e]
}

function Uo(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    }, t = ue.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, ue.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function $p() {
    return ut().memoizedState
}

function Ii(e, t, n, r) {
    var o = Pt();
    ue.flags |= e, o.memoizedState = Uo(1 | t, n, void 0, r === void 0 ? null : r)
}

function Rs(e, t, n, r) {
    var o = ut();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (ve !== null) {
        var s = ve.memoizedState;
        if (i = s.destroy, r !== null && ku(r, s.deps)) {
            o.memoizedState = Uo(t, n, i, r);
            return
        }
    }
    ue.flags |= e, o.memoizedState = Uo(1 | t, n, i, r)
}

function qc(e, t) {
    return Ii(8390656, 8, e, t)
}

function Nu(e, t) {
    return Rs(2048, 8, e, t)
}

function Up(e, t) {
    return Rs(4, 2, e, t)
}

function Bp(e, t) {
    return Rs(4, 4, e, t)
}

function Vp(e, t) {
    if (typeof t == "function") return e = e(), t(e),
        function() {
            t(null)
        };
    if (t != null) return e = e(), t.current = e,
        function() {
            t.current = null
        }
}

function Hp(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Rs(4, 4, Vp.bind(null, t, e), n)
}

function Tu() {}

function Wp(e, t) {
    var n = ut();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ku(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function Qp(e, t) {
    var n = ut();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ku(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function Kp(e, t, n) {
    return Xn & 21 ? (wt(n, t) || (n = Jf(), ue.lanes |= n, qn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, ze = !0), e.memoizedState = n)
}

function Ay(e, t) {
    var n = Z;
    Z = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Sl.transition;
    Sl.transition = {};
    try {
        e(!1), t()
    } finally {
        Z = n, Sl.transition = r
    }
}

function Yp() {
    return ut().memoizedState
}

function _y(e, t, n) {
    var r = kn(e);
    if (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, Gp(e)) Xp(t, n);
    else if (n = Op(e, t, n, r), n !== null) {
        var o = Me();
        yt(n, e, r, o), qp(n, t, r)
    }
}

function Ly(e, t, n) {
    var r = kn(e),
        o = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if (Gp(e)) Xp(t, o);
    else {
        var i = e.alternate;
        if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
            var s = t.lastRenderedState,
                l = i(s, n);
            if (o.hasEagerState = !0, o.eagerState = l, wt(l, s)) {
                var a = t.interleaved;
                a === null ? (o.next = o, wu(t)) : (o.next = a.next, a.next = o), t.interleaved = o;
                return
            }
        } catch {} finally {}
        n = Op(e, t, o, r), n !== null && (o = Me(), yt(n, e, r, o), qp(n, t, r))
    }
}

function Gp(e) {
    var t = e.alternate;
    return e === ue || t !== null && t === ue
}

function Xp(e, t) {
    xo = as = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function qp(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, iu(e, n)
    }
}
var us = {
        readContext: at,
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
        unstable_isNewReconciler: !1
    },
    My = {
        readContext: at,
        useCallback: function(e, t) {
            return Pt().memoizedState = [e, t === void 0 ? null : t], e
        },
        useContext: at,
        useEffect: qc,
        useImperativeHandle: function(e, t, n) {
            return n = n != null ? n.concat([e]) : null, Ii(4194308, 4, Vp.bind(null, t, e), n)
        },
        useLayoutEffect: function(e, t) {
            return Ii(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            return Ii(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var n = Pt();
            return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
        },
        useReducer: function(e, t, n) {
            var r = Pt();
            return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }, r.queue = e, e = e.dispatch = _y.bind(null, ue, e), [r.memoizedState, e]
        },
        useRef: function(e) {
            var t = Pt();
            return e = {
                current: e
            }, t.memoizedState = e
        },
        useState: Xc,
        useDebugValue: Tu,
        useDeferredValue: function(e) {
            return Pt().memoizedState = e
        },
        useTransition: function() {
            var e = Xc(!1),
                t = e[0];
            return e = Ay.bind(null, e[1]), Pt().memoizedState = e, [t, e]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, n) {
            var r = ue,
                o = Pt();
            if (se) {
                if (n === void 0) throw Error(R(407));
                n = n()
            } else {
                if (n = t(), Ee === null) throw Error(R(349));
                Xn & 30 || Mp(r, t, n)
            }
            o.memoizedState = n;
            var i = {
                value: n,
                getSnapshot: t
            };
            return o.queue = i, qc(Ip.bind(null, r, i, e), [e]), r.flags |= 2048, Uo(9, Dp.bind(null, r, i, n, t), void 0, null), n
        },
        useId: function() {
            var e = Pt(),
                t = Ee.identifierPrefix;
            if (se) {
                var n = Ut,
                    r = $t;
                n = (r & ~(1 << 32 - vt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = zo++, 0 < n && (t += "H" + n.toString(32)), t += ":"
            } else n = jy++, t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    },
    Dy = {
        readContext: at,
        useCallback: Wp,
        useContext: at,
        useEffect: Nu,
        useImperativeHandle: Hp,
        useInsertionEffect: Up,
        useLayoutEffect: Bp,
        useMemo: Qp,
        useReducer: Cl,
        useRef: $p,
        useState: function() {
            return Cl($o)
        },
        useDebugValue: Tu,
        useDeferredValue: function(e) {
            var t = ut();
            return Kp(t, ve.memoizedState, e)
        },
        useTransition: function() {
            var e = Cl($o)[0],
                t = ut().memoizedState;
            return [e, t]
        },
        useMutableSource: _p,
        useSyncExternalStore: Lp,
        useId: Yp,
        unstable_isNewReconciler: !1
    },
    Iy = {
        readContext: at,
        useCallback: Wp,
        useContext: at,
        useEffect: Nu,
        useImperativeHandle: Hp,
        useInsertionEffect: Up,
        useLayoutEffect: Bp,
        useMemo: Qp,
        useReducer: kl,
        useRef: $p,
        useState: function() {
            return kl($o)
        },
        useDebugValue: Tu,
        useDeferredValue: function(e) {
            var t = ut();
            return ve === null ? t.memoizedState = e : Kp(t, ve.memoizedState, e)
        },
        useTransition: function() {
            var e = kl($o)[0],
                t = ut().memoizedState;
            return [e, t]
        },
        useMutableSource: _p,
        useSyncExternalStore: Lp,
        useId: Yp,
        unstable_isNewReconciler: !1
    };

function ft(e, t) {
    if (e && e.defaultProps) {
        t = ce({}, t), e = e.defaultProps;
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}

function fa(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : ce({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Os = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? tr(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = Me(),
            o = kn(e),
            i = Bt(r, o);
        i.payload = t, n != null && (i.callback = n), t = Sn(e, i, o), t !== null && (yt(t, e, o, r), Mi(t, e, o))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = Me(),
            o = kn(e),
            i = Bt(r, o);
        i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Sn(e, i, o), t !== null && (yt(t, e, o, r), Mi(t, e, o))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = Me(),
            r = kn(e),
            o = Bt(n, r);
        o.tag = 2, t != null && (o.callback = t), t = Sn(e, o, r), t !== null && (yt(t, e, r, n), Mi(t, e, r))
    }
};

function Jc(e, t, n, r, o, i, s) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !_o(n, r) || !_o(o, i) : !0
}

function Jp(e, t, n) {
    var r = !1,
        o = Nn,
        i = t.contextType;
    return typeof i == "object" && i !== null ? i = at(i) : (o = Ue(t) ? Yn : je.current, r = t.contextTypes, i = (r = r != null) ? Fr(e, o) : Nn), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Os, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t
}

function Zc(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Os.enqueueReplaceState(t, t.state, null)
}

function pa(e, t, n, r) {
    var o = e.stateNode;
    o.props = n, o.state = e.memoizedState, o.refs = {}, xu(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? o.context = at(i) : (i = Ue(t) ? Yn : je.current, o.context = Fr(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (fa(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Os.enqueueReplaceState(o, o.state, null), ss(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308)
}

function Br(e, t) {
    try {
        var n = "",
            r = t;
        do n += dv(r), r = r.return; while (r);
        var o = n
    } catch (i) {
        o = `
Error generating stack: ` + i.message + `
` + i.stack
    }
    return {
        value: e,
        source: t,
        stack: o,
        digest: null
    }
}

function bl(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ? ? null,
        digest: t ? ? null
    }
}

function ha(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var Fy = typeof WeakMap == "function" ? WeakMap : Map;

function Zp(e, t, n) {
    n = Bt(-1, n), n.tag = 3, n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        ds || (ds = !0, ka = r), ha(e, t)
    }, n
}

function eh(e, t, n) {
    n = Bt(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var o = t.value;
        n.payload = function() {
            return r(o)
        }, n.callback = function() {
            ha(e, t)
        }
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
        ha(e, t), typeof r != "function" && (Cn === null ? Cn = new Set([this]) : Cn.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: s !== null ? s : ""
        })
    }), n
}

function ed(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new Fy;
        var o = new Set;
        r.set(t, o)
    } else o = r.get(t), o === void 0 && (o = new Set, r.set(t, o));
    o.has(n) || (o.add(n), e = Jy.bind(null, e, t, n), t.then(e, e))
}

function td(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
        e = e.return
    } while (e !== null);
    return null
}

function nd(e, t, n, r, o) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Bt(-1, 1), t.tag = 2, Sn(n, t, 1))), n.lanes |= 1), e)
}
var zy = Gt.ReactCurrentOwner,
    ze = !1;

function _e(e, t, n, r) {
    t.child = e === null ? Rp(t, null, n, r) : $r(t, e.child, n, r)
}

function rd(e, t, n, r, o) {
    n = n.render;
    var i = t.ref;
    return Cr(t, o), r = bu(e, t, n, r, i, o), n = Pu(), e !== null && !ze ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Qt(e, t, o)) : (se && n && pu(t), t.flags |= 1, _e(e, t, r, o), t.child)
}

function od(e, t, n, r, o) {
    if (e === null) {
        var i = n.type;
        return typeof i == "function" && !Du(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, th(e, t, i, r, o)) : (e = Ui(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e)
    }
    if (i = e.child, !(e.lanes & o)) {
        var s = i.memoizedProps;
        if (n = n.compare, n = n !== null ? n : _o, n(s, r) && e.ref === t.ref) return Qt(e, t, o)
    }
    return t.flags |= 1, e = bn(i, r), e.ref = t.ref, e.return = t, t.child = e
}

function th(e, t, n, r, o) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (_o(i, r) && e.ref === t.ref)
            if (ze = !1, t.pendingProps = r = i, (e.lanes & o) !== 0) e.flags & 131072 && (ze = !0);
            else return t.lanes = e.lanes, Qt(e, t, o)
    }
    return ma(e, t, n, r, o)
}

function nh(e, t, n) {
    var r = t.pendingProps,
        o = r.children,
        i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, te(yr, Ye), Ye |= n;
        else {
            if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, t.updateQueue = null, te(yr, Ye), Ye |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = i !== null ? i.baseLanes : n, te(yr, Ye), Ye |= r
        }
    else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, te(yr, Ye), Ye |= r;
    return _e(e, t, o, n), t.child
}

function rh(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function ma(e, t, n, r, o) {
    var i = Ue(n) ? Yn : je.current;
    return i = Fr(t, i), Cr(t, o), n = bu(e, t, n, r, i, o), r = Pu(), e !== null && !ze ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Qt(e, t, o)) : (se && r && pu(t), t.flags |= 1, _e(e, t, n, o), t.child)
}

function id(e, t, n, r, o) {
    if (Ue(n)) {
        var i = !0;
        ts(t)
    } else i = !1;
    if (Cr(t, o), t.stateNode === null) Fi(e, t), Jp(t, n, r), pa(t, n, r, o), r = !0;
    else if (e === null) {
        var s = t.stateNode,
            l = t.memoizedProps;
        s.props = l;
        var a = s.context,
            u = n.contextType;
        typeof u == "object" && u !== null ? u = at(u) : (u = Ue(n) ? Yn : je.current, u = Fr(t, u));
        var d = n.getDerivedStateFromProps,
            f = typeof d == "function" || typeof s.getSnapshotBeforeUpdate == "function";
        f || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== r || a !== u) && Zc(t, s, r, u), ln = !1;
        var c = t.memoizedState;
        s.state = c, ss(t, r, s, o), a = t.memoizedState, l !== r || c !== a || $e.current || ln ? (typeof d == "function" && (fa(t, n, d, r), a = t.memoizedState), (l = ln || Jc(t, n, l, r, c, a, u)) ? (f || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), s.props = r, s.state = a, s.context = u, r = l) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
    } else {
        s = t.stateNode, jp(e, t), l = t.memoizedProps, u = t.type === t.elementType ? l : ft(t.type, l), s.props = u, f = t.pendingProps, c = s.context, a = n.contextType, typeof a == "object" && a !== null ? a = at(a) : (a = Ue(n) ? Yn : je.current, a = Fr(t, a));
        var v = n.getDerivedStateFromProps;
        (d = typeof v == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== f || c !== a) && Zc(t, s, r, a), ln = !1, c = t.memoizedState, s.state = c, ss(t, r, s, o);
        var x = t.memoizedState;
        l !== f || c !== x || $e.current || ln ? (typeof v == "function" && (fa(t, n, v, r), x = t.memoizedState), (u = ln || Jc(t, n, u, r, c, x, a) || !1) ? (d || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, x, a), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, x, a)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && c === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && c === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = x), s.props = r, s.state = x, s.context = a, r = u) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && c === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && c === e.memoizedState || (t.flags |= 1024), r = !1)
    }
    return ga(e, t, n, r, i, o)
}

function ga(e, t, n, r, o, i) {
    rh(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s) return o && Hc(t, n, !1), Qt(e, t, i);
    r = t.stateNode, zy.current = t;
    var l = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && s ? (t.child = $r(t, e.child, null, i), t.child = $r(t, null, l, i)) : _e(e, t, l, i), t.memoizedState = r.state, o && Hc(t, n, !0), t.child
}

function oh(e) {
    var t = e.stateNode;
    t.pendingContext ? Vc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Vc(e, t.context, !1), Eu(e, t.containerInfo)
}

function sd(e, t, n, r, o) {
    return zr(), mu(o), t.flags |= 256, _e(e, t, n, r), t.child
}
var va = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};

function ya(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}

function ih(e, t, n) {
    var r = t.pendingProps,
        o = ae.current,
        i = !1,
        s = (t.flags & 128) !== 0,
        l;
    if ((l = s) || (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), l ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), te(ae, o & 1), e === null) return ca(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, s = {
        mode: "hidden",
        children: s
    }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = s) : i = _s(s, r, 0, null), e = Qn(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = ya(n), t.memoizedState = va, e) : Ru(t, s));
    if (o = e.memoizedState, o !== null && (l = o.dehydrated, l !== null)) return $y(e, t, s, r, l, o, n);
    if (i) {
        i = r.fallback, s = t.mode, o = e.child, l = o.sibling;
        var a = {
            mode: "hidden",
            children: r.children
        };
        return !(s & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = bn(o, a), r.subtreeFlags = o.subtreeFlags & 14680064), l !== null ? i = bn(l, i) : (i = Qn(i, s, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, s = e.child.memoizedState, s = s === null ? ya(n) : {
            baseLanes: s.baseLanes | n,
            cachePool: null,
            transitions: s.transitions
        }, i.memoizedState = s, i.childLanes = e.childLanes & ~n, t.memoizedState = va, r
    }
    return i = e.child, e = i.sibling, r = bn(i, {
        mode: "visible",
        children: r.children
    }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}

function Ru(e, t) {
    return t = _s({
        mode: "visible",
        children: t
    }, e.mode, 0, null), t.return = e, e.child = t
}

function xi(e, t, n, r) {
    return r !== null && mu(r), $r(t, e.child, null, n), e = Ru(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function $y(e, t, n, r, o, i, s) {
    if (n) return t.flags & 256 ? (t.flags &= -257, r = bl(Error(R(422))), xi(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = _s({
        mode: "visible",
        children: r.children
    }, o, 0, null), i = Qn(i, o, s, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && $r(t, e.child, null, s), t.child.memoizedState = ya(s), t.memoizedState = va, i);
    if (!(t.mode & 1)) return xi(e, t, s, null);
    if (o.data === "$!") {
        if (r = o.nextSibling && o.nextSibling.dataset, r) var l = r.dgst;
        return r = l, i = Error(R(419)), r = bl(i, r, void 0), xi(e, t, s, r)
    }
    if (l = (s & e.childLanes) !== 0, ze || l) {
        if (r = Ee, r !== null) {
            switch (s & -s) {
                case 4:
                    o = 2;
                    break;
                case 16:
                    o = 8;
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
                    o = 32;
                    break;
                case 536870912:
                    o = 268435456;
                    break;
                default:
                    o = 0
            }
            o = o & (r.suspendedLanes | s) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, Wt(e, o), yt(r, e, o, -1))
        }
        return Mu(), r = bl(Error(R(421))), xi(e, t, s, r)
    }
    return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Zy.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, Xe = En(o.nextSibling), qe = t, se = !0, gt = null, e !== null && (ot[it++] = $t, ot[it++] = Ut, ot[it++] = Gn, $t = e.id, Ut = e.overflow, Gn = t), t = Ru(t, r.children), t.flags |= 4096, t)
}

function ld(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), da(e.return, t, n)
}

function Pl(e, t, n, r, o) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o
    } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o)
}

function sh(e, t, n) {
    var r = t.pendingProps,
        o = r.revealOrder,
        i = r.tail;
    if (_e(e, t, r.children, n), r = ae.current, r & 2) r = r & 1 | 2, t.flags |= 128;
    else {
        if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && ld(e, n, t);
            else if (e.tag === 19) ld(e, n, t);
            else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        r &= 1
    }
    if (te(ae, r), !(t.mode & 1)) t.memoizedState = null;
    else switch (o) {
        case "forwards":
            for (n = t.child, o = null; n !== null;) e = n.alternate, e !== null && ls(e) === null && (o = n), n = n.sibling;
            n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Pl(t, !1, o, n, i);
            break;
        case "backwards":
            for (n = null, o = t.child, t.child = null; o !== null;) {
                if (e = o.alternate, e !== null && ls(e) === null) {
                    t.child = o;
                    break
                }
                e = o.sibling, o.sibling = n, n = o, o = e
            }
            Pl(t, !0, n, null, i);
            break;
        case "together":
            Pl(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
    }
    return t.child
}

function Fi(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function Qt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), qn |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(R(153));
    if (t.child !== null) {
        for (e = t.child, n = bn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = bn(e, e.pendingProps), n.return = t;
        n.sibling = null
    }
    return t.child
}

function Uy(e, t, n) {
    switch (t.tag) {
        case 3:
            oh(t), zr();
            break;
        case 5:
            Ap(t);
            break;
        case 1:
            Ue(t.type) && ts(t);
            break;
        case 4:
            Eu(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                o = t.memoizedProps.value;
            te(os, r._currentValue), r._currentValue = o;
            break;
        case 13:
            if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (te(ae, ae.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? ih(e, t, n) : (te(ae, ae.current & 1), e = Qt(e, t, n), e !== null ? e.sibling : null);
            te(ae, ae.current & 1);
            break;
        case 19:
            if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                if (r) return sh(e, t, n);
                t.flags |= 128
            }
            if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), te(ae, ae.current), r) break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0, nh(e, t, n)
    }
    return Qt(e, t, n)
}
var lh, wa, ah, uh;
lh = function(e, t) {
    for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n, n = n.child;
            continue
        }
        if (n === t) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t) return;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
};
wa = function() {};
ah = function(e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
        e = t.stateNode, $n(At.current);
        var i = null;
        switch (n) {
            case "input":
                o = Ul(e, o), r = Ul(e, r), i = [];
                break;
            case "select":
                o = ce({}, o, {
                    value: void 0
                }), r = ce({}, r, {
                    value: void 0
                }), i = [];
                break;
            case "textarea":
                o = Hl(e, o), r = Hl(e, r), i = [];
                break;
            default:
                typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Zi)
        }
        Ql(n, r);
        var s;
        n = null;
        for (u in o)
            if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
                if (u === "style") {
                    var l = o[u];
                    for (s in l) l.hasOwnProperty(s) && (n || (n = {}), n[s] = "")
                } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Po.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
        for (u in r) {
            var a = r[u];
            if (l = o != null ? o[u] : void 0, r.hasOwnProperty(u) && a !== l && (a != null || l != null))
                if (u === "style")
                    if (l) {
                        for (s in l) !l.hasOwnProperty(s) || a && a.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
                        for (s in a) a.hasOwnProperty(s) && l[s] !== a[s] && (n || (n = {}), n[s] = a[s])
                    } else n || (i || (i = []), i.push(u, n)), n = a;
            else u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, l = l ? l.__html : void 0, a != null && l !== a && (i = i || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (i = i || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Po.hasOwnProperty(u) ? (a != null && u === "onScroll" && oe("scroll", e), i || l === a || (i = [])) : (i = i || []).push(u, a))
        }
        n && (i = i || []).push("style", n);
        var u = i;
        (t.updateQueue = u) && (t.flags |= 4)
    }
};
uh = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
};

function so(e, t) {
    if (!se) switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
    }
}

function Te(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var o = e.child; o !== null;) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
    else
        for (o = e.child; o !== null;) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t
}

function By(e, t, n) {
    var r = t.pendingProps;
    switch (hu(t), t.tag) {
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
            return Te(t), null;
        case 1:
            return Ue(t.type) && es(), Te(t), null;
        case 3:
            return r = t.stateNode, Ur(), ie($e), ie(je), Cu(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (yi(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, gt !== null && (Na(gt), gt = null))), wa(e, t), Te(t), null;
        case 5:
            Su(t);
            var o = $n(Fo.current);
            if (n = t.type, e !== null && t.stateNode != null) ah(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(R(166));
                    return Te(t), null
                }
                if (e = $n(At.current), yi(t)) {
                    r = t.stateNode, n = t.type;
                    var i = t.memoizedProps;
                    switch (r[Ot] = t, r[Do] = i, e = (t.mode & 1) !== 0, n) {
                        case "dialog":
                            oe("cancel", r), oe("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            oe("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (o = 0; o < ho.length; o++) oe(ho[o], r);
                            break;
                        case "source":
                            oe("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            oe("error", r), oe("load", r);
                            break;
                        case "details":
                            oe("toggle", r);
                            break;
                        case "input":
                            gc(r, i), oe("invalid", r);
                            break;
                        case "select":
                            r._wrapperState = {
                                wasMultiple: !!i.multiple
                            }, oe("invalid", r);
                            break;
                        case "textarea":
                            yc(r, i), oe("invalid", r)
                    }
                    Ql(n, i), o = null;
                    for (var s in i)
                        if (i.hasOwnProperty(s)) {
                            var l = i[s];
                            s === "children" ? typeof l == "string" ? r.textContent !== l && (i.suppressHydrationWarning !== !0 && vi(r.textContent, l, e), o = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (i.suppressHydrationWarning !== !0 && vi(r.textContent, l, e), o = ["children", "" + l]) : Po.hasOwnProperty(s) && l != null && s === "onScroll" && oe("scroll", r)
                        }
                    switch (n) {
                        case "input":
                            ui(r), vc(r, i, !0);
                            break;
                        case "textarea":
                            ui(r), wc(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof i.onClick == "function" && (r.onclick = Zi)
                    }
                    r = o, t.updateQueue = r, r !== null && (t.flags |= 4)
                } else {
                    s = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = If(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, {
                        is: r.is
                    }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[Ot] = t, e[Do] = r, lh(e, t, !1, !1), t.stateNode = e;
                    e: {
                        switch (s = Kl(n, r), n) {
                            case "dialog":
                                oe("cancel", e), oe("close", e), o = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                oe("load", e), o = r;
                                break;
                            case "video":
                            case "audio":
                                for (o = 0; o < ho.length; o++) oe(ho[o], e);
                                o = r;
                                break;
                            case "source":
                                oe("error", e), o = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                oe("error", e), oe("load", e), o = r;
                                break;
                            case "details":
                                oe("toggle", e), o = r;
                                break;
                            case "input":
                                gc(e, r), o = Ul(e, r), oe("invalid", e);
                                break;
                            case "option":
                                o = r;
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!r.multiple
                                }, o = ce({}, r, {
                                    value: void 0
                                }), oe("invalid", e);
                                break;
                            case "textarea":
                                yc(e, r), o = Hl(e, r), oe("invalid", e);
                                break;
                            default:
                                o = r
                        }
                        Ql(n, o),
                        l = o;
                        for (i in l)
                            if (l.hasOwnProperty(i)) {
                                var a = l[i];
                                i === "style" ? $f(e, a) : i === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && Ff(e, a)) : i === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && No(e, a) : typeof a == "number" && No(e, "" + a) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Po.hasOwnProperty(i) ? a != null && i === "onScroll" && oe("scroll", e) : a != null && Za(e, i, a, s))
                            }
                        switch (n) {
                            case "input":
                                ui(e), vc(e, r, !1);
                                break;
                            case "textarea":
                                ui(e), wc(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + Pn(r.value));
                                break;
                            case "select":
                                e.multiple = !!r.multiple, i = r.value, i != null ? wr(e, !!r.multiple, i, !1) : r.defaultValue != null && wr(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof o.onClick == "function" && (e.onclick = Zi)
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
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
            }
            return Te(t), null;
        case 6:
            if (e && t.stateNode != null) uh(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null) throw Error(R(166));
                if (n = $n(Fo.current), $n(At.current), yi(t)) {
                    if (r = t.stateNode, n = t.memoizedProps, r[Ot] = t, (i = r.nodeValue !== n) && (e = qe, e !== null)) switch (e.tag) {
                        case 3:
                            vi(r.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && vi(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                    i && (t.flags |= 4)
                } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Ot] = t, t.stateNode = r
            }
            return Te(t), null;
        case 13:
            if (ie(ae), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (se && Xe !== null && t.mode & 1 && !(t.flags & 128)) Np(), zr(), t.flags |= 98560, i = !1;
                else if (i = yi(t), r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!i) throw Error(R(318));
                        if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(R(317));
                        i[Ot] = t
                    } else zr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                    Te(t), i = !1
                } else gt !== null && (Na(gt), gt = null), i = !0;
                if (!i) return t.flags & 65536 ? t : null
            }
            return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ae.current & 1 ? ye === 0 && (ye = 3) : Mu())), t.updateQueue !== null && (t.flags |= 4), Te(t), null);
        case 4:
            return Ur(), wa(e, t), e === null && Lo(t.stateNode.containerInfo), Te(t), null;
        case 10:
            return yu(t.type._context), Te(t), null;
        case 17:
            return Ue(t.type) && es(), Te(t), null;
        case 19:
            if (ie(ae), i = t.memoizedState, i === null) return Te(t), null;
            if (r = (t.flags & 128) !== 0, s = i.rendering, s === null)
                if (r) so(i, !1);
                else {
                    if (ye !== 0 || e !== null && e.flags & 128)
                        for (e = t.child; e !== null;) {
                            if (s = ls(e), s !== null) {
                                for (t.flags |= 128, so(i, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) i = n, e = r, i.flags &= 14680066, s = i.alternate, s === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, e = s.dependencies, i.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }), n = n.sibling;
                                return te(ae, ae.current & 1 | 2), t.child
                            }
                            e = e.sibling
                        }
                    i.tail !== null && he() > Vr && (t.flags |= 128, r = !0, so(i, !1), t.lanes = 4194304)
                }
            else {
                if (!r)
                    if (e = ls(s), e !== null) {
                        if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), so(i, !0), i.tail === null && i.tailMode === "hidden" && !s.alternate && !se) return Te(t), null
                    } else 2 * he() - i.renderingStartTime > Vr && n !== 1073741824 && (t.flags |= 128, r = !0, so(i, !1), t.lanes = 4194304);
                i.isBackwards ? (s.sibling = t.child, t.child = s) : (n = i.last, n !== null ? n.sibling = s : t.child = s, i.last = s)
            }
            return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = he(), t.sibling = null, n = ae.current, te(ae, r ? n & 1 | 2 : n & 1), t) : (Te(t), null);
        case 22:
        case 23:
            return Lu(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ye & 1073741824 && (Te(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Te(t), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(R(156, t.tag))
}

function Vy(e, t) {
    switch (hu(t), t.tag) {
        case 1:
            return Ue(t.type) && es(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
            return Ur(), ie($e), ie(je), Cu(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
        case 5:
            return Su(t), null;
        case 13:
            if (ie(ae), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                if (t.alternate === null) throw Error(R(340));
                zr()
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
            return ie(ae), null;
        case 4:
            return Ur(), null;
        case 10:
            return yu(t.type._context), null;
        case 22:
        case 23:
            return Lu(), null;
        case 24:
            return null;
        default:
            return null
    }
}
var Ei = !1,
    Oe = !1,
    Hy = typeof WeakSet == "function" ? WeakSet : Set,
    L = null;

function vr(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function") try {
            n(null)
        } catch (r) {
            fe(e, t, r)
        } else n.current = null
}

function xa(e, t, n) {
    try {
        n()
    } catch (r) {
        fe(e, t, r)
    }
}
var ad = !1;

function Wy(e, t) {
    if (ra = Xi, e = hp(), fu(e)) {
        if ("selectionStart" in e) var n = {
            start: e.selectionStart,
            end: e.selectionEnd
        };
        else e: {
            n = (n = e.ownerDocument) && n.defaultView || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
                n = r.anchorNode;
                var o = r.anchorOffset,
                    i = r.focusNode;
                r = r.focusOffset;
                try {
                    n.nodeType, i.nodeType
                } catch {
                    n = null;
                    break e
                }
                var s = 0,
                    l = -1,
                    a = -1,
                    u = 0,
                    d = 0,
                    f = e,
                    c = null;
                t: for (;;) {
                    for (var v; f !== n || o !== 0 && f.nodeType !== 3 || (l = s + o), f !== i || r !== 0 && f.nodeType !== 3 || (a = s + r), f.nodeType === 3 && (s += f.nodeValue.length), (v = f.firstChild) !== null;) c = f, f = v;
                    for (;;) {
                        if (f === e) break t;
                        if (c === n && ++u === o && (l = s), c === i && ++d === r && (a = s), (v = f.nextSibling) !== null) break;
                        f = c, c = f.parentNode
                    }
                    f = v
                }
                n = l === -1 || a === -1 ? null : {
                    start: l,
                    end: a
                }
            } else n = null
        }
        n = n || {
            start: 0,
            end: 0
        }
    } else n = null;
    for (oa = {
            focusedElem: e,
            selectionRange: n
        }, Xi = !1, L = t; L !== null;)
        if (t = L, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, L = e;
        else
            for (; L !== null;) {
                t = L;
                try {
                    var x = t.alternate;
                    if (t.flags & 1024) switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (x !== null) {
                                var w = x.memoizedProps,
                                    E = x.memoizedState,
                                    h = t.stateNode,
                                    p = h.getSnapshotBeforeUpdate(t.elementType === t.type ? w : ft(t.type, w), E);
                                h.__reactInternalSnapshotBeforeUpdate = p
                            }
                            break;
                        case 3:
                            var m = t.stateNode.containerInfo;
                            m.nodeType === 1 ? m.textContent = "" : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(R(163))
                    }
                } catch (S) {
                    fe(t, t.return, S)
                }
                if (e = t.sibling, e !== null) {
                    e.return = t.return, L = e;
                    break
                }
                L = t.return
            }
    return x = ad, ad = !1, x
}

function Eo(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
        var o = r = r.next;
        do {
            if ((o.tag & e) === e) {
                var i = o.destroy;
                o.destroy = void 0, i !== void 0 && xa(t, n, i)
            }
            o = o.next
        } while (o !== r)
    }
}

function js(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}

function Ea(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}

function ch(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, ch(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ot], delete t[Do], delete t[la], delete t[Ny], delete t[Ty])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function dh(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function ud(e) {
    e: for (;;) {
        for (; e.sibling === null;) {
            if (e.return === null || dh(e.return)) return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child
        }
        if (!(e.flags & 2)) return e.stateNode
    }
}

function Sa(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Zi));
    else if (r !== 4 && (e = e.child, e !== null))
        for (Sa(e, t, n), e = e.sibling; e !== null;) Sa(e, t, n), e = e.sibling
}

function Ca(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
        for (Ca(e, t, n), e = e.sibling; e !== null;) Ca(e, t, n), e = e.sibling
}
var Ce = null,
    mt = !1;

function tn(e, t, n) {
    for (n = n.child; n !== null;) fh(e, t, n), n = n.sibling
}

function fh(e, t, n) {
    if (jt && typeof jt.onCommitFiberUnmount == "function") try {
        jt.onCommitFiberUnmount(Cs, n)
    } catch {}
    switch (n.tag) {
        case 5:
            Oe || vr(n, t);
        case 6:
            var r = Ce,
                o = mt;
            Ce = null, tn(e, t, n), Ce = r, mt = o, Ce !== null && (mt ? (e = Ce, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ce.removeChild(n.stateNode));
            break;
        case 18:
            Ce !== null && (mt ? (e = Ce, n = n.stateNode, e.nodeType === 8 ? wl(e.parentNode, n) : e.nodeType === 1 && wl(e, n), jo(e)) : wl(Ce, n.stateNode));
            break;
        case 4:
            r = Ce, o = mt, Ce = n.stateNode.containerInfo, mt = !0, tn(e, t, n), Ce = r, mt = o;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!Oe && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                o = r = r.next;
                do {
                    var i = o,
                        s = i.destroy;
                    i = i.tag, s !== void 0 && (i & 2 || i & 4) && xa(n, t, s), o = o.next
                } while (o !== r)
            }
            tn(e, t, n);
            break;
        case 1:
            if (!Oe && (vr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
            } catch (l) {
                fe(n, t, l)
            }
            tn(e, t, n);
            break;
        case 21:
            tn(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (Oe = (r = Oe) || n.memoizedState !== null, tn(e, t, n), Oe = r) : tn(e, t, n);
            break;
        default:
            tn(e, t, n)
    }
}

function cd(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new Hy), t.forEach(function(r) {
            var o = e0.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(o, o))
        })
    }
}

function dt(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var o = n[r];
            try {
                var i = e,
                    s = t,
                    l = s;
                e: for (; l !== null;) {
                    switch (l.tag) {
                        case 5:
                            Ce = l.stateNode, mt = !1;
                            break e;
                        case 3:
                            Ce = l.stateNode.containerInfo, mt = !0;
                            break e;
                        case 4:
                            Ce = l.stateNode.containerInfo, mt = !0;
                            break e
                    }
                    l = l.return
                }
                if (Ce === null) throw Error(R(160));
                fh(i, s, o), Ce = null, mt = !1;
                var a = o.alternate;
                a !== null && (a.return = null), o.return = null
            } catch (u) {
                fe(o, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null;) ph(t, e), t = t.sibling
}

function ph(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (dt(t, e), bt(e), r & 4) {
                try {
                    Eo(3, e, e.return), js(3, e)
                } catch (w) {
                    fe(e, e.return, w)
                }
                try {
                    Eo(5, e, e.return)
                } catch (w) {
                    fe(e, e.return, w)
                }
            }
            break;
        case 1:
            dt(t, e), bt(e), r & 512 && n !== null && vr(n, n.return);
            break;
        case 5:
            if (dt(t, e), bt(e), r & 512 && n !== null && vr(n, n.return), e.flags & 32) {
                var o = e.stateNode;
                try {
                    No(o, "")
                } catch (w) {
                    fe(e, e.return, w)
                }
            }
            if (r & 4 && (o = e.stateNode, o != null)) {
                var i = e.memoizedProps,
                    s = n !== null ? n.memoizedProps : i,
                    l = e.type,
                    a = e.updateQueue;
                if (e.updateQueue = null, a !== null) try {
                    l === "input" && i.type === "radio" && i.name != null && Mf(o, i), Kl(l, s);
                    var u = Kl(l, i);
                    for (s = 0; s < a.length; s += 2) {
                        var d = a[s],
                            f = a[s + 1];
                        d === "style" ? $f(o, f) : d === "dangerouslySetInnerHTML" ? Ff(o, f) : d === "children" ? No(o, f) : Za(o, d, f, u)
                    }
                    switch (l) {
                        case "input":
                            Bl(o, i);
                            break;
                        case "textarea":
                            Df(o, i);
                            break;
                        case "select":
                            var c = o._wrapperState.wasMultiple;
                            o._wrapperState.wasMultiple = !!i.multiple;
                            var v = i.value;
                            v != null ? wr(o, !!i.multiple, v, !1) : c !== !!i.multiple && (i.defaultValue != null ? wr(o, !!i.multiple, i.defaultValue, !0) : wr(o, !!i.multiple, i.multiple ? [] : "", !1))
                    }
                    o[Do] = i
                } catch (w) {
                    fe(e, e.return, w)
                }
            }
            break;
        case 6:
            if (dt(t, e), bt(e), r & 4) {
                if (e.stateNode === null) throw Error(R(162));
                o = e.stateNode, i = e.memoizedProps;
                try {
                    o.nodeValue = i
                } catch (w) {
                    fe(e, e.return, w)
                }
            }
            break;
        case 3:
            if (dt(t, e), bt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                jo(t.containerInfo)
            } catch (w) {
                fe(e, e.return, w)
            }
            break;
        case 4:
            dt(t, e), bt(e);
            break;
        case 13:
            dt(t, e), bt(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (Au = he())), r & 4 && cd(e);
            break;
        case 22:
            if (d = n !== null && n.memoizedState !== null, e.mode & 1 ? (Oe = (u = Oe) || d, dt(t, e), Oe = u) : dt(t, e), bt(e), r & 8192) {
                if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !d && e.mode & 1)
                    for (L = e, d = e.child; d !== null;) {
                        for (f = L = d; L !== null;) {
                            switch (c = L, v = c.child, c.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Eo(4, c, c.return);
                                    break;
                                case 1:
                                    vr(c, c.return);
                                    var x = c.stateNode;
                                    if (typeof x.componentWillUnmount == "function") {
                                        r = c, n = c.return;
                                        try {
                                            t = r, x.props = t.memoizedProps, x.state = t.memoizedState, x.componentWillUnmount()
                                        } catch (w) {
                                            fe(r, n, w)
                                        }
                                    }
                                    break;
                                case 5:
                                    vr(c, c.return);
                                    break;
                                case 22:
                                    if (c.memoizedState !== null) {
                                        fd(f);
                                        continue
                                    }
                            }
                            v !== null ? (v.return = c, L = v) : fd(f)
                        }
                        d = d.sibling
                    }
                e: for (d = null, f = e;;) {
                    if (f.tag === 5) {
                        if (d === null) {
                            d = f;
                            try {
                                o = f.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (l = f.stateNode, a = f.memoizedProps.style, s = a != null && a.hasOwnProperty("display") ? a.display : null, l.style.display = zf("display", s))
                            } catch (w) {
                                fe(e, e.return, w)
                            }
                        }
                    } else if (f.tag === 6) {
                        if (d === null) try {
                            f.stateNode.nodeValue = u ? "" : f.memoizedProps
                        } catch (w) {
                            fe(e, e.return, w)
                        }
                    } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
                        f.child.return = f, f = f.child;
                        continue
                    }
                    if (f === e) break e;
                    for (; f.sibling === null;) {
                        if (f.return === null || f.return === e) break e;
                        d === f && (d = null), f = f.return
                    }
                    d === f && (d = null), f.sibling.return = f.return, f = f.sibling
                }
            }
            break;
        case 19:
            dt(t, e), bt(e), r & 4 && cd(e);
            break;
        case 21:
            break;
        default:
            dt(t, e), bt(e)
    }
}

function bt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null;) {
                    if (dh(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(R(160))
            }
            switch (r.tag) {
                case 5:
                    var o = r.stateNode;
                    r.flags & 32 && (No(o, ""), r.flags &= -33);
                    var i = ud(e);
                    Ca(e, i, o);
                    break;
                case 3:
                case 4:
                    var s = r.stateNode.containerInfo,
                        l = ud(e);
                    Sa(e, l, s);
                    break;
                default:
                    throw Error(R(161))
            }
        }
        catch (a) {
            fe(e, e.return, a)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}

function Qy(e, t, n) {
    L = e, hh(e)
}

function hh(e, t, n) {
    for (var r = (e.mode & 1) !== 0; L !== null;) {
        var o = L,
            i = o.child;
        if (o.tag === 22 && r) {
            var s = o.memoizedState !== null || Ei;
            if (!s) {
                var l = o.alternate,
                    a = l !== null && l.memoizedState !== null || Oe;
                l = Ei;
                var u = Oe;
                if (Ei = s, (Oe = a) && !u)
                    for (L = o; L !== null;) s = L, a = s.child, s.tag === 22 && s.memoizedState !== null ? pd(o) : a !== null ? (a.return = s, L = a) : pd(o);
                for (; i !== null;) L = i, hh(i), i = i.sibling;
                L = o, Ei = l, Oe = u
            }
            dd(e)
        } else o.subtreeFlags & 8772 && i !== null ? (i.return = o, L = i) : dd(e)
    }
}

function dd(e) {
    for (; L !== null;) {
        var t = L;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Oe || js(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !Oe)
                            if (n === null) r.componentDidMount();
                            else {
                                var o = t.elementType === t.type ? n.memoizedProps : ft(t.type, n.memoizedProps);
                                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var i = t.updateQueue;
                        i !== null && Gc(t, i, r);
                        break;
                    case 3:
                        var s = t.updateQueue;
                        if (s !== null) {
                            if (n = null, t.child !== null) switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                            }
                            Gc(t, s, n)
                        }
                        break;
                    case 5:
                        var l = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = l;
                            var a = t.memoizedProps;
                            switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    a.autoFocus && n.focus();
                                    break;
                                case "img":
                                    a.src && (n.src = a.src)
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
                            var u = t.alternate;
                            if (u !== null) {
                                var d = u.memoizedState;
                                if (d !== null) {
                                    var f = d.dehydrated;
                                    f !== null && jo(f)
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
                        throw Error(R(163))
                }
                Oe || t.flags & 512 && Ea(t)
            } catch (c) {
                fe(t, t.return, c)
            }
        }
        if (t === e) {
            L = null;
            break
        }
        if (n = t.sibling, n !== null) {
            n.return = t.return, L = n;
            break
        }
        L = t.return
    }
}

function fd(e) {
    for (; L !== null;) {
        var t = L;
        if (t === e) {
            L = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return, L = n;
            break
        }
        L = t.return
    }
}

function pd(e) {
    for (; L !== null;) {
        var t = L;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        js(4, t)
                    } catch (a) {
                        fe(t, n, a)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var o = t.return;
                        try {
                            r.componentDidMount()
                        } catch (a) {
                            fe(t, o, a)
                        }
                    }
                    var i = t.return;
                    try {
                        Ea(t)
                    } catch (a) {
                        fe(t, i, a)
                    }
                    break;
                case 5:
                    var s = t.return;
                    try {
                        Ea(t)
                    } catch (a) {
                        fe(t, s, a)
                    }
            }
        } catch (a) {
            fe(t, t.return, a)
        }
        if (t === e) {
            L = null;
            break
        }
        var l = t.sibling;
        if (l !== null) {
            l.return = t.return, L = l;
            break
        }
        L = t.return
    }
}
var Ky = Math.ceil,
    cs = Gt.ReactCurrentDispatcher,
    Ou = Gt.ReactCurrentOwner,
    lt = Gt.ReactCurrentBatchConfig,
    X = 0,
    Ee = null,
    ge = null,
    ke = 0,
    Ye = 0,
    yr = _n(0),
    ye = 0,
    Bo = null,
    qn = 0,
    As = 0,
    ju = 0,
    So = null,
    Fe = null,
    Au = 0,
    Vr = 1 / 0,
    Ft = null,
    ds = !1,
    ka = null,
    Cn = null,
    Si = !1,
    gn = null,
    fs = 0,
    Co = 0,
    ba = null,
    zi = -1,
    $i = 0;

function Me() {
    return X & 6 ? he() : zi !== -1 ? zi : zi = he()
}

function kn(e) {
    return e.mode & 1 ? X & 2 && ke !== 0 ? ke & -ke : Oy.transition !== null ? ($i === 0 && ($i = Jf()), $i) : (e = Z, e !== 0 || (e = window.event, e = e === void 0 ? 16 : ip(e.type)), e) : 1
}

function yt(e, t, n, r) {
    if (50 < Co) throw Co = 0, ba = null, Error(R(185));
    qo(e, n, r), (!(X & 2) || e !== Ee) && (e === Ee && (!(X & 2) && (As |= n), ye === 4 && un(e, ke)), Be(e, r), n === 1 && X === 0 && !(t.mode & 1) && (Vr = he() + 500, Ts && Ln()))
}

function Be(e, t) {
    var n = e.callbackNode;
    Ov(e, t);
    var r = Gi(e, e === Ee ? ke : 0);
    if (r === 0) n !== null && Sc(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
        if (n != null && Sc(n), t === 1) e.tag === 0 ? Ry(hd.bind(null, e)) : kp(hd.bind(null, e)), by(function() {
            !(X & 6) && Ln()
        }), n = null;
        else {
            switch (Zf(r)) {
                case 1:
                    n = ou;
                    break;
                case 4:
                    n = Xf;
                    break;
                case 16:
                    n = Yi;
                    break;
                case 536870912:
                    n = qf;
                    break;
                default:
                    n = Yi
            }
            n = Sh(n, mh.bind(null, e))
        }
        e.callbackPriority = t, e.callbackNode = n
    }
}

function mh(e, t) {
    if (zi = -1, $i = 0, X & 6) throw Error(R(327));
    var n = e.callbackNode;
    if (kr() && e.callbackNode !== n) return null;
    var r = Gi(e, e === Ee ? ke : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = ps(e, r);
    else {
        t = r;
        var o = X;
        X |= 2;
        var i = vh();
        (Ee !== e || ke !== t) && (Ft = null, Vr = he() + 500, Wn(e, t));
        do try {
            Xy();
            break
        } catch (l) {
            gh(e, l)
        }
        while (!0);
        vu(), cs.current = i, X = o, ge !== null ? t = 0 : (Ee = null, ke = 0, t = ye)
    }
    if (t !== 0) {
        if (t === 2 && (o = Jl(e), o !== 0 && (r = o, t = Pa(e, o))), t === 1) throw n = Bo, Wn(e, 0), un(e, r), Be(e, he()), n;
        if (t === 6) un(e, r);
        else {
            if (o = e.current.alternate, !(r & 30) && !Yy(o) && (t = ps(e, r), t === 2 && (i = Jl(e), i !== 0 && (r = i, t = Pa(e, i))), t === 1)) throw n = Bo, Wn(e, 0), un(e, r), Be(e, he()), n;
            switch (e.finishedWork = o, e.finishedLanes = r, t) {
                case 0:
                case 1:
                    throw Error(R(345));
                case 2:
                    In(e, Fe, Ft);
                    break;
                case 3:
                    if (un(e, r), (r & 130023424) === r && (t = Au + 500 - he(), 10 < t)) {
                        if (Gi(e, 0) !== 0) break;
                        if (o = e.suspendedLanes, (o & r) !== r) {
                            Me(), e.pingedLanes |= e.suspendedLanes & o;
                            break
                        }
                        e.timeoutHandle = sa(In.bind(null, e, Fe, Ft), t);
                        break
                    }
                    In(e, Fe, Ft);
                    break;
                case 4:
                    if (un(e, r), (r & 4194240) === r) break;
                    for (t = e.eventTimes, o = -1; 0 < r;) {
                        var s = 31 - vt(r);
                        i = 1 << s, s = t[s], s > o && (o = s), r &= ~i
                    }
                    if (r = o, r = he() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Ky(r / 1960)) - r, 10 < r) {
                        e.timeoutHandle = sa(In.bind(null, e, Fe, Ft), r);
                        break
                    }
                    In(e, Fe, Ft);
                    break;
                case 5:
                    In(e, Fe, Ft);
                    break;
                default:
                    throw Error(R(329))
            }
        }
    }
    return Be(e, he()), e.callbackNode === n ? mh.bind(null, e) : null
}

function Pa(e, t) {
    var n = So;
    return e.current.memoizedState.isDehydrated && (Wn(e, t).flags |= 256), e = ps(e, t), e !== 2 && (t = Fe, Fe = n, t !== null && Na(t)), e
}

function Na(e) {
    Fe === null ? Fe = e : Fe.push.apply(Fe, e)
}

function Yy(e) {
    for (var t = e;;) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores, n !== null))
                for (var r = 0; r < n.length; r++) {
                    var o = n[r],
                        i = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!wt(i(), o)) return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
        else {
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return !0;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
    }
    return !0
}

function un(e, t) {
    for (t &= ~ju, t &= ~As, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var n = 31 - vt(t),
            r = 1 << n;
        e[n] = -1, t &= ~r
    }
}

function hd(e) {
    if (X & 6) throw Error(R(327));
    kr();
    var t = Gi(e, 0);
    if (!(t & 1)) return Be(e, he()), null;
    var n = ps(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Jl(e);
        r !== 0 && (t = r, n = Pa(e, r))
    }
    if (n === 1) throw n = Bo, Wn(e, 0), un(e, t), Be(e, he()), n;
    if (n === 6) throw Error(R(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, In(e, Fe, Ft), Be(e, he()), null
}

function _u(e, t) {
    var n = X;
    X |= 1;
    try {
        return e(t)
    } finally {
        X = n, X === 0 && (Vr = he() + 500, Ts && Ln())
    }
}

function Jn(e) {
    gn !== null && gn.tag === 0 && !(X & 6) && kr();
    var t = X;
    X |= 1;
    var n = lt.transition,
        r = Z;
    try {
        if (lt.transition = null, Z = 1, e) return e()
    } finally {
        Z = r, lt.transition = n, X = t, !(X & 6) && Ln()
    }
}

function Lu() {
    Ye = yr.current, ie(yr)
}

function Wn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, ky(n)), ge !== null)
        for (n = ge.return; n !== null;) {
            var r = n;
            switch (hu(r), r.tag) {
                case 1:
                    r = r.type.childContextTypes, r != null && es();
                    break;
                case 3:
                    Ur(), ie($e), ie(je), Cu();
                    break;
                case 5:
                    Su(r);
                    break;
                case 4:
                    Ur();
                    break;
                case 13:
                    ie(ae);
                    break;
                case 19:
                    ie(ae);
                    break;
                case 10:
                    yu(r.type._context);
                    break;
                case 22:
                case 23:
                    Lu()
            }
            n = n.return
        }
    if (Ee = e, ge = e = bn(e.current, null), ke = Ye = t, ye = 0, Bo = null, ju = As = qn = 0, Fe = So = null, zn !== null) {
        for (t = 0; t < zn.length; t++)
            if (n = zn[t], r = n.interleaved, r !== null) {
                n.interleaved = null;
                var o = r.next,
                    i = n.pending;
                if (i !== null) {
                    var s = i.next;
                    i.next = o, r.next = s
                }
                n.pending = r
            }
        zn = null
    }
    return e
}

function gh(e, t) {
    do {
        var n = ge;
        try {
            if (vu(), Di.current = us, as) {
                for (var r = ue.memoizedState; r !== null;) {
                    var o = r.queue;
                    o !== null && (o.pending = null), r = r.next
                }
                as = !1
            }
            if (Xn = 0, xe = ve = ue = null, xo = !1, zo = 0, Ou.current = null, n === null || n.return === null) {
                ye = 1, Bo = t, ge = null;
                break
            }
            e: {
                var i = e,
                    s = n.return,
                    l = n,
                    a = t;
                if (t = ke, l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
                    var u = a,
                        d = l,
                        f = d.tag;
                    if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                        var c = d.alternate;
                        c ? (d.updateQueue = c.updateQueue, d.memoizedState = c.memoizedState, d.lanes = c.lanes) : (d.updateQueue = null, d.memoizedState = null)
                    }
                    var v = td(s);
                    if (v !== null) {
                        v.flags &= -257, nd(v, s, l, i, t), v.mode & 1 && ed(i, u, t), t = v, a = u;
                        var x = t.updateQueue;
                        if (x === null) {
                            var w = new Set;
                            w.add(a), t.updateQueue = w
                        } else x.add(a);
                        break e
                    } else {
                        if (!(t & 1)) {
                            ed(i, u, t), Mu();
                            break e
                        }
                        a = Error(R(426))
                    }
                } else if (se && l.mode & 1) {
                    var E = td(s);
                    if (E !== null) {
                        !(E.flags & 65536) && (E.flags |= 256), nd(E, s, l, i, t), mu(Br(a, l));
                        break e
                    }
                }
                i = a = Br(a, l),
                ye !== 4 && (ye = 2),
                So === null ? So = [i] : So.push(i),
                i = s;do {
                    switch (i.tag) {
                        case 3:
                            i.flags |= 65536, t &= -t, i.lanes |= t;
                            var h = Zp(i, a, t);
                            Yc(i, h);
                            break e;
                        case 1:
                            l = a;
                            var p = i.type,
                                m = i.stateNode;
                            if (!(i.flags & 128) && (typeof p.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (Cn === null || !Cn.has(m)))) {
                                i.flags |= 65536, t &= -t, i.lanes |= t;
                                var S = eh(i, l, t);
                                Yc(i, S);
                                break e
                            }
                    }
                    i = i.return
                } while (i !== null)
            }
            wh(n)
        } catch (C) {
            t = C, ge === n && n !== null && (ge = n = n.return);
            continue
        }
        break
    } while (!0)
}

function vh() {
    var e = cs.current;
    return cs.current = us, e === null ? us : e
}

function Mu() {
    (ye === 0 || ye === 3 || ye === 2) && (ye = 4), Ee === null || !(qn & 268435455) && !(As & 268435455) || un(Ee, ke)
}

function ps(e, t) {
    var n = X;
    X |= 2;
    var r = vh();
    (Ee !== e || ke !== t) && (Ft = null, Wn(e, t));
    do try {
        Gy();
        break
    } catch (o) {
        gh(e, o)
    }
    while (!0);
    if (vu(), X = n, cs.current = r, ge !== null) throw Error(R(261));
    return Ee = null, ke = 0, ye
}

function Gy() {
    for (; ge !== null;) yh(ge)
}

function Xy() {
    for (; ge !== null && !Ev();) yh(ge)
}

function yh(e) {
    var t = Eh(e.alternate, e, Ye);
    e.memoizedProps = e.pendingProps, t === null ? wh(e) : ge = t, Ou.current = null
}

function wh(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return, t.flags & 32768) {
            if (n = Vy(n, t), n !== null) {
                n.flags &= 32767, ge = n;
                return
            }
            if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
            else {
                ye = 6, ge = null;
                return
            }
        } else if (n = By(n, t, Ye), n !== null) {
            ge = n;
            return
        }
        if (t = t.sibling, t !== null) {
            ge = t;
            return
        }
        ge = t = e
    } while (t !== null);
    ye === 0 && (ye = 5)
}

function In(e, t, n) {
    var r = Z,
        o = lt.transition;
    try {
        lt.transition = null, Z = 1, qy(e, t, n, r)
    } finally {
        lt.transition = o, Z = r
    }
    return null
}

function qy(e, t, n, r) {
    do kr(); while (gn !== null);
    if (X & 6) throw Error(R(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(R(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (jv(e, i), e === Ee && (ge = Ee = null, ke = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Si || (Si = !0, Sh(Yi, function() {
            return kr(), null
        })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
        i = lt.transition, lt.transition = null;
        var s = Z;
        Z = 1;
        var l = X;
        X |= 4, Ou.current = null, Wy(e, n), ph(n, e), vy(oa), Xi = !!ra, oa = ra = null, e.current = n, Qy(n), Sv(), X = l, Z = s, lt.transition = i
    } else e.current = n;
    if (Si && (Si = !1, gn = e, fs = o), i = e.pendingLanes, i === 0 && (Cn = null), bv(n.stateNode), Be(e, he()), t !== null)
        for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, {
            componentStack: o.stack,
            digest: o.digest
        });
    if (ds) throw ds = !1, e = ka, ka = null, e;
    return fs & 1 && e.tag !== 0 && kr(), i = e.pendingLanes, i & 1 ? e === ba ? Co++ : (Co = 0, ba = e) : Co = 0, Ln(), null
}

function kr() {
    if (gn !== null) {
        var e = Zf(fs),
            t = lt.transition,
            n = Z;
        try {
            if (lt.transition = null, Z = 16 > e ? 16 : e, gn === null) var r = !1;
            else {
                if (e = gn, gn = null, fs = 0, X & 6) throw Error(R(331));
                var o = X;
                for (X |= 4, L = e.current; L !== null;) {
                    var i = L,
                        s = i.child;
                    if (L.flags & 16) {
                        var l = i.deletions;
                        if (l !== null) {
                            for (var a = 0; a < l.length; a++) {
                                var u = l[a];
                                for (L = u; L !== null;) {
                                    var d = L;
                                    switch (d.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Eo(8, d, i)
                                    }
                                    var f = d.child;
                                    if (f !== null) f.return = d, L = f;
                                    else
                                        for (; L !== null;) {
                                            d = L;
                                            var c = d.sibling,
                                                v = d.return;
                                            if (ch(d), d === u) {
                                                L = null;
                                                break
                                            }
                                            if (c !== null) {
                                                c.return = v, L = c;
                                                break
                                            }
                                            L = v
                                        }
                                }
                            }
                            var x = i.alternate;
                            if (x !== null) {
                                var w = x.child;
                                if (w !== null) {
                                    x.child = null;
                                    do {
                                        var E = w.sibling;
                                        w.sibling = null, w = E
                                    } while (w !== null)
                                }
                            }
                            L = i
                        }
                    }
                    if (i.subtreeFlags & 2064 && s !== null) s.return = i, L = s;
                    else e: for (; L !== null;) {
                        if (i = L, i.flags & 2048) switch (i.tag) {
                            case 0:
                            case 11:
                            case 15:
                                Eo(9, i, i.return)
                        }
                        var h = i.sibling;
                        if (h !== null) {
                            h.return = i.return, L = h;
                            break e
                        }
                        L = i.return
                    }
                }
                var p = e.current;
                for (L = p; L !== null;) {
                    s = L;
                    var m = s.child;
                    if (s.subtreeFlags & 2064 && m !== null) m.return = s, L = m;
                    else e: for (s = p; L !== null;) {
                        if (l = L, l.flags & 2048) try {
                            switch (l.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    js(9, l)
                            }
                        } catch (C) {
                            fe(l, l.return, C)
                        }
                        if (l === s) {
                            L = null;
                            break e
                        }
                        var S = l.sibling;
                        if (S !== null) {
                            S.return = l.return, L = S;
                            break e
                        }
                        L = l.return
                    }
                }
                if (X = o, Ln(), jt && typeof jt.onPostCommitFiberRoot == "function") try {
                    jt.onPostCommitFiberRoot(Cs, e)
                } catch {}
                r = !0
            }
            return r
        } finally {
            Z = n, lt.transition = t
        }
    }
    return !1
}

function md(e, t, n) {
    t = Br(n, t), t = Zp(e, t, 1), e = Sn(e, t, 1), t = Me(), e !== null && (qo(e, 1, t), Be(e, t))
}

function fe(e, t, n) {
    if (e.tag === 3) md(e, e, n);
    else
        for (; t !== null;) {
            if (t.tag === 3) {
                md(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Cn === null || !Cn.has(r))) {
                    e = Br(n, e), e = eh(t, e, 1), t = Sn(t, e, 1), e = Me(), t !== null && (qo(t, 1, e), Be(t, e));
                    break
                }
            }
            t = t.return
        }
}

function Jy(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = Me(), e.pingedLanes |= e.suspendedLanes & n, Ee === e && (ke & n) === n && (ye === 4 || ye === 3 && (ke & 130023424) === ke && 500 > he() - Au ? Wn(e, 0) : ju |= n), Be(e, t)
}

function xh(e, t) {
    t === 0 && (e.mode & 1 ? (t = fi, fi <<= 1, !(fi & 130023424) && (fi = 4194304)) : t = 1);
    var n = Me();
    e = Wt(e, t), e !== null && (qo(e, t, n), Be(e, n))
}

function Zy(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), xh(e, n)
}

function e0(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                o = e.memoizedState;
            o !== null && (n = o.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(R(314))
    }
    r !== null && r.delete(t), xh(e, n)
}
var Eh;
Eh = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || $e.current) ze = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return ze = !1, Uy(e, t, n);
            ze = !!(e.flags & 131072)
        }
    else ze = !1, se && t.flags & 1048576 && bp(t, rs, t.index);
    switch (t.lanes = 0, t.tag) {
        case 2:
            var r = t.type;
            Fi(e, t), e = t.pendingProps;
            var o = Fr(t, je.current);
            Cr(t, n), o = bu(null, t, r, e, o, n);
            var i = Pu();
            return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ue(r) ? (i = !0, ts(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, xu(t), o.updater = Os, t.stateNode = o, o._reactInternals = t, pa(t, r, e, n), t = ga(null, t, r, !0, i, n)) : (t.tag = 0, se && i && pu(t), _e(null, t, o, n), t = t.child), t;
        case 16:
            r = t.elementType;
            e: {
                switch (Fi(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = n0(r), e = ft(r, e), o) {
                    case 0:
                        t = ma(null, t, r, e, n);
                        break e;
                    case 1:
                        t = id(null, t, r, e, n);
                        break e;
                    case 11:
                        t = rd(null, t, r, e, n);
                        break e;
                    case 14:
                        t = od(null, t, r, ft(r.type, e), n);
                        break e
                }
                throw Error(R(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : ft(r, o), ma(e, t, r, o, n);
        case 1:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : ft(r, o), id(e, t, r, o, n);
        case 3:
            e: {
                if (oh(t), e === null) throw Error(R(387));r = t.pendingProps,
                i = t.memoizedState,
                o = i.element,
                jp(e, t),
                ss(t, r, null, n);
                var s = t.memoizedState;
                if (r = s.element, i.isDehydrated)
                    if (i = {
                            element: r,
                            isDehydrated: !1,
                            cache: s.cache,
                            pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                            transitions: s.transitions
                        }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
                        o = Br(Error(R(423)), t), t = sd(e, t, r, n, o);
                        break e
                    } else if (r !== o) {
                    o = Br(Error(R(424)), t), t = sd(e, t, r, n, o);
                    break e
                } else
                    for (Xe = En(t.stateNode.containerInfo.firstChild), qe = t, se = !0, gt = null, n = Rp(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
                else {
                    if (zr(), r === o) {
                        t = Qt(e, t, n);
                        break e
                    }
                    _e(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return Ap(t), e === null && ca(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, s = o.children, ia(r, o) ? s = null : i !== null && ia(r, i) && (t.flags |= 32), rh(e, t), _e(e, t, s, n), t.child;
        case 6:
            return e === null && ca(t), null;
        case 13:
            return ih(e, t, n);
        case 4:
            return Eu(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = $r(t, null, r, n) : _e(e, t, r, n), t.child;
        case 11:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : ft(r, o), rd(e, t, r, o, n);
        case 7:
            return _e(e, t, t.pendingProps, n), t.child;
        case 8:
            return _e(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return _e(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, s = o.value, te(os, r._currentValue), r._currentValue = s, i !== null)
                    if (wt(i.value, s)) {
                        if (i.children === o.children && !$e.current) {
                            t = Qt(e, t, n);
                            break e
                        }
                    } else
                        for (i = t.child, i !== null && (i.return = t); i !== null;) {
                            var l = i.dependencies;
                            if (l !== null) {
                                s = i.child;
                                for (var a = l.firstContext; a !== null;) {
                                    if (a.context === r) {
                                        if (i.tag === 1) {
                                            a = Bt(-1, n & -n), a.tag = 2;
                                            var u = i.updateQueue;
                                            if (u !== null) {
                                                u = u.shared;
                                                var d = u.pending;
                                                d === null ? a.next = a : (a.next = d.next, d.next = a), u.pending = a
                                            }
                                        }
                                        i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), da(i.return, n, t), l.lanes |= n;
                                        break
                                    }
                                    a = a.next
                                }
                            } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
                            else if (i.tag === 18) {
                                if (s = i.return, s === null) throw Error(R(341));
                                s.lanes |= n, l = s.alternate, l !== null && (l.lanes |= n), da(s, n, t), s = i.sibling
                            } else s = i.child;
                            if (s !== null) s.return = i;
                            else
                                for (s = i; s !== null;) {
                                    if (s === t) {
                                        s = null;
                                        break
                                    }
                                    if (i = s.sibling, i !== null) {
                                        i.return = s.return, s = i;
                                        break
                                    }
                                    s = s.return
                                }
                            i = s
                        }
                _e(e, t, o.children, n),
                t = t.child
            }
            return t;
        case 9:
            return o = t.type, r = t.pendingProps.children, Cr(t, n), o = at(o), r = r(o), t.flags |= 1, _e(e, t, r, n), t.child;
        case 14:
            return r = t.type, o = ft(r, t.pendingProps), o = ft(r.type, o), od(e, t, r, o, n);
        case 15:
            return th(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : ft(r, o), Fi(e, t), t.tag = 1, Ue(r) ? (e = !0, ts(t)) : e = !1, Cr(t, n), Jp(t, r, o), pa(t, r, o, n), ga(null, t, r, !0, e, n);
        case 19:
            return sh(e, t, n);
        case 22:
            return nh(e, t, n)
    }
    throw Error(R(156, t.tag))
};

function Sh(e, t) {
    return Gf(e, t)
}

function t0(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function st(e, t, n, r) {
    return new t0(e, t, n, r)
}

function Du(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
}

function n0(e) {
    if (typeof e == "function") return Du(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof, e === tu) return 11;
        if (e === nu) return 14
    }
    return 2
}

function bn(e, t) {
    var n = e.alternate;
    return n === null ? (n = st(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function Ui(e, t, n, r, o, i) {
    var s = 2;
    if (r = e, typeof e == "function") Du(e) && (s = 1);
    else if (typeof e == "string") s = 5;
    else e: switch (e) {
        case ar:
            return Qn(n.children, o, i, t);
        case eu:
            s = 8, o |= 8;
            break;
        case Il:
            return e = st(12, n, t, o | 2), e.elementType = Il, e.lanes = i, e;
        case Fl:
            return e = st(13, n, t, o), e.elementType = Fl, e.lanes = i, e;
        case zl:
            return e = st(19, n, t, o), e.elementType = zl, e.lanes = i, e;
        case Af:
            return _s(n, o, i, t);
        default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                case Of:
                    s = 10;
                    break e;
                case jf:
                    s = 9;
                    break e;
                case tu:
                    s = 11;
                    break e;
                case nu:
                    s = 14;
                    break e;
                case sn:
                    s = 16, r = null;
                    break e
            }
            throw Error(R(130, e == null ? e : typeof e, ""))
    }
    return t = st(s, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t
}

function Qn(e, t, n, r) {
    return e = st(7, e, r, t), e.lanes = n, e
}

function _s(e, t, n, r) {
    return e = st(22, e, r, t), e.elementType = Af, e.lanes = n, e.stateNode = {
        isHidden: !1
    }, e
}

function Nl(e, t, n) {
    return e = st(6, e, null, t), e.lanes = n, e
}

function Tl(e, t, n) {
    return t = st(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    }, t
}

function r0(e, t, n, r, o) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = al(0), this.expirationTimes = al(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = al(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null
}

function Iu(e, t, n, r, o, i, s, l, a) {
    return e = new r0(e, t, n, l, a), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = st(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, xu(i), e
}

function o0(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: lr,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}

function Ch(e) {
    if (!e) return Nn;
    e = e._reactInternals;
    e: {
        if (tr(e) !== e || e.tag !== 1) throw Error(R(170));
        var t = e;do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (Ue(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (t !== null);
        throw Error(R(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Ue(n)) return Cp(e, n, t)
    }
    return t
}

function kh(e, t, n, r, o, i, s, l, a) {
    return e = Iu(n, r, !0, e, o, i, s, l, a), e.context = Ch(null), n = e.current, r = Me(), o = kn(n), i = Bt(r, o), i.callback = t ? ? null, Sn(n, i, o), e.current.lanes = o, qo(e, o, r), Be(e, r), e
}

function Ls(e, t, n, r) {
    var o = t.current,
        i = Me(),
        s = kn(o);
    return n = Ch(n), t.context === null ? t.context = n : t.pendingContext = n, t = Bt(i, s), t.payload = {
        element: e
    }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Sn(o, t, s), e !== null && (yt(e, o, s, i), Mi(e, o, s)), s
}

function hs(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}

function gd(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}

function Fu(e, t) {
    gd(e, t), (e = e.alternate) && gd(e, t)
}

function i0() {
    return null
}
var bh = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
};

function zu(e) {
    this._internalRoot = e
}
Ms.prototype.render = zu.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(R(409));
    Ls(e, t, null, null)
};
Ms.prototype.unmount = zu.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Jn(function() {
            Ls(null, e, null, null)
        }), t[Ht] = null
    }
};

function Ms(e) {
    this._internalRoot = e
}
Ms.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = np();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < an.length && t !== 0 && t < an[n].priority; n++);
        an.splice(n, 0, e), n === 0 && op(e)
    }
};

function $u(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function Ds(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function vd() {}

function s0(e, t, n, r, o) {
    if (o) {
        if (typeof r == "function") {
            var i = r;
            r = function() {
                var u = hs(s);
                i.call(u)
            }
        }
        var s = kh(t, r, e, 0, null, !1, !1, "", vd);
        return e._reactRootContainer = s, e[Ht] = s.current, Lo(e.nodeType === 8 ? e.parentNode : e), Jn(), s
    }
    for (; o = e.lastChild;) e.removeChild(o);
    if (typeof r == "function") {
        var l = r;
        r = function() {
            var u = hs(a);
            l.call(u)
        }
    }
    var a = Iu(e, 0, !1, null, null, !1, !1, "", vd);
    return e._reactRootContainer = a, e[Ht] = a.current, Lo(e.nodeType === 8 ? e.parentNode : e), Jn(function() {
        Ls(t, a, n, r)
    }), a
}

function Is(e, t, n, r, o) {
    var i = n._reactRootContainer;
    if (i) {
        var s = i;
        if (typeof o == "function") {
            var l = o;
            o = function() {
                var a = hs(s);
                l.call(a)
            }
        }
        Ls(t, s, e, o)
    } else s = s0(n, t, e, o, r);
    return hs(s)
}
ep = function(e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = po(t.pendingLanes);
                n !== 0 && (iu(t, n | 1), Be(t, he()), !(X & 6) && (Vr = he() + 500, Ln()))
            }
            break;
        case 13:
            Jn(function() {
                var r = Wt(e, 1);
                if (r !== null) {
                    var o = Me();
                    yt(r, e, 1, o)
                }
            }), Fu(e, 1)
    }
};
su = function(e) {
    if (e.tag === 13) {
        var t = Wt(e, 134217728);
        if (t !== null) {
            var n = Me();
            yt(t, e, 134217728, n)
        }
        Fu(e, 134217728)
    }
};
tp = function(e) {
    if (e.tag === 13) {
        var t = kn(e),
            n = Wt(e, t);
        if (n !== null) {
            var r = Me();
            yt(n, e, t, r)
        }
        Fu(e, t)
    }
};
np = function() {
    return Z
};
rp = function(e, t) {
    var n = Z;
    try {
        return Z = e, t()
    } finally {
        Z = n
    }
};
Gl = function(e, t, n) {
    switch (t) {
        case "input":
            if (Bl(e, n), t = n.name, n.type === "radio" && t != null) {
                for (n = e; n.parentNode;) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var o = Ns(r);
                        if (!o) throw Error(R(90));
                        Lf(r), Bl(r, o)
                    }
                }
            }
            break;
        case "textarea":
            Df(e, n);
            break;
        case "select":
            t = n.value, t != null && wr(e, !!n.multiple, t, !1)
    }
};
Vf = _u;
Hf = Jn;
var l0 = {
        usingClientEntryPoint: !1,
        Events: [Zo, fr, Ns, Uf, Bf, _u]
    },
    lo = {
        findFiberByHostInstance: Fn,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    },
    a0 = {
        bundleType: lo.bundleType,
        version: lo.version,
        rendererPackageName: lo.rendererPackageName,
        rendererConfig: lo.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Gt.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = Kf(e), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: lo.findFiberByHostInstance || i0,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ci = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ci.isDisabled && Ci.supportsFiber) try {
        Cs = Ci.inject(a0), jt = Ci
    } catch {}
}
tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = l0;
tt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!$u(t)) throw Error(R(200));
    return o0(e, t, null, n)
};
tt.createRoot = function(e, t) {
    if (!$u(e)) throw Error(R(299));
    var n = !1,
        r = "",
        o = bh;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = Iu(e, 1, !1, null, null, n, !1, r, o), e[Ht] = t.current, Lo(e.nodeType === 8 ? e.parentNode : e), new zu(t)
};
tt.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(R(188)) : (e = Object.keys(e).join(","), Error(R(268, e)));
    return e = Kf(t), e = e === null ? null : e.stateNode, e
};
tt.flushSync = function(e) {
    return Jn(e)
};
tt.hydrate = function(e, t, n) {
    if (!Ds(t)) throw Error(R(200));
    return Is(null, e, t, !0, n)
};
tt.hydrateRoot = function(e, t, n) {
    if (!$u(e)) throw Error(R(405));
    var r = n != null && n.hydratedSources || null,
        o = !1,
        i = "",
        s = bh;
    if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = kh(t, null, e, 1, n ? ? null, o, !1, i, s), e[Ht] = t.current, Lo(e), r)
        for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
    return new Ms(t)
};
tt.render = function(e, t, n) {
    if (!Ds(t)) throw Error(R(200));
    return Is(null, e, t, !1, n)
};
tt.unmountComponentAtNode = function(e) {
    if (!Ds(e)) throw Error(R(40));
    return e._reactRootContainer ? (Jn(function() {
        Is(null, null, e, !1, function() {
            e._reactRootContainer = null, e[Ht] = null
        })
    }), !0) : !1
};
tt.unstable_batchedUpdates = _u;
tt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Ds(n)) throw Error(R(200));
    if (e == null || e._reactInternals === void 0) throw Error(R(38));
    return Is(e, t, n, !1, r)
};
tt.version = "18.3.1-next-f1338f8080-20240426";

function Ph() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ph)
    } catch (e) {
        console.error(e)
    }
}
Ph(), Pf.exports = tt;
var Gr = Pf.exports;
const Nh = hf(Gr);
var Th, yd = Gr;
Th = yd.createRoot, yd.hydrateRoot;
const u0 = 1,
    c0 = 1e6;
let Rl = 0;

function d0() {
    return Rl = (Rl + 1) % Number.MAX_SAFE_INTEGER, Rl.toString()
}
const Ol = new Map,
    wd = e => {
        if (Ol.has(e)) return;
        const t = setTimeout(() => {
            Ol.delete(e), ko({
                type: "REMOVE_TOAST",
                toastId: e
            })
        }, c0);
        Ol.set(e, t)
    },
    f0 = (e, t) => {
        switch (t.type) {
            case "ADD_TOAST":
                return { ...e,
                    toasts: [t.toast, ...e.toasts].slice(0, u0)
                };
            case "UPDATE_TOAST":
                return { ...e,
                    toasts: e.toasts.map(n => n.id === t.toast.id ? { ...n,
                        ...t.toast
                    } : n)
                };
            case "DISMISS_TOAST":
                {
                    const {
                        toastId: n
                    } = t;
                    return n ? wd(n) : e.toasts.forEach(r => {
                        wd(r.id)
                    }),
                    { ...e,
                        toasts: e.toasts.map(r => r.id === n || n === void 0 ? { ...r,
                            open: !1
                        } : r)
                    }
                }
            case "REMOVE_TOAST":
                return t.toastId === void 0 ? { ...e,
                    toasts: []
                } : { ...e,
                    toasts: e.toasts.filter(n => n.id !== t.toastId)
                }
        }
    },
    Bi = [];
let Vi = {
    toasts: []
};

function ko(e) {
    Vi = f0(Vi, e), Bi.forEach(t => {
        t(Vi)
    })
}

function p0({ ...e
}) {
    const t = d0(),
        n = o => ko({
            type: "UPDATE_TOAST",
            toast: { ...o,
                id: t
            }
        }),
        r = () => ko({
            type: "DISMISS_TOAST",
            toastId: t
        });
    return ko({
        type: "ADD_TOAST",
        toast: { ...e,
            id: t,
            open: !0,
            onOpenChange: o => {
                o || r()
            }
        }
    }), {
        id: t,
        dismiss: r,
        update: n
    }
}

function h0() {
    const [e, t] = g.useState(Vi);
    return g.useEffect(() => (Bi.push(t), () => {
        const n = Bi.indexOf(t);
        n > -1 && Bi.splice(n, 1)
    }), [e]), { ...e,
        toast: p0,
        dismiss: n => ko({
            type: "DISMISS_TOAST",
            toastId: n
        })
    }
}

function pe(e, t, {
    checkForDefaultPrevented: n = !0
} = {}) {
    return function(o) {
        if (e == null || e(o), n === !1 || !o.defaultPrevented) return t == null ? void 0 : t(o)
    }
}

function m0(e, t) {
    typeof e == "function" ? e(t) : e != null && (e.current = t)
}

function Rh(...e) {
    return t => e.forEach(n => m0(n, t))
}

function Ve(...e) {
    return g.useCallback(Rh(...e), e)
}

function Fs(e, t = []) {
    let n = [];

    function r(i, s) {
        const l = g.createContext(s),
            a = n.length;
        n = [...n, s];

        function u(f) {
            const {
                scope: c,
                children: v,
                ...x
            } = f, w = (c == null ? void 0 : c[e][a]) || l, E = g.useMemo(() => x, Object.values(x));
            return y.jsx(w.Provider, {
                value: E,
                children: v
            })
        }

        function d(f, c) {
            const v = (c == null ? void 0 : c[e][a]) || l,
                x = g.useContext(v);
            if (x) return x;
            if (s !== void 0) return s;
            throw new Error(`\`${f}\` must be used within \`${i}\``)
        }
        return u.displayName = i + "Provider", [u, d]
    }
    const o = () => {
        const i = n.map(s => g.createContext(s));
        return function(l) {
            const a = (l == null ? void 0 : l[e]) || i;
            return g.useMemo(() => ({
                [`__scope${e}`]: { ...l,
                    [e]: a
                }
            }), [l, a])
        }
    };
    return o.scopeName = e, [r, g0(o, ...t)]
}

function g0(...e) {
    const t = e[0];
    if (e.length === 1) return t;
    const n = () => {
        const r = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(i) {
            const s = r.reduce((l, {
                useScope: a,
                scopeName: u
            }) => {
                const f = a(i)[`__scope${u}`];
                return { ...l,
                    ...f
                }
            }, {});
            return g.useMemo(() => ({
                [`__scope${t.scopeName}`]: s
            }), [s])
        }
    };
    return n.scopeName = t.scopeName, n
}
var Vo = g.forwardRef((e, t) => {
    const {
        children: n,
        ...r
    } = e, o = g.Children.toArray(n), i = o.find(v0);
    if (i) {
        const s = i.props.children,
            l = o.map(a => a === i ? g.Children.count(s) > 1 ? g.Children.only(null) : g.isValidElement(s) ? s.props.children : null : a);
        return y.jsx(Ta, { ...r,
            ref: t,
            children: g.isValidElement(s) ? g.cloneElement(s, void 0, l) : null
        })
    }
    return y.jsx(Ta, { ...r,
        ref: t,
        children: n
    })
});
Vo.displayName = "Slot";
var Ta = g.forwardRef((e, t) => {
    const {
        children: n,
        ...r
    } = e;
    if (g.isValidElement(n)) {
        const o = w0(n);
        return g.cloneElement(n, { ...y0(r, n.props),
            ref: t ? Rh(t, o) : o
        })
    }
    return g.Children.count(n) > 1 ? g.Children.only(null) : null
});
Ta.displayName = "SlotClone";
var Oh = ({
    children: e
}) => y.jsx(y.Fragment, {
    children: e
});

function v0(e) {
    return g.isValidElement(e) && e.type === Oh
}

function y0(e, t) {
    const n = { ...t
    };
    for (const r in t) {
        const o = e[r],
            i = t[r];
        /^on[A-Z]/.test(r) ? o && i ? n[r] = (...l) => {
            i(...l), o(...l)
        } : o && (n[r] = o) : r === "style" ? n[r] = { ...o,
            ...i
        } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "))
    }
    return { ...e,
        ...n
    }
}

function w0(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}

function x0(e) {
    const t = e + "CollectionProvider",
        [n, r] = Fs(t),
        [o, i] = n(t, {
            collectionRef: {
                current: null
            },
            itemMap: new Map
        }),
        s = v => {
            const {
                scope: x,
                children: w
            } = v, E = j.useRef(null), h = j.useRef(new Map).current;
            return y.jsx(o, {
                scope: x,
                itemMap: h,
                collectionRef: E,
                children: w
            })
        };
    s.displayName = t;
    const l = e + "CollectionSlot",
        a = j.forwardRef((v, x) => {
            const {
                scope: w,
                children: E
            } = v, h = i(l, w), p = Ve(x, h.collectionRef);
            return y.jsx(Vo, {
                ref: p,
                children: E
            })
        });
    a.displayName = l;
    const u = e + "CollectionItemSlot",
        d = "data-radix-collection-item",
        f = j.forwardRef((v, x) => {
            const {
                scope: w,
                children: E,
                ...h
            } = v, p = j.useRef(null), m = Ve(x, p), S = i(u, w);
            return j.useEffect(() => (S.itemMap.set(p, {
                ref: p,
                ...h
            }), () => void S.itemMap.delete(p))), y.jsx(Vo, {
                [d]: "",
                ref: m,
                children: E
            })
        });
    f.displayName = u;

    function c(v) {
        const x = i(e + "CollectionConsumer", v);
        return j.useCallback(() => {
            const E = x.collectionRef.current;
            if (!E) return [];
            const h = Array.from(E.querySelectorAll(`[${d}]`));
            return Array.from(x.itemMap.values()).sort((S, C) => h.indexOf(S.ref.current) - h.indexOf(C.ref.current))
        }, [x.collectionRef, x.itemMap])
    }
    return [{
        Provider: s,
        Slot: a,
        ItemSlot: f
    }, c, r]
}
var E0 = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"],
    we = E0.reduce((e, t) => {
        const n = g.forwardRef((r, o) => {
            const {
                asChild: i,
                ...s
            } = r, l = i ? Vo : t;
            return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), y.jsx(l, { ...s,
                ref: o
            })
        });
        return n.displayName = `Primitive.${t}`, { ...e,
            [t]: n
        }
    }, {});

function Uu(e, t) {
    e && Gr.flushSync(() => e.dispatchEvent(t))
}

function et(e) {
    const t = g.useRef(e);
    return g.useEffect(() => {
        t.current = e
    }), g.useMemo(() => (...n) => {
        var r;
        return (r = t.current) == null ? void 0 : r.call(t, ...n)
    }, [])
}

function jh(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = et(e);
    g.useEffect(() => {
        const r = o => {
            o.key === "Escape" && n(o)
        };
        return t.addEventListener("keydown", r, {
            capture: !0
        }), () => t.removeEventListener("keydown", r, {
            capture: !0
        })
    }, [n, t])
}
var S0 = "DismissableLayer",
    Ra = "dismissableLayer.update",
    C0 = "dismissableLayer.pointerDownOutside",
    k0 = "dismissableLayer.focusOutside",
    xd, Ah = g.createContext({
        layers: new Set,
        layersWithOutsidePointerEventsDisabled: new Set,
        branches: new Set
    }),
    _h = g.forwardRef((e, t) => {
        const {
            disableOutsidePointerEvents: n = !1,
            onEscapeKeyDown: r,
            onPointerDownOutside: o,
            onFocusOutside: i,
            onInteractOutside: s,
            onDismiss: l,
            ...a
        } = e, u = g.useContext(Ah), [d, f] = g.useState(null), c = (d == null ? void 0 : d.ownerDocument) ? ? (globalThis == null ? void 0 : globalThis.document), [, v] = g.useState({}), x = Ve(t, k => f(k)), w = Array.from(u.layers), [E] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), h = w.indexOf(E), p = d ? w.indexOf(d) : -1, m = u.layersWithOutsidePointerEventsDisabled.size > 0, S = p >= h, C = P0(k => {
            const N = k.target,
                M = [...u.branches].some(A => A.contains(N));
            !S || M || (o == null || o(k), s == null || s(k), k.defaultPrevented || l == null || l())
        }, c), P = N0(k => {
            const N = k.target;
            [...u.branches].some(A => A.contains(N)) || (i == null || i(k), s == null || s(k), k.defaultPrevented || l == null || l())
        }, c);
        return jh(k => {
            p === u.layers.size - 1 && (r == null || r(k), !k.defaultPrevented && l && (k.preventDefault(), l()))
        }, c), g.useEffect(() => {
            if (d) return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (xd = c.body.style.pointerEvents, c.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(d)), u.layers.add(d), Ed(), () => {
                n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (c.body.style.pointerEvents = xd)
            }
        }, [d, c, n, u]), g.useEffect(() => () => {
            d && (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), Ed())
        }, [d, u]), g.useEffect(() => {
            const k = () => v({});
            return document.addEventListener(Ra, k), () => document.removeEventListener(Ra, k)
        }, []), y.jsx(we.div, { ...a,
            ref: x,
            style: {
                pointerEvents: m ? S ? "auto" : "none" : void 0,
                ...e.style
            },
            onFocusCapture: pe(e.onFocusCapture, P.onFocusCapture),
            onBlurCapture: pe(e.onBlurCapture, P.onBlurCapture),
            onPointerDownCapture: pe(e.onPointerDownCapture, C.onPointerDownCapture)
        })
    });
_h.displayName = S0;
var b0 = "DismissableLayerBranch",
    Lh = g.forwardRef((e, t) => {
        const n = g.useContext(Ah),
            r = g.useRef(null),
            o = Ve(t, r);
        return g.useEffect(() => {
            const i = r.current;
            if (i) return n.branches.add(i), () => {
                n.branches.delete(i)
            }
        }, [n.branches]), y.jsx(we.div, { ...e,
            ref: o
        })
    });
Lh.displayName = b0;

function P0(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = et(e),
        r = g.useRef(!1),
        o = g.useRef(() => {});
    return g.useEffect(() => {
        const i = l => {
                if (l.target && !r.current) {
                    let a = function() {
                        Mh(C0, n, u, {
                            discrete: !0
                        })
                    };
                    const u = {
                        originalEvent: l
                    };
                    l.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = a, t.addEventListener("click", o.current, {
                        once: !0
                    })) : a()
                } else t.removeEventListener("click", o.current);
                r.current = !1
            },
            s = window.setTimeout(() => {
                t.addEventListener("pointerdown", i)
            }, 0);
        return () => {
            window.clearTimeout(s), t.removeEventListener("pointerdown", i), t.removeEventListener("click", o.current)
        }
    }, [t, n]), {
        onPointerDownCapture: () => r.current = !0
    }
}

function N0(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = et(e),
        r = g.useRef(!1);
    return g.useEffect(() => {
        const o = i => {
            i.target && !r.current && Mh(k0, n, {
                originalEvent: i
            }, {
                discrete: !1
            })
        };
        return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o)
    }, [t, n]), {
        onFocusCapture: () => r.current = !0,
        onBlurCapture: () => r.current = !1
    }
}

function Ed() {
    const e = new CustomEvent(Ra);
    document.dispatchEvent(e)
}

function Mh(e, t, n, {
    discrete: r
}) {
    const o = n.originalEvent.target,
        i = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: n
        });
    t && o.addEventListener(e, t, {
        once: !0
    }), r ? Uu(o, i) : o.dispatchEvent(i)
}
var T0 = _h,
    R0 = Lh,
    xt = globalThis != null && globalThis.document ? g.useLayoutEffect : () => {},
    O0 = "Portal",
    Dh = g.forwardRef((e, t) => {
        var l;
        const {
            container: n,
            ...r
        } = e, [o, i] = g.useState(!1);
        xt(() => i(!0), []);
        const s = n || o && ((l = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : l.body);
        return s ? Nh.createPortal(y.jsx(we.div, { ...r,
            ref: t
        }), s) : null
    });
Dh.displayName = O0;

function j0(e, t) {
    return g.useReducer((n, r) => t[n][r] ? ? n, e)
}
var Ih = e => {
    const {
        present: t,
        children: n
    } = e, r = A0(t), o = typeof n == "function" ? n({
        present: r.isPresent
    }) : g.Children.only(n), i = Ve(r.ref, _0(o));
    return typeof n == "function" || r.isPresent ? g.cloneElement(o, {
        ref: i
    }) : null
};
Ih.displayName = "Presence";

function A0(e) {
    const [t, n] = g.useState(), r = g.useRef({}), o = g.useRef(e), i = g.useRef("none"), s = e ? "mounted" : "unmounted", [l, a] = j0(s, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return g.useEffect(() => {
        const u = ki(r.current);
        i.current = l === "mounted" ? u : "none"
    }, [l]), xt(() => {
        const u = r.current,
            d = o.current;
        if (d !== e) {
            const c = i.current,
                v = ki(u);
            e ? a("MOUNT") : v === "none" || (u == null ? void 0 : u.display) === "none" ? a("UNMOUNT") : a(d && c !== v ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e
        }
    }, [e, a]), xt(() => {
        if (t) {
            const u = f => {
                    const v = ki(r.current).includes(f.animationName);
                    f.target === t && v && Gr.flushSync(() => a("ANIMATION_END"))
                },
                d = f => {
                    f.target === t && (i.current = ki(r.current))
                };
            return t.addEventListener("animationstart", d), t.addEventListener("animationcancel", u), t.addEventListener("animationend", u), () => {
                t.removeEventListener("animationstart", d), t.removeEventListener("animationcancel", u), t.removeEventListener("animationend", u)
            }
        } else a("ANIMATION_END")
    }, [t, a]), {
        isPresent: ["mounted", "unmountSuspended"].includes(l),
        ref: g.useCallback(u => {
            u && (r.current = getComputedStyle(u)), n(u)
        }, [])
    }
}

function ki(e) {
    return (e == null ? void 0 : e.animationName) || "none"
}

function _0(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}

function L0({
    prop: e,
    defaultProp: t,
    onChange: n = () => {}
}) {
    const [r, o] = M0({
        defaultProp: t,
        onChange: n
    }), i = e !== void 0, s = i ? e : r, l = et(n), a = g.useCallback(u => {
        if (i) {
            const f = typeof u == "function" ? u(e) : u;
            f !== e && l(f)
        } else o(u)
    }, [i, e, o, l]);
    return [s, a]
}

function M0({
    defaultProp: e,
    onChange: t
}) {
    const n = g.useState(e),
        [r] = n,
        o = g.useRef(r),
        i = et(t);
    return g.useEffect(() => {
        o.current !== r && (i(r), o.current = r)
    }, [r, o, i]), n
}
var D0 = "VisuallyHidden",
    zs = g.forwardRef((e, t) => y.jsx(we.span, { ...e,
        ref: t,
        style: {
            position: "absolute",
            border: 0,
            width: 1,
            height: 1,
            padding: 0,
            margin: -1,
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            wordWrap: "normal",
            ...e.style
        }
    }));
zs.displayName = D0;
var I0 = zs,
    Bu = "ToastProvider",
    [Vu, F0, z0] = x0("Toast"),
    [Fh, jS] = Fs("Toast", [z0]),
    [$0, $s] = Fh(Bu),
    zh = e => {
        const {
            __scopeToast: t,
            label: n = "Notification",
            duration: r = 5e3,
            swipeDirection: o = "right",
            swipeThreshold: i = 50,
            children: s
        } = e, [l, a] = g.useState(null), [u, d] = g.useState(0), f = g.useRef(!1), c = g.useRef(!1);
        return n.trim() || console.error(`Invalid prop \`label\` supplied to \`${Bu}\`. Expected non-empty \`string\`.`), y.jsx(Vu.Provider, {
            scope: t,
            children: y.jsx($0, {
                scope: t,
                label: n,
                duration: r,
                swipeDirection: o,
                swipeThreshold: i,
                toastCount: u,
                viewport: l,
                onViewportChange: a,
                onToastAdd: g.useCallback(() => d(v => v + 1), []),
                onToastRemove: g.useCallback(() => d(v => v - 1), []),
                isFocusedToastEscapeKeyDownRef: f,
                isClosePausedRef: c,
                children: s
            })
        })
    };
zh.displayName = Bu;
var $h = "ToastViewport",
    U0 = ["F8"],
    Oa = "toast.viewportPause",
    ja = "toast.viewportResume",
    Uh = g.forwardRef((e, t) => {
        const {
            __scopeToast: n,
            hotkey: r = U0,
            label: o = "Notifications ({hotkey})",
            ...i
        } = e, s = $s($h, n), l = F0(n), a = g.useRef(null), u = g.useRef(null), d = g.useRef(null), f = g.useRef(null), c = Ve(t, f, s.onViewportChange), v = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""), x = s.toastCount > 0;
        g.useEffect(() => {
            const E = h => {
                var m;
                r.every(S => h[S] || h.code === S) && ((m = f.current) == null || m.focus())
            };
            return document.addEventListener("keydown", E), () => document.removeEventListener("keydown", E)
        }, [r]), g.useEffect(() => {
            const E = a.current,
                h = f.current;
            if (x && E && h) {
                const p = () => {
                        if (!s.isClosePausedRef.current) {
                            const P = new CustomEvent(Oa);
                            h.dispatchEvent(P), s.isClosePausedRef.current = !0
                        }
                    },
                    m = () => {
                        if (s.isClosePausedRef.current) {
                            const P = new CustomEvent(ja);
                            h.dispatchEvent(P), s.isClosePausedRef.current = !1
                        }
                    },
                    S = P => {
                        !E.contains(P.relatedTarget) && m()
                    },
                    C = () => {
                        E.contains(document.activeElement) || m()
                    };
                return E.addEventListener("focusin", p), E.addEventListener("focusout", S), E.addEventListener("pointermove", p), E.addEventListener("pointerleave", C), window.addEventListener("blur", p), window.addEventListener("focus", m), () => {
                    E.removeEventListener("focusin", p), E.removeEventListener("focusout", S), E.removeEventListener("pointermove", p), E.removeEventListener("pointerleave", C), window.removeEventListener("blur", p), window.removeEventListener("focus", m)
                }
            }
        }, [x, s.isClosePausedRef]);
        const w = g.useCallback(({
            tabbingDirection: E
        }) => {
            const p = l().map(m => {
                const S = m.ref.current,
                    C = [S, ...ew(S)];
                return E === "forwards" ? C : C.reverse()
            });
            return (E === "forwards" ? p.reverse() : p).flat()
        }, [l]);
        return g.useEffect(() => {
            const E = f.current;
            if (E) {
                const h = p => {
                    var C, P, k;
                    const m = p.altKey || p.ctrlKey || p.metaKey;
                    if (p.key === "Tab" && !m) {
                        const N = document.activeElement,
                            M = p.shiftKey;
                        if (p.target === E && M) {
                            (C = u.current) == null || C.focus();
                            return
                        }
                        const I = w({
                                tabbingDirection: M ? "backwards" : "forwards"
                            }),
                            W = I.findIndex(_ => _ === N);
                        jl(I.slice(W + 1)) ? p.preventDefault() : M ? (P = u.current) == null || P.focus() : (k = d.current) == null || k.focus()
                    }
                };
                return E.addEventListener("keydown", h), () => E.removeEventListener("keydown", h)
            }
        }, [l, w]), y.jsxs(R0, {
            ref: a,
            role: "region",
            "aria-label": o.replace("{hotkey}", v),
            tabIndex: -1,
            style: {
                pointerEvents: x ? void 0 : "none"
            },
            children: [x && y.jsx(Aa, {
                ref: u,
                onFocusFromOutsideViewport: () => {
                    const E = w({
                        tabbingDirection: "forwards"
                    });
                    jl(E)
                }
            }), y.jsx(Vu.Slot, {
                scope: n,
                children: y.jsx(we.ol, {
                    tabIndex: -1,
                    ...i,
                    ref: c
                })
            }), x && y.jsx(Aa, {
                ref: d,
                onFocusFromOutsideViewport: () => {
                    const E = w({
                        tabbingDirection: "backwards"
                    });
                    jl(E)
                }
            })]
        })
    });
Uh.displayName = $h;
var Bh = "ToastFocusProxy",
    Aa = g.forwardRef((e, t) => {
        const {
            __scopeToast: n,
            onFocusFromOutsideViewport: r,
            ...o
        } = e, i = $s(Bh, n);
        return y.jsx(zs, {
            "aria-hidden": !0,
            tabIndex: 0,
            ...o,
            ref: t,
            style: {
                position: "fixed"
            },
            onFocus: s => {
                var u;
                const l = s.relatedTarget;
                !((u = i.viewport) != null && u.contains(l)) && r()
            }
        })
    });
Aa.displayName = Bh;
var Us = "Toast",
    B0 = "toast.swipeStart",
    V0 = "toast.swipeMove",
    H0 = "toast.swipeCancel",
    W0 = "toast.swipeEnd",
    Vh = g.forwardRef((e, t) => {
        const {
            forceMount: n,
            open: r,
            defaultOpen: o,
            onOpenChange: i,
            ...s
        } = e, [l = !0, a] = L0({
            prop: r,
            defaultProp: o,
            onChange: i
        });
        return y.jsx(Ih, {
            present: n || l,
            children: y.jsx(Y0, {
                open: l,
                ...s,
                ref: t,
                onClose: () => a(!1),
                onPause: et(e.onPause),
                onResume: et(e.onResume),
                onSwipeStart: pe(e.onSwipeStart, u => {
                    u.currentTarget.setAttribute("data-swipe", "start")
                }),
                onSwipeMove: pe(e.onSwipeMove, u => {
                    const {
                        x: d,
                        y: f
                    } = u.detail.delta;
                    u.currentTarget.setAttribute("data-swipe", "move"), u.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${d}px`), u.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${f}px`)
                }),
                onSwipeCancel: pe(e.onSwipeCancel, u => {
                    u.currentTarget.setAttribute("data-swipe", "cancel"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
                }),
                onSwipeEnd: pe(e.onSwipeEnd, u => {
                    const {
                        x: d,
                        y: f
                    } = u.detail.delta;
                    u.currentTarget.setAttribute("data-swipe", "end"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), u.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${d}px`), u.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${f}px`), a(!1)
                })
            })
        })
    });
Vh.displayName = Us;
var [Q0, K0] = Fh(Us, {
    onClose() {}
}), Y0 = g.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        type: r = "foreground",
        duration: o,
        open: i,
        onClose: s,
        onEscapeKeyDown: l,
        onPause: a,
        onResume: u,
        onSwipeStart: d,
        onSwipeMove: f,
        onSwipeCancel: c,
        onSwipeEnd: v,
        ...x
    } = e, w = $s(Us, n), [E, h] = g.useState(null), p = Ve(t, _ => h(_)), m = g.useRef(null), S = g.useRef(null), C = o || w.duration, P = g.useRef(0), k = g.useRef(C), N = g.useRef(0), {
        onToastAdd: M,
        onToastRemove: A
    } = w, $ = et(() => {
        var Q;
        (E == null ? void 0 : E.contains(document.activeElement)) && ((Q = w.viewport) == null || Q.focus()), s()
    }), I = g.useCallback(_ => {
        !_ || _ === 1 / 0 || (window.clearTimeout(N.current), P.current = new Date().getTime(), N.current = window.setTimeout($, _))
    }, [$]);
    g.useEffect(() => {
        const _ = w.viewport;
        if (_) {
            const Q = () => {
                    I(k.current), u == null || u()
                },
                U = () => {
                    const K = new Date().getTime() - P.current;
                    k.current = k.current - K, window.clearTimeout(N.current), a == null || a()
                };
            return _.addEventListener(Oa, U), _.addEventListener(ja, Q), () => {
                _.removeEventListener(Oa, U), _.removeEventListener(ja, Q)
            }
        }
    }, [w.viewport, C, a, u, I]), g.useEffect(() => {
        i && !w.isClosePausedRef.current && I(C)
    }, [i, C, w.isClosePausedRef, I]), g.useEffect(() => (M(), () => A()), [M, A]);
    const W = g.useMemo(() => E ? Xh(E) : null, [E]);
    return w.viewport ? y.jsxs(y.Fragment, {
        children: [W && y.jsx(G0, {
            __scopeToast: n,
            role: "status",
            "aria-live": r === "foreground" ? "assertive" : "polite",
            "aria-atomic": !0,
            children: W
        }), y.jsx(Q0, {
            scope: n,
            onClose: $,
            children: Gr.createPortal(y.jsx(Vu.ItemSlot, {
                scope: n,
                children: y.jsx(T0, {
                    asChild: !0,
                    onEscapeKeyDown: pe(l, () => {
                        w.isFocusedToastEscapeKeyDownRef.current || $(), w.isFocusedToastEscapeKeyDownRef.current = !1
                    }),
                    children: y.jsx(we.li, {
                        role: "status",
                        "aria-live": "off",
                        "aria-atomic": !0,
                        tabIndex: 0,
                        "data-state": i ? "open" : "closed",
                        "data-swipe-direction": w.swipeDirection,
                        ...x,
                        ref: p,
                        style: {
                            userSelect: "none",
                            touchAction: "none",
                            ...e.style
                        },
                        onKeyDown: pe(e.onKeyDown, _ => {
                            _.key === "Escape" && (l == null || l(_.nativeEvent), _.nativeEvent.defaultPrevented || (w.isFocusedToastEscapeKeyDownRef.current = !0, $()))
                        }),
                        onPointerDown: pe(e.onPointerDown, _ => {
                            _.button === 0 && (m.current = {
                                x: _.clientX,
                                y: _.clientY
                            })
                        }),
                        onPointerMove: pe(e.onPointerMove, _ => {
                            if (!m.current) return;
                            const Q = _.clientX - m.current.x,
                                U = _.clientY - m.current.y,
                                K = !!S.current,
                                b = ["left", "right"].includes(w.swipeDirection),
                                O = ["left", "up"].includes(w.swipeDirection) ? Math.min : Math.max,
                                F = b ? O(0, Q) : 0,
                                D = b ? 0 : O(0, U),
                                z = _.pointerType === "touch" ? 10 : 2,
                                G = {
                                    x: F,
                                    y: D
                                },
                                le = {
                                    originalEvent: _,
                                    delta: G
                                };
                            K ? (S.current = G, bi(V0, f, le, {
                                discrete: !1
                            })) : Sd(G, w.swipeDirection, z) ? (S.current = G, bi(B0, d, le, {
                                discrete: !1
                            }), _.target.setPointerCapture(_.pointerId)) : (Math.abs(Q) > z || Math.abs(U) > z) && (m.current = null)
                        }),
                        onPointerUp: pe(e.onPointerUp, _ => {
                            const Q = S.current,
                                U = _.target;
                            if (U.hasPointerCapture(_.pointerId) && U.releasePointerCapture(_.pointerId), S.current = null, m.current = null, Q) {
                                const K = _.currentTarget,
                                    b = {
                                        originalEvent: _,
                                        delta: Q
                                    };
                                Sd(Q, w.swipeDirection, w.swipeThreshold) ? bi(W0, v, b, {
                                    discrete: !0
                                }) : bi(H0, c, b, {
                                    discrete: !0
                                }), K.addEventListener("click", O => O.preventDefault(), {
                                    once: !0
                                })
                            }
                        })
                    })
                })
            }), w.viewport)
        })]
    }) : null
}), G0 = e => {
    const {
        __scopeToast: t,
        children: n,
        ...r
    } = e, o = $s(Us, t), [i, s] = g.useState(!1), [l, a] = g.useState(!1);
    return J0(() => s(!0)), g.useEffect(() => {
        const u = window.setTimeout(() => a(!0), 1e3);
        return () => window.clearTimeout(u)
    }, []), l ? null : y.jsx(Dh, {
        asChild: !0,
        children: y.jsx(zs, { ...r,
            children: i && y.jsxs(y.Fragment, {
                children: [o.label, " ", n]
            })
        })
    })
}, X0 = "ToastTitle", Hh = g.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        ...r
    } = e;
    return y.jsx(we.div, { ...r,
        ref: t
    })
});
Hh.displayName = X0;
var q0 = "ToastDescription",
    Wh = g.forwardRef((e, t) => {
        const {
            __scopeToast: n,
            ...r
        } = e;
        return y.jsx(we.div, { ...r,
            ref: t
        })
    });
Wh.displayName = q0;
var Qh = "ToastAction",
    Kh = g.forwardRef((e, t) => {
        const {
            altText: n,
            ...r
        } = e;
        return n.trim() ? y.jsx(Gh, {
            altText: n,
            asChild: !0,
            children: y.jsx(Hu, { ...r,
                ref: t
            })
        }) : (console.error(`Invalid prop \`altText\` supplied to \`${Qh}\`. Expected non-empty \`string\`.`), null)
    });
Kh.displayName = Qh;
var Yh = "ToastClose",
    Hu = g.forwardRef((e, t) => {
        const {
            __scopeToast: n,
            ...r
        } = e, o = K0(Yh, n);
        return y.jsx(Gh, {
            asChild: !0,
            children: y.jsx(we.button, {
                type: "button",
                ...r,
                ref: t,
                onClick: pe(e.onClick, o.onClose)
            })
        })
    });
Hu.displayName = Yh;
var Gh = g.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        altText: r,
        ...o
    } = e;
    return y.jsx(we.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": r || void 0,
        ...o,
        ref: t
    })
});

function Xh(e) {
    const t = [];
    return Array.from(e.childNodes).forEach(r => {
        if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent), Z0(r)) {
            const o = r.ariaHidden || r.hidden || r.style.display === "none",
                i = r.dataset.radixToastAnnounceExclude === "";
            if (!o)
                if (i) {
                    const s = r.dataset.radixToastAnnounceAlt;
                    s && t.push(s)
                } else t.push(...Xh(r))
        }
    }), t
}

function bi(e, t, n, {
    discrete: r
}) {
    const o = n.originalEvent.currentTarget,
        i = new CustomEvent(e, {
            bubbles: !0,
            cancelable: !0,
            detail: n
        });
    t && o.addEventListener(e, t, {
        once: !0
    }), r ? Uu(o, i) : o.dispatchEvent(i)
}
var Sd = (e, t, n = 0) => {
    const r = Math.abs(e.x),
        o = Math.abs(e.y),
        i = r > o;
    return t === "left" || t === "right" ? i && r > n : !i && o > n
};

function J0(e = () => {}) {
    const t = et(e);
    xt(() => {
        let n = 0,
            r = 0;
        return n = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
            window.cancelAnimationFrame(n), window.cancelAnimationFrame(r)
        }
    }, [t])
}

function Z0(e) {
    return e.nodeType === e.ELEMENT_NODE
}

function ew(e) {
    const t = [],
        n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: r => {
                const o = r.tagName === "INPUT" && r.type === "hidden";
                return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
        });
    for (; n.nextNode();) t.push(n.currentNode);
    return t
}

function jl(e) {
    const t = document.activeElement;
    return e.some(n => n === t ? !0 : (n.focus(), document.activeElement !== t))
}
var tw = zh,
    qh = Uh,
    Jh = Vh,
    Zh = Hh,
    em = Wh,
    tm = Kh,
    nm = Hu;

function rm(e) {
    var t, n, r = "";
    if (typeof e == "string" || typeof e == "number") r += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var o = e.length;
            for (t = 0; t < o; t++) e[t] && (n = rm(e[t])) && (r && (r += " "), r += n)
        } else
            for (n in e) e[n] && (r && (r += " "), r += n);
    return r
}

function om() {
    for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)(e = arguments[n]) && (t = rm(e)) && (r && (r += " "), r += t);
    return r
}
const Cd = e => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e,
    kd = om,
    im = (e, t) => n => {
        var r;
        if ((t == null ? void 0 : t.variants) == null) return kd(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
        const {
            variants: o,
            defaultVariants: i
        } = t, s = Object.keys(o).map(u => {
            const d = n == null ? void 0 : n[u],
                f = i == null ? void 0 : i[u];
            if (d === null) return null;
            const c = Cd(d) || Cd(f);
            return o[u][c]
        }), l = n && Object.entries(n).reduce((u, d) => {
            let [f, c] = d;
            return c === void 0 || (u[f] = c), u
        }, {}), a = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((u, d) => {
            let {
                class: f,
                className: c,
                ...v
            } = d;
            return Object.entries(v).every(x => {
                let [w, E] = x;
                return Array.isArray(E) ? E.includes({ ...i,
                    ...l
                }[w]) : { ...i,
                    ...l
                }[w] === E
            }) ? [...u, f, c] : u
        }, []);
        return kd(e, s, a, n == null ? void 0 : n.class, n == null ? void 0 : n.className)
    };
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nw = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
    sm = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var rw = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ow = g.forwardRef(({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: i,
    iconNode: s,
    ...l
}, a) => g.createElement("svg", {
    ref: a,
    ...rw,
    width: t,
    height: t,
    stroke: e,
    strokeWidth: r ? Number(n) * 24 / Number(t) : n,
    className: sm("lucide", o),
    ...l
}, [...s.map(([u, d]) => g.createElement(u, d)), ...Array.isArray(i) ? i : [i]]));
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lt = (e, t) => {
    const n = g.forwardRef(({
        className: r,
        ...o
    }, i) => g.createElement(ow, {
        ref: i,
        iconNode: t,
        className: sm(`lucide-${nw(e)}`, r),
        ...o
    }));
    return n.displayName = `${e}`, n
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wu = Lt("ArrowRight", [
    ["path", {
        d: "M5 12h14",
        key: "1ays0h"
    }],
    ["path", {
        d: "m12 5 7 7-7 7",
        key: "xquz4c"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const iw = Lt("Book", [
    ["path", {
        d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
        key: "k3hazp"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bo = Lt("Code", [
    ["polyline", {
        points: "16 18 22 12 16 6",
        key: "z7tu5w"
    }],
    ["polyline", {
        points: "8 6 2 12 8 18",
        key: "1eg1df"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bd = Lt("Database", [
    ["ellipse", {
        cx: "12",
        cy: "5",
        rx: "9",
        ry: "3",
        key: "msslwz"
    }],
    ["path", {
        d: "M3 5V19A9 3 0 0 0 21 19V5",
        key: "1wlel7"
    }],
    ["path", {
        d: "M3 12A9 3 0 0 0 21 12",
        key: "mv7ke4"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lm = Lt("Github", [
    ["path", {
        d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
        key: "tonef"
    }],
    ["path", {
        d: "M9 18c-4.51 2-5-2-7-2",
        key: "9comsn"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pd = Lt("Laptop", [
    ["path", {
        d: "M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16",
        key: "tarvll"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sw = Lt("Linkedin", [
    ["path", {
        d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
        key: "c2jq9f"
    }],
    ["rect", {
        width: "4",
        height: "12",
        x: "2",
        y: "9",
        key: "mk3on5"
    }],
    ["circle", {
        cx: "4",
        cy: "4",
        r: "2",
        key: "bt5ra8"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nd = Lt("Network", [
    ["rect", {
        x: "16",
        y: "16",
        width: "6",
        height: "6",
        rx: "1",
        key: "4q2zg0"
    }],
    ["rect", {
        x: "2",
        y: "16",
        width: "6",
        height: "6",
        rx: "1",
        key: "8cvhb9"
    }],
    ["rect", {
        x: "9",
        y: "2",
        width: "6",
        height: "6",
        rx: "1",
        key: "1egb70"
    }],
    ["path", {
        d: "M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",
        key: "1jsf9p"
    }],
    ["path", {
        d: "M12 12V8",
        key: "2874zd"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Td = Lt("Terminal", [
    ["polyline", {
        points: "4 17 10 11 4 5",
        key: "akl6gq"
    }],
    ["line", {
        x1: "12",
        x2: "20",
        y1: "19",
        y2: "19",
        key: "q2wloq"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lw = Lt("X", [
        ["path", {
            d: "M18 6 6 18",
            key: "1bl5f8"
        }],
        ["path", {
            d: "m6 6 12 12",
            key: "d8bk6v"
        }]
    ]),
    Qu = "-",
    aw = e => {
        const t = cw(e),
            {
                conflictingClassGroups: n,
                conflictingClassGroupModifiers: r
            } = e;
        return {
            getClassGroupId: s => {
                const l = s.split(Qu);
                return l[0] === "" && l.length !== 1 && l.shift(), am(l, t) || uw(s)
            },
            getConflictingClassGroupIds: (s, l) => {
                const a = n[s] || [];
                return l && r[s] ? [...a, ...r[s]] : a
            }
        }
    },
    am = (e, t) => {
        var s;
        if (e.length === 0) return t.classGroupId;
        const n = e[0],
            r = t.nextPart.get(n),
            o = r ? am(e.slice(1), r) : void 0;
        if (o) return o;
        if (t.validators.length === 0) return;
        const i = e.join(Qu);
        return (s = t.validators.find(({
            validator: l
        }) => l(i))) == null ? void 0 : s.classGroupId
    },
    Rd = /^\[(.+)\]$/,
    uw = e => {
        if (Rd.test(e)) {
            const t = Rd.exec(e)[1],
                n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
            if (n) return "arbitrary.." + n
        }
    },
    cw = e => {
        const {
            theme: t,
            prefix: n
        } = e, r = {
            nextPart: new Map,
            validators: []
        };
        return fw(Object.entries(e.classGroups), n).forEach(([i, s]) => {
            _a(s, r, i, t)
        }), r
    },
    _a = (e, t, n, r) => {
        e.forEach(o => {
            if (typeof o == "string") {
                const i = o === "" ? t : Od(t, o);
                i.classGroupId = n;
                return
            }
            if (typeof o == "function") {
                if (dw(o)) {
                    _a(o(r), t, n, r);
                    return
                }
                t.validators.push({
                    validator: o,
                    classGroupId: n
                });
                return
            }
            Object.entries(o).forEach(([i, s]) => {
                _a(s, Od(t, i), n, r)
            })
        })
    },
    Od = (e, t) => {
        let n = e;
        return t.split(Qu).forEach(r => {
            n.nextPart.has(r) || n.nextPart.set(r, {
                nextPart: new Map,
                validators: []
            }), n = n.nextPart.get(r)
        }), n
    },
    dw = e => e.isThemeGetter,
    fw = (e, t) => t ? e.map(([n, r]) => {
        const o = r.map(i => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([s, l]) => [t + s, l])) : i);
        return [n, o]
    }) : e,
    pw = e => {
        if (e < 1) return {
            get: () => {},
            set: () => {}
        };
        let t = 0,
            n = new Map,
            r = new Map;
        const o = (i, s) => {
            n.set(i, s), t++, t > e && (t = 0, r = n, n = new Map)
        };
        return {
            get(i) {
                let s = n.get(i);
                if (s !== void 0) return s;
                if ((s = r.get(i)) !== void 0) return o(i, s), s
            },
            set(i, s) {
                n.has(i) ? n.set(i, s) : o(i, s)
            }
        }
    },
    um = "!",
    hw = e => {
        const {
            separator: t,
            experimentalParseClassName: n
        } = e, r = t.length === 1, o = t[0], i = t.length, s = l => {
            const a = [];
            let u = 0,
                d = 0,
                f;
            for (let E = 0; E < l.length; E++) {
                let h = l[E];
                if (u === 0) {
                    if (h === o && (r || l.slice(E, E + i) === t)) {
                        a.push(l.slice(d, E)), d = E + i;
                        continue
                    }
                    if (h === "/") {
                        f = E;
                        continue
                    }
                }
                h === "[" ? u++ : h === "]" && u--
            }
            const c = a.length === 0 ? l : l.substring(d),
                v = c.startsWith(um),
                x = v ? c.substring(1) : c,
                w = f && f > d ? f - d : void 0;
            return {
                modifiers: a,
                hasImportantModifier: v,
                baseClassName: x,
                maybePostfixModifierPosition: w
            }
        };
        return n ? l => n({
            className: l,
            parseClassName: s
        }) : s
    },
    mw = e => {
        if (e.length <= 1) return e;
        const t = [];
        let n = [];
        return e.forEach(r => {
            r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r)
        }), t.push(...n.sort()), t
    },
    gw = e => ({
        cache: pw(e.cacheSize),
        parseClassName: hw(e),
        ...aw(e)
    }),
    vw = /\s+/,
    yw = (e, t) => {
        const {
            parseClassName: n,
            getClassGroupId: r,
            getConflictingClassGroupIds: o
        } = t, i = [], s = e.trim().split(vw);
        let l = "";
        for (let a = s.length - 1; a >= 0; a -= 1) {
            const u = s[a],
                {
                    modifiers: d,
                    hasImportantModifier: f,
                    baseClassName: c,
                    maybePostfixModifierPosition: v
                } = n(u);
            let x = !!v,
                w = r(x ? c.substring(0, v) : c);
            if (!w) {
                if (!x) {
                    l = u + (l.length > 0 ? " " + l : l);
                    continue
                }
                if (w = r(c), !w) {
                    l = u + (l.length > 0 ? " " + l : l);
                    continue
                }
                x = !1
            }
            const E = mw(d).join(":"),
                h = f ? E + um : E,
                p = h + w;
            if (i.includes(p)) continue;
            i.push(p);
            const m = o(w, x);
            for (let S = 0; S < m.length; ++S) {
                const C = m[S];
                i.push(h + C)
            }
            l = u + (l.length > 0 ? " " + l : l)
        }
        return l
    };

function ww() {
    let e = 0,
        t, n, r = "";
    for (; e < arguments.length;)(t = arguments[e++]) && (n = cm(t)) && (r && (r += " "), r += n);
    return r
}
const cm = e => {
    if (typeof e == "string") return e;
    let t, n = "";
    for (let r = 0; r < e.length; r++) e[r] && (t = cm(e[r])) && (n && (n += " "), n += t);
    return n
};

function xw(e, ...t) {
    let n, r, o, i = s;

    function s(a) {
        const u = t.reduce((d, f) => f(d), e());
        return n = gw(u), r = n.cache.get, o = n.cache.set, i = l, l(a)
    }

    function l(a) {
        const u = r(a);
        if (u) return u;
        const d = yw(a, n);
        return o(a, d), d
    }
    return function() {
        return i(ww.apply(null, arguments))
    }
}
const re = e => {
        const t = n => n[e] || [];
        return t.isThemeGetter = !0, t
    },
    dm = /^\[(?:([a-z-]+):)?(.+)\]$/i,
    Ew = /^\d+\/\d+$/,
    Sw = new Set(["px", "full", "screen"]),
    Cw = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    kw = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    bw = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
    Pw = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
    Nw = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
    Dt = e => br(e) || Sw.has(e) || Ew.test(e),
    nn = e => Xr(e, "length", Mw),
    br = e => !!e && !Number.isNaN(Number(e)),
    Al = e => Xr(e, "number", br),
    ao = e => !!e && Number.isInteger(Number(e)),
    Tw = e => e.endsWith("%") && br(e.slice(0, -1)),
    V = e => dm.test(e),
    rn = e => Cw.test(e),
    Rw = new Set(["length", "size", "percentage"]),
    Ow = e => Xr(e, Rw, fm),
    jw = e => Xr(e, "position", fm),
    Aw = new Set(["image", "url"]),
    _w = e => Xr(e, Aw, Iw),
    Lw = e => Xr(e, "", Dw),
    uo = () => !0,
    Xr = (e, t, n) => {
        const r = dm.exec(e);
        return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1
    },
    Mw = e => kw.test(e) && !bw.test(e),
    fm = () => !1,
    Dw = e => Pw.test(e),
    Iw = e => Nw.test(e),
    Fw = () => {
        const e = re("colors"),
            t = re("spacing"),
            n = re("blur"),
            r = re("brightness"),
            o = re("borderColor"),
            i = re("borderRadius"),
            s = re("borderSpacing"),
            l = re("borderWidth"),
            a = re("contrast"),
            u = re("grayscale"),
            d = re("hueRotate"),
            f = re("invert"),
            c = re("gap"),
            v = re("gradientColorStops"),
            x = re("gradientColorStopPositions"),
            w = re("inset"),
            E = re("margin"),
            h = re("opacity"),
            p = re("padding"),
            m = re("saturate"),
            S = re("scale"),
            C = re("sepia"),
            P = re("skew"),
            k = re("space"),
            N = re("translate"),
            M = () => ["auto", "contain", "none"],
            A = () => ["auto", "hidden", "clip", "visible", "scroll"],
            $ = () => ["auto", V, t],
            I = () => [V, t],
            W = () => ["", Dt, nn],
            _ = () => ["auto", br, V],
            Q = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"],
            U = () => ["solid", "dashed", "dotted", "double", "none"],
            K = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
            b = () => ["start", "end", "center", "between", "around", "evenly", "stretch"],
            O = () => ["", "0", V],
            F = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
            D = () => [br, V];
        return {
            cacheSize: 500,
            separator: ":",
            theme: {
                colors: [uo],
                spacing: [Dt, nn],
                blur: ["none", "", rn, V],
                brightness: D(),
                borderColor: [e],
                borderRadius: ["none", "", "full", rn, V],
                borderSpacing: I(),
                borderWidth: W(),
                contrast: D(),
                grayscale: O(),
                hueRotate: D(),
                invert: O(),
                gap: I(),
                gradientColorStops: [e],
                gradientColorStopPositions: [Tw, nn],
                inset: $(),
                margin: $(),
                opacity: D(),
                padding: I(),
                saturate: D(),
                scale: D(),
                sepia: O(),
                skew: D(),
                space: I(),
                translate: I()
            },
            classGroups: {
                aspect: [{
                    aspect: ["auto", "square", "video", V]
                }],
                container: ["container"],
                columns: [{
                    columns: [rn]
                }],
                "break-after": [{
                    "break-after": F()
                }],
                "break-before": [{
                    "break-before": F()
                }],
                "break-inside": [{
                    "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                }],
                "box-decoration": [{
                    "box-decoration": ["slice", "clone"]
                }],
                box: [{
                    box: ["border", "content"]
                }],
                display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                float: [{
                    float: ["right", "left", "none", "start", "end"]
                }],
                clear: [{
                    clear: ["left", "right", "both", "none", "start", "end"]
                }],
                isolation: ["isolate", "isolation-auto"],
                "object-fit": [{
                    object: ["contain", "cover", "fill", "none", "scale-down"]
                }],
                "object-position": [{
                    object: [...Q(), V]
                }],
                overflow: [{
                    overflow: A()
                }],
                "overflow-x": [{
                    "overflow-x": A()
                }],
                "overflow-y": [{
                    "overflow-y": A()
                }],
                overscroll: [{
                    overscroll: M()
                }],
                "overscroll-x": [{
                    "overscroll-x": M()
                }],
                "overscroll-y": [{
                    "overscroll-y": M()
                }],
                position: ["static", "fixed", "absolute", "relative", "sticky"],
                inset: [{
                    inset: [w]
                }],
                "inset-x": [{
                    "inset-x": [w]
                }],
                "inset-y": [{
                    "inset-y": [w]
                }],
                start: [{
                    start: [w]
                }],
                end: [{
                    end: [w]
                }],
                top: [{
                    top: [w]
                }],
                right: [{
                    right: [w]
                }],
                bottom: [{
                    bottom: [w]
                }],
                left: [{
                    left: [w]
                }],
                visibility: ["visible", "invisible", "collapse"],
                z: [{
                    z: ["auto", ao, V]
                }],
                basis: [{
                    basis: $()
                }],
                "flex-direction": [{
                    flex: ["row", "row-reverse", "col", "col-reverse"]
                }],
                "flex-wrap": [{
                    flex: ["wrap", "wrap-reverse", "nowrap"]
                }],
                flex: [{
                    flex: ["1", "auto", "initial", "none", V]
                }],
                grow: [{
                    grow: O()
                }],
                shrink: [{
                    shrink: O()
                }],
                order: [{
                    order: ["first", "last", "none", ao, V]
                }],
                "grid-cols": [{
                    "grid-cols": [uo]
                }],
                "col-start-end": [{
                    col: ["auto", {
                        span: ["full", ao, V]
                    }, V]
                }],
                "col-start": [{
                    "col-start": _()
                }],
                "col-end": [{
                    "col-end": _()
                }],
                "grid-rows": [{
                    "grid-rows": [uo]
                }],
                "row-start-end": [{
                    row: ["auto", {
                        span: [ao, V]
                    }, V]
                }],
                "row-start": [{
                    "row-start": _()
                }],
                "row-end": [{
                    "row-end": _()
                }],
                "grid-flow": [{
                    "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                }],
                "auto-cols": [{
                    "auto-cols": ["auto", "min", "max", "fr", V]
                }],
                "auto-rows": [{
                    "auto-rows": ["auto", "min", "max", "fr", V]
                }],
                gap: [{
                    gap: [c]
                }],
                "gap-x": [{
                    "gap-x": [c]
                }],
                "gap-y": [{
                    "gap-y": [c]
                }],
                "justify-content": [{
                    justify: ["normal", ...b()]
                }],
                "justify-items": [{
                    "justify-items": ["start", "end", "center", "stretch"]
                }],
                "justify-self": [{
                    "justify-self": ["auto", "start", "end", "center", "stretch"]
                }],
                "align-content": [{
                    content: ["normal", ...b(), "baseline"]
                }],
                "align-items": [{
                    items: ["start", "end", "center", "baseline", "stretch"]
                }],
                "align-self": [{
                    self: ["auto", "start", "end", "center", "stretch", "baseline"]
                }],
                "place-content": [{
                    "place-content": [...b(), "baseline"]
                }],
                "place-items": [{
                    "place-items": ["start", "end", "center", "baseline", "stretch"]
                }],
                "place-self": [{
                    "place-self": ["auto", "start", "end", "center", "stretch"]
                }],
                p: [{
                    p: [p]
                }],
                px: [{
                    px: [p]
                }],
                py: [{
                    py: [p]
                }],
                ps: [{
                    ps: [p]
                }],
                pe: [{
                    pe: [p]
                }],
                pt: [{
                    pt: [p]
                }],
                pr: [{
                    pr: [p]
                }],
                pb: [{
                    pb: [p]
                }],
                pl: [{
                    pl: [p]
                }],
                m: [{
                    m: [E]
                }],
                mx: [{
                    mx: [E]
                }],
                my: [{
                    my: [E]
                }],
                ms: [{
                    ms: [E]
                }],
                me: [{
                    me: [E]
                }],
                mt: [{
                    mt: [E]
                }],
                mr: [{
                    mr: [E]
                }],
                mb: [{
                    mb: [E]
                }],
                ml: [{
                    ml: [E]
                }],
                "space-x": [{
                    "space-x": [k]
                }],
                "space-x-reverse": ["space-x-reverse"],
                "space-y": [{
                    "space-y": [k]
                }],
                "space-y-reverse": ["space-y-reverse"],
                w: [{
                    w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", V, t]
                }],
                "min-w": [{
                    "min-w": [V, t, "min", "max", "fit"]
                }],
                "max-w": [{
                    "max-w": [V, t, "none", "full", "min", "max", "fit", "prose", {
                        screen: [rn]
                    }, rn]
                }],
                h: [{
                    h: [V, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
                }],
                "min-h": [{
                    "min-h": [V, t, "min", "max", "fit", "svh", "lvh", "dvh"]
                }],
                "max-h": [{
                    "max-h": [V, t, "min", "max", "fit", "svh", "lvh", "dvh"]
                }],
                size: [{
                    size: [V, t, "auto", "min", "max", "fit"]
                }],
                "font-size": [{
                    text: ["base", rn, nn]
                }],
                "font-smoothing": ["antialiased", "subpixel-antialiased"],
                "font-style": ["italic", "not-italic"],
                "font-weight": [{
                    font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Al]
                }],
                "font-family": [{
                    font: [uo]
                }],
                "fvn-normal": ["normal-nums"],
                "fvn-ordinal": ["ordinal"],
                "fvn-slashed-zero": ["slashed-zero"],
                "fvn-figure": ["lining-nums", "oldstyle-nums"],
                "fvn-spacing": ["proportional-nums", "tabular-nums"],
                "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
                tracking: [{
                    tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", V]
                }],
                "line-clamp": [{
                    "line-clamp": ["none", br, Al]
                }],
                leading: [{
                    leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Dt, V]
                }],
                "list-image": [{
                    "list-image": ["none", V]
                }],
                "list-style-type": [{
                    list: ["none", "disc", "decimal", V]
                }],
                "list-style-position": [{
                    list: ["inside", "outside"]
                }],
                "placeholder-color": [{
                    placeholder: [e]
                }],
                "placeholder-opacity": [{
                    "placeholder-opacity": [h]
                }],
                "text-alignment": [{
                    text: ["left", "center", "right", "justify", "start", "end"]
                }],
                "text-color": [{
                    text: [e]
                }],
                "text-opacity": [{
                    "text-opacity": [h]
                }],
                "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                "text-decoration-style": [{
                    decoration: [...U(), "wavy"]
                }],
                "text-decoration-thickness": [{
                    decoration: ["auto", "from-font", Dt, nn]
                }],
                "underline-offset": [{
                    "underline-offset": ["auto", Dt, V]
                }],
                "text-decoration-color": [{
                    decoration: [e]
                }],
                "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                "text-wrap": [{
                    text: ["wrap", "nowrap", "balance", "pretty"]
                }],
                indent: [{
                    indent: I()
                }],
                "vertical-align": [{
                    align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", V]
                }],
                whitespace: [{
                    whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                }],
                break: [{
                    break: ["normal", "words", "all", "keep"]
                }],
                hyphens: [{
                    hyphens: ["none", "manual", "auto"]
                }],
                content: [{
                    content: ["none", V]
                }],
                "bg-attachment": [{
                    bg: ["fixed", "local", "scroll"]
                }],
                "bg-clip": [{
                    "bg-clip": ["border", "padding", "content", "text"]
                }],
                "bg-opacity": [{
                    "bg-opacity": [h]
                }],
                "bg-origin": [{
                    "bg-origin": ["border", "padding", "content"]
                }],
                "bg-position": [{
                    bg: [...Q(), jw]
                }],
                "bg-repeat": [{
                    bg: ["no-repeat", {
                        repeat: ["", "x", "y", "round", "space"]
                    }]
                }],
                "bg-size": [{
                    bg: ["auto", "cover", "contain", Ow]
                }],
                "bg-image": [{
                    bg: ["none", {
                        "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                    }, _w]
                }],
                "bg-color": [{
                    bg: [e]
                }],
                "gradient-from-pos": [{
                    from: [x]
                }],
                "gradient-via-pos": [{
                    via: [x]
                }],
                "gradient-to-pos": [{
                    to: [x]
                }],
                "gradient-from": [{
                    from: [v]
                }],
                "gradient-via": [{
                    via: [v]
                }],
                "gradient-to": [{
                    to: [v]
                }],
                rounded: [{
                    rounded: [i]
                }],
                "rounded-s": [{
                    "rounded-s": [i]
                }],
                "rounded-e": [{
                    "rounded-e": [i]
                }],
                "rounded-t": [{
                    "rounded-t": [i]
                }],
                "rounded-r": [{
                    "rounded-r": [i]
                }],
                "rounded-b": [{
                    "rounded-b": [i]
                }],
                "rounded-l": [{
                    "rounded-l": [i]
                }],
                "rounded-ss": [{
                    "rounded-ss": [i]
                }],
                "rounded-se": [{
                    "rounded-se": [i]
                }],
                "rounded-ee": [{
                    "rounded-ee": [i]
                }],
                "rounded-es": [{
                    "rounded-es": [i]
                }],
                "rounded-tl": [{
                    "rounded-tl": [i]
                }],
                "rounded-tr": [{
                    "rounded-tr": [i]
                }],
                "rounded-br": [{
                    "rounded-br": [i]
                }],
                "rounded-bl": [{
                    "rounded-bl": [i]
                }],
                "border-w": [{
                    border: [l]
                }],
                "border-w-x": [{
                    "border-x": [l]
                }],
                "border-w-y": [{
                    "border-y": [l]
                }],
                "border-w-s": [{
                    "border-s": [l]
                }],
                "border-w-e": [{
                    "border-e": [l]
                }],
                "border-w-t": [{
                    "border-t": [l]
                }],
                "border-w-r": [{
                    "border-r": [l]
                }],
                "border-w-b": [{
                    "border-b": [l]
                }],
                "border-w-l": [{
                    "border-l": [l]
                }],
                "border-opacity": [{
                    "border-opacity": [h]
                }],
                "border-style": [{
                    border: [...U(), "hidden"]
                }],
                "divide-x": [{
                    "divide-x": [l]
                }],
                "divide-x-reverse": ["divide-x-reverse"],
                "divide-y": [{
                    "divide-y": [l]
                }],
                "divide-y-reverse": ["divide-y-reverse"],
                "divide-opacity": [{
                    "divide-opacity": [h]
                }],
                "divide-style": [{
                    divide: U()
                }],
                "border-color": [{
                    border: [o]
                }],
                "border-color-x": [{
                    "border-x": [o]
                }],
                "border-color-y": [{
                    "border-y": [o]
                }],
                "border-color-t": [{
                    "border-t": [o]
                }],
                "border-color-r": [{
                    "border-r": [o]
                }],
                "border-color-b": [{
                    "border-b": [o]
                }],
                "border-color-l": [{
                    "border-l": [o]
                }],
                "divide-color": [{
                    divide: [o]
                }],
                "outline-style": [{
                    outline: ["", ...U()]
                }],
                "outline-offset": [{
                    "outline-offset": [Dt, V]
                }],
                "outline-w": [{
                    outline: [Dt, nn]
                }],
                "outline-color": [{
                    outline: [e]
                }],
                "ring-w": [{
                    ring: W()
                }],
                "ring-w-inset": ["ring-inset"],
                "ring-color": [{
                    ring: [e]
                }],
                "ring-opacity": [{
                    "ring-opacity": [h]
                }],
                "ring-offset-w": [{
                    "ring-offset": [Dt, nn]
                }],
                "ring-offset-color": [{
                    "ring-offset": [e]
                }],
                shadow: [{
                    shadow: ["", "inner", "none", rn, Lw]
                }],
                "shadow-color": [{
                    shadow: [uo]
                }],
                opacity: [{
                    opacity: [h]
                }],
                "mix-blend": [{
                    "mix-blend": [...K(), "plus-lighter", "plus-darker"]
                }],
                "bg-blend": [{
                    "bg-blend": K()
                }],
                filter: [{
                    filter: ["", "none"]
                }],
                blur: [{
                    blur: [n]
                }],
                brightness: [{
                    brightness: [r]
                }],
                contrast: [{
                    contrast: [a]
                }],
                "drop-shadow": [{
                    "drop-shadow": ["", "none", rn, V]
                }],
                grayscale: [{
                    grayscale: [u]
                }],
                "hue-rotate": [{
                    "hue-rotate": [d]
                }],
                invert: [{
                    invert: [f]
                }],
                saturate: [{
                    saturate: [m]
                }],
                sepia: [{
                    sepia: [C]
                }],
                "backdrop-filter": [{
                    "backdrop-filter": ["", "none"]
                }],
                "backdrop-blur": [{
                    "backdrop-blur": [n]
                }],
                "backdrop-brightness": [{
                    "backdrop-brightness": [r]
                }],
                "backdrop-contrast": [{
                    "backdrop-contrast": [a]
                }],
                "backdrop-grayscale": [{
                    "backdrop-grayscale": [u]
                }],
                "backdrop-hue-rotate": [{
                    "backdrop-hue-rotate": [d]
                }],
                "backdrop-invert": [{
                    "backdrop-invert": [f]
                }],
                "backdrop-opacity": [{
                    "backdrop-opacity": [h]
                }],
                "backdrop-saturate": [{
                    "backdrop-saturate": [m]
                }],
                "backdrop-sepia": [{
                    "backdrop-sepia": [C]
                }],
                "border-collapse": [{
                    border: ["collapse", "separate"]
                }],
                "border-spacing": [{
                    "border-spacing": [s]
                }],
                "border-spacing-x": [{
                    "border-spacing-x": [s]
                }],
                "border-spacing-y": [{
                    "border-spacing-y": [s]
                }],
                "table-layout": [{
                    table: ["auto", "fixed"]
                }],
                caption: [{
                    caption: ["top", "bottom"]
                }],
                transition: [{
                    transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", V]
                }],
                duration: [{
                    duration: D()
                }],
                ease: [{
                    ease: ["linear", "in", "out", "in-out", V]
                }],
                delay: [{
                    delay: D()
                }],
                animate: [{
                    animate: ["none", "spin", "ping", "pulse", "bounce", V]
                }],
                transform: [{
                    transform: ["", "gpu", "none"]
                }],
                scale: [{
                    scale: [S]
                }],
                "scale-x": [{
                    "scale-x": [S]
                }],
                "scale-y": [{
                    "scale-y": [S]
                }],
                rotate: [{
                    rotate: [ao, V]
                }],
                "translate-x": [{
                    "translate-x": [N]
                }],
                "translate-y": [{
                    "translate-y": [N]
                }],
                "skew-x": [{
                    "skew-x": [P]
                }],
                "skew-y": [{
                    "skew-y": [P]
                }],
                "transform-origin": [{
                    origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", V]
                }],
                accent: [{
                    accent: ["auto", e]
                }],
                appearance: [{
                    appearance: ["none", "auto"]
                }],
                cursor: [{
                    cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", V]
                }],
                "caret-color": [{
                    caret: [e]
                }],
                "pointer-events": [{
                    "pointer-events": ["none", "auto"]
                }],
                resize: [{
                    resize: ["none", "y", "x", ""]
                }],
                "scroll-behavior": [{
                    scroll: ["auto", "smooth"]
                }],
                "scroll-m": [{
                    "scroll-m": I()
                }],
                "scroll-mx": [{
                    "scroll-mx": I()
                }],
                "scroll-my": [{
                    "scroll-my": I()
                }],
                "scroll-ms": [{
                    "scroll-ms": I()
                }],
                "scroll-me": [{
                    "scroll-me": I()
                }],
                "scroll-mt": [{
                    "scroll-mt": I()
                }],
                "scroll-mr": [{
                    "scroll-mr": I()
                }],
                "scroll-mb": [{
                    "scroll-mb": I()
                }],
                "scroll-ml": [{
                    "scroll-ml": I()
                }],
                "scroll-p": [{
                    "scroll-p": I()
                }],
                "scroll-px": [{
                    "scroll-px": I()
                }],
                "scroll-py": [{
                    "scroll-py": I()
                }],
                "scroll-ps": [{
                    "scroll-ps": I()
                }],
                "scroll-pe": [{
                    "scroll-pe": I()
                }],
                "scroll-pt": [{
                    "scroll-pt": I()
                }],
                "scroll-pr": [{
                    "scroll-pr": I()
                }],
                "scroll-pb": [{
                    "scroll-pb": I()
                }],
                "scroll-pl": [{
                    "scroll-pl": I()
                }],
                "snap-align": [{
                    snap: ["start", "end", "center", "align-none"]
                }],
                "snap-stop": [{
                    snap: ["normal", "always"]
                }],
                "snap-type": [{
                    snap: ["none", "x", "y", "both"]
                }],
                "snap-strictness": [{
                    snap: ["mandatory", "proximity"]
                }],
                touch: [{
                    touch: ["auto", "none", "manipulation"]
                }],
                "touch-x": [{
                    "touch-pan": ["x", "left", "right"]
                }],
                "touch-y": [{
                    "touch-pan": ["y", "up", "down"]
                }],
                "touch-pz": ["touch-pinch-zoom"],
                select: [{
                    select: ["none", "text", "all", "auto"]
                }],
                "will-change": [{
                    "will-change": ["auto", "scroll", "contents", "transform", V]
                }],
                fill: [{
                    fill: [e, "none"]
                }],
                "stroke-w": [{
                    stroke: [Dt, nn, Al]
                }],
                stroke: [{
                    stroke: [e, "none"]
                }],
                sr: ["sr-only", "not-sr-only"],
                "forced-color-adjust": [{
                    "forced-color-adjust": ["auto", "none"]
                }]
            },
            conflictingClassGroups: {
                overflow: ["overflow-x", "overflow-y"],
                overscroll: ["overscroll-x", "overscroll-y"],
                inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                "inset-x": ["right", "left"],
                "inset-y": ["top", "bottom"],
                flex: ["basis", "grow", "shrink"],
                gap: ["gap-x", "gap-y"],
                p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                px: ["pr", "pl"],
                py: ["pt", "pb"],
                m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                mx: ["mr", "ml"],
                my: ["mt", "mb"],
                size: ["w", "h"],
                "font-size": ["leading"],
                "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                "fvn-ordinal": ["fvn-normal"],
                "fvn-slashed-zero": ["fvn-normal"],
                "fvn-figure": ["fvn-normal"],
                "fvn-spacing": ["fvn-normal"],
                "fvn-fraction": ["fvn-normal"],
                "line-clamp": ["display", "overflow"],
                rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                "rounded-s": ["rounded-ss", "rounded-es"],
                "rounded-e": ["rounded-se", "rounded-ee"],
                "rounded-t": ["rounded-tl", "rounded-tr"],
                "rounded-r": ["rounded-tr", "rounded-br"],
                "rounded-b": ["rounded-br", "rounded-bl"],
                "rounded-l": ["rounded-tl", "rounded-bl"],
                "border-spacing": ["border-spacing-x", "border-spacing-y"],
                "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                "border-w-x": ["border-w-r", "border-w-l"],
                "border-w-y": ["border-w-t", "border-w-b"],
                "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                "border-color-x": ["border-color-r", "border-color-l"],
                "border-color-y": ["border-color-t", "border-color-b"],
                "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                "scroll-mx": ["scroll-mr", "scroll-ml"],
                "scroll-my": ["scroll-mt", "scroll-mb"],
                "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                "scroll-px": ["scroll-pr", "scroll-pl"],
                "scroll-py": ["scroll-pt", "scroll-pb"],
                touch: ["touch-x", "touch-y", "touch-pz"],
                "touch-x": ["touch"],
                "touch-y": ["touch"],
                "touch-pz": ["touch"]
            },
            conflictingClassGroupModifiers: {
                "font-size": ["leading"]
            }
        }
    },
    zw = xw(Fw);

function me(...e) {
    return zw(om(e))
}
const $w = tw,
    pm = g.forwardRef(({
        className: e,
        ...t
    }, n) => y.jsx(qh, {
        ref: n,
        className: me("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", e),
        ...t
    }));
pm.displayName = qh.displayName;
const Uw = im("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
        variants: {
            variant: {
                default: "border bg-background text-foreground",
                destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
            }
        },
        defaultVariants: {
            variant: "default"
        }
    }),
    hm = g.forwardRef(({
        className: e,
        variant: t,
        ...n
    }, r) => y.jsx(Jh, {
        ref: r,
        className: me(Uw({
            variant: t
        }), e),
        ...n
    }));
hm.displayName = Jh.displayName;
const Bw = g.forwardRef(({
    className: e,
    ...t
}, n) => y.jsx(tm, {
    ref: n,
    className: me("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", e),
    ...t
}));
Bw.displayName = tm.displayName;
const mm = g.forwardRef(({
    className: e,
    ...t
}, n) => y.jsx(nm, {
    ref: n,
    className: me("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", e),
    "toast-close": "",
    ...t,
    children: y.jsx(lw, {
        className: "h-4 w-4"
    })
}));
mm.displayName = nm.displayName;
const gm = g.forwardRef(({
    className: e,
    ...t
}, n) => y.jsx(Zh, {
    ref: n,
    className: me("text-sm font-semibold", e),
    ...t
}));
gm.displayName = Zh.displayName;
const vm = g.forwardRef(({
    className: e,
    ...t
}, n) => y.jsx(em, {
    ref: n,
    className: me("text-sm opacity-90", e),
    ...t
}));
vm.displayName = em.displayName;

function Vw() {
    const {
        toasts: e
    } = h0();
    return y.jsxs($w, {
        children: [e.map(function({
            id: t,
            title: n,
            description: r,
            action: o,
            ...i
        }) {
            return y.jsxs(hm, { ...i,
                children: [y.jsxs("div", {
                    className: "grid gap-1",
                    children: [n && y.jsx(gm, {
                        children: n
                    }), r && y.jsx(vm, {
                        children: r
                    })]
                }), o, y.jsx(mm, {})]
            }, t)
        }), y.jsx(pm, {})]
    })
}
var jd = ["light", "dark"],
    Hw = "(prefers-color-scheme: dark)",
    Ww = g.createContext(void 0),
    Qw = {
        setTheme: e => {},
        themes: []
    },
    Kw = () => {
        var e;
        return (e = g.useContext(Ww)) != null ? e : Qw
    };
g.memo(({
    forcedTheme: e,
    storageKey: t,
    attribute: n,
    enableSystem: r,
    enableColorScheme: o,
    defaultTheme: i,
    value: s,
    attrs: l,
    nonce: a
}) => {
    let u = i === "system",
        d = n === "class" ? `var d=document.documentElement,c=d.classList;${`c.remove(${l.map(x=>`'${x}'`).join(",")})`};` : `var d=document.documentElement,n='${n}',s='setAttribute';`,
        f = o ? jd.includes(i) && i ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : "",
        c = (x, w = !1, E = !0) => {
            let h = s ? s[x] : x,
                p = w ? x + "|| ''" : `'${h}'`,
                m = "";
            return o && E && !w && jd.includes(x) && (m += `d.style.colorScheme = '${x}';`), n === "class" ? w || h ? m += `c.add(${p})` : m += "null" : h && (m += `d[s](n,${p})`), m
        },
        v = e ? `!function(){${d}${c(e)}}()` : r ? `!function(){try{${d}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${Hw}',m=window.matchMedia(t);if(m.media!==t||m.matches){${c("dark")}}else{${c("light")}}}else if(e){${s?`var x=${JSON.stringify(s)};`:""}${c(s?"x[e]":"e",!0)}}${u?"":"else{"+c(i,!1,!1)+"}"}${f}}catch(e){}}()` : `!function(){try{${d}var e=localStorage.getItem('${t}');if(e){${s?`var x=${JSON.stringify(s)};`:""}${c(s?"x[e]":"e",!0)}}else{${c(i,!1,!1)};}${f}}catch(t){}}();`;
    return g.createElement("script", {
        nonce: a,
        dangerouslySetInnerHTML: {
            __html: v
        }
    })
});
var Yw = e => {
        switch (e) {
            case "success":
                return qw;
            case "info":
                return Zw;
            case "warning":
                return Jw;
            case "error":
                return ex;
            default:
                return null
        }
    },
    Gw = Array(12).fill(0),
    Xw = ({
        visible: e
    }) => j.createElement("div", {
        className: "sonner-loading-wrapper",
        "data-visible": e
    }, j.createElement("div", {
        className: "sonner-spinner"
    }, Gw.map((t, n) => j.createElement("div", {
        className: "sonner-loading-bar",
        key: `spinner-bar-${n}`
    })))),
    qw = j.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        height: "20",
        width: "20"
    }, j.createElement("path", {
        fillRule: "evenodd",
        d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
        clipRule: "evenodd"
    })),
    Jw = j.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        height: "20",
        width: "20"
    }, j.createElement("path", {
        fillRule: "evenodd",
        d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
        clipRule: "evenodd"
    })),
    Zw = j.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        height: "20",
        width: "20"
    }, j.createElement("path", {
        fillRule: "evenodd",
        d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
        clipRule: "evenodd"
    })),
    ex = j.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        height: "20",
        width: "20"
    }, j.createElement("path", {
        fillRule: "evenodd",
        d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
        clipRule: "evenodd"
    })),
    tx = () => {
        let [e, t] = j.useState(document.hidden);
        return j.useEffect(() => {
            let n = () => {
                t(document.hidden)
            };
            return document.addEventListener("visibilitychange", n), () => window.removeEventListener("visibilitychange", n)
        }, []), e
    },
    La = 1,
    nx = class {
        constructor() {
            this.subscribe = e => (this.subscribers.push(e), () => {
                let t = this.subscribers.indexOf(e);
                this.subscribers.splice(t, 1)
            }), this.publish = e => {
                this.subscribers.forEach(t => t(e))
            }, this.addToast = e => {
                this.publish(e), this.toasts = [...this.toasts, e]
            }, this.create = e => {
                var t;
                let {
                    message: n,
                    ...r
                } = e, o = typeof(e == null ? void 0 : e.id) == "number" || ((t = e.id) == null ? void 0 : t.length) > 0 ? e.id : La++, i = this.toasts.find(l => l.id === o), s = e.dismissible === void 0 ? !0 : e.dismissible;
                return i ? this.toasts = this.toasts.map(l => l.id === o ? (this.publish({ ...l,
                    ...e,
                    id: o,
                    title: n
                }), { ...l,
                    ...e,
                    id: o,
                    dismissible: s,
                    title: n
                }) : l) : this.addToast({
                    title: n,
                    ...r,
                    dismissible: s,
                    id: o
                }), o
            }, this.dismiss = e => (e || this.toasts.forEach(t => {
                this.subscribers.forEach(n => n({
                    id: t.id,
                    dismiss: !0
                }))
            }), this.subscribers.forEach(t => t({
                id: e,
                dismiss: !0
            })), e), this.message = (e, t) => this.create({ ...t,
                message: e
            }), this.error = (e, t) => this.create({ ...t,
                message: e,
                type: "error"
            }), this.success = (e, t) => this.create({ ...t,
                type: "success",
                message: e
            }), this.info = (e, t) => this.create({ ...t,
                type: "info",
                message: e
            }), this.warning = (e, t) => this.create({ ...t,
                type: "warning",
                message: e
            }), this.loading = (e, t) => this.create({ ...t,
                type: "loading",
                message: e
            }), this.promise = (e, t) => {
                if (!t) return;
                let n;
                t.loading !== void 0 && (n = this.create({ ...t,
                    promise: e,
                    type: "loading",
                    message: t.loading,
                    description: typeof t.description != "function" ? t.description : void 0
                }));
                let r = e instanceof Promise ? e : e(),
                    o = n !== void 0;
                return r.then(async i => {
                    if (ox(i) && !i.ok) {
                        o = !1;
                        let s = typeof t.error == "function" ? await t.error(`HTTP error! status: ${i.status}`) : t.error,
                            l = typeof t.description == "function" ? await t.description(`HTTP error! status: ${i.status}`) : t.description;
                        this.create({
                            id: n,
                            type: "error",
                            message: s,
                            description: l
                        })
                    } else if (t.success !== void 0) {
                        o = !1;
                        let s = typeof t.success == "function" ? await t.success(i) : t.success,
                            l = typeof t.description == "function" ? await t.description(i) : t.description;
                        this.create({
                            id: n,
                            type: "success",
                            message: s,
                            description: l
                        })
                    }
                }).catch(async i => {
                    if (t.error !== void 0) {
                        o = !1;
                        let s = typeof t.error == "function" ? await t.error(i) : t.error,
                            l = typeof t.description == "function" ? await t.description(i) : t.description;
                        this.create({
                            id: n,
                            type: "error",
                            message: s,
                            description: l
                        })
                    }
                }).finally(() => {
                    var i;
                    o && (this.dismiss(n), n = void 0), (i = t.finally) == null || i.call(t)
                }), n
            }, this.custom = (e, t) => {
                let n = (t == null ? void 0 : t.id) || La++;
                return this.create({
                    jsx: e(n),
                    id: n,
                    ...t
                }), n
            }, this.subscribers = [], this.toasts = []
        }
    },
    Ke = new nx,
    rx = (e, t) => {
        let n = (t == null ? void 0 : t.id) || La++;
        return Ke.addToast({
            title: e,
            ...t,
            id: n
        }), n
    },
    ox = e => e && typeof e == "object" && "ok" in e && typeof e.ok == "boolean" && "status" in e && typeof e.status == "number",
    ix = rx,
    sx = () => Ke.toasts;
Object.assign(ix, {
    success: Ke.success,
    info: Ke.info,
    warning: Ke.warning,
    error: Ke.error,
    custom: Ke.custom,
    message: Ke.message,
    promise: Ke.promise,
    dismiss: Ke.dismiss,
    loading: Ke.loading
}, {
    getHistory: sx
});

function lx(e, {
    insertAt: t
} = {}) {
    if (typeof document > "u") return;
    let n = document.head || document.getElementsByTagName("head")[0],
        r = document.createElement("style");
    r.type = "text/css", t === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r), r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e))
}
lx(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);

function Pi(e) {
    return e.label !== void 0
}
var ax = 3,
    ux = "32px",
    cx = 4e3,
    dx = 356,
    fx = 14,
    px = 20,
    hx = 200;

function mx(...e) {
    return e.filter(Boolean).join(" ")
}
var gx = e => {
    var t, n, r, o, i, s, l, a, u, d;
    let {
        invert: f,
        toast: c,
        unstyled: v,
        interacting: x,
        setHeights: w,
        visibleToasts: E,
        heights: h,
        index: p,
        toasts: m,
        expanded: S,
        removeToast: C,
        defaultRichColors: P,
        closeButton: k,
        style: N,
        cancelButtonStyle: M,
        actionButtonStyle: A,
        className: $ = "",
        descriptionClassName: I = "",
        duration: W,
        position: _,
        gap: Q,
        loadingIcon: U,
        expandByDefault: K,
        classNames: b,
        icons: O,
        closeButtonAriaLabel: F = "Close toast",
        pauseWhenPageIsHidden: D,
        cn: z
    } = e, [G, le] = j.useState(!1), [We, J] = j.useState(!1), [ct, Xt] = j.useState(!1), [qt, Jt] = j.useState(!1), [ni, nr] = j.useState(0), [Mn, Zr] = j.useState(0), ri = j.useRef(null), Zt = j.useRef(null), Js = p === 0, Zs = p + 1 <= E, Se = c.type, rr = c.dismissible !== !1, Rg = c.className || "", Og = c.descriptionClassName || "", oi = j.useMemo(() => h.findIndex(B => B.toastId === c.id) || 0, [h, c.id]), jg = j.useMemo(() => {
        var B;
        return (B = c.closeButton) != null ? B : k
    }, [c.closeButton, k]), oc = j.useMemo(() => c.duration || W || cx, [c.duration, W]), el = j.useRef(0), or = j.useRef(0), ic = j.useRef(0), ir = j.useRef(null), [sc, Ag] = _.split("-"), lc = j.useMemo(() => h.reduce((B, ne, ee) => ee >= oi ? B : B + ne.height, 0), [h, oi]), ac = tx(), _g = c.invert || f, tl = Se === "loading";
    or.current = j.useMemo(() => oi * Q + lc, [oi, lc]), j.useEffect(() => {
        le(!0)
    }, []), j.useLayoutEffect(() => {
        if (!G) return;
        let B = Zt.current,
            ne = B.style.height;
        B.style.height = "auto";
        let ee = B.getBoundingClientRect().height;
        B.style.height = ne, Zr(ee), w(Ct => Ct.find(kt => kt.toastId === c.id) ? Ct.map(kt => kt.toastId === c.id ? { ...kt,
            height: ee
        } : kt) : [{
            toastId: c.id,
            height: ee,
            position: c.position
        }, ...Ct])
    }, [G, c.title, c.description, w, c.id]);
    let en = j.useCallback(() => {
        J(!0), nr(or.current), w(B => B.filter(ne => ne.toastId !== c.id)), setTimeout(() => {
            C(c)
        }, hx)
    }, [c, C, w, or]);
    j.useEffect(() => {
        if (c.promise && Se === "loading" || c.duration === 1 / 0 || c.type === "loading") return;
        let B, ne = oc;
        return S || x || D && ac ? (() => {
            if (ic.current < el.current) {
                let ee = new Date().getTime() - el.current;
                ne = ne - ee
            }
            ic.current = new Date().getTime()
        })() : ne !== 1 / 0 && (el.current = new Date().getTime(), B = setTimeout(() => {
            var ee;
            (ee = c.onAutoClose) == null || ee.call(c, c), en()
        }, ne)), () => clearTimeout(B)
    }, [S, x, K, c, oc, en, c.promise, Se, D, ac]), j.useEffect(() => {
        let B = Zt.current;
        if (B) {
            let ne = B.getBoundingClientRect().height;
            return Zr(ne), w(ee => [{
                toastId: c.id,
                height: ne,
                position: c.position
            }, ...ee]), () => w(ee => ee.filter(Ct => Ct.toastId !== c.id))
        }
    }, [w, c.id]), j.useEffect(() => {
        c.delete && en()
    }, [en, c.delete]);

    function Lg() {
        return O != null && O.loading ? j.createElement("div", {
            className: "sonner-loader",
            "data-visible": Se === "loading"
        }, O.loading) : U ? j.createElement("div", {
            className: "sonner-loader",
            "data-visible": Se === "loading"
        }, U) : j.createElement(Xw, {
            visible: Se === "loading"
        })
    }
    return j.createElement("li", {
        "aria-live": c.important ? "assertive" : "polite",
        "aria-atomic": "true",
        role: "status",
        tabIndex: 0,
        ref: Zt,
        className: z($, Rg, b == null ? void 0 : b.toast, (t = c == null ? void 0 : c.classNames) == null ? void 0 : t.toast, b == null ? void 0 : b.default, b == null ? void 0 : b[Se], (n = c == null ? void 0 : c.classNames) == null ? void 0 : n[Se]),
        "data-sonner-toast": "",
        "data-rich-colors": (r = c.richColors) != null ? r : P,
        "data-styled": !(c.jsx || c.unstyled || v),
        "data-mounted": G,
        "data-promise": !!c.promise,
        "data-removed": We,
        "data-visible": Zs,
        "data-y-position": sc,
        "data-x-position": Ag,
        "data-index": p,
        "data-front": Js,
        "data-swiping": ct,
        "data-dismissible": rr,
        "data-type": Se,
        "data-invert": _g,
        "data-swipe-out": qt,
        "data-expanded": !!(S || K && G),
        style: {
            "--index": p,
            "--toasts-before": p,
            "--z-index": m.length - p,
            "--offset": `${We?ni:or.current}px`,
            "--initial-height": K ? "auto" : `${Mn}px`,
            ...N,
            ...c.style
        },
        onPointerDown: B => {
            tl || !rr || (ri.current = new Date, nr(or.current), B.target.setPointerCapture(B.pointerId), B.target.tagName !== "BUTTON" && (Xt(!0), ir.current = {
                x: B.clientX,
                y: B.clientY
            }))
        },
        onPointerUp: () => {
            var B, ne, ee, Ct;
            if (qt || !rr) return;
            ir.current = null;
            let kt = Number(((B = Zt.current) == null ? void 0 : B.style.getPropertyValue("--swipe-amount").replace("px", "")) || 0),
                ii = new Date().getTime() - ((ne = ri.current) == null ? void 0 : ne.getTime()),
                Mg = Math.abs(kt) / ii;
            if (Math.abs(kt) >= px || Mg > .11) {
                nr(or.current), (ee = c.onDismiss) == null || ee.call(c, c), en(), Jt(!0);
                return
            }(Ct = Zt.current) == null || Ct.style.setProperty("--swipe-amount", "0px"), Xt(!1)
        },
        onPointerMove: B => {
            var ne;
            if (!ir.current || !rr) return;
            let ee = B.clientY - ir.current.y,
                Ct = B.clientX - ir.current.x,
                kt = (sc === "top" ? Math.min : Math.max)(0, ee),
                ii = B.pointerType === "touch" ? 10 : 2;
            Math.abs(kt) > ii ? (ne = Zt.current) == null || ne.style.setProperty("--swipe-amount", `${ee}px`) : Math.abs(Ct) > ii && (ir.current = null)
        }
    }, jg && !c.jsx ? j.createElement("button", {
        "aria-label": F,
        "data-disabled": tl,
        "data-close-button": !0,
        onClick: tl || !rr ? () => {} : () => {
            var B;
            en(), (B = c.onDismiss) == null || B.call(c, c)
        },
        className: z(b == null ? void 0 : b.closeButton, (o = c == null ? void 0 : c.classNames) == null ? void 0 : o.closeButton)
    }, j.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "12",
        height: "12",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, j.createElement("line", {
        x1: "18",
        y1: "6",
        x2: "6",
        y2: "18"
    }), j.createElement("line", {
        x1: "6",
        y1: "6",
        x2: "18",
        y2: "18"
    }))) : null, c.jsx || j.isValidElement(c.title) ? c.jsx || c.title : j.createElement(j.Fragment, null, Se || c.icon || c.promise ? j.createElement("div", {
        "data-icon": "",
        className: z(b == null ? void 0 : b.icon, (i = c == null ? void 0 : c.classNames) == null ? void 0 : i.icon)
    }, c.promise || c.type === "loading" && !c.icon ? c.icon || Lg() : null, c.type !== "loading" ? c.icon || (O == null ? void 0 : O[Se]) || Yw(Se) : null) : null, j.createElement("div", {
        "data-content": "",
        className: z(b == null ? void 0 : b.content, (s = c == null ? void 0 : c.classNames) == null ? void 0 : s.content)
    }, j.createElement("div", {
        "data-title": "",
        className: z(b == null ? void 0 : b.title, (l = c == null ? void 0 : c.classNames) == null ? void 0 : l.title)
    }, c.title), c.description ? j.createElement("div", {
        "data-description": "",
        className: z(I, Og, b == null ? void 0 : b.description, (a = c == null ? void 0 : c.classNames) == null ? void 0 : a.description)
    }, c.description) : null), j.isValidElement(c.cancel) ? c.cancel : c.cancel && Pi(c.cancel) ? j.createElement("button", {
        "data-button": !0,
        "data-cancel": !0,
        style: c.cancelButtonStyle || M,
        onClick: B => {
            var ne, ee;
            Pi(c.cancel) && rr && ((ee = (ne = c.cancel).onClick) == null || ee.call(ne, B), en())
        },
        className: z(b == null ? void 0 : b.cancelButton, (u = c == null ? void 0 : c.classNames) == null ? void 0 : u.cancelButton)
    }, c.cancel.label) : null, j.isValidElement(c.action) ? c.action : c.action && Pi(c.action) ? j.createElement("button", {
        "data-button": !0,
        "data-action": !0,
        style: c.actionButtonStyle || A,
        onClick: B => {
            var ne, ee;
            Pi(c.action) && (B.defaultPrevented || ((ee = (ne = c.action).onClick) == null || ee.call(ne, B), en()))
        },
        className: z(b == null ? void 0 : b.actionButton, (d = c == null ? void 0 : c.classNames) == null ? void 0 : d.actionButton)
    }, c.action.label) : null))
};

function Ad() {
    if (typeof window > "u" || typeof document > "u") return "ltr";
    let e = document.documentElement.getAttribute("dir");
    return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e
}
var vx = e => {
    let {
        invert: t,
        position: n = "bottom-right",
        hotkey: r = ["altKey", "KeyT"],
        expand: o,
        closeButton: i,
        className: s,
        offset: l,
        theme: a = "light",
        richColors: u,
        duration: d,
        style: f,
        visibleToasts: c = ax,
        toastOptions: v,
        dir: x = Ad(),
        gap: w = fx,
        loadingIcon: E,
        icons: h,
        containerAriaLabel: p = "Notifications",
        pauseWhenPageIsHidden: m,
        cn: S = mx
    } = e, [C, P] = j.useState([]), k = j.useMemo(() => Array.from(new Set([n].concat(C.filter(D => D.position).map(D => D.position)))), [C, n]), [N, M] = j.useState([]), [A, $] = j.useState(!1), [I, W] = j.useState(!1), [_, Q] = j.useState(a !== "system" ? a : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), U = j.useRef(null), K = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""), b = j.useRef(null), O = j.useRef(!1), F = j.useCallback(D => {
        var z;
        (z = C.find(G => G.id === D.id)) != null && z.delete || Ke.dismiss(D.id), P(G => G.filter(({
            id: le
        }) => le !== D.id))
    }, [C]);
    return j.useEffect(() => Ke.subscribe(D => {
        if (D.dismiss) {
            P(z => z.map(G => G.id === D.id ? { ...G,
                delete: !0
            } : G));
            return
        }
        setTimeout(() => {
            Nh.flushSync(() => {
                P(z => {
                    let G = z.findIndex(le => le.id === D.id);
                    return G !== -1 ? [...z.slice(0, G), { ...z[G],
                        ...D
                    }, ...z.slice(G + 1)] : [D, ...z]
                })
            })
        })
    }), []), j.useEffect(() => {
        if (a !== "system") {
            Q(a);
            return
        }
        a === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? Q("dark") : Q("light")), typeof window < "u" && window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", ({
            matches: D
        }) => {
            Q(D ? "dark" : "light")
        })
    }, [a]), j.useEffect(() => {
        C.length <= 1 && $(!1)
    }, [C]), j.useEffect(() => {
        let D = z => {
            var G, le;
            r.every(We => z[We] || z.code === We) && ($(!0), (G = U.current) == null || G.focus()), z.code === "Escape" && (document.activeElement === U.current || (le = U.current) != null && le.contains(document.activeElement)) && $(!1)
        };
        return document.addEventListener("keydown", D), () => document.removeEventListener("keydown", D)
    }, [r]), j.useEffect(() => {
        if (U.current) return () => {
            b.current && (b.current.focus({
                preventScroll: !0
            }), b.current = null, O.current = !1)
        }
    }, [U.current]), C.length ? j.createElement("section", {
        "aria-label": `${p} ${K}`,
        tabIndex: -1
    }, k.map((D, z) => {
        var G;
        let [le, We] = D.split("-");
        return j.createElement("ol", {
            key: D,
            dir: x === "auto" ? Ad() : x,
            tabIndex: -1,
            ref: U,
            className: s,
            "data-sonner-toaster": !0,
            "data-theme": _,
            "data-y-position": le,
            "data-x-position": We,
            style: {
                "--front-toast-height": `${((G=N[0])==null?void 0:G.height)||0}px`,
                "--offset": typeof l == "number" ? `${l}px` : l || ux,
                "--width": `${dx}px`,
                "--gap": `${w}px`,
                ...f
            },
            onBlur: J => {
                O.current && !J.currentTarget.contains(J.relatedTarget) && (O.current = !1, b.current && (b.current.focus({
                    preventScroll: !0
                }), b.current = null))
            },
            onFocus: J => {
                J.target instanceof HTMLElement && J.target.dataset.dismissible === "false" || O.current || (O.current = !0, b.current = J.relatedTarget)
            },
            onMouseEnter: () => $(!0),
            onMouseMove: () => $(!0),
            onMouseLeave: () => {
                I || $(!1)
            },
            onPointerDown: J => {
                J.target instanceof HTMLElement && J.target.dataset.dismissible === "false" || W(!0)
            },
            onPointerUp: () => W(!1)
        }, C.filter(J => !J.position && z === 0 || J.position === D).map((J, ct) => {
            var Xt, qt;
            return j.createElement(gx, {
                key: J.id,
                icons: h,
                index: ct,
                toast: J,
                defaultRichColors: u,
                duration: (Xt = v == null ? void 0 : v.duration) != null ? Xt : d,
                className: v == null ? void 0 : v.className,
                descriptionClassName: v == null ? void 0 : v.descriptionClassName,
                invert: t,
                visibleToasts: c,
                closeButton: (qt = v == null ? void 0 : v.closeButton) != null ? qt : i,
                interacting: I,
                position: D,
                style: v == null ? void 0 : v.style,
                unstyled: v == null ? void 0 : v.unstyled,
                classNames: v == null ? void 0 : v.classNames,
                cancelButtonStyle: v == null ? void 0 : v.cancelButtonStyle,
                actionButtonStyle: v == null ? void 0 : v.actionButtonStyle,
                removeToast: F,
                toasts: C.filter(Jt => Jt.position == J.position),
                heights: N.filter(Jt => Jt.position == J.position),
                setHeights: M,
                expandByDefault: o,
                gap: w,
                loadingIcon: E,
                expanded: A,
                pauseWhenPageIsHidden: m,
                cn: S
            })
        }))
    })) : null
};
const yx = ({ ...e
}) => {
    const {
        theme: t = "system"
    } = Kw();
    return y.jsx(vx, {
        theme: t,
        className: "toaster group",
        toastOptions: {
            classNames: {
                toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                description: "group-[.toast]:text-muted-foreground",
                actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
            }
        },
        ...e
    })
};

function wx(e, t = []) {
    let n = [];

    function r(i, s) {
        const l = g.createContext(s),
            a = n.length;
        n = [...n, s];
        const u = f => {
            var h;
            const {
                scope: c,
                children: v,
                ...x
            } = f, w = ((h = c == null ? void 0 : c[e]) == null ? void 0 : h[a]) || l, E = g.useMemo(() => x, Object.values(x));
            return y.jsx(w.Provider, {
                value: E,
                children: v
            })
        };
        u.displayName = i + "Provider";

        function d(f, c) {
            var w;
            const v = ((w = c == null ? void 0 : c[e]) == null ? void 0 : w[a]) || l,
                x = g.useContext(v);
            if (x) return x;
            if (s !== void 0) return s;
            throw new Error(`\`${f}\` must be used within \`${i}\``)
        }
        return [u, d]
    }
    const o = () => {
        const i = n.map(s => g.createContext(s));
        return function(l) {
            const a = (l == null ? void 0 : l[e]) || i;
            return g.useMemo(() => ({
                [`__scope${e}`]: { ...l,
                    [e]: a
                }
            }), [l, a])
        }
    };
    return o.scopeName = e, [r, xx(o, ...t)]
}

function xx(...e) {
    const t = e[0];
    if (e.length === 1) return t;
    const n = () => {
        const r = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(i) {
            const s = r.reduce((l, {
                useScope: a,
                scopeName: u
            }) => {
                const f = a(i)[`__scope${u}`];
                return { ...l,
                    ...f
                }
            }, {});
            return g.useMemo(() => ({
                [`__scope${t.scopeName}`]: s
            }), [s])
        }
    };
    return n.scopeName = t.scopeName, n
}
var Ex = "DismissableLayer",
    Ma = "dismissableLayer.update",
    Sx = "dismissableLayer.pointerDownOutside",
    Cx = "dismissableLayer.focusOutside",
    _d, ym = g.createContext({
        layers: new Set,
        layersWithOutsidePointerEventsDisabled: new Set,
        branches: new Set
    }),
    wm = g.forwardRef((e, t) => {
        const {
            disableOutsidePointerEvents: n = !1,
            onEscapeKeyDown: r,
            onPointerDownOutside: o,
            onFocusOutside: i,
            onInteractOutside: s,
            onDismiss: l,
            ...a
        } = e, u = g.useContext(ym), [d, f] = g.useState(null), c = (d == null ? void 0 : d.ownerDocument) ? ? (globalThis == null ? void 0 : globalThis.document), [, v] = g.useState({}), x = Ve(t, k => f(k)), w = Array.from(u.layers), [E] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), h = w.indexOf(E), p = d ? w.indexOf(d) : -1, m = u.layersWithOutsidePointerEventsDisabled.size > 0, S = p >= h, C = Px(k => {
            const N = k.target,
                M = [...u.branches].some(A => A.contains(N));
            !S || M || (o == null || o(k), s == null || s(k), k.defaultPrevented || l == null || l())
        }, c), P = Nx(k => {
            const N = k.target;
            [...u.branches].some(A => A.contains(N)) || (i == null || i(k), s == null || s(k), k.defaultPrevented || l == null || l())
        }, c);
        return jh(k => {
            p === u.layers.size - 1 && (r == null || r(k), !k.defaultPrevented && l && (k.preventDefault(), l()))
        }, c), g.useEffect(() => {
            if (d) return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (_d = c.body.style.pointerEvents, c.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(d)), u.layers.add(d), Ld(), () => {
                n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (c.body.style.pointerEvents = _d)
            }
        }, [d, c, n, u]), g.useEffect(() => () => {
            d && (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), Ld())
        }, [d, u]), g.useEffect(() => {
            const k = () => v({});
            return document.addEventListener(Ma, k), () => document.removeEventListener(Ma, k)
        }, []), y.jsx(we.div, { ...a,
            ref: x,
            style: {
                pointerEvents: m ? S ? "auto" : "none" : void 0,
                ...e.style
            },
            onFocusCapture: pe(e.onFocusCapture, P.onFocusCapture),
            onBlurCapture: pe(e.onBlurCapture, P.onBlurCapture),
            onPointerDownCapture: pe(e.onPointerDownCapture, C.onPointerDownCapture)
        })
    });
wm.displayName = Ex;
var kx = "DismissableLayerBranch",
    bx = g.forwardRef((e, t) => {
        const n = g.useContext(ym),
            r = g.useRef(null),
            o = Ve(t, r);
        return g.useEffect(() => {
            const i = r.current;
            if (i) return n.branches.add(i), () => {
                n.branches.delete(i)
            }
        }, [n.branches]), y.jsx(we.div, { ...e,
            ref: o
        })
    });
bx.displayName = kx;

function Px(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = et(e),
        r = g.useRef(!1),
        o = g.useRef(() => {});
    return g.useEffect(() => {
        const i = l => {
                if (l.target && !r.current) {
                    let a = function() {
                        xm(Sx, n, u, {
                            discrete: !0
                        })
                    };
                    const u = {
                        originalEvent: l
                    };
                    l.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = a, t.addEventListener("click", o.current, {
                        once: !0
                    })) : a()
                } else t.removeEventListener("click", o.current);
                r.current = !1
            },
            s = window.setTimeout(() => {
                t.addEventListener("pointerdown", i)
            }, 0);
        return () => {
            window.clearTimeout(s), t.removeEventListener("pointerdown", i), t.removeEventListener("click", o.current)
        }
    }, [t, n]), {
        onPointerDownCapture: () => r.current = !0
    }
}

function Nx(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = et(e),
        r = g.useRef(!1);
    return g.useEffect(() => {
        const o = i => {
            i.target && !r.current && xm(Cx, n, {
                originalEvent: i
            }, {
                discrete: !1
            })
        };
        return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o)
    }, [t, n]), {
        onFocusCapture: () => r.current = !0,
        onBlurCapture: () => r.current = !1
    }
}

function Ld() {
    const e = new CustomEvent(Ma);
    document.dispatchEvent(e)
}

function xm(e, t, n, {
    discrete: r
}) {
    const o = n.originalEvent.target,
        i = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: n
        });
    t && o.addEventListener(e, t, {
        once: !0
    }), r ? Uu(o, i) : o.dispatchEvent(i)
}
const Tx = ["top", "right", "bottom", "left"],
    Tn = Math.min,
    Ge = Math.max,
    ms = Math.round,
    Ni = Math.floor,
    Rn = e => ({
        x: e,
        y: e
    }),
    Rx = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    },
    Ox = {
        start: "end",
        end: "start"
    };

function Da(e, t, n) {
    return Ge(e, Tn(t, n))
}

function Kt(e, t) {
    return typeof e == "function" ? e(t) : e
}

function Yt(e) {
    return e.split("-")[0]
}

function qr(e) {
    return e.split("-")[1]
}

function Ku(e) {
    return e === "x" ? "y" : "x"
}

function Yu(e) {
    return e === "y" ? "height" : "width"
}

function On(e) {
    return ["top", "bottom"].includes(Yt(e)) ? "y" : "x"
}

function Gu(e) {
    return Ku(On(e))
}

function jx(e, t, n) {
    n === void 0 && (n = !1);
    const r = qr(e),
        o = Gu(e),
        i = Yu(o);
    let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
    return t.reference[i] > t.floating[i] && (s = gs(s)), [s, gs(s)]
}

function Ax(e) {
    const t = gs(e);
    return [Ia(e), t, Ia(t)]
}

function Ia(e) {
    return e.replace(/start|end/g, t => Ox[t])
}

function _x(e, t, n) {
    const r = ["left", "right"],
        o = ["right", "left"],
        i = ["top", "bottom"],
        s = ["bottom", "top"];
    switch (e) {
        case "top":
        case "bottom":
            return n ? t ? o : r : t ? r : o;
        case "left":
        case "right":
            return t ? i : s;
        default:
            return []
    }
}

function Lx(e, t, n, r) {
    const o = qr(e);
    let i = _x(Yt(e), n === "start", r);
    return o && (i = i.map(s => s + "-" + o), t && (i = i.concat(i.map(Ia)))), i
}

function gs(e) {
    return e.replace(/left|right|bottom|top/g, t => Rx[t])
}

function Mx(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}

function Em(e) {
    return typeof e != "number" ? Mx(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}

function vs(e) {
    const {
        x: t,
        y: n,
        width: r,
        height: o
    } = e;
    return {
        width: r,
        height: o,
        top: n,
        left: t,
        right: t + r,
        bottom: n + o,
        x: t,
        y: n
    }
}

function Md(e, t, n) {
    let {
        reference: r,
        floating: o
    } = e;
    const i = On(t),
        s = Gu(t),
        l = Yu(s),
        a = Yt(t),
        u = i === "y",
        d = r.x + r.width / 2 - o.width / 2,
        f = r.y + r.height / 2 - o.height / 2,
        c = r[l] / 2 - o[l] / 2;
    let v;
    switch (a) {
        case "top":
            v = {
                x: d,
                y: r.y - o.height
            };
            break;
        case "bottom":
            v = {
                x: d,
                y: r.y + r.height
            };
            break;
        case "right":
            v = {
                x: r.x + r.width,
                y: f
            };
            break;
        case "left":
            v = {
                x: r.x - o.width,
                y: f
            };
            break;
        default:
            v = {
                x: r.x,
                y: r.y
            }
    }
    switch (qr(t)) {
        case "start":
            v[s] -= c * (n && u ? -1 : 1);
            break;
        case "end":
            v[s] += c * (n && u ? -1 : 1);
            break
    }
    return v
}
const Dx = async (e, t, n) => {
    const {
        placement: r = "bottom",
        strategy: o = "absolute",
        middleware: i = [],
        platform: s
    } = n, l = i.filter(Boolean), a = await (s.isRTL == null ? void 0 : s.isRTL(t));
    let u = await s.getElementRects({
            reference: e,
            floating: t,
            strategy: o
        }),
        {
            x: d,
            y: f
        } = Md(u, r, a),
        c = r,
        v = {},
        x = 0;
    for (let w = 0; w < l.length; w++) {
        const {
            name: E,
            fn: h
        } = l[w], {
            x: p,
            y: m,
            data: S,
            reset: C
        } = await h({
            x: d,
            y: f,
            initialPlacement: r,
            placement: c,
            strategy: o,
            middlewareData: v,
            rects: u,
            platform: s,
            elements: {
                reference: e,
                floating: t
            }
        });
        d = p ? ? d, f = m ? ? f, v = { ...v,
            [E]: { ...v[E],
                ...S
            }
        }, C && x <= 50 && (x++, typeof C == "object" && (C.placement && (c = C.placement), C.rects && (u = C.rects === !0 ? await s.getElementRects({
            reference: e,
            floating: t,
            strategy: o
        }) : C.rects), {
            x: d,
            y: f
        } = Md(u, c, a)), w = -1)
    }
    return {
        x: d,
        y: f,
        placement: c,
        strategy: o,
        middlewareData: v
    }
};
async function Ho(e, t) {
    var n;
    t === void 0 && (t = {});
    const {
        x: r,
        y: o,
        platform: i,
        rects: s,
        elements: l,
        strategy: a
    } = e, {
        boundary: u = "clippingAncestors",
        rootBoundary: d = "viewport",
        elementContext: f = "floating",
        altBoundary: c = !1,
        padding: v = 0
    } = Kt(t, e), x = Em(v), E = l[c ? f === "floating" ? "reference" : "floating" : f], h = vs(await i.getClippingRect({
        element: (n = await (i.isElement == null ? void 0 : i.isElement(E))) == null || n ? E : E.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(l.floating)),
        boundary: u,
        rootBoundary: d,
        strategy: a
    })), p = f === "floating" ? {
        x: r,
        y: o,
        width: s.floating.width,
        height: s.floating.height
    } : s.reference, m = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(l.floating)), S = await (i.isElement == null ? void 0 : i.isElement(m)) ? await (i.getScale == null ? void 0 : i.getScale(m)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }, C = vs(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: l,
        rect: p,
        offsetParent: m,
        strategy: a
    }) : p);
    return {
        top: (h.top - C.top + x.top) / S.y,
        bottom: (C.bottom - h.bottom + x.bottom) / S.y,
        left: (h.left - C.left + x.left) / S.x,
        right: (C.right - h.right + x.right) / S.x
    }
}
const Ix = e => ({
        name: "arrow",
        options: e,
        async fn(t) {
            const {
                x: n,
                y: r,
                placement: o,
                rects: i,
                platform: s,
                elements: l,
                middlewareData: a
            } = t, {
                element: u,
                padding: d = 0
            } = Kt(e, t) || {};
            if (u == null) return {};
            const f = Em(d),
                c = {
                    x: n,
                    y: r
                },
                v = Gu(o),
                x = Yu(v),
                w = await s.getDimensions(u),
                E = v === "y",
                h = E ? "top" : "left",
                p = E ? "bottom" : "right",
                m = E ? "clientHeight" : "clientWidth",
                S = i.reference[x] + i.reference[v] - c[v] - i.floating[x],
                C = c[v] - i.reference[v],
                P = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
            let k = P ? P[m] : 0;
            (!k || !await (s.isElement == null ? void 0 : s.isElement(P))) && (k = l.floating[m] || i.floating[x]);
            const N = S / 2 - C / 2,
                M = k / 2 - w[x] / 2 - 1,
                A = Tn(f[h], M),
                $ = Tn(f[p], M),
                I = A,
                W = k - w[x] - $,
                _ = k / 2 - w[x] / 2 + N,
                Q = Da(I, _, W),
                U = !a.arrow && qr(o) != null && _ !== Q && i.reference[x] / 2 - (_ < I ? A : $) - w[x] / 2 < 0,
                K = U ? _ < I ? _ - I : _ - W : 0;
            return {
                [v]: c[v] + K,
                data: {
                    [v]: Q,
                    centerOffset: _ - Q - K,
                    ...U && {
                        alignmentOffset: K
                    }
                },
                reset: U
            }
        }
    }),
    Fx = function(e) {
        return e === void 0 && (e = {}), {
            name: "flip",
            options: e,
            async fn(t) {
                var n, r;
                const {
                    placement: o,
                    middlewareData: i,
                    rects: s,
                    initialPlacement: l,
                    platform: a,
                    elements: u
                } = t, {
                    mainAxis: d = !0,
                    crossAxis: f = !0,
                    fallbackPlacements: c,
                    fallbackStrategy: v = "bestFit",
                    fallbackAxisSideDirection: x = "none",
                    flipAlignment: w = !0,
                    ...E
                } = Kt(e, t);
                if ((n = i.arrow) != null && n.alignmentOffset) return {};
                const h = Yt(o),
                    p = On(l),
                    m = Yt(l) === l,
                    S = await (a.isRTL == null ? void 0 : a.isRTL(u.floating)),
                    C = c || (m || !w ? [gs(l)] : Ax(l)),
                    P = x !== "none";
                !c && P && C.push(...Lx(l, w, x, S));
                const k = [l, ...C],
                    N = await Ho(t, E),
                    M = [];
                let A = ((r = i.flip) == null ? void 0 : r.overflows) || [];
                if (d && M.push(N[h]), f) {
                    const _ = jx(o, s, S);
                    M.push(N[_[0]], N[_[1]])
                }
                if (A = [...A, {
                        placement: o,
                        overflows: M
                    }], !M.every(_ => _ <= 0)) {
                    var $, I;
                    const _ = ((($ = i.flip) == null ? void 0 : $.index) || 0) + 1,
                        Q = k[_];
                    if (Q) return {
                        data: {
                            index: _,
                            overflows: A
                        },
                        reset: {
                            placement: Q
                        }
                    };
                    let U = (I = A.filter(K => K.overflows[0] <= 0).sort((K, b) => K.overflows[1] - b.overflows[1])[0]) == null ? void 0 : I.placement;
                    if (!U) switch (v) {
                        case "bestFit":
                            {
                                var W;
                                const K = (W = A.filter(b => {
                                    if (P) {
                                        const O = On(b.placement);
                                        return O === p || O === "y"
                                    }
                                    return !0
                                }).map(b => [b.placement, b.overflows.filter(O => O > 0).reduce((O, F) => O + F, 0)]).sort((b, O) => b[1] - O[1])[0]) == null ? void 0 : W[0];K && (U = K);
                                break
                            }
                        case "initialPlacement":
                            U = l;
                            break
                    }
                    if (o !== U) return {
                        reset: {
                            placement: U
                        }
                    }
                }
                return {}
            }
        }
    };

function Dd(e, t) {
    return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width
    }
}

function Id(e) {
    return Tx.some(t => e[t] >= 0)
}
const zx = function(e) {
    return e === void 0 && (e = {}), {
        name: "hide",
        options: e,
        async fn(t) {
            const {
                rects: n
            } = t, {
                strategy: r = "referenceHidden",
                ...o
            } = Kt(e, t);
            switch (r) {
                case "referenceHidden":
                    {
                        const i = await Ho(t, { ...o,
                                elementContext: "reference"
                            }),
                            s = Dd(i, n.reference);
                        return {
                            data: {
                                referenceHiddenOffsets: s,
                                referenceHidden: Id(s)
                            }
                        }
                    }
                case "escaped":
                    {
                        const i = await Ho(t, { ...o,
                                altBoundary: !0
                            }),
                            s = Dd(i, n.floating);
                        return {
                            data: {
                                escapedOffsets: s,
                                escaped: Id(s)
                            }
                        }
                    }
                default:
                    return {}
            }
        }
    }
};
async function $x(e, t) {
    const {
        placement: n,
        platform: r,
        elements: o
    } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = Yt(n), l = qr(n), a = On(n) === "y", u = ["left", "top"].includes(s) ? -1 : 1, d = i && a ? -1 : 1, f = Kt(t, e);
    let {
        mainAxis: c,
        crossAxis: v,
        alignmentAxis: x
    } = typeof f == "number" ? {
        mainAxis: f,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: f.mainAxis || 0,
        crossAxis: f.crossAxis || 0,
        alignmentAxis: f.alignmentAxis
    };
    return l && typeof x == "number" && (v = l === "end" ? x * -1 : x), a ? {
        x: v * d,
        y: c * u
    } : {
        x: c * u,
        y: v * d
    }
}
const Ux = function(e) {
        return e === void 0 && (e = 0), {
            name: "offset",
            options: e,
            async fn(t) {
                var n, r;
                const {
                    x: o,
                    y: i,
                    placement: s,
                    middlewareData: l
                } = t, a = await $x(t, e);
                return s === ((n = l.offset) == null ? void 0 : n.placement) && (r = l.arrow) != null && r.alignmentOffset ? {} : {
                    x: o + a.x,
                    y: i + a.y,
                    data: { ...a,
                        placement: s
                    }
                }
            }
        }
    },
    Bx = function(e) {
        return e === void 0 && (e = {}), {
            name: "shift",
            options: e,
            async fn(t) {
                const {
                    x: n,
                    y: r,
                    placement: o
                } = t, {
                    mainAxis: i = !0,
                    crossAxis: s = !1,
                    limiter: l = {
                        fn: E => {
                            let {
                                x: h,
                                y: p
                            } = E;
                            return {
                                x: h,
                                y: p
                            }
                        }
                    },
                    ...a
                } = Kt(e, t), u = {
                    x: n,
                    y: r
                }, d = await Ho(t, a), f = On(Yt(o)), c = Ku(f);
                let v = u[c],
                    x = u[f];
                if (i) {
                    const E = c === "y" ? "top" : "left",
                        h = c === "y" ? "bottom" : "right",
                        p = v + d[E],
                        m = v - d[h];
                    v = Da(p, v, m)
                }
                if (s) {
                    const E = f === "y" ? "top" : "left",
                        h = f === "y" ? "bottom" : "right",
                        p = x + d[E],
                        m = x - d[h];
                    x = Da(p, x, m)
                }
                const w = l.fn({ ...t,
                    [c]: v,
                    [f]: x
                });
                return { ...w,
                    data: {
                        x: w.x - n,
                        y: w.y - r,
                        enabled: {
                            [c]: i,
                            [f]: s
                        }
                    }
                }
            }
        }
    },
    Vx = function(e) {
        return e === void 0 && (e = {}), {
            options: e,
            fn(t) {
                const {
                    x: n,
                    y: r,
                    placement: o,
                    rects: i,
                    middlewareData: s
                } = t, {
                    offset: l = 0,
                    mainAxis: a = !0,
                    crossAxis: u = !0
                } = Kt(e, t), d = {
                    x: n,
                    y: r
                }, f = On(o), c = Ku(f);
                let v = d[c],
                    x = d[f];
                const w = Kt(l, t),
                    E = typeof w == "number" ? {
                        mainAxis: w,
                        crossAxis: 0
                    } : {
                        mainAxis: 0,
                        crossAxis: 0,
                        ...w
                    };
                if (a) {
                    const m = c === "y" ? "height" : "width",
                        S = i.reference[c] - i.floating[m] + E.mainAxis,
                        C = i.reference[c] + i.reference[m] - E.mainAxis;
                    v < S ? v = S : v > C && (v = C)
                }
                if (u) {
                    var h, p;
                    const m = c === "y" ? "width" : "height",
                        S = ["top", "left"].includes(Yt(o)),
                        C = i.reference[f] - i.floating[m] + (S && ((h = s.offset) == null ? void 0 : h[f]) || 0) + (S ? 0 : E.crossAxis),
                        P = i.reference[f] + i.reference[m] + (S ? 0 : ((p = s.offset) == null ? void 0 : p[f]) || 0) - (S ? E.crossAxis : 0);
                    x < C ? x = C : x > P && (x = P)
                }
                return {
                    [c]: v,
                    [f]: x
                }
            }
        }
    },
    Hx = function(e) {
        return e === void 0 && (e = {}), {
            name: "size",
            options: e,
            async fn(t) {
                var n, r;
                const {
                    placement: o,
                    rects: i,
                    platform: s,
                    elements: l
                } = t, {
                    apply: a = () => {},
                    ...u
                } = Kt(e, t), d = await Ho(t, u), f = Yt(o), c = qr(o), v = On(o) === "y", {
                    width: x,
                    height: w
                } = i.floating;
                let E, h;
                f === "top" || f === "bottom" ? (E = f, h = c === (await (s.isRTL == null ? void 0 : s.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (h = f, E = c === "end" ? "top" : "bottom");
                const p = w - d.top - d.bottom,
                    m = x - d.left - d.right,
                    S = Tn(w - d[E], p),
                    C = Tn(x - d[h], m),
                    P = !t.middlewareData.shift;
                let k = S,
                    N = C;
                if ((n = t.middlewareData.shift) != null && n.enabled.x && (N = m), (r = t.middlewareData.shift) != null && r.enabled.y && (k = p), P && !c) {
                    const A = Ge(d.left, 0),
                        $ = Ge(d.right, 0),
                        I = Ge(d.top, 0),
                        W = Ge(d.bottom, 0);
                    v ? N = x - 2 * (A !== 0 || $ !== 0 ? A + $ : Ge(d.left, d.right)) : k = w - 2 * (I !== 0 || W !== 0 ? I + W : Ge(d.top, d.bottom))
                }
                await a({ ...t,
                    availableWidth: N,
                    availableHeight: k
                });
                const M = await s.getDimensions(l.floating);
                return x !== M.width || w !== M.height ? {
                    reset: {
                        rects: !0
                    }
                } : {}
            }
        }
    };

function Bs() {
    return typeof window < "u"
}

function Jr(e) {
    return Sm(e) ? (e.nodeName || "").toLowerCase() : "#document"
}

function Je(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}

function Mt(e) {
    var t;
    return (t = (Sm(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}

function Sm(e) {
    return Bs() ? e instanceof Node || e instanceof Je(e).Node : !1
}

function Et(e) {
    return Bs() ? e instanceof Element || e instanceof Je(e).Element : !1
}

function _t(e) {
    return Bs() ? e instanceof HTMLElement || e instanceof Je(e).HTMLElement : !1
}

function Fd(e) {
    return !Bs() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Je(e).ShadowRoot
}

function ti(e) {
    const {
        overflow: t,
        overflowX: n,
        overflowY: r,
        display: o
    } = St(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o)
}

function Wx(e) {
    return ["table", "td", "th"].includes(Jr(e))
}

function Vs(e) {
    return [":popover-open", ":modal"].some(t => {
        try {
            return e.matches(t)
        } catch {
            return !1
        }
    })
}

function Xu(e) {
    const t = qu(),
        n = Et(e) ? St(e) : e;
    return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some(r => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some(r => (n.contain || "").includes(r))
}

function Qx(e) {
    let t = jn(e);
    for (; _t(t) && !Hr(t);) {
        if (Xu(t)) return t;
        if (Vs(t)) return null;
        t = jn(t)
    }
    return null
}

function qu() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}

function Hr(e) {
    return ["html", "body", "#document"].includes(Jr(e))
}

function St(e) {
    return Je(e).getComputedStyle(e)
}

function Hs(e) {
    return Et(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
    }
}

function jn(e) {
    if (Jr(e) === "html") return e;
    const t = e.assignedSlot || e.parentNode || Fd(e) && e.host || Mt(e);
    return Fd(t) ? t.host : t
}

function Cm(e) {
    const t = jn(e);
    return Hr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : _t(t) && ti(t) ? t : Cm(t)
}

function Wo(e, t, n) {
    var r;
    t === void 0 && (t = []), n === void 0 && (n = !0);
    const o = Cm(e),
        i = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
        s = Je(o);
    if (i) {
        const l = Fa(s);
        return t.concat(s, s.visualViewport || [], ti(o) ? o : [], l && n ? Wo(l) : [])
    }
    return t.concat(o, Wo(o, [], n))
}

function Fa(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}

function km(e) {
    const t = St(e);
    let n = parseFloat(t.width) || 0,
        r = parseFloat(t.height) || 0;
    const o = _t(e),
        i = o ? e.offsetWidth : n,
        s = o ? e.offsetHeight : r,
        l = ms(n) !== i || ms(r) !== s;
    return l && (n = i, r = s), {
        width: n,
        height: r,
        $: l
    }
}

function Ju(e) {
    return Et(e) ? e : e.contextElement
}

function Pr(e) {
    const t = Ju(e);
    if (!_t(t)) return Rn(1);
    const n = t.getBoundingClientRect(),
        {
            width: r,
            height: o,
            $: i
        } = km(t);
    let s = (i ? ms(n.width) : n.width) / r,
        l = (i ? ms(n.height) : n.height) / o;
    return (!s || !Number.isFinite(s)) && (s = 1), (!l || !Number.isFinite(l)) && (l = 1), {
        x: s,
        y: l
    }
}
const Kx = Rn(0);

function bm(e) {
    const t = Je(e);
    return !qu() || !t.visualViewport ? Kx : {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    }
}

function Yx(e, t, n) {
    return t === void 0 && (t = !1), !n || t && n !== Je(e) ? !1 : t
}

function Zn(e, t, n, r) {
    t === void 0 && (t = !1), n === void 0 && (n = !1);
    const o = e.getBoundingClientRect(),
        i = Ju(e);
    let s = Rn(1);
    t && (r ? Et(r) && (s = Pr(r)) : s = Pr(e));
    const l = Yx(i, n, r) ? bm(i) : Rn(0);
    let a = (o.left + l.x) / s.x,
        u = (o.top + l.y) / s.y,
        d = o.width / s.x,
        f = o.height / s.y;
    if (i) {
        const c = Je(i),
            v = r && Et(r) ? Je(r) : r;
        let x = c,
            w = Fa(x);
        for (; w && r && v !== x;) {
            const E = Pr(w),
                h = w.getBoundingClientRect(),
                p = St(w),
                m = h.left + (w.clientLeft + parseFloat(p.paddingLeft)) * E.x,
                S = h.top + (w.clientTop + parseFloat(p.paddingTop)) * E.y;
            a *= E.x, u *= E.y, d *= E.x, f *= E.y, a += m, u += S, x = Je(w), w = Fa(x)
        }
    }
    return vs({
        width: d,
        height: f,
        x: a,
        y: u
    })
}

function Gx(e) {
    let {
        elements: t,
        rect: n,
        offsetParent: r,
        strategy: o
    } = e;
    const i = o === "fixed",
        s = Mt(r),
        l = t ? Vs(t.floating) : !1;
    if (r === s || l && i) return n;
    let a = {
            scrollLeft: 0,
            scrollTop: 0
        },
        u = Rn(1);
    const d = Rn(0),
        f = _t(r);
    if ((f || !f && !i) && ((Jr(r) !== "body" || ti(s)) && (a = Hs(r)), _t(r))) {
        const c = Zn(r);
        u = Pr(r), d.x = c.x + r.clientLeft, d.y = c.y + r.clientTop
    }
    return {
        width: n.width * u.x,
        height: n.height * u.y,
        x: n.x * u.x - a.scrollLeft * u.x + d.x,
        y: n.y * u.y - a.scrollTop * u.y + d.y
    }
}

function Xx(e) {
    return Array.from(e.getClientRects())
}

function za(e, t) {
    const n = Hs(e).scrollLeft;
    return t ? t.left + n : Zn(Mt(e)).left + n
}

function qx(e) {
    const t = Mt(e),
        n = Hs(e),
        r = e.ownerDocument.body,
        o = Ge(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
        i = Ge(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
    let s = -n.scrollLeft + za(e);
    const l = -n.scrollTop;
    return St(r).direction === "rtl" && (s += Ge(t.clientWidth, r.clientWidth) - o), {
        width: o,
        height: i,
        x: s,
        y: l
    }
}

function Jx(e, t) {
    const n = Je(e),
        r = Mt(e),
        o = n.visualViewport;
    let i = r.clientWidth,
        s = r.clientHeight,
        l = 0,
        a = 0;
    if (o) {
        i = o.width, s = o.height;
        const u = qu();
        (!u || u && t === "fixed") && (l = o.offsetLeft, a = o.offsetTop)
    }
    return {
        width: i,
        height: s,
        x: l,
        y: a
    }
}

function Zx(e, t) {
    const n = Zn(e, !0, t === "fixed"),
        r = n.top + e.clientTop,
        o = n.left + e.clientLeft,
        i = _t(e) ? Pr(e) : Rn(1),
        s = e.clientWidth * i.x,
        l = e.clientHeight * i.y,
        a = o * i.x,
        u = r * i.y;
    return {
        width: s,
        height: l,
        x: a,
        y: u
    }
}

function zd(e, t, n) {
    let r;
    if (t === "viewport") r = Jx(e, n);
    else if (t === "document") r = qx(Mt(e));
    else if (Et(t)) r = Zx(t, n);
    else {
        const o = bm(e);
        r = { ...t,
            x: t.x - o.x,
            y: t.y - o.y
        }
    }
    return vs(r)
}

function Pm(e, t) {
    const n = jn(e);
    return n === t || !Et(n) || Hr(n) ? !1 : St(n).position === "fixed" || Pm(n, t)
}

function e1(e, t) {
    const n = t.get(e);
    if (n) return n;
    let r = Wo(e, [], !1).filter(l => Et(l) && Jr(l) !== "body"),
        o = null;
    const i = St(e).position === "fixed";
    let s = i ? jn(e) : e;
    for (; Et(s) && !Hr(s);) {
        const l = St(s),
            a = Xu(s);
        !a && l.position === "fixed" && (o = null), (i ? !a && !o : !a && l.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || ti(s) && !a && Pm(e, s)) ? r = r.filter(d => d !== s) : o = l, s = jn(s)
    }
    return t.set(e, r), r
}

function t1(e) {
    let {
        element: t,
        boundary: n,
        rootBoundary: r,
        strategy: o
    } = e;
    const s = [...n === "clippingAncestors" ? Vs(t) ? [] : e1(t, this._c) : [].concat(n), r],
        l = s[0],
        a = s.reduce((u, d) => {
            const f = zd(t, d, o);
            return u.top = Ge(f.top, u.top), u.right = Tn(f.right, u.right), u.bottom = Tn(f.bottom, u.bottom), u.left = Ge(f.left, u.left), u
        }, zd(t, l, o));
    return {
        width: a.right - a.left,
        height: a.bottom - a.top,
        x: a.left,
        y: a.top
    }
}

function n1(e) {
    const {
        width: t,
        height: n
    } = km(e);
    return {
        width: t,
        height: n
    }
}

function r1(e, t, n) {
    const r = _t(t),
        o = Mt(t),
        i = n === "fixed",
        s = Zn(e, !0, i, t);
    let l = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const a = Rn(0);
    if (r || !r && !i)
        if ((Jr(t) !== "body" || ti(o)) && (l = Hs(t)), r) {
            const v = Zn(t, !0, i, t);
            a.x = v.x + t.clientLeft, a.y = v.y + t.clientTop
        } else o && (a.x = za(o));
    let u = 0,
        d = 0;
    if (o && !r && !i) {
        const v = o.getBoundingClientRect();
        d = v.top + l.scrollTop, u = v.left + l.scrollLeft - za(o, v)
    }
    const f = s.left + l.scrollLeft - a.x - u,
        c = s.top + l.scrollTop - a.y - d;
    return {
        x: f,
        y: c,
        width: s.width,
        height: s.height
    }
}

function _l(e) {
    return St(e).position === "static"
}

function $d(e, t) {
    if (!_t(e) || St(e).position === "fixed") return null;
    if (t) return t(e);
    let n = e.offsetParent;
    return Mt(e) === n && (n = n.ownerDocument.body), n
}

function Nm(e, t) {
    const n = Je(e);
    if (Vs(e)) return n;
    if (!_t(e)) {
        let o = jn(e);
        for (; o && !Hr(o);) {
            if (Et(o) && !_l(o)) return o;
            o = jn(o)
        }
        return n
    }
    let r = $d(e, t);
    for (; r && Wx(r) && _l(r);) r = $d(r, t);
    return r && Hr(r) && _l(r) && !Xu(r) ? n : r || Qx(e) || n
}
const o1 = async function(e) {
    const t = this.getOffsetParent || Nm,
        n = this.getDimensions,
        r = await n(e.floating);
    return {
        reference: r1(e.reference, await t(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: r.width,
            height: r.height
        }
    }
};

function i1(e) {
    return St(e).direction === "rtl"
}
const s1 = {
    convertOffsetParentRelativeRectToViewportRelativeRect: Gx,
    getDocumentElement: Mt,
    getClippingRect: t1,
    getOffsetParent: Nm,
    getElementRects: o1,
    getClientRects: Xx,
    getDimensions: n1,
    getScale: Pr,
    isElement: Et,
    isRTL: i1
};

function l1(e, t) {
    let n = null,
        r;
    const o = Mt(e);

    function i() {
        var l;
        clearTimeout(r), (l = n) == null || l.disconnect(), n = null
    }

    function s(l, a) {
        l === void 0 && (l = !1), a === void 0 && (a = 1), i();
        const {
            left: u,
            top: d,
            width: f,
            height: c
        } = e.getBoundingClientRect();
        if (l || t(), !f || !c) return;
        const v = Ni(d),
            x = Ni(o.clientWidth - (u + f)),
            w = Ni(o.clientHeight - (d + c)),
            E = Ni(u),
            p = {
                rootMargin: -v + "px " + -x + "px " + -w + "px " + -E + "px",
                threshold: Ge(0, Tn(1, a)) || 1
            };
        let m = !0;

        function S(C) {
            const P = C[0].intersectionRatio;
            if (P !== a) {
                if (!m) return s();
                P ? s(!1, P) : r = setTimeout(() => {
                    s(!1, 1e-7)
                }, 1e3)
            }
            m = !1
        }
        try {
            n = new IntersectionObserver(S, { ...p,
                root: o.ownerDocument
            })
        } catch {
            n = new IntersectionObserver(S, p)
        }
        n.observe(e)
    }
    return s(!0), i
}

function a1(e, t, n, r) {
    r === void 0 && (r = {});
    const {
        ancestorScroll: o = !0,
        ancestorResize: i = !0,
        elementResize: s = typeof ResizeObserver == "function",
        layoutShift: l = typeof IntersectionObserver == "function",
        animationFrame: a = !1
    } = r, u = Ju(e), d = o || i ? [...u ? Wo(u) : [], ...Wo(t)] : [];
    d.forEach(h => {
        o && h.addEventListener("scroll", n, {
            passive: !0
        }), i && h.addEventListener("resize", n)
    });
    const f = u && l ? l1(u, n) : null;
    let c = -1,
        v = null;
    s && (v = new ResizeObserver(h => {
        let [p] = h;
        p && p.target === u && v && (v.unobserve(t), cancelAnimationFrame(c), c = requestAnimationFrame(() => {
            var m;
            (m = v) == null || m.observe(t)
        })), n()
    }), u && !a && v.observe(u), v.observe(t));
    let x, w = a ? Zn(e) : null;
    a && E();

    function E() {
        const h = Zn(e);
        w && (h.x !== w.x || h.y !== w.y || h.width !== w.width || h.height !== w.height) && n(), w = h, x = requestAnimationFrame(E)
    }
    return n(), () => {
        var h;
        d.forEach(p => {
            o && p.removeEventListener("scroll", n), i && p.removeEventListener("resize", n)
        }), f == null || f(), (h = v) == null || h.disconnect(), v = null, a && cancelAnimationFrame(x)
    }
}
const u1 = Ux,
    c1 = Bx,
    d1 = Fx,
    f1 = Hx,
    p1 = zx,
    Ud = Ix,
    h1 = Vx,
    m1 = (e, t, n) => {
        const r = new Map,
            o = {
                platform: s1,
                ...n
            },
            i = { ...o.platform,
                _c: r
            };
        return Dx(e, t, { ...o,
            platform: i
        })
    };
var Hi = typeof document < "u" ? g.useLayoutEffect : g.useEffect;

function ys(e, t) {
    if (e === t) return !0;
    if (typeof e != typeof t) return !1;
    if (typeof e == "function" && e.toString() === t.toString()) return !0;
    let n, r, o;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (n = e.length, n !== t.length) return !1;
            for (r = n; r-- !== 0;)
                if (!ys(e[r], t[r])) return !1;
            return !0
        }
        if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length) return !1;
        for (r = n; r-- !== 0;)
            if (!{}.hasOwnProperty.call(t, o[r])) return !1;
        for (r = n; r-- !== 0;) {
            const i = o[r];
            if (!(i === "_owner" && e.$$typeof) && !ys(e[i], t[i])) return !1
        }
        return !0
    }
    return e !== e && t !== t
}

function Tm(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}

function Bd(e, t) {
    const n = Tm(e);
    return Math.round(t * n) / n
}

function Ll(e) {
    const t = g.useRef(e);
    return Hi(() => {
        t.current = e
    }), t
}

function g1(e) {
    e === void 0 && (e = {});
    const {
        placement: t = "bottom",
        strategy: n = "absolute",
        middleware: r = [],
        platform: o,
        elements: {
            reference: i,
            floating: s
        } = {},
        transform: l = !0,
        whileElementsMounted: a,
        open: u
    } = e, [d, f] = g.useState({
        x: 0,
        y: 0,
        strategy: n,
        placement: t,
        middlewareData: {},
        isPositioned: !1
    }), [c, v] = g.useState(r);
    ys(c, r) || v(r);
    const [x, w] = g.useState(null), [E, h] = g.useState(null), p = g.useCallback(b => {
        b !== P.current && (P.current = b, w(b))
    }, []), m = g.useCallback(b => {
        b !== k.current && (k.current = b, h(b))
    }, []), S = i || x, C = s || E, P = g.useRef(null), k = g.useRef(null), N = g.useRef(d), M = a != null, A = Ll(a), $ = Ll(o), I = Ll(u), W = g.useCallback(() => {
        if (!P.current || !k.current) return;
        const b = {
            placement: t,
            strategy: n,
            middleware: c
        };
        $.current && (b.platform = $.current), m1(P.current, k.current, b).then(O => {
            const F = { ...O,
                isPositioned: I.current !== !1
            };
            _.current && !ys(N.current, F) && (N.current = F, Gr.flushSync(() => {
                f(F)
            }))
        })
    }, [c, t, n, $, I]);
    Hi(() => {
        u === !1 && N.current.isPositioned && (N.current.isPositioned = !1, f(b => ({ ...b,
            isPositioned: !1
        })))
    }, [u]);
    const _ = g.useRef(!1);
    Hi(() => (_.current = !0, () => {
        _.current = !1
    }), []), Hi(() => {
        if (S && (P.current = S), C && (k.current = C), S && C) {
            if (A.current) return A.current(S, C, W);
            W()
        }
    }, [S, C, W, A, M]);
    const Q = g.useMemo(() => ({
            reference: P,
            floating: k,
            setReference: p,
            setFloating: m
        }), [p, m]),
        U = g.useMemo(() => ({
            reference: S,
            floating: C
        }), [S, C]),
        K = g.useMemo(() => {
            const b = {
                position: n,
                left: 0,
                top: 0
            };
            if (!U.floating) return b;
            const O = Bd(U.floating, d.x),
                F = Bd(U.floating, d.y);
            return l ? { ...b,
                transform: "translate(" + O + "px, " + F + "px)",
                ...Tm(U.floating) >= 1.5 && {
                    willChange: "transform"
                }
            } : {
                position: n,
                left: O,
                top: F
            }
        }, [n, l, U.floating, d.x, d.y]);
    return g.useMemo(() => ({ ...d,
        update: W,
        refs: Q,
        elements: U,
        floatingStyles: K
    }), [d, W, Q, U, K])
}
const v1 = e => {
        function t(n) {
            return {}.hasOwnProperty.call(n, "current")
        }
        return {
            name: "arrow",
            options: e,
            fn(n) {
                const {
                    element: r,
                    padding: o
                } = typeof e == "function" ? e(n) : e;
                return r && t(r) ? r.current != null ? Ud({
                    element: r.current,
                    padding: o
                }).fn(n) : {} : r ? Ud({
                    element: r,
                    padding: o
                }).fn(n) : {}
            }
        }
    },
    y1 = (e, t) => ({ ...u1(e),
        options: [e, t]
    }),
    w1 = (e, t) => ({ ...c1(e),
        options: [e, t]
    }),
    x1 = (e, t) => ({ ...h1(e),
        options: [e, t]
    }),
    E1 = (e, t) => ({ ...d1(e),
        options: [e, t]
    }),
    S1 = (e, t) => ({ ...f1(e),
        options: [e, t]
    }),
    C1 = (e, t) => ({ ...p1(e),
        options: [e, t]
    }),
    k1 = (e, t) => ({ ...v1(e),
        options: [e, t]
    });
var b1 = "Arrow",
    Rm = g.forwardRef((e, t) => {
        const {
            children: n,
            width: r = 10,
            height: o = 5,
            ...i
        } = e;
        return y.jsx(we.svg, { ...i,
            ref: t,
            width: r,
            height: o,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild ? n : y.jsx("polygon", {
                points: "0,0 30,0 15,10"
            })
        })
    });
Rm.displayName = b1;
var P1 = Rm;

function N1(e) {
    const [t, n] = g.useState(void 0);
    return xt(() => {
        if (e) {
            n({
                width: e.offsetWidth,
                height: e.offsetHeight
            });
            const r = new ResizeObserver(o => {
                if (!Array.isArray(o) || !o.length) return;
                const i = o[0];
                let s, l;
                if ("borderBoxSize" in i) {
                    const a = i.borderBoxSize,
                        u = Array.isArray(a) ? a[0] : a;
                    s = u.inlineSize, l = u.blockSize
                } else s = e.offsetWidth, l = e.offsetHeight;
                n({
                    width: s,
                    height: l
                })
            });
            return r.observe(e, {
                box: "border-box"
            }), () => r.unobserve(e)
        } else n(void 0)
    }, [e]), t
}
var Om = "Popper",
    [jm, Am] = Fs(Om),
    [AS, _m] = jm(Om),
    Lm = "PopperAnchor",
    Mm = g.forwardRef((e, t) => {
        const {
            __scopePopper: n,
            virtualRef: r,
            ...o
        } = e, i = _m(Lm, n), s = g.useRef(null), l = Ve(t, s);
        return g.useEffect(() => {
            i.onAnchorChange((r == null ? void 0 : r.current) || s.current)
        }), r ? null : y.jsx(we.div, { ...o,
            ref: l
        })
    });
Mm.displayName = Lm;
var Zu = "PopperContent",
    [T1, R1] = jm(Zu),
    Dm = g.forwardRef((e, t) => {
        var ct, Xt, qt, Jt, ni, nr;
        const {
            __scopePopper: n,
            side: r = "bottom",
            sideOffset: o = 0,
            align: i = "center",
            alignOffset: s = 0,
            arrowPadding: l = 0,
            avoidCollisions: a = !0,
            collisionBoundary: u = [],
            collisionPadding: d = 0,
            sticky: f = "partial",
            hideWhenDetached: c = !1,
            updatePositionStrategy: v = "optimized",
            onPlaced: x,
            ...w
        } = e, E = _m(Zu, n), [h, p] = g.useState(null), m = Ve(t, Mn => p(Mn)), [S, C] = g.useState(null), P = N1(S), k = (P == null ? void 0 : P.width) ? ? 0, N = (P == null ? void 0 : P.height) ? ? 0, M = r + (i !== "center" ? "-" + i : ""), A = typeof d == "number" ? d : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...d
        }, $ = Array.isArray(u) ? u : [u], I = $.length > 0, W = {
            padding: A,
            boundary: $.filter(j1),
            altBoundary: I
        }, {
            refs: _,
            floatingStyles: Q,
            placement: U,
            isPositioned: K,
            middlewareData: b
        } = g1({
            strategy: "fixed",
            placement: M,
            whileElementsMounted: (...Mn) => a1(...Mn, {
                animationFrame: v === "always"
            }),
            elements: {
                reference: E.anchor
            },
            middleware: [y1({
                mainAxis: o + N,
                alignmentAxis: s
            }), a && w1({
                mainAxis: !0,
                crossAxis: !1,
                limiter: f === "partial" ? x1() : void 0,
                ...W
            }), a && E1({ ...W
            }), S1({ ...W,
                apply: ({
                    elements: Mn,
                    rects: Zr,
                    availableWidth: ri,
                    availableHeight: Zt
                }) => {
                    const {
                        width: Js,
                        height: Zs
                    } = Zr.reference, Se = Mn.floating.style;
                    Se.setProperty("--radix-popper-available-width", `${ri}px`), Se.setProperty("--radix-popper-available-height", `${Zt}px`), Se.setProperty("--radix-popper-anchor-width", `${Js}px`), Se.setProperty("--radix-popper-anchor-height", `${Zs}px`)
                }
            }), S && k1({
                element: S,
                padding: l
            }), A1({
                arrowWidth: k,
                arrowHeight: N
            }), c && C1({
                strategy: "referenceHidden",
                ...W
            })]
        }), [O, F] = zm(U), D = et(x);
        xt(() => {
            K && (D == null || D())
        }, [K, D]);
        const z = (ct = b.arrow) == null ? void 0 : ct.x,
            G = (Xt = b.arrow) == null ? void 0 : Xt.y,
            le = ((qt = b.arrow) == null ? void 0 : qt.centerOffset) !== 0,
            [We, J] = g.useState();
        return xt(() => {
            h && J(window.getComputedStyle(h).zIndex)
        }, [h]), y.jsx("div", {
            ref: _.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: { ...Q,
                transform: K ? Q.transform : "translate(0, -200%)",
                minWidth: "max-content",
                zIndex: We,
                "--radix-popper-transform-origin": [(Jt = b.transformOrigin) == null ? void 0 : Jt.x, (ni = b.transformOrigin) == null ? void 0 : ni.y].join(" "),
                ...((nr = b.hide) == null ? void 0 : nr.referenceHidden) && {
                    visibility: "hidden",
                    pointerEvents: "none"
                }
            },
            dir: e.dir,
            children: y.jsx(T1, {
                scope: n,
                placedSide: O,
                onArrowChange: C,
                arrowX: z,
                arrowY: G,
                shouldHideArrow: le,
                children: y.jsx(we.div, {
                    "data-side": O,
                    "data-align": F,
                    ...w,
                    ref: m,
                    style: { ...w.style,
                        animation: K ? void 0 : "none"
                    }
                })
            })
        })
    });
Dm.displayName = Zu;
var Im = "PopperArrow",
    O1 = {
        top: "bottom",
        right: "left",
        bottom: "top",
        left: "right"
    },
    Fm = g.forwardRef(function(t, n) {
        const {
            __scopePopper: r,
            ...o
        } = t, i = R1(Im, r), s = O1[i.placedSide];
        return y.jsx("span", {
            ref: i.onArrowChange,
            style: {
                position: "absolute",
                left: i.arrowX,
                top: i.arrowY,
                [s]: 0,
                transformOrigin: {
                    top: "",
                    right: "0 0",
                    bottom: "center 0",
                    left: "100% 0"
                }[i.placedSide],
                transform: {
                    top: "translateY(100%)",
                    right: "translateY(50%) rotate(90deg) translateX(-50%)",
                    bottom: "rotate(180deg)",
                    left: "translateY(50%) rotate(-90deg) translateX(50%)"
                }[i.placedSide],
                visibility: i.shouldHideArrow ? "hidden" : void 0
            },
            children: y.jsx(P1, { ...o,
                ref: n,
                style: { ...o.style,
                    display: "block"
                }
            })
        })
    });
Fm.displayName = Im;

function j1(e) {
    return e !== null
}
var A1 = e => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
        var E, h, p;
        const {
            placement: n,
            rects: r,
            middlewareData: o
        } = t, s = ((E = o.arrow) == null ? void 0 : E.centerOffset) !== 0, l = s ? 0 : e.arrowWidth, a = s ? 0 : e.arrowHeight, [u, d] = zm(n), f = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[d], c = (((h = o.arrow) == null ? void 0 : h.x) ? ? 0) + l / 2, v = (((p = o.arrow) == null ? void 0 : p.y) ? ? 0) + a / 2;
        let x = "",
            w = "";
        return u === "bottom" ? (x = s ? f : `${c}px`, w = `${-a}px`) : u === "top" ? (x = s ? f : `${c}px`, w = `${r.floating.height+a}px`) : u === "right" ? (x = `${-a}px`, w = s ? f : `${v}px`) : u === "left" && (x = `${r.floating.width+a}px`, w = s ? f : `${v}px`), {
            data: {
                x,
                y: w
            }
        }
    }
});

function zm(e) {
    const [t, n = "center"] = e.split("-");
    return [t, n]
}
var _1 = Mm,
    L1 = Dm,
    M1 = Fm;

function D1(e, t) {
    return g.useReducer((n, r) => t[n][r] ? ? n, e)
}
var $m = e => {
    const {
        present: t,
        children: n
    } = e, r = I1(t), o = typeof n == "function" ? n({
        present: r.isPresent
    }) : g.Children.only(n), i = Ve(r.ref, F1(o));
    return typeof n == "function" || r.isPresent ? g.cloneElement(o, {
        ref: i
    }) : null
};
$m.displayName = "Presence";

function I1(e) {
    const [t, n] = g.useState(), r = g.useRef({}), o = g.useRef(e), i = g.useRef("none"), s = e ? "mounted" : "unmounted", [l, a] = D1(s, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return g.useEffect(() => {
        const u = Ti(r.current);
        i.current = l === "mounted" ? u : "none"
    }, [l]), xt(() => {
        const u = r.current,
            d = o.current;
        if (d !== e) {
            const c = i.current,
                v = Ti(u);
            e ? a("MOUNT") : v === "none" || (u == null ? void 0 : u.display) === "none" ? a("UNMOUNT") : a(d && c !== v ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e
        }
    }, [e, a]), xt(() => {
        if (t) {
            let u;
            const d = t.ownerDocument.defaultView ? ? window,
                f = v => {
                    const w = Ti(r.current).includes(v.animationName);
                    if (v.target === t && w && (a("ANIMATION_END"), !o.current)) {
                        const E = t.style.animationFillMode;
                        t.style.animationFillMode = "forwards", u = d.setTimeout(() => {
                            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = E)
                        })
                    }
                },
                c = v => {
                    v.target === t && (i.current = Ti(r.current))
                };
            return t.addEventListener("animationstart", c), t.addEventListener("animationcancel", f), t.addEventListener("animationend", f), () => {
                d.clearTimeout(u), t.removeEventListener("animationstart", c), t.removeEventListener("animationcancel", f), t.removeEventListener("animationend", f)
            }
        } else a("ANIMATION_END")
    }, [t, a]), {
        isPresent: ["mounted", "unmountSuspended"].includes(l),
        ref: g.useCallback(u => {
            u && (r.current = getComputedStyle(u)), n(u)
        }, [])
    }
}

function Ti(e) {
    return (e == null ? void 0 : e.animationName) || "none"
}

function F1(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}
var [Ws, _S] = wx("Tooltip", [Am]), ec = Am(), Um = "TooltipProvider", z1 = 700, Vd = "tooltip.open", [$1, Bm] = Ws(Um), Vm = e => {
    const {
        __scopeTooltip: t,
        delayDuration: n = z1,
        skipDelayDuration: r = 300,
        disableHoverableContent: o = !1,
        children: i
    } = e, [s, l] = g.useState(!0), a = g.useRef(!1), u = g.useRef(0);
    return g.useEffect(() => {
        const d = u.current;
        return () => window.clearTimeout(d)
    }, []), y.jsx($1, {
        scope: t,
        isOpenDelayed: s,
        delayDuration: n,
        onOpen: g.useCallback(() => {
            window.clearTimeout(u.current), l(!1)
        }, []),
        onClose: g.useCallback(() => {
            window.clearTimeout(u.current), u.current = window.setTimeout(() => l(!0), r)
        }, [r]),
        isPointerInTransitRef: a,
        onPointerInTransitChange: g.useCallback(d => {
            a.current = d
        }, []),
        disableHoverableContent: o,
        children: i
    })
};
Vm.displayName = Um;
var Hm = "Tooltip",
    [LS, Qs] = Ws(Hm),
    $a = "TooltipTrigger",
    U1 = g.forwardRef((e, t) => {
        const {
            __scopeTooltip: n,
            ...r
        } = e, o = Qs($a, n), i = Bm($a, n), s = ec(n), l = g.useRef(null), a = Ve(t, l, o.onTriggerChange), u = g.useRef(!1), d = g.useRef(!1), f = g.useCallback(() => u.current = !1, []);
        return g.useEffect(() => () => document.removeEventListener("pointerup", f), [f]), y.jsx(_1, {
            asChild: !0,
            ...s,
            children: y.jsx(we.button, {
                "aria-describedby": o.open ? o.contentId : void 0,
                "data-state": o.stateAttribute,
                ...r,
                ref: a,
                onPointerMove: pe(e.onPointerMove, c => {
                    c.pointerType !== "touch" && !d.current && !i.isPointerInTransitRef.current && (o.onTriggerEnter(), d.current = !0)
                }),
                onPointerLeave: pe(e.onPointerLeave, () => {
                    o.onTriggerLeave(), d.current = !1
                }),
                onPointerDown: pe(e.onPointerDown, () => {
                    u.current = !0, document.addEventListener("pointerup", f, {
                        once: !0
                    })
                }),
                onFocus: pe(e.onFocus, () => {
                    u.current || o.onOpen()
                }),
                onBlur: pe(e.onBlur, o.onClose),
                onClick: pe(e.onClick, o.onClose)
            })
        })
    });
U1.displayName = $a;
var B1 = "TooltipPortal",
    [MS, V1] = Ws(B1, {
        forceMount: void 0
    }),
    Wr = "TooltipContent",
    Wm = g.forwardRef((e, t) => {
        const n = V1(Wr, e.__scopeTooltip),
            {
                forceMount: r = n.forceMount,
                side: o = "top",
                ...i
            } = e,
            s = Qs(Wr, e.__scopeTooltip);
        return y.jsx($m, {
            present: r || s.open,
            children: s.disableHoverableContent ? y.jsx(Qm, {
                side: o,
                ...i,
                ref: t
            }) : y.jsx(H1, {
                side: o,
                ...i,
                ref: t
            })
        })
    }),
    H1 = g.forwardRef((e, t) => {
        const n = Qs(Wr, e.__scopeTooltip),
            r = Bm(Wr, e.__scopeTooltip),
            o = g.useRef(null),
            i = Ve(t, o),
            [s, l] = g.useState(null),
            {
                trigger: a,
                onClose: u
            } = n,
            d = o.current,
            {
                onPointerInTransitChange: f
            } = r,
            c = g.useCallback(() => {
                l(null), f(!1)
            }, [f]),
            v = g.useCallback((x, w) => {
                const E = x.currentTarget,
                    h = {
                        x: x.clientX,
                        y: x.clientY
                    },
                    p = Y1(h, E.getBoundingClientRect()),
                    m = G1(h, p),
                    S = X1(w.getBoundingClientRect()),
                    C = J1([...m, ...S]);
                l(C), f(!0)
            }, [f]);
        return g.useEffect(() => () => c(), [c]), g.useEffect(() => {
            if (a && d) {
                const x = E => v(E, d),
                    w = E => v(E, a);
                return a.addEventListener("pointerleave", x), d.addEventListener("pointerleave", w), () => {
                    a.removeEventListener("pointerleave", x), d.removeEventListener("pointerleave", w)
                }
            }
        }, [a, d, v, c]), g.useEffect(() => {
            if (s) {
                const x = w => {
                    const E = w.target,
                        h = {
                            x: w.clientX,
                            y: w.clientY
                        },
                        p = (a == null ? void 0 : a.contains(E)) || (d == null ? void 0 : d.contains(E)),
                        m = !q1(h, s);
                    p ? c() : m && (c(), u())
                };
                return document.addEventListener("pointermove", x), () => document.removeEventListener("pointermove", x)
            }
        }, [a, d, s, u, c]), y.jsx(Qm, { ...e,
            ref: i
        })
    }),
    [W1, Q1] = Ws(Hm, {
        isInside: !1
    }),
    Qm = g.forwardRef((e, t) => {
        const {
            __scopeTooltip: n,
            children: r,
            "aria-label": o,
            onEscapeKeyDown: i,
            onPointerDownOutside: s,
            ...l
        } = e, a = Qs(Wr, n), u = ec(n), {
            onClose: d
        } = a;
        return g.useEffect(() => (document.addEventListener(Vd, d), () => document.removeEventListener(Vd, d)), [d]), g.useEffect(() => {
            if (a.trigger) {
                const f = c => {
                    const v = c.target;
                    v != null && v.contains(a.trigger) && d()
                };
                return window.addEventListener("scroll", f, {
                    capture: !0
                }), () => window.removeEventListener("scroll", f, {
                    capture: !0
                })
            }
        }, [a.trigger, d]), y.jsx(wm, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: i,
            onPointerDownOutside: s,
            onFocusOutside: f => f.preventDefault(),
            onDismiss: d,
            children: y.jsxs(L1, {
                "data-state": a.stateAttribute,
                ...u,
                ...l,
                ref: t,
                style: { ...l.style,
                    "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                    "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                    "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                    "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                    "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
                },
                children: [y.jsx(Oh, {
                    children: r
                }), y.jsx(W1, {
                    scope: n,
                    isInside: !0,
                    children: y.jsx(I0, {
                        id: a.contentId,
                        role: "tooltip",
                        children: o || r
                    })
                })]
            })
        })
    });
Wm.displayName = Wr;
var Km = "TooltipArrow",
    K1 = g.forwardRef((e, t) => {
        const {
            __scopeTooltip: n,
            ...r
        } = e, o = ec(n);
        return Q1(Km, n).isInside ? null : y.jsx(M1, { ...o,
            ...r,
            ref: t
        })
    });
K1.displayName = Km;

function Y1(e, t) {
    const n = Math.abs(t.top - e.y),
        r = Math.abs(t.bottom - e.y),
        o = Math.abs(t.right - e.x),
        i = Math.abs(t.left - e.x);
    switch (Math.min(n, r, o, i)) {
        case i:
            return "left";
        case o:
            return "right";
        case n:
            return "top";
        case r:
            return "bottom";
        default:
            throw new Error("unreachable")
    }
}

function G1(e, t, n = 5) {
    const r = [];
    switch (t) {
        case "top":
            r.push({
                x: e.x - n,
                y: e.y + n
            }, {
                x: e.x + n,
                y: e.y + n
            });
            break;
        case "bottom":
            r.push({
                x: e.x - n,
                y: e.y - n
            }, {
                x: e.x + n,
                y: e.y - n
            });
            break;
        case "left":
            r.push({
                x: e.x + n,
                y: e.y - n
            }, {
                x: e.x + n,
                y: e.y + n
            });
            break;
        case "right":
            r.push({
                x: e.x - n,
                y: e.y - n
            }, {
                x: e.x - n,
                y: e.y + n
            });
            break
    }
    return r
}

function X1(e) {
    const {
        top: t,
        right: n,
        bottom: r,
        left: o
    } = e;
    return [{
        x: o,
        y: t
    }, {
        x: n,
        y: t
    }, {
        x: n,
        y: r
    }, {
        x: o,
        y: r
    }]
}

function q1(e, t) {
    const {
        x: n,
        y: r
    } = e;
    let o = !1;
    for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
        const l = t[i].x,
            a = t[i].y,
            u = t[s].x,
            d = t[s].y;
        a > r != d > r && n < (u - l) * (r - a) / (d - a) + l && (o = !o)
    }
    return o
}

function J1(e) {
    const t = e.slice();
    return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), Z1(t)
}

function Z1(e) {
    if (e.length <= 1) return e.slice();
    const t = [];
    for (let r = 0; r < e.length; r++) {
        const o = e[r];
        for (; t.length >= 2;) {
            const i = t[t.length - 1],
                s = t[t.length - 2];
            if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x)) t.pop();
            else break
        }
        t.push(o)
    }
    t.pop();
    const n = [];
    for (let r = e.length - 1; r >= 0; r--) {
        const o = e[r];
        for (; n.length >= 2;) {
            const i = n[n.length - 1],
                s = n[n.length - 2];
            if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x)) n.pop();
            else break
        }
        n.push(o)
    }
    return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n)
}
var eE = Vm,
    Ym = Wm;
const tE = eE,
    nE = g.forwardRef(({
        className: e,
        sideOffset: t = 4,
        ...n
    }, r) => y.jsx(Ym, {
        ref: r,
        sideOffset: t,
        className: me("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
        ...n
    }));
nE.displayName = Ym.displayName;
var Ks = class {
        constructor() {
            this.listeners = new Set, this.subscribe = this.subscribe.bind(this)
        }
        subscribe(e) {
            return this.listeners.add(e), this.onSubscribe(), () => {
                this.listeners.delete(e), this.onUnsubscribe()
            }
        }
        hasListeners() {
            return this.listeners.size > 0
        }
        onSubscribe() {}
        onUnsubscribe() {}
    },
    Ys = typeof window > "u" || "Deno" in globalThis;

function pt() {}

function rE(e, t) {
    return typeof e == "function" ? e(t) : e
}

function oE(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0
}

function iE(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0)
}

function Hd(e, t) {
    return typeof e == "function" ? e(t) : e
}

function sE(e, t) {
    return typeof e == "function" ? e(t) : e
}

function Wd(e, t) {
    const {
        type: n = "all",
        exact: r,
        fetchStatus: o,
        predicate: i,
        queryKey: s,
        stale: l
    } = e;
    if (s) {
        if (r) {
            if (t.queryHash !== tc(s, t.options)) return !1
        } else if (!Ko(t.queryKey, s)) return !1
    }
    if (n !== "all") {
        const a = t.isActive();
        if (n === "active" && !a || n === "inactive" && a) return !1
    }
    return !(typeof l == "boolean" && t.isStale() !== l || o && o !== t.state.fetchStatus || i && !i(t))
}

function Qd(e, t) {
    const {
        exact: n,
        status: r,
        predicate: o,
        mutationKey: i
    } = e;
    if (i) {
        if (!t.options.mutationKey) return !1;
        if (n) {
            if (Qo(t.options.mutationKey) !== Qo(i)) return !1
        } else if (!Ko(t.options.mutationKey, i)) return !1
    }
    return !(r && t.state.status !== r || o && !o(t))
}

function tc(e, t) {
    return ((t == null ? void 0 : t.queryKeyHashFn) || Qo)(e)
}

function Qo(e) {
    return JSON.stringify(e, (t, n) => Ua(n) ? Object.keys(n).sort().reduce((r, o) => (r[o] = n[o], r), {}) : n)
}

function Ko(e, t) {
    return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? !Object.keys(t).some(n => !Ko(e[n], t[n])) : !1
}

function Gm(e, t) {
    if (e === t) return e;
    const n = Kd(e) && Kd(t);
    if (n || Ua(e) && Ua(t)) {
        const r = n ? e : Object.keys(e),
            o = r.length,
            i = n ? t : Object.keys(t),
            s = i.length,
            l = n ? [] : {};
        let a = 0;
        for (let u = 0; u < s; u++) {
            const d = n ? u : i[u];
            (!n && r.includes(d) || n) && e[d] === void 0 && t[d] === void 0 ? (l[d] = void 0, a++) : (l[d] = Gm(e[d], t[d]), l[d] === e[d] && e[d] !== void 0 && a++)
        }
        return o === s && a === o ? e : l
    }
    return t
}

function Kd(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length
}

function Ua(e) {
    if (!Yd(e)) return !1;
    const t = e.constructor;
    if (t === void 0) return !0;
    const n = t.prototype;
    return !(!Yd(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype)
}

function Yd(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}

function lE(e) {
    return new Promise(t => {
        setTimeout(t, e)
    })
}

function aE(e, t, n) {
    return typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing !== !1 ? Gm(e, t) : t
}

function uE(e, t, n = 0) {
    const r = [...e, t];
    return n && r.length > n ? r.slice(1) : r
}

function cE(e, t, n = 0) {
    const r = [t, ...e];
    return n && r.length > n ? r.slice(0, -1) : r
}
var Xm = Symbol();

function qm(e, t) {
    return !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === Xm ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn
}
var Un, cn, Tr, sf, dE = (sf = class extends Ks {
        constructor() {
            super();
            q(this, Un);
            q(this, cn);
            q(this, Tr);
            H(this, Tr, t => {
                if (!Ys && window.addEventListener) {
                    const n = () => t();
                    return window.addEventListener("visibilitychange", n, !1), () => {
                        window.removeEventListener("visibilitychange", n)
                    }
                }
            })
        }
        onSubscribe() {
            T(this, cn) || this.setEventListener(T(this, Tr))
        }
        onUnsubscribe() {
            var t;
            this.hasListeners() || ((t = T(this, cn)) == null || t.call(this), H(this, cn, void 0))
        }
        setEventListener(t) {
            var n;
            H(this, Tr, t), (n = T(this, cn)) == null || n.call(this), H(this, cn, t(r => {
                typeof r == "boolean" ? this.setFocused(r) : this.onFocus()
            }))
        }
        setFocused(t) {
            T(this, Un) !== t && (H(this, Un, t), this.onFocus())
        }
        onFocus() {
            const t = this.isFocused();
            this.listeners.forEach(n => {
                n(t)
            })
        }
        isFocused() {
            var t;
            return typeof T(this, Un) == "boolean" ? T(this, Un) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden"
        }
    }, Un = new WeakMap, cn = new WeakMap, Tr = new WeakMap, sf),
    Jm = new dE,
    Rr, dn, Or, lf, fE = (lf = class extends Ks {
        constructor() {
            super();
            q(this, Rr, !0);
            q(this, dn);
            q(this, Or);
            H(this, Or, t => {
                if (!Ys && window.addEventListener) {
                    const n = () => t(!0),
                        r = () => t(!1);
                    return window.addEventListener("online", n, !1), window.addEventListener("offline", r, !1), () => {
                        window.removeEventListener("online", n), window.removeEventListener("offline", r)
                    }
                }
            })
        }
        onSubscribe() {
            T(this, dn) || this.setEventListener(T(this, Or))
        }
        onUnsubscribe() {
            var t;
            this.hasListeners() || ((t = T(this, dn)) == null || t.call(this), H(this, dn, void 0))
        }
        setEventListener(t) {
            var n;
            H(this, Or, t), (n = T(this, dn)) == null || n.call(this), H(this, dn, t(this.setOnline.bind(this)))
        }
        setOnline(t) {
            T(this, Rr) !== t && (H(this, Rr, t), this.listeners.forEach(r => {
                r(t)
            }))
        }
        isOnline() {
            return T(this, Rr)
        }
    }, Rr = new WeakMap, dn = new WeakMap, Or = new WeakMap, lf),
    ws = new fE;

function pE(e) {
    return Math.min(1e3 * 2 ** e, 3e4)
}

function Zm(e) {
    return (e ? ? "online") === "online" ? ws.isOnline() : !0
}
var eg = class extends Error {
    constructor(e) {
        super("CancelledError"), this.revert = e == null ? void 0 : e.revert, this.silent = e == null ? void 0 : e.silent
    }
};

function Ml(e) {
    return e instanceof eg
}

function tg(e) {
    let t = !1,
        n = 0,
        r = !1,
        o, i, s;
    const l = new Promise((h, p) => {
            i = h, s = p
        }),
        a = h => {
            var p;
            r || (x(new eg(h)), (p = e.abort) == null || p.call(e))
        },
        u = () => {
            t = !0
        },
        d = () => {
            t = !1
        },
        f = () => Jm.isFocused() && (e.networkMode === "always" || ws.isOnline()) && e.canRun(),
        c = () => Zm(e.networkMode) && e.canRun(),
        v = h => {
            var p;
            r || (r = !0, (p = e.onSuccess) == null || p.call(e, h), o == null || o(), i(h))
        },
        x = h => {
            var p;
            r || (r = !0, (p = e.onError) == null || p.call(e, h), o == null || o(), s(h))
        },
        w = () => new Promise(h => {
            var p;
            o = m => {
                (r || f()) && h(m)
            }, (p = e.onPause) == null || p.call(e)
        }).then(() => {
            var h;
            o = void 0, r || (h = e.onContinue) == null || h.call(e)
        }),
        E = () => {
            if (r) return;
            let h;
            const p = n === 0 ? e.initialPromise : void 0;
            try {
                h = p ? ? e.fn()
            } catch (m) {
                h = Promise.reject(m)
            }
            Promise.resolve(h).then(v).catch(m => {
                var N;
                if (r) return;
                const S = e.retry ? ? (Ys ? 0 : 3),
                    C = e.retryDelay ? ? pE,
                    P = typeof C == "function" ? C(n, m) : C,
                    k = S === !0 || typeof S == "number" && n < S || typeof S == "function" && S(n, m);
                if (t || !k) {
                    x(m);
                    return
                }
                n++, (N = e.onFail) == null || N.call(e, n, m), lE(P).then(() => f() ? void 0 : w()).then(() => {
                    t ? x(m) : E()
                })
            })
        };
    return {
        promise: l,
        cancel: a,
        continue: () => (o == null || o(), l),
        cancelRetry: u,
        continueRetry: d,
        canStart: c,
        start: () => (c() ? E() : w().then(E), l)
    }
}

function hE() {
    let e = [],
        t = 0,
        n = l => {
            l()
        },
        r = l => {
            l()
        },
        o = l => setTimeout(l, 0);
    const i = l => {
            t ? e.push(l) : o(() => {
                n(l)
            })
        },
        s = () => {
            const l = e;
            e = [], l.length && o(() => {
                r(() => {
                    l.forEach(a => {
                        n(a)
                    })
                })
            })
        };
    return {
        batch: l => {
            let a;
            t++;
            try {
                a = l()
            } finally {
                t--, t || s()
            }
            return a
        },
        batchCalls: l => (...a) => {
            i(() => {
                l(...a)
            })
        },
        schedule: i,
        setNotifyFunction: l => {
            n = l
        },
        setBatchNotifyFunction: l => {
            r = l
        },
        setScheduler: l => {
            o = l
        }
    }
}
var Le = hE(),
    Bn, af, ng = (af = class {
        constructor() {
            q(this, Bn)
        }
        destroy() {
            this.clearGcTimeout()
        }
        scheduleGc() {
            this.clearGcTimeout(), oE(this.gcTime) && H(this, Bn, setTimeout(() => {
                this.optionalRemove()
            }, this.gcTime))
        }
        updateGcTime(e) {
            this.gcTime = Math.max(this.gcTime || 0, e ? ? (Ys ? 1 / 0 : 5 * 60 * 1e3))
        }
        clearGcTimeout() {
            T(this, Bn) && (clearTimeout(T(this, Bn)), H(this, Bn, void 0))
        }
    }, Bn = new WeakMap, af),
    jr, Ar, rt, Re, Yo, Vn, ht, It, uf, mE = (uf = class extends ng {
        constructor(t) {
            super();
            q(this, ht);
            q(this, jr);
            q(this, Ar);
            q(this, rt);
            q(this, Re);
            q(this, Yo);
            q(this, Vn);
            H(this, Vn, !1), H(this, Yo, t.defaultOptions), this.setOptions(t.options), this.observers = [], H(this, rt, t.cache), this.queryKey = t.queryKey, this.queryHash = t.queryHash, H(this, jr, vE(this.options)), this.state = t.state ? ? T(this, jr), this.scheduleGc()
        }
        get meta() {
            return this.options.meta
        }
        get promise() {
            var t;
            return (t = T(this, Re)) == null ? void 0 : t.promise
        }
        setOptions(t) {
            this.options = { ...T(this, Yo),
                ...t
            }, this.updateGcTime(this.options.gcTime)
        }
        optionalRemove() {
            !this.observers.length && this.state.fetchStatus === "idle" && T(this, rt).remove(this)
        }
        setData(t, n) {
            const r = aE(this.state.data, t, this.options);
            return Pe(this, ht, It).call(this, {
                data: r,
                type: "success",
                dataUpdatedAt: n == null ? void 0 : n.updatedAt,
                manual: n == null ? void 0 : n.manual
            }), r
        }
        setState(t, n) {
            Pe(this, ht, It).call(this, {
                type: "setState",
                state: t,
                setStateOptions: n
            })
        }
        cancel(t) {
            var r, o;
            const n = (r = T(this, Re)) == null ? void 0 : r.promise;
            return (o = T(this, Re)) == null || o.cancel(t), n ? n.then(pt).catch(pt) : Promise.resolve()
        }
        destroy() {
            super.destroy(), this.cancel({
                silent: !0
            })
        }
        reset() {
            this.destroy(), this.setState(T(this, jr))
        }
        isActive() {
            return this.observers.some(t => sE(t.options.enabled, this) !== !1)
        }
        isDisabled() {
            return this.getObserversCount() > 0 && !this.isActive()
        }
        isStale() {
            return this.state.isInvalidated ? !0 : this.getObserversCount() > 0 ? this.observers.some(t => t.getCurrentResult().isStale) : this.state.data === void 0
        }
        isStaleByTime(t = 0) {
            return this.state.isInvalidated || this.state.data === void 0 || !iE(this.state.dataUpdatedAt, t)
        }
        onFocus() {
            var n;
            const t = this.observers.find(r => r.shouldFetchOnWindowFocus());
            t == null || t.refetch({
                cancelRefetch: !1
            }), (n = T(this, Re)) == null || n.continue()
        }
        onOnline() {
            var n;
            const t = this.observers.find(r => r.shouldFetchOnReconnect());
            t == null || t.refetch({
                cancelRefetch: !1
            }), (n = T(this, Re)) == null || n.continue()
        }
        addObserver(t) {
            this.observers.includes(t) || (this.observers.push(t), this.clearGcTimeout(), T(this, rt).notify({
                type: "observerAdded",
                query: this,
                observer: t
            }))
        }
        removeObserver(t) {
            this.observers.includes(t) && (this.observers = this.observers.filter(n => n !== t), this.observers.length || (T(this, Re) && (T(this, Vn) ? T(this, Re).cancel({
                revert: !0
            }) : T(this, Re).cancelRetry()), this.scheduleGc()), T(this, rt).notify({
                type: "observerRemoved",
                query: this,
                observer: t
            }))
        }
        getObserversCount() {
            return this.observers.length
        }
        invalidate() {
            this.state.isInvalidated || Pe(this, ht, It).call(this, {
                type: "invalidate"
            })
        }
        fetch(t, n) {
            var a, u, d;
            if (this.state.fetchStatus !== "idle") {
                if (this.state.data !== void 0 && (n != null && n.cancelRefetch)) this.cancel({
                    silent: !0
                });
                else if (T(this, Re)) return T(this, Re).continueRetry(), T(this, Re).promise
            }
            if (t && this.setOptions(t), !this.options.queryFn) {
                const f = this.observers.find(c => c.options.queryFn);
                f && this.setOptions(f.options)
            }
            const r = new AbortController,
                o = f => {
                    Object.defineProperty(f, "signal", {
                        enumerable: !0,
                        get: () => (H(this, Vn, !0), r.signal)
                    })
                },
                i = () => {
                    const f = qm(this.options, n),
                        c = {
                            queryKey: this.queryKey,
                            meta: this.meta
                        };
                    return o(c), H(this, Vn, !1), this.options.persister ? this.options.persister(f, c, this) : f(c)
                },
                s = {
                    fetchOptions: n,
                    options: this.options,
                    queryKey: this.queryKey,
                    state: this.state,
                    fetchFn: i
                };
            o(s), (a = this.options.behavior) == null || a.onFetch(s, this), H(this, Ar, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((u = s.fetchOptions) == null ? void 0 : u.meta)) && Pe(this, ht, It).call(this, {
                type: "fetch",
                meta: (d = s.fetchOptions) == null ? void 0 : d.meta
            });
            const l = f => {
                var c, v, x, w;
                Ml(f) && f.silent || Pe(this, ht, It).call(this, {
                    type: "error",
                    error: f
                }), Ml(f) || ((v = (c = T(this, rt).config).onError) == null || v.call(c, f, this), (w = (x = T(this, rt).config).onSettled) == null || w.call(x, this.state.data, f, this)), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1
            };
            return H(this, Re, tg({
                initialPromise: n == null ? void 0 : n.initialPromise,
                fn: s.fetchFn,
                abort: r.abort.bind(r),
                onSuccess: f => {
                    var c, v, x, w;
                    if (f === void 0) {
                        l(new Error(`${this.queryHash} data is undefined`));
                        return
                    }
                    try {
                        this.setData(f)
                    } catch (E) {
                        l(E);
                        return
                    }(v = (c = T(this, rt).config).onSuccess) == null || v.call(c, f, this), (w = (x = T(this, rt).config).onSettled) == null || w.call(x, f, this.state.error, this), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1
                },
                onError: l,
                onFail: (f, c) => {
                    Pe(this, ht, It).call(this, {
                        type: "failed",
                        failureCount: f,
                        error: c
                    })
                },
                onPause: () => {
                    Pe(this, ht, It).call(this, {
                        type: "pause"
                    })
                },
                onContinue: () => {
                    Pe(this, ht, It).call(this, {
                        type: "continue"
                    })
                },
                retry: s.options.retry,
                retryDelay: s.options.retryDelay,
                networkMode: s.options.networkMode,
                canRun: () => !0
            })), T(this, Re).start()
        }
    }, jr = new WeakMap, Ar = new WeakMap, rt = new WeakMap, Re = new WeakMap, Yo = new WeakMap, Vn = new WeakMap, ht = new WeakSet, It = function(t) {
        const n = r => {
            switch (t.type) {
                case "failed":
                    return { ...r,
                        fetchFailureCount: t.failureCount,
                        fetchFailureReason: t.error
                    };
                case "pause":
                    return { ...r,
                        fetchStatus: "paused"
                    };
                case "continue":
                    return { ...r,
                        fetchStatus: "fetching"
                    };
                case "fetch":
                    return { ...r,
                        ...gE(r.data, this.options),
                        fetchMeta: t.meta ? ? null
                    };
                case "success":
                    return { ...r,
                        data: t.data,
                        dataUpdateCount: r.dataUpdateCount + 1,
                        dataUpdatedAt: t.dataUpdatedAt ? ? Date.now(),
                        error: null,
                        isInvalidated: !1,
                        status: "success",
                        ...!t.manual && {
                            fetchStatus: "idle",
                            fetchFailureCount: 0,
                            fetchFailureReason: null
                        }
                    };
                case "error":
                    const o = t.error;
                    return Ml(o) && o.revert && T(this, Ar) ? { ...T(this, Ar),
                        fetchStatus: "idle"
                    } : { ...r,
                        error: o,
                        errorUpdateCount: r.errorUpdateCount + 1,
                        errorUpdatedAt: Date.now(),
                        fetchFailureCount: r.fetchFailureCount + 1,
                        fetchFailureReason: o,
                        fetchStatus: "idle",
                        status: "error"
                    };
                case "invalidate":
                    return { ...r,
                        isInvalidated: !0
                    };
                case "setState":
                    return { ...r,
                        ...t.state
                    }
            }
        };
        this.state = n(this.state), Le.batch(() => {
            this.observers.forEach(r => {
                r.onQueryUpdate()
            }), T(this, rt).notify({
                query: this,
                type: "updated",
                action: t
            })
        })
    }, uf);

function gE(e, t) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: Zm(t.networkMode) ? "fetching" : "paused",
        ...e === void 0 && {
            error: null,
            status: "pending"
        }
    }
}

function vE(e) {
    const t = typeof e.initialData == "function" ? e.initialData() : e.initialData,
        n = t !== void 0,
        r = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: n ? r ? ? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: n ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var Nt, cf, yE = (cf = class extends Ks {
        constructor(t = {}) {
            super();
            q(this, Nt);
            this.config = t, H(this, Nt, new Map)
        }
        build(t, n, r) {
            const o = n.queryKey,
                i = n.queryHash ? ? tc(o, n);
            let s = this.get(i);
            return s || (s = new mE({
                cache: this,
                queryKey: o,
                queryHash: i,
                options: t.defaultQueryOptions(n),
                state: r,
                defaultOptions: t.getQueryDefaults(o)
            }), this.add(s)), s
        }
        add(t) {
            T(this, Nt).has(t.queryHash) || (T(this, Nt).set(t.queryHash, t), this.notify({
                type: "added",
                query: t
            }))
        }
        remove(t) {
            const n = T(this, Nt).get(t.queryHash);
            n && (t.destroy(), n === t && T(this, Nt).delete(t.queryHash), this.notify({
                type: "removed",
                query: t
            }))
        }
        clear() {
            Le.batch(() => {
                this.getAll().forEach(t => {
                    this.remove(t)
                })
            })
        }
        get(t) {
            return T(this, Nt).get(t)
        }
        getAll() {
            return [...T(this, Nt).values()]
        }
        find(t) {
            const n = {
                exact: !0,
                ...t
            };
            return this.getAll().find(r => Wd(n, r))
        }
        findAll(t = {}) {
            const n = this.getAll();
            return Object.keys(t).length > 0 ? n.filter(r => Wd(t, r)) : n
        }
        notify(t) {
            Le.batch(() => {
                this.listeners.forEach(n => {
                    n(t)
                })
            })
        }
        onFocus() {
            Le.batch(() => {
                this.getAll().forEach(t => {
                    t.onFocus()
                })
            })
        }
        onOnline() {
            Le.batch(() => {
                this.getAll().forEach(t => {
                    t.onOnline()
                })
            })
        }
    }, Nt = new WeakMap, cf),
    Tt, Ae, Hn, Rt, on, df, wE = (df = class extends ng {
        constructor(t) {
            super();
            q(this, Rt);
            q(this, Tt);
            q(this, Ae);
            q(this, Hn);
            this.mutationId = t.mutationId, H(this, Ae, t.mutationCache), H(this, Tt, []), this.state = t.state || xE(), this.setOptions(t.options), this.scheduleGc()
        }
        setOptions(t) {
            this.options = t, this.updateGcTime(this.options.gcTime)
        }
        get meta() {
            return this.options.meta
        }
        addObserver(t) {
            T(this, Tt).includes(t) || (T(this, Tt).push(t), this.clearGcTimeout(), T(this, Ae).notify({
                type: "observerAdded",
                mutation: this,
                observer: t
            }))
        }
        removeObserver(t) {
            H(this, Tt, T(this, Tt).filter(n => n !== t)), this.scheduleGc(), T(this, Ae).notify({
                type: "observerRemoved",
                mutation: this,
                observer: t
            })
        }
        optionalRemove() {
            T(this, Tt).length || (this.state.status === "pending" ? this.scheduleGc() : T(this, Ae).remove(this))
        }
        continue () {
            var t;
            return ((t = T(this, Hn)) == null ? void 0 : t.continue()) ? ? this.execute(this.state.variables)
        }
        async execute(t) {
            var o, i, s, l, a, u, d, f, c, v, x, w, E, h, p, m, S, C, P, k;
            H(this, Hn, tg({
                fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
                onFail: (N, M) => {
                    Pe(this, Rt, on).call(this, {
                        type: "failed",
                        failureCount: N,
                        error: M
                    })
                },
                onPause: () => {
                    Pe(this, Rt, on).call(this, {
                        type: "pause"
                    })
                },
                onContinue: () => {
                    Pe(this, Rt, on).call(this, {
                        type: "continue"
                    })
                },
                retry: this.options.retry ? ? 0,
                retryDelay: this.options.retryDelay,
                networkMode: this.options.networkMode,
                canRun: () => T(this, Ae).canRun(this)
            }));
            const n = this.state.status === "pending",
                r = !T(this, Hn).canStart();
            try {
                if (!n) {
                    Pe(this, Rt, on).call(this, {
                        type: "pending",
                        variables: t,
                        isPaused: r
                    }), await ((i = (o = T(this, Ae).config).onMutate) == null ? void 0 : i.call(o, t, this));
                    const M = await ((l = (s = this.options).onMutate) == null ? void 0 : l.call(s, t));
                    M !== this.state.context && Pe(this, Rt, on).call(this, {
                        type: "pending",
                        context: M,
                        variables: t,
                        isPaused: r
                    })
                }
                const N = await T(this, Hn).start();
                return await ((u = (a = T(this, Ae).config).onSuccess) == null ? void 0 : u.call(a, N, t, this.state.context, this)), await ((f = (d = this.options).onSuccess) == null ? void 0 : f.call(d, N, t, this.state.context)), await ((v = (c = T(this, Ae).config).onSettled) == null ? void 0 : v.call(c, N, null, this.state.variables, this.state.context, this)), await ((w = (x = this.options).onSettled) == null ? void 0 : w.call(x, N, null, t, this.state.context)), Pe(this, Rt, on).call(this, {
                    type: "success",
                    data: N
                }), N
            } catch (N) {
                try {
                    throw await ((h = (E = T(this, Ae).config).onError) == null ? void 0 : h.call(E, N, t, this.state.context, this)), await ((m = (p = this.options).onError) == null ? void 0 : m.call(p, N, t, this.state.context)), await ((C = (S = T(this, Ae).config).onSettled) == null ? void 0 : C.call(S, void 0, N, this.state.variables, this.state.context, this)), await ((k = (P = this.options).onSettled) == null ? void 0 : k.call(P, void 0, N, t, this.state.context)), N
                } finally {
                    Pe(this, Rt, on).call(this, {
                        type: "error",
                        error: N
                    })
                }
            } finally {
                T(this, Ae).runNext(this)
            }
        }
    }, Tt = new WeakMap, Ae = new WeakMap, Hn = new WeakMap, Rt = new WeakSet, on = function(t) {
        const n = r => {
            switch (t.type) {
                case "failed":
                    return { ...r,
                        failureCount: t.failureCount,
                        failureReason: t.error
                    };
                case "pause":
                    return { ...r,
                        isPaused: !0
                    };
                case "continue":
                    return { ...r,
                        isPaused: !1
                    };
                case "pending":
                    return { ...r,
                        context: t.context,
                        data: void 0,
                        failureCount: 0,
                        failureReason: null,
                        error: null,
                        isPaused: t.isPaused,
                        status: "pending",
                        variables: t.variables,
                        submittedAt: Date.now()
                    };
                case "success":
                    return { ...r,
                        data: t.data,
                        failureCount: 0,
                        failureReason: null,
                        error: null,
                        status: "success",
                        isPaused: !1
                    };
                case "error":
                    return { ...r,
                        data: void 0,
                        error: t.error,
                        failureCount: r.failureCount + 1,
                        failureReason: t.error,
                        isPaused: !1,
                        status: "error"
                    }
            }
        };
        this.state = n(this.state), Le.batch(() => {
            T(this, Tt).forEach(r => {
                r.onMutationUpdate(t)
            }), T(this, Ae).notify({
                mutation: this,
                type: "updated",
                action: t
            })
        })
    }, df);

function xE() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var Qe, Go, ff, EE = (ff = class extends Ks {
    constructor(t = {}) {
        super();
        q(this, Qe);
        q(this, Go);
        this.config = t, H(this, Qe, new Map), H(this, Go, Date.now())
    }
    build(t, n, r) {
        const o = new wE({
            mutationCache: this,
            mutationId: ++si(this, Go)._,
            options: t.defaultMutationOptions(n),
            state: r
        });
        return this.add(o), o
    }
    add(t) {
        const n = Ri(t),
            r = T(this, Qe).get(n) ? ? [];
        r.push(t), T(this, Qe).set(n, r), this.notify({
            type: "added",
            mutation: t
        })
    }
    remove(t) {
        var r;
        const n = Ri(t);
        if (T(this, Qe).has(n)) {
            const o = (r = T(this, Qe).get(n)) == null ? void 0 : r.filter(i => i !== t);
            o && (o.length === 0 ? T(this, Qe).delete(n) : T(this, Qe).set(n, o))
        }
        this.notify({
            type: "removed",
            mutation: t
        })
    }
    canRun(t) {
        var r;
        const n = (r = T(this, Qe).get(Ri(t))) == null ? void 0 : r.find(o => o.state.status === "pending");
        return !n || n === t
    }
    runNext(t) {
        var r;
        const n = (r = T(this, Qe).get(Ri(t))) == null ? void 0 : r.find(o => o !== t && o.state.isPaused);
        return (n == null ? void 0 : n.continue()) ? ? Promise.resolve()
    }
    clear() {
        Le.batch(() => {
            this.getAll().forEach(t => {
                this.remove(t)
            })
        })
    }
    getAll() {
        return [...T(this, Qe).values()].flat()
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => Qd(n, r))
    }
    findAll(t = {}) {
        return this.getAll().filter(n => Qd(t, n))
    }
    notify(t) {
        Le.batch(() => {
            this.listeners.forEach(n => {
                n(t)
            })
        })
    }
    resumePausedMutations() {
        const t = this.getAll().filter(n => n.state.isPaused);
        return Le.batch(() => Promise.all(t.map(n => n.continue().catch(pt))))
    }
}, Qe = new WeakMap, Go = new WeakMap, ff);

function Ri(e) {
    var t;
    return ((t = e.options.scope) == null ? void 0 : t.id) ? ? String(e.mutationId)
}

function Gd(e) {
    return {
        onFetch: (t, n) => {
            var d, f, c, v, x;
            const r = t.options,
                o = (c = (f = (d = t.fetchOptions) == null ? void 0 : d.meta) == null ? void 0 : f.fetchMore) == null ? void 0 : c.direction,
                i = ((v = t.state.data) == null ? void 0 : v.pages) || [],
                s = ((x = t.state.data) == null ? void 0 : x.pageParams) || [];
            let l = {
                    pages: [],
                    pageParams: []
                },
                a = 0;
            const u = async () => {
                let w = !1;
                const E = m => {
                        Object.defineProperty(m, "signal", {
                            enumerable: !0,
                            get: () => (t.signal.aborted ? w = !0 : t.signal.addEventListener("abort", () => {
                                w = !0
                            }), t.signal)
                        })
                    },
                    h = qm(t.options, t.fetchOptions),
                    p = async (m, S, C) => {
                        if (w) return Promise.reject();
                        if (S == null && m.pages.length) return Promise.resolve(m);
                        const P = {
                            queryKey: t.queryKey,
                            pageParam: S,
                            direction: C ? "backward" : "forward",
                            meta: t.options.meta
                        };
                        E(P);
                        const k = await h(P),
                            {
                                maxPages: N
                            } = t.options,
                            M = C ? cE : uE;
                        return {
                            pages: M(m.pages, k, N),
                            pageParams: M(m.pageParams, S, N)
                        }
                    };
                if (o && i.length) {
                    const m = o === "backward",
                        S = m ? SE : Xd,
                        C = {
                            pages: i,
                            pageParams: s
                        },
                        P = S(r, C);
                    l = await p(C, P, m)
                } else {
                    const m = e ? ? i.length;
                    do {
                        const S = a === 0 ? s[0] ? ? r.initialPageParam : Xd(r, l);
                        if (a > 0 && S == null) break;
                        l = await p(l, S), a++
                    } while (a < m)
                }
                return l
            };
            t.options.persister ? t.fetchFn = () => {
                var w, E;
                return (E = (w = t.options).persister) == null ? void 0 : E.call(w, u, {
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal
                }, n)
            } : t.fetchFn = u
        }
    }
}

function Xd(e, {
    pages: t,
    pageParams: n
}) {
    const r = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0
}

function SE(e, {
    pages: t,
    pageParams: n
}) {
    var r;
    return t.length > 0 ? (r = e.getPreviousPageParam) == null ? void 0 : r.call(e, t[0], t, n[0], n) : void 0
}
var de, fn, pn, _r, Lr, hn, Mr, Dr, pf, CE = (pf = class {
        constructor(e = {}) {
            q(this, de);
            q(this, fn);
            q(this, pn);
            q(this, _r);
            q(this, Lr);
            q(this, hn);
            q(this, Mr);
            q(this, Dr);
            H(this, de, e.queryCache || new yE), H(this, fn, e.mutationCache || new EE), H(this, pn, e.defaultOptions || {}), H(this, _r, new Map), H(this, Lr, new Map), H(this, hn, 0)
        }
        mount() {
            si(this, hn)._++, T(this, hn) === 1 && (H(this, Mr, Jm.subscribe(async e => {
                e && (await this.resumePausedMutations(), T(this, de).onFocus())
            })), H(this, Dr, ws.subscribe(async e => {
                e && (await this.resumePausedMutations(), T(this, de).onOnline())
            })))
        }
        unmount() {
            var e, t;
            si(this, hn)._--, T(this, hn) === 0 && ((e = T(this, Mr)) == null || e.call(this), H(this, Mr, void 0), (t = T(this, Dr)) == null || t.call(this), H(this, Dr, void 0))
        }
        isFetching(e) {
            return T(this, de).findAll({ ...e,
                fetchStatus: "fetching"
            }).length
        }
        isMutating(e) {
            return T(this, fn).findAll({ ...e,
                status: "pending"
            }).length
        }
        getQueryData(e) {
            var n;
            const t = this.defaultQueryOptions({
                queryKey: e
            });
            return (n = T(this, de).get(t.queryHash)) == null ? void 0 : n.state.data
        }
        ensureQueryData(e) {
            const t = this.getQueryData(e.queryKey);
            if (t === void 0) return this.fetchQuery(e); {
                const n = this.defaultQueryOptions(e),
                    r = T(this, de).build(this, n);
                return e.revalidateIfStale && r.isStaleByTime(Hd(n.staleTime, r)) && this.prefetchQuery(n), Promise.resolve(t)
            }
        }
        getQueriesData(e) {
            return T(this, de).findAll(e).map(({
                queryKey: t,
                state: n
            }) => {
                const r = n.data;
                return [t, r]
            })
        }
        setQueryData(e, t, n) {
            const r = this.defaultQueryOptions({
                    queryKey: e
                }),
                o = T(this, de).get(r.queryHash),
                i = o == null ? void 0 : o.state.data,
                s = rE(t, i);
            if (s !== void 0) return T(this, de).build(this, r).setData(s, { ...n,
                manual: !0
            })
        }
        setQueriesData(e, t, n) {
            return Le.batch(() => T(this, de).findAll(e).map(({
                queryKey: r
            }) => [r, this.setQueryData(r, t, n)]))
        }
        getQueryState(e) {
            var n;
            const t = this.defaultQueryOptions({
                queryKey: e
            });
            return (n = T(this, de).get(t.queryHash)) == null ? void 0 : n.state
        }
        removeQueries(e) {
            const t = T(this, de);
            Le.batch(() => {
                t.findAll(e).forEach(n => {
                    t.remove(n)
                })
            })
        }
        resetQueries(e, t) {
            const n = T(this, de),
                r = {
                    type: "active",
                    ...e
                };
            return Le.batch(() => (n.findAll(e).forEach(o => {
                o.reset()
            }), this.refetchQueries(r, t)))
        }
        cancelQueries(e = {}, t = {}) {
            const n = {
                    revert: !0,
                    ...t
                },
                r = Le.batch(() => T(this, de).findAll(e).map(o => o.cancel(n)));
            return Promise.all(r).then(pt).catch(pt)
        }
        invalidateQueries(e = {}, t = {}) {
            return Le.batch(() => {
                if (T(this, de).findAll(e).forEach(r => {
                        r.invalidate()
                    }), e.refetchType === "none") return Promise.resolve();
                const n = { ...e,
                    type: e.refetchType ? ? e.type ? ? "active"
                };
                return this.refetchQueries(n, t)
            })
        }
        refetchQueries(e = {}, t) {
            const n = { ...t,
                    cancelRefetch: (t == null ? void 0 : t.cancelRefetch) ? ? !0
                },
                r = Le.batch(() => T(this, de).findAll(e).filter(o => !o.isDisabled()).map(o => {
                    let i = o.fetch(void 0, n);
                    return n.throwOnError || (i = i.catch(pt)), o.state.fetchStatus === "paused" ? Promise.resolve() : i
                }));
            return Promise.all(r).then(pt)
        }
        fetchQuery(e) {
            const t = this.defaultQueryOptions(e);
            t.retry === void 0 && (t.retry = !1);
            const n = T(this, de).build(this, t);
            return n.isStaleByTime(Hd(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data)
        }
        prefetchQuery(e) {
            return this.fetchQuery(e).then(pt).catch(pt)
        }
        fetchInfiniteQuery(e) {
            return e.behavior = Gd(e.pages), this.fetchQuery(e)
        }
        prefetchInfiniteQuery(e) {
            return this.fetchInfiniteQuery(e).then(pt).catch(pt)
        }
        ensureInfiniteQueryData(e) {
            return e.behavior = Gd(e.pages), this.ensureQueryData(e)
        }
        resumePausedMutations() {
            return ws.isOnline() ? T(this, fn).resumePausedMutations() : Promise.resolve()
        }
        getQueryCache() {
            return T(this, de)
        }
        getMutationCache() {
            return T(this, fn)
        }
        getDefaultOptions() {
            return T(this, pn)
        }
        setDefaultOptions(e) {
            H(this, pn, e)
        }
        setQueryDefaults(e, t) {
            T(this, _r).set(Qo(e), {
                queryKey: e,
                defaultOptions: t
            })
        }
        getQueryDefaults(e) {
            const t = [...T(this, _r).values()];
            let n = {};
            return t.forEach(r => {
                Ko(e, r.queryKey) && (n = { ...n,
                    ...r.defaultOptions
                })
            }), n
        }
        setMutationDefaults(e, t) {
            T(this, Lr).set(Qo(e), {
                mutationKey: e,
                defaultOptions: t
            })
        }
        getMutationDefaults(e) {
            const t = [...T(this, Lr).values()];
            let n = {};
            return t.forEach(r => {
                Ko(e, r.mutationKey) && (n = { ...n,
                    ...r.defaultOptions
                })
            }), n
        }
        defaultQueryOptions(e) {
            if (e._defaulted) return e;
            const t = { ...T(this, pn).queries,
                ...this.getQueryDefaults(e.queryKey),
                ...e,
                _defaulted: !0
            };
            return t.queryHash || (t.queryHash = tc(t.queryKey, t)), t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"), t.throwOnError === void 0 && (t.throwOnError = !!t.suspense), !t.networkMode && t.persister && (t.networkMode = "offlineFirst"), t.enabled !== !0 && t.queryFn === Xm && (t.enabled = !1), t
        }
        defaultMutationOptions(e) {
            return e != null && e._defaulted ? e : { ...T(this, pn).mutations,
                ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
                ...e,
                _defaulted: !0
            }
        }
        clear() {
            T(this, de).clear(), T(this, fn).clear()
        }
    }, de = new WeakMap, fn = new WeakMap, pn = new WeakMap, _r = new WeakMap, Lr = new WeakMap, hn = new WeakMap, Mr = new WeakMap, Dr = new WeakMap, pf),
    kE = g.createContext(void 0),
    bE = ({
        client: e,
        children: t
    }) => (g.useEffect(() => (e.mount(), () => {
        e.unmount()
    }), [e]), y.jsx(kE.Provider, {
        value: e,
        children: t
    }));
/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function xs() {
    return xs = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, xs.apply(this, arguments)
}
var vn;
(function(e) {
    e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"
})(vn || (vn = {}));
const qd = "popstate";

function PE(e) {
    e === void 0 && (e = {});

    function t(r, o) {
        let {
            pathname: i,
            search: s,
            hash: l
        } = r.location;
        return Ba("", {
            pathname: i,
            search: s,
            hash: l
        }, o.state && o.state.usr || null, o.state && o.state.key || "default")
    }

    function n(r, o) {
        return typeof o == "string" ? o : og(o)
    }
    return TE(t, n, null, e)
}

function He(e, t) {
    if (e === !1 || e === null || typeof e > "u") throw new Error(t)
}

function rg(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}

function NE() {
    return Math.random().toString(36).substr(2, 8)
}

function Jd(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}

function Ba(e, t, n, r) {
    return n === void 0 && (n = null), xs({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? Gs(t) : t, {
        state: n,
        key: t && t.key || r || NE()
    })
}

function og(e) {
    let {
        pathname: t = "/",
        search: n = "",
        hash: r = ""
    } = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t
}

function Gs(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e)
    }
    return t
}

function TE(e, t, n, r) {
    r === void 0 && (r = {});
    let {
        window: o = document.defaultView,
        v5Compat: i = !1
    } = r, s = o.history, l = vn.Pop, a = null, u = d();
    u == null && (u = 0, s.replaceState(xs({}, s.state, {
        idx: u
    }), ""));

    function d() {
        return (s.state || {
            idx: null
        }).idx
    }

    function f() {
        l = vn.Pop;
        let E = d(),
            h = E == null ? null : E - u;
        u = E, a && a({
            action: l,
            location: w.location,
            delta: h
        })
    }

    function c(E, h) {
        l = vn.Push;
        let p = Ba(w.location, E, h);
        u = d() + 1;
        let m = Jd(p, u),
            S = w.createHref(p);
        try {
            s.pushState(m, "", S)
        } catch (C) {
            if (C instanceof DOMException && C.name === "DataCloneError") throw C;
            o.location.assign(S)
        }
        i && a && a({
            action: l,
            location: w.location,
            delta: 1
        })
    }

    function v(E, h) {
        l = vn.Replace;
        let p = Ba(w.location, E, h);
        u = d();
        let m = Jd(p, u),
            S = w.createHref(p);
        s.replaceState(m, "", S), i && a && a({
            action: l,
            location: w.location,
            delta: 0
        })
    }

    function x(E) {
        let h = o.location.origin !== "null" ? o.location.origin : o.location.href,
            p = typeof E == "string" ? E : og(E);
        return p = p.replace(/ $/, "%20"), He(h, "No window.location.(origin|href) available to create URL for href: " + p), new URL(p, h)
    }
    let w = {
        get action() {
            return l
        },
        get location() {
            return e(o, s)
        },
        listen(E) {
            if (a) throw new Error("A history only accepts one active listener");
            return o.addEventListener(qd, f), a = E, () => {
                o.removeEventListener(qd, f), a = null
            }
        },
        createHref(E) {
            return t(o, E)
        },
        createURL: x,
        encodeLocation(E) {
            let h = x(E);
            return {
                pathname: h.pathname,
                search: h.search,
                hash: h.hash
            }
        },
        push: c,
        replace: v,
        go(E) {
            return s.go(E)
        }
    };
    return w
}
var Zd;
(function(e) {
    e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"
})(Zd || (Zd = {}));

function RE(e, t, n) {
    return n === void 0 && (n = "/"), OE(e, t, n, !1)
}

function OE(e, t, n, r) {
    let o = typeof t == "string" ? Gs(t) : t,
        i = lg(o.pathname || "/", n);
    if (i == null) return null;
    let s = ig(e);
    jE(s);
    let l = null;
    for (let a = 0; l == null && a < s.length; ++a) {
        let u = BE(i);
        l = $E(s[a], u, r)
    }
    return l
}

function ig(e, t, n, r) {
    t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
    let o = (i, s, l) => {
        let a = {
            relativePath: l === void 0 ? i.path || "" : l,
            caseSensitive: i.caseSensitive === !0,
            childrenIndex: s,
            route: i
        };
        a.relativePath.startsWith("/") && (He(a.relativePath.startsWith(r), 'Absolute route path "' + a.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), a.relativePath = a.relativePath.slice(r.length));
        let u = Nr([r, a.relativePath]),
            d = n.concat(a);
        i.children && i.children.length > 0 && (He(i.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')), ig(i.children, t, d, u)), !(i.path == null && !i.index) && t.push({
            path: u,
            score: FE(u, i.index),
            routesMeta: d
        })
    };
    return e.forEach((i, s) => {
        var l;
        if (i.path === "" || !((l = i.path) != null && l.includes("?"))) o(i, s);
        else
            for (let a of sg(i.path)) o(i, s, a)
    }), t
}

function sg(e) {
    let t = e.split("/");
    if (t.length === 0) return [];
    let [n, ...r] = t, o = n.endsWith("?"), i = n.replace(/\?$/, "");
    if (r.length === 0) return o ? [i, ""] : [i];
    let s = sg(r.join("/")),
        l = [];
    return l.push(...s.map(a => a === "" ? i : [i, a].join("/"))), o && l.push(...s), l.map(a => e.startsWith("/") && a === "" ? "/" : a)
}

function jE(e) {
    e.sort((t, n) => t.score !== n.score ? n.score - t.score : zE(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const AE = /^:[\w-]+$/,
    _E = 3,
    LE = 2,
    ME = 1,
    DE = 10,
    IE = -2,
    ef = e => e === "*";

function FE(e, t) {
    let n = e.split("/"),
        r = n.length;
    return n.some(ef) && (r += IE), t && (r += LE), n.filter(o => !ef(o)).reduce((o, i) => o + (AE.test(i) ? _E : i === "" ? ME : DE), r)
}

function zE(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o]) ? e[e.length - 1] - t[t.length - 1] : 0
}

function $E(e, t, n) {
    let {
        routesMeta: r
    } = e, o = {}, i = "/", s = [];
    for (let l = 0; l < r.length; ++l) {
        let a = r[l],
            u = l === r.length - 1,
            d = i === "/" ? t : t.slice(i.length) || "/",
            f = tf({
                path: a.relativePath,
                caseSensitive: a.caseSensitive,
                end: u
            }, d),
            c = a.route;
        if (!f && u && n && !r[r.length - 1].route.index && (f = tf({
                path: a.relativePath,
                caseSensitive: a.caseSensitive,
                end: !1
            }, d)), !f) return null;
        Object.assign(o, f.params), s.push({
            params: o,
            pathname: Nr([i, f.pathname]),
            pathnameBase: VE(Nr([i, f.pathnameBase])),
            route: c
        }), f.pathnameBase !== "/" && (i = Nr([i, f.pathnameBase]))
    }
    return s
}

function tf(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let [n, r] = UE(e.path, e.caseSensitive, e.end), o = t.match(n);
    if (!o) return null;
    let i = o[0],
        s = i.replace(/(.)\/+$/, "$1"),
        l = o.slice(1);
    return {
        params: r.reduce((u, d, f) => {
            let {
                paramName: c,
                isOptional: v
            } = d;
            if (c === "*") {
                let w = l[f] || "";
                s = i.slice(0, i.length - w.length).replace(/(.)\/+$/, "$1")
            }
            const x = l[f];
            return v && !x ? u[c] = void 0 : u[c] = (x || "").replace(/%2F/g, "/"), u
        }, {}),
        pathname: i,
        pathnameBase: s,
        pattern: e
    }
}

function UE(e, t, n) {
    t === void 0 && (t = !1), n === void 0 && (n = !0), rg(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = [],
        o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (s, l, a) => (r.push({
            paramName: l,
            isOptional: a != null
        }), a ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }), o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? o += "\\/*$" : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"), [new RegExp(o, t ? void 0 : "i"), r]
}

function BE(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return rg(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e
    }
}

function lg(e, t) {
    if (t === "/") return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length,
        r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}
const Nr = e => e.join("/").replace(/\/\/+/g, "/"),
    VE = e => e.replace(/\/+$/, "").replace(/^\/*/, "/");

function HE(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e
}
const ag = ["post", "put", "patch", "delete"];
new Set(ag);
const WE = ["get", ...ag];
new Set(WE);
/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Es() {
    return Es = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, Es.apply(this, arguments)
}
const QE = g.createContext(null),
    KE = g.createContext(null),
    ug = g.createContext(null),
    Xs = g.createContext(null),
    qs = g.createContext({
        outlet: null,
        matches: [],
        isDataRoute: !1
    }),
    cg = g.createContext(null);

function nc() {
    return g.useContext(Xs) != null
}

function dg() {
    return nc() || He(!1), g.useContext(Xs).location
}

function YE(e, t) {
    return GE(e, t)
}

function GE(e, t, n, r) {
    nc() || He(!1);
    let {
        navigator: o
    } = g.useContext(ug), {
        matches: i
    } = g.useContext(qs), s = i[i.length - 1], l = s ? s.params : {};
    s && s.pathname;
    let a = s ? s.pathnameBase : "/";
    s && s.route;
    let u = dg(),
        d;
    if (t) {
        var f;
        let E = typeof t == "string" ? Gs(t) : t;
        a === "/" || (f = E.pathname) != null && f.startsWith(a) || He(!1), d = E
    } else d = u;
    let c = d.pathname || "/",
        v = c;
    if (a !== "/") {
        let E = a.replace(/^\//, "").split("/");
        v = "/" + c.replace(/^\//, "").split("/").slice(E.length).join("/")
    }
    let x = RE(e, {
            pathname: v
        }),
        w = eS(x && x.map(E => Object.assign({}, E, {
            params: Object.assign({}, l, E.params),
            pathname: Nr([a, o.encodeLocation ? o.encodeLocation(E.pathname).pathname : E.pathname]),
            pathnameBase: E.pathnameBase === "/" ? a : Nr([a, o.encodeLocation ? o.encodeLocation(E.pathnameBase).pathname : E.pathnameBase])
        })), i, n, r);
    return t && w ? g.createElement(Xs.Provider, {
        value: {
            location: Es({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, d),
            navigationType: vn.Pop
        }
    }, w) : w
}

function XE() {
    let e = oS(),
        t = HE(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
        n = e instanceof Error ? e.stack : null,
        o = {
            padding: "0.5rem",
            backgroundColor: "rgba(200,200,200, 0.5)"
        };
    return g.createElement(g.Fragment, null, g.createElement("h2", null, "Unexpected Application Error!"), g.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? g.createElement("pre", {
        style: o
    }, n) : null, null)
}
const qE = g.createElement(XE, null);
class JE extends g.Component {
    constructor(t) {
        super(t), this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? g.createElement(qs.Provider, {
            value: this.props.routeContext
        }, g.createElement(cg.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}

function ZE(e) {
    let {
        routeContext: t,
        match: n,
        children: r
    } = e, o = g.useContext(QE);
    return o && o.static && o.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = n.route.id), g.createElement(qs.Provider, {
        value: t
    }, r)
}

function eS(e, t, n, r) {
    var o;
    if (t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null) {
        var i;
        if (!n) return null;
        if (n.errors) e = n.matches;
        else if ((i = r) != null && i.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0) e = n.matches;
        else return null
    }
    let s = e,
        l = (o = n) == null ? void 0 : o.errors;
    if (l != null) {
        let d = s.findIndex(f => f.route.id && (l == null ? void 0 : l[f.route.id]) !== void 0);
        d >= 0 || He(!1), s = s.slice(0, Math.min(s.length, d + 1))
    }
    let a = !1,
        u = -1;
    if (n && r && r.v7_partialHydration)
        for (let d = 0; d < s.length; d++) {
            let f = s[d];
            if ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = d), f.route.id) {
                let {
                    loaderData: c,
                    errors: v
                } = n, x = f.route.loader && c[f.route.id] === void 0 && (!v || v[f.route.id] === void 0);
                if (f.route.lazy || x) {
                    a = !0, u >= 0 ? s = s.slice(0, u + 1) : s = [s[0]];
                    break
                }
            }
        }
    return s.reduceRight((d, f, c) => {
        let v, x = !1,
            w = null,
            E = null;
        n && (v = l && f.route.id ? l[f.route.id] : void 0, w = f.route.errorElement || qE, a && (u < 0 && c === 0 ? (x = !0, E = null) : u === c && (x = !0, E = f.route.hydrateFallbackElement || null)));
        let h = t.concat(s.slice(0, c + 1)),
            p = () => {
                let m;
                return v ? m = w : x ? m = E : f.route.Component ? m = g.createElement(f.route.Component, null) : f.route.element ? m = f.route.element : m = d, g.createElement(ZE, {
                    match: f,
                    routeContext: {
                        outlet: d,
                        matches: h,
                        isDataRoute: n != null
                    },
                    children: m
                })
            };
        return n && (f.route.ErrorBoundary || f.route.errorElement || c === 0) ? g.createElement(JE, {
            location: n.location,
            revalidation: n.revalidation,
            component: w,
            error: v,
            children: p(),
            routeContext: {
                outlet: null,
                matches: h,
                isDataRoute: !0
            }
        }) : p()
    }, null)
}
var Va = function(e) {
    return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e
}(Va || {});

function tS(e) {
    let t = g.useContext(KE);
    return t || He(!1), t
}

function nS(e) {
    let t = g.useContext(qs);
    return t || He(!1), t
}

function rS(e) {
    let t = nS(),
        n = t.matches[t.matches.length - 1];
    return n.route.id || He(!1), n.route.id
}

function oS() {
    var e;
    let t = g.useContext(cg),
        n = tS(Va.UseRouteError),
        r = rS(Va.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}

function Ha(e) {
    He(!1)
}

function iS(e) {
    let {
        basename: t = "/",
        children: n = null,
        location: r,
        navigationType: o = vn.Pop,
        navigator: i,
        static: s = !1,
        future: l
    } = e;
    nc() && He(!1);
    let a = t.replace(/^\/*/, "/"),
        u = g.useMemo(() => ({
            basename: a,
            navigator: i,
            static: s,
            future: Es({
                v7_relativeSplatPath: !1
            }, l)
        }), [a, l, i, s]);
    typeof r == "string" && (r = Gs(r));
    let {
        pathname: d = "/",
        search: f = "",
        hash: c = "",
        state: v = null,
        key: x = "default"
    } = r, w = g.useMemo(() => {
        let E = lg(d, a);
        return E == null ? null : {
            location: {
                pathname: E,
                search: f,
                hash: c,
                state: v,
                key: x
            },
            navigationType: o
        }
    }, [a, d, f, c, v, x, o]);
    return w == null ? null : g.createElement(ug.Provider, {
        value: u
    }, g.createElement(Xs.Provider, {
        children: n,
        value: w
    }))
}

function sS(e) {
    let {
        children: t,
        location: n
    } = e;
    return YE(Wa(t), n)
}
new Promise(() => {});

function Wa(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return g.Children.forEach(e, (r, o) => {
        if (!g.isValidElement(r)) return;
        let i = [...t, o];
        if (r.type === g.Fragment) {
            n.push.apply(n, Wa(r.props.children, i));
            return
        }
        r.type !== Ha && He(!1), !r.props.index || !r.props.children || He(!1);
        let s = {
            id: r.props.id || i.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (s.children = Wa(r.props.children, i)), n.push(s)
    }), n
}
/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const lS = "6";
try {
    window.__reactRouterVersion = lS
} catch {}
const aS = "startTransition",
    nf = Jg[aS];

function uS(e) {
    let {
        basename: t,
        children: n,
        future: r,
        window: o
    } = e, i = g.useRef();
    i.current == null && (i.current = PE({
        window: o,
        v5Compat: !0
    }));
    let s = i.current,
        [l, a] = g.useState({
            action: s.action,
            location: s.location
        }),
        {
            v7_startTransition: u
        } = r || {},
        d = g.useCallback(f => {
            u && nf ? nf(() => a(f)) : a(f)
        }, [a, u]);
    return g.useLayoutEffect(() => s.listen(d), [s, d]), g.createElement(iS, {
        basename: t,
        children: n,
        location: l.location,
        navigationType: l.action,
        navigator: s,
        future: r
    })
}
var rf;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState"
})(rf || (rf = {}));
var of ;
(function(e) {
    e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"
})( of || ( of = {}));
const cS = {
        theme: "system",
        setTheme: () => null
    },
    dS = g.createContext(cS);

function fS({
    children: e,
    defaultTheme: t = "dark",
    storageKey: n = "theme",
    ...r
}) {
    const [o, i] = g.useState(() => localStorage.getItem(n) || t);
    g.useEffect(() => {
        const l = window.document.documentElement;
        if (l.classList.remove("light", "dark"), o === "system") {
            const a = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
            l.classList.add(a);
            return
        }
        l.classList.add(o)
    }, [o]);
    const s = {
        theme: o,
        setTheme: l => {
            localStorage.setItem(n, l), i(l)
        }
    };
    return y.jsx(dS.Provider, { ...r,
        value: s,
        children: e
    })
}
const pS = ({
        active: e,
        setActive: t
    }) => {
        const [n, r] = g.useState(!1);
        g.useEffect(() => {
            const s = () => {
                r(window.scrollY > 50)
            };
            return window.addEventListener("scroll", s), () => window.removeEventListener("scroll", s)
        }, []);
        const o = [{
                name: "Home",
                id: "home"
            }, {
                name: "About",
                id: "about"
            }, {
                name: "Projects",
                id: "projects"
            }, {
                name: "Skills",
                id: "skills"
            }, {
                name: "Contact",
                id: "contact"
            }],
            i = s => {
                t(s);
                const l = document.getElementById(s);
                l && l.scrollIntoView({
                    behavior: "smooth"
                })
            };
        return y.jsx("header", {
            className: me("fixed top-0 left-0 w-full z-50 transition-all duration-300", n ? "bg-background/90 backdrop-blur-md py-3 shadow-sm" : "py-5"),
            children: y.jsxs("div", {
                className: "container flex items-center justify-between",
                children: [y.jsx("a", {
                    href: "#home",
                    className: "font-bold text-xl",
                    onClick: s => {
                        s.preventDefault(), i("home")
                    },
                    children: "Nibir Nandi Dibbo"
                }), y.jsx("nav", {
                    className: "hidden md:flex space-x-8",
                    children: o.map(s => y.jsx("a", {
                        href: `#${s.id}`,
                        onClick: l => {
                            l.preventDefault(), i(s.id)
                        },
                        className: me("text-base hover:text-primary transition-colors", e === s.id ? "font-bold" : "font-normal"),
                        children: s.name
                    }, s.id))
                }), y.jsx("div", {
                    className: "md:hidden",
                    children: y.jsxs("button", {
                        className: "p-2",
                        children: [y.jsx("span", {
                            className: "block w-6 h-0.5 bg-foreground mb-1.5"
                        }), y.jsx("span", {
                            className: "block w-6 h-0.5 bg-foreground mb-1.5"
                        }), y.jsx("span", {
                            className: "block w-6 h-0.5 bg-foreground"
                        })]
                    })
                })]
            })
        })
    },
    hS = im("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground hover:bg-primary/90",
                destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline"
            },
            size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
                icon: "h-10 w-10"
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default"
        }
    }),
    Kn = g.forwardRef(({
        className: e,
        variant: t,
        size: n,
        asChild: r = !1,
        ...o
    }, i) => {
        const s = r ? Vo : "button";
        return y.jsx(s, {
            className: me(hS({
                variant: t,
                size: n,
                className: e
            })),
            ref: i,
            ...o
        })
    });
Kn.displayName = "Button";
const mS = () => {
    const e = () => {
        const t = document.getElementById("projects");
        t && t.scrollIntoView({
            behavior: "smooth"
        })
    };
    return y.jsx("section", {
        id: "home",
        className: "min-h-screen flex items-center justify-center pt-16",
        children: y.jsxs("div", {
            className: "container max-w-4xl mx-auto px-4 text-center",
            children: [y.jsx("h1", {
                className: "text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6",
                children: "Hi, I'm Nibir Nandi Dibbo"
            }), y.jsx("p", {
                className: "text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto",
                children: "Software Developer focusing on creating elegant and efficient solutions with Java and related technologies"
            }), y.jsxs("div", {
                className: "flex flex-col sm:flex-row gap-4 justify-center",
                children: [y.jsxs(Kn, {
                    size: "lg",
                    className: "rounded-full",
                    onClick: e,
                    children: ["View My Work", y.jsx(Wu, {
                        className: "ml-2 w-5 h-5"
                    })]
                }), y.jsx(Kn, {
                    size: "lg",
                    variant: "outline",
                    className: "rounded-full",
                    asChild: !0,
                    children: y.jsx("a", {
                        href: "#contact",
                        children: "Contact Me"
                    })
                })]
            })]
        })
    })
};
var rc = "Avatar",
    [gS, DS] = Fs(rc),
    [vS, fg] = gS(rc),
    pg = g.forwardRef((e, t) => {
        const {
            __scopeAvatar: n,
            ...r
        } = e, [o, i] = g.useState("idle");
        return y.jsx(vS, {
            scope: n,
            imageLoadingStatus: o,
            onImageLoadingStatusChange: i,
            children: y.jsx(we.span, { ...r,
                ref: t
            })
        })
    });
pg.displayName = rc;
var hg = "AvatarImage",
    mg = g.forwardRef((e, t) => {
        const {
            __scopeAvatar: n,
            src: r,
            onLoadingStatusChange: o = () => {},
            ...i
        } = e, s = fg(hg, n), l = yS(r), a = et(u => {
            o(u), s.onImageLoadingStatusChange(u)
        });
        return xt(() => {
            l !== "idle" && a(l)
        }, [l, a]), l === "loaded" ? y.jsx(we.img, { ...i,
            ref: t,
            src: r
        }) : null
    });
mg.displayName = hg;
var gg = "AvatarFallback",
    vg = g.forwardRef((e, t) => {
        const {
            __scopeAvatar: n,
            delayMs: r,
            ...o
        } = e, i = fg(gg, n), [s, l] = g.useState(r === void 0);
        return g.useEffect(() => {
            if (r !== void 0) {
                const a = window.setTimeout(() => l(!0), r);
                return () => window.clearTimeout(a)
            }
        }, [r]), s && i.imageLoadingStatus !== "loaded" ? y.jsx(we.span, { ...o,
            ref: t
        }) : null
    });
vg.displayName = gg;

function yS(e) {
    const [t, n] = g.useState("idle");
    return xt(() => {
        if (!e) {
            n("error");
            return
        }
        let r = !0;
        const o = new window.Image,
            i = s => () => {
                r && n(s)
            };
        return n("loading"), o.onload = i("loaded"), o.onerror = i("error"), o.src = e, () => {
            r = !1
        }
    }, [e]), t
}
var yg = pg,
    wg = mg,
    xg = vg;
const Eg = g.forwardRef(({
    className: e,
    ...t
}, n) => y.jsx(yg, {
    ref: n,
    className: me("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", e),
    ...t
}));
Eg.displayName = yg.displayName;
const Sg = g.forwardRef(({
    className: e,
    ...t
}, n) => y.jsx(wg, {
    ref: n,
    className: me("aspect-square h-full w-full", e),
    ...t
}));
Sg.displayName = wg.displayName;
const wS = g.forwardRef(({
    className: e,
    ...t
}, n) => y.jsx(xg, {
    ref: n,
    className: me("flex h-full w-full items-center justify-center rounded-full bg-muted", e),
    ...t
}));
wS.displayName = xg.displayName;
const xS = () => y.jsx("section", {
        id: "about",
        className: "py-20 bg-secondary",
        children: y.jsxs("div", {
            className: "container max-w-4xl mx-auto px-4",
            children: [y.jsx("h2", {
                className: "text-3xl font-bold mb-8 text-center",
                children: "About Me"
            }), y.jsxs("div", {
                className: "grid md:grid-cols-[2fr_3fr] gap-8 items-center",
                children: [y.jsx("div", {
                    className: "aspect-square w-full max-w-sm mx-auto rounded-lg overflow-hidden",
                    children: y.jsx(Eg, {
                        className: "w-full h-full rounded-lg",
                        children: y.jsx(Sg, {
                            src: "/lovable-uploads/2ee46ece-09b6-494e-8d6e-7e3d21cf1ff8.png",
                            alt: "Nibir Nandi Dibbo",
                            className: "object-cover w-full h-full"
                        })
                    })
                }), y.jsxs("div", {
                    children: [y.jsx("p", {
                        className: "text-lg mb-4",
                        children: "I'm a passionate Software Developer with a strong foundation in Java, object-oriented programming, and system-level programming. I've built a variety of technical projects—from recreating Amazon's homepage using pure HTML and CSS, to developing a Java client-server chat application over TCP sockets, and managing Linux users with a secure Bash script."
                    }), y.jsx("p", {
                        className: "text-lg mb-4",
                        children: "I also designed a relational college database system using SQL, showcasing skills in schema design, complex queries, and view optimization. My hobby lies in solving algorithmic challenges—often spending time on LeetCode to strengthen my grasp of data structures and algorithms."
                    }), y.jsx("p", {
                        className: "text-lg mb-4",
                        children: "Eager to keep growing, I actively explore new technologies to deepen my skills and stay aligned with industry best practices."
                    }), y.jsxs("div", {
                        className: "flex flex-wrap gap-2 mt-6",
                        children: [y.jsx("span", {
                            className: "px-3 py-1 bg-background rounded-full text-sm",
                            children: "Java"
                        }), y.jsx("span", {
                            className: "px-3 py-1 bg-background rounded-full text-sm",
                            children: "OOP"
                        }), y.jsx("span", {
                            className: "px-3 py-1 bg-background rounded-full text-sm",
                            children: "Linux"
                        }), y.jsx("span", {
                            className: "px-3 py-1 bg-background rounded-full text-sm",
                            children: "MySQL"
                        }), y.jsx("span", {
                            className: "px-3 py-1 bg-background rounded-full text-sm",
                            children: "C++"
                        })]
                    })]
                })]
            })]
        })
    }),
    Cg = g.forwardRef(({
        className: e,
        ...t
    }, n) => y.jsx("div", {
        ref: n,
        className: me("rounded-lg border bg-card text-card-foreground shadow-sm", e),
        ...t
    }));
Cg.displayName = "Card";
const kg = g.forwardRef(({
    className: e,
    ...t
}, n) => y.jsx("div", {
    ref: n,
    className: me("flex flex-col space-y-1.5 p-6", e),
    ...t
}));
kg.displayName = "CardHeader";
const bg = g.forwardRef(({
    className: e,
    ...t
}, n) => y.jsx("h3", {
    ref: n,
    className: me("text-2xl font-semibold leading-none tracking-tight", e),
    ...t
}));
bg.displayName = "CardTitle";
const ES = g.forwardRef(({
    className: e,
    ...t
}, n) => y.jsx("p", {
    ref: n,
    className: me("text-sm text-muted-foreground", e),
    ...t
}));
ES.displayName = "CardDescription";
const Pg = g.forwardRef(({
    className: e,
    ...t
}, n) => y.jsx("div", {
    ref: n,
    className: me("p-6 pt-0", e),
    ...t
}));
Pg.displayName = "CardContent";
const Ng = g.forwardRef(({
    className: e,
    ...t
}, n) => y.jsx("div", {
    ref: n,
    className: me("flex items-center p-6 pt-0", e),
    ...t
}));
Ng.displayName = "CardFooter";
const SS = () => {
        const [e, t] = g.useState([]), [n, r] = g.useState(!0), [o, i] = g.useState(null);
        return g.useEffect(() => {
            (async () => {
                try {
                    r(!0);
                    const l = await fetch("https://api.github.com/users/xnibirx/repos");
                    if (!l.ok) throw new Error("Failed to fetch repositories");
                    const f = (await l.json()).filter(c => c.name !== "xnibirx.github.io").sort((c, v) => new Date(v.updated_at).getTime() - new Date(c.updated_at).getTime()).map(c => c.name.toLowerCase().includes("chat") || c.name.toLowerCase().includes("server") ? { ...c,
                        description: 'A simple Java-based client-server messaging system demonstrating bidirectional communication over TCP sockets. This console application enables both client and server to exchange messages until either side sends "finish" to gracefully terminate the session.'
                    } : c);
                    t(f.slice(0, 6)), r(!1)
                } catch (l) {
                    console.error("Error fetching repositories:", l), i("Failed to load projects. Please try again later."), r(!1)
                }
            })()
        }, []), y.jsx("section", {
            id: "projects",
            className: "py-20",
            children: y.jsxs("div", {
                className: "container max-w-6xl mx-auto px-4",
                children: [y.jsx("h2", {
                    className: "text-3xl font-bold mb-2 text-center",
                    children: "Projects"
                }), y.jsx("p", {
                    className: "text-muted-foreground text-center mb-12",
                    children: "Some of my recent work from GitHub"
                }), n && y.jsx("div", {
                    className: "flex justify-center",
                    children: y.jsx("div", {
                        className: "animate-pulse text-center",
                        children: y.jsx("p", {
                            children: "Loading projects..."
                        })
                    })
                }), o && y.jsx("div", {
                    className: "text-center text-destructive",
                    children: y.jsx("p", {
                        children: o
                    })
                }), y.jsx("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                    children: e.map(s => y.jsxs(Cg, {
                        className: "flex flex-col h-full",
                        children: [y.jsx(kg, {
                            children: y.jsx(bg, {
                                className: "text-xl",
                                children: s.name
                            })
                        }), y.jsxs(Pg, {
                            className: "flex-grow",
                            children: [y.jsx("p", {
                                className: "text-muted-foreground mb-4",
                                children: s.description || "No description provided"
                            }), s.topics && s.topics.length > 0 && y.jsx("div", {
                                className: "flex flex-wrap gap-2 mt-4",
                                children: s.topics.slice(0, 3).map(l => y.jsx("span", {
                                    className: "px-2 py-1 bg-secondary rounded-full text-xs",
                                    children: l
                                }, l))
                            }), s.language && y.jsxs("div", {
                                className: "mt-4 text-sm",
                                children: [y.jsx("span", {
                                    className: "font-medium",
                                    children: "Main language:"
                                }), " ", s.language]
                            })]
                        }), y.jsxs(Ng, {
                            className: "flex gap-3",
                            children: [y.jsx(Kn, {
                                variant: "outline",
                                size: "sm",
                                asChild: !0,
                                children: y.jsxs("a", {
                                    href: s.html_url,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: [y.jsx(lm, {
                                        className: "mr-2 h-4 w-4"
                                    }), "View Code"]
                                })
                            }), s.homepage && y.jsx(Kn, {
                                size: "sm",
                                asChild: !0,
                                children: y.jsxs("a", {
                                    href: s.homepage,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: [y.jsx(bo, {
                                        className: "mr-2 h-4 w-4"
                                    }), "Live Demo"]
                                })
                            })]
                        })]
                    }, s.id))
                }), y.jsx("div", {
                    className: "text-center mt-12",
                    children: y.jsx(Kn, {
                        variant: "outline",
                        asChild: !0,
                        children: y.jsxs("a", {
                            href: "https://github.com/xnibirx?tab=repositories",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "inline-flex items-center",
                            children: ["View All Projects", y.jsx(Wu, {
                                className: "ml-2 h-4 w-4"
                            })]
                        })
                    })
                })]
            })
        })
    },
    CS = () => {
        const e = [{
            name: "Java",
            icon: y.jsx(bo, {
                className: "h-8 w-8 mb-4"
            }),
            description: "Core Java, JavaFX, Java EE"
        }, {
            name: "OOP",
            icon: y.jsx(iw, {
                className: "h-8 w-8 mb-4"
            }),
            description: "Object-oriented programming principles and design patterns"
        }, {
            name: "Shell Scripting",
            icon: y.jsx(Td, {
                className: "h-8 w-8 mb-4"
            }),
            description: "Bash, Shell automation, Command line tools"
        }, {
            name: "Socket Programming",
            icon: y.jsx(Nd, {
                className: "h-8 w-8 mb-4"
            }),
            description: "Network sockets, Client-server architecture, Protocol design"
        }, {
            name: "Linux",
            icon: y.jsx(Td, {
                className: "h-8 w-8 mb-4"
            }),
            description: "System administration, Package management, Shell utilities"
        }, {
            name: "Web Development",
            icon: y.jsx(bo, {
                className: "h-8 w-8 mb-4"
            }),
            description: "HTML, CSS, JavaScript, React, Frontend frameworks"
        }, {
            name: "DSA",
            icon: y.jsx(bo, {
                className: "h-8 w-8 mb-4"
            }),
            description: "Data structures, Algorithms, Problem solving"
        }, {
            name: "Network Protocol",
            icon: y.jsx(Nd, {
                className: "h-8 w-8 mb-4"
            }),
            description: "TCP/IP, HTTP, WebSockets, Protocol design"
        }, {
            name: "MySQL",
            icon: y.jsx(bd, {
                className: "h-8 w-8 mb-4"
            }),
            description: "Database management, SQL, Stored procedures"
        }, {
            name: "PostgreSQL",
            icon: y.jsx(bd, {
                className: "h-8 w-8 mb-4"
            }),
            description: "Advanced database management, JSON functions, Indexing"
        }, {
            name: "C++",
            icon: y.jsx(Pd, {
                className: "h-8 w-8 mb-4"
            }),
            description: "Object-oriented programming, STL, Memory management"
        }, {
            name: "C",
            icon: y.jsx(Pd, {
                className: "h-8 w-8 mb-4"
            }),
            description: "Low-level programming, Memory management, System calls"
        }];
        return y.jsx("section", {
            id: "skills",
            className: "py-20 bg-secondary",
            children: y.jsxs("div", {
                className: "container max-w-6xl mx-auto px-4",
                children: [y.jsx("h2", {
                    className: "text-3xl font-bold mb-2 text-center",
                    children: "Skills & Tools"
                }), y.jsx("p", {
                    className: "text-muted-foreground text-center mb-12",
                    children: "Technologies and tools I work with"
                }), y.jsx("div", {
                    className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6",
                    children: e.map((t, n) => y.jsxs("div", {
                        className: "bg-background p-6 rounded-lg text-center hover:shadow-md transition-shadow",
                        children: [y.jsx("div", {
                            className: "flex justify-center",
                            children: t.icon
                        }), y.jsx("h3", {
                            className: "text-lg font-medium mb-2",
                            children: t.name
                        }), y.jsx("p", {
                            className: "text-sm text-muted-foreground",
                            children: t.description
                        })]
                    }, n))
                })]
            })
        })
    },
    Qa = g.forwardRef(({
        className: e,
        type: t,
        ...n
    }, r) => y.jsx("input", {
        type: t,
        className: me("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", e),
        ref: r,
        ...n
    }));
Qa.displayName = "Input";
const Tg = g.forwardRef(({
    className: e,
    ...t
}, n) => y.jsx("textarea", {
    className: me("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", e),
    ref: n,
    ...t
}));
Tg.displayName = "Textarea";
const kS = () => {
        const [e, t] = g.useState({
            name: "",
            email: "",
            message: ""
        }), [n, r] = g.useState("idle"), o = s => {
            const {
                name: l,
                value: a
            } = s.target;
            t(u => ({ ...u,
                [l]: a
            }))
        }, i = s => {
            s.preventDefault(), r("submitting"), setTimeout(() => {
                console.log("Form submitted:", e), r("success"), t({
                    name: "",
                    email: "",
                    message: ""
                }), setTimeout(() => {
                    r("idle")
                }, 3e3)
            }, 1e3)
        };
        return y.jsx("section", {
            id: "contact",
            className: "py-20",
            children: y.jsxs("div", {
                className: "container max-w-4xl mx-auto px-4",
                children: [y.jsx("h2", {
                    className: "text-3xl font-bold mb-2 text-center",
                    children: "Contact Me"
                }), y.jsx("p", {
                    className: "text-muted-foreground text-center mb-12",
                    children: "Feel free to reach out for collaborations or just a friendly hello"
                }), y.jsxs("div", {
                    className: "grid md:grid-cols-2 gap-12",
                    children: [y.jsxs("div", {
                        children: [y.jsx("h3", {
                            className: "text-xl font-bold mb-4",
                            children: "Get In Touch"
                        }), y.jsx("p", {
                            className: "mb-6",
                            children: "I'm currently available for freelance work, collaboration opportunities, or full-time positions. If you have a project that needs coding or just want to connect, feel free to contact me."
                        }), y.jsxs("div", {
                            className: "flex space-x-4 mb-8",
                            children: [y.jsxs("a", {
                                href: "https://github.com/xnibirx",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "p-2 bg-secondary rounded-full hover:bg-primary hover:text-primary-foreground transition-colors",
                                children: [y.jsx(lm, {
                                    className: "h-5 w-5"
                                }), y.jsx("span", {
                                    className: "sr-only",
                                    children: "GitHub"
                                })]
                            }), y.jsxs("a", {
                                href: "https://www.linkedin.com/in/nibir-dibbo/",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "p-2 bg-secondary rounded-full hover:bg-primary hover:text-primary-foreground transition-colors",
                                children: [y.jsx(sw, {
                                    className: "h-5 w-5"
                                }), y.jsx("span", {
                                    className: "sr-only",
                                    children: "LinkedIn"
                                })]
                            }), y.jsxs("a", {
                                href: "https://leetcode.com/u/DxYPKt9osS/",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "p-2 bg-secondary rounded-full hover:bg-primary hover:text-primary-foreground transition-colors",
                                children: [y.jsx(bo, {
                                    className: "h-5 w-5"
                                }), y.jsx("span", {
                                    className: "sr-only",
                                    children: "LeetCode"
                                })]
                            })]
                        }), y.jsxs("div", {
                            children: [y.jsx("p", {
                                className: "text-sm text-muted-foreground",
                                children: "College Email: dibb0008@algonquinlive.com"
                            }), y.jsx("p", {
                                className: "text-sm text-muted-foreground mt-1",
                                children: "Personal Email: nibirxnandi@gmail.com"
                            }), y.jsx("p", {
                                className: "text-sm text-muted-foreground mt-1",
                                children: "Location: Ottawa, Canada"
                            })]
                        })]
                    }), y.jsxs("form", {
                        onSubmit: i,
                        className: "space-y-4",
                        children: [y.jsx("div", {
                            children: y.jsx(Qa, {
                                name: "name",
                                placeholder: "Your Name",
                                value: e.name,
                                onChange: o,
                                required: !0,
                                className: "bg-secondary border-0"
                            })
                        }), y.jsx("div", {
                            children: y.jsx(Qa, {
                                name: "email",
                                type: "email",
                                placeholder: "Your Email",
                                value: e.email,
                                onChange: o,
                                required: !0,
                                className: "bg-secondary border-0"
                            })
                        }), y.jsx("div", {
                            children: y.jsx(Tg, {
                                name: "message",
                                placeholder: "Your Message",
                                value: e.message,
                                onChange: o,
                                required: !0,
                                className: "min-h-[150px] bg-secondary border-0"
                            })
                        }), y.jsx(Kn, {
                            type: "submit",
                            className: "w-full",
                            disabled: n === "submitting",
                            children: n === "submitting" ? y.jsx("span", {
                                children: "Sending..."
                            }) : y.jsxs(y.Fragment, {
                                children: ["Send Message", y.jsx(Wu, {
                                    className: "ml-2 h-4 w-4"
                                })]
                            })
                        }), n === "success" && y.jsx("p", {
                            className: "text-green-600 mt-2 text-center",
                            children: "Message sent successfully!"
                        }), n === "error" && y.jsx("p", {
                            className: "text-red-600 mt-2 text-center",
                            children: "Failed to send message. Please try again."
                        })]
                    })]
                })]
            })
        })
    },
    bS = () => {
        const e = new Date().getFullYear();
        return y.jsx("footer", {
            className: "py-8 border-t",
            children: y.jsx("div", {
                className: "container max-w-6xl mx-auto px-4",
                children: y.jsxs("div", {
                    className: "flex flex-col md:flex-row justify-between items-center",
                    children: [y.jsx("div", {
                        className: "mb-4 md:mb-0",
                        children: y.jsxs("p", {
                            className: "text-sm text-muted-foreground",
                            children: ["© ", e, " Nibir Nandi Dibbo. All rights reserved."]
                        })
                    }), y.jsx("div", {
                        children: y.jsxs("nav", {
                            className: "flex space-x-6",
                            children: [y.jsx("a", {
                                href: "#home",
                                className: "text-sm text-muted-foreground hover:text-foreground",
                                children: "Home"
                            }), y.jsx("a", {
                                href: "#about",
                                className: "text-sm text-muted-foreground hover:text-foreground",
                                children: "About"
                            }), y.jsx("a", {
                                href: "#projects",
                                className: "text-sm text-muted-foreground hover:text-foreground",
                                children: "Projects"
                            }), y.jsx("a", {
                                href: "#skills",
                                className: "text-sm text-muted-foreground hover:text-foreground",
                                children: "Skills"
                            }), y.jsx("a", {
                                href: "#contact",
                                className: "text-sm text-muted-foreground hover:text-foreground",
                                children: "Contact"
                            })]
                        })
                    })]
                })
            })
        })
    },
    PS = () => {
        const [e, t] = g.useState("home");
        return g.useEffect(() => {
            const n = () => {
                const r = ["home", "about", "projects", "skills", "contact"],
                    o = window.scrollY + window.innerHeight / 3;
                for (const i of r) {
                    const s = document.getElementById(i);
                    if (!s) continue;
                    const l = s.offsetTop,
                        a = s.offsetHeight;
                    if (o >= l && o < l + a) {
                        t(i);
                        break
                    }
                }
            };
            return window.addEventListener("scroll", n), () => window.removeEventListener("scroll", n)
        }, []), y.jsxs("div", {
            className: "flex flex-col min-h-screen",
            children: [y.jsx(pS, {
                active: e,
                setActive: t
            }), y.jsxs("main", {
                className: "flex-grow",
                children: [y.jsx(mS, {}), y.jsx(xS, {}), y.jsx(SS, {}), y.jsx(CS, {}), y.jsx(kS, {})]
            }), y.jsx(bS, {})]
        })
    },
    NS = () => {
        const e = dg();
        return g.useEffect(() => {
            console.error("404 Error: User attempted to access non-existent route:", e.pathname)
        }, [e.pathname]), y.jsx("div", {
            className: "min-h-screen flex items-center justify-center bg-gray-100",
            children: y.jsxs("div", {
                className: "text-center",
                children: [y.jsx("h1", {
                    className: "text-4xl font-bold mb-4",
                    children: "404"
                }), y.jsx("p", {
                    className: "text-xl text-gray-600 mb-4",
                    children: "Oops! Page not found"
                }), y.jsx("a", {
                    href: "/",
                    className: "text-blue-500 hover:text-blue-700 underline",
                    children: "Return to Home"
                })]
            })
        })
    },
    TS = new CE,
    RS = () => y.jsx(bE, {
        client: TS,
        children: y.jsx(fS, {
            defaultTheme: "dark",
            children: y.jsxs(tE, {
                children: [y.jsx(Vw, {}), y.jsx(yx, {}), y.jsx(uS, {
                    children: y.jsxs(sS, {
                        children: [y.jsx(Ha, {
                            path: "/",
                            element: y.jsx(PS, {})
                        }), y.jsx(Ha, {
                            path: "*",
                            element: y.jsx(NS, {})
                        })]
                    })
                })]
            })
        })
    });
Th(document.getElementById("root")).render(y.jsx(RS, {}));