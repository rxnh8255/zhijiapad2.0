webpackJsonp([4],{

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SueimiangPageModule", function() { return SueimiangPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sueimiang__ = __webpack_require__(339);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SueimiangPageModule = /** @class */ (function () {
    function SueimiangPageModule() {
    }
    SueimiangPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sueimiang__["a" /* SueimiangPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sueimiang__["a" /* SueimiangPage */]),
            ],
        })
    ], SueimiangPageModule);
    return SueimiangPageModule;
}());

//# sourceMappingURL=sueimiang.module.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SueimiangPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SueimiangPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SueimiangPage = /** @class */ (function () {
    function SueimiangPage(navCtrl, _sanitizer, navParams) {
        this.navCtrl = navCtrl;
        this._sanitizer = _sanitizer;
        this.navParams = navParams;
        this.shuimianUrl = this._sanitizer.bypassSecurityTrustResourceUrl('');
    }
    SueimiangPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SueimiangPage');
        this.shuimianUrl = this._sanitizer.bypassSecurityTrustResourceUrl("http://zhijiaiot.com/sleep/index.html");
    };
    SueimiangPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-sueimiang',template:/*ion-inline-start:"C:\projects\zhijiatablet\smart_app_duer\app\src\pages\sueimiang\sueimiang.html"*/'<ion-header no-shadow>\n\n  <ion-navbar transparent no-border-bottom class="toolbar-color-white">\n\n      <ion-title></ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="fixedcontent">\n\n    <iframe id="iframe" style="height:100%;width:100%; border:0;"\n\n    sandbox="allow-scripts allow-top-navigation allow-pointer-lock allow-same-origin allow-popups allow-forms"\n\n    [src]="shuimianUrl">\n\n</iframe>\n\n  <!-- <iframe data-tap-disabled="true" style="height:100%;width:100%;" ng-src="http://zhijiaiot.com/sleep/index.html"></iframe>   -->\n\n</ion-content>\n\n'/*ion-inline-end:"C:\projects\zhijiatablet\smart_app_duer\app\src\pages\sueimiang\sueimiang.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], SueimiangPage);
    return SueimiangPage;
}());

//# sourceMappingURL=sueimiang.js.map

/***/ })

});
//# sourceMappingURL=4.js.map