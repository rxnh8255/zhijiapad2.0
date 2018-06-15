webpackJsonp([5],{

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_pipe_module__ = __webpack_require__(214);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
                __WEBPACK_IMPORTED_MODULE_3__app_pipe_module__["a" /* PipesModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]
            ]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_localdata_localdata__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_login_login__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_constants_constants__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, lp, loadingCtrl, loginp, window, ref) {
        this.navCtrl = navCtrl;
        this.lp = lp;
        this.loadingCtrl = loadingCtrl;
        this.loginp = loginp;
        this.window = window;
        this.ref = ref;
        this.showWeiXinLogin = true;
        this.disable = false;
        this.second = 0;
        this.firstSend = true;
        this.canSend = true;
    }
    LoginPage.prototype.ngOnInit = function () {
        this.ref.markForCheck();
        var token = this.lp.getToken();
        if (token != null && token != "") {
            //token不为空就跳转到首页?如果token过期呢?
            //todo?
            this.navCtrl.push("tabs");
        }
    };
    LoginPage.prototype.ngOnDestroy = function () {
        this.ref.detach();
    };
    LoginPage.prototype.getVerificationCode = function () {
        var _this = this;
        //发送短信码
        this.canSend = false;
        this.second = 120;
        this.firstSend = false;
        this.intervalVal = setInterval(function () {
            if (_this.second > 0) {
                _this.second = _this.second - 1;
            }
            if (_this.second <= 0) {
                clearInterval(_this.intervalVal);
                _this.canSend = true;
            }
        }, 1000);
        //发送短信验证码
        this.loginp.LoginSendCode(this.mobile, 3).subscribe(function (data) {
            console.log(data);
            if (data.error_code == 1) {
                _this.lp.alert("提示", "手机号没有注册，请点击‘注册’按钮进行注册");
            }
            _this.ref.detectChanges();
        }, function (fail) {
            console.log(fail);
            _this.lp.alert("提示", "服务器连接失败，请稍后再试。");
        });
        this.ref.detectChanges();
    };
    LoginPage.prototype.loadingInit = function () {
        this.loading = this.loadingCtrl.create({
            content: '请稍等...',
            dismissOnPageChange: true
        });
    };
    LoginPage.prototype.loadingEnd = function (obj) {
        obj.loading.dismissAll();
        obj.loading = null;
    };
    LoginPage.prototype.submitVerficationCode = function () {
        var _this = this;
        //短信码登录
        this.loadingInit();
        this.loading.present().then(function () {
            //验证通过 更新手机号码
            _this.disable = true;
            _this.loginp.Login(_this.ValidNumber, 3, _this.mobile, _this.nickname, _this.unionid, _this.avator).subscribe(function (data) {
                _this.loadingEnd(_this);
                if (data.error_code != 0) {
                    _this.disable = false;
                    _this.lp.alert("错误", data.error_message);
                }
                else {
                    console.log("登錄成功");
                    //todo 路由 
                    _this.setToken(data.data.access_token);
                    // this.navCtrl.push("tabs");
                }
            }, function (error) {
                _this.disable = false;
                _this.loadingEnd(_this);
                console.log(error);
                _this.lp.alert("提示", "服务器链接失败，请稍后再试。");
            });
            _this.ref.detectChanges();
        });
    };
    LoginPage.prototype.setToken = function (token) {
        this.lp.setToken(token);
        var locaturl = this.window.nativeWindow.location.toString();
        locaturl = locaturl.substring(0, locaturl.lastIndexOf('#'));
        this.window.nativeWindow.location.replace(locaturl);
    };
    LoginPage.prototype.getUser = function (cb, obj) {
        obj.loginp.getMyInfo().subscribe(function (data) {
            cb && cb(data);
        }, function (err) { console.log(err); });
    };
    //所有产品列表
    LoginPage.prototype.getFindProductAll = function (cb) {
        this.loginp.getFindProductAll().subscribe(function (data) {
            cb && cb(data);
        }, function (err) { console.log(err); });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\projects\zhijiatablet\smart_app_duer\app\src\pages\login\login.html"*/'<!--<ion-header no-shadow>\n\n  <ion-navbar no-border-bottom>\n\n    <ion-title>\n\n      登录\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>-->\n\n<ion-content class="user-login-bg">\n\n  <div class="user-login">\n\n    <div class="app-logo">\n\n      <img src="{{\'i_zhijia_logo.png\' | host}}" />\n\n    </div>\n\n    <ion-list class="user-login-list">\n\n      <ion-item>\n\n        <ion-icon name="phone-portrait" item-left></ion-icon>\n\n        <ion-input item-left type="text" placeholder="手机号" [(ngModel)]="mobile" required></ion-input>\n\n\n\n        <button ion-button item-right round small  [disabled]="!canSend || mobile==null || mobile.length<11" (click)="getVerificationCode()">\n\n        <span *ngIf="canSend"><span *ngIf="!firstSend">重新</span>发送验证码</span>\n\n        <span  item-right  *ngIf="!canSend"   >{{second}}</span>\n\n        </button>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-icon class="iconfont icon-yanzhengma" item-left></ion-icon>\n\n        <ion-input type="text" placeholder="短信验证码" [(ngModel)]="ValidNumber" required></ion-input>\n\n      </ion-item>\n\n    </ion-list>\n\n    <ion-row>\n\n      <ion-col>\n\n        <button ion-button block round [disabled]="mobile==null || mobile.length<11 || ValidNumber==null || ValidNumber==\'\' || disable"\n\n          (click)="submitVerficationCode()">登录</button>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row  *ngIf="showWeiXinLogin">\n\n      <ion-col>\n\n        <button ion-button round block (click)="weixinlogin()" [disabled]="disable">微信登录</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </div>\n\n  <div class="companyname">\n\n            <img src="{{\'i_company_name.png\' | host}}" />\n\n        </div>\n\n</ion-content>'/*ion-inline-end:"C:\projects\zhijiatablet\smart_app_duer\app\src\pages\login\login.html"*/ //,
            //providers: [LocaldataProvider,LocaldataProvider]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_localdata_localdata__["a" /* LocaldataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_login_login__["a" /* LoginProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_constants_constants__["b" /* SignalrWindow */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=5.js.map