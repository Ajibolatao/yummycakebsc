(function(e) {
    function t(t) {
        for (var a, r, u = t[0], o = t[1], c = t[2], p = 0, l = []; p < u.length; p++) r = u[p], Object.prototype.hasOwnProperty.call(s, r) && s[r] && l.push(s[r][0]), s[r] = 0;
        for (a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
        d && d(t);
        while (l.length) l.shift()();
        return i.push.apply(i, c || []), n()
    }
    function n() {
        for (var e, t = 0; t < i.length; t++) {
            for (var n = i[t], a = !0, u = 1; u < n.length; u++) {
                var o = n[u];
                0 !== s[o] && (a = !1)
            }
            a && (i.splice(t--, 1), e = r(r.s = n[0]))
        }
        return e
    }
    var a = {},
        s = {
            app: 0
        },
        i = [];

    function r(t) {
        if (a[t]) return a[t].exports;
        var n = a[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, r), n.l = !0, n.exports
    }
    r.m = e, r.c = a, r.d = function(e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, r.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, r.t = function(e, t) {
        if (1 & t && (e = r(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var a in e) r.d(n, a, function(t) {
                return e[t]
            }.bind(null, a));
        return n
    }, r.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"]
        } : function() {
            return e
        };
        return r.d(t, "a", t), t
    }, r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "/";
    var u = window["webpackJsonp"] = window["webpackJsonp"] || [],
        o = u.push.bind(u);
    u.push = t, u = u.slice();
    for (var c = 0; c < u.length; c++) t(u[c]);
    var d = o;
    i.push([0, "chunk-vendors"]), n()
})({
    0: function(e, t, n) {
        e.exports = n("56d7")
    },
    "034f": function(e, t, n) {
        "use strict";
        n("9085")
    },
    "0352": function(e, t, n) {
        e.exports = n.p + "img/claim.png"
    },
    "05f0a": function(e, t, n) {
        "use strict";
        n("ae4f")
    },
    "0a08": function(e, t, n) {
        e.exports = n.p + "img/major.53427287.png"
    },
    "0d11": function(e, t, n) {
        e.exports = n.p + "img/yummycake.png"
    },
    1: function(e, t) {},
    10: function(e, t) {},
    11: function(e, t) {},
    12: function(e, t) {},
    13: function(e, t) {},
    14: function(e, t) {},
    15: function(e, t) {},
    16: function(e, t) {},
    17: function(e, t) {},
    18: function(e, t) {},
    19: function(e, t) {},
    2: function(e, t) {},
    20: function(e, t) {},
    21: function(e, t) {},
    2413: function(e, t, n) {},
    3: function(e, t) {},
    "32cb": function(e, t, n) {
        e.exports = n.p + "img/boom.48180696.png"
    },
    "33d7": function(e, t, n) {
        "use strict";
        n("447e")
    },
    "37c1": function(e, t, n) {
        e.exports = n.p + "img/payout.dcfeec2d.png"
    },
    "3d70": function(e, t, n) {
        "use strict";
        n("7dc2")
    },
    4: function(e, t) {},
    4126: function(e, t, n) {
        e.exports = n.p + "img/metamask.png"
    },
    "447e": function(e, t, n) {},
    4678: function(e, t, n) {
        var a = {
            "./af": "2bfb",
            "./af.js": "2bfb",
            "./ar": "8e73",
            "./ar-dz": "a356",
            "./ar-dz.js": "a356",
            "./ar-kw": "423e",
            "./ar-kw.js": "423e",
            "./ar-ly": "1cfd",
            "./ar-ly.js": "1cfd",
            "./ar-ma": "0a84",
            "./ar-ma.js": "0a84",
            "./ar-sa": "8230",
            "./ar-sa.js": "8230",
            "./ar-tn": "6d83",
            "./ar-tn.js": "6d83",
            "./ar.js": "8e73",
            "./az": "485c",
            "./az.js": "485c",
            "./be": "1fc1",
            "./be.js": "1fc1",
            "./bg": "84aa",
            "./bg.js": "84aa",
            "./bm": "a7fa",
            "./bm.js": "a7fa",
            "./bn": "9043",
            "./bn-bd": "9686",
            "./bn-bd.js": "9686",
            "./bn.js": "9043",
            "./bo": "d26a",
            "./bo.js": "d26a",
            "./br": "6887",
            "./br.js": "6887",
            "./bs": "2554",
            "./bs.js": "2554",
            "./ca": "d716",
            "./ca.js": "d716",
            "./cs": "3c0d",
            "./cs.js": "3c0d",
            "./cv": "03ec",
            "./cv.js": "03ec",
            "./cy": "9797",
            "./cy.js": "9797",
            "./da": "0f14",
            "./da.js": "0f14",
            "./de": "b469",
            "./de-at": "b3eb",
            "./de-at.js": "b3eb",
            "./de-ch": "bb71",
            "./de-ch.js": "bb71",
            "./de.js": "b469",
            "./dv": "598a",
            "./dv.js": "598a",
            "./el": "8d47",
            "./el.js": "8d47",
            "./en-au": "0e6b",
            "./en-au.js": "0e6b",
            "./en-ca": "3886",
            "./en-ca.js": "3886",
            "./en-gb": "39a6",
            "./en-gb.js": "39a6",
            "./en-ie": "e1d3",
            "./en-ie.js": "e1d3",
            "./en-il": "7333",
            "./en-il.js": "7333",
            "./en-in": "ec2e",
            "./en-in.js": "ec2e",
            "./en-nz": "6f50",
            "./en-nz.js": "6f50",
            "./en-sg": "b7e9",
            "./en-sg.js": "b7e9",
            "./eo": "65db",
            "./eo.js": "65db",
            "./es": "898b",
            "./es-do": "0a3c",
            "./es-do.js": "0a3c",
            "./es-mx": "b5b7",
            "./es-mx.js": "b5b7",
            "./es-us": "55c9",
            "./es-us.js": "55c9",
            "./es.js": "898b",
            "./et": "ec18",
            "./et.js": "ec18",
            "./eu": "0ff2",
            "./eu.js": "0ff2",
            "./fa": "8df4",
            "./fa.js": "8df4",
            "./fi": "81e9",
            "./fi.js": "81e9",
            "./fil": "d69a",
            "./fil.js": "d69a",
            "./fo": "0721",
            "./fo.js": "0721",
            "./fr": "9f26",
            "./fr-ca": "d9f8",
            "./fr-ca.js": "d9f8",
            "./fr-ch": "0e49",
            "./fr-ch.js": "0e49",
            "./fr.js": "9f26",
            "./fy": "7118",
            "./fy.js": "7118",
            "./ga": "5120",
            "./ga.js": "5120",
            "./gd": "f6b4",
            "./gd.js": "f6b4",
            "./gl": "8840",
            "./gl.js": "8840",
            "./gom-deva": "aaf2",
            "./gom-deva.js": "aaf2",
            "./gom-latn": "0caa",
            "./gom-latn.js": "0caa",
            "./gu": "e0c5",
            "./gu.js": "e0c5",
            "./he": "c7aa",
            "./he.js": "c7aa",
            "./hi": "dc4d",
            "./hi.js": "dc4d",
            "./hr": "4ba9",
            "./hr.js": "4ba9",
            "./hu": "5b14",
            "./hu.js": "5b14",
            "./hy-am": "d6b6",
            "./hy-am.js": "d6b6",
            "./id": "5038",
            "./id.js": "5038",
            "./is": "0558",
            "./is.js": "0558",
            "./it": "6e98",
            "./it-ch": "6f12",
            "./it-ch.js": "6f12",
            "./it.js": "6e98",
            "./ja": "079e",
            "./ja.js": "079e",
            "./jv": "b540",
            "./jv.js": "b540",
            "./ka": "201b",
            "./ka.js": "201b",
            "./kk": "6d79",
            "./kk.js": "6d79",
            "./km": "e81d",
            "./km.js": "e81d",
            "./kn": "3e92",
            "./kn.js": "3e92",
            "./ko": "22f8",
            "./ko.js": "22f8",
            "./ku": "2421",
            "./ku.js": "2421",
            "./ky": "9609",
            "./ky.js": "9609",
            "./lb": "440c",
            "./lb.js": "440c",
            "./lo": "b29d",
            "./lo.js": "b29d",
            "./lt": "26f9",
            "./lt.js": "26f9",
            "./lv": "b97c",
            "./lv.js": "b97c",
            "./me": "293c",
            "./me.js": "293c",
            "./mi": "688b",
            "./mi.js": "688b",
            "./mk": "6909",
            "./mk.js": "6909",
            "./ml": "02fb",
            "./ml.js": "02fb",
            "./mn": "958b",
            "./mn.js": "958b",
            "./mr": "39bd",
            "./mr.js": "39bd",
            "./ms": "ebe4",
            "./ms-my": "6403",
            "./ms-my.js": "6403",
            "./ms.js": "ebe4",
            "./mt": "1b45",
            "./mt.js": "1b45",
            "./my": "8689",
            "./my.js": "8689",
            "./nb": "6ce3",
            "./nb.js": "6ce3",
            "./ne": "3a39",
            "./ne.js": "3a39",
            "./nl": "facd",
            "./nl-be": "db29",
            "./nl-be.js": "db29",
            "./nl.js": "facd",
            "./nn": "b84c",
            "./nn.js": "b84c",
            "./oc-lnc": "167b",
            "./oc-lnc.js": "167b",
            "./pa-in": "f3ff",
            "./pa-in.js": "f3ff",
            "./pl": "8d57",
            "./pl.js": "8d57",
            "./pt": "f260",
            "./pt-br": "d2d4",
            "./pt-br.js": "d2d4",
            "./pt.js": "f260",
            "./ro": "972c",
            "./ro.js": "972c",
            "./ru": "957c",
            "./ru.js": "957c",
            "./sd": "6784",
            "./sd.js": "6784",
            "./se": "ffff",
            "./se.js": "ffff",
            "./si": "eda5",
            "./si.js": "eda5",
            "./sk": "7be6",
            "./sk.js": "7be6",
            "./sl": "8155",
            "./sl.js": "8155",
            "./sq": "c8f3",
            "./sq.js": "c8f3",
            "./sr": "cf1e",
            "./sr-cyrl": "13e9",
            "./sr-cyrl.js": "13e9",
            "./sr.js": "cf1e",
            "./ss": "52bd",
            "./ss.js": "52bd",
            "./sv": "5fbd",
            "./sv.js": "5fbd",
            "./sw": "74dc",
            "./sw.js": "74dc",
            "./ta": "3de5",
            "./ta.js": "3de5",
            "./te": "5cbb",
            "./te.js": "5cbb",
            "./tet": "576c",
            "./tet.js": "576c",
            "./tg": "3b1b",
            "./tg.js": "3b1b",
            "./th": "10e8",
            "./th.js": "10e8",
            "./tk": "5aff",
            "./tk.js": "5aff",
            "./tl-ph": "0f38",
            "./tl-ph.js": "0f38",
            "./tlh": "cf755",
            "./tlh.js": "cf755",
            "./tr": "0e81",
            "./tr.js": "0e81",
            "./tzl": "cf51",
            "./tzl.js": "cf51",
            "./tzm": "c109",
            "./tzm-latn": "b53d",
            "./tzm-latn.js": "b53d",
            "./tzm.js": "c109",
            "./ug-cn": "6117",
            "./ug-cn.js": "6117",
            "./uk": "ada2",
            "./uk.js": "ada2",
            "./ur": "5294",
            "./ur.js": "5294",
            "./uz": "2e8c",
            "./uz-latn": "010e",
            "./uz-latn.js": "010e",
            "./uz.js": "2e8c",
            "./vi": "2921",
            "./vi.js": "2921",
            "./x-pseudo": "fd7e",
            "./x-pseudo.js": "fd7e",
            "./yo": "7f33",
            "./yo.js": "7f33",
            "./zh-cn": "5c3a",
            "./zh-cn.js": "5c3a",
            "./zh-hk": "49ab",
            "./zh-hk.js": "49ab",
            "./zh-mo": "3a6c",
            "./zh-mo.js": "3a6c",
            "./zh-tw": "90ea",
            "./zh-tw.js": "90ea"
        };

        function s(e) {
            var t = i(e);
            return n(t)
        }

        function i(e) {
            if (!n.o(a, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            return a[e]
        }
        s.keys = function() {
            return Object.keys(a)
        }, s.resolve = i, e.exports = s, s.id = "4678"
    },
    5: function(e, t) {},
    "56d7": function(e, t, n) {
        "use strict";
        n.r(t);
        n("e260"), n("e6cf"), n("cca6"), n("a79d");
        var a = n("2b0e"),
            s = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("b-container", {
                    attrs: {
                        fluid: ""
                    }
                }, [e.maintenance ? e._e() : n("div", [n("Navbar"), n("div", {
                    staticClass: "container mt-2"
                }, [n("Stats")], 1)], 1), e.maintenance ? n("Maintenance") : e._e()], 1)
            },
            i = [],
            r = function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("div", {
                    staticClass: "container"
                }, [e._m(0), e._m(1), a("div", {
                    staticClass: "row mt-4"
                }, [a("div", {
                    staticClass: "col-md-3 col-sm-1"
                }), a("div", {
                    staticClass: "col-md-6 col-sm-10"
                }, [a("b-form", {
                    on: {
                        submit: e.changeAddress
                    }
                }, [a("b-input-group", {
                    staticClass: "address-input border border-white rounded-pill"
                }, [a("b-form-input", {
                    staticClass: "mb-2 mb-sm-0 ",
                    attrs: {
                        id: "address-input",
                        placeholder: "Address"
                    },
                    on: {
                        focus: e.enableManualSearch
                    },
                    model: {
                        value: e.address,
                        callback: function(t) {
                            e.address = t
                        },
                        expression: "address"
                    }
                }), a("button", {
                    staticClass: "input-group-text",
                    attrs: {
                        type: "submit"
                    }
                }, [e.metamaskFound ? a("img", {
                    staticClass: "metamask-icon",
                    class: {
                        "not-active": e.manualSelection
                    },
                    attrs: {
                        src: n("4126")
                    },
                    on: {
                        click: e.connectToMetamask
                    }
                }) : e._e(), a("b-icon-search", {
                    attrs: {
                        variant: "danger"
                    }
                })], 1)], 1)], 1)], 1), a("div", {
                    staticClass: "col-md-3 col-sm-1"
                })])])
            },
            u = [function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("div", {
                    staticClass: "row mt-4"
                }, [a("div", {
                    staticClass: "col-md-5"
                }), a("div", {
                    staticClass: "col-md-2 text-center"
                }, [a("a", {
                                        attrs: {
                                            href: "https://www.yummycakebsc.net/"
                                        }
                                    }, [a("img", {
                                        staticClass: "logo",
                                        attrs: {
                                            src: n("9d64"),
                                            alt: "BNB logo"
                                        }
                                    })])]), a("div", {
                    staticClass: "col-md-5"
                })])
            }, function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("div", {
                    staticClass: "row mt-4"
                }, [a("div", {
                    staticClass: "col-md-2"
                }), a("div", {
                    staticClass: "col-md-2"
                })])
            }],
            o = n("1da1"),
            c = n("5530"),
            d = (n("96cf"), n("2f62")),
            p = {
                name: "Navbar",
                data: function() {
                    return {
                        address: null,
                        metamaskFound: "undefined" !== typeof window.ethereum,
                        web3: null,
                        web3Account: null,
                        manualSelection: !0,
                        metmaskInterval: null
                    }
                },
                computed: Object(c["a"])({}, Object(d["c"])(["getWeb3"])),
                methods: Object(c["a"])(Object(c["a"])({}, Object(d["b"])(["setAddress", "connectWeb3"])), {}, {
                    connectToMetamask: function() {
                        var e = this;
                        return Object(o["a"])(regeneratorRuntime.mark((function t() {
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        e.manualSelection = !1, e.connectWeb3(), e.detectAccounts(e.web3);
                                    case 3:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    changeAddress: function(e) {
                        e.preventDefault(), this.setAddress(this.address)
                    },
                    enableManualSearch: function(e) {
                        e.target.select(), this.manualSelection = !0, clearInterval(this.metmaskInterval)
                    },
                    detectAccounts: function() {
                        var e = this;
                        this.metmaskInterval = setInterval(Object(o["a"])(regeneratorRuntime.mark((function t() {
                            var n, s;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, e.getWeb3.eth.requestAccounts();
                                    case 2:
                                        n = t.sent, a["default"].$log.debug("Accounts", n), s = n[0], e.web3Account = s, console.log(e.manualSelection), e.manualSelection || (e.address = s, e.setAddress(s));
                                    case 8:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        }))), 1e3)
                    }
                })
            },
            l = p,
            y = (n("05f0a"), n("2877")),
            m = Object(y["a"])(l, r, u, !1, null, "d74f7d92", null),
            f = m.exports,
            b = function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("div", [a("div", {
                    staticClass: "row cards"
                }, [a("div", {
                    staticClass: "col"
                }, [a("BalanceCard", {
                    staticClass: "inu-card "
                })], 1), a("div", {
                    staticClass: "col"
                }, [a("RewardCard", {
                    staticClass: "inu-card "
                })], 1), a("div", {
                    staticClass: "col"
                }, [a("NextIncomingCard", {
                    staticClass: "inu-card "
                })], 1)]), a("div", {
                    staticClass: "text-center total-reward"
                }, [a("p", {
                    staticClass: "title"
                }, [e._v("Total Cake Paid To Yummycake Holders")]), a("img", {
                    attrs: {
                        src: n("713c"),
                        alt: "Cake Logo"
                    }
                }), a("p", [e._v(" " + e._s(e.totalReward) + " Cake ")])]), e._m(0)])
            },
            w = [function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("", {
                }, [ {
                    staticClass: "border-white border-top"
                }, a("a")])
            }],
            h = (n("b680"), n("52b3")),
            v = n.n(h),
            g = function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("div", {
                    staticClass: "border border-white rounded-3"
                }, [0 === e.totalYummy ? a("img", {
                    attrs: {
                        src: n("0d11")
                    }
                }) : e._e(), e.totalYummy >= 1 && e.totalYummy < 1e6 ? a("img", {
                    attrs: {
                        src: n("d538")
                    }
                }) : e._e(), e.totalYummy >= 1e6 && e.totalYummy < 5e7 ? a("img", {
                    attrs: {
                        src: n("8be7")
                    }
                }) : e._e(), e.totalYummy >= 5e7 && e.totalYummy < 5e8 ? a("img", {
                    attrs: {
                        src: n("8c6d")
                    }
                }) : e._e(), e.totalYummy >= 5e8 && e.totalYummy < 1e9 ? a("img", {
                    attrs: {
                        src: n("c661")
                    }
                }) : e._e(), e.totalYummy >= 1e9 && e.totalYummy < 15e8 ? a("img", {
                    attrs: {
                        src: n("0a08")
                    }
                }) : e._e(), e.totalYummy >= 15e8 ? a("img", {
                    attrs: {
                        src: n("8fd9")
                    }
                }) : e._e(), a("p", {
                    staticClass: "title"
                }, [e._v("YUMMYCAKE balance")]), a("p", {
                    staticClass: "text"
                }, [e._v(e._s(e.formatBalance) + " YCAKE")])])
            },
            j = [],
            T = (n("ac1f"), n("5319"), n("d3b7"), n("25f0"), n("159b"), n("99af"), n("99e5")),
            x = n.n(T);
        a["default"].use(d["a"]);
        var M = new d["a"].Store({
                state: {
                    address: "",
                    rewards: [],
                    api_error: null,
                    web3: null
                },
                getters: {
                    getAddress: function(e) {
                        return e.address
                    },
                    getRewards: function(e) {
                        return e.rewards
                    },
                    getApiError: function(e) {
                        return e.api_error
                    },
                    getWeb3: function(e) {
                        return e.web3
                    }
                },
                mutations: {
                    setAddress: function(e, t) {
                        e.address = t
                    },
                    addReward: function(e, t) {
                        e.rewards = t
                    },
                    setApiError: function(e, t) {
                        e.api_error = t
                    },
                    setWeb3: function(e, t) {
                        e.web3 = t
                    }
                },
                actions: {
                    setAddress: function(e, t) {
                        var n = e.commit,
                            s = e.state;
                        !s.web3 || s.web3.utils.isAddress(t) ? t ? n("setAddress", t) : a["default"].$log.warn("Empty address") : a["default"].$log.warn(t + " is not a valid address")
                    },
                    addReward: function(e, t) {
                        var n = e.commit;
                        n("addReward", t)
                    },
                    apiError: function(e, t) {
                        var n = e.commit;
                        n("setApiError", t)
                    },
                    connectWeb3: function(e) {
                        var t = e.commit,
                            n = e.state;
                        null === n.web3 && t("setWeb3", new x.a(window.ethereum))
                    }
                }
            }),
            k = "0x52A5AB58d3195Fb6d4Ce845AF4f0833D812eeDFA",
            MN = "0xa62cdd8e357Bb4407671f329dd3Dab975120c7F3",
            A = [{"inputs":[{"internalType":"address","name":"_router","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"claimDividend","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"deposit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"dividendsPerShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"dividendsPerShareAccuracyFactor","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"shareholder","type":"address"}],"name":"getUnpaidEarnings","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minDistribution","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minPeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"gas","type":"uint256"}],"name":"process","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_minPeriod","type":"uint256"},{"internalType":"uint256","name":"_minDistribution","type":"uint256"}],"name":"setDistributionCriteria","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"shareholder","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"setShare","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"shares","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"totalExcluded","type":"uint256"},{"internalType":"uint256","name":"totalRealised","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalDistributed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalDividends","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalShares","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}],
            MA = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amountBNB","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amountBOG","type":"uint256"}],"name":"AutoLiquify","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"owner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"Owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SelltotalFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_maxTxAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_maxWalletToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address[]","name":"addresses","type":"address[]"},{"internalType":"uint256[]","name":"tokens","type":"uint256[]"}],"name":"airdrop","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"holder","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"}],"name":"approveMax","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"authorize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"autoLiquidityReceiver","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"buyCooldownEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountPercentage","type":"uint256"}],"name":"clearStuckBalance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_status","type":"bool"},{"internalType":"uint8","name":"_interval","type":"uint8"}],"name":"cooldownEnabled","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"cooldownTimerInterval","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"getCirculatingSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"accuracy","type":"uint256"}],"name":"getLiquidityBacking","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"isAuthorized","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"target","type":"uint256"},{"internalType":"uint256","name":"accuracy","type":"uint256"}],"name":"isOverLiquified","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"launchedAt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"marketingFeeReceiver","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"pair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"router","outputs":[{"internalType":"contract IDEXRouter","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_liquidityFee","type":"uint256"},{"internalType":"uint256","name":"_reflectionFee","type":"uint256"},{"internalType":"uint256","name":"_marketingFee","type":"uint256"},{"internalType":"uint256","name":"_feeDenominator","type":"uint256"}],"name":"setBuyFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_minPeriod","type":"uint256"},{"internalType":"uint256","name":"_minDistribution","type":"uint256"}],"name":"setDistributionCriteria","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"gas","type":"uint256"}],"name":"setDistributorSettings","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_autoLiquidityReceiver","type":"address"},{"internalType":"address","name":"_marketingFeeReceiver","type":"address"}],"name":"setFeeReceivers","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"holder","type":"address"},{"internalType":"bool","name":"exempt","type":"bool"}],"name":"setIsDividendExempt","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"holder","type":"address"},{"internalType":"bool","name":"exempt","type":"bool"}],"name":"setIsFeeExempt","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"holder","type":"address"},{"internalType":"bool","name":"exempt","type":"bool"}],"name":"setIsTimelockExempt","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"holder","type":"address"},{"internalType":"bool","name":"exempt","type":"bool"}],"name":"setIsTxLimitExempt","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"maxWallPercent","type":"uint256"}],"name":"setMaxWalletPercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_liquidityFee","type":"uint256"},{"internalType":"uint256","name":"_reflectionFee","type":"uint256"},{"internalType":"uint256","name":"_marketingFee","type":"uint256"},{"internalType":"uint256","name":"_feeDenominator","type":"uint256"}],"name":"setSellFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_enabled","type":"bool"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"setSwapBackSettings","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_target","type":"uint256"},{"internalType":"uint256","name":"_denominator","type":"uint256"}],"name":"setTargetLiquidity","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"setTxLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"swapEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"swapThreshold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"totalFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tradingOpen","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_status","type":"bool"}],"name":"tradingStatus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"adr","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"unauthorize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}];
        function C(e) {
            return R.apply(this, arguments)
        }

        function R() {
            return R = Object(o["a"])(regeneratorRuntime.mark((function e(t) {
                var n, a;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, fetch("https://www.yummycakebsc.net/rewards/" + t).catch((function(e) {
                                M.dispatch("apiError", e)
                            }));
                        case 2:
                            return n = e.sent, e.next = 5, n.json();
                        case 5:
                            n = e.sent, console.debug("REWARDS", n), a = [], n.forEach((function(e) {
                                a = a.concat(e.rewards)
                            })), M.dispatch("addReward", a);
                        case 10:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), R.apply(this, arguments)
        }

        function O(e) {
            return E.apply(this, arguments)
        }

        function E() {
            return E = Object(o["a"])(regeneratorRuntime.mark((function e(t) {
                var n, a;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return n = I(), e.next = 3, n.eth.getBlock(t);
                        case 3:
                            return a = e.sent, e.abrupt("return", a.timestamp);
                        case 5:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), E.apply(this, arguments)
        }

        function I() {
            var e = new x.a;
            return e.setProvider(new x.a.providers.HttpProvider("https://bsc-dataseed.binance.org/")), e.eth.net.isListening().then((function() {
                return console.log("is connected")
            })).catch((function(e) {
                return console.log("Wow. Something went wrong: " + e)
            })), e
        }

        function B(e) {
            return F.apply(this, arguments)
        }
                function Bearn(e) {
                    return earn.apply(this, arguments)
                }

        function F() {
            return F = Object(o["a"])(regeneratorRuntime.mark((function e(t) {
                var n, s, i;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return n = I(), a = new n.eth.Contract(MA, MN), e.next = 4, a.methods.balanceOf(t).call();
                        case 4:
                            console.info(e.sent);
                            return s = e.sent, s /= Math.pow(10, 18), console.info(t + " has " + s + " tokens"), e.abrupt("return", s);
                        case 9:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), F.apply(this, arguments)
        }

        function earn() {
            return earn = Object(o["a"])(regeneratorRuntime.mark((function e(t) {
                var n, s, i;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return n = I(), a = new n.eth.Contract(A, k), e.next = 4, a.methods.shares(t).call();
                        case 4:
                            console.info(e.sent);
                            return s = e.sent.totalRealised, console.info(t + " has " + s + " earned"), e.abrupt("return", s);
                        case 9:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), earn.apply(this, arguments)
        }

        function S(e) {
            return N.apply(this, arguments)
        }

        function N() {
            return N = Object(o["a"])(regeneratorRuntime.mark((function e(t) {
                var n, a, s;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return n = I(), a = new n.eth.Contract(A, k), e.next = 4, a.methods.getUnpaidEarnings(t).call();
                        case 4:
                            return s = e.sent, s /= Math.pow(10, 18), console.info(t + " can withdraw " + s + " Cake"), e.abrupt("return", s);
                        case 8:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), N.apply(this, arguments)
        }

        function K() {
            return P.apply(this, arguments)
        }

        function P() {
            return P = Object(o["a"])(regeneratorRuntime.mark((function e() {
                var t, n, a;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return t = I(), n = new t.eth.Contract(A, k), e.next = 4, n.methods.totalDistributed().call();
                        case 4:
                            return a = e.sent, a /= Math.pow(10, 18), console.info("Total rewards" + a + " Cake"), e.abrupt("return", a);
                        case 8:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), P.apply(this, arguments)
        }
        var J = {
                name: "BalanceCard",
                data: function() {
                    return {
                        totalYummy: 0
                    }
                },
                computed: Object(c["a"])(Object(c["a"])({}, Object(d["c"])(["getAddress", "getRewards"])), {}, {
                    formatBalance: function() {
                        return this.totalYummy.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    }
                }),
                watch: {
                    getAddress: function(e) {
                        var t = this;
                        this.$log.debug("RECEIVED ADDRESS", e), B(e).then((function(e) {
                            t.totalYummy = e
                        }))
                    }
                }
            },
            D = J,
            W = (n("33d7"), Object(y["a"])(D, g, j, !1, null, "3d81ed13", null)),
            U = W.exports,
            Y = function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("div", {
                    staticClass: "border border-white rounded-3"
                }, [a("img", {
                    attrs: {
                        src: n("713c")
                    }
                }), a("p", {
                    staticClass: "title"
                }, [e._v("Total Cake Rewards")]), a("p", {
                    staticClass: "text"
                }, [e._v(" " + e._s(e.earnedCake) + " Cake")])])
            },
            _ = [],
                        q = {
                                            name: "RewardCard",
                                            data: function() {
                                                return {
                                                    earnedCake: 0
                                                }
                                            },
                                            computed: Object(c["a"])(Object(c["a"])({}, Object(d["c"])(["getAddress", "getRewards"])), {}, {
                                                formatBalance: function() {
                                                    return this.earnedCake.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                                                }
                                            }),
                                            watch: {
                                                getAddress: function(e) {
                                                    var t = this;
                                                    this.$log.debug("RECEIVED ADDRESS", e), Bearn(e).then((function(e) {
                                                        t.earnedCake = (e/1000000000000000000).toFixed(4);
                                                    }))
                                                }
                                            }
                                        },
            L = q,
            V = Object(y["a"])(L, Y, _, !1, null, "5911baf4", null),
            z = V.exports,
            G = function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
            },
            Z = [],
            Q = n("c1df"),
            X = n.n(Q),
            H = {
                name: "PayoutTimeCard",
                data: function() {
                    return {
                        lastReceive: "Never"
                    }
                },
                computed: Object(c["a"])({}, Object(d["c"])(["getRewards"])),
                watch: {
                    getRewards: function(e) {
                        var t = this;
                        return Object(o["a"])(regeneratorRuntime.mark((function n() {
                            var a, s;
                            return regeneratorRuntime.wrap((function(n) {
                                while (1) switch (n.prev = n.next) {
                                    case 0:
                                        return a = e[e.length - 1], n.next = 3, O(a.block_number);
                                    case 3:
                                        s = n.sent, console.log(s, X()(1e3 * parseInt(s)), X()(1e3 * parseInt(s)).format()), t.lastReceive = X()(1e3 * parseInt(s)).format("YYYY-MM-DD HH:mm:ss");
                                    case 6:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })))()
                    }
                }
            },
            $ = H,
            ee = Object(y["a"])($, G, Z, !1, null, "d6d4131e", null),
            te = ee.exports,
            ne = function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("div", {
                    staticClass: "border border-white rounded-3"
                }, [a("img", {
                    attrs: {
                        src: n("d8fe")
                    }
                }), a("p", {
                    staticClass: "title"
                }, [e._v("Next incoming reward")]), a("p", {
                    staticClass: "text"
                }, [e._v(e._s(e.nextIncoming) + " Cake")])])
            },
            ae = [],
            se = {
                name: "NextIncomingCard",
                data: function() {
                    return {
                        nextIncoming: 0
                    }
                },
                computed: Object(c["a"])({}, Object(d["c"])(["getAddress"])),
                watch: {
                    getAddress: function(e) {
                        var t = this;
                        this.$log.debug("RECEIVED ADDRESS", e), S(e).then((function(e) {
                            t.nextIncoming = e.toFixed(4)
                        }))
                    }
                }
            },
            ie = se,
            re = Object(y["a"])(ie, ne, ae, !1, null, "2d763ec4", null),
            ue = re.exports,
            oe = {
                name: "Stats",
                components: {
                    NextIncomingCard: ue,
                    PayoutTimeCard: te,
                    RewardCard: z,
                    BalanceCard: U
                },
                data: function() {
                    return {
                        totalReward: 0,
                    }
                },
                mounted: function() {
                    var e = this;
                    K().then(function() {
                        var t = Object(o["a"])(regeneratorRuntime.mark((function t(n) {
                            var a;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        console.log("Base url: http://localhost:8888"), a = {
                                            method: "GET",
                                            uri: "bnbprice",
                                            json: !0
                                        }, v()(a).then((function(t) {
                                        })).catch((function(t) {
                                            e.totalReward = n.toFixed(4), e.usdReward = "", console.log("API call error:", t.message)
                                        }));
                                    case 3:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }())
                },
                watch: {
                    getApiError: function(e) {
                        this.$bvToast.toast("Communication failed: ", {
                            title: "API Error",
                            autoHideDelay: 5e3,
                            variant: "danger",
                            appendToast: !0
                        }), this.$log.error(e)
                    }
                },
                computed: Object(c["a"])({}, Object(d["c"])(["getApiError"]))
            },
            ce = oe,
            de = (n("3d70"), Object(y["a"])(ce, b, w, !1, null, null, null)),
            pe = de.exports;

        function le() {
            return ye.apply(this, arguments)
        }

        function ye() {
            return ye = Object(o["a"])(regeneratorRuntime.mark((function e() {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, fetch("/maintenance.json").catch((function(e) {
                                console.warn(e)
                            }));
                        case 2:
                            return t = e.sent, e.next = 5, t.json();
                        case 5:
                            return t = e.sent, console.debug("MAINTENANCE ACTIVE", t.active), e.abrupt("return", t.active);
                        case 8:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), ye.apply(this, arguments)
        }
        var me = function() {
                var e = this,
                    t = e.$createElement;
                e._self._c;
                return e._m(0)
            },
            fe = [function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("div", {
                    staticClass: "text-center text-white"
                }, )
            }],
            be = {
                name: "Maintenance"
            },
            we = be,
            he = (n("59f1"), Object(y["a"])(we, me, fe, !1, null, "23a69892", null)),
            ve = he.exports,
            ge = {
                name: "App",
                components: {
                    Maintenance: ve,
                    Stats: pe,
                    Navbar: f
                },
                data: function() {
                    return {
                        maintenance: !1
                    }
                },
                mounted: function() {
                    var e = this;
                    le().then((function(t) {
                        e.maintenance = t
                    }))
                }
            },
            je = ge,
            Te = (n("034f"), Object(y["a"])(je, s, i, !1, null, null, null)),
            xe = Te.exports,
            Me = n("5f5b"),
            ke = n("b1e0"),
            Ae = n("51c2"),
            Ce = (n("f9e3"), n("2dd8"), n("9c88"), n("85ff")),
            Re = n.n(Ce),
            Oe = !0,
            Ee = {
                isEnabled: !0,
                logLevel: Oe ? "error" : "debug",
                stringifyArguments: !1,
                showLogLevel: !0,
                showMethodName: !0,
                separator: "|",
                showConsoleColors: !0
            };
        a["default"].use(Re.a, Ee), a["default"].use(Me["a"]), a["default"].use(ke["b"]), a["default"].use(Ae["a"]), a["default"].use(ke["a"]), a["default"].config.productionTip = !1, new a["default"]({
            store: M,
            render: function(e) {
                return e(xe)
            }
        }).$mount("#app")
    },
    "59f1": function(e, t, n) {
        "use strict";
        n("2413")
    },
    6: function(e, t) {},
    7: function(e, t) {},
    "713c": function(e, t) {
        e.exports = "img/pancakeswap-logo.png"
    },
    "7dc2": function(e, t, n) {},
    8: function(e, t) {},
    "8be7": function(e, t, n) {
        e.exports = n.p + "img/yummycake.png"
    },
    "8c6d": function(e, t, n) {
        e.exports = n.p + "img/yummycake.png"
    },
    "8fd9": function(e, t, n) {
        e.exports = n.p + "img/yummycake.png"
    },
    9: function(e, t) {},
    9085: function(e, t, n) {},
    "9c88": function(e, t, n) {},
    "9d64": function(e, t, n) {
        e.exports = n.p + "img/logo.png"
    },
    ae4f: function(e, t, n) {},
    c661: function(e, t, n) {
        e.exports = n.p + "img/yummycake.png"
    },
    d538: function(e, t, n) {
        e.exports = n.p + "img/private_first_class.d4180e26.png"
    },
    d8fe: function(e, t, n) {
        e.exports = n.p + "img/time.png"
    },
    ed16: function(e, t, n) {
        e.exports = n.p + "img/buy.1ad92c92.png"
    }
});