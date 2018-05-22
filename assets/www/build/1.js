webpackJsonp([1],{

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchlightPageModule", function() { return SwitchlightPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__switchlight__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_pipe_module__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_colorpicker_lib_color_picker_module__ = __webpack_require__(314);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SwitchlightPageModule = /** @class */ (function () {
    function SwitchlightPageModule() {
    }
    SwitchlightPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__switchlight__["a" /* SwitchlightPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__app_pipe_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_colorpicker_lib_color_picker_module__["a" /* ColorPickerComponentModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__switchlight__["a" /* SwitchlightPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__switchlight__["a" /* SwitchlightPage */]
            ]
        })
    ], SwitchlightPageModule);
    return SwitchlightPageModule;
}());

//# sourceMappingURL=switchlight.module.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorPickerComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__color_picker_directive__ = __webpack_require__(315);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ColorPickerComponentModule = /** @class */ (function () {
    function ColorPickerComponentModule() {
    }
    ColorPickerComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__color_picker_directive__["a" /* ColorPickerDirective */],
                __WEBPACK_IMPORTED_MODULE_2__color_picker_directive__["c" /* TextDirective */],
                __WEBPACK_IMPORTED_MODULE_2__color_picker_directive__["b" /* SliderDirective */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__color_picker_directive__["a" /* ColorPickerDirective */],
                __WEBPACK_IMPORTED_MODULE_2__color_picker_directive__["c" /* TextDirective */],
                __WEBPACK_IMPORTED_MODULE_2__color_picker_directive__["b" /* SliderDirective */]
            ]
        })
    ], ColorPickerComponentModule);
    return ColorPickerComponentModule;
}());

//# sourceMappingURL=color-picker.module.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorPickerDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return TextDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SliderDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color_picker_service__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes__ = __webpack_require__(216);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { Observable } from 'rxjs/Observable'; 



var ColorPickerDirective = /** @class */ (function () {
    function ColorPickerDirective(el, service, ref) {
        this.el = el;
        this.service = service;
        this.ref = ref;
        this.rgbColorChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */](true);
        this.colorPickerChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */](true);
        this.cpTemperatureChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */](true);
        this.cpTouchChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */](true);
        this.lightBarAllHeight = 200;
        this.cpToggleChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */](true);
        this.cpPosition = 'right';
        this.cpPositionOffset = '0%';
        this.cpPositionRelativeToArrow = false;
        this.cpOutputFormat = 'hex';
        this.cpPresetLabel = 'Preset colors';
        this.cpCancelButton = false;
        this.cpCancelButtonClass = 'cp-cancel-button-class';
        this.cpCancelButtonText = 'Cancel';
        this.cpOKButton = false;
        this.cpOKButtonClass = 'cp-ok-button-class';
        this.cpOKButtonText = 'OK';
        this.cpFallbackColor = '#fff';
        this.cpHeight = 'auto';
        this.bgHeight = '130';
        this.cpWidth = '100%';
        this.cpIgnoredElements = [];
        this.cpDialogDisplay = 'popup';
        this.cpSaveClickOutside = true;
        this.cpAlphaChannel = 'hex6';
        this.cpType = "rgb"; //选择器类型 rgb,rgbw,wy,rwy,rbgww,padwy
        this.contentHeight = 'auto';
        this.cpCt = 0; //0-100 色温
        this.cpBn = 0; //0-100 亮度
        this.cpW = 0; //0-100 亮度
        this.left = 'auto'; //这里是临时加到，不然编译不过
        this.ignoreChanges = false;
        this.lastX = 0; //最新x
        this.lastY = 0; //最新y
        this.lastMoveX = 0; //最新移动x距离
        this.lastMoveY = 0; //最新移动y距离
        this.totalY = 0; //亮度總高度
        this.hueLeft = 0; //亮度部分焦點x位置
        this.huetop = 0; //兩點部分焦點y位置
        this.lightBarHeight = 0; //亮度條高度 
        this.lightShowState = false; // 亮度显示状态
        this.hueShowState = false; // 颜色条显示状态
        this.cpTemperatureWhitePercent = 0; // 色温 白色透明度
        this.templateYellowPosition = 0; // 色温 黄色条位置
        this.white = 0; //白色滑条
        this.whiteLeft = 0; //白色滑条
        this.yellow = 0; //黄色滑条 
        this.showWhiteBar = false; //
        this.created = false;
    }
    ColorPickerDirective.prototype.ngOnChanges = function (changes) {
        if (changes.cpToggle) {
            // if (changes.cpToggle.currentValue) 
            // if (!changes.cpToggle.currentValue && this.dialog) this.dialog.closeColorPicker();
        }
        if (changes.colorPicker) {
            if (!this.ignoreChanges) {
                if (this.cpDialogDisplay === 'inline') {
                    this.setInitialColor(changes.colorPicker.currentValue);
                }
                this.setColorFromString(changes.colorPicker.currentValue, false);
            }
            this.ignoreChanges = false;
        }
    };
    ColorPickerDirective.prototype.ngAfterViewInit = function () {
        if (this.cpType === "wy" || this.cpType === "rwy" || this.cpType === "padwy") {
            // this.cpTemperatureWhitePercent = this.cpBn / 100;
            this.templateYellowPosition = this.cpCt / 100 * parseInt(this.temperatureSlider.nativeElement.offsetWidth);
            this.lightBarHeight = 200 * (1 - this.cpBn / 100);
            this.cpTemperatureWhitePercent = 0.5 - this.lightBarHeight / 400;
        }
        else {
            this.hsva = this.service.stringToHsva(this.colorPicker);
            this.slider = new __WEBPACK_IMPORTED_MODULE_2__classes__["e" /* SliderPosition */]((this.hsva.h) * this.sliderDimMax.h, this.hsva.s * this.sliderDimMax.s - 8, (1 - this.hsva.v) * this.sliderDimMax.v - 8, this.hsva.a * this.sliderDimMax.a - 8);
            this.lightBarHeight = 200 * (this.slider.v / parseInt(this.bgHeight));
        }
    };
    ColorPickerDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.ref.markForCheck();
        var hsva = this.service.stringToHsva(this.colorPicker);
        if (hsva === null)
            hsva = this.service.stringToHsva(this.colorPicker, true);
        if (hsva == null) {
            hsva = this.service.stringToHsva(this.cpFallbackColor);
        }
        this.colorPickerChange.emit(this.service.outputFormat(hsva, this.cpOutputFormat, this.cpAlphaChannel === 'hex8'));
        var alphaWidth = this.alphaSlider.nativeElement.offsetWidth;
        var hueWidth = this.hueSlider.nativeElement.offsetWidth;
        if (!this.sliderDimMax) {
            this.sliderDimMax = new __WEBPACK_IMPORTED_MODULE_2__classes__["d" /* SliderDimension */](hueWidth, this.el.nativeElement.offsetWidth, parseInt(this.bgHeight), alphaWidth);
        }
        if (this.sliderDimMax.a == 0 && this.sliderDimMax.s == 0 && this.sliderDimMax.h == 0) {
            this.sliderDimMax = new __WEBPACK_IMPORTED_MODULE_2__classes__["d" /* SliderDimension */](343, 375, 300, 343);
        }
        if (!this.slider) {
            this.slider = new __WEBPACK_IMPORTED_MODULE_2__classes__["e" /* SliderPosition */](0, 0, 0, 0);
        }
        if (this.cpOutputFormat === 'rgba') {
            this.format = 1;
        }
        else if (this.cpOutputFormat === 'hsla') {
            this.format = 2;
        }
        else {
            this.format = 0;
        }
        if (this.cpW !== 0) {
            this.whiteLeft = (this.cpW / 255) * this.whiteSlider.nativeElement.offsetWidth;
            this.white = this.cpW; // (val.x / this.whiteSlider.nativeElement.offsetWidth) * 255;
        }
        //    this.listenerMouseDown = (event: any) => { this.onMouseDown(event) };
        this.listenerResize = function () { _this.onResize(); };
        this.openDialog(this.initialColor, false);
    };
    ColorPickerDirective.prototype.ngOnDestroy = function () {
        this.ref.detach();
    };
    ColorPickerDirective.prototype.setInitialColor = function (color) {
        this.initialColor = color;
    };
    ColorPickerDirective.prototype.openDialog = function (color, emit) {
        if (emit === void 0) { emit = true; }
        this.setInitialColor(color);
        this.setColorFromString(color, emit);
        this.openColorPicker();
    };
    ColorPickerDirective.prototype.cancelColor = function () {
        this.setColorFromString(this.initialColor, true);
        if (this.cpDialogDisplay === 'popup') {
            this.colorChanged(this.initialColor, true);
            this.closeColorPicker();
        }
    };
    ColorPickerDirective.prototype.oKColor = function () {
        if (this.cpDialogDisplay === 'popup') {
            this.closeColorPicker();
        }
    };
    ColorPickerDirective.prototype.setColorFromString = function (value, emit) {
        if (emit === void 0) { emit = true; }
        //console.log("setColorFromString");
        var hsva;
        if (this.cpAlphaChannel === 'hex8') {
            hsva = this.service.stringToHsva(value, true);
            if (!hsva && !this.hsva) {
                hsva = this.service.stringToHsva(value, false);
            }
        }
        else {
            hsva = this.service.stringToHsva(value, false);
        }
        if (hsva) {
            this.hsva = hsva;
            this.update(emit);
        }
    };
    // onMouseDown(event: any) {
    //     console.log("onmousedown");
    //     if ((!this.isDescendant(this.el.nativeElement, event.target)
    //         && event.target != this.el.nativeElement &&
    //         this.cpIgnoredElements.filter((item: any) => item === event.target).length === 0) && this.cpDialogDisplay === 'popup') {
    //         if (!this.cpSaveClickOutside) {
    //             this.setColorFromString(this.initialColor, false);
    //             this.colorChanged(this.initialColor)
    //         }
    //         this.closeColorPicker();
    //     }
    // }
    ColorPickerDirective.prototype.openColorPicker = function () {
        if (!this.show) {
            //this.setDialogPosition();
            this.show = true;
            this.toggle(true);
            // document.addEventListener('mousedown', this.listenerMouseDown);
            window.addEventListener('resize', this.listenerResize);
        }
    };
    ColorPickerDirective.prototype.closeColorPicker = function () {
        if (this.show) {
            console.log("closecolorpicker");
            this.show = false;
            this.toggle(false);
            //  document.removeEventListener('mousedown', this.listenerMouseDown);
            window.removeEventListener('resize', this.listenerResize);
        }
    };
    ColorPickerDirective.prototype.onResize = function () {
        if (this.position === 'fixed') {
            //  this.setDialogPosition();
        }
    };
    ColorPickerDirective.prototype.setSaturation = function (val) {
        var hsla = this.service.hsva2hsla(this.hsva);
        hsla.s = val.v / val.rg;
        this.hsva = this.service.hsla2hsva(hsla);
        this.update();
    };
    ColorPickerDirective.prototype.setLightness = function (val) {
        var hsla = this.service.hsva2hsla(this.hsva);
        hsla.l = val.v / val.rg;
        this.hsva = this.service.hsla2hsva(hsla);
        this.update();
    };
    ColorPickerDirective.prototype.setHue = function (val) {
        this.hsva.h = val.v / val.rg;
        this.update();
    };
    ColorPickerDirective.prototype.setAlpha = function (val) {
        this.hsva.a = val.v / val.rg;
        this.update();
    };
    ColorPickerDirective.prototype.setR = function (val) {
        var rgba = this.service.hsvaToRgba(this.hsva);
        rgba.r = val.v / val.rg;
        this.hsva = this.service.rgbaToHsva(rgba);
        this.update();
    };
    ColorPickerDirective.prototype.setG = function (val) {
        var rgba = this.service.hsvaToRgba(this.hsva);
        rgba.g = val.v / val.rg;
        this.hsva = this.service.rgbaToHsva(rgba);
        this.update();
    };
    ColorPickerDirective.prototype.setB = function (val) {
        var rgba = this.service.hsvaToRgba(this.hsva);
        rgba.b = val.v / val.rg;
        this.hsva = this.service.rgbaToHsva(rgba);
        this.update();
    };
    ColorPickerDirective.prototype.setTemplate = function (val) {
        this.templateYellowPosition = val.x;
        var width = parseInt(this.temperatureSlider.nativeElement.offsetWidth);
        this.yellow = (val.x / width) * 100;
        this.cpTemperatureChange.emit({ ct: this.yellow, bn: this.white });
    };
    ColorPickerDirective.prototype.setTemplateWhite = function (val) {
        console.log(val);
        this.lastX = val.x;
        this.lastY = val.y;
        var _moveX = val.x - val.startX;
        var _moveY = val.y - val.startY;
        var moveX = _moveX - this.lastMoveX;
        var movey = _moveY - this.lastMoveY;
        var width = parseInt(this.temperatureSlider.nativeElement.offsetWidth);
        console.log("moveX:" + moveX + ",movey:" + movey + ",_moveX:" + _moveX + ",_moveY:" + _moveY + ",this.lastMoveX:" + this.lastMoveY + ",this.lastMoveX:" + this.lastMoveY);
        this.templateYellowPosition = (this.templateYellowPosition + moveX / 1.3) > width ? width : (this.templateYellowPosition + moveX / 1.3);
        this.lightBarHeight = (this.lightBarHeight + movey / 2) > 200 ? 200 : (this.lightBarHeight + movey / 1.3);
        if (this.templateYellowPosition < 0) {
            this.templateYellowPosition = 0;
        }
        if (this.lightBarHeight < 0) {
            this.lightBarHeight = 0;
        }
        this.lastMoveX = _moveX;
        this.lastMoveY = _moveY;
        this.yellow = (this.templateYellowPosition / width) * 100;
        this.white = (1 - (this.lightBarHeight / 200)) * 100;
        this.cpTemperatureWhitePercent = 0.5 - this.lightBarHeight / 400; //避免全白 本身高度只有200
        console.log("cpTemperatureWhitePercent:" + this.cpTemperatureWhitePercent + ",white:" + this.lightBarHeight);
        this.cpTemperatureChange.emit({ bn: this.white < 1 ? 1 : this.white, ct: this.yellow < 1 ? 1 : this.yellow });
    };
    ColorPickerDirective.prototype.setW = function (val) {
        this.whiteLeft = val.x;
        this.white = (val.x / this.whiteSlider.nativeElement.offsetWidth) * 255;
        this.rgbwChanged();
    };
    ColorPickerDirective.prototype.toggleWhiteBar = function () {
        console.log("tw");
        this.showWhiteBar = !this.showWhiteBar;
        this.ref.detectChanges();
    };
    ColorPickerDirective.prototype.setSaturationAndBrightness = function (val) {
        this.lastX = val.x;
        this.lastY = val.y;
        var _moveX = val.x - val.startX;
        var _moveY = val.y - val.startY;
        console.log("startX:" + val.startX + " ,x:" + val.x + " ,moveX:" + _moveX + "starty:" + val.startY + " ,x:" + val.y + " ,moveY:" + _moveY + " sliderH:" + this.slider.h);
        if (val.s === undefined || val.v === undefined || val.x === undefined || val.y === undefined || val.startX === undefined || val.startY === undefined || _moveY === undefined || _moveX === undefined) {
            return;
        }
        var moveX = _moveX - this.lastMoveX;
        var moveY = _moveY - this.lastMoveY;
        this.lastMoveX = _moveX;
        this.lastMoveY = _moveY;
        var update = false;
        if (((isNaN(_moveY) && _moveX !== undefined) || (!isNaN(_moveX) && Math.abs(_moveX) >= Math.abs(_moveY))) && _moveX !== 0) {
            // console.log(1);
            var hueWidth = this.hueSlider.nativeElement.offsetWidth;
            moveX = moveX / 1.3;
            var target = this.slider.h + moveX;
            if (target >= hueWidth) {
                this.hsva.h = 0;
            }
            else if (target <= 0) {
                this.hsva.h = 0;
            }
            else {
                var tv = target / hueWidth;
                this.hsva.h = tv / val.rgX;
            }
            console.log(target);
            this.hueShowState = true;
            update = true;
        }
        else if (((isNaN(_moveX) && _moveY !== undefined) || (!isNaN(_moveY) && Math.abs(_moveX) < Math.abs(_moveY))) && _moveY !== 0) {
            this.lightShowState = true;
            this.totalY = this.totalY + moveY / 1.3;
            if (this.totalY > parseInt(this.bgHeight)) {
                this.totalY = parseInt(this.bgHeight);
                this.lightBarHeight = 200;
                this.hsva.v = 1;
            }
            else if (this.totalY <= 0) {
                this.totalY = 1;
                this.lightBarHeight = 1;
                this.hsva.v = 1;
            }
            else {
                var v = 1 - this.totalY / parseInt(this.bgHeight);
                this.hsva.v = v / val.rgY;
            }
            update = true;
        } // else { console.log(3); return; }
        // console.log(4);
        if (update) {
            this.hueLeft = val.x;
            if (this.hsva.v == 1 && this.hsva.h == 0) {
                this.hsva = new __WEBPACK_IMPORTED_MODULE_2__classes__["b" /* Hsva */](0, 1, 1, 1);
            }
        }
        this.update();
    };
    ColorPickerDirective.prototype.setLightCursor = function (startTouch) {
        this.lightShowState = startTouch;
        if (!startTouch) {
            this.hideBar();
        }
        else {
            this.cpTouchChange.emit(true);
        }
    };
    ColorPickerDirective.prototype.settemplateYellowPosition = function (startTouch) {
        this.hueShowState = startTouch;
        this.lightShowState = startTouch;
        if (!startTouch) {
            this.lastMoveX = 0;
            this.lastMoveY = 0;
            this.hideBar();
        }
        else {
            this.cpTouchChange.emit(true);
        }
    };
    ColorPickerDirective.prototype.touchState = function (start) {
        if (!start) {
            this.hideBar();
        }
    };
    ColorPickerDirective.prototype.hideBar = function (touching) {
        if (touching === void 0) { touching = false; }
        this.lightShowState = false;
        this.hueShowState = false;
        this.showWhiteBar = false;
        this.cpTouchChange.emit(touching);
    };
    ColorPickerDirective.prototype.formatPolicy = function () {
        this.format = (this.format + 1) % 3;
        if (this.format === 0 && this.hsva.a < 1 && this.cpAlphaChannel === 'hex6') {
            this.format++;
        }
        return this.format;
    };
    ColorPickerDirective.prototype.update = function (emit) {
        if (emit === void 0) { emit = true; }
        console.log("update:" + emit);
        var hsla = this.service.hsva2hsla(this.hsva);
        var rgba = this.service.denormalizeRGBA(this.service.hsvaToRgba(this.hsva));
        var hueRgba = this.service.denormalizeRGBA(this.service.hsvaToRgba(new __WEBPACK_IMPORTED_MODULE_2__classes__["b" /* Hsva */](this.hsva.h, 1, 1, 1)));
        this.hslaText = new __WEBPACK_IMPORTED_MODULE_2__classes__["a" /* Hsla */](Math.round((hsla.h) * 360), Math.round(hsla.s * 100), Math.round(hsla.l * 100), Math.round(hsla.a * 100) / 100);
        this.rgbaText = new __WEBPACK_IMPORTED_MODULE_2__classes__["c" /* Rgba */](rgba.r, rgba.g, rgba.b, Math.round(rgba.a * 100) / 100);
        this.hexText = this.service.hexText(rgba, this.cpAlphaChannel === 'hex8');
        this.alphaSliderColor = 'rgb(' + rgba.r + ',' + rgba.g + ',' + rgba.b + ')';
        this.hueSliderColor = 'rgb(' + hueRgba.r + ',' + hueRgba.g + ',' + hueRgba.b + ')';
        if (this.format === 0 && this.hsva.a < 1 && this.cpAlphaChannel === 'hex6') {
            this.format++;
        }
        var lastOutput = this.outputColor;
        this.outputColor = this.service.outputFormat(this.hsva, this.cpOutputFormat, this.cpAlphaChannel === 'hex8');
        console.log(lastOutput);
        console.log(this.outputColor);
        this.selectedColor = this.service.outputFormat(this.hsva, 'rgba', false);
        var hueWidth = this.hueSlider.nativeElement.offsetWidth;
        // console.log("hueWidth:" + hueWidth + ",hueHeight:" + this.hueSlider.nativeElement.offsetHeight);
        if (!this.sliderDimMax) {
            var alphaWidth = this.alphaSlider.nativeElement.offsetWidth;
            this.sliderDimMax = new __WEBPACK_IMPORTED_MODULE_2__classes__["d" /* SliderDimension */](hueWidth, this.el.nativeElement.offsetWidth, parseInt(this.bgHeight), alphaWidth);
        }
        this.slider = new __WEBPACK_IMPORTED_MODULE_2__classes__["e" /* SliderPosition */]((this.hsva.h) * this.sliderDimMax.h, this.hsva.s * this.sliderDimMax.s - 8, (1 - this.hsva.v) * this.sliderDimMax.v - 8, this.hsva.a * this.sliderDimMax.a - 8);
        if (this.hueLeft == 0) {
            this.hueLeft = this.slider.s;
            this.huetop = this.slider.v;
            // this.lightBarHeight =  (200 / parseInt(this.lightSlider.nativeElement.offsetHeight)) * 200;//亮度条长度
            //最新亮度坐標
            this.totalY = this.huetop;
            // console.log("totalY:" + this.totalY);
            this.lastX = this.hueLeft;
            this.lastY = this.huetop;
            // this.lightBarHeight = 200 * (this.totalY / parseInt(this.bgHeight));
        }
        if (this.cpType !== 'wy' && this.cpType !== 'rwy' && this.cpType !== 'padwy') {
            this.lightBarHeight = 200 * (this.totalY / parseInt(this.bgHeight));
        }
        //  this.lightBarHeight = (200 / parseInt(this.lightSlider.nativeElement.offsetHeight)) * this.slider.v;
        if (emit && lastOutput !== this.outputColor) {
            this.colorChanged(this.outputColor);
        }
    };
    ColorPickerDirective.prototype.isDescendant = function (parent, child) {
        var node = child.parentNode;
        while (node !== null) {
            if (node === parent) {
                return true;
            }
            node = node.parentNode;
        }
        return false;
    };
    ColorPickerDirective.prototype.onClick = function () {
        var _this = this;
        if (this.cpIgnoredElements.filter(function (item) { return item === _this.el.nativeElement; }).length === 0) {
        }
    };
    ColorPickerDirective.prototype.colorChanged = function (value, ignore) {
        if (ignore === void 0) { ignore = true; }
        this.ignoreChanges = ignore;
        this.colorPickerChange.emit(value);
        this.rgbwChanged();
    };
    ColorPickerDirective.prototype.rgbwChanged = function () {
        var rgbs = this.service.hsvatorgba(this.hsva);
        // this.outputColor = this.service.outputFormat(this.hsva, this.cpOutputFormat, this.cpAlphaChannel === 'hex8');
        this.rgbColorChange.emit([rgbs[0], rgbs[1], rgbs[2], Math.round(this.white)]);
    };
    ColorPickerDirective.prototype.changeInput = function (value) {
        this.setColorFromString(value, true);
    };
    ColorPickerDirective.prototype.toggle = function (value) {
        this.cpToggleChange.emit(value);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('colorPicker'),
        __metadata("design:type", String)
    ], ColorPickerDirective.prototype, "colorPicker", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])('rgbColorChange'),
        __metadata("design:type", Object)
    ], ColorPickerDirective.prototype, "rgbColorChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])('colorPickerChange'),
        __metadata("design:type", Object)
    ], ColorPickerDirective.prototype, "colorPickerChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])('cpTemperatureChange'),
        __metadata("design:type", Object)
    ], ColorPickerDirective.prototype, "cpTemperatureChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])('cpTouchChange'),
        __metadata("design:type", Object)
    ], ColorPickerDirective.prototype, "cpTouchChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('cpToggle'),
        __metadata("design:type", Boolean)
    ], ColorPickerDirective.prototype, "cpToggle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('lightBarAllHeight'),
        __metadata("design:type", Number)
    ], ColorPickerDirective.prototype, "lightBarAllHeight", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])('cpToggleChange'),
        __metadata("design:type", Object)
    ], ColorPickerDirective.prototype, "cpToggleChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('cpPosition'),
        __metadata("design:type", String)
    ], ColorPickerDirective.prototype, "cpPosition", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('cpPositionOffset'),
        __metadata("design:type", String)
    ], ColorPickerDirective.prototype, "cpPositionOffset", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('cpPositionRelativeToArrow'),
        __metadata("design:type", Boolean)
    ], ColorPickerDirective.prototype, "cpPositionRelativeToArrow", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('cpOutputFormat'),
        __metadata("design:type", String)
    ], ColorPickerDirective.prototype, "cpOutputFormat", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('cpPresetLabel'),
        __metadata("design:type", String)
    ], ColorPickerDirective.prototype, "cpPresetLabel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('cpPresetColors'),
        __metadata("design:type", Array)
    ], ColorPickerDirective.prototype, "cpPresetColors", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('cpCancelButton'),
        __metadata("design:type", Boolean)
    ], ColorPickerDirective.prototype, "cpCancelButton", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('cpCancelButtonClass'),
        __metadata("design:type", String)
    ], ColorPickerDirective.prototype, "cpCancelButtonClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('cpCancelButtonText'),
        __metadata("design:type", String)
    ], ColorPickerDirective.prototype, "cpCancelButtonText", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('cpOKButton'),
        __metadata("design:type", Boolean)
    ], ColorPickerDirective.prototype, "cpOKButton", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('cpOKButtonClass'),
        __metadata("design:type", String)
    ], ColorPickerDirective.prototype, "cpOKButtonClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('cpOKButtonText'),
        __metadata("design:type", String)
    ], ColorPickerDirective.prototype, "cpOKButtonText", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('cpFallbackColor'),
        __metadata("design:type", String)
    ], ColorPickerDirective.prototype, "cpFallbackColor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('cpHeight'),
        __metadata("design:type", String)
    ], ColorPickerDirective.prototype, "cpHeight", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('bgHeight'),
        __metadata("design:type", String)
    ], ColorPickerDirective.prototype, "bgHeight", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('cpWidth'),
        __metadata("design:type", String)
    ], ColorPickerDirective.prototype, "cpWidth", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('cpIgnoredElements'),
        __metadata("design:type", Object)
    ], ColorPickerDirective.prototype, "cpIgnoredElements", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('cpDialogDisplay'),
        __metadata("design:type", String)
    ], ColorPickerDirective.prototype, "cpDialogDisplay", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('cpSaveClickOutside'),
        __metadata("design:type", Boolean)
    ], ColorPickerDirective.prototype, "cpSaveClickOutside", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('cpAlphaChannel'),
        __metadata("design:type", String)
    ], ColorPickerDirective.prototype, "cpAlphaChannel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('cpType'),
        __metadata("design:type", String)
    ], ColorPickerDirective.prototype, "cpType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('contentHeight'),
        __metadata("design:type", String)
    ], ColorPickerDirective.prototype, "contentHeight", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('cpCt'),
        __metadata("design:type", Number)
    ], ColorPickerDirective.prototype, "cpCt", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('cpBn'),
        __metadata("design:type", Number)
    ], ColorPickerDirective.prototype, "cpBn", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('cpw'),
        __metadata("design:type", Number)
    ], ColorPickerDirective.prototype, "cpW", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('left'),
        __metadata("design:type", String)
    ], ColorPickerDirective.prototype, "left", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('hueSlider'),
        __metadata("design:type", Object)
    ], ColorPickerDirective.prototype, "hueSlider", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('alphaSlider'),
        __metadata("design:type", Object)
    ], ColorPickerDirective.prototype, "alphaSlider", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('lightSlider'),
        __metadata("design:type", Object)
    ], ColorPickerDirective.prototype, "lightSlider", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('temperatureSlider'),
        __metadata("design:type", Object)
    ], ColorPickerDirective.prototype, "temperatureSlider", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('templateWhiteSlider'),
        __metadata("design:type", Object)
    ], ColorPickerDirective.prototype, "templateWhiteSlider", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('dialogPopup'),
        __metadata("design:type", Object)
    ], ColorPickerDirective.prototype, "dialogElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('whiteSlider'),
        __metadata("design:type", Object)
    ], ColorPickerDirective.prototype, "whiteSlider", void 0);
    ColorPickerDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[colorPicker]',template:/*ion-inline-start:"C:\projects\zhijiatablet\smart_app_duer\app\src\components\colorpicker\lib\color-picker.html"*/'<div class="color-picker" [style.height.px]="cpHeight" [style.left.px]="left" #dialogPopup>\n\n\n\n    <div [style.display]="cpType===\'padwy\'?\'block\':\'none\'">\n\n        <!-- <div class="equipment-colorpicker-bg" style="left:0px;top:100px;position:relative; background-color:transparent; transition: all 0.5s ease;" [@lightShowState]="lightShowState"\n\n            [style.top.px]="100">\n\n            <div class="equipment-colorpicker"> -->\n\n        <!--明暗-->\n\n        <!-- <div class="color-light">\n\n                    <span style="top:100px;" [style.top.px]="lightBarHeight"></span>\n\n                    <b style="height:100px;" [style.height.px]="lightBarHeight"></b>\n\n                </div> \n\n            </div>\n\n        </div> -->\n\n        <div style="top:0px;position:relative; transition: all 0.5s ease;z-index:3">\n\n            <div class="right">\n\n                <div class="color-temperature" [slider] [rgX]="1" [rgT]="1" (newValue)="setTemplate($event)" (startTouch)="settemplateYellowPosition($event)" #temperatureSlider>\n\n                    <span style="left:50px" [style.left.px]="templateYellowPosition" style="top: -15px;"></span>\n\n                </div>\n\n            </div>\n\n        </div>\n\n        <div [slider] style="width:100%;z-index:2;" [rgX]="1" [style.opacity]="cpTemperatureWhitePercent"\n\n            [rgY]="1" [rgT]="1" \n\n            #templateWhiteSlider>\n\n            <div [style.left.px]="lastX" [style.top.px]="lastY" [@hueShowState]="hueShowState"></div>\n\n        </div>\n\n        <div style="display:none" #hueSlider>\n\n\n\n        </div>\n\n        <div style="display:none" #alphaSlider>\n\n\n\n        </div>\n\n    </div>\n\n\n\n</div>'/*ion-inline-end:"C:\projects\zhijiatablet\smart_app_duer\app\src\components\colorpicker\lib\color-picker.html"*/,
            styles: ["\n      .color-picker * {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n    margin: 0;\n    font-size: 11px;\n}\n\n.color-picker {\n    cursor: default;\n    width: 100%;\n    height: auto;\n    top: 250px;\n    z-index: 1000;\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -khtml-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n\n.color-picker i {\n    cursor: default;\n    position: relative;\n}\n\n.color-picker input {\n    text-align: center;\n    font-size: 13px;\n    height: 26px;\n    -moz-appearance: textfield;\n}\n\n.color-picker input:invalid {\n    box-shadow: none;\n}\n\n.color-picker input:-moz-submit-invalid {\n    box-shadow: none;\n}\n\n.color-picker input:-moz-ui-invalid {\n    box-shadow: none;\n}\n\n.color-picker input::-webkit-inner-spin-button, .color-picker input::-webkit-outer-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n}\n\n.color-picker .button-area {\n    padding: 0 16px 16px 16px;\n    text-align: right;\n}\n\n.color-picker .preset-area {\n    padding: 4px 15px;\n}\n\n.color-picker .preset-area .preset-label {\n    width: 100%;\n    padding: 4px;\n    font-size: 11px;\n    text-align: left;\n    color: #555;\n}\n\n.color-picker .preset-area .preset-color {\n    cursor: pointer;\n    display: inline-block;\n    width: 18px;\n    height: 18px;\n    margin: 4px 6px 8px 6px;\n    -moz-border-radius: 25%;\n    -webkit-border-radius: 25%;\n    border-radius: 25%;\n    -khtml-border-radius: 25%;\n    border: #a9a9a9 solid 1px;\n}\n\n.color-picker .arrow {\n    height: 0;\n    width: 0;\n    border-style: solid;\n    position: absolute;\n    z-index: 999999;\n}\n\n.color-picker .arrow-right {\n    border-width: 5px 10px;\n    border-color: transparent #777 transparent transparent;\n    top: 10px;\n    left: -20px;\n}\n\n.color-picker .arrow-left {\n    border-width: 5px 10px;\n    border-color: transparent transparent transparent #777;\n    top: 10px;\n    left: 231px;\n}\n\n.color-picker .arrow-bottom {\n    border-width: 10px 5px;\n    border-color: transparent transparent #777 transparent;\n    top: -20px;\n    left: 10px;\n}\n\n.color-picker .arrow-top {\n    border-width: 10px 5px;\n    border-color: #777 transparent transparent transparent;\n    left: 10px;\n}\n\n.color-picker div.cursor-sv {\n    cursor: default;\n    position: relative;\n    -moz-border-radius: 50%;\n    -webkit-border-radius: 50%;\n    border-radius: 50%;\n    -khtml-border-radius: 50%;\n    width: 15px;\n    height: 15px;\n    border: #ddd solid 1px;\n}\n\n.color-picker div.cursor {\n    cursor: default;\n    position: relative;\n    width: 10px;\n        height: 10px;\n        border-top: 10px solid rgba(255, 255, 255, 0.60);\n        border-left: 10px solid transparent;\n        border-right: 10px solid transparent;\n}\n\n.color-picker .saturation-lightness {\n    cursor: pointer;\n    width: 100%;\n    height: 130px;\n    border: none;\n    background-size: 100% 100%;\n}\n\n.color-picker .box {\n    display: flex;\n    padding: 4px 8px;\n}\n\n.color-picker .box .left {\n    position: relative;\n    padding: 16px 8px;\n}\n\n.color-picker .box .right {\n    flex: 1 1 auto;\n    padding: 12px 8px;\n}\n\n.color-picker .hue {\n    cursor: pointer;\n    width: 100%;\n    height: 16px;\n    border: none;\n    margin-bottom: 16px;\n    background-size: 100% 100%;\n    background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwkUFWbCCAAAAFxJREFUaN7t0kEKg0AQAME2x83/n2qu5qCgD1iDhCoYdpnbQC9bbY1qVO/jvc6k3ad91s7/7F1/csgPrujuQ17BDYSFsBAWwgJhISyEBcJCWAgLhIWwEBYIi2f7Ar/1TCgFH2X9AAAAAElFTkSuQmCC\");\n}\n\n.color-picker .alpha {\n    cursor: pointer;\n    width: 100%;\n    height: 16px;\n    border: none;\n    background-size: 100% 100%;\n    background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwYQlZMa3gAAAWVJREFUaN7tmEGO6jAQRCsOArHgBpyAJYGjcGocxAm4A2IHpmoWE0eBH+ezmFlNvU06shJ3W6VEelWMUQAIIF9f6qZpimsA1LYtS2uF51/u27YVAFZVRUkEoGHdPV/sIcbIEIIkUdI/9Xa7neyv61+SWFUVAVCSct00TWn2fv6u3+Ecfd3tXzy/0+nEUu+SPjo/kqzrmiQpScN6v98XewfA8/lMkiLJ2WxGSUopcT6fM6U0NX9/frfbjev1WtfrlZfLhYfDQQHG/AIOlnGwjINlHCxjHCzjYJm/TJWdCwquJXseFFzGwDNNeiKMOJTO8xQdDQaeB29+K9efeLaBo9J7vdvtJj1RjFFjfiv7qv95tjx/7leSQgh93e1ffMeIp6O+YQjho/N791t1XVOSSI7N//K+4/GoxWLBx+PB5/Op5XLJ+/3OlJJWqxU3m83ovv5iGf8KjYNlHCxjHCzjYBkHy5gf5gusvQU7U37jTAAAAABJRU5ErkJggg==\");\n}\n\n.color-picker .selected-color {\n    width: 40px;\n    height: 40px;\n    top: 16px;\n    left: 8px;\n    position: absolute;\n    -moz-border-radius: 50%;\n    -webkit-border-radius: 50%;\n    border-radius: 50%;\n    -khtml-border-radius: 50%;\n}\n\n.color-picker .selected-color-background {\n    width: 40px;\n    height: 40px;\n    -moz-border-radius: 50%;\n    -webkit-border-radius: 50%;\n    border-radius: 50%;\n    -khtml-border-radius: 50%;\n    background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAh0lEQVRYR+2W0QlAMQgD60zdfwOdqa8TmI/wQMr5K0I5bZLIzLOa2nt37VVVbd+dDx5obgCC3KBLwJ2ff4PnVidkf+ucIhw80HQaCLo3DMH3CRK3iFsmAWVl6hPNDwt8EvNE5q+YuEXcMgkonVM6SdyCoEvAnZ8v1Hjx817MilmxSUB5rdLJDycZgUAZUch/AAAAAElFTkSuQmCC\");\n}\n\n.color-picker .type-policy {\n    position: absolute;\n    top: 215px;\n    right: 12px;\n    background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAgCAYAAAAffCjxAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAACewAAAnsB01CO3AAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAIASURBVEiJ7ZY9axRRFIafsxMStrLQJpAgpBFhi+C9w1YSo00I6RZ/g9vZpBf/QOr4GyRgkSKNSrAadsZqQGwCkuAWyRZJsySwvhZ7N/vhzrgbLH3Ld8597jlzz50zJokyxXH8DqDVar0qi6v8BbItqSGpEcfxdlmsFWXkvX8AfAVWg3UKPEnT9GKujMzsAFgZsVaCN1VTQd77XUnrgE1kv+6935268WRpzrnHZvYRWC7YvC3pRZZl3wozqtVqiyH9IgjAspkd1Gq1xUJQtVrdB9ZKIAOthdg/Qc65LUk7wNIMoCVJO865rYFhkqjX6/d7vV4GPJwBMqofURS5JEk6FYBer/eeYb/Mo9WwFnPOvQbeAvfuAAK4BN4sAJtAG/gJIElmNuiJyba3EGNmZiPeZuEVmVell/Y/6N+CzDn3AXhEOOo7Hv/3BeAz8IzQkMPnJbuPx1wC+yYJ7/0nYIP5S/0FHKdp+rwCEEXRS/rf5Hl1Gtb2M0iSpCOpCZzPATmX1EySpHMLAsiy7MjMDoHrGSDXZnaYZdnRwBh7J91utwmczAA6CbG3GgPleX4jqUH/a1CktqRGnuc3hSCAMB32gKspkCtgb3KCQMmkjeP4WNJThrNNZval1WptTIsv7JtQ4tmIdRa8qSoEpWl6YWZNoAN0zKxZNPehpLSBZv2t+Q0CJ9lLnARQLAAAAABJRU5ErkJggg==\");\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 8px 16px;\n    -moz-background-size: 8px 16px;\n    -webkit-background-size: 8px 16px;\n    -o-background-size: 8px 16px;\n    width: 16px;\n    height: 24px;\n}\n\n.color-picker .hsla-text, .color-picker .rgba-text {\n    width: 100%;\n    font-size: 11px;\n    padding: 4px 8px;\n}\n\n.color-picker .hsla-text .box, .color-picker .rgba-text .box {\n    padding: 0 24px 8px 8px;\n}\n\n.color-picker .hsla-text .box input, .color-picker .rgba-text .box input {\n    min-width: 0;\n    flex: 1;\n    margin: 0;\n    float: left;\n    margin-right: 8px;\n    border: #a9a9a9 solid 1px;\n    padding: 1px;\n}\n\n.color-picker .hsla-text .box input:last-child, .color-picker .rgba-text .box input:last-child {\n    margin-right: 0;\n}\n\n.color-picker .hsla-text .box div, .color-picker .rgba-text .box div {\n    flex: 1 1 auto;\n    text-align: center;\n    color: #555;\n    margin-right: 8px;\n}\n\n.color-picker .hsla-text .box div:last-child, .color-picker .rgba-text .box div:last-child {\n    margin-right: 0;\n}\n\n.color-picker .hex-text {\n    width: 100%;\n    font-size: 11px;\n    padding: 4px 8px;\n}\n\n.color-picker .hex-text .box {\n    padding: 0 24px 8px 8px;\n}\n\n.color-picker .hex-text .box input {\n    flex: 1 1 auto;\n    border: #a9a9a9 solid 1px;\n    padding: 1px;\n}\n\n.color-picker .hex-text .box div {\n    flex: 1 1 auto;\n    text-align: center;\n    color: #555;\n    float: left;\n    clear: left;\n}\n    "],
            host: {
                '[@lightShowState]': 'true',
                '[@hueShowState]': 'true'
            },
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* trigger */])('lightShowState', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* state */])('true', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* style */])({
                        opacity: 1
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* state */])('false', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* style */])({
                        opacity: 0
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* transition */])('true => false', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* animate */])('1000ms ease-out')),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* transition */])('false => true', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* animate */])('1000ms ease-in'))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* trigger */])('hueShowState', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* state */])('true', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* style */])({
                        opacity: 1
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* state */])('false', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* style */])({
                        opacity: 0
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* transition */])('true => false', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* animate */])('1000ms ease-out')),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* transition */])('false => true', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* animate */])('1000ms ease-in'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__color_picker_service__["a" /* ColorPickerService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]])
    ], ColorPickerDirective);
    return ColorPickerDirective;
}());

var TextDirective = /** @class */ (function () {
    function TextDirective() {
        this.newValue = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    TextDirective.prototype.changeInput = function (value) {
        if (this.rg === undefined) {
            this.newValue.emit(value);
        }
        else {
            var numeric = parseFloat(value);
            if (!isNaN(numeric) && numeric >= 0 && numeric <= this.rg) {
                this.newValue.emit({ v: numeric, rg: this.rg });
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])('newValue'),
        __metadata("design:type", Object)
    ], TextDirective.prototype, "newValue", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('text'),
        __metadata("design:type", Object)
    ], TextDirective.prototype, "text", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('rg'),
        __metadata("design:type", Number)
    ], TextDirective.prototype, "rg", void 0);
    TextDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[text]',
            host: {
                '(input)': 'changeInput($event.target.value)'
            }
        })
    ], TextDirective);
    return TextDirective;
}());

var SliderDirective = /** @class */ (function () {
    //public mc: HammerManager;
    function SliderDirective(el) {
        this.el = el;
        this.newValue = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.startTouch = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        //   this.listenerMove = (event: any) => {  this.move(event);};//event.preventDefault(); };
        //     this.listenerStop = () => { this.stop() };
    }
    // public ngAfterViewInit() {
    //     this.mc = new Hammer(this.el.nativeElement, { touchAction: "compute" });
    //     this.mc.get('pinch').set({ enable: true });
    //     this.mc.get('rotate').set({ enable: true });
    //     this.mc.get('press').set({ enable: true });
    //     this.mc.get('pan').set({ direction: Hammer.DIRECTION_ALL });
    //     this.mc.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });
    //     this.listenerMove = (event: any) => { event.preventDefault(); this.move(event); };//event.preventDefault(); };
    //     this.listenerStop = () => { this.stop() };
    // }
    SliderDirective.prototype.setCursor = function (event) {
        var height = this.el.nativeElement.offsetHeight;
        var width = this.el.nativeElement.offsetWidth;
        var x = Math.max(0, Math.min(this.getX(event), width));
        var y = Math.max(0, Math.min(this.getY(event), height));
        if (this.rgX !== undefined && this.rgW !== undefined) {
            this.newValue.emit({ x: x });
        }
        if (this.rgX !== undefined && this.rgT !== undefined && this.rgY === undefined) {
            this.newValue.emit({ x: x, startX: this.moveStartx });
        }
        if (this.rgX !== undefined && this.rgY !== undefined && this.rgT !== undefined) {
            this.newValue.emit({ x: x, y: y, startX: this.moveStartx, startY: this.moveStarty });
        }
        if (this.rgX !== undefined && this.rgY !== undefined) {
            this.newValue.emit({ s: x / width, v: (1 - y / height), rgX: this.rgX, rgY: this.rgY, x: x, y: y, startX: this.moveStartx, startY: this.moveStarty });
        }
        else if (this.rgX === undefined && this.rgY !== undefined) {
            this.newValue.emit({ v: y / height, rg: this.rgY, y: y, startX: this.moveStartx, startY: this.moveStarty });
        }
        else {
            this.newValue.emit({ v: x / width, rg: this.rgX, x: x, startX: this.moveStartx, startY: this.moveStarty });
        }
        if ((event.type && (event.type == "touchend" || event.type == "touchcancel" || event.type == "mousedown")) ||
            (event.srcEvent && (event.srcEvent.type == "touchend" || event.srcEvent.type == "touchcancel" || event.srcEvent.type == "pointerup"
                || event.srcEvent.type == "pointercancel" || event.srcEvent.type == "pointerdown" || event.srcEvent.type == "mousedown"))) {
            console.log("兵");
            this.stop();
            console.log(event.type ? event.type : event.srcEvent.type + "cnm!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        }
    };
    SliderDirective.prototype.move = function (event) {
        this.setCursor(event);
    };
    SliderDirective.prototype.start = function (event) {
        this.startTouch.emit(true);
        this.moveStartx = this.getX(event);
        this.moveStarty = this.getY(event);
        this.setCursor(event);
        console.log("start:" + this.moveStartx + "，starty:" + this.moveStarty);
        // this.mc.on("mousedown mousemove touchmove  hammer.input press pointermove", this.listenerMove);
        // this.mc.on("touchend  mouseup pointerup pointercancel", this.listenerStop);
    };
    SliderDirective.prototype.stop = function () {
        this.startTouch.emit(false);
        //this.mc.off("mousedown mousemove touchmove  hammer.input touchend  mouseup press");
        // document.addEventListener('mousemove', this.listenerMove);
        // document.addEventListener('touchmove', this.listenerMove);
        // document.addEventListener('mouseup', this.listenerStop);
        // document.addEventListener('touchend', this.listenerStop);
        // document.addEventListener('touchcancel', this.listenerStop);
        // document.removeEventListener('mousemove', this.listenerMove);
        // document.removeEventListener('touchmove', this.listenerMove);
        // document.removeEventListener('mouseup', this.listenerStop);
        // document.removeEventListener('touchend', this.listenerStop);
        // document.addEventListener('touchcancel', this.listenerStop);
    };
    SliderDirective.prototype.getX = function (event) {
        console.log(event);
        if (!event.pageX && (!event.touches || !event.touches[0] || !event.touches[0].pageX)) {
            return event.center.x - this.el.nativeElement.getBoundingClientRect().left - window.pageXOffset;
        }
        else {
            return (event.pageX !== undefined && event.pageX !== 0 ? event.pageX : event.touches[0].pageX) - this.el.nativeElement.getBoundingClientRect().left - window.pageXOffset;
        }
    };
    SliderDirective.prototype.getY = function (event) {
        console.log(event);
        if (!event.pageY && (!event.touches || !event.touches[0] || !event.touches[0].pageY)) {
            return event.center.y - this.el.nativeElement.getBoundingClientRect().top - window.pageYOffset;
        }
        else {
            return (event.pageY !== undefined && event.pageY !== 0 ? event.pageY : event.touches[0].pageY) - this.el.nativeElement.getBoundingClientRect().top - window.pageYOffset;
        }
    };
    SliderDirective.prototype.getStartX = function (event) {
        if (event.center) {
            return event.center.x;
        }
        else if (event.touches[0].pageX) {
            return event.touches[0].pageX;
        }
        return 0;
    };
    SliderDirective.prototype.getStartY = function (event) {
        if (event.center) {
            return event.center.y;
        }
        else if (event.touches[0].pageY) {
            return event.touches[0].pageY;
        }
        return 0;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])('newValue'),
        __metadata("design:type", Object)
    ], SliderDirective.prototype, "newValue", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])('startTouch'),
        __metadata("design:type", Object)
    ], SliderDirective.prototype, "startTouch", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('slider'),
        __metadata("design:type", String)
    ], SliderDirective.prototype, "slider", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('rgX'),
        __metadata("design:type", Number)
    ], SliderDirective.prototype, "rgX", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('rgY'),
        __metadata("design:type", Number)
    ], SliderDirective.prototype, "rgY", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('rgT'),
        __metadata("design:type", Number)
    ], SliderDirective.prototype, "rgT", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('rgW'),
        __metadata("design:type", Number)
    ], SliderDirective.prototype, "rgW", void 0);
    SliderDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[slider]',
            host: {
                '(mousedown)': 'start($event)',
                '(touchstart)': 'start($event)'
            }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
    ], SliderDirective);
    return SliderDirective;
}());

//# sourceMappingURL=color-picker.directive.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwitchlightPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_localdata_localdata__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interfaces_usercenter_model__ = __webpack_require__(341);
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
 * Generated class for the SwitchlightPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SwitchlightPage = /** @class */ (function () {
    function SwitchlightPage(navCtrl, params, 
        // private cpService: ColorPickerService,
        popoverCtrl, ls, mc) {
        this.navCtrl = navCtrl;
        this.params = params;
        this.popoverCtrl = popoverCtrl;
        this.ls = ls;
        this.mc = mc;
        this.logList = [];
        this.skip = 0;
        this.color = 'rgb(50, 200, 200)';
        this.rgbw = [50, 200, 200, 0];
        this.rgbwy = null;
        this.red = 0;
        this.blue = 0;
        this.green = 0;
        this.white = 0;
        this.yellow = 255;
        this.isadministrator = false;
        this.on_off = true;
        this.isscroll = true; //是否还有加载的日志数据
        this.take = 10;
        this.disabled = false;
        this.colorAreaHeight = 300;
        this.contentHeight = 300;
        this.showHeaderAndFooter = true;
        this.time = 1;
        this.deviceinfo = params.get("item");
        this.title = this.deviceinfo.name;
        this.isadministrator = this.ls.isUserAdministrator();
        this.rgbwy = params.get("rgbwy");
        if (this.rgbwy != null) {
            this.rgbw[0] = this.rgbwy.r;
            this.rgbw[1] = this.rgbwy.g;
            this.rgbw[2] = this.rgbwy.b;
            this.rgbw[3] = this.rgbwy.w;
            this.white = this.rgbwy.w;
            if (this.deviceinfo.device_rgb == null) {
                this.deviceinfo.device_rgb = new __WEBPACK_IMPORTED_MODULE_3__interfaces_usercenter_model__["a" /* device_rgb */]();
                this.deviceinfo.device_rgb.type = 0;
            }
            this.color = "rgb(" + this.rgbwy.r + ',' + this.rgbwy.g + ',' + this.rgbwy.b + ')';
            this.time = this.rgbwy.time;
        }
        else if (this.deviceinfo.latest_staus != null) {
            this.on_off = this.deviceinfo.latest_staus.on_off;
            var dls = this.deviceinfo.latest_staus;
            this.rgbw[0] = dls.r;
            this.rgbw[1] = dls.g;
            this.rgbw[2] = dls.b;
            this.rgbw[3] = dls.w;
            this.white = dls.w;
            if (this.deviceinfo.device_rgb == null) {
                this.deviceinfo.device_rgb = new __WEBPACK_IMPORTED_MODULE_3__interfaces_usercenter_model__["a" /* device_rgb */]();
                this.deviceinfo.device_rgb.type = 0;
            }
            this.color = "rgb(" + dls.r + ',' + dls.g + ',' + dls.b + ')';
            this.time = this.deviceinfo.device_rgb.time;
        }
        this.callback = this.params.get("callback");
    }
    SwitchlightPage.prototype.ngOnInit = function () {
    };
    SwitchlightPage.prototype.ngOnDestroy = function () {
    };
    SwitchlightPage.prototype.touchstate = function (state) {
        this.showHeaderAndFooter = !state;
    };
    SwitchlightPage.prototype.ngAfterViewInit = function () {
        var element = this.lightswitchcontentElement;
        console.log(element);
        var height = parseInt(element._elementRef.nativeElement.offsetHeight) - 82;
        console.log(height);
        this.colorAreaHeight = height;
        this.contentHeight = height;
    };
    SwitchlightPage.prototype.advancedsetting = function () {
        var _this = this;
        if (this.deviceinfo.product_id == "zwave_lightswith") {
            var modal = this.mc.create("advancedsetting_rgb", { rgb_type: this.deviceinfo.device_rgb.type, device_id: this.deviceinfo.device_id, type: this.deviceinfo.device_rgb.type, r: this.rgbw[0], g: this.rgbw[1], b: this.rgbw[2], w: this.rgbw[3], unchange: true });
            modal.onDidDismiss(function (data) {
                if (data) {
                    _this.rgbw[0] = data.r;
                    _this.rgbw[1] = data.g;
                    _this.rgbw[2] = data.b;
                    _this.rgbw[3] = data.w;
                    _this.white = data.w;
                    _this.color = "rgb(" + data.r + "," + data.g + "," + data.b + ")";
                }
            });
            modal.present();
        }
        else {
            if (this.deviceinfo.device_rgb.type === 0 || this.deviceinfo.device_rgb.type === 1) {
                //rgbw rgbww
                var modal = this.mc.create("advancedsetting_rgb", { rgb_type: this.deviceinfo.device_rgb.type, device_id: this.deviceinfo.device_id, type: this.deviceinfo.device_rgb.type, r: this.rgbw[0], g: this.rgbw[1], b: this.rgbw[2], w: this.rgbw[3], time: this.time, unchange: true });
                modal.onDidDismiss(function (data) {
                    if (data) {
                        _this.rgbw[0] = data.r;
                        _this.rgbw[1] = data.g;
                        _this.rgbw[2] = data.b;
                        _this.rgbw[3] = data.w;
                        _this.white = data.w;
                        _this.color = "rgb(" + data.r + "," + data.g + "," + data.b + ")";
                        _this.time = data.time;
                    }
                });
                modal.present();
            }
            else if (this.deviceinfo.device_rgb.type === 2) {
                //rgb
                var modal = this.mc.create("advancedsetting_rgb", { rgb_type: this.deviceinfo.device_rgb.type, device_id: this.deviceinfo.device_id, r: this.rgbw[0], g: this.rgbw[1], b: this.rgbw[2], time: this.time, unchange: true });
                modal.onDidDismiss(function (data) {
                    if (data) {
                        _this.rgbw[0] = data.r;
                        _this.rgbw[1] = data.g;
                        _this.rgbw[2] = data.b;
                        _this.color = "rgb(" + data.r + "," + data.g + "," + data.b + ")";
                        _this.time = data.time;
                    }
                });
                modal.present();
            }
        }
    };
    SwitchlightPage.prototype.onChangeColor = function (color) {
    };
    SwitchlightPage.prototype.onChangeColorRgb = function (color) {
        console.log(color);
        this.rgbw[0] = color[0];
        this.rgbw[1] = color[1];
        this.rgbw[2] = color[2];
        this.rgbw[3] = color[3];
        this.white = color[3];
    };
    SwitchlightPage.prototype.ok = function () {
        var rgbwy = this.rgbw[0] + "," + this.rgbw[1] + "," + this.rgbw[2] + "," + this.white + "," + this.yellow + "," + this.time;
        this.dismiss(rgbwy);
    };
    //关闭modal
    SwitchlightPage.prototype.dismiss = function (data) {
        var _this = this;
        this.callback(data).then(function () {
            _this.navCtrl.pop();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('lightswitchcontent'),
        __metadata("design:type", Object)
    ], SwitchlightPage.prototype, "lightswitchcontentElement", void 0);
    SwitchlightPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-switchlight',template:/*ion-inline-start:"C:\projects\zhijiatablet\smart_app_duer\app\src\pages\switchlight\switchlight.html"*/'<ion-header no-shadow [style.display]="showHeaderAndFooter?\'block\':\'none\'">\n\n    <ion-navbar transparent no-border-bottom class="toolbar-color-white">\n\n        \n\n        <ion-title>{{title}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content class="fixedcontent ion-content-colorpicker"  scroll="false" #lightswitchcontent>\n\n    <!--颜色-->\n\n            <!--<div style="width:100%;display:block" [colorPicker]="color" [cpType]="\'rgbw\'"   [bgHeight]="colorAreaHeight" [cpDialogDisplay]="\'inline\'" (colorPickerChange)="onChangeColor($event);color=$event"\n\n                (rgbColorChange)="onChangeColorRgb($event);" (cpTouchChange)="touchstate($event)" class=" color-drag-content" [style.background]="color" [cpAlphaChannel]="\'disabled\'" [cpCancelButtonClass]="\'btn btn-primary btn-xs\'"\n\n                [cpCancelButton]="true" [cpToggle]="true">\n\n            </div>-->\n\n <!--颜色-->\n\n    <div *ngIf="deviceinfo.device_rgb.type===2">\n\n        <div style="width:100%;display:block" [colorPicker]="color" [cpType]="\'rgb\'" [bgHeight]="colorAreaHeight" [cpDialogDisplay]="\'inline\'"\n\n            (colorPickerChange)="onChangeColor($event);color=$event" (rgbColorChange)="onChangeColorRgb($event);" (cpTouchChange)="touchstate($event)"\n\n            class=" color-drag-content" [style.background]="color" [cpAlphaChannel]="\'disabled\'" [cpCancelButtonClass]="\'btn btn-primary btn-xs\'"\n\n            [cpCancelButton]="true" [cpToggle]="true">\n\n        </div>\n\n    </div>\n\n    <div *ngIf="deviceinfo.device_rgb.type===0">\n\n        <div style="width:100%;display:block" [colorPicker]="color" [cpType]="\'rgbw\'" [cpw]="white" [bgHeight]="colorAreaHeight"\n\n            [cpDialogDisplay]="\'inline\'" (colorPickerChange)="onChangeColor($event);color=$event" (rgbColorChange)="onChangeColorRgb($event);"\n\n            (cpTouchChange)="touchstate($event)" class=" color-drag-content" [style.background]="color" [cpAlphaChannel]="\'disabled\'"\n\n            [cpCancelButtonClass]="\'btn btn-primary btn-xs\'" [cpCancelButton]="true" [cpToggle]="true">\n\n        </div>\n\n    </div>\n\n    <div *ngIf="deviceinfo.device_rgb.type===1">\n\n        <div style="width:100%;display:block" [colorPicker]="color" [cpType]="\'rgbww\'" [cpw]="white" [bgHeight]="colorAreaHeight"\n\n            [cpDialogDisplay]="\'inline\'" (colorPickerChange)="onChangeColor($event);color=$event" (rgbColorChange)="onChangeColorRgb($event);"\n\n            (cpTouchChange)="touchstate($event)" class=" color-drag-content" [style.background]="color" [cpAlphaChannel]="\'disabled\'"\n\n            [cpCancelButtonClass]="\'btn btn-primary btn-xs\'" [cpCancelButton]="true" [cpToggle]="true">\n\n        </div>\n\n    </div>\n\n    <div *ngIf="deviceinfo.device_rgb.type===3">\n\n        <div style="width:100%;display:block" [colorPicker]="color" [cpType]="\'rwy\'" [cpw]="white" [bgHeight]="colorAreaHeight" [cpDialogDisplay]="\'inline\'"\n\n            (colorPickerChange)="onChangeColor($event);color=$event" (rgbColorChange)="onChangeColorRgb($event);" (cpTouchChange)="touchstate($event)"\n\n            class=" color-drag-content" [style.background]="color" [cpAlphaChannel]="\'disabled\'" [cpCancelButtonClass]="\'btn btn-primary btn-xs\'"\n\n            [cpCancelButton]="true" [cpToggle]="true">\n\n        </div>\n\n    </div>\n\n\n\n \n\n</ion-content>\n\n<ion-footer no-shadow  [style.display]="showHeaderAndFooter?\'block\':\'none\'">\n\n    <ion-toolbar transparent>\n\n        <ion-row class="row-switch grid-flex-column">\n\n            <ion-col>\n\n                <button color="default" ion-button outline class="button-power" (click)="advancedsetting()">\n\n                    <ion-icon class="iconfont icon-dingshi"></ion-icon>\n\n                </button>\n\n                <p>高级设置</p>\n\n            </ion-col>\n\n            <ion-col>\n\n                <button color="default" ion-button outline class="button-power" (click)="ok()">\n\n                    <ion-icon name="ios-power"></ion-icon>\n\n                </button>\n\n                <p>保存</p>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"C:\projects\zhijiatablet\smart_app_duer\app\src\pages\switchlight\switchlight.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_localdata_localdata__["a" /* LocaldataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
    ], SwitchlightPage);
    return SwitchlightPage;
}());

//# sourceMappingURL=switchlight.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export UserCenter */
/* unused harmony export Relationships */
/* unused harmony export FamilyModel */
/* unused harmony export RoomModel */
/* unused harmony export RoomsModel */
/* unused harmony export productmodel */
/* unused harmony export DeviceModel */
/* unused harmony export device_radar */
/* unused harmony export device_subinfo */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return device_rgb; });
/* unused harmony export device_virtual_ir */
/* unused harmony export arcdata */
/* unused harmony export demoarcdata */
/* unused harmony export demonewwinddata */
/* unused harmony export demomp3data */
var UserCenter = /** @class */ (function () {
    function UserCenter() {
    }
    return UserCenter;
}());

var Relationships = /** @class */ (function () {
    function Relationships(username, callname) {
        //设备列表
        this.devicelist = new Array();
        this.showDefaultAvator = false;
        this.username = username;
        this.callname = callname;
    }
    return Relationships;
}());

//家庭model
var FamilyModel = /** @class */ (function () {
    function FamilyModel(family_id, name) {
        this.family_id = family_id;
        this.name = name;
    }
    return FamilyModel;
}());

var RoomModel = /** @class */ (function () {
    function RoomModel() {
    }
    return RoomModel;
}());

var RoomsModel = /** @class */ (function () {
    function RoomsModel() {
    }
    return RoomsModel;
}());

var productmodel = /** @class */ (function () {
    function productmodel() {
    }
    return productmodel;
}());

var DeviceModel = /** @class */ (function () {
    function DeviceModel() {
        this.device_rgb = new device_rgb();
    }
    return DeviceModel;
}());

var device_radar = /** @class */ (function () {
    function device_radar() {
    }
    return device_radar;
}());

var device_subinfo = /** @class */ (function () {
    function device_subinfo() {
    }
    return device_subinfo;
}());

var device_rgb = /** @class */ (function () {
    function device_rgb() {
        this.time = 1;
        this.type = 2; //0：RGBW，1：RGBY（通俗叫法：RGBWW），2：RGB，3：双色温灯带（WY：实际上是W对应的W，Y对应的是R）
        this.r = 1;
        this.g = 1;
        this.b = 1;
        this.w = 1;
        this.y = 1;
        this.ct = 1;
        this.bn = 1;
    }
    return device_rgb;
}());

var device_virtual_ir = /** @class */ (function () {
    function device_virtual_ir() {
    }
    return device_virtual_ir;
}());

//空调数据
var arcdata = /** @class */ (function () {
    function arcdata() {
        this.temperature = 22;
        this.blast_volume = 1;
        this.blast_volumeStr = "低";
        this.manual_wind = 2;
        this.auto_wind = 1;
        this.on_off = 1;
        this.mode = 1;
        this.modeStr = "自动";
    }
    return arcdata;
}());

//demo空调数据
var demoarcdata = /** @class */ (function () {
    function demoarcdata() {
        this.temperature = 22;
        this.blast_volume = 1;
        this.blast_volumeStr = "低";
        this.on_off = 1;
        this.mode = 1;
        this.modeStr = "自动";
    }
    return demoarcdata;
}());

//新风数据（演示模型）
var demonewwinddata = /** @class */ (function () {
    function demonewwinddata() {
        this.inpm25 = '20';
        this.voc = "";
        this.temperature = "26";
        this.outTemperature = "26";
        this.outpm25 = '200';
        this.windSpeed = 10;
        this.onoff = false;
    }
    return demonewwinddata;
}());

//mp3数据（演示模型）
var demomp3data = /** @class */ (function () {
    function demomp3data() {
        //音量0-100
        this.volume = 20;
        //状态 0暂停 1播放
        this.status = 0;
    }
    return demomp3data;
}());

//# sourceMappingURL=usercenter.model.js.map

/***/ })

});
//# sourceMappingURL=1.js.map