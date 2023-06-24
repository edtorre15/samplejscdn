define("@microsoft/azureportal-reactview/Az", ["require", "exports", "Az"], (function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.trace = t.setTitle = t.setOnThemeChange = t.setOnSelectedSubscriptionsChange = t.setBladeUnauthorized = t.setBladeOnPin = t.setBladeIcon = t.publishNotification = t.portalOrigin = t.pinParts = t.pinPart = t.openDirectoryPane = t.openContextPaneAsync = t.openContextPane = t.openBladeAsync = t.openBlade = t.notFound = t.noData = t.navigateToDashboard = t.menuBlade = t.log = t.handledError = t.getUserInfo = t.getTheme = t.getSessionId = t.getSelectedSubscriptions = t.getParameters = t.getIcon = t.getFeatureFlags = t.getAuthorizationToken = t.flushDiagnostics = t.fail = t.effectiveLocale = t.configureLogging = t.configureBladeAlertOnClose = t.closeCurrentBlade = t.closeContextBlade = t.closeChildBlade = void 0;
    var r = n;

    var NotificationStatus;
    ;(function(NotificationStatus) {
    NotificationStatus[(NotificationStatus["Information"] = 0)] = "Information"
    NotificationStatus[(NotificationStatus["Warning"] = 1)] = "Warning"
    NotificationStatus[(NotificationStatus["Error"] = 2)] = "Error"
    NotificationStatus[(NotificationStatus["InProgress"] = 3)] = "InProgress"
    NotificationStatus[(NotificationStatus["Success"] = 4)] = "Success"
    })(NotificationStatus || (NotificationStatus = {}));

    t.closeChildBlade = r.closeChildBlade,
    t.closeContextBlade = r.closeContextBlade,
    t.closeCurrentBlade = r.closeCurrentBlade,
    t.configureBladeAlertOnClose = r.configureBladeAlertOnClose,
    t.configureLogging = r.configureLogging,
    t.effectiveLocale = r.effectiveLocale,
    t.fail = r.fail,
    t.flushDiagnostics = r.flushDiagnostics,
    t.getAuthorizationToken = r.getAuthorizationToken,
    t.getFeatureFlags = r.getFeatureFlags,
    t.getIcon = r.getIcon,
    t.getParameters = r.getParameters,
    t.getSelectedSubscriptions = r.getSelectedSubscriptions,
    t.getSessionId = r.getSessionId,
    t.getTheme = r.getTheme,
    t.getUserInfo = r.getUserInfo,
    t.handledError = r.handledError,
    t.log = r.log,
    t.menuBlade = r.menuBlade,
    t.navigateToDashboard = r.navigateToDashboard,
    t.noData = r.noData,
    t.notFound = r.notFound,
    t.openBlade = r.openBlade,
    t.openBladeAsync = r.openBladeAsync,
    t.openContextPane = r.openContextPane,
    t.openContextPaneAsync = r.openContextPaneAsync,
    t.openDirectoryPane = r.openDirectoryPane,
    t.pinPart = r.pinPart,
    t.pinParts = r.pinParts,
    t.portalOrigin = r.portalOrigin,
    t.publishNotification = r.publishNotification,
    t.setBladeIcon = r.setBladeIcon,
    t.setBladeOnPin = r.setBladeOnPin,
    t.setBladeUnauthorized = r.setBladeUnauthorized,
    t.setOnSelectedSubscriptionsChange = r.setOnSelectedSubscriptionsChange,
    t.setOnThemeChange = r.setOnThemeChange,
    t.setTitle = r.setTitle,
    t.trace = r.trace,
    t.NotificationStatus = NotificationStatus,
    delete t.menuBlade,
    Object.defineProperty(t, "menuBlade", {
        get: function() {
            return r.menuBlade
        }
    })
}
)),
define("@microsoft/azureportal-reactview/DataCache", ["require", "exports"], (function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.clearItem = t.clear = t.getOrAdd = t.get = t.add = void 0;
    var n = {}
      , r = {}
      , i = "reactview-datacache-"
      , o = function(e) {
        return i + e
    };
    function a(e, t, i) {
        return void 0 === i && (i = "PortalClose"),
        __awaiter(this, void 0, void 0, (function() {
            var a;
            return __generator(this, (function(s) {
                return a = o(e),
                n[a] = t.then((function(e) {
                    return {
                        kind: "resolved",
                        data: e
                    }
                }
                ), (function(e) {
                    var t = "Not serializable";
                    try {
                        t = JSON.parse(JSON.stringify(e))
                    } catch (e) {}
                    return {
                        kind: "rejected",
                        serializableError: t
                    }
                }
                )).then((function(e) {
                    var t, n = __assign(__assign({}, e), {
                        expires: "number" == typeof i ? 1e3 * i + Date.now() : Number.MAX_SAFE_INTEGER,
                        timestamp: Date.now()
                    });
                    return "ViewClose" !== i && sessionStorage.setItem(a, JSON.stringify(n)),
                    null === (t = r[a]) || void 0 === t || t.forEach((function(t) {
                        return "rejected" === e.kind ? t.reject(e.serializableError) : t.resolve(e.data)
                    }
                    )),
                    r[a] = [],
                    n
                }
                )),
                [2, t]
            }
            ))
        }
        ))
    }
    function s(e, t) {
        return __awaiter(this, void 0, void 0, (function() {
            var i, a, s, u;
            return __generator(this, (function(c) {
                switch (c.label) {
                case 0:
                    return i = o(e),
                    [4, n[i]];
                case 1:
                    if (a = c.sent(),
                    s = JSON.parse(sessionStorage.getItem(i)),
                    (null == (u = !a || s && a.timestamp < s.timestamp ? s : a) ? void 0 : u.expires) > Date.now()) {
                        if ("rejected" === u.kind)
                            throw u.serializableError;
                        return [2, u.data]
                    }
                    return n[i] = void 0,
                    sessionStorage.removeItem(i),
                    t ? [2] : [2, new Promise((function(e, t) {
                        (r[i] = r[i] || []).push({
                            resolve: e,
                            reject: t
                        })
                    }
                    ))]
                }
            }
            ))
        }
        ))
    }
    t.add = a,
    t.get = s,
    t.getOrAdd = function(e, t, r) {
        return void 0 === r && (r = "PortalClose"),
        __awaiter(this, void 0, void 0, (function() {
            var i, u, c;
            return __generator(this, (function(l) {
                switch (l.label) {
                case 0:
                    return i = o(e),
                    !!n[i] || !!sessionStorage.getItem(i) ? [4, s(e, !0)] : [3, 2];
                case 1:
                    if (void 0 !== (u = l.sent()))
                        return [2, u];
                    l.label = 2;
                case 2:
                    return c = t(),
                    [2, a(e, c, r)]
                }
            }
            ))
        }
        ))
    }
    ,
    t.clear = function(e) {
        if (void 0 === e && (e = "PortalClose"),
        n = {},
        "ViewClose" !== e)
            for (var t = 0; t < sessionStorage.length; t++) {
                var r = sessionStorage.key(t);
                r.startsWith(i) && (t--,
                sessionStorage.removeItem(r))
            }
    }
    ,
    t.clearItem = function(e) {
        var t = o(e);
        delete n[t],
        sessionStorage.removeItem(t)
    }
}
)),
define("@microsoft/azureportal-reactview/internal/DynamicReact", ["require", "exports"], (function(e, t) {
    "use strict";
    function n(e) {
        return window.require("react")[e]
    }
    function r(e) {
        return function() {
            for (var t = [], r = 0; r < arguments.length; r++)
                t[r] = arguments[r];
            return n(e).apply(void 0, t)
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = {
        cloneElement: r("cloneElement"),
        createContext: r("createContext"),
        createElement: r("createElement"),
        createFactory: r("createFactory"),
        createRef: r("createRef"),
        forwardRef: r("forwardRef"),
        isValidElement: r("isValidElement"),
        lazy: r("lazy"),
        memo: r("memo"),
        useCallback: r("useCallback"),
        useContext: r("useContext"),
        useDebugValue: r("useDebugValue"),
        useEffect: r("useEffect"),
        useImperativeHandle: r("useImperativeHandle"),
        useLayoutEffect: r("useLayoutEffect"),
        useMemo: r("useMemo"),
        useReducer: r("useReducer"),
        useRef: r("useRef"),
        useState: r("useState"),
        get Fragment() {
            return n("Fragment")
        },
        get Component() {
            return n("Component")
        }
    }
}
)),
define("@microsoft/azureportal-reactview/Environment", ["require", "exports", "@microsoft/azureportal-reactview/internal/DynamicReact"], (function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.mapEnvironmentToProps = t.useEnvironment = t.setEnvironment = t.isFeatureEnabled = t.getFeatureValue = t.getEnvironmentValue = void 0;
    var r = window.environment
      , i = []
      , o = 0;
    function a(e) {
        var t = window.features;
        if (!t)
            throw new Error("This API cannot be used until the features have been set on window.features");
        var n = t[e.toLowerCase()];
        return void 0 === n ? n : n + ""
    }
    function s() {
        if (void 0 === (r = r || window.environment))
            throw "This library cannot be used until the environment has been set on window.environment"
    }
    t.getEnvironmentValue = function(e) {
        return s(),
        window.environment[e]
    }
    ,
    t.getFeatureValue = a,
    t.isFeatureEnabled = function(e) {
        var t = a(e);
        return !!t && "false" !== t.toLowerCase()
    }
    ,
    t.setEnvironment = function(e) {
        r = e,
        o++,
        i.forEach((function(e) {
            return e(o)
        }
        ))
    }
    ,
    t.useEnvironment = function(e) {
        s();
        var t = n.default.useState(o)[1];
        return i.push(t),
        r[e]
    }
    ,
    t.mapEnvironmentToProps = function() {
        return s(),
        function(e) {
            return function(t) {
                function o(e) {
                    var n = t.call(this, e) || this;
                    return n.state = {
                        environment: r
                    },
                    i.push((function() {
                        n.setState({
                            environment: r
                        })
                    }
                    )),
                    n
                }
                return __extends(o, t),
                o.prototype.render = function() {
                    var t = __assign(__assign({}, this.props), {
                        environment: this.state.environment
                    });
                    return n.default.createElement(e, t, this.props.children)
                }
                ,
                o
            }(n.default.Component)
        }
    }
}
)),
define("@microsoft/azureportal-reactview/internal/Ajax", ["require", "exports"], (function(e, t) {
    "use strict";
    var n;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.getEndpoints = void 0,
    t.getEndpoints = function(e) {
        return n || (n = e.getBaseFunctionProxy().invoke("___ajax___getEndpoints"))
    }
}
)),
define("@microsoft/azureportal-reactview/internal/Environment", ["require", "exports"], (function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.getEnvironmentValue = void 0;
    var n = window.internalEnv;
    t.getEnvironmentValue = function(e) {
        return function() {
            if (void 0 === (n = n || window.internalEnv))
                throw "This library cannot be used until the internal environment has been set on window.internalEnv"
        }(),
        window.internalEnv[e]
    }
}
)),
define("@microsoft/azureportal-reactview/internal/Experimentation", ["require", "exports"], (function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.getAssignmentsHelper = t.getShellAssignments = void 0;
    var n = __InternalAzurePortal.AzInternalApi.internalApi;
    function r(e) {
        return e.then((function(e) {
            var t = e.variables
              , n = e.flights;
            function r(e, n, r) {
                var i = t[function(e, t) {
                    return (e = (e || "").toLowerCase()).startsWith("azureportal_") || (e = (t = (null == t ? void 0 : t.toLowerCase()) || "azureportal") + "_" + e),
                    e
                }(e, n)];
                return null == i ? i : r(i)
            }
            return {
                hasFlight: function(e) {
                    return !!~n.indexOf(e.toLowerCase())
                },
                getStringValue: function(e, t) {
                    return r(e, t, (function(e) {
                        return String(e)
                    }
                    ))
                },
                getNumberValue: function(e, t) {
                    return r(e, t, (function(e) {
                        var t = parseFloat(e);
                        return isNaN(t) ? null : t
                    }
                    ))
                },
                getBooleanValue: function(e, t) {
                    return r(e, t, (function(e) {
                        return "boolean" == typeof e ? e : "string" == typeof e ? 4 === e.length && "true" === e.toLowerCase() : null
                    }
                    ))
                }
            }
        }
        ))
    }
    t.getShellAssignments = function() {
        return r(n.getShellAssignments())
    }
    ,
    t.getAssignmentsHelper = r
}
)),
define("@microsoft/azureportal-reactview/internal/AjaxTelemetry", ["require", "exports", "@microsoft/azureportal-reactview/internal/Ajax", "@microsoft/azureportal-reactview/internal/Experimentation", "@microsoft/azureportal-reactview/internal/Environment", "@microsoft/azureportal-reactview/Environment", "@microsoft/azureportal-reactview/Az"], (function(e, t, n, r, i, o, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.isTracingEnabled = t.sendTrace = t.interceptAjax = t.xhrStaticKeys = void 0;
    var s, u, c = __InternalAzurePortal.AzInternalApi.internalApi, l = !0, d = !0;
    t.xhrStaticKeys = ["UNSENT", "OPENED", "HEADERS_RECEIVED", "LOADING", "DONE"];
    var f = /^[a-z+]+:\/\//;
    function m(e, t) {
        var n = t.uri
          , r = t.type
          , i = t.headers
          , o = t.requestText
          , a = t.isError
          , s = t.status
          , u = t.responseBody
          , l = t.responseCorrelationId
          , d = t.startTime
          , f = t.endTime;
        return __awaiter(this, void 0, void 0, (function() {
            var t, m, p, g, _, y, w, T, b, E;
            return __generator(this, (function(P) {
                switch (P.label) {
                case 0:
                    return t = n.toLowerCase(),
                    [4, h(e, t)];
                case 1:
                    return m = P.sent(),
                    p = 0 !== m,
                    [4, v((function() {
                        return o
                    }
                    ))];
                case 2:
                    return g = P.sent(),
                    c.isFeatureEnabled("fixajaxnames").then((function(e) {
                        if (e) {
                            var t = function(e) {
                                return console.warn("Supply a logical name for the ajax call to '" + e + "' for inclusion in telemetry.")
                            };
                            if (p) {
                                var r = function() {
                                    var e;
                                    try {
                                        e = JSON.parse(g)
                                    } catch (e) {}
                                    return e
                                }()
                                  , o = r && r.requests;
                                o && o.forEach((function(e) {
                                    (1 !== m || e && e.requestHeaderDetails && e.requestHeaderDetails.commandName) && (2 !== m || e && e.headers && e.headers["x-ms-command-name"]) || t(e.url)
                                }
                                ))
                            } else
                                i["x-ms-command-name"] || t(n)
                        }
                    }
                    )),
                    (y = null == u ? void 0 : u.text) ? [4, v((function() {
                        return u.text()
                    }
                    ))] : [3, 4];
                case 3:
                    y = P.sent(),
                    P.label = 4;
                case 4:
                    return _ = y,
                    T = (w = e.getBaseFunctionProxy()).invoke,
                    b = ["___ajax___trace"],
                    E = {
                        request: {
                            uri: n,
                            type: r,
                            headers: i,
                            dataSentBytes: g && g.length,
                            data: p ? g : void 0
                        },
                        response: {
                            isError: a,
                            status: s,
                            dataReceivedBytes: _ && _.length,
                            responseCorrelationId: l,
                            responseText: p ? _ : void 0
                        },
                        startTime: d,
                        endTime: f
                    },
                    [4, c.getBladeContext()];
                case 5:
                    return T.apply(w, b.concat([(E.bladeContext = P.sent(),
                    E), !0])),
                    [2]
                }
            }
            ))
        }
        ))
    }
    function p(e, t, n) {
        return __awaiter(this, void 0, void 0, (function() {
            var r, s, u, c, l;
            return __generator(this, (function(f) {
                switch (f.label) {
                case 0:
                    return [4, e.getBaseFunctionProxy().invoke("___ajax___isTrustedDomain", t)];
                case 1:
                    if (f.sent())
                        return [2];
                    r = Object.create(null),
                    s = "Security issue: Request to send auth token to untrusted domain '" + new URL(t).hostname + "'. Only a fixed set of domains should be configured to receive auth tokens.",
                    n && (s += " Command name: " + n),
                    u = o.isFeatureEnabled("blockuntrusteddomains") || i.getEnvironmentValue("blockUntrustedDomains") || d,
                    c = !1,
                    f.label = 2;
                case 2:
                    return f.trys.push([2, 4, , 5]),
                    [4, e.getBaseFunctionProxy().invoke("___ajax___isTrustedDomainOverride", t)];
                case 3:
                    return c = f.sent(),
                    [3, 5];
                case 4:
                    return l = f.sent(),
                    r.overrideError = JSON.stringify(l),
                    [3, 5];
                case 5:
                    return a.log([{
                        area: "AjaxTelemetry",
                        timestamp: Date.now(),
                        message: s,
                        level: !u || c ? 2 : 1,
                        args: [r]
                    }]),
                    !u || c ? (console.error(s),
                    [2]) : (console.warn(s),
                    [2, Promise.reject(new Response(s,{
                        status: 403,
                        statusText: s
                    }))])
                }
            }
            ))
        }
        ))
    }
    function h(e, t) {
        return __awaiter(this, void 0, void 0, (function() {
            var r, i, o, a;
            return __generator(this, (function(s) {
                switch (s.label) {
                case 0:
                    return r = t.toLowerCase(),
                    [4, n.getEndpoints(e)];
                case 1:
                    return i = s.sent(),
                    o = i.armBatch,
                    a = i.msGraph,
                    [2, r.startsWith(o) ? 1 : new RegExp(a + "[^/]*/\\$batch").test(r) ? 2 : 0]
                }
            }
            ))
        }
        ))
    }
    function v(e) {
        return __awaiter(this, void 0, void 0, (function() {
            return __generator(this, (function(t) {
                switch (t.label) {
                case 0:
                    return t.trys.push([0, 2, , 3]),
                    [4, e()];
                case 1:
                    return [2, t.sent()];
                case 2:
                    return t.sent(),
                    [3, 3];
                case 3:
                    return [2]
                }
            }
            ))
        }
        ))
    }
    function g(e) {
        return "number" == typeof e && (304 === e || e >= 200 && e < 300)
    }
    t.interceptAjax = function(e, n) {
        var i = this;
        return s = !n && s || window.fetch,
        u = !n && u || window.XMLHttpRequest,
        window.fetch = function() {
            for (var t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n];
            var r = Date.now()
              , o = performance.now()
              , a = t[0]
              , u = t[1]
              , c = new Request(a instanceof Request ? a.clone() : a,u)
              , l = c.headers.get("Authorization") && f.test(c.url.toLowerCase()) ? p(e, c.url, "fetch-" + (c.headers.get("x-ms-command-name") || "UNNAMED")) : Promise.resolve()
              , d = l.then((function() {
                return s.apply(void 0, t)
            }
            ))
              , h = function(t) {
                return __awaiter(i, void 0, void 0, (function() {
                    var n, i, a, s;
                    return __generator(this, (function(u) {
                        return n = performance.now(),
                        i = r + (n - o),
                        a = {},
                        c.headers.forEach((function(e, t) {
                            return a[t] = e
                        }
                        )),
                        s = null == t ? void 0 : t.headers,
                        m(e, {
                            uri: c.url,
                            type: c.method,
                            headers: a,
                            requestText: c.text(),
                            isError: !g(null == t ? void 0 : t.status),
                            status: null == t ? void 0 : t.status,
                            responseBody: t,
                            responseCorrelationId: (null == s ? void 0 : s.get("x-ms-correlation-request-id")) || (null == s ? void 0 : s.get("client-request-id")),
                            startTime: r,
                            endTime: i
                        }),
                        [2]
                    }
                    ))
                }
                ))
            };
            return d.then((function(e) {
                return h(e.clone())
            }
            ), (function() {
                return h()
            }
            )),
            d = e.getNetworkThrottler().throttleRequest(c.url, d),
            e.loadDependencies.addKeepalivePromise(d),
            d
        }
        ,
        r.getShellAssignments().then((function(e) {
            e.getBooleanValue("InterceptReactAjax") || (l = !1,
            window.fetch = s,
            window.XMLHttpRequest = u),
            d = !!e.getBooleanValue("blockuntrusteddomains")
        }
        )),
        window.XMLHttpRequest = function(n) {
            var r = Object.create(n.prototype)
              , i = function() {
                var e = new n;
                return Object.setPrototypeOf(e, r),
                e
            };
            return t.xhrStaticKeys.forEach((function(e) {
                i[e] = n[e]
            }
            )),
            i.prototype = r,
            Object.defineProperty(r, "constructor", {
                value: i,
                enumerable: !1,
                writable: !0
            }),
            r.open = function() {
                for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                n.prototype.open.apply(this, e);
                var r = e[0]
                  , i = e[1];
                this._sendTraceOptions = {
                    type: r,
                    uri: i && i.toString(),
                    headers: {},
                    status: 0
                }
            }
            ,
            r.setRequestHeader = function() {
                for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                n.prototype.setRequestHeader.apply(this, e);
                var r = e[0]
                  , i = e[1]
                  , o = this._sendTraceOptions;
                o.headers[r] = i
            }
            ,
            r.send = function() {
                for (var t = this, r = [], i = 0; i < arguments.length; i++)
                    r[i] = arguments[i];
                var o, a, s = r[0], u = __assign({}, this._sendTraceOptions), c = u.type, l = s instanceof Document ? Promise.resolve(void 0) : "GET" === c || "HEAD" === c ? Promise.resolve("") : new Promise((function(e) {
                    e(new Request(u.uri,{
                        method: c,
                        body: s
                    }).text())
                }
                ));
                e.getNetworkThrottler().isEnabled() && console.warn("Network throttling: Requests using XmlHttpRequest are not supported currently: " + u.uri);
                var d = new Promise((function(e, t) {
                    o = e,
                    a = t
                }
                ));
                e.loadDependencies.addKeepalivePromise(d),
                u.startTime = Date.now(),
                u.requestText = l;
                var f = function() {
                    return __awaiter(this, void 0, void 0, (function() {
                        var t, n, r = this;
                        return __generator(this, (function(i) {
                            return this.readyState !== XMLHttpRequest.DONE || (o(),
                            u.endTime = Date.now(),
                            p && p(),
                            "number" == typeof (t = this.status) && t > 0 && (u.status = t),
                            n = g(t),
                            u.isError = !n,
                            n && 304 !== t && (u.responseBody = function() {
                                try {
                                    return new Response("json" === r.responseType ? JSON.stringify(r.response) : r.response)
                                } catch (e) {}
                            }()),
                            u.responseCorrelationId = function() {
                                try {
                                    for (var e = r.getAllResponseHeaders().trim().split(/[\r\n]+/), t = 0, n = e; t < n.length; t++) {
                                        var i = n[t].split(": ")
                                          , o = i.shift();
                                        if ((o = o && o.toLowerCase()) && ("x-ms-correlation-request-id" === o || "client-request-id" === o))
                                            return i.join(": ")
                                    }
                                } catch (e) {}
                            }(),
                            m(e, u)),
                            [2]
                        }
                        ))
                    }
                    ))
                }
                  , p = function() {
                    p = null,
                    t.removeEventListener("readystatechange", f)
                };
                this.addEventListener("readystatechange", f);
                try {
                    n.prototype.send.apply(this, r)
                } catch (t) {
                    throw u.isError = !0,
                    m(e, u),
                    p && p(),
                    a(),
                    t
                }
            }
            ,
            i
        }(u),
        function() {
            window.fetch = s,
            window.XMLHttpRequest = u
        }
    }
    ,
    t.sendTrace = m,
    t.isTracingEnabled = function() {
        return l
    }
}
)),
define("@microsoft/azureportal-reactview/internal/Document", ["require", "exports", "@microsoft/azureportal-reactview/Az"], (function(e, t, n) {
    "use strict";
    function r(e) {
        return 2 === e.highContrastMode ? "#000000" : 1 === e.highContrastMode || 0 === e.mode ? "#ffffff" : "#1b1a19"
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.revealContent = t.showLoadingIndicator = t.getLoadingBackgroundColor = t.injectOrResetTemplate = void 0,
    t.injectOrResetTemplate = function() {
        document.body.innerHTML = '\n        <div id="__frameTitle" style="height: 64px;" class="reactview-printonly">\n            <div style="display: flex; height: 100%; box-sizing: border-box; padding: 8px 20px;">\n                <span style="display: flex; align-items: center;">\n                    <img id="__bladeIcon" aria-hidden="true" style="height: 28px; width: 28px; margin-right: 10px;">\n                </span>\n                <span style="flex-grow: 1; font-family: Segoe UI;">\n                    <div style="display: flex;">\n                        <h2 id="__bladeTitle" style="margin:0; font-size: 24px; line-height: 28px; height: 32px; flex-grow: 1;">\n                            <span id="__bladeTitleMain" style="font-weight: 600;"></span>\n                            <span id="__bladeTitleExtras" style="font-weight: 400;"></span>\n                        </h2>\n                    </div>\n                    <div id="__bladeSubtitle" style="font-size: 12px; line-height: 14px; height: 16px; color: #646464;"></div>\n                </span>\n            </div>\n        </div>\n        <div id="__bladeShield" style="visibility: hidden">\n            <div style="position: fixed; top: 0; left: 0; bottom: 0; right: 0; z-index: 1000; background-color: inherit;">\n                <div class="fxs-progress-dots">\n                    <div class="fxs-progress-dots-dot"></div>\n                    <div class="fxs-progress-dots-dot"></div>\n                    <div class="fxs-progress-dots-dot"></div>\n                    <div class="fxs-progress-dots-dot-shadow"></div>\n                    <div class="fxs-progress-dots-dot-shadow"></div>\n                    <div class="fxs-progress-dots-dot-shadow"></div>\n                </div>\n            </div>\n        </div>\n        <div id="__frameTop">\n            <div id="__bladeCommandBar"></div>\n            <div id="__bladeStatusBar"></div>\n            <div id="__bladeDialog"></div>\n        </div>\n        <div id="root"></div>\n        <div id="__bladeFooter"></div>\n        <div id="react-perftools" style="display: none; height: 415px;"></div>\n    '
    }
    ,
    t.getLoadingBackgroundColor = r,
    t.showLoadingIndicator = function() {
        var e = document.getElementById("__bladeShield");
        e && n.getTheme().then((function(t) {
            var n = r(t);
            e.setAttribute("style", "visibility: visible; background-color: " + n + ";")
        }
        ))
    }
    ,
    t.revealContent = function() {
        var e = document.getElementById("__bladeShield");
        e && e.setAttribute("style", "visibility: hidden")
    }
}
)),
define("@microsoft/azureportal-reactview/internal/DynamicReactDom", ["require", "exports"], (function(e, t) {
    "use strict";
    function n(e) {
        return function() {
            for (var t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n];
            var r = window.require("react-dom");
            return r[e].apply(r, t)
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.unmountComponentAtNode = t.render = t.hydrate = t.flushSync = t.findDOMNode = t.createPortal = void 0,
    t.createPortal = n("createPortal"),
    t.findDOMNode = n("findDOMNode"),
    t.flushSync = n("flushSync"),
    t.hydrate = n("hydrate"),
    t.render = n("render"),
    t.unmountComponentAtNode = n("unmountComponentAtNode")
}
)),
define("@microsoft/azureportal-reactview/internal/SerializeUtil", ["require", "exports"], (function(e, t) {
    "use strict";
    function n(e, t) {
        for (var n = Object.assign({
            excludePrivate: !1,
            excludeFunction: !1,
            excludeProto: !0
        }, t), r = function(e, t) {
            return !!n && n.excludePrivate && (t.startsWith("__") || t.endsWith("__"))
        }, i = function(e, t) {
            return !!n && n.excludeProto && "__proto__" === t
        }, o = new Set, a = e; e; )
            Object.getOwnPropertyNames(e).filter((function(e) {
                return !(t = a,
                o = e,
                n && n.excludeFunction && "function" == typeof t[o] || r(0, e) || i(0, e));
                var t, o
            }
            )).forEach((function(e) {
                return o.add(e)
            }
            )),
            e = Object.getPrototypeOf(e);
        return o
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.getAllPropertyNames = t.decycle = void 0,
    t.decycle = function(e) {
        var t = function(e, r) {
            if (void 0 === r && (r = []),
            !function(e) {
                return "object" == typeof e && null !== e
            }(e) || function(e) {
                return "[object Date]" === Object.prototype.toString.call(e)
            }(e))
                return e;
            if (r.includes(e))
                return "_CYCLIC_OBJECT_";
            if (r.push(e),
            Array.isArray(e))
                return e.map((function(e) {
                    return t(e, r)
                }
                ));
            var i = n(e, {
                excludePrivate: !0,
                excludeFunction: !0
            });
            return function(e) {
                for (var t = {}, n = 0, r = e; n < r.length; n++) {
                    var i = r[n]
                      , o = i[0]
                      , a = i[1];
                    t[o] = a
                }
                return t
            }(Array.from(i).map((function(t) {
                return [t, e[t]]
            }
            )).map((function(e) {
                var n = e[0]
                  , i = e[1];
                return [n, i = t(i, r)]
            }
            )))
        };
        return t(e)
    }
    ,
    t.getAllPropertyNames = n
}
)),
define("@microsoft/azureportal-reactview/internal/ErrorBoundary", ["require", "exports", "@microsoft/azureportal-reactview/internal/DynamicReact", "@microsoft/azureportal-reactview/Az", "@microsoft/azureportal-reactview/Environment", "FxInternal/Resources/ReactComponents", "@microsoft/azureportal-reactview/internal/SerializeUtil"], (function(e, t, n, r, i, o, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.logReactRenderError = t.getErrorBoundary = t.withErrorBoundary = t.failBlade = t.errorHandler = t.useTriggerErrorBoundary = void 0;
    var s = __InternalAzurePortal.AzInternalApi.internalApi;
    t.useTriggerErrorBoundary = function() {
        var e = n.default.useState(null)[1];
        return function(t) {
            e((function() {
                throw t
            }
            ))
        }
    }
    ;
    var u;
    t.errorHandler = function(e, t) {
        var n, i, o, c;
        (void 0 === t && (t = !0),
        l(e)) ? (n = u.UnhandledPromiseRejection,
        i = "Unhandled Promise Rejection",
        c = e.reason) : (n = u.UnhandledError,
        i = "Unhandled Error",
        c = e.error,
        o = {
            colno: e.colno,
            filename: e.filename,
            lineno: e.lineno,
            message: e.message
        });
        t && r.log([{
            timestamp: Date.now(),
            level: 2,
            area: "Bootstrap",
            message: (null == c ? void 0 : c.message) || c || i,
            code: n,
            args: [c, o]
        }]),
        s.captureError({
            message: i,
            metadata: {
                error: a.decycle(c),
                errorInfo: a.decycle(o)
            }
        })
    }
    ,
    function(e) {
        e[e.UnhandledError = 0] = "UnhandledError",
        e[e.UnhandledPromiseRejection = 1] = "UnhandledPromiseRejection"
    }(u || (u = {}));
    var c, l = function(e) {
        return void 0 !== e.promise
    };
    function d() {
        var e = window.require("react");
        return c || (c = function(e) {
            function n(t) {
                var n = e.call(this, t) || this;
                return n._hasLogged = !1,
                n.state = {
                    hasError: !1,
                    hasLogged: !1,
                    error: void 0
                },
                n
            }
            return __extends(n, e),
            n.getDerivedStateFromError = function(e) {
                return {
                    hasError: !0,
                    error: e
                }
            }
            ,
            n.prototype.componentDidCatch = function(e, t) {
                if (!this._hasLogged) {
                    var n = "Error caught in error boundary"
                      , i = this.props.area;
                    r.log([{
                        area: i,
                        timestamp: Date.now(),
                        message: (null == e ? void 0 : e.message) || e || n,
                        level: 2,
                        entryType: "ReactInternalComponentError",
                        args: [e, t]
                    }]),
                    s.captureError({
                        message: n,
                        metadata: {
                            area: this.props.area,
                            error: a.decycle(e),
                            errorInfo: a.decycle(t)
                        }
                    })
                }
                this._hasLogged = !0
            }
            ,
            n.prototype.render = function() {
                var e = this.props
                  , n = e.area
                  , r = e.children;
                return this.state.hasError ? t.failBlade({
                    message: o.ReactError.componentError.replace(/\{0\}/g, n),
                    metadata: {
                        area: n
                    }
                }, this.state.error) : r
            }
            ,
            n
        }(e.Component))
    }
    t.failBlade = function(e, t, a) {
        var s;
        if (i.isFeatureEnabled("reactreload") || window.__whmEventSourceWrapper)
            return a && a(),
            window.require(["@microsoft/azureportal-reactview/StatusBar"], (function(e) {
                e.showStatusBar(e.StatusBarType.Warning, "An error occured while hot reloading that would normally cause your blade to fail. Check the console for details")
            }
            )),
            console.warn("Error during hot reload:", e, t),
            n.default.createElement(n.default.Fragment, null);
        switch (null === (s = null == t ? void 0 : t.message) || void 0 === s ? void 0 : s.httpStatusCode) {
        case 404:
            r.notFound(e);
            break;
        case 401:
        case 403:
            var u = "string" == typeof e.message ? e.message : o.ReactError.unauthorized;
            r.setBladeUnauthorized(u);
            break;
        default:
            r.fail(e)
        }
        return n.default.createElement(n.default.Fragment, null)
    }
    ,
    t.withErrorBoundary = function(e, t) {
        function r(r) {
            return n.default.createElement(d(), {
                area: t
            }, n.default.createElement(e, __assign({}, r)))
        }
        var i = e.displayName || e.name || t;
        return r.displayName = i,
        r
    }
    ,
    t.getErrorBoundary = d,
    t.logReactRenderError = function(e, t) {
        var n = "React render happened " + e + " times. Check the blade's dependencies and make sure that another reactview is not being imported.";
        console.error(n),
        r.log([{
            level: 2,
            message: n,
            area: "ReactInternal.tsx-" + t,
            timestamp: Date.now()
        }])
    }
}
)),
define("@microsoft/azureportal-reactview/internal/FunctionProxy", ["require", "exports"], (function(e, t) {
    "use strict";
    var n;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.AsyncStoreImpl = t.FunctionProxyImpl = void 0,
    function(e) {
        e[e.Success = 0] = "Success",
        e[e.Threw = 1] = "Threw",
        e[e.NonSerializable = 2] = "NonSerializable"
    }(n || (n = {}));
    var r = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
    function i() {
        var e = {};
        return e.promise = new Promise((function(t, n) {
            e.reject = n,
            e.resolve = t
        }
        )),
        e
    }
    var o = function() {
        function e() {
            var e = this;
            this._functionMap = {},
            this._callQueue = [],
            this._inflightMap = {},
            this._invokeListeners = new Set,
            this._portPromise = new Promise((function(t) {
                e.setPort = function(r) {
                    e._port = r,
                    t(r),
                    r.onmessage = function(t) {
                        var r = t.data;
                        switch (r.type) {
                        case 0:
                            e._callQueue.push({
                                message: r,
                                promise: i()
                            }),
                            e._flushCallQueue();
                            break;
                        case 1:
                            var o = e._inflightMap[r.id];
                            o.calleeEndTime = r.data.calleeEndTime,
                            r.data.returnType === n.Success ? o.deferred.resolve(r.data.value) : (r.data.returnType === n.Threw || console.error("Non serializable data was sent across boundary."),
                            o.deferred.reject(r.data.value)),
                            delete e._inflightMap[r.id]
                        }
                    }
                }
            }
            ))
        }
        return e.prototype._postMessage = function(e) {
            var t = this;
            return this._port ? new Promise((function(n) {
                t._port.postMessage(e),
                n()
            }
            )) : this._portPromise.then((function(t) {
                t.postMessage(e)
            }
            ))
        }
        ,
        e.prototype._flushCallQueue = function() {
            var e = this;
            this._callQueue = this._callQueue.filter((function(t) {
                var r = t.message.data
                  , i = e._functionMap[r.name];
                return !i || (Promise.resolve(i(r.parameters)).then((function(i) {
                    if (!r.ignoreResponse) {
                        var o = {
                            id: t.message.id,
                            type: 1,
                            data: {
                                returnType: n.Success,
                                value: i,
                                calleeEndTime: Date.now()
                            }
                        };
                        e._postMessage(o).catch((function(t) {
                            console.error(t),
                            o.data.returnType = n.NonSerializable,
                            o.data.value = t.message,
                            e._postMessage(o)
                        }
                        ))
                    }
                }
                )).catch((function(i) {
                    if (!r.ignoreResponse) {
                        var o = {
                            id: t.message.id,
                            type: 1,
                            data: {
                                returnType: n.Threw,
                                value: i,
                                calleeEndTime: Date.now()
                            }
                        };
                        e._postMessage(o).catch((function(t) {
                            o.data.returnType = n.NonSerializable,
                            o.data.value = t.message,
                            e._postMessage(o)
                        }
                        ))
                    }
                }
                )),
                !1)
            }
            ))
        }
        ,
        e.prototype.register = function(e, t) {
            this._functionMap[e] = t,
            this._flushCallQueue()
        }
        ,
        e.prototype.invoke = function(e, t, n, o) {
            var a = this;
            if (this._functionMap[e])
                return this._functionMap[e](t);
            var s = function() {
                for (var e = "", t = 0; t < 4; t++) {
                    var n = 4294967296 * Math.random() | 0;
                    e += r[15 & n] + r[n >> 4 & 15] + r[n >> 8 & 15] + r[n >> 12 & 15] + r[n >> 16 & 15] + r[n >> 20 & 15] + r[n >> 24 & 15] + r[n >> 28 & 15]
                }
                var i = r[8 + 4 * Math.random() | 0];
                return e.slice(0, 8) + e.slice(9, 13) + "4" + e.slice(13, 16) + i + e.slice(16, 19) + e.slice(19, 31)
            }()
              , u = {
                type: 0,
                id: s,
                data: {
                    name: e,
                    parameters: t,
                    ignoreResponse: n
                }
            }
              , c = this._postMessage(u);
            o && c.finally(o);
            var l = function(n) {
                a._invokeListeners.forEach((function(r) {
                    var i = r[0]
                      , o = r[1]
                      , a = null == i ? void 0 : i[e];
                    a ? a({
                        parameters: t,
                        result: n
                    }) : o && o({
                        name: e,
                        parameters: t,
                        result: n
                    })
                }
                ))
            };
            if (n)
                return l(),
                c.catch((function() {}
                ));
            var d = i()
              , f = this._inflightMap[s] = {
                deferred: d,
                calleeEndTime: null
            };
            c.catch((function(e) {
                delete a._inflightMap[s],
                d.reject(e)
            }
            )),
            d.promise.finally((function() {
                h.calleeEndTime = f.calleeEndTime
            }
            )).catch((function() {}
            ));
            var m = d.promise;
            if (this._onInvoke) {
                var p = d.promise.then((function(e) {
                    return {
                        result: e,
                        calleeEndTime: f.calleeEndTime
                    }
                }
                ));
                m = (this._onInvoke(e, p, t) || p).then((function(e) {
                    var t = e.result
                      , n = e.calleeEndTime;
                    return h.calleeEndTime = n,
                    t
                }
                ))
            }
            var h = {
                promise: m,
                calleeEndTime: null
            };
            return l(h),
            m
        }
        ,
        e.prototype.addInvokeListener = function() {
            for (var e = this, t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n];
            return this._invokeListeners.add(t),
            function() {
                e._invokeListeners.delete(t)
            }
        }
        ,
        e.prototype.onInvoke = function(e) {
            var t = this;
            return this._onInvoke = e,
            function() {
                t._onInvoke === e && (t._onInvoke = null)
            }
        }
        ,
        e
    }();
    function a(e, t) {
        var n = typeof t;
        return Array.isArray(t) ? function(e, t) {
            if (t.__fxChanged) {
                if (delete t.__fxChanged,
                Array.isArray(e))
                    for (var n = 0; n < t.length; n++)
                        t[n] = a(e[n], t[n]);
                return t
            }
            return e
        }(e, t) : "object" === n && null !== t ? function(e, t) {
            if (t.__fxChanged || void 0 === e) {
                if (delete t.__fxChanged,
                "object" == typeof e && null !== e)
                    for (var n in t)
                        t[n] = a(e[n], t[n]);
                return t
            }
            return e
        }(e, t) : t
    }
    t.FunctionProxyImpl = o;
    var s = function() {
        function e(e, t) {
            var n = this;
            void 0 === t && (t = function(e) {
                return e(),
                null
            }
            ),
            this._subscribers = [],
            this._functionProxier = e,
            e.register("__reactView__.rootStore.subscribe", (function(e) {
                return n._state = a(n._state, e),
                t((function() {
                    return n._subscribers.forEach((function(e) {
                        return e()
                    }
                    )),
                    null
                }
                ))
            }
            )),
            this._initialized = new Promise((function(r) {
                e.register("__reactView__.rootStore.initialState", (function(e) {
                    return n._state = e,
                    t((function() {
                        return r(n),
                        n._initialized
                    }
                    ))
                }
                ))
            }
            ))
        }
        return e.prototype.getState = function() {
            return this._state
        }
        ,
        e.prototype.subscribe = function(e) {
            var t = this;
            return this._subscribers.push(e),
            function() {
                t._subscribers = t._subscribers.filter((function(t) {
                    return t !== e
                }
                ))
            }
        }
        ,
        e.prototype.dispatch = function(e) {
            return this._functionProxier.invoke("__reactView__.rootStore.dispatch", e).catch((function(t) {
                var n = new Error("Failed to execute dispatch " + e.type + ", most likely the data is not proxyable");
                n.stack = t.stack,
                console.error(n)
            }
            )),
            e
        }
        ,
        e.prototype.initialized = function() {
            return this._initialized
        }
        ,
        e
    }();
    t.AsyncStoreImpl = s
}
)),
define("@microsoft/azureportal-reactview/internal/InitializeIcons", ["require", "exports", "@microsoft/azureportal-reactview/Az"], (function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.initializeIcons = void 0,
    t.initializeIcons = function() {
        return __awaiter(this, void 0, void 0, (function() {
            return __generator(this, (function(e) {
                switch (e.label) {
                case 0:
                    return [4, new Promise((function(e, t) {
                        return window.require(["@uifabric/icons/lib"], e, t)
                    }
                    ))];
                case 1:
                    return (0,
                    e.sent().initializeIcons)(n.portalOrigin + "/Content/Static/Fonts/FluentIcons/"),
                    [2]
                }
            }
            ))
        }
        ))
    }
}
)),
define("@microsoft/azureportal-reactview/internal/InteractionTelemetry", ["require", "exports"], (function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.handleEvent = t.handlePivotLoad = void 0;
    var n = __InternalAzurePortal.AzInternalApi.internalApi
      , r = "TabOpened"
      , i = "TabClosed"
      , o = "OnLoad"
      , a = "MouseClick"
      , s = "KeyboardEvent";
    function u(e, t, n, r, i) {
        return {
            action: t,
            actionModifier: n,
            data: {
                index: r
            },
            name: e,
            timestamp: i
        }
    }
    function c(e, t, n, r) {
        return {
            action: "click",
            actionModifier: "mark",
            name: e,
            timestamp: t,
            data: {
                selector: r,
                type: n
            }
        }
    }
    t.handlePivotLoad = function(e) {
        for (var t = Array.from(e.children), i = 0; i < t.length; i++)
            if ("true" === t[i].getAttribute("aria-selected") && t[i].name) {
                var a = u(t[i].name.trim(), r, o, i, Date.now());
                n.addReactTelemetry(a);
                break
            }
    }
    ,
    t.handleEvent = function(e) {
        var t, o, l, d, f, m = Date.now(), p = e instanceof MouseEvent ? a : s, h = e.target, v = h.closest("[data-telemetryname]");
        if (v)
            "tabpanel" !== (null === (t = v.parentNode) || void 0 === t ? void 0 : t.getAttribute("role")) && (f = c(d = v.getAttribute("data-telemetryname").trim(), m, "custom", '[data-telemetryname="' + d + '"]'));
        else {
            var g = h.closest("button");
            if (g && !h.closest(".ms-List-cell"))
                if (g.classList.contains("ms-Button--commandBar"))
                    f = function(e, t) {
                        return {
                            action: "CommandExecuted",
                            actionModifier: "mark",
                            data: {
                                invokedFromToolbar: !0
                            },
                            name: e,
                            timestamp: t
                        }
                    }(d = null === (o = g.querySelector(".ms-Button-label")) || void 0 === o ? void 0 : o.textContent.trim(), m);
                else if (g.id.startsWith("Pivot") && "tab" === g.getAttribute("role") && g.name) {
                    var _ = Array.from(g.parentElement.children);
                    if (f = u(d = g.name.trim(), r, p, _.indexOf(g), m),
                    !("true" === g.getAttribute("aria-selected")))
                        for (var y = 0; y < _.length; y++)
                            if ("true" === _[y].getAttribute("aria-selected")) {
                                var w = u(_[y].name.trim(), i, p, y, m);
                                n.addReactTelemetry(w);
                                break
                            }
                } else {
                    var T = g.classList.contains("ms-Link");
                    f = c(d = T ? g.textContent.trim() : null === (l = g.querySelector(".ms-Button-label")) || void 0 === l ? void 0 : l.textContent.trim(), m, T ? "link" : "button", x = T ? 'button[class^="ms-Link"]' : 'button[class^="ms-Button"]:not(.ms-Button--commandBar)')
                }
            else if (!h.closest(".ms-List-cell")) {
                var b = h.closest("a");
                if (b) {
                    d = b.textContent.trim();
                    var E = b.href
                      , P = b.classList.toString().split(" ").shift()
                      , x = "a";
                    E && (x += '[href="' + E + '"]'),
                    P && (x += '[class^="' + P + '"]'),
                    f = c(d, m, "link", x)
                }
            }
        }
        f && d && n.addReactTelemetry(f)
    }
}
)),
define("_oss/lighthouse/lighthouse-core/audits/metrics/cumulative-layout-shift", ["exports"], (function(e) {
    /**
   * @license Copyright 2019 The Lighthouse Authors. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
   * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
   */
    "use strict";
    e.defaultOptions = {
        p10: .1,
        median: .25
    }
}
)),
define("_oss/lighthouse/lighthouse-core/audits/metrics/first-contentful-paint", ["exports"], (function(e) {
    /**
   * @license Copyright 2018 The Lighthouse Authors. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
   * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
   */
    "use strict";
    e.defaultOptions = {
        mobile: {
            scoring: {
                p10: 1800,
                median: 3e3
            }
        },
        desktop: {
            scoring: {
                p10: 934,
                median: 1600
            }
        }
    }
}
)),
define("_oss/lighthouse/lighthouse-core/audits/metrics/interactive", ["exports"], (function(e) {
    /**
   * @license Copyright 2017 The Lighthouse Authors. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
   * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
   */
    "use strict";
    e.defaultOptions = {
        mobile: {
            scoring: {
                p10: 3785,
                median: 7300
            }
        },
        desktop: {
            scoring: {
                p10: 2468,
                median: 4500
            }
        }
    }
}
)),
define("_oss/lighthouse/lighthouse-core/audits/metrics/largest-contentful-paint", ["exports"], (function(e) {
    /**
   * @license Copyright 2019 The Lighthouse Authors. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
   * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
   */
    "use strict";
    e.defaultOptions = {
        mobile: {
            scoring: {
                p10: 2500,
                median: 4e3
            }
        },
        desktop: {
            scoring: {
                p10: 1200,
                median: 2400
            }
        }
    }
}
)),
define("_oss/lighthouse/lighthouse-core/audits/metrics/max-potential-fid", ["exports"], (function(e) {
    /**
   * @license Copyright 2018 The Lighthouse Authors. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
   * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
   */
    "use strict";
    e.defaultOptions = {
        p10: 130,
        median: 250
    }
}
)),
define("_oss/lighthouse/lighthouse-core/audits/metrics/total-blocking-time", ["exports"], (function(e) {
    /**
   * @license Copyright 2019 The Lighthouse Authors. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
   * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
   */
    "use strict";
    e.defaultOptions = {
        mobile: {
            scoring: {
                p10: 200,
                median: 600
            }
        },
        desktop: {
            scoring: {
                p10: 150,
                median: 350
            }
        }
    }
}
)),
define("_oss/lighthouse/lighthouse-core/config/default-config", ["exports"], (function(e) {
    /**
     * @license Copyright 2018 The Lighthouse Authors. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
     * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
     */
    "use strict";
    const t = {};
    e.auditRefs = [{
        id: "first-contentful-paint",
        weight: 10,
        group: "metrics",
        acronym: "FCP",
        relevantAudits: t.fcpRelevantAudits
    }, {
        id: "speed-index",
        weight: 10,
        group: "metrics",
        acronym: "SI"
    }, {
        id: "largest-contentful-paint",
        weight: 25,
        group: "metrics",
        acronym: "LCP",
        relevantAudits: t.lcpRelevantAudits
    }, {
        id: "interactive",
        weight: 10,
        group: "metrics",
        acronym: "TTI"
    }, {
        id: "total-blocking-time",
        weight: 30,
        group: "metrics",
        acronym: "TBT",
        relevantAudits: t.tbtRelevantAudits
    }, {
        id: "cumulative-layout-shift",
        weight: 15,
        group: "metrics",
        acronym: "CLS",
        relevantAudits: t.clsRelevantAudits
    }]
}
)),
define("_oss/lighthouse/lighthouse-core/lib/statistics", ["exports"], (function(e) {
    /**
 * @license Copyright 2017 The Lighthouse Authors. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
    "use strict";
    e.getLogNormalScore = function({median: e, p10: t}, n) {
        if (e <= 0)
            throw new Error("median must be greater than zero");
        if (t <= 0)
            throw new Error("p10 must be greater than zero");
        if (t >= e)
            throw new Error("p10 must be less than the median");
        if (n <= 0)
            return 1;
        const r = (1 - function(e) {
            const t = Math.sign(e)
              , n = 1 / (1 + .3275911 * (e = Math.abs(e)));
            return t * (1 - n * (.254829592 + n * (n * (1.421413741 + n * (1.061405429 * n - 1.453152027)) - .284496736)) * Math.exp(-e * e))
        }(.9061938024368232 * Math.log(n / e) / -Math.log(t / e))) / 2;
        return Math.min(1, Math.max(0, r))
    }
}
)),
define("@microsoft/azureportal-reactview/internal/LighthouseNormalization", ["require", "exports", "_oss/lighthouse/lighthouse-core/audits/metrics/first-contentful-paint", "_oss/lighthouse/lighthouse-core/audits/metrics/largest-contentful-paint", "_oss/lighthouse/lighthouse-core/audits/metrics/interactive", "_oss/lighthouse/lighthouse-core/audits/metrics/total-blocking-time", "_oss/lighthouse/lighthouse-core/audits/metrics/cumulative-layout-shift", "_oss/lighthouse/lighthouse-core/audits/metrics/max-potential-fid", "_oss/lighthouse/lighthouse-core/config/default-config", "_oss/lighthouse/lighthouse-core/lib/statistics"], (function(e, t, n, r, i, o, a, s, u, c) {
    "use strict";
    var l, d;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.normalizeMetric = void 0;
    var f = ((l = {}).FirstContentfulPaint = n.defaultOptions.desktop.scoring,
    l.LargestContentfulPaint = r.defaultOptions.desktop.scoring,
    l.TimeToInteractive = i.defaultOptions.desktop.scoring,
    l.TotalBlockingTime = o.defaultOptions.desktop.scoring,
    l.CumulativeLayoutShift = a.defaultOptions,
    l.MaxFirstInputDelay = s.defaultOptions,
    l)
      , m = ((d = {}).TimeToInteractive = function() {
        var e, t = p("speed-index"), n = t / (100 - t), r = function(e) {
            var t = p(e);
            return Math.round(t + t * n)
        };
        return (e = {}).FirstContentfulPaint = r("first-contentful-paint"),
        e.LargestContentfulPaint = r("largest-contentful-paint"),
        e.TimeToInteractive = r("interactive"),
        e.TotalBlockingTime = r("total-blocking-time"),
        e.CumulativeLayoutShift = r("cumulative-layout-shift"),
        e
    }(),
    d.MaxFirstInputDelay = function() {
        var e, t = (p("speed-index") + p("total-blocking-time")) / 4;
        return (e = {}).FirstContentfulPaint = p("first-contentful-paint") + t,
        e.LargestContentfulPaint = p("largest-contentful-paint") + t,
        e.CumulativeLayoutShift = p("cumulative-layout-shift") + t,
        e.MaxFirstInputDelay = p("interactive") + t,
        e
    }(),
    d);
    function p(e) {
        return u.auditRefs.find((function(t) {
            return t.id === e
        }
        )).weight
    }
    t.normalizeMetric = function(e, t, n) {
        if ("number" != typeof t)
            return null;
        var r = f[e]
          , i = m[n][e];
        if (!r || !i)
            return null;
        var o = c.getLogNormalScore(r, t);
        return {
            score: o * i,
            maxScore: i,
            utilizedPercent: 100 * o
        }
    }
}
)),
define("web-vitals", ["exports"], (function(e) {
    "use strict";
    var t = document.createElement
      , n = 0;
    document.createElement = function(e, r) {
        var i = t.call(document, e, r);
        return "template" !== e && (i.elementTiming = n++),
        i
    }
    ;
    var r = document.createElementNS;
    document.createElementNS = function(e, t, n) {
        var i = r.call(document, e, t, n);
        return i.elementTiming = 1,
        i
    }
    ;
    var i = function(e, t) {
        return {
            name: e,
            value: void 0 === t ? -1 : t,
            delta: 0,
            entries: [],
            id: "v2-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12)
        }
    }
      , o = function(e, t) {
        try {
            if (PerformanceObserver.supportedEntryTypes.includes(e)) {
                if ("first-input" === e && !("PerformanceEventTiming"in self))
                    return;
                var n = new PerformanceObserver((function(e) {
                    return e.getEntries().map(t)
                }
                ));
                return n.observe({
                    type: e,
                    buffered: !0
                }),
                n
            }
        } catch (e) {}
    }
      , a = function(e, t) {
        var n = function n(r) {
            "pagehide" !== r.type && "hidden" !== document.visibilityState || (e(r),
            t && (removeEventListener("visibilitychange", n, !0),
            removeEventListener("pagehide", n, !0)))
        };
        addEventListener("visibilitychange", n, !0),
        addEventListener("pagehide", n, !0)
    }
      , s = function(e) {
        addEventListener("pageshow", (function(t) {
            t.persisted && e(t)
        }
        ), !0)
    }
      , u = function(e, t, n) {
        var r;
        return function(i) {
            t.value >= 0 && (i || n) && (t.delta = t.value - (r || 0),
            (t.delta || void 0 === r) && (r = t.value,
            e(t)))
        }
    }
      , c = -1
      , l = function() {
        a((function(e) {
            var t = e.timeStamp;
            c = t
        }
        ), !0)
    }
      , d = function() {
        return c < 0 && (c = 1 / 0,
        l(),
        s((function() {
            setTimeout((function() {
                c = 1 / 0,
                l()
            }
            ), 0)
        }
        ))),
        {
            get firstHiddenTime() {
                return c
            },
            resetHiddenTime: function() {
                c = -1
            }
        }
    }
      , f = []
      , m = [];
    function p(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
    }
    function h(e, t, n) {
        return t && p(e.prototype, t),
        n && p(e, n),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        e
    }
    function v(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    var g = h((function e(t) {
        var n = this;
        !function(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }(this, e),
        v(this, "firstInputEvent", void 0),
        v(this, "firstInputDelay", void 0),
        v(this, "firstInputTimeStamp", void 0),
        v(this, "callbacks", void 0),
        v(this, "listenerOpts", {
            passive: !0,
            capture: !0
        }),
        v(this, "startTimeStamp", new Date),
        v(this, "recordFirstInputDelay", (function(e, t) {
            n.firstInputEvent || (n.firstInputEvent = t,
            n.firstInputDelay = e,
            n.firstInputTimeStamp = new Date,
            n.eachEventType(removeEventListener),
            n.reportFirstInputDelayIfRecordedAndValid())
        }
        )),
        v(this, "reportFirstInputDelayIfRecordedAndValid", (function() {
            if (n.firstInputDelay >= 0 && n.firstInputDelay < n.firstInputTimeStamp - n.startTimeStamp) {
                var e = {
                    entryType: "first-input",
                    name: n.firstInputEvent.type,
                    target: n.firstInputEvent.target,
                    cancelable: n.firstInputEvent.cancelable,
                    startTime: n.firstInputEvent.timeStamp,
                    processingStart: n.firstInputEvent.timeStamp + n.firstInputDelay
                };
                n.callbacks.forEach((function(t) {
                    t(e)
                }
                )),
                n.callbacks = []
            }
        }
        )),
        v(this, "onPointerDown", (function(e, t) {
            var r = function() {
                n.recordFirstInputDelay(e, t),
                o()
            }
              , i = function() {
                o()
            }
              , o = function() {
                removeEventListener("pointerup", r, n.listenerOpts),
                removeEventListener("pointercancel", i, n.listenerOpts)
            };
            addEventListener("pointerup", r, n.listenerOpts),
            addEventListener("pointercancel", i, n.listenerOpts)
        }
        )),
        v(this, "onInput", (function(e) {
            if (e.cancelable) {
                var t = (e.timeStamp > 1e12 ? new Date : performance.now()) - e.timeStamp;
                "pointerdown" == e.type ? n.onPointerDown(t, e) : n.recordFirstInputDelay(t, e)
            }
        }
        )),
        v(this, "eachEventType", (function(e) {
            ["mousedown", "keydown", "touchstart", "pointerdown"].forEach((function(t) {
                return e(t, n.onInput, n.listenerOpts)
            }
            ))
        }
        )),
        this.firstInputDelay = -1,
        this.firstInputEvent = null,
        this.eachEventType(addEventListener),
        this.callbacks = [t],
        this.reportFirstInputDelayIfRecordedAndValid()
    }
    ));
    e.getCLS = function(e, t) {
        var n, r = -1;
        n = function(e) {
            r = e.value
        }
        ,
        m.push(n);
        var c, l = function(t) {
            r > -1 && e(t)
        }, d = i("CLS", 0), f = 0, p = [], h = function(e) {
            if (!e.hadRecentInput) {
                var t = p[0]
                  , n = p[p.length - 1];
                f && e.startTime - n.startTime < 1e3 && e.startTime - t.startTime < 5e3 ? (f += e.value,
                p.push(e)) : (f = e.value,
                p = [e]),
                f > d.value && (d.value = f,
                d.entries = p,
                c())
            }
        }, v = o("layout-shift", h);
        v && (c = u(l, d, t),
        a((function() {
            v.takeRecords().map(h),
            c(!0)
        }
        )),
        s((function() {
            f = 0,
            r = -1,
            d = i("CLS", 0),
            c = u(l, d, t)
        }
        )))
    }
    ,
    e.getFCP = function(e, t) {
        f = f.filter((function(e) {
            return e.disconnect()
        }
        )),
        m = [];
        var n, r = d(), a = i("FCP"), s = performance.now(), c = o("element", (function(e) {
            c && e.name && e.name.endsWith("-paint") && e.startTime < r.firstHiddenTime && e.startTime > s && (a.value = e.startTime,
            a.entries.push(e),
            n(!0),
            m.forEach((function(e) {
                return e(a)
            }
            )),
            c && (c.disconnect(),
            c = void 0))
        }
        ));
        c && (n = u(e, a, t),
        f.push(c))
    }
    ,
    e.getFID = function(e, t) {
        var n = d()
          , r = i("FID")
          , o = u(e, r, t);
        new g((function(e) {
            e.startTime < n.firstHiddenTime && (r.value = e.processingStart - e.startTime,
            r.entries.push(e),
            o(!0))
        }
        ))
    }
    ,
    e.getLCP = function(e, t) {
        var n, r = d(), s = i("LCP"), c = performance.now(), l = [], f = o("element", (function(e) {
            return l.push(e)
        }
        ));
        if (f) {
            n = u(e, s, t);
            var m = function() {
                !function(e) {
                    if ((e = e.filter((function(e) {
                        return e.startTime > c
                    }
                    ))).every((function(e) {
                        return e.startTime < r.firstHiddenTime
                    }
                    ))) {
                        var t = e.reduce((function(e, t) {
                            var n = t.renderTime.toString()
                              , r = t.intersectionRect
                              , i = r.height
                              , o = r.width;
                            return e[n] = (e[n] || 0) + (i || 0) * (o || 0),
                            e
                        }
                        ), {})
                          , i = Object.keys(t).reduce((function(e, n) {
                            return void 0 === e || t[n] > t[e] ? n : e
                        }
                        ), void 0);
                        i && (s.value = Number.parseFloat(i)),
                        e.forEach((function(e) {
                            return s.entries.push(e)
                        }
                        )),
                        n()
                    }
                }(l),
                f.disconnect(),
                n(!0),
                r.resetHiddenTime()
            };
            return ["keydown", "click"].forEach((function(e) {
                addEventListener(e, m, {
                    once: !0,
                    capture: !0
                })
            }
            )),
            a(m, !0),
            m
        }
        return function() {}
    }
    ,
    e.getTTFB = function(e) {
        var t, n = i("TTFB");
        t = function() {
            try {
                var t = performance.getEntriesByType("navigation")[0] || function() {
                    var e = performance.timing
                      , t = {
                        entryType: "navigation",
                        startTime: 0
                    };
                    for (var n in e)
                        "navigationStart" !== n && "toJSON" !== n && (t[n] = Math.max(e[n] - e.navigationStart, 0));
                    return t
                }();
                if (n.value = n.delta = t.responseStart,
                n.value < 0 || n.value > performance.now())
                    return;
                n.entries = [t],
                e(n)
            } catch (e) {}
        }
        ,
        "complete" === document.readyState ? setTimeout(t, 0) : addEventListener("pageshow", t)
    }
    ,
    Object.defineProperty(e, "__esModule", {
        value: !0
    })
}
)),
define("@microsoft/azureportal-reactview/internal/LighthouseMetrics", ["require", "exports", "@microsoft/azureportal-reactview/internal/LighthouseNormalization", "web-vitals"], (function(e, t, n, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.getProxiedFunctionName = t.LighthouseMetricsWatcher = t.validateSample = t.timeToProfileBeforeRenderStart = void 0;
    var i = __InternalAzurePortal.AzInternalApi.internalApi
      , o = i.isFeatureEnabled;
    t.timeToProfileBeforeRenderStart = 2e3,
    t.validateSample = function(e) {
        var t = ["FirstContentfulPaint", "LargestContentfulPaint", "CumulativeLayoutShift", "TimeToInteractive", "TotalBlockingTime"].every((function(t) {
            return "number" == typeof e[t]
        }
        ))
          , n = !1;
        if (t && (null == e ? void 0 : e.data)) {
            var r = e.data
              , i = r.firstInputOrNavigationTime
              , o = r.quietWindowDuration
              , a = r.hiddenTime
              , s = e.FirstContentfulPaint
              , u = "number" == typeof e.FirstInputDelay
              , c = "number" != typeof i || u ? void 0 : i;
            n = "number" == typeof e.TimeToInteractive && "number" == typeof o && o >= 1e3 && !(!u && "number" == typeof c && "number" == typeof s && c - s < 2e3) && !("number" == typeof a && a > 0)
        }
        return {
            complete: t,
            valid: n
        }
    }
    ;
    var a = function() {
        function e(e, r, a, c) {
            var l, d, f, m, p, h, v, g, _ = this;
            this._listeners = new Set,
            this._renderStartTime = new Promise((function(e) {
                return _._resolveRenderStartTime = e
            }
            )),
            this._bladeContextPromise = i.getBladeContext(),
            this._disposeCallbacks = [],
            this.forceMeasure = (p = new Promise((function(e) {
                var t;
                l = function() {
                    !t && document.getElementById("__bladeTitleMain").click(),
                    t = !0,
                    e()
                }
            }
            )),
            v = (h = function(e) {
                return new Promise((function(t) {
                    var n = _._onMeasure((function(r, i, o, a) {
                        d = o,
                        f = a,
                        r === e && (n(),
                        t(i))
                    }
                    ))
                }
                ))
            }
            )("FirstContentfulPaint"),
            g = Promise.all([h("FirstContentfulPaint"), h("LargestContentfulPaint"), h("TimeToInteractive"), h("TotalBlockingTime")]).then((function() {
                return new Promise((function(e) {
                    setTimeout(e, 250)
                }
                ))
            }
            )).then((function() {
                m = !0
            }
            )),
            function(e) {
                return void 0 === e && (e = 8e3),
                m || Promise.all([_._renderStartTime, v]).then((function(t) {
                    var n = t[0]
                      , r = t[1];
                    if (!m && !_._disposed) {
                        var i = performance.now() - n - r;
                        if (i > e)
                            l();
                        else {
                            var o = setTimeout((function() {
                                o = null,
                                _._disposed || l()
                            }
                            ), e - i);
                            g.then((function() {
                                o && clearTimeout(o)
                            }
                            ))
                        }
                    }
                }
                )),
                Promise.race([g, p.then((function() {
                    return new Promise((function(e) {
                        setTimeout(e, 500)
                    }
                    ))
                }
                ))]).then((function() {
                    return {
                        metrics: d,
                        data: f
                    }
                }
                ))
            }
            ),
            this._onFunctionProxyInvoke = function(e, t, n) {
                return __awaiter(_, void 0, void 0, (function() {
                    var r, i, o;
                    return __generator(this, (function(a) {
                        switch (a.label) {
                        case 0:
                            r = performance.now(),
                            a.label = 1;
                        case 1:
                            return a.trys.push([1, 3, , 4]),
                            [4, t.promise];
                        case 2:
                            return i = a.sent(),
                            n && (e = n(i)),
                            [3, 4];
                        case 3:
                            return a.sent(),
                            [3, 4];
                        case 4:
                            return e && (o = t.calleeEndTime,
                            this.noteCallFromFrame(e, r, o)),
                            [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            a.addInvokeListener({
                ___ajax___batch: function(e) {
                    var t = e.parameters
                      , n = e.result;
                    return _._onFunctionProxyInvoke(s("___ajax___batch", t), n)
                },
                ___ajax___batchMultiple: function(e) {
                    var t = e.parameters
                      , n = e.result;
                    return _._onFunctionProxyInvoke(s("___ajax___batchMultiple", t), n)
                }
            }, (function(e) {
                var t = e.name
                  , n = e.result;
                return n && _._onFunctionProxyInvoke(t, n)
            }
            ));
            var y = function(e) {
                c && console.warn("Network throttling: Network requests initiated by Redux store actions cannot be accurately throttled. You will see inconsistencies in your performance timeline and Lighthouse score."),
                _._onFunctionProxyInvoke(null, e, (function(e) {
                    var t = (null == e ? void 0 : e.asyncOperations) || [];
                    return t.length > 0 ? t.join(", ") : null
                }
                ))
            };
            r.addInvokeListener({
                "__reactView__.rootStore.initialState": function(e) {
                    var t = e.result;
                    return y(t)
                },
                "__reactView__.rootStore.subscribe": function(e) {
                    var t = e.result;
                    return y(t)
                }
            }, (function(e) {
                var t = e.name
                  , n = e.result;
                return n && _._onFunctionProxyInvoke(t, n)
            }
            ));
            var w = function(r, o) {
                var a = __assign(__assign({}, r), {
                    data: {
                        quietWindowDuration: o.quietWindowDuration,
                        firstInputTime: o.firstInputTime,
                        firstInputOrNavigationTime: o.firstInputOrNavigationTime,
                        hiddenTime: o.hiddenTime,
                        interactiveTime: o.interactiveTime,
                        ajaxCalls: o.ajaxCalls,
                        longTasks: o.longTasks
                    }
                })
                  , s = t.validateSample(a);
                if (s.complete) {
                    var u = ["FirstContentfulPaint", "LargestContentfulPaint", "CumulativeLayoutShift", "TimeToInteractive", "TotalBlockingTime"].reduce((function(e, t) {
                        return e + n.normalizeMetric(t, r[t], "TimeToInteractive").score
                    }
                    ), 0);
                    a.data = __assign(__assign({}, a.data), {
                        score: u,
                        version: "1.0.0.0"
                    })
                }
                i.logLighthouse(e, __assign({
                    data: a
                }, s))
            }
              , T = this._onMeasure((function(e, t, r, i) {
                o("lighthouse").then((function(r) {
                    r && _._bladeContextPromise.then((function(r) {
                        return __awaiter(_, void 0, void 0, (function() {
                            var i, a, s;
                            return __generator(this, (function(c) {
                                switch (c.label) {
                                case 0:
                                    return [4, o("maxfid")];
                                case 1:
                                    return i = c.sent() ? "MaxFirstInputDelay" : "TimeToInteractive",
                                    a = n.normalizeMetric(e, t, i),
                                    s = __assign({
                                        value: "number" == typeof t ? u(t, "CumulativeLayoutShift" === e ? 3 : 0) : void 0
                                    }, a && {
                                        score: u(a.score, 2),
                                        maxScore: u(a.maxScore, 2),
                                        utilizedPercent: u(a.utilizedPercent, 2)
                                    }),
                                    console.info(__assign(__assign({
                                        metric: e
                                    }, s), {
                                        blade: r.id,
                                        bladeInstance: r.instanceId
                                    })),
                                    [2]
                                }
                            }
                            ))
                        }
                        ))
                    }
                    ))
                }
                )),
                w(r, i)
            }
            ));
            this._disposeCallbacks.push(T),
            this.forceMeasure(15e3).then((function(e) {
                var t = e.metrics
                  , n = e.data;
                w(t, n)
            }
            ))
        }
        return e.prototype.forceMeasureOnDispose = function() {
            document.dispatchEvent(new PageTransitionEvent("pagehide"))
        }
        ,
        e.prototype.dispose = function() {
            this._disposed = !0,
            this._disposeCallbacks.forEach((function(e) {
                return e()
            }
            ))
        }
        ,
        e.prototype.startMeasure = function(e, t) {
            var n, i = this;
            if (!(r.getLCP && r.getFCP && r.getCLS && r.getFID))
                return null;
            var o = Date.now() - e
              , a = performance.now() - o
              , s = "renderStart";
            performance.mark(s),
            this._resolveRenderStartTime(a);
            var u, c, l = 0, d = function() {
                return "hidden" === document.visibilityState && (u = performance.now())
            }, f = function() {
                d(),
                "visible" === document.visibilityState && (l += performance.now() - u)
            };
            addEventListener("visibilitychange", f),
            this._disposeCallbacks.push((function() {
                return removeEventListener("visibilitychange", f)
            }
            )),
            d();
            var m = ((n = {}).CumulativeLayoutShift = 0,
            n)
              , p = {
                longTasks: [],
                ajaxCalls: []
            }
              , h = function(t, n, r) {
                m[t] = n,
                r && (p = __assign(__assign(__assign(__assign({}, p), r), {
                    hiddenTime: l
                }), "TimeToInteractive" === t && {
                    interactiveTime: n + e
                })),
                i._listeners.forEach((function(e) {
                    return e(t, n, m, p)
                }
                ))
            }
              , v = r.getLCP((function(e) {
                var t = e.value
                  , n = e.entries
                  , r = window.performance.now();
                b(c, r),
                null == g || g();
                var i = n.filter((function(e) {
                    return "element" === e.entryType
                }
                ))
                  , o = function(e) {
                    return i.filter((function(t) {
                        return t.renderTime === e
                    }
                    )).map((function(e) {
                        return e.identifier
                    }
                    ))
                };
                h("LargestContentfulPaint", t - a, {
                    firstInputOrNavigationTime: r - a,
                    fcpElements: o(m.FirstContentfulPaint + a),
                    lcpElements: o(t)
                })
            }
            ));
            r.getFCP((function(e) {
                var t = e.value;
                performance.mark("FirstContentfulPaint"),
                performance.measure("FirstContentfulPaint", s, "FirstContentfulPaint"),
                c = t,
                h("FirstContentfulPaint", t - a)
            }
            )),
            r.getCLS((function(e) {
                var t = e.value;
                return h("CumulativeLayoutShift", t)
            }
            ), !0),
            r.getFID((function(e) {
                var t, n = e.value, r = e.entries, i = null === (t = null == r ? void 0 : r[0]) || void 0 === t ? void 0 : t.startTime;
                h("FirstInputDelay", n, i && {
                    firstInputTime: i - a
                })
            }
            )),
            this._disposeCallbacks.push(v);
            var g, _ = PerformanceObserver.supportedEntryTypes || [], y = this.measureTimeToInteractive({
                renderStartTime: a,
                logMetrics: function(e, t) {
                    h("TimeToInteractive", e.TimeToInteractive, t),
                    h("TotalBlockingTime", e.TotalBlockingTime, t),
                    h("MaxFirstInputDelay", e.MaxFirstInputDelay)
                },
                longTaskSupported: _.includes("longtask"),
                resourceTimingsSupported: _.includes("resource"),
                reactInternal: t
            }), w = y.noteLongTask, T = y.noteAjaxCall, b = y.tryLog, E = ["longtask", "resource"];
            if (E.some((function(e) {
                return _.includes(e)
            }
            ))) {
                var P = new PerformanceObserver((function(e) {
                    t.isDisposed() ? null == g || g() : e.getEntries().forEach((function(e) {
                        "longtask" === e.entryType && w(e),
                        "resource" === e.entryType && T({
                            name: e.name,
                            startTime: e.startTime,
                            duration: t.getNetworkThrottler().getDuration(e.name, e.duration),
                            nameIsUrl: !0,
                            isCustomThrottled: t.getNetworkThrottler().isMissingThrottledDuration(e.name)
                        })
                    }
                    ))
                }
                ));
                g = function() {
                    P.disconnect(),
                    g = null
                }
                ,
                P.observe({
                    entryTypes: E.filter((function(e) {
                        return _.includes(e)
                    }
                    ))
                })
            }
            return _.includes("longtask") && _.includes("resource") || b(void 0, window.performance.now()),
            {
                noteLongTask: w,
                noteAjaxCall: T
            }
        }
        ,
        e.prototype.measureTimeToInteractive = function(e) {
            var n, r = e.renderStartTime, i = e.logMetrics, o = e.longTaskSupported, a = e.resourceTimingsSupported, s = e.reactInternal, u = [], c = [], l = function(e) {
                var t = e.startTime
                  , n = e.duration
                  , r = e.name
                  , i = e.nameIsUrl
                  , o = e.isCustomThrottled;
                c.push({
                    startTime: t,
                    duration: n,
                    name: r,
                    nameIsUrl: i,
                    isCustomThrottled: o
                })
            }, d = performance.now() - r, f = Date.now() - d;
            return this._noteAjaxCallForPage = function(e, t, n) {
                l({
                    name: e,
                    startTime: t,
                    duration: n - f + r - t,
                    nameIsUrl: !1,
                    isCustomThrottled: s.getNetworkThrottler().isMissingThrottledDuration(e)
                })
            }
            ,
            {
                noteLongTask: function(e) {
                    !function(e) {
                        var t = e.startTime
                          , n = e.duration;
                        u.push({
                            startTime: t,
                            duration: n
                        })
                    }({
                        startTime: e.startTime,
                        duration: e.duration
                    })
                },
                noteAjaxCall: l,
                tryLog: function(e, s) {
                    if (!n) {
                        var l = function(a, s) {
                            var l, d = a.timeToInteractive, f = a.totalBlockingTime;
                            n = !0;
                            var m, p = function(e, n) {
                                var i = e.startTime
                                  , o = e.duration;
                                return void 0 === n && (n = 0),
                                r - (i + o) <= t.timeToProfileBeforeRenderStart && (!d || i - r <= d + n)
                            }, h = function(e) {
                                var t = e.startTime
                                  , n = e.duration
                                  , i = t - r
                                  , o = i + n;
                                return __assign(__assign({}, e), {
                                    startTime: Math.round(i),
                                    duration: Math.round(o) - Math.round(i)
                                })
                            };
                            if (e && o) {
                                m = 0;
                                var v = "number" == typeof d ? r + d : void 0;
                                u.forEach((function(t) {
                                    var n = t.startTime
                                      , r = n + t.duration
                                      , i = Math.max(n, e)
                                      , o = Math.min(v || Number.MAX_VALUE, r);
                                    (!v || i < v) && o > e && (m = Math.max(o - i, m))
                                }
                                ))
                            }
                            i(((l = {}).TimeToInteractive = d,
                            l.TotalBlockingTime = f,
                            l.MaxFirstInputDelay = m,
                            l), __assign({
                                longTasks: u.filter(p).map(h),
                                perfMeasures: performance.getEntriesByType("measure").filter(p).map((function(e) {
                                    return __assign(__assign({}, h(e)), {
                                        name: e.name
                                    })
                                }
                                )),
                                ajaxCalls: c.filter((function(e) {
                                    return p(e, 2e3)
                                }
                                )).map(h)
                            }, s && {
                                quietWindowDuration: s
                            }))
                        }
                          , d = function() {
                            return l({
                                timeToInteractive: void 0,
                                totalBlockingTime: void 0
                            })
                        };
                        if (e && o && a) {
                            var f = []
                              , m = function(e, t) {
                                var n = e.startTime
                                  , i = n + e.duration;
                                n < r && i < r || (n < s && f.push({
                                    kind: t,
                                    time: n,
                                    isStart: !0
                                }),
                                i < s && f.push({
                                    kind: t,
                                    time: i
                                }))
                            };
                            c.forEach((function(e) {
                                return m(e, 1)
                            }
                            )),
                            u.forEach((function(e) {
                                return m(e, 0)
                            }
                            )),
                            f.push({
                                kind: 0,
                                time: s,
                                isStart: !0
                            }),
                            f.sort((function(e, t) {
                                return e.time < t.time ? -1 : 1
                            }
                            ));
                            for (var p = [], h = r, v = 0, g = 0, _ = 0, y = f; _ < y.length; _++) {
                                var w = y[_]
                                  , T = w.time
                                  , b = w.kind
                                  , E = w.isStart;
                                if (E) {
                                    if (0 === b && 0 === g && v <= 2 || 1 === b && 2 === v && 0 === g) {
                                        var P = h ? Math.max(h, r) : r
                                          , x = T;
                                        x > P && p.push({
                                            startTime: P,
                                            endTime: x
                                        })
                                    }
                                } else
                                    (0 === b && 1 === g && v <= 2 || 1 === b && 3 === v && 0 === g) && (h = T);
                                1 === b && (v += E ? 1 : -1),
                                0 === b && (g += E ? 1 : -1)
                            }
                            p = p.filter((function(t) {
                                var n = t.startTime
                                  , r = t.endTime;
                                return n < s && r > e
                            }
                            )).map((function(t) {
                                var n = t.startTime
                                  , r = t.endTime;
                                return {
                                    startTime: Math.max(n, e),
                                    endTime: Math.min(r, s)
                                }
                            }
                            ));
                            var S, I = p.filter((function(e) {
                                var t = e.startTime;
                                return e.endTime - t >= 5e3
                            }
                            ))[0];
                            if (!I) {
                                var C = p.length
                                  , k = C > 0 ? p[C - 1] : null;
                                S = (null == k ? void 0 : k.endTime) === s ? k : null
                            }
                            var D = I || S
                              , z = null == D ? void 0 : D.startTime;
                            if ("number" == typeof z) {
                                var M = z - r
                                  , A = 0;
                                u.forEach((function(t) {
                                    var n = t.startTime
                                      , r = n + 50
                                      , i = n + t.duration;
                                    if (i - r > 0 && !(i <= e || r >= z)) {
                                        var o = Math.min(i, z) - Math.max(r, e);
                                        o > 0 && (A += o)
                                    }
                                }
                                )),
                                l({
                                    timeToInteractive: M,
                                    totalBlockingTime: A
                                }, D.endTime - D.startTime)
                            } else
                                d()
                        } else
                            d()
                    }
                }
            }
        }
        ,
        e.prototype.noteCallFromFrame = function(e, t, n) {
            var r;
            null === (r = this._noteAjaxCallForPage) || void 0 === r || r.call(this, e, t, n)
        }
        ,
        e.prototype._onMeasure = function(e) {
            var t = this;
            return this._listeners.add(e),
            function() {
                t._listeners.delete(e)
            }
        }
        ,
        e
    }();
    function s(e, t) {
        return "___ajax___batch" === e ? e = "batch-" + (t.setTelemetryHeader || "UNNAMED") : "___ajax___batchMultiple" === e && (e = "batchMultiple-" + (t.telemetryHeader || "UNNAMED")),
        e
    }
    function u(e, t) {
        return +e.toFixed(t)
    }
    t.LighthouseMetricsWatcher = a,
    t.getProxiedFunctionName = s
}
)),
define("@microsoft/azureportal-reactview/internal/Listeners", ["require", "exports", "@microsoft/azureportal-reactview/Az", "@microsoft/azureportal-reactview/internal/ErrorBoundary"], (function(e, t, n, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.setPrintHandler = t.setupWindowListeners = t.setupDeferredOverrides = void 0;
    var i = __InternalAzurePortal.AzInternalApi.internalApi
      , o = function(e) {
        return [e, function(t) {
            var n = t.target
              , r = !!n && n.tagName || "";
            if ("INPUT" !== r && "TEXTAREA" !== r) {
                var o = t.key
                  , a = t.code
                  , s = t.location
                  , u = t.ctrlKey
                  , c = t.shiftKey
                  , l = t.altKey
                  , d = t.metaKey
                  , f = t.repeat
                  , m = t.isComposing
                  , p = t.charCode
                  , h = t.keyCode
                  , v = t.which;
                i.proxyReactKeypress({
                    type: e,
                    event: {
                        key: o,
                        code: a,
                        location: s,
                        ctrlKey: u,
                        shiftKey: c,
                        altKey: l,
                        metaKey: d,
                        repeat: f,
                        isComposing: m,
                        charCode: p,
                        keyCode: h,
                        which: v
                    }
                })
            }
        }
        ]
    }
      , a = window.setTimeout
      , s = window.setInterval;
    t.setupDeferredOverrides = function() {
        var e = [];
        window.setTimeout = function() {
            for (var t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n];
            var r = a.apply(window, t);
            return e.push(r),
            r
        }
        ;
        var t = [];
        return window.setInterval = function() {
            for (var e = [], n = 0; n < arguments.length; n++)
                e[n] = arguments[n];
            var r = s.apply(window, e);
            return t.push(r),
            r
        }
        ,
        function() {
            e.forEach(window.clearTimeout),
            t.forEach(window.clearInterval)
        }
    }
    ,
    t.setupWindowListeners = function(e) {
        if (!window.onfocus) {
            var t = document.activeElement;
            document.addEventListener("focusin", (function() {
                document.activeElement !== document.body && (t = document.activeElement)
            }
            )),
            window.onmousedown = function() {
                !document.hasFocus() && (t = null)
            }
            ,
            window.onfocus = function() {
                var e = null == t ? void 0 : t.getBoundingClientRect();
                e && e.top >= 0 && (e.bottom <= window.innerHeight || e.bottom <= document.documentElement.clientHeight) && t.focus()
            }
            ,
            window.addEventListener("error", (function(e) {
                return r.errorHandler(e, !1)
            }
            )),
            window.addEventListener("unhandledrejection", (function(e) {
                return r.errorHandler(e, !1)
            }
            )),
            window.addEventListener.apply(window, o("keydown")),
            window.addEventListener.apply(window, o("keyup")),
            e && window.addEventListener("click", (function(e) {
                for (var t = function(e) {
                    var t = e.href;
                    t && window.require(["@microsoft/azureportal-reactview/Navigation"], (function(r) {
                        r.sanitizeLink(t).then((function(r) {
                            t !== r && n.log([{
                                area: "azureportal-reactview/internal/listeners",
                                level: 2,
                                message: "An unsanitized link was clicked on. Please migrate usage to SanitizedLink component or @microsoft/azureportal-reactview/Navigation's sanitizeLink API.",
                                timestamp: Date.now(),
                                args: [{
                                    link: t,
                                    text: e.textContent
                                }]
                            }])
                        }
                        ))
                    }
                    ))
                }, r = 0, i = e.path || [e.target]; r < i.length; r++) {
                    t(i[r])
                }
            }
            ))
        }
    }
    ,
    t.setPrintHandler = function() {
        i.addBootstrapMessageHandler(3036, (function(e) {
            e && (document.getElementById("__bladeTitleMain").textContent = e.titleMain || "",
            document.getElementById("__bladeTitleExtras").textContent = e.titleExtras || "",
            document.getElementById("__bladeSubtitle").textContent = e.subtitle || ""),
            window.print()
        }
        ))
    }
}
)),
define("@microsoft/azureportal-reactview/internal/NetworkThrottler", ["require", "exports", "@microsoft/azureportal-reactview/internal/LighthouseMetrics"], (function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.NetworkThrottler = void 0;
    var r = function() {
        function e(e) {
            var t, n = this;
            if (this._durations = e,
            this.isEnabled()) {
                this._bundleLoads = new Map;
                var r = function(e, t) {
                    var r = 0
                      , i = 0;
                    return Object.keys(n._durations).forEach((function(o) {
                        e.some((function(e) {
                            return o.includes(e)
                        }
                        )) && !t.some((function(e) {
                            return o.includes(e)
                        }
                        )) && (i++,
                        r += n._durations[o])
                    }
                    )),
                    i > 0 ? r / i : 0
                }
                  , i = r(["Content/Dynamic"], [])
                  , a = r([".css", ".svg"], [])
                  , s = r([""], [".css", ".svg", "Content/Dynamic"]);
                if (this._getDuration = function(e) {
                    return e = o(e),
                    n._durations[e] || function(e) {
                        return e.includes("Content/Dynamic") ? i : [".svg", ".css"].some((function(t) {
                            return e.includes(t)
                        }
                        )) ? a : s
                    }(e)
                }
                ,
                "undefined" != typeof PerformanceObserver && (null === (t = PerformanceObserver.supportedEntryTypes) || void 0 === t ? void 0 : t.includes("resource")))
                    (this._observer = new PerformanceObserver((function(e) {
                        e.getEntries().forEach((function(e) {
                            n._bundleLoads.get(e.name) && (n._bundleLoads.get(e.name).startTime = e.startTime)
                        }
                        ))
                    }
                    ))).observe({
                        entryTypes: ["resource"]
                    })
            }
        }
        return e.prototype.isEnabled = function() {
            return !!this._durations
        }
        ,
        e.prototype.onFunctionProxyInvoke = function(e, t, r) {
            var o = this;
            if (!this.isEnabled())
                return t;
            e = n.getProxiedFunctionName(e, r);
            var a = Date.now();
            return t.then((function(t) {
                var n, r, s = t.result, u = t.calleeEndTime;
                if ("__reactView__.rootStore.initialState" === e || "__reactView__.rootStore.subscribe" === e) {
                    var c = null === (n = s) || void 0 === n ? void 0 : n.asyncOperations;
                    (null == c ? void 0 : c.length) && (r = Math.max.apply(Math, c.map((function(e) {
                        return o._getDuration(e)
                    }
                    ))))
                } else
                    r = o._getDuration(e);
                return function(e, t) {
                    return __awaiter(o, void 0, void 0, (function() {
                        var n;
                        return __generator(this, (function(r) {
                            switch (r.label) {
                            case 0:
                                return e && (n = e - (t - a)) > 0 ? (t += n,
                                [4, i(n)]) : [3, 2];
                            case 1:
                                r.sent(),
                                r.label = 2;
                            case 2:
                                return [2, t]
                            }
                        }
                        ))
                    }
                    ))
                }(r, u).then((function(e) {
                    return {
                        result: s,
                        calleeEndTime: e
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.throttleRequest = function(e, t) {
            return this.isEnabled() ? i(this._getDuration(e)).then((function() {
                return t
            }
            )) : t
        }
        ,
        e.prototype.onPostAsyncRequest = function(e, t, n) {
            var r = this;
            return this.isEnabled() ? this.throttleRequest(e, n).then((function(n) {
                var i = n.calleeEndTime
                  , o = r._getDuration(e);
                return o && (i = n.calleeEndTime - t > o ? n.calleeEndTime : t + o),
                __assign(__assign({}, n), {
                    calleeEndTime: i
                })
            }
            )) : n
        }
        ,
        e.prototype.onResolveModule = function(e, t) {
            var n = this;
            if (this.isEnabled()) {
                var r = function() {
                    var t = n._bundleLoads.get(e);
                    if (!t || !t.startTime)
                        return 0;
                    var r = t.startTime
                      , i = t.endTime
                      , o = n._getDuration(e);
                    return Math.max(i || 0, r + o)
                }()
                  , i = performance.now();
                r > i ? setTimeout(t, r - i) : t()
            } else
                t()
        }
        ,
        e.prototype.onBundleLoad = function(e, t) {
            this.isEnabled() && (t ? this._bundleLoads.set(e, {
                startTime: performance.now()
            }) : this._bundleLoads.get(e).endTime = performance.now())
        }
        ,
        e.prototype.getDuration = function(e, t) {
            return this.isEnabled() ? Math.max(t, this._getDuration(e)) : t
        }
        ,
        e.prototype.isMissingThrottledDuration = function(e) {
            return !!this.isEnabled() && !this._durations[o(e)]
        }
        ,
        e.prototype.dispose = function() {
            var e;
            null === (e = this._observer) || void 0 === e || e.disconnect()
        }
        ,
        e
    }();
    function i(e) {
        return new Promise((function(t) {
            return setTimeout(t, e)
        }
        ))
    }
    function o(e) {
        try {
            e = new URL(e).pathname
        } catch (e) {}
        return e
    }
    t.NetworkThrottler = r
}
)),
define("@microsoft/azureportal-reactview/internal/PerfTimings", ["require", "exports", "@microsoft/azureportal-reactview/internal/LighthouseMetrics"], (function(e, t, n) {
    "use strict";
    var r;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.determineVersions = t.PerfTimings = t.makeMarks = void 0;
    var i = __InternalAzurePortal.AzInternalApi
      , o = ((r = {})["@fluentui"] = [/^(?:portalalias!@fluentui(\d+)\/|@fluentui(\d*)\/)/, "7"],
    r.react = [/^(?:portalalias!react(\d+)\/|react(\d*)$)/, "16"],
    r["react-dom"] = [/^(?:portalalias!react\-dom(\d+)\/|react\-dom(\d*)$)/, "16"],
    r);
    function a(e) {
        return {
            startMark: e + "s",
            endMark: e + "e",
            measure: e
        }
    }
    t.makeMarks = a;
    var s = function() {
        function e() {
            var e = this;
            this._pendingAsyncOperations = new Map,
            this._moduleDependencies = new Map,
            this._moduleTimings = new Map,
            this._logEntries = [],
            this._reactViewInitialized = !1;
            var t = new Promise((function(t) {
                return e._resolveProfileData = t
            }
            ));
            this.getProfileData = function() {
                return t
            }
        }
        return e.prototype.onRenderStart = function(e) {
            this._renderStart = e,
            this._logEntries.unshift({
                groupName: "ReactView initialize",
                timeStamp: e
            })
        }
        ,
        e.prototype.perfTimer = function(e, t) {
            var n = this
              , r = a(t || e)
              , i = r.startMark
              , o = r.endMark
              , s = r.measure;
            return performance.mark(i),
            this.addEntries([{
                groupName: e,
                name: t,
                timeStamp: Date.now(),
                isAsyncStart: !0
            }]),
            function() {
                performance.mark(o),
                performance.measure(s, i, o),
                n.addEntries([{
                    groupName: e,
                    name: t,
                    timeStamp: Date.now(),
                    isAsyncEnd: !0
                }])
            }
        }
        ,
        e.prototype.onRootModuleLoadStart = function(e) {
            this.addEntries([{
                groupName: c(e),
                timeStamp: Date.now(),
                isAsyncStart: !0
            }])
        }
        ,
        e.prototype.onRootModuleLoadEnd = function(e, t) {
            var n = this
              , r = c(e)
              , i = [];
            this._moduleDependencies.has(e) && this._moduleDependencies.get(e).forEach((function(e) {
                if (n._moduleTimings.has(e)) {
                    var t = e
                      , o = n._moduleTimings.get(e)
                      , a = o[0]
                      , s = o[1];
                    a && s && i.push({
                        groupName: r,
                        name: t,
                        timeStamp: a
                    }, {
                        groupName: r,
                        name: t,
                        timeStamp: s
                    })
                }
            }
            )),
            i.push({
                groupName: r,
                timeStamp: t,
                isAsyncEnd: !0
            }),
            this.addEntries(i)
        }
        ,
        e.prototype.onModuleDependencyStateChange = function(e, t, n) {
            if (n && !this._moduleDependencies.has(n) && this._moduleDependencies.set(n, new Set),
            n && this._moduleDependencies.get(n).add(e),
            0 === t)
                this._moduleTimings.has(e) || this._moduleTimings.set(e, [Date.now(), void 0]);
            else if (1 === t) {
                var r = this._moduleTimings.get(e);
                r && void 0 === r[1] && (r[1] = Date.now())
            }
        }
        ,
        e.prototype.addEntries = function(e, t) {
            var n = this;
            t && (this._reactViewInitialized = t),
            e.forEach((function(e) {
                if (e.isAsyncStart) {
                    var t = n._pendingAsyncOperations.has(e.name) ? n._pendingAsyncOperations.get(e.name) : 0;
                    n._pendingAsyncOperations.set(e.name, t + 1)
                }
                e.isAsyncEnd && n._pendingAsyncOperations.has(e.name) && (1 === (t = n._pendingAsyncOperations.get(e.name)) ? n._pendingAsyncOperations.delete(e.name) : n._pendingAsyncOperations.set(e.name, t - 1));
                n._logEntries.push(e)
            }
            )),
            this._tryTrace()
        }
        ,
        e.prototype._tryTrace = function() {
            if (this._reactViewInitialized && 0 === this._pendingAsyncOperations.size && this._logEntries.length > 0) {
                this._logEntries.sort((function(e, t) {
                    return e.timeStamp - t.timeStamp
                }
                ));
                var e = this._renderStart
                  , t = this._logEntries[this._logEntries.length - 1].timeStamp
                  , r = new Map;
                this._logEntries.forEach((function(e) {
                    r.has(e.groupName) || r.set(e.groupName, []),
                    r.get(e.groupName).push(e)
                }
                ));
                var o = function(t, n, r) {
                    return __assign({
                        name: t,
                        startTime: n - e
                    }, r > n && {
                        endTime: r - e
                    })
                }
                  , a = function(t) {
                    return e - t <= n.timeToProfileBeforeRenderStart
                }
                  , s = [];
                r.forEach((function(t, n) {
                    var r, i = t.filter((function(e) {
                        return !!e.name
                    }
                    ));
                    if (i.length) {
                        var u = []
                          , c = new Map;
                        if (i.forEach((function(e) {
                            if (c.has(e.name)) {
                                var t = e.timeStamp;
                                if (a(t)) {
                                    var n = o(e.name, c.get(e.name), e.timeStamp);
                                    u.push(n)
                                }
                            } else
                                c.set(e.name, e.timeStamp)
                        }
                        )),
                        u.length) {
                            var l = Math.min.apply(Math, u.map((function(e) {
                                return e.startTime
                            }
                            ))) + e
                              , d = Math.max.apply(Math, u.map((function(e) {
                                return "number" == typeof e.endTime ? e.endTime : e.startTime
                            }
                            ))) + e;
                            (r = o(n, l, d)).children = u
                        }
                    } else {
                        l = t[0].timeStamp,
                        d = t[t.length - 1].timeStamp;
                        a(d) && (r = o(n, l, d))
                    }
                    r && s.push(r)
                }
                ));
                var c = {
                    version: 2,
                    entries: s
                };
                i.internalApi.sendPerfTelemetry({
                    profileData: __assign(__assign({}, c), {
                        entries: c.entries.map((function(e) {
                            return l(e.name) ? __assign(__assign({}, e), e.children && {
                                children: e.children.filter((function(e) {
                                    var t = e.startTime;
                                    return e.endTime - t > 5
                                }
                                ))
                            }) : e
                        }
                        ))
                    }),
                    duration: t - e,
                    versions: u(c.entries)
                }),
                this._resolveProfileData(c),
                this._logEntries.splice(0, this._logEntries.length),
                this._reactViewInitialized = !1
            }
        }
        ,
        e
    }();
    function u(e) {
        return Object.keys(o).reduce((function(t, n) {
            return t[n] = function(t) {
                for (var n = t[0], r = t[1], i = 0, o = e; i < o.length; i++) {
                    var a = o[i];
                    if (l(a.name) && a.children)
                        for (var s = 0, u = a.children; s < u.length; s++) {
                            var c = u[s]
                              , d = n.exec(c.name);
                            if (d)
                                return d[1] || d[2] || r
                        }
                }
                return r
            }(o[n]),
            t
        }
        ), {})
    }
    function c(e) {
        return "Module: " + e
    }
    function l(e) {
        return e.startsWith("Module: ")
    }
    t.PerfTimings = s,
    t.determineVersions = u
}
)),
define("@microsoft/azureportal-reactview/internal/StoragePolyfill", ["require", "exports"], (function(e, t) {
    "use strict";
    var n;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.StoragePolyfill = void 0;
    var r = __InternalAzurePortal.AzInternalApi.internalApi
      , i = function() {
        function e(e, t) {
            this._storageKind = e,
            this._overrideWindowStorage(t)
        }
        return e.getInstance = function(t) {
            var n, r = e.StorageType[t];
            try {
                n = window[r]
            } catch (e) {}
            return n instanceof e || (n = new e(t,r)),
            n
        }
        ,
        e.prototype.initialize = function(e, t) {
            var n = this;
            return this._setData(e[this._storageKind]),
            t.push((function(e) {
                return e.storage === n._storageKind && n._setData(e.serializedStorage)
            }
            )),
            this
        }
        ,
        e.prototype.setItem = function(e, t) {
            t = String(t),
            r.setStorageItem({
                keyName: e,
                keyValue: t,
                storage: this._storageKind
            }),
            this._storage[e] = t,
            this._setData()
        }
        ,
        e.prototype.getItem = function(e) {
            var t;
            return null !== (t = this._storage[e]) && void 0 !== t ? t : null
        }
        ,
        e.prototype.removeItem = function(e) {
            void 0 !== this._storage[e] && r.removeStorageItem({
                keyName: e,
                storage: this._storageKind
            }),
            delete this._storage[e],
            this._setData()
        }
        ,
        e.prototype.clear = function() {
            r.clearStorage({
                storage: this._storageKind
            }),
            this._setData({})
        }
        ,
        e.prototype.key = function(e) {
            return this._orderedStorageKeys[e]
        }
        ,
        Object.defineProperty(e.prototype, "length", {
            get: function() {
                return this._orderedStorageKeys.length
            },
            enumerable: !1,
            configurable: !0
        }),
        e.prototype._overrideWindowStorage = function(e) {
            var t = this;
            try {
                Object.defineProperty(window, e, {
                    get: function() {
                        return t
                    }
                })
            } catch (t) {
                try {
                    window[e] = this
                } catch (e) {}
            }
        }
        ,
        e.prototype._setData = function(e) {
            this._storage = e || this._storage,
            this._orderedStorageKeys = Object.keys(this._storage).sort()
        }
        ,
        e.StorageType = ((n = {}).sessionStorage = "sessionStorage",
        n.localStorage = "localStorage",
        n),
        e
    }();
    t.StoragePolyfill = i
}
)),
define("@microsoft/azureportal-reactview/internal/ReactView", ["require", "exports", "@microsoft/azureportal-reactview/internal/DynamicReact", "@microsoft/azureportal-reactview/internal/DynamicReactDom", "@microsoft/azureportal-reactview/internal/FunctionProxy", "@microsoft/azureportal-reactview/Az", "FxInternal/Resources/ReactComponents", "@microsoft/azureportal-reactview/internal/LighthouseMetrics", "@microsoft/azureportal-reactview/internal/AjaxTelemetry", "@microsoft/azureportal-reactview/internal/PerfTimings", "@microsoft/azureportal-reactview/internal/ErrorBoundary", "@microsoft/azureportal-reactview/internal/Listeners", "@microsoft/azureportal-reactview/internal/Document", "@microsoft/azureportal-reactview/internal/InteractionTelemetry", "@microsoft/azureportal-reactview/internal/InitializeIcons", "@microsoft/azureportal-reactview/DataCache", "@microsoft/azureportal-reactview/internal/StoragePolyfill", "@microsoft/azureportal-reactview/internal/NetworkThrottler"], (function(e, t, n, r, i, o, a, s, u, c, l, d, f, m, p, h, v, g) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.ReactView = void 0;
    var _ = __InternalAzurePortal.AzInternalApi.internalApi;
    function y() {
        return new Promise((function(e, t) {
            return window.require(["@microsoft/azureportal-reactview/internal/Theming"], e, t)
        }
        ))
    }
    var w = function() {
        function e(t) {
            var n, r, p, h = this, v = t.viewName, y = t.azHostId, w = t.inContextPane, T = t.networkRequestDurations, b = t.verifyLinks, E = t.skipOverrides;
            this._functionProxy = new i.FunctionProxyImpl,
            this._baseFunctionProxy = new i.FunctionProxyImpl,
            this._renderedInRoot = 0,
            this._storageChangedHandlers = [],
            this._perfTimings = new c.PerfTimings,
            this._promiseForDisposalCount = 0,
            this._trackingPromisesForDisposal = !1,
            this._disposed = !1,
            this._disposeCallbacks = [],
            this._trackPromiseTimeout = (r = [],
            (p = {
                reset: function() {
                    return n = Date.now()
                },
                expired: function() {
                    return Date.now() - n > 3e4
                },
                onDispose: function(e) {
                    return r.push(e)
                },
                dispose: function() {
                    return r.forEach((function(e) {
                        return e()
                    }
                    ))
                }
            }).reset(),
            p),
            this._isMininimized = !1,
            this.getFunctionProxy = function() {
                return h._functionProxy
            }
            ,
            this.getBaseFunctionProxy = function() {
                return h._baseFunctionProxy
            }
            ,
            this.loadDependencies = function() {
                var e = c.makeMarks("ReactView initialize")
                  , t = e.startMark
                  , n = e.endMark
                  , r = e.measure;
                performance.mark(t);
                var i, o = [], s = new Set, u = 0, d = function() {
                    _.reportInitialized({
                        timestamp: Date.now()
                    }),
                    h._perfTimings.addEntries([{
                        groupName: r,
                        timeStamp: Date.now()
                    }], !0);
                    var e = document.querySelector("[role='tablist']");
                    e && m.handlePivotLoad(e),
                    f.revealContent(),
                    performance.mark(n),
                    performance.measure(r, t, n),
                    i = -1,
                    h._shellState = null
                }, p = function() {
                    -1 !== i && h._renderStarted && (window.clearTimeout(i),
                    0 === o.filter((function(e) {
                        return !0 === e.loading
                    }
                    )).length ? d() : i = window.setTimeout((function() {
                        u > 0 ? p() : (l.failBlade({
                            message: a.ReactError.bladeTimedOut,
                            details: a.ReactError.bladeTimedOutDetails,
                            metadata: o
                        }, a.ReactError.bladeTimedOutDetails, d),
                        console.error(o))
                    }
                    ), 2e4))
                };
                return {
                    add: function(e) {
                        var t = h._perfTimings.perfTimer("Load dependencies", e)
                          , n = o.push({
                            id: e,
                            loading: !0
                        }) - 1;
                        return p(),
                        function(e) {
                            return e && !s.has(n) && (s.add(n),
                            t()),
                            o[n].loading = "string" == typeof e ? e : !e,
                            p(),
                            e
                        }
                    },
                    keepAlive: function() {
                        return p()
                    },
                    addKeepalivePromise: function(e) {
                        u++,
                        p(),
                        e.catch((function() {}
                        )).finally((function() {
                            u--,
                            p()
                        }
                        ))
                    }
                }
            }(),
            this._viewName = v,
            this._azHostId = y,
            this._inContextPane = w,
            e._instance = this,
            o.getTheme().then((function(e) {
                return h._initialTheme = e
            }
            )),
            d.setupWindowListeners(b),
            _.resetState(),
            !E && this._trackPromiseTimeout.onDispose(d.setupDeferredOverrides()),
            !E && this.onDispose(u.interceptAjax(this)),
            this._vitalsWatcher = new s.LighthouseMetricsWatcher(y,this._functionProxy,this._baseFunctionProxy,!!T),
            this._networkThrottler = new g.NetworkThrottler(T),
            this._networkThrottler.isEnabled() && (this._functionProxy.onInvoke((function(e, t, n) {
                return h._networkThrottler.onFunctionProxyInvoke(e, t, n)
            }
            )),
            this._baseFunctionProxy.onInvoke((function(e, t, n) {
                return h._networkThrottler.onFunctionProxyInvoke(e, t, n)
            }
            )))
        }
        return e.getInstance = function(e) {
            if (!this._instance && !e) {
                var t = "ReactView has not yet been initialized.";
                console.error(t),
                o.log([{
                    level: 2,
                    message: t,
                    area: "ReactView-internal",
                    timestamp: Date.now()
                }])
            }
            return this._instance
        }
        ,
        e.prototype.getViewName = function() {
            return this._viewName
        }
        ,
        e.prototype.getNetworkThrottler = function() {
            return this._networkThrottler
        }
        ,
        e.prototype.getInitialTheme = function() {
            return this._initialTheme
        }
        ,
        e.prototype.getAzHostId = function() {
            return this._azHostId
        }
        ,
        e.prototype.getIsMinimized = function() {
            return this._isMininimized
        }
        ,
        e.prototype.startLighthouseMeasure = function(e) {
            return this._vitalsWatcher.startMeasure(e, this)
        }
        ,
        e.prototype.noteCallFromFrame = function(e, t, n) {
            this._vitalsWatcher.noteCallFromFrame(e, t, n)
        }
        ,
        e.prototype.getStorageChangeHandler = function() {
            var e = this;
            return function(t) {
                return e._storageChangedHandlers.forEach((function(e) {
                    return e(t)
                }
                ))
            }
        }
        ,
        e.prototype.polyfillSessionStorage = function(e) {
            for (var t = 0, n = ["localStorage", "sessionStorage"]; t < n.length; t++) {
                var r = n[t];
                v.StoragePolyfill.getInstance(r).initialize(e, this._storageChangedHandlers)
            }
        }
        ,
        e.prototype.getPerfTimings = function() {
            return this._perfTimings
        }
        ,
        e.prototype.renderComponentIntoRoot = function(e, t, i, a, s) {
            return void 0 === a && (a = !1),
            void 0 === s && (s = !1),
            __awaiter(this, void 0, void 0, (function() {
                var u, c, d, f = this;
                return __generator(this, (function(m) {
                    switch (m.label) {
                    case 0:
                        return this._initialTheme = t,
                        this._renderStarted = !0,
                        [4, Promise.all([y(), p.initializeIcons()])];
                    case 1:
                        return u = m.sent()[0],
                        c = u.commonClassNames,
                        d = u.ThemedFabric,
                        [2, new Promise((function(t) {
                            var u = f.loadDependencies.add("Render time")
                              , m = n.default.createElement(d, {
                                withoutFabric: !a,
                                className: c.fullHeight
                            }, n.default.createElement(s ? l.withErrorBoundary(e, "renderComponentIntoRoot") : e, {
                                parameters: i,
                                closeView: o.closeCurrentBlade
                            }));
                            r.render(m, document.getElementById("root"), (function() {
                                f._renderedInRoot++,
                                setTimeout((function() {
                                    u(!0)
                                }
                                ), 0),
                                f._renderedInRoot > 1 && l.logReactRenderError(f._renderedInRoot, "renderComponentIntoRoot"),
                                t()
                            }
                            ))
                        }
                        ))]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.renderNodeIntoRoot = function(e, t, i) {
            return void 0 === i && (i = !1),
            __awaiter(this, void 0, void 0, (function() {
                var o, a = this;
                return __generator(this, (function(s) {
                    switch (s.label) {
                    case 0:
                        return this._initialTheme = t,
                        this._renderStarted = !0,
                        [4, Promise.all([y(), p.initializeIcons()])];
                    case 1:
                        return o = s.sent()[0].ThemedFabric,
                        [2, new Promise((function(t) {
                            var s = a.loadDependencies.add("Render time")
                              , u = n.default.createElement(o, {
                                withoutFabric: !i
                            }, e);
                            r.render(u, document.getElementById("root"), (function() {
                                a._renderedInRoot++,
                                setTimeout((function() {
                                    s(!0)
                                }
                                ), 0),
                                a._renderedInRoot > 1 && l.logReactRenderError(a._renderedInRoot, "renderNodeIntoRoot"),
                                t()
                            }
                            ))
                        }
                        ))]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.renderUntilDisposal = function(e, t) {
            r.render(e, t),
            this.onDispose((function() {
                return r.unmountComponentAtNode(t)
            }
            ))
        }
        ,
        e.prototype.trackPromiseForDisposal = function(e) {
            var t = this;
            this._trackingPromisesForDisposal || (this._trackingPromisesForDisposal = !0),
            this._promiseForDisposalCount++,
            e.catch((function() {}
            )).finally((function() {
                t._trackPromiseTimeout.reset(),
                t._promiseForDisposalCount--
            }
            ))
        }
        ,
        e.prototype.onDispose = function(e) {
            this._disposeCallbacks.push(e)
        }
        ,
        e.prototype.forceMeasure = function() {
            return this._vitalsWatcher.forceMeasure()
        }
        ,
        e.prototype.setShellState = function(e) {
            this._shellState = e
        }
        ,
        e.prototype.getGlobalSubscriptions = function() {
            var e = Date.now();
            return this._tryUsePushedShellState("globalSubscriptions", (function() {
                return _.getGlobalSubscriptions().then((function(t) {
                    return b(!1, "globalSubscriptions", Date.now() - e),
                    t
                }
                ))
            }
            ))
        }
        ,
        e.prototype.getInitialDropdownValues = function() {
            var e = Date.now();
            return this._tryUsePushedShellState("initialDropdownValues", (function() {
                return _.getInitialDropdownValues().then((function(t) {
                    return b(!1, "initialDropdownValues", Date.now() - e),
                    t
                }
                ))
            }
            ))
        }
        ,
        e.prototype.getLocationsForCreate = function(e) {
            var t = Date.now();
            return this._tryUsePushedShellState("locationsForCreate", (function() {
                return _.getLocationsForCreate(e).then((function(n) {
                    return b(!1, "locationsForCreate", Date.now() - t, {
                        resourceTypes: e.resourceTypes
                    }),
                    n
                }
                ))
            }
            ), (function(t) {
                var n = t.subscriptionId
                  , r = t.resourceTypes;
                return (e.subscriptionId || null) === (n || null) && T(e.resourceTypes, r)
            }
            ))
        }
        ,
        e.prototype.getResourceGroups = function(e) {
            var t = Date.now();
            return this._tryUsePushedShellState("resourceGroups", (function() {
                return _.getResourceGroups(e).then((function(e) {
                    return b(!1, "resourceGroups", Date.now() - t),
                    e
                }
                ))
            }
            ), (function(t) {
                var n = t.subscriptionIds;
                return T(e.subscriptionIds, n)
            }
            ))
        }
        ,
        e.prototype.dispose = function(e) {
            var t = this;
            this._vitalsWatcher.forceMeasureOnDispose(),
            this._isMininimized = !!(null == e ? void 0 : e.isMinimized);
            try {
                r.unmountComponentAtNode(document.getElementById("root"))
            } catch (e) {}
            this._disposed = !0,
            this._disposeCallbacks.forEach((function(e) {
                return e()
            }
            )),
            this._vitalsWatcher.dispose(),
            this._networkThrottler.dispose(),
            h.clear("ViewClose"),
            _.resetSelectedSubscriptions();
            var n = setInterval((function() {
                (!e.waitForPendingPromises || !t._trackingPromisesForDisposal || 0 === t._promiseForDisposalCount && t._trackPromiseTimeout.expired()) && (t._trackPromiseTimeout.dispose(),
                clearInterval(n),
                _.notifyDisposeReady(t._azHostId))
            }
            ), 1e3)
        }
        ,
        e.prototype.isDisposed = function() {
            return this._disposed
        }
        ,
        e.prototype.inContextPane = function() {
            return this._inContextPane
        }
        ,
        e.prototype.getResourceInfo = function(e, t) {
            var n = Date.now();
            return this._tryUsePushedShellState("essentialsResourceInfo", (function() {
                return _.getEssentialsResourceInfo({
                    resourceId: e,
                    includeTags: t
                }).then((function(e) {
                    return b(!1, "essentialsResourceInfo", Date.now() - n),
                    e
                }
                ))
            }
            ), (function(t) {
                return t.resourceId === e
            }
            )).then((function(e) {
                return __assign(__assign({}, e), {
                    tags: t && e.tags
                })
            }
            ))
        }
        ,
        e.prototype._tryUsePushedShellState = function(e, t, n) {
            var r, i = this, o = Date.now(), a = null === (r = this._shellState) || void 0 === r ? void 0 : r[e]();
            if (!a || n && !n(a.options))
                return t();
            var s = performance.now()
              , u = Date.now();
            return a.resultPromise.then((function() {
                var t, n = a.calleeEndTime;
                if (n > u) {
                    var r = "Get" + e.slice(0, 1).toUpperCase() + e.slice(1);
                    i.noteCallFromFrame(r, s, n)
                }
                b(!0, e, Date.now() - o, "locationsForCreate" === e && {
                    resourceTypes: null === (t = a.options) || void 0 === t ? void 0 : t.resourceTypes
                })
            }
            )).catch((function() {}
            )),
            a.resultPromise.catch((function() {
                return t()
            }
            ))
        }
        ,
        e
    }();
    function T(e, t) {
        var n = e || []
          , r = t || [];
        return n.length === r.length && (0 === n.length || n.every((function(e) {
            return r.includes(e)
        }
        )) && r.every((function(e) {
            return n.includes(e)
        }
        )))
    }
    function b(e, t, n, r) {
        o.trace([{
            action: t + "Cache",
            actionModifier: e ? "hit" : "miss",
            data: r,
            duration: n,
            timestamp: Date.now(),
            source: "ReactView.tsx"
        }])
    }
    t.ReactView = w
}
)),
define("@microsoft/azureportal-reactview/internal/BaseFunctionProxy", ["require", "exports", "@microsoft/azureportal-reactview/internal/ReactView"], (function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.getBaseFunctionProxy = void 0;
    t.getBaseFunctionProxy = function() {
        var e = function() {
            return n.ReactView.getInstance().getBaseFunctionProxy()
        };
        return {
            invoke: function() {
                for (var t = [], n = 0; n < arguments.length; n++)
                    t[n] = arguments[n];
                var r = e();
                return r.invoke.apply(r, t)
            },
            addInvokeListener: function() {
                for (var t = [], n = 0; n < arguments.length; n++)
                    t[n] = arguments[n];
                var r = e();
                return r.addInvokeListener.apply(r, t)
            },
            register: function() {
                for (var t = [], n = 0; n < arguments.length; n++)
                    t[n] = arguments[n];
                var r = e();
                return r.register.apply(r, t)
            },
            setPort: function() {
                for (var t = [], n = 0; n < arguments.length; n++)
                    t[n] = arguments[n];
                var r = e();
                return r.setPort.apply(r, t)
            }
        }
    }
}
)),
define("@microsoft/azureportal-reactview/internal/ReactInternal", ["require", "exports", "@microsoft/azureportal-reactview/internal/ReactView", "@microsoft/azureportal-reactview/internal/Listeners", "@microsoft/azureportal-reactview/internal/Document", "@microsoft/azureportal-reactview/internal/ErrorBoundary"], (function(e, t, n, r, i, o) {
    "use strict";
    var a = {
        ReactView: n.ReactView,
        errorHandler: o.errorHandler,
        injectOrResetTemplate: i.injectOrResetTemplate,
        setPrintHandler: r.setPrintHandler,
        showLoadingIndicator: i.showLoadingIndicator
    };
    return a
}
));
