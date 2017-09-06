__twttrll([2], {
    143: function (t, e, n) {
        var r = n(71);
        t.exports = r.build([n(144)])
    }, 144: function (t, e, n) {
        function r(t) {
            return "large" === t ? "l" : "m"
        }

        function i(t) {
            t.params({
                screenName: {required: !0},
                lang: {required: !0, transform: p.matchLanguage, fallback: "en"},
                size: {fallback: "medium", transform: r},
                showScreenName: {fallback: !0},
                showCount: {fallback: !0},
                partner: {fallback: h(s.val, s, "partner")},
                count: {},
                align: {},
                preview: {}
            }), t.define("getUrlParams", function () {
                return d.compact({
                    id: this.id,
                    lang: this.params.lang,
                    size: this.params.size,
                    screen_name: this.params.screenName,
                    show_count: "none" === this.params.count ? !1 : this.params.showCount,
                    show_screen_name: this.params.showScreenName,
                    preview: this.params.preview,
                    align: this.params.align,
                    partner: this.params.partner,
                    dnt: c.enabled(),
                    _: +new Date
                })
            }), t.around("widgetDataAttributes", function (t) {
                return d.aug({"screen-name": this.params.screenName}, t())
            }), t.override("render", function () {
                var t = l(m, {lang: this.params.lang}), e = f.encode(this.getUrlParams()), n = u.base() + t + "#" + e;
                return o.all([this.sandbox.setTitle(v), this.sandbox.addClass(g), this.sandbox.loadDocument(n)])
            })
        }

        var o = n(2), a = n(71), s = n(16), u = n(34), c = n(46), l = n(145), d = n(14), f = n(29), h = n(20), p = n(83), m = "/widgets/follow_button.450bd5fbaeab74caf9d49a3141d20693.{{lang}}.html", v = "Twitter Follow Button", g = "twitter-follow-button";
        t.exports = a.couple(n(111), i)
    }, 145: function (t, e) {
        function n(t, e) {
            return t.replace(r, function (t, n) {
                return void 0 !== e[n] ? e[n] : t
            })
        }

        var r = /\{\{([\w_]+)\}\}/g;
        t.exports = n
    }, 202: function (t, e, n) {
        var r = n(71);
        t.exports = r.build([n(203)])
    }, 203: function (t, e, n) {
        function r(t) {
            return "large" === t ? "l" : "m"
        }

        function i(t) {
            return g.contains(S, t)
        }

        function o(t) {
            return g.contains(P, t)
        }

        function a(t) {
            return b.hashTag(t, !1)
        }

        function s(t) {
            var e = /\+/.test(t) && !/ /.test(t);
            return e ? t.replace(/\+/g, " ") : t
        }

        function u(t) {
            t.params({
                lang: {required: !0, transform: E.matchLanguage, fallback: "en"},
                size: {fallback: "medium", transform: r},
                type: {fallback: "share", validate: i},
                count: {fallback: "horizontal", validate: o},
                text: {transform: s},
                screenName: {transform: b.screenName},
                buttonHashtag: {transform: a},
                partner: {fallback: x(f.val, f, "partner")},
                via: {},
                related: {},
                hashtags: {},
                url: {},
                countUrl: {},
                align: {},
                searchLink: {}
            }), t.define("getUrlParams", function () {
                var t = this.params.text, e = this.params.url, n = this.params.count, r = this.params.via, i = this.params.related, o = v.getScreenNameFromPage();
                return "share" === this.params.type ? (t = t || l.title, e = e || v.getCanonicalURL() || d.href, r = r || o) : (n = "none", o && (i = i ? o + "," + i : o)), g.compact({
                    id: this.id,
                    lang: this.params.lang,
                    size: this.params.size,
                    type: this.params.type,
                    text: t,
                    url: e,
                    via: r,
                    related: i,
                    button_hashtag: this.params.buttonHashtag,
                    count: n,
                    counturl: this.params.countUrl,
                    searchlink: this.params.searchLink,
                    screen_name: this.params.screenName,
                    hashtags: this.params.hashtags,
                    align: this.params.align,
                    partner: this.params.partner,
                    original_referer: d.href,
                    dnt: p.enabled(),
                    _: +new Date
                })
            }), t.around("widgetDataAttributes", function (t) {
                return "mention" == this.params.type ? g.aug({"screen-name": this.params.screenName}, t()) : "hashtag" == this.params.type ? g.aug({hashtag: this.params.buttonHashtag}, t()) : g.aug({url: this.params.url}, t())
            }), t.override("render", function () {
                var t, e = m(_, {lang: this.params.lang}), n = w.encode(this.getUrlParams()), r = h.base() + e + "#" + n;
                switch (this.params.type) {
                    case"hashtag":
                        t = C;
                        break;
                    case"mention":
                        t = N;
                        break;
                    default:
                        t = I
                }
                return c.all([this.sandbox.setTitle(A), this.sandbox.addClass(T), this.sandbox.addClass(t), this.sandbox.loadDocument(r)])
            })
        }

        var c = n(2), l = n(9), d = n(13), f = n(16), h = n(34), p = n(46), m = n(145), v = n(48), g = n(14), w = n(29), b = n(28), y = n(71), x = n(20), E = n(83), _ = "/widgets/tweet_button.a428ab2e859e8008e0df5404770eb017.{{lang}}.html", A = "Twitter Tweet Button", T = "twitter-tweet-button", I = "twitter-share-button", C = "twitter-hashtag-button", N = "twitter-mention-button", S = ["share", "hashtag", "mention"], P = ["vertical", "horizontal", "none"];
        t.exports = y.couple(n(111), u)
    }
});