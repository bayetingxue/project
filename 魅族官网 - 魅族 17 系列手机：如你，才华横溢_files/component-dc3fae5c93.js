! function (e) {
    function t(r) {
        if (n[r]) return n[r].exports;
        var i = n[r] = {
            exports: {},
            id: r,
            loaded: !1
        };
        return e[r].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
    }
    var n = {};
    return t.m = e, t.c = n, t.p = "//store.res.meizu.com//www/", t(0)
}(function (e) {
    for (var t in e)
        if (Object.prototype.hasOwnProperty.call(e, t)) switch (typeof e[t]) {
            case "function":
                break;
            case "object":
                e[t] = function (t) {
                    var n = t.slice(1),
                        r = e[t[0]];
                    return function (e, t, i) {
                        r.apply(this, [e, t, i].concat(n))
                    }
                }(e[t]);
                break;
            default:
                e[t] = e[e[t]]
        }
    return e
}([function (e, t, n) {
    window.define("store:components/cart", function () {
        return n(1)
    }), window.define("store:components/magnet", function () {
        return n(22)
    })
}, function (e, t, n) {
    n(2);
    var r, i, o, a, s = n(8),
        u = n(9),
        c = n(10),
        l = n(12),
        f = n(15),
        p = n(13),
        d = new p,
        h = u.template(n(19)),
        m = "store-cart-hide",
        v = !1,
        g = null,
        y = null,
        x = [],
        b = 0,
        w = '<p class="store-cart-title">最近加入的商品</p>',
        T = '<ul class="store-cart-list" />',
        k = u.template(n(20), {
            variable: "data"
        }),
        C = u.template(n(21)),
        N = {
            icon: "xixi",
            text: "登录后可显示<br />您账号中已加入的商品哦~"
        },
        E = {
            icon: "xianqi",
            text: "您购物车内的商品均已失效"
        },
        S = {
            icon: "xianqi",
            text: "您的购物车还没有商品,<br />赶紧去选购吧~"
        },
        _ = function (e) {
            var t;
            switch (e) {
                case "empty":
                    t = h(c.isLogin ? S : N);
                    break;
                case "invalid":
                    t = h(E);
                    break;
                default:
                    t = h(c.isLogin ? S : N)
            }
            i.html(t)
        },
        j = function (e) {
            var t = e <= 99 ? e + "" : "99+";
            d.emit("count", t)
        },
        A = function () {
            l.on("update", function (e, t) {
                "count" === e && j(t)
            }), i.on("click", ".store-cart-item-delete", function () {
                var e = s(this).parents(".store-cart-item"),
                    t = e.index(),
                    n = x[t],
                    r = [];
                r = n.packageId ? [{
                    id: n.cartItemId,
                    skuId: n.skuId,
                    packageId: n.packageId,
                    packageSkuIds: n.packageSkus.map(function (e) {
                        return e.skuId
                    }).join(",")
                }] : [{
                    id: n.cartItemId,
                    skuId: n.skuId
                }], l.del(r, function (r) {
                    return !r && (b -= n.quantity, s(".store-cart-count", a).text(b), x.splice(t, 1), e.addClass("level"), void setTimeout(function () {
                        e.remove(), x.length > 4 ? o.append(k(x[4])) : x.length || _("empty")
                    }, 400))
                })
            }), r.on("mouseenter", function () {
                v || (v = !0, clearTimeout(g), clearTimeout(y), g = setTimeout(function () {
                    f.show(i), i.removeClass(m), l.mini(function (e, t) {
                        if (v) {
                            if (i.empty(), e) return _("empty"), f.hide(i);
                            if (t.mainSkus && t.mainSkus.length && JSON.stringify(t.mainSkus) === JSON.stringify(x)) return f.hide(i), void i.append(w, o, a);
                            if (x = t.mainSkus, b = t.count + t.invalidCount, t.count) {
                                o = s(T);
                                for (var n = x.length > 5 ? 5 : x.length, r = [], u = 0; u < n; u++) r.push(k(x[u]));
                                o.append(r), a = s(C(t)), i.append(w, o, a)
                            } else _(t.invalidCount ? "invalid" : "empty");
                            f.hide(i)
                        }
                    })
                }, 150))
            }), r.on("mouseleave", L), i.on("mouseenter", function () {
                clearTimeout(y)
            }), i.on("mouseleave", L), s(window).on("resize scroll", D)
        },
        L = function () {
            clearTimeout(g), y = setTimeout(function () {
                v = !1, i.addClass(m)
            }, 100)
        },
        D = function () {
            var e = r.offset(),
                t = r.outerWidth() / 2;
            i.css({
                top: e.top + r.outerHeight() + 10,
                left: e.left + t - 294
            })
        },
        O = function (e) {
            r = s(e), i = s('<div class="store-cart store-cart-hide" />').appendTo("body"), D(), setTimeout(function () {
                l.count(function (e, t) {
                    !e && j(t)
                })
            }), A()
        };
    e.exports = {
        init: O,
        on: d.on.bind(d)
    }
}, function (e, t) {}, , , , , , function (e, t, n) {
    var r, i;
    ! function (t, n) {
        "object" == typeof e && "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function (e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return n(e)
        } : n(t)
    }("undefined" != typeof window ? window : this, function (n, o) {
        function a(e) {
            var t = "length" in e && e.length,
                n = ue.type(e);
            return "function" !== n && !ue.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
        }

        function s(e, t, n) {
            if (ue.isFunction(t)) return ue.grep(e, function (e, r) {
                return !!t.call(e, r, e) !== n
            });
            if (t.nodeType) return ue.grep(e, function (e) {
                return e === t !== n
            });
            if ("string" == typeof t) {
                if (ve.test(t)) return ue.filter(t, e, n);
                t = ue.filter(t, e)
            }
            return ue.grep(e, function (e) {
                return ue.inArray(e, t) >= 0 !== n
            })
        }

        function u(e, t) {
            do e = e[t]; while (e && 1 !== e.nodeType);
            return e
        }

        function c(e) {
            var t = Ce[e] = {};
            return ue.each(e.match(ke) || [], function (e, n) {
                t[n] = !0
            }), t
        }

        function l() {
            ye.addEventListener ? (ye.removeEventListener("DOMContentLoaded", f, !1), n.removeEventListener("load", f, !1)) : (ye.detachEvent("onreadystatechange", f), n.detachEvent("onload", f))
        }

        function f() {
            (ye.addEventListener || "load" === event.type || "complete" === ye.readyState) && (l(), ue.ready())
        }

        function p(e, t, n) {
            if (void 0 === n && 1 === e.nodeType) {
                var r = "data-" + t.replace(je, "-$1").toLowerCase();
                if (n = e.getAttribute(r), "string" == typeof n) {
                    try {
                        n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : _e.test(n) ? ue.parseJSON(n) : n)
                    } catch (i) {}
                    ue.data(e, t, n)
                } else n = void 0
            }
            return n
        }

        function d(e) {
            var t;
            for (t in e)
                if (("data" !== t || !ue.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
            return !0
        }

        function h(e, t, n, r) {
            if (ue.acceptData(e)) {
                var i, o, a = ue.expando,
                    s = e.nodeType,
                    u = s ? ue.cache : e,
                    c = s ? e[a] : e[a] && a;
                if (c && u[c] && (r || u[c].data) || void 0 !== n || "string" != typeof t) return c || (c = s ? e[a] = Q.pop() || ue.guid++ : a), u[c] || (u[c] = s ? {} : {
                    toJSON: ue.noop
                }), "object" != typeof t && "function" != typeof t || (r ? u[c] = ue.extend(u[c], t) : u[c].data = ue.extend(u[c].data, t)), o = u[c], r || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[ue.camelCase(t)] = n), "string" == typeof t ? (i = o[t], null == i && (i = o[ue.camelCase(t)])) : i = o, i
            }
        }

        function m(e, t, n) {
            if (ue.acceptData(e)) {
                var r, i, o = e.nodeType,
                    a = o ? ue.cache : e,
                    s = o ? e[ue.expando] : ue.expando;
                if (a[s]) {
                    if (t && (r = n ? a[s] : a[s].data)) {
                        ue.isArray(t) ? t = t.concat(ue.map(t, ue.camelCase)) : t in r ? t = [t] : (t = ue.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;
                        for (; i--;) delete r[t[i]];
                        if (n ? !d(r) : !ue.isEmptyObject(r)) return
                    }(n || (delete a[s].data, d(a[s]))) && (o ? ue.cleanData([e], !0) : ae.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
                }
            }
        }

        function v() {
            return !0
        }

        function g() {
            return !1
        }

        function y() {
            try {
                return ye.activeElement
            } catch (e) {}
        }

        function x(e) {
            var t = ze.split("|"),
                n = e.createDocumentFragment();
            if (n.createElement)
                for (; t.length;) n.createElement(t.pop());
            return n
        }

        function b(e, t) {
            var n, r, i = 0,
                o = typeof e.getElementsByTagName !== Se ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== Se ? e.querySelectorAll(t || "*") : void 0;
            if (!o)
                for (o = [], n = e.childNodes || e; null != (r = n[i]); i++) !t || ue.nodeName(r, t) ? o.push(r) : ue.merge(o, b(r, t));
            return void 0 === t || t && ue.nodeName(e, t) ? ue.merge([e], o) : o
        }

        function w(e) {
            He.test(e.type) && (e.defaultChecked = e.checked)
        }

        function T(e, t) {
            return ue.nodeName(e, "table") && ue.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
        }

        function k(e) {
            return e.type = (null !== ue.find.attr(e, "type")) + "/" + e.type, e
        }

        function C(e) {
            var t = Ye.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }

        function N(e, t) {
            for (var n, r = 0; null != (n = e[r]); r++) ue._data(n, "globalEval", !t || ue._data(t[r], "globalEval"))
        }

        function E(e, t) {
            if (1 === t.nodeType && ue.hasData(e)) {
                var n, r, i, o = ue._data(e),
                    a = ue._data(t, o),
                    s = o.events;
                if (s) {
                    delete a.handle, a.events = {};
                    for (n in s)
                        for (r = 0, i = s[n].length; r < i; r++) ue.event.add(t, n, s[n][r])
                }
                a.data && (a.data = ue.extend({}, a.data))
            }
        }

        function S(e, t) {
            var n, r, i;
            if (1 === t.nodeType) {
                if (n = t.nodeName.toLowerCase(), !ae.noCloneEvent && t[ue.expando]) {
                    i = ue._data(t);
                    for (r in i.events) ue.removeEvent(t, r, i.handle);
                    t.removeAttribute(ue.expando)
                }
                "script" === n && t.text !== e.text ? (k(t).text = e.text, C(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ae.html5Clone && e.innerHTML && !ue.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && He.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
            }
        }

        function _(e, t) {
            var r, i = ue(t.createElement(e)).appendTo(t.body),
                o = n.getDefaultComputedStyle && (r = n.getDefaultComputedStyle(i[0])) ? r.display : ue.css(i[0], "display");
            return i.detach(), o
        }

        function j(e) {
            var t = ye,
                n = rt[e];
            return n || (n = _(e, t), "none" !== n && n || (nt = (nt || ue("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (nt[0].contentWindow || nt[0].contentDocument).document, t.write(), t.close(), n = _(e, t), nt.detach()), rt[e] = n), n
        }

        function A(e, t) {
            return {
                get: function () {
                    var n = e();
                    if (null != n) return n ? void delete this.get : (this.get = t).apply(this, arguments)
                }
            }
        }

        function L(e, t) {
            if (t in e) return t;
            for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = vt.length; i--;)
                if (t = vt[i] + n, t in e) return t;
            return r
        }

        function D(e, t) {
            for (var n, r, i, o = [], a = 0, s = e.length; a < s; a++) r = e[a], r.style && (o[a] = ue._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && De(r) && (o[a] = ue._data(r, "olddisplay", j(r.nodeName)))) : (i = De(r), (n && "none" !== n || !i) && ue._data(r, "olddisplay", i ? n : ue.css(r, "display"))));
            for (a = 0; a < s; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
            return e
        }

        function O(e, t, n) {
            var r = pt.exec(t);
            return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
        }

        function H(e, t, n, r, i) {
            for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; o < 4; o += 2) "margin" === n && (a += ue.css(e, n + Le[o], !0, i)), r ? ("content" === n && (a -= ue.css(e, "padding" + Le[o], !0, i)), "margin" !== n && (a -= ue.css(e, "border" + Le[o] + "Width", !0, i))) : (a += ue.css(e, "padding" + Le[o], !0, i), "padding" !== n && (a += ue.css(e, "border" + Le[o] + "Width", !0, i)));
            return a
        }

        function F(e, t, n) {
            var r = !0,
                i = "width" === t ? e.offsetWidth : e.offsetHeight,
                o = it(e),
                a = ae.boxSizing && "border-box" === ue.css(e, "boxSizing", !1, o);
            if (i <= 0 || null == i) {
                if (i = ot(e, t, o), (i < 0 || null == i) && (i = e.style[t]), st.test(i)) return i;
                r = a && (ae.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
            }
            return i + H(e, t, n || (a ? "border" : "content"), r, o) + "px"
        }

        function M(e, t, n, r, i) {
            return new M.prototype.init(e, t, n, r, i)
        }

        function q() {
            return setTimeout(function () {
                gt = void 0
            }), gt = ue.now()
        }

        function I(e, t) {
            var n, r = {
                    height: e
                },
                i = 0;
            for (t = t ? 1 : 0; i < 4; i += 2 - t) n = Le[i], r["margin" + n] = r["padding" + n] = e;
            return t && (r.opacity = r.width = e), r
        }

        function R(e, t, n) {
            for (var r, i = (kt[t] || []).concat(kt["*"]), o = 0, a = i.length; o < a; o++)
                if (r = i[o].call(n, t, e)) return r
        }

        function z(e, t, n) {
            var r, i, o, a, s, u, c, l, f = this,
                p = {},
                d = e.style,
                h = e.nodeType && De(e),
                m = ue._data(e, "fxshow");
            n.queue || (s = ue._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function () {
                s.unqueued || u()
            }), s.unqueued++, f.always(function () {
                f.always(function () {
                    s.unqueued--, ue.queue(e, "fx").length || s.empty.fire()
                })
            })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], c = ue.css(e, "display"), l = "none" === c ? ue._data(e, "olddisplay") || j(e.nodeName) : c, "inline" === l && "none" === ue.css(e, "float") && (ae.inlineBlockNeedsLayout && "inline" !== j(e.nodeName) ? d.zoom = 1 : d.display = "inline-block")), n.overflow && (d.overflow = "hidden", ae.shrinkWrapBlocks() || f.always(function () {
                d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
            }));
            for (r in t)
                if (i = t[r], xt.exec(i)) {
                    if (delete t[r], o = o || "toggle" === i, i === (h ? "hide" : "show")) {
                        if ("show" !== i || !m || void 0 === m[r]) continue;
                        h = !0
                    }
                    p[r] = m && m[r] || ue.style(e, r)
                } else c = void 0;
            if (ue.isEmptyObject(p)) "inline" === ("none" === c ? j(e.nodeName) : c) && (d.display = c);
            else {
                m ? "hidden" in m && (h = m.hidden) : m = ue._data(e, "fxshow", {}), o && (m.hidden = !h), h ? ue(e).show() : f.done(function () {
                    ue(e).hide()
                }), f.done(function () {
                    var t;
                    ue._removeData(e, "fxshow");
                    for (t in p) ue.style(e, t, p[t])
                });
                for (r in p) a = R(h ? m[r] : 0, r, f), r in m || (m[r] = a.start, h && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
            }
        }

        function B(e, t) {
            var n, r, i, o, a;
            for (n in e)
                if (r = ue.camelCase(n), i = t[r], o = e[n], ue.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = ue.cssHooks[r], a && "expand" in a) {
                    o = a.expand(o), delete e[r];
                    for (n in o) n in e || (e[n] = o[n], t[n] = i)
                } else t[r] = i
        }

        function P(e, t, n) {
            var r, i, o = 0,
                a = Tt.length,
                s = ue.Deferred().always(function () {
                    delete u.elem
                }),
                u = function () {
                    if (i) return !1;
                    for (var t = gt || q(), n = Math.max(0, c.startTime + c.duration - t), r = n / c.duration || 0, o = 1 - r, a = 0, u = c.tweens.length; a < u; a++) c.tweens[a].run(o);
                    return s.notifyWith(e, [c, o, n]), o < 1 && u ? n : (s.resolveWith(e, [c]), !1)
                },
                c = s.promise({
                    elem: e,
                    props: ue.extend({}, t),
                    opts: ue.extend(!0, {
                        specialEasing: {}
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: gt || q(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function (t, n) {
                        var r = ue.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                        return c.tweens.push(r), r
                    },
                    stop: function (t) {
                        var n = 0,
                            r = t ? c.tweens.length : 0;
                        if (i) return this;
                        for (i = !0; n < r; n++) c.tweens[n].run(1);
                        return t ? s.resolveWith(e, [c, t]) : s.rejectWith(e, [c, t]), this
                    }
                }),
                l = c.props;
            for (B(l, c.opts.specialEasing); o < a; o++)
                if (r = Tt[o].call(c, e, l, c.opts)) return r;
            return ue.map(l, R, c), ue.isFunction(c.opts.start) && c.opts.start.call(e, c), ue.fx.timer(ue.extend(u, {
                elem: e,
                anim: c,
                queue: c.opts.queue
            })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
        }

        function W(e) {
            return function (t, n) {
                "string" != typeof t && (n = t, t = "*");
                var r, i = 0,
                    o = t.toLowerCase().match(ke) || [];
                if (ue.isFunction(n))
                    for (; r = o[i++];) "+" === r.charAt(0) ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
            }
        }

        function $(e, t, n, r) {
            function i(s) {
                var u;
                return o[s] = !0, ue.each(e[s] || [], function (e, s) {
                    var c = s(t, n, r);
                    return "string" != typeof c || a || o[c] ? a ? !(u = c) : void 0 : (t.dataTypes.unshift(c), i(c), !1)
                }), u
            }
            var o = {},
                a = e === Jt;
            return i(t.dataTypes[0]) || !o["*"] && i("*")
        }

        function X(e, t) {
            var n, r, i = ue.ajaxSettings.flatOptions || {};
            for (r in t) void 0 !== t[r] && ((i[r] ? e : n || (n = {}))[r] = t[r]);
            return n && ue.extend(!0, e, n), e
        }

        function U(e, t, n) {
            for (var r, i, o, a, s = e.contents, u = e.dataTypes;
                "*" === u[0];) u.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
            if (i)
                for (a in s)
                    if (s[a] && s[a].test(i)) {
                        u.unshift(a);
                        break
                    } if (u[0] in n) o = u[0];
            else {
                for (a in n) {
                    if (!u[0] || e.converters[a + " " + u[0]]) {
                        o = a;
                        break
                    }
                    r || (r = a)
                }
                o = o || r
            }
            if (o) return o !== u[0] && u.unshift(o), n[o]
        }

        function J(e, t, n, r) {
            var i, o, a, s, u, c = {},
                l = e.dataTypes.slice();
            if (l[1])
                for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
            for (o = l.shift(); o;)
                if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = l.shift())
                    if ("*" === o) o = u;
                    else if ("*" !== u && u !== o) {
                if (a = c[u + " " + o] || c["* " + o], !a)
                    for (i in c)
                        if (s = i.split(" "), s[1] === o && (a = c[u + " " + s[0]] || c["* " + s[0]])) {
                            a === !0 ? a = c[i] : c[i] !== !0 && (o = s[0], l.unshift(s[1]));
                            break
                        } if (a !== !0)
                    if (a && e["throws"]) t = a(t);
                    else try {
                        t = a(t)
                    } catch (f) {
                        return {
                            state: "parsererror",
                            error: a ? f : "No conversion from " + u + " to " + o
                        }
                    }
            }
            return {
                state: "success",
                data: t
            }
        }

        function G(e, t, n, r) {
            var i;
            if (ue.isArray(t)) ue.each(t, function (t, i) {
                n || Yt.test(e) ? r(e, i) : G(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
            });
            else if (n || "object" !== ue.type(t)) r(e, t);
            else
                for (i in t) G(e + "[" + i + "]", t[i], n, r)
        }

        function V() {
            try {
                return new n.XMLHttpRequest
            } catch (e) {}
        }

        function K() {
            try {
                return new n.ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {}
        }

        function Y(e) {
            return ue.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
        }
        var Q = [],
            Z = Q.slice,
            ee = Q.concat,
            te = Q.push,
            ne = Q.indexOf,
            re = {},
            ie = re.toString,
            oe = re.hasOwnProperty,
            ae = {},
            se = "1.11.3",
            ue = function (e, t) {
                return new ue.fn.init(e, t)
            },
            ce = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            le = /^-ms-/,
            fe = /-([\da-z])/gi,
            pe = function (e, t) {
                return t.toUpperCase()
            };
        ue.fn = ue.prototype = {
            jquery: se,
            constructor: ue,
            selector: "",
            length: 0,
            toArray: function () {
                return Z.call(this)
            },
            get: function (e) {
                return null != e ? e < 0 ? this[e + this.length] : this[e] : Z.call(this)
            },
            pushStack: function (e) {
                var t = ue.merge(this.constructor(), e);
                return t.prevObject = this, t.context = this.context, t
            },
            each: function (e, t) {
                return ue.each(this, e, t)
            },
            map: function (e) {
                return this.pushStack(ue.map(this, function (t, n) {
                    return e.call(t, n, t)
                }))
            },
            slice: function () {
                return this.pushStack(Z.apply(this, arguments))
            },
            first: function () {
                return this.eq(0)
            },
            last: function () {
                return this.eq(-1)
            },
            eq: function (e) {
                var t = this.length,
                    n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
            },
            end: function () {
                return this.prevObject || this.constructor(null)
            },
            push: te,
            sort: Q.sort,
            splice: Q.splice
        }, ue.extend = ue.fn.extend = function () {
            var e, t, n, r, i, o, a = arguments[0] || {},
                s = 1,
                u = arguments.length,
                c = !1;
            for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || ue.isFunction(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
                if (null != (i = arguments[s]))
                    for (r in i) e = a[r], n = i[r], a !== n && (c && n && (ue.isPlainObject(n) || (t = ue.isArray(n))) ? (t ? (t = !1, o = e && ue.isArray(e) ? e : []) : o = e && ue.isPlainObject(e) ? e : {}, a[r] = ue.extend(c, o, n)) : void 0 !== n && (a[r] = n));
            return a
        }, ue.extend({
            expando: "jQuery" + (se + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (e) {
                throw new Error(e)
            },
            noop: function () {},
            isFunction: function (e) {
                return "function" === ue.type(e)
            },
            isArray: Array.isArray || function (e) {
                return "array" === ue.type(e)
            },
            isWindow: function (e) {
                return null != e && e == e.window
            },
            isNumeric: function (e) {
                return !ue.isArray(e) && e - parseFloat(e) + 1 >= 0
            },
            isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            isPlainObject: function (e) {
                var t;
                if (!e || "object" !== ue.type(e) || e.nodeType || ue.isWindow(e)) return !1;
                try {
                    if (e.constructor && !oe.call(e, "constructor") && !oe.call(e.constructor.prototype, "isPrototypeOf")) return !1
                } catch (n) {
                    return !1
                }
                if (ae.ownLast)
                    for (t in e) return oe.call(e, t);
                for (t in e);
                return void 0 === t || oe.call(e, t)
            },
            type: function (e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? re[ie.call(e)] || "object" : typeof e
            },
            globalEval: function (e) {
                e && ue.trim(e) && (n.execScript || function (e) {
                    n.eval.call(n, e)
                })(e)
            },
            camelCase: function (e) {
                return e.replace(le, "ms-").replace(fe, pe)
            },
            nodeName: function (e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function (e, t, n) {
                var r, i = 0,
                    o = e.length,
                    s = a(e);
                if (n) {
                    if (s)
                        for (; i < o && (r = t.apply(e[i], n), r !== !1); i++);
                    else
                        for (i in e)
                            if (r = t.apply(e[i], n), r === !1) break
                } else if (s)
                    for (; i < o && (r = t.call(e[i], i, e[i]), r !== !1); i++);
                else
                    for (i in e)
                        if (r = t.call(e[i], i, e[i]), r === !1) break;
                return e
            },
            trim: function (e) {
                return null == e ? "" : (e + "").replace(ce, "")
            },
            makeArray: function (e, t) {
                var n = t || [];
                return null != e && (a(Object(e)) ? ue.merge(n, "string" == typeof e ? [e] : e) : te.call(n, e)), n
            },
            inArray: function (e, t, n) {
                var r;
                if (t) {
                    if (ne) return ne.call(t, e, n);
                    for (r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0; n < r; n++)
                        if (n in t && t[n] === e) return n
                }
                return -1
            },
            merge: function (e, t) {
                for (var n = +t.length, r = 0, i = e.length; r < n;) e[i++] = t[r++];
                if (n !== n)
                    for (; void 0 !== t[r];) e[i++] = t[r++];
                return e.length = i, e
            },
            grep: function (e, t, n) {
                for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++) r = !t(e[o], o), r !== s && i.push(e[o]);
                return i
            },
            map: function (e, t, n) {
                var r, i = 0,
                    o = e.length,
                    s = a(e),
                    u = [];
                if (s)
                    for (; i < o; i++) r = t(e[i], i, n), null != r && u.push(r);
                else
                    for (i in e) r = t(e[i], i, n), null != r && u.push(r);
                return ee.apply([], u)
            },
            guid: 1,
            proxy: function (e, t) {
                var n, r, i;
                if ("string" == typeof t && (i = e[t], t = e, e = i), ue.isFunction(e)) return n = Z.call(arguments, 2), r = function () {
                    return e.apply(t || this, n.concat(Z.call(arguments)))
                }, r.guid = e.guid = e.guid || ue.guid++, r
            },
            now: function () {
                return +new Date
            },
            support: ae
        }), ue.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
            re["[object " + t + "]"] = t.toLowerCase()
        });
        var de = function (e) {
            function t(e, t, n, r) {
                var i, o, a, s, u, c, f, d, h, m;
                if ((t ? t.ownerDocument || t : z) !== D && L(t), t = t || D, n = n || [], s = t.nodeType, "string" != typeof e || !e || 1 !== s && 9 !== s && 11 !== s) return n;
                if (!r && H) {
                    if (11 !== s && (i = ye.exec(e)))
                        if (a = i[1]) {
                            if (9 === s) {
                                if (o = t.getElementById(a), !o || !o.parentNode) return n;
                                if (o.id === a) return n.push(o), n
                            } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && I(t, o) && o.id === a) return n.push(o), n
                        } else {
                            if (i[2]) return Q.apply(n, t.getElementsByTagName(e)), n;
                            if ((a = i[3]) && w.getElementsByClassName) return Q.apply(n, t.getElementsByClassName(a)), n
                        } if (w.qsa && (!F || !F.test(e))) {
                        if (d = f = R, h = t, m = 1 !== s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                            for (c = N(e), (f = t.getAttribute("id")) ? d = f.replace(be, "\\$&") : t.setAttribute("id", d), d = "[id='" + d + "'] ", u = c.length; u--;) c[u] = d + p(c[u]);
                            h = xe.test(e) && l(t.parentNode) || t, m = c.join(",")
                        }
                        if (m) try {
                            return Q.apply(n, h.querySelectorAll(m)), n
                        } catch (v) {} finally {
                            f || t.removeAttribute("id")
                        }
                    }
                }
                return S(e.replace(ue, "$1"), t, n, r)
            }

            function n() {
                function e(n, r) {
                    return t.push(n + " ") > T.cacheLength && delete e[t.shift()], e[n + " "] = r
                }
                var t = [];
                return e
            }

            function r(e) {
                return e[R] = !0, e
            }

            function i(e) {
                var t = D.createElement("div");
                try {
                    return !!e(t)
                } catch (n) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function o(e, t) {
                for (var n = e.split("|"), r = e.length; r--;) T.attrHandle[n[r]] = t
            }

            function a(e, t) {
                var n = t && e,
                    r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || J) - (~e.sourceIndex || J);
                if (r) return r;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function s(e) {
                return function (t) {
                    var n = t.nodeName.toLowerCase();
                    return "input" === n && t.type === e
                }
            }

            function u(e) {
                return function (t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            function c(e) {
                return r(function (t) {
                    return t = +t, r(function (n, r) {
                        for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                    })
                })
            }

            function l(e) {
                return e && "undefined" != typeof e.getElementsByTagName && e
            }

            function f() {}

            function p(e) {
                for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
                return r
            }

            function d(e, t, n) {
                var r = t.dir,
                    i = n && "parentNode" === r,
                    o = P++;
                return t.first ? function (t, n, o) {
                    for (; t = t[r];)
                        if (1 === t.nodeType || i) return e(t, n, o)
                } : function (t, n, a) {
                    var s, u, c = [B, o];
                    if (a) {
                        for (; t = t[r];)
                            if ((1 === t.nodeType || i) && e(t, n, a)) return !0
                    } else
                        for (; t = t[r];)
                            if (1 === t.nodeType || i) {
                                if (u = t[R] || (t[R] = {}), (s = u[r]) && s[0] === B && s[1] === o) return c[2] = s[2];
                                if (u[r] = c, c[2] = e(t, n, a)) return !0
                            }
                }
            }

            function h(e) {
                return e.length > 1 ? function (t, n, r) {
                    for (var i = e.length; i--;)
                        if (!e[i](t, n, r)) return !1;
                    return !0
                } : e[0]
            }

            function m(e, n, r) {
                for (var i = 0, o = n.length; i < o; i++) t(e, n[i], r);
                return r
            }

            function v(e, t, n, r, i) {
                for (var o, a = [], s = 0, u = e.length, c = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), c && t.push(s)));
                return a
            }

            function g(e, t, n, i, o, a) {
                return i && !i[R] && (i = g(i)), o && !o[R] && (o = g(o, a)), r(function (r, a, s, u) {
                    var c, l, f, p = [],
                        d = [],
                        h = a.length,
                        g = r || m(t || "*", s.nodeType ? [s] : s, []),
                        y = !e || !r && t ? g : v(g, p, e, s, u),
                        x = n ? o || (r ? e : h || i) ? [] : a : y;
                    if (n && n(y, x, s, u), i)
                        for (c = v(x, d), i(c, [], s, u), l = c.length; l--;)(f = c[l]) && (x[d[l]] = !(y[d[l]] = f));
                    if (r) {
                        if (o || e) {
                            if (o) {
                                for (c = [], l = x.length; l--;)(f = x[l]) && c.push(y[l] = f);
                                o(null, x = [], c, u)
                            }
                            for (l = x.length; l--;)(f = x[l]) && (c = o ? ee(r, f) : p[l]) > -1 && (r[c] = !(a[c] = f))
                        }
                    } else x = v(x === a ? x.splice(h, x.length) : x), o ? o(null, a, x, u) : Q.apply(a, x)
                })
            }

            function y(e) {
                for (var t, n, r, i = e.length, o = T.relative[e[0].type], a = o || T.relative[" "], s = o ? 1 : 0, u = d(function (e) {
                        return e === t
                    }, a, !0), c = d(function (e) {
                        return ee(t, e) > -1
                    }, a, !0), l = [function (e, n, r) {
                        var i = !o && (r || n !== _) || ((t = n).nodeType ? u(e, n, r) : c(e, n, r));
                        return t = null, i
                    }]; s < i; s++)
                    if (n = T.relative[e[s].type]) l = [d(h(l), n)];
                    else {
                        if (n = T.filter[e[s].type].apply(null, e[s].matches), n[R]) {
                            for (r = ++s; r < i && !T.relative[e[r].type]; r++);
                            return g(s > 1 && h(l), s > 1 && p(e.slice(0, s - 1).concat({
                                value: " " === e[s - 2].type ? "*" : ""
                            })).replace(ue, "$1"), n, s < r && y(e.slice(s, r)), r < i && y(e = e.slice(r)), r < i && p(e))
                        }
                        l.push(n)
                    } return h(l)
            }

            function x(e, n) {
                var i = n.length > 0,
                    o = e.length > 0,
                    a = function (r, a, s, u, c) {
                        var l, f, p, d = 0,
                            h = "0",
                            m = r && [],
                            g = [],
                            y = _,
                            x = r || o && T.find.TAG("*", c),
                            b = B += null == y ? 1 : Math.random() || .1,
                            w = x.length;
                        for (c && (_ = a !== D && a); h !== w && null != (l = x[h]); h++) {
                            if (o && l) {
                                for (f = 0; p = e[f++];)
                                    if (p(l, a, s)) {
                                        u.push(l);
                                        break
                                    } c && (B = b)
                            }
                            i && ((l = !p && l) && d--, r && m.push(l))
                        }
                        if (d += h, i && h !== d) {
                            for (f = 0; p = n[f++];) p(m, g, a, s);
                            if (r) {
                                if (d > 0)
                                    for (; h--;) m[h] || g[h] || (g[h] = K.call(u));
                                g = v(g)
                            }
                            Q.apply(u, g), c && !r && g.length > 0 && d + n.length > 1 && t.uniqueSort(u)
                        }
                        return c && (B = b, _ = y), m
                    };
                return i ? r(a) : a
            }
            var b, w, T, k, C, N, E, S, _, j, A, L, D, O, H, F, M, q, I, R = "sizzle" + 1 * new Date,
                z = e.document,
                B = 0,
                P = 0,
                W = n(),
                $ = n(),
                X = n(),
                U = function (e, t) {
                    return e === t && (A = !0), 0
                },
                J = 1 << 31,
                G = {}.hasOwnProperty,
                V = [],
                K = V.pop,
                Y = V.push,
                Q = V.push,
                Z = V.slice,
                ee = function (e, t) {
                    for (var n = 0, r = e.length; n < r; n++)
                        if (e[n] === t) return n;
                    return -1
                },
                te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                ne = "[\\x20\\t\\r\\n\\f]",
                re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                ie = re.replace("w", "w#"),
                oe = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
                ae = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
                se = new RegExp(ne + "+", "g"),
                ue = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
                ce = new RegExp("^" + ne + "*," + ne + "*"),
                le = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
                fe = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
                pe = new RegExp(ae),
                de = new RegExp("^" + ie + "$"),
                he = {
                    ID: new RegExp("^#(" + re + ")"),
                    CLASS: new RegExp("^\\.(" + re + ")"),
                    TAG: new RegExp("^(" + re.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + oe),
                    PSEUDO: new RegExp("^" + ae),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + te + ")$", "i"),
                    needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
                },
                me = /^(?:input|select|textarea|button)$/i,
                ve = /^h\d$/i,
                ge = /^[^{]+\{\s*\[native \w/,
                ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                xe = /[+~]/,
                be = /'|\\/g,
                we = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
                Te = function (e, t, n) {
                    var r = "0x" + t - 65536;
                    return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                },
                ke = function () {
                    L()
                };
            try {
                Q.apply(V = Z.call(z.childNodes), z.childNodes), V[z.childNodes.length].nodeType
            } catch (Ce) {
                Q = {
                    apply: V.length ? function (e, t) {
                        Y.apply(e, Z.call(t))
                    } : function (e, t) {
                        for (var n = e.length, r = 0; e[n++] = t[r++];);
                        e.length = n - 1
                    }
                }
            }
            w = t.support = {}, C = t.isXML = function (e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, L = t.setDocument = function (e) {
                var t, n, r = e ? e.ownerDocument || e : z;
                return r !== D && 9 === r.nodeType && r.documentElement ? (D = r, O = r.documentElement, n = r.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", ke, !1) : n.attachEvent && n.attachEvent("onunload", ke)), H = !C(r), w.attributes = i(function (e) {
                    return e.className = "i", !e.getAttribute("className")
                }), w.getElementsByTagName = i(function (e) {
                    return e.appendChild(r.createComment("")), !e.getElementsByTagName("*").length
                }), w.getElementsByClassName = ge.test(r.getElementsByClassName), w.getById = i(function (e) {
                    return O.appendChild(e).id = R, !r.getElementsByName || !r.getElementsByName(R).length
                }), w.getById ? (T.find.ID = function (e, t) {
                    if ("undefined" != typeof t.getElementById && H) {
                        var n = t.getElementById(e);
                        return n && n.parentNode ? [n] : []
                    }
                }, T.filter.ID = function (e) {
                    var t = e.replace(we, Te);
                    return function (e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete T.find.ID, T.filter.ID = function (e) {
                    var t = e.replace(we, Te);
                    return function (e) {
                        var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }), T.find.TAG = w.getElementsByTagName ? function (e, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
                } : function (e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return o
                }, T.find.CLASS = w.getElementsByClassName && function (e, t) {
                    if (H) return t.getElementsByClassName(e)
                }, M = [], F = [], (w.qsa = ge.test(r.querySelectorAll)) && (i(function (e) {
                    O.appendChild(e).innerHTML = "<a id='" + R + "'></a><select id='" + R + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && F.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || F.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + R + "-]").length || F.push("~="), e.querySelectorAll(":checked").length || F.push(":checked"), e.querySelectorAll("a#" + R + "+*").length || F.push(".#.+[+~]")
                }), i(function (e) {
                    var t = r.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && F.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || F.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), F.push(",.*:")
                })), (w.matchesSelector = ge.test(q = O.matches || O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector)) && i(function (e) {
                    w.disconnectedMatch = q.call(e, "div"), q.call(e, "[s!='']:x"), M.push("!=", ae)
                }), F = F.length && new RegExp(F.join("|")), M = M.length && new RegExp(M.join("|")), t = ge.test(O.compareDocumentPosition), I = t || ge.test(O.contains) ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function (e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, U = t ? function (e, t) {
                    if (e === t) return A = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === r || e.ownerDocument === z && I(z, e) ? -1 : t === r || t.ownerDocument === z && I(z, t) ? 1 : j ? ee(j, e) - ee(j, t) : 0 : 4 & n ? -1 : 1)
                } : function (e, t) {
                    if (e === t) return A = !0, 0;
                    var n, i = 0,
                        o = e.parentNode,
                        s = t.parentNode,
                        u = [e],
                        c = [t];
                    if (!o || !s) return e === r ? -1 : t === r ? 1 : o ? -1 : s ? 1 : j ? ee(j, e) - ee(j, t) : 0;
                    if (o === s) return a(e, t);
                    for (n = e; n = n.parentNode;) u.unshift(n);
                    for (n = t; n = n.parentNode;) c.unshift(n);
                    for (; u[i] === c[i];) i++;
                    return i ? a(u[i], c[i]) : u[i] === z ? -1 : c[i] === z ? 1 : 0
                }, r) : D
            }, t.matches = function (e, n) {
                return t(e, null, null, n)
            }, t.matchesSelector = function (e, n) {
                if ((e.ownerDocument || e) !== D && L(e), n = n.replace(fe, "='$1']"), w.matchesSelector && H && (!M || !M.test(n)) && (!F || !F.test(n))) try {
                    var r = q.call(e, n);
                    if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                } catch (i) {}
                return t(n, D, null, [e]).length > 0
            }, t.contains = function (e, t) {
                return (e.ownerDocument || e) !== D && L(e), I(e, t)
            }, t.attr = function (e, t) {
                (e.ownerDocument || e) !== D && L(e);
                var n = T.attrHandle[t.toLowerCase()],
                    r = n && G.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !H) : void 0;
                return void 0 !== r ? r : w.attributes || !H ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }, t.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, t.uniqueSort = function (e) {
                var t, n = [],
                    r = 0,
                    i = 0;
                if (A = !w.detectDuplicates, j = !w.sortStable && e.slice(0), e.sort(U), A) {
                    for (; t = e[i++];) t === e[i] && (r = n.push(i));
                    for (; r--;) e.splice(n[r], 1)
                }
                return j = null, e
            }, k = t.getText = function (e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += k(e)
                    } else if (3 === i || 4 === i) return e.nodeValue
                } else
                    for (; t = e[r++];) n += k(t);
                return n
            }, T = t.selectors = {
                cacheLength: 50,
                createPseudo: r,
                match: he,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function (e) {
                        return e[1] = e[1].replace(we, Te), e[3] = (e[3] || e[4] || e[5] || "").replace(we, Te), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function (e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                    },
                    PSEUDO: function (e) {
                        var t, n = !e[6] && e[2];
                        return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && pe.test(n) && (t = N(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (e) {
                        var t = e.replace(we, Te).toLowerCase();
                        return "*" === e ? function () {
                            return !0
                        } : function (e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function (e) {
                        var t = W[e + " "];
                        return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && W(e, function (e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function (e, n, r) {
                        return function (i) {
                            var o = t.attr(i, e);
                            return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(se, " ") + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"))
                        }
                    },
                    CHILD: function (e, t, n, r, i) {
                        var o = "nth" !== e.slice(0, 3),
                            a = "last" !== e.slice(-4),
                            s = "of-type" === t;
                        return 1 === r && 0 === i ? function (e) {
                            return !!e.parentNode
                        } : function (t, n, u) {
                            var c, l, f, p, d, h, m = o !== a ? "nextSibling" : "previousSibling",
                                v = t.parentNode,
                                g = s && t.nodeName.toLowerCase(),
                                y = !u && !s;
                            if (v) {
                                if (o) {
                                    for (; m;) {
                                        for (f = t; f = f[m];)
                                            if (s ? f.nodeName.toLowerCase() === g : 1 === f.nodeType) return !1;
                                        h = m = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [a ? v.firstChild : v.lastChild], a && y) {
                                    for (l = v[R] || (v[R] = {}), c = l[e] || [], d = c[0] === B && c[1], p = c[0] === B && c[2], f = d && v.childNodes[d]; f = ++d && f && f[m] || (p = d = 0) || h.pop();)
                                        if (1 === f.nodeType && ++p && f === t) {
                                            l[e] = [B, d, p];
                                            break
                                        }
                                } else if (y && (c = (t[R] || (t[R] = {}))[e]) && c[0] === B) p = c[1];
                                else
                                    for (;
                                        (f = ++d && f && f[m] || (p = d = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== g : 1 !== f.nodeType) || !++p || (y && ((f[R] || (f[R] = {}))[e] = [B, p]), f !== t)););
                                return p -= i, p === r || p % r === 0 && p / r >= 0
                            }
                        }
                    },
                    PSEUDO: function (e, n) {
                        var i, o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                        return o[R] ? o(n) : o.length > 1 ? (i = [e, e, "", n], T.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function (e, t) {
                            for (var r, i = o(e, n), a = i.length; a--;) r = ee(e, i[a]), e[r] = !(t[r] = i[a])
                        }) : function (e) {
                            return o(e, 0, i)
                        }) : o
                    }
                },
                pseudos: {
                    not: r(function (e) {
                        var t = [],
                            n = [],
                            i = E(e.replace(ue, "$1"));
                        return i[R] ? r(function (e, t, n, r) {
                            for (var o, a = i(e, null, r, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                        }) : function (e, r, o) {
                            return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
                        }
                    }),
                    has: r(function (e) {
                        return function (n) {
                            return t(e, n).length > 0
                        }
                    }),
                    contains: r(function (e) {
                        return e = e.replace(we, Te),
                            function (t) {
                                return (t.textContent || t.innerText || k(t)).indexOf(e) > -1
                            }
                    }),
                    lang: r(function (e) {
                        return de.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(we, Te).toLowerCase(),
                            function (t) {
                                var n;
                                do
                                    if (n = H ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function (t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function (e) {
                        return e === O
                    },
                    focus: function (e) {
                        return e === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function (e) {
                        return e.disabled === !1
                    },
                    disabled: function (e) {
                        return e.disabled === !0
                    },
                    checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function (e) {
                        return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                    },
                    empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function (e) {
                        return !T.pseudos.empty(e)
                    },
                    header: function (e) {
                        return ve.test(e.nodeName)
                    },
                    input: function (e) {
                        return me.test(e.nodeName)
                    },
                    button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function (e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: c(function () {
                        return [0]
                    }),
                    last: c(function (e, t) {
                        return [t - 1]
                    }),
                    eq: c(function (e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: c(function (e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: c(function (e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: c(function (e, t, n) {
                        for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
                        return e
                    }),
                    gt: c(function (e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                        return e
                    })
                }
            }, T.pseudos.nth = T.pseudos.eq;
            for (b in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) T.pseudos[b] = s(b);
            for (b in {
                    submit: !0,
                    reset: !0
                }) T.pseudos[b] = u(b);
            return f.prototype = T.filters = T.pseudos, T.setFilters = new f, N = t.tokenize = function (e, n) {
                var r, i, o, a, s, u, c, l = $[e + " "];
                if (l) return n ? 0 : l.slice(0);
                for (s = e, u = [], c = T.preFilter; s;) {
                    r && !(i = ce.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), r = !1, (i = le.exec(s)) && (r = i.shift(), o.push({
                        value: r,
                        type: i[0].replace(ue, " ")
                    }), s = s.slice(r.length));
                    for (a in T.filter) !(i = he[a].exec(s)) || c[a] && !(i = c[a](i)) || (r = i.shift(), o.push({
                        value: r,
                        type: a,
                        matches: i
                    }), s = s.slice(r.length));
                    if (!r) break
                }
                return n ? s.length : s ? t.error(e) : $(e, u).slice(0)
            }, E = t.compile = function (e, t) {
                var n, r = [],
                    i = [],
                    o = X[e + " "];
                if (!o) {
                    for (t || (t = N(e)), n = t.length; n--;) o = y(t[n]), o[R] ? r.push(o) : i.push(o);
                    o = X(e, x(i, r)), o.selector = e
                }
                return o
            }, S = t.select = function (e, t, n, r) {
                var i, o, a, s, u, c = "function" == typeof e && e,
                    f = !r && N(e = c.selector || e);
                if (n = n || [], 1 === f.length) {
                    if (o = f[0] = f[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && w.getById && 9 === t.nodeType && H && T.relative[o[1].type]) {
                        if (t = (T.find.ID(a.matches[0].replace(we, Te), t) || [])[0], !t) return n;
                        c && (t = t.parentNode), e = e.slice(o.shift().value.length)
                    }
                    for (i = he.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !T.relative[s = a.type]);)
                        if ((u = T.find[s]) && (r = u(a.matches[0].replace(we, Te), xe.test(o[0].type) && l(t.parentNode) || t))) {
                            if (o.splice(i, 1), e = r.length && p(o), !e) return Q.apply(n, r), n;
                            break
                        }
                }
                return (c || E(e, f))(r, t, !H, n, xe.test(e) && l(t.parentNode) || t), n
            }, w.sortStable = R.split("").sort(U).join("") === R, w.detectDuplicates = !!A, L(), w.sortDetached = i(function (e) {
                return 1 & e.compareDocumentPosition(D.createElement("div"))
            }), i(function (e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || o("type|href|height|width", function (e, t, n) {
                if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), w.attributes && i(function (e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || o("value", function (e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
            }), i(function (e) {
                return null == e.getAttribute("disabled")
            }) || o(te, function (e, t, n) {
                var r;
                if (!n) return e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }), t
        }(n);
        ue.find = de, ue.expr = de.selectors, ue.expr[":"] = ue.expr.pseudos, ue.unique = de.uniqueSort, ue.text = de.getText, ue.isXMLDoc = de.isXML, ue.contains = de.contains;
        var he = ue.expr.match.needsContext,
            me = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            ve = /^.[^:#\[\.,]*$/;
        ue.filter = function (e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? ue.find.matchesSelector(r, e) ? [r] : [] : ue.find.matches(e, ue.grep(t, function (e) {
                return 1 === e.nodeType
            }))
        }, ue.fn.extend({
            find: function (e) {
                var t, n = [],
                    r = this,
                    i = r.length;
                if ("string" != typeof e) return this.pushStack(ue(e).filter(function () {
                    for (t = 0; t < i; t++)
                        if (ue.contains(r[t], this)) return !0
                }));
                for (t = 0; t < i; t++) ue.find(e, r[t], n);
                return n = this.pushStack(i > 1 ? ue.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
            },
            filter: function (e) {
                return this.pushStack(s(this, e || [], !1))
            },
            not: function (e) {
                return this.pushStack(s(this, e || [], !0))
            },
            is: function (e) {
                return !!s(this, "string" == typeof e && he.test(e) ? ue(e) : e || [], !1).length
            }
        });
        var ge, ye = n.document,
            xe = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            be = ue.fn.init = function (e, t) {
                var n, r;
                if (!e) return this;
                if ("string" == typeof e) {
                    if (n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : xe.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || ge).find(e) : this.constructor(t).find(e);
                    if (n[1]) {
                        if (t = t instanceof ue ? t[0] : t, ue.merge(this, ue.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : ye, !0)), me.test(n[1]) && ue.isPlainObject(t))
                            for (n in t) ue.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                        return this
                    }
                    if (r = ye.getElementById(n[2]), r && r.parentNode) {
                        if (r.id !== n[2]) return ge.find(e);
                        this.length = 1, this[0] = r
                    }
                    return this.context = ye, this.selector = e, this
                }
                return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ue.isFunction(e) ? "undefined" != typeof ge.ready ? ge.ready(e) : e(ue) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), ue.makeArray(e, this))
            };
        be.prototype = ue.fn, ge = ue(ye);
        var we = /^(?:parents|prev(?:Until|All))/,
            Te = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        ue.extend({
            dir: function (e, t, n) {
                for (var r = [], i = e[t]; i && 9 !== i.nodeType && (void 0 === n || 1 !== i.nodeType || !ue(i).is(n));) 1 === i.nodeType && r.push(i), i = i[t];
                return r
            },
            sibling: function (e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            }
        }), ue.fn.extend({
            has: function (e) {
                var t, n = ue(e, this),
                    r = n.length;
                return this.filter(function () {
                    for (t = 0; t < r; t++)
                        if (ue.contains(this, n[t])) return !0
                })
            },
            closest: function (e, t) {
                for (var n, r = 0, i = this.length, o = [], a = he.test(e) || "string" != typeof e ? ue(e, t || this.context) : 0; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && ue.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        } return this.pushStack(o.length > 1 ? ue.unique(o) : o)
            },
            index: function (e) {
                return e ? "string" == typeof e ? ue.inArray(this[0], ue(e)) : ue.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function (e, t) {
                return this.pushStack(ue.unique(ue.merge(this.get(), ue(e, t))))
            },
            addBack: function (e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), ue.each({
            parent: function (e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function (e) {
                return ue.dir(e, "parentNode")
            },
            parentsUntil: function (e, t, n) {
                return ue.dir(e, "parentNode", n)
            },
            next: function (e) {
                return u(e, "nextSibling")
            },
            prev: function (e) {
                return u(e, "previousSibling")
            },
            nextAll: function (e) {
                return ue.dir(e, "nextSibling")
            },
            prevAll: function (e) {
                return ue.dir(e, "previousSibling")
            },
            nextUntil: function (e, t, n) {
                return ue.dir(e, "nextSibling", n)
            },
            prevUntil: function (e, t, n) {
                return ue.dir(e, "previousSibling", n)
            },
            siblings: function (e) {
                return ue.sibling((e.parentNode || {}).firstChild, e)
            },
            children: function (e) {
                return ue.sibling(e.firstChild)
            },
            contents: function (e) {
                return ue.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ue.merge([], e.childNodes)
            }
        }, function (e, t) {
            ue.fn[e] = function (n, r) {
                var i = ue.map(this, t, n);
                return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = ue.filter(r, i)), this.length > 1 && (Te[e] || (i = ue.unique(i)), we.test(e) && (i = i.reverse())), this.pushStack(i)
            }
        });
        var ke = /\S+/g,
            Ce = {};
        ue.Callbacks = function (e) {
            e = "string" == typeof e ? Ce[e] || c(e) : ue.extend({}, e);
            var t, n, r, i, o, a, s = [],
                u = !e.once && [],
                l = function (c) {
                    for (n = e.memory && c, r = !0, o = a || 0, a = 0, i = s.length, t = !0; s && o < i; o++)
                        if (s[o].apply(c[0], c[1]) === !1 && e.stopOnFalse) {
                            n = !1;
                            break
                        } t = !1, s && (u ? u.length && l(u.shift()) : n ? s = [] : f.disable())
                },
                f = {
                    add: function () {
                        if (s) {
                            var r = s.length;
                            ! function o(t) {
                                ue.each(t, function (t, n) {
                                    var r = ue.type(n);
                                    "function" === r ? e.unique && f.has(n) || s.push(n) : n && n.length && "string" !== r && o(n)
                                })
                            }(arguments), t ? i = s.length : n && (a = r, l(n))
                        }
                        return this
                    },
                    remove: function () {
                        return s && ue.each(arguments, function (e, n) {
                            for (var r;
                                (r = ue.inArray(n, s, r)) > -1;) s.splice(r, 1), t && (r <= i && i--, r <= o && o--)
                        }), this
                    },
                    has: function (e) {
                        return e ? ue.inArray(e, s) > -1 : !(!s || !s.length)
                    },
                    empty: function () {
                        return s = [], i = 0, this
                    },
                    disable: function () {
                        return s = u = n = void 0, this
                    },
                    disabled: function () {
                        return !s
                    },
                    lock: function () {
                        return u = void 0, n || f.disable(), this
                    },
                    locked: function () {
                        return !u
                    },
                    fireWith: function (e, n) {
                        return !s || r && !u || (n = n || [], n = [e, n.slice ? n.slice() : n], t ? u.push(n) : l(n)), this
                    },
                    fire: function () {
                        return f.fireWith(this, arguments), this
                    },
                    fired: function () {
                        return !!r
                    }
                };
            return f
        }, ue.extend({
            Deferred: function (e) {
                var t = [
                        ["resolve", "done", ue.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", ue.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", ue.Callbacks("memory")]
                    ],
                    n = "pending",
                    r = {
                        state: function () {
                            return n
                        },
                        always: function () {
                            return i.done(arguments).fail(arguments), this
                        },
                        then: function () {
                            var e = arguments;
                            return ue.Deferred(function (n) {
                                ue.each(t, function (t, o) {
                                    var a = ue.isFunction(e[t]) && e[t];
                                    i[o[1]](function () {
                                        var e = a && a.apply(this, arguments);
                                        e && ue.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        },
                        promise: function (e) {
                            return null != e ? ue.extend(e, r) : r
                        }
                    },
                    i = {};
                return r.pipe = r.then, ue.each(t, function (e, o) {
                    var a = o[2],
                        s = o[3];
                    r[o[1]] = a.add, s && a.add(function () {
                        n = s
                    }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () {
                        return i[o[0] + "With"](this === i ? r : this, arguments), this
                    }, i[o[0] + "With"] = a.fireWith
                }), r.promise(i), e && e.call(i, i), i
            },
            when: function (e) {
                var t, n, r, i = 0,
                    o = Z.call(arguments),
                    a = o.length,
                    s = 1 !== a || e && ue.isFunction(e.promise) ? a : 0,
                    u = 1 === s ? e : ue.Deferred(),
                    c = function (e, n, r) {
                        return function (i) {
                            n[e] = this, r[e] = arguments.length > 1 ? Z.call(arguments) : i, r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r)
                        }
                    };
                if (a > 1)
                    for (t = new Array(a), n = new Array(a), r = new Array(a); i < a; i++) o[i] && ue.isFunction(o[i].promise) ? o[i].promise().done(c(i, r, o)).fail(u.reject).progress(c(i, n, t)) : --s;
                return s || u.resolveWith(r, o), u.promise()
            }
        });
        var Ne;
        ue.fn.ready = function (e) {
            return ue.ready.promise().done(e), this
        }, ue.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function (e) {
                e ? ue.readyWait++ : ue.ready(!0)
            },
            ready: function (e) {
                if (e === !0 ? !--ue.readyWait : !ue.isReady) {
                    if (!ye.body) return setTimeout(ue.ready);
                    ue.isReady = !0, e !== !0 && --ue.readyWait > 0 || (Ne.resolveWith(ye, [ue]), ue.fn.triggerHandler && (ue(ye).triggerHandler("ready"), ue(ye).off("ready")))
                }
            }
        }), ue.ready.promise = function (e) {
            if (!Ne)
                if (Ne = ue.Deferred(), "complete" === ye.readyState) setTimeout(ue.ready);
                else if (ye.addEventListener) ye.addEventListener("DOMContentLoaded", f, !1), n.addEventListener("load", f, !1);
            else {
                ye.attachEvent("onreadystatechange", f), n.attachEvent("onload", f);
                var t = !1;
                try {
                    t = null == n.frameElement && ye.documentElement
                } catch (r) {}
                t && t.doScroll && ! function i() {
                    if (!ue.isReady) {
                        try {
                            t.doScroll("left")
                        } catch (e) {
                            return setTimeout(i, 50)
                        }
                        l(), ue.ready()
                    }
                }()
            }
            return Ne.promise(e)
        };
        var Ee, Se = "undefined";
        for (Ee in ue(ae)) break;
        ae.ownLast = "0" !== Ee, ae.inlineBlockNeedsLayout = !1, ue(function () {
                var e, t, n, r;
                n = ye.getElementsByTagName("body")[0], n && n.style && (t = ye.createElement("div"), r = ye.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), typeof t.style.zoom !== Se && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ae.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(r))
            }),
            function () {
                var e = ye.createElement("div");
                if (null == ae.deleteExpando) {
                    ae.deleteExpando = !0;
                    try {
                        delete e.test
                    } catch (t) {
                        ae.deleteExpando = !1
                    }
                }
                e = null
            }(), ue.acceptData = function (e) {
                var t = ue.noData[(e.nodeName + " ").toLowerCase()],
                    n = +e.nodeType || 1;
                return (1 === n || 9 === n) && (!t || t !== !0 && e.getAttribute("classid") === t)
            };
        var _e = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            je = /([A-Z])/g;
        ue.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function (e) {
                return e = e.nodeType ? ue.cache[e[ue.expando]] : e[ue.expando], !!e && !d(e)
            },
            data: function (e, t, n) {
                return h(e, t, n)
            },
            removeData: function (e, t) {
                return m(e, t)
            },
            _data: function (e, t, n) {
                return h(e, t, n, !0)
            },
            _removeData: function (e, t) {
                return m(e, t, !0)
            }
        }), ue.fn.extend({
            data: function (e, t) {
                var n, r, i, o = this[0],
                    a = o && o.attributes;
                if (void 0 === e) {
                    if (this.length && (i = ue.data(o), 1 === o.nodeType && !ue._data(o, "parsedAttrs"))) {
                        for (n = a.length; n--;) a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = ue.camelCase(r.slice(5)), p(o, r, i[r])));
                        ue._data(o, "parsedAttrs", !0)
                    }
                    return i
                }
                return "object" == typeof e ? this.each(function () {
                    ue.data(this, e)
                }) : arguments.length > 1 ? this.each(function () {
                    ue.data(this, e, t)
                }) : o ? p(o, e, ue.data(o, e)) : void 0
            },
            removeData: function (e) {
                return this.each(function () {
                    ue.removeData(this, e)
                })
            }
        }), ue.extend({
            queue: function (e, t, n) {
                var r;
                if (e) return t = (t || "fx") + "queue", r = ue._data(e, t), n && (!r || ue.isArray(n) ? r = ue._data(e, t, ue.makeArray(n)) : r.push(n)), r || []
            },
            dequeue: function (e, t) {
                t = t || "fx";
                var n = ue.queue(e, t),
                    r = n.length,
                    i = n.shift(),
                    o = ue._queueHooks(e, t),
                    a = function () {
                        ue.dequeue(e, t)
                    };
                "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
            },
            _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return ue._data(e, n) || ue._data(e, n, {
                    empty: ue.Callbacks("once memory").add(function () {
                        ue._removeData(e, t + "queue"), ue._removeData(e, n)
                    })
                })
            }
        }), ue.fn.extend({
            queue: function (e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? ue.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                    var n = ue.queue(this, e, t);
                    ue._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && ue.dequeue(this, e)
                })
            },
            dequeue: function (e) {
                return this.each(function () {
                    ue.dequeue(this, e)
                })
            },
            clearQueue: function (e) {
                return this.queue(e || "fx", [])
            },
            promise: function (e, t) {
                var n, r = 1,
                    i = ue.Deferred(),
                    o = this,
                    a = this.length,
                    s = function () {
                        --r || i.resolveWith(o, [o])
                    };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = ue._data(o[a], e + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
                return s(), i.promise(t)
            }
        });
        var Ae = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Le = ["Top", "Right", "Bottom", "Left"],
            De = function (e, t) {
                return e = t || e, "none" === ue.css(e, "display") || !ue.contains(e.ownerDocument, e)
            },
            Oe = ue.access = function (e, t, n, r, i, o, a) {
                var s = 0,
                    u = e.length,
                    c = null == n;
                if ("object" === ue.type(n)) {
                    i = !0;
                    for (s in n) ue.access(e, t, s, n[s], !0, o, a)
                } else if (void 0 !== r && (i = !0, ue.isFunction(r) || (a = !0), c && (a ? (t.call(e, r), t = null) : (c = t, t = function (e, t, n) {
                        return c.call(ue(e), n)
                    })), t))
                    for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
                return i ? e : c ? t.call(e) : u ? t(e[0], n) : o
            },
            He = /^(?:checkbox|radio)$/i;
        ! function () {
            var e = ye.createElement("input"),
                t = ye.createElement("div"),
                n = ye.createDocumentFragment();
            if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ae.leadingWhitespace = 3 === t.firstChild.nodeType, ae.tbody = !t.getElementsByTagName("tbody").length, ae.htmlSerialize = !!t.getElementsByTagName("link").length, ae.html5Clone = "<:nav></:nav>" !== ye.createElement("nav").cloneNode(!0).outerHTML, e.type = "checkbox", e.checked = !0, n.appendChild(e), ae.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", ae.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, n.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", ae.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, ae.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function () {
                    ae.noCloneEvent = !1
                }), t.cloneNode(!0).click()), null == ae.deleteExpando) {
                ae.deleteExpando = !0;
                try {
                    delete t.test
                } catch (r) {
                    ae.deleteExpando = !1
                }
            }
        }(),
        function () {
            var e, t, r = ye.createElement("div");
            for (e in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) t = "on" + e, (ae[e + "Bubbles"] = t in n) || (r.setAttribute(t, "t"), ae[e + "Bubbles"] = r.attributes[t].expando === !1);
            r = null
        }();
        var Fe = /^(?:input|select|textarea)$/i,
            Me = /^key/,
            qe = /^(?:mouse|pointer|contextmenu)|click/,
            Ie = /^(?:focusinfocus|focusoutblur)$/,
            Re = /^([^.]*)(?:\.(.+)|)$/;
        ue.event = {
            global: {},
            add: function (e, t, n, r, i) {
                var o, a, s, u, c, l, f, p, d, h, m, v = ue._data(e);
                if (v) {
                    for (n.handler && (u = n, n = u.handler, i = u.selector), n.guid || (n.guid = ue.guid++), (a = v.events) || (a = v.events = {}), (l = v.handle) || (l = v.handle = function (e) {
                            return typeof ue === Se || e && ue.event.triggered === e.type ? void 0 : ue.event.dispatch.apply(l.elem, arguments)
                        }, l.elem = e), t = (t || "").match(ke) || [""], s = t.length; s--;) o = Re.exec(t[s]) || [], d = m = o[1], h = (o[2] || "").split(".").sort(), d && (c = ue.event.special[d] || {}, d = (i ? c.delegateType : c.bindType) || d, c = ue.event.special[d] || {}, f = ue.extend({
                        type: d,
                        origType: m,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && ue.expr.match.needsContext.test(i),
                        namespace: h.join(".")
                    }, u), (p = a[d]) || (p = a[d] = [], p.delegateCount = 0, c.setup && c.setup.call(e, r, h, l) !== !1 || (e.addEventListener ? e.addEventListener(d, l, !1) : e.attachEvent && e.attachEvent("on" + d, l))), c.add && (c.add.call(e, f), f.handler.guid || (f.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, f) : p.push(f), ue.event.global[d] = !0);
                    e = null
                }
            },
            remove: function (e, t, n, r, i) {
                var o, a, s, u, c, l, f, p, d, h, m, v = ue.hasData(e) && ue._data(e);
                if (v && (l = v.events)) {
                    for (t = (t || "").match(ke) || [""], c = t.length; c--;)
                        if (s = Re.exec(t[c]) || [], d = m = s[1], h = (s[2] || "").split(".").sort(), d) {
                            for (f = ue.event.special[d] || {}, d = (r ? f.delegateType : f.bindType) || d, p = l[d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = p.length; o--;) a = p[o], !i && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (p.splice(o, 1), a.selector && p.delegateCount--, f.remove && f.remove.call(e, a));
                            u && !p.length && (f.teardown && f.teardown.call(e, h, v.handle) !== !1 || ue.removeEvent(e, d, v.handle), delete l[d])
                        } else
                            for (d in l) ue.event.remove(e, d + t[c], n, r, !0);
                    ue.isEmptyObject(l) && (delete v.handle, ue._removeData(e, "events"))
                }
            },
            trigger: function (e, t, r, i) {
                var o, a, s, u, c, l, f, p = [r || ye],
                    d = oe.call(e, "type") ? e.type : e,
                    h = oe.call(e, "namespace") ? e.namespace.split(".") : [];
                if (s = l = r = r || ye, 3 !== r.nodeType && 8 !== r.nodeType && !Ie.test(d + ue.event.triggered) && (d.indexOf(".") >= 0 && (h = d.split("."), d = h.shift(), h.sort()), a = d.indexOf(":") < 0 && "on" + d, e = e[ue.expando] ? e : new ue.Event(d, "object" == typeof e && e), e.isTrigger = i ? 2 : 3, e.namespace = h.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), t = null == t ? [e] : ue.makeArray(t, [e]), c = ue.event.special[d] || {}, i || !c.trigger || c.trigger.apply(r, t) !== !1)) {
                    if (!i && !c.noBubble && !ue.isWindow(r)) {
                        for (u = c.delegateType || d, Ie.test(u + d) || (s = s.parentNode); s; s = s.parentNode) p.push(s), l = s;
                        l === (r.ownerDocument || ye) && p.push(l.defaultView || l.parentWindow || n)
                    }
                    for (f = 0;
                        (s = p[f++]) && !e.isPropagationStopped();) e.type = f > 1 ? u : c.bindType || d, o = (ue._data(s, "events") || {})[e.type] && ue._data(s, "handle"), o && o.apply(s, t), o = a && s[a], o && o.apply && ue.acceptData(s) && (e.result = o.apply(s, t), e.result === !1 && e.preventDefault());
                    if (e.type = d, !i && !e.isDefaultPrevented() && (!c._default || c._default.apply(p.pop(), t) === !1) && ue.acceptData(r) && a && r[d] && !ue.isWindow(r)) {
                        l = r[a], l && (r[a] = null), ue.event.triggered = d;
                        try {
                            r[d]()
                        } catch (m) {}
                        ue.event.triggered = void 0, l && (r[a] = l)
                    }
                    return e.result
                }
            },
            dispatch: function (e) {
                e = ue.event.fix(e);
                var t, n, r, i, o, a = [],
                    s = Z.call(arguments),
                    u = (ue._data(this, "events") || {})[e.type] || [],
                    c = ue.event.special[e.type] || {};
                if (s[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                    for (a = ue.event.handlers.call(this, e, u), t = 0;
                        (i = a[t++]) && !e.isPropagationStopped();)
                        for (e.currentTarget = i.elem, o = 0;
                            (r = i.handlers[o++]) && !e.isImmediatePropagationStopped();) e.namespace_re && !e.namespace_re.test(r.namespace) || (e.handleObj = r, e.data = r.data, n = ((ue.event.special[r.origType] || {}).handle || r.handler).apply(i.elem, s), void 0 !== n && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, e), e.result
                }
            },
            handlers: function (e, t) {
                var n, r, i, o, a = [],
                    s = t.delegateCount,
                    u = e.target;
                if (s && u.nodeType && (!e.button || "click" !== e.type))
                    for (; u != this; u = u.parentNode || this)
                        if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
                            for (i = [], o = 0; o < s; o++) r = t[o], n = r.selector + " ", void 0 === i[n] && (i[n] = r.needsContext ? ue(n, this).index(u) >= 0 : ue.find(n, this, null, [u]).length), i[n] && i.push(r);
                            i.length && a.push({
                                elem: u,
                                handlers: i
                            })
                        } return s < t.length && a.push({
                    elem: this,
                    handlers: t.slice(s)
                }), a
            },
            fix: function (e) {
                if (e[ue.expando]) return e;
                var t, n, r, i = e.type,
                    o = e,
                    a = this.fixHooks[i];
                for (a || (this.fixHooks[i] = a = qe.test(i) ? this.mouseHooks : Me.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new ue.Event(o), t = r.length; t--;) n = r[t], e[n] = o[n];
                return e.target || (e.target = o.srcElement || ye), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function (e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function (e, t) {
                    var n, r, i, o = t.button,
                        a = t.fromElement;
                    return null == e.pageX && null != t.clientX && (r = e.target.ownerDocument || ye, i = r.documentElement, n = r.body, e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function () {
                        if (this !== y() && this.focus) try {
                            return this.focus(), !1
                        } catch (e) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function () {
                        if (this === y() && this.blur) return this.blur(), !1
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function () {
                        if (ue.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1
                    },
                    _default: function (e) {
                        return ue.nodeName(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function (e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            },
            simulate: function (e, t, n, r) {
                var i = ue.extend(new ue.Event, n, {
                    type: e,
                    isSimulated: !0,
                    originalEvent: {}
                });
                r ? ue.event.trigger(i, null, t) : ue.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
            }
        }, ue.removeEvent = ye.removeEventListener ? function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n, !1)
        } : function (e, t, n) {
            var r = "on" + t;
            e.detachEvent && (typeof e[r] === Se && (e[r] = null), e.detachEvent(r, n))
        }, ue.Event = function (e, t) {
            return this instanceof ue.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? v : g) : this.type = e, t && ue.extend(this, t), this.timeStamp = e && e.timeStamp || ue.now(), void(this[ue.expando] = !0)) : new ue.Event(e, t)
        }, ue.Event.prototype = {
            isDefaultPrevented: g,
            isPropagationStopped: g,
            isImmediatePropagationStopped: g,
            preventDefault: function () {
                var e = this.originalEvent;
                this.isDefaultPrevented = v, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                this.isPropagationStopped = v, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
            },
            stopImmediatePropagation: function () {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = v, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, ue.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function (e, t) {
            ue.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function (e) {
                    var n, r = this,
                        i = e.relatedTarget,
                        o = e.handleObj;
                    return i && (i === r || ue.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), ae.submitBubbles || (ue.event.special.submit = {
            setup: function () {
                return !ue.nodeName(this, "form") && void ue.event.add(this, "click._submit keypress._submit", function (e) {
                    var t = e.target,
                        n = ue.nodeName(t, "input") || ue.nodeName(t, "button") ? t.form : void 0;
                    n && !ue._data(n, "submitBubbles") && (ue.event.add(n, "submit._submit", function (e) {
                        e._submit_bubble = !0
                    }), ue._data(n, "submitBubbles", !0))
                })
            },
            postDispatch: function (e) {
                e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && ue.event.simulate("submit", this.parentNode, e, !0))
            },
            teardown: function () {
                return !ue.nodeName(this, "form") && void ue.event.remove(this, "._submit")
            }
        }), ae.changeBubbles || (ue.event.special.change = {
            setup: function () {
                return Fe.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (ue.event.add(this, "propertychange._change", function (e) {
                    "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
                }), ue.event.add(this, "click._change", function (e) {
                    this._just_changed && !e.isTrigger && (this._just_changed = !1), ue.event.simulate("change", this, e, !0)
                })), !1) : void ue.event.add(this, "beforeactivate._change", function (e) {
                    var t = e.target;
                    Fe.test(t.nodeName) && !ue._data(t, "changeBubbles") && (ue.event.add(t, "change._change", function (e) {
                        !this.parentNode || e.isSimulated || e.isTrigger || ue.event.simulate("change", this.parentNode, e, !0)
                    }), ue._data(t, "changeBubbles", !0))
                })
            },
            handle: function (e) {
                var t = e.target;
                if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type) return e.handleObj.handler.apply(this, arguments)
            },
            teardown: function () {
                return ue.event.remove(this, "._change"), !Fe.test(this.nodeName)
            }
        }), ae.focusinBubbles || ue.each({
            focus: "focusin",
            blur: "focusout"
        }, function (e, t) {
            var n = function (e) {
                ue.event.simulate(t, e.target, ue.event.fix(e), !0)
            };
            ue.event.special[t] = {
                setup: function () {
                    var r = this.ownerDocument || this,
                        i = ue._data(r, t);
                    i || r.addEventListener(e, n, !0), ue._data(r, t, (i || 0) + 1)
                },
                teardown: function () {
                    var r = this.ownerDocument || this,
                        i = ue._data(r, t) - 1;
                    i ? ue._data(r, t, i) : (r.removeEventListener(e, n, !0), ue._removeData(r, t))
                }
            }
        }), ue.fn.extend({
            on: function (e, t, n, r, i) {
                var o, a;
                if ("object" == typeof e) {
                    "string" != typeof t && (n = n || t, t = void 0);
                    for (o in e) this.on(o, t, n, e[o], i);
                    return this
                }
                if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), r === !1) r = g;
                else if (!r) return this;
                return 1 === i && (a = r, r = function (e) {
                    return ue().off(e), a.apply(this, arguments)
                }, r.guid = a.guid || (a.guid = ue.guid++)), this.each(function () {
                    ue.event.add(this, e, r, n, t)
                })
            },
            one: function (e, t, n, r) {
                return this.on(e, t, n, r, 1)
            },
            off: function (e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj) return r = e.handleObj, ue(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                if ("object" == typeof e) {
                    for (i in e) this.off(i, t, e[i]);
                    return this
                }
                return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = g), this.each(function () {
                    ue.event.remove(this, e, n, t)
                })
            },
            trigger: function (e, t) {
                return this.each(function () {
                    ue.event.trigger(e, t, this)
                })
            },
            triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return ue.event.trigger(e, t, n, !0)
            }
        });
        var ze = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            Be = / jQuery\d+="(?:null|\d+)"/g,
            Pe = new RegExp("<(?:" + ze + ")[\\s/>]", "i"),
            We = /^\s+/,
            $e = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            Xe = /<([\w:]+)/,
            Ue = /<tbody/i,
            Je = /<|&#?\w+;/,
            Ge = /<(?:script|style|link)/i,
            Ve = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Ke = /^$|\/(?:java|ecma)script/i,
            Ye = /^true\/(.*)/,
            Qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            Ze = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: ae.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            },
            et = x(ye),
            tt = et.appendChild(ye.createElement("div"));
        Ze.optgroup = Ze.option, Ze.tbody = Ze.tfoot = Ze.colgroup = Ze.caption = Ze.thead, Ze.th = Ze.td, ue.extend({
            clone: function (e, t, n) {
                var r, i, o, a, s, u = ue.contains(e.ownerDocument, e);
                if (ae.html5Clone || ue.isXMLDoc(e) || !Pe.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (tt.innerHTML = e.outerHTML, tt.removeChild(o = tt.firstChild)), !(ae.noCloneEvent && ae.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ue.isXMLDoc(e)))
                    for (r = b(o), s = b(e), a = 0; null != (i = s[a]); ++a) r[a] && S(i, r[a]);
                if (t)
                    if (n)
                        for (s = s || b(e), r = r || b(o), a = 0; null != (i = s[a]); a++) E(i, r[a]);
                    else E(e, o);
                return r = b(o, "script"), r.length > 0 && N(r, !u && b(e, "script")), r = s = i = null, o
            },
            buildFragment: function (e, t, n, r) {
                for (var i, o, a, s, u, c, l, f = e.length, p = x(t), d = [], h = 0; h < f; h++)
                    if (o = e[h], o || 0 === o)
                        if ("object" === ue.type(o)) ue.merge(d, o.nodeType ? [o] : o);
                        else if (Je.test(o)) {
                    for (s = s || p.appendChild(t.createElement("div")), u = (Xe.exec(o) || ["", ""])[1].toLowerCase(), l = Ze[u] || Ze._default, s.innerHTML = l[1] + o.replace($e, "<$1></$2>") + l[2], i = l[0]; i--;) s = s.lastChild;
                    if (!ae.leadingWhitespace && We.test(o) && d.push(t.createTextNode(We.exec(o)[0])), !ae.tbody)
                        for (o = "table" !== u || Ue.test(o) ? "<table>" !== l[1] || Ue.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length; i--;) ue.nodeName(c = o.childNodes[i], "tbody") && !c.childNodes.length && o.removeChild(c);
                    for (ue.merge(d, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                    s = p.lastChild
                } else d.push(t.createTextNode(o));
                for (s && p.removeChild(s), ae.appendChecked || ue.grep(b(d, "input"), w), h = 0; o = d[h++];)
                    if ((!r || ue.inArray(o, r) === -1) && (a = ue.contains(o.ownerDocument, o), s = b(p.appendChild(o), "script"), a && N(s), n))
                        for (i = 0; o = s[i++];) Ke.test(o.type || "") && n.push(o);
                return s = null, p
            },
            cleanData: function (e, t) {
                for (var n, r, i, o, a = 0, s = ue.expando, u = ue.cache, c = ae.deleteExpando, l = ue.event.special; null != (n = e[a]); a++)
                    if ((t || ue.acceptData(n)) && (i = n[s], o = i && u[i])) {
                        if (o.events)
                            for (r in o.events) l[r] ? ue.event.remove(n, r) : ue.removeEvent(n, r, o.handle);
                        u[i] && (delete u[i], c ? delete n[s] : typeof n.removeAttribute !== Se ? n.removeAttribute(s) : n[s] = null, Q.push(i))
                    }
            }
        }), ue.fn.extend({
            text: function (e) {
                return Oe(this, function (e) {
                    return void 0 === e ? ue.text(this) : this.empty().append((this[0] && this[0].ownerDocument || ye).createTextNode(e))
                }, null, e, arguments.length)
            },
            append: function () {
                return this.domManip(arguments, function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = T(this, e);
                        t.appendChild(e)
                    }
                })
            },
            prepend: function () {
                return this.domManip(arguments, function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = T(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function () {
                return this.domManip(arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function () {
                return this.domManip(arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            remove: function (e, t) {
                for (var n, r = e ? ue.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || ue.cleanData(b(n)), n.parentNode && (t && ue.contains(n.ownerDocument, n) && N(b(n, "script")), n.parentNode.removeChild(n));
                return this
            },
            empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++) {
                    for (1 === e.nodeType && ue.cleanData(b(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                    e.options && ue.nodeName(e, "select") && (e.options.length = 0)
                }
                return this
            },
            clone: function (e, t) {
                return e = null != e && e, t = null == t ? e : t, this.map(function () {
                    return ue.clone(this, e, t)
                })
            },
            html: function (e) {
                return Oe(this, function (e) {
                    var t = this[0] || {},
                        n = 0,
                        r = this.length;
                    if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Be, "") : void 0;
                    if ("string" == typeof e && !Ge.test(e) && (ae.htmlSerialize || !Pe.test(e)) && (ae.leadingWhitespace || !We.test(e)) && !Ze[(Xe.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = e.replace($e, "<$1></$2>");
                        try {
                            for (; n < r; n++) t = this[n] || {}, 1 === t.nodeType && (ue.cleanData(b(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (i) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function () {
                var e = arguments[0];
                return this.domManip(arguments, function (t) {
                    e = this.parentNode, ue.cleanData(b(this)), e && e.replaceChild(t, this)
                }), e && (e.length || e.nodeType) ? this : this.remove()
            },
            detach: function (e) {
                return this.remove(e, !0)
            },
            domManip: function (e, t) {
                e = ee.apply([], e);
                var n, r, i, o, a, s, u = 0,
                    c = this.length,
                    l = this,
                    f = c - 1,
                    p = e[0],
                    d = ue.isFunction(p);
                if (d || c > 1 && "string" == typeof p && !ae.checkClone && Ve.test(p)) return this.each(function (n) {
                    var r = l.eq(n);
                    d && (e[0] = p.call(this, n, r.html())), r.domManip(e, t)
                });
                if (c && (s = ue.buildFragment(e, this[0].ownerDocument, !1, this), n = s.firstChild, 1 === s.childNodes.length && (s = n), n)) {
                    for (o = ue.map(b(s, "script"), k), i = o.length; u < c; u++) r = s, u !== f && (r = ue.clone(r, !0, !0), i && ue.merge(o, b(r, "script"))), t.call(this[u], r, u);
                    if (i)
                        for (a = o[o.length - 1].ownerDocument, ue.map(o, C), u = 0; u < i; u++) r = o[u], Ke.test(r.type || "") && !ue._data(r, "globalEval") && ue.contains(a, r) && (r.src ? ue._evalUrl && ue._evalUrl(r.src) : ue.globalEval((r.text || r.textContent || r.innerHTML || "").replace(Qe, "")));
                    s = n = null
                }
                return this
            }
        }), ue.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (e, t) {
            ue.fn[e] = function (e) {
                for (var n, r = 0, i = [], o = ue(e), a = o.length - 1; r <= a; r++) n = r === a ? this : this.clone(!0), ue(o[r])[t](n), te.apply(i, n.get());
                return this.pushStack(i)
            }
        });
        var nt, rt = {};
        ! function () {
            var e;
            ae.shrinkWrapBlocks = function () {
                if (null != e) return e;
                e = !1;
                var t, n, r;
                return n = ye.getElementsByTagName("body")[0], n && n.style ? (t = ye.createElement("div"), r = ye.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), typeof t.style.zoom !== Se && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(ye.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(r), e) : void 0
            }
        }();
        var it, ot, at = /^margin/,
            st = new RegExp("^(" + Ae + ")(?!px)[a-z%]+$", "i"),
            ut = /^(top|right|bottom|left)$/;
        n.getComputedStyle ? (it = function (e) {
                return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : n.getComputedStyle(e, null)
            }, ot = function (e, t, n) {
                var r, i, o, a, s = e.style;
                return n = n || it(e), a = n ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== a || ue.contains(e.ownerDocument, e) || (a = ue.style(e, t)), st.test(a) && at.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 === a ? a : a + ""
            }) : ye.documentElement.currentStyle && (it = function (e) {
                return e.currentStyle
            }, ot = function (e, t, n) {
                var r, i, o, a, s = e.style;
                return n = n || it(e), a = n ? n[t] : void 0, null == a && s && s[t] && (a = s[t]), st.test(a) && !ut.test(t) && (r = s.left, i = e.runtimeStyle, o = i && i.left, o && (i.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = r, o && (i.left = o)), void 0 === a ? a : a + "" || "auto"
            }),
            function () {
                function e() {
                    var e, t, r, i;
                    t = ye.getElementsByTagName("body")[0], t && t.style && (e = ye.createElement("div"), r = ye.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", t.appendChild(r).appendChild(e), e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o = a = !1, u = !0, n.getComputedStyle && (o = "1%" !== (n.getComputedStyle(e, null) || {}).top, a = "4px" === (n.getComputedStyle(e, null) || {
                        width: "4px"
                    }).width, i = e.appendChild(ye.createElement("div")), i.style.cssText = e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", e.style.width = "1px", u = !parseFloat((n.getComputedStyle(i, null) || {}).marginRight), e.removeChild(i)), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = e.getElementsByTagName("td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", s = 0 === i[0].offsetHeight, s && (i[0].style.display = "", i[1].style.display = "none", s = 0 === i[0].offsetHeight), t.removeChild(r))
                }
                var t, r, i, o, a, s, u;
                t = ye.createElement("div"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = t.getElementsByTagName("a")[0], r = i && i.style, r && (r.cssText = "float:left;opacity:.5", ae.opacity = "0.5" === r.opacity, ae.cssFloat = !!r.cssFloat, t.style.backgroundClip = "content-box", t.cloneNode(!0).style.backgroundClip = "", ae.clearCloneStyle = "content-box" === t.style.backgroundClip, ae.boxSizing = "" === r.boxSizing || "" === r.MozBoxSizing || "" === r.WebkitBoxSizing, ue.extend(ae, {
                    reliableHiddenOffsets: function () {
                        return null == s && e(), s
                    },
                    boxSizingReliable: function () {
                        return null == a && e(), a
                    },
                    pixelPosition: function () {
                        return null == o && e(), o
                    },
                    reliableMarginRight: function () {
                        return null == u && e(), u
                    }
                }))
            }(), ue.swap = function (e, t, n, r) {
                var i, o, a = {};
                for (o in t) a[o] = e.style[o], e.style[o] = t[o];
                i = n.apply(e, r || []);
                for (o in t) e.style[o] = a[o];
                return i
            };
        var ct = /alpha\([^)]*\)/i,
            lt = /opacity\s*=\s*([^)]*)/,
            ft = /^(none|table(?!-c[ea]).+)/,
            pt = new RegExp("^(" + Ae + ")(.*)$", "i"),
            dt = new RegExp("^([+-])=(" + Ae + ")", "i"),
            ht = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            mt = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            vt = ["Webkit", "O", "Moz", "ms"];
        ue.extend({
            cssHooks: {
                opacity: {
                    get: function (e, t) {
                        if (t) {
                            var n = ot(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": ae.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function (e, t, n, r) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var i, o, a, s = ue.camelCase(t),
                        u = e.style;
                    if (t = ue.cssProps[s] || (ue.cssProps[s] = L(u, s)), a = ue.cssHooks[t] || ue.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : u[t];
                    if (o = typeof n, "string" === o && (i = dt.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(ue.css(e, t)), o = "number"), null != n && n === n && ("number" !== o || ue.cssNumber[s] || (n += "px"), ae.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(e, n, r))))) try {
                        u[t] = n
                    } catch (c) {}
                }
            },
            css: function (e, t, n, r) {
                var i, o, a, s = ue.camelCase(t);
                return t = ue.cssProps[s] || (ue.cssProps[s] = L(e.style, s)), a = ue.cssHooks[t] || ue.cssHooks[s], a && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = ot(e, t, r)), "normal" === o && t in mt && (o = mt[t]), "" === n || n ? (i = parseFloat(o), n === !0 || ue.isNumeric(i) ? i || 0 : o) : o
            }
        }), ue.each(["height", "width"], function (e, t) {
            ue.cssHooks[t] = {
                get: function (e, n, r) {
                    if (n) return ft.test(ue.css(e, "display")) && 0 === e.offsetWidth ? ue.swap(e, ht, function () {
                        return F(e, t, r)
                    }) : F(e, t, r)
                },
                set: function (e, n, r) {
                    var i = r && it(e);
                    return O(e, n, r ? H(e, t, r, ae.boxSizing && "border-box" === ue.css(e, "boxSizing", !1, i), i) : 0)
                }
            }
        }), ae.opacity || (ue.cssHooks.opacity = {
            get: function (e, t) {
                return lt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
            },
            set: function (e, t) {
                var n = e.style,
                    r = e.currentStyle,
                    i = ue.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                    o = r && r.filter || n.filter || "";
                n.zoom = 1, (t >= 1 || "" === t) && "" === ue.trim(o.replace(ct, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = ct.test(o) ? o.replace(ct, i) : o + " " + i)
            }
        }), ue.cssHooks.marginRight = A(ae.reliableMarginRight, function (e, t) {
            if (t) return ue.swap(e, {
                display: "inline-block"
            }, ot, [e, "marginRight"])
        }), ue.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function (e, t) {
            ue.cssHooks[e + t] = {
                expand: function (n) {
                    for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + Le[r] + t] = o[r] || o[r - 2] || o[0];
                    return i
                }
            }, at.test(e) || (ue.cssHooks[e + t].set = O)
        }), ue.fn.extend({
            css: function (e, t) {
                return Oe(this, function (e, t, n) {
                    var r, i, o = {},
                        a = 0;
                    if (ue.isArray(t)) {
                        for (r = it(e), i = t.length; a < i; a++) o[t[a]] = ue.css(e, t[a], !1, r);
                        return o
                    }
                    return void 0 !== n ? ue.style(e, t, n) : ue.css(e, t)
                }, e, t, arguments.length > 1)
            },
            show: function () {
                return D(this, !0)
            },
            hide: function () {
                return D(this)
            },
            toggle: function (e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                    De(this) ? ue(this).show() : ue(this).hide()
                })
            }
        }), ue.Tween = M, M.prototype = {
            constructor: M,
            init: function (e, t, n, r, i, o) {
                this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (ue.cssNumber[n] ? "" : "px")
            },
            cur: function () {
                var e = M.propHooks[this.prop];
                return e && e.get ? e.get(this) : M.propHooks._default.get(this)
            },
            run: function (e) {
                var t, n = M.propHooks[this.prop];
                return this.options.duration ? this.pos = t = ue.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : M.propHooks._default.set(this), this
            }
        }, M.prototype.init.prototype = M.prototype, M.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ue.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
                },
                set: function (e) {
                    ue.fx.step[e.prop] ? ue.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ue.cssProps[e.prop]] || ue.cssHooks[e.prop]) ? ue.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                }
            }
        }, M.propHooks.scrollTop = M.propHooks.scrollLeft = {
            set: function (e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, ue.easing = {
            linear: function (e) {
                return e
            },
            swing: function (e) {
                return .5 - Math.cos(e * Math.PI) / 2
            }
        }, ue.fx = M.prototype.init, ue.fx.step = {};
        var gt, yt, xt = /^(?:toggle|show|hide)$/,
            bt = new RegExp("^(?:([+-])=|)(" + Ae + ")([a-z%]*)$", "i"),
            wt = /queueHooks$/,
            Tt = [z],
            kt = {
                "*": [function (e, t) {
                    var n = this.createTween(e, t),
                        r = n.cur(),
                        i = bt.exec(t),
                        o = i && i[3] || (ue.cssNumber[e] ? "" : "px"),
                        a = (ue.cssNumber[e] || "px" !== o && +r) && bt.exec(ue.css(n.elem, e)),
                        s = 1,
                        u = 20;
                    if (a && a[3] !== o) {
                        o = o || a[3], i = i || [], a = +r || 1;
                        do s = s || ".5", a /= s, ue.style(n.elem, e, a + o); while (s !== (s = n.cur() / r) && 1 !== s && --u)
                    }
                    return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
                }]
            };
        ue.Animation = ue.extend(P, {
                tweener: function (e, t) {
                    ue.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                    for (var n, r = 0, i = e.length; r < i; r++) n = e[r], kt[n] = kt[n] || [], kt[n].unshift(t)
                },
                prefilter: function (e, t) {
                    t ? Tt.unshift(e) : Tt.push(e)
                }
            }), ue.speed = function (e, t, n) {
                var r = e && "object" == typeof e ? ue.extend({}, e) : {
                    complete: n || !n && t || ue.isFunction(e) && e,
                    duration: e,
                    easing: n && t || t && !ue.isFunction(t) && t
                };
                return r.duration = ue.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in ue.fx.speeds ? ue.fx.speeds[r.duration] : ue.fx.speeds._default, null != r.queue && r.queue !== !0 || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
                    ue.isFunction(r.old) && r.old.call(this), r.queue && ue.dequeue(this, r.queue)
                }, r
            }, ue.fn.extend({
                fadeTo: function (e, t, n, r) {
                    return this.filter(De).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, r)
                },
                animate: function (e, t, n, r) {
                    var i = ue.isEmptyObject(e),
                        o = ue.speed(t, n, r),
                        a = function () {
                            var t = P(this, ue.extend({}, e), o);
                            (i || ue._data(this, "finish")) && t.stop(!0)
                        };
                    return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
                },
                stop: function (e, t, n) {
                    var r = function (e) {
                        var t = e.stop;
                        delete e.stop, t(n)
                    };
                    return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                        var t = !0,
                            i = null != e && e + "queueHooks",
                            o = ue.timers,
                            a = ue._data(this);
                        if (i) a[i] && a[i].stop && r(a[i]);
                        else
                            for (i in a) a[i] && a[i].stop && wt.test(i) && r(a[i]);
                        for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                        !t && n || ue.dequeue(this, e)
                    })
                },
                finish: function (e) {
                    return e !== !1 && (e = e || "fx"), this.each(function () {
                        var t, n = ue._data(this),
                            r = n[e + "queue"],
                            i = n[e + "queueHooks"],
                            o = ue.timers,
                            a = r ? r.length : 0;
                        for (n.finish = !0, ue.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                        for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                        delete n.finish
                    })
                }
            }), ue.each(["toggle", "show", "hide"], function (e, t) {
                var n = ue.fn[t];
                ue.fn[t] = function (e, r, i) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(I(t, !0), e, r, i)
                }
            }), ue.each({
                slideDown: I("show"),
                slideUp: I("hide"),
                slideToggle: I("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function (e, t) {
                ue.fn[e] = function (e, n, r) {
                    return this.animate(t, e, n, r)
                }
            }), ue.timers = [], ue.fx.tick = function () {
                var e, t = ue.timers,
                    n = 0;
                for (gt = ue.now(); n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
                t.length || ue.fx.stop(), gt = void 0
            }, ue.fx.timer = function (e) {
                ue.timers.push(e), e() ? ue.fx.start() : ue.timers.pop()
            }, ue.fx.interval = 13, ue.fx.start = function () {
                yt || (yt = setInterval(ue.fx.tick, ue.fx.interval))
            }, ue.fx.stop = function () {
                clearInterval(yt), yt = null
            }, ue.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, ue.fn.delay = function (e, t) {
                return e = ue.fx ? ue.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
                    var r = setTimeout(t, e);
                    n.stop = function () {
                        clearTimeout(r)
                    }
                })
            },
            function () {
                var e, t, n, r, i;
                t = ye.createElement("div"), t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = t.getElementsByTagName("a")[0], n = ye.createElement("select"), i = n.appendChild(ye.createElement("option")), e = t.getElementsByTagName("input")[0], r.style.cssText = "top:1px", ae.getSetAttribute = "t" !== t.className, ae.style = /top/.test(r.getAttribute("style")), ae.hrefNormalized = "/a" === r.getAttribute("href"), ae.checkOn = !!e.value, ae.optSelected = i.selected, ae.enctype = !!ye.createElement("form").enctype, n.disabled = !0, ae.optDisabled = !i.disabled, e = ye.createElement("input"), e.setAttribute("value", ""), ae.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), ae.radioValue = "t" === e.value
            }();
        var Ct = /\r/g;
        ue.fn.extend({
            val: function (e) {
                var t, n, r, i = this[0]; {
                    if (arguments.length) return r = ue.isFunction(e), this.each(function (n) {
                        var i;
                        1 === this.nodeType && (i = r ? e.call(this, n, ue(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : ue.isArray(i) && (i = ue.map(i, function (e) {
                            return null == e ? "" : e + ""
                        })), t = ue.valHooks[this.type] || ue.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                    });
                    if (i) return t = ue.valHooks[i.type] || ue.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(Ct, "") : null == n ? "" : n)
                }
            }
        }), ue.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = ue.find.attr(e, "value");
                        return null != t ? t : ue.trim(ue.text(e))
                    }
                },
                select: {
                    get: function (e) {
                        for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || i < 0, a = o ? null : [], s = o ? i + 1 : r.length, u = i < 0 ? s : o ? i : 0; u < s; u++)
                            if (n = r[u], (n.selected || u === i) && (ae.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !ue.nodeName(n.parentNode, "optgroup"))) {
                                if (t = ue(n).val(), o) return t;
                                a.push(t)
                            } return a
                    },
                    set: function (e, t) {
                        for (var n, r, i = e.options, o = ue.makeArray(t), a = i.length; a--;)
                            if (r = i[a], ue.inArray(ue.valHooks.option.get(r), o) >= 0) try {
                                r.selected = n = !0
                            } catch (s) {
                                r.scrollHeight
                            } else r.selected = !1;
                        return n || (e.selectedIndex = -1), i
                    }
                }
            }
        }), ue.each(["radio", "checkbox"], function () {
            ue.valHooks[this] = {
                set: function (e, t) {
                    if (ue.isArray(t)) return e.checked = ue.inArray(ue(e).val(), t) >= 0
                }
            }, ae.checkOn || (ue.valHooks[this].get = function (e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        });
        var Nt, Et, St = ue.expr.attrHandle,
            _t = /^(?:checked|selected)$/i,
            jt = ae.getSetAttribute,
            At = ae.input;
        ue.fn.extend({
            attr: function (e, t) {
                return Oe(this, ue.attr, e, t, arguments.length > 1)
            },
            removeAttr: function (e) {
                return this.each(function () {
                    ue.removeAttr(this, e)
                })
            }
        }), ue.extend({
            attr: function (e, t, n) {
                var r, i, o = e.nodeType;
                if (e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute === Se ? ue.prop(e, t, n) : (1 === o && ue.isXMLDoc(e) || (t = t.toLowerCase(), r = ue.attrHooks[t] || (ue.expr.match.bool.test(t) ? Et : Nt)), void 0 === n ? r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = ue.find.attr(e, t), null == i ? void 0 : i) : null !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : void ue.removeAttr(e, t))
            },
            removeAttr: function (e, t) {
                var n, r, i = 0,
                    o = t && t.match(ke);
                if (o && 1 === e.nodeType)
                    for (; n = o[i++];) r = ue.propFix[n] || n, ue.expr.match.bool.test(n) ? At && jt || !_t.test(n) ? e[r] = !1 : e[ue.camelCase("default-" + n)] = e[r] = !1 : ue.attr(e, n, ""), e.removeAttribute(jt ? n : r)
            },
            attrHooks: {
                type: {
                    set: function (e, t) {
                        if (!ae.radioValue && "radio" === t && ue.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            }
        }), Et = {
            set: function (e, t, n) {
                return t === !1 ? ue.removeAttr(e, n) : At && jt || !_t.test(n) ? e.setAttribute(!jt && ue.propFix[n] || n, n) : e[ue.camelCase("default-" + n)] = e[n] = !0, n
            }
        }, ue.each(ue.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var n = St[t] || ue.find.attr;
            St[t] = At && jt || !_t.test(t) ? function (e, t, r) {
                var i, o;
                return r || (o = St[t], St[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, St[t] = o), i
            } : function (e, t, n) {
                if (!n) return e[ue.camelCase("default-" + t)] ? t.toLowerCase() : null
            }
        }), At && jt || (ue.attrHooks.value = {
            set: function (e, t, n) {
                return ue.nodeName(e, "input") ? void(e.defaultValue = t) : Nt && Nt.set(e, t, n)
            }
        }), jt || (Nt = {
            set: function (e, t, n) {
                var r = e.getAttributeNode(n);
                if (r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)), r.value = t += "", "value" === n || t === e.getAttribute(n)) return t
            }
        }, St.id = St.name = St.coords = function (e, t, n) {
            var r;
            if (!n) return (r = e.getAttributeNode(t)) && "" !== r.value ? r.value : null
        }, ue.valHooks.button = {
            get: function (e, t) {
                var n = e.getAttributeNode(t);
                if (n && n.specified) return n.value
            },
            set: Nt.set
        }, ue.attrHooks.contenteditable = {
            set: function (e, t, n) {
                Nt.set(e, "" !== t && t, n)
            }
        }, ue.each(["width", "height"], function (e, t) {
            ue.attrHooks[t] = {
                set: function (e, n) {
                    if ("" === n) return e.setAttribute(t, "auto"), n
                }
            }
        })), ae.style || (ue.attrHooks.style = {
            get: function (e) {
                return e.style.cssText || void 0
            },
            set: function (e, t) {
                return e.style.cssText = t + ""
            }
        });
        var Lt = /^(?:input|select|textarea|button|object)$/i,
            Dt = /^(?:a|area)$/i;
        ue.fn.extend({
            prop: function (e, t) {
                return Oe(this, ue.prop, e, t, arguments.length > 1)
            },
            removeProp: function (e) {
                return e = ue.propFix[e] || e, this.each(function () {
                    try {
                        this[e] = void 0, delete this[e]
                    } catch (t) {}
                })
            }
        }), ue.extend({
            propFix: {
                "for": "htmlFor",
                "class": "className"
            },
            prop: function (e, t, n) {
                var r, i, o, a = e.nodeType;
                if (e && 3 !== a && 8 !== a && 2 !== a) return o = 1 !== a || !ue.isXMLDoc(e), o && (t = ue.propFix[t] || t, i = ue.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = ue.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : Lt.test(e.nodeName) || Dt.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            }
        }), ae.hrefNormalized || ue.each(["href", "src"], function (e, t) {
            ue.propHooks[t] = {
                get: function (e) {
                    return e.getAttribute(t, 4)
                }
            }
        }), ae.optSelected || (ue.propHooks.selected = {
            get: function (e) {
                var t = e.parentNode;
                return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
            }
        }), ue.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            ue.propFix[this.toLowerCase()] = this
        }), ae.enctype || (ue.propFix.enctype = "encoding");
        var Ot = /[\t\r\n\f]/g;
        ue.fn.extend({
            addClass: function (e) {
                var t, n, r, i, o, a, s = 0,
                    u = this.length,
                    c = "string" == typeof e && e;
                if (ue.isFunction(e)) return this.each(function (t) {
                    ue(this).addClass(e.call(this, t, this.className))
                });
                if (c)
                    for (t = (e || "").match(ke) || []; s < u; s++)
                        if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ot, " ") : " ")) {
                            for (o = 0; i = t[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                            a = ue.trim(r), n.className !== a && (n.className = a)
                        } return this
            },
            removeClass: function (e) {
                var t, n, r, i, o, a, s = 0,
                    u = this.length,
                    c = 0 === arguments.length || "string" == typeof e && e;
                if (ue.isFunction(e)) return this.each(function (t) {
                    ue(this).removeClass(e.call(this, t, this.className))
                });
                if (c)
                    for (t = (e || "").match(ke) || []; s < u; s++)
                        if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ot, " ") : "")) {
                            for (o = 0; i = t[o++];)
                                for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
                            a = e ? ue.trim(r) : "", n.className !== a && (n.className = a)
                        } return this
            },
            toggleClass: function (e, t) {
                var n = typeof e;
                return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : ue.isFunction(e) ? this.each(function (n) {
                    ue(this).toggleClass(e.call(this, n, this.className, t), t)
                }) : this.each(function () {
                    if ("string" === n)
                        for (var t, r = 0, i = ue(this), o = e.match(ke) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                    else n !== Se && "boolean" !== n || (this.className && ue._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ue._data(this, "__className__") || "")
                })
            },
            hasClass: function (e) {
                for (var t = " " + e + " ", n = 0, r = this.length; n < r; n++)
                    if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Ot, " ").indexOf(t) >= 0) return !0;
                return !1
            }
        }), ue.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
            ue.fn[t] = function (e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }), ue.fn.extend({
            hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            },
            bind: function (e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function (e, t) {
                return this.off(e, null, t)
            },
            delegate: function (e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function (e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        });
        var Ht = ue.now(),
            Ft = /\?/,
            Mt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        ue.parseJSON = function (e) {
            if (n.JSON && n.JSON.parse) return n.JSON.parse(e + "");
            var t, r = null,
                i = ue.trim(e + "");
            return i && !ue.trim(i.replace(Mt, function (e, n, i, o) {
                return t && n && (r = 0), 0 === r ? e : (t = i || n, r += !o - !i, "")
            })) ? Function("return " + i)() : ue.error("Invalid JSON: " + e)
        }, ue.parseXML = function (e) {
            var t, r;
            if (!e || "string" != typeof e) return null;
            try {
                n.DOMParser ? (r = new DOMParser, t = r.parseFromString(e, "text/xml")) : (t = new ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e))
            } catch (i) {
                t = void 0
            }
            return t && t.documentElement && !t.getElementsByTagName("parsererror").length || ue.error("Invalid XML: " + e), t
        };
        var qt, It, Rt = /#.*$/,
            zt = /([?&])_=[^&]*/,
            Bt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            Pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Wt = /^(?:GET|HEAD)$/,
            $t = /^\/\//,
            Xt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            Ut = {},
            Jt = {},
            Gt = "*/".concat("*");
        try {
            It = location.href
        } catch (Vt) {
            It = ye.createElement("a"), It.href = "", It = It.href
        }
        qt = Xt.exec(It.toLowerCase()) || [], ue.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: It,
                type: "GET",
                isLocal: Pt.test(qt[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Gt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": ue.parseJSON,
                    "text xml": ue.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function (e, t) {
                return t ? X(X(e, ue.ajaxSettings), t) : X(ue.ajaxSettings, e)
            },
            ajaxPrefilter: W(Ut),
            ajaxTransport: W(Jt),
            ajax: function (e, t) {
                function n(e, t, n, r) {
                    var i, l, g, y, b, T = t;
                    2 !== x && (x = 2, s && clearTimeout(s), c = void 0, a = r || "", w.readyState = e > 0 ? 4 : 0, i = e >= 200 && e < 300 || 304 === e, n && (y = U(f, w, n)), y = J(f, y, w, i), i ? (f.ifModified && (b = w.getResponseHeader("Last-Modified"), b && (ue.lastModified[o] = b), b = w.getResponseHeader("etag"), b && (ue.etag[o] = b)), 204 === e || "HEAD" === f.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = y.state, l = y.data, g = y.error, i = !g)) : (g = T, !e && T || (T = "error", e < 0 && (e = 0))), w.status = e, w.statusText = (t || T) + "", i ? h.resolveWith(p, [l, T, w]) : h.rejectWith(p, [w, T, g]), w.statusCode(v), v = void 0, u && d.trigger(i ? "ajaxSuccess" : "ajaxError", [w, f, i ? l : g]), m.fireWith(p, [w, T]), u && (d.trigger("ajaxComplete", [w, f]), --ue.active || ue.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (t = e, e = void 0), t = t || {};
                var r, i, o, a, s, u, c, l, f = ue.ajaxSetup({}, t),
                    p = f.context || f,
                    d = f.context && (p.nodeType || p.jquery) ? ue(p) : ue.event,
                    h = ue.Deferred(),
                    m = ue.Callbacks("once memory"),
                    v = f.statusCode || {},
                    g = {},
                    y = {},
                    x = 0,
                    b = "canceled",
                    w = {
                        readyState: 0,
                        getResponseHeader: function (e) {
                            var t;
                            if (2 === x) {
                                if (!l)
                                    for (l = {}; t = Bt.exec(a);) l[t[1].toLowerCase()] = t[2];
                                t = l[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function () {
                            return 2 === x ? a : null
                        },
                        setRequestHeader: function (e, t) {
                            var n = e.toLowerCase();
                            return x || (e = y[n] = y[n] || e, g[e] = t), this
                        },
                        overrideMimeType: function (e) {
                            return x || (f.mimeType = e), this
                        },
                        statusCode: function (e) {
                            var t;
                            if (e)
                                if (x < 2)
                                    for (t in e) v[t] = [v[t], e[t]];
                                else w.always(e[w.status]);
                            return this
                        },
                        abort: function (e) {
                            var t = e || b;
                            return c && c.abort(t), n(0, t), this
                        }
                    };
                if (h.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, f.url = ((e || f.url || It) + "").replace(Rt, "").replace($t, qt[1] + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = ue.trim(f.dataType || "*").toLowerCase().match(ke) || [""], null == f.crossDomain && (r = Xt.exec(f.url.toLowerCase()), f.crossDomain = !(!r || r[1] === qt[1] && r[2] === qt[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (qt[3] || ("http:" === qt[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = ue.param(f.data, f.traditional)), $(Ut, f, t, w), 2 === x) return w;
                u = ue.event && f.global, u && 0 === ue.active++ && ue.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Wt.test(f.type), o = f.url, f.hasContent || (f.data && (o = f.url += (Ft.test(o) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = zt.test(o) ? o.replace(zt, "$1_=" + Ht++) : o + (Ft.test(o) ? "&" : "?") + "_=" + Ht++)), f.ifModified && (ue.lastModified[o] && w.setRequestHeader("If-Modified-Since", ue.lastModified[o]), ue.etag[o] && w.setRequestHeader("If-None-Match", ue.etag[o])), (f.data && f.hasContent && f.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", f.contentType), w.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Gt + "; q=0.01" : "") : f.accepts["*"]);
                for (i in f.headers) w.setRequestHeader(i, f.headers[i]);
                if (f.beforeSend && (f.beforeSend.call(p, w, f) === !1 || 2 === x)) return w.abort();
                b = "abort";
                for (i in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) w[i](f[i]);
                if (c = $(Jt, f, t, w)) {
                    w.readyState = 1, u && d.trigger("ajaxSend", [w, f]), f.async && f.timeout > 0 && (s = setTimeout(function () {
                        w.abort("timeout")
                    }, f.timeout));
                    try {
                        x = 1, c.send(g, n)
                    } catch (T) {
                        if (!(x < 2)) throw T;
                        n(-1, T)
                    }
                } else n(-1, "No Transport");
                return w
            },
            getJSON: function (e, t, n) {
                return ue.get(e, t, n, "json")
            },
            getScript: function (e, t) {
                return ue.get(e, void 0, t, "script")
            }
        }), ue.each(["get", "post"], function (e, t) {
            ue[t] = function (e, n, r, i) {
                return ue.isFunction(n) && (i = i || r, r = n, n = void 0), ue.ajax({
                    url: e,
                    type: t,
                    dataType: i,
                    data: n,
                    success: r
                })
            }
        }), ue._evalUrl = function (e) {
            return ue.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }, ue.fn.extend({
            wrapAll: function (e) {
                if (ue.isFunction(e)) return this.each(function (t) {
                    ue(this).wrapAll(e.call(this, t))
                });
                if (this[0]) {
                    var t = ue(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                        for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                        return e
                    }).append(this)
                }
                return this
            },
            wrapInner: function (e) {
                return ue.isFunction(e) ? this.each(function (t) {
                    ue(this).wrapInner(e.call(this, t))
                }) : this.each(function () {
                    var t = ue(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function (e) {
                var t = ue.isFunction(e);
                return this.each(function (n) {
                    ue(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function () {
                return this.parent().each(function () {
                    ue.nodeName(this, "body") || ue(this).replaceWith(this.childNodes)
                }).end()
            }
        }), ue.expr.filters.hidden = function (e) {
            return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !ae.reliableHiddenOffsets() && "none" === (e.style && e.style.display || ue.css(e, "display"))
        }, ue.expr.filters.visible = function (e) {
            return !ue.expr.filters.hidden(e)
        };
        var Kt = /%20/g,
            Yt = /\[\]$/,
            Qt = /\r?\n/g,
            Zt = /^(?:submit|button|image|reset|file)$/i,
            en = /^(?:input|select|textarea|keygen)/i;
        ue.param = function (e, t) {
            var n, r = [],
                i = function (e, t) {
                    t = ue.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
            if (void 0 === t && (t = ue.ajaxSettings && ue.ajaxSettings.traditional), ue.isArray(e) || e.jquery && !ue.isPlainObject(e)) ue.each(e, function () {
                i(this.name, this.value)
            });
            else
                for (n in e) G(n, e[n], t, i);
            return r.join("&").replace(Kt, "+")
        }, ue.fn.extend({
            serialize: function () {
                return ue.param(this.serializeArray())
            },
            serializeArray: function () {
                return this.map(function () {
                    var e = ue.prop(this, "elements");
                    return e ? ue.makeArray(e) : this
                }).filter(function () {
                    var e = this.type;
                    return this.name && !ue(this).is(":disabled") && en.test(this.nodeName) && !Zt.test(e) && (this.checked || !He.test(e))
                }).map(function (e, t) {
                    var n = ue(this).val();
                    return null == n ? null : ue.isArray(n) ? ue.map(n, function (e) {
                        return {
                            name: t.name,
                            value: e.replace(Qt, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(Qt, "\r\n")
                    }
                }).get()
            }
        }), ue.ajaxSettings.xhr = void 0 !== n.ActiveXObject ? function () {
            return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && V() || K()
        } : V;
        var tn = 0,
            nn = {},
            rn = ue.ajaxSettings.xhr();
        n.attachEvent && n.attachEvent("onunload", function () {
            for (var e in nn) nn[e](void 0, !0)
        }), ae.cors = !!rn && "withCredentials" in rn, rn = ae.ajax = !!rn, rn && ue.ajaxTransport(function (e) {
            if (!e.crossDomain || ae.cors) {
                var t;
                return {
                    send: function (n, r) {
                        var i, o = e.xhr(),
                            a = ++tn;
                        if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                            for (i in e.xhrFields) o[i] = e.xhrFields[i];
                        e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                        for (i in n) void 0 !== n[i] && o.setRequestHeader(i, n[i] + "");
                        o.send(e.hasContent && e.data || null), t = function (n, i) {
                            var s, u, c;
                            if (t && (i || 4 === o.readyState))
                                if (delete nn[a], t = void 0, o.onreadystatechange = ue.noop, i) 4 !== o.readyState && o.abort();
                                else {
                                    c = {}, s = o.status, "string" == typeof o.responseText && (c.text = o.responseText);
                                    try {
                                        u = o.statusText
                                    } catch (l) {
                                        u = ""
                                    }
                                    s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) : s = c.text ? 200 : 404
                                } c && r(s, u, c, o.getAllResponseHeaders())
                        }, e.async ? 4 === o.readyState ? setTimeout(t) : o.onreadystatechange = nn[a] = t : t()
                    },
                    abort: function () {
                        t && t(void 0, !0)
                    }
                }
            }
        }), ue.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function (e) {
                    return ue.globalEval(e), e
                }
            }
        }), ue.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
        }), ue.ajaxTransport("script", function (e) {
            if (e.crossDomain) {
                var t, n = ye.head || ue("head")[0] || ye.documentElement;
                return {
                    send: function (r, i) {
                        t = ye.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function (e, n) {
                            (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || i(200, "success"))
                        }, n.insertBefore(t, n.firstChild)
                    },
                    abort: function () {
                        t && t.onload(void 0, !0)
                    }
                }
            }
        });
        var on = [],
            an = /(=)\?(?=&|$)|\?\?/;
        ue.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
                var e = on.pop() || ue.expando + "_" + Ht++;
                return this[e] = !0, e
            }
        }), ue.ajaxPrefilter("json jsonp", function (e, t, r) {
            var i, o, a, s = e.jsonp !== !1 && (an.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && an.test(e.data) && "data");
            if (s || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = ue.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(an, "$1" + i) : e.jsonp !== !1 && (e.url += (Ft.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function () {
                return a || ue.error(i + " was not called"), a[0]
            }, e.dataTypes[0] = "json", o = n[i], n[i] = function () {
                a = arguments
            }, r.always(function () {
                n[i] = o, e[i] && (e.jsonpCallback = t.jsonpCallback, on.push(i)), a && ue.isFunction(o) && o(a[0]), a = o = void 0
            }), "script"
        }), ue.parseHTML = function (e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || ye;
            var r = me.exec(e),
                i = !n && [];
            return r ? [t.createElement(r[1])] : (r = ue.buildFragment([e], t, i), i && i.length && ue(i).remove(), ue.merge([], r.childNodes))
        };
        var sn = ue.fn.load;
        ue.fn.load = function (e, t, n) {
            if ("string" != typeof e && sn) return sn.apply(this, arguments);
            var r, i, o, a = this,
                s = e.indexOf(" ");
            return s >= 0 && (r = ue.trim(e.slice(s, e.length)), e = e.slice(0, s)),
                ue.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), a.length > 0 && ue.ajax({
                    url: e,
                    type: o,
                    dataType: "html",
                    data: t
                }).done(function (e) {
                    i = arguments, a.html(r ? ue("<div>").append(ue.parseHTML(e)).find(r) : e)
                }).complete(n && function (e, t) {
                    a.each(n, i || [e.responseText, t, e])
                }), this
        }, ue.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
            ue.fn[t] = function (e) {
                return this.on(t, e)
            }
        }), ue.expr.filters.animated = function (e) {
            return ue.grep(ue.timers, function (t) {
                return e === t.elem
            }).length
        };
        var un = n.document.documentElement;
        ue.offset = {
            setOffset: function (e, t, n) {
                var r, i, o, a, s, u, c, l = ue.css(e, "position"),
                    f = ue(e),
                    p = {};
                "static" === l && (e.style.position = "relative"), s = f.offset(), o = ue.css(e, "top"), u = ue.css(e, "left"), c = ("absolute" === l || "fixed" === l) && ue.inArray("auto", [o, u]) > -1, c ? (r = f.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), ue.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + i), "using" in t ? t.using.call(e, p) : f.css(p)
            }
        }, ue.fn.extend({
            offset: function (e) {
                if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                    ue.offset.setOffset(this, e, t)
                });
                var t, n, r = {
                        top: 0,
                        left: 0
                    },
                    i = this[0],
                    o = i && i.ownerDocument;
                if (o) return t = o.documentElement, ue.contains(t, i) ? (typeof i.getBoundingClientRect !== Se && (r = i.getBoundingClientRect()), n = Y(o), {
                    top: r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                    left: r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
                }) : r
            },
            position: function () {
                if (this[0]) {
                    var e, t, n = {
                            top: 0,
                            left: 0
                        },
                        r = this[0];
                    return "fixed" === ue.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ue.nodeName(e[0], "html") || (n = e.offset()), n.top += ue.css(e[0], "borderTopWidth", !0), n.left += ue.css(e[0], "borderLeftWidth", !0)), {
                        top: t.top - n.top - ue.css(r, "marginTop", !0),
                        left: t.left - n.left - ue.css(r, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    for (var e = this.offsetParent || un; e && !ue.nodeName(e, "html") && "static" === ue.css(e, "position");) e = e.offsetParent;
                    return e || un
                })
            }
        }), ue.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function (e, t) {
            var n = /Y/.test(t);
            ue.fn[e] = function (r) {
                return Oe(this, function (e, r, i) {
                    var o = Y(e);
                    return void 0 === i ? o ? t in o ? o[t] : o.document.documentElement[r] : e[r] : void(o ? o.scrollTo(n ? ue(o).scrollLeft() : i, n ? i : ue(o).scrollTop()) : e[r] = i)
                }, e, r, arguments.length, null)
            }
        }), ue.each(["top", "left"], function (e, t) {
            ue.cssHooks[t] = A(ae.pixelPosition, function (e, n) {
                if (n) return n = ot(e, t), st.test(n) ? ue(e).position()[t] + "px" : n
            })
        }), ue.each({
            Height: "height",
            Width: "width"
        }, function (e, t) {
            ue.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function (n, r) {
                ue.fn[r] = function (r, i) {
                    var o = arguments.length && (n || "boolean" != typeof r),
                        a = n || (r === !0 || i === !0 ? "margin" : "border");
                    return Oe(this, function (t, n, r) {
                        var i;
                        return ue.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? ue.css(t, n, a) : ue.style(t, n, r, a)
                    }, t, o ? r : void 0, o, null)
                }
            })
        }), ue.fn.size = function () {
            return this.length
        }, ue.fn.andSelf = ue.fn.addBack, r = [], i = function () {
            return ue
        }.apply(t, r), !(void 0 !== i && (e.exports = i));
        var cn = n.jQuery,
            ln = n.$;
        return ue.noConflict = function (e) {
            return n.$ === ue && (n.$ = ln), e && n.jQuery === ue && (n.jQuery = cn), ue
        }, typeof o === Se && (n.jQuery = n.$ = ue), ue
    })
}, function (e, t, n) {
    var r, i;
    (function () {
        function n(e) {
            function t(t, n, r, i, o, a) {
                for (; o >= 0 && o < a; o += e) {
                    var s = i ? i[o] : o;
                    r = n(r, t[s], s, t)
                }
                return r
            }
            return function (n, r, i, o) {
                r = k(r, o, 4);
                var a = !A(n) && T.keys(n),
                    s = (a || n).length,
                    u = e > 0 ? 0 : s - 1;
                return arguments.length < 3 && (i = n[a ? a[u] : u], u += e), t(n, r, i, a, u, s)
            }
        }

        function o(e) {
            return function (t, n, r) {
                n = C(n, r);
                for (var i = j(t), o = e > 0 ? 0 : i - 1; o >= 0 && o < i; o += e)
                    if (n(t[o], o, t)) return o;
                return -1
            }
        }

        function a(e, t, n) {
            return function (r, i, o) {
                var a = 0,
                    s = j(r);
                if ("number" == typeof o) e > 0 ? a = o >= 0 ? o : Math.max(o + s, a) : s = o >= 0 ? Math.min(o + 1, s) : o + s + 1;
                else if (n && o && s) return o = n(r, i), r[o] === i ? o : -1;
                if (i !== i) return o = t(h.call(r, a, s), T.isNaN), o >= 0 ? o + a : -1;
                for (o = e > 0 ? a : s - 1; o >= 0 && o < s; o += e)
                    if (r[o] === i) return o;
                return -1
            }
        }

        function s(e, t) {
            var n = F.length,
                r = e.constructor,
                i = T.isFunction(r) && r.prototype || f,
                o = "constructor";
            for (T.has(e, o) && !T.contains(t, o) && t.push(o); n--;) o = F[n], o in e && e[o] !== i[o] && !T.contains(t, o) && t.push(o)
        }
        var u = this,
            c = u._,
            l = Array.prototype,
            f = Object.prototype,
            p = Function.prototype,
            d = l.push,
            h = l.slice,
            m = f.toString,
            v = f.hasOwnProperty,
            g = Array.isArray,
            y = Object.keys,
            x = p.bind,
            b = Object.create,
            w = function () {},
            T = function (e) {
                return e instanceof T ? e : this instanceof T ? void(this._wrapped = e) : new T(e)
            };
        "undefined" != typeof e && e.exports && (t = e.exports = T), t._ = T, T.VERSION = "1.8.3";
        var k = function (e, t, n) {
                if (void 0 === t) return e;
                switch (null == n ? 3 : n) {
                    case 1:
                        return function (n) {
                            return e.call(t, n)
                        };
                    case 2:
                        return function (n, r) {
                            return e.call(t, n, r)
                        };
                    case 3:
                        return function (n, r, i) {
                            return e.call(t, n, r, i)
                        };
                    case 4:
                        return function (n, r, i, o) {
                            return e.call(t, n, r, i, o)
                        }
                }
                return function () {
                    return e.apply(t, arguments)
                }
            },
            C = function (e, t, n) {
                return null == e ? T.identity : T.isFunction(e) ? k(e, t, n) : T.isObject(e) ? T.matcher(e) : T.property(e)
            };
        T.iteratee = function (e, t) {
            return C(e, t, 1 / 0)
        };
        var N = function (e, t) {
                return function (n) {
                    var r = arguments.length;
                    if (r < 2 || null == n) return n;
                    for (var i = 1; i < r; i++)
                        for (var o = arguments[i], a = e(o), s = a.length, u = 0; u < s; u++) {
                            var c = a[u];
                            t && void 0 !== n[c] || (n[c] = o[c])
                        }
                    return n
                }
            },
            E = function (e) {
                if (!T.isObject(e)) return {};
                if (b) return b(e);
                w.prototype = e;
                var t = new w;
                return w.prototype = null, t
            },
            S = function (e) {
                return function (t) {
                    return null == t ? void 0 : t[e]
                }
            },
            _ = Math.pow(2, 53) - 1,
            j = S("length"),
            A = function (e) {
                var t = j(e);
                return "number" == typeof t && t >= 0 && t <= _
            };
        T.each = T.forEach = function (e, t, n) {
            t = k(t, n);
            var r, i;
            if (A(e))
                for (r = 0, i = e.length; r < i; r++) t(e[r], r, e);
            else {
                var o = T.keys(e);
                for (r = 0, i = o.length; r < i; r++) t(e[o[r]], o[r], e)
            }
            return e
        }, T.map = T.collect = function (e, t, n) {
            t = C(t, n);
            for (var r = !A(e) && T.keys(e), i = (r || e).length, o = Array(i), a = 0; a < i; a++) {
                var s = r ? r[a] : a;
                o[a] = t(e[s], s, e)
            }
            return o
        }, T.reduce = T.foldl = T.inject = n(1), T.reduceRight = T.foldr = n(-1), T.find = T.detect = function (e, t, n) {
            var r;
            if (r = A(e) ? T.findIndex(e, t, n) : T.findKey(e, t, n), void 0 !== r && r !== -1) return e[r]
        }, T.filter = T.select = function (e, t, n) {
            var r = [];
            return t = C(t, n), T.each(e, function (e, n, i) {
                t(e, n, i) && r.push(e)
            }), r
        }, T.reject = function (e, t, n) {
            return T.filter(e, T.negate(C(t)), n)
        }, T.every = T.all = function (e, t, n) {
            t = C(t, n);
            for (var r = !A(e) && T.keys(e), i = (r || e).length, o = 0; o < i; o++) {
                var a = r ? r[o] : o;
                if (!t(e[a], a, e)) return !1
            }
            return !0
        }, T.some = T.any = function (e, t, n) {
            t = C(t, n);
            for (var r = !A(e) && T.keys(e), i = (r || e).length, o = 0; o < i; o++) {
                var a = r ? r[o] : o;
                if (t(e[a], a, e)) return !0
            }
            return !1
        }, T.contains = T.includes = T.include = function (e, t, n, r) {
            return A(e) || (e = T.values(e)), ("number" != typeof n || r) && (n = 0), T.indexOf(e, t, n) >= 0
        }, T.invoke = function (e, t) {
            var n = h.call(arguments, 2),
                r = T.isFunction(t);
            return T.map(e, function (e) {
                var i = r ? t : e[t];
                return null == i ? i : i.apply(e, n)
            })
        }, T.pluck = function (e, t) {
            return T.map(e, T.property(t))
        }, T.where = function (e, t) {
            return T.filter(e, T.matcher(t))
        }, T.findWhere = function (e, t) {
            return T.find(e, T.matcher(t))
        }, T.max = function (e, t, n) {
            var r, i, o = -(1 / 0),
                a = -(1 / 0);
            if (null == t && null != e) {
                e = A(e) ? e : T.values(e);
                for (var s = 0, u = e.length; s < u; s++) r = e[s], r > o && (o = r)
            } else t = C(t, n), T.each(e, function (e, n, r) {
                i = t(e, n, r), (i > a || i === -(1 / 0) && o === -(1 / 0)) && (o = e, a = i)
            });
            return o
        }, T.min = function (e, t, n) {
            var r, i, o = 1 / 0,
                a = 1 / 0;
            if (null == t && null != e) {
                e = A(e) ? e : T.values(e);
                for (var s = 0, u = e.length; s < u; s++) r = e[s], r < o && (o = r)
            } else t = C(t, n), T.each(e, function (e, n, r) {
                i = t(e, n, r), (i < a || i === 1 / 0 && o === 1 / 0) && (o = e, a = i)
            });
            return o
        }, T.shuffle = function (e) {
            for (var t, n = A(e) ? e : T.values(e), r = n.length, i = Array(r), o = 0; o < r; o++) t = T.random(0, o), t !== o && (i[o] = i[t]), i[t] = n[o];
            return i
        }, T.sample = function (e, t, n) {
            return null == t || n ? (A(e) || (e = T.values(e)), e[T.random(e.length - 1)]) : T.shuffle(e).slice(0, Math.max(0, t))
        }, T.sortBy = function (e, t, n) {
            return t = C(t, n), T.pluck(T.map(e, function (e, n, r) {
                return {
                    value: e,
                    index: n,
                    criteria: t(e, n, r)
                }
            }).sort(function (e, t) {
                var n = e.criteria,
                    r = t.criteria;
                if (n !== r) {
                    if (n > r || void 0 === n) return 1;
                    if (n < r || void 0 === r) return -1
                }
                return e.index - t.index
            }), "value")
        };
        var L = function (e) {
            return function (t, n, r) {
                var i = {};
                return n = C(n, r), T.each(t, function (r, o) {
                    var a = n(r, o, t);
                    e(i, r, a)
                }), i
            }
        };
        T.groupBy = L(function (e, t, n) {
            T.has(e, n) ? e[n].push(t) : e[n] = [t]
        }), T.indexBy = L(function (e, t, n) {
            e[n] = t
        }), T.countBy = L(function (e, t, n) {
            T.has(e, n) ? e[n]++ : e[n] = 1
        }), T.toArray = function (e) {
            return e ? T.isArray(e) ? h.call(e) : A(e) ? T.map(e, T.identity) : T.values(e) : []
        }, T.size = function (e) {
            return null == e ? 0 : A(e) ? e.length : T.keys(e).length
        }, T.partition = function (e, t, n) {
            t = C(t, n);
            var r = [],
                i = [];
            return T.each(e, function (e, n, o) {
                (t(e, n, o) ? r : i).push(e)
            }), [r, i]
        }, T.first = T.head = T.take = function (e, t, n) {
            if (null != e) return null == t || n ? e[0] : T.initial(e, e.length - t)
        }, T.initial = function (e, t, n) {
            return h.call(e, 0, Math.max(0, e.length - (null == t || n ? 1 : t)))
        }, T.last = function (e, t, n) {
            if (null != e) return null == t || n ? e[e.length - 1] : T.rest(e, Math.max(0, e.length - t))
        }, T.rest = T.tail = T.drop = function (e, t, n) {
            return h.call(e, null == t || n ? 1 : t)
        }, T.compact = function (e) {
            return T.filter(e, T.identity)
        };
        var D = function (e, t, n, r) {
            for (var i = [], o = 0, a = r || 0, s = j(e); a < s; a++) {
                var u = e[a];
                if (A(u) && (T.isArray(u) || T.isArguments(u))) {
                    t || (u = D(u, t, n));
                    var c = 0,
                        l = u.length;
                    for (i.length += l; c < l;) i[o++] = u[c++]
                } else n || (i[o++] = u)
            }
            return i
        };
        T.flatten = function (e, t) {
            return D(e, t, !1)
        }, T.without = function (e) {
            return T.difference(e, h.call(arguments, 1))
        }, T.uniq = T.unique = function (e, t, n, r) {
            T.isBoolean(t) || (r = n, n = t, t = !1), null != n && (n = C(n, r));
            for (var i = [], o = [], a = 0, s = j(e); a < s; a++) {
                var u = e[a],
                    c = n ? n(u, a, e) : u;
                t ? (a && o === c || i.push(u), o = c) : n ? T.contains(o, c) || (o.push(c), i.push(u)) : T.contains(i, u) || i.push(u)
            }
            return i
        }, T.union = function () {
            return T.uniq(D(arguments, !0, !0))
        }, T.intersection = function (e) {
            for (var t = [], n = arguments.length, r = 0, i = j(e); r < i; r++) {
                var o = e[r];
                if (!T.contains(t, o)) {
                    for (var a = 1; a < n && T.contains(arguments[a], o); a++);
                    a === n && t.push(o)
                }
            }
            return t
        }, T.difference = function (e) {
            var t = D(arguments, !0, !0, 1);
            return T.filter(e, function (e) {
                return !T.contains(t, e)
            })
        }, T.zip = function () {
            return T.unzip(arguments)
        }, T.unzip = function (e) {
            for (var t = e && T.max(e, j).length || 0, n = Array(t), r = 0; r < t; r++) n[r] = T.pluck(e, r);
            return n
        }, T.object = function (e, t) {
            for (var n = {}, r = 0, i = j(e); r < i; r++) t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
            return n
        }, T.findIndex = o(1), T.findLastIndex = o(-1), T.sortedIndex = function (e, t, n, r) {
            n = C(n, r, 1);
            for (var i = n(t), o = 0, a = j(e); o < a;) {
                var s = Math.floor((o + a) / 2);
                n(e[s]) < i ? o = s + 1 : a = s
            }
            return o
        }, T.indexOf = a(1, T.findIndex, T.sortedIndex), T.lastIndexOf = a(-1, T.findLastIndex), T.range = function (e, t, n) {
            null == t && (t = e || 0, e = 0), n = n || 1;
            for (var r = Math.max(Math.ceil((t - e) / n), 0), i = Array(r), o = 0; o < r; o++, e += n) i[o] = e;
            return i
        };
        var O = function (e, t, n, r, i) {
            if (!(r instanceof t)) return e.apply(n, i);
            var o = E(e.prototype),
                a = e.apply(o, i);
            return T.isObject(a) ? a : o
        };
        T.bind = function (e, t) {
            if (x && e.bind === x) return x.apply(e, h.call(arguments, 1));
            if (!T.isFunction(e)) throw new TypeError("Bind must be called on a function");
            var n = h.call(arguments, 2),
                r = function () {
                    return O(e, r, t, this, n.concat(h.call(arguments)))
                };
            return r
        }, T.partial = function (e) {
            var t = h.call(arguments, 1),
                n = function () {
                    for (var r = 0, i = t.length, o = Array(i), a = 0; a < i; a++) o[a] = t[a] === T ? arguments[r++] : t[a];
                    for (; r < arguments.length;) o.push(arguments[r++]);
                    return O(e, n, this, this, o)
                };
            return n
        }, T.bindAll = function (e) {
            var t, n, r = arguments.length;
            if (r <= 1) throw new Error("bindAll must be passed function names");
            for (t = 1; t < r; t++) n = arguments[t], e[n] = T.bind(e[n], e);
            return e
        }, T.memoize = function (e, t) {
            var n = function (r) {
                var i = n.cache,
                    o = "" + (t ? t.apply(this, arguments) : r);
                return T.has(i, o) || (i[o] = e.apply(this, arguments)), i[o]
            };
            return n.cache = {}, n
        }, T.delay = function (e, t) {
            var n = h.call(arguments, 2);
            return setTimeout(function () {
                return e.apply(null, n)
            }, t)
        }, T.defer = T.partial(T.delay, T, 1), T.throttle = function (e, t, n) {
            var r, i, o, a = null,
                s = 0;
            n || (n = {});
            var u = function () {
                s = n.leading === !1 ? 0 : T.now(), a = null, o = e.apply(r, i), a || (r = i = null)
            };
            return function () {
                var c = T.now();
                s || n.leading !== !1 || (s = c);
                var l = t - (c - s);
                return r = this, i = arguments, l <= 0 || l > t ? (a && (clearTimeout(a), a = null), s = c, o = e.apply(r, i), a || (r = i = null)) : a || n.trailing === !1 || (a = setTimeout(u, l)), o
            }
        }, T.debounce = function (e, t, n) {
            var r, i, o, a, s, u = function () {
                var c = T.now() - a;
                c < t && c >= 0 ? r = setTimeout(u, t - c) : (r = null, n || (s = e.apply(o, i), r || (o = i = null)))
            };
            return function () {
                o = this, i = arguments, a = T.now();
                var c = n && !r;
                return r || (r = setTimeout(u, t)), c && (s = e.apply(o, i), o = i = null), s
            }
        }, T.wrap = function (e, t) {
            return T.partial(t, e)
        }, T.negate = function (e) {
            return function () {
                return !e.apply(this, arguments)
            }
        }, T.compose = function () {
            var e = arguments,
                t = e.length - 1;
            return function () {
                for (var n = t, r = e[t].apply(this, arguments); n--;) r = e[n].call(this, r);
                return r
            }
        }, T.after = function (e, t) {
            return function () {
                if (--e < 1) return t.apply(this, arguments)
            }
        }, T.before = function (e, t) {
            var n;
            return function () {
                return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = null), n
            }
        }, T.once = T.partial(T.before, 2);
        var H = !{
                toString: null
            }.propertyIsEnumerable("toString"),
            F = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
        T.keys = function (e) {
            if (!T.isObject(e)) return [];
            if (y) return y(e);
            var t = [];
            for (var n in e) T.has(e, n) && t.push(n);
            return H && s(e, t), t
        }, T.allKeys = function (e) {
            if (!T.isObject(e)) return [];
            var t = [];
            for (var n in e) t.push(n);
            return H && s(e, t), t
        }, T.values = function (e) {
            for (var t = T.keys(e), n = t.length, r = Array(n), i = 0; i < n; i++) r[i] = e[t[i]];
            return r
        }, T.mapObject = function (e, t, n) {
            t = C(t, n);
            for (var r, i = T.keys(e), o = i.length, a = {}, s = 0; s < o; s++) r = i[s], a[r] = t(e[r], r, e);
            return a
        }, T.pairs = function (e) {
            for (var t = T.keys(e), n = t.length, r = Array(n), i = 0; i < n; i++) r[i] = [t[i], e[t[i]]];
            return r
        }, T.invert = function (e) {
            for (var t = {}, n = T.keys(e), r = 0, i = n.length; r < i; r++) t[e[n[r]]] = n[r];
            return t
        }, T.functions = T.methods = function (e) {
            var t = [];
            for (var n in e) T.isFunction(e[n]) && t.push(n);
            return t.sort()
        }, T.extend = N(T.allKeys), T.extendOwn = T.assign = N(T.keys), T.findKey = function (e, t, n) {
            t = C(t, n);
            for (var r, i = T.keys(e), o = 0, a = i.length; o < a; o++)
                if (r = i[o], t(e[r], r, e)) return r
        }, T.pick = function (e, t, n) {
            var r, i, o = {},
                a = e;
            if (null == a) return o;
            T.isFunction(t) ? (i = T.allKeys(a), r = k(t, n)) : (i = D(arguments, !1, !1, 1), r = function (e, t, n) {
                return t in n
            }, a = Object(a));
            for (var s = 0, u = i.length; s < u; s++) {
                var c = i[s],
                    l = a[c];
                r(l, c, a) && (o[c] = l)
            }
            return o
        }, T.omit = function (e, t, n) {
            if (T.isFunction(t)) t = T.negate(t);
            else {
                var r = T.map(D(arguments, !1, !1, 1), String);
                t = function (e, t) {
                    return !T.contains(r, t)
                }
            }
            return T.pick(e, t, n)
        }, T.defaults = N(T.allKeys, !0), T.create = function (e, t) {
            var n = E(e);
            return t && T.extendOwn(n, t), n
        }, T.clone = function (e) {
            return T.isObject(e) ? T.isArray(e) ? e.slice() : T.extend({}, e) : e
        }, T.tap = function (e, t) {
            return t(e), e
        }, T.isMatch = function (e, t) {
            var n = T.keys(t),
                r = n.length;
            if (null == e) return !r;
            for (var i = Object(e), o = 0; o < r; o++) {
                var a = n[o];
                if (t[a] !== i[a] || !(a in i)) return !1
            }
            return !0
        };
        var M = function (e, t, n, r) {
            if (e === t) return 0 !== e || 1 / e === 1 / t;
            if (null == e || null == t) return e === t;
            e instanceof T && (e = e._wrapped), t instanceof T && (t = t._wrapped);
            var i = m.call(e);
            if (i !== m.call(t)) return !1;
            switch (i) {
                case "[object RegExp]":
                case "[object String]":
                    return "" + e == "" + t;
                case "[object Number]":
                    return +e !== +e ? +t !== +t : 0 === +e ? 1 / +e === 1 / t : +e === +t;
                case "[object Date]":
                case "[object Boolean]":
                    return +e === +t
            }
            var o = "[object Array]" === i;
            if (!o) {
                if ("object" != typeof e || "object" != typeof t) return !1;
                var a = e.constructor,
                    s = t.constructor;
                if (a !== s && !(T.isFunction(a) && a instanceof a && T.isFunction(s) && s instanceof s) && "constructor" in e && "constructor" in t) return !1
            }
            n = n || [], r = r || [];
            for (var u = n.length; u--;)
                if (n[u] === e) return r[u] === t;
            if (n.push(e), r.push(t), o) {
                if (u = e.length, u !== t.length) return !1;
                for (; u--;)
                    if (!M(e[u], t[u], n, r)) return !1
            } else {
                var c, l = T.keys(e);
                if (u = l.length, T.keys(t).length !== u) return !1;
                for (; u--;)
                    if (c = l[u], !T.has(t, c) || !M(e[c], t[c], n, r)) return !1
            }
            return n.pop(), r.pop(), !0
        };
        T.isEqual = function (e, t) {
            return M(e, t)
        }, T.isEmpty = function (e) {
            return null == e || (A(e) && (T.isArray(e) || T.isString(e) || T.isArguments(e)) ? 0 === e.length : 0 === T.keys(e).length)
        }, T.isElement = function (e) {
            return !(!e || 1 !== e.nodeType)
        }, T.isArray = g || function (e) {
            return "[object Array]" === m.call(e)
        }, T.isObject = function (e) {
            var t = typeof e;
            return "function" === t || "object" === t && !!e
        }, T.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function (e) {
            T["is" + e] = function (t) {
                return m.call(t) === "[object " + e + "]"
            }
        }), T.isArguments(arguments) || (T.isArguments = function (e) {
            return T.has(e, "callee")
        }), "function" != typeof /./ && "object" != typeof Int8Array && (T.isFunction = function (e) {
            return "function" == typeof e || !1
        }), T.isFinite = function (e) {
            return isFinite(e) && !isNaN(parseFloat(e))
        }, T.isNaN = function (e) {
            return T.isNumber(e) && e !== +e
        }, T.isBoolean = function (e) {
            return e === !0 || e === !1 || "[object Boolean]" === m.call(e)
        }, T.isNull = function (e) {
            return null === e
        }, T.isUndefined = function (e) {
            return void 0 === e
        }, T.has = function (e, t) {
            return null != e && v.call(e, t)
        }, T.noConflict = function () {
            return u._ = c, this
        }, T.identity = function (e) {
            return e
        }, T.constant = function (e) {
            return function () {
                return e
            }
        }, T.noop = function () {}, T.property = S, T.propertyOf = function (e) {
            return null == e ? function () {} : function (t) {
                return e[t]
            }
        }, T.matcher = T.matches = function (e) {
            return e = T.extendOwn({}, e),
                function (t) {
                    return T.isMatch(t, e)
                }
        }, T.times = function (e, t, n) {
            var r = Array(Math.max(0, e));
            t = k(t, n, 1);
            for (var i = 0; i < e; i++) r[i] = t(i);
            return r
        }, T.random = function (e, t) {
            return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
        }, T.now = Date.now || function () {
            return (new Date).getTime()
        };
        var q = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            },
            I = T.invert(q),
            R = function (e) {
                var t = function (t) {
                        return e[t]
                    },
                    n = "(?:" + T.keys(e).join("|") + ")",
                    r = RegExp(n),
                    i = RegExp(n, "g");
                return function (e) {
                    return e = null == e ? "" : "" + e, r.test(e) ? e.replace(i, t) : e
                }
            };
        T.escape = R(q), T.unescape = R(I), T.result = function (e, t, n) {
            var r = null == e ? void 0 : e[t];
            return void 0 === r && (r = n), T.isFunction(r) ? r.call(e) : r
        };
        var z = 0;
        T.uniqueId = function (e) {
            var t = ++z + "";
            return e ? e + t : t
        }, T.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        };
        var B = /(.)^/,
            P = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            W = /\\|'|\r|\n|\u2028|\u2029/g,
            $ = function (e) {
                return "\\" + P[e]
            };
        T.template = function (e, t, n) {
            !t && n && (t = n), t = T.defaults({}, t, T.templateSettings);
            var r = RegExp([(t.escape || B).source, (t.interpolate || B).source, (t.evaluate || B).source].join("|") + "|$", "g"),
                i = 0,
                o = "__p+='";
            e.replace(r, function (t, n, r, a, s) {
                return o += e.slice(i, s).replace(W, $), i = s + t.length, n ? o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : r ? o += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : a && (o += "';\n" + a + "\n__p+='"), t
            }), o += "';\n", t.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
            try {
                var a = new Function(t.variable || "obj", "_", o)
            } catch (s) {
                throw s.source = o, s
            }
            var u = function (e) {
                    return a.call(this, e, T)
                },
                c = t.variable || "obj";
            return u.source = "function(" + c + "){\n" + o + "}", u
        }, T.chain = function (e) {
            var t = T(e);
            return t._chain = !0, t
        };
        var X = function (e, t) {
            return e._chain ? T(t).chain() : t
        };
        T.mixin = function (e) {
            T.each(T.functions(e), function (t) {
                var n = T[t] = e[t];
                T.prototype[t] = function () {
                    var e = [this._wrapped];
                    return d.apply(e, arguments), X(this, n.apply(T, e))
                }
            })
        }, T.mixin(T), T.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (e) {
            var t = l[e];
            T.prototype[e] = function () {
                var n = this._wrapped;
                return t.apply(n, arguments), "shift" !== e && "splice" !== e || 0 !== n.length || delete n[0], X(this, n)
            }
        }), T.each(["concat", "join", "slice"], function (e) {
            var t = l[e];
            T.prototype[e] = function () {
                return X(this, t.apply(this._wrapped, arguments))
            }
        }), T.prototype.value = function () {
            return this._wrapped
        }, T.prototype.valueOf = T.prototype.toJSON = T.prototype.value, T.prototype.toString = function () {
            return "" + this._wrapped
        }, r = [], i = function () {
            return T
        }.apply(t, r), !(void 0 !== i && (e.exports = i))
    }).call(this)
}, function (e, t, n) {
    var r = n(8);
    n(11);
    var i = "MEIZUSTORESESSIONVAL",
        o = "https://login.flyme.cn/vCodeLogin?sid=unionlogin&service=store&autodirct=true&useruri=http://store.meizu.com/member/login.htm?useruri=",
        a = null,
        s = !1,
        u = r.cookie(i);
    if (u) try {
        s = !0, a = JSON.parse(u)
    } catch (c) {
        s = !1
    }
    var l = function (e) {
        e || (e = window.location.href), window.location.href = o + encodeURIComponent(encodeURIComponent(e))
    };
    e.exports = {
        isLogin: s,
        doLogin: l,
        userInfo: a
    }
}, function (e, t, n) {
    var r, i, o;
    ! function (a) {
        i = [n(8)], r = a, o = "function" == typeof r ? r.apply(t, i) : r, !(void 0 !== o && (e.exports = o))
    }(function (e) {
        function t(e) {
            return s.raw ? e : encodeURIComponent(e)
        }

        function n(e) {
            return s.raw ? e : decodeURIComponent(e)
        }

        function r(e) {
            return t(s.json ? JSON.stringify(e) : String(e))
        }

        function i(e) {
            0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
            try {
                return e = decodeURIComponent(e.replace(a, " ")), s.json ? JSON.parse(e) : e
            } catch (t) {}
        }

        function o(t, n) {
            var r = s.raw ? t : i(t);
            return e.isFunction(n) ? n(r) : r
        }
        var a = /\+/g,
            s = e.cookie = function (i, a, u) {
                if (void 0 !== a && !e.isFunction(a)) {
                    if (u = e.extend({}, s.defaults, u), "number" == typeof u.expires) {
                        var c = u.expires,
                            l = u.expires = new Date;
                        l.setTime(+l + 864e5 * c)
                    }
                    return document.cookie = [t(i), "=", r(a), u.expires ? "; expires=" + u.expires.toUTCString() : "", u.path ? "; path=" + u.path : "", u.domain ? "; domain=" + u.domain : "", u.secure ? "; secure" : ""].join("")
                }
                for (var f = i ? void 0 : {}, p = document.cookie ? document.cookie.split("; ") : [], d = 0, h = p.length; d < h; d++) {
                    var m = p[d].split("="),
                        v = n(m.shift()),
                        g = m.join("=");
                    if (i && i === v) {
                        f = o(g, a);
                        break
                    }
                    i || void 0 === (g = o(g)) || (f[v] = g)
                }
                return f
            };
        s.defaults = {}, e.removeCookie = function (t, n) {
            return void 0 !== e.cookie(t) && (e.cookie(t, "", e.extend({}, n, {
                expires: -1
            })), !e.cookie(t))
        }
    })
}, function (e, t, n) {
    var r = n(8),
        i = n(10);
    n(11);
    var o = n(13),
        a = "cart.meizu.com",
        s = "MEIZUSTORECARTCOUNT",
        u = "MEIZUSTORECARTMINITIME",
        c = {
            domain: ".meizu.com",
            path: "/"
        },
        l = 6e4,
        f = 3e4,
        p = "//" + a + "/",
        d = p + "add",
        h = p + "delete",
        m = p + "modify_quantity",
        v = p + "count",
        g = p + "mini",
        y = p + "selected",
        x = p + "getcsrf",
        b = n(14)({
            url: x
        }),
        w = function () {
            return o.call(this), this._init()
        };
    w.prototype = new o, w.prototype.constructor = w, w.prototype._inCartPage = window.location.host.toLocaleLowerCase() === a, w.prototype._init = function () {
        var e = this;
        return this._miniGetTime(!1), this._lastGetMiniTime = 0, r(window).on("visibilitychange", function () {
            if ("hidden" != document.visibilityState) return e.count()
        }), this
    }, w.prototype._miniCartData = {
        mainSkus: [],
        count: 0,
        invalidCount: 0
    }, w.prototype._miniGetTime = function (e) {
        if ("boolean" == typeof e && e === !1) return r.removeCookie(u, c);
        if (void 0 === e) {
            var t = parseInt(r.cookie(u), 10);
            return isNaN(t) ? 0 : t
        }
        return r.cookie(u, e + "", c)
    }, w.prototype.add = function (e, t) {
        return this._jsonpToServer(d, e, function (e, n) {
            if (e || (this._miniGetTime(0), this._saveCountToCookie(n.quantity), this.emit("add", n)), t && r.isFunction(t)) return t.apply(this, arguments)
        }), this
    }, w.prototype.select = function (e, t) {
        return this._postToServer(y, e, function (e, n) {
            if (e || this.emit("select", n), t && r.isFunction(t)) return t.apply(this, arguments)
        })
    }, w.prototype.del = function (e, t) {
        if (!r.isArray(e) || !e.length) return r.isFunction(t) && t(null, null, {
            msg: "无删除商品"
        }), this;
        var n = this._inCartPage ? "_postToServer" : "_jsonpToServer",
            i = this._inCartPage ? e : {
                data: JSON.stringify(e)
            };
        return this[n](h, i, function (e, n) {
            if (e || (this._miniGetTime(0), this._saveCountToCookie(n), this.emit("delete", n)), t && r.isFunction(t)) return t.apply(this, arguments)
        }), this
    }, w.prototype.edit = function (e, t) {
        return e = r.isPlainObject(e) ? [e] : e, this._postToServer(m, e, function (e, n) {
            if (e || (this._miniGetTime(0), this._removeCountToCookie(), this.emit("edit", n)), t && r.isFunction(t)) return t.apply(this, arguments)
        }), this
    }, w.prototype.mini = function (e, t) {
        if (r.isFunction(e) && (t = e), !r.isFunction(t)) throw console && r.isFunction(console.error), new TypeError('Arguments "callback" must be a function!');
        var n = +new Date;
        return e === !0 || !this._miniGetTime() || this._lastGetMiniTime + f < n ? this._jsonpToServer(g, {}, function (e, n) {
            return e || (this._lastGetMiniTime = +new Date, this._miniGetTime(this._lastGetMiniTime), this._saveCountToCookie((n.count || 0) + (n.invalidCount || 0)), this._miniCartData = JSON.parse(JSON.stringify(n))), t.apply(this, arguments)
        }) : t(null, JSON.parse(JSON.stringify(this._miniCartData)), {
            code: 2e3
        })
    }, w.prototype._removeCountToCookie = function () {
        r.removeCookie(s, c)
    }, w.prototype._saveCountToCookie = function (e) {
        var t = JSON.stringify({
            c: e,
            t: +new Date,
            s: i.isLogin
        });
        return this.emit("update", "count", e), r.cookie(s, t, c), !0
    }, w.prototype._getCountFromCookie = function () {
        var e = r.cookie(s),
            t = +new Date;
        if (!e) return -1;
        try {
            e = JSON.parse(e)
        } catch (n) {
            return r.removeCookie(s, c), -1
        }
        return e.t + l < t || e.s !== i.isLogin ? (r.removeCookie(s, c), -1) : e.c
    }, w.prototype.count = function (e) {
        var t = this._getCountFromCookie();
        return t !== -1 ? (this.emit("update", "count", t), r.isFunction(e) && e(null, t), this) : this._jsonpToServer(v, {}, function (t, n) {
            t || void 0 === n || (this._saveCountToCookie(n), this.emit("update", "count", n)), r.isFunction(e) && e(t, n)
        })
    }, w.prototype._jsonpToServer = function (e, t, n) {
        return "function" == typeof t && (n = t), r.ajax({
            url: e,
            dataType: "jsonp",
            data: t,
            timeout: 1e4,
            success: this._handleAjaxCallback.bind(this, n),
            error: this._handleAjaxError.bind(this, n)
        })
    }, w.prototype._postToServer = function (e, t, n) {
        var i;
        try {
            i = b.async()
        } catch (o) {
            return this._handleAjaxError(n)
        }
        return r.ajax({
            url: e,
            type: "post",
            data: JSON.stringify(t),
            headers: {
                "X-CSRF-TOKEN": i
            },
            contentType: "application/json",
            success: this._handleAjaxCallback.bind(this, n),
            error: this._handleAjaxError.bind(this, n)
        })
    }, w.prototype._handleAjaxCallback = function (e, t) {
        return 2e3 === t.code ? e.call(this, null, t.data, t) : e.call(this, t.message || t.msg, null, t)
    }, w.prototype._handleAjaxError = function (e) {
        return e.call(this, "服务器异常")
    }, t = e.exports = new w, t.Interface = w
}, function (e, t) {
    function n() {
        this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
    }

    function r(e) {
        return "function" == typeof e
    }

    function i(e) {
        return "number" == typeof e
    }

    function o(e) {
        return "object" == typeof e && null !== e
    }

    function a(e) {
        return void 0 === e
    }
    e.exports = n, n.EventEmitter = n, n.prototype._events = void 0, n.prototype._maxListeners = void 0, n.defaultMaxListeners = 10, n.prototype.setMaxListeners = function (e) {
        if (!i(e) || e < 0 || isNaN(e)) throw TypeError("n must be a positive number");
        return this._maxListeners = e, this
    }, n.prototype.emit = function (e) {
        var t, n, i, s, u, c;
        if (this._events || (this._events = {}), "error" === e && (!this._events.error || o(this._events.error) && !this._events.error.length)) {
            if (t = arguments[1], t instanceof Error) throw t;
            var l = new Error('Uncaught, unspecified "error" event. (' + t + ")");
            throw l.context = t, l
        }
        if (n = this._events[e], a(n)) return !1;
        if (r(n)) switch (arguments.length) {
            case 1:
                n.call(this);
                break;
            case 2:
                n.call(this, arguments[1]);
                break;
            case 3:
                n.call(this, arguments[1], arguments[2]);
                break;
            default:
                s = Array.prototype.slice.call(arguments, 1), n.apply(this, s)
        } else if (o(n))
            for (s = Array.prototype.slice.call(arguments, 1), c = n.slice(), i = c.length, u = 0; u < i; u++) c[u].apply(this, s);
        return !0
    }, n.prototype.addListener = function (e, t) {
        var i;
        if (!r(t)) throw TypeError("listener must be a function");
        return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", e, r(t.listener) ? t.listener : t), this._events[e] ? o(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t, o(this._events[e]) && !this._events[e].warned && (i = a(this._maxListeners) ? n.defaultMaxListeners : this._maxListeners, i && i > 0 && this._events[e].length > i && (this._events[e].warned = !0, "function" == typeof console.trace)), this
    }, n.prototype.on = n.prototype.addListener, n.prototype.once = function (e, t) {
        function n() {
            this.removeListener(e, n), i || (i = !0, t.apply(this, arguments))
        }
        if (!r(t)) throw TypeError("listener must be a function");
        var i = !1;
        return n.listener = t, this.on(e, n), this
    }, n.prototype.removeListener = function (e, t) {
        var n, i, a, s;
        if (!r(t)) throw TypeError("listener must be a function");
        if (!this._events || !this._events[e]) return this;
        if (n = this._events[e], a = n.length, i = -1, n === t || r(n.listener) && n.listener === t) delete this._events[e], this._events.removeListener && this.emit("removeListener", e, t);
        else if (o(n)) {
            for (s = a; s-- > 0;)
                if (n[s] === t || n[s].listener && n[s].listener === t) {
                    i = s;
                    break
                } if (i < 0) return this;
            1 === n.length ? (n.length = 0, delete this._events[e]) : n.splice(i, 1), this._events.removeListener && this.emit("removeListener", e, t)
        }
        return this
    }, n.prototype.removeAllListeners = function (e) {
        var t, n;
        if (!this._events) return this;
        if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[e] && delete this._events[e], this;
        if (0 === arguments.length) {
            for (t in this._events) "removeListener" !== t && this.removeAllListeners(t);
            return this.removeAllListeners("removeListener"), this._events = {}, this
        }
        if (n = this._events[e], r(n)) this.removeListener(e, n);
        else if (n)
            for (; n.length;) this.removeListener(e, n[n.length - 1]);
        return delete this._events[e], this
    }, n.prototype.listeners = function (e) {
        var t;
        return t = this._events && this._events[e] ? r(this._events[e]) ? [this._events[e]] : this._events[e].slice() : []
    }, n.prototype.listenerCount = function (e) {
        if (this._events) {
            var t = this._events[e];
            if (r(t)) return 1;
            if (t) return t.length
        }
        return 0
    }, n.listenerCount = function (e, t) {
        return e.listenerCount(t)
    }
}, function (e, t, n) {
    var r = n(8),
        i = n(13),
        o = function () {
            return this._events = {}, i.apply(this, arguments), this.init.apply(this, arguments)
        };
    o.prototype = new i, o.prototype.constructor = o, o.prototype.init = function (e) {
        return this.options = r.extend({}, this.defaultOptions, e), this
    }, o.prototype.defaultOptions = {
        url: "/independent"
    }, o.prototype.get = function (e, t) {
        return !(!e || !r.isFunction(e)) && void r.ajax({
            url: this.options.url,
            type: "get",
            cache: !1,
            async: !t,
            success: function (t, n, r) {
                if (200 == t.code) {
                    var i = r.getResponseHeader("X-CSRF-TOKEN");
                    e(null, i, r)
                } else e(t.error)
            },
            error: function () {
                e("网络错误")
            }
        })
    }, o.prototype.async = function () {
        var e = "";
        return this.get(function (t, n) {
            if (t) throw Error(t);
            e = n
        }, !0), e
    }, e.exports = function (e) {
        return new o(e)
    }
}, function (e, t, n) {
    n(16);
    var r = n(8),
        i = n(18)("animation"),
        o = '<div class="mz-loading-mask" />',
        a = '<div class="mz-loading" />',
        s = ['<div class="mz-bounce mz-bounce1"></div>', '<div class="mz-bounce mz-bounce2"></div>', '<div class="mz-bounce mz-bounce3"></div>'].join(""),
        u = function (e) {
            var t = r(e || "body");
            "static" === t.css("position") && "body" !== t.selector && t.css("position", "relative");
            var n = !1,
                u = t.children(".mz-loading-mask");
            u.length || (u = r(o), n = !0);
            var c = t.outerHeight(),
                l = t.outerWidth();
            if (u.css({
                    width: l,
                    height: c
                }), !n) return u.show();
            var f;
            return f = i ? r(a).addClass("spinner").append(s) : r(a).addClass("image"), u.append(f).appendTo(t)
        },
        c = function (e) {
            var t = r(e || "body"),
                n = t.children(".mz-loading-mask");
            return !!n.length && n.hide()
        };
    e.exports = {
        show: u,
        hide: c
    }
}, 2, , function (e, t) {
    e.exports = function (e) {
        var t, n = ["webkit", "Moz", "ms", "o"],
            r = [],
            i = document.documentElement.style,
            o = function (e) {
                return e.replace(/-(\w)/g, function (e, t) {
                    return t.toUpperCase()
                })
            };
        for (t = 0; t < n.length; t++) r.push(o(n[t] + "-" + e));
        for (r.push(o(e)), t = 0; t < r.length; t++)
            if (r[t] in i) return !0;
        return !1
    }
}, function (e, t) {
    e.exports = '<div class="store-cart-tips-box">\n  <div class="store-cart-tips-content">\n    <div class="store-cart-tips-icon <%= icon %>"></div>\n    <div class="store-cart-tips-text">\n      <%= text %>\n    </div>\n  </div>\n</div>\n'
}, function (e, t) {
    e.exports = '<li class="store-cart-item <%= data.packageName? \'store-cart-item-package\' : \'\' %>">\n  <div class="store-cart-item-content">\n    <a href="<%= data.itemUrl %>" class="store-cart-link" target="_blank">\n      <img src="<%= data.image %>@80x80.png" class="store-cart-pic" alt="">\n    </a>\n    <a class="store-cart-text" href="<%= data.itemUrl %>" target="_blank">\n      <p class="store-cart-text-row"><%= data.itemName %></p>\n      <% if (data.packageName) { %><p class="store-cart-text-row"><%= data.packageName %></p><% } %>\n      <p class="store-cart-text-row desc"><%= data.cspuDesc %></p>\n    </a>\n    <div class="store-cart-right">\n      <p class="store-cart-item-total"><%= data.packagePrice ? (data.packagePrice + data.price) : data.price %> × <%= data.quantity %></p>\n      <span class="store-cart-item-delete">删除</span>\n      <% if (data.packageName) { %><p>&nbsp;</p><% } %>\n    </div>\n  </div>\n</li>\n'
}, function (e, t) {
    e.exports = '<div class="store-cart-footer">\n  <span class="store-cart-total">\n    共 <span class="store-cart-count"><%= count + invalidCount %></span> 件商品<span class="store-cart-invalid-count">（ <%= invalidCount %> 件失效 ）</span>\n  </span>\n  <a class="mz-btn success m" href="//cart.meizu.com/">去购物车</a>\n</div>\n'
}, function (e, t, n) {
    n(23);
    var r, i, o = n(9),
        a = n(8),
        s = n(12),
        u = "store-magnet-show",
        c = "www.meizu.com",
        l = /\/[smart|products|accessory].{1,}.html$/,
        f = o.template(n(28), {
            variable: "data"
        }),
        p = {
            mini: !1,
            bottom: 100,
            show: 1e3,
            talk: !1,
            cart: !0,
            top: !0,
            app: !0
        },
        d = function (e) {
            r || (window.location.hostname === c && l.test(window.location.pathname) && (p.mini = !0), p = a.extend({}, p, e), r = a(f(p)), v(), setTimeout(function () {
                r.appendTo("body"), m()
            }))
        },
        h = function (e) {
            e > 0 && (a(window).scrollTop(e - 80), setTimeout(function () {
                h(e - 80)
            }, 10))
        },
        m = function () {
            var e = a(window).height(),
                t = a(window).scrollTop();
            t + e > p.show && t > 0 ? r.addClass(u) : r.removeClass(u)
        },
        v = function () {
            a(".store-magnet-item-top", r).on("click", function () {
                var e = a(window).scrollTop();
                h(e)
            }), a(".store-magnet-minimize", r).on("click", function () {
                r.removeClass("store-magnet-mini")
            }), s.on("update", function (e, t) {
                "count" === e && a(".store-magnet-cart-text", r).text(t <= 99 ? t + "" : "99+")
            }), a(window).on("scroll", function () {
                clearTimeout(i), i = setTimeout(m, 30)
            })
        };
    e.exports = {
        init: d
    }
}, 2, , , , , function (e, t, n) {
    e.exports = '<div class="store-magnet <%= data.mini ? \' store-magnet-mini\' : \'\' %>" style="bottom: <%= data.bottom %>px;">\n  <ul class="store-magnet-list">\n    <% if (data.talk) { %>\n    <li class="store-magnet-item">\n      <a href="//cart.meizu.com" class="store-magnet-link">\n        <div class="store-magnet-icon">\n          <i class="store-iconfont store-icon-talk"></i>\n        </div>\n        <div class="store-magnet-text">联系客服</div>\n      </a>\n    </li>\n    <% } %>\n    <% if (data.cart) { %>\n    <li class="store-magnet-item">\n      <a href="//cart.meizu.com" class="store-magnet-link">\n        <div class="store-magnet-icon">\n          <i class="store-iconfont store-icon-cart"></i>\n        </div>\n        <div class="store-magnet-text">购物车</div>\n        <span class="store-magnet-cart-num" id="storeMagnetCartNum">\n          <span class="store-magnet-cart-text">0</span>\n        </span>\n      </a>\n    </li>\n    <% } %>\n    <% if (data.app) { %>\n    <li class="store-magnet-item store-magnet-item-app">\n      <a href="javascript:void(0);" class="store-magnet-link">\n        <div class="store-magnet-icon">\n          <i class="store-iconfont store-icon-app"></i>\n        </div>\n        <div class="store-magnet-download">\n          <div class="store-magnet-download-body">\n            <img src="' + n(29) + '" class="store-magnet-qrcode" alt="QRCode">\n            <p class="store-magnet-download-text">扫码下载魅族商城APP</p>\n          </div>\n        </div>\n      </a>\n    </li>\n    <% } %>\n    <% if (data.cart) { %>\n    <li class="store-magnet-item store-magnet-item-top">\n      <a href="javascript:void(0);" class="store-magnet-link">\n        <div class="store-magnet-icon">\n          <i class="store-iconfont store-icon-top"></i>\n        </div>\n        <div class="store-magnet-text">回到顶部</div>\n      </a>\n    </li>\n    <% } %>\n  </ul>\n  <a class="store-magnet-minimize store-magnet-icon store-magnet-link" href="javascript:void(0);">\n    <i class="store-iconfont store-icon-minimize"></i>\n  </a>\n</div>\n'
}, function (e, t, n) {
    e.exports = n.p + "img/qrcode-3389e5b72a.png"
}]));