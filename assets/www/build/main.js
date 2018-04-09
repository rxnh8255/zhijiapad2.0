webpackJsonp([7],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ConnectionState; });
/* unused harmony export ChannelConfig */
/* unused harmony export ChannelEvent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChannelProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__localdata_localdata__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_constants__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





/*
  Generated class for the ChannelProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var ConnectionState;
(function (ConnectionState) {
    ConnectionState[ConnectionState["Connecting"] = 1] = "Connecting";
    ConnectionState[ConnectionState["Connected"] = 2] = "Connected";
    ConnectionState[ConnectionState["Reconnecting"] = 3] = "Reconnecting";
    ConnectionState[ConnectionState["Disconnected"] = 4] = "Disconnected";
})(ConnectionState || (ConnectionState = {}));
var ChannelConfig = /** @class */ (function () {
    function ChannelConfig() {
    }
    return ChannelConfig;
}());

var ChannelEvent = /** @class */ (function () {
    function ChannelEvent() {
    }
    return ChannelEvent;
}());

var ChannelSubject = /** @class */ (function () {
    function ChannelSubject() {
    }
    return ChannelSubject;
}());
var ChannelProvider = /** @class */ (function () {
    function ChannelProvider(window, ls) {
        var _this = this;
        this.window = window;
        this.ls = ls;
        // These are used to feed the public observables 
        //
        this.connectionStateSubject = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.startingSubject = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.errorSubject = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        // An internal array to track what channel subscriptions exist 
        //
        this.subjects = new Array();
        //this.channelConfig.url = "";
        //this.channelConfig.hubName = CONFIGURATION.hubName.serverName;
        if (this.window.nativeWindow === undefined || this.window.nativeWindow.$.hubConnection === undefined) {
            throw new Error("The variable '$' or the .hubConnection() function are not defined...please check the SignalR scripts have been loaded properly");
        }
        // console.log("channelConfig.url");
        //console.log(channelConfig.url);
        // console.log(channelConfig.hubName);
        // Set up our observables
        //
        this.connectionState$ = this.connectionStateSubject.asObservable();
        this.error$ = this.errorSubject.asObservable();
        this.starting$ = this.startingSubject.asObservable();
        this.hubConnection = this.window.nativeWindow.$.hubConnection(this.window.nativeWindow.config.host);
        // this.hubConnection.logging = true;
        // this.hubConnection.EnableDetailedErrors = true;
        this.hubProxy = this.hubConnection.createHubProxy("deviceHub");
        // Define handlers for the connection state events
        //
        this.hubConnection.stateChanged(function (state) {
            var newState = ConnectionState.Connecting;
            switch (state.newState) {
                case _this.window.nativeWindow.$.signalR.connectionState.connecting:
                    newState = ConnectionState.Connecting;
                    break;
                case _this.window.nativeWindow.$.signalR.connectionState.connected:
                    newState = ConnectionState.Connected;
                    break;
                case _this.window.nativeWindow.$.signalR.connectionState.reconnecting:
                    newState = ConnectionState.Reconnecting;
                    break;
                case _this.window.nativeWindow.$.signalR.connectionState.disconnected:
                    newState = ConnectionState.Disconnected;
                    break;
            }
            // Push the new state on our subject
            //
            _this.connectionStateSubject.next(newState);
        });
        // Define handlers for any errors
        //
        this.hubConnection.error(function (error) {
            // Push the error on our subject
            //
            _this.errorSubject.next(error);
        });
        //断线后重连接
        this.hubConnection.disconnected(function (data) {
            _this.start(_this.ls.getToken()).done(function (rdata) {
            });
        });
        this.hubProxy.on("onEvent", function (channel, ev) {
            //console.log(`onEvent - ${channel} channel`, ev);
            // This method acts like a broker for incoming messages. We 
            //  check the interal array of subjects to see if one exists
            //  for the channel this came in on, and then emit the event
            //  on it. Otherwise we ignore the message.
            //
            //console.log("收到：" + channel);
            var channelSub = _this.subjects.find(function (x) {
                return x.channel === channel;
            });
            // If we found a subject then emit the event on it
            //
            if (channelSub !== undefined) {
                return channelSub.subject.next(ev);
            }
        });
    }
    /**
     * Start the SignalR connection. The starting$ stream will emit an
     * event if the connection is established, otherwise it will emit an
     * error.
     */
    ChannelProvider.prototype.start = function (token) {
        // Now we only want the connection started once, so we have a special
        //  starting$ observable that clients can subscribe to know know if
        //  if the startup sequence is done.
        //
        // If we just mapped the start() promise to an observable, then any time
        //  a client subscried to it the start sequence would be triggered
        //  again since it's a cold observable.
        //{ transport: ['webSockets','longPolling'] }
        var _this = this;
        var qs = { "Authorization": (token || "") };
        this.hubConnection.qs = qs;
        return this.hubConnection.start()
            .done(function () {
            _this.startingSubject.next();
        })
            .fail(function (error) {
            _this.startingSubject.error(error);
        });
    };
    /**
     * Get an observable that will contain the data associated with a specific
     * channel
     * */
    ChannelProvider.prototype.sub = function (channel) {
        // Try to find an observable that we already created for the requested 
        //  channel
        //
        var channelSub = this.subjects.find(function (x) {
            return x.channel === channel;
        });
        // If we already have one for this event, then just return it
        //
        if (channelSub !== undefined) {
            //console.log(`Found existing observable for ${channel} channel`)
            return channelSub.subject.asObservable();
        }
        //
        // If we're here then we don't already have the observable to provide the
        //  caller, so we need to call the server method to join the channel 
        //  and then create an observable that the caller can use to received
        //  messages.
        //
        // Now we just create our internal object so we can track this subject
        //  in case someone else wants it too
        //
        channelSub = new ChannelSubject();
        channelSub.channel = channel;
        channelSub.subject = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.subjects.push(channelSub);
        return channelSub.subject.asObservable();
    };
    // Not quite sure how to handle this (if at all) since there could be
    //  more than 1 caller subscribed to an observable we created
    //
    // unsubscribe(channel: string): Rx.Observable<any> {
    //     this.observables = this.observables.filter((x: ChannelObservable) => {
    //         return x.channel === channel;
    //     });
    // }
    /** publish provides a way for calles to emit events on any channel. In a
     * production app the server would ensure that only authorized clients can
     * actually emit the message, but here we're not concerned about that.
     */
    ChannelProvider.prototype.send = function (device_id, services) {
        console.log("Send");
        console.log(services);
        this.hubProxy.invoke("Send", device_id, services);
    };
    ChannelProvider.prototype.publish = function (message) {
        //用于测试
        this.hubProxy.invoke("Publish", message);
    };
    ChannelProvider.prototype.UpdateDeviceList = function (data) {
        //手动触发页面检测事件
        this.hubProxy.invoke("UpdateDeviceList", data);
    };
    ChannelProvider.prototype.Clone = function (from, to) {
        console.log("调用方法Clone");
        this.hubProxy.invoke("Clone", from, to).done(function (success) {
        });
    };
    ChannelProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_4__constants_constants__["b" /* SignalrWindow */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__constants_constants__["b" /* SignalrWindow */],
            __WEBPACK_IMPORTED_MODULE_2__localdata_localdata__["a" /* LocaldataProvider */]])
    ], ChannelProvider);
    return ChannelProvider;
}());

//# sourceMappingURL=channel.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_constants__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__httpclient_httpclient__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the LoginProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var LoginProvider = /** @class */ (function () {
    function LoginProvider(http) {
        this.http = http;
    }
    // testSignalr():void {
    //   this.channelService.hubProxy.invoke("GetFamilys");
    // }
    //登录发送短信验证码 scene //场景id:1注册时首次验证手机，2修改绑定手机，3验证新手机{token = "13413"}
    LoginProvider.prototype.LoginSendCode = function (phonenumber, scene) {
        var me = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Account/LoginSendCode';
        return this.http.post(me, { mobile: phonenumber, scene: scene }).map(this.extractData);
    };
    //发送短信验证码 scene //场景id:1注册时首次验证手机，2修改绑定手机，3验证新手机
    LoginProvider.prototype.Login = function (code, scene, token, nickname, unionid, avator) {
        var me = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Account/Login';
        return this.http.post(me, { code: code, scene: scene, token: token, nickname: nickname, avator: avator, unionid: unionid }).map(this.extractData);
    };
    //微信授权登录
    LoginProvider.prototype.WeiXinLogin = function (code, state, country) {
        var me = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/weixin/WeiXinLogin';
        return this.http.post(me, { code: code, state: state, country: country }).map(this.extractData);
    };
    //获取当前用户信息  /api/account/me 以后用这个接口
    ///api/weixin/me 过时
    LoginProvider.prototype.getMyInfo = function () {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/account/me';
        return this.http.post(url, null).map(this.extractData);
        // let headers = new Headers();
        // let token = this.getToken();
        // headers.append('Authorization', token);
        // headers.append('Access-Control-Allow-Origin', '*');
        // return this.http.post(me, null, { headers: headers }).map(this.extractData);//.catch(this.handleError);
    };
    LoginProvider.prototype.updateUserFamilyId = function (familyId) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/account/updateuserfamilyid/' + familyId;
        return this.http.get(url).map(this.extractData);
    };
    //检测token是否已过期
    LoginProvider.prototype.checktoken = function () {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/account/checktoken';
        return this.http.get(url).map(this.extractData);
    };
    //获取用户家数据
    LoginProvider.prototype.getFamily = function () {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/family/GetFamilys';
        return this.http.post(url, null).map(this.extractData);
    };
    //获取用户房间数据
    LoginProvider.prototype.getRoom = function (familyId) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/room/findrooms/' + familyId;
        return this.http.post(url, null).map(this.extractData);
    };
    //获取所有产品数据
    LoginProvider.prototype.getFindProductAll = function () {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/product/findall';
        return this.http.post(url, null).map(this.extractData);
    };
    LoginProvider.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    //获取登录环境
    LoginProvider.prototype.getLoginEnvironment = function () {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/account/GetLoginEnvironment';
        return this.http.post(url, null).map(this.extractData);
    };
    //处理AIUI智能
    LoginProvider.prototype.InvokeAiui = function (familyId, data) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/aiui/InvokeAiui/' + familyId;
        return this.http.post(url, data).map(this.extractData);
    };
    LoginProvider.prototype.InvokeBaidu = function (text, session_id) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/baidu/InvokeUnit?text=' + text + "&session_id=" + session_id;
        return this.http.post(url, {}).map(this.extractData);
    };
    LoginProvider.prototype.GetBgJson = function (familyId) {
        var url = "https://oss.zhijiaiot.com/assets/demo/" + familyId + "/bg.json?t=" + new Date().getTime();
        return this.http.get(url).map(this.extractData);
    };
    LoginProvider.prototype.GetSceneJson = function (familyId) {
        var url = "https://oss.zhijiaiot.com/assets/demo/" + familyId + "/scene.json?t=" + new Date().getTime();
        return this.http.get(url).map(this.extractData);
    };
    LoginProvider.prototype.redirectToBind = function () {
        //获取当前路由
        //  let locaRouter = this._router.url;
        //获取当前url地址
        // let locaUrl = location.host;
        var redirect;
        // let ruturnHref: string;
        // ruturnHref = encodeURIComponent("http://" + locaUrl + "/#/autologin");
        console.log(location.href);
        redirect = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/weixin/redirecttobind?returnUrl=' + encodeURIComponent(location.href);
        // if (locaRouter.length > 1) {//带路由页面
        //     ruturnHref = encodeURIComponent("http://" + locaUrl + "/#/autologin?targe=" + locaRouter);
        //     redirect = CONFIGURATION.baseUrls.server + '/api/weixin/redirecttobind?returnUrl=' + ruturnHref;
        // } else {
        //     ruturnHref = encodeURIComponent("http://" + locaUrl + "/#/autologin");
        //     redirect = CONFIGURATION.baseUrls.server + '/api/weixin/redirecttobind?returnUrl=' + ruturnHref;
        // }
        location.href = redirect;
    };
    ;
    LoginProvider.prototype.redirectToPath = function (path) {
        var redirect;
        redirect = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + "/app/" + path;
        location.href = redirect;
    };
    ;
    LoginProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__httpclient_httpclient__["a" /* HttpclientProvider */]])
    ], LoginProvider);
    return LoginProvider;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Emitter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Emitter = /** @class */ (function () {
    function Emitter() {
    }
    Emitter_1 = Emitter;
    /**
         * 注册事件
         * @param name 事件名称
         * @param callback 回调函数
         * @param context 上下文
         */
    Emitter.register = function (name, callback, context) {
        var observers = Emitter_1.listeners[name];
        if (observers)
            return;
        if (!observers) {
            Emitter_1.listeners[name] = [];
        }
        Emitter_1.listeners[name].push(new Observer(callback, context));
    };
    /**
     * 移除事件
     * @param name 事件名称
     * @param callback 回调函数
     * @param context 上下文
     */
    Emitter.remove = function (name, callback, context) {
        var observers = Emitter_1.listeners[name];
        if (!observers)
            return;
        var length = observers.length;
        for (var i = 0; i < length; i++) {
            var observer = observers[i];
            if (observer.compar(context)) {
                observers.splice(i, 1);
                break;
            }
        }
        if (observers.length == 0) {
            delete Emitter_1.listeners[name];
        }
    };
    /**
     * 发送事件
     * @param name 事件名称
     */
    Emitter.fire = function (name) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var observers = Emitter_1.listeners[name];
        if (!observers)
            return;
        var length = observers.length;
        for (var i = 0; i < length; i++) {
            var observer = observers[i];
            observer.notify.apply(observer, [name].concat(args));
        }
    };
    /** 监听数组 */
    Emitter.listeners = {};
    Emitter = Emitter_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], Emitter);
    return Emitter;
    var Emitter_1;
}());

/**
 * 观察者
 */
var Observer = /** @class */ (function () {
    function Observer(callback, context) {
        /** 回调函数 */
        this.callback = null;
        /** 上下文 */
        this.context = null;
        var self = this;
        self.callback = callback;
        self.context = context;
    }
    /**
     * 发送通知
     * @param args 不定参数
     */
    Observer.prototype.notify = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var self = this;
        (_a = self.callback).call.apply(_a, [self.context].concat(args));
        var _a;
    };
    /**
     * 上下文比较
     * @param context 上下文
     */
    Observer.prototype.compar = function (context) {
        return context == this.context;
    };
    return Observer;
}());
//# sourceMappingURL=eventemitter.js.map

/***/ }),

/***/ 117:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpclientProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__localdata_localdata__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the HttpclientProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var HttpclientProvider = /** @class */ (function () {
    function HttpclientProvider(http, ls) {
        this.http = http;
        this.ls = ls;
    }
    HttpclientProvider.prototype.createAuthorizationHeader = function (headers) {
        headers.append('Authorization', this.ls.getToken());
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('content-type', 'application/json');
    };
    HttpclientProvider.prototype.get = function (url) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        return this.http.get(url, {
            headers: headers
        });
    };
    HttpclientProvider.prototype.post = function (url, data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        return this.http.post(url, data, {
            headers: headers
        });
    };
    HttpclientProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__localdata_localdata__["a" /* LocaldataProvider */]])
    ], HttpclientProvider);
    return HttpclientProvider;
}());

//# sourceMappingURL=httpclient.js.map

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../components/selectanfang/selectanfang.module": [
		305,
		6
	],
	"../pages/home/home.module": [
		306,
		0
	],
	"../pages/login/login.module": [
		308,
		5
	],
	"../pages/sueimiang/sueimiang.module": [
		307,
		4
	],
	"../pages/switchlight/switchlight.module": [
		310,
		1
	],
	"../pages/switchrfwy/switchrfwy.module": [
		309,
		2
	],
	"../pages/tabs/tabs.module": [
		311,
		3
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 160;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalstorageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the LocalstorageProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var LocalstorageProvider = /** @class */ (function () {
    function LocalstorageProvider() {
        if (!localStorage) {
            throw new Error('Current browser does not support Local Storage');
        }
        this.localStorage = localStorage;
    }
    LocalstorageProvider.prototype.set = function (key, value) {
        this.localStorage[key] = value;
    };
    LocalstorageProvider.prototype.get = function (key) {
        return this.localStorage[key] || false;
    };
    LocalstorageProvider.prototype.setObject = function (key, value) {
        this.localStorage[key] = JSON.stringify(value);
    };
    LocalstorageProvider.prototype.getObject = function (key) {
        return JSON.parse(this.localStorage[key] || '{}');
    };
    LocalstorageProvider.prototype.remove = function (key) {
        this.localStorage.removeItem(key);
    };
    LocalstorageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], LocalstorageProvider);
    return LocalstorageProvider;
}());

//# sourceMappingURL=localstorage.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NativeServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_app_version__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_opener__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__httpclient_httpclient__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__constants_constants__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/*
  Generated class for the NativeServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
// @NgModule({
//   providers: [AppVersion]
// })
var NativeServiceProvider = /** @class */ (function () {
    function NativeServiceProvider(platform, alertCtrl, transfer, appVersion, file, fileOpener, inAppBrowser, http) {
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.transfer = transfer;
        this.appVersion = appVersion;
        this.file = file;
        this.fileOpener = fileOpener;
        this.inAppBrowser = inAppBrowser;
        this.http = http;
        this.APP_DOWNLOAD = null; //app下载地址
    }
    //返回手机类型 0,Android  1,Ios  -1,未知
    NativeServiceProvider.prototype.iosAndAndroid = function () {
        if (this.isAndroid())
            return 0;
        else if (this.isIos())
            return 1;
        else
            return -1;
    };
    /**
    * 检查app是否需要升级
    */
    NativeServiceProvider.prototype.detectionUpgrade = function () {
        //这里连接后台获取app最新版本号,然后与当前app版本号(this.getVersionNumber())对比
        //版本号不一样就需要申请,不需要升级就return
        //alert(this.getVersionNumber());
        var _this = this;
        this.getVersionNumber().then(function (result) {
            console.log("APP版本：" + result);
            if (result != null && result != "") {
                var istype = "pad";
                // if (this.isAndroid())
                //   istype = "android";
                // else if (this.isIos())
                //   istype = "ios";
                if (istype != null && istype != "") {
                    console.log("istype:" + istype);
                    _this.getNewVersion(istype).subscribe(function (newResult) {
                        console.log(newResult);
                        if (newResult.data != null) {
                            if (newResult.data.version != null && newResult.data.version != "" && newResult.data.version != result) {
                                console.log("服务器版本：" + newResult.data.version);
                                if (newResult.data.download != null && newResult.data.download != "") {
                                    _this.APP_DOWNLOAD = newResult.data.download;
                                    _this.LevelApp();
                                }
                            }
                        }
                    });
                }
            }
        });
    };
    NativeServiceProvider.prototype.LevelApp = function () {
        var _this = this;
        this.alertCtrl.create({
            title: '升级',
            subTitle: '发现新版本,是否立即升级？',
            buttons: [{ text: '取消' },
                {
                    text: '确定',
                    handler: function () {
                        _this.downloadApp();
                    }
                }
            ]
        }).present();
    };
    /**
    * 下载安装app
    */
    NativeServiceProvider.prototype.downloadApp = function () {
        var _this = this;
        if (this.isAndroid()) {
            var alert_1 = this.alertCtrl.create({
                title: '下载进度：0%',
                enableBackdropDismiss: false,
                buttons: ['后台下载']
            });
            alert_1.present();
            var fileTransfer = this.transfer.create();
            var apk_1 = this.file.externalRootDirectory + 'android.apk'; //apk保存的目录
            fileTransfer.download(this.APP_DOWNLOAD, apk_1).then(function () {
                // console.log('window');
                // console.log(window);
                // console.log(window['install']);
                // window['install'].install(apk.replace('file://', ''));
                _this.fileOpener.open(apk_1, 'application/vnd.android.package-archive').then(function () {
                    console.log('File is opened');
                }).catch(function (e) {
                    console.log('Error openening file', e);
                });
            });
            fileTransfer.onProgress(function (event) {
                var num = Math.floor(event.loaded / event.total * 100);
                if (num === 100) {
                    alert_1.dismiss();
                }
                else {
                    var title = document.getElementsByClassName('alert-title')[0];
                    title && (title.innerHTML = '下载进度：' + num + '%');
                }
            });
        }
        if (this.isIos()) {
            this.openUrlByBrowser(this.APP_DOWNLOAD);
        }
    };
    /**
    * 通过浏览器打开url
    */
    NativeServiceProvider.prototype.openUrlByBrowser = function (url) {
        this.inAppBrowser.create(url, '_system');
    };
    /**
    * 是否真机环境
    * @return {boolean}
    */
    NativeServiceProvider.prototype.isMobile = function () {
        return this.platform.is('mobile') && !this.platform.is('mobileweb');
    };
    /**
    * 是否android真机环境
    * @return {boolean}
    */
    NativeServiceProvider.prototype.isAndroid = function () {
        return this.isMobile() && this.platform.is('android');
    };
    /**
    * 是否ios真机环境
    * @return {boolean}
    */
    NativeServiceProvider.prototype.isIos = function () {
        return this.isMobile() && (this.platform.is('ios') || this.platform.is('ipad') || this.platform.is('iphone'));
    };
    /**
    * 获得app版本号,如0.01
    * @description  对应/config.xml中version的值
    * @returns {Promise<string>}
    */
    NativeServiceProvider.prototype.getVersionNumber = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.appVersion.getVersionNumber().then(function (value) {
                resolve(value);
            }).catch(function (err) {
                console.log('getVersionNumber:' + err);
            });
        });
    };
    NativeServiceProvider.prototype.getNewVersion = function (type) {
        var me = __WEBPACK_IMPORTED_MODULE_8__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/log/FindAppVersion/' + type;
        return this.http.get(me).map(this.extractData);
    };
    NativeServiceProvider.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    NativeServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_app_version__["a" /* AppVersion */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_opener__["a" /* FileOpener */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_7__httpclient_httpclient__["a" /* HttpclientProvider */]])
    ], NativeServiceProvider);
    return NativeServiceProvider;
}());

//# sourceMappingURL=native-service.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExtendedUrlImg; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_constants_constants__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExtendedUrlImg = /** @class */ (function () {
    function ExtendedUrlImg(window) {
        this.window = window;
        this.navtype = 0;
        this.navtype = this.inApp();
    }
    //获取列表图片
    ExtendedUrlImg.prototype.getlist_64 = function (product_id) {
        if (this.navtype === 2) {
            return "assets/img/pro/" + product_id + "/list_64.jpg";
        }
        else
            return this.window.nativeWindow.config.cdn + "assets/img/pro/" + product_id + "/list_64.jpg";
    };
    //幕布图片
    ExtendedUrlImg.prototype.getFixedImg = function (val) {
        if (this.navtype === 2) {
            return "assets/img/pro/" + val;
        }
        else
            return this.window.nativeWindow.config.cdn + "assets/img/pro/" + val;
    };
    ExtendedUrlImg.prototype.inApp = function () {
        //0 微信 1.浏览器  2 app
        var ua = navigator.userAgent.toLowerCase(); //获取判断用的对象
        if (ua.indexOf("micromessenger") > -1) {
            return 0;
        }
        else if (location.href.toLowerCase().indexOf('http') == 0) {
            return 1;
        }
        else {
            return 2;
        }
    };
    ExtendedUrlImg = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_constants_constants__["b" /* SignalrWindow */]])
    ], ExtendedUrlImg);
    return ExtendedUrlImg;
}());

//# sourceMappingURL=extendedurlimg.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EquipmentProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_constants__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__httpclient_httpclient__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the EquipmentProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var EquipmentProvider = /** @class */ (function () {
    function EquipmentProvider(http) {
        this.http = http;
    }
    //控制门铃设备
    EquipmentProvider.prototype.SendDoorbell = function (gateway_device_id, code) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/door/doorbellsend';
        return this.http.post(url, { gateway_device_id: gateway_device_id, code: code }).map(this.extractData);
    };
    //控制Zwave开关设备
    // SendZwaveOutlet(device_id: string, port_on_off: string): any {
    //     let url = CONFIGURATION.baseUrls.server + '/api/outlet/zwavesend';
    //     return this.http.post(url, { device_id: device_id, port_on_off: port_on_off }).map(this.extractData);
    // }
    //获取设备列表
    EquipmentProvider.prototype.GetFindDevices = function (familyId) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/device/finddevices/' + familyId;
        return this.http.get(url).map(this.extractData);
    };
    EquipmentProvider.prototype.PadGetDevice = function (familyId) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/device/PadGetDevice/' + familyId;
        return this.http.get(url).map(this.extractData);
    };
    EquipmentProvider.prototype.PadFamily = function () {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + "/api/Family/GetPadFamily";
        return this.http.post(url, {}).map(this.extractData);
    };
    EquipmentProvider.prototype.FindByIdDevice = function (device_ids) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/device/findbyiddevice';
        return this.http.post(url, { device_ids: device_ids }).map(this.extractData);
    };
    //获取网管下面的设备列表 FindDeviceVersion
    EquipmentProvider.prototype.GetFindGatewayDevices = function (familyId, gatewayDeviceId) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/device/FindGatewayDevices';
        return this.http.post(url, { familyId: familyId, gatewayDeviceId: gatewayDeviceId }).map(this.extractData);
    };
    //获取设备最新版本号与当前版本号
    EquipmentProvider.prototype.FindDeviceVersion = function (device_id) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/device/FindDeviceVersion';
        return this.http.post(url, { device_id: device_id }).map(this.extractData);
    };
    //获取设备最当前版本号与窗帘的IP地址
    EquipmentProvider.prototype.FindDeviceVersionOrIP = function (device_id) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/device/FindDeviceVersionOrIP';
        return this.http.post(url, { device_id: device_id }).map(this.extractData);
    };
    //网关固件升级
    EquipmentProvider.prototype.GatewayUpgrade = function (device_id, version) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/device/GatewayUpgrade';
        return this.http.post(url, { deviceId: device_id, version: version }).map(this.extractData);
    };
    //获取门锁设备下的用户
    EquipmentProvider.prototype.GetFindDevicesUserById = function (device_id) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/device/FindDevicesUserById/' + device_id;
        return this.http.get(url).map(this.extractData);
    };
    //获取单个设备信息
    EquipmentProvider.prototype.GetFindDevicesByDeviceId = function (device_id) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/device/FindDevicesByDeviceId/' + device_id;
        return this.http.get(url).map(this.extractData);
    };
    //设备绑定
    EquipmentProvider.prototype.BindDevice = function (device_id, familyId, roomId) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/device/bind';
        return this.http.post(url, { familyId: familyId, roomId: roomId, deviceId: device_id }).map(this.extractData);
    };
    //app内绑定WIFI设备
    EquipmentProvider.prototype.BindWifiDeviceInApp = function (product_id, sn, licence, roomId, familyId) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/device/BindWifiDeviceInApp';
        return this.http.post(url, { familyId: familyId, roomId: roomId, product_id: product_id, sn: sn, licence: licence }).map(this.extractData);
    };
    //设备解绑
    EquipmentProvider.prototype.UnBindDevice = function (device_id) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/device/UnBind';
        return this.http.post(url, { deviceId: device_id }).map(this.extractData);
    };
    //删除设备
    EquipmentProvider.prototype.DeviceRemoveAndUnbundle = function (device_id) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/device/DeviceRemoveAndUnbundle';
        return this.http.post(url, { device_id: device_id }).map(this.extractData);
    };
    //获取产品类型
    EquipmentProvider.prototype.GetProducts = function () {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/device/getproducts';
        return this.http.post(url, {}).map(this.extractData);
    };
    //查询网关列表
    EquipmentProvider.prototype.FindFamilyGateways = function (familyId, product_id) {
        if (product_id === void 0) { product_id = "rf_gateway"; }
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/device/findfamilygateways';
        return this.http.post(url, { familyId: familyId, product_id: product_id }).map(this.extractData);
    };
    //通知zwave网关设备进入配网模式
    EquipmentProvider.prototype.StartZwave = function (gatewayid, dotype, product_id, id) {
        if (id === void 0) { id = 0; }
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/device/startzwavegateway';
        return this.http.post(url, { gatewayid: gatewayid, dotype: dotype, product_id: product_id, id: id }).map(this.extractData);
    };
    //通知网关设备进入学习模式
    EquipmentProvider.prototype.StartLearning = function (rftype, gatewayid, code) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/device/startlearning';
        return this.http.post(url, { rftype: rftype, gatewayid: gatewayid, code: code }).map(this.extractData);
    };
    //通知网关设备开始子设备配网 
    EquipmentProvider.prototype.StartDistributionSubDevice = function (gatewayid, type) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/device/startdistributionsubdevice';
        return this.http.post(url, { gatewayid: gatewayid, type: type }).map(this.extractData);
    };
    //添加子设备
    EquipmentProvider.prototype.SubAdd = function (type, sn, id, gatewayid) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/device/sub_add';
        return this.http.post(url, { sn: sn, id: id, type: type, gatewayid: gatewayid }).map(this.extractData);
    };
    //删除子设备
    EquipmentProvider.prototype.SubDel = function (type, deviceId) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/device/sub_del';
        return this.http.post(url, { type: type, deviceId: deviceId }).map(this.extractData);
    };
    //绑定小圆插 type 1
    EquipmentProvider.prototype.Bind24g = function (type, sn, id, gatewayid, roomid, product_id) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/device/bind24g';
        return this.http.post(url, { type: type, sn: sn, id: id, gatewayid: gatewayid, roomid: roomid, product_id: product_id }).map(this.extractData);
    };
    //结束配网
    EquipmentProvider.prototype.EndDistributionNetwork = function (gatewayid) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/device/sub_exit/' + gatewayid;
        return this.http.get(url).map(this.extractData);
    };
    //各种测试
    EquipmentProvider.prototype.test = function () {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/device/test';
        return this.http.get(url).map(this.extractData);
    };
    //绑定门磁
    EquipmentProvider.prototype.BindMagnet = function (rfcode, gatewayid, doorkeyid, roomid) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/device/bindmagnet';
        return this.http.post(url, { rfcode: rfcode, gatewayid: gatewayid, doorkeyid: doorkeyid, roomid: roomid }).map(this.extractData);
    };
    //绑定红外感应
    EquipmentProvider.prototype.BindIrsensor = function (rfcode, gatewayid, roomid, product_id) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/device/bindirsensor';
        return this.http.post(url, { rfcode: rfcode, gatewayid: gatewayid, roomid: roomid, product_id: product_id }).map(this.extractData);
    };
    //绑定门铃
    EquipmentProvider.prototype.BindDoorRing = function (rfcode, gatewayid, roomid, product_id) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/device/binddoorring';
        return this.http.post(url, { rfcode: rfcode, gatewayid: gatewayid, roomid: roomid, product_id: product_id }).map(this.extractData);
    };
    //绑定射频开关
    EquipmentProvider.prototype.BindRf_switches = function (rfcode, gatewayid, roomid) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/device/bindrfswitches';
        return this.http.post(url, { rfcode: rfcode, gatewayid: gatewayid, roomid: roomid }).map(this.extractData);
    };
    // 漏水报警器
    EquipmentProvider.prototype.BindWaterSensor = function (rfcode, gatewayid, roomid, product_id) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/device/bindwatersenser';
        return this.http.post(url, { rfcode: rfcode, gatewayid: gatewayid, roomid: roomid, product_id: product_id }).map(this.extractData);
    };
    //绑定烟雾报警器
    EquipmentProvider.prototype.BindSmoke_alarm = function (rfcode, gatewayid, roomid) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/device/bindrsmoke_alarm';
        return this.http.post(url, { rfcode: rfcode, gatewayid: gatewayid, roomid: roomid }).map(this.extractData);
    };
    //绑定可燃气体报警器
    EquipmentProvider.prototype.BindGas_alerm = function (rfcode, gatewayid, roomid, product_id) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/device/bindgas_alarm';
        return this.http.post(url, { rfcode: rfcode, gatewayid: gatewayid, roomid: roomid, product_id: product_id }).map(this.extractData);
    };
    //绑定门锁
    EquipmentProvider.prototype.BindDoorKey = function (rfcode, gatewayid, roomid) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/device/binddoorkey';
        return this.http.post(url, { rfcode: rfcode, gatewayid: gatewayid, roomid: roomid }).map(this.extractData);
    };
    //绑定电动幕布
    EquipmentProvider.prototype.BindEletraticCurtain = function (rfcode, gatewayid, roomid) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/device/bindeletriccurtain';
        return this.http.post(url, { rfcode: rfcode, gatewayid: gatewayid, roomid: roomid }).map(this.extractData);
    };
    //判断rfcode类型
    EquipmentProvider.prototype.ConfirmRfCode = function (rfcode, productid, gatewayid) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/device/confirmrfcode';
        return this.http.post(url, { rfcode: rfcode, productid: productid, gatewayid: gatewayid }).map(this.extractData);
    };
    //判断irsn
    EquipmentProvider.prototype.ConfirmIrSn = function (sn, productid, gatewayid) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/device/confirmirsn';
        return this.http.post(url, { sn: sn, productid: productid, gatewayid: gatewayid }).map(this.extractData);
    };
    //获取家下面的门磁
    EquipmentProvider.prototype.GetMenciDatef = function (familyid, gatewayid) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/device/findbymenci';
        return this.http.post(url, { familyid: familyid, gatewayid: gatewayid }).map(this.extractData);
    };
    //绑定锁对应的门磁
    EquipmentProvider.prototype.BindDoorMenci = function (doorid, magnetid) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/device/doorkeybindmagnet';
        return this.http.post(url, { doorid: doorid, magnetid: magnetid }).map(this.extractData);
    };
    //绑定zwave_out1 单开
    EquipmentProvider.prototype.BindZwave = function (gatewayid, roomid, product_id, id) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/device/bindzwave';
        return this.http.post(url, { gatewayid: gatewayid, roomid: roomid, product_id: product_id, id: id }).map(this.extractData);
    };
    //设备重命名
    EquipmentProvider.prototype.DeviceReName = function (deviceId, name) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/device/renamedevice';
        return this.http.post(url, { deviceid: deviceId, name: name }).map(this.extractData);
    };
    //设备解绑
    EquipmentProvider.prototype.DeviceUnBind = function (deviceId) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/device/UnBind';
        return this.http.post(url, { deviceId: deviceId }).map(this.extractData);
    };
    //测试获取白名单
    EquipmentProvider.prototype.TestWhiteList = function (gatewayid) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/device/testgetwhite/' + gatewayid;
        return this.http.get(url).map(this.extractData);
    };
    //测试删除zwave设备 
    EquipmentProvider.prototype.testtemp = function (id) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/device/testtemp/' + id;
        return this.http.get(url).map(this.extractData);
    };
    //推送白名单到网关
    EquipmentProvider.prototype.PushWhiteList = function (gatewayid) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/device/pushwhitelist/' + gatewayid;
        return this.http.get(url).map(this.extractData);
    };
    //开、关
    EquipmentProvider.prototype.TurnOnOffCircleOutlet = function (deviceId, isopen) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/device/circleoutletturnonoff';
        return this.http.post(url, { deviceId: deviceId, isopen: isopen }).map(this.extractData);
    };
    //开、关  
    EquipmentProvider.prototype.Singlepower = function (deviceId, isopen) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/device/singlepower';
        return this.http.post(url, { deviceId: deviceId, isopen: isopen }).map(this.extractData);
    };
    //控制设备 (product operations 定义的操作)
    EquipmentProvider.prototype.ControllByOp_type = function (deviceId, op_type) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/device/controlldevice';
        return this.http.post(url, { deviceId: deviceId, op_type: op_type }).map(this.extractData);
    };
    //改变灯带颜色
    EquipmentProvider.prototype.ChangeLightColor = function (deviceId, rgbw, time) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/device/changelightcolor';
        return this.http.post(url, { deviceId: deviceId, rgbw: rgbw, time: time }).map(this.extractData);
    };
    //改变灯带渐变时间
    EquipmentProvider.prototype.ChangeLightChangeTime = function (deviceId, time) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/device/changelightctime';
        return this.http.post(url, { deviceId: deviceId, time: time }).map(this.extractData);
    };
    //改变灯带类型
    EquipmentProvider.prototype.ChangeLighttype = function (deviceId, type) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/device/changelighttype';
        return this.http.post(url, { deviceId: deviceId, type: type }).map(this.extractData);
    };
    //创建新的分组设备 device_ids 格式 xxxxxxx,xxxxxxx,xxxxxxx
    EquipmentProvider.prototype.CreateGroupDevice = function (familyid, room_id, product_id, groupName, device_ids) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/device/creategroupdevice';
        return this.http.post(url, { familyid: familyid, room_id: room_id, product_id: product_id, groupName: groupName, device_ids: device_ids }).map(this.extractData);
    };
    // 修改分组内的设备 device_ids 格式 xxxxxxx,xxxxxxx,xxxxxxx
    EquipmentProvider.prototype.SaveDeviceToGroup = function (deviceid, device_ids) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/device/savedevicetogroup';
        return this.http.post(url, { deviceid: deviceid, device_ids: device_ids }).map(this.extractData);
    };
    // 删除分组设备
    EquipmentProvider.prototype.DeleteDeviceAsync = function (deviceid) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/device/deletedeviceasync';
        return this.http.post(url, { deviceid: deviceid }).map(this.extractData);
    };
    // 获取天气等数据
    EquipmentProvider.prototype.GetIrGatewayDatas = function (familyId) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/device/getirgatewaydatas';
        return this.http.post(url, { familyid: familyId }).map(this.extractData);
    };
    //客户端控制所有设备
    EquipmentProvider.prototype.Send = function (device_id, op_type, extendedPars) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/device/devicesend';
        return this.http.post(url, { device_id: device_id, op_type: op_type, extendedPars: extendedPars }).map(this.extractData);
    };
    //修改设备子项开关名称（适用于开关/插座等）
    EquipmentProvider.prototype.DeviceReSubinfoName = function (deviceId, names) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/device/renamedevicesubinfo';
        return this.http.post(url, { deviceid: deviceId, names: names }).map(this.extractData);
    };
    // 修改组推窗器设备状态
    EquipmentProvider.prototype.UpdateGroupWindowStatus = function (device_id, position) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/device/updategroupwindowstatus';
        return this.http.post(url, { device_id: device_id, position: position }).map(this.extractData);
    };
    //绑定空气检测仪
    EquipmentProvider.prototype.BindAirDetection = function (code, product_id, roomid) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/device/bindairdetection';
        return this.http.post(url, { code: code, product_id: product_id, roomid: roomid }).map(this.extractData);
    };
    //bindzwavegateway
    EquipmentProvider.prototype.BindZwaveGateway = function (code, product_id, roomid) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/device/bindzwavegateway';
        return this.http.post(url, { code: code, product_id: product_id, roomid: roomid }).map(this.extractData);
    };
    //获取遥控器品牌
    EquipmentProvider.prototype.GetIrBrands = function (ptype) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/device/loadirbrands/' + ptype;
        return this.http.get(url).map(this.extractData);
    };
    //获取遥控器型号
    EquipmentProvider.prototype.GetIrModels = function (productid, model, take, skip) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/device/loadirmodels';
        return this.http.post(url, { productid: productid, model: model, take: take, skip: skip }).map(this.extractData);
    };
    //获取遥控器品牌 下的红外码
    EquipmentProvider.prototype.GetIrBrandCodes = function (ptype, brand_pinyin) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/device/loadirbrandcodes/' + ptype + '/' + brand_pinyin;
        return this.http.get(url).map(this.extractData);
    };
    //选择信号之后  根据此型号的红外码组发送红外码
    EquipmentProvider.prototype.SendIrCodeByModelCode = function (productid, op_type, irgatewayId, action_code, code) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/device/sendircodebymodelcode';
        return this.http.post(url, { productid: productid, op_type: op_type, irgatewayId: irgatewayId, action_code: action_code, code: code }).map(this.extractData);
    };
    //空调以外的设备匹配红外码
    EquipmentProvider.prototype.StartTestIrcode = function (code, productid, gatewayid, key) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/device/starttestircode';
        return this.http.post(url, { code: code, productid: productid, gatewayid: gatewayid, key: key }).map(this.extractData);
    };
    //发送红外码
    EquipmentProvider.prototype.SendIrCode = function (code, gatewayid, productid, key) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/device/sendircode';
        return this.http.post(url, { code: code, gatewayid: gatewayid, productid: productid, key: key }).map(this.extractData);
    };
    //红外网关进入学习
    EquipmentProvider.prototype.StartIrgateway = function (gatewayid) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/device/startirgateway';
        return this.http.post(url, { gatewayid: gatewayid }).map(this.extractData);
    };
    //匹配红外码
    EquipmentProvider.prototype.MatchingCode = function (code, productid, gatewayid) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/device/matchingCode';
        return this.http.post(url, { code: code, productid: productid, gatewayid: gatewayid }).map(this.extractData);
    };
    //添加虚拟红外遥控器 
    EquipmentProvider.prototype.AddIrControll = function (name, code, productid, gatewayid, roomid, familyid) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/device/addircontrol';
        return this.http.post(url, { name: name, code: code, productid: productid, gatewayid: gatewayid, roomid: roomid, familyid: familyid }).map(this.extractData);
    };
    //提交未匹配到红外码的设备品牌和型号
    EquipmentProvider.prototype.ProvideBrandAndModel = function (productid, brandandmodel) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/device/addircontrol';
        return this.http.post(url, { productid: productid, brandandmodel: brandandmodel }).map(this.extractData);
    };
    //窗帘电机反转
    EquipmentProvider.prototype.UpdateDeviceCurtain = function (deviceid) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/device/UpdateDeviceCurtain/' + deviceid;
        return this.http.get(url).map(this.extractData);
    };
    //发送命令给设备
    EquipmentProvider.prototype.SendToDevice = function (deviceid, sendtype, services) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/device/SendToDevice';
        return this.http.post(url, { deviceid: deviceid, sendtype: sendtype, services: services }).map(this.extractData);
    };
    //获取窗帘,幕布开关设备
    EquipmentProvider.prototype.FindCurtainSwitchDevice = function (device_id) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/device/FindCurtainSwitchDevice';
        return this.http.post(url, { device_id: device_id }).map(this.extractData);
    };
    //获取窗帘或者是幕布已关联了的设备
    EquipmentProvider.prototype.FindCurtainAssociationSum = function (device_id) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/device/FindCurtainAssociationSum';
        return this.http.post(url, { device_id: device_id }).map(this.extractData);
    };
    //取消窗帘或者幕布开关关联
    EquipmentProvider.prototype.CancelAssociation = function (association_device_id, device_id) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/device/CancelAssociation';
        return this.http.post(url, { association_device_id: association_device_id, device_id: device_id }).map(this.extractData);
    };
    //设置窗帘开关绑定窗帘
    EquipmentProvider.prototype.SetCurtainIntelligent = function (device_id, curtainswitch) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/device/SetCurtainIntelligent';
        return this.http.post(url, { device_id: device_id, curtainswitch: curtainswitch }).map(this.extractData);
    };
    EquipmentProvider.prototype.SendCurtainIntelligent = function (device_id, op_type) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/device/SendCurtainIntelligent';
        return this.http.post(url, { device_id: device_id, op_type: op_type }).map(this.extractData);
    };
    //修改设备所属房间
    EquipmentProvider.prototype.ChangeDeviceRoom = function (deviceid, roomid) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/device/changedeviceroom/' + deviceid + "/" + roomid;
        return this.http.get(url).map(this.extractData);
    };
    //wifi设备重启
    EquipmentProvider.prototype.RebootWifiDevice = function (device_id) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/device/RebootWifiDevice';
        return this.http.post(url, { device_id: device_id }).map(this.extractData);
    };
    //获取空调数据
    EquipmentProvider.prototype.GetArcData = function (deviceid) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/device/getarcdata';
        return this.http.post(url, { deviceid: deviceid }).map(this.extractData);
    };
    //修改筒灯分组设备控制方式
    EquipmentProvider.prototype.UpdateTDDeviceToGroup = function (deviceid, cmd_type) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/device/UpdateTDDeviceToGroup';
        return this.http.post(url, { deviceid: deviceid, cmd_type: cmd_type }).map(this.extractData);
    };
    // 恢复网关数据
    EquipmentProvider.prototype.RestoreDevice = function (olddevice_id, newdevice_id) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/device/restoredevice';
        return this.http.post(url, { olddevice_id: olddevice_id, newdevice_id: newdevice_id }).map(this.extractData);
    };
    //获取单个设备信息
    EquipmentProvider.prototype.FindIdDevice = function (device_id) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/device/FindIdDevice';
        return this.http.post(url, { device_id: device_id }).map(this.extractData);
    };
    //获取设备子设备
    //[一个设备下面在页面显示二个以上的设备]
    //type值对应该子设备
    //1 RF雷达冷暖LED控制器 雷达
    EquipmentProvider.prototype.FindIdDeviceSubDevice = function (device_id, type) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/device/FindIdDeviceSubDevice';
        return this.http.post(url, { device_id: device_id, type: type }).map(this.extractData);
    };
    //雷达设置
    EquipmentProvider.prototype.UpdateRadar = function (device_id, light_enabled, light_threshold, dimmer_transit_radar, dimmer_nobody_w, dimmer_nobody_y, dimmer_somebody_w, dimmer_somebody_y, radar_time) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/device/UpdateRadar';
        return this.http.post(url, {
            device_id: device_id,
            light_enabled: light_enabled,
            light_threshold: light_threshold,
            dimmer_transit_radar: dimmer_transit_radar,
            dimmer_nobody_w: dimmer_nobody_w,
            dimmer_nobody_y: dimmer_nobody_y,
            dimmer_somebody_w: dimmer_somebody_w,
            dimmer_somebody_y: dimmer_somebody_y,
            radar_time: radar_time
        }).map(this.extractData);
    };
    //获取房间与家下面的设备信息
    EquipmentProvider.prototype.FindByRoomIdAndFamilyId = function (familyid, roomid) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/device/FindByRoomIdAndFamilyId';
        return this.http.post(url, { familyid: familyid, roomid: roomid }).map(this.extractData);
    };
    EquipmentProvider.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    EquipmentProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__httpclient_httpclient__["a" /* HttpclientProvider */]])
    ], EquipmentProvider);
    return EquipmentProvider;
}());

//# sourceMappingURL=equipment.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__filter_host__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filter_listfilter__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__filter_filter__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__filter_mystylewidth__ = __webpack_require__(268);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__filter_host__["a" /* Host */],
                __WEBPACK_IMPORTED_MODULE_2__filter_listfilter__["a" /* ListFilter */],
                __WEBPACK_IMPORTED_MODULE_3__filter_filter__["a" /* Filter */],
                __WEBPACK_IMPORTED_MODULE_4__filter_mystylewidth__["a" /* MyStyleWidthDirective */]
            ],
            imports: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__filter_host__["a" /* Host */],
                __WEBPACK_IMPORTED_MODULE_2__filter_listfilter__["a" /* ListFilter */],
                __WEBPACK_IMPORTED_MODULE_3__filter_filter__["a" /* Filter */],
                __WEBPACK_IMPORTED_MODULE_4__filter_mystylewidth__["a" /* MyStyleWidthDirective */]
            ],
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipe.module.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorPickerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes__ = __webpack_require__(215);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ColorPickerService = /** @class */ (function () {
    function ColorPickerService() {
    }
    ColorPickerService.prototype.hsla2hsva = function (hsla) {
        var h = Math.min(hsla.h, 1), s = Math.min(hsla.s, 1), l = Math.min(hsla.l, 1), a = Math.min(hsla.a, 1);
        if (l === 0) {
            return new __WEBPACK_IMPORTED_MODULE_1__classes__["b" /* Hsva */](h, 0, 0, a);
        }
        else {
            var v = l + s * (1 - Math.abs(2 * l - 1)) / 2;
            return new __WEBPACK_IMPORTED_MODULE_1__classes__["b" /* Hsva */](h, 2 * (v - l) / v, v, a);
        }
    };
    ColorPickerService.prototype.hsva2hsla = function (hsva) {
        var h = hsva.h, s = hsva.s, v = hsva.v, a = hsva.a;
        if (v === 0) {
            return new __WEBPACK_IMPORTED_MODULE_1__classes__["a" /* Hsla */](h, 0, 0, a);
        }
        else if (s === 0 && v === 1) {
            return new __WEBPACK_IMPORTED_MODULE_1__classes__["a" /* Hsla */](h, 1, 1, a);
        }
        else {
            var l = v * (2 - s) / 2;
            return new __WEBPACK_IMPORTED_MODULE_1__classes__["a" /* Hsla */](h, v * s / (1 - Math.abs(2 * l - 1)), l, a);
        }
    };
    ColorPickerService.prototype.rgbaToHsva = function (rgba) {
        var r = Math.min(rgba.r, 1), g = Math.min(rgba.g, 1), b = Math.min(rgba.b, 1), a = Math.min(rgba.a, 1);
        var max = Math.max(r, g, b), min = Math.min(r, g, b);
        var h, s, v = max;
        var d = max - min;
        s = max === 0 ? 0 : d / max;
        if (max === min) {
            h = 0;
        }
        else {
            switch (max) {
                case r:
                    h = (g - b) / d + (g < b ? 6 : 0);
                    break;
                case g:
                    h = (b - r) / d + 2;
                    break;
                case b:
                    h = (r - g) / d + 4;
                    break;
            }
            h /= 6;
        }
        return new __WEBPACK_IMPORTED_MODULE_1__classes__["b" /* Hsva */](h, s, v, a);
    };
    ColorPickerService.prototype.hsvaToRgba = function (hsva) {
        var h = hsva.h, s = hsva.s, v = hsva.v, a = hsva.a;
        var r, g, b;
        var i = Math.floor(h * 6);
        var f = h * 6 - i;
        var p = v * (1 - s);
        var q = v * (1 - f * s);
        var t = v * (1 - (1 - f) * s);
        switch (i % 6) {
            case 0:
                r = v, g = t, b = p;
                break;
            case 1:
                r = q, g = v, b = p;
                break;
            case 2:
                r = p, g = v, b = t;
                break;
            case 3:
                r = p, g = q, b = v;
                break;
            case 4:
                r = t, g = p, b = v;
                break;
            case 5:
                r = v, g = p, b = q;
                break;
        }
        return new __WEBPACK_IMPORTED_MODULE_1__classes__["c" /* Rgba */](r, g, b, a);
    };
    ColorPickerService.prototype.stringToHsva = function (colorString, hex8) {
        if (colorString === void 0) { colorString = ''; }
        if (hex8 === void 0) { hex8 = false; }
        var stringParsers = [
            {
                re: /(rgb)a?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*%?,\s*(\d{1,3})\s*%?(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                parse: function (execResult) {
                    return new __WEBPACK_IMPORTED_MODULE_1__classes__["c" /* Rgba */](parseInt(execResult[2]) / 255, parseInt(execResult[3]) / 255, parseInt(execResult[4]) / 255, isNaN(parseFloat(execResult[5])) ? 1 : parseFloat(execResult[5]));
                }
            },
            {
                re: /(hsl)a?\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                parse: function (execResult) {
                    return new __WEBPACK_IMPORTED_MODULE_1__classes__["a" /* Hsla */](parseInt(execResult[2]) / 360, parseInt(execResult[3]) / 100, parseInt(execResult[4]) / 100, isNaN(parseFloat(execResult[5])) ? 1 : parseFloat(execResult[5]));
                }
            }
        ];
        if (hex8) {
            stringParsers.push({
                re: /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})$/,
                parse: function (execResult) {
                    return new __WEBPACK_IMPORTED_MODULE_1__classes__["c" /* Rgba */](parseInt(execResult[1], 16) / 255, parseInt(execResult[2], 16) / 255, parseInt(execResult[3], 16) / 255, parseInt(execResult[4], 16) / 255);
                }
            });
        }
        else {
            stringParsers.push({
                re: /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})$/,
                parse: function (execResult) {
                    return new __WEBPACK_IMPORTED_MODULE_1__classes__["c" /* Rgba */](parseInt(execResult[1], 16) / 255, parseInt(execResult[2], 16) / 255, parseInt(execResult[3], 16) / 255, 1);
                }
            }, {
                re: /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])$/,
                parse: function (execResult) {
                    return new __WEBPACK_IMPORTED_MODULE_1__classes__["c" /* Rgba */](parseInt(execResult[1] + execResult[1], 16) / 255, parseInt(execResult[2] + execResult[2], 16) / 255, parseInt(execResult[3] + execResult[3], 16) / 255, 1);
                }
            });
        }
        colorString = colorString.toLowerCase();
        var hsva = null;
        for (var key in stringParsers) {
            if (stringParsers.hasOwnProperty(key)) {
                var parser = stringParsers[key];
                var match = parser.re.exec(colorString), color = match && parser.parse(match);
                if (color) {
                    if (color instanceof __WEBPACK_IMPORTED_MODULE_1__classes__["c" /* Rgba */]) {
                        hsva = this.rgbaToHsva(color);
                    }
                    else if (color instanceof __WEBPACK_IMPORTED_MODULE_1__classes__["a" /* Hsla */]) {
                        hsva = this.hsla2hsva(color);
                    }
                    return hsva;
                }
            }
        }
        return hsva;
    };
    ColorPickerService.prototype.outputFormat = function (hsva, outputFormat, allowHex8) {
        if (hsva.a < 1) {
            switch (outputFormat) {
                case 'hsla':
                    var hsla = this.hsva2hsla(hsva);
                    var hslaText = new __WEBPACK_IMPORTED_MODULE_1__classes__["a" /* Hsla */](Math.round((hsla.h) * 360), Math.round(hsla.s * 100), Math.round(hsla.l * 100), Math.round(hsla.a * 100) / 100);
                    return 'hsla(' + hslaText.h + ',' + hslaText.s + '%,' + hslaText.l + '%,' + hslaText.a + ')';
                default:
                    if (allowHex8 && outputFormat === 'hex')
                        return this.hexText(this.denormalizeRGBA(this.hsvaToRgba(hsva)), allowHex8);
                    var rgba = this.denormalizeRGBA(this.hsvaToRgba(hsva));
                    return 'rgba(' + rgba.r + ',' + rgba.g + ',' + rgba.b + ',' + Math.round(rgba.a * 100) / 100 + ')';
            }
        }
        else {
            switch (outputFormat) {
                case 'hsla':
                    var hsla = this.hsva2hsla(hsva);
                    var hslaText = new __WEBPACK_IMPORTED_MODULE_1__classes__["a" /* Hsla */](Math.round((hsla.h) * 360), Math.round(hsla.s * 100), Math.round(hsla.l * 100), Math.round(hsla.a * 100) / 100);
                    return 'hsl(' + hslaText.h + ',' + hslaText.s + '%,' + hslaText.l + '%)';
                case 'rgba':
                    var rgba = this.denormalizeRGBA(this.hsvaToRgba(hsva));
                    return 'rgb(' + rgba.r + ',' + rgba.g + ',' + rgba.b + ')';
                default:
                    return this.hexText(this.denormalizeRGBA(this.hsvaToRgba(hsva)), allowHex8);
            }
        }
    };
    ColorPickerService.prototype.hsvatorgba = function (hsva) {
        var rgba = this.denormalizeRGBA(this.hsvaToRgba(hsva));
        return [rgba.r, rgba.g, rgba.b, rgba.a];
    };
    ColorPickerService.prototype.hexText = function (rgba, allowHex8) {
        var hexText = '#' + ((1 << 24) | (rgba.r << 16) | (rgba.g << 8) | rgba.b).toString(16).substr(1);
        if (hexText[1] === hexText[2] && hexText[3] === hexText[4] && hexText[5] === hexText[6] && rgba.a === 1 && !allowHex8) {
            hexText = '#' + hexText[1] + hexText[3] + hexText[5];
        }
        if (allowHex8) {
            hexText += ((1 << 8) | Math.round(rgba.a * 255)).toString(16).substr(1);
        }
        return hexText;
    };
    ColorPickerService.prototype.denormalizeRGBA = function (rgba) {
        return new __WEBPACK_IMPORTED_MODULE_1__classes__["c" /* Rgba */](Math.round(rgba.r * 255), Math.round(rgba.g * 255), Math.round(rgba.b * 255), rgba.a);
    };
    ColorPickerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ColorPickerService);
    return ColorPickerService;
}());

//# sourceMappingURL=color-picker.service.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Hsva; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Hsla; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Rgba; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SliderPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SliderDimension; });
var Hsva = /** @class */ (function () {
    function Hsva(h, s, v, a) {
        this.h = h;
        this.s = s;
        this.v = v;
        this.a = a;
    }
    return Hsva;
}());

var Hsla = /** @class */ (function () {
    function Hsla(h, s, l, a) {
        this.h = h;
        this.s = s;
        this.l = l;
        this.a = a;
    }
    return Hsla;
}());

var Rgba = /** @class */ (function () {
    function Rgba(r, g, b, a) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }
    return Rgba;
}());

var SliderPosition = /** @class */ (function () {
    function SliderPosition(h, s, v, a) {
        this.h = h;
        this.s = s;
        this.v = v;
        this.a = a;
    }
    return SliderPosition;
}());

var SliderDimension = /** @class */ (function () {
    function SliderDimension(h, s, v, a) {
        this.h = h;
        this.s = s;
        this.v = v;
        this.a = a;
    }
    return SliderDimension;
}());

//# sourceMappingURL=classes.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExternalinterfaceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_constants__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__httpclient_httpclient__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__localdata_localdata__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the ExternalinterfaceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var ExternalinterfaceProvider = /** @class */ (function () {
    function ExternalinterfaceProvider(http, ls) {
        this.http = http;
        this.ls = ls;
    }
    //获取空气质量检测仪时时数据(五分钟更新一次)
    ExternalinterfaceProvider.prototype.FindAirStationDate = function (device_id) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/airstation/FindAirStationDate';
        return this.http.post(url, { device_id: device_id }).map(this.extractData);
    };
    //接口获取实时天气
    ExternalinterfaceProvider.prototype.FindWeather = function () {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/airstation/FindWeather';
        return this.http.post(url, {}).map(this.extractData);
    };
    //接口获取实时天气
    ExternalinterfaceProvider.prototype.FindChart = function (device_id, type, time) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/airstation/FindChart';
        return this.http.post(url, { device_id: device_id, type: type, time: time }).map(this.extractData);
    };
    ///列表滑动提示信息
    ExternalinterfaceProvider.prototype.UpdatePromptInformation = function () {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Family/UpdatePromptInformation';
        return this.http.get(url).map(this.extractData);
    };
    //列表滑动提示信息
    ExternalinterfaceProvider.prototype.SlideTheMessage = function (val) {
        var _this = this;
        //列表提示信息
        var info = this.ls.getPromptInformation();
        console.log(info);
        if (info.length === undefined) {
            info = [];
            //显示提示框
            this.UpdatePromptInformation().subscribe(function (data) {
                info.push(val);
                _this.ls.setPromptInformation(info);
            });
        }
        else if (info.length < 3) {
            if (!(info.indexOf(val) >= 0))
                //显示提示框
                this.UpdatePromptInformation().subscribe(function (data) {
                    info.push(val);
                    _this.ls.setPromptInformation(info);
                });
        }
    };
    ExternalinterfaceProvider.prototype.WeatherIonic = function (name) {
        var weatherico = "";
        switch (name) {
            case '晴天':
            case '晴':
                weatherico = "iconfont icon-qingtian";
                break;
            case '多云':
                weatherico = "iconfont icon-duoyun";
                break;
            case '大雨':
                weatherico = "iconfont icon-dayu";
                break;
            case '多云转阴':
                weatherico = "iconfont icon-duoyunzhuanyin";
                break;
            case '小雨':
                weatherico = "iconfont icon-xiaoyu";
                break;
            case '中雨':
                weatherico = "iconfont icon-zhongyu";
                break;
            case '暴雨':
                weatherico = "iconfont icon-baoyu";
                break;
            case '雾':
                weatherico = "iconfont icon-wu";
                break;
            case '雷阵雨':
                weatherico = "iconfont icon-leizhenyu";
                break;
            case '雾霾':
                weatherico = "iconfont icon-wumai";
                break;
            case '小雪':
                weatherico = "iconfont icon-xiaoxue";
                break;
            case '暴雪':
                weatherico = "iconfont icon-baoxue";
                break;
            case '冰雹':
                weatherico = "iconfont icon-bingbao";
                break;
            case '大雪':
                weatherico = "iconfont icon-daxue";
                break;
            case '雷阵雪':
                weatherico = "iconfont icon-leizhenxue";
                break;
            case '雨夹雪':
                weatherico = "iconfont icon-yujiaxue";
                break;
            case '中雪':
                weatherico = "iconfont icon-zhongxue";
                break;
            default:
                weatherico = "iconfont icon-duoyunzhuanyin";
                break;
        }
        return weatherico;
    };
    ExternalinterfaceProvider.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    ExternalinterfaceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__httpclient_httpclient__["a" /* HttpclientProvider */],
            __WEBPACK_IMPORTED_MODULE_4__localdata_localdata__["a" /* LocaldataProvider */]])
    ], ExternalinterfaceProvider);
    return ExternalinterfaceProvider;
}());

//# sourceMappingURL=externalinterface.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SceneProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_constants__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__httpclient_httpclient__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the SceneProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var SceneProvider = /** @class */ (function () {
    function SceneProvider(http) {
        this.http = http;
    }
    SceneProvider.prototype.ModifyIsHome = function (sceneId, is_anfang, isHome, familyId) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Scene/ModifyIsHome';
        return this.http.post(url, { sceneId: sceneId, is_anfang: is_anfang, isHome: isHome, familyId: familyId }).map(this.extractData);
    };
    SceneProvider.prototype.AddScene = function (familyId, name, jobs, isSendMsg) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Scene/AddScene';
        var jobsJsonStr = JSON.stringify(jobs);
        return this.http.post(url, { familyId: familyId, name: name, jobs: jobsJsonStr, is_send_msg: isSendMsg }).map(this.extractData);
    };
    SceneProvider.prototype.ModifyScene = function (scene_id, jobs, name, isSendMsg, familyId) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Scene/ModifyScene';
        var jobsJsonStr = JSON.stringify(jobs);
        return this.http.post(url, { scene_id: scene_id, jobs: jobsJsonStr, name: name, is_send_msg: isSendMsg, familyId: familyId }).map(this.extractData);
    };
    SceneProvider.prototype.initScene = function (familyId) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Scene/InitScene';
        return this.http.post(url, { familyId: familyId }).map(this.extractData);
    };
    SceneProvider.prototype.DelScene = function (scene_id) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Scene/DelScene';
        return this.http.post(url, { scene_id: scene_id }).map(this.extractData);
    };
    SceneProvider.prototype.GetScene = function (familyId) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Scene/FindScene';
        return this.http.post(url, { familyId: familyId }).map(this.extractData);
    };
    SceneProvider.prototype.GetSceneAndJob = function (sceneId) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Scene/GetSceneAndJob';
        return this.http.post(url, { sceneId: sceneId }).map(this.extractData);
    };
    SceneProvider.prototype.GetSceneJob = function (sceneId) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Scene/GetSceneJob';
        return this.http.post(url, { sceneId: sceneId }).map(this.extractData);
    };
    SceneProvider.prototype.ExcuteSceneJob = function (sceneId, familyId) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Scene/ExcuteScene';
        return this.http.post(url, { sceneId: sceneId, familyId: familyId }).map(this.extractData);
    };
    SceneProvider.prototype.SetAnfang = function (name, familyId) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Scene/SetAnfang';
        return this.http.post(url, { name: name, familyId: familyId }).map(this.extractData);
    };
    SceneProvider.prototype.PreExcuteSceneJob = function (jobs, familyId) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Scene/PreExcuteSceneJob';
        var jobsJsonStr = JSON.stringify(jobs);
        return this.http.post(url, { jobs: jobsJsonStr, familyId: familyId }).map(this.extractData);
    };
    SceneProvider.prototype.FindJobs = function (productId, deviceId) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Scene/FindJobs';
        return this.http.post(url, { productId: productId, deviceId: deviceId }).map(this.extractData);
    };
    SceneProvider.prototype.FindDevices = function (familyId) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Scene/FindDevices';
        return this.http.post(url, { familyId: familyId }).map(this.extractData);
    };
    SceneProvider.prototype.FindIndexListDate = function (id) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Family/findindexlistdate/' + id;
        return this.http.get(url).map(this.extractData);
    };
    SceneProvider.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    SceneProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__httpclient_httpclient__["a" /* HttpclientProvider */]])
    ], SceneProvider);
    return SceneProvider;
}());

//# sourceMappingURL=scene.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsercenterProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_constants__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__httpclient_httpclient__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the UsercenterProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var UsercenterProvider = /** @class */ (function () {
    function UsercenterProvider(http) {
        this.http = http;
    }
    UsercenterProvider.prototype.EditShareState = function (familyId, expires, enabled) {
        var me = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Account/EditShareState/' + familyId;
        return this.http.post(me, { expires: expires, enabled: enabled }).map(this.extractData);
    };
    UsercenterProvider.prototype.GetShareInfo = function (familyId) {
        var me = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Account/GetShareInfo/' + familyId;
        return this.http.post(me, {}).map(this.extractData);
    };
    UsercenterProvider.prototype.GetFamily = function (familyId) {
        var me = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Family/GetFamily/' + familyId;
        return this.http.post(me, {}).map(this.extractData);
    };
    // private handleError(error: any): Promise<any> {
    //     console.error('An error occurred', error); // for demo purposes only
    //     return Promise.reject(error.message || error);
    // }
    UsercenterProvider.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    //发送短信验证码 scene //场景id:1注册时首次验证手机，2修改绑定手机，3验证新手机{token = "13413"}
    UsercenterProvider.prototype.SendCode = function (phonenumber, scene) {
        var me = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Account/SendCode';
        return this.http.post(me, { mobile: phonenumber, scene: scene }).map(this.extractData);
    };
    //发送短信验证码 scene //场景id:0注册，1修改资料,2登录
    UsercenterProvider.prototype.VerifyCode = function (code, scene, token) {
        var me = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Account/VerifyCode';
        return this.http.post(me, { code: code, scene: scene, token: token }).map(this.extractData);
    };
    UsercenterProvider.prototype.FeedBack = function (topic, content) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Account/feedback';
        return this.http.post(url, { topic: topic, content: content }).map(this.extractData);
    };
    //修改昵称
    UsercenterProvider.prototype.SetNickName = function (nickname) {
        var me = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Account/SetNickName';
        return this.http.post(me, { nickname: nickname }).map(this.extractData);
    };
    //修改紧急联系人
    UsercenterProvider.prototype.SetEmergencymobile = function (emergencymobile) {
        var me = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Account/setemergencymobile';
        return this.http.post(me, { emergencymobile: emergencymobile }).map(this.extractData);
    };
    UsercenterProvider.prototype.uploadAvator = function (serverid) {
        var me = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Account/SetAvator';
        return this.http.post(me, { serverid: serverid }).map(this.extractData);
    };
    UsercenterProvider.prototype.SetDoorLockAvator = function (serverid, imgid) {
        var me = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Account/SetDoorLockAvator';
        return this.http.post(me, { serverid: serverid, imgid: imgid }).map(this.extractData);
    };
    //获取用户信息
    UsercenterProvider.prototype.GetUserInfo = function () {
        var me = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Account/me';
        return this.http.post(me, {}).map(this.extractData);
    };
    //家庭列表
    UsercenterProvider.prototype.GetFamilies = function () {
        var me = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Family/GetFamilys';
        return this.http.post(me, {}).map(this.extractData);
    };
    //GetFamilyDevices
    UsercenterProvider.prototype.GetFamilyDevices = function () {
        var me = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Family/GetFamilyDevices';
        return this.http.post(me, {}).map(this.extractData);
    };
    //添加
    UsercenterProvider.prototype.CreateFamily = function (name, address) {
        var me = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Family/CreateFamily';
        return this.http.post(me, { name: name, address: address }).map(this.extractData);
    };
    //重命名
    UsercenterProvider.prototype.RenameFamily = function (familyId, name, address) {
        var me = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Family/RenameFamily';
        return this.http.post(me, { familyId: familyId, name: name, address: address }).map(this.extractData);
    };
    //删除
    UsercenterProvider.prototype.DeleteFamily = function (familyId) {
        var me = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Family/DeleteFamily/' + familyId;
        return this.http.post(me, { familyId: familyId }).map(this.extractData);
    };
    //验证
    UsercenterProvider.prototype.IsValid = function (familyId, name) {
        //验证
        return true;
    };
    //获取微信config
    UsercenterProvider.prototype.getWeixinConfig = function (url) {
        var me = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/weixin/JsSdk';
        return this.http.post(me, { url: url }).map(this.extractData);
    };
    //设置管理员权限
    UsercenterProvider.prototype.SetFamilyManage = function (username, familyid) {
        var me = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Family/SetFamilyManage';
        return this.http.post(me, { username: username, familyid: familyid }).map(this.extractData);
    };
    ////////////家人 
    //获取家庭信息
    UsercenterProvider.prototype.GetFamilyMember = function (memberId) {
        // let f = this.channelService.hubProxy.invoke("GetFamily", familyId);
        // return f as FamilyModel;
    };
    //添加
    UsercenterProvider.prototype.EditRelations = function (callname, username) {
        var me = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Account/EditRelations';
        return this.http.post(me, { callname: callname, username: username }).map(this.extractData);
    };
    //添加
    UsercenterProvider.prototype.AddRelations = function (callname, phonenumber) {
        var me = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Account/CreateRelations';
        return this.http.post(me, { callname: callname, phonenumber: phonenumber }).map(this.extractData);
    };
    //删除
    UsercenterProvider.prototype.DeleteRelation = function (username) {
        var me = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Account/DeleteRelations';
        return this.http.post(me, { username: username }).map(this.extractData);
    };
    //获取家人的信息
    UsercenterProvider.prototype.GetRelationInfo = function (username) {
        var me = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Family/getrelationinfo';
        return this.http.post(me, { username: username }).map(this.extractData);
    };
    //对某个家人取消分享设备
    UsercenterProvider.prototype.CancelShared = function (username, device_id) {
        var me = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Account/cancelshared';
        return this.http.post(me, { username: username, device_id: device_id }).map(this.extractData);
    };
    //取消被分享的设备
    UsercenterProvider.prototype.CancelSharededDevice = function (device_id) {
        var me = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Account/cancelshareded';
        return this.http.post(me, { device_id: device_id }).map(this.extractData);
    };
    //分享设备
    UsercenterProvider.prototype.ShareDevices = function (username, device_ids) {
        var me = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Family/sharedevices';
        return this.http.post(me, { username: username, device_ids: device_ids }).map(this.extractData);
    };
    //分享设备
    UsercenterProvider.prototype.ShareDeviceToUsers = function (usernames, device_id) {
        var me = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Family/sharedevicestousers';
        return this.http.post(me, { usernames: usernames, device_id: device_id }).map(this.extractData);
    };
    //获取用户对应的家人信息
    UsercenterProvider.prototype.GetUserFamilyInfo = function (username) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/account/getuserinfo/' + username;
        return this.http.get(url).map(this.extractData);
    };
    //获取所有相关的设备 {owndevices:[],shareddevices:[]}
    UsercenterProvider.prototype.GetDevices = function () {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/device/FindMyAllDevices';
        return this.http.post(url, {}).map(this.extractData);
    };
    //获取指定设备的分享信息 
    UsercenterProvider.prototype.GetSharedDevice = function (device_id) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/device/getshareddevice/' + device_id;
        return this.http.get(url).map(this.extractData);
    };
    //获得分享状态 
    // GetShareInfo() {
    //     let url = CONFIGURATION.baseUrls.server + '/api/Account/GetShareInfo';
    //     return this.http.post(url, {}).map(this.extractData);
    // }
    //打开或关闭分享  1表示打开,0表示关闭
    // EditShareState(allowOrDeny: number) {
    //     let url = CONFIGURATION.baseUrls.server + '/api/Account/EditShareState/' + allowOrDeny;
    //     return this.http.post(url, {}).map(this.extractData);
    // }
    //打开或关闭分享  1表示打开,0表示关闭
    UsercenterProvider.prototype.IsDemoLogin = function () {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Account/IsDemoLogin';
        return this.http.post(url, {}).map(this.extractData);
    };
    //打开或关闭分享  1表示打开,0表示关闭
    UsercenterProvider.prototype.ResetShareQr = function () {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Account/ResetShareQr';
        return this.http.post(url, {}).map(this.extractData);
    };
    //获取好友详细信息
    UsercenterProvider.prototype.GetRelations = function () {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/account/getusers';
        return this.http.get(url).map(this.extractData);
    };
    UsercenterProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__httpclient_httpclient__["a" /* HttpclientProvider */]])
    ], UsercenterProvider);
    return UsercenterProvider;
}());

//# sourceMappingURL=usercenter.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoproviderProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__httpclient_httpclient__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_constants__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the DemoproviderProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var DemoproviderProvider = /** @class */ (function () {
    function DemoproviderProvider(http) {
        this.http = http;
    }
    //控制设备
    DemoproviderProvider.prototype.Send = function (deviceid, type, command) {
        var url = __WEBPACK_IMPORTED_MODULE_3__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/demodevice/send';
        return this.http.post(url, { deviceid: deviceid, type: type, command: command }).map(this.extractData);
    };
    //通知服务端给串口屏发送消息
    DemoproviderProvider.prototype.SendSerialPortData = function (deviceid, command, val) {
        if (val === void 0) { val = 0; }
        var url = __WEBPACK_IMPORTED_MODULE_3__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/demodevice/sendtohmi';
        return this.http.post(url, { deviceid: deviceid, command: command, val: val }).map(this.extractData);
    };
    DemoproviderProvider.prototype.SaveNewWind = function (deviceid, pm25, voc, temperature) {
        var url = __WEBPACK_IMPORTED_MODULE_3__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/demodevice/savesubpm25';
        return this.http.post(url, { deviceid: deviceid, pm25: pm25, voc: voc, temperature: temperature }).map(this.extractData);
    };
    DemoproviderProvider.prototype.GetOutWheather = function (deviceid) {
        var url = __WEBPACK_IMPORTED_MODULE_3__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/demodevice/getoutwheatherdata';
        return this.http.post(url, { deviceid: deviceid }).map(this.extractData);
    };
    //模型双色灯开关 
    DemoproviderProvider.prototype.SendLight = function (deviceid, code, stat) {
        var url = __WEBPACK_IMPORTED_MODULE_3__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/demodevice/sendlight';
        return this.http.post(url, { deviceid: deviceid, code: code, stat: stat }).map(this.extractData);
    };
    //获取网关中的设备信息
    DemoproviderProvider.prototype.FindByIdDemoDevice = function (deviceid, type) {
        var url = __WEBPACK_IMPORTED_MODULE_3__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/demodevice/FindByIdDemoDevice';
        return this.http.post(url, { deviceid: deviceid, type: type }).map(this.extractData);
    };
    //改变灯带渐变时间
    DemoproviderProvider.prototype.ChangeLightChangeTime = function (deviceId, time, rtype) {
        var url = __WEBPACK_IMPORTED_MODULE_3__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/demodevice/changelighttime';
        return this.http.post(url, { deviceId: deviceId, time: time, rtype: rtype }).map(this.extractData);
    };
    //获取日志信息
    //device_id 设备ID take 显示记录条数 skip当前第几页
    DemoproviderProvider.prototype.FindDemoLog = function (device_id, type, take, skip) {
        var url = __WEBPACK_IMPORTED_MODULE_3__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/demodevice/FindDemoLog';
        return this.http.post(url, { device_id: device_id, type: type, take: take, skip: skip }).map(this.extractData);
    };
    //获取模型网关下的设备
    DemoproviderProvider.prototype.FindDemoIdDevice = function (device_id, family_id) {
        var url = __WEBPACK_IMPORTED_MODULE_3__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/demodevice/FindDemoIdDevice';
        return this.http.post(url, { device_id: device_id, family_id: family_id }).map(this.extractData);
    };
    DemoproviderProvider.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    DemoproviderProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__httpclient_httpclient__["a" /* HttpclientProvider */]])
    ], DemoproviderProvider);
    return DemoproviderProvider;
}());

//# sourceMappingURL=demoprovider.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LechengProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_constants__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__httpclient_httpclient__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the LechengProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var LechengProvider = /** @class */ (function () {
    function LechengProvider(http) {
        this.http = http;
    }
    LechengProvider.prototype.savePTZ = function (deviceId, degreesId, degreesTitle, hDegrees, vDegrees) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Lecheng/SavePTZ';
        return this.http.post(url, { degreesId: degreesId, degreesTitle: degreesTitle, deviceId: deviceId, hDegrees: hDegrees, vDegrees: vDegrees }).map(this.extractData);
    };
    LechengProvider.prototype.getPTZ = function (deviceId) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Lecheng/FindPTZ';
        return this.http.post(url, { deviceId: deviceId }).map(this.extractData);
    };
    LechengProvider.prototype.removePTZ = function (deviceId, degreesId) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Lecheng/RemovePTZ';
        return this.http.post(url, { degreesId: degreesId, deviceId: deviceId }).map(this.extractData);
    };
    LechengProvider.prototype.GetUserToken = function () {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Lecheng/GetUserToken';
        return this.http.post(url, {}).map(this.extractData);
    };
    LechengProvider.prototype.BindSms = function () {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Lecheng/BindSms';
        return this.http.post(url, {}).map(this.extractData);
    };
    LechengProvider.prototype.BindApp = function (smsCode) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Lecheng/BindApp';
        return this.http.post(url, { smsCode: smsCode }).map(this.extractData);
    };
    LechengProvider.prototype.BindAppNoSms = function () {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Lecheng/BindAppNoSms';
        return this.http.post(url, {}).map(this.extractData);
    };
    LechengProvider.prototype.BindDevice = function (deviceId, productId, familyId, roomId) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Lecheng/BindDevice';
        return this.http.post(url, { deviceId: deviceId, productId: productId, familyId: familyId, roomId: roomId }).map(this.extractData);
    };
    LechengProvider.prototype.UnBindDevice = function (deviceId, sn) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Lecheng/UnBindDevice';
        return this.http.post(url, { deviceId: deviceId, sn: sn }).map(this.extractData);
    };
    //在线状态
    LechengProvider.prototype.DeviceOnline = function (deviceId) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Lecheng/DeviceOnline';
        return this.http.post(url, { deviceId: deviceId }).map(this.extractData);
    };
    //呼吸灯状态
    LechengProvider.prototype.BreathingLightStatus = function (deviceId) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Lecheng/BreathingLightStatus';
        return this.http.post(url, { deviceId: deviceId }).map(this.extractData);
    };
    //设置呼吸灯状态
    LechengProvider.prototype.ModifyBreathingLight = function (deviceId, status) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Lecheng/ModifyBreathingLight';
        return this.http.post(url, { deviceId: deviceId, status: status }).map(this.extractData);
    };
    //拍照
    LechengProvider.prototype.SetDeviceSnap = function (deviceId, sn) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Lecheng/SetDeviceSnap';
        return this.http.post(url, { deviceId: deviceId, sn: sn }).map(this.extractData);
    };
    //拍照
    LechengProvider.prototype.DelPicture = function (deviceId, id) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Lecheng/DelPicture';
        return this.http.post(url, { deviceId: deviceId, id: id }).map(this.extractData);
    };
    //云台控制
    LechengProvider.prototype.controlptz = function (deviceId, direct, hDegrees, vDegrees) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Lecheng/ControlPTZ';
        return this.http.post(url, { deviceId: deviceId, direct: direct, hDegrees: hDegrees, vDegrees: vDegrees }).map(this.extractData);
    };
    LechengProvider.prototype.GetLCPictureByDate = function (deviceId, type, date) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Lecheng/GetLCPictureByDate';
        return this.http.post(url, { deviceId: deviceId, type: type, date: date }).map(this.extractData);
    };
    LechengProvider.prototype.GetCameraList = function (deviceId, type, take, skip) {
        if (take === void 0) { take = 10; }
        if (skip === void 0) { skip = 0; }
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Lecheng/FindCameras';
        return this.http.post(url, { deviceId: deviceId, type: type, take: take, skip: skip }).map(this.extractData);
    };
    LechengProvider.prototype.GetCameraListBydate = function (deviceId, type, date, take, skip) {
        if (take === void 0) { take = 10; }
        if (skip === void 0) { skip = 0; }
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Lecheng/GetCameraPictureByDate';
        return this.http.post(url, { deviceId: deviceId, date: date, type: type, take: take, skip: skip }).map(this.extractData);
    };
    LechengProvider.prototype.GetCameraPictureGroupByDate = function (deviceId, type, take, skip) {
        if (take === void 0) { take = 10; }
        if (skip === void 0) { skip = 0; }
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Lecheng/GetCameraPictureGroupByDate';
        return this.http.post(url, { deviceId: deviceId, type: type, take: take, skip: skip }).map(this.extractData);
    };
    //获取动检计划
    LechengProvider.prototype.GetAlarmInfo = function (deviceId, sn) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Lecheng/GetAlarmInfo';
        return this.http.post(url, { sn: sn, deviceId: deviceId }).map(this.extractData);
    };
    //设置动检开关
    LechengProvider.prototype.SetAlarmStatus = function (sn, isOpen, deviceId) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Lecheng/SetAlarmStatus';
        return this.http.post(url, { sn: sn, isOpen: isOpen, deviceId: deviceId }).map(this.extractData);
    };
    //设置动检计划 index=-1 为添加
    LechengProvider.prototype.SetAlarmPlan = function (sn, index, period, beginTime, endTime, deviceId) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Lecheng/SetAlarmPlan';
        return this.http.post(url, { sn: sn, index: index, period: period, beginTime: beginTime, endTime: endTime, deviceId: deviceId }).map(this.extractData);
    };
    //删除动检计划
    LechengProvider.prototype.delAlarmPlan = function (sn, index, deviceId) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Lecheng/DelAlarmPlan';
        return this.http.post(url, { sn: sn, index: index, deviceId: deviceId }).map(this.extractData);
    };
    //获取翻转状态
    LechengProvider.prototype.GetReverseStatus = function (sn, deviceId) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Lecheng/FrameReverseStatus';
        return this.http.post(url, { sn: sn, deviceId: deviceId }).map(this.extractData);
    };
    //获取云存储信息
    LechengProvider.prototype.getStorageStrategy = function (deviceId) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Lecheng/getStorageStrategy';
        return this.http.post(url, { deviceId: deviceId }).map(this.extractData);
    };
    //设置翻转状态
    LechengProvider.prototype.SetReverseStatus = function (sn, isReverse, deviceId) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Lecheng/ModifyFrameReverseStatus';
        return this.http.post(url, { sn: sn, isReverse: isReverse, deviceId: deviceId }).map(this.extractData);
    };
    LechengProvider.prototype.UnBindDeviceByPhone = function (phoneNum, sn) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Lecheng/UnBindDeviceByPhone';
        return this.http.post(url, { phoneNum: phoneNum, sn: sn }).map(this.extractData);
    };
    LechengProvider.prototype.ReBindDevice = function (deviceId) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Lecheng/ReBindDevice';
        return this.http.post(url, { deviceId: deviceId }).map(this.extractData);
    };
    LechengProvider.prototype.BindSmsByDevice = function (deviceId) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Lecheng/BindSmsByDevice';
        return this.http.post(url, { deviceId: deviceId }).map(this.extractData);
    };
    LechengProvider.prototype.BindAppByDevice = function (deviceId) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Lecheng/BindAppByDevice';
        return this.http.post(url, { deviceId: deviceId }).map(this.extractData);
    };
    LechengProvider.prototype.BindLiveByDevice = function (deviceId) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Lecheng/BindDeviceLive';
        return this.http.post(url, { deviceId: deviceId }).map(this.extractData);
    };
    LechengProvider.prototype.QueryLiveStatus = function (deviceId) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Lecheng/QueryLiveStatus';
        return this.http.post(url, { deviceId: deviceId }).map(this.extractData);
    };
    LechengProvider.prototype.OpenStorageStrategy = function (deviceId, type) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Lecheng/OpenStorageStrategy';
        return this.http.post(url, { deviceId: deviceId, type: type }).map(this.extractData);
    };
    //0 正常绑定 -1 没有被绑定  -2绑定到其他用户 -3 调用失败 其他错误
    LechengProvider.prototype.CheckDeviceBindOrNot = function (deviceId) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Lecheng/CheckDeviceBindOrNot';
        return this.http.post(url, { deviceId: deviceId }).map(this.extractData);
    };
    //设备token
    LechengProvider.prototype.GetDeviceToken = function (deviceId) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Lecheng/GetDeviceToken';
        return this.http.post(url, { deviceId: deviceId }).map(this.extractData);
    };
    LechengProvider.prototype.AddCheckBind = function (sn) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Lecheng/AddCheckBind';
        return this.http.post(url, { sn: sn }).map(this.extractData);
    };
    LechengProvider.prototype.IsBindApp = function (deviceId) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Lecheng/IsBindApp';
        return this.http.post(url, { deviceId: deviceId }).map(this.extractData);
    };
    LechengProvider.prototype.AlarmCallbackTest = function (deviceId) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Lecheng/AlarmCallbackTest';
        return this.http.post(url, { deviceId: deviceId }).map(this.extractData);
    };
    LechengProvider.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    LechengProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__httpclient_httpclient__["a" /* HttpclientProvider */]])
    ], LechengProvider);
    return LechengProvider;
}());

//# sourceMappingURL=lecheng.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(240);
/// <reference path="../../typings/cordova-typings.d.ts"/> 


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MyHammerConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__filter_auto_fit_layout__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipe_module__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__extended_extendedurlimg__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_autojob_autojob__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_channel_channel__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_localdata_localdata__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_localstorage_localstorage__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_httpclient_httpclient__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_delay_delay__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_doorlock_doorlock__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_equipment_equipment__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_externalinterface_externalinterface__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_intelligent_intelligent__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_lecheng_lecheng__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_log_log__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_login_login__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_room_room__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_scene_scene__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_timing_timing__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_usercenter_usercenter__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_colorpicker_lib_color_picker_service__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_constants_constants__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_barcode_scanner__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_demoprovider_demoprovider__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_native_service_native_service__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ionic_native_app_version__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ionic_native_file__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__ionic_native_in_app_browser__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ionic_native_file_transfer__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__ionic_native_native_audio__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__ionic_native_media__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__event_eventemitter__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__ionic_native_file_opener__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__ionic_native_android_permissions__ = __webpack_require__(210);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//import { Filter } from '../filter/filter';//设备类型过滤
//import { Host } from '../filter/host';//组合图片地址
 //组合图片地址
 //图片转换


































//import { SliderDirective, TextDirective, ColorPickerDirective } from '../components/colorpicker/lib/color-picker.directive';
var MyHammerConfig = /** @class */ (function (_super) {
    __extends(MyHammerConfig, _super);
    function MyHammerConfig() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.overrides = {
            // override hammerjs default configuration
            'pan': { threshold: 5 },
            'swipe': {
                velocity: 0.4,
                threshold: 20,
                direction: 31 // /!\ ugly hack to allow swipe in all direction
            }
        };
        return _this;
    }
    return MyHammerConfig;
}(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["e" /* HammerGestureConfig */]));

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                // Host,
                //  Filter,
                __WEBPACK_IMPORTED_MODULE_5__filter_auto_fit_layout__["a" /* AutoFitLayout */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* NoopAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__pipe_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {
                    tabsHideOnSubPages: true,
                    platforms: {
                        android: {
                            tabsHideOnSubPages: true,
                            tabsHighlight: true,
                            backButtonText: ''
                        },
                        ios: {
                            tabsHideOnSubPages: true,
                            tabsHighlight: true,
                            backButtonText: ''
                        }
                    }
                    //mode: 'md',
                    //backButtonText: '返回'
                }, {
                    links: [
                        { loadChildren: '../components/selectanfang/selectanfang.module#SelectanfangModule', name: 'selectanfang', segment: 'selectanfang', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'home', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sueimiang/sueimiang.module#SueimiangPageModule', name: 'sueimiang', segment: 'sueimiang', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'login', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/switchrfwy/switchrfwy.module#SwitchrfwyPageModule', name: 'SwitchrfwyPage', segment: 'switchrfwy', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/switchlight/switchlight.module#SwitchlightPageModule', name: 'SwitchlightPage', segment: 'switchlight', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'tabs', segment: 'tabs', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */]
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicErrorHandler */] },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["d" /* HAMMER_GESTURE_CONFIG */],
                    useClass: MyHammerConfig
                }, __WEBPACK_IMPORTED_MODULE_33__ionic_native_app_version__["a" /* AppVersion */], __WEBPACK_IMPORTED_MODULE_34__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_35__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_36__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_37__ionic_native_native_audio__["a" /* NativeAudio */], __WEBPACK_IMPORTED_MODULE_38__ionic_native_media__["a" /* Media */], __WEBPACK_IMPORTED_MODULE_40__ionic_native_file_opener__["a" /* FileOpener */], __WEBPACK_IMPORTED_MODULE_41__ionic_native_android_permissions__["a" /* AndroidPermissions */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_11__providers_autojob_autojob__["a" /* AutojobProvider */],
                __WEBPACK_IMPORTED_MODULE_12__providers_channel_channel__["a" /* ChannelProvider */],
                __WEBPACK_IMPORTED_MODULE_13__providers_localdata_localdata__["a" /* LocaldataProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_localstorage_localstorage__["a" /* LocalstorageProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_httpclient_httpclient__["a" /* HttpclientProvider */],
                __WEBPACK_IMPORTED_MODULE_16__providers_delay_delay__["a" /* DelayProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_doorlock_doorlock__["a" /* DoorlockProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_equipment_equipment__["a" /* EquipmentProvider */],
                __WEBPACK_IMPORTED_MODULE_19__providers_externalinterface_externalinterface__["a" /* ExternalinterfaceProvider */],
                __WEBPACK_IMPORTED_MODULE_20__providers_intelligent_intelligent__["a" /* IntelligentProvider */],
                __WEBPACK_IMPORTED_MODULE_21__providers_lecheng_lecheng__["a" /* LechengProvider */],
                __WEBPACK_IMPORTED_MODULE_22__providers_log_log__["a" /* LogProvider */],
                __WEBPACK_IMPORTED_MODULE_23__providers_login_login__["a" /* LoginProvider */],
                __WEBPACK_IMPORTED_MODULE_24__providers_room_room__["a" /* RoomProvider */],
                __WEBPACK_IMPORTED_MODULE_25__providers_scene_scene__["a" /* SceneProvider */],
                __WEBPACK_IMPORTED_MODULE_26__providers_timing_timing__["a" /* TimingProvider */],
                __WEBPACK_IMPORTED_MODULE_27__providers_usercenter_usercenter__["a" /* UsercenterProvider */],
                __WEBPACK_IMPORTED_MODULE_29__providers_constants_constants__["b" /* SignalrWindow */],
                __WEBPACK_IMPORTED_MODULE_39__event_eventemitter__["a" /* Emitter */],
                __WEBPACK_IMPORTED_MODULE_7__extended_extendedurlimg__["a" /* ExtendedUrlImg */],
                __WEBPACK_IMPORTED_MODULE_28__components_colorpicker_lib_color_picker_service__["a" /* ColorPickerService */],
                __WEBPACK_IMPORTED_MODULE_30__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_31__providers_demoprovider_demoprovider__["a" /* DemoproviderProvider */], __WEBPACK_IMPORTED_MODULE_32__providers_native_service_native_service__["a" /* NativeServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Host; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_constants_constants__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Host = /** @class */ (function () {
    function Host(window) {
        this.window = window;
        this.navtype = 0;
        this.navtype = this.inApp();
    }
    Host.prototype.transform = function (value) {
        if (value === null || value === "" || value === undefined) {
            if (this.navtype === 2)
                return ("assets/img/user_profile_default.png");
            else
                return (this.window.nativeWindow.config.cdn + "assets/img/user_profile_default.png");
        }
        else {
            if (this.navtype === 2)
                return ("assets/img/" + value);
            else
                return (this.window.nativeWindow.config.cdn + "assets/img/" + value);
        }
    };
    Host.prototype.inApp = function () {
        //0 微信 1.浏览器  2 app
        var ua = navigator.userAgent.toLowerCase(); //获取判断用的对象
        if (ua.indexOf("micromessenger") > -1) {
            return 0;
        }
        else if (location.href.toLowerCase().indexOf('http') == 0) {
            return 1;
        }
        else {
            return 2;
        }
    };
    Host = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
            name: 'host'
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_constants_constants__["b" /* SignalrWindow */]])
    ], Host);
    return Host;
}());

//# sourceMappingURL=host.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListFilter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ListFilter = /** @class */ (function () {
    function ListFilter() {
    }
    ListFilter.prototype.transform = function (items, field, type) {
        if (!items)
            return [];
        switch (type) {
            case 0:
                return items.filter(function (it) { return it[field] != 1 && it['main_device_id'] === null || it['main_device_id'] === ""; });
            case 1:
                return items.filter(function (it) { return it[field] != 1 && it[field] != 2; });
            case 2:
                return items.filter(function (it) { return it[field] != 2; });
            default:
                break;
        }
    };
    ListFilter = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
            name: 'listfilter'
        })
        //过虑设备
        ,
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], ListFilter);
    return ListFilter;
}());

//# sourceMappingURL=listfilter.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Filter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Filter = /** @class */ (function () {
    function Filter() {
    }
    Filter.prototype.transform = function (items, field, value) {
        if (!items)
            return [];
        if (value === null || value === "")
            return items.filter(function (it) { return it[field] != null && it[field] != ""; });
        else
            return items.filter(function (it) { return it[field] == value; });
    };
    Filter = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
            name: 'filter'
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], Filter);
    return Filter;
}());

//# sourceMappingURL=filter.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyStyleWidthDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyStyleWidthDirective = /** @class */ (function () {
    function MyStyleWidthDirective(el) {
        this.el = el;
    }
    Object.defineProperty(MyStyleWidthDirective.prototype, "myWidth", {
        set: function (value) {
            this.el.nativeElement.style.width = value + "%";
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], MyStyleWidthDirective.prototype, "myWidth", null);
    MyStyleWidthDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[myWidth]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
    ], MyStyleWidthDirective);
    return MyStyleWidthDirective;
}());

//# sourceMappingURL=mystylewidth.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_localdata_localdata__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_login_login__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_channel_channel__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__event_eventemitter__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_constants_constants__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_transfer__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_media__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_native_service_native_service__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_android_permissions__ = __webpack_require__(210);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//import { SceneProvider } from '../providers/scene/scene';
//import { NativeServiceProvider } from '../providers/native-service/native-service';







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, ionicApp, keyboard, file, txfr, audio, loginService, channelService, 
        //private sceneService: SceneProvider,
        popoverCtrl, 
        //  private us: UsercenterProvider,
        ls, toastCtrl, androidPermissions, nativeService, window, ref, ngZone) {
        var _this = this;
        this.platform = platform;
        this.ionicApp = ionicApp;
        this.keyboard = keyboard;
        this.file = file;
        this.txfr = txfr;
        this.audio = audio;
        this.loginService = loginService;
        this.channelService = channelService;
        this.popoverCtrl = popoverCtrl;
        this.ls = ls;
        this.toastCtrl = toastCtrl;
        this.androidPermissions = androidPermissions;
        this.nativeService = nativeService;
        this.window = window;
        this.ref = ref;
        this.ngZone = ngZone;
        this.isLogined = false;
        this.rootPage = "tabs";
        //rootPage: any = "loading";
        this.backButtonPressed = false;
        this.playbackAIui = false;
        this.FamilyName = "";
        this.ShouAIUIStatue = false;
        this.AIUIBeginState = false;
        this.PlayQueue = []; //{"type":"tts/mp3/smp3","url":"mp3url",bgname:"背景音乐的名称","content":"tts内容","state":"stop/play/pause/stoped"}
        this.PlayNeedBack = false; //播放暂停后是否继续播放.
        this.playNeedContinue = false; //是否继续播放
        this.playSceneContinue = false; //播放完情景以后是否继续
        this.canClickPlay = true; //可以再点击播音按钮不
        this.CurrentTTSIndex = 0; //当前播放的TTS文字.如果有的话.暂停继续等都是TTS.如果是空的.就是暂停播放MP3
        this.clickNext = false;
        this.clickPreview = false;
        this.AIUITalkList = [];
        this.showDefaultAvator = false;
        this.userInfo = null;
        this.userInfoImg = null;
        this.RoomList = [];
        this.colora = "default";
        this.colorb = "default";
        this.displayMethod = 0;
        this.showclass = "tips-list-edit-hide";
        this.t = Math.random();
        var mainThis = this;
        zhijiaPlugin.getToken(function (token) {
            console.log(token);
            mainThis.isLogined = true;
            //保存token
            mainThis.ls.setToken(token);
            mainThis.getUser(function (data) {
                if (data.error_code === 0) {
                    console.log("用户用户");
                    mainThis.ls.setUser(data.data); //保存本地用户
                    mainThis.userInfo = data.data;
                    mainThis.updateAvator();
                    if (isNaN(mainThis.ls.getFamilyId()) || mainThis.ls.getFamilyId() == null || mainThis.ls.getFamilyId() == 0)
                        mainThis.ls.setFamilyId(data.data.last_family_id);
                    //cordova.plugins.VolumeControl.setVolume(0.5);
                    // aiuiPlugin.registFamily("59",function(){
                    //     console.log("AIUI成功注册家庭");
                    // },function(){});
                    //启动signalr
                    mainThis.connectionState$ = mainThis.channelService.connectionState$
                        .map(function (state) { return __WEBPACK_IMPORTED_MODULE_6__providers_channel_channel__["b" /* ConnectionState */][state]; });
                    mainThis.channelService.error$.subscribe(function (error) { console.warn(error); }, function (error) { console.error("errors$ error", error); });
                    mainThis.channelService.starting$.subscribe(function () {
                        var isApp = mainThis.ls.inApp();
                        var isIosAndAndroid = mainThis.nativeService.iosAndAndroid();
                        var thisPoint = mainThis;
                        if (isApp === 2 && isIosAndAndroid !== 1) {
                            mainThis.androidPermissions.checkPermission(mainThis.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE).then(function (success) {
                                if (!success.hasPermission) {
                                    mainThis.androidPermissions.requestPermission(mainThis.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE);
                                }
                            }, function (err) { return mainThis.androidPermissions.requestPermission(mainThis.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE); });
                        }
                        //在线升级读写权限
                        __WEBPACK_IMPORTED_MODULE_7__event_eventemitter__["a" /* Emitter */].register("updateavator", mainThis.eventUserData, mainThis); //修改头像事件注册
                        __WEBPACK_IMPORTED_MODULE_7__event_eventemitter__["a" /* Emitter */].register("openMenu", mainThis.openedMenu, mainThis); //打开菜单
                        __WEBPACK_IMPORTED_MODULE_7__event_eventemitter__["a" /* Emitter */].register("homePlayClick", mainThis.homePlayClick, mainThis); //homne上的按键响应
                        mainThis.refstyle();
                        console.log("signalr服务已启动");
                    }, function () { console.warn("signalr服务启动失败！"); });
                    console.log("Signalr服务启动中...");
                    mainThis.channelService.start(mainThis.ls.getToken()).done(function () {
                        var rp = "";
                        if (data.data.mobile_confirmed && data.data.mobile && data.data.mobile.length > 0) {
                            console.log(data.data.last_family_id);
                            if (data.data.last_family_id < 1) {
                                rp = 'familyedit'; //新增家
                            }
                            else {
                                rp = 'tabs';
                            }
                        }
                        else {
                            rp = 'changephonenum';
                        }
                        mainThis.rootPage = rp;
                        //  this.ls.setRoot(rp);
                        platform.ready().then(function () {
                            // Okay, so the platform is ready and our plugins are available.
                            // Here you can do any higher level native things you might need. 
                            statusBar.styleDefault();
                            splashScreen.hide();
                            mainThis.registerBackButtonAction();
                            mainThis.nativeService.detectionUpgrade();
                            cordova.plugins.VolumeControl.getVolume(function (result) {
                                __WEBPACK_IMPORTED_MODULE_7__event_eventemitter__["a" /* Emitter */].fire("musicState", "volume_select", result * 100);
                            });
                            document.addEventListener("volumedownbutton", function () {
                                console.log("降音量");
                                __WEBPACK_IMPORTED_MODULE_7__event_eventemitter__["a" /* Emitter */].fire("musicState", "sysvolume_minus");
                            }, false);
                            document.addEventListener("volumeupbutton", function () {
                                console.log("升音量");
                                __WEBPACK_IMPORTED_MODULE_7__event_eventemitter__["a" /* Emitter */].fire("musicState", "sysvolume_plus");
                            }, false);
                            var __this = mainThis;
                            zhijiaPlugin.registerNotify(function (res) {
                                if (res.type === "wakeup") {
                                    var wakeMsg = JSON.parse(res.message);
                                    console.log(wakeMsg);
                                    __WEBPACK_IMPORTED_MODULE_7__event_eventemitter__["a" /* Emitter */].fire("musicState", "openHomeMenu");
                                }
                                else if (res.type === "nlp") {
                                    var nlpWord_1 = res.message;
                                    console.log(nlpWord_1);
                                    if (nlpWord_1 === "no") {
                                        __this.ngZone.run(function () {
                                            __this.ShouAIUIStatue = false;
                                            __this.AIUITalkList.push({ isSelf: true, text: "没有识别到您的话" });
                                        });
                                    }
                                    else {
                                        __this.ngZone.run(function () {
                                            __this.ShouAIUIStatue = false;
                                            __this.AIUITalkList.push({ isSelf: true, text: nlpWord_1 });
                                        });
                                        __this.loginService.InvokeBaidu(nlpWord_1, "").subscribe(function (invokeAiData) {
                                            console.log(invokeAiData);
                                            __this.ngZone.run(function () {
                                                __this.AIUITalkList.push({ isSelf: false, text: invokeAiData.data.output.say });
                                            });
                                            __this.playShortTTS(invokeAiData.data.output.say);
                                        });
                                    }
                                }
                            });
                            //aiuiPlugin.wakeup();
                            // aiuiPlugin.registerNotify(function (res) {
                            //     if (res.type === "wakeup") {
                            //         let wakeMsg = JSON.parse(res.message);
                            //         console.log(wakeMsg);
                            //         switch (wakeMsg.word) {
                            //             case "小智小智":
                            //                 if (__this.pause()) {
                            //                     __this.PlayNeedBack = true;
                            //                 }
                            //                 __this.playbackAIui = true;//播放完下一条就开启AIUI
                            //                 aiuiPlugin.sleep();
                            //                 //openMenu
                            //                 // setTimeout(function(){
                            //                 //     __this.playShortTTS("小智在.");
                            //                 //     setTimeout(function(){
                            //                 //         Emitter.fire("musicState", "openHomeMenu");
                            //                 //         __this.AIUIBegin();
                            //                 //     },2000);
                            //                 // },1000);
                            //                 break;
                            //             case "播放":
                            //                 __this.PlayNeedBack = false;
                            //                 __this.playPlay();
                            //                 __this.ngZone.run(() => {
                            //                     __this.AIUITalkList.push({ isSelf: false, text: "播放" });
                            //                 });
                            //                 //__this.playShortTTS("播放");
                            //                 break;
                            //             case "暂停":
                            //                 __this.PlayNeedBack = false;
                            //                 __this.playPause();
                            //                 __this.ngZone.run(() => {
                            //                     __this.AIUITalkList.push({ isSelf: false, text: "暂停播放" });
                            //                 });
                            //                 //__this.playShortTTS("暂停播放");
                            //                 break;
                            //             case "上一首":
                            //                 __this.PlayNeedBack = false;
                            //                 __this.playPrevious();
                            //                 __this.ngZone.run(() => {
                            //                     __this.AIUITalkList.push({ isSelf: false, text: "上一首" });
                            //                 });
                            //                 //__this.playShortTTS("上一首");
                            //                 break;
                            //             case "下一首":
                            //                 __this.PlayNeedBack = false;
                            //                 __this.playNext();
                            //                 __this.ngZone.run(() => {
                            //                     __this.AIUITalkList.push({ isSelf: false, text: "播放下一首" });
                            //                 });
                            //                 //__this.playShortTTS("下一首");
                            //                 break;
                            //             case "增大音量":
                            //                 Emitter.fire("musicState", "volume_plus");
                            //                 __this.ngZone.run(() => {
                            //                     __this.AIUITalkList.push({ isSelf: false, text: "音量已调高10%" });
                            //                 });
                            //                 //__this.playShortTTS("音量已调高");
                            //                 break;
                            //             case "减小音量":
                            //                 Emitter.fire("musicState", "volume_minus");
                            //                 __this.ngZone.run(() => {
                            //                     __this.AIUITalkList.push({ isSelf: false, text: "音量已调低10%" });
                            //                 });
                            //                 //__this.playShortTTS("音量已调低");
                            //                 break;
                            //             case "打开电灯":
                            //                 break;
                            //             case "关闭电灯":
                            //                 break;
                            //             default:
                            //                 break;
                            //         }
                            //     }
                            //     else if (res.type === "nlp") {
                            //         //解析的语义
                            //         let aiuiMessage = JSON.parse(res.message);
                            //         console.log(aiuiMessage);
                            //         if (aiuiMessage.intent !== undefined && aiuiMessage.intent.text !== undefined) {
                            //             __this.ngZone.run(() => {
                            //                 __this.AIUITalkList.push({ isSelf: true, text: aiuiMessage.intent.text });
                            //             });
                            //         }
                            //         if (aiuiMessage.intent !== undefined) {
                            //             if (aiuiMessage.intent.service === "ZHIJIAIOT.smartHome") {
                            //                 let family_id = __this.ls.getFamilyId();
                            //                 __this.loginService.InvokeAiui(family_id, JSON.stringify(aiuiMessage)).subscribe(invokeAiData => {
                            //                     console.log(invokeAiData);
                            //                     __this.ngZone.run(() => {
                            //                         __this.AIUITalkList.push({ isSelf: false, text: invokeAiData.data.content });
                            //                     });
                            //                     // if (__this.pause()) {
                            //                     //     __this.PlayNeedBack = true;
                            //                     // }
                            //                     //__this.pause(); //直接播放.自己会中断
                            //                     __this.playShortTTS(invokeAiData.data.content);
                            //                 });
                            //             } else if (aiuiMessage.intent.service === "weather") {
                            //                 //播放天气,直接打断原来的TTS播放或者是MP3播放,等放完以后继续.
                            //                 //__this.pause();
                            //                 __this.ngZone.run(() => {
                            //                     __this.AIUITalkList.push({ isSelf: false, text: aiuiMessage.intent.answer.text });
                            //                 });
                            //                 __this.playShortTTS(aiuiMessage.intent.answer.text);
                            //                 //__this.insertQueue({ type: "tts", content: aiuiMessage.intent.answer.text, state: "stop" });
                            //                 //__this.play();
                            //             } else if (aiuiMessage.intent.service === "news") {
                            //                 __this.ngZone.run(() => {
                            //                     __this.AIUITalkList.push({ isSelf: false, text: aiuiMessage.intent.answer.text });
                            //                 });
                            //                 __this.releaseQueue();//要播放新闻的话,释放当前队列
                            //                 aiuiMessage.intent.data.result.forEach(newModel => {
                            //                     //添加到队列
                            //                     //__this.addQueue({ type: "tts", content: newModel.content, state: "stop" });
                            //                     __this.addQueue({ type: "news", url: newModel.url, content: newModel.content, state: "stop" });
                            //                 });
                            //                 __this.play();
                            //             } else if (aiuiMessage.intent.service === "musicX") { //处理音乐播放逻辑
                            //                 if (aiuiMessage.intent.semantic[0].intent === "RANDOM_SEARCH") { //播放
                            //                     __this.PlayNeedBack = false;
                            //                     __this.playShortTTS("正在缓冲");
                            //                     __this.releaseQueue();
                            //                     let family_id = __this.ls.getFamilyId();
                            //                     __this.loginService.GetBgJson(family_id).subscribe(bgData => {
                            //                         bgData = bgData.sort(function () { Math.random() - 0.5 });
                            //                         for (let i = 0; i < bgData.length; i++) {
                            //                             let name = bgData[i];
                            //                             __this.addQueue({ type: "mp3", bgname: name, state: "stop" });
                            //                         }
                            //                         __this.play();
                            //                     });
                            //                 } else if (aiuiMessage.intent.semantic[0].intent === "INSTRUCTION") {//音乐控制
                            //                     if (aiuiMessage.intent.semantic[0].slots.length > 0) {
                            //                         switch (aiuiMessage.intent.semantic[0].slots[0].value) {
                            //                             case "next":
                            //                                 __this.PlayNeedBack = false;
                            //                                 __this.playNext();
                            //                                 __this.ngZone.run(() => {
                            //                                     __this.AIUITalkList.push({ isSelf: false, text: "播放下一首" });
                            //                                 });
                            //                                 //__this.playShortTTS("播放下一首");
                            //                                 break;
                            //                             case "past":
                            //                                 __this.PlayNeedBack = false;
                            //                                 __this.playPrevious();
                            //                                 __this.ngZone.run(() => {
                            //                                     __this.AIUITalkList.push({ isSelf: false, text: "播放上一首" });
                            //                                 });
                            //                                 //__this.playShortTTS("播放上一首");
                            //                                 break;
                            //                             case "pause":
                            //                                 __this.PlayNeedBack = false;
                            //                                 __this.playPause();
                            //                                 __this.ngZone.run(() => {
                            //                                     __this.AIUITalkList.push({ isSelf: false, text: "暂停播放" });
                            //                                 });
                            //                                 //__this.playShortTTS("暂停播放");
                            //                                 break;
                            //                             case "replay":
                            //                                 __this.PlayNeedBack = false;
                            //                                 __this.playPlay();
                            //                                 __this.ngZone.run(() => {
                            //                                     __this.AIUITalkList.push({ isSelf: false, text: "继续播放" });
                            //                                 });
                            //                                 //__this.playShortTTS("继续播放");
                            //                                 break;
                            //                             case "volume_plus":
                            //                                 Emitter.fire("musicState", "volume_plus");
                            //                                 __this.ngZone.run(() => {
                            //                                     __this.AIUITalkList.push({ isSelf: false, text: "音量已调高10%" });
                            //                                 });
                            //                                 //__this.playShortTTS("音量已调高");
                            //                                 break;
                            //                             case "volume_minus":
                            //                                 Emitter.fire("musicState", "volume_minus");
                            //                                 __this.ngZone.run(() => {
                            //                                     __this.AIUITalkList.push({ isSelf: false, text: "音量已调低10%" });
                            //                                 });
                            //                                 //__this.playShortTTS("音量已调低");
                            //                                 break;
                            //                             case "volume_max":
                            //                                 Emitter.fire("musicState", "volume_max");
                            //                                 __this.ngZone.run(() => {
                            //                                     __this.AIUITalkList.push({ isSelf: false, text: "音量已调到最高" });
                            //                                 });
                            //                                 //__this.playShortTTS("音量已调到最高");
                            //                                 break;
                            //                             case "volume_min":
                            //                                 Emitter.fire("musicState", "volume_min");
                            //                                 __this.ngZone.run(() => {
                            //                                     __this.AIUITalkList.push({ isSelf: false, text: "音量已调到最低" });
                            //                                 });
                            //                                 //__this.playShortTTS("音量已调到最低");
                            //                                 break;
                            //                             case "volume_select":
                            //                                 let volumeNum = aiuiMessage.intent.semantic[0].slots[1].value;
                            //                                 Emitter.fire("musicState", "volume_select", volumeNum);
                            //                                 __this.ngZone.run(() => {
                            //                                     __this.AIUITalkList.push({ isSelf: false, text: "音量已调到" + volumeNum });
                            //                                 });
                            //                                 //__this.playShortTTS("音量已调整");
                            //                                 break;
                            //                             default:
                            //                                 break;
                            //                         }
                            //                     }
                            //                 }
                            //             }
                            //             else if (aiuiMessage.intent.text) {
                            //                 __this.ngZone.run(() => {
                            //                     __this.AIUITalkList.push({ isSelf: false, text: "暂未处理:" + aiuiMessage.intent.text });
                            //                 });
                            //                 __this.playShortTTS("小智没听懂您的话.");
                            //                 //__this.MyTalk = "其他:"+aiuiMessage.intent.text;
                            //             }
                            //         }
                            //     }
                            //     else if (res.type === "start") { //开始说话
                            //         __this.ngZone.run(() => {
                            //             __this.ShouAIUIStatue = true;
                            //         });
                            //         if (__this.pause()) {
                            //             __this.PlayNeedBack = true;
                            //         }
                            //     } else if (res.type === "stop") { //结束说话
                            //         console.log("结束说话,开启唤醒");
                            //         setTimeout(() => {
                            //             aiuiPlugin.wakeup(); //重新打开唤醒
                            //         }, 1500);
                            //         __this.ngZone.run(() => {
                            //             __this.ShouAIUIStatue = false;
                            //         });
                            //         //应该判断是否解析出语义了
                            //     } else if (res.type === "ttsState") { //tts的播放状态
                            //         switch (res.message) {
                            //             case "completed": //TTS播放完了.
                            //                 //不管TTS的播放.播放完以后会自动继续播放
                            //                 if (__this.playbackAIui) //这个优先级最高
                            //                 {
                            //                     __this.playbackAIui = false;
                            //                     Emitter.fire("musicState", "openHomeMenu");
                            //                     __this.ShouAIUIStatue = true;
                            //                     aiuiPlugin.start(function () { }, function () { });
                            //                 }
                            //                 if (__this.PlayNeedBack) {
                            //                     __this.PlayNeedBack = false;
                            //                     __this.play();
                            //                 }
                            //                 break;
                            //             case "begin":
                            //                 break;
                            //             case "paused":
                            //                 break;
                            //             case "resumed":
                            //                 break;
                            //             default:
                            //                 break;
                            //         }
                            //     }
                            //     else if (res.type === "sleep") {
                            //         console.log("sleepsleep");
                            //         if (__this.playbackAIui) {
                            //             //__this.playbackAIui = true;//播放完下一条就开启AIUI
                            //             __this.playShortTTS("小智在.");
                            //         }else
                            //         {
                            //             __this.ShouAIUIStatue = true;
                            //             aiuiPlugin.start(function () { }, function () { });
                            //         }
                            //     }
                            //     if (res.type !== "volume" && res.type !== "ttsSpeakProgress" && res.service !== undefined) {
                            //         console.log(res);
                            //     }
                            // }, function (err) {
                            //     console.log(err);
                            // });
                            // let family_id = mainThis.ls.getFamilyId();
                            // mainThis.loginService.GetSceneJson(family_id).subscribe(sceneData => {
                            //     //console.log("情景mp3数据",sceneData);
                            //     sceneData.forEach(s => {
                            //         let needdown = mainThis.ls.getSceneNeedDown(s.name, s.md5);
                            //         if (needdown) {
                            //             mainThis.download("https://oss.zhijiaiot.com/assets/demo/" + family_id + "/" + s.name + ".mp3", s);
                            //         }
                            //     });
                            // });
                        });
                    });
                    mainThis.getFindProductAll(function (product) {
                        if (product.error_code === 0) {
                            mainThis.ls.setProducts(product.data);
                        }
                    });
                }
                else if (data.error_code === -1) {
                    mainThis.ls.clearLocalstorage();
                    var envir = mainThis.ls.inApp();
                    if (envir == 0) {
                        //weixin 重新授权
                        mainThis.loginService.redirectToBind();
                    }
                    else if (envir == 1) {
                        //浏览器  提示用app或微信打开   暂时使用登录界面
                        mainThis.rootPage = 'login';
                    }
                    else if (envir == 2) {
                        mainThis.rootPage = 'login';
                    }
                }
                else {
                    mainThis.rootPage = 'login';
                }
            });
        }, function (err) {
            console.log(err);
        });
        this.channelService.sub("updateIndexList").subscribe(function (data) {
            _this.refstyle();
            _this.FamilyName = _this.ls.getFamilyName();
            _this.RoomList = _this.ls.getRoomList();
        });
        this.channelService.sub("updatePromptInformation").subscribe(function (data) {
            _this.showclass = "tips-list-edit";
        });
        this.channelService.sub("PadAction").subscribe(function (data) {
            if (data.data.tts != undefined) {
                zhijiaPlugin.ttsStop();
                zhijiaPlugin.ttsPlay(data.data.tts.content);
            }
        });
        this.channelService.sub("PadViewUpdate").subscribe(function (data) {
            __WEBPACK_IMPORTED_MODULE_7__event_eventemitter__["a" /* Emitter */].fire("updatefamily", null); //切换显示模式发送修改事件 
        });
        //情景触发
        this.channelService.sub("SceneInvoked").subscribe(function (data) {
            console.log(data);
            // if (this.ls.getPlayScene()) {
            //     //this.showclass = "tips-list-edit";
            //     let scencInfo = this.ls.getScene(data.data.name);
            //     console.log(scencInfo);
            //     //this.pause();
            //     if (scencInfo.nativeURL) {
            //         this.insertQueue({ type: "smp3", url: scencInfo.nativeURL, state: "stop" });
            //         this.clickNext = true;
            //         if (this.CurrentPlay != undefined) {
            //             this.playSceneContinue = true;
            //             this.CurrentPlay.stop();
            //         }
            //         else {
            //             this.play();
            //         }
            //     } else {
            //         this.playShortTTS("执行" + data.data.name + "模式成功");
            //     }
            // } else if (this.ls.getPlayTTS()) {
            //    this.playShortTTS("执行" + data.data.name + "模式成功");
            //}
        });
        this.channelService.sub("PlayControl").subscribe(function (data) {
            //this.showclass = "tips-list-edit";
            console.log("playcontrol", data);
            // if (data.data.command === "0") //暂停
            // {
            //     this.playPause();
            // } else if (data.data.command === "1") {//播放
            //     this.playPlay();
            // } else if (data.data.command === "2") { //下一首
            //     this.playNext();
            // } else if (data.data.command === "3") { //上一首
            //     this.playPrevious();
            // }
        });
    }
    MyApp.prototype.homePlayClick = function (eventName, state) {
        console.log(state);
        switch (state) {
            case "playPlay":
                this.playPlay();
                break;
            case "playPause":
                this.playPause();
                break;
            case "playNext":
                this.playNext();
                break;
            case "playPrevious":
                this.playPrevious();
                break;
        }
    };
    MyApp.prototype.playPause = function () {
        if (this.canClickPlay) {
            console.log("playpuse");
            this.pause();
            this.PlayNeedBack = false;
            this.playNeedContinue = false;
        }
        else {
            this.ls.alert("提示", "正在执行,请稍候点击");
        }
    };
    MyApp.prototype.playPlay = function () {
        if (this.canClickPlay) {
            this.playNeedContinue = true;
            var flag_1 = true;
            this.PlayQueue.forEach(function (queue, index) {
                if (queue.state !== "stoped")
                    flag_1 = false;
            });
            if (flag_1) {
                this.releaseQueue();
                var family_id = this.ls.getFamilyId();
                var __this_1 = this;
                this.loginService.GetBgJson(family_id).subscribe(function (bgData) {
                    bgData = bgData.sort(function () { Math.random() - 0.5; });
                    console.log(bgData);
                    for (var i = 0; i < bgData.length; i++) {
                        var name_1 = bgData[i];
                        __this_1.addQueue({ type: "mp3", bgname: name_1, state: "stop" });
                    }
                    // bgData.forEach(bgName => {
                    //     __this.addQueue({ type: "mp3", bgname: bgName, state: "stop" });
                    // });
                    __this_1.play();
                });
            }
            else
                this.play();
        }
        else {
            this.ls.alert("提示", "正在执行,请稍候点击");
        }
    };
    MyApp.prototype.autoScroll = function () {
        // setTimeout(function () {
        //     if(this.scroll){
        //         console.log(this.scroll);
        //         this.scroll._scrollContent.nativeElement.scrollTop = this.scroll._scrollContent.nativeElement.scrollHeight;
        //     }
        // }, 10);
    };
    //播放普通的TTS文字
    MyApp.prototype.playShortTTS = function (content) {
        //this.CurrentTTSIndex = 0;
        if (this.ls.getPlayTTS()) {
            zhijiaPlugin.ttsPlay(content + "");
        }
    };
    //重置队列
    MyApp.prototype.releaseQueue = function () {
        this.PlayNeedBack = false;
        this.PlayQueue = [];
        if (this.CurrentPlay !== undefined) {
            this.CurrentPlay.release();
            this.CurrentPlay = undefined;
        }
        //aiuiPlugin.ttsStop();
    };
    //{"type":"tts/mp3","bgname":"mp3的名称,具体下载将在播放前进行","content":"tts内容","state":"stop/play/pause/stoped/back"}
    //添加到队列中
    MyApp.prototype.addQueue = function (playModel) {
        this.PlayQueue.push(playModel);
    };
    //插入队列,把要播放的内容放到下一个
    MyApp.prototype.insertQueue = function (playModel) {
        var flag = true;
        for (var i = 0; i < this.PlayQueue.length; i++) {
            var queue = this.PlayQueue[i];
            if (queue.state !== "stoped") {
                this.PlayQueue.splice(i + 1, 0, playModel);
                flag = false;
                break;
            }
        }
        if (flag) {
            this.addQueue(playModel);
        }
    };
    //播放
    MyApp.prototype.play = function () {
        var __this = this;
        console.log(this.PlayQueue);
        for (var i = 0; i < this.PlayQueue.length; i++) {
            var queue = this.PlayQueue[i];
            if (queue.state !== "stoped") {
                __this.CurrentTTSIndex = i;
                if (queue.state === "pause") {
                    if (queue.type === "mp3" || queue.type === "smp3" || queue.type === "news") {
                        __this.CurrentPlay.play();
                    }
                    //} else if (queue.state === "stop") { //是停止的,就开始播放这个资源
                }
                else {
                    if (__this.CurrentPlay !== undefined) {
                        __this.CurrentPlay.release();
                        __this.CurrentPlay = undefined;
                    }
                    if (queue.type === "mp3") {
                        __this.downloadandPlayBg(queue.bgname);
                    }
                    else if (queue.type === "smp3") {
                        __this.playBgMusic(queue.url);
                    }
                    else if (queue.type === "news") {
                        __this.downloadPlayMp3(queue.url);
                    }
                }
                break;
            }
        }
    };
    MyApp.prototype.pause = function () {
        var __this = this;
        console.log("调用暂停", __this.PlayQueue);
        // __this.PlayNeedBack = false;
        // if(__this.CurrentPlay !== undefined)
        //     __this.CurrentPlay.pause();
        //aiuiPlugin.ttsPause();
        for (var i = 0; i < __this.PlayQueue.length; i++) {
            var queue = __this.PlayQueue[i];
            if (queue.state !== "stoped") {
                if (queue.state === "play") {
                    if (queue.type === "mp3" || queue.type === "smp3" || queue.type === "news") {
                        __this.CurrentPlay.pause();
                    }
                    //queue.state = "pause";
                    return true;
                }
                else {
                    //queue.state = "pause";
                    return false;
                }
            }
        }
        return false;
    };
    MyApp.prototype.playNext = function () {
        if (this.canClickPlay) {
            //比长度小1才有下一首
            //if (this.CurrentTTSIndex < this.PlayQueue.length - 1) {
            //把当前歌曲暂停.
            this.playNeedContinue = true;
            this.clickNext = true;
            if (this.CurrentPlay != undefined)
                this.CurrentPlay.stop();
            else
                this.play();
            //}
        }
        else {
            this.ls.alert("提示", "正在执行,请稍候点击");
        }
    };
    MyApp.prototype.playPrevious = function () {
        if (this.canClickPlay) {
            this.playNeedContinue = true;
            this.clickPreview = true;
            if (this.CurrentPlay != undefined)
                this.CurrentPlay.stop();
            else {
                this.play();
            }
        }
        else {
            this.ls.alert("提示", "正在执行,请稍候点击");
        }
    };
    MyApp.prototype.playBgMusic = function (nativeUrl) {
        var _this = this;
        this.canClickPlay = true;
        this.CurrentPlay = this.audio.create(nativeUrl);
        this.CurrentPlay.onStatusUpdate.subscribe(function (status) {
            //2.播放,3.暂停.4停止
            console.log("index:" + _this.CurrentTTSIndex + ",触发的状态:" + status);
            if (status === 4) {
                __WEBPACK_IMPORTED_MODULE_7__event_eventemitter__["a" /* Emitter */].fire("musicState", "stoped");
                //资源释放了
                if (_this.CurrentPlay !== undefined) {
                    _this.CurrentPlay.release();
                }
                _this.PlayQueue[_this.CurrentTTSIndex].state = "stoped";
                if (_this.PlayQueue[_this.CurrentTTSIndex].type === "smp3") {
                    _this.PlayQueue.splice(_this.CurrentTTSIndex, 1);
                }
                if (_this.clickNext) {
                    _this.clickNext = false;
                    if (_this.CurrentTTSIndex === _this.PlayQueue.length - 1)
                        _this.CurrentTTSIndex = 0;
                    _this.play();
                }
                else if (_this.clickPreview) {
                    _this.clickPreview = false;
                    if (_this.CurrentTTSIndex <= _this.PlayQueue.length) {
                        _this.PlayQueue[_this.CurrentTTSIndex].state = "stop";
                        if (_this.CurrentTTSIndex === 0)
                            _this.CurrentTTSIndex = _this.PlayQueue.length;
                        _this.PlayQueue[_this.CurrentTTSIndex - 1].state = "stop";
                        _this.play();
                    }
                }
                else if (_this.playSceneContinue) {
                    _this.playSceneContinue = false;
                    _this.play();
                }
                else if (_this.playNeedContinue) {
                    _this.play();
                }
            }
            else if (status === 2) {
                _this.PlayQueue[_this.CurrentTTSIndex].state = "play";
                __WEBPACK_IMPORTED_MODULE_7__event_eventemitter__["a" /* Emitter */].fire("musicState", "play");
            }
            else if (status === 3) {
                _this.PlayQueue[_this.CurrentTTSIndex].state = "pause";
                __WEBPACK_IMPORTED_MODULE_7__event_eventemitter__["a" /* Emitter */].fire("musicState", "pause");
            }
            console.log("onStatusUpdate:" + _this.CurrentTTSIndex, _this.PlayQueue);
        });
        this.CurrentPlay.play();
    };
    MyApp.prototype.downloadandPlayBg = function (bgName) {
        //aiuiPlugin.ttsPlay("正在缓冲音乐。。", function () { }, function () { });
        this.canClickPlay = false;
        // let needdown = this.ls.getBgNeedDown(bgName);
        // if (needdown) {
        //     let family_id = this.ls.getFamilyId();
        //     let url = "https://oss.zhijiaiot.com/assets/demo/" + family_id + "/" + bgName;
        //     let ft: FileTransferObject = this.txfr.create();
        //     let fn = this.file.dataDirectory + url.substring(url.lastIndexOf('/') + 1);
        //     ft.download(url, fn).then(
        //         (fe: FileEntry) => {
        //             let bgmusic = { name: bgName, nativeURL: fe.nativeURL };
        //             this.ls.setBg(bgmusic);
        //             this.playBgMusic(fe.nativeURL);
        //         },
        //         err => {
        //             console.log(JSON.stringify(err));
        //         }
        //     );
        // } else {
        //     let bgModel = this.ls.getBg(bgName);
        //     this.playBgMusic(bgModel.nativeURL);
        // }
    };
    MyApp.prototype.downloadPlayMp3 = function (url) {
        var _this = this;
        var ft = this.txfr.create();
        var fn = this.file.dataDirectory + url.substring(url.lastIndexOf('/') + 1);
        ft.download(url, fn).then(function (fe) {
            _this.playBgMusic(fe.nativeURL);
        }, function (err) {
            console.log(JSON.stringify(err));
        });
    };
    MyApp.prototype.download = function (url, scene) {
        var _this = this;
        var ft = this.txfr.create();
        var fn = this.file.dataDirectory + url.substring(url.lastIndexOf('/') + 1);
        ft.download(url, fn).then(function (fe) {
            scene.nativeURL = fe.nativeURL;
            _this.ls.setScene(scene);
        }, function (err) {
            console.log(JSON.stringify(err));
        });
    };
    MyApp.prototype.refstyle = function () {
        this.displayMethod = this.ls.getDisplayMethod();
        if (this.displayMethod === 0 || this.displayMethod === 1) {
            if (this.displayMethod === 0) {
                this.colora = "primary";
                this.colorb = "default";
            }
            else {
                this.colora = "default";
                this.colorb = "primary";
            }
        }
        else {
            this.displayMethod = 0;
            this.colora = "primary";
            this.colorb = "default";
        }
        this.ref.detectChanges();
    };
    MyApp.prototype.registerBackButtonAction = function () {
        var _this = this;
        this.platform.registerBackButtonAction(function () {
            if (_this.keyboard.isOpen()) {
                //按下返回键时，先关闭键盘
                _this.keyboard.close();
                return;
            }
            ;
            //如果想点击返回按钮隐藏toast或loading或Overlay就把下面加上
            // this.ionicApp._toastPortal.gaetActive() || this.ionicApp._loadingPortal.getActive() || this.ionicApp._overlayPortal.getActive()
            //不写this.ionicApp._toastPortal.getActive()是因为连按2次退出
            var activePortal = _this.ionicApp._modalPortal.getActive() || _this.ionicApp._overlayPortal.getActive();
            var loadingPortal = _this.ionicApp._loadingPortal.getActive();
            if (activePortal) {
                //其他的关闭
                activePortal.dismiss().catch(function () {
                });
                activePortal.onDidDismiss(function () {
                });
                return;
            }
            if (loadingPortal) {
                //loading的话，返回键无效
                return;
            }
            var activeVC = _this.nav.getActive();
            //  let page = activeVC.instance;
            var tabs = activeVC.instance.tabs;
            var activeNav = tabs.getSelected();
            return activeNav.canGoBack() ? activeNav.pop() : _this.showExit(); //另外两种方法在这里将this.showExit()改为其他两种的方法的逻辑就好。
        }, 1);
    };
    //双击退出提示框
    MyApp.prototype.showExit = function () {
        var _this = this;
        if (this.backButtonPressed) {
            this.platform.exitApp();
        }
        else {
            this.toastCtrl.create({
                message: '再按一次退出应用',
                duration: 2000,
                position: 'bottom',
                cssClass: 'text-align: center'
            }).present();
            this.backButtonPressed = true;
            setTimeout(function () { return _this.backButtonPressed = false; }, 2000); //2秒内没有再次点击返回则将触发标志标记为false
        }
    };
    MyApp.prototype.imageError = function () {
        this.showDefaultAvator = true;
    };
    MyApp.prototype.init = function () {
    };
    ;
    MyApp.prototype.getUser = function (cb) {
        this.loginService.getMyInfo().subscribe(function (data) {
            cb && cb(data);
        }, function (err) { console.log(err); });
    };
    //所有产品列表
    MyApp.prototype.getFindProductAll = function (cb) {
        this.loginService.getFindProductAll().subscribe(function (data) {
            cb && cb(data);
        }, function (err) { console.log(err); });
    };
    //获取LocaUrl Token
    MyApp.prototype.getUrlToken = function (locaUrl) {
        var index = locaUrl.indexOf("token=");
        if (index >= 0)
            return locaUrl.substring(index + 6);
        return "false";
    };
    MyApp.prototype.getUrlS = function (locaUrl) {
        var index = locaUrl.indexOf("s=");
        if (index >= 0) {
            var str = locaUrl.substring(index + 2);
            var lastIndex = str.indexOf("&");
            var lastIndex1 = str.indexOf("?");
            if (lastIndex >= 0 || lastIndex1 >= 0) {
                if (lastIndex >= 0) {
                    var str2 = str.substr(0, lastIndex);
                    var s = parseInt(str2);
                    if (!isNaN(s)) {
                        this.ls.setS(s);
                        this.ls.setSstate("0");
                    }
                    //alert(str1);
                    return str2;
                }
                else {
                    var str1 = str.substr(0, lastIndex1);
                    var s2 = parseInt(str1);
                    if (!isNaN(s2)) {
                        this.ls.setS(s2);
                        this.ls.setSstate("0");
                    }
                    return str1;
                }
            }
            else {
                var s1 = parseInt(str);
                if (!isNaN(s1)) {
                    this.ls.setS(s1);
                    this.ls.setSstate("0");
                }
                return str;
            }
        }
        return "";
    };
    MyApp.prototype.displaymode = function (selectindex) {
        this.ls.setDisplayMethod(selectindex);
        if (selectindex === 0) {
            this.colora = "primary";
            this.colorb = "default";
        }
        else {
            this.colora = "default";
            this.colorb = "primary";
        }
        this.displayMethod = selectindex;
        this.ref.detectChanges();
        __WEBPACK_IMPORTED_MODULE_7__event_eventemitter__["a" /* Emitter */].fire("updatefamily", null); //切换显示模式发送修改事件 
        // this.sceneService.FindIndexListDate(1).subscribe(result => {
        // });
        //this.GetUserBasicInformation(true);
    };
    MyApp.prototype.presentPopover = function (event) {
        var popover = this.popoverCtrl.create('ShebeiFamilyPage', {
            contentEle: this.popoverContent.nativeElement,
        });
        popover.present({
            ev: event
        });
    };
    MyApp.prototype.AIUIBegin = function () {
        //aiuiPlugin.sleep();//先睡眠.读完以后再开启
        this.ShouAIUIStatue = true;
        zhijiaPlugin.start();
        // aiuiPlugin.start(function () { }, function () { });
    };
    MyApp.prototype.AIUIStop = function () {
        this.ShouAIUIStatue = false;
        zhijiaPlugin.stop();
        //aiuiPlugin.stop();
    };
    MyApp.prototype.close = function () {
        this.showclass = "tips-list-edit-hide";
    };
    //头像修改更新
    MyApp.prototype.updateAvator = function () {
        if (this.userInfo !== null && this.userInfo.avator !== null && this.userInfo.avator.length > 0) {
            this.t = Math.random();
            this.userInfoImg = 'http://iot.image.alimmdn.com/avator/' + this.userInfo.avator + '@90w_90h.jpg?t=' + this.t;
        }
        else {
            this.userInfoImg = this.window.nativeWindow.config.host + 'assets/img/user_profile_default.png';
        }
        this.ref.detectChanges();
    };
    MyApp.prototype.eventUserData = function () {
        var _this = this;
        if (this.userInfo !== null && this.userInfo.avator !== null && this.userInfo.avator.length > 0) {
            this.updateAvator();
        }
        else {
            this.getUser(function (data) {
                if (data.error_code === 0) {
                    _this.ls.setUser(data.data); //保存本地用户
                    _this.userInfo = data.data;
                    _this.updateAvator();
                }
            });
        }
    };
    MyApp.prototype.openedMenu = function () {
        this.AIUITalkList = [];
        this.ref.detectChanges();
    };
    MyApp.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    MyApp.prototype.ionViewDidLoad = function () {
        this.ref.markForCheck();
    };
    MyApp.prototype.ngOnDestroy = function () {
        this.ref.detach();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])("scroll"),
        __metadata("design:type", Object)
    ], MyApp.prototype, "scroll", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('popoverContent', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], MyApp.prototype, "popoverContent", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\projects\zhijiatablet\smart_app\app\src\app\app.html"*/'<ion-menu [content]="menuContent" side="right">\n\n    <ion-header no-shadow>\n\n        <ion-navbar transparent no-border-bottom class="toolbar-color-white">\n\n            <ion-title></ion-title>\n\n        </ion-navbar>\n\n    </ion-header>\n\n    <ion-content class="fixedcontent ion-content-switch">\n\n        <div class="voice-wrap">\n\n            <div class="voice-content-bg">\n\n            </div>\n\n            <div class="d-flex flex-column voice-content">\n\n                <div class="voice-top flex-1">\n\n                    <!-- 对话记录 -->\n\n                    <!-- <ion-scroll #scroll scrollY="true" *ngIf="AIUITalkList.length>0"> -->\n\n                        <div *ngFor="let talk of AIUITalkList">\n\n                            <div class="voice-msg-item  justify-content-end voice-msg-right" *ngIf="talk.isSelf">\n\n                                <div class="voice-msg-content ">\n\n                                    {{talk.text}}\n\n                                </div>\n\n                                <h3 class="user_bg">\n\n                                    <img src="assets/img/logo_vertical.png" />\n\n                                </h3>\n\n                            </div>\n\n                            <div class="voice-msg-item  justify-content-start voice-msg-left" *ngIf="!talk.isSelf">\n\n                                <h3>\n\n                                    <img src="assets/img/jiqiren_small.png" />\n\n                                </h3>\n\n                                <div class="voice-msg-content">\n\n                                    {{talk.text}}\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    <!-- </ion-scroll> -->\n\n                    <!-- 默认举例 -->\n\n                    <div class="voice-exp flex-column align-items-center" *ngIf="AIUITalkList.length===0">\n\n                        <h1>你可以这样说：</h1>\n\n                        <p>打开空调.</p>\n\n                        <p>打开灯.</p>\n\n                    </div>\n\n                </div>\n\n                <div class="voice-bottom">\n\n                    <ion-grid>\n\n                        <!-- 默认话筒效果 -->\n\n                        <ion-row *ngIf="!ShouAIUIStatue">\n\n                            <ion-col>\n\n                                <div class="MIC">\n\n                                    <div class="dot" (click)="AIUIBegin()">\n\n                                        <ion-icon name="mic"></ion-icon>\n\n                                    </div>\n\n                                    <div class="pulse"></div>\n\n                                    <div class="pulse1"></div>\n\n                                </div>\n\n                            </ion-col>\n\n                        </ion-row>\n\n                        <!-- 正在说话的时候效果 -->\n\n                        <ion-row *ngIf="ShouAIUIStatue">\n\n                            <ion-col>\n\n                                <div class="text-center">\n\n                                    <button ion-button (click)="AIUIStop()" class="button-MIC-pause">\n\n                                        我说完了\n\n                                    </button>\n\n                                </div>\n\n                                <div id="colorfulPulse" class="d-flex justify-content-center  align-items-center">\n\n                                    <span class="item"></span>\n\n                                    <span class="item"></span>\n\n                                    <span class="item"></span>\n\n                                    <span class="item"></span>\n\n                                    <span class="item"></span>\n\n                                    <span class="item"></span>\n\n                                    <span class="item"></span>\n\n                                    <span class="item"></span>\n\n                                    <span class="item"></span>\n\n                                    <span class="item"></span>\n\n                                    <span class="item"></span>\n\n                                    <span class="item"></span>\n\n                                    <span class="item-1"></span>\n\n                                    <span class="item-2"></span>\n\n                                    <span class="item-3"></span>\n\n                                    <span class="item-4"></span>\n\n                                    <span class="item-5"></span>\n\n                                    <span class="item-6"></span>\n\n                                    <span class="item-7"></span>\n\n                                    <span class="item-8"></span>\n\n                                    <span class="item-9"></span>\n\n                                    <span class="item"></span>\n\n                                    <span class="item"></span>\n\n                                    <span class="item"></span>\n\n                                    <span class="item"></span>\n\n                                    <span class="item"></span>\n\n                                    <span class="item"></span>\n\n                                    <span class="item"></span>\n\n                                    <span class="item"></span>\n\n                                    <span class="item"></span>\n\n                                    <span class="item"></span>\n\n                                    <span class="item"></span>\n\n                                    <span class="item"></span>\n\n                                </div>\n\n                            </ion-col>\n\n                        </ion-row>\n\n                    </ion-grid>\n\n                </div>\n\n            </div>\n\n        </div>\n\n    </ion-content>\n\n</ion-menu>\n\n<ion-nav #myNav [root]="rootPage" #menuContent></ion-nav>'/*ion-inline-end:"C:\projects\zhijiatablet\smart_app\app\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicApp */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_media__["a" /* Media */],
            __WEBPACK_IMPORTED_MODULE_5__providers_login_login__["a" /* LoginProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_channel_channel__["a" /* ChannelProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_localdata_localdata__["a" /* LocaldataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_android_permissions__["a" /* AndroidPermissions */],
            __WEBPACK_IMPORTED_MODULE_12__providers_native_service_native_service__["a" /* NativeServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_constants_constants__["b" /* SignalrWindow */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutoFitLayout; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AutoFitLayout = /** @class */ (function () {
    function AutoFitLayout(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        //因为ionic的默认padding宽度是16
        renderer.setElementStyle(element.nativeElement, 'width', (document.body.clientWidth).toString() + "px");
    }
    AutoFitLayout = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[my-auto-fit-layout]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Renderer */]])
    ], AutoFitLayout);
    return AutoFitLayout;
}());

//# sourceMappingURL=auto-fit-layout.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutojobProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__httpclient_httpclient__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_constants__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { LocalstorageProvider } from '../localstorage/localstorage';
//import { ChannelProvider } from '../channel/channel';

/*
  Generated class for the AutojobProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var AutojobProvider = /** @class */ (function () {
    function AutojobProvider(
        //private channelService: ChannelProvider, 
        //private ls: LocalstorageProvider, 
        http) {
        this.http = http;
    }
    AutojobProvider.prototype.ModifyIsHome = function (sceneId, isHome) {
        var url = __WEBPACK_IMPORTED_MODULE_3__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Scene/ModifyIsHome';
        return this.http.post(url, { sceneId: sceneId, isHome: isHome }).map(this.extractData);
    };
    AutojobProvider.prototype.AddScene = function (familyId, name, jobs) {
        var url = __WEBPACK_IMPORTED_MODULE_3__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Scene/AddScene';
        var jobsJsonStr = JSON.stringify(jobs);
        return this.http.post(url, { familyId: familyId, name: name, jobs: jobsJsonStr }).map(this.extractData);
    };
    AutojobProvider.prototype.SaveJob = function (autojobinfo, conditions, jobs) {
        var url = __WEBPACK_IMPORTED_MODULE_3__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/AutoJob/SaveJob';
        var autojobinfoStr = JSON.stringify(autojobinfo);
        var conditionsStr = JSON.stringify(conditions);
        var jobsStr = JSON.stringify(jobs);
        return this.http.post(url, { autojobinfo: autojobinfoStr, conditions: conditionsStr, jobs: jobsStr }).map(this.extractData);
    };
    AutojobProvider.prototype.initScene = function (familyId) {
        var url = __WEBPACK_IMPORTED_MODULE_3__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Scene/InitScene';
        return this.http.post(url, { familyId: familyId }).map(this.extractData);
    };
    AutojobProvider.prototype.DelAutoJob = function (id) {
        var url = __WEBPACK_IMPORTED_MODULE_3__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/AutoJob/DelAutoJob';
        return this.http.post(url, { id: id }).map(this.extractData);
    };
    AutojobProvider.prototype.GetAutoJobs = function (familyId) {
        var url = __WEBPACK_IMPORTED_MODULE_3__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/AutoJob/GetAutoJobs';
        return this.http.post(url, { familyId: familyId }).map(this.extractData);
    };
    AutojobProvider.prototype.GetAutoJob = function (id, familyId) {
        var url = __WEBPACK_IMPORTED_MODULE_3__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/AutoJob/GetAutoJob';
        return this.http.post(url, { id: id, familyId: familyId }).map(this.extractData);
    };
    AutojobProvider.prototype.GetSceneJob = function (familyId, sceneId) {
        var url = __WEBPACK_IMPORTED_MODULE_3__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Scene/GetSceneJob';
        return this.http.post(url, { familyId: familyId, sceneId: sceneId }).map(this.extractData);
    };
    AutojobProvider.prototype.ExcuteSceneJob = function (sceneId, familyId) {
        var url = __WEBPACK_IMPORTED_MODULE_3__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Scene/ExcuteScene';
        return this.http.post(url, { sceneId: sceneId, familyId: familyId }).map(this.extractData);
    };
    AutojobProvider.prototype.PreExcuteSceneJob = function (jobs, familyId) {
        var url = __WEBPACK_IMPORTED_MODULE_3__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Scene/PreExcuteSceneJob';
        var jobsJsonStr = JSON.stringify(jobs);
        return this.http.post(url, { jobs: jobsJsonStr, familyId: familyId }).map(this.extractData);
    };
    AutojobProvider.prototype.FindJobs = function (productId, deviceId) {
        var url = __WEBPACK_IMPORTED_MODULE_3__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Scene/FindJobs';
        return this.http.post(url, { productId: productId, deviceId: deviceId }).map(this.extractData);
    };
    AutojobProvider.prototype.GetAutoEvent = function (deviceId, productId) {
        var url = __WEBPACK_IMPORTED_MODULE_3__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/AutoJob/GetAutoEvent';
        return this.http.post(url, { deviceId: deviceId, productId: productId }).map(this.extractData);
    };
    AutojobProvider.prototype.FindDevicesByEvent = function (familyId) {
        var url = __WEBPACK_IMPORTED_MODULE_3__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/AutoJob/FindDevicesByEvent';
        return this.http.post(url, { familyId: familyId }).map(this.extractData);
    };
    AutojobProvider.prototype.UpdateEnable = function (id, disabled) {
        var url = __WEBPACK_IMPORTED_MODULE_3__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/AutoJob/UpdateEnable';
        return this.http.post(url, { id: id, disabled: disabled }).map(this.extractData);
    };
    AutojobProvider.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    AutojobProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__httpclient_httpclient__["a" /* HttpclientProvider */]])
    ], AutojobProvider);
    return AutojobProvider;
}());

//# sourceMappingURL=autojob.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DelayProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_constants__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__httpclient_httpclient__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the DelayProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var DelayProvider = /** @class */ (function () {
    function DelayProvider(http) {
        this.http = http;
    }
    //获取设备延时信息
    DelayProvider.prototype.GetDelayInfo = function (deviceId) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Delay/GetDelay/' + deviceId;
        return this.http.get(url).map(this.extractData);
    };
    DelayProvider.prototype.CreateDelay = function (deviceId, jobId, schedule_time, quartzJobId, services, op_type) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Delay/CreateDelay';
        return this.http.post(url, { deviceId: deviceId, jobId: jobId, schedule_time: schedule_time, quartzJobId: quartzJobId, services: services, op_type: op_type }).map(this.extractData);
    };
    DelayProvider.prototype.UpdateDelayState = function (jobId, isOpen) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Delay/UpdateActive';
        return this.http.post(url, { job_id: jobId, is_active: isOpen }).map(this.extractData);
    };
    DelayProvider.prototype.CancelDelay = function (jobId) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Delay/CancelDelay';
        return this.http.post(url, { job_id: jobId }).map(this.extractData);
    };
    DelayProvider.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    DelayProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__httpclient_httpclient__["a" /* HttpclientProvider */]])
    ], DelayProvider);
    return DelayProvider;
}());

//# sourceMappingURL=delay.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoorlockProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_constants__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__httpclient_httpclient__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the DoorlockProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var DoorlockProvider = /** @class */ (function () {
    function DoorlockProvider(http) {
        this.http = http;
    }
    //修改设备锁 关联的用户信息
    DoorlockProvider.prototype.AssociationUser = function (device_id, key_type, key_id, user_type, nickname, username, avator) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + "/api/door/associationuser";
        return this.http.post(url, { device_id: device_id, key_type: key_type, key_id: key_id, user_type: user_type, nickname: nickname, username: username, avator: avator }).map(this.extractData);
    };
    //删除设备锁的用户信息
    DoorlockProvider.prototype.DeleteDeviceUser = function (device_id, key_type, key_id, user_type) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + "/api/door/deletedeviceuser";
        return this.http.post(url, { device_id: device_id, key_type: key_type, key_id: key_id, user_type: user_type }).map(this.extractData);
    };
    //锁详细解绑门磁
    DoorlockProvider.prototype.DoorKeyUnBindMagnet = function (doorid) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + "/api/device/doorkeyunbindmagnet";
        return this.http.post(url, { doorid: doorid }).map(this.extractData);
    };
    //锁详细绑定门磁
    DoorlockProvider.prototype.DoorKeyBindMagnet = function (doorid, magnetid) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + "/api/device/doorKeybindmagnet";
        return this.http.post(url, { doorid: doorid, magnetid: magnetid }).map(this.extractData);
    };
    DoorlockProvider.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    DoorlockProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__httpclient_httpclient__["a" /* HttpclientProvider */]])
    ], DoorlockProvider);
    return DoorlockProvider;
}());

//# sourceMappingURL=doorlock.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntelligentProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_constants__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__httpclient_httpclient__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the IntelligentProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var IntelligentProvider = /** @class */ (function () {
    function IntelligentProvider(http) {
        this.http = http;
    }
    IntelligentProvider.prototype.FindByDeviceIdAsync = function (device_id) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/smart/FindByDeviceIdAsync';
        return this.http.post(url, { device_id: device_id }).map(this.extractData);
    };
    //修改状态
    IntelligentProvider.prototype.UpdateStat = function (id, enable) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/smart/UpdateStat';
        return this.http.post(url, { id: id, enable: enable }).map(this.extractData);
    };
    //查询关联家人
    IntelligentProvider.prototype.FindFamilyName = function (family_id) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/smart/FindFamilyName';
        return this.http.post(url, { family_id: family_id }).map(this.extractData);
    };
    IntelligentProvider.prototype.Save = function (id, device_id, smart_item_id, notify, enable, wechat_users, tts_users) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/smart/Save';
        return this.http.post(url, { id: id, device_id: device_id, smart_item_id: smart_item_id, notify: notify, enable: enable, wechat_users: wechat_users, tts_users: tts_users }).map(this.extractData);
    };
    IntelligentProvider.prototype.FindByRelationIntelligence = function (familyId, deviceId) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/AutoJob/GetAutoJobsByDevice';
        return this.http.post(url, { familyId: familyId, deviceId: deviceId }).map(this.extractData);
    };
    IntelligentProvider.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    IntelligentProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__httpclient_httpclient__["a" /* HttpclientProvider */]])
    ], IntelligentProvider);
    return IntelligentProvider;
}());

//# sourceMappingURL=intelligent.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_constants__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__httpclient_httpclient__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the LogProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var LogProvider = /** @class */ (function () {
    function LogProvider(http) {
        this.http = http;
    }
    //获取锁的日志信息
    //device_id 设备ID take 显示记录条数 skip当前第几页
    LogProvider.prototype.FindDoorLockLog = function (device_id, take, skip) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/log/findmanydevicelog';
        return this.http.post(url, { device_id: device_id, take: take, skip: skip }).map(this.extractData);
    };
    LogProvider.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    LogProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__httpclient_httpclient__["a" /* HttpclientProvider */]])
    ], LogProvider);
    return LogProvider;
}());

//# sourceMappingURL=log.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_constants__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__httpclient_httpclient__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the RoomProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var RoomProvider = /** @class */ (function () {
    function RoomProvider(http) {
        this.http = http;
    }
    RoomProvider.prototype.AddRoomById = function (familyId, room) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Room/CreateRoom';
        return this.http.post(url, { familyId: familyId, name: room.RoomName }).map(this.extractData);
    };
    RoomProvider.prototype.Rename = function (familyId, id, name) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Room/RenameRoom';
        return this.http.post(url, { familyId: familyId, roomid: id, name: name }).map(this.extractData);
    };
    RoomProvider.prototype.remove = function (id) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Room/DeleteRoom/' + id;
        return this.http.post(url, { room_id: id }).map(this.extractData);
    };
    RoomProvider.prototype.GetRoomListById = function (familyId) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Room/FindRooms/' + familyId;
        return this.http.post(url, { family_id: familyId }).map(this.extractData);
    };
    RoomProvider.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    RoomProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__httpclient_httpclient__["a" /* HttpclientProvider */]])
    ], RoomProvider);
    return RoomProvider;
}());

//# sourceMappingURL=room.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimingProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_constants__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__httpclient_httpclient__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the TimingProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var TimingProvider = /** @class */ (function () {
    function TimingProvider(http) {
        this.http = http;
    }
    TimingProvider.prototype.AddTiming = function (deviceId, jobId, dayofweek, quartzJobs) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Timing/CreateTiming';
        // var servicesJsonStr = JSON.stringify(services);
        return this.http.post(url, { device_id: deviceId, job_id: jobId, dayofweek: dayofweek, quartz_job: quartzJobs }).map(this.extractData);
    };
    TimingProvider.prototype.UpdateTiming = function (deviceId, jobId, dayofweek, quartzJobs) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Timing/UpdateTiming';
        return this.http.post(url, { device_id: deviceId, job_id: jobId, dayofweek: dayofweek, quartz_job: quartzJobs }).map(this.extractData);
    };
    TimingProvider.prototype.UpdateTimingState = function (jobId, isOpen) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Timing/UpdateActive';
        return this.http.post(url, { job_id: jobId, is_active: isOpen }).map(this.extractData);
    };
    TimingProvider.prototype.remove = function (jobId, quartzJobId) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Timing/Remove';
        return this.http.post(url, { job_id: jobId, quartzJobId: quartzJobId }).map(this.extractData);
    };
    TimingProvider.prototype.GetTimingListById = function (deviceId) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Timing/FindTimings/' + deviceId;
        return this.http.get(url).map(this.extractData);
    };
    TimingProvider.prototype.GetTiming = function (jobId, deviceId) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* CONFIGURATION */].baseUrls.server + '/api/Timing/GetTiming';
        return this.http.post(url, { jobId: jobId, deviceId: deviceId }).map(this.extractData);
    };
    TimingProvider.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    TimingProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__httpclient_httpclient__["a" /* HttpclientProvider */]])
    ], TimingProvider);
    return TimingProvider;
}());

//# sourceMappingURL=timing.js.map

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocaldataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__localstorage_localstorage__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the LocaldataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var LocaldataProvider = /** @class */ (function () {
    function LocaldataProvider(ls, alertCtrl, loadingCtrl, app) {
        this.ls = ls;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.app = app;
    }
    LocaldataProvider.prototype.inApp = function () {
        //0 微信 1.浏览器  2 app
        var ua = navigator.userAgent.toLowerCase(); //获取判断用的对象
        if (ua.indexOf("micromessenger") > -1) {
            return 0;
        }
        else if (location.href.toLowerCase().indexOf('http') == 0) {
            return 1;
        }
        else {
            return 2;
        }
    };
    ///用户分享家ID
    LocaldataProvider.prototype.setFXFamilyId = function (familyid) {
        this.setLocalStorageAny("FXFamilyId", familyid);
    };
    ///用户分享家ID
    LocaldataProvider.prototype.getFXFamilyId = function () {
        return this.getLocalStorageAny("FXFamilyId");
    };
    ///用户分享家ID 0家庭 1酒店
    LocaldataProvider.prototype.setFXFamilyType = function (FXFamilyType) {
        this.setLocalStorageAny("FXFamilyType", FXFamilyType);
    };
    ///用户分享家ID  0家庭 1酒店
    LocaldataProvider.prototype.getFXFamilyType = function () {
        return this.getLocalStorageAny("FXFamilyType");
    };
    LocaldataProvider.prototype.setRoot = function (pag) {
        this.app.getRootNav().setRoot(pag);
    };
    //设置本地存储数据
    LocaldataProvider.prototype.setLocalStorage = function (key, value) {
        this.ls.set(key, value);
    };
    //读取本地存储数据
    LocaldataProvider.prototype.getLocalStorage = function (key) {
        return this.ls.get(key);
    };
    LocaldataProvider.prototype.isEmpty = function (value) {
        return Object.keys(value).length === 0;
    };
    //设置本地存储对象
    LocaldataProvider.prototype.setLocalStorageAny = function (key, value) {
        this.ls.setObject(key, value);
    };
    //读取本地存储对象
    LocaldataProvider.prototype.getLocalStorageAny = function (key) {
        return this.ls.getObject(key);
    };
    LocaldataProvider.prototype.getBgNeedDown = function (name) {
        var lsBg = this.getLocalStorageAny("bg" + name);
        if (this.isEmpty(lsBg)) {
            return true;
        }
        return false;
    };
    LocaldataProvider.prototype.getBg = function (name) {
        return this.getLocalStorageAny("bg" + name);
    };
    //{"name":"bgName","nativeURL","file://"}
    LocaldataProvider.prototype.setBg = function (data) {
        this.setLocalStorageAny("bg" + data.name, data);
    };
    LocaldataProvider.prototype.getSceneNeedDown = function (name, olMd5) {
        var lsScene = this.getLocalStorageAny("scene" + name);
        if (this.isEmpty(lsScene)) {
            return true;
        }
        else if (lsScene.md5 !== olMd5) {
            return true;
        }
        return false;
    };
    LocaldataProvider.prototype.getScene = function (name) {
        return this.getLocalStorageAny("scene" + name);
    };
    LocaldataProvider.prototype.setScene = function (data) {
        this.setLocalStorageAny("scene" + data.name, data);
    };
    //获取本地缓存的设备信息
    LocaldataProvider.prototype.getLocalDevice = function (device_id) {
        //获取家信息
        var familyId = this.getFamilyId();
        var userBasicInfo = this.getUserBasicInformation();
        if (userBasicInfo && userBasicInfo.length > 0) {
            for (var _i = 0, userBasicInfo_1 = userBasicInfo; _i < userBasicInfo_1.length; _i++) {
                var family = userBasicInfo_1[_i];
                if (family.family_id === familyId) {
                    for (var _a = 0, _b = family.roomlist; _a < _b.length; _a++) {
                        var fa = _b[_a];
                        if (fa.devices != null && fa.devices != "" && fa.devices.length > 0) {
                            for (var _c = 0, _d = fa.devices; _c < _d.length; _c++) {
                                var dev = _d[_c];
                                if (dev.device_id == device_id) {
                                    return dev;
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    LocaldataProvider.prototype.updateLocalDevice = function (device) {
        //更新本地设备信息
        var familyId = this.getFamilyId();
        var userBasicInfo = this.getUserBasicInformation();
        if (userBasicInfo && userBasicInfo.length > 0) {
            outfor: for (var i = 0; i < userBasicInfo.length; i++) {
                if (userBasicInfo[i].family_id === familyId) {
                    for (var j = 0; j < userBasicInfo[i].roomlist.length; j++) {
                        if (userBasicInfo[i].roomlist[j].devices != null && userBasicInfo[i].roomlist[j].devices != "" && userBasicInfo[i].roomlist[j].devices.length > 0) {
                            for (var k = 0; k < userBasicInfo[i].roomlist[j].devices.length; k++) {
                                if (userBasicInfo[i].roomlist[j].devices[k].device_id == device.device_id) {
                                    userBasicInfo[i].roomlist[j].devices[k] = device;
                                    this.setUserBasicInformation(userBasicInfo);
                                    break outfor;
                                    //  return;
                                }
                            }
                        }
                    }
                }
            }
        }
        // for (let family of userBasicInfo) {
        //     if (family.family_id === familyId) {
        //         for (let fa of family.roomlist) {
        //             if (fa.devices != null && fa.devices != "" && fa.devices.length > 0) {
        //                 for (let dev of fa.devices) {
        //                     if (dev.device_id == device.device_id) {
        //                         dev = device;
        //                         this.setUserBasicInformation(userBasicInfo);
        //                         return;
        //                     }
        //                 }
        //             }
        //         }
        //     }
        // }
    };
    //提示框 content 显示内容 2秒关闭
    LocaldataProvider.prototype.showMessage = function (content) {
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: "\n      <div class=\"custom-spinner-container\">\n        <div class=\"custom-spinner-box\">" + content + "</div>\n      </div>",
            duration: 1000
        });
        loading.present();
    };
    //提示框  
    LocaldataProvider.prototype.alert = function (title, message) {
        var prompt1 = this.alertCtrl.create({
            title: title,
            message: message,
            buttons: ["确定"]
        });
        prompt1.present();
    };
    //加载  
    LocaldataProvider.prototype.loading = function (content) {
        if (content === void 0) { content = null; }
        var loading = this.loadingCtrl.create({
            content: content || '加载中...'
        });
        loading.present();
        return loading;
    };
    LocaldataProvider.prototype.Loadingclose = function (loading) {
        if (loading !== null) {
            loading.dismiss();
            loading = null;
        }
    };
    //对话选择框 
    LocaldataProvider.prototype.confirm = function (title, message, functionData) {
        if (title === void 0) { title = null; }
        var prompt1 = this.alertCtrl.create({
            title: title || "确认信息",
            message: message,
            buttons: [
                {
                    text: "取消",
                    role: "",
                    handler: function () {
                        functionData.Callback(false);
                    }
                },
                {
                    text: "确认",
                    handler: function () {
                        functionData.Callback(true);
                    }
                }
            ]
        });
        prompt1.present();
    };
    LocaldataProvider.prototype.inputconfirm = function (title, messageTitle, text, functionData) {
        var _this = this;
        if (text != null && text != "") {
            var alert_1 = this.alertCtrl.create({
                title: title,
                inputs: [
                    {
                        name: 'name',
                        value: text
                        // placeholder: '输入分组名称'
                    }
                ],
                buttons: [
                    {
                        text: '取消',
                        role: '取消',
                        handler: function (data) {
                            functionData.Callback("");
                        }
                    },
                    {
                        text: '保存',
                        handler: function (data) {
                            if (data.name == null || data.name == "") {
                                _this.alert("提示信息", messageTitle);
                                return;
                            }
                            else
                                functionData.Callback(data);
                        }
                    }
                ]
            });
            alert_1.present();
        }
        else {
            var alert_2 = this.alertCtrl.create({
                title: title,
                inputs: [
                    {
                        name: 'name',
                        placeholder: '输入分组名称'
                    }
                ],
                buttons: [
                    {
                        text: '取消',
                        role: '取消',
                        handler: function (data) {
                            functionData.Callback("");
                        }
                    },
                    {
                        text: '保存',
                        handler: function (data) {
                            if (data.name == null || data.name == "") {
                                _this.alert("提示信息", messageTitle);
                                return;
                            }
                            else
                                functionData.Callback(data);
                        }
                    }
                ]
            });
            alert_2.present();
        }
    };
    //获取本地token
    LocaldataProvider.prototype.getToken = function () {
        return this.ls.get("token");
    };
    ;
    LocaldataProvider.prototype.clearLocalstorage = function () {
        this.ls.remove("token");
        this.ls.remove("user");
        this.ls.remove("familyId");
    };
    //设置当前用户token
    LocaldataProvider.prototype.setToken = function (token) {
        this.ls.set("token", token);
    };
    //获取本地保存当前家ID
    LocaldataProvider.prototype.getFamilyId = function () {
        return this.getLocalStorageAny("familyId");
    };
    //设置本地保存当前家ID
    LocaldataProvider.prototype.setFamilyId = function (familyId) {
        this.setLocalStorageAny("familyId", familyId);
    };
    //获取本地保存当前家的名称
    LocaldataProvider.prototype.getFamilyName = function () {
        return this.getLocalStorage("familyName");
    };
    //设置本地保存当前家的名称
    LocaldataProvider.prototype.setFamilyName = function (familyName) {
        this.setLocalStorage("familyName", familyName);
    };
    //获取所有家数据
    LocaldataProvider.prototype.getFamilyList = function () {
        return this.getLocalStorageAny("familylist");
    };
    //设置所有家数据
    LocaldataProvider.prototype.setFamilyList = function (familylist) {
        this.setLocalStorageAny("familylist", familylist);
    };
    //设置用户登录后的家,房间设备数据
    LocaldataProvider.prototype.setUserBasicInformation = function (userBasicInformation) {
        this.setLocalStorageAny("userBase", userBasicInformation);
    };
    //获取用户登录后的家,房间设备数据
    LocaldataProvider.prototype.getUserBasicInformation = function () {
        return this.getLocalStorageAny("userBase");
    };
    //获取所有房间数据
    LocaldataProvider.prototype.getRoomList = function () {
        return this.getLocalStorageAny("roomlist");
    };
    //设置所有房间数据
    LocaldataProvider.prototype.setRoomList = function (roomlist) {
        this.setLocalStorageAny("roomlist", roomlist);
    };
    //获取本地用户信息
    LocaldataProvider.prototype.getUser = function () {
        return this.getLocalStorageAny("user");
    };
    //设置本地用户信息
    LocaldataProvider.prototype.setUser = function (user) {
        this.setLocalStorageAny("user", user);
    };
    //获取当前用户username
    LocaldataProvider.prototype.getUserName = function () {
        return this.getUser().username;
    };
    //获取当前用户Id
    LocaldataProvider.prototype.getUserId = function () {
        return this.getUser().id;
    };
    //获取所有产品数据
    LocaldataProvider.prototype.getProducts = function () {
        return this.getLocalStorageAny("products");
    };
    //设置所有产品数据
    LocaldataProvider.prototype.setProducts = function (products) {
        this.setLocalStorageAny("products", products);
    };
    //当前家的管理者
    LocaldataProvider.prototype.getRoomUserName = function () {
        return this.getLocalStorageAny("roomUserName");
    };
    //设置所有房间数据
    LocaldataProvider.prototype.setRoomUserName = function (username) {
        this.setLocalStorageAny("roomUserName", username);
    };
    //设置当前添加操作参数
    LocaldataProvider.prototype.setS = function (s) {
        this.setLocalStorageAny("s", s);
    };
    //设置当前添加操作参数
    LocaldataProvider.prototype.getS = function () {
        var data = this.getLocalStorageAny("s");
        return data == null || data == "" ? 0 : data;
    };
    //设置当前添加操作是否已完成
    LocaldataProvider.prototype.setSstate = function (s) {
        this.setLocalStorageAny("sstate", s);
    };
    //设置当前添加操作是否已完成
    LocaldataProvider.prototype.getSstate = function () {
        return this.getLocalStorageAny("sstate");
    };
    //实时天气
    LocaldataProvider.prototype.setWeather = function (products) {
        this.setLocalStorageAny("weather", products);
    };
    //实时天气
    LocaldataProvider.prototype.getWeather = function () {
        return this.getLocalStorageAny("weather");
    };
    //提示左滑信息
    LocaldataProvider.prototype.setPromptInformation = function (info) {
        this.setLocalStorageAny("promptinformation", info);
    };
    //提示左滑信息
    LocaldataProvider.prototype.getPromptInformation = function () {
        return this.getLocalStorageAny("promptinformation");
    };
    //设置情景播放是否打开
    LocaldataProvider.prototype.setPlayScene = function (state) {
        this.setLocalStorageAny("PlaySceneState", state);
    };
    LocaldataProvider.prototype.getPlayScene = function () {
        var state = this.getLocalStorageAny("PlaySceneState");
        if (state !== true && state !== false) {
            this.setPlayScene(true);
            return true;
        }
        else
            return state;
    };
    //设置TTS播放是否打开
    LocaldataProvider.prototype.setPlayTTS = function (state) {
        this.setLocalStorageAny("PlayTTSState", state);
    };
    LocaldataProvider.prototype.getPlayTTS = function () {
        var state = this.getLocalStorageAny("PlayTTSState");
        if (state !== true && state !== false) {
            this.setPlayTTS(true);
            return true;
        }
        else
            return state;
    };
    //首页列表页面显示方式 0//列表 1//九公格
    LocaldataProvider.prototype.setDisplayMethod = function (value) {
        this.setLocalStorageAny("displayMethod", value);
    };
    //首页列表页面显示方式
    LocaldataProvider.prototype.getDisplayMethod = function () {
        return this.getLocalStorageAny("displayMethod");
    };
    //当前用户是否是该设备的管理员 返回true 为管理员 username参数为 设备的username
    LocaldataProvider.prototype.isUserAdministrator = function () {
        if (this.getUserName() === this.getRoomUserName())
            return true;
        else
            return false;
    };
    //获取时间段
    LocaldataProvider.prototype.initShowTimeStr = function (startTime, endTime) {
        var str = "";
        if (startTime != "" && endTime != "") {
            if (startTime == "00:00" && endTime == "00:00") {
                str = "全天";
            }
            else {
                var start = parseInt(startTime);
                var end = parseInt(endTime);
                if (end <= start) {
                    str = startTime + "到第二天" + endTime;
                }
                else {
                    str = startTime + "到" + endTime;
                }
            }
        }
        return str;
    };
    LocaldataProvider.prototype.timeToString = function (hours) {
        var str = "00:00";
        var hoursStr = "";
        if (hours < 10) {
            hoursStr = "0" + hours;
        }
        else {
            hoursStr = hours.toString();
        }
        str = hoursStr + ":00";
        return str;
    };
    //获取选中的日期
    LocaldataProvider.prototype.getSelectedMsg = function (data) {
        var str = "";
        if (data.length == 0) {
            return "执行一次";
        }
        if (data.length == 2) {
            if ((data.find(function (i) { return i.toString() == "6"; }) != undefined) && (data.find(function (i) { return i.toString() == "0"; }) != undefined)) {
                return "周末";
            }
        }
        else if (data.length == 5) {
            if ((!data.find(function (i) { return i.toString() == "6"; })) && (!data.find(function (i) { return i.toString() == "0"; }))) {
                return "工作日";
            }
        }
        else if (data.length == 7) {
            return "每天";
        }
        data.forEach(function (element) {
            switch (element.toString()) {
                case "1":
                    str += "星期一 ";
                    break;
                case "2":
                    str += "星期二 ";
                    break;
                case "3":
                    str += "星期三 ";
                    break;
                case "4":
                    str += "星期四 ";
                    break;
                case "5":
                    str += "星期五 ";
                    break;
                case "6":
                    str += "星期六 ";
                    break;
                case "0":
                    str += "星期天 ";
                    break;
            }
        });
        return str;
    };
    //获取延时显示字符串
    LocaldataProvider.prototype.delayToTimeStr = function (delay) {
        var str = "";
        if (delay > 0) {
            var sec_num = delay; // don't forget the second param
            var hours = Math.floor(sec_num / 3600);
            var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
            var seconds = sec_num - (hours * 3600) - (minutes * 60);
            var hoursStr = "";
            var minutesStr = "";
            var secondsStr = "";
            if (hours < 10) {
                hoursStr = "0" + hours;
            }
            else {
                hoursStr = hours.toString();
            }
            if (minutes < 10) {
                minutesStr = "0" + minutes;
            }
            else {
                minutesStr = minutes.toString();
            }
            if (seconds < 10) {
                secondsStr = "0" + seconds;
            }
            else {
                secondsStr = seconds.toString();
            }
            if (hours != 0) {
                str += hoursStr + '小时';
            }
            if (minutes != 0) {
                str += minutesStr + '分钟';
            }
            str += secondsStr + "秒";
        }
        else {
            str = "0秒";
        }
        return str;
    };
    LocaldataProvider.prototype.GetAnfangIcon = function (scene) {
        if (scene == "外出设防") {
            return "waichushefang";
        }
        else if (scene == "拆防") {
            return "chaifang";
        }
        else if (scene == "在家设防") {
            return "zaijiabufang";
        }
        else {
            return "anfang";
        }
    };
    LocaldataProvider.prototype.InitAirTitle = function (extend_props) {
        var str = "";
        console.log("extend_props");
        console.log(extend_props);
        if (extend_props.on_off) {
            str += "电源:开";
        }
        else {
            str += "电源:关";
        }
        str += " 温度:" + extend_props.temperature;
        var windArr = [];
        if (extend_props.ud_wind_direction == 1) {
            windArr.push("上下风向");
        }
        if (extend_props.lr_wind_direction == 1) {
            windArr.push("左右风向");
        }
        if (windArr.length > 0) {
            str += " 风向:" + windArr.join(',');
        }
        else {
            str += " 风向:" + "自动";
        }
        if (extend_props.mode == 1) {
            str += " 模式:自动";
        }
        else if (extend_props.mode == 2) {
            str += " 模式:制冷";
        }
        else if (extend_props.mode == 3) {
            str += " 模式:除湿";
        }
        else if (extend_props.mode == 4) {
            str += " 模式:送风";
        }
        else if (extend_props.mode == 5) {
            str += " 模式:制热";
        }
        if (extend_props.air_volume == 0) {
            str += " 风量:自动";
        }
        else if (extend_props.air_volume == 1) {
            str += " 风量:低";
        }
        else if (extend_props.air_volume == 2) {
            str += " 风量:中";
        }
        else if (extend_props.air_volume == 3) {
            str += " 风量:高";
        }
        return str;
    };
    LocaldataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__localstorage_localstorage__["a" /* LocalstorageProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* App */]])
    ], LocaldataProvider);
    return LocaldataProvider;
}());

//# sourceMappingURL=localdata.js.map

/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export WindowRef */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SignalrWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CONFIGURATION; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

function _window() {
    // return the global native browser window object
    return window;
}
var WindowRef = /** @class */ (function () {
    function WindowRef() {
    }
    Object.defineProperty(WindowRef.prototype, "nativeWindow", {
        get: function () {
            return _window();
        },
        enumerable: true,
        configurable: true
    });
    WindowRef = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], WindowRef);
    return WindowRef;
}());

/**
 * When SignalR runs it will add functions to the global $ variable
 * that you use to create connections to the hub. However, in this
 * class we won't want to depend on any global variables, so this
 * class provides an abstraction away from using $ directly in here.
 */
var SignalrWindow = /** @class */ (function (_super) {
    __extends(SignalrWindow, _super);
    function SignalrWindow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SignalrWindow;
}(WindowRef));

var CONFIGURATION = {
    baseUrls: {
        server: _window().config.host
        // server: '' 
    },
    hubName: {
        serverName: 'deviceHub'
    }
};
//# sourceMappingURL=constants.js.map

/***/ })

},[221]);
//# sourceMappingURL=main.js.map