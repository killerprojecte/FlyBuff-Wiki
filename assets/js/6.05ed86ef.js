(window.webpackJsonp = window.webpackJsonp || []).push([
    [6], {
        402: function(t, e, s) {
            "use strict";
            s.r(e);
            var n = ["这里什么都没有?!", "我们该去哪啊!!", "你来错地方了哦", "看起来这条路不同呢?"],
                o = { methods: { getMsg: function() { return n[Math.floor(Math.random() * n.length)] } } },
                i = s(56),
                h = Object(i.a)(o, (function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", { staticClass: "theme-container" }, [e("div", { staticClass: "theme-default-content" }, [e("h1", [this._v("404")]), this._v(" "), e("blockquote", [this._v(this._s(this.getMsg()))]), this._v(" "), e("RouterLink", { attrs: { to: "/" } }, [this._v("\n      回家.\n    ")])], 1)])
                }), [], !1, null, null, null);
            e.default = h.exports
        }
    }
]);