// build time >> Thu Jul 20 2017 10:53:18 GMT+0800 (CST)
! function () {
    "use strict";
    var t = location.protocol + "//clickhz.meizu.com/m/v2",
        e = {
            urls: {
                i: t + "/in",
                n: t + "/mc",
                s: t + "/st",
                e: t + "/je"
            },
            version: "v1.0.1",
            request: function (t, n) {
                var r = new Image,
                    i = Math.random();
                0 !== __mzt.length && (t.__mzt = JSON.stringify(__mzt)), t = e.assign(t, e.getPageInfo()), t.rc = e.getParam("rc") || e.getParam("refcode"), n = n || "n", t.nt = this.getConnType().type, t.did = this.getUUID(), t.vr = this.version, t.v = i, t.aid = t.app || 1, t.sr = t.service || 1, t = this.serializer(t), r.src = this.urls[n] + "?" + t, r.onload = function () {}
            },
            getUUID: function () {
                return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (t) {
                    var e = 16 * Math.random() | 0,
                        n = "x" == t ? e : 3 & e | 8;
                    return n.toString(16)
                })
            },
            getScreenProps: function () {
                return {
                    srw: screen.width,
                    srh: screen.height,
                    dpr: window.devicePixelRatio,
                    cd: screen.colorDepth
                }
            },
            getPageInfo: function () {
                var t = {};
                t = {
                    title: document.title,
                    lang: navigator.language,
                    re: document.referrer
                };
                for (var e, n = __mzt.length, r = 0; n > r; r++) e = __mzt[r], t[e[0]] = e[1];
                return t
            },
            serializer: function (t) {
                var e = [];
                for (var n in t) {
                    var r = [n, "=", encodeURIComponent(t[n])].join("");
                    e.push(r)
                }
                return e.join("&")
            },
            assign: function (t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                return t
            },
            initParam: function () {
                var t, e = location.search.slice(1),
                    n = [],
                    r = -1,
                    i = 0;
                if (this.param = {}, e) {
                    for (n = e.split("&"), i = n.length; ++r < i;) t = n[r].split("="), this.param[t[0]] = t[1];
                    return this.param
                }
            },
            getParam: function (t) {
                return this.param[t] || ""
            },
            getConnType: function () {
                var t = navigator.connection || navigator.mozConnection || navigator.webkitConnection || {
                    type: "unknown"
                };
                return t
            },
            getStayTime: function () {
                function t() {
                    a = !1, r.on(window, "beforeunload", n)
                }

                function e() {
                    a = !0;
                    var t = +new Date,
                        e = t - i;
                    o.st = e, r.request(o, "s"), window.onbeforeunload = null
                }

                function n(t) {
                    a || e()
                }
                var r = this,
                    i = +new Date,
                    o = {},
                    a = !1;
                t()
            },
            on: function (t, e, n) {
                t.addEventListener ? t.addEventListener(e, n, !1) : t.attachEvent("on" + e, n)
            },
            topGlobalClick: function () {
                var t = this;
                t.on(document.body, "click", function (e) {
                    var n, r, i;
                    e = e ? e : window.event;
                    for (var o = e.target || e.srcElement; o;) {
                        try {
                            o.getAttribute && (n = o.getAttribute("data-mtype"), r = o.getAttribute("data-mdesc"), i = o.getAttribute("id"))
                        } catch (a) {
                            o.attributes && (n = o.getAttribute("data-mtype"), r = o.getAttribute("data-mdesc"), i = o.getAttribute("id"))
                        }
                        if (n) break;
                        o = o.parentNode
                    }
                    n && t.request({
                        ty: n || 0,
                        dc: r || "",
                        elid: i || ""
                    })
                })
            },
            getJsError: function () {
                var t = this;
                this.on(window, "error", function (e) {
                    e = e ? e : window.event;
                    ({
                        mg: e.message || "not get",
                        fi: e.filename || "not get",
                        li: e.lineno || "not get",
                        col: e.colno || "not get",
                        err: e.error || "not get",
                        all: JSON.stringify(e)
                    });
                    e.message.toLowerCase().indexOf("script error") > -1 || t.request({
                        mg: e.message || "not get",
                        fi: e.filename || "not get",
                        li: e.lineno || "not get",
                        col: e.colno || "not get",
                        err: e.error || "not get",
                        all: JSON.stringify(e)
                    }, "e")
                })
            }
        };
    e.on(window, "load", function () {
        e.initParam(), e.getStayTime(), e.topGlobalClick(), e.getJsError();
        var t = e.getScreenProps(),
            n = (new Date).getTime(),
            r = r || n;
        t.tr = r, t.tl = n, e.request(t, "i")
    })
}();