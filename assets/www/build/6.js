webpackJsonp([6],{

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectanfangModule", function() { return SelectanfangModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selectanfang__ = __webpack_require__(318);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SelectanfangModule = /** @class */ (function () {
    function SelectanfangModule() {
    }
    SelectanfangModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__selectanfang__["a" /* SelectanfangComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__selectanfang__["a" /* SelectanfangComponent */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__selectanfang__["a" /* SelectanfangComponent */]
            ]
        })
    ], SelectanfangModule);
    return SelectanfangModule;
}());

//# sourceMappingURL=selectanfang.module.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectanfangComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_localdata_localdata__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SelectanfangComponent = /** @class */ (function () {
    //  <!--<ion-select multiple="true" placeholder="请至少选择一种安防模式" interface="action-sheet" okText="确定" cancelText="取消" [(ngModel)]="autojobInfo.scenes">
    //                     <ion-option value="外出设防">外出设防模式下执行</ion-option>
    //                     <ion-option value="拆防">拆防模式下执行</ion-option>
    //                     <ion-option value="在家设防">在家设防模式下执行</ion-option>
    //                 </ion-select>-->
    function SelectanfangComponent(navCtrl, modalCtrl, params, viewCtrl, localDataService) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.localDataService = localDataService;
        this.isMultiple = false;
        this.isWaichu = false;
        this.isChaifang = false;
        this.isZaijia = false;
        this.scenes = [];
        this.scene = "";
        var model = params.get("item");
        if (model != null && model.isMultiple) {
            this.isMultiple = model.isMultiple;
        }
        if (model != null && model.scene != null && model.scene != "") {
            this.scene = model.scene;
        }
        if (this.isMultiple) {
            if (model != null && model.scenes) {
                this.isMultiple = model.isMultiple;
                this.scenes = model.scenes;
                this.initScenes();
            }
        }
        else {
        }
    }
    SelectanfangComponent.prototype.initScenes = function () {
        var _this = this;
        this.scenes.forEach(function (item) {
            if (item == "外出设防") {
                _this.isWaichu = true;
            }
            else if (item == "拆防") {
                _this.isChaifang = true;
            }
            else if (item == "在家设防") {
                _this.isZaijia = true;
            }
        });
    };
    SelectanfangComponent.prototype.selectScene = function (scene) {
        this.scene = scene;
        this.dismiss(this.scene);
    };
    SelectanfangComponent.prototype.ok = function () {
        if (this.isWaichu || this.isChaifang || this.isZaijia) {
            this.scenes = [];
            if (this.isWaichu) {
                this.scenes.push("外出设防");
            }
            if (this.isChaifang) {
                this.scenes.push("拆防");
            }
            if (this.isZaijia) {
                this.scenes.push("在家设防");
            }
            this.dismiss(this.scenes);
        }
        else {
            this.localDataService.alert("提示", "请至少选择一种安防模式。");
        }
    };
    SelectanfangComponent.prototype.dismiss = function (data) {
        this.viewCtrl.dismiss(data);
    };
    SelectanfangComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'select-anfang',template:/*ion-inline-start:"C:\projects\zhijiatablet\smart_app_duer\app\src\components\selectanfang\selectanfang.html"*/'<ion-list *ngIf="isMultiple" class="list-popover">\n\n    <ion-item>\n\n        <ion-avatar item-left>\n\n            <span class="scene-icon"><ion-icon class="iconfont icon-waichushefang"></ion-icon></span>\n\n        </ion-avatar>\n\n        <ion-label>\n\n            <h2>外出设防</h2>\n\n            <p>在外出设防模式下执行</p>\n\n        </ion-label>\n\n        <ion-checkbox item-right [(ngModel)]="isWaichu"></ion-checkbox>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-avatar item-left>\n\n            <span class="scene-icon"><ion-icon class="iconfont icon-chaifang"></ion-icon></span>\n\n        </ion-avatar>\n\n        <ion-label>\n\n            <h2>拆防</h2>\n\n            <p>在拆防模式下执行</p>\n\n        </ion-label>\n\n        <ion-checkbox item-right [(ngModel)]="isChaifang"></ion-checkbox>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-avatar item-left>\n\n            <span class="scene-icon"><ion-icon class="iconfont icon-zaijiabufang"></ion-icon></span>\n\n        </ion-avatar>\n\n        <ion-label>\n\n            <h2>在家设防</h2>\n\n            <p>在家设防模式下执行</p>\n\n        </ion-label>\n\n        <ion-checkbox item-right [(ngModel)]="isZaijia"></ion-checkbox>\n\n    </ion-item>\n\n</ion-list>\n\n<ion-row *ngIf="isMultiple">\n\n    <ion-col>\n\n        <button ion-button round color="light" block (click)="dismiss(false)">取消</button>\n\n    </ion-col>\n\n    <ion-col>\n\n        <button ion-button round block (click)=ok()>确定</button>\n\n    </ion-col>\n\n</ion-row>\n\n<ion-list *ngIf="!isMultiple" class="list-popover">\n\n    <ion-item   *ngIf="scene == \'外出设防\'" actived (click)="selectScene(\'外出设防\')">\n\n        <ion-avatar item-left>\n\n            <span class="scene-icon"><ion-icon class="iconfont icon-waichushefang"></ion-icon></span>\n\n        </ion-avatar>\n\n        <ion-label>\n\n            <h2>外出设防</h2>\n\n        </ion-label>\n\n    </ion-item>\n\n    <ion-item   *ngIf="scene != \'外出设防\'" (click)="selectScene(\'外出设防\')">\n\n        <ion-avatar item-left>\n\n            <span class="scene-icon"><ion-icon class="iconfont icon-waichushefang"></ion-icon></span>\n\n        </ion-avatar>\n\n        <ion-label>\n\n            <h2>外出设防</h2>\n\n        </ion-label>\n\n    </ion-item>\n\n    <ion-item   *ngIf="scene == \'拆防\'" actived (click)="selectScene(\'拆防\')">\n\n        <ion-avatar item-left>\n\n            <span class="scene-icon"><ion-icon class="iconfont icon-chaifang"></ion-icon></span>\n\n        </ion-avatar>\n\n        <ion-label>\n\n            <h2>拆防</h2>\n\n        </ion-label>\n\n    </ion-item>\n\n    <ion-item   *ngIf="scene != \'拆防\'" (click)="selectScene(\'拆防\')">\n\n        <ion-avatar item-left>\n\n            <span class="scene-icon"><ion-icon class="iconfont icon-chaifang"></ion-icon></span>\n\n        </ion-avatar>\n\n        <ion-label>\n\n            <h2>拆防</h2>\n\n        </ion-label>\n\n    </ion-item>\n\n    <ion-item *ngIf="scene == \'在家设防\'" actived (click)="selectScene(\'在家设防\')">\n\n        <ion-avatar item-left>\n\n            <span class="scene-icon"><ion-icon class="iconfont icon-zaijiabufang"></ion-icon></span>\n\n        </ion-avatar>\n\n        <ion-label>\n\n            <h2>在家设防</h2>\n\n        </ion-label>\n\n    </ion-item>\n\n    <ion-item *ngIf="scene != \'在家设防\'" (click)="selectScene(\'在家设防\')">\n\n        <ion-avatar item-left>\n\n            <span class="scene-icon"><ion-icon class="iconfont icon-zaijiabufang"></ion-icon></span>\n\n        </ion-avatar>\n\n        <ion-label>\n\n            <h2>在家设防</h2>\n\n        </ion-label>\n\n    </ion-item>\n\n</ion-list>'/*ion-inline-end:"C:\projects\zhijiatablet\smart_app_duer\app\src\components\selectanfang\selectanfang.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_localdata_localdata__["a" /* LocaldataProvider */]])
    ], SelectanfangComponent);
    return SelectanfangComponent;
}());

//# sourceMappingURL=selectanfang.js.map

/***/ })

});
//# sourceMappingURL=6.js.map