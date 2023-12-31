import {
  Fragment,
  Teleport,
  Transition,
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createSlots,
  createTextVNode,
  createVNode,
  defineComponent,
  getCurrentScope,
  guardReactiveProps,
  h,
  isRef,
  mergeProps,
  nextTick,
  normalizeClass,
  normalizeProps,
  normalizeStyle,
  onBeforeUpdate,
  onMounted,
  onScopeDispose,
  onUnmounted,
  openBlock,
  reactive,
  ref,
  render,
  renderList,
  renderSlot,
  resolveDynamicComponent,
  toDisplayString,
  toRef,
  unref,
  useSlots,
  vShow,
  watch,
  withCtx,
  withDirectives,
  withKeys,
  withModifiers
} from "./chunk-V7AUFIRV.js";
import {
  add,
  addDays,
  addMonths,
  addYears,
  differenceInCalendarDays,
  eachDayOfInterval,
  endOfWeek,
  format,
  getDay,
  getHours,
  getISOWeek,
  getMinutes,
  getMonth,
  getSeconds,
  getWeek,
  getYear,
  isAfter,
  isBefore,
  isDate,
  isEqual,
  isValid,
  parse,
  parseISO,
  set,
  setHours,
  setMilliseconds,
  setMinutes,
  setMonth,
  setSeconds,
  setYear,
  startOfWeek,
  sub,
  subMonths,
  subYears
} from "./chunk-OQ7JDYPE.js";

// node_modules/@vuepic/vue-datepicker/dist/vue-datepicker.js
function It() {
  return openBlock(), createElementBlock(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      createBaseVNode("path", {
        d: "M29.333 8c0-2.208-1.792-4-4-4h-18.667c-2.208 0-4 1.792-4 4v18.667c0 2.208 1.792 4 4 4h18.667c2.208 0 4-1.792 4-4v-18.667zM26.667 8v18.667c0 0.736-0.597 1.333-1.333 1.333 0 0-18.667 0-18.667 0-0.736 0-1.333-0.597-1.333-1.333 0 0 0-18.667 0-18.667 0-0.736 0.597-1.333 1.333-1.333 0 0 18.667 0 18.667 0 0.736 0 1.333 0.597 1.333 1.333z"
      }),
      createBaseVNode("path", {
        d: "M20 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      createBaseVNode("path", {
        d: "M9.333 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      createBaseVNode("path", {
        d: "M4 14.667h24c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-24c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333z"
      })
    ]
  );
}
It.compatConfig = {
  MODE: 3
};
function ba() {
  return openBlock(), createElementBlock(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      createBaseVNode("path", {
        d: "M23.057 7.057l-16 16c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l16-16c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0z"
      }),
      createBaseVNode("path", {
        d: "M7.057 8.943l16 16c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885l-16-16c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
ba.compatConfig = {
  MODE: 3
};
function Rn() {
  return openBlock(), createElementBlock(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      createBaseVNode("path", {
        d: "M20.943 23.057l-7.057-7.057c0 0 7.057-7.057 7.057-7.057 0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-8 8c-0.521 0.521-0.521 1.365 0 1.885l8 8c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
Rn.compatConfig = {
  MODE: 3
};
function On() {
  return openBlock(), createElementBlock(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      createBaseVNode("path", {
        d: "M12.943 24.943l8-8c0.521-0.521 0.521-1.365 0-1.885l-8-8c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885l7.057 7.057c0 0-7.057 7.057-7.057 7.057-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0z"
      })
    ]
  );
}
On.compatConfig = {
  MODE: 3
};
function Nn() {
  return openBlock(), createElementBlock(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      createBaseVNode("path", {
        d: "M16 1.333c-8.095 0-14.667 6.572-14.667 14.667s6.572 14.667 14.667 14.667c8.095 0 14.667-6.572 14.667-14.667s-6.572-14.667-14.667-14.667zM16 4c6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.623 0-12-5.377-12-12s5.377-12 12-12z"
      }),
      createBaseVNode("path", {
        d: "M14.667 8v8c0 0.505 0.285 0.967 0.737 1.193l5.333 2.667c0.658 0.329 1.46 0.062 1.789-0.596s0.062-1.46-0.596-1.789l-4.596-2.298c0 0 0-7.176 0-7.176 0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      })
    ]
  );
}
Nn.compatConfig = {
  MODE: 3
};
function Yn() {
  return openBlock(), createElementBlock(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      createBaseVNode("path", {
        d: "M24.943 19.057l-8-8c-0.521-0.521-1.365-0.521-1.885 0l-8 8c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l7.057-7.057c0 0 7.057 7.057 7.057 7.057 0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
Yn.compatConfig = {
  MODE: 3
};
function In() {
  return openBlock(), createElementBlock(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      createBaseVNode("path", {
        d: "M7.057 12.943l8 8c0.521 0.521 1.365 0.521 1.885 0l8-8c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-7.057 7.057c0 0-7.057-7.057-7.057-7.057-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
In.compatConfig = {
  MODE: 3
};
function Bn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ka = { exports: {} };
(function(e) {
  function n(a) {
    return a && a.__esModule ? a : {
      default: a
    };
  }
  e.exports = n, e.exports.__esModule = true, e.exports.default = e.exports;
})(ka);
var xa = ka.exports;
var wn = { exports: {} };
(function(e, n) {
  Object.defineProperty(n, "__esModule", {
    value: true
  }), n.default = a;
  function a(t) {
    if (t === null || t === true || t === false)
      return NaN;
    var r = Number(t);
    return isNaN(r) ? r : r < 0 ? Math.ceil(r) : Math.floor(r);
  }
  e.exports = n.default;
})(wn, wn.exports);
var Qa = wn.exports;
var er = Bn(Qa);
var Dn = { exports: {} };
(function(e, n) {
  Object.defineProperty(n, "__esModule", {
    value: true
  }), n.default = a;
  function a(t) {
    var r = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
    return r.setUTCFullYear(t.getFullYear()), t.getTime() - r.getTime();
  }
  e.exports = n.default;
})(Dn, Dn.exports);
var tr = Dn.exports;
var Gn = Bn(tr);
function nr(e, n) {
  var a = or(n);
  return a.formatToParts ? rr(a, e) : lr(a, e);
}
var ar = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function rr(e, n) {
  try {
    for (var a = e.formatToParts(n), t = [], r = 0; r < a.length; r++) {
      var l = ar[a[r].type];
      l >= 0 && (t[l] = parseInt(a[r].value, 10));
    }
    return t;
  } catch (c) {
    if (c instanceof RangeError)
      return [NaN];
    throw c;
  }
}
function lr(e, n) {
  var a = e.format(n).replace(/\u200E/g, ""), t = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(a);
  return [t[3], t[1], t[2], t[4], t[5], t[6]];
}
var sn = {};
function or(e) {
  if (!sn[e]) {
    var n = new Intl.DateTimeFormat("en-US", {
      hour12: false,
      timeZone: "America/New_York",
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }).format(/* @__PURE__ */ new Date("2014-06-25T04:00:00.123Z")), a = n === "06/25/2014, 00:00:00" || n === "‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";
    sn[e] = a ? new Intl.DateTimeFormat("en-US", {
      hour12: false,
      timeZone: e,
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }) : new Intl.DateTimeFormat("en-US", {
      hourCycle: "h23",
      timeZone: e,
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  }
  return sn[e];
}
function En(e, n, a, t, r, l, c) {
  var y = /* @__PURE__ */ new Date(0);
  return y.setUTCFullYear(e, n, a), y.setUTCHours(t, r, l, c), y;
}
var Zn = 36e5;
var sr = 6e4;
var un = {
  timezone: /([Z+-].*)$/,
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-]\d{2})$/,
  timezoneHHMM: /^([+-]\d{2}):?(\d{2})$/
};
function Fn(e, n, a) {
  var t, r;
  if (!e || (t = un.timezoneZ.exec(e), t))
    return 0;
  var l;
  if (t = un.timezoneHH.exec(e), t)
    return l = parseInt(t[1], 10), qn(l) ? -(l * Zn) : NaN;
  if (t = un.timezoneHHMM.exec(e), t) {
    l = parseInt(t[1], 10);
    var c = parseInt(t[2], 10);
    return qn(l, c) ? (r = Math.abs(l) * Zn + c * sr, l > 0 ? -r : r) : NaN;
  }
  if (dr(e)) {
    n = new Date(n || Date.now());
    var y = a ? n : ur(n), D = Mn(y, e), S = a ? D : ir(n, D, e);
    return -S;
  }
  return NaN;
}
function ur(e) {
  return En(
    e.getFullYear(),
    e.getMonth(),
    e.getDate(),
    e.getHours(),
    e.getMinutes(),
    e.getSeconds(),
    e.getMilliseconds()
  );
}
function Mn(e, n) {
  var a = nr(e, n), t = En(
    a[0],
    a[1] - 1,
    a[2],
    a[3] % 24,
    a[4],
    a[5],
    0
  ).getTime(), r = e.getTime(), l = r % 1e3;
  return r -= l >= 0 ? l : 1e3 + l, t - r;
}
function ir(e, n, a) {
  var t = e.getTime(), r = t - n, l = Mn(new Date(r), a);
  if (n === l)
    return n;
  r -= l - n;
  var c = Mn(new Date(r), a);
  return l === c ? l : Math.max(l, c);
}
function qn(e, n) {
  return -23 <= e && e <= 23 && (n == null || 0 <= n && n <= 59);
}
var Xn = {};
function dr(e) {
  if (Xn[e])
    return true;
  try {
    return new Intl.DateTimeFormat(void 0, { timeZone: e }), Xn[e] = true, true;
  } catch {
    return false;
  }
}
var wa = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/;
var dn = 36e5;
var Jn = 6e4;
var cr = 2;
var Ye = {
  dateTimePattern: /^([0-9W+-]+)(T| )(.*)/,
  datePattern: /^([0-9W+-]+)(.*)/,
  plainTime: /:/,
  // year tokens
  YY: /^(\d{2})$/,
  YYY: [
    /^([+-]\d{2})$/,
    // 0 additional digits
    /^([+-]\d{3})$/,
    // 1 additional digit
    /^([+-]\d{4})$/
    // 2 additional digits
  ],
  YYYY: /^(\d{4})/,
  YYYYY: [
    /^([+-]\d{4})/,
    // 0 additional digits
    /^([+-]\d{5})/,
    // 1 additional digit
    /^([+-]\d{6})/
    // 2 additional digits
  ],
  // date tokens
  MM: /^-(\d{2})$/,
  DDD: /^-?(\d{3})$/,
  MMDD: /^-?(\d{2})-?(\d{2})$/,
  Www: /^-?W(\d{2})$/,
  WwwD: /^-?W(\d{2})-?(\d{1})$/,
  HH: /^(\d{2}([.,]\d*)?)$/,
  HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
  HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
  // time zone tokens (to identify the presence of a tz)
  timeZone: wa
};
function $n(e, n) {
  if (arguments.length < 1)
    throw new TypeError("1 argument required, but only " + arguments.length + " present");
  if (e === null)
    return /* @__PURE__ */ new Date(NaN);
  var a = n || {}, t = a.additionalDigits == null ? cr : er(a.additionalDigits);
  if (t !== 2 && t !== 1 && t !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]")
    return new Date(e.getTime());
  if (typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]")
    return new Date(e);
  if (!(typeof e == "string" || Object.prototype.toString.call(e) === "[object String]"))
    return /* @__PURE__ */ new Date(NaN);
  var r = fr(e), l = vr(r.date, t), c = l.year, y = l.restDateString, D = mr(y, c);
  if (isNaN(D))
    return /* @__PURE__ */ new Date(NaN);
  if (D) {
    var S = D.getTime(), g = 0, Y;
    if (r.time && (g = gr(r.time), isNaN(g)))
      return /* @__PURE__ */ new Date(NaN);
    if (r.timeZone || a.timeZone) {
      if (Y = Fn(r.timeZone || a.timeZone, new Date(S + g)), isNaN(Y))
        return /* @__PURE__ */ new Date(NaN);
    } else
      Y = Gn(new Date(S + g)), Y = Gn(new Date(S + g + Y));
    return new Date(S + g + Y);
  } else
    return /* @__PURE__ */ new Date(NaN);
}
function fr(e) {
  var n = {}, a = Ye.dateTimePattern.exec(e), t;
  if (a ? (n.date = a[1], t = a[3]) : (a = Ye.datePattern.exec(e), a ? (n.date = a[1], t = a[2]) : (n.date = null, t = e)), t) {
    var r = Ye.timeZone.exec(t);
    r ? (n.time = t.replace(r[1], ""), n.timeZone = r[1].trim()) : n.time = t;
  }
  return n;
}
function vr(e, n) {
  var a = Ye.YYY[n], t = Ye.YYYYY[n], r;
  if (r = Ye.YYYY.exec(e) || t.exec(e), r) {
    var l = r[1];
    return {
      year: parseInt(l, 10),
      restDateString: e.slice(l.length)
    };
  }
  if (r = Ye.YY.exec(e) || a.exec(e), r) {
    var c = r[1];
    return {
      year: parseInt(c, 10) * 100,
      restDateString: e.slice(c.length)
    };
  }
  return {
    year: null
  };
}
function mr(e, n) {
  if (n === null)
    return null;
  var a, t, r, l;
  if (e.length === 0)
    return t = /* @__PURE__ */ new Date(0), t.setUTCFullYear(n), t;
  if (a = Ye.MM.exec(e), a)
    return t = /* @__PURE__ */ new Date(0), r = parseInt(a[1], 10) - 1, Qn(n, r) ? (t.setUTCFullYear(n, r), t) : /* @__PURE__ */ new Date(NaN);
  if (a = Ye.DDD.exec(e), a) {
    t = /* @__PURE__ */ new Date(0);
    var c = parseInt(a[1], 10);
    return pr(n, c) ? (t.setUTCFullYear(n, 0, c), t) : /* @__PURE__ */ new Date(NaN);
  }
  if (a = Ye.MMDD.exec(e), a) {
    t = /* @__PURE__ */ new Date(0), r = parseInt(a[1], 10) - 1;
    var y = parseInt(a[2], 10);
    return Qn(n, r, y) ? (t.setUTCFullYear(n, r, y), t) : /* @__PURE__ */ new Date(NaN);
  }
  if (a = Ye.Www.exec(e), a)
    return l = parseInt(a[1], 10) - 1, ea(n, l) ? xn(n, l) : /* @__PURE__ */ new Date(NaN);
  if (a = Ye.WwwD.exec(e), a) {
    l = parseInt(a[1], 10) - 1;
    var D = parseInt(a[2], 10) - 1;
    return ea(n, l, D) ? xn(n, l, D) : /* @__PURE__ */ new Date(NaN);
  }
  return null;
}
function gr(e) {
  var n, a, t;
  if (n = Ye.HH.exec(e), n)
    return a = parseFloat(n[1].replace(",", ".")), cn(a) ? a % 24 * dn : NaN;
  if (n = Ye.HHMM.exec(e), n)
    return a = parseInt(n[1], 10), t = parseFloat(n[2].replace(",", ".")), cn(a, t) ? a % 24 * dn + t * Jn : NaN;
  if (n = Ye.HHMMSS.exec(e), n) {
    a = parseInt(n[1], 10), t = parseInt(n[2], 10);
    var r = parseFloat(n[3].replace(",", "."));
    return cn(a, t, r) ? a % 24 * dn + t * Jn + r * 1e3 : NaN;
  }
  return null;
}
function xn(e, n, a) {
  n = n || 0, a = a || 0;
  var t = /* @__PURE__ */ new Date(0);
  t.setUTCFullYear(e, 0, 4);
  var r = t.getUTCDay() || 7, l = n * 7 + a + 1 - r;
  return t.setUTCDate(t.getUTCDate() + l), t;
}
var yr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var hr = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function Da(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function Qn(e, n, a) {
  if (n < 0 || n > 11)
    return false;
  if (a != null) {
    if (a < 1)
      return false;
    var t = Da(e);
    if (t && a > hr[n] || !t && a > yr[n])
      return false;
  }
  return true;
}
function pr(e, n) {
  if (n < 1)
    return false;
  var a = Da(e);
  return !(a && n > 366 || !a && n > 365);
}
function ea(e, n, a) {
  return !(n < 0 || n > 52 || a != null && (a < 0 || a > 6));
}
function cn(e, n, a) {
  return !(e != null && (e < 0 || e >= 25) || n != null && (n < 0 || n >= 60) || a != null && (a < 0 || a >= 60));
}
var Tn = { exports: {} };
var An = { exports: {} };
(function(e, n) {
  Object.defineProperty(n, "__esModule", {
    value: true
  }), n.default = a;
  function a(t, r) {
    if (t == null)
      throw new TypeError("assign requires that input parameter not be null or undefined");
    for (var l in r)
      Object.prototype.hasOwnProperty.call(r, l) && (t[l] = r[l]);
    return t;
  }
  e.exports = n.default;
})(An, An.exports);
var br = An.exports;
(function(e, n) {
  var a = xa.default;
  Object.defineProperty(n, "__esModule", {
    value: true
  }), n.default = r;
  var t = a(br);
  function r(l) {
    return (0, t.default)({}, l);
  }
  e.exports = n.default;
})(Tn, Tn.exports);
var kr = Tn.exports;
var wr = Bn(kr);
function Dr(e, n, a) {
  var t = $n(e, a), r = Fn(n, t, true), l = new Date(t.getTime() - r), c = /* @__PURE__ */ new Date(0);
  return c.setFullYear(l.getUTCFullYear(), l.getUTCMonth(), l.getUTCDate()), c.setHours(l.getUTCHours(), l.getUTCMinutes(), l.getUTCSeconds(), l.getUTCMilliseconds()), c;
}
function Mr(e, n, a) {
  if (typeof e == "string" && !e.match(wa)) {
    var t = wr(a);
    return t.timeZone = n, $n(e, t);
  }
  var r = $n(e, a), l = En(
    r.getFullYear(),
    r.getMonth(),
    r.getDate(),
    r.getHours(),
    r.getMinutes(),
    r.getSeconds(),
    r.getMilliseconds()
  ).getTime(), c = Fn(n, new Date(l));
  return new Date(l + c);
}
function ta(e) {
  return (n) => new Intl.DateTimeFormat(e, { weekday: "short", timeZone: "UTC" }).format(/* @__PURE__ */ new Date(`2017-01-0${n}T00:00:00+00:00`)).slice(0, 2);
}
function $r(e) {
  return (n) => format(/* @__PURE__ */ new Date(`2017-01-0${n}T00:00:00+00:00`), "EEEEEE", { locale: e });
}
var Tr = (e, n, a) => {
  const t = [1, 2, 3, 4, 5, 6, 7];
  let r;
  if (e !== null)
    try {
      r = t.map($r(e));
    } catch {
      r = t.map(ta(n));
    }
  else
    r = t.map(ta(n));
  const l = r.slice(0, a), c = r.slice(a + 1, r.length);
  return [r[a]].concat(...c).concat(...l);
};
var Vn = (e, n) => {
  const a = [];
  for (let t = +e[0]; t <= +e[1]; t++)
    a.push({ value: +t, text: `${t}` });
  return n ? a.reverse() : a;
};
var Ma = (e, n, a) => {
  const t = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((l) => {
    const c = l < 10 ? `0${l}` : l;
    return /* @__PURE__ */ new Date(`2017-${c}-01T00:00:00+00:00`);
  });
  if (e !== null)
    try {
      const l = a === "long" ? "MMMM" : "MMM";
      return t.map((c, y) => {
        const D = format(c, l, { locale: e });
        return {
          text: D.charAt(0).toUpperCase() + D.substring(1),
          value: y
        };
      });
    } catch {
    }
  const r = new Intl.DateTimeFormat(n, { month: a, timeZone: "UTC" });
  return t.map((l, c) => {
    const y = r.format(l);
    return {
      text: y.charAt(0).toUpperCase() + y.substring(1),
      value: c
    };
  });
};
var Ar = (e) => [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11][e];
var Ae = (e) => {
  const n = unref(e);
  return n != null && n.$el ? n == null ? void 0 : n.$el : n;
};
var Sr = (e) => Object.assign({ type: "dot" }, e);
var $a = (e) => Array.isArray(e) ? !!e[0] && !!e[1] : false;
var Gt = {
  prop: (e) => `"${e}" prop must be enabled!`,
  dateArr: (e) => `You need to use array as "model-value" binding in order to support "${e}"`
};
var $e = (e) => e;
var na = (e) => e === 0 ? e : !e || isNaN(+e) ? null : +e;
var aa = (e) => e === null;
var _r = (e) => {
  if (e)
    return [...e.querySelectorAll("input, button, select, textarea, a[href]")][0];
};
var Pr = (e) => {
  const n = [], a = (t) => t.filter((r) => r);
  for (let t = 0; t < e.length; t += 3) {
    const r = [e[t], e[t + 1], e[t + 2]];
    n.push(a(r));
  }
  return n;
};
var Rt = (e, n, a) => {
  const t = a ?? a === 0, r = n ?? n === 0;
  if (!t && !r)
    return false;
  const l = +a, c = +n;
  return t && r ? +e > l || +e < c : t ? +e > l : r ? +e < c : false;
};
var kt = (e, n) => Pr(e).map((a) => a.map((t) => {
  const { active: r, disabled: l, isBetween: c } = n(t);
  return {
    ...t,
    active: r,
    disabled: l,
    className: {
      dp__overlay_cell_active: r,
      dp__overlay_cell: !r,
      dp__overlay_cell_disabled: l,
      dp__overlay_cell_pad: true,
      dp__overlay_cell_active_disabled: l && r,
      dp__cell_in_between: c
    }
  };
}));
var tt = (e, n, a = false) => {
  e && n.allowStopPropagation && (a && e.stopImmediatePropagation(), e.stopPropagation());
};
var ra = (e, n, a, t, r) => {
  const l = parse(e, n.slice(0, e.length), /* @__PURE__ */ new Date());
  return isValid(l) && isDate(l) ? t || r ? l : set(l, {
    hours: +a.hours,
    minutes: +(a == null ? void 0 : a.minutes),
    seconds: +(a == null ? void 0 : a.seconds),
    milliseconds: 0
  }) : null;
};
var Cr = (e, n, a, t, r) => {
  const l = Array.isArray(a) ? a[0] : a;
  if (typeof n == "string")
    return ra(e, n, l, t, r);
  if (Array.isArray(n)) {
    let c = null;
    for (const y of n)
      if (c = ra(e, y, l, t, r), c)
        break;
    return c;
  }
  return typeof n == "function" ? n(e) : null;
};
var P = (e) => e ? new Date(e) : /* @__PURE__ */ new Date();
var Rr = (e, n, a) => {
  if (n) {
    const r = (e.getMonth() + 1).toString().padStart(2, "0"), l = e.getDate().toString().padStart(2, "0"), c = e.getHours().toString().padStart(2, "0"), y = e.getMinutes().toString().padStart(2, "0"), D = a ? e.getSeconds().toString().padStart(2, "0") : "00";
    return `${e.getFullYear()}-${r}-${l}T${c}:${y}:${D}.000Z`;
  }
  const t = Date.UTC(
    e.getUTCFullYear(),
    e.getUTCMonth(),
    e.getUTCDate(),
    e.getUTCHours(),
    e.getUTCMinutes(),
    e.getUTCSeconds()
  );
  return new Date(t).toISOString();
};
var He = (e) => {
  let n = P(JSON.parse(JSON.stringify(e)));
  return n = setHours(n, 0), n = setMinutes(n, 0), n = setSeconds(n, 0), n = setMilliseconds(n, 0), n;
};
var nt = (e, n, a, t) => {
  let r = e ? P(e) : P();
  return (n || n === 0) && (r = setHours(r, +n)), (a || a === 0) && (r = setMinutes(r, +a)), (t || t === 0) && (r = setSeconds(r, +t)), setMilliseconds(r, 0);
};
var Pe = (e, n) => !e || !n ? false : isBefore(He(e), He(n));
var ge = (e, n) => !e || !n ? false : isEqual(He(e), He(n));
var Re = (e, n) => !e || !n ? false : isAfter(He(e), He(n));
var Hn = (e, n, a) => e != null && e[0] && (e != null && e[1]) ? Re(a, e[0]) && Pe(a, e[1]) : e != null && e[0] && n ? Re(a, e[0]) && Pe(a, n) || Pe(a, e[0]) && Re(a, n) : false;
var We = (e) => {
  const n = set(new Date(e), { date: 1 });
  return He(n);
};
var fn = (e, n, a) => n && (a || a === 0) ? Object.fromEntries(
  ["hours", "minutes", "seconds"].map((t) => t === n ? [t, a] : [t, isNaN(+e[t]) ? void 0 : +e[t]])
) : {
  hours: isNaN(+e.hours) ? void 0 : +e.hours,
  minutes: isNaN(+e.minutes) ? void 0 : +e.minutes,
  seconds: isNaN(+e.seconds) ? void 0 : +e.seconds
};
var vt = (e) => ({
  hours: getHours(e),
  minutes: getMinutes(e),
  seconds: getSeconds(e)
});
var Ta = (e, n) => {
  if (n) {
    const a = getYear(P(n));
    if (a > e)
      return 12;
    if (a === e)
      return getMonth(P(n));
  }
};
var Aa = (e, n) => {
  if (n) {
    const a = getYear(P(n));
    return a < e ? -1 : a === e ? getMonth(P(n)) : void 0;
  }
};
var wt = (e) => {
  if (e)
    return getYear(P(e));
};
var Ge = (e, n) => n ? Dr(e, n) : e;
var Sa = (e, n) => n ? Mr(e, n) : e;
var la = (e) => e instanceof Date ? e : parseISO(e);
var _a = (e, n) => {
  const a = Re(e, n) ? n : e, t = Re(n, e) ? n : e;
  return eachDayOfInterval({ start: a, end: t });
};
var Or = (e) => {
  const n = addMonths(e, 1);
  return { month: getMonth(n), year: getYear(n) };
};
var jt = (e, n, a) => {
  const t = startOfWeek(Ge(e, n), { weekStartsOn: +a }), r = endOfWeek(Ge(e, n), { weekStartsOn: +a });
  return [t, r];
};
var Pa = (e, n) => {
  const a = {
    hours: getHours(P()),
    minutes: getMinutes(P()),
    seconds: n ? getSeconds(P()) : 0
  };
  return Object.assign(a, e);
};
var et = (e, n, a) => [set(P(e), { date: 1 }), set(P(), { month: n, year: a, date: 1 })];
var Je = (e, n, a) => {
  let t = e ? P(e) : P();
  return (n || n === 0) && (t = setMonth(t, n)), a && (t = setYear(t, a)), t;
};
var Ca = (e, n, a, t, r) => {
  if (!t || r && !n || !r && !a)
    return false;
  const l = r ? addMonths(e, 1) : subMonths(e, 1), c = [getMonth(l), getYear(l)];
  return r ? !Yr(...c, n) : !Nr(...c, a);
};
var Nr = (e, n, a) => Pe(...et(a, e, n)) || ge(...et(a, e, n));
var Yr = (e, n, a) => Re(...et(a, e, n)) || ge(...et(a, e, n));
var Ra = (e, n, a, t, r, l) => {
  if (typeof n == "function")
    return n(e);
  const c = a ? { locale: a } : void 0;
  return Array.isArray(e) ? `${format(e[0], l, c)}${r && !e[1] ? "" : t}${e[1] ? format(e[1], l, c) : ""}` : format(e, l, c);
};
var yt = (e) => {
  if (e)
    return null;
  throw new Error(Gt.prop("partial-range"));
};
var Ht = (e, n) => {
  if (n)
    return e();
  throw new Error(Gt.prop("range"));
};
var Sn = (e) => Array.isArray(e) ? isValid(e[0]) && (e[1] ? isValid(e[1]) : true) : e ? isValid(e) : false;
var Ir = (e) => set(P(), {
  hours: +e.hours || 0,
  minutes: +e.minutes || 0,
  seconds: +e.seconds || 0
});
var vn = (e, n, a, t) => {
  if (!e)
    return true;
  if (t) {
    const r = a === "max" ? isBefore(e, n) : isAfter(e, n), l = { seconds: 0, milliseconds: 0 };
    return r || isEqual(set(e, l), set(n, l));
  }
  return a === "max" ? e.getTime() <= n.getTime() : e.getTime() >= n.getTime();
};
var oa = (e, n, a, t, r) => {
  const l = e ? Ir(e) : P(n);
  return Array.isArray(t) ? vn(t[0], l, a, !!n) && vn(t[1], l, a, !!n) && r : vn(t, l, a, !!n) && r;
};
var mn = (e) => set(P(), vt(e));
var Br = (e, n) => Array.isArray(e) ? e.map((a) => P(a)).filter((a) => getYear(P(a)) === n).map((a) => getMonth(a)) : [];
var At = reactive({
  menuFocused: false,
  shiftKeyInMenu: false
});
var Oa = () => {
  const e = (t) => {
    At.menuFocused = t;
  }, n = (t) => {
    At.shiftKeyInMenu !== t && (At.shiftKeyInMenu = t);
  };
  return {
    control: computed(() => ({ shiftKeyInMenu: At.shiftKeyInMenu, menuFocused: At.menuFocused })),
    setMenuFocused: e,
    setShiftKey: n
  };
};
var ke = reactive({
  monthYear: [],
  calendar: [],
  time: [],
  actionRow: [],
  selectionGrid: [],
  timePicker: {
    0: [],
    1: []
  },
  monthPicker: []
});
var gn = ref(null);
var Ut = ref(false);
var yn = ref(false);
var hn = ref(false);
var pn = ref(false);
var Oe = ref(0);
var _e = ref(0);
var lt = () => {
  const e = computed(() => Ut.value ? [...ke.selectionGrid, ke.actionRow].filter((p) => p.length) : yn.value ? [
    ...ke.timePicker[0],
    ...ke.timePicker[1],
    pn.value ? [] : [gn.value],
    ke.actionRow
  ].filter((p) => p.length) : hn.value ? [...ke.monthPicker, ke.actionRow] : [ke.monthYear, ...ke.calendar, ke.time, ke.actionRow].filter((p) => p.length)), n = (p) => {
    Oe.value = p ? Oe.value + 1 : Oe.value - 1;
    let M = null;
    e.value[_e.value] && (M = e.value[_e.value][Oe.value]), M || (Oe.value = p ? Oe.value - 1 : Oe.value + 1);
  }, a = (p) => {
    if (_e.value === 0 && !p || _e.value === e.value.length && p)
      return;
    _e.value = p ? _e.value + 1 : _e.value - 1, e.value[_e.value] ? e.value[_e.value] && !e.value[_e.value][Oe.value] && Oe.value !== 0 && (Oe.value = e.value[_e.value].length - 1) : _e.value = p ? _e.value - 1 : _e.value + 1;
  }, t = (p) => {
    let M = null;
    e.value[_e.value] && (M = e.value[_e.value][Oe.value]), M ? M.focus({ preventScroll: !Ut.value }) : Oe.value = p ? Oe.value - 1 : Oe.value + 1;
  }, r = () => {
    n(true), t(true);
  }, l = () => {
    n(false), t(false);
  }, c = () => {
    a(false), t(true);
  }, y = () => {
    a(true), t(true);
  }, D = (p, M) => {
    ke[M] = p;
  }, S = (p, M) => {
    ke[M] = p;
  }, g = () => {
    Oe.value = 0, _e.value = 0;
  };
  return {
    buildMatrix: D,
    buildMultiLevelMatrix: S,
    setTimePickerBackRef: (p) => {
      gn.value = p;
    },
    setSelectionGrid: (p) => {
      Ut.value = p, g(), p || (ke.selectionGrid = []);
    },
    setTimePicker: (p, M = false) => {
      yn.value = p, pn.value = M, g(), p || (ke.timePicker[0] = [], ke.timePicker[1] = []);
    },
    setTimePickerElements: (p, M = 0) => {
      ke.timePicker[M] = p;
    },
    arrowRight: r,
    arrowLeft: l,
    arrowUp: c,
    arrowDown: y,
    clearArrowNav: () => {
      ke.monthYear = [], ke.calendar = [], ke.time = [], ke.actionRow = [], ke.selectionGrid = [], ke.timePicker[0] = [], ke.timePicker[1] = [], Ut.value = false, yn.value = false, pn.value = false, hn.value = false, g(), gn.value = null;
    },
    setMonthPicker: (p) => {
      hn.value = p, g();
    },
    refSets: ke
    // exposed for testing
  };
};
var sa = (e) => ({
  menuAppearTop: "dp-menu-appear-top",
  menuAppearBottom: "dp-menu-appear-bottom",
  open: "dp-slide-down",
  close: "dp-slide-up",
  next: "calendar-next",
  previous: "calendar-prev",
  vNext: "dp-slide-up",
  vPrevious: "dp-slide-down",
  ...e ?? {}
});
var Er = (e) => ({
  toggleOverlay: "Toggle overlay",
  menu: "Datepicker menu",
  input: "Datepicker input",
  calendarWrap: "Calendar wrapper",
  calendarDays: "Calendar days",
  openTimePicker: "Open time picker",
  closeTimePicker: "Close time Picker",
  incrementValue: (n) => `Increment ${n}`,
  decrementValue: (n) => `Decrement ${n}`,
  openTpOverlay: (n) => `Open ${n} overlay`,
  amPmButton: "Switch AM/PM mode",
  openYearsOverlay: "Open years overlay",
  openMonthsOverlay: "Open months overlay",
  nextMonth: "Next month",
  prevMonth: "Previous month",
  nextYear: "Next year",
  prevYear: "Previous year",
  day: () => "",
  ...e ?? {}
});
var ua = (e) => e ? typeof e == "boolean" ? e ? 2 : 0 : +e >= 2 ? +e : 2 : 0;
var Fr = (e) => {
  const n = typeof e == "object" && e, a = {
    static: true,
    solo: false
  };
  if (!e)
    return { ...a, count: ua(false) };
  const t = n ? e : {}, r = n ? t.count ?? true : e, l = ua(r);
  return Object.assign(a, t, { count: l });
};
var Vr = (e, n, a) => e || (typeof a == "string" ? a : n);
var Hr = (e) => typeof e == "boolean" ? e ? sa({}) : false : sa(e);
var Ur = (e) => {
  const n = {
    enterSubmit: true,
    tabSubmit: true,
    openMenu: true,
    rangeSeparator: " - "
  };
  return typeof e == "object" ? { ...n, ...e ?? {}, enabled: true } : { ...n, enabled: e };
};
var Lr = (e) => ({
  months: [],
  years: [],
  times: { hours: [], minutes: [], seconds: [] },
  ...e ?? {}
});
var Wr = (e) => ({
  showSelect: true,
  showCancel: true,
  showNow: false,
  showPreview: true,
  ...e ?? {}
});
var zr = (e) => {
  const n = { input: false };
  return typeof e == "object" ? { ...n, ...e ?? {}, enabled: true } : {
    enabled: e,
    ...n
  };
};
var jr = (e) => ({ ...{
  allowStopPropagation: true,
  closeOnScroll: false,
  modeHeight: 255,
  allowPreventDefault: false,
  closeOnClearValue: true,
  closeOnAutoApply: true,
  noSwipe: false,
  keepActionRow: false,
  onClickOutside: void 0
}, ...e ?? {} });
var Se = (e) => {
  const n = () => {
    const J = e.enableSeconds ? ":ss" : "";
    return e.is24 ? `HH:mm${J}` : `hh:mm${J} aa`;
  }, a = () => e.format ? e.format : e.monthPicker ? "MM/yyyy" : e.timePicker ? n() : e.weekPicker ? "MM/dd/yyyy" : e.yearPicker ? "yyyy" : e.enableTimePicker ? `MM/dd/yyyy, ${n()}` : "MM/dd/yyyy", t = (J) => Pa(J, e.enableSeconds), r = () => e.range ? e.startTime && Array.isArray(e.startTime) ? [t(e.startTime[0]), t(e.startTime[1])] : null : e.startTime && !Array.isArray(e.startTime) ? t(e.startTime) : null, l = computed(() => Fr(e.multiCalendars)), c = computed(() => r()), y = computed(() => Er(e.ariaLabels)), D = computed(() => Lr(e.filters)), S = computed(() => Hr(e.transitions)), g = computed(() => Wr(e.actionRow)), Y = computed(
    () => Vr(e.previewFormat, e.format, a())
  ), R = computed(() => Ur(e.textInput)), G = computed(() => zr(e.inline)), q = computed(() => jr(e.config));
  return {
    defaultedTransitions: S,
    defaultedMultiCalendars: l,
    defaultedStartTime: c,
    defaultedAriaLabels: y,
    defaultedFilters: D,
    defaultedActionRow: g,
    defaultedPreviewFormat: Y,
    defaultedTextInput: R,
    defaultedInline: G,
    defaultedConfig: q,
    getDefaultPattern: a,
    getDefaultStartTime: r
  };
};
var Kr = (e, n, a) => {
  const t = ref(), { defaultedTextInput: r, getDefaultPattern: l } = Se(n), c = ref(""), y = toRef(n, "format");
  watch(t, () => {
    e("internal-model-change", t.value);
  }), watch(y, () => {
    v();
  });
  const D = (s) => Sa(s, n.timezone), S = (s) => Ge(s, n.timezone), g = (s, u) => Ra(
    s,
    n.format,
    n.formatLocale,
    r.value.rangeSeparator,
    n.modelAuto,
    u ?? l()
  ), Y = (s) => {
    const u = s ?? P();
    return n.modelType ? f(u) : {
      hours: getHours(u),
      minutes: getMinutes(u),
      seconds: n.enableSeconds ? getSeconds(u) : 0
    };
  }, R = (s) => n.modelType ? f(s) : { month: getMonth(s), year: getYear(s) }, G = (s) => Array.isArray(s) ? Ht(
    () => [
      setYear(P(), s[0]),
      s[1] ? setYear(P(), s[1]) : yt(n.partialRange)
    ],
    n.range
  ) : setYear(P(), +s), q = (s, u) => (typeof s == "string" || typeof s == "number") && n.modelType ? I(s) : u, J = (s) => Array.isArray(s) ? [
    q(
      s[0],
      nt(null, +s[0].hours, +s[0].minutes, s[0].seconds)
    ),
    q(
      s[1],
      nt(null, +s[1].hours, +s[1].minutes, s[1].seconds)
    )
  ] : q(s, nt(null, s.hours, s.minutes, s.seconds)), Q = (s) => Array.isArray(s) ? n.multiDates ? s.map((u) => q(u, Je(null, +u.month, +u.year))) : Ht(
    () => [
      q(s[0], Je(null, +s[0].month, +s[0].year)),
      q(
        s[1],
        s[1] ? Je(null, +s[1].month, +s[1].year) : yt(n.partialRange)
      )
    ],
    n.range
  ) : q(s, Je(null, +s.month, +s.year)), p = (s) => {
    if (Array.isArray(s))
      return s.map((u) => I(u));
    throw new Error(Gt.dateArr("multi-dates"));
  }, M = (s) => {
    if (Array.isArray(s))
      return [P(s[0]), P(s[1])];
    throw new Error(Gt.dateArr("week-picker"));
  }, E = (s) => n.modelAuto ? Array.isArray(s) ? [I(s[0]), I(s[1])] : n.autoApply ? [I(s)] : [I(s), null] : Array.isArray(s) ? Ht(
    () => [
      I(s[0]),
      s[1] ? I(s[1]) : yt(n.partialRange)
    ],
    n.range
  ) : I(s), z = () => {
    Array.isArray(t.value) && n.range && t.value.length === 1 && t.value.push(yt(n.partialRange));
  }, K = () => {
    const s = t.value;
    return [
      f(s[0]),
      s[1] ? f(s[1]) : yt(n.partialRange)
    ];
  }, _ = () => t.value[1] ? K() : f($e(t.value[0])), re = () => (t.value || []).map((s) => f(s)), x = () => (z(), n.modelAuto ? _() : n.multiDates ? re() : Array.isArray(t.value) ? Ht(() => K(), n.range) : f($e(t.value))), L = (s) => !s || Array.isArray(s) && !s.length ? null : n.timePicker ? J($e(s)) : n.monthPicker ? Q($e(s)) : n.yearPicker ? G($e(s)) : n.multiDates ? p($e(s)) : n.weekPicker ? M($e(s)) : E($e(s)), h2 = (s) => {
    const u = L(s);
    Sn($e(u)) ? (t.value = $e(u), v()) : (t.value = null, c.value = "");
  }, T = () => {
    const s = (u) => format(u, r.value.format);
    return `${s(t.value[0])} ${r.value.rangeSeparator} ${t.value[1] ? s(t.value[1]) : ""}`;
  }, H = () => a.value && t.value ? Array.isArray(t.value) ? T() : format(t.value, r.value.format) : g(t.value), ee = () => t.value ? n.multiDates ? t.value.map((s) => g(s)).join("; ") : r.value.enabled && typeof r.value.format == "string" ? H() : g(t.value) : "", v = () => {
    !n.format || typeof n.format == "string" || r.value.enabled && typeof r.value.format == "string" ? c.value = ee() : c.value = n.format(t.value);
  }, I = (s) => {
    if (n.utc) {
      const u = new Date(s);
      return n.utc === "preserve" ? new Date(u.getTime() + u.getTimezoneOffset() * 6e4) : u;
    }
    return n.modelType ? n.modelType === "date" || n.modelType === "timestamp" ? S(new Date(s)) : n.modelType === "format" && (typeof n.format == "string" || !n.format) ? parse(s, l(), /* @__PURE__ */ new Date()) : S(parse(s, n.modelType, /* @__PURE__ */ new Date())) : S(new Date(s));
  }, f = (s) => s ? n.utc ? Rr(s, n.utc === "preserve", n.enableSeconds) : n.modelType ? n.modelType === "timestamp" ? +D(s) : n.modelType === "format" && (typeof n.format == "string" || !n.format) ? g(D(s)) : g(D(s), n.modelType) : D(s) : "", k = (s, u = false) => {
    if (e("update:model-value", s), n.emitTimezone && u) {
      const C = Array.isArray(s) ? s.map((O) => Ge($e(O)), n.emitTimezone) : Ge($e(s), n.emitTimezone);
      e("update:model-timezone-value", C);
    }
  }, d = (s) => Array.isArray(t.value) ? n.multiDates ? t.value.map((u) => s(u)) : [
    s(t.value[0]),
    t.value[1] ? s(t.value[1]) : yt(n.partialRange)
  ] : s($e(t.value)), o = (s) => k($e(d(s)));
  return {
    inputValue: c,
    internalModelValue: t,
    checkBeforeEmit: () => t.value ? n.range ? n.partialRange ? t.value.length >= 1 : t.value.length === 2 : !!t.value : false,
    parseExternalModelValue: h2,
    formatInputValue: v,
    emitModelValue: () => (v(), n.monthPicker ? o(R) : n.timePicker ? o(Y) : n.yearPicker ? o(getYear) : n.weekPicker ? k(t.value, true) : k(x(), true))
  };
};
var Gr = (e, n) => {
  const { defaultedFilters: a } = Se(e), { validateMonthYearInRange: t } = Et(e), r = (S, g) => {
    let Y = S;
    return a.value.months.includes(getMonth(Y)) ? (Y = g ? addMonths(S, 1) : subMonths(S, 1), r(Y, g)) : Y;
  }, l = (S, g) => {
    let Y = S;
    return a.value.years.includes(getYear(Y)) ? (Y = g ? addYears(S, 1) : subYears(S, 1), l(Y, g)) : Y;
  }, c = (S, g = false) => {
    const Y = set(/* @__PURE__ */ new Date(), { month: e.month, year: e.year });
    let R = S ? addMonths(Y, 1) : subMonths(Y, 1);
    e.disableYearSelect && (R = setYear(R, e.year));
    let G = getMonth(R), q = getYear(R);
    a.value.months.includes(G) && (R = r(R, S), G = getMonth(R), q = getYear(R)), a.value.years.includes(q) && (R = l(R, S), q = getYear(R)), t(G, q, S, e.preventMinMaxNavigation) && y(G, q, g);
  }, y = (S, g, Y) => {
    n("update-month-year", { month: S, year: g, fromNav: Y });
  }, D = computed(() => (S) => Ca(
    set(/* @__PURE__ */ new Date(), { month: e.month, year: e.year }),
    e.maxDate,
    e.minDate,
    e.preventMinMaxNavigation,
    S
  ));
  return { handleMonthYearChange: c, isDisabled: D, updateMonthYear: y };
};
var ht = ((e) => (e.center = "center", e.left = "left", e.right = "right", e))(ht || {});
var Le = ((e) => (e.month = "month", e.year = "year", e))(Le || {});
var ut = ((e) => (e.top = "top", e.bottom = "bottom", e))(ut || {});
var mt = ((e) => (e.header = "header", e.calendar = "calendar", e.timePicker = "timePicker", e))(mt || {});
var je = ((e) => (e.month = "month", e.year = "year", e.calendar = "calendar", e.time = "time", e.minutes = "minutes", e.hours = "hours", e.seconds = "seconds", e))(je || {});
var Zr = ({
  menuRef: e,
  menuRefInner: n,
  inputRef: a,
  pickerWrapperRef: t,
  inline: r,
  emit: l,
  props: c,
  slots: y
}) => {
  const D = ref({}), S = ref(false), g = ref({
    top: "0",
    left: "0"
  }), Y = ref(false), R = toRef(c, "teleportCenter");
  watch(R, () => {
    g.value = JSON.parse(JSON.stringify({})), z();
  });
  const G = (f) => {
    if (c.teleport) {
      const k = f.getBoundingClientRect();
      return {
        left: k.left + window.scrollX,
        top: k.top + window.scrollY
      };
    }
    return { top: 0, left: 0 };
  }, q = (f, k) => {
    g.value.left = `${f + k - D.value.width}px`;
  }, J = (f) => {
    g.value.left = `${f}px`;
  }, Q = (f, k) => {
    c.position === ht.left && J(f), c.position === ht.right && q(f, k), c.position === ht.center && (g.value.left = `${f + k / 2 - D.value.width / 2}px`);
  }, p = (f) => {
    const { width: k, height: d } = f.getBoundingClientRect(), { top: o, left: $ } = c.altPosition ? c.altPosition(f) : G(f);
    return { top: +o, left: +$, width: k, height: d };
  }, M = () => {
    g.value.left = "50%", g.value.top = "50%", g.value.transform = "translate(-50%, -50%)", g.value.position = "fixed", delete g.value.opacity;
  }, E = () => {
    const f = Ae(a), { top: k, left: d, transform: o } = c.altPosition(f);
    g.value = { top: `${k}px`, left: `${d}px`, transform: o ?? "" };
  }, z = (f = true) => {
    var k;
    if (!r.value.enabled) {
      if (R.value)
        return M();
      if (c.altPosition !== null)
        return E();
      if (f) {
        const d = c.teleport ? (k = n.value) == null ? void 0 : k.$el : e.value;
        d && (D.value = d.getBoundingClientRect()), l("recalculate-position");
      }
      return T();
    }
  }, K = ({ inputEl: f, left: k, width: d }) => {
    window.screen.width > 768 && !S.value && Q(k, d), x(f);
  }, _ = (f) => {
    const { top: k, left: d, height: o, width: $ } = p(f);
    g.value.top = `${o + k + +c.offset}px`, Y.value = false, S.value || (g.value.left = `${d + $ / 2 - D.value.width / 2}px`), K({ inputEl: f, left: d, width: $ });
  }, re = (f) => {
    const { top: k, left: d, width: o } = p(f);
    g.value.top = `${k - +c.offset - D.value.height}px`, Y.value = true, K({ inputEl: f, left: d, width: o });
  }, x = (f) => {
    if (c.autoPosition) {
      const { left: k, width: d } = p(f), { left: o, right: $ } = D.value;
      if (!S.value) {
        if (Math.abs(o) !== Math.abs($)) {
          if (o <= 0)
            return S.value = true, J(k);
          if ($ >= document.documentElement.clientWidth)
            return S.value = true, q(k, d);
        }
        return Q(k, d);
      }
    }
  }, L = () => {
    const f = Ae(a);
    if (f) {
      const { height: k } = D.value, { top: d, height: o } = f.getBoundingClientRect(), X = window.innerHeight - d - o, s = d;
      return k <= X ? ut.bottom : k > X && k <= s ? ut.top : X >= s ? ut.bottom : ut.top;
    }
    return ut.bottom;
  }, h2 = (f) => L() === ut.bottom ? _(f) : re(f), T = () => {
    const f = Ae(a);
    if (f)
      return c.autoPosition ? h2(f) : _(f);
  }, H = function(f) {
    if (f) {
      const k = f.scrollHeight > f.clientHeight, o = window.getComputedStyle(f).overflowY.indexOf("hidden") !== -1;
      return k && !o;
    }
    return true;
  }, ee = function(f) {
    return !f || f === document.body || f.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? window : H(f) ? f : ee(f.parentNode);
  }, v = (f) => {
    if (f)
      switch (c.position) {
        case ht.left:
          return { left: 0, transform: "translateX(0)" };
        case ht.right:
          return { left: `${f.width}px`, transform: "translateX(-100%)" };
        default:
          return { left: `${f.width / 2}px`, transform: "translateX(-50%)" };
      }
    return {};
  };
  return {
    openOnTop: Y,
    menuStyle: g,
    xCorrect: S,
    setMenuPosition: z,
    getScrollableParent: ee,
    shadowRender: (f, k) => {
      var C, O, A;
      const d = document.createElement("div"), o = (C = Ae(a)) == null ? void 0 : C.getBoundingClientRect();
      d.setAttribute("id", "dp--temp-container");
      const $ = (O = t.value) != null && O.clientWidth ? t.value : document.body;
      $.append(d);
      const X = document.getElementById("dp--temp-container"), s = v(o), u = h(
        f,
        {
          ...k,
          shadow: true,
          style: { opacity: 0, position: "absolute", ...s }
        },
        Object.fromEntries(Object.keys(y).map((te) => [te, y[te]]))
      );
      render(u, X), D.value = (A = u.el) == null ? void 0 : A.getBoundingClientRect(), render(null, X), $.removeChild(X);
    }
  };
};
var st = [
  { name: "clock-icon", use: ["time", "calendar", "shared"] },
  { name: "arrow-left", use: ["month-year", "calendar", "shared"] },
  { name: "arrow-right", use: ["month-year", "calendar", "shared"] },
  { name: "arrow-up", use: ["time", "calendar", "month-year", "shared"] },
  { name: "arrow-down", use: ["time", "calendar", "month-year", "shared"] },
  { name: "calendar-icon", use: ["month-year", "time", "calendar", "shared"] },
  { name: "day", use: ["calendar", "shared"] },
  { name: "month-overlay-value", use: ["calendar", "month-year", "shared"] },
  { name: "year-overlay-value", use: ["calendar", "month-year", "shared"] },
  { name: "year-overlay", use: ["month-year", "shared"] },
  { name: "month-overlay", use: ["month-year", "shared"] },
  { name: "month-overlay-header", use: ["month-year", "shared"] },
  { name: "year-overlay-header", use: ["month-year", "shared"] },
  { name: "hours-overlay-value", use: ["calendar", "time", "shared"] },
  { name: "minutes-overlay-value", use: ["calendar", "time", "shared"] },
  { name: "seconds-overlay-value", use: ["calendar", "time", "shared"] },
  { name: "hours", use: ["calendar", "time", "shared"] },
  { name: "minutes", use: ["calendar", "time", "shared"] },
  { name: "month", use: ["calendar", "month-year", "shared"] },
  { name: "year", use: ["calendar", "month-year", "shared"] },
  { name: "action-buttons", use: ["action"] },
  { name: "action-preview", use: ["action"] },
  { name: "calendar-header", use: ["calendar", "shared"] },
  { name: "marker-tooltip", use: ["calendar", "shared"] },
  { name: "action-extra", use: ["menu"] },
  { name: "time-picker-overlay", use: ["calendar", "time", "shared"] },
  { name: "am-pm-button", use: ["calendar", "time", "shared"] },
  { name: "left-sidebar", use: ["menu"] },
  { name: "right-sidebar", use: ["menu"] },
  { name: "month-year", use: ["month-year", "shared"] },
  { name: "time-picker", use: ["menu", "shared"] },
  { name: "action-row", use: ["action"] },
  { name: "marker", use: ["calendar", "shared"] }
];
var qr = [{ name: "trigger" }, { name: "input-icon" }, { name: "clear-icon" }, { name: "dp-input" }];
var Xr = {
  all: () => st,
  monthYear: () => st.filter((e) => e.use.includes("month-year")),
  input: () => qr,
  timePicker: () => st.filter((e) => e.use.includes("time")),
  action: () => st.filter((e) => e.use.includes("action")),
  calendar: () => st.filter((e) => e.use.includes("calendar")),
  menu: () => st.filter((e) => e.use.includes("menu")),
  shared: () => st.filter((e) => e.use.includes("shared"))
};
var ze = (e, n, a) => {
  const t = [];
  return Xr[n]().forEach((r) => {
    e[r.name] && t.push(r.name);
  }), a != null && a.length && a.forEach((r) => {
    r.slot && t.push(r.slot);
  }), t;
};
var Bt = (e) => {
  const n = computed(() => (t) => e.value ? t ? e.value.open : e.value.close : ""), a = computed(() => (t) => e.value ? t ? e.value.menuAppearTop : e.value.menuAppearBottom : "");
  return { transitionName: n, showTransition: !!e.value, menuTransition: a };
};
var Zt = (e, n) => {
  const a = ref([{ month: getMonth(P()), year: getYear(P()) }]), t = reactive({
    hours: e.range ? [getHours(P()), getHours(P())] : getHours(P()),
    minutes: e.range ? [getMinutes(P()), getMinutes(P())] : getMinutes(P()),
    seconds: e.range ? [0, 0] : 0
  }), r = computed({
    get: () => e.internalModelValue,
    set: (y) => {
      !e.readonly && !e.disabled && n("update:internal-model-value", y);
    }
  }), l = computed(
    () => (y) => a.value[y] ? a.value[y].month : 0
  ), c = computed(
    () => (y) => a.value[y] ? a.value[y].year : 0
  );
  return {
    calendars: a,
    time: t,
    modelValue: r,
    month: l,
    year: c
  };
};
var Jr = (e, n) => {
  const { defaultedMultiCalendars: a } = Se(n), { isDisabled: t, matchDate: r } = Et(n), l = ref(null), c = ref(P()), y = (o) => {
    !o.current && n.hideOffsetDates || (l.value = o.value);
  }, D = () => {
    l.value = null;
  }, S = (o) => Array.isArray(e.value) && n.range && e.value[0] && l.value ? o ? Re(l.value, e.value[0]) : Pe(l.value, e.value[0]) : true, g = (o, $) => {
    const X = () => e.value ? $ ? e.value[0] || null : e.value[1] : null, s = e.value && Array.isArray(e.value) ? X() : null;
    return ge(P(o.value), s);
  }, Y = (o) => {
    const $ = Array.isArray(e.value) ? e.value[0] : null;
    return o ? !Pe(l.value ?? null, $) : true;
  }, R = (o, $ = true) => (n.range || n.weekPicker) && Array.isArray(e.value) && e.value.length === 2 ? n.hideOffsetDates && !o.current ? false : ge(P(o.value), e.value[$ ? 0 : 1]) : n.range ? g(o, $) && Y($) || ge(o.value, Array.isArray(e.value) ? e.value[0] : null) && S($) : false, G = (o, $, X) => Array.isArray(e.value) && e.value[0] && e.value.length === 1 ? o ? false : X ? Re(e.value[0], $.value) : Pe(e.value[0], $.value) : false, q = (o) => !e.value || n.hideOffsetDates && !o.current ? false : n.range ? n.modelAuto && Array.isArray(e.value) ? ge(o.value, e.value[0] ? e.value[0] : c.value) : false : n.multiDates && Array.isArray(e.value) ? e.value.some(($) => ge($, o.value)) : ge(o.value, e.value ? e.value : c.value), J = (o) => {
    if (n.autoRange || n.weekPicker) {
      if (l.value) {
        if (n.hideOffsetDates && !o.current)
          return false;
        const $ = addDays(l.value, +n.autoRange), X = jt(P(l.value), n.timezone, n.weekStart);
        return n.weekPicker ? ge(X[1], P(o.value)) : ge($, P(o.value));
      }
      return false;
    }
    return false;
  }, Q = (o) => {
    if (n.autoRange || n.weekPicker) {
      if (l.value) {
        const $ = addDays(l.value, +n.autoRange);
        if (n.hideOffsetDates && !o.current)
          return false;
        const X = jt(P(l.value), n.timezone, n.weekStart);
        return n.weekPicker ? Re(o.value, X[0]) && Pe(o.value, X[1]) : Re(o.value, l.value) && Pe(o.value, $);
      }
      return false;
    }
    return false;
  }, p = (o) => {
    if (n.autoRange || n.weekPicker) {
      if (l.value) {
        if (n.hideOffsetDates && !o.current)
          return false;
        const $ = jt(P(l.value), n.timezone, n.weekStart);
        return n.weekPicker ? ge($[0], o.value) : ge(l.value, o.value);
      }
      return false;
    }
    return false;
  }, M = (o) => Hn(e.value, l.value, o.value), E = () => n.modelAuto && Array.isArray(n.internalModelValue) ? !!n.internalModelValue[0] : false, z = () => n.modelAuto ? $a(n.internalModelValue) : true, K = (o) => {
    if (Array.isArray(e.value) && e.value.length || n.weekPicker)
      return false;
    const $ = n.range ? !R(o) && !R(o, false) : true;
    return !t(o.value) && !q(o) && !(!o.current && n.hideOffsetDates) && $;
  }, _ = (o) => n.range ? n.modelAuto ? E() && q(o) : false : q(o), re = (o) => {
    var $;
    return n.highlight ? r(
      o.value,
      ($ = n.arrMapValues) != null && $.highlightedDates ? n.arrMapValues.highlightedDates : n.highlight
    ) : false;
  }, x = (o) => t(o.value) && n.highlightDisabledDays === false, L = (o) => {
    var $;
    return ($ = n.highlightWeekDays) == null ? void 0 : $.includes(o.value.getDay());
  }, h2 = (o) => (n.range || n.weekPicker) && (!(a.value.count > 0) || o.current) && z() && !(!o.current && n.hideOffsetDates) && !q(o) ? M(o) : false, T = (o) => {
    const { isRangeStart: $, isRangeEnd: X } = v(o), s = n.range ? $ || X : false;
    return {
      dp__cell_offset: !o.current,
      dp__pointer: !n.disabled && !(!o.current && n.hideOffsetDates) && !t(o.value),
      dp__cell_disabled: t(o.value),
      dp__cell_highlight: !x(o) && (re(o) || L(o)) && !_(o) && !s,
      dp__cell_highlight_active: !x(o) && (re(o) || L(o)) && _(o),
      dp__today: !n.noToday && ge(o.value, c.value) && o.current
    };
  }, H = (o) => ({
    dp__active_date: _(o),
    dp__date_hover: K(o)
  }), ee = (o) => ({
    ...I(o),
    ...f(o),
    dp__range_between_week: h2(o) && n.weekPicker
  }), v = (o) => {
    const $ = a.value.count > 0 ? o.current && R(o) && z() : R(o) && z(), X = a.value.count > 0 ? o.current && R(o, false) && z() : R(o, false) && z();
    return { isRangeStart: $, isRangeEnd: X };
  }, I = (o) => {
    const { isRangeStart: $, isRangeEnd: X } = v(o);
    return {
      dp__range_start: $,
      dp__range_end: X,
      dp__range_between: h2(o) && !n.weekPicker,
      dp__date_hover_start: G(K(o), o, true),
      dp__date_hover_end: G(K(o), o, false)
    };
  }, f = (o) => ({
    ...I(o),
    dp__cell_auto_range: Q(o),
    dp__cell_auto_range_start: p(o),
    dp__cell_auto_range_end: J(o)
  }), k = (o) => n.range ? n.autoRange ? f(o) : n.modelAuto ? { ...H(o), ...I(o) } : I(o) : n.weekPicker ? ee(o) : H(o);
  return {
    setHoverDate: y,
    clearHoverDate: D,
    getDayClassData: (o) => n.hideOffsetDates && !o.current ? {} : {
      ...T(o),
      ...k(o),
      [n.dayClass ? n.dayClass(o.value) : ""]: true,
      [n.calendarCellClassName]: !!n.calendarCellClassName
    }
  };
};
var Et = (e) => {
  const { defaultedFilters: n } = Se(e), a = () => {
    if (e.timezone)
      return e.timezone;
    if (e.utc)
      return "UTC";
  }, t = (h2) => {
    const T = He(r(P(h2))).toISOString(), [H] = T.split("T");
    return H;
  }, r = (h2) => e.utc === "preserve" ? Sa(h2, a()) : Ge(h2, a()), l = (h2) => {
    var $;
    const T = e.maxDate ? Re(r(h2), r(P(e.maxDate))) : false, H = e.minDate ? Pe(r(h2), r(P(e.minDate))) : false, ee = S(
      r(h2),
      ($ = e.arrMapValues) != null && $.disabledDates ? e.arrMapValues.disabledDates : e.disabledDates
    ), I = n.value.months.map((X) => +X).includes(getMonth(h2)), f = e.disabledWeekDays.length ? e.disabledWeekDays.some((X) => +X === getDay(h2)) : false, k = Y(h2), d = getYear(h2), o = d < +e.yearRange[0] || d > +e.yearRange[1];
    return !(T || H || ee || I || o || f || k);
  }, c = (h2, T) => Pe(...et(e.minDate, h2, T)) || ge(...et(e.minDate, h2, T)), y = (h2, T) => Re(...et(e.maxDate, h2, T)) || ge(...et(e.maxDate, h2, T)), D = (h2, T, H) => {
    let ee = false;
    return e.maxDate && H && y(h2, T) && (ee = true), e.minDate && !H && c(h2, T) && (ee = true), ee;
  }, S = (h2, T) => h2 ? T instanceof Map ? !!T.get(t(h2)) : Array.isArray(T) ? T.some((H) => ge(r(P(H)), r(h2))) : T ? T(P(JSON.parse(JSON.stringify(h2)))) : false : true, g = (h2, T, H, ee) => {
    let v = false;
    return ee ? e.minDate && e.maxDate ? v = D(h2, T, H) : (e.minDate && c(h2, T) || e.maxDate && y(h2, T)) && (v = true) : v = true, v;
  }, Y = (h2) => {
    var T, H, ee, v, I;
    return Array.isArray(e.allowedDates) && !((T = e.allowedDates) != null && T.length) ? true : (H = e.arrMapValues) != null && H.allowedDates ? !S(h2, (ee = e.arrMapValues) == null ? void 0 : ee.allowedDates) : (v = e.allowedDates) != null && v.length ? !((I = e.allowedDates) != null && I.some((f) => ge(r(P(f)), r(h2)))) : false;
  }, R = (h2) => !l(h2), G = (h2) => e.noDisabledRange ? !eachDayOfInterval({ start: h2[0], end: h2[1] }).some((H) => R(H)) : true, q = (h2, T, H = 0) => {
    if (Array.isArray(T) && T[H]) {
      const ee = differenceInCalendarDays(h2, T[H]), v = _a(T[H], h2), I = v.length === 1 ? 0 : v.filter((k) => R(k)).length, f = Math.abs(ee) - I;
      if (e.minRange && e.maxRange)
        return f >= +e.minRange && f <= +e.maxRange;
      if (e.minRange)
        return f >= +e.minRange;
      if (e.maxRange)
        return f <= +e.maxRange;
    }
    return true;
  }, J = (h2) => new Map(h2.map((T) => [t(T), true])), Q = (h2) => Array.isArray(h2) && h2.length > 0, p = () => {
    const h2 = {
      disabledDates: null,
      allowedDates: null,
      highlightedDates: null
    };
    return Q(e.allowedDates) && (h2.allowedDates = J(e.allowedDates)), Q(e.highlight) && (h2.highlightedDates = J(e.highlight)), Q(e.disabledDates) && (h2.disabledDates = J(e.disabledDates)), h2;
  }, M = () => !e.enableTimePicker || e.monthPicker || e.yearPicker || e.ignoreTimeValidation, E = (h2) => Array.isArray(h2) ? [h2[0] ? mn(h2[0]) : null, h2[1] ? mn(h2[1]) : null] : mn(h2), z = (h2, T, H) => h2.find(
    (ee) => +ee.hours === getHours(T) && ee.minutes === "*" ? true : +ee.minutes === getMinutes(T)
  ) && H, K = (h2, T, H) => {
    const [ee, v] = h2, [I, f] = T;
    return !z(ee, I, H) && !z(v, f, H) && H;
  }, _ = (h2, T) => {
    const H = Array.isArray(T) ? T : [T];
    return Array.isArray(e.disabledTimes) ? Array.isArray(e.disabledTimes[0]) ? K(e.disabledTimes, H, h2) : !H.some((ee) => z(e.disabledTimes, ee, h2)) : h2;
  }, re = (h2, T) => {
    const H = Array.isArray(T) ? [vt(T[0]), T[1] ? vt(T[1]) : void 0] : vt(T), ee = !e.disabledTimes(H);
    return h2 && ee;
  }, x = (h2, T) => e.disabledTimes ? Array.isArray(e.disabledTimes) ? _(T, h2) : re(T, h2) : T;
  return {
    isDisabled: R,
    validateDate: l,
    validateMonthYearInRange: g,
    isDateRangeAllowed: G,
    checkMinMaxRange: q,
    matchDate: S,
    mapDatesArrToMap: p,
    isValidTime: (h2) => {
      let T = true;
      if (!h2 || M())
        return true;
      const H = !e.minDate && !e.maxDate ? E(h2) : h2;
      return (e.maxTime || e.maxDate) && (T = oa(e.maxTime, e.maxDate, "max", $e(H), T)), (e.minTime || e.minDate) && (T = oa(e.minTime, e.minDate, "min", $e(H), T)), x(h2, T);
    }
  };
};
var qt = () => {
  const e = computed(() => (t, r) => t == null ? void 0 : t.includes(r)), n = computed(() => (t, r) => t.count ? t.solo ? true : r === 0 : true), a = computed(() => (t, r) => t.count ? t.solo ? true : r === t.count - 1 : true);
  return { hideNavigationButtons: e, showLeftIcon: n, showRightIcon: a };
};
var xr = (e, n, a) => {
  const t = ref(0), r = reactive({
    // monthYearInput: !!props.timePicker,
    [mt.timePicker]: !e.enableTimePicker || e.timePicker || e.monthPicker,
    [mt.calendar]: false,
    [mt.header]: false
  }), l = (g) => {
    var Y;
    (Y = e.flow) != null && Y.length && (r[g] = true, Object.keys(r).filter((R) => !r[R]).length || S());
  }, c = () => {
    var g;
    (g = e.flow) != null && g.length && t.value !== -1 && (t.value += 1, n("flow-step", t.value), S());
  }, y = () => {
    t.value = -1;
  }, D = (g, Y, ...R) => {
    e.flow[t.value] === g && a.value && a.value[Y](...R);
  }, S = () => {
    D(je.month, "toggleMonthPicker", true), D(je.year, "toggleYearPicker", true), D(je.calendar, "toggleTimePicker", false, true), D(je.time, "toggleTimePicker", true, true);
    const g = e.flow[t.value];
    (g === je.hours || g === je.minutes || g === je.seconds) && D(g, "toggleTimePicker", true, true, g);
  };
  return { childMount: l, updateFlowStep: c, resetFlow: y, flowStep: t };
};
var Xt = {
  multiCalendars: { type: [Boolean, Number, String, Object], default: void 0 },
  modelValue: { type: [String, Date, Array, Object, Number], default: null },
  modelType: { type: String, default: null },
  position: { type: String, default: "center" },
  dark: { type: Boolean, default: false },
  format: {
    type: [String, Function],
    default: () => null
  },
  closeOnScroll: { type: Boolean, default: false },
  autoPosition: { type: Boolean, default: true },
  closeOnAutoApply: { type: Boolean, default: true },
  altPosition: { type: Function, default: null },
  transitions: { type: [Boolean, Object], default: true },
  formatLocale: { type: Object, default: null },
  utc: { type: [Boolean, String], default: false },
  ariaLabels: { type: Object, default: () => ({}) },
  offset: { type: [Number, String], default: 10 },
  hideNavigation: { type: Array, default: () => [] },
  timezone: { type: String, default: null },
  emitTimezone: { type: String, default: null },
  vertical: { type: Boolean, default: false },
  disableMonthYearSelect: { type: Boolean, default: false },
  disableYearSelect: { type: Boolean, default: false },
  menuClassName: { type: String, default: null },
  dayClass: { type: Function, default: null },
  yearRange: { type: Array, default: () => [1900, 2100] },
  calendarCellClassName: { type: String, default: null },
  enableTimePicker: { type: Boolean, default: true },
  autoApply: { type: Boolean, default: false },
  disabledDates: { type: [Array, Function], default: () => [] },
  monthNameFormat: { type: String, default: "short" },
  startDate: { type: [Date, String], default: null },
  startTime: { type: [Object, Array], default: null },
  hideOffsetDates: { type: Boolean, default: false },
  autoRange: { type: [Number, String], default: null },
  noToday: { type: Boolean, default: false },
  disabledWeekDays: { type: Array, default: () => [] },
  allowedDates: { type: Array, default: null },
  nowButtonLabel: { type: String, default: "Now" },
  markers: { type: Array, default: () => [] },
  modeHeight: { type: [Number, String], default: 255 },
  escClose: { type: Boolean, default: true },
  spaceConfirm: { type: Boolean, default: true },
  monthChangeOnArrows: { type: Boolean, default: true },
  presetDates: { type: Array, default: () => [] },
  flow: { type: Array, default: () => [] },
  partialFlow: { type: Boolean, default: false },
  preventMinMaxNavigation: { type: Boolean, default: false },
  minRange: { type: [Number, String], default: null },
  maxRange: { type: [Number, String], default: null },
  multiDatesLimit: { type: [Number, String], default: null },
  reverseYears: { type: Boolean, default: false },
  keepActionRow: { type: Boolean, default: false },
  weekPicker: { type: Boolean, default: false },
  filters: { type: Object, default: () => ({}) },
  arrowNavigation: { type: Boolean, default: false },
  disableTimeRangeValidation: { type: Boolean, default: false },
  highlight: {
    type: [Array, Function],
    default: null
  },
  highlightWeekDays: {
    type: Array,
    default: null
  },
  highlightDisabledDays: { type: Boolean, default: false },
  teleport: { type: [String, Boolean], default: null },
  teleportCenter: { type: Boolean, default: false },
  locale: { type: String, default: "en-Us" },
  weekNumName: { type: String, default: "W" },
  weekStart: { type: [Number, String], default: 1 },
  weekNumbers: {
    type: [String, Function],
    default: null
  },
  calendarClassName: { type: String, default: null },
  noSwipe: { type: Boolean, default: false },
  monthChangeOnScroll: { type: [Boolean, String], default: true },
  dayNames: {
    type: [Function, Array],
    default: null
  },
  monthPicker: { type: Boolean, default: false },
  customProps: { type: Object, default: null },
  yearPicker: { type: Boolean, default: false },
  modelAuto: { type: Boolean, default: false },
  selectText: { type: String, default: "Select" },
  cancelText: { type: String, default: "Cancel" },
  previewFormat: {
    type: [String, Function],
    default: () => ""
  },
  multiDates: { type: Boolean, default: false },
  partialRange: { type: Boolean, default: true },
  ignoreTimeValidation: { type: Boolean, default: false },
  minDate: { type: [Date, String], default: null },
  maxDate: { type: [Date, String], default: null },
  minTime: { type: Object, default: null },
  maxTime: { type: Object, default: null },
  name: { type: String, default: null },
  placeholder: { type: String, default: "" },
  hideInputIcon: { type: Boolean, default: false },
  clearable: { type: Boolean, default: true },
  state: { type: Boolean, default: null },
  required: { type: Boolean, default: false },
  autocomplete: { type: String, default: "off" },
  inputClassName: { type: String, default: null },
  fixedStart: { type: Boolean, default: false },
  fixedEnd: { type: Boolean, default: false },
  timePicker: { type: Boolean, default: false },
  enableSeconds: { type: Boolean, default: false },
  is24: { type: Boolean, default: true },
  noHoursOverlay: { type: Boolean, default: false },
  noMinutesOverlay: { type: Boolean, default: false },
  noSecondsOverlay: { type: Boolean, default: false },
  hoursGridIncrement: { type: [String, Number], default: 1 },
  minutesGridIncrement: { type: [String, Number], default: 5 },
  secondsGridIncrement: { type: [String, Number], default: 5 },
  hoursIncrement: { type: [Number, String], default: 1 },
  minutesIncrement: { type: [Number, String], default: 1 },
  secondsIncrement: { type: [Number, String], default: 1 },
  range: { type: Boolean, default: false },
  uid: { type: String, default: null },
  disabled: { type: Boolean, default: false },
  readonly: { type: Boolean, default: false },
  inline: { type: [Boolean, Object], default: false },
  textInput: { type: [Boolean, Object], default: false },
  onClickOutside: { type: Function, default: null },
  noDisabledRange: { type: Boolean, default: false },
  sixWeeks: { type: [Boolean, String], default: false },
  actionRow: { type: Object, default: () => ({}) },
  allowPreventDefault: { type: Boolean, default: false },
  closeOnClearValue: { type: Boolean, default: true },
  focusStartDate: { type: Boolean, default: false },
  disabledTimes: { type: [Function, Array], default: void 0 },
  showLastInRange: { type: Boolean, default: true },
  timePickerInline: { type: Boolean, default: false },
  calendar: { type: Function, default: null },
  config: { type: Object, default: void 0 }
};
var xe = {
  ...Xt,
  shadow: { type: Boolean, default: false },
  flowStep: { type: Number, default: 0 },
  internalModelValue: { type: [Date, Array], default: null },
  arrMapValues: { type: Object, default: () => ({}) }
};
var Qr = {
  key: 1,
  class: "dp__input_wrap"
};
var el = ["id", "name", "inputmode", "placeholder", "disabled", "readonly", "required", "value", "autocomplete", "aria-label", "aria-disabled", "aria-invalid", "onKeydown"];
var tl = {
  key: 2,
  class: "dp__clear_icon"
};
var nl = defineComponent({
  compatConfig: {
    MODE: 3
  },
  __name: "DatepickerInput",
  props: {
    isMenuOpen: { type: Boolean, default: false },
    inputValue: { type: String, default: "" },
    ...Xt
  },
  emits: [
    "clear",
    "open",
    "update:input-value",
    "set-input-date",
    "close",
    "select-date",
    "set-empty-date",
    "toggle",
    "focus-prev",
    "focus",
    "blur",
    "real-blur"
  ],
  setup(e, { expose: n, emit: a }) {
    const t = e, {
      defaultedTextInput: r,
      defaultedAriaLabels: l,
      defaultedInline: c,
      defaultedConfig: y,
      getDefaultPattern: D,
      getDefaultStartTime: S
    } = Se(t), g = ref(), Y = ref(null), R = ref(false), G = ref(false), q = computed(
      () => ({
        dp__pointer: !t.disabled && !t.readonly && !r.value.enabled,
        dp__disabled: t.disabled,
        dp__input_readonly: !r.value.enabled,
        dp__input: true,
        dp__input_icon_pad: !t.hideInputIcon,
        dp__input_valid: !!t.state,
        dp__input_invalid: t.state === false,
        dp__input_focus: R.value || t.isMenuOpen,
        dp__input_reg: !r.value.enabled,
        [t.inputClassName]: !!t.inputClassName
      })
    ), J = () => {
      a("set-input-date", null), t.autoApply && (a("set-empty-date"), g.value = null);
    }, Q = (v) => {
      const I = S();
      return Cr(
        v,
        r.value.format ?? D(),
        I ?? Pa({}, t.enableSeconds),
        t.inputValue,
        G.value
      );
    }, p = (v) => {
      const { rangeSeparator: I } = r.value, [f, k] = v.split(`${I}`);
      if (f) {
        const d = Q(f.trim()), o = k ? Q(k.trim()) : null, $ = d && o ? [d, o] : [d];
        g.value = d ? $ : null;
      }
    }, M = () => {
      G.value = true;
    }, E = (v) => {
      if (t.range)
        p(v);
      else if (t.multiDates) {
        const I = v.split(";");
        g.value = I.map((f) => Q(f.trim())).filter((f) => f);
      } else
        g.value = Q(v);
    }, z = (v) => {
      var f;
      const I = typeof v == "string" ? v : (f = v.target) == null ? void 0 : f.value;
      I !== "" ? (r.value.openMenu && !t.isMenuOpen && a("open"), E(I), a("set-input-date", g.value)) : J(), G.value = false, a("update:input-value", I);
    }, K = (v) => {
      r.value.enabled ? (E(v.target.value), r.value.enterSubmit && Sn(g.value) && t.inputValue !== "" ? (a("set-input-date", g.value, true), g.value = null) : r.value.enterSubmit && t.inputValue === "" && (g.value = null, a("clear"))) : x(v);
    }, _ = (v) => {
      r.value.enabled && r.value.tabSubmit && E(v.target.value), r.value.tabSubmit && Sn(g.value) && t.inputValue !== "" ? (a("set-input-date", g.value, true), g.value = null) : r.value.tabSubmit && t.inputValue === "" && (g.value = null, a("clear"));
    }, re = () => {
      R.value = true, a("focus");
    }, x = (v) => {
      v.preventDefault(), tt(v, y.value, true), r.value.enabled && r.value.openMenu && !c.value.input && !t.isMenuOpen ? a("open") : r.value.enabled || a("toggle");
    }, L = () => {
      a("real-blur"), R.value = false, (!t.isMenuOpen || c.value.enabled && c.value.input) && a("blur"), t.autoApply && r.value.enabled && g.value && !t.isMenuOpen && (a("set-input-date", g.value), a("select-date"), g.value = null);
    }, h2 = (v) => {
      tt(v, y.value, true), a("clear");
    }, T = (v) => {
      if (!r.value.enabled) {
        if (v.code === "Tab")
          return;
        v.preventDefault();
      }
    };
    return n({
      focusInput: () => {
        var v;
        (v = Y.value) == null || v.focus({ preventScroll: true });
      },
      setParsedDate: (v) => {
        g.value = v;
      }
    }), (v, I) => {
      var f;
      return openBlock(), createElementBlock("div", { onClick: x }, [
        v.$slots.trigger && !v.$slots["dp-input"] && !unref(c).enabled ? renderSlot(v.$slots, "trigger", { key: 0 }) : createCommentVNode("", true),
        !v.$slots.trigger && (!unref(c).enabled || unref(c).input) ? (openBlock(), createElementBlock("div", Qr, [
          v.$slots["dp-input"] && !v.$slots.trigger && !unref(c).enabled ? renderSlot(v.$slots, "dp-input", {
            key: 0,
            value: e.inputValue,
            isMenuOpen: e.isMenuOpen,
            onInput: z,
            onEnter: K,
            onTab: _,
            onClear: h2,
            onBlur: L,
            onKeypress: T,
            onPaste: M
          }) : createCommentVNode("", true),
          v.$slots["dp-input"] ? createCommentVNode("", true) : (openBlock(), createElementBlock("input", {
            key: 1,
            ref_key: "inputRef",
            ref: Y,
            id: v.uid ? `dp-input-${v.uid}` : void 0,
            name: v.name,
            class: normalizeClass(q.value),
            inputmode: unref(r).enabled ? "text" : "none",
            placeholder: v.placeholder,
            disabled: v.disabled,
            readonly: v.readonly,
            required: v.required,
            value: e.inputValue,
            autocomplete: v.autocomplete,
            "aria-label": (f = unref(l)) == null ? void 0 : f.input,
            "aria-disabled": v.disabled || void 0,
            "aria-invalid": v.state === false ? true : void 0,
            onInput: z,
            onKeydown: [
              withKeys(K, ["enter"]),
              withKeys(_, ["tab"]),
              T
            ],
            onBlur: L,
            onFocus: re,
            onKeypress: T,
            onPaste: M
          }, null, 42, el)),
          createBaseVNode("div", {
            onClick: I[2] || (I[2] = (k) => a("toggle"))
          }, [
            v.$slots["input-icon"] && !v.hideInputIcon ? (openBlock(), createElementBlock("span", {
              key: 0,
              class: "dp__input_icon",
              onClick: I[0] || (I[0] = (k) => a("toggle"))
            }, [
              renderSlot(v.$slots, "input-icon")
            ])) : createCommentVNode("", true),
            !v.$slots["input-icon"] && !v.hideInputIcon && !v.$slots["dp-input"] ? (openBlock(), createBlock(unref(It), {
              key: 1,
              onClick: I[1] || (I[1] = (k) => a("toggle")),
              class: "dp__input_icon dp__input_icons"
            })) : createCommentVNode("", true)
          ]),
          v.$slots["clear-icon"] && e.inputValue && v.clearable && !v.disabled && !v.readonly ? (openBlock(), createElementBlock("span", tl, [
            renderSlot(v.$slots, "clear-icon", { clear: h2 })
          ])) : createCommentVNode("", true),
          v.clearable && !v.$slots["clear-icon"] && e.inputValue && !v.disabled && !v.readonly ? (openBlock(), createBlock(unref(ba), {
            key: 3,
            class: "dp__clear_icon dp__input_icons",
            onClick: I[3] || (I[3] = withModifiers((k) => h2(k), ["prevent"]))
          })) : createCommentVNode("", true)
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
var al = ["title"];
var rl = { class: "dp__action_buttons" };
var ll = ["onKeydown", "disabled"];
var ol = defineComponent({
  compatConfig: {
    MODE: 3
  },
  __name: "ActionRow",
  props: {
    menuMount: { type: Boolean, default: false },
    calendarWidth: { type: Number, default: 0 },
    ...xe
  },
  emits: ["close-picker", "select-date", "select-now", "invalid-select"],
  setup(e, { emit: n }) {
    const a = e, {
      defaultedActionRow: t,
      defaultedPreviewFormat: r,
      defaultedMultiCalendars: l,
      defaultedTextInput: c,
      defaultedInline: y,
      getDefaultPattern: D
    } = Se(a), { isValidTime: S } = Et(a), { buildMatrix: g } = lt(), Y = ref(null), R = ref(null);
    onMounted(() => {
      a.arrowNavigation && g([Ae(Y), Ae(R)], "actionRow");
    });
    const G = computed(() => a.range && !a.partialRange && a.internalModelValue ? a.internalModelValue.length === 2 : true), q = computed(() => !J.value || !Q.value || !G.value), J = computed(() => !a.enableTimePicker || a.ignoreTimeValidation ? true : S(a.internalModelValue)), Q = computed(() => a.monthPicker ? a.range && Array.isArray(a.internalModelValue) ? !a.internalModelValue.filter((h2) => !re(h2)).length : re(a.internalModelValue) : true), p = () => {
      const L = r.value;
      return a.timePicker || a.monthPicker, L($e(a.internalModelValue));
    }, M = () => {
      const L = a.internalModelValue;
      return l.value.count > 0 ? `${E(L[0])} - ${E(L[1])}` : [E(L[0]), E(L[1])];
    }, E = (L) => Ra(
      L,
      r.value,
      a.formatLocale,
      c.value.rangeSeparator,
      a.modelAuto,
      D()
    ), z = computed(() => !a.internalModelValue || !a.menuMount ? "" : typeof r.value == "string" ? Array.isArray(a.internalModelValue) ? a.internalModelValue.length === 2 && a.internalModelValue[1] ? M() : a.multiDates ? a.internalModelValue.map((L) => `${E(L)}`) : a.modelAuto ? `${E(a.internalModelValue[0])}` : `${E(a.internalModelValue[0])} -` : E(a.internalModelValue) : p()), K = () => a.multiDates ? "; " : " - ", _ = computed(
      () => Array.isArray(z.value) ? z.value.join(K()) : z.value
    ), re = (L) => {
      if (!a.monthPicker)
        return true;
      let h2 = true;
      const T = P(We(L));
      if (a.minDate && a.maxDate) {
        const H = P(We(a.minDate)), ee = P(We(a.maxDate));
        return Re(T, H) && Pe(T, ee) || ge(T, H) || ge(T, ee);
      }
      if (a.minDate) {
        const H = P(We(a.minDate));
        h2 = Re(T, H) || ge(T, H);
      }
      if (a.maxDate) {
        const H = P(We(a.maxDate));
        h2 = Pe(T, H) || ge(T, H);
      }
      return h2;
    }, x = () => {
      J.value && Q.value && G.value ? n("select-date") : n("invalid-select");
    };
    return (L, h2) => (openBlock(), createElementBlock("div", {
      class: "dp__action_row",
      style: normalizeStyle(e.calendarWidth ? { width: `${e.calendarWidth}px` } : {})
    }, [
      L.$slots["action-row"] ? renderSlot(L.$slots, "action-row", normalizeProps(mergeProps({ key: 0 }, {
        internalModelValue: L.internalModelValue,
        disabled: q.value,
        selectDate: () => L.$emit("select-date"),
        closePicker: () => L.$emit("close-picker")
      }))) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
        unref(t).showPreview ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "dp__selection_preview",
          title: _.value
        }, [
          L.$slots["action-preview"] ? renderSlot(L.$slots, "action-preview", {
            key: 0,
            value: L.internalModelValue
          }) : createCommentVNode("", true),
          L.$slots["action-preview"] ? createCommentVNode("", true) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            createTextVNode(toDisplayString(_.value), 1)
          ], 64))
        ], 8, al)) : createCommentVNode("", true),
        createBaseVNode("div", rl, [
          L.$slots["action-buttons"] ? renderSlot(L.$slots, "action-buttons", {
            key: 0,
            value: L.internalModelValue
          }) : createCommentVNode("", true),
          L.$slots["action-buttons"] ? createCommentVNode("", true) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            !unref(y).enabled && unref(t).showCancel ? (openBlock(), createElementBlock("button", {
              key: 0,
              type: "button",
              ref_key: "cancelButtonRef",
              ref: Y,
              class: "dp__action_button dp__action_cancel",
              onClick: h2[0] || (h2[0] = (T) => L.$emit("close-picker")),
              onKeydown: [
                h2[1] || (h2[1] = withKeys((T) => L.$emit("close-picker"), ["enter"])),
                h2[2] || (h2[2] = withKeys((T) => L.$emit("close-picker"), ["space"]))
              ]
            }, toDisplayString(L.cancelText), 545)) : createCommentVNode("", true),
            unref(t).showNow ? (openBlock(), createElementBlock("button", {
              key: 1,
              type: "button",
              ref_key: "cancelButtonRef",
              ref: Y,
              class: "dp__action_button dp__action_cancel",
              onClick: h2[3] || (h2[3] = (T) => L.$emit("select-now")),
              onKeydown: [
                h2[4] || (h2[4] = withKeys((T) => L.$emit("select-now"), ["enter"])),
                h2[5] || (h2[5] = withKeys((T) => L.$emit("select-now"), ["space"]))
              ]
            }, toDisplayString(L.nowButtonLabel), 545)) : createCommentVNode("", true),
            unref(t).showSelect ? (openBlock(), createElementBlock("button", {
              key: 2,
              type: "button",
              class: "dp__action_button dp__action_select",
              onKeydown: [
                withKeys(x, ["enter"]),
                withKeys(x, ["space"])
              ],
              onClick: x,
              disabled: q.value,
              ref_key: "selectButtonRef",
              ref: R
            }, toDisplayString(L.selectText), 41, ll)) : createCommentVNode("", true)
          ], 64))
        ])
      ], 64))
    ], 4));
  }
});
var sl = ["onKeydown"];
var ul = { class: "dp__selection_grid_header" };
var il = ["aria-selected", "aria-disabled", "onClick", "onKeydown", "onMouseover"];
var dl = ["aria-label", "onKeydown"];
var Ot = defineComponent({
  __name: "SelectionOverlay",
  props: {
    items: {},
    type: {},
    isLast: { type: Boolean },
    arrowNavigation: { type: Boolean },
    skipButtonRef: { type: Boolean },
    headerRefs: {},
    hideNavigation: {},
    escClose: { type: Boolean },
    useRelative: { type: Boolean },
    height: {},
    textInput: { type: [Boolean, Object] },
    config: {}
  },
  emits: ["selected", "toggle", "reset-flow", "hover-value"],
  setup(e, { expose: n, emit: a }) {
    const t = e, { setSelectionGrid: r, buildMultiLevelMatrix: l, setMonthPicker: c } = lt(), { defaultedAriaLabels: y, defaultedTextInput: D, defaultedConfig: S } = Se(
      t
    ), { hideNavigationButtons: g } = qt(), Y = ref(false), R = ref(null), G = ref(null), q = ref([]), J = ref(), Q = ref(null), p = ref(0), M = ref(null);
    onBeforeUpdate(() => {
      R.value = null;
    }), onMounted(() => {
      nextTick().then(() => h2()), z(), E(true);
    }), onUnmounted(() => E(false));
    const E = (d) => {
      var o;
      t.arrowNavigation && ((o = t.headerRefs) != null && o.length ? c(d) : r(d));
    }, z = () => {
      var o;
      const d = Ae(G);
      d && (D.value.enabled || (R.value ? (o = R.value) == null || o.focus({ preventScroll: true }) : d.focus({ preventScroll: true })), Y.value = d.clientHeight < d.scrollHeight);
    }, K = computed(
      () => ({
        dp__overlay: true,
        "dp--overlay-absolute": !t.useRelative,
        "dp--overlay-relative": t.useRelative
      })
    ), _ = computed(
      () => t.useRelative ? { height: `${t.height}px`, width: "260px" } : void 0
    ), re = computed(() => ({
      dp__overlay_col: true
    })), x = computed(
      () => ({
        dp__btn: true,
        dp__button: true,
        dp__overlay_action: true,
        dp__over_action_scroll: Y.value,
        dp__button_bottom: t.isLast
      })
    ), L = computed(() => {
      var d, o;
      return {
        dp__overlay_container: true,
        dp__container_flex: ((d = t.items) == null ? void 0 : d.length) <= 6,
        dp__container_block: ((o = t.items) == null ? void 0 : o.length) > 6
      };
    }), h2 = () => {
      nextTick().then(() => {
        const d = Ae(R), o = Ae(G), $ = Ae(Q), X = Ae(M), s = $ ? $.getBoundingClientRect().height : 0;
        o && (p.value = o.getBoundingClientRect().height - s), d && X && (X.scrollTop = d.offsetTop - X.offsetTop - (p.value / 2 - d.getBoundingClientRect().height) - s);
      });
    }, T = (d) => {
      d.disabled || a("selected", d.value);
    }, H = () => {
      a("toggle"), a("reset-flow");
    }, ee = () => {
      t.escClose && H();
    }, v = (d, o, $, X) => {
      d && (o.active && (R.value = d), t.arrowNavigation && (Array.isArray(q.value[$]) ? q.value[$][X] = d : q.value[$] = [d], I()));
    }, I = () => {
      var o, $;
      const d = (o = t.headerRefs) != null && o.length ? [t.headerRefs].concat(q.value) : q.value.concat([t.skipButtonRef ? [] : [Q.value]]);
      l($e(d), ($ = t.headerRefs) != null && $.length ? "monthPicker" : "selectionGrid");
    }, f = (d) => {
      t.arrowNavigation || tt(d, S.value, true);
    }, k = (d) => {
      J.value = d, a("hover-value", d);
    };
    return n({ focusGrid: z }), (d, o) => {
      var $;
      return openBlock(), createElementBlock("div", {
        ref_key: "gridWrapRef",
        ref: G,
        class: normalizeClass(K.value),
        style: normalizeStyle(_.value),
        role: "dialog",
        tabindex: "0",
        onKeydown: [
          withKeys(withModifiers(ee, ["prevent"]), ["esc"]),
          o[0] || (o[0] = withKeys(withModifiers((X) => f(X), ["prevent"]), ["left"])),
          o[1] || (o[1] = withKeys(withModifiers((X) => f(X), ["prevent"]), ["up"])),
          o[2] || (o[2] = withKeys(withModifiers((X) => f(X), ["prevent"]), ["down"])),
          o[3] || (o[3] = withKeys(withModifiers((X) => f(X), ["prevent"]), ["right"]))
        ]
      }, [
        createBaseVNode("div", {
          class: normalizeClass(L.value),
          ref_key: "containerRef",
          ref: M,
          role: "grid",
          style: normalizeStyle({ height: `${p.value}px` })
        }, [
          createBaseVNode("div", ul, [
            renderSlot(d.$slots, "header")
          ]),
          d.$slots.overlay ? renderSlot(d.$slots, "overlay", { key: 0 }) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(d.items, (X, s) => (openBlock(), createElementBlock("div", {
            class: normalizeClass(["dp__overlay_row", { dp__flex_row: d.items.length >= 3 }]),
            key: s,
            role: "row"
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(X, (u, C) => (openBlock(), createElementBlock("div", {
              role: "gridcell",
              class: normalizeClass(re.value),
              key: u.value,
              "aria-selected": u.active,
              "aria-disabled": u.disabled || void 0,
              ref_for: true,
              ref: (O) => v(O, u, s, C),
              tabindex: "0",
              onClick: (O) => T(u),
              onKeydown: [
                withKeys(withModifiers((O) => T(u), ["prevent"]), ["enter"]),
                withKeys(withModifiers((O) => T(u), ["prevent"]), ["space"])
              ],
              onMouseover: (O) => k(u.value)
            }, [
              createBaseVNode("div", {
                class: normalizeClass(u.className)
              }, [
                d.$slots.item ? renderSlot(d.$slots, "item", {
                  key: 0,
                  item: u
                }) : createCommentVNode("", true),
                d.$slots.item ? createCommentVNode("", true) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  createTextVNode(toDisplayString(u.text), 1)
                ], 64))
              ], 2)
            ], 42, il))), 128))
          ], 2))), 128))
        ], 6),
        d.$slots["button-icon"] ? withDirectives((openBlock(), createElementBlock("button", {
          key: 0,
          type: "button",
          "aria-label": ($ = unref(y)) == null ? void 0 : $.toggleOverlay,
          class: normalizeClass(x.value),
          tabindex: "0",
          ref_key: "toggleButton",
          ref: Q,
          onClick: H,
          onKeydown: [
            withKeys(H, ["enter"]),
            withKeys(H, ["tab"])
          ]
        }, [
          renderSlot(d.$slots, "button-icon")
        ], 42, dl)), [
          [vShow, !unref(g)(d.hideNavigation, d.type)]
        ]) : createCommentVNode("", true)
      ], 46, sl);
    };
  }
});
var Un = defineComponent({
  __name: "InstanceWrap",
  props: {
    multiCalendars: {},
    stretch: { type: Boolean }
  },
  setup(e) {
    const n = e, a = computed(
      () => n.multiCalendars > 0 ? [...Array(n.multiCalendars).keys()] : [0]
    ), t = computed(() => ({
      dp__instance_calendar: n.multiCalendars > 0
    }));
    return (r, l) => (openBlock(), createElementBlock("div", {
      class: normalizeClass({
        dp__menu_inner: !r.stretch,
        "dp--menu--inner-stretched": r.stretch,
        dp__flex_display: r.multiCalendars > 0
      })
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(a.value, (c, y) => (openBlock(), createElementBlock("div", {
        key: c,
        class: normalizeClass(t.value)
      }, [
        renderSlot(r.$slots, "default", {
          instance: c,
          index: y
        })
      ], 2))), 128))
    ], 2));
  }
});
var cl = ["aria-label", "aria-disabled"];
var St = defineComponent({
  compatConfig: {
    MODE: 3
  },
  __name: "ArrowBtn",
  props: {
    ariaLabel: {},
    disabled: { type: Boolean }
  },
  emits: ["activate", "set-ref"],
  setup(e, { emit: n }) {
    const a = ref(null);
    return onMounted(() => n("set-ref", a)), (t, r) => (openBlock(), createElementBlock("button", {
      type: "button",
      class: "dp__btn dp--arrow-btn-nav",
      onClick: r[0] || (r[0] = (l) => t.$emit("activate")),
      onKeydown: [
        r[1] || (r[1] = withKeys(withModifiers((l) => t.$emit("activate"), ["prevent"]), ["enter"])),
        r[2] || (r[2] = withKeys(withModifiers((l) => t.$emit("activate"), ["prevent"]), ["space"]))
      ],
      tabindex: "0",
      "aria-label": t.ariaLabel,
      "aria-disabled": t.disabled || void 0,
      ref_key: "elRef",
      ref: a
    }, [
      createBaseVNode("span", {
        class: normalizeClass(["dp__inner_nav", { dp__inner_nav_disabled: t.disabled }])
      }, [
        renderSlot(t.$slots, "default")
      ], 2)
    ], 40, cl));
  }
});
var Ln = (e, n, a) => {
  if (n.value && Array.isArray(n.value))
    if (n.value.some((t) => ge(e, t))) {
      const t = n.value.filter((r) => !ge(r, e));
      n.value = t.length ? t : null;
    } else
      (a && +a > n.value.length || !a) && n.value.push(e);
  else
    n.value = [e];
};
var Na = (e, n, a) => {
  let t = e.value ? e.value.slice() : [];
  return t.length === 2 && t[1] !== null && (t = []), t.length ? Pe(n, t[0]) ? (t.unshift(n), a("range-start", t[0]), a("range-start", t[1])) : (t[1] = n, a("range-end", n)) : (t = [n], a("range-start", n)), e.value = t, t;
};
var Wn = (e, n, a, t) => {
  e[0] && e[1] && a && n("auto-apply"), e[0] && !e[1] && t && a && n("auto-apply");
};
var fl = (e, n) => {
  const { defaultedMultiCalendars: a, defaultedAriaLabels: t, defaultedTransitions: r, defaultedConfig: l } = Se(e), { modelValue: c, year: y, month: D, calendars: S } = Zt(e, n), g = computed(() => Ma(e.formatLocale, e.locale, e.monthNameFormat)), Y = computed(() => Vn(e.yearRange, e.reverseYears)), R = ref(null), G = () => {
    for (let f = 0; f < a.value.count; f++)
      if (f === 0)
        S.value[f] = S.value[0];
      else {
        const k = set(P(), S.value[f - 1]);
        S.value[f] = { month: getMonth(k), year: getYear(addYears(k, f)) };
      }
  }, q = (f) => {
    if (!f)
      return G();
    const k = set(P(), S.value[f]);
    return S.value[0].year = getYear(subYears(k, a.value.count - 1)), G();
  }, J = (f) => e.focusStartDate ? f[0] : f[1] ? f[1] : f[0], Q = () => {
    if (c.value) {
      const f = Array.isArray(c.value) ? J(c.value) : c.value;
      S.value[0] = { month: getMonth(f), year: getYear(f) };
    }
  };
  onMounted(() => {
    Q(), a.value.count && G();
  });
  const p = computed(() => (f, k) => {
    const d = set(We(/* @__PURE__ */ new Date()), {
      month: D.value(f),
      year: y.value(f)
    });
    return Ca(d, e.maxDate, e.minDate, e.preventMinMaxNavigation, k);
  }), M = (f) => f ? { month: getMonth(f), year: getYear(f) } : { month: null, year: null }, E = () => c.value ? Array.isArray(c.value) ? c.value.map((f) => M(f)) : M(c.value) : M(), z = (f, k) => {
    const d = S.value[f], o = E();
    return Array.isArray(o) ? o.some(($) => $.year === (d == null ? void 0 : d.year) && $.month === k) : (d == null ? void 0 : d.year) === o.year && k === o.month;
  }, K = (f, k, d) => {
    var $, X;
    const o = E();
    return Array.isArray(o) ? y.value(k) === (($ = o[d]) == null ? void 0 : $.year) && f === ((X = o[d]) == null ? void 0 : X.month) : false;
  }, _ = (f, k) => {
    if (e.range) {
      const d = E();
      if (Array.isArray(c.value) && Array.isArray(d)) {
        const o = K(f, k, 0) || K(f, k, 1), $ = Je(We(P()), f, y.value(k));
        return Hn(c.value, R.value, $) && !o;
      }
      return false;
    }
    return false;
  }, re = computed(() => (f) => kt(g.value, (k) => {
    const d = z(f, k.value), o = Rt(
      k.value,
      Ta(y.value(f), e.minDate),
      Aa(y.value(f), e.maxDate)
    ) || Br(e.disabledDates, y.value(f)).includes(k.value), $ = _(k.value, f);
    return { active: d, disabled: o, isBetween: $ };
  })), x = computed(() => (f) => kt(Y.value, (k) => {
    const d = y.value(f) === k.value, o = Rt(k.value, wt(e.minDate), wt(e.maxDate));
    return { active: d, disabled: o };
  })), L = (f, k) => Je(We(P()), f, y.value(k)), h2 = (f, k) => {
    const d = c.value ? c.value : We(/* @__PURE__ */ new Date());
    c.value = Je(d, f, y.value(k)), n("auto-apply");
  }, T = (f, k) => {
    const d = Na(c, L(f, k), n);
    Wn(d, n, e.autoApply, e.modelAuto);
  }, H = (f, k) => {
    Ln(L(f, k), c, e.multiDatesLimit), n("auto-apply", true);
  };
  return {
    groupedMonths: re,
    groupedYears: x,
    year: y,
    isDisabled: p,
    defaultedMultiCalendars: a,
    defaultedAriaLabels: t,
    defaultedTransitions: r,
    defaultedConfig: l,
    setHoverDate: (f, k) => {
      R.value = L(f, k);
    },
    selectMonth: (f, k) => (S.value[k].month = f, e.multiDates ? H(f, k) : e.range ? T(f, k) : h2(f, k)),
    selectYear: (f, k) => {
      S.value[k].year = f, a.value.count && !a.value.solo && q(k);
    }
  };
};
var vl = { class: "dp__month_picker_header" };
var ml = ["aria-label", "onClick", "onKeydown"];
var gl = defineComponent({
  compatConfig: {
    MODE: 3
  },
  __name: "MonthPicker",
  props: {
    ...xe
  },
  emits: [
    "update:internal-model-value",
    "overlay-closed",
    "reset-flow",
    "range-start",
    "range-end",
    "auto-apply"
  ],
  setup(e, { emit: n }) {
    const a = e, {
      groupedMonths: t,
      groupedYears: r,
      year: l,
      isDisabled: c,
      defaultedMultiCalendars: y,
      defaultedAriaLabels: D,
      defaultedTransitions: S,
      defaultedConfig: g,
      setHoverDate: Y,
      selectMonth: R,
      selectYear: G
    } = fl(a, n), { transitionName: q, showTransition: J } = Bt(S), { showRightIcon: Q, showLeftIcon: p } = qt(), M = ref([false]), E = (_, re) => {
      G(_, re), K(re);
    }, z = (_, re = false) => {
      if (!c.value(_, re)) {
        const x = re ? l.value(_) + 1 : l.value(_) - 1;
        G(x, _);
      }
    }, K = (_, re = false, x) => {
      re || n("reset-flow"), x !== void 0 ? M.value[_] = x : M.value[_] = !M.value[_], M.value || n("overlay-closed");
    };
    return (_, re) => (openBlock(), createBlock(Un, {
      "multi-calendars": unref(y).count,
      stretch: ""
    }, {
      default: withCtx(({ instance: x }) => [
        _.$slots["month-year"] ? renderSlot(_.$slots, "month-year", normalizeProps(mergeProps({ key: 0 }, {
          year: unref(l),
          months: unref(t)(x),
          years: unref(r)(x),
          selectMonth: unref(R),
          selectYear: unref(G),
          instance: x
        }))) : (openBlock(), createBlock(Ot, {
          key: 1,
          items: unref(t)(x),
          "arrow-navigation": _.arrowNavigation,
          "is-last": _.autoApply && !_.keepActionRow && !unref(g).keepActionRow,
          "esc-close": _.escClose,
          height: _.modeHeight !== 255 ? _.modeHeight : unref(g).modeHeight,
          config: _.config,
          onSelected: (L) => unref(R)(L, x),
          onHoverValue: (L) => unref(Y)(L, x),
          "use-relative": "",
          type: "month"
        }, {
          header: withCtx(() => {
            var L, h2, T;
            return [
              createBaseVNode("div", vl, [
                unref(p)(unref(y), x) ? (openBlock(), createBlock(St, {
                  key: 0,
                  ref: "mpPrevIconRef",
                  "aria-label": (L = unref(D)) == null ? void 0 : L.prevYear,
                  disabled: unref(c)(x, false),
                  onActivate: (H) => z(x, false)
                }, {
                  default: withCtx(() => [
                    _.$slots["arrow-left"] ? renderSlot(_.$slots, "arrow-left", { key: 0 }) : createCommentVNode("", true),
                    _.$slots["arrow-left"] ? createCommentVNode("", true) : (openBlock(), createBlock(unref(Rn), { key: 1 }))
                  ]),
                  _: 2
                }, 1032, ["aria-label", "disabled", "onActivate"])) : createCommentVNode("", true),
                createBaseVNode("div", {
                  class: "dp--year-select",
                  role: "button",
                  ref: "mpYearButtonRef",
                  "aria-label": (h2 = unref(D)) == null ? void 0 : h2.openYearsOverlay,
                  tabindex: "0",
                  onClick: () => K(x, false),
                  onKeydown: withKeys(() => K(x, false), ["enter"])
                }, [
                  _.$slots.year ? renderSlot(_.$slots, "year", {
                    key: 0,
                    year: unref(l)(x)
                  }) : createCommentVNode("", true),
                  _.$slots.year ? createCommentVNode("", true) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                    createTextVNode(toDisplayString(unref(l)(x)), 1)
                  ], 64))
                ], 40, ml),
                unref(Q)(unref(y), x) ? (openBlock(), createBlock(St, {
                  key: 1,
                  ref: "mpNextIconRef",
                  "aria-label": (T = unref(D)) == null ? void 0 : T.nextYear,
                  disabled: unref(c)(x, false),
                  onActivate: (H) => z(x, true)
                }, {
                  default: withCtx(() => [
                    _.$slots["arrow-right"] ? renderSlot(_.$slots, "arrow-right", { key: 0 }) : createCommentVNode("", true),
                    _.$slots["arrow-right"] ? createCommentVNode("", true) : (openBlock(), createBlock(unref(On), { key: 1 }))
                  ]),
                  _: 2
                }, 1032, ["aria-label", "disabled", "onActivate"])) : createCommentVNode("", true),
                createVNode(Transition, {
                  name: unref(q)(M.value[x]),
                  css: unref(J)
                }, {
                  default: withCtx(() => [
                    M.value[x] ? (openBlock(), createBlock(Ot, {
                      key: 0,
                      items: unref(r)(x),
                      "text-input": _.textInput,
                      "esc-close": _.escClose,
                      config: _.config,
                      onToggle: (H) => K(x),
                      onSelected: (H) => E(H, x),
                      "is-last": _.autoApply && !_.keepActionRow && !unref(g).keepActionRow,
                      type: "year"
                    }, createSlots({
                      "button-icon": withCtx(() => [
                        _.$slots["calendar-icon"] ? renderSlot(_.$slots, "calendar-icon", { key: 0 }) : createCommentVNode("", true),
                        _.$slots["calendar-icon"] ? createCommentVNode("", true) : (openBlock(), createBlock(unref(It), { key: 1 }))
                      ]),
                      _: 2
                    }, [
                      _.$slots["year-overlay-value"] ? {
                        name: "item",
                        fn: withCtx(({ item: H }) => [
                          renderSlot(_.$slots, "year-overlay-value", {
                            text: H.text,
                            value: H.value
                          })
                        ]),
                        key: "0"
                      } : void 0
                    ]), 1032, ["items", "text-input", "esc-close", "config", "onToggle", "onSelected", "is-last"])) : createCommentVNode("", true)
                  ]),
                  _: 2
                }, 1032, ["name", "css"])
              ])
            ];
          }),
          _: 2
        }, 1032, ["items", "arrow-navigation", "is-last", "esc-close", "height", "config", "onSelected", "onHoverValue"]))
      ]),
      _: 3
    }, 8, ["multi-calendars"]));
  }
});
var yl = (e, n) => {
  const { modelValue: a } = Zt(e, n), t = ref(null), r = (g) => Array.isArray(a.value) ? a.value.some((Y) => getYear(Y) === g) : a.value ? getYear(a.value) === g : false, l = (g) => e.range && Array.isArray(a.value) ? Hn(a.value, t.value, y(g)) : false, c = computed(() => kt(Vn(e.yearRange, e.reverseYears), (g) => {
    const Y = r(g.value), R = Rt(g.value, wt(e.minDate), wt(e.maxDate)), G = l(g.value);
    return { active: Y, disabled: R, isBetween: G };
  })), y = (g) => setYear(We(/* @__PURE__ */ new Date()), g);
  return {
    groupedYears: c,
    setHoverValue: (g) => {
      t.value = setYear(We(/* @__PURE__ */ new Date()), g);
    },
    selectYear: (g) => {
      if (e.multiDates)
        return Ln(y(g), a, e.multiDatesLimit), n("auto-apply", true);
      if (e.range) {
        const Y = Na(a, y(g), n);
        return Wn(Y, n, e.autoApply, e.modelAuto);
      }
      a.value = y(g), n("auto-apply");
    }
  };
};
var hl = defineComponent({
  compatConfig: {
    MODE: 3
  },
  __name: "YearPicker",
  props: {
    ...xe
  },
  emits: ["update:internal-model-value", "reset-flow", "range-start", "range-end", "auto-apply"],
  setup(e, { emit: n }) {
    const a = e, { groupedYears: t, selectYear: r, setHoverValue: l } = yl(a, n), { defaultedConfig: c } = Se(a);
    return (y, D) => (openBlock(), createElementBlock("div", null, [
      y.$slots["month-year"] ? renderSlot(y.$slots, "month-year", normalizeProps(mergeProps({ key: 0 }, {
        years: unref(t),
        selectYear: unref(r)
      }))) : (openBlock(), createBlock(Ot, {
        key: 1,
        items: unref(t),
        "is-last": y.autoApply && !y.keepActionRow && !unref(c).keepActionRow,
        height: y.modeHeight !== 255 ? y.modeHeight : unref(c).modeHeight,
        config: y.config,
        type: "year",
        "use-relative": "",
        onSelected: unref(r),
        onHoverValue: unref(l)
      }, createSlots({ _: 2 }, [
        y.$slots["year-overlay-value"] ? {
          name: "item",
          fn: withCtx(({ item: S }) => [
            renderSlot(y.$slots, "year-overlay-value", {
              text: S.text,
              value: S.value
            })
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["items", "is-last", "height", "config", "onSelected", "onHoverValue"]))
    ]));
  }
});
var pl = {
  key: 0,
  class: "dp__time_input"
};
var bl = ["aria-label", "onKeydown", "onClick"];
var kl = createBaseVNode("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1);
var wl = createBaseVNode("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1);
var Dl = ["aria-label", "disabled", "onKeydown", "onClick"];
var Ml = ["aria-label", "onKeydown", "onClick"];
var $l = createBaseVNode("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1);
var Tl = createBaseVNode("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1);
var Al = { key: 0 };
var Sl = ["aria-label", "onKeydown"];
var _l = defineComponent({
  compatConfig: {
    MODE: 3
  },
  __name: "TimeInput",
  props: {
    hours: { type: Number, default: 0 },
    minutes: { type: Number, default: 0 },
    seconds: { type: Number, default: 0 },
    closeTimePickerBtn: { type: Object, default: null },
    order: { type: Number, default: 0 },
    disabledTimesConfig: { type: Function, default: null },
    ...xe
  },
  emits: [
    "set-hours",
    "set-minutes",
    "update:hours",
    "update:minutes",
    "update:seconds",
    "reset-flow",
    "mounted",
    "overlay-closed",
    "am-pm-change"
  ],
  setup(e, { expose: n, emit: a }) {
    const t = e, { setTimePickerElements: r, setTimePickerBackRef: l } = lt(), { defaultedAriaLabels: c, defaultedTransitions: y, defaultedFilters: D, defaultedConfig: S } = Se(t), { transitionName: g, showTransition: Y } = Bt(y), R = reactive({
      hours: false,
      minutes: false,
      seconds: false
    }), G = ref("AM"), q = ref(null), J = ref([]);
    onMounted(() => {
      a("mounted");
    });
    const Q = (u) => set(/* @__PURE__ */ new Date(), {
      hours: u.hours,
      minutes: u.minutes,
      seconds: t.enableSeconds ? u.seconds : 0,
      milliseconds: 0
    }), p = computed(() => (u) => T(u, t[u])), M = computed(() => ({ hours: t.hours, minutes: t.minutes, seconds: t.seconds })), E = computed(() => (u) => !ee(+t[u] + +t[`${u}Increment`], u)), z = computed(() => (u) => !ee(+t[u] - +t[`${u}Increment`], u)), K = (u, C) => add(set(P(), u), C), _ = (u, C) => sub(set(P(), u), C), re = computed(
      () => ({
        dp__time_col: true,
        dp__time_col_block: !t.timePickerInline,
        dp__time_col_reg_block: !t.enableSeconds && t.is24 && !t.timePickerInline,
        dp__time_col_reg_inline: !t.enableSeconds && t.is24 && t.timePickerInline,
        dp__time_col_reg_with_button: !t.enableSeconds && !t.is24,
        dp__time_col_sec: t.enableSeconds && t.is24,
        dp__time_col_sec_with_button: t.enableSeconds && !t.is24
      })
    ), x = computed(() => {
      const u = [{ type: "hours" }, { type: "", separator: true }, { type: "minutes" }];
      return t.enableSeconds ? u.concat([{ type: "", separator: true }, { type: "seconds" }]) : u;
    }), L = computed(() => x.value.filter((u) => !u.separator)), h2 = computed(() => (u) => {
      if (u === "hours") {
        const C = d(+t.hours);
        return { text: C < 10 ? `0${C}` : `${C}`, value: C };
      }
      return { text: t[u] < 10 ? `0${t[u]}` : `${t[u]}`, value: t[u] };
    }), T = (u, C) => {
      var A;
      if (!t.disabledTimesConfig)
        return false;
      const O = t.disabledTimesConfig(t.order, u === "hours" ? C : void 0);
      return O[u] ? !!((A = O[u]) != null && A.includes(C)) : true;
    }, H = (u) => {
      const C = t.is24 ? 24 : 12, O = u === "hours" ? C : 60, A = +t[`${u}GridIncrement`], te = u === "hours" && !t.is24 ? A : 0, B = [];
      for (let ie = te; ie < O; ie += A)
        B.push({ value: ie, text: ie < 10 ? `0${ie}` : `${ie}` });
      return u === "hours" && !t.is24 && B.push({ value: 0, text: "12" }), kt(B, (ie) => ({ active: false, disabled: D.value.times[u].includes(ie.value) || !ee(ie.value, u) || T(u, ie.value) }));
    }, ee = (u, C) => {
      const O = t.minTime ? Q(fn(t.minTime)) : null, A = t.maxTime ? Q(fn(t.maxTime)) : null, te = Q(fn(M.value, C, u));
      return O && A ? (isBefore(te, A) || isEqual(te, A)) && (isAfter(te, O) || isEqual(te, O)) : O ? isAfter(te, O) || isEqual(te, O) : A ? isBefore(te, A) || isEqual(te, A) : true;
    }, v = (u) => t[`no${u[0].toUpperCase() + u.slice(1)}Overlay`], I = (u) => {
      v(u) || (R[u] = !R[u], R[u] || a("overlay-closed"));
    }, f = (u) => u === "hours" ? getHours : u === "minutes" ? getMinutes : getSeconds, k = (u, C = true) => {
      const O = C ? K : _, A = C ? +t[`${u}Increment`] : -+t[`${u}Increment`];
      ee(+t[u] + A, u) && a(
        `update:${u}`,
        f(u)(O({ [u]: +t[u] }, { [u]: +t[`${u}Increment`] }))
      );
    }, d = (u) => t.is24 ? u : (u >= 12 ? G.value = "PM" : G.value = "AM", Ar(u)), o = () => {
      G.value === "PM" ? (G.value = "AM", a("update:hours", t.hours - 12)) : (G.value = "PM", a("update:hours", t.hours + 12)), a("am-pm-change", G.value);
    }, $ = (u) => {
      R[u] = true;
    }, X = (u, C, O) => {
      if (u && t.arrowNavigation) {
        Array.isArray(J.value[C]) ? J.value[C][O] = u : J.value[C] = [u];
        const A = J.value.reduce(
          (te, B) => B.map((ie, he) => [...te[he] || [], B[he]]),
          []
        );
        l(t.closeTimePickerBtn), q.value && (A[1] = A[1].concat(q.value)), r(A, t.order);
      }
    }, s = (u, C) => (I(u), u === "hours" && !t.is24 ? a(`update:${u}`, G.value === "PM" ? C + 12 : C) : a(`update:${u}`, C));
    return n({ openChildCmp: $ }), (u, C) => {
      var O;
      return u.disabled ? createCommentVNode("", true) : (openBlock(), createElementBlock("div", pl, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(x.value, (A, te) => {
          var B, ie, he;
          return openBlock(), createElementBlock("div", {
            key: te,
            class: normalizeClass(re.value)
          }, [
            A.separator ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              createTextVNode(" : ")
            ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              createBaseVNode("button", {
                type: "button",
                class: normalizeClass({
                  dp__btn: true,
                  dp__inc_dec_button: !t.timePickerInline,
                  dp__inc_dec_button_inline: t.timePickerInline,
                  dp__tp_inline_btn_top: t.timePickerInline,
                  dp__inc_dec_button_disabled: E.value(A.type)
                }),
                "aria-label": (B = unref(c)) == null ? void 0 : B.incrementValue(A.type),
                tabindex: "0",
                onKeydown: [
                  withKeys(withModifiers((me) => k(A.type), ["prevent"]), ["enter"]),
                  withKeys(withModifiers((me) => k(A.type), ["prevent"]), ["space"])
                ],
                onClick: (me) => k(A.type),
                ref_for: true,
                ref: (me) => X(me, te, 0)
              }, [
                t.timePickerInline ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  kl,
                  wl
                ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                  u.$slots["arrow-up"] ? renderSlot(u.$slots, "arrow-up", { key: 0 }) : createCommentVNode("", true),
                  u.$slots["arrow-up"] ? createCommentVNode("", true) : (openBlock(), createBlock(unref(Yn), { key: 1 }))
                ], 64))
              ], 42, bl),
              createBaseVNode("button", {
                type: "button",
                "aria-label": (ie = unref(c)) == null ? void 0 : ie.openTpOverlay(A.type),
                class: normalizeClass({
                  dp__time_display: true,
                  dp__time_display_block: !t.timePickerInline,
                  dp__time_display_inline: t.timePickerInline,
                  "dp--time-invalid": p.value(A.type),
                  "dp--time-overlay-btn": !p.value(A.type)
                }),
                disabled: v(A.type),
                tabindex: "0",
                onKeydown: [
                  withKeys(withModifiers((me) => I(A.type), ["prevent"]), ["enter"]),
                  withKeys(withModifiers((me) => I(A.type), ["prevent"]), ["space"])
                ],
                onClick: (me) => I(A.type),
                ref_for: true,
                ref: (me) => X(me, te, 1)
              }, [
                u.$slots[A.type] ? renderSlot(u.$slots, A.type, {
                  key: 0,
                  text: h2.value(A.type).text,
                  value: h2.value(A.type).value
                }) : createCommentVNode("", true),
                u.$slots[A.type] ? createCommentVNode("", true) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  createTextVNode(toDisplayString(h2.value(A.type).text), 1)
                ], 64))
              ], 42, Dl),
              createBaseVNode("button", {
                type: "button",
                class: normalizeClass({
                  dp__btn: true,
                  dp__inc_dec_button: !t.timePickerInline,
                  dp__inc_dec_button_inline: t.timePickerInline,
                  dp__tp_inline_btn_bottom: t.timePickerInline,
                  dp__inc_dec_button_disabled: z.value(A.type)
                }),
                "aria-label": (he = unref(c)) == null ? void 0 : he.decrementValue(A.type),
                tabindex: "0",
                onKeydown: [
                  withKeys(withModifiers((me) => k(A.type, false), ["prevent"]), ["enter"]),
                  withKeys(withModifiers((me) => k(A.type, false), ["prevent"]), ["space"])
                ],
                onClick: (me) => k(A.type, false),
                ref_for: true,
                ref: (me) => X(me, te, 2)
              }, [
                t.timePickerInline ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  $l,
                  Tl
                ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                  u.$slots["arrow-down"] ? renderSlot(u.$slots, "arrow-down", { key: 0 }) : createCommentVNode("", true),
                  u.$slots["arrow-down"] ? createCommentVNode("", true) : (openBlock(), createBlock(unref(In), { key: 1 }))
                ], 64))
              ], 42, Ml)
            ], 64))
          ], 2);
        }), 128)),
        u.is24 ? createCommentVNode("", true) : (openBlock(), createElementBlock("div", Al, [
          u.$slots["am-pm-button"] ? renderSlot(u.$slots, "am-pm-button", {
            key: 0,
            toggle: o,
            value: G.value
          }) : createCommentVNode("", true),
          u.$slots["am-pm-button"] ? createCommentVNode("", true) : (openBlock(), createElementBlock("button", {
            key: 1,
            ref_key: "amPmButton",
            ref: q,
            type: "button",
            class: "dp__pm_am_button",
            role: "button",
            "aria-label": (O = unref(c)) == null ? void 0 : O.amPmButton,
            tabindex: "0",
            onClick: o,
            onKeydown: [
              withKeys(withModifiers(o, ["prevent"]), ["enter"]),
              withKeys(withModifiers(o, ["prevent"]), ["space"])
            ]
          }, toDisplayString(G.value), 41, Sl))
        ])),
        (openBlock(true), createElementBlock(Fragment, null, renderList(L.value, (A, te) => (openBlock(), createBlock(Transition, {
          key: te,
          name: unref(g)(R[A.type]),
          css: unref(Y)
        }, {
          default: withCtx(() => [
            R[A.type] ? (openBlock(), createBlock(Ot, {
              key: 0,
              items: H(A.type),
              "is-last": u.autoApply && !u.keepActionRow && !unref(S).keepActionRow,
              "esc-close": u.escClose,
              type: A.type,
              "text-input": u.textInput,
              config: u.config,
              "arrow-navigation": u.arrowNavigation,
              onSelected: (B) => s(A.type, B),
              onToggle: (B) => I(A.type),
              onResetFlow: C[0] || (C[0] = (B) => u.$emit("reset-flow"))
            }, createSlots({
              "button-icon": withCtx(() => [
                u.$slots["clock-icon"] ? renderSlot(u.$slots, "clock-icon", { key: 0 }) : createCommentVNode("", true),
                u.$slots["clock-icon"] ? createCommentVNode("", true) : (openBlock(), createBlock(unref(Nn), { key: 1 }))
              ]),
              _: 2
            }, [
              u.$slots[`${A.type}-overlay-value`] ? {
                name: "item",
                fn: withCtx(({ item: B }) => [
                  renderSlot(u.$slots, `${A.type}-overlay-value`, {
                    text: B.text,
                    value: B.value
                  })
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["items", "is-last", "esc-close", "type", "text-input", "config", "arrow-navigation", "onSelected", "onToggle"])) : createCommentVNode("", true)
          ]),
          _: 2
        }, 1032, ["name", "css"]))), 128))
      ]));
    };
  }
});
var Pl = ["aria-label"];
var Cl = ["tabindex"];
var Rl = ["aria-label"];
var Ya = defineComponent({
  compatConfig: {
    MODE: 3
  },
  __name: "TimePicker",
  props: {
    hours: { type: [Number, Array], default: 0 },
    minutes: { type: [Number, Array], default: 0 },
    seconds: { type: [Number, Array], default: 0 },
    disabledTimesConfig: { type: Function, default: null },
    ...xe
  },
  emits: [
    "update:hours",
    "update:minutes",
    "update:seconds",
    "mount",
    "reset-flow",
    "overlay-opened",
    "overlay-closed",
    "am-pm-change"
  ],
  setup(e, { expose: n, emit: a }) {
    const t = e, { buildMatrix: r, setTimePicker: l } = lt(), c = useSlots(), { defaultedTransitions: y, defaultedAriaLabels: D, defaultedTextInput: S, defaultedConfig: g } = Se(t), { transitionName: Y, showTransition: R } = Bt(y), { hideNavigationButtons: G } = qt(), q = ref(null), J = ref(null), Q = ref([]), p = ref(null);
    onMounted(() => {
      a("mount"), !t.timePicker && t.arrowNavigation ? r([Ae(q.value)], "time") : l(true, t.timePicker);
    });
    const M = computed(() => t.range && t.modelAuto ? $a(t.internalModelValue) : true), E = ref(false), z = (v) => ({
      hours: Array.isArray(t.hours) ? t.hours[v] : t.hours,
      minutes: Array.isArray(t.minutes) ? t.minutes[v] : t.minutes,
      seconds: Array.isArray(t.seconds) ? t.seconds[v] : t.seconds
    }), K = computed(() => {
      const v = [];
      if (t.range)
        for (let I = 0; I < 2; I++)
          v.push(z(I));
      else
        v.push(z(0));
      return v;
    }), _ = (v, I = false, f = "") => {
      I || a("reset-flow"), E.value = v, a(v ? "overlay-opened" : "overlay-closed"), t.arrowNavigation && l(v), nextTick(() => {
        f !== "" && Q.value[0] && Q.value[0].openChildCmp(f);
      });
    }, re = computed(() => ({
      dp__btn: true,
      dp__button: true,
      dp__button_bottom: t.autoApply && !t.keepActionRow && !g.value.keepActionRow
    })), x = ze(c, "timePicker"), L = (v, I, f) => t.range ? I === 0 ? [v, K.value[1][f]] : [K.value[0][f], v] : v, h2 = (v) => {
      a("update:hours", v);
    }, T = (v) => {
      a("update:minutes", v);
    }, H = (v) => {
      a("update:seconds", v);
    }, ee = () => {
      if (p.value && !S.value.enabled) {
        const v = _r(p.value);
        v && v.focus({ preventScroll: true });
      }
    };
    return n({ toggleTimePicker: _ }), (v, I) => {
      var f;
      return openBlock(), createElementBlock("div", null, [
        !v.timePicker && !v.timePickerInline ? withDirectives((openBlock(), createElementBlock("button", {
          key: 0,
          type: "button",
          class: normalizeClass(re.value),
          "aria-label": (f = unref(D)) == null ? void 0 : f.openTimePicker,
          tabindex: "0",
          ref_key: "openTimePickerBtn",
          ref: q,
          onKeydown: [
            I[0] || (I[0] = withKeys((k) => _(true), ["enter"])),
            I[1] || (I[1] = withKeys((k) => _(true), ["space"]))
          ],
          onClick: I[2] || (I[2] = (k) => _(true))
        }, [
          v.$slots["clock-icon"] ? renderSlot(v.$slots, "clock-icon", { key: 0 }) : createCommentVNode("", true),
          v.$slots["clock-icon"] ? createCommentVNode("", true) : (openBlock(), createBlock(unref(Nn), { key: 1 }))
        ], 42, Pl)), [
          [vShow, !unref(G)(v.hideNavigation, "time")]
        ]) : createCommentVNode("", true),
        createVNode(Transition, {
          name: unref(Y)(E.value),
          css: unref(R) && !v.timePickerInline
        }, {
          default: withCtx(() => {
            var k;
            return [
              E.value || v.timePicker || v.timePickerInline ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass({
                  dp__overlay: !v.timePickerInline,
                  "dp--overlay-absolute": !t.timePicker && !v.timePickerInline,
                  "dp--overlay-relative": t.timePicker
                }),
                style: normalizeStyle(
                  v.timePicker ? { height: `${v.modeHeight !== 255 ? v.modeHeight : unref(g).modeHeight}px` } : void 0
                ),
                ref_key: "overlayRef",
                ref: p,
                tabindex: v.timePickerInline ? void 0 : 0
              }, [
                createBaseVNode("div", {
                  class: normalizeClass(
                    v.timePickerInline ? "dp__time_picker_inline_container" : "dp__overlay_container dp__container_flex dp__time_picker_overlay_container"
                  ),
                  style: { display: "flex" }
                }, [
                  v.$slots["time-picker-overlay"] ? renderSlot(v.$slots, "time-picker-overlay", {
                    key: 0,
                    hours: e.hours,
                    minutes: e.minutes,
                    seconds: e.seconds,
                    setHours: h2,
                    setMinutes: T,
                    setSeconds: H
                  }) : createCommentVNode("", true),
                  v.$slots["time-picker-overlay"] ? createCommentVNode("", true) : (openBlock(), createElementBlock("div", {
                    key: 1,
                    class: normalizeClass(v.timePickerInline ? "dp__flex" : "dp__overlay_row dp__flex_row")
                  }, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(K.value, (d, o) => withDirectives((openBlock(), createBlock(_l, mergeProps({ key: o }, {
                      ...v.$props,
                      order: o,
                      hours: d.hours,
                      minutes: d.minutes,
                      seconds: d.seconds,
                      closeTimePickerBtn: J.value,
                      disabledTimesConfig: e.disabledTimesConfig,
                      disabled: o === 0 ? v.fixedStart : v.fixedEnd
                    }, {
                      ref_for: true,
                      ref_key: "timeInputRefs",
                      ref: Q,
                      "onUpdate:hours": ($) => h2(L($, o, "hours")),
                      "onUpdate:minutes": ($) => T(L($, o, "minutes")),
                      "onUpdate:seconds": ($) => H(L($, o, "seconds")),
                      onMounted: ee,
                      onOverlayClosed: ee,
                      onAmPmChange: I[3] || (I[3] = ($) => v.$emit("am-pm-change", $))
                    }), createSlots({ _: 2 }, [
                      renderList(unref(x), ($, X) => ({
                        name: $,
                        fn: withCtx((s) => [
                          renderSlot(v.$slots, $, normalizeProps(guardReactiveProps(s)))
                        ])
                      }))
                    ]), 1040, ["onUpdate:hours", "onUpdate:minutes", "onUpdate:seconds"])), [
                      [vShow, o === 0 ? true : M.value]
                    ])), 128))
                  ], 2)),
                  !v.timePicker && !v.timePickerInline ? withDirectives((openBlock(), createElementBlock("button", {
                    key: 2,
                    type: "button",
                    ref_key: "closeTimePickerBtn",
                    ref: J,
                    class: normalizeClass(re.value),
                    "aria-label": (k = unref(D)) == null ? void 0 : k.closeTimePicker,
                    tabindex: "0",
                    onKeydown: [
                      I[4] || (I[4] = withKeys((d) => _(false), ["enter"])),
                      I[5] || (I[5] = withKeys((d) => _(false), ["space"]))
                    ],
                    onClick: I[6] || (I[6] = (d) => _(false))
                  }, [
                    v.$slots["calendar-icon"] ? renderSlot(v.$slots, "calendar-icon", { key: 0 }) : createCommentVNode("", true),
                    v.$slots["calendar-icon"] ? createCommentVNode("", true) : (openBlock(), createBlock(unref(It), { key: 1 }))
                  ], 42, Rl)), [
                    [vShow, !unref(G)(v.hideNavigation, "time")]
                  ]) : createCommentVNode("", true)
                ], 2)
              ], 14, Cl)) : createCommentVNode("", true)
            ];
          }),
          _: 3
        }, 8, ["name", "css"])
      ]);
    };
  }
});
var Ia = (e, n, a, t) => {
  const r = (p, M) => Array.isArray(n[p]) ? n[p][M] : n[p], l = (p) => e.enableSeconds ? Array.isArray(n.seconds) ? n.seconds[p] : n.seconds : 0, c = (p, M) => p ? M !== void 0 ? nt(p, r("hours", M), r("minutes", M), l(M)) : nt(p, n.hours, n.minutes, l()) : P(), y = (p, M) => {
    n[p] = M;
  }, D = (p, M) => {
    const E = Object.fromEntries(
      Object.keys(n).map((z) => z === p ? [z, M] : [z, n[z]].slice())
    );
    if (e.range && !e.disableTimeRangeValidation) {
      const z = (_) => a.value ? nt(
        a.value[_],
        E.hours[_],
        E.minutes[_],
        E.seconds[_]
      ) : null, K = (_) => setMilliseconds(a.value[_], 0);
      return !(ge(z(0), z(1)) && (isAfter(z(0), K(1)) || isBefore(z(1), K(0))));
    }
    return true;
  }, S = (p, M) => {
    D(p, M) && (y(p, M), t && t());
  }, g = (p) => {
    S("hours", p);
  }, Y = (p) => {
    S("minutes", p);
  }, R = (p) => {
    S("seconds", p);
  }, G = (p, M, E, z) => {
    M && g(p), !M && !E && Y(p), E && R(p), a.value && z(a.value);
  }, q = (p) => {
    if (p) {
      const M = Array.isArray(p), E = M ? [+p[0].hours, +p[1].hours] : +p.hours, z = M ? [+p[0].minutes, +p[1].minutes] : +p.minutes, K = M ? [+p[0].seconds, +p[1].seconds] : +p.seconds;
      y("hours", E), y("minutes", z), e.enableSeconds && y("seconds", K);
    }
  }, J = (p, M) => {
    const E = {
      hours: Array.isArray(n.hours) ? n.hours[p] : n.hours,
      disabledArr: []
    };
    return (M || M === 0) && (E.hours = M), Array.isArray(e.disabledTimes) && (E.disabledArr = e.range && Array.isArray(e.disabledTimes[p]) ? e.disabledTimes[p] : e.disabledTimes), E;
  }, Q = computed(() => (p, M) => {
    var E;
    if (Array.isArray(e.disabledTimes)) {
      const { disabledArr: z, hours: K } = J(p, M), _ = z.filter((re) => +re.hours === K);
      return ((E = _[0]) == null ? void 0 : E.minutes) === "*" ? { hours: [K], minutes: void 0, seconds: void 0 } : {
        hours: [],
        minutes: (_ == null ? void 0 : _.map((re) => +re.minutes)) ?? [],
        seconds: (_ == null ? void 0 : _.map((re) => re.seconds ? +re.seconds : void 0)) ?? []
      };
    }
    return { hours: [], minutes: [], seconds: [] };
  });
  return {
    setTime: y,
    updateHours: g,
    updateMinutes: Y,
    updateSeconds: R,
    getSetDateTime: c,
    updateTimeValues: G,
    getSecondsValue: l,
    assignStartTime: q,
    disabledTimesConfig: Q
  };
};
var Ol = (e, n) => {
  const { modelValue: a, time: t } = Zt(e, n), { defaultedStartTime: r } = Se(e), { updateTimeValues: l, getSetDateTime: c, setTime: y, assignStartTime: D, disabledTimesConfig: S } = Ia(
    e,
    t,
    a
  ), g = (M) => {
    const { hours: E, minutes: z, seconds: K } = M;
    return { hours: +E, minutes: +z, seconds: K ? +K : 0 };
  }, Y = () => {
    if (e.startTime) {
      if (Array.isArray(e.startTime)) {
        const E = g(e.startTime[0]), z = g(e.startTime[1]);
        return [set(P(), E), set(P(), z)];
      }
      const M = g(e.startTime);
      return set(P(), M);
    }
    return e.range ? [null, null] : null;
  }, R = () => {
    if (e.range) {
      const [M, E] = Y();
      a.value = [c(M, 0), c(E, 1)];
    } else
      a.value = c(Y());
  }, G = (M) => Array.isArray(M) ? [vt(P(M[0])), vt(P(M[1]))] : [vt(M ?? P())], q = (M, E, z) => {
    y("hours", M), y("minutes", E), e.enableSeconds && y("seconds", z);
  }, J = () => {
    const [M, E] = G(a.value);
    return e.range ? q(
      [M.hours, E.hours],
      [M.minutes, E.minutes],
      [M.seconds, E.minutes]
    ) : q(M.hours, M.minutes, M.seconds);
  };
  onMounted(() => {
    if (!e.shadow)
      return D(r.value), a.value ? J() : R();
  });
  const Q = () => {
    Array.isArray(a.value) ? a.value = a.value.map((M, E) => M && c(M, E)) : a.value = c(a.value), n("time-update");
  };
  return {
    time: t,
    disabledTimesConfig: S,
    updateTime: (M, E = true, z = false) => {
      l(M, E, z, Q);
    }
  };
};
var Nl = defineComponent({
  compatConfig: {
    MODE: 3
  },
  __name: "TimePickerSolo",
  props: {
    ...xe
  },
  emits: ["update:internal-model-value", "time-update", "am-pm-change"],
  setup(e, { emit: n }) {
    const a = e, t = useSlots(), r = ze(t, "timePicker"), { time: l, disabledTimesConfig: c, updateTime: y } = Ol(a, n);
    return (D, S) => (openBlock(), createBlock(Un, {
      "multi-calendars": 0,
      stretch: ""
    }, {
      default: withCtx(() => [
        createVNode(Ya, mergeProps(D.$props, {
          hours: unref(l).hours,
          minutes: unref(l).minutes,
          seconds: unref(l).seconds,
          "internal-model-value": D.internalModelValue,
          "disabled-times-config": unref(c),
          "onUpdate:hours": S[0] || (S[0] = (g) => unref(y)(g)),
          "onUpdate:minutes": S[1] || (S[1] = (g) => unref(y)(g, false)),
          "onUpdate:seconds": S[2] || (S[2] = (g) => unref(y)(g, false, true)),
          onAmPmChange: S[3] || (S[3] = (g) => D.$emit("am-pm-change", g))
        }), createSlots({ _: 2 }, [
          renderList(unref(r), (g, Y) => ({
            name: g,
            fn: withCtx((R) => [
              renderSlot(D.$slots, g, normalizeProps(guardReactiveProps(R)))
            ])
          }))
        ]), 1040, ["hours", "minutes", "seconds", "internal-model-value", "disabled-times-config"])
      ]),
      _: 3
    }));
  }
});
var Yl = { class: "dp__month_year_row" };
var Il = ["aria-label", "onClick", "onKeydown"];
var Bl = defineComponent({
  compatConfig: {
    MODE: 3
  },
  __name: "DpHeader",
  props: {
    month: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    instance: { type: Number, default: 0 },
    years: { type: Array, default: () => [] },
    months: { type: Array, default: () => [] },
    ...xe
  },
  emits: ["update-month-year", "mount", "reset-flow", "overlay-closed"],
  setup(e, { expose: n, emit: a }) {
    const t = e, { defaultedTransitions: r, defaultedAriaLabels: l, defaultedMultiCalendars: c, defaultedFilters: y, defaultedConfig: D } = Se(t), { transitionName: S, showTransition: g } = Bt(r), { buildMatrix: Y } = lt(), { handleMonthYearChange: R, isDisabled: G, updateMonthYear: q } = Gr(t, a), { showLeftIcon: J, showRightIcon: Q } = qt(), p = ref(false), M = ref(false), E = ref([null, null, null, null]);
    onMounted(() => {
      a("mount");
    });
    const z = (d) => ({
      get: () => t[d],
      set: (o) => {
        const $ = d === Le.month ? Le.year : Le.month;
        a("update-month-year", { [d]: o, [$]: t[$] }), d === Le.month ? H(true) : ee(true);
      }
    }), K = computed(z(Le.month)), _ = computed(z(Le.year)), re = computed(() => (d) => ({
      month: t.month,
      year: t.year,
      items: d === Le.month ? t.months : t.years,
      instance: t.instance,
      updateMonthYear: q,
      toggle: d === Le.month ? H : ee
    })), x = computed(() => {
      const d = t.months.find((o) => o.value === t.month);
      return d || { text: "", value: 0 };
    }), L = computed(() => kt(t.months, (d) => {
      const o = t.month === d.value, $ = Rt(
        d.value,
        Ta(t.year, t.minDate),
        Aa(t.year, t.maxDate)
      ) || y.value.months.includes(d.value);
      return { active: o, disabled: $ };
    })), h2 = computed(() => kt(t.years, (d) => {
      const o = t.year === d.value, $ = Rt(d.value, wt(t.minDate), wt(t.maxDate)) || y.value.years.includes(d.value);
      return { active: o, disabled: $ };
    })), T = (d, o) => {
      o !== void 0 ? d.value = o : d.value = !d.value, d.value || a("overlay-closed");
    }, H = (d = false, o) => {
      v(d), T(p, o);
    }, ee = (d = false, o) => {
      v(d), T(M, o);
    }, v = (d) => {
      d || a("reset-flow");
    }, I = (d, o) => {
      t.arrowNavigation && (E.value[o] = Ae(d), Y(E.value, "monthYear"));
    }, f = computed(() => {
      var d, o;
      return [
        {
          type: Le.month,
          index: 1,
          toggle: H,
          modelValue: K.value,
          updateModelValue: ($) => K.value = $,
          text: x.value.text,
          showSelectionGrid: p.value,
          items: L.value,
          ariaLabel: (d = l.value) == null ? void 0 : d.openMonthsOverlay
        },
        {
          type: Le.year,
          index: 2,
          toggle: ee,
          modelValue: _.value,
          updateModelValue: ($) => _.value = $,
          text: t.year,
          showSelectionGrid: M.value,
          items: h2.value,
          ariaLabel: (o = l.value) == null ? void 0 : o.openYearsOverlay
        }
      ];
    }), k = computed(
      () => t.disableYearSelect ? [f.value[0]] : f.value
    );
    return n({
      toggleMonthPicker: H,
      toggleYearPicker: ee,
      handleMonthYearChange: R
    }), (d, o) => {
      var $, X, s;
      return openBlock(), createElementBlock("div", Yl, [
        d.$slots["month-year"] ? renderSlot(d.$slots, "month-year", normalizeProps(mergeProps({ key: 0 }, { month: e.month, year: e.year, months: e.months, years: e.years, updateMonthYear: unref(q), handleMonthYearChange: unref(R), instance: e.instance }))) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          unref(J)(unref(c), e.instance) && !d.vertical ? (openBlock(), createBlock(St, {
            key: 0,
            "aria-label": ($ = unref(l)) == null ? void 0 : $.prevMonth,
            disabled: unref(G)(false),
            onActivate: o[0] || (o[0] = (u) => unref(R)(false, true)),
            onSetRef: o[1] || (o[1] = (u) => I(u, 0))
          }, {
            default: withCtx(() => [
              d.$slots["arrow-left"] ? renderSlot(d.$slots, "arrow-left", { key: 0 }) : createCommentVNode("", true),
              d.$slots["arrow-left"] ? createCommentVNode("", true) : (openBlock(), createBlock(unref(Rn), { key: 1 }))
            ]),
            _: 3
          }, 8, ["aria-label", "disabled"])) : createCommentVNode("", true),
          createBaseVNode("div", {
            class: normalizeClass(["dp__month_year_wrap", {
              dp__year_disable_select: d.disableYearSelect
            }])
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(k.value, (u, C) => (openBlock(), createElementBlock(Fragment, {
              key: u.type
            }, [
              createBaseVNode("button", {
                type: "button",
                class: "dp__btn dp__month_year_select",
                tabindex: "0",
                "aria-label": u.ariaLabel,
                ref_for: true,
                ref: (O) => I(O, C + 1),
                onClick: u.toggle,
                onKeydown: [
                  withKeys(withModifiers(u.toggle, ["prevent"]), ["enter"]),
                  withKeys(withModifiers(u.toggle, ["prevent"]), ["space"])
                ]
              }, [
                d.$slots[u.type] ? renderSlot(d.$slots, u.type, {
                  key: 0,
                  text: u.text,
                  value: t[u.type]
                }) : createCommentVNode("", true),
                d.$slots[u.type] ? createCommentVNode("", true) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  createTextVNode(toDisplayString(u.text), 1)
                ], 64))
              ], 40, Il),
              createVNode(Transition, {
                name: unref(S)(u.showSelectionGrid),
                css: unref(g)
              }, {
                default: withCtx(() => [
                  u.showSelectionGrid ? (openBlock(), createBlock(Ot, {
                    key: 0,
                    items: u.items,
                    "arrow-navigation": d.arrowNavigation,
                    "hide-navigation": d.hideNavigation,
                    "is-last": d.autoApply && !d.keepActionRow && !unref(D).keepActionRow,
                    "skip-button-ref": false,
                    config: d.config,
                    type: u.type,
                    "header-refs": [],
                    "esc-close": d.escClose,
                    "text-input": d.textInput,
                    onSelected: u.updateModelValue,
                    onToggle: u.toggle
                  }, createSlots({
                    "button-icon": withCtx(() => [
                      d.$slots["calendar-icon"] ? renderSlot(d.$slots, "calendar-icon", { key: 0 }) : createCommentVNode("", true),
                      d.$slots["calendar-icon"] ? createCommentVNode("", true) : (openBlock(), createBlock(unref(It), { key: 1 }))
                    ]),
                    _: 2
                  }, [
                    d.$slots[`${u.type}-overlay-val`] ? {
                      name: "item",
                      fn: withCtx(({ item: O }) => [
                        renderSlot(d.$slots, `${u.type}-overlay-val`, {
                          text: O.text,
                          value: O.value
                        })
                      ]),
                      key: "0"
                    } : void 0,
                    d.$slots[`${u.type}-overlay`] ? {
                      name: "overlay",
                      fn: withCtx(() => [
                        renderSlot(d.$slots, `${u.type}-overlay`, normalizeProps(guardReactiveProps(re.value(u.type))))
                      ]),
                      key: "1"
                    } : void 0,
                    d.$slots[`${u.type}-overlay-header`] ? {
                      name: "header",
                      fn: withCtx(() => [
                        renderSlot(d.$slots, `${u.type}-overlay-header`, {
                          toggle: u.toggle
                        })
                      ]),
                      key: "2"
                    } : void 0
                  ]), 1032, ["items", "arrow-navigation", "hide-navigation", "is-last", "config", "type", "esc-close", "text-input", "onSelected", "onToggle"])) : createCommentVNode("", true)
                ]),
                _: 2
              }, 1032, ["name", "css"])
            ], 64))), 128))
          ], 2),
          unref(J)(unref(c), e.instance) && d.vertical ? (openBlock(), createBlock(St, {
            key: 1,
            "aria-label": (X = unref(l)) == null ? void 0 : X.prevMonth,
            disabled: unref(G)(false),
            onActivate: o[2] || (o[2] = (u) => unref(R)(false, true))
          }, {
            default: withCtx(() => [
              d.$slots["arrow-up"] ? renderSlot(d.$slots, "arrow-up", { key: 0 }) : createCommentVNode("", true),
              d.$slots["arrow-up"] ? createCommentVNode("", true) : (openBlock(), createBlock(unref(Yn), { key: 1 }))
            ]),
            _: 3
          }, 8, ["aria-label", "disabled"])) : createCommentVNode("", true),
          unref(Q)(unref(c), e.instance) ? (openBlock(), createBlock(St, {
            key: 2,
            ref: "rightIcon",
            disabled: unref(G)(true),
            "aria-label": (s = unref(l)) == null ? void 0 : s.nextMonth,
            onActivate: o[3] || (o[3] = (u) => unref(R)(true, true)),
            onSetRef: o[4] || (o[4] = (u) => I(u, d.disableYearSelect ? 2 : 3))
          }, {
            default: withCtx(() => [
              d.$slots[d.vertical ? "arrow-down" : "arrow-right"] ? renderSlot(d.$slots, d.vertical ? "arrow-down" : "arrow-right", { key: 0 }) : createCommentVNode("", true),
              d.$slots[d.vertical ? "arrow-down" : "arrow-right"] ? createCommentVNode("", true) : (openBlock(), createBlock(resolveDynamicComponent(d.vertical ? unref(In) : unref(On)), { key: 1 }))
            ]),
            _: 3
          }, 8, ["disabled", "aria-label"])) : createCommentVNode("", true)
        ], 64))
      ]);
    };
  }
});
var El = ["aria-label"];
var Fl = {
  class: "dp__calendar_header",
  role: "row"
};
var Vl = {
  key: 0,
  class: "dp__calendar_header_item",
  role: "gridcell"
};
var Hl = createBaseVNode("div", { class: "dp__calendar_header_separator" }, null, -1);
var Ul = ["aria-label"];
var Ll = {
  key: 0,
  role: "gridcell",
  class: "dp__calendar_item dp__week_num"
};
var Wl = { class: "dp__cell_inner" };
var zl = ["aria-selected", "aria-disabled", "aria-label", "onClick", "onKeydown", "onMouseenter", "onMouseleave"];
var jl = defineComponent({
  compatConfig: {
    MODE: 3
  },
  __name: "DpCalendar",
  props: {
    mappedDates: { type: Array, default: () => [] },
    instance: { type: Number, default: 0 },
    month: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    ...xe
  },
  emits: [
    "select-date",
    "set-hover-date",
    "handle-scroll",
    "mount",
    "handle-swipe",
    "handle-space",
    "tooltip-open",
    "tooltip-close"
  ],
  setup(e, { expose: n, emit: a }) {
    const t = e, { buildMultiLevelMatrix: r } = lt(), { defaultedTransitions: l, defaultedConfig: c, defaultedAriaLabels: y, defaultedMultiCalendars: D } = Se(t), S = ref(null), g = ref({
      bottom: "",
      left: "",
      transform: ""
    }), Y = ref([]), R = ref(null), G = ref(true), q = ref(""), J = ref({ startX: 0, endX: 0, startY: 0, endY: 0 }), Q = ref([]), p = ref({ left: "50%" }), M = computed(() => t.calendar ? t.calendar(t.mappedDates) : t.mappedDates), E = computed(() => t.dayNames ? Array.isArray(t.dayNames) ? t.dayNames : t.dayNames(t.locale, +t.weekStart) : Tr(t.formatLocale, t.locale, +t.weekStart));
    onMounted(() => {
      a("mount", { cmp: "calendar", refs: Y }), !t.noSwipe && !c.value.noSwipe && R.value && (R.value.addEventListener("touchstart", ee, { passive: false }), R.value.addEventListener("touchend", v, { passive: false }), R.value.addEventListener("touchmove", I, { passive: false })), t.monthChangeOnScroll && R.value && R.value.addEventListener("wheel", d, { passive: false });
    });
    const z = (s) => s ? t.vertical ? "vNext" : "next" : t.vertical ? "vPrevious" : "previous", K = (s, u) => {
      if (t.transitions) {
        const C = He(Je(P(), t.month, t.year));
        q.value = Re(He(Je(P(), s, u)), C) ? l.value[z(true)] : l.value[z(false)], G.value = false, nextTick(() => {
          G.value = true;
        });
      }
    }, _ = computed(
      () => ({
        [t.calendarClassName]: !!t.calendarClassName
      })
    ), re = computed(() => (s) => {
      const u = Sr(s);
      return {
        dp__marker_dot: u.type === "dot",
        dp__marker_line: u.type === "line"
      };
    }), x = computed(() => (s) => ge(s, S.value)), L = computed(() => ({
      dp__calendar: true,
      dp__calendar_next: D.value.count > 0 && t.instance !== 0
    })), h2 = computed(() => (s) => t.hideOffsetDates ? s.current : true), T = async (s, u, C) => {
      var O, A;
      if (a("set-hover-date", s), (A = (O = s.marker) == null ? void 0 : O.tooltip) != null && A.length) {
        const te = Ae(Y.value[u][C]);
        if (te) {
          const { width: B, height: ie } = te.getBoundingClientRect();
          S.value = s.value;
          let he = { left: `${B / 2}px` }, me = -50;
          if (await nextTick(), Q.value[0]) {
            const { left: N, width: j } = Q.value[0].getBoundingClientRect();
            N < 0 && (he = { left: "0" }, me = 0, p.value.left = `${B / 2}px`), window.innerWidth < N + j && (he = { right: "0" }, me = 0, p.value.left = `${j - B / 2}px`);
          }
          g.value = {
            bottom: `${ie}px`,
            ...he,
            transform: `translateX(${me}%)`
          }, a("tooltip-open", s.marker);
        }
      }
    }, H = (s) => {
      S.value && (S.value = null, g.value = JSON.parse(JSON.stringify({ bottom: "", left: "", transform: "" })), a("tooltip-close", s.marker));
    }, ee = (s) => {
      J.value.startX = s.changedTouches[0].screenX, J.value.startY = s.changedTouches[0].screenY;
    }, v = (s) => {
      J.value.endX = s.changedTouches[0].screenX, J.value.endY = s.changedTouches[0].screenY, f();
    }, I = (s) => {
      t.vertical && !t.inline && s.preventDefault();
    }, f = () => {
      const s = t.vertical ? "Y" : "X";
      Math.abs(J.value[`start${s}`] - J.value[`end${s}`]) > 10 && a("handle-swipe", J.value[`start${s}`] > J.value[`end${s}`] ? "right" : "left");
    }, k = (s, u, C) => {
      s && (Array.isArray(Y.value[u]) ? Y.value[u][C] = s : Y.value[u] = [s]), t.arrowNavigation && r(Y.value, "calendar");
    }, d = (s) => {
      t.monthChangeOnScroll && (s.preventDefault(), a("handle-scroll", s));
    }, o = (s) => {
      const u = s[0];
      return t.weekNumbers === "local" ? getWeek(u.value, { weekStartsOn: +t.weekStart }) : t.weekNumbers === "iso" ? getISOWeek(u.value) : typeof t.weekNumbers == "function" ? t.weekNumbers(u.value) : "";
    }, $ = (s, u) => {
      tt(s, c.value), a("select-date", u);
    }, X = (s) => {
      tt(s, c.value);
    };
    return n({ triggerTransition: K }), (s, u) => {
      var C;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(L.value)
      }, [
        createBaseVNode("div", {
          ref_key: "calendarWrapRef",
          ref: R,
          role: "grid",
          class: normalizeClass(_.value),
          "aria-label": (C = unref(y)) == null ? void 0 : C.calendarWrap
        }, [
          (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            createBaseVNode("div", Fl, [
              s.weekNumbers ? (openBlock(), createElementBlock("div", Vl, toDisplayString(s.weekNumName), 1)) : createCommentVNode("", true),
              (openBlock(true), createElementBlock(Fragment, null, renderList(E.value, (O, A) => (openBlock(), createElementBlock("div", {
                class: "dp__calendar_header_item",
                role: "gridcell",
                key: A
              }, [
                s.$slots["calendar-header"] ? renderSlot(s.$slots, "calendar-header", {
                  key: 0,
                  day: O,
                  index: A
                }) : createCommentVNode("", true),
                s.$slots["calendar-header"] ? createCommentVNode("", true) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  createTextVNode(toDisplayString(O), 1)
                ], 64))
              ]))), 128))
            ]),
            Hl,
            createVNode(Transition, {
              name: q.value,
              css: !!s.transitions
            }, {
              default: withCtx(() => {
                var O;
                return [
                  G.value ? (openBlock(), createElementBlock("div", {
                    key: 0,
                    class: "dp__calendar",
                    role: "grid",
                    "aria-label": ((O = unref(y)) == null ? void 0 : O.calendarDays) || void 0
                  }, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(M.value, (A, te) => (openBlock(), createElementBlock("div", {
                      class: "dp__calendar_row",
                      role: "row",
                      key: te
                    }, [
                      s.weekNumbers ? (openBlock(), createElementBlock("div", Ll, [
                        createBaseVNode("div", Wl, toDisplayString(o(A.days)), 1)
                      ])) : createCommentVNode("", true),
                      (openBlock(true), createElementBlock(Fragment, null, renderList(A.days, (B, ie) => {
                        var he, me, N;
                        return openBlock(), createElementBlock("div", {
                          role: "gridcell",
                          class: "dp__calendar_item",
                          ref_for: true,
                          ref: (j) => k(j, te, ie),
                          key: ie + te,
                          "aria-selected": B.classData.dp__active_date || B.classData.dp__range_start || B.classData.dp__range_start,
                          "aria-disabled": B.classData.dp__cell_disabled || void 0,
                          "aria-label": (me = (he = unref(y)) == null ? void 0 : he.day) == null ? void 0 : me.call(he, B),
                          tabindex: "0",
                          onClick: withModifiers((j) => $(j, B), ["prevent"]),
                          onKeydown: [
                            withKeys((j) => s.$emit("select-date", B), ["enter"]),
                            withKeys((j) => s.$emit("handle-space", B), ["space"])
                          ],
                          onMouseenter: (j) => T(B, te, ie),
                          onMouseleave: (j) => H(B)
                        }, [
                          createBaseVNode("div", {
                            class: normalizeClass(["dp__cell_inner", B.classData])
                          }, [
                            s.$slots.day && h2.value(B) ? renderSlot(s.$slots, "day", {
                              key: 0,
                              day: +B.text,
                              date: B.value
                            }) : createCommentVNode("", true),
                            s.$slots.day ? createCommentVNode("", true) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                              createTextVNode(toDisplayString(B.text), 1)
                            ], 64)),
                            B.marker && h2.value(B) ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
                              s.$slots.marker ? renderSlot(s.$slots, "marker", {
                                key: 0,
                                marker: B.marker,
                                day: +B.text,
                                date: B.value
                              }) : (openBlock(), createElementBlock("div", {
                                key: 1,
                                class: normalizeClass(re.value(B.marker)),
                                style: normalizeStyle(B.marker.color ? { backgroundColor: B.marker.color } : {})
                              }, null, 6))
                            ], 64)) : createCommentVNode("", true),
                            x.value(B.value) ? (openBlock(), createElementBlock("div", {
                              key: 3,
                              class: "dp__marker_tooltip",
                              ref_for: true,
                              ref_key: "activeTooltip",
                              ref: Q,
                              style: normalizeStyle(g.value)
                            }, [
                              (N = B.marker) != null && N.tooltip ? (openBlock(), createElementBlock("div", {
                                key: 0,
                                class: "dp__tooltip_content",
                                onClick: X
                              }, [
                                (openBlock(true), createElementBlock(Fragment, null, renderList(B.marker.tooltip, (j, De) => (openBlock(), createElementBlock("div", {
                                  key: De,
                                  class: "dp__tooltip_text"
                                }, [
                                  s.$slots["marker-tooltip"] ? renderSlot(s.$slots, "marker-tooltip", {
                                    key: 0,
                                    tooltip: j,
                                    day: B.value
                                  }) : createCommentVNode("", true),
                                  s.$slots["marker-tooltip"] ? createCommentVNode("", true) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                                    createBaseVNode("div", {
                                      class: "dp__tooltip_mark",
                                      style: normalizeStyle(j.color ? { backgroundColor: j.color } : {})
                                    }, null, 4),
                                    createBaseVNode("div", null, toDisplayString(j.text), 1)
                                  ], 64))
                                ]))), 128)),
                                createBaseVNode("div", {
                                  class: "dp__arrow_bottom_tp",
                                  style: normalizeStyle(p.value)
                                }, null, 4)
                              ])) : createCommentVNode("", true)
                            ], 4)) : createCommentVNode("", true)
                          ], 2)
                        ], 40, zl);
                      }), 128))
                    ]))), 128))
                  ], 8, Ul)) : createCommentVNode("", true)
                ];
              }),
              _: 3
            }, 8, ["name", "css"])
          ], 64))
        ], 10, El)
      ], 2);
    };
  }
});
var ia = (e) => Array.isArray(e);
var Kl = (e, n, a, t) => {
  const r = ref([]), { modelValue: l, calendars: c, time: y } = Zt(e, n), { defaultedMultiCalendars: D, defaultedStartTime: S } = Se(e), { validateMonthYearInRange: g, isDisabled: Y, isDateRangeAllowed: R, checkMinMaxRange: G } = Et(e), { updateTimeValues: q, getSetDateTime: J, setTime: Q, assignStartTime: p, disabledTimesConfig: M } = Ia(
    e,
    y,
    l,
    t
  ), E = computed(
    () => (i) => c.value[i] ? c.value[i].month : 0
  ), z = computed(
    () => (i) => c.value[i] ? c.value[i].year : 0
  ), K = (i, w, U) => {
    var se, be;
    c.value[i] || (c.value[i] = { month: 0, year: 0 }), c.value[i].month = aa(w) ? (se = c.value[i]) == null ? void 0 : se.month : w, c.value[i].year = aa(U) ? (be = c.value[i]) == null ? void 0 : be.year : U;
  }, _ = () => {
    e.autoApply && n("select-date");
  };
  watch(l, (i, w) => {
    JSON.stringify(i) !== JSON.stringify(w) && L();
  }), onMounted(() => {
    e.shadow || (l.value || (o(), S.value && p(S.value)), L(true), e.focusStartDate && e.startDate && o());
  });
  const re = computed(() => {
    var i;
    return (i = e.flow) != null && i.length && !e.partialFlow ? e.flowStep === e.flow.length : true;
  }), x = () => {
    e.autoApply && re.value && n("auto-apply", e.partialFlow);
  }, L = (i = false) => {
    if (l.value)
      return Array.isArray(l.value) ? (r.value = l.value, I(i)) : T(l.value, i);
    if (D.value.count && i && !e.startDate)
      return h2(P(), i);
  }, h2 = (i, w = false) => {
    if ((!D.value.count || !D.value.static || w) && K(0, getMonth(i), getYear(i)), D.value.count)
      for (let U = 1; U < D.value.count; U++) {
        const se = set(P(), { month: E.value(U - 1), year: z.value(U - 1) }), be = add(se, { months: 1 });
        c.value[U] = { month: getMonth(be), year: getYear(be) };
      }
  }, T = (i, w) => {
    h2(i), Q("hours", getHours(i)), Q("minutes", getMinutes(i)), Q("seconds", getSeconds(i)), D.value.count && w && d();
  }, H = (i) => {
    if (D.value.count) {
      if (D.value.solo)
        return 0;
      const w = getMonth(i[0]), U = getMonth(i[1]);
      return Math.abs(U - w) < D.value.count ? 0 : 1;
    }
    return 1;
  }, ee = (i, w) => {
    i[1] && e.showLastInRange ? h2(i[H(i)], w) : h2(i[0], w);
    const U = (se, be) => [
      se(i[0]),
      i[1] ? se(i[1]) : y[be][1]
    ];
    Q("hours", U(getHours, "hours")), Q("minutes", U(getMinutes, "minutes")), Q("seconds", U(getSeconds, "seconds"));
  }, v = (i, w) => {
    if ((e.range || e.weekPicker) && !e.multiDates)
      return ee(i, w);
    if (e.multiDates && w) {
      const U = i[i.length - 1];
      return T(U, w);
    }
  }, I = (i) => {
    const w = l.value;
    v(w, i), D.value.count && D.value.solo && d();
  }, f = (i, w) => {
    const U = set(P(), { month: E.value(w), year: z.value(w) }), se = i < 0 ? addMonths(U, 1) : subMonths(U, 1);
    g(getMonth(se), getYear(se), i < 0, e.preventMinMaxNavigation) && (K(w, getMonth(se), getYear(se)), D.value.count && !D.value.solo && k(w), a());
  }, k = (i) => {
    for (let w = i - 1; w >= 0; w--) {
      const U = subMonths(set(P(), { month: E.value(w + 1), year: z.value(w + 1) }), 1);
      K(w, getMonth(U), getYear(U));
    }
    for (let w = i + 1; w <= D.value.count - 1; w++) {
      const U = addMonths(set(P(), { month: E.value(w - 1), year: z.value(w - 1) }), 1);
      K(w, getMonth(U), getYear(U));
    }
  }, d = () => {
    if (Array.isArray(l.value) && l.value.length === 2) {
      const i = P(
        P(l.value[1] ? l.value[1] : addMonths(l.value[0], 1))
      ), [w, U] = [getMonth(l.value[0]), getYear(l.value[0])], [se, be] = [getMonth(l.value[1]), getYear(l.value[1])];
      (w !== se || w === se && U !== be) && D.value.solo && K(1, getMonth(i), getYear(i));
    } else
      l.value && !Array.isArray(l.value) && (K(0, getMonth(l.value), getYear(l.value)), h2(P()));
  }, o = () => {
    e.startDate && (K(0, getMonth(P(e.startDate)), getYear(P(e.startDate))), D.value.count && k(0));
  }, $ = (i, w) => {
    e.monthChangeOnScroll && f(e.monthChangeOnScroll !== "inverse" ? -i.deltaY : i.deltaY, w);
  }, X = (i, w, U = false) => {
    e.monthChangeOnArrows && e.vertical === U && s(i, w);
  }, s = (i, w) => {
    f(i === "right" ? -1 : 1, w);
  }, u = (i) => e.markers.find((w) => ge(la(i.value), la(w.date))), C = (i, w) => {
    switch (e.sixWeeks === true ? "append" : e.sixWeeks) {
      case "prepend":
        return [true, false];
      case "center":
        return [i == 0, true];
      case "fair":
        return [i == 0 || w > i, true];
      case "append":
        return [false, false];
      default:
        return [false, false];
    }
  }, O = (i, w, U, se) => {
    if (e.sixWeeks && i.length < 6) {
      const be = 6 - i.length, Qe = (w.getDay() + 7 - se) % 7, Ft = 6 - (U.getDay() + 7 - se) % 7, [Tt, ln] = C(Qe, Ft);
      for (let ot = 1; ot <= be; ot++)
        if (ln ? !!(ot % 2) == Tt : Tt) {
          const Vt = i[0].days[0], on = A(addDays(Vt.value, -7), getMonth(w));
          i.unshift({ days: on });
        } else {
          const Vt = i[i.length - 1], on = Vt.days[Vt.days.length - 1], Ea = A(addDays(on.value, 1), getMonth(w));
          i.push({ days: Ea });
        }
    }
    return i;
  }, A = (i, w) => {
    const U = P(i), se = [];
    for (let be = 0; be < 7; be++) {
      const Qe = addDays(U, be), $t = getMonth(Qe) !== w;
      se.push({
        text: e.hideOffsetDates && $t ? "" : Qe.getDate(),
        value: Qe,
        current: !$t,
        classData: {}
      });
    }
    return se;
  }, te = (i, w) => {
    const U = [], se = P(Ge(new Date(w, i), e.timezone)), be = P(Ge(new Date(w, i + 1, 0), e.timezone)), Qe = e.weekStart, $t = startOfWeek(se, { weekStartsOn: Qe }), Ft = (Tt) => {
      const ln = A(Tt, i);
      if (U.push({ days: ln }), !U[U.length - 1].days.some(
        (ot) => ge(He(ot.value), He(be))
      )) {
        const ot = addDays(Tt, 7);
        Ft(ot);
      }
    };
    return Ft($t), O(U, se, be, Qe);
  }, B = (i) => (l.value = jt(P(i.value), e.timezone, e.weekStart), x()), ie = (i) => {
    const w = nt(P(i.value), y.hours, y.minutes, Te());
    e.multiDates ? Ln(w, l, e.multiDatesLimit) : l.value = w, t(), nextTick().then(() => {
      x();
    });
  }, he = (i) => e.noDisabledRange ? _a(r.value[0], i).some((U) => Y(U)) : false, me = () => {
    r.value = l.value ? l.value.slice() : [], r.value.length === 2 && !(e.fixedStart || e.fixedEnd) && (r.value = []);
  }, N = (i, w) => {
    const U = [P(i.value), addDays(P(i.value), +e.autoRange)];
    R(U) && (w && j(i.value), r.value = U);
  }, j = (i) => {
    const w = getMonth(P(i)), U = getYear(P(i));
    if (K(0, w, U), D.value.count > 0)
      for (let se = 1; se < D.value.count; se++) {
        const be = Or(
          set(P(i), { year: E.value(se - 1), month: z.value(se - 1) })
        );
        K(se, be.month, be.year);
      }
  }, De = (i) => Array.isArray(l.value) && l.value.length === 2 ? e.fixedStart && (Re(i, l.value[0]) || ge(i, l.value[0])) ? [l.value[0], i] : e.fixedEnd && (Pe(i, l.value[1]) || ge(i, l.value[1])) ? [i, l.value[1]] : (n("invalid-fixed-range", i), l.value) : [], ne = (i) => {
    he(i.value) || !G(i.value, l.value, e.fixedStart ? 0 : 1) || (r.value = De(P(i.value)));
  }, Fe = (i, w) => {
    if (me(), e.autoRange)
      return N(i, w);
    if (e.fixedStart || e.fixedEnd)
      return ne(i);
    r.value[0] ? G(P(i.value), l.value) && !he(i.value) && (Pe(P(i.value), P(r.value[0])) ? (r.value.unshift(P(i.value)), n("range-end", r.value[0])) : (r.value[1] = P(i.value), n("range-end", r.value[1]))) : (r.value[0] = P(i.value), n("range-start", r.value[0]));
  }, Te = (i = true) => e.enableSeconds ? Array.isArray(y.seconds) ? i ? y.seconds[0] : y.seconds[1] : y.seconds : 0, Mt = (i) => {
    r.value[i] = nt(
      r.value[i],
      y.hours[i],
      y.minutes[i],
      Te(i !== 1)
    );
  }, Jt = () => {
    var i, w;
    r.value[0] && r.value[1] && +((i = r.value) == null ? void 0 : i[0]) > +((w = r.value) == null ? void 0 : w[1]) && (r.value.reverse(), n("range-start", r.value[0]), n("range-end", r.value[1]));
  }, xt = () => {
    r.value.length && (r.value[0] && !r.value[1] ? Mt(0) : (Mt(0), Mt(1), t()), Jt(), l.value = r.value.slice(), Wn(r.value, n, e.autoApply, e.modelAuto));
  }, Qt = (i, w = false) => {
    if (!(Y(i.value) || !i.current && e.hideOffsetDates)) {
      if (e.weekPicker)
        return B(i);
      if (!e.range)
        return ie(i);
      ia(y.hours) && ia(y.minutes) && !e.multiDates && (Fe(i, w), xt());
    }
  }, en = (i, w) => {
    var se;
    K(i, w.month, w.year), D.value.count && !D.value.solo && k(i), n("update-month-year", { instance: i, month: w.month, year: w.year }), a(D.value.solo ? i : void 0);
    const U = (se = e.flow) != null && se.length ? e.flow[e.flowStep] : void 0;
    !w.fromNav && (U === je.month || U === je.year) && t();
  }, tn = (i, w) => {
    Array.isArray(i) && i.length <= 2 && e.range ? l.value = i.map((U) => Ge(P(U), w ? void 0 : e.timezone)) : Array.isArray(i) || (l.value = Ge(P(i), w ? void 0 : e.timezone)), _(), e.multiCalendars && nextTick().then(() => L(true));
  }, nn = () => {
    e.range ? l.value && Array.isArray(l.value) && l.value[0] ? l.value = Pe(P(), l.value[0]) ? [P(), l.value[0]] : [l.value[0], P()] : l.value = [P()] : l.value = P(), _();
  }, an = () => {
    if (Array.isArray(l.value))
      if (e.multiDates) {
        const i = rn();
        l.value[l.value.length - 1] = J(i);
      } else
        l.value = l.value.map((i, w) => i && J(i, w));
    else
      l.value = J(l.value);
    n("time-update");
  }, rn = () => Array.isArray(l.value) && l.value.length ? l.value[l.value.length - 1] : null;
  return {
    calendars: c,
    modelValue: l,
    month: E,
    year: z,
    time: y,
    disabledTimesConfig: M,
    getCalendarDays: te,
    getMarker: u,
    handleScroll: $,
    handleSwipe: s,
    handleArrow: X,
    selectDate: Qt,
    updateMonthYear: en,
    presetDate: tn,
    selectCurrentDate: nn,
    updateTime: (i, w = true, U = false) => {
      q(i, w, U, an);
    }
  };
};
var Gl = { key: 0 };
var Zl = defineComponent({
  __name: "DatePicker",
  props: {
    ...xe
  },
  emits: [
    "tooltip-open",
    "tooltip-close",
    "mount",
    "update:internal-model-value",
    "update-flow-step",
    "reset-flow",
    "auto-apply",
    "focus-menu",
    "select-date",
    "range-start",
    "range-end",
    "invalid-fixed-range",
    "time-update",
    "am-pm-change",
    "time-picker-open",
    "time-picker-close",
    "recalculate-position",
    "update-month-year"
  ],
  setup(e, { expose: n, emit: a }) {
    const t = e, {
      calendars: r,
      month: l,
      year: c,
      modelValue: y,
      time: D,
      disabledTimesConfig: S,
      getCalendarDays: g,
      getMarker: Y,
      handleArrow: R,
      handleScroll: G,
      handleSwipe: q,
      selectDate: J,
      updateMonthYear: Q,
      presetDate: p,
      selectCurrentDate: M,
      updateTime: E
    } = Kl(t, a, k, d), z = useSlots(), { setHoverDate: K, getDayClassData: _, clearHoverDate: re } = Jr(y, t), { defaultedMultiCalendars: x } = Se(t), L = ref([]), h2 = ref([]), T = ref(null), H = ze(z, "calendar"), ee = ze(z, "monthYear"), v = ze(z, "timePicker"), I = (C) => {
      t.shadow || a("mount", C);
    };
    watch(
      r,
      () => {
        t.shadow || setTimeout(() => {
          a("recalculate-position");
        }, 0);
      },
      { deep: true }
    );
    const f = computed(() => (C) => g(l.value(C), c.value(C)).map((O) => ({
      ...O,
      days: O.days.map((A) => (A.marker = Y(A), A.classData = _(A), A))
    })));
    function k(C) {
      var O;
      C || C === 0 ? (O = h2.value[C]) == null || O.triggerTransition(l.value(C), c.value(C)) : h2.value.forEach((A, te) => A.triggerTransition(l.value(te), c.value(te)));
    }
    function d() {
      a("update-flow-step");
    }
    const o = (C, O = false) => {
      J(C, O), t.spaceConfirm && a("select-date");
    };
    return n({
      clearHoverDate: re,
      presetDate: p,
      selectCurrentDate: M,
      toggleMonthPicker: (C, O, A = 0) => {
        var te;
        (te = L.value[A]) == null || te.toggleMonthPicker(C, O);
      },
      toggleYearPicker: (C, O, A = 0) => {
        var te;
        (te = L.value[A]) == null || te.toggleYearPicker(C, O);
      },
      toggleTimePicker: (C, O, A) => {
        var te;
        (te = T.value) == null || te.toggleTimePicker(C, O, A);
      },
      handleArrow: R,
      updateMonthYear: Q,
      getSidebarProps: () => ({
        modelValue: y,
        month: l,
        year: c,
        time: D,
        updateTime: E,
        updateMonthYear: Q,
        selectDate: J,
        presetDate: p
      })
    }), (C, O) => (openBlock(), createElementBlock(Fragment, null, [
      createVNode(Un, {
        "multi-calendars": unref(x).count
      }, {
        default: withCtx(({ instance: A, index: te }) => [
          C.disableMonthYearSelect ? createCommentVNode("", true) : (openBlock(), createBlock(Bl, mergeProps({
            key: 0,
            ref: (B) => {
              B && (L.value[te] = B);
            },
            months: unref(Ma)(C.formatLocale, C.locale, C.monthNameFormat),
            years: unref(Vn)(C.yearRange, C.reverseYears),
            month: unref(l)(A),
            year: unref(c)(A),
            instance: A
          }, C.$props, {
            onMount: O[0] || (O[0] = (B) => I(unref(mt).header)),
            onResetFlow: O[1] || (O[1] = (B) => C.$emit("reset-flow")),
            onUpdateMonthYear: (B) => unref(Q)(A, B),
            onOverlayClosed: O[2] || (O[2] = (B) => C.$emit("focus-menu"))
          }), createSlots({ _: 2 }, [
            renderList(unref(ee), (B, ie) => ({
              name: B,
              fn: withCtx((he) => [
                renderSlot(C.$slots, B, normalizeProps(guardReactiveProps(he)))
              ])
            }))
          ]), 1040, ["months", "years", "month", "year", "instance", "onUpdateMonthYear"])),
          createVNode(jl, mergeProps({
            ref: (B) => {
              B && (h2.value[te] = B);
            },
            "mapped-dates": f.value(A),
            month: unref(l)(A),
            year: unref(c)(A)
          }, C.$props, {
            onSelectDate: (B) => unref(J)(B, A !== 1),
            onHandleSpace: (B) => o(B, A !== 1),
            onSetHoverDate: O[3] || (O[3] = (B) => unref(K)(B)),
            onHandleScroll: (B) => unref(G)(B, A),
            onHandleSwipe: (B) => unref(q)(B, A),
            onMount: O[4] || (O[4] = (B) => I(unref(mt).calendar)),
            onResetFlow: O[5] || (O[5] = (B) => C.$emit("reset-flow")),
            onTooltipOpen: O[6] || (O[6] = (B) => C.$emit("tooltip-open", B)),
            onTooltipClose: O[7] || (O[7] = (B) => C.$emit("tooltip-close", B))
          }), createSlots({ _: 2 }, [
            renderList(unref(H), (B, ie) => ({
              name: B,
              fn: withCtx((he) => [
                renderSlot(C.$slots, B, normalizeProps(guardReactiveProps({ ...he })))
              ])
            }))
          ]), 1040, ["mapped-dates", "month", "year", "onSelectDate", "onHandleSpace", "onHandleScroll", "onHandleSwipe"])
        ]),
        _: 3
      }, 8, ["multi-calendars"]),
      C.enableTimePicker ? (openBlock(), createElementBlock("div", Gl, [
        C.$slots["time-picker"] ? renderSlot(C.$slots, "time-picker", normalizeProps(mergeProps({ key: 0 }, { time: unref(D), updateTime: unref(E) }))) : (openBlock(), createBlock(Ya, mergeProps({
          key: 1,
          ref_key: "timePickerRef",
          ref: T
        }, C.$props, {
          hours: unref(D).hours,
          minutes: unref(D).minutes,
          seconds: unref(D).seconds,
          "internal-model-value": C.internalModelValue,
          "disabled-times-config": unref(S),
          onMount: O[8] || (O[8] = (A) => I(unref(mt).timePicker)),
          "onUpdate:hours": O[9] || (O[9] = (A) => unref(E)(A)),
          "onUpdate:minutes": O[10] || (O[10] = (A) => unref(E)(A, false)),
          "onUpdate:seconds": O[11] || (O[11] = (A) => unref(E)(A, false, true)),
          onResetFlow: O[12] || (O[12] = (A) => C.$emit("reset-flow")),
          onOverlayClosed: O[13] || (O[13] = (A) => C.$emit("time-picker-close")),
          onOverlayOpened: O[14] || (O[14] = (A) => C.$emit("time-picker-open", A)),
          onAmPmChange: O[15] || (O[15] = (A) => C.$emit("am-pm-change", A))
        }), createSlots({ _: 2 }, [
          renderList(unref(v), (A, te) => ({
            name: A,
            fn: withCtx((B) => [
              renderSlot(C.$slots, A, normalizeProps(guardReactiveProps(B)))
            ])
          }))
        ]), 1040, ["hours", "minutes", "seconds", "internal-model-value", "disabled-times-config"]))
      ])) : createCommentVNode("", true)
    ], 64));
  }
});
var ql = ["id", "onKeydown"];
var Xl = {
  key: 0,
  class: "dp__sidebar_left"
};
var Jl = {
  key: 1,
  class: "dp--preset-dates"
};
var xl = ["onClick", "onKeydown"];
var Ql = {
  key: 2,
  class: "dp__sidebar_right"
};
var eo = {
  key: 3,
  class: "dp__action_extra"
};
var da = defineComponent({
  compatConfig: {
    MODE: 3
  },
  __name: "DatepickerMenu",
  props: {
    ...Xt,
    shadow: { type: Boolean, default: false },
    openOnTop: { type: Boolean, default: false },
    internalModelValue: { type: [Date, Array], default: null },
    arrMapValues: { type: Object, default: () => ({}) }
  },
  emits: [
    "close-picker",
    "select-date",
    "auto-apply",
    "time-update",
    "flow-step",
    "update-month-year",
    "invalid-select",
    "update:internal-model-value",
    "recalculate-position",
    "invalid-fixed-range",
    "tooltip-open",
    "tooltip-close",
    "time-picker-open",
    "time-picker-close",
    "am-pm-change",
    "range-start",
    "range-end"
  ],
  setup(e, { expose: n, emit: a }) {
    const t = e, r = computed(() => {
      const { openOnTop: N, ...j } = t;
      return {
        ...j,
        flowStep: re.value
      };
    }), { setMenuFocused: l, setShiftKey: c, control: y } = Oa(), D = useSlots(), { defaultedTextInput: S, defaultedInline: g, defaultedConfig: Y } = Se(t), R = ref(null), G = ref(0), q = ref(null), J = ref(null), Q = ref(false), p = ref(null);
    onMounted(() => {
      if (!t.shadow) {
        Q.value = true, M(), window.addEventListener("resize", M);
        const N = Ae(q);
        if (N && !S.value.enabled && !g.value.enabled && (l(true), H()), N) {
          const j = (De) => {
            (t.allowPreventDefault || Y.value.allowPreventDefault) && De.preventDefault(), tt(De, Y.value, true);
          };
          N.addEventListener("pointerdown", j), N.addEventListener("mousedown", j);
        }
      }
    }), onUnmounted(() => {
      window.removeEventListener("resize", M);
    });
    const M = () => {
      const N = Ae(J);
      N && (G.value = N.getBoundingClientRect().width);
    }, { arrowRight: E, arrowLeft: z, arrowDown: K, arrowUp: _ } = lt(), { flowStep: re, updateFlowStep: x, childMount: L, resetFlow: h2 } = xr(t, a, p), T = computed(() => t.monthPicker ? gl : t.yearPicker ? hl : t.timePicker ? Nl : Zl), H = () => {
      const N = Ae(q);
      N && N.focus({ preventScroll: true });
    }, ee = computed(() => {
      var N;
      return ((N = p.value) == null ? void 0 : N.getSidebarProps()) || {};
    }), v = () => {
      t.openOnTop && a("recalculate-position");
    }, I = ze(D, "action"), f = computed(() => t.monthPicker || t.yearPicker ? ze(D, "monthYear") : t.timePicker ? ze(D, "timePicker") : ze(D, "shared")), k = computed(() => t.openOnTop ? "dp__arrow_bottom" : "dp__arrow_top"), d = computed(() => ({
      dp__menu_disabled: t.disabled,
      dp__menu_readonly: t.readonly
    })), o = computed(
      () => ({
        dp__menu: true,
        dp__menu_index: !g.value.enabled,
        dp__relative: g.value.enabled,
        [t.menuClassName]: !!t.menuClassName
      })
    ), $ = (N) => {
      tt(N, Y.value, true);
    }, X = () => {
      t.escClose && a("close-picker");
    }, s = (N) => {
      if (t.arrowNavigation) {
        if (N === "up")
          return _();
        if (N === "down")
          return K();
        if (N === "left")
          return z();
        if (N === "right")
          return E();
      } else
        N === "left" || N === "up" ? te("handleArrow", "left", 0, N === "up") : te("handleArrow", "right", 0, N === "down");
    }, u = (N) => {
      c(N.shiftKey), !t.disableMonthYearSelect && N.code === "Tab" && N.target.classList.contains("dp__menu") && y.value.shiftKeyInMenu && (N.preventDefault(), tt(N, Y.value, true), a("close-picker"));
    }, C = () => {
      H(), a("time-picker-close");
    }, O = (N) => {
      var j, De, ne;
      (j = p.value) == null || j.toggleTimePicker(false, false), (De = p.value) == null || De.toggleMonthPicker(false, false, N), (ne = p.value) == null || ne.toggleYearPicker(false, false, N);
    }, A = (N, j = 0) => {
      var De, ne, Fe;
      return N === "month" ? (De = p.value) == null ? void 0 : De.toggleMonthPicker(false, true, j) : N === "year" ? (ne = p.value) == null ? void 0 : ne.toggleYearPicker(false, true, j) : N === "time" ? (Fe = p.value) == null ? void 0 : Fe.toggleTimePicker(true, false) : O(j);
    }, te = (N, ...j) => {
      var De, ne;
      (De = p.value) != null && De[N] && ((ne = p.value) == null || ne[N](...j));
    }, B = () => {
      te("selectCurrentDate");
    }, ie = (N, j) => {
      te("presetDate", N, j);
    }, he = () => {
      te("clearHoverDate");
    };
    return n({
      updateMonthYear: (N, j) => {
        te("updateMonthYear", N, j);
      },
      switchView: A
    }), (N, j) => {
      var De;
      return openBlock(), createElementBlock("div", {
        id: N.uid ? `dp-menu-${N.uid}` : void 0,
        tabindex: "0",
        ref_key: "dpMenuRef",
        ref: q,
        role: "dialog",
        class: normalizeClass(o.value),
        onMouseleave: he,
        onClick: $,
        onKeydown: [
          withKeys(X, ["esc"]),
          j[15] || (j[15] = withKeys(withModifiers((ne) => s("left"), ["prevent"]), ["left"])),
          j[16] || (j[16] = withKeys(withModifiers((ne) => s("up"), ["prevent"]), ["up"])),
          j[17] || (j[17] = withKeys(withModifiers((ne) => s("down"), ["prevent"]), ["down"])),
          j[18] || (j[18] = withKeys(withModifiers((ne) => s("right"), ["prevent"]), ["right"])),
          u
        ]
      }, [
        (N.disabled || N.readonly) && unref(g).enabled ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(d.value)
        }, null, 2)) : createCommentVNode("", true),
        !unref(g).enabled && !N.teleportCenter ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass(k.value)
        }, null, 2)) : createCommentVNode("", true),
        createBaseVNode("div", {
          ref_key: "innerMenuRef",
          ref: J,
          class: normalizeClass({
            dp__menu_content_wrapper: ((De = N.presetDates) == null ? void 0 : De.length) || !!N.$slots["left-sidebar"] || !!N.$slots["right-sidebar"]
          }),
          style: normalizeStyle({ "--dp-menu-width": `${G.value}px` })
        }, [
          N.$slots["left-sidebar"] ? (openBlock(), createElementBlock("div", Xl, [
            renderSlot(N.$slots, "left-sidebar", normalizeProps(guardReactiveProps(ee.value)))
          ])) : createCommentVNode("", true),
          N.presetDates.length ? (openBlock(), createElementBlock("div", Jl, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(N.presetDates, (ne, Fe) => (openBlock(), createElementBlock("div", {
              key: Fe,
              style: normalizeStyle(ne.style || {}),
              class: "dp--preset-range"
            }, [
              ne.slot ? renderSlot(N.$slots, ne.slot, {
                key: 0,
                presetDate: ie,
                label: ne.label,
                value: ne.value
              }) : (openBlock(), createElementBlock("div", {
                key: 1,
                role: "button",
                tabindex: "0",
                onClick: (Te) => ie(ne.value, ne.noTz),
                onKeydown: [
                  withKeys(withModifiers((Te) => ie(ne.value, ne.noTz), ["prevent"]), ["enter"]),
                  withKeys(withModifiers((Te) => ie(ne.value, ne.noTz), ["prevent"]), ["space"])
                ]
              }, toDisplayString(ne.label), 41, xl))
            ], 4))), 128))
          ])) : createCommentVNode("", true),
          createBaseVNode("div", {
            class: "dp__instance_calendar",
            ref_key: "calendarWrapperRef",
            ref: R,
            role: "document"
          }, [
            (openBlock(), createBlock(resolveDynamicComponent(T.value), mergeProps({
              ref_key: "dynCmpRef",
              ref: p
            }, r.value, {
              "flow-step": unref(re),
              onMount: unref(L),
              onUpdateFlowStep: unref(x),
              onResetFlow: unref(h2),
              onFocusMenu: H,
              onSelectDate: j[0] || (j[0] = (ne) => N.$emit("select-date")),
              onTooltipOpen: j[1] || (j[1] = (ne) => N.$emit("tooltip-open", ne)),
              onTooltipClose: j[2] || (j[2] = (ne) => N.$emit("tooltip-close", ne)),
              onAutoApply: j[3] || (j[3] = (ne) => N.$emit("auto-apply", ne)),
              onRangeStart: j[4] || (j[4] = (ne) => N.$emit("range-start", ne)),
              onRangeEnd: j[5] || (j[5] = (ne) => N.$emit("range-end", ne)),
              onInvalidFixedRange: j[6] || (j[6] = (ne) => N.$emit("invalid-fixed-range", ne)),
              onTimeUpdate: j[7] || (j[7] = (ne) => N.$emit("time-update")),
              onAmPmChange: j[8] || (j[8] = (ne) => N.$emit("am-pm-change", ne)),
              onTimePickerOpen: j[9] || (j[9] = (ne) => N.$emit("time-picker-open", ne)),
              onTimePickerClose: C,
              onRecalculatePosition: v,
              onUpdateMonthYear: j[10] || (j[10] = (ne) => N.$emit("update-month-year", ne)),
              "onUpdate:internalModelValue": j[11] || (j[11] = (ne) => N.$emit("update:internal-model-value", ne))
            }), createSlots({ _: 2 }, [
              renderList(f.value, (ne, Fe) => ({
                name: ne,
                fn: withCtx((Te) => [
                  renderSlot(N.$slots, ne, normalizeProps(guardReactiveProps({ ...Te })))
                ])
              }))
            ]), 1040, ["flow-step", "onMount", "onUpdateFlowStep", "onResetFlow"]))
          ], 512),
          N.$slots["right-sidebar"] ? (openBlock(), createElementBlock("div", Ql, [
            renderSlot(N.$slots, "right-sidebar", normalizeProps(guardReactiveProps(ee.value)))
          ])) : createCommentVNode("", true),
          N.$slots["action-extra"] ? (openBlock(), createElementBlock("div", eo, [
            N.$slots["action-extra"] ? renderSlot(N.$slots, "action-extra", {
              key: 0,
              selectCurrentDate: B
            }) : createCommentVNode("", true)
          ])) : createCommentVNode("", true)
        ], 6),
        !N.autoApply || N.keepActionRow || unref(Y).keepActionRow ? (openBlock(), createBlock(ol, mergeProps({
          key: 2,
          "menu-mount": Q.value
        }, r.value, {
          "calendar-width": G.value,
          onClosePicker: j[12] || (j[12] = (ne) => N.$emit("close-picker")),
          onSelectDate: j[13] || (j[13] = (ne) => N.$emit("select-date")),
          onInvalidSelect: j[14] || (j[14] = (ne) => N.$emit("invalid-select")),
          onSelectNow: B
        }), createSlots({ _: 2 }, [
          renderList(unref(I), (ne, Fe) => ({
            name: ne,
            fn: withCtx((Te) => [
              renderSlot(N.$slots, ne, normalizeProps(guardReactiveProps({ ...Te })))
            ])
          }))
        ]), 1040, ["menu-mount", "calendar-width"])) : createCommentVNode("", true)
      ], 42, ql);
    };
  }
});
var to = typeof window < "u" ? window : void 0;
var bn = () => {
};
var no = (e) => getCurrentScope() ? (onScopeDispose(e), true) : false;
var ao = (e, n, a, t) => {
  if (!e)
    return bn;
  let r = bn;
  const l = watch(
    () => unref(e),
    (y) => {
      r(), y && (y.addEventListener(n, a, t), r = () => {
        y.removeEventListener(n, a, t), r = bn;
      });
    },
    { immediate: true, flush: "post" }
  ), c = () => {
    l(), r();
  };
  return no(c), c;
};
var ro = (e, n, a, t = {}) => {
  const { window: r = to, event: l = "pointerdown" } = t;
  return r ? ao(r, l, (y) => {
    const D = Ae(e), S = Ae(n);
    !D || !S || D === y.target || y.composedPath().includes(D) || y.composedPath().includes(S) || a(y);
  }, { passive: true }) : void 0;
};
var lo = defineComponent({
  compatConfig: {
    MODE: 3
  },
  __name: "VueDatePicker",
  props: {
    ...Xt
  },
  emits: [
    "update:model-value",
    "update:model-timezone-value",
    "text-submit",
    "closed",
    "cleared",
    "open",
    "focus",
    "blur",
    "internal-model-change",
    "recalculate-position",
    "flow-step",
    "update-month-year",
    "invalid-select",
    "invalid-fixed-range",
    "tooltip-open",
    "tooltip-close",
    "time-picker-open",
    "time-picker-close",
    "am-pm-change",
    "range-start",
    "range-end"
  ],
  setup(e, { expose: n, emit: a }) {
    const t = e, r = useSlots(), l = ref(false), c = toRef(t, "modelValue"), y = toRef(t, "timezone"), D = ref(null), S = ref(null), g = ref(null), Y = ref(false), R = ref(null), { setMenuFocused: G, setShiftKey: q } = Oa(), { clearArrowNav: J } = lt(), { mapDatesArrToMap: Q, validateDate: p, isValidTime: M } = Et(t), { defaultedTransitions: E, defaultedTextInput: z, defaultedInline: K, defaultedConfig: _ } = Se(t), { menuTransition: re, showTransition: x } = Bt(E);
    onMounted(() => {
      $(t.modelValue), nextTick().then(() => {
        K.value.enabled || (f(R.value).addEventListener("scroll", te), window.addEventListener("resize", B));
      }), K.value.enabled && (l.value = true);
    });
    const L = computed(() => Q());
    onUnmounted(() => {
      if (!K.value.enabled) {
        const i = f(R.value);
        i && i.removeEventListener("scroll", te), window.removeEventListener("resize", B);
      }
    });
    const h2 = ze(r, "all", t.presetDates), T = ze(r, "input");
    watch(
      [c, y],
      () => {
        $(c.value);
      },
      { deep: true }
    );
    const { openOnTop: H, menuStyle: ee, xCorrect: v, setMenuPosition: I, getScrollableParent: f, shadowRender: k } = Zr({
      menuRef: D,
      menuRefInner: S,
      inputRef: g,
      pickerWrapperRef: R,
      inline: K,
      emit: a,
      props: t,
      slots: r
    }), {
      inputValue: d,
      internalModelValue: o,
      parseExternalModelValue: $,
      emitModelValue: X,
      formatInputValue: s,
      checkBeforeEmit: u
    } = Kr(a, t, Y), C = computed(
      () => ({
        dp__main: true,
        dp__theme_dark: t.dark,
        dp__theme_light: !t.dark,
        dp__flex_display: K.value.enabled,
        dp__flex_display_with_input: K.value.input
      })
    ), O = computed(() => t.dark ? "dp__theme_dark" : "dp__theme_light"), A = computed(() => t.teleport ? {
      to: typeof t.teleport == "boolean" ? "body" : t.teleport,
      disabled: K.value.enabled
    } : { class: "dp__outer_menu_wrap" }), te = () => {
      l.value && (t.closeOnScroll || _.value.closeOnScroll ? Te() : I());
    }, B = () => {
      l.value && I();
    }, ie = () => {
      !t.disabled && !t.readonly && (k(da, t), I(false), l.value = true, l.value && a("open"), l.value || Fe(), $(t.modelValue));
    }, he = () => {
      d.value = "", Fe(), a("update:model-value", null), a("update:model-timezone-value", null), a("cleared"), (t.closeOnClearValue || _.value.closeOnClearValue) && Te();
    }, me = () => {
      const i = o.value;
      return !i || !Array.isArray(i) && p(i) ? true : Array.isArray(i) ? i.length === 2 && p(i[0]) && p(i[1]) ? true : t.partialRange && !t.timePicker ? p(i[0]) : false : false;
    }, N = () => {
      u() && me() ? (X(), Te()) : a("invalid-select", o.value);
    }, j = (i) => {
      De(), X(), (t.closeOnAutoApply || _.value.closeOnAutoApply) && !i && Te();
    }, De = () => {
      g.value && z.value.enabled && g.value.setParsedDate(o.value);
    }, ne = (i = false) => {
      t.autoApply && M(o.value) && me() && (t.range && Array.isArray(o.value) ? (t.partialRange || o.value.length === 2) && j(i) : j(i));
    }, Fe = () => {
      z.value.enabled || (o.value = null);
    }, Te = () => {
      K.value.enabled || (l.value && (l.value = false, v.value = false, G(false), q(false), J(), a("closed"), d.value && $(c.value)), Fe(), a("blur"));
    }, Mt = (i, w) => {
      if (!i) {
        o.value = null;
        return;
      }
      o.value = i, w && (N(), a("text-submit"));
    }, Jt = () => {
      t.autoApply && M(o.value) && X(), De();
    }, xt = () => l.value ? Te() : ie(), Qt = (i) => {
      o.value = i;
    }, en = () => {
      z.value.enabled && (Y.value = true, s()), a("focus");
    }, tn = () => {
      z.value.enabled && (Y.value = false, $(t.modelValue)), a("blur");
    }, nn = (i) => {
      S.value && S.value.updateMonthYear(0, {
        month: na(i.month),
        year: na(i.year)
      });
    }, an = (i) => {
      $(i ?? t.modelValue);
    }, rn = (i, w) => {
      var U;
      (U = S.value) == null || U.switchView(i, w);
    }, zn = (i) => t.onClickOutside ? t.onClickOutside(i) : _.value.onClickOutside ? _.value.onClickOutside(i) : Te();
    return ro(D, g, () => zn(me)), n({
      closeMenu: Te,
      selectDate: N,
      clearValue: he,
      openMenu: ie,
      onScroll: te,
      formatInputValue: s,
      // exposed for testing purposes
      updateInternalModelValue: Qt,
      // modify internal modelValue
      setMonthYear: nn,
      parseModel: an,
      switchView: rn
    }), (i, w) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(C.value),
      ref_key: "pickerWrapperRef",
      ref: R
    }, [
      createVNode(nl, mergeProps({
        ref_key: "inputRef",
        ref: g,
        "is-menu-open": l.value,
        "input-value": unref(d),
        "onUpdate:inputValue": w[0] || (w[0] = (U) => isRef(d) ? d.value = U : null)
      }, i.$props, {
        onClear: he,
        onOpen: ie,
        onSetInputDate: Mt,
        onSetEmptyDate: unref(X),
        onSelectDate: N,
        onToggle: xt,
        onClose: Te,
        onFocus: en,
        onBlur: tn,
        onRealBlur: w[1] || (w[1] = (U) => Y.value = false)
      }), createSlots({ _: 2 }, [
        renderList(unref(T), (U, se) => ({
          name: U,
          fn: withCtx((be) => [
            renderSlot(i.$slots, U, normalizeProps(guardReactiveProps(be)))
          ])
        }))
      ]), 1040, ["is-menu-open", "input-value", "onSetEmptyDate"]),
      createVNode(Transition, {
        name: unref(re)(unref(H)),
        css: unref(x) && !unref(K).enabled
      }, {
        default: withCtx(() => [
          l.value ? (openBlock(), createBlock(resolveDynamicComponent(i.teleport ? Teleport : "div"), mergeProps({
            key: 0,
            ref_key: "dpWrapMenuRef",
            ref: D
          }, A.value, {
            class: { "dp--menu-wrapper": !unref(K).enabled },
            style: unref(K).enabled ? void 0 : unref(ee)
          }), {
            default: withCtx(() => [
              createVNode(da, mergeProps({
                ref_key: "dpMenuRef",
                ref: S,
                class: { [O.value]: true, "dp--menu-wrapper": i.teleport },
                style: i.teleport ? unref(ee) : void 0,
                "open-on-top": unref(H),
                "arr-map-values": L.value
              }, i.$props, {
                "internal-model-value": unref(o),
                "onUpdate:internalModelValue": w[2] || (w[2] = (U) => isRef(o) ? o.value = U : null),
                onClosePicker: Te,
                onSelectDate: N,
                onAutoApply: ne,
                onTimeUpdate: Jt,
                onFlowStep: w[3] || (w[3] = (U) => i.$emit("flow-step", U)),
                onUpdateMonthYear: w[4] || (w[4] = (U) => i.$emit("update-month-year", U)),
                onInvalidSelect: w[5] || (w[5] = (U) => i.$emit("invalid-select", unref(o))),
                onInvalidFixedRange: w[6] || (w[6] = (U) => i.$emit("invalid-fixed-range", U)),
                onRecalculatePosition: unref(I),
                onTooltipOpen: w[7] || (w[7] = (U) => i.$emit("tooltip-open", U)),
                onTooltipClose: w[8] || (w[8] = (U) => i.$emit("tooltip-close", U)),
                onTimePickerOpen: w[9] || (w[9] = (U) => i.$emit("time-picker-open", U)),
                onTimePickerClose: w[10] || (w[10] = (U) => i.$emit("time-picker-close", U)),
                onAmPmChange: w[11] || (w[11] = (U) => i.$emit("am-pm-change", U)),
                onRangeStart: w[12] || (w[12] = (U) => i.$emit("range-start", U)),
                onRangeEnd: w[13] || (w[13] = (U) => i.$emit("range-end", U))
              }), createSlots({ _: 2 }, [
                renderList(unref(h2), (U, se) => ({
                  name: U,
                  fn: withCtx((be) => [
                    renderSlot(i.$slots, U, normalizeProps(guardReactiveProps({ ...be })))
                  ])
                }))
              ]), 1040, ["class", "style", "open-on-top", "arr-map-values", "internal-model-value", "onRecalculatePosition"])
            ]),
            _: 3
          }, 16, ["class", "style"])) : createCommentVNode("", true)
        ]),
        _: 3
      }, 8, ["name", "css"])
    ], 2));
  }
});
var Ba = (() => {
  const e = lo;
  return e.install = (n) => {
    n.component("Vue3DatePicker", e);
  }, e;
})();
var oo = Object.freeze(Object.defineProperty({
  __proto__: null,
  default: Ba
}, Symbol.toStringTag, { value: "Module" }));
Object.entries(oo).forEach(([e, n]) => {
  e !== "default" && (Ba[e] = n);
});

export {
  Ba
};
//# sourceMappingURL=chunk-2MGW4XEB.js.map
