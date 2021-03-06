! function () {
    function t(t) {
        var e = s;
        return ["meizu.com", "meizu.cn", "flyme.cn"].forEach(function (n) {
            t.slice(t.length - n.length) === n && (e = u)
        }), e
    }

    function e(e) {
        var r = e.data,
            i = e.source,
            o = e.origin;
        if (!n.postMessage || i === n || !t(o) || !r.type) return s;
        r.mo && !MSSG.initedMo && m.mo(r.mo, i, o), m.s(r, i, o)
    }
    var n = window,
        r = document,
        i = n.location,
        o = Math,
        a = navigator,
        c = r.body,
        s = !1,
        u = 1,
        l = n.MzJavascriptInterface || {},
        f = n.MzPrivateJavascriptInterface || {},
        d = n.__mztj || {},
        g = n.MeizuLogger = function () {},
        h = {
            i: {
                ie: /msie (\d+\.\d+)/i.test(a.userAgent),
                align: 1
            },
            event: {
                c: function (t, e, n) {
                    t.attachEvent ? t.attachEvent("on" + e, function (e) {
                        n.call(t, e)
                    }) : t.addEventListener && t.addEventListener(e, n, s)
                }
            },
            url: {
                qo: function (t) {
                    for (var e, n = {}, r = t.split("&"), i = 0, o = r.length; i < o; i++) n[(e = r[i].split("="))[0]] = e[1];
                    return n
                },
                qs: function (t, e) {
                    var n, r, o, a = "";
                    for (e = (e = e || i.search).split(/&|\?/), t = String(t).toLowerCase(), n = 0; n < e.length; n++)
                        if (r = e[n], (o = r.split("="))[0].toLowerCase() === t) {
                            a = o[1];
                            break
                        } return a
                },
                eo: function (t) {
                    var e, n = [];
                    for (e in t) t.hasOwnProperty(e) && n.push(e + "=" + encodeURIComponent(t[e]));
                    return n.join("&")
                },
                make: function (t, e) {
                    return ~t.indexOf("?") || (t += "?"), /\?$/.test(t) || (t += "&"), t += "string" == typeof e ? e : v.eo(e)
                }
            },
            util: {
                tof: function (t, e) {
                    return t.length <= e ? t : t.substring(0, e)
                },
                attr: function (t, e) {
                    var n;
                    try {
                        t.getAttribute && (n = t.getAttribute(e))
                    } catch (r) {
                        t.attributes && (n = t.attributes[e])
                    }
                    return n
                }
            },
            msg: {
                s: function (t, e, n) {
                    var r = {
                        height: c.scrollHeight,
                        width: c.scrollWidth
                    };
                    "bhel" === t.type && (r.bhel = this.bhel()), e.postMessage(r, n)
                },
                mo: function (t, e, r) {
                    var i = n.MutationObserver || n.WebKitMutationObserver || n.MozMutationObserver;
                    i && !this.initedMo && (this.initedMo = u, "object" != typeof t && (t = {}), new i(function (n) {
                        this.s({
                            type: t.type
                        }, e, r)
                    }).observe(c, {
                        childList: u,
                        subtree: u
                    }))
                },
                bhel: function () {
                    var t = [],
                        e = h.util.attr;
                    return r.querySelectorAll("[data-bhclick],[data-bh]").forEach(function (n) {
                        var r, i = {},
                            o = n.getBoundingClientRect();
                        for (r in o) i[r] = o[r];
                        for (r in n) /string|number/.test(typeof n[r]) && n[r] && (i[r] = n[r]);
                        i.bh = e(n, "data-bh") || e(n, "data-bhclick"), t.push(i)
                    }), t
                }
            }
        },
        v = h.url,
        m = h.msg,
        p = h.util;
    g.prototype = {
        getType: function (t) {
            var e = "https://tongji.meizu.com/flow/",
                n = [{
                    type: 1,
                    fn: "getTongjiMC",
                    url: e + "mc?"
                }, {
                    type: 2,
                    fn: "getTongjiJE",
                    url: e + "je?"
                }, {
                    type: 3,
                    fn: "getTongjiST",
                    url: e + "st?"
                }];
            return t ? n[t - 1] : n
        },
        imgOnload: function (t, e, n) {
            var r = new Image;
            return r.onload = n || function (t) {}, r.src = this.makeUrl(t, e), r
        },
        request: function (t, e) {
            var n = this.getType(e),
                r = n.url,
                i = n.fn,
                o = this.getQueryJson(t, e);
            !l.isMzBrowser && f[i] ? f[i](JSON.stringify({
                data: o
            })) : this.imgOnload(r, o)
        },
        makeUrl: v.make,
        jsError: function () {
            var t = this;
            n.onerror = function (e, n, r) {
                if ("string" == typeof e) {
                    for (var i, o, a = [], c = arguments.callee.caller, s = /function (\w*\([^(]*\))/; c;) o = (i = c.toString()).match(s), a.push(o && o[1] || i), c = c.caller;
                    var u = {
                        mg: e,
                        fi: n || "",
                        li: r,
                        stk: h.util.tof(a.join(""), 50)
                    };
                    t.request(u, 2)
                }
            }
        },
        extendData: function (t) {
            l.getUMID && (t.umid = l.getUMID()), l.getDeviceModel && (t.mdevice = l.getDeviceModel()), l.getUMID && (t.flymeid = l.getFlymeUid());
            var e = n.performance && n.performance.timing;
            return e && (t.dnst = e.domainLookupEnd - e.domainLookupStart, t.tcpt = e.connectEnd - e.connectStart, t.rest = e.responseEnd - e.responseStart, t.wst = e.responseStart - e.navigationStart, t.domt = e.domComplete - e.domInteractive, t.domrt = e.domContentLoadedEventEnd - e.navigationStart, t.plt = e.loadEventStart - e.navigationStart, t.ldt = (e.loadEventEnd || +new Date) - e.navigationStart), t
        },
        topGlobalClick: function () {
            var t = this;
            c.onclick = function (e) {
                for (var n, r = (e = e || window.event || {}).target || e.srcElement; r && !(n = p.attr(r, "data-bh"));) r = r.parentNode;
                n && t.request(n, 1), d.offReportClickPos || t.clkEvHandler(e)
            }
        },
        clkEvHandler: function (t) {
            var e, i, a = h.i,
                s = r.documentElement;
            if (!(o.abs(n.screen.width - n.innerWidth) > 300 && n.innerWidth < 768) && (a.ie ? (e = t.clientX + o.max(s.scrollLeft, c.scrollLeft), i = t.clientY + o.max(s.scrollTop, c.scrollTop)) : (e = t.pageX, i = t.pageY), e || i)) {
                var u = o.max(c.offsetWidth, s.clientWidth || r.innerWidth);
                switch (a.align) {
                    case 1:
                        e -= o.ceil(u / 2);
                        break;
                    case 2:
                        e -= u
                }
                var l = this.clkData || [];
                l.push([e, i]), l.length > 9 && (this.sendClkData(l), l = []), this.clkData = l
            }
        },
        sendClkData: function (t) {
            (t = t || this.clkData) && t.length && n.JSON && this.request({
                action: "__page_pos_click__",
                data: JSON.stringify(t)
            }, 1)
        },
        getQueryJson: function (t, e) {
            var c = {};
            t && (t.constructor === String ? ~t.indexOf("=") ? c = v.qo(t) : c.action = t : t.constructor === Object && (c = t));
            var s, u = a.connection || a.mozConnection || a.webkitConnection || {},
                f = n.screen.width + "x" + n.screen.height,
                g = {
                    ver: "1.0.10",
                    re: r.referrer || "",
                    rnd: parseInt(1e7 * o.random()),
                    rc: v.qs("refcode"),
                    ru: i.href,
                    dp: f,
                    nt: l.getNetworkType ? l.getNetworkType() : u.type || "unknown"
                };
            for (s in c) g[s] || (g[s] = c[s]);
            2 === e && (t.ru = g.ru, g = t);
            var h = +d.maxUrlLen;
            if (h > 9) {
                var m = function (t, e) {
                    t[e] && t[e].substr && (t[e] = t[e].substr(0, h))
                };
                m(g, "ru"), m(g, "re")
            }
            return g = this.extendData(g)
        },
        getStayTime: function () {
            function t() {
                o = u;
                var t = +new Date - i;
                r.request({
                    st: t / 1e3
                }, 3), r.sendClkData(), n.onbeforeunload = null
            }

            function e() {
                o || t()
            }
            var r = this,
                i = +new Date,
                o = s;
            ! function () {
                o = s, n.onbeforeunload = e
            }()
        },
        render: function () {
            this.topGlobalClick(), this.jsError(), this.getStayTime(), d.unload || this.request(null, 1)
        }
    };
    var b = n.meizuLogger = new g;
    n.MeizuBH = function (t) {
        return b.request(t, 1)
    };
    var y, k = function () {
        y = u, b.render()
    };
    setTimeout(function () {
        y || k()
    }, 1e4);
    var w = h.event.c;
    w(n, "load", k), w(n, "message", e)
}();