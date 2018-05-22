webpackJsonp([0],{

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_pipe_module__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_shebei_shebei_module__ = __webpack_require__(320);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



 //过虑集合中为空的数据

var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__app_pipe_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
                __WEBPACK_IMPORTED_MODULE_4__components_shebei_shebei_module__["a" /* ShebeiComponentModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]
            ]
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceConst; });
/* unused harmony export PJTKeyBoadMap */
/* unused harmony export FanKeyBoadMap */
/* unused harmony export TVBoxKeyBoadMap */
/* unused harmony export IPTVKeyBoadMap */
/* unused harmony export TVKeyBoadMap */
/* unused harmony export DVDKeyBoadMap */
/* unused harmony export ARCKeyBoadMap */
/* unused harmony export WaterKeyBoadMap */
/* unused harmony export AirKeyBoadMap */
/* unused harmony export SLRKeyBoadMap */
/* unused harmony export AirFanKeyBoadMap */
/* unused harmony export HumidifierBoadMap */
/* unused harmony export MusicPlayer7InchBoadMap */
/* unused harmony export BabyBedBoadMap */
/* unused harmony export AirCleanerBoadMap */
/* unused harmony export SodcastBoadMap */
/* unused harmony export AutomaticPetFeederBoadMap */
/* unused harmony export TVBaoFengBoadMap */
var DeviceConst = /** @class */ (function () {
    function DeviceConst() {
    }
    Object.defineProperty(DeviceConst, "DOOR", {
        ///////////////////////////单个产品类别///////////////////////////
        //智能锁
        get: function () { return "door"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "TC1_CAMERA", {
        //轻巧型家庭摄像头
        get: function () { return "tc1_camera"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "TP1_CAMERA", {
        //旋转式家庭摄像头
        get: function () { return "tp1_camera"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "RF_GATEWAY", {
        //射频网关
        get: function () { return "rf_gateway"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "IR_GATEWAY", {
        //万能遥控器
        get: function () { return "ir_gateway"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "DOOR_MAGNET", {
        //门磁
        get: function () { return "door_magnet"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "OUTLET1", {
        //插座
        get: function () { return "outlet1"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "OUTLET2", {
        get: function () { return "outlet2"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "OUTLET3", {
        get: function () { return "outlet3"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "RF_POWERSWITCH_S11", {
        //RF单火 开关型号 
        get: function () { return "rf_powerswitch_s11"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "RF_POWERSWITCH_S12", {
        get: function () { return "rf_powerswitch_s12"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "RF_POWERSWITCH_S13", {
        get: function () { return "rf_powerswitch_s13"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "RF_POWERSWITCH_S31", {
        //433单火
        get: function () { return "rf_powerswitch_s31"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "RF_POWERSWITCH_S32", {
        get: function () { return "rf_powerswitch_s32"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "RF_POWERSWITCH_S33", {
        get: function () { return "rf_powerswitch_s33"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "RF_POWERSWITCH_S41", {
        //RF433单火
        get: function () { return "rf_powerswitch_s41"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "RF_POWERSWITCH_S42", {
        get: function () { return "rf_powerswitch_s42"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "RF_POWERSWITCH_S43", {
        get: function () { return "rf_powerswitch_s43"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "RF_POWERSWITCH_N11", {
        //RF零火 开关型号 
        get: function () { return "rf_powerswitch_n11"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "RF_POWERSWITCH_N12", {
        get: function () { return "rf_powerswitch_n12"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "RF_POWERSWITCH_N13", {
        get: function () { return "rf_powerswitch_n13"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "RF_POWERSWITCH_N33", {
        //智能2.4G触摸幕布开关（零火）
        get: function () { return "rf_powerswitch_n33"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "RF_POWERSWITCH_N23", {
        //智能2.4G触摸窗帘开关（零火）
        get: function () { return "rf_powerswitch_n23"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "CURTAIN", {
        //智能窗帘电机
        get: function () { return "curtain"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "ELETRICCURTAIN", {
        //电动幕布
        get: function () { return "electriccurtain"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "RF_SWITCHES", {
        //射频开关
        get: function () { return "rf_switches"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "RF_ONECLICK", {
        // 单键随身开关
        get: function () { return "rf_oneclick"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "IRSENSOR", {
        //红外感应器
        get: function () { return "irsensor"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "DOORBELL", {
        //门铃
        get: function () { return "doorbell"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "SMOKE_ALARM", {
        //烟雾报警器
        get: function () { return "smoke_alarm"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "GAS_ALARM", {
        //可燃气体报警器
        get: function () { return "gas_alarm"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "WATER_SENSOR", {
        //漏水报警器
        get: function () { return "water_sensor"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "CIRCLE_OUTLET", {
        //小圆插
        get: function () { return "circle_outlet"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "WF_CIRCLE_OUTLET", {
        //wifi小圆插
        get: function () { return "wf_circle_outlet"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "RF_RGB_01", {
        //RGB控制器
        //RGB控制器
        get: function () { return "rf_rgb_01"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "RF_RADAR_LED_01", {
        get: function () { return "rf_radar_led_01"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "RF_WY_01", {
        //wy
        get: function () { return "rf_wy_01"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "RF_WY_02", {
        get: function () { return "rf_wy_02"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "RF_WY_03", {
        get: function () { return "rf_wy_03"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "RF_WY_04", {
        get: function () { return "rf_wy_04"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "GROUP", {
        //分组设备
        get: function () { return "group"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "ZWAVE_GATEWAY", {
        //zwave网关
        get: function () { return "zwave_gateway"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "ZWAVE_POWERSWITCH_S11", {
        //zwave ZWAVE单火x开开关型号1
        get: function () { return "zwave_powerswitch_s11"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "ZWAVE_POWERSWITCH_S12", {
        get: function () { return "zwave_powerswitch_s12"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "ZWAVE_POWERSWITCH_S13", {
        get: function () { return "zwave_powerswitch_s13"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "ZWAVE_POWERSWITCH_N11", {
        //zwave ZWAVE零火x开 开关型号1
        get: function () { return "zwave_powerswitch_n11"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "ZWAVE_POWERSWITCH_N12", {
        get: function () { return "zwave_powerswitch_n12"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "ZWAVE_POWERSWITCH_N13", {
        get: function () { return "zwave_powerswitch_n13"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "ZWAVE_VALVE", {
        //zwave 阀门
        get: function () { return "zwave_valve"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "RF_VALVE", {
        //智能燃气机械手
        get: function () { return "rf_valve01"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "ZWAVE_LIGHTSWITH", {
        //zwave 灯带
        get: function () { return "zwave_lightswith"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "ZWAVE_RGBW_01", {
        //ZWAVERGBW控制器
        get: function () { return "zwave_rgbw_01"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "VT_TV", {
        //虚拟遥控器 电视
        get: function () { return "vt_tv"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "VT_ARC", {
        //虚拟遥控器 空调
        get: function () { return "vt_arc"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "VT_TVBOX", {
        //虚拟遥控器 机顶盒
        get: function () { return "vt_tvbox"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "VT_DVD", {
        //虚拟遥控器 dvd 
        get: function () { return "vt_dvd"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "VT_HUMIDIFIER", {
        //虚拟遥控器 加湿器
        get: function () { return "vt_humidifier"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "VT_AIRFAN", {
        //风扇
        get: function () { return "vt_airfan"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "WFMUSIC_01", {
        //wfmusic_01
        get: function () { return "wfmusic_01"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "BTMUSIC_01", {
        //btmusic_01
        get: function () { return "btmusic_01"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "IR_PET_FEEDER", {
        //ir_pet_feeder
        get: function () { return "ir_pet_feeder"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "BABY_BED", {
        //baby_bed
        get: function () { return "baby_bed"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "AIR_PURIFIER", {
        //air_purifier
        get: function () { return "air_purifier"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "Airradio_A2", {
        //空气质量检测仪
        get: function () { return "airradio_a2"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "Airradio_A1", {
        get: function () { return "airradio_a1"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "Airradio_A2se", {
        get: function () { return "airradio_a2se"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "Amplifier01", {
        //功放
        get: function () { return "amplifier01"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "DOORBELL_DEMO", {
        //测试设备
        //测试设备
        get: function () { return "doorbell_demo"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "IRSENSOR_DEMO", {
        get: function () { return "irsensor_demo"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "WATER_SENSOR_DEMO", {
        get: function () { return "water_sensor_demo"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "GAS_ALRAM_DEMO", {
        get: function () { return "gas_alarm_demo"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "RF_GATEWAY_DEMO", {
        //演示模型 rf_demorgb_01
        get: function () { return "rf_gateway_demo"; } //网关
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "DEMO_DOORBELL", {
        get: function () { return "demo_doorbell"; } //门铃
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "DEMO_MENCI", {
        get: function () { return "demo_menci"; } //门磁
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "DEMO_SENSOR", {
        get: function () { return "demo_sensor"; } //红外感应
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "DEMO_GAS", {
        get: function () { return "demo_gas"; } //可燃气体
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "DEMO_LIGHTS", {
        get: function () { return "demo_lights"; } //七彩灯
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "DEMO_LIGHTSDENG", {
        get: function () { return "demo_lightsdeng"; } //七彩灯饮水机
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "DEMO_MANIPULATOR", {
        get: function () { return "demo_manipulator"; } //机械手
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "DEMO_CURTAIN", {
        get: function () { return "demo_curtain"; } //电动窗帘
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "DEMO_LIGHT", {
        get: function () { return "demo_light"; } //双色灯(三开开关)
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "DEMO_SCREENMP3", {
        get: function () { return "demo_screenmp3"; } //串口MP3
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "DEMO_NEWWIND", {
        get: function () { return "demo_newwind"; } //新风
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "DEMO_AIR", {
        get: function () { return "demo_air"; } //空调
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "DEMO_AIR_1", {
        get: function () { return "air_1"; } //空气检测仪
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "DEMO_RF_RGB_01", {
        get: function () { return "rf_demorgb_01"; } //RFRGB模型控制器
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "DEMO_RELAY", {
        get: function () { return "demo_relay"; } //模型继电器
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "DEMO_RGB", {
        get: function () { return "demo_rgb"; } //模型RGB 
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "componentrf_gateway", {
        //=================================分组使用===============================================
        //Mini智能主机
        get: function () { return "rf_gateway"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "componentzwave_gateway", {
        //智能主机
        get: function () { return "zwave_gateway"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "componentcircle_outlet", {
        //智能插座1,智能插座
        get: function () { return "circle_outlet"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "componentoutlet3", {
        //智能插座3
        get: function () { return "outlet3"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "componentcurtain", {
        //智能窗帘电机
        get: function () { return "curtain"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "componentir_gateway", {
        //万能红外遥控器
        get: function () { return "ir_gateway"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "componenttc1_camera", {
        //轻巧型家庭摄像头,旋转式家庭摄像头
        get: function () { return "tc1_camera"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "componentdoor", {
        //智能锁
        get: function () { return "door"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "componentdoor_magnet", {
        //门磁
        get: function () { return "door_magnet"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "componentirsensor", {
        //智能红外感应器
        get: function () { return "irsensor"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "componentrf_switches", {
        //智能随身开关
        get: function () { return "rf_switches"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "componentdoorbell", {
        //智能门铃
        get: function () { return "doorbell"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "componentsmoke_alarm", {
        //智能烟雾报警器
        get: function () { return "smoke_alarm"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "componentgas_alarm", {
        //可燃气体报警器
        get: function () { return "gas_alarm"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "componentwater_sensor", {
        //漏水报警器
        get: function () { return "water_sensor"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "componentrf_powerswitch1", {
        //智能触摸开关一开
        get: function () { return "powerswitch1"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "componentrf_powerswitch2", {
        //智能触摸开关二开
        get: function () { return "powerswitch2"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "componentrf_powerswitch3", {
        //智能触摸开关三开
        get: function () { return "powerswitch3"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "componentrf_rgb_01", {
        //RGB控制器
        get: function () { return "rgbw"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "componentrf_wy_01", {
        // /RGBW控制器
        // public static get componentrf_rgbw_01(): string { return "rf_rgbw_01" }
        //智能色温筒灯
        get: function () { return "wy"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "componentzwave_valve", {
        //智能阀门
        get: function () { return "zwave_valve"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "componentzwave_lightswith", {
        //智能灯带
        get: function () { return "zwave_lightswith"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceConst, "componentelectriccurtain", {
        //电动幕布
        get: function () { return "electriccurtain"; },
        enumerable: true,
        configurable: true
    });
    return DeviceConst;
}());

/// <summary>
/// 投影仪键位定义表
/// </summary>
var PJTKeyBoadMap = /** @class */ (function () {
    function PJTKeyBoadMap() {
    }
    Object.defineProperty(PJTKeyBoadMap, "PJT_On", {
        get: function () { return 1; } //开机
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PJTKeyBoadMap, "PJT_Off", {
        get: function () { return 3; } //关机
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PJTKeyBoadMap, "PJT_Computer", {
        get: function () { return 5; } //电脑
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PJTKeyBoadMap, "PJT_Video", {
        get: function () { return 7; } //视频
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PJTKeyBoadMap, "PJT_SignalSource", {
        get: function () { return 9; } //信号源
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PJTKeyBoadMap, "PJT_FocusAdd", {
        get: function () { return 11; } //变焦＋
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PJTKeyBoadMap, "PJT_FocusRed", {
        get: function () { return 13; } //变焦－
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PJTKeyBoadMap, "PJT_PictureAdd", {
        get: function () { return 15; } //画面＋
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PJTKeyBoadMap, "PJT_PictureRed", {
        get: function () { return 17; } //画面－
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PJTKeyBoadMap, "PJT_Menu", {
        get: function () { return 19; } //菜单
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PJTKeyBoadMap, "PJT_Confirm", {
        get: function () { return 21; } //确认
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PJTKeyBoadMap, "PJT_Up", {
        get: function () { return 23; } //上
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PJTKeyBoadMap, "PJT_Left", {
        get: function () { return 25; } //左
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PJTKeyBoadMap, "PJT_Right", {
        get: function () { return 27; } //右
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PJTKeyBoadMap, "PJT_Down", {
        get: function () { return 29; } //下
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PJTKeyBoadMap, "PJT_Quit", {
        get: function () { return 31; } //退出
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PJTKeyBoadMap, "PJT_VolAdd", {
        get: function () { return 33; } //音量＋
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PJTKeyBoadMap, "PJT_VolRed", {
        get: function () { return 35; } //音量－
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PJTKeyBoadMap, "PJT_Mute", {
        get: function () { return 37; } //静音
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PJTKeyBoadMap, "PJT_Auto", {
        get: function () { return 39; } //自动
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PJTKeyBoadMap, "PJT_Pause", {
        get: function () { return 41; } //暂停
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PJTKeyBoadMap, "PJT_MCD", {
        get: function () { return 43; } //亮度
        ,
        enumerable: true,
        configurable: true
    });
    return PJTKeyBoadMap;
}());

/// <summary>
/// 风扇键位定义表
/// </summary>
var FanKeyBoadMap = /** @class */ (function () {
    function FanKeyBoadMap() {
    }
    Object.defineProperty(FanKeyBoadMap, "FAN_On_Off", {
        get: function () { return 1; } //开关
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FanKeyBoadMap, "FAN_On_speed", {
        get: function () { return 3; } //开／风速
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FanKeyBoadMap, "FAN_Shake", {
        get: function () { return 5; } //摇头
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FanKeyBoadMap, "FAN_Mode", {
        get: function () { return 7; } //风类（模式）
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FanKeyBoadMap, "FAN_Timer", {
        get: function () { return 9; } //定时
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FanKeyBoadMap, "FAN_Light", {
        get: function () { return 11; } //灯光
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FanKeyBoadMap, "FAN_Anion", {
        get: function () { return 13; } //负离子
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FanKeyBoadMap, "FAN_1", {
        get: function () { return 15; } //1
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FanKeyBoadMap, "FAN_2", {
        get: function () { return 17; } //2
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FanKeyBoadMap, "FAN_3", {
        get: function () { return 19; } //3
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FanKeyBoadMap, "FAN_4", {
        get: function () { return 21; } //4
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FanKeyBoadMap, "FAN_5", {
        get: function () { return 23; } //5
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FanKeyBoadMap, "FAN_6", {
        get: function () { return 25; } //6
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FanKeyBoadMap, "FAN_7", {
        get: function () { return 27; } //7
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FanKeyBoadMap, "FAN_8", {
        get: function () { return 29; } //8
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FanKeyBoadMap, "FAN_9", {
        get: function () { return 31; } //9
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FanKeyBoadMap, "FAN_Sleep", {
        get: function () { return 33; } //睡眠
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FanKeyBoadMap, "FAN_Cold", {
        get: function () { return 35; } //制冷
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FanKeyBoadMap, "FAN_AirVol", {
        get: function () { return 37; } //风量
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FanKeyBoadMap, "FAN_LowSpeed", {
        get: function () { return 39; } //低速
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FanKeyBoadMap, "FAN_MiddleSpeed", {
        get: function () { return 41; } //中速
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FanKeyBoadMap, "FAN_HighSpeed", {
        get: function () { return 43; } //高速
        ,
        enumerable: true,
        configurable: true
    });
    return FanKeyBoadMap;
}());

/// <summary>
/// 机顶盒键位定义表
/// </summary>
var TVBoxKeyBoadMap = /** @class */ (function () {
    function TVBoxKeyBoadMap() {
    }
    Object.defineProperty(TVBoxKeyBoadMap, "TVBOX_Wait", {
        get: function () { return 1; } //待机
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TVBoxKeyBoadMap, "TVBOX_1", {
        get: function () { return 3; } //1
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TVBoxKeyBoadMap, "TVBOX_2", {
        get: function () { return 5; } //2
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TVBoxKeyBoadMap, "TVBOX_3", {
        get: function () { return 7; } //3
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TVBoxKeyBoadMap, "TVBOX_4", {
        get: function () { return 9; } //4
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TVBoxKeyBoadMap, "TVBOX_5", {
        get: function () { return 11; } //5
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TVBoxKeyBoadMap, "TVBOX_6", {
        get: function () { return 13; } //6
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TVBoxKeyBoadMap, "TVBOX_7", {
        get: function () { return 15; } //7
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TVBoxKeyBoadMap, "TVBOX_8", {
        get: function () { return 17; } //8
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TVBoxKeyBoadMap, "TVBOX_9", {
        get: function () { return 19; } //9
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TVBoxKeyBoadMap, "TVBOX_Lead", {
        get: function () { return 21; } //导视
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TVBoxKeyBoadMap, "TVBOX_0", {
        get: function () { return 23; } //0
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TVBoxKeyBoadMap, "TVBOX_Back", {
        get: function () { return 25; } //返回
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TVBoxKeyBoadMap, "TVBOX_Up", {
        get: function () { return 27; } //上
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TVBoxKeyBoadMap, "TVBOX_Left", {
        get: function () { return 29; } //左
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TVBoxKeyBoadMap, "TVBOX_Comfirm", {
        get: function () { return 31; } //确定
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TVBoxKeyBoadMap, "TVBOX_Right", {
        get: function () { return 33; } //右
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TVBoxKeyBoadMap, "TVBOX_Down", {
        get: function () { return 35; } //下
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TVBoxKeyBoadMap, "TVBOX_VolAdd", {
        get: function () { return 37; } //声音＋
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TVBoxKeyBoadMap, "TVBOX_VolRed", {
        get: function () { return 39; } //声音－
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TVBoxKeyBoadMap, "TVBOX_ChAdd", {
        get: function () { return 41; } //频道＋
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TVBoxKeyBoadMap, "TVBOX_ChRed", {
        get: function () { return 43; } //频道－
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TVBoxKeyBoadMap, "TVBOX_Menu", {
        get: function () { return 45; } //菜单
        ,
        enumerable: true,
        configurable: true
    });
    return TVBoxKeyBoadMap;
}());

/// <summary>
/// 网络电视键位定义表
/// </summary>
var IPTVKeyBoadMap = /** @class */ (function () {
    function IPTVKeyBoadMap() {
    }
    Object.defineProperty(IPTVKeyBoadMap, "IPTV_Power", {
        /// <summary>
        /// 电源
        /// </summary>
        get: function () { return 1; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IPTVKeyBoadMap, "IPTV_Mute", {
        /// <summary>
        /// 静音
        /// </summary>
        get: function () { return 3; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IPTVKeyBoadMap, "IPTV_VolAdd", {
        /// <summary>
        /// 音量＋
        /// </summary>
        get: function () { return 5; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IPTVKeyBoadMap, "IPTV_VolRed", {
        /// <summary>
        /// 音量－
        /// </summary>
        get: function () { return 7; } //
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IPTVKeyBoadMap, "IPTV_ChAdd", {
        /// <summary>
        /// 频道＋
        /// </summary>
        get: function () { return 9; } //
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IPTVKeyBoadMap, "IPTV_ChRed", {
        /// <summary>
        /// 频道-
        /// </summary>
        get: function () { return 11; } //
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IPTVKeyBoadMap, "IPTV_Up", {
        /// <summary>
        /// 上
        /// </summary>
        get: function () { return 13; } //
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IPTVKeyBoadMap, "IPTV_Left", {
        /// <summary>
        /// 左
        /// </summary>
        get: function () { return 15; } //
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IPTVKeyBoadMap, "IPTV_OK", {
        /// <summary>
        /// OK
        /// </summary>
        get: function () { return 17; } //
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IPTVKeyBoadMap, "IPTV_Right", {
        /// <summary>
        /// 右
        /// </summary>
        get: function () { return 19; } //
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IPTVKeyBoadMap, "IPTV_Down", {
        /// <summary>
        /// 下
        /// </summary>
        get: function () { return 21; } //
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IPTVKeyBoadMap, "IPTV_Play", {
        /// <summary>
        /// 播放／暂停
        /// </summary>
        get: function () { return 23; } //
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IPTVKeyBoadMap, "IPTV_1", {
        get: function () { return 25; } //1
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IPTVKeyBoadMap, "IPTV_2", {
        get: function () { return 27; } //2
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IPTVKeyBoadMap, "IPTV_3", {
        get: function () { return 29; } //3
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IPTVKeyBoadMap, "IPTV_4", {
        get: function () { return 31; } //4
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IPTVKeyBoadMap, "IPTV_5", {
        get: function () { return 33; } //5
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IPTVKeyBoadMap, "IPTV_6", {
        get: function () { return 35; } //6
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IPTVKeyBoadMap, "IPTV_7", {
        get: function () { return 37; } //7
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IPTVKeyBoadMap, "IPTV_8", {
        get: function () { return 39; } //8
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IPTVKeyBoadMap, "IPTV_9", {
        get: function () { return 41; } //9
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IPTVKeyBoadMap, "IPTV_0", {
        get: function () { return 43; } //0
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IPTVKeyBoadMap, "IPTV_BACK", {
        /// <summary>
        /// 返回
        /// </summary>
        get: function () { return 45; } //
        ,
        enumerable: true,
        configurable: true
    });
    return IPTVKeyBoadMap;
}());

/// <summary>
/// 电视键位定义表
/// </summary>
var TVKeyBoadMap = /** @class */ (function () {
    function TVKeyBoadMap() {
    }
    Object.defineProperty(TVKeyBoadMap, "TV_VolAdd", {
        get: function () { return 1; } //声音＋
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TVKeyBoadMap, "TV_ChAdd", {
        get: function () { return 3; } //频道＋
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TVKeyBoadMap, "TV_Menu", {
        get: function () { return 5; } //菜单
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TVKeyBoadMap, "TV_ChRed", {
        get: function () { return 7; } //频道－
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TVKeyBoadMap, "TV_VolRed", {
        get: function () { return 9; } //声音－
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TVKeyBoadMap, "TV_Power", {
        get: function () { return 11; } //电源
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TVKeyBoadMap, "TV_Mute", {
        get: function () { return 13; } //静音
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TVKeyBoadMap, "TV_1", {
        get: function () { return 15; } //1
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TVKeyBoadMap, "TV_2", {
        get: function () { return 17; } //2
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TVKeyBoadMap, "TV_3", {
        get: function () { return 19; } //3
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TVKeyBoadMap, "TV_4", {
        get: function () { return 21; } //4
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TVKeyBoadMap, "TV_5", {
        get: function () { return 23; } //5
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TVKeyBoadMap, "TV_6", {
        get: function () { return 25; } //6
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TVKeyBoadMap, "TV_7", {
        get: function () { return 27; } //7
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TVKeyBoadMap, "TV_8", {
        get: function () { return 29; } //8
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TVKeyBoadMap, "TV_9", {
        get: function () { return 31; } //9
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TVKeyBoadMap, "TV_Res", {
        get: function () { return 33; } //--/-
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TVKeyBoadMap, "TV_0", {
        get: function () { return 35; } //0
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TVKeyBoadMap, "TV_AV_TV", {
        get: function () { return 37; } //AV/TV
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TVKeyBoadMap, "TV_Back", {
        get: function () { return 39; } //返回
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TVKeyBoadMap, "TV_Comfirm", {
        get: function () { return 41; } //确定
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TVKeyBoadMap, "TV_Up", {
        get: function () { return 43; } //上
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TVKeyBoadMap, "TV_Left", {
        get: function () { return 45; } //左
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TVKeyBoadMap, "TV_Right", {
        get: function () { return 47; } //右
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TVKeyBoadMap, "TV_Down", {
        get: function () { return 49; } //下
        ,
        enumerable: true,
        configurable: true
    });
    return TVKeyBoadMap;
}());

/// <summary>
/// DVD键位定义表
/// </summary>
var DVDKeyBoadMap = /** @class */ (function () {
    function DVDKeyBoadMap() {
    }
    Object.defineProperty(DVDKeyBoadMap, "DVD_Left", {
        get: function () { return 1; } //左
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DVDKeyBoadMap, "DVD_Up", {
        get: function () { return 3; } //上
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DVDKeyBoadMap, "DVD_Ok", {
        get: function () { return 5; } //ok
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DVDKeyBoadMap, "DVD_Down", {
        get: function () { return 7; } //下
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DVDKeyBoadMap, "DVD_Right", {
        get: function () { return 9; } //右
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DVDKeyBoadMap, "DVD_Power", {
        get: function () { return 11; } //电源
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DVDKeyBoadMap, "DVD_Mute", {
        get: function () { return 13; } //静音
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DVDKeyBoadMap, "DVD_FBack", {
        get: function () { return 15; } //快倒
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DVDKeyBoadMap, "DVD_Play", {
        get: function () { return 17; } //播放
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DVDKeyBoadMap, "DVD_FForwad", {
        get: function () { return 19; } //快进
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DVDKeyBoadMap, "DVD_Last", {
        get: function () { return 21; } //上一曲
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DVDKeyBoadMap, "DVD_Stop", {
        get: function () { return 23; } //停止
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DVDKeyBoadMap, "DVD_Next", {
        get: function () { return 25; } //下一曲
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DVDKeyBoadMap, "DVD_Format", {
        get: function () { return 27; } //制式
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DVDKeyBoadMap, "DVD_Pause", {
        get: function () { return 29; } //暂停
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DVDKeyBoadMap, "DVD_Title", {
        get: function () { return 31; } //标题
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DVDKeyBoadMap, "DVD_SK", {
        get: function () { return 33; } //开关仓
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DVDKeyBoadMap, "DVD_Menu", {
        get: function () { return 35; } //静音
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DVDKeyBoadMap, "DVD_Back", {
        get: function () { return 37; } //返回
        ,
        enumerable: true,
        configurable: true
    });
    return DVDKeyBoadMap;
}());

/// <summary>
/// ARC键位定义表
/// </summary>
var ARCKeyBoadMap = /** @class */ (function () {
    function ARCKeyBoadMap() {
    }
    Object.defineProperty(ARCKeyBoadMap, "ARC_Power", {
        get: function () { return "0x01"; } //电源
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ARCKeyBoadMap, "ARC_Mode", {
        get: function () { return "0x02"; } //模式
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ARCKeyBoadMap, "ARC_Vol", {
        get: function () { return "0x03"; } //风量
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ARCKeyBoadMap, "ARC_M", {
        get: function () { return "0x04"; } //手动风向
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ARCKeyBoadMap, "ARC_A", {
        get: function () { return "0x05"; } //自动风向，
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ARCKeyBoadMap, "ARC_tmpAdd", {
        get: function () { return "0x06"; } //温度＋
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ARCKeyBoadMap, "ARC_tmpRed", {
        get: function () { return "0x07"; } //温度－
        ,
        enumerable: true,
        configurable: true
    });
    return ARCKeyBoadMap;
}());

/// <summary>
/// 热水器键位定义表
/// </summary>
var WaterKeyBoadMap = /** @class */ (function () {
    function WaterKeyBoadMap() {
    }
    Object.defineProperty(WaterKeyBoadMap, "WH__Power", {
        get: function () { return 1; } //电源
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WaterKeyBoadMap, "WH__Set", {
        get: function () { return 3; } //设置
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WaterKeyBoadMap, "WH__TemAdd", {
        get: function () { return 5; } //温度＋
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WaterKeyBoadMap, "WH__TemRed", {
        get: function () { return 7; } //温度－
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WaterKeyBoadMap, "WH__Mode", {
        get: function () { return 9; } //模式
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WaterKeyBoadMap, "WH__Confirm", {
        get: function () { return 11; } //确定
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WaterKeyBoadMap, "WH__Timer", {
        get: function () { return 13; } //定时
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WaterKeyBoadMap, "WH__Ant", {
        get: function () { return 15; } //预约
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WaterKeyBoadMap, "WH__Time", {
        get: function () { return 17; } //时间
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WaterKeyBoadMap, "WH__Stem", {
        get: function () { return 19; } //保温 
        ,
        enumerable: true,
        configurable: true
    });
    return WaterKeyBoadMap;
}());

/// <summary>
/// 空气净化器键位定义表
/// </summary>
var AirKeyBoadMap = /** @class */ (function () {
    function AirKeyBoadMap() {
    }
    Object.defineProperty(AirKeyBoadMap, "AIR__Power", {
        get: function () { return 1; } //电源
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AirKeyBoadMap, "AIR__Auto", {
        get: function () { return 3; } //自动
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AirKeyBoadMap, "AIR_Vol", {
        get: function () { return 5; } //风量
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AirKeyBoadMap, "AIR__Timer", {
        get: function () { return 7; } //定时
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AirKeyBoadMap, "AIR__Mode", {
        get: function () { return 9; } //模式
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AirKeyBoadMap, "AIR__Anion", {
        get: function () { return 11; } //负离子
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AirKeyBoadMap, "AIR__Comfort", {
        get: function () { return 13; } //舒适
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AirKeyBoadMap, "AIR__Mute", {
        get: function () { return 15; } //静音
        ,
        enumerable: true,
        configurable: true
    });
    return AirKeyBoadMap;
}());

/// <summary>
/// 单反相机键位定义表
/// </summary>
var SLRKeyBoadMap = /** @class */ (function () {
    function SLRKeyBoadMap() {
    }
    Object.defineProperty(SLRKeyBoadMap, "SLR_TPIC", {
        get: function () { return 1; } //拍照
        ,
        enumerable: true,
        configurable: true
    });
    return SLRKeyBoadMap;
}());

/// <summary>
/// 空气风扇键位定义表
/// </summary>
var AirFanKeyBoadMap = /** @class */ (function () {
    function AirFanKeyBoadMap() {
    }
    Object.defineProperty(AirFanKeyBoadMap, "FAN_POWER", {
        //电源
        get: function () { return "3003534b003416012f022000240069002000cb0925008a003402a017230000001c00ffffffff01111111222222221211111111222222234546f000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001040877106f"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AirFanKeyBoadMap, "FAN_UP", {
        //加速
        get: function () { return "3003534b0034140131021d00260063002600c2092700870035029217260000002200ffffffff01111111222222221212111111212222234546f000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001100876005b"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AirFanKeyBoadMap, "FAN_DOWN", {
        //减速
        get: function () { return "3003534b0034140132021d00270062002700c5092700870037029917270000002300ffffffff01111111222222221221221111121122234546f0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000760052"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AirFanKeyBoadMap, "FAN_SWAY", {
        //摇摆
        get: function () { return "300352470034150132021d00260062002600ca0926008800370200002200ffffffffffffffff011111112222222212211111111222222345f000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006760035"; },
        enumerable: true,
        configurable: true
    });
    return AirFanKeyBoadMap;
}());

/// <summary>
/// 加湿器定义表
/// </summary>
var HumidifierBoadMap = /** @class */ (function () {
    function HumidifierBoadMap() {
    }
    Object.defineProperty(HumidifierBoadMap, "POWER", {
        //电源
        get: function () { return "3003534b00341d0141022400230068002200c30923008d004402c417220000001f00ffffffff01111111222222221121121112122122234546f0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010d05763eee"; } //电源 
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HumidifierBoadMap, "FogQuantity", {
        //雾量
        get: function () { return "300352470034170146022000270064002700bf0926008800490200002300ffffffffffffffff011111112222222211222211121111222345f000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010e0876006b"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HumidifierBoadMap, "Humidity", {
        //恒湿
        get: function () { return "3003534b00341c0140022500220068002200c30922008d004402c117250000002000ffffffff01111111222222221112111112212222234546f0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010e007600aa"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HumidifierBoadMap, "Anion", {
        //负离子
        get: function () { return "3003534b0034160146021f00280063002800be09280088004902bf17280000002400ffffffff01111111222222221122111112112222234546f0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010e01763ef0"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HumidifierBoadMap, "Timing", {
        //定时
        get: function () { return "3003534b0034160147021e00290063002800bd0928008a004802c117260000002500ffffffff01111111222222221121211112121222234546f0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010d05763ff6"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HumidifierBoadMap, "NightLight", {
        //夜灯
        get: function () { return "300352470034170147021f00280063002800bf09280088004d0200002400ffffffffffffffff011111112222222212222211111111222345f000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010e07760072"; },
        enumerable: true,
        configurable: true
    });
    return HumidifierBoadMap;
}());

/// <summary>
/// 7寸音乐遥控器定义表
/// </summary>
var MusicPlayer7InchBoadMap = /** @class */ (function () {
    function MusicPlayer7InchBoadMap() {
    }
    Object.defineProperty(MusicPlayer7InchBoadMap, "POWER", {
        //电源
        get: function () { return "3003534b003415012d022000230067002300c4092300870031027f17230000001f00ffffffff01111111122222222111221112221122234546f0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010e07760138"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MusicPlayer7InchBoadMap, "Mute", {
        //静音
        get: function () { return "3003534b003412012f021f00250062002500c2092500850033027c17250000002100ffffffff01111111122222222112111112212222234546f0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010e08760036"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MusicPlayer7InchBoadMap, "BackOff", {
        //上一首
        get: function () { return "30035247003414012d022000230065002300c10925008500330200002100ffffffffffffffff011111111222222222121112112122212345f000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010e00763e64"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MusicPlayer7InchBoadMap, "Homepage", {
        //主页
        get: function () { return "3003534b003415012c022000230066002300c3092200890030027e17230000001f00ffffffff01111111122222222122211112111222234546f0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010f08753e72"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MusicPlayer7InchBoadMap, "Forward", {
        //下一首
        get: function () { return "300352470034120130021f00240064002400c00925008400340200002200ffffffffffffffff011111111222222221212211121211222345f000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011008750030"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MusicPlayer7InchBoadMap, "Up", {
        //上
        get: function () { return "300352470034120130021d00260062002600be0927008500340200002200ffffffffffffffff011111111222222221221112121122212345f000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010d02760029"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MusicPlayer7InchBoadMap, "Down", {
        //下
        get: function () { return "300352470034110130021d00270061002600bf0926008400350200002300ffffffffffffffff011111111222222221221211121121222345f000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010e01760029"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MusicPlayer7InchBoadMap, "Left", {
        //左
        get: function () { return "30035247003415012c022100230066002300c30923008700310200001f00ffffffffffffffff011111111222222222221112111122212345f000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010d00760025"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MusicPlayer7InchBoadMap, "Right", {
        //右
        get: function () { return "30035247003412012f021e00250064002500c00925008500330200002100ffffffffffffffff011111111222222222121211112121222345f000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010e03760029"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MusicPlayer7InchBoadMap, "OK", {
        //ok
        get: function () { return "300352470034120130021d00260062002600bf0926008400350200002200ffffffffffffffff011111111222222222121212112121212345f000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010607760027"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MusicPlayer7InchBoadMap, "SmallHorn", {
        //音量减小
        get: function () { return "300352470034110131021d00260062002600bf0926008500340200002200ffffffffffffffff011111111222222221121211122121222345f000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010e06763f6d"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MusicPlayer7InchBoadMap, "MultiWindow", {
        //不知道
        get: function () { return "300352470034120130021d00250062002500c20925008400330200002100ffffffffffffffff011111111222222222212211111211222345f000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010d00760024"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MusicPlayer7InchBoadMap, "BigHorn", {
        //音量加大
        get: function () { return "300352470034120130021d00260063002600c00926008400340200002200ffffffffffffffff011111111222222221111211122221222345f000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010d00763e66"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MusicPlayer7InchBoadMap, "Return", {
        //返回
        get: function () { return "300352470034110130021d00260064002500c10927008400340200002200ffffffffffffffff011111111222222221111112122222212345f000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010e01763e69"; },
        enumerable: true,
        configurable: true
    });
    return MusicPlayer7InchBoadMap;
}());

/// <summary>
/// 婴儿床遥控器定义表
/// </summary>
var BabyBedBoadMap = /** @class */ (function () {
    function BabyBedBoadMap() {
    }
    Object.defineProperty(BabyBedBoadMap, "FIRST", {
        //1档
        get: function () { return "30035247003412013a021d002800600028009709270084003e0200002400ffffffffffffffff011111112222222212111111112222222345f000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010d01763e56"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BabyBedBoadMap, "SECOND", {
        //二挡
        get: function () { return "3003534b00341401380220002600630026009909270084003f026617280000002300ffffffff01111111222222221121111112122222234546f0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010e08750017"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BabyBedBoadMap, "THIRD", {
        //三挡
        get: function () { return "3003534b0034130139021e002700630027009809270086003d026417270000002200ffffffff01111111222222221221111111122222234546f0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010d02763e4a"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BabyBedBoadMap, "MUSIC", {
        //播放音乐
        get: function () { return "3003534b003413013a021e002700620026009b09250086003d026217270000002300ffffffff01111111222222221221221111121122234546f0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010e0076000a"; },
        enumerable: true,
        configurable: true
    });
    return BabyBedBoadMap;
}());

/// <summary>
/// 空气净化器位定义表
/// </summary>
var AirCleanerBoadMap = /** @class */ (function () {
    function AirCleanerBoadMap() {
    }
    Object.defineProperty(AirCleanerBoadMap, "POWER", {
        //电源
        get: function () { return "3003544f0034140135021d002700610027009b09270086003a026b17270000002300ffffffff0111111112222222212211121211222123454546f00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010e00763f96"; } //电源 
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AirCleanerBoadMap, "Anion", {
        //负离子
        get: function () { return "3003534b00341501340220002600630025009b092600870038026b17260000002200ffffffff01111111122222222112111212212221234546f0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010a03763f49"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AirCleanerBoadMap, "WindSpeed", {
        //风速
        get: function () { return "3003544f00341501330220002500640025009d092500880037026e17250000002100ffffffff0111111112222222211111121222222123454546f0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000276014a"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AirCleanerBoadMap, "Automatic", {
        //自动
        get: function () { return "3003544f00341401340220002600630026009b092700850039026b17280000002300ffffffff0111111112222222222111121112222123454546f00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010e08760060"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AirCleanerBoadMap, "Timing", {
        //定时
        get: function () { return "3003534b0034120137021f002600620026009c092600860039026d17270000002400ffffffff01111111122222222222111111112222234546f0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010e03760013"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AirCleanerBoadMap, "VChip", {
        //童锁
        get: function () { return "3003524700341601340220002500640025009e0925008700390200002100ffffffffffffffff011111111222222222121211112121222345f000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010e01760119"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AirCleanerBoadMap, "Sleep", {
        //睡眠
        get: function () { return "300355530034140135021e002700630025009e092500870037026c17270000002300ffffffff011111111222222222112111112212222345454546f000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010d047601a6"; },
        enumerable: true,
        configurable: true
    });
    return AirCleanerBoadMap;
}());

/// <summary>
/// 功放位定义表
/// </summary>
var SodcastBoadMap = /** @class */ (function () {
    function SodcastBoadMap() {
    }
    Object.defineProperty(SodcastBoadMap, "POWER", {
        //待机
        get: function () { return "3003534b00341b012d022300210069002100cf0921008e0031029217210000001d00ffffffff01111112122222212221111111122222234546f000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001020476004e"; } //电源 
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SodcastBoadMap, "BassRed", {
        //重低音-
        get: function () { return "3003534b0034160132021d00260064002600cb0926008a0036029017260000002000ffffffff01111112122222212222111111112222234546f0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010300760052"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SodcastBoadMap, "BassPlus", {
        //重低音+
        get: function () { return "3003534b00341b012d022300210069002100d10921008e0031028f17210000001d00ffffffff01111112122222212212111111212222234546f000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000376014b"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SodcastBoadMap, "Backward", {
        //后退
        get: function () { return "3003534b0034180130021f00240065002400cf0921008b0034029217240000002200ffffffff01111112122222212221121111122122234546f0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010004760052"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SodcastBoadMap, "Play", {
        //播放/暂停
        get: function () { return "3003534b00341a012e022200210068002100cf0921008e0031029217210000001d00ffffffff01111112122222212211121111222122234546f0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010305763f8d"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SodcastBoadMap, "Forward", {
        //快进
        get: function () { return "3003534b00341b012d022300210069002100cf0923008e0031029217210000001d00ffffffff01111112122222212121121112122122234546f0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007760050"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SodcastBoadMap, "DisplayMode", {
        //显示模式
        get: function () { return "300352470034180130021f00240063002600ca0926008900360200002200ffffffffffffffff011111121222222122122211112111222345f000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004763e73"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SodcastBoadMap, "ChannelMode", {
        //声道模式
        get: function () { return "3003534b00433b01950c400008007f000b00f40b0c00aa000d00b8190e00a000100000000d0001111112122222212211221111221122234567f00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000500037601d7"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SodcastBoadMap, "VolumePlus", {
        //音量+
        get: function () { return "3003514300254001cb013e00250085002700c7002900f60b2a00a7002d0000002800ffffffff0111212122222212111211112232222456f00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040006763fcb"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SodcastBoadMap, "VolumeRed", {
        //音量-
        get: function () { return "300324930034170131021f00240064002400d00921008d003202ba7a230019017a008b1726000111111212222221211112111222212223456111111212222221211112111222212223474000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010008763fc2"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SodcastBoadMap, "Left", {
        //左
        get: function () { return "300352470034170130022000250066002300ce0922008a00350200002000ffffffffffffffff011111121222222121122211122111222345f00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001010876003a"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SodcastBoadMap, "Right", {
        //右
        get: function () { return "300352470034180131022300210066002400ca0924008f00310200001d00ffffffffffffffff011111121222222121111111122222222345f00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000017a006007760010"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SodcastBoadMap, "Mute", {
        //静音
        get: function () { return "3003534b00341b012d022300210068002100d00921008e0031029317210000001d00ffffffff01111112122222212112211112211222234546f0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010205760151"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SodcastBoadMap, "Bass", {
        //低音
        get: function () { return "300352470034180131022400210066002400d00921008e00310200002000ffffffffffffffff011111121222222121222211121111222345f000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010202763f78"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SodcastBoadMap, "ATreble", {
        //高音
        get: function () { return "3003430900183801380c4100250061042600e301270000002500ffffffffffffffffffffffff01234f000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001030476001a"; },
        enumerable: true,
        configurable: true
    });
    return SodcastBoadMap;
}());

/// <summary>
/// 自动投食器
/// </summary>
var AutomaticPetFeederBoadMap = /** @class */ (function () {
    function AutomaticPetFeederBoadMap() {
    }
    Object.defineProperty(AutomaticPetFeederBoadMap, "POWER", {
        //电源
        get: function () { return "3003534b0034140144021e00280065002600a609280088003f028017280000002400ffffffff01111111122222222221221211121121234546f0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010e04760150"; } //电源 
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AutomaticPetFeederBoadMap, "TimeSetting", {
        //时间设置
        get: function () { return "3003534b003414013c021e00280063002800a709280087003b028517260000002200ffffffff01111111122222222211111211222221234546f0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010e07760148"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AutomaticPetFeederBoadMap, "Start", {
        //开始
        get: function () { return "3003534b0034130135021c00280063002800a6092700860036028317270000002300ffffffff01111111122222222221111211122221234546f0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010d08763f74"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AutomaticPetFeederBoadMap, "FoodAmount", {
        //喂食
        get: function () { return "3003544f003417012f021e00250066002500a9092500880033028617250000002100ffffffff0111111112222222221211121121222123454546f00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010506760172"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AutomaticPetFeederBoadMap, "Timing", {
        //定时
        get: function () { return "3003534b0034130131021c00270063002700a8092600880034028217280000002300ffffffff01111111122222222222111211112221234546f0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010e0076012a"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AutomaticPetFeederBoadMap, "Plus", {
        //+
        get: function () { return "30035247003419012c021f00250067002400a90925008900330200002100ffffffffffffffff011111111222222222122112112112212345f000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010e06763f5f"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AutomaticPetFeederBoadMap, "Reduce", {
        //-
        get: function () { return "30035143003415012f021c0027006600260000002200ffffffffffffffffffffffffffffffff0111111112222222222221121111122123f00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010d05760037"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AutomaticPetFeederBoadMap, "Record", {
        //记录
        get: function () { return "300352470034130132021e00270064002700a70927008700350200002300ffffffffffffffff011111111222222222121212112121212345f000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010e08763e63"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AutomaticPetFeederBoadMap, "Play", {
        //play
        get: function () { return "300352470034130131021c00270063002700a60928008600360200002300ffffffffffffffff011111111222222222221212111121212345f000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010f0376001d"; },
        enumerable: true,
        configurable: true
    });
    return AutomaticPetFeederBoadMap;
}());

//暴风影音电视
var TVBaoFengBoadMap = /** @class */ (function () {
    function TVBaoFengBoadMap() {
    }
    Object.defineProperty(TVBaoFengBoadMap, "POWER", {
        //电源
        get: function () { return "3003544f0034150137021c00270063002700710b270088003b027917270000002300ffffffff0111111211111112112121111212122223454546f000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000087500fa"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TVBaoFengBoadMap, "UP", {
        //上
        get: function () { return "300352470034150137021c002700630027006f0b280088003b0200002300ffffffffffffffff011111121111111212212111111212222345f000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010d017601b2"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TVBaoFengBoadMap, "DOWN", {
        //下
        get: function () { return "300352470034150136021d00270064002700710b250088003a0200002300ffffffffffffffff011111121111111211222111121112222345f000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010a077600b3"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TVBaoFengBoadMap, "LEFT", {
        //左
        get: function () { return "300352470034150136021c002700630027006f0b270087003b0200002300ffffffffffffffff011111121111111211111211122221222345f000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010b067601b2"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TVBaoFengBoadMap, "RIGHT", {
        //右
        get: function () { return "300352470034150137021c002800630027006f0b280087003b0200002300ffffffffffffffff011111121111111212111211112221222345f000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010b047600b2"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TVBaoFengBoadMap, "OK", {
        //ok
        get: function () { return "3003534b0034150136021c00280063002700700b270087003b027617270000002300ffffffff01111112111111121212211111211222234546f0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010a08763ef5"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TVBaoFengBoadMap, "MAINPAGE", {
        //主页
        get: function () { return "300352470034150136021c00270064002700700b270088003a0200002300ffffffffffffffff011111121111111211221211121121222345f0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000017600a2"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TVBaoFengBoadMap, "RETURN", {
        //返回
        get: function () { return "300352470034160135021e00250065002500710b27008a00390200002100ffffffffffffffff011111121111111212221221111121122345f000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010603763fe9"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TVBaoFengBoadMap, "MENU", {
        //菜单
        get: function () { return "300352470034140137021c00270063002700700b280088003b0200002300ffffffffffffffff011111121111111211111112122222212345f000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010a007601ae"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TVBaoFengBoadMap, "VOLICEPLUS", {
        //声音-
        get: function () { return "300352470034140137021c002800630028006f0b280087003c0200002400ffffffffffffffff011111121111111211122211122111222345f0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000106087601b4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TVBaoFengBoadMap, "VOLRED", {
        //声音+
        get: function () { return "300352470034150137021c00270064002700700b270088003a0200002300ffffffffffffffff011111121111111212121211112121222345f000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010801763feb"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TVBaoFengBoadMap, "B", {
        //b
        get: function () { return "300352470034160136021c002700640027006f0b270086003b0200002400ffffffffffffffff011111121111111212222221211111121345f000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010b007600ad"; },
        enumerable: true,
        configurable: true
    });
    return TVBaoFengBoadMap;
}());

//# sourceMappingURL=deviceconst.js.map

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

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExtendedOutlet; });
/* unused harmony export outlet_status */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_equipment_equipment__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interfaces_deviceconst__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_localdata_localdata__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { OutletModel } from '../../model/shebei/outletmodel';



var ExtendedOutlet = /** @class */ (function () {
    function ExtendedOutlet(eq, ls) {
        this.eq = eq;
        this.ls = ls;
    }
    ExtendedOutlet.prototype.refresh = function (deviceinfo, model) {
        if (deviceinfo.latest_staus != null) {
            var status_1 = deviceinfo.latest_staus.port_on_off;
            for (var i = 0; i < status_1.length; i++) {
                if (deviceinfo.onlinestatus) {
                    if (i === 0) {
                        if (status_1[i] === false)
                            model.buttonstatus1 = "in-close";
                        else
                            model.buttonstatus1 = "in-open";
                    }
                    else if (i === 1) {
                        if (status_1[i] === false)
                            model.buttonstatus2 = "in-close";
                        else
                            model.buttonstatus2 = "in-open";
                    }
                    else if (i === 2) {
                        if (status_1[i] === false)
                            model.buttonstatus3 = "in-close";
                        else
                            model.buttonstatus3 = "in-open";
                    }
                }
                else {
                    if (i === 0) {
                        model.buttonstatus1 = "in-disconnect"; //离线
                    }
                    else if (i === 1) {
                        model.buttonstatus2 = "in-disconnect";
                    }
                    else if (i === 2) {
                        model.buttonstatus3 = "in-disconnect";
                    }
                }
            }
        }
        if (deviceinfo.device_subinfo != null && deviceinfo.device_subinfo.items != null) {
            var names = deviceinfo.device_subinfo.items;
            if (names != null && names.length > 0) {
                for (var i = 0; i < names.length; i++) {
                    if (i === 0) {
                        model.name1 = names[0];
                    }
                    else if (i === 1) {
                        model.name2 = names[1];
                    }
                    else if (i === 2) {
                        model.name3 = names[2];
                    }
                }
            }
        }
        else {
            model.name1 = "开关1";
            model.name2 = "开关2";
            model.name3 = "开关3";
        }
    };
    //超时返回原状态
    ExtendedOutlet.prototype.setTimeOut = function (model, val, type) {
        switch (type) {
            case 0:
                model.buttonstatus1 = "in-login";
                setTimeout(function () {
                    if (model.buttonstatus1 === "in-login") {
                        model.buttonstatus1 = (val === 1) ? "in-close" : "in-open";
                    }
                }, 5000);
                break;
            case 1:
                model.buttonstatus2 = "in-login";
                setTimeout(function () {
                    if (model.buttonstatus2 === "in-login") {
                        model.buttonstatus2 = (val === 1) ? "in-close" : "in-open";
                    }
                }, 5000);
                break;
            case 2:
                model.buttonstatus3 = "in-login";
                setTimeout(function () {
                    if (model.buttonstatus3 === "in-login") {
                        model.buttonstatus3 = (val === 1) ? "in-close" : "in-open";
                    }
                }, 5000);
                break;
        }
    };
    // index 开关的第几个按键 type true已反溃还是false刚按下
    ExtendedOutlet.prototype.getOutletName = function (device, index, type) {
        if (device.latest_staus === null) {
            return "打开中";
        }
        else {
            if (device.device_subinfo != null) {
                var title = type ? (device.latest_staus.port_on_off[index]) ? "已打开" : "已关闭" : (device.latest_staus.port_on_off[index]) ? "关闭中,请稍后..." : "打开中,请稍后...";
                return device.device_subinfo.items[index] + title;
            }
            else {
                var title = type ? (device.latest_staus.port_on_off[index]) ? "已打开" : "已关闭" : (device.latest_staus.port_on_off[index]) ? "关闭中,请稍后..." : "打开中,请稍后...";
                return title;
            }
        }
    };
    // index 表示第几个按钮 详细页面开关按钮
    ExtendedOutlet.prototype.switchClick = function (deviceinfo, model, counterChange, index) {
        var _this = this;
        {
            var status_2 = 0;
            this.devname = this.getOutletName(deviceinfo, index, false);
            if (index === 0 && model.buttonstatus1 === "in-login") {
                counterChange.emit({
                    title: this.devname,
                    type: false
                });
                return;
            }
            if (index === 1 && model.buttonstatus2 === "in-login") {
                counterChange.emit({
                    title: this.devname,
                    type: false
                });
                return;
            }
            if (index === 2 && model.buttonstatus3 === "in-login") {
                counterChange.emit({
                    title: this.devname,
                    type: false
                });
                return;
            }
            if (deviceinfo.ingroup === 2) {
                if (deviceinfo.latest_staus != null) {
                    status_2 = (deviceinfo.latest_staus.port_on_off[index]) ? 0 : 1;
                    this.switchClickSend(deviceinfo, model, counterChange, index, status_2);
                }
                else {
                    var groupdevideid = deviceinfo.group_devices[0];
                    this.eq.GetFindDevicesByDeviceId(groupdevideid).subscribe(function (data) {
                        if (data.data.latest_staus != null) {
                            status_2 = (deviceinfo.latest_staus.port_on_off[index]) ? 0 : 1;
                            _this.switchClickSend(deviceinfo, model, counterChange, index, status_2);
                        }
                    });
                }
            }
            else {
                status_2 = (deviceinfo.latest_staus === null) ? 0 : (deviceinfo.latest_staus.port_on_off[index] === false) ? 1 : 0;
                this.switchClickSend(deviceinfo, model, counterChange, index, status_2);
            }
        }
    };
    //列表开关按钮
    ExtendedOutlet.prototype.listSwitchClick = function (deviceinfo, model, index) {
        var _this = this;
        {
            //获取当前第一个按钮的状态 0关， 1开,2不控制
            var status_3 = 0;
            if (index === 0 && model.buttonstatus1 === "in-login") {
                //this.ls.showMessage("打开中,请稍后...");
                return;
            }
            if (index === 1 && model.buttonstatus2 === "in-login") {
                // this.ls.showMessage("打开中,请稍后...");
                return;
            }
            if (index === 2 && model.buttonstatus3 === "in-login") {
                //this.ls.showMessage("打开中,请稍后...");
                return;
            }
            if (deviceinfo.ingroup === 2) {
                if (deviceinfo.latest_staus != null) {
                    status_3 = (deviceinfo.latest_staus.port_on_off[index] === false) ? 1 : 0;
                    this.listSwitchClickSend(deviceinfo, model, index, status_3);
                }
                else {
                    var groupdevideid = deviceinfo.group_devices[0];
                    this.eq.GetFindDevicesByDeviceId(groupdevideid).subscribe(function (data) {
                        if (data.data.latest_staus != null)
                            status_3 = (data.data.latest_staus.port_on_off[index]) ? 0 : 1;
                        else
                            status_3 = 0;
                        _this.listSwitchClickSend(deviceinfo, model, index, status_3);
                    });
                }
            }
            else {
                status_3 = (deviceinfo.latest_staus === null) ? 0 : (deviceinfo.latest_staus.port_on_off[index] === false) ? 1 : 0;
                this.listSwitchClickSend(deviceinfo, model, index, status_3);
            }
        }
    };
    ExtendedOutlet.prototype.listSwitchClickSend = function (deviceinfo, model, index, status) {
        this.setTimeOut(model, status, index);
        if (deviceinfo.component === __WEBPACK_IMPORTED_MODULE_2__interfaces_deviceconst__["a" /* DeviceConst */].componentrf_powerswitch1
            || deviceinfo.component === __WEBPACK_IMPORTED_MODULE_2__interfaces_deviceconst__["a" /* DeviceConst */].componentrf_powerswitch2
            || deviceinfo.component === __WEBPACK_IMPORTED_MODULE_2__interfaces_deviceconst__["a" /* DeviceConst */].componentrf_powerswitch3) {
            var sendOpType = 1;
            switch (index) {
                case 0:
                    sendOpType = status === 1 ? 1 : 2;
                    break;
                case 1:
                    sendOpType = status === 1 ? 3 : 4;
                    break;
                case 2:
                    sendOpType = status === 1 ? 5 : 6;
                    break;
            }
            if (this.ls.getPlayTTS()) {
                var text = "正在为您" + ((status === 1) ? "打开" : "关闭") + deviceinfo.device_subinfo.items[index] + "中。";
                zhijiaPlugin.ttsPlay(text, "normal");
            }
            //获取当前第一个按钮的状态 0关， 1开,2不控制
            this.eq.Send(deviceinfo.device_id, sendOpType).subscribe(function (data) {
            });
        }
        else {
            var sendOpType = 1;
            switch (index) {
                case 0:
                    sendOpType = status === 1 ? 1 : 2;
                    break;
                case 1:
                    sendOpType = status === 1 ? 3 : 4;
                    break;
                case 2:
                    sendOpType = status === 1 ? 5 : 6;
                    break;
            }
            if (this.ls.getPlayTTS()) {
                var text = "正在为您" + ((status === 1) ? "打开" : "关闭") + deviceinfo.device_subinfo.items[index] + "中。";
                zhijiaPlugin.ttsPlay(text, "normal");
            }
            //获取当前第一个按钮的状态 0关， 1开,2不控制
            this.eq.Send(deviceinfo.device_id, sendOpType).subscribe(function (data) {
            });
        }
    };
    ExtendedOutlet.prototype.switchClickSend = function (deviceinfo, model, counterChange, index, status) {
        var _this = this;
        this.setTimeOut(model, status, index);
        // if (deviceinfo.product_id === DeviceConst.ZWAVE_POWERSWITCH1
        //     || deviceinfo.product_id === DeviceConst.ZWAVE_POWERSWITCH2
        //     || deviceinfo.product_id === DeviceConst.ZWAVE_POWERSWITCH3
        //     || deviceinfo.product_id === DeviceConst.OUTLET1
        //     || deviceinfo.product_id === DeviceConst.OUTLET2
        //     || deviceinfo.product_id === DeviceConst.OUTLET3
        //     || deviceinfo.product_id === DeviceConst.RF_POWERSWITCH1
        //     || deviceinfo.product_id === DeviceConst.RF_POWERSWITCH2
        //     || deviceinfo.product_id === DeviceConst.RF_POWERSWITCH3) {
        if (deviceinfo.component === __WEBPACK_IMPORTED_MODULE_2__interfaces_deviceconst__["a" /* DeviceConst */].componentrf_powerswitch1
            || deviceinfo.component === __WEBPACK_IMPORTED_MODULE_2__interfaces_deviceconst__["a" /* DeviceConst */].componentrf_powerswitch2
            || deviceinfo.component === __WEBPACK_IMPORTED_MODULE_2__interfaces_deviceconst__["a" /* DeviceConst */].componentrf_powerswitch3) {
            var sendOpType = 1;
            switch (index) {
                case 0:
                    sendOpType = status === 1 ? 1 : 2;
                    break;
                case 1:
                    sendOpType = status === 1 ? 3 : 4;
                    break;
                case 2:
                    sendOpType = status === 1 ? 5 : 6;
                    break;
            }
            //获取当前第一个按钮的状态 0关， 1开,2不控制
            this.eq.Send(deviceinfo.device_id, sendOpType).subscribe(function (data) {
                counterChange.emit({
                    title: _this.devname,
                    type: false
                });
            });
        }
        else {
        }
    };
    ExtendedOutlet = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_equipment_equipment__["a" /* EquipmentProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_localdata_localdata__["a" /* LocaldataProvider */]])
    ], ExtendedOutlet);
    return ExtendedOutlet;
}());

var outlet_status = /** @class */ (function () {
    function outlet_status() {
    }
    return outlet_status;
}());

//# sourceMappingURL=extendedoutlet.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SwitchComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OutletModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return outlet_status; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__extended_extendedurlimg__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__extendedoutlet__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_channel_channel__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_equipment_equipment__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_localdata_localdata__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__colorpicker_lib_color_picker_service__ = __webpack_require__(215);
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
 * RF一,二,三开关
 * 小圆插
 * RF幕布开关
 * 幕布开关（零火）
 * 窗帘开关（零火）
 * 门铃
 * 电动幕布
 * 红外感应器
 * 电视遥控器
 * 空调遥控器
 * 机顶盒控器
 * DVD控器
 * 智能加湿器智能家电
 * 风扇智能家电
 * 7寸背景音乐智能主机智能音乐
 * 3寸背景音乐智能主机智能音乐
 * 智能电动婴儿床智能家电
 * 智能宠物喂食器智能家电
 * 智能空气净化器智能家电
 * 功放智能家电
 * 射频开关
 * 烟雾报警器
 * 漏水报警器
 * RGB控制器
 * 阀门[智能燃气机械手,zwave智能阀门]
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var SwitchComponent = /** @class */ (function () {
    function SwitchComponent(navCtrl, extimg, extended, ch, eq, ref, ls) {
        this.navCtrl = navCtrl;
        this.extimg = extimg;
        this.extended = extended;
        this.ch = ch;
        this.eq = eq;
        this.ref = ref;
        this.ls = ls;
        this.isgroup = false; //是否是组设备
        this.subonline = null;
        this.subdeviceState = null;
        this.updateDeviceName = null;
        /******一,二,三开关******* */
        this.switch1 = "switch1";
        this.switch2 = "switch2";
        this.switch3 = "switch3";
        this.buttonstatus1 = "in-close";
        this.buttonstatus2 = "in-close";
        this.buttonstatus3 = "in-close";
        this.model = new OutletModel();
        /**
         *
         * @param extimg rf 小圆插
         * @param extended
         * @param ch
         */
        this.rfoutlet = "rfoutlet";
        this.checked = false; //新值
        this.oldchecked = false; //原始值
        this.stattype = false;
        /**
         * 门铃
         * @param navCtrl
         * @param extimg
         * @param extended
         * @param ch
         * @param eq
         */
        this.rfdoorbell = "rfdoorbell";
        this.isatus = false;
        /**
         * 阀门[智能燃气机械手,zwave智能阀门]
         * @param navCtrl
         * @param extimg
         * @param extended
         * @param ch
         * @param eq
         */
        this.fmvalue = "fmvalue";
        this.close = 0;
        this.w = 0;
        this.y = 176;
        this.ct = 50; //色温
        this.bn = 50; //亮度 
        this.on_off = true;
        this.grbon_off = true;
        this.r = 0;
        this.g = 0;
        this.b = 0;
        this.lastrgb = [0, 0, 0, 0];
        this.showHeaderAndFooter = true;
        this.lastrgbw = [0, 0, 0, 0];
        this.contentHeight = 40;
        this.colorAreaHeight = 40;
    }
    SwitchComponent.prototype.ionViewDidLoad = function () { };
    SwitchComponent.prototype.ionViewWillUnload = function () { };
    SwitchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ref.markForCheck();
        if (this.subonline === null)
            this.subonline = this.ch.sub("offline").subscribe(function (data) {
                if (data.data.device_id === _this.deviceinfo.device_id) {
                    _this.switchDeviceTypeJudgment(1, data);
                    _this.ref.detectChanges();
                }
            });
        if (this.subdeviceState === null)
            this.subdeviceState = this.ch.sub("deviceState").subscribe(function (data) {
                //console.log(data);
                if (data.data.device_id === _this.deviceinfo.device_id) {
                    if (_this.deviceinfo.ingroup === 1)
                        return;
                    _this.switchDeviceTypeJudgment(2, data);
                    _this.ref.detectChanges();
                }
            });
        if (this.updateDeviceName === null)
            this.updateDeviceName = this.ch.sub("updateDeviceName").subscribe(function (data) {
                if (data.data.device_id === _this.deviceinfo.device_id) {
                    _this.deviceinfo.name = data.data.name;
                    _this.ref.detectChanges();
                }
            });
    };
    SwitchComponent.prototype.ngOnDestroy = function () {
        this.ref.detach();
        this.subonline.unsubscribe();
        this.subdeviceState.unsubscribe();
        this.updateDeviceName.unsubscribe();
    };
    Object.defineProperty(SwitchComponent.prototype, "Type", {
        set: function (type) {
            this.type = type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SwitchComponent.prototype, "device", {
        //当前开关的所有属性
        set: function (deviceinfo) {
            this.deviceinfo = deviceinfo;
            this.deviceproduct = this.deviceinfo.product_id;
            this.isgroup = this.deviceinfo.ingroup === 2;
            this.switchDeviceTypeJudgment(0);
            this.src = this.extimg.getlist_64(this.deviceinfo.product_id);
        },
        enumerable: true,
        configurable: true
    });
    SwitchComponent.prototype.click1 = function () {
        //获取当前第一个按钮的状态 0关， 1开,2不控制
        this.extended.listSwitchClick(this.deviceinfo, this.model, 0);
    };
    SwitchComponent.prototype.click2 = function () {
        this.extended.listSwitchClick(this.deviceinfo, this.model, 1);
    };
    SwitchComponent.prototype.click3 = function () {
        this.extended.listSwitchClick(this.deviceinfo, this.model, 2);
    };
    //小圆插开关
    SwitchComponent.prototype.clickvalue = function () {
        var _this = this;
        if (this.stattype) {
            this.checked = this.checked ? false : true;
            return;
        }
        ;
        this.stattype = true;
        var on_off = this.deviceinfo.latest_staus.port_on_off[0] ? 0 : 1;
        this.eq.Send(this.deviceinfo.device_id, on_off).subscribe(function (data) {
            setTimeout(function () {
                if (_this.stattype) {
                    _this.stattype = false;
                    _this.checked = _this.oldchecked;
                }
            }, 2000);
        });
        ;
    };
    SwitchComponent.prototype.doorbellclick = function () {
        var _this = this;
        this.isatus = true;
        this.eq.Send(this.deviceinfo.device_id, 0).subscribe(function (data) {
        });
        setTimeout(function () {
            _this.isatus = false;
        }, 2500);
    };
    //阀门
    SwitchComponent.prototype.fmclickvalue = function () {
        var _this = this;
        if (this.stattype) {
            this.checked = this.checked ? false : true;
            return;
        }
        ;
        this.stattype = true;
        if (this.deviceinfo.latest_staus != null) {
            var on_off = this.deviceinfo.latest_staus.on_off ? 0 : 1;
            this.eq.Send(this.deviceinfo.device_id, on_off).subscribe(function (data) {
                setTimeout(function () {
                    if (_this.stattype) {
                        _this.stattype = false;
                        _this.checked = _this.oldchecked;
                    }
                }, 2000);
            });
            ;
        }
    };
    SwitchComponent.prototype.changeColor = function () {
        clearInterval(this.intervalValRgb);
        this.startFreshRGB();
    };
    SwitchComponent.prototype.startFreshRGB = function () {
        var _this = this;
        this.intervalValRgb = setInterval(function (data) {
            console.log('check');
            if (_this.lastrgb[0] == _this.r && _this.lastrgb[1] == _this.g && _this.lastrgb[2] == _this.b) {
                console.log('send');
                _this.changeLightColorRGB();
                clearInterval(_this.intervalValRgb);
            }
            else {
                _this.lastrgb[0] = _this.r;
                _this.lastrgb[1] = _this.g;
                _this.lastrgb[2] = _this.b;
                _this.ref.detectChanges();
            }
        }, 300);
    };
    SwitchComponent.prototype.changeLightColorRGB = function () {
        var _this = this;
        this.eq.Send(this.deviceinfo.device_id, 9999, { lastrgbw: this.lastrgb.join(','), time: 1 }).subscribe(function (success) {
            console.log('指令发送成功');
            _this.ref.detectChanges();
        }, function (error) {
        });
    };
    // clickldrgb() {
    //   if (this.grbon_off) {
    //     this.eq.Send(this.deviceinfo.device_id, 2, { lastrgbw: this.lastrgbw.join(','), time: this.deviceinfo.device_rgb.time }).subscribe(success => {
    //       this.on_off = false;
    //       this.ref.detectChanges();
    //     }, error => {
    //     });
    //   } else {
    //     this.changeLightColorRGB();
    //     this.on_off = true;
    //     this.ref.detectChanges();
    //   }
    // }
    SwitchComponent.prototype.clickld = function () {
        var _this = this;
        clearInterval(this.intervalVal);
        this.intervalVal = setInterval(function (data) {
            _this.bn = _this.close;
            _this.lastrgbw[0] = 255 * (100 - _this.ct) / 100 * _this.close / 100;
            _this.lastrgbw[1] = 255 * _this.ct / 100 * _this.close / 100;
            console.log("值一:" + _this.lastrgbw[0]);
            console.log("值二:" + _this.lastrgbw[1]);
            _this.lastrgbw[2] = _this.ct;
            _this.lastrgbw[3] = _this.bn;
            if (_this.lastrgbw[0] != _this.w || _this.lastrgbw[1] != _this.y || _this.lastrgbw[2] != _this.ct || _this.lastrgbw[3] != _this.bn) {
                _this.changeLightColor();
            }
            else {
                clearInterval(_this.intervalVal);
            }
        }, 300);
        //w = 255 * (100 - ct) / 100 * bn / 100;
        // this.eq.Send(this.deviceinfo.device_id, 9999, { lastrgbw: this.lastrgbw.join(','), time: this.deviceinfo.device_rgb.time }).subscribe(success => {
        //   this.ref.detectChanges();
        // }, error => {
        // });
    };
    //RGB END
    //转到详细页面
    SwitchComponent.prototype.pushPage = function () {
        this.switchDeviceTypeJudgment(3);
    };
    SwitchComponent.prototype.switchDeviceTypeJudgment = function (operation, data) {
        if (data === void 0) { data = null; }
        switch (this.deviceproduct) {
            case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].ZWAVE_VALVE: //阀门
            case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].RF_VALVE://智能燃气机械手
                {
                    switch (operation) {
                        case 0:
                            this.devicetype = "fmvalue";
                            if (this.deviceinfo.latest_staus != null) {
                                this.checked = this.deviceinfo.latest_staus.on_off ? true : false;
                                this.oldchecked = this.deviceinfo.latest_staus.on_off ? true : false;
                            }
                            break;
                        case 2:
                            this.fmoutlestat(data);
                            break;
                        case 3:
                            this.navCtrl.push('zwavevalve', { 'device_id': this.deviceinfo.device_id });
                            break;
                    }
                    break;
                }
            case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].WATER_SENSOR://漏水报警器
                {
                    switch (operation) {
                        case 3:
                            this.navCtrl.push('watersensor', { 'device_id': this.deviceinfo.device_id });
                            break;
                    }
                    break;
                }
            case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].RF_WY_01: //WY控制器
            case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].RF_WY_02: //WY控制器
            case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].RF_WY_03: //WY控制器
            case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].RF_WY_04: //WY控制器
            //   {
            //     switch (operation) {
            //       case 3:
            //         this.navCtrl.push('manage_rf_wy', { 'device_id': this.deviceinfo.device_id });
            //         break;
            //     }
            //     break;
            //   }
            // case DeviceConst.RF_RGB_01://RGB控制器
            //   {
            //     switch (operation) {
            //       case 3:
            //         this.navCtrl.push('manage_rf_rgb', { 'device_id': this.deviceinfo.device_id });
            //         break;
            //     }
            //     break;
            //   }
            // case DeviceConst.ZWAVE_LIGHTSWITH:
            //   switch (operation) {
            //     case 3:
            //       this.navCtrl.push('lightswith', { 'device_id': this.deviceinfo.device_id });
            //       break;
            //   }
            //   break;
            case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].RF_RADAR_LED_01://RF雷达冷暖LED控制器
                {
                    switch (operation) {
                        case 0:
                            this.devicetype = "rf_radar_led_01";
                            if (this.deviceinfo.latest_staus != null) {
                                this.on_off = this.deviceinfo.latest_staus.on_off; //true 开的状态 false 关的状态
                                // if (this.on_off)
                                //     this.openstyle = "button-power button-activated button button-md button-outline button-outline-md button-outline-md-default";
                                // else
                                //     this.openstyle = "button-power button button-md button-outline button-outline-md button-outline-md-default";
                            }
                            var dls = this.deviceinfo.device_rgb;
                            if (dls.w == null || isNaN(dls.w)) {
                                dls.w = 0;
                            }
                            if (dls.y == null || isNaN(dls.y)) {
                                dls.y = 0;
                            }
                            if (dls.ct == null || isNaN(dls.ct)) {
                                dls.ct = 0;
                            }
                            if (dls.bn == null || isNaN(dls.bn)) {
                                dls.bn = 0;
                            }
                            this.deviceinfo.device_rgb = dls;
                            this.w = dls.w;
                            this.y = dls.y;
                            this.ct = dls.ct;
                            this.bn = dls.bn;
                            this.close = dls.bn; //调亮度用
                            this.ref.detectChanges();
                            break;
                        case 2:
                            if (data.data.data === undefined)
                                return;
                            this.deviceinfo.latest_staus = data.data.data;
                            {
                                if (this.deviceinfo.latest_staus != null) {
                                    this.on_off = this.deviceinfo.latest_staus.on_off; //true 开的状态 false 关的状态
                                    // if (this.on_off)
                                    //     this.openstyle = "button-power button-activated button button-md button-outline button-outline-md button-outline-md-default";
                                    // else
                                    //     this.openstyle = "button-power button button-md button-outline button-outline-md button-outline-md-default";
                                }
                                var dls_1 = this.deviceinfo.device_rgb;
                                if (dls_1.w == null || isNaN(dls_1.w)) {
                                    dls_1.w = 0;
                                }
                                if (dls_1.y == null || isNaN(dls_1.y)) {
                                    dls_1.y = 0;
                                }
                                if (dls_1.ct == null || isNaN(dls_1.ct)) {
                                    dls_1.ct = 0;
                                }
                                if (dls_1.bn == null || isNaN(dls_1.bn)) {
                                    dls_1.bn = 0;
                                }
                                this.deviceinfo.device_rgb = dls_1;
                                this.w = dls_1.w;
                                this.y = dls_1.y;
                                this.ct = dls_1.ct;
                                this.bn = dls_1.bn;
                            }
                            break;
                        case 3:
                            if (this.deviceinfo.latest_staus !== null && this.deviceinfo.latest_staus.radar_on_off)
                                this.navCtrl.push("rfradar", { device_id: this.deviceinfo.device_id });
                            else
                                this.navCtrl.push('manage_rf_radar_led', { 'device_id': this.deviceinfo.device_id }); //要判断一下跳那个页面 暂时默认
                            break;
                    }
                    break;
                }
            case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].GAS_ALRAM_DEMO:
            case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].SMOKE_ALARM://烟雾报警器
                {
                    switch (operation) {
                        case 3:
                            this.navCtrl.push('smokealarm', { 'device_id': this.deviceinfo.device_id });
                            break;
                    }
                    break;
                }
            case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].RF_SWITCHES://射频开关
                {
                    switch (operation) {
                        case 3:
                            this.navCtrl.push('rfswitches', { 'device_id': this.deviceinfo.device_id });
                            break;
                    }
                    break;
                }
            case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].Amplifier01://功放智能家电
                {
                    switch (operation) {
                        case 3:
                            this.navCtrl.push('sodcast', { 'device_id': this.deviceinfo.device_id });
                            break;
                    }
                    break;
                }
            case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].AIR_PURIFIER://智能空气净化器智能家电
                {
                    switch (operation) {
                        case 3:
                            this.navCtrl.push('aircleaner', { 'device_id': this.deviceinfo.device_id });
                            break;
                    }
                    break;
                }
            case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].IR_PET_FEEDER://智能宠物喂食器智能家电
                {
                    switch (operation) {
                        case 3:
                            this.navCtrl.push('autozdwsq', { 'device_id': this.deviceinfo.device_id });
                            break;
                    }
                    break;
                }
            case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].BABY_BED://智能电动婴儿床智能家电
                {
                    switch (operation) {
                        case 3:
                            this.navCtrl.push('babybed', { 'device_id': this.deviceinfo.device_id });
                            break;
                    }
                    break;
                }
            case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].WFMUSIC_01: //7寸背景音乐智能主机智能音乐
            case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].BTMUSIC_01://3寸背景音乐智能主机智能音乐
                {
                    switch (operation) {
                        case 3:
                            this.navCtrl.push('musicplayer', { 'device_id': this.deviceinfo.device_id });
                            break;
                    }
                    break;
                }
            case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].VT_AIRFAN://风扇智能家电
                {
                    switch (operation) {
                        case 3:
                            this.navCtrl.push('airfan', { 'device_id': this.deviceinfo.device_id });
                            break;
                    }
                    break;
                }
            case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].VT_HUMIDIFIER://智能加湿器智能家电
                {
                    switch (operation) {
                        case 3:
                            this.navCtrl.push('humidifier', { 'device_id': this.deviceinfo.device_id });
                            break;
                    }
                    break;
                }
            case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].VT_DVD://DVD控器
                {
                    switch (operation) {
                        case 3:
                            this.navCtrl.push('manage_dvd', { 'device_id': this.deviceinfo.device_id });
                            break;
                    }
                    break;
                }
            case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].VT_TVBOX://机顶盒控器
                {
                    switch (operation) {
                        case 3:
                            this.navCtrl.push('manage_tvbox', { 'device_id': this.deviceinfo.device_id });
                            break;
                    }
                    break;
                }
            case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].VT_ARC://空调遥控器
                {
                    switch (operation) {
                        case 3:
                            this.navCtrl.push('manage_arc', { 'device_id': this.deviceinfo.device_id });
                            break;
                    }
                    break;
                }
            case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].VT_TV://电视遥控器
                {
                    switch (operation) {
                        case 3:
                            this.navCtrl.push('manage_tv', { 'device_id': this.deviceinfo.device_id });
                            break;
                    }
                    break;
                }
            case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].IRSENSOR_DEMO:
            case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].IRSENSOR:
                {
                    switch (operation) {
                        case 3:
                            this.navCtrl.push('irsensor', { 'device_id': this.deviceinfo.device_id });
                            break;
                    }
                    break;
                }
            case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].GAS_ALARM:
                {
                    switch (operation) {
                        case 3:
                            this.navCtrl.push('gasalarm', { 'device_id': this.deviceinfo.device_id });
                            break;
                    }
                    break;
                }
            case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].ELETRICCURTAIN:
                {
                    switch (operation) {
                        case 3:
                            this.navCtrl.push('electriccurtain', { 'device_id': this.deviceinfo.device_id });
                            break;
                    }
                    break;
                }
            case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].DOORBELL:
                {
                    switch (operation) {
                        case 0:
                            this.devicetype = "rfdoorbell";
                            break;
                        case 3:
                            this.navCtrl.push('doorbell', { 'device_id': this.deviceinfo.device_id });
                            break;
                    }
                    break;
                }
            case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].RF_POWERSWITCH_N33://幕布开关（零火）
                {
                    switch (operation) {
                        case 3:
                            this.navCtrl.push('mbkg', { 'device_id': this.deviceinfo.device_id });
                            break;
                    }
                    break;
                }
            case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].RF_POWERSWITCH_N23://窗帘开关（零火）
                {
                    switch (operation) {
                        case 3:
                            this.navCtrl.push('curtainswitch', { 'device_id': this.deviceinfo.device_id });
                            break;
                    }
                    break;
                }
            case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].CIRCLE_OUTLET:
                {
                    switch (operation) {
                        case 0:
                            this.devicetype = "rfoutlet";
                            if (this.deviceinfo.latest_staus != null) {
                                this.checked = this.deviceinfo.latest_staus.port_on_off[0];
                                this.oldchecked = this.deviceinfo.latest_staus.port_on_off[0];
                            }
                            break;
                        case 1:
                            this.offlinestat(data);
                            break;
                        case 2:
                            this.rfoutlestat(data);
                            break;
                        case 3:
                            this.navCtrl.push('circleoutle', { 'device_id': this.deviceinfo.device_id });
                            break;
                    }
                    break;
                }
            case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].RF_POWERSWITCH_S11:
            case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].RF_POWERSWITCH_S31:
            case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].RF_POWERSWITCH_S41:
            case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].RF_POWERSWITCH_N11:
            case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].ZWAVE_POWERSWITCH_S11:
            case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].ZWAVE_POWERSWITCH_N11:
                {
                    switch (operation) {
                        case 0:
                            this.devicetype = "switch1";
                            this.extended.refresh(this.deviceinfo, this.model);
                            this.ref.detectChanges();
                            break;
                        case 1:
                            this.offlinestat(data);
                            break;
                        case 2:
                            this.switchreturnstat(data);
                            break;
                        case 3:
                            this.navCtrl.push('switch', { 'device_id': this.deviceinfo.device_id });
                            break;
                    }
                    break;
                }
            case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].RF_POWERSWITCH_S12:
            case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].RF_POWERSWITCH_S32:
            case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].RF_POWERSWITCH_S42:
            case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].RF_POWERSWITCH_N12:
            case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].ZWAVE_POWERSWITCH_S12:
            case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].ZWAVE_POWERSWITCH_N12:
                {
                    switch (operation) {
                        case 0:
                            this.devicetype = "switch2";
                            this.extended.refresh(this.deviceinfo, this.model);
                            this.ref.detectChanges();
                            break;
                        case 1:
                            this.offlinestat(data);
                            break;
                        case 2:
                            this.switchreturnstat(data);
                            this.stattype = false;
                            this.deviceinfo.latest_staus.on_off = data.data.services.on_off;
                            this.checked = this.deviceinfo.latest_staus.on_off ? true : false;
                            this.oldchecked = this.deviceinfo.latest_staus.on_off ? true : false;
                            break;
                        case 3:
                            this.navCtrl.push('switch', { 'device_id': this.deviceinfo.device_id });
                            break;
                    }
                    break;
                }
            case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].RF_POWERSWITCH_S13:
            case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].RF_POWERSWITCH_S33:
            case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].RF_POWERSWITCH_S43:
            case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].RF_POWERSWITCH_N13:
            case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].ZWAVE_POWERSWITCH_S13:
            case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].ZWAVE_POWERSWITCH_N13:
                {
                    switch (operation) {
                        case 0:
                            this.devicetype = "switch3";
                            this.extended.refresh(this.deviceinfo, this.model);
                            this.ref.detectChanges();
                            break;
                        case 1:
                            this.offlinestat(data);
                            break;
                        case 2:
                            this.switchreturnstat(data);
                            break;
                        case 3:
                            this.navCtrl.push('switch', { 'device_id': this.deviceinfo.device_id });
                            break;
                    }
                    break;
                }
            case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].RF_RGB_01:
                {
                    switch (operation) {
                        case 0:
                            this.devicetype = "rgbdevice";
                            if (this.deviceinfo.latest_staus != null) {
                                this.grbon_off = this.deviceinfo.latest_staus.on_off;
                                // if (this.grbon_off)
                                //   this.close = 255;
                                // else
                                //   this.close = 1;
                            }
                            var rgbValue = this.deviceinfo.device_rgb;
                            this.lastrgb[0] = rgbValue.r;
                            this.lastrgb[1] = rgbValue.g;
                            this.lastrgb[2] = rgbValue.b;
                            this.r = rgbValue.r;
                            this.g = rgbValue.g;
                            this.b = rgbValue.b;
                            this.ref.detectChanges();
                            break;
                        case 1:
                            break;
                        case 2:
                            break;
                        case 3:
                            break;
                    }
                }
        }
    };
    SwitchComponent.prototype.offlinestat = function (data) {
        if (!data.data.services.offline) {
            this.online = "设备离线";
        }
        this.ref.detectChanges();
    };
    SwitchComponent.prototype.switchreturnstat = function (data) {
        if (this.deviceinfo.latest_staus === null)
            this.deviceinfo.latest_staus = outlet_status;
        this.deviceinfo.latest_staus.port_on_off = data.data.services.port_on_off;
        this.extended.refresh(this.deviceinfo, this.model);
        this.online = "";
        this.ref.detectChanges();
    };
    SwitchComponent.prototype.rfoutlestat = function (data) {
        this.stattype = false;
        if (this.deviceinfo.latest_staus === null)
            this.deviceinfo.latest_staus = outlet_status;
        this.deviceinfo.latest_staus.port_on_off = data.data.services.port_on_off;
        this.checked = this.deviceinfo.latest_staus.port_on_off[0];
        this.oldchecked = this.deviceinfo.latest_staus.port_on_off[0];
        this.online = "";
        this.ref.detectChanges();
    };
    SwitchComponent.prototype.fmoutlestat = function (data) {
        this.stattype = false;
        this.deviceinfo.latest_staus.on_off = data.data.data.data.on_off;
        this.checked = this.deviceinfo.latest_staus.on_off ? true : false;
        this.oldchecked = this.deviceinfo.latest_staus.on_off ? true : false;
        this.ref.detectChanges();
    };
    SwitchComponent.prototype.ngAfterViewInit = function () {
        // let element = this.lightswitchcontentElement;
        // console.log(element);
        // let height = parseInt(element._elementRef.nativeElement.offsetHeight);
        // console.log(height);
        // this.colorAreaHeight = height;
        // this.contentHeight = height;
        // this.ref.detectChanges();
    };
    SwitchComponent.prototype.touchstate = function (state) {
        this.showHeaderAndFooter = !state;
        if (!state) {
            clearInterval(this.intervalVal);
            this.startFresh();
        }
        this.ref.detectChanges();
    };
    SwitchComponent.prototype.onChangeTemperature = function (val) {
        this.ct = val.ct;
        this.bn = val.bn <= 0 ? 50 : val.bn;
        this.y = 255 * this.ct / 100 * this.bn / 100;
        this.w = 255 * (100 - this.ct) / 100 * this.bn / 100;
        console.log(val);
        this.ref.detectChanges();
        // clearInterval(this.intervalVal);
        // this.startFresh();
    };
    //開始刷新
    SwitchComponent.prototype.startFresh = function () {
        var _this = this;
        this.intervalVal = setInterval(function (data) {
            console.log('check');
            if (_this.lastrgbw[0] != _this.w || _this.lastrgbw[1] != _this.y || _this.lastrgbw[2] != _this.ct || _this.lastrgbw[3] != _this.bn) {
                console.log('send');
                _this.lastrgbw[0] = _this.w;
                _this.lastrgbw[1] = _this.y;
                _this.lastrgbw[2] = _this.ct;
                _this.lastrgbw[3] = _this.bn;
                _this.changeLightColor();
            }
            else {
                clearInterval(_this.intervalVal);
            }
        }, 100);
    };
    SwitchComponent.prototype.changeLightColor = function () {
        var _this = this;
        this.deviceinfo.device_rgb.w = this.lastrgbw[0];
        this.deviceinfo.device_rgb.y = this.lastrgbw[1];
        this.deviceinfo.device_rgb.ct = this.lastrgbw[2];
        this.deviceinfo.device_rgb.bn = this.lastrgbw[3];
        this.ls.updateLocalDevice(this.deviceinfo);
        this.eq.Send(this.deviceinfo.device_id, 9999, { lastrgbw: this.lastrgbw.join(','), time: this.deviceinfo.device_rgb.time }).subscribe(function (success) {
            console.log('指令发送成功');
            _this.on_off = true;
            clearInterval(_this.intervalVal);
            // this.close =100;
        }, function (error) {
            clearInterval(_this.intervalVal);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('lightswitchcontent'),
        __metadata("design:type", Object)
    ], SwitchComponent.prototype, "lightswitchcontentElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], SwitchComponent.prototype, "Type", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], SwitchComponent.prototype, "device", null);
    SwitchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'switch-device',template:/*ion-inline-start:"C:\projects\zhijiatablet\smart_app_duer\app\src\components\switch\switch.html"*/'<div class="ipad-switch">\n\n    <!--一开-->\n\n    <ion-row center class="ion-row-full align-items-center" *ngIf="devicetype===\'switch1\'">\n\n        <ion-col text-center>\n\n            <button-round-delay [myroundstatus]="model.buttonstatus1" (click)="click1();"></button-round-delay>\n\n            <p>{{deviceinfo.device_subinfo.items[0]}}</p>\n\n        </ion-col>\n\n    </ion-row>\n\n    <!--一开END-->\n\n    <!--二开-->\n\n    <ion-row center class="ion-row-full align-items-center" *ngIf="devicetype===\'switch2\'">\n\n        <ion-col text-center>\n\n            <button-round-delay [myroundstatus]="model.buttonstatus1" (click)="click1();"></button-round-delay>\n\n            <p>{{deviceinfo.device_subinfo.items[0]}}</p>\n\n        </ion-col>\n\n        <ion-col text-center>\n\n            <button-round-delay [myroundstatus]="model.buttonstatus2" (click)="click2();"></button-round-delay>\n\n            <p>{{deviceinfo.device_subinfo.items[1]}}</p>\n\n        </ion-col>\n\n    </ion-row>\n\n    <!--二开END-->\n\n    <!--三开-->\n\n    <ion-row center *ngIf="devicetype===\'switch3\'">\n\n        <ion-col text-center>\n\n            <button-round-delay [myroundstatus]="model.buttonstatus2" (click)="click2();"></button-round-delay>\n\n            <p>{{deviceinfo.device_subinfo.items[1]}}</p>\n\n        </ion-col>\n\n    </ion-row>\n\n    <ion-row center *ngIf="devicetype===\'switch3\'">\n\n        <ion-col text-center>\n\n            <button-round-delay [myroundstatus]="model.buttonstatus1" (click)="click1();"></button-round-delay>\n\n            <p>{{deviceinfo.device_subinfo.items[0]}}</p>\n\n        </ion-col>\n\n        <ion-col text-center>\n\n            <button-round-delay [myroundstatus]="model.buttonstatus3" (click)="click3();"></button-round-delay>\n\n            <p>{{deviceinfo.device_subinfo.items[2]}}</p>\n\n        </ion-col>\n\n    </ion-row>\n\n    <!--开三END-->\n\n    <!--led-->\n\n    <ion-row center *ngIf="devicetype===\'rf_radar_led_01\'">\n\n        <!-- <ion-col text-center *ngIf="on_off">\n\n            <button color="bright" outline ion-button icon-only (click)="clickld();" class="ipad-button-switch active"></button>\n\n            <p>{{deviceinfo.name}}</p>\n\n        </ion-col>\n\n        <ion-col text-center *ngIf="!on_off">\n\n            <button color="bright" outline ion-button icon-only (click)="clickld();" class="ipad-button-switch"></button>\n\n            <p>{{deviceinfo.name}}</p>\n\n        </ion-col> -->\n\n        <ion-col col-6 text-left>\n\n            <ion-icon color="default" class="ipad-icon-switch iconfont icon-zhaoming"></ion-icon>\n\n        </ion-col>\n\n        <ion-col col-6 text-right>\n\n            <ion-icon color="default" class="ipad-icon-switch iconfont icon-deng-on"></ion-icon>\n\n        </ion-col>\n\n        <ion-col col-12>\n\n            <ion-range class="ipad-range-small" [(ngModel)]="close" (ionChange)="clickld()" min="0" max="100" >\n\n            </ion-range>\n\n        </ion-col>\n\n    </ion-row>\n\n    <ion-row scroll="false" class="ion-row-padding" *ngIf="devicetype===\'rf_radar_led_01\'">\n\n        <div style="width:100%;display:block" [colorPicker]="color" style="width:100%;display:block" (cpTouchChange)="touchstate($event)"\n\n            [contentHeight]="contentHeight" [cpType]="\'padwy\'" class="color-drag-content ion-content-colorpicker-clear" [cpDialogDisplay]="\'inline\'"\n\n            (cpTemperatureChange)="onChangeTemperature($event);" [cpCt]="ct" [cpBn]="bn">\n\n        </div>\n\n    </ion-row>\n\n    <!--led end-->\n\n    <!--RGB-->\n\n    <ion-row center class="ion-row-full align-items-center" *ngIf="devicetype===\'rgbdevice\'">\n\n        <!-- <ion-col text-center col-12 *ngIf="grbon_off">\n\n            <button color="bright" outline ion-button icon-only class="ipad-button-switch active" (click)="clickldrgb();"></button>\n\n            <p>{{deviceinfo.name}}</p>\n\n        </ion-col>\n\n        <ion-col text-center col-12 *ngIf="!grbon_off">\n\n            <button color="bright" outline ion-button icon-only class="ipad-button-switch" (click)="clickldrgb();"></button>\n\n            <p>{{deviceinfo.name}}</p>\n\n        </ion-col> -->\n\n        <ion-col text-center>\n\n            <div class="ion-range-row">\n\n                <div class="ion-range-label">\n\n                    红(\n\n                    <span style="color:red">{{r}}</span>)\n\n                </div>\n\n                <div class="ion-range-control">\n\n                    <ion-range [(ngModel)]="r" (ionChange)="changeColor()" min="0" max="255" color="danger">\n\n                        <ion-label range-left>0</ion-label>\n\n                        <ion-label range-right>255</ion-label>\n\n                    </ion-range>\n\n                </div>\n\n            </div>\n\n            <div class="ion-range-row">\n\n                <div class="ion-range-label">\n\n                    绿(\n\n                    <span style="color:green">{{g}}</span>)\n\n                </div>\n\n                <div class="ion-range-control">\n\n                    <ion-range [(ngModel)]="g" (ionChange)="changeColor()" min="0" max="255" color="secondary">\n\n                        <ion-label range-left>0</ion-label>\n\n                        <ion-label range-right>255</ion-label>\n\n                    </ion-range>\n\n                </div>\n\n            </div>\n\n            <div class="ion-range-row">\n\n                <div class="ion-range-label">\n\n                    蓝(\n\n                    <span style="color:blue">{{b}}</span>)\n\n                </div>\n\n                <div class="ion-range-control">\n\n                    <ion-range [(ngModel)]="b" (ionChange)="changeColor()" min="0" max="255" color="primary">\n\n                        <ion-label range-left>0</ion-label>\n\n                        <ion-label range-right>255</ion-label>\n\n                    </ion-range>\n\n                </div>\n\n            </div>\n\n        </ion-col>\n\n    </ion-row>\n\n    <!--RGBEND-->\n\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div *ngIf="type===3">\n\n    <ion-item>\n\n        <ion-avatar item-left (click)="pushPage()">\n\n            <img src="{{src}}" />\n\n            <span *ngIf="isgroup" class="equipment-item-action-groups">\n\n                <ion-icon class="iconfont icon-fenlei"></ion-icon>\n\n            </span>\n\n        </ion-avatar>\n\n        <ion-label>\n\n            <h2 (click)="pushPage()">{{deviceinfo.name}}</h2>\n\n            <p (click)="pushPage()">{{online}}</p>\n\n        </ion-label>\n\n        <div item-right *ngIf="devicetype===rfoutlet">\n\n            <ion-toggle [(ngModel)]="checked" [disabled]="stattype" mode="ios" color="secondary" (ngModelChange)="clickvalue()"></ion-toggle>\n\n        </div>\n\n        <div item-right *ngIf="devicetype===switch1">\n\n            <button-round-delay [myroundstatus]="model.buttonstatus1" (click)="click1();"></button-round-delay>\n\n        </div>\n\n        <div item-right *ngIf="devicetype===switch2">\n\n            <button-round-delay [myroundstatus]="model.buttonstatus1" (click)="click1();"></button-round-delay>\n\n            <button-round-delay [myroundstatus]="model.buttonstatus2" (click)="click2();"></button-round-delay>\n\n        </div>\n\n        <div item-right *ngIf="devicetype===switch3">\n\n            <button-round-delay [myroundstatus]="model.buttonstatus1" (click)="click1();"></button-round-delay>\n\n            <button-round-delay [myroundstatus]="model.buttonstatus2" (click)="click2();"></button-round-delay>\n\n            <button-round-delay [myroundstatus]="model.buttonstatus3" (click)="click3();"></button-round-delay>\n\n        </div>\n\n\n\n        <div item-right *ngIf="devicetype===rfdoorbell">\n\n            <button ion-button outline icon-only [disabled]="isatus" class="button-power" (click)="doorbellclick()">\n\n                <ion-icon class="iconfont icon-zhenling"></ion-icon>\n\n            </button>\n\n        </div>\n\n        <div item-right *ngIf="devicetype===fmvalue">\n\n            <ion-toggle [(ngModel)]="checked" [disabled]="stattype" mode="ios" color="secondary" (ngModelChange)="fmclickvalue()"></ion-toggle>\n\n        </div>\n\n    </ion-item>\n\n</div>\n\n<div *ngIf="type===4" class="equipment-home-item" (click)="pushPage()">\n\n    <div class="equipment-thumbnail">\n\n        <img src="{{src}}" />\n\n        <span *ngIf="isgroup" class="equipment-item-action-groups">\n\n            <ion-icon class="iconfont icon-fenlei"></ion-icon>\n\n        </span>\n\n    </div>\n\n    <h2>{{deviceinfo.name}}</h2>\n\n</div>'/*ion-inline-end:"C:\projects\zhijiatablet\smart_app_duer\app\src\components\switch\switch.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_8__colorpicker_lib_color_picker_service__["a" /* ColorPickerService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__extended_extendedurlimg__["a" /* ExtendedUrlImg */],
            __WEBPACK_IMPORTED_MODULE_3__extendedoutlet__["a" /* ExtendedOutlet */],
            __WEBPACK_IMPORTED_MODULE_4__providers_channel_channel__["a" /* ChannelProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_equipment_equipment__["a" /* EquipmentProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_7__providers_localdata_localdata__["a" /* LocaldataProvider */]])
    ], SwitchComponent);
    return SwitchComponent;
}());

var OutletModel = /** @class */ (function () {
    function OutletModel() {
        this.buttonstatus1 = "in-close";
        this.buttonstatus2 = "in-close";
        this.buttonstatus3 = "in-close";
        this.name1 = "开关";
        this.name2 = "开关";
        this.name3 = "开关";
    }
    return OutletModel;
}());

var outlet_status = /** @class */ (function () {
    function outlet_status() {
    }
    return outlet_status;
}());

//# sourceMappingURL=switch.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_localdata_localdata__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_login_login__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_externalinterface_externalinterface__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_scene_scene__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_channel_channel__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__event_eventemitter__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_equipment_equipment__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_usercenter_usercenter__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_streaming_media__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { DeviceConst } from '../../interfaces/deviceconst';







var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, _sanitizer, nav, menu, streamingMedia, ls, loginService, ext, sceneService, alertCtrl, popoverCtrl, channelService, eq, userCenterService, ref) {
        this.navCtrl = navCtrl;
        this._sanitizer = _sanitizer;
        this.nav = nav;
        this.menu = menu;
        this.streamingMedia = streamingMedia;
        this.ls = ls;
        this.loginService = loginService;
        this.ext = ext;
        this.sceneService = sceneService;
        this.alertCtrl = alertCtrl;
        this.popoverCtrl = popoverCtrl;
        this.channelService = channelService;
        this.eq = eq;
        this.userCenterService = userCenterService;
        this.ref = ref;
        //房间信息
        //RoomList: Array<any> = [];
        this.hotelId = 1;
        this.FamilyId = 0;
        this.hotelBg = this._sanitizer.bypassSecurityTrustStyle("url(" + "assets/img/ipad_bg.jpg" + ")");
        this.hotelLogo = this._sanitizer.bypassSecurityTrustStyle("url(" + "assets/img/logo.png" + ")");
        //设备信息
        this.DeviceList = [];
        this.FlatDeviceList = [];
        this.PlaySceneState = true;
        this.PlayTTSState = true;
        this.playVolume = 50;
        this.screenTime = 120;
        this.PlayStyle = "bofang";
        this.isyanshi = false;
        //空气检测仪
        this.AgList = [];
        this.qrUrl = "";
        this.loading = null;
        this.temperature = 0;
        this.humidity = 0;
        this.t = Math.random();
        this.light = 0;
        this.sceneList = [];
        this.isadministrator = false; //是否管理员用户
        this.weather = null; //实时天气
        this.weatherico = "iconfont icon-tianqi";
        this.displayMethod = 0;
        this.FamilyName = "";
        this.testname = "123";
        this.checked = false;
        menu.enable(true);
        this.GetUserBasicInformation(true); //加载基本数据 
        this.dealS(); //检查是否为二维码添加设备
    }
    HomePage.prototype.setvideoTimeOut = function () {
        var _this = this;
        clearTimeout(this.videoTimeout);
        var homeThis = this;
        //console.log("屏保时间:"+this.screenTime);
        this.videoTimeout = setTimeout(function () {
            if (_this.ls.getScreenShow() && _this.screenTime > 0) {
                var options = {
                    successCallback: function (data) {
                        if (data == "nowake") {
                            console.log("不管");
                        }
                        else {
                            console.log("体验开始");
                            homeThis.sceneService.ExcuteScene("体验", _this.ls.getFamilyId()).subscribe(function (result) {
                                console.log(result);
                            });
                        }
                        homeThis.setvideoTimeOut();
                    },
                    errorCallback: function (e) {
                        console.log("体验结束错误erer" + e);
                        homeThis.setvideoTimeOut();
                    },
                    orientation: 'landscape'
                };
                _this.streamingMedia.playVideo('/s', options);
            }
            else {
                homeThis.setvideoTimeOut();
            }
        }, this.screenTime == 0 ? 1000 : this.screenTime * 1000);
    };
    //20170215
    //家房间设备所有信息  //家与房间的变化要更新
    HomePage.prototype.GetUserBasicInformation = function (isload) {
        // this.loading = this.ls.loading("数据加载中...");
        var _this = this;
        if (isload === void 0) { isload = false; }
        this.loginService.getFamily().subscribe(function (data) {
            if (data.error_code === 0) {
                _this.ls.setUserBasicInformation(data.data);
                _this.getFamily(_this.ls.getFamilyId());
                if (_this.ls.getFamilyId() == 43)
                    _this.isyanshi = true;
                _this.getSceneList();
            }
            else
                _this.ls.showMessage(data.error_message);
            // this.ls.Loadingclose(this.loading);
        });
        // this.usercenter.ResetShareQr().subscribe(result =>{
        //   if(result.error_message == null){
        //     this.qrUrl = result.data.qr;
        //   }
        // });
    };
    HomePage.prototype.PlayChange = function (who, state) {
        if (who === 1) {
            this.ls.setPlayScene(state.checked);
        }
        else {
            this.ls.setPlayTTS(state.checked);
        }
    };
    HomePage.prototype.getSceneList = function () {
        var _this = this;
        if (this.ls.getFamilyId() != 0) {
            this.FamilyId = this.ls.getFamilyId();
            this.sceneService.GetScene(this.ls.getFamilyId()).subscribe(function (result) {
                _this.sceneList = [];
                for (var i = 0; i < result.length; i++) {
                    var element = result[i];
                    if (element.show_in_home) {
                        element.isRun = false;
                        element.showRun = false;
                        _this.sceneList.push(element);
                    }
                    if (_this.sceneList.length > 5) {
                        break;
                    }
                }
                _this.ref.detectChanges();
            }, function (error) {
            });
        }
    };
    HomePage.prototype.presentPopover = function (event) {
        var popover = this.popoverCtrl.create('ShebeiFamilyPage', {});
        popover.present({
            ev: event
        });
    };
    //获取家信息
    HomePage.prototype.getFamily = function (familyId) {
        var _this = this;
        var userBasicInfo = this.ls.getUserBasicInformation();
        this.ls.setFamilyList(userBasicInfo);
        //this.RoomList = [];
        if (userBasicInfo && userBasicInfo.length > 0) {
            for (var _i = 0, userBasicInfo_1 = userBasicInfo; _i < userBasicInfo_1.length; _i++) {
                var family = userBasicInfo_1[_i];
                if (family.family_id === familyId) {
                    //this.hotelId = family.hotel_id;
                    // if (this.hotelId !== 0) {
                    //   var timestamp = new Date().getTime();
                    //   this.hotelBg = this._sanitizer.bypassSecurityTrustStyle(`url(${"https://oss.zhijiaiot.com/assets/hotel/" + this.hotelId + "/bg.jpg?t=" + timestamp})`);
                    //   this.hotelLogo = this._sanitizer.bypassSecurityTrustStyle(`url(${"https://oss.zhijiaiot.com/assets/hotel/" + this.hotelId + "/logo.png?t=" + timestamp})`);
                    // } else if (familyId === 59 || familyId === 43) {
                    //   var timestamp = new Date().getTime();
                    //   this.hotelBg = this._sanitizer.bypassSecurityTrustStyle(`url(${"https://oss.zhijiaiot.com/assets/demo/" + familyId + "/ipad_bg.jpg?t=" + timestamp})`);
                    //   this.hotelLogo = this._sanitizer.bypassSecurityTrustStyle(`url(${"https://oss.zhijiaiot.com/assets/demo/" + familyId + "/logo.png?t=" + timestamp})`);
                    // } else {
                    //   this.hotelBg = this._sanitizer.bypassSecurityTrustStyle(`url(${"assets/img/ipad_bg.jpg"})`);
                    //   this.hotelLogo = this._sanitizer.bypassSecurityTrustStyle(`url(${"assets/img/logo.png"})`);
                    // }
                    console.log(family);
                    var timestamp = new Date().getTime();
                    if (family.padInfo.device_pad.backgroud != undefined) {
                        console.log(family.padInfo.device_pad.backgroud);
                        this.hotelBg = this._sanitizer.bypassSecurityTrustStyle("url(" + ("http://iot.image.alimmdn.com/upload/" + family.padInfo.device_pad.backgroud + "?t=" + timestamp) + ")");
                    }
                    if (family.padInfo.device_pad.logo != undefined) {
                        this.hotelLogo = this._sanitizer.bypassSecurityTrustStyle("url(" + ("http://iot.image.alimmdn.com/upload/" + family.padInfo.device_pad.logo + "?t=" + timestamp) + ")");
                    }
                    if (family.padInfo.device_pad.theme != undefined) {
                        this.hotelStyle = family.padInfo.device_pad.theme;
                    }
                    console.log("pad屏保时间:" + family.padInfo.device_pad.screensaver_time);
                    if (family.padInfo.device_pad.screensaver_time != undefined) {
                        this.screenTime = family.padInfo.device_pad.screensaver_time;
                    }
                    if (family.padInfo.device_pad.enable_qr != undefined && family.padInfo.device_pad.enable_qr) {
                        this.GetShareInfo();
                    }
                    this.ls.setFamilyName(family.name);
                    this.ls.setRoomUserName(family.username);
                    this.isadministrator = this.ls.isUserAdministrator();
                    this.DeviceList = [];
                    this.FlatDeviceList = [];
                    this.eq.PadGetDevice(familyId).subscribe(function (result) {
                        _this.FlatDeviceList = result.data;
                    });
                    break;
                }
            }
        }
        //this.ls.setRoomList(this.RoomList);
        //this.GetFindRooms();
        //this.GetShareInfo();
        this.ref.detectChanges();
    };
    //当前的房间信息
    //GetFindRooms() {
    // this.FamilyName = this.ls.getFamilyName();
    // this.sceneService.FindIndexListDate(0).subscribe(result => {
    // });
    // setTimeout(() => {
    //   this.sceneService.FindIndexListDate(0).subscribe(result => {
    //   });
    // }, 4000);
    //}
    //下拉刷新
    HomePage.prototype.pullrefresh = function (event) {
        this.GetUserBasicInformation(true);
        if (event != null) {
            setTimeout(function () {
                event.complete();
            }, 200);
        }
    };
    //设置分组
    HomePage.prototype.SetGroup = function (group) {
        this.navCtrl.push('grouplist', { familyid: group.family_id, roomid: group.room_id });
    };
    //睡眠静态页面
    HomePage.prototype.shumian = function () {
        this.navCtrl.push('sueimiang');
    };
    //切换温度湿度面板
    HomePage.prototype.nextSlide = function () {
        var isEnd = this.slides.isEnd();
        if (!isEnd) {
            this.slides.slideNext(500);
        }
        else {
            this.slides.slideTo(0, 500);
        }
    };
    HomePage.prototype.playPause = function () {
        if (this.PlayStyle === "bofang") {
            this.PlayStyle = "zanting";
            //Emitter.fire("playPlay",null);
            __WEBPACK_IMPORTED_MODULE_8__event_eventemitter__["a" /* Emitter */].fire("homePlayClick", "playPlay");
        }
        else {
            this.PlayStyle = "bofang";
            //Emitter.fire("playPause",null);
            __WEBPACK_IMPORTED_MODULE_8__event_eventemitter__["a" /* Emitter */].fire("homePlayClick", "playPause");
        }
    };
    HomePage.prototype.playNext = function () {
        __WEBPACK_IMPORTED_MODULE_8__event_eventemitter__["a" /* Emitter */].fire("homePlayClick", "playNext");
        //Emitter.fire("playNext", null);
    };
    HomePage.prototype.playPrevious = function () {
        __WEBPACK_IMPORTED_MODULE_8__event_eventemitter__["a" /* Emitter */].fire("homePlayClick", "playPrevious");
        //Emitter.fire("playPrevious", null);
    };
    HomePage.prototype.OpenMenu = function () {
        this.setvideoTimeOut();
        this.menu.open();
        __WEBPACK_IMPORTED_MODULE_8__event_eventemitter__["a" /* Emitter */].fire("openMenu", null);
    };
    HomePage.prototype.showRun = function (scene) {
        var _this = this;
        scene.showRun = true;
        setTimeout(function () {
            scene.showRun = false;
            _this.ref.detectChanges();
        }, 2000);
    };
    HomePage.prototype.FaceDet = function () {
        var _this = this;
        cordova.plugins.facerecognition.identify(function (mess) {
            console.log("识别成功", mess);
            _this.eq.PadFaceRecognition(mess.uid).subscribe(function (result) {
                console.log("提交识别成功", result);
            });
        }, function (error) {
            console.log(error);
        }, {
            groupId: 'zhijiaapp'
        });
    };
    HomePage.prototype.ImplementScene = function (scene) {
        var _this = this;
        this.setvideoTimeOut();
        this.showRun(scene);
        if (scene.is_anfang) {
            var popover = this.popoverCtrl.create("selectanfang", {
                item: { isMultiple: false, scene: scene.name }
            }, { showBackdrop: true, cssClass: "popover-anfang" });
            popover.present({
                ev: event
            });
            popover.onDidDismiss(function (popoverData) {
                if (popoverData) {
                    scene.name = popoverData;
                    _this.anfangChange(scene);
                }
            });
        }
        else {
            if (scene.isRun) {
                return;
            }
            if (scene.has_job) {
                scene.isRun = true;
                this.sceneService.ExcuteSceneJob(scene.scene_id, this.ls.getFamilyId()).subscribe(function (result) {
                    scene.isRun = false;
                    if (result.error_code == 0) {
                    }
                    else if (result.error_code == -2) {
                        _this.showUnExecuted("提示", result.error_message, scene);
                    }
                    else {
                        _this.ls.alert("提示", result.error_message);
                    }
                });
            }
            else {
                this.showUnExecuted("提示", "该情景未设置需要执行的动作", scene);
            }
        }
    };
    //未执行时显示
    HomePage.prototype.showUnExecuted = function (title, message, scene) {
        var _this = this;
        var prompt1 = this.alertCtrl.create({
            title: title || "确认信息",
            message: message,
            buttons: [
                {
                    text: "取消",
                    role: "",
                    handler: function () {
                    }
                },
                {
                    text: "去设置",
                    handler: function () {
                        _this.UpdateQingjing(scene);
                    }
                }
            ]
        });
        prompt1.present();
    };
    HomePage.prototype.UpdateQingjing = function (scene) {
        // if (scene.isShefang) {
        //   return;
        // }
        // let modal = this.modalCtrl.create(EditQingjingPage, { scene: scene });
        // modal.onDidDismiss(data => {
        //   if (data) {
        //     this.getSceneList();
        //   }
        // });
        // modal.present();
        // return;
    };
    HomePage.prototype.anfangChange = function (scene) {
        var _this = this;
        this.loading = this.ls.loading();
        this.sceneService.SetAnfang(scene.name, this.ls.getFamilyId()).subscribe(function (result) {
            _this.loading.dismiss();
            if (result.error_code == 0) {
                scene.icon = result.data.icon;
                scene.summary = result.data.summary;
            }
            else {
                _this.ls.alert("提示", result.error_message);
            }
        });
    };
    HomePage.prototype.goToSlide = function () {
        this.slides.slideTo(2, 500);
    };
    //检查是否为二维码添加设备
    HomePage.prototype.dealS = function () {
        var s = this.ls.getS();
        var state = this.ls.getSstate();
        if (s != 0) {
            if (state == "0") {
                //未处理新增
                switch (s) {
                    case 1:
                        // this.navCtrl.push(BindGatewayPage, { product_id: DeviceConst.RF_GATEWAY, productname: "mini智能主机", roomid: 0 });
                        break;
                }
                this.ls.setS(0);
                this.ls.setSstate('');
            }
        }
    };
    HomePage.prototype.volumechange = function (event) {
        //if (event.value === this.oldbrightness) return;
        //let sum = this.oldbrightness;
        this.playVolume = event.value;
        //cordova.plugins.VolumeControl.setVolume(this.playVolume / 100);
    };
    HomePage.prototype.getSysVolume = function () {
        var _this = this;
        cordova.plugins.VolumeControl.getVolume(function (result) {
            _this.playVolume = result * 100;
            console.log(_this.playVolume);
            _this.ref.detectChanges();
        });
    };
    //选中后防止重新加载
    HomePage.prototype.ionSelected = function () {
    };
    //页面加载时运行。此事件仅在每个页面创建时发生一次。如果页面离开但已被缓存，则此事件将不会在后续查看时再次触发。该ionViewDidLoad事件是放置页面的设置代码的好地方。
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.setvideoTimeOut();
        this.PlaySceneState = this.ls.getPlayScene();
        this.PlayTTSState = this.ls.getPlayTTS();
        __WEBPACK_IMPORTED_MODULE_8__event_eventemitter__["a" /* Emitter */].register("musicState", this.UpdateMusicState, this); //homne上的按键响应
        this.ref.markForCheck();
        __WEBPACK_IMPORTED_MODULE_8__event_eventemitter__["a" /* Emitter */].register("updatefamily", this.GetUserBasicInformation, this); //切换家庭事件注册
        this.updateDeviceList = this.channelService.sub("updateDeviceList").subscribe(function (data) {
            _this.GetUserBasicInformation(); //加载基本数据
        });
        this.updateScene = this.channelService.sub("updateScene").subscribe(function (data) {
            _this.getSceneList(); //加载基本数据
            _this.ref.detectChanges();
        });
        //获取实时天所
        this.ext.FindWeather().subscribe(function (result) {
            if (result.error_code === 0) {
                _this.ls.setWeather(result.data);
                _this.weather = result.data;
                var weatname = _this.weather.realtime.weather;
                _this.weatherico = _this.ext.WeatherIonic(weatname);
            }
        }, function (error) {
        });
        var elements = document.querySelectorAll(".tabbar");
        if (elements != null) {
            Object.keys(elements).map(function (key) {
                elements[key].style.display = 'none';
            });
        }
        // var AppVersion = cordova.require('cordova-plugin-appversion.app-version');
        // var version = AppVersion.build;
        // console.log(version);
    };
    HomePage.prototype.UpdateMusicState = function (eventName, state, volume) {
        switch (state) {
            case "stoped":
                this.PlayStyle = "bofang";
                break;
            case "play":
                this.PlayStyle = "zanting";
                break;
            case "pause":
                this.PlayStyle = "bofang";
                break;
            case "sysvolume_minus":
                this.getSysVolume();
                break;
            case "sysvolume_plus":
                this.getSysVolume();
                break;
            case "volume_plus":
                this.playVolume += 10;
                //cordova.plugins.VolumeControl.setVolume(this.playVolume / 100);
                break;
            case "volume_minus":
                this.playVolume -= 10;
                //cordova.plugins.VolumeControl.setVolume(this.playVolume / 100);
                break;
            case "volume_max":
                this.playVolume = 100;
                //cordova.plugins.VolumeControl.setVolume(1);
                break;
            case "volume_min":
                this.playVolume = 0;
                //cordova.plugins.VolumeControl.setVolume(0);
                break;
            case "volume_select":
                this.playVolume = volume;
                //cordova.plugins.VolumeControl.setVolume(this.playVolume / 100);
                break;
            case "openHomeMenu":
                this.setvideoTimeOut();
                this.menu.open();
                break;
        }
        this.ref.detectChanges();
    };
    HomePage.prototype.checkUpdate = function () {
        // var updateUrl = "https://zhijiaiot.com/remote_server_apk/version.xml";
        // var appUpdate = cordova.require('cordova-plugin-app-update.AppUpdate');
        // appUpdate.checkAppUpdate(onSuccess, onFail, updateUrl);
        // function onFail() {
        //     console.log('fail', JSON.stringify(arguments), arguments);}
        // function onSuccess() {
        //     console.log('success', JSON.stringify(arguments), arguments);
        // }
    };
    //添加设备
    HomePage.prototype.addDevices = function () {
        this.navCtrl.push("selproduct", { 'irgateway': 0 });
        //  this.navCtrl.push(ChoseProductPage);
    };
    //ionViewWillUnload
    HomePage.prototype.ionViewWillUnload = function () {
        this.ref.detach();
        this.updateScene.unsubscribe();
        this.updateDeviceList.unsubscribe();
    };
    HomePage.prototype.GetShareInfo = function () {
        var _this = this;
        var fxfamilyId = this.ls.getFamilyId();
        this.userCenterService.GetShareInfo(fxfamilyId.toString()).subscribe(function (resultData) {
            if (resultData.data.qr !== null) {
                _this.src = resultData.data.qr;
                _this.checked = true;
                _this.ref.detectChanges();
            }
        });
        // this.userCenterService.GetFamily(fxfamilyId).subscribe(result => {
        //   let family_type = result.data.family_type;// 0表示家庭，1表示酒店客房
        //   let qr_username = result.data.qr_username;
        //   this.checked = false;
        //   this.src = null;
        //   // var username = this.userCenterService.GetUserInfo().username;
        //   this.userCenterService.GetUserInfo().subscribe(result => {
        //     var username = result.data.username;
        //     if (username === qr_username) {
        //       let familyId = this.ls.getFamilyId();
        //       if (family_type === 0) {
        //         this.userCenterService.GetShareInfo(familyId.toString()).subscribe(resultData => {
        //           if (resultData.data.qr !== null) {
        //             this.src = resultData.data.qr;
        //             this.checked = true;
        //             this.ref.detectChanges();
        //           }
        //         });
        //       }
        //       else if (family_type === 1) {
        //         this.userCenterService.GetShareInfo(familyId.toString()).subscribe(resultData => {
        //           if (resultData.data.qr !== null) {
        //             this.src = resultData.data.qr;
        //             this.checked = true;
        //             this.ref.detectChanges();
        //           }
        //         });
        //       }
        //     }
        //   });
        // });
        // if (result.data.sharedState === 1) {
        //   this.userCenterService.GetShareInfo().subscribe(result => {
        //     if (result.data.qr !== null) {
        //       this.src = result.data.qr;
        //       this.checked = true;
        //       this.ref.detectChanges();
        //     }
        //     else {
        //       this.userCenterService.EditShareState(1).subscribe(result => {
        //         if (result.data.qr !== null) {
        //           this.src = result.data.qr;
        //           this.checked = true;
        //           this.ref.detectChanges();
        //         }
        //       });
        //     }
        //   });
        // }
        // else {
        //   this.checked = false;
        // }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Slides */])
    ], HomePage.prototype, "slides", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('popoverContent', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], HomePage.prototype, "popoverContent", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\projects\zhijiatablet\smart_app_duer\app\src\pages\home\home.html"*/'<ion-header no-shadow>\n\n    <ion-navbar transparent no-border-bottom class="toolbar-color-white">\n\n        <ion-title></ion-title>\n\n       \n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content #popoverContent class="fixedcontent ion-content-ipad" id="{{hotelStyle}}" [style.background-image]="hotelBg">\n\n    <div class="ipad-content">\n\n        <div class="ipad-top d-flex justify-content-between">\n\n            <div class="ipad-logo" title="智家e物联" [style.background-image]="hotelLogo">\n\n            </div>\n\n            <div>\n\n                <div class="home-weather d-flex  justify-content-center">\n\n                    <div class="weather-content">\n\n                        <span>\n\n                            <ion-icon class="iconfont icon-tianqi"></ion-icon>\n\n                        </span>\n\n                        <h2 *ngIf="weather!=null">\n\n                            <b>{{weather.realtime.weather}}</b>{{weather.today.tempMin}}°-{{weather.today.tempMax}}°</h2>\n\n                    </div>\n\n                    <div class="home-weather-num" *ngIf="weather!=null">\n\n                        <em>\n\n                            <span>{{weather.realtime.temp}}\n\n                                <sub>℃</sub>\n\n                            </span>\n\n                            <b>当前温度</b>\n\n                        </em>\n\n                        <em>/</em>\n\n                        <em>\n\n                            <span>{{weather.realtime.sd}}\n\n                                <sub>%</sub>\n\n                            </span>\n\n                            <b>湿度</b>\n\n                        </em>\n\n                        <em>/</em>\n\n                        <em>\n\n                            <span>{{weather.aqi.pm25}}\n\n                                <sub>ug</sub>\n\n                            </span>\n\n                            <b>PM2.5</b>\n\n                        </em>\n\n                    </div>\n\n                </div>\n\n            </div>\n\n            <!-- 播放设置 -->\n\n            <div class="ion-toggle-play">\n\n                <ion-row>\n\n                    <!-- <ion-col>\n\n                        <ion-item>\n\n                            <ion-label>情景播放</ion-label>\n\n                            <ion-toggle [(ngModel)]="PlaySceneState" (ionChange)="PlayChange(1,$event)"></ion-toggle>\n\n                        </ion-item>\n\n                    </ion-col> -->\n\n                    <ion-col>\n\n                        <ion-item>\n\n                            <ion-label>语音播报</ion-label>\n\n                            <ion-toggle [(ngModel)]="PlayTTSState" (ionChange)="PlayChange(2,$event)"></ion-toggle>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                    <ion-col>\n\n                            <button (click)="FaceDet()" ion-button clear ion-left small class="button-pad-shibie">\n\n                                <ion-icon class="iconfont icon-renlianshibie"></ion-icon> 人脸识别\n\n                            </button>\n\n                        </ion-col>\n\n                </ion-row>\n\n            </div>\n\n        </div>\n\n        <ul class="ipad-scene d-flex justify-content-center">\n\n            <li *ngFor="let scene of sceneList" (click)="ImplementScene(scene);" [ngClass]="{\'scene-active\': scene.showRun}">\n\n                <a>\n\n                    <span class="scene-icon">\n\n                        <ion-icon class="iconfont icon-{{scene.icon}}"></ion-icon>\n\n                        <ion-spinner name="crescent" *ngIf="scene.showRun"></ion-spinner>\n\n                    </span>\n\n                    <p>{{scene.name}}</p>\n\n                </a>\n\n            </li>\n\n        </ul>\n\n\n\n        <div class="ipad-switch-content  d-flex  justify-content-center">\n\n\n\n            <shebei-info *ngFor="let device of FlatDeviceList" [myroundstatus]="device" [Type]="displayMethod"></shebei-info>\n\n            <div class="ipad-switch" *ngIf="isyanshi">\n\n                <div class="ipad-switch-tit">\n\n                    <span>卧室</span>\n\n                  </div>\n\n                  <ion-row class="ion-row-full align-items-center" center>\n\n                    <ion-col text-center col-12>\n\n                      <button (click)="shumian();" color="bright" outline ion-button icon-only class="ipad-button-sleep"></button>\n\n                      <p>睡眠情况</p>\n\n                    </ion-col>\n\n                  </ion-row>\n\n            </div>\n\n            \n\n            <!-- <div class="ipad-switch">\n\n                <div class="ipad-switch-tit">\n\n                    <span>卧室</span>\n\n                </div>\n\n                <ion-row center>\n\n                    <ion-col text-center>\n\n                        <button color="bright" outline ion-button icon-only class="ipad-button-switch   button-power-loading"></button>\n\n                        <p>客厅主灯</p>\n\n                    </ion-col>\n\n                </ion-row>\n\n                <ion-row center>\n\n                    <ion-col text-center>\n\n                        <button color="bright" ion-button outline icon-only class="ipad-button-switch active"></button>\n\n                        <p>客厅主灯</p>\n\n                    </ion-col>\n\n                    <ion-col text-center>\n\n                        <button color="bright" ion-button outline icon-only class="ipad-button-switch"></button>\n\n                        <p>客厅主灯</p>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </div>\n\n            <div class="ipad-switch">\n\n                <ion-row center>\n\n                    <ion-col text-center>\n\n                        <button color="bright" ion-button outline icon-only class="ipad-button-curtain"></button>\n\n                        <p>开启</p>\n\n                    </ion-col>\n\n                    <ion-col text-center>\n\n                        <button color="bright" ion-button outline icon-only class="ipad-button-curtain active"></button>\n\n                        <p>关闭</p>\n\n                    </ion-col>\n\n                </ion-row>\n\n                <ion-row class="ion-row-padding">\n\n                    <ion-col col-6 text-left>\n\n                        <ion-icon color="default" class="ipad-icon-switch iconfont icon-chuanglian-guan"></ion-icon>\n\n                    </ion-col>\n\n                    <ion-col col-6 text-right>\n\n                        <ion-icon color="default" class="ipad-icon-switch iconfont icon-chuanglian-kai"></ion-icon>\n\n                    </ion-col>\n\n                    <ion-col>\n\n                        <ion-range class="ipad-range-small" [(ngModel)]="brightness">\n\n                        </ion-range>\n\n                    </ion-col>\n\n                    <ion-col col-12 text-center>\n\n                        <p>客厅窗帘</p>\n\n                    </ion-col>\n\n                </ion-row>\n\n                <ion-row class="ion-row-padding">\n\n                    <ion-col col-6 text-left>\n\n                        <ion-icon color="default" class="ipad-icon-switch iconfont icon-zhaoming"></ion-icon>\n\n                    </ion-col>\n\n                    <ion-col col-6 text-right>\n\n                        <ion-icon color="default" class="ipad-icon-switch iconfont icon-deng-on"></ion-icon>\n\n                    </ion-col>\n\n                    <ion-col>\n\n                        <ion-range class="ipad-range-small" [(ngModel)]="brightness">\n\n                        </ion-range>\n\n                    </ion-col>\n\n                    <ion-col col-12 text-center>\n\n                        <p>客厅大灯</p>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </div>\n\n            <div class="ipad-switch">\n\n                <ion-row center>\n\n                    <ion-col text-center>\n\n                        <button color="bright" outline ion-button icon-only class="ipad-button-switch active"></button>\n\n                        <p>开启/关闭</p>\n\n                    </ion-col>\n\n                </ion-row>\n\n                <ion-row class="ion-row-padding">\n\n                    <ion-col col-6 text-left>\n\n                        <ion-icon color="default" class="ipad-icon-switch iconfont icon-deng-off"></ion-icon>\n\n                    </ion-col>\n\n                    <ion-col col-6 text-right>\n\n                        <ion-icon color="default" class="ipad-icon-switch iconfont icon-deng-on"></ion-icon>\n\n                    </ion-col>\n\n                    <ion-col col-12>\n\n                        <div class="range-W">\n\n                            <span style="left:50px"></span>\n\n                        </div>\n\n                    </ion-col>\n\n                    <ion-col col-12 text-center>\n\n                        <p>客厅窗帘</p>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </div>\n\n            <div class="ipad-switch">\n\n                <ion-row center>\n\n                    <div class="MP3-control">\n\n                        <div class="MP3-control-item">\n\n                            <button color="default" ion-button outline clear class="button-power">\n\n                                <ion-icon class="iconfont icon-shangyishou"></ion-icon>\n\n                            </button>\n\n                        </div>\n\n                        <div class="MP3-control-item">\n\n                            <button color="default" ion-button outline clear class="button-power">\n\n                                <ion-icon class="iconfont icon-bofang"></ion-icon>\n\n                            </button>\n\n\n\n                        </div>\n\n                        <div class="MP3-control-item">\n\n                            <button color="default" ion-button outline clear class="button-power">\n\n                                <ion-icon class="iconfont icon-xiayishou"></ion-icon>\n\n                            </button>\n\n\n\n                        </div>\n\n                    </div>\n\n                </ion-row>\n\n                <ion-row class="ion-row-padding">\n\n                    <ion-col col-6 text-left>\n\n                        <ion-icon color="default" class="ipad-icon-switch iconfont icon-yinliangjian"></ion-icon>\n\n                    </ion-col>\n\n                    <ion-col col-6 text-right>\n\n                        <ion-icon color="default" class="ipad-icon-switch iconfont icon-yinliangjia"></ion-icon>\n\n                    </ion-col>\n\n                    <ion-col>\n\n                        <ion-range class="ipad-range-small" [(ngModel)]="brightness3">\n\n                        </ion-range>\n\n                    </ion-col>\n\n                    <ion-col col-12 text-center>\n\n                        <p>MP3播放器</p>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </div>\n\n            <div class="ipad-switch">\n\n                <ion-row center class="ion-row-full align-items-center">\n\n                    <ion-col text-center>\n\n                        <button color="bright" outline ion-button icon-only class="ipad-button-camera"></button>\n\n                        <p>高清摄像头</p>\n\n                    </ion-col>\n\n                </ion-row>\n\n\n\n            </div>-->\n\n            <!-- RGB灯 -->\n\n            <!-- <div class="ipad-switch">\n\n                <ion-row center class="ion-row-full align-items-center">\n\n                    <ion-col text-center col-12>\n\n                        <button color="bright" outline ion-button icon-only class="ipad-button-switch active"></button>\n\n                        <p>开启/关闭</p>\n\n                    </ion-col>\n\n                    <ion-col text-center>\n\n                        <div class="ion-range-row">\n\n                            <div class="ion-range-label">\n\n                                R值\n\n                            </div>\n\n                            <div class="ion-range-control">\n\n                                <ion-range class="camera-range" min="0" max="180" color="danger">\n\n                                    <ion-label range-left>0</ion-label>\n\n                                    <ion-label range-right>25</ion-label>\n\n                                </ion-range>\n\n                            </div>\n\n                        </div>\n\n                        <div class="ion-range-row">\n\n                            <div class="ion-range-label">\n\n                                G值\n\n                            </div>\n\n                            <div class="ion-range-control">\n\n                                <ion-range min="0" max="180" color="secondary">\n\n                                    <ion-label range-left>0°</ion-label>\n\n                                    <ion-label range-right>90°</ion-label>\n\n                                </ion-range>\n\n                            </div>\n\n                        </div>\n\n                        <div class="ion-range-row">\n\n                            <div class="ion-range-label">\n\n                                B值\n\n                            </div>\n\n                            <div class="ion-range-control">\n\n                                <ion-range min="0" max="180" color="primary">\n\n                                    <ion-label range-left>0°</ion-label>\n\n                                    <ion-label range-right>90°</ion-label>\n\n                                </ion-range>\n\n                            </div>\n\n                        </div>\n\n                    </ion-col>\n\n                </ion-row>\n\n\n\n            </div> -->\n\n\n\n\n\n        </div>\n\n        <div class="ipad-foot d-flex justify-content-between">\n\n            <div *ngIf="checked">\n\n                <div class="d-flex align-items-center code-content">\n\n                    <p class="code-tit-tip"></p>\n\n                    <p class="wx-code">\n\n                        <img src="{{src}}" alt="我的二微码">\n\n                    </p>\n\n                </div>\n\n            </div>\n\n            <div class="MP3-wrap">\n\n                <ion-row center>\n\n                    <ion-col col-12>\n\n                        <div class="MP3-control">\n\n                            <!-- <div class="MP3-control-item">\n\n                                <button color="default" (click)="playPrevious()" ion-button outline clear class="button-power">\n\n                                    <ion-icon class="iconfont icon-shangyishou"></ion-icon>\n\n                                </button>\n\n                            </div>\n\n                            <div class="MP3-control-item">\n\n                                <button color="default" (click)="playPause()" ion-button outline clear class="button-power">\n\n                                    <ion-icon class="iconfont icon-{{PlayStyle}}"></ion-icon>\n\n                                </button>\n\n\n\n                            </div>\n\n                            <div class="MP3-control-item">\n\n                                <button color="default" (click)="playNext()" ion-button outline clear class="button-power">\n\n                                    <ion-icon class="iconfont icon-xiayishou"></ion-icon>\n\n                                </button>\n\n\n\n                            </div> -->\n\n                        </div>\n\n                    </ion-col>\n\n                    <ion-col>\n\n                        <div class="ion-range-row">\n\n                            <div class="ion-range-control">\n\n                                <ion-range min="0" max="100" (ionChange)="volumechange($event)" [(ngModel)]="playVolume">\n\n                                    <ion-icon range-left color="default" class="iconfont icon-yinliangjian"></ion-icon>\n\n                                    <ion-icon range-right color="default" class="iconfont icon-yinliangjia"></ion-icon>\n\n                                </ion-range>\n\n                            </div>\n\n                        </div>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </div>\n\n            <div>\n\n                <ion-row>\n\n                    <ion-col center>\n\n                        <div class="MIC MIC-orange" (click)="OpenMenu()">\n\n                            <div class="dot">\n\n                                <ion-icon name="mic"></ion-icon>\n\n                            </div>\n\n                            <div class="pulse"></div>\n\n                            <div class="pulse1"></div>\n\n                        </div>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </div>\n\n        </div>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\projects\zhijiatablet\smart_app_duer\app\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_streaming_media__["a" /* StreamingMedia */],
            __WEBPACK_IMPORTED_MODULE_2__providers_localdata_localdata__["a" /* LocaldataProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_login_login__["a" /* LoginProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_externalinterface_externalinterface__["a" /* ExternalinterfaceProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_scene_scene__["a" /* SceneProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_channel_channel__["a" /* ChannelProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_equipment_equipment__["a" /* EquipmentProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_usercenter_usercenter__["a" /* UsercenterProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShebeiComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shebei__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wifidevice_wifidevice_module__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__switch_switch_module__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__doorlock_doorlock_module__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__demonstration_demonstration_module__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__airdetector_airdetector_module__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__demoncamera_demoncamera_module__ = __webpack_require__(336);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var ShebeiComponentModule = /** @class */ (function () {
    function ShebeiComponentModule() {
    }
    ShebeiComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__shebei__["a" /* ShebeiComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicModule */],
                __WEBPACK_IMPORTED_MODULE_3__wifidevice_wifidevice_module__["a" /* WifideviceComponentModule */],
                __WEBPACK_IMPORTED_MODULE_4__switch_switch_module__["a" /* SwitchComponentModule */],
                __WEBPACK_IMPORTED_MODULE_5__doorlock_doorlock_module__["a" /* DoorlockComponentModule */],
                __WEBPACK_IMPORTED_MODULE_6__demonstration_demonstration_module__["a" /* DemonstrationComponentModule */],
                __WEBPACK_IMPORTED_MODULE_7__airdetector_airdetector_module__["a" /* AirdetectorComponentModule */],
                __WEBPACK_IMPORTED_MODULE_8__demoncamera_demoncamera_module__["a" /* DemoncameraComponentModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__shebei__["a" /* ShebeiComponent */]
            ]
        })
    ], ShebeiComponentModule);
    return ShebeiComponentModule;
}());

//# sourceMappingURL=shebei.module.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShebeiComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__ = __webpack_require__(313);
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
 * Generated class for the ShebeiComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var ShebeiComponent = /** @class */ (function () {
    function ShebeiComponent() {
        this.type = "";
        this.bindshebei = true;
        this.isgroup = false; //是否是组设备
    }
    Object.defineProperty(ShebeiComponent.prototype, "myroundstatus", {
        set: function (equipment) {
            this.device = equipment;
            this.isgroup = this.device.ingroup === 2;
            if (this.device.main_device_id == null || this.device.main_device_id == "") {
                this.bindshebei = true;
                switch (this.device.product_id) {
                    case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].WF_CIRCLE_OUTLET:
                    case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].RF_GATEWAY:
                    case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].CURTAIN:
                    case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].Airradio_A1: //空气电台
                    case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].Airradio_A2:
                    case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].Airradio_A2se:
                    case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].IR_GATEWAY:
                    // case DeviceConst.TC1_CAMERA:
                    // case DeviceConst.TP1_CAMERA:
                    case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].ZWAVE_GATEWAY:
                        this.componenttype = "wifidevice";
                        break;
                    case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].RF_POWERSWITCH_N11:
                    case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].RF_POWERSWITCH_N12:
                    case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].RF_POWERSWITCH_N13:
                    case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].RF_POWERSWITCH_N23:
                    case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].RF_POWERSWITCH_N33:
                    case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].RF_POWERSWITCH_S11:
                    case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].RF_POWERSWITCH_S12:
                    case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].RF_POWERSWITCH_S13:
                    case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].RF_POWERSWITCH_S31:
                    case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].RF_POWERSWITCH_S32:
                    case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].RF_POWERSWITCH_S33:
                    case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].RF_POWERSWITCH_S41:
                    case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].RF_POWERSWITCH_S42:
                    case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].RF_POWERSWITCH_S43:
                    case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].ZWAVE_POWERSWITCH_N11:
                    case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].ZWAVE_POWERSWITCH_N12:
                    case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].ZWAVE_POWERSWITCH_N13:
                    case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].ZWAVE_POWERSWITCH_S11:
                    case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].ZWAVE_POWERSWITCH_S12:
                    case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].ZWAVE_POWERSWITCH_S13:
                    case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].CIRCLE_OUTLET:
                    case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].DOORBELL:
                    case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].ELETRICCURTAIN:
                    case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].GAS_ALARM:
                    case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].IRSENSOR:
                    case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].VT_TV:
                    case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].VT_ARC:
                    case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].VT_TVBOX:
                    case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].VT_DVD:
                    case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].VT_HUMIDIFIER:
                    case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].VT_AIRFAN:
                    case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].BTMUSIC_01:
                    case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].WFMUSIC_01:
                    case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].BABY_BED:
                    case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].IR_PET_FEEDER:
                    case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].AIR_PURIFIER:
                    case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].Amplifier01:
                    case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].RF_SWITCHES:
                    case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].SMOKE_ALARM:
                    case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].WATER_SENSOR:
                    case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].RF_RGB_01:
                    case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].RF_WY_04:
                    case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].RF_WY_03:
                    case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].RF_WY_02:
                    case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].RF_WY_01:
                    case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].RF_VALVE:
                    case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].ZWAVE_VALVE:
                    case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].IRSENSOR_DEMO:
                    case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].GAS_ALRAM_DEMO:
                    case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].RF_RADAR_LED_01:
                        this.componenttype = "switchdevice";
                        break;
                    case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].DOOR:
                    case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].DOOR_MAGNET:
                        this.componenttype = "doorlock";
                        break;
                    case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].ZWAVE_LIGHTSWITH:
                        this.componenttype = "zwavedevice";
                        break;
                    case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].RF_GATEWAY_DEMO:
                    case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].DEMO_DOORBELL:
                    case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].DEMO_MENCI:
                    case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].DEMO_SENSOR:
                    case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].DEMO_GAS:
                    case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].DEMO_LIGHTS:
                    case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].DEMO_CURTAIN:
                    case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].DEMO_LIGHT:
                    case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].DEMO_SCREENMP3:
                    case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].DEMO_NEWWIND:
                    case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].DEMO_MANIPULATOR:
                    case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].DEMO_AIR:
                    case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].DEMO_LIGHTSDENG:
                    case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].DEMO_RELAY:
                    case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].DEMO_RGB:
                        this.componenttype = "demodevice";
                        break;
                    case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].DEMO_AIR_1:
                        this.componenttype = "demoair1";
                        break;
                    case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].TC1_CAMERA:
                    case __WEBPACK_IMPORTED_MODULE_1__interfaces_deviceconst__["a" /* DeviceConst */].TP1_CAMERA:
                        this.componenttype = "democamera";
                        break;
                }
            }
            else {
                this.bindshebei = false;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShebeiComponent.prototype, "Type", {
        set: function (type) {
            this.type = type;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ShebeiComponent.prototype, "myroundstatus", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ShebeiComponent.prototype, "Type", null);
    ShebeiComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'shebei-info',template:/*ion-inline-start:"C:\projects\zhijiatablet\smart_app_duer\app\src\components\shebei\shebei.html"*/'<span [ngSwitch]="componenttype" *ngIf="bindshebei">\n\n  <ng-template [ngSwitchCase]="\'wifidevice\'">\n\n    <div class="ipad-switch-tit">\n\n      <span>{{device.roomname}}</span>\n\n    </div>\n\n    <wifidevice-device [device]="device" [Type]="type"></wifidevice-device>\n\n  </ng-template>\n\n  <ng-template [ngSwitchCase]="\'switchdevice\'">\n\n    <div class="ipad-switch-tit">\n\n      <span>{{device.roomname}}</span>\n\n    </div>\n\n    <switch-device [device]="device" [Type]="type"></switch-device>\n\n  </ng-template>\n\n  <ng-template [ngSwitchCase]="\'doorlock\'">\n\n    <div class="ipad-switch-tit">\n\n      <span>{{device.roomname}}</span>\n\n    </div>\n\n    <doorlock-device [device]="device" [Type]="type"></doorlock-device>\n\n  </ng-template>\n\n  <ng-template [ngSwitchCase]="\'zwavedevice\'">\n\n    <div class="ipad-switch-tit">\n\n      <span>{{device.roomname}}</span>\n\n    </div>\n\n    <doorlock-device [device]="device" [Type]="type"></doorlock-device>\n\n  </ng-template>\n\n  <ng-template [ngSwitchCase]="\'demodevice\'">\n\n    <div class="ipad-switch-tit">\n\n      <span>{{device.roomname}}</span>\n\n    </div>\n\n    <demonstration [device]="device" [Type]="type"></demonstration>\n\n  </ng-template>\n\n  <ng-template [ngSwitchCase]="\'demoair1\'">\n\n    <div class="ipad-switch-tit">\n\n      <span>{{device.roomname}}</span>\n\n    </div>\n\n    <airdetector [device]="device" [Type]="type"></airdetector>\n\n  </ng-template>\n\n  <ng-template [ngSwitchCase]="\'democamera\'">\n\n    <div class="ipad-switch-tit">\n\n      <span>{{device.roomname}}</span>\n\n    </div>\n\n    <demoncamera [device]="device" [Type]="type"></demoncamera>\n\n  </ng-template>\n\n</span>'/*ion-inline-end:"C:\projects\zhijiatablet\smart_app_duer\app\src\components\shebei\shebei.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ShebeiComponent);
    return ShebeiComponent;
}());

//# sourceMappingURL=shebei.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WifideviceComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wifidevice__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__churtain_template_component__ = __webpack_require__(324);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var WifideviceComponentModule = /** @class */ (function () {
    function WifideviceComponentModule() {
    }
    WifideviceComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__wifidevice__["a" /* WifideviceComponent */],
                __WEBPACK_IMPORTED_MODULE_3__churtain_template_component__["a" /* CurtainButtonComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__wifidevice__["a" /* WifideviceComponent */],
                __WEBPACK_IMPORTED_MODULE_3__churtain_template_component__["a" /* CurtainButtonComponent */]
            ]
        })
    ], WifideviceComponentModule);
    return WifideviceComponentModule;
}());

//# sourceMappingURL=wifidevice.module.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WifideviceComponent; });
/* unused harmony export outlet_status */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interfaces_deviceconst__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__extended_extendedurlimg__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_equipment_equipment__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_channel_channel__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**支持的所有设备
 * wifi 窗帘
 * wifi 小圆插
 * 空气质量检测仪
 * 红外万能摇控器
 * 射频网关
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var WifideviceComponent = /** @class */ (function () {
    function WifideviceComponent(navCtrl, extimg, eq, ch, ref) {
        this.navCtrl = navCtrl;
        this.extimg = extimg;
        this.eq = eq;
        this.ch = ch;
        this.ref = ref;
        this.isgroup = false; //是否是组设备
        this.subonline = null;
        this.subdeviceState = null;
        this.updateDeviceName = null;
        //wifi小圆插
        this.wifioutlet = __WEBPACK_IMPORTED_MODULE_2__interfaces_deviceconst__["a" /* DeviceConst */].WF_CIRCLE_OUTLET;
        this.checked = false; //当前状态
        this.oldchecked = false; //上一次状态
        this.stattype = false; //按钮不能一直点
        //wifi窗帘
        this.wificurtain = __WEBPACK_IMPORTED_MODULE_2__interfaces_deviceconst__["a" /* DeviceConst */].CURTAIN;
        this.buttonstatus1 = "in-open";
        this.buttonstatus2 = "in-stop";
        this.buttonstatus3 = "in-close";
        this.brightness = 0;
        this.oldbrightness = 0;
    }
    Object.defineProperty(WifideviceComponent.prototype, "Type", {
        set: function (type) {
            this.type = type;
        },
        enumerable: true,
        configurable: true
    });
    //页面加载时运行。此事件仅在每个页面创建时发生一次。如果页面离开但已被缓存，则此事件将不会在后续查看时再次触发。该ionViewDidLoad事件是放置页面的设置代码的好地方。
    WifideviceComponent.prototype.ionViewDidLoad = function () {
    };
    WifideviceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ref.markForCheck();
        if (this.subonline === null)
            this.subonline = this.ch.sub("online").subscribe(function (data) {
                if (data.data.device_id === _this.deviceinfo.device_id) {
                    if (data.data.online) {
                        _this.deviceTypeJudgment(1);
                    }
                    else
                        _this.online = "设备离线";
                    _this.ref.detectChanges();
                }
            });
        if (this.subdeviceState === null)
            this.subdeviceState = this.ch.sub("deviceState").subscribe(function (data) {
                if (_this.deviceinfo.ingroup === 1)
                    return;
                if (data.data.device_id === _this.deviceinfo.device_id) {
                    _this.deviceTypeJudgment(2, data);
                    _this.ref.detectChanges();
                }
            });
        if (this.updateDeviceName === null)
            this.updateDeviceName = this.ch.sub("updateDeviceName").subscribe(function (data) {
                if (data.data.device_id === _this.deviceinfo.device_id) {
                    _this.deviceinfo.name = data.data.name;
                    _this.ref.detectChanges();
                }
            });
    };
    WifideviceComponent.prototype.ngOnDestroy = function () {
        this.ref.detach();
        this.subonline.unsubscribe();
        this.subdeviceState.unsubscribe();
        this.updateDeviceName.unsubscribe();
    };
    WifideviceComponent.prototype.change = function (event) {
        if (event.value === this.oldbrightness)
            return;
        //let sum = this.oldbrightness;
        this.brightness = event.value;
        this.eq.Send(this.deviceinfo.device_id, 9998, this.brightness).subscribe(function (data) {
        });
    };
    WifideviceComponent.prototype.deviceTypeJudgment = function (operation, data) {
        if (data === void 0) { data = null; }
        switch (this.devicetype) {
            case __WEBPACK_IMPORTED_MODULE_2__interfaces_deviceconst__["a" /* DeviceConst */].RF_GATEWAY:
                {
                    switch (operation) {
                        case 1:
                            this.online = "设备在线";
                            break;
                        case 3:
                            this.navCtrl.push('rfgateway', { 'device_id': this.deviceinfo.device_id });
                            break;
                    }
                    break;
                }
            case __WEBPACK_IMPORTED_MODULE_2__interfaces_deviceconst__["a" /* DeviceConst */].WF_CIRCLE_OUTLET://wifi小圆插
                {
                    switch (operation) {
                        case 0:
                            if (this.deviceinfo.latest_staus != null) {
                                this.checked = this.deviceinfo.latest_staus.port_on_off[0];
                                this.oldchecked = this.deviceinfo.latest_staus.port_on_off[0];
                            }
                            break;
                        case 1:
                            this.online = "设备在线";
                            break;
                        case 2:
                            this.stattype = false;
                            if (this.deviceinfo.latest_staus === null)
                                this.deviceinfo.latest_staus = outlet_status;
                            this.deviceinfo.latest_staus.port_on_off = data.data.services.port_on_off;
                            this.checked = this.deviceinfo.latest_staus.port_on_off[0];
                            this.oldchecked = this.deviceinfo.latest_staus.port_on_off[0];
                            break;
                        case 3:
                            this.navCtrl.push('circleoutle', { 'device_id': this.deviceinfo.device_id });
                            break;
                    }
                }
                break;
            case __WEBPACK_IMPORTED_MODULE_2__interfaces_deviceconst__["a" /* DeviceConst */].Airradio_A1: //空气电台
            case __WEBPACK_IMPORTED_MODULE_2__interfaces_deviceconst__["a" /* DeviceConst */].Airradio_A2:
            case __WEBPACK_IMPORTED_MODULE_2__interfaces_deviceconst__["a" /* DeviceConst */].Airradio_A2se:
                {
                    switch (operation) {
                        case 0:
                            if (this.deviceinfo.latest_staus != null) {
                                if (this.deviceinfo.latest_staus.isOnline === 0) {
                                    this.online = "设备离线";
                                }
                                else {
                                    if (this.deviceinfo.latest_staus.param.pM25 != null)
                                        this.online = "PM2.5  " + this.deviceinfo.latest_staus.param.pM25 + "μg/m³";
                                    else
                                        this.online = "设备在线";
                                }
                            }
                            break;
                        case 1:
                            if (this.deviceinfo.latest_staus.param.pM25 != null)
                                this.online = "PM2.5  " + this.deviceinfo.latest_staus.param.pM25 + "μg/m³";
                            else
                                this.online = "设备在线";
                            break;
                        case 3:
                            this.navCtrl.push('airradio', { 'device_id': this.deviceinfo.device_id });
                            break;
                    }
                }
                break;
            case __WEBPACK_IMPORTED_MODULE_2__interfaces_deviceconst__["a" /* DeviceConst */].IR_GATEWAY://红外万能摇控器
                {
                    switch (operation) {
                        case 1:
                            this.online = "设备在线";
                            break;
                        case 3:
                            this.navCtrl.push('manage_ir_gateway', { 'device_id': this.deviceinfo.device_id });
                            break;
                    }
                }
                break;
            case __WEBPACK_IMPORTED_MODULE_2__interfaces_deviceconst__["a" /* DeviceConst */].CURTAIN://wifi窗帘
                {
                    // this.brightness = this.oldbrightness;
                    switch (operation) {
                        case 0:
                            this.oldbrightness = (this.deviceinfo.latest_staus !== null && this.deviceinfo.latest_staus.window_position !== null) ? this.deviceinfo.latest_staus.window_position : 0;
                            break;
                        case 2:
                            if (this.deviceinfo.ingroup === 1)
                                return;
                            if (data.data.services.window_position === -1)
                                return;
                            this.deviceinfo.latest_staus.window_position = data.data.services.window_position;
                            this.deviceinfo.latest_staus.window_status = data.data.services.window_status;
                            this.brightness = data.data.services.window_position;
                            this.oldbrightness = this.deviceinfo.latest_staus.window_position;
                            break;
                        case 1:
                            this.online = "设备在线";
                            break;
                        case 3:
                            this.navCtrl.push('curtain', { 'device_id': this.deviceinfo.device_id });
                            break;
                    }
                }
                break;
            case __WEBPACK_IMPORTED_MODULE_2__interfaces_deviceconst__["a" /* DeviceConst */].TC1_CAMERA:
            case __WEBPACK_IMPORTED_MODULE_2__interfaces_deviceconst__["a" /* DeviceConst */].TP1_CAMERA:
                switch (operation) {
                    case 1:
                        this.online = "设备在线";
                        break;
                    case 3:
                        this.navCtrl.push('camera', { 'device_id': this.deviceinfo.device_id, 'file_id': '0' });
                        break;
                }
                break;
            case __WEBPACK_IMPORTED_MODULE_2__interfaces_deviceconst__["a" /* DeviceConst */].ZWAVE_GATEWAY:
                switch (operation) {
                    case 1:
                        this.online = "设备在线";
                        break;
                    case 3:
                        this.navCtrl.push('zwavegateway', { 'device_id': this.deviceinfo.device_id });
                        break;
                }
                break;
        }
    };
    Object.defineProperty(WifideviceComponent.prototype, "device", {
        //当前开关的所有属性
        set: function (deviceinfo) {
            this.deviceinfo = deviceinfo;
            this.devicetype = this.deviceinfo.product_id;
            this.src = this.extimg.getlist_64(this.deviceinfo.product_id);
            this.isgroup = this.deviceinfo.ingroup === 2;
            this.online = this.deviceinfo.onlinestatus ? "设备在线" : "设备离线";
            this.deviceTypeJudgment(0);
        },
        enumerable: true,
        configurable: true
    });
    /*****************进入详细页面******************* */
    WifideviceComponent.prototype.pushPage = function () {
        this.deviceTypeJudgment(3);
    };
    /***************wifi小圆插开关按钮*************** */
    WifideviceComponent.prototype.clickvalue = function () {
        var _this = this;
        if (this.stattype) {
            this.checked = this.checked ? false : true;
            return;
        }
        ;
        this.stattype = true;
        if (this.deviceinfo.latest_staus != null) {
            var on_off = this.deviceinfo.latest_staus.port_on_off[0] ? 0 : 1;
            this.eq.Send(this.deviceinfo.device_id, on_off).subscribe(function (data) {
                setTimeout(function () {
                    if (_this.stattype) {
                        _this.stattype = false;
                        _this.checked = _this.oldchecked;
                    }
                }, 2000);
            });
            ;
        }
        else {
            this.eq.Send(this.deviceinfo.device_id, 1).subscribe(function (data) {
                setTimeout(function () {
                    if (_this.stattype) {
                        _this.stattype = false;
                        _this.checked = _this.oldchecked;
                    }
                }, 2000);
            });
            ;
        }
    };
    /***************wifi窗帘*************** */
    WifideviceComponent.prototype.click1 = function () {
        if (this.buttonstatus1 === "in-login")
            return;
        this.setTimeOut(3);
        this.eq.Send(this.deviceinfo.device_id, 1).subscribe(function (data) {
        });
    };
    WifideviceComponent.prototype.click2 = function () {
        if (this.buttonstatus1 === "in-login")
            return;
        this.setTimeOut(2);
        this.eq.Send(this.deviceinfo.device_id, 3).subscribe(function (data) {
        });
    };
    WifideviceComponent.prototype.click3 = function () {
        if (this.buttonstatus1 === "in-login")
            return;
        this.setTimeOut(1);
        this.eq.Send(this.deviceinfo.device_id, 2).subscribe(function (data) {
        });
    };
    //wifi超时返回原状态
    WifideviceComponent.prototype.setTimeOut = function (type) {
        var _this = this;
        switch (type) {
            case 1:
                this.buttonstatus1 = "in-login";
                setTimeout(function () {
                    if (_this.buttonstatus1 === "in-login") {
                        _this.buttonstatus1 = "in-open";
                    }
                }, 1000);
                break;
            case 2:
                this.buttonstatus2 = "in-login";
                setTimeout(function () {
                    if (_this.buttonstatus2 === "in-login") {
                        _this.buttonstatus2 = "in-stop";
                    }
                }, 1000);
                break;
            case 3:
                this.buttonstatus3 = "in-login";
                setTimeout(function () {
                    if (_this.buttonstatus3 === "in-login") {
                        _this.buttonstatus3 = "in-close";
                    }
                }, 1000);
                break;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], WifideviceComponent.prototype, "Type", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], WifideviceComponent.prototype, "device", null);
    WifideviceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'wifidevice-device',template:/*ion-inline-start:"C:\projects\zhijiatablet\smart_app_duer\app\src\components\wifidevice\wifidevice.html"*/'<div class="ipad-switch" *ngIf="devicetype===wificurtain">\n\n  <ion-row center>\n\n      <ion-col text-center>\n\n        <button color="bright" ion-button outline icon-only class="ipad-button-curtain active" (click)="click1();"></button>\n\n        <p>关闭</p>\n\n      </ion-col>\n\n      <ion-col text-center>\n\n        <button color="bright" ion-button outline icon-only class="ipad-button-curtain" (click)="click3();"></button>\n\n        <p>开启</p>\n\n      </ion-col>\n\n  </ion-row>\n\n  <ion-row class="ion-row-padding">\n\n    <ion-col col-6 text-left>\n\n      <ion-icon color="default" class="ipad-icon-switch iconfont icon-chuanglian-guan"></ion-icon>\n\n    </ion-col>\n\n    <ion-col col-6 text-right>\n\n      <ion-icon color="default" class="ipad-icon-switch iconfont icon-chuanglian-kai"></ion-icon>\n\n    </ion-col>\n\n    <ion-col col-12 >\n\n      <ion-range min="0" max="100" [(ngModel)]="brightness" (ionChange)="change($event)" pin="true" debounce="1000" class="ipad-range-small">\n\n      </ion-range>\n\n    </ion-col>\n\n    <ion-col col-12 text-center>\n\n      <p>{{deviceinfo.name}}</p>\n\n    </ion-col>\n\n  </ion-row>\n\n</div>\n\n\n\n<div class="ipad-switch" *ngIf="devicetype===wifioutlet">\n\n  <ion-row center class="ion-row-full align-items-center">\n\n    <ion-col text-center>\n\n        <button *ngIf="checked" color="bright" outline ion-button icon-only class="ipad-button-socket" (click)="clickvalue()"></button>\n\n        <button *ngIf="!checked" color="bright" outline ion-button icon-only class="ipad-button-socket active" (click)="clickvalue()"></button>\n\n        <p>{{deviceinfo.name}}</p>\n\n    </ion-col>\n\n  </ion-row>\n\n</div>\n\n\n\n<!-- <div class="ipad-switch">\n\n    <ion-row center>\n\n        <ion-col text-center>\n\n            <button color="bright" ion-button outline icon-only class="ipad-button-curtain"></button>\n\n            <p>开启</p>\n\n        </ion-col>\n\n        <ion-col text-center>\n\n            <button color="bright" ion-button outline icon-only class="ipad-button-curtain active"></button>\n\n            <p>关闭</p>\n\n        </ion-col>\n\n    </ion-row>\n\n    <ion-row class="ion-row-padding">\n\n        <ion-col col-6 text-left>\n\n            <ion-icon color="default" class="ipad-icon-switch iconfont icon-chuanglian-guan"></ion-icon>\n\n        </ion-col>\n\n        <ion-col col-6 text-right>\n\n            <ion-icon color="default" class="ipad-icon-switch iconfont icon-chuanglian-kai"></ion-icon>\n\n        </ion-col>\n\n        <ion-col>\n\n            <ion-range class="ipad-range-small" [(ngModel)]="brightness">\n\n            </ion-range>\n\n        </ion-col>\n\n        <ion-col col-12 text-center>\n\n            <p>客厅窗帘</p>\n\n        </ion-col>\n\n    </ion-row>\n\n</div> -->\n\n\n\n<!-- <ion-item  *ngIf="type===0">\n\n  <ion-avatar item-left (click)="pushPage()">\n\n    <img src="{{src}}" />\n\n    <span *ngIf="isgroup" class="equipment-item-action-groups"><ion-icon class="iconfont icon-fenlei"></ion-icon></span>\n\n  </ion-avatar>\n\n  <ion-label>\n\n    <h2 (click)="pushPage()">{{deviceinfo.name}}</h2>\n\n    <p (click)="pushPage()"> {{online}}</p>\n\n  </ion-label>\n\n  <div item-right *ngIf="devicetype===wifioutlet">\n\n    <ion-toggle [(ngModel)]="checked" [disabled]="stattype" mode="ios" color="secondary" (ngModelChange)="clickvalue()"></ion-toggle>\n\n  </div>\n\n  <div item-right *ngIf="devicetype===wificurtain">\n\n    <button-curtain-template [cmyroundstatus]="buttonstatus3" (click)="click1();"></button-curtain-template>\n\n    <button-curtain-template [cmyroundstatus]="buttonstatus2" (click)="click2();"></button-curtain-template>\n\n    <button-curtain-template [cmyroundstatus]="buttonstatus1" (click)="click3();"></button-curtain-template>\n\n  </div>\n\n</ion-item>\n\n<div *ngIf="type===1" class="equipment-home-item" (click)="pushPage()">\n\n  <div class="equipment-thumbnail">\n\n    <img src="{{src}}" />\n\n    <span *ngIf="isgroup" class="equipment-item-action-groups"><ion-icon class="iconfont icon-fenlei"></ion-icon></span>\n\n  </div>\n\n  <h2>{{deviceinfo.name}}</h2>\n\n  <p>{{online}}</p>\n\n</div> -->'/*ion-inline-end:"C:\projects\zhijiatablet\smart_app_duer\app\src\components\wifidevice\wifidevice.html"*/
        })
        //wifi设备Component
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__extended_extendedurlimg__["a" /* ExtendedUrlImg */],
            __WEBPACK_IMPORTED_MODULE_4__providers_equipment_equipment__["a" /* EquipmentProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_channel_channel__["a" /* ChannelProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]])
    ], WifideviceComponent);
    return WifideviceComponent;
}());

var outlet_status = /** @class */ (function () {
    function outlet_status() {
    }
    return outlet_status;
}());

//# sourceMappingURL=wifidevice.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurtainButtonComponent; });
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

var CurtainButtonComponent = /** @class */ (function () {
    //开关按钮样式状态
    function CurtainButtonComponent() {
    }
    Object.defineProperty(CurtainButtonComponent.prototype, "cmyroundstatus", {
        set: function (roundstatus) {
            this.round_switch_button_status = roundstatus;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], CurtainButtonComponent.prototype, "cmyroundstatus", null);
    CurtainButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "button-curtain-template",template:/*ion-inline-start:"C:\projects\zhijiatablet\smart_app_duer\app\src\components\wifidevice\churtain.template.component.html"*/'<!-- 窗帘 按钮状态-->\n\n<span [ngSwitch]="round_switch_button_status">\n\n  <!--延时-->\n\n  <ng-template [ngSwitchCase]="\'in-login\'">\n\n    <button color="default" ion-button outline icon-only clear class="button-power">\n\n     <div class="progress-round">\n\n                        <svg xmlns="http://www.w3.org/2000/svg" class="progress-round-svg">\n\n                            <circle  class="progress-round-svg-circle-one" cx="50%" cy="50%" r="44%"/>\n\n                            <circle  class="progress-round-svg-circle-two" cx="50%" cy="50%" r="44%"/>\n\n                        </svg>\n\n                    </div>\n\n                    <ion-icon name="ios-power"></ion-icon>\n\n                </button>\n\n  </ng-template>\n\n  <!--打开-->\n\n  <ng-template [ngSwitchCase]="\'in-open\'">\n\n      <button ion-button color="default" outline icon-only class="button-power">\n\n                    <ion-icon class="iconfont icon-chuanglian-kai"></ion-icon>\n\n                </button>\n\n  </ng-template>\n\n  <!--关闭-->\n\n  <ng-template [ngSwitchCase]="\'in-close\'">\n\n                <button ion-button color="default" outline icon-only class="button-power">\n\n                    <ion-icon class="iconfont icon-chuanglian-guan"></ion-icon>\n\n                </button>\n\n  </ng-template>\n\n\n\n    <!--暂停-->\n\n  <ng-template [ngSwitchCase]="\'in-stop\'">\n\n                <button ion-button color="default" outline icon-only class="button-power">\n\n                    <ion-icon class="iconfont icon-zanting"></ion-icon>\n\n                </button>\n\n  </ng-template>\n\n  <!--未联机-->\n\n  <ng-template [ngSwitchCase]="\'in-disconnect\'">\n\n    <button color="default" ion-button outline icon-only disabled class="button-power">\n\n                    <ion-icon name="iconfont icon-chuanglian-kai"></ion-icon>\n\n                </button>\n\n  </ng-template>\n\n</span>'/*ion-inline-end:"C:\projects\zhijiatablet\smart_app_duer\app\src\components\wifidevice\churtain.template.component.html"*/,
        })
        //开关按钮样式状态
    ], CurtainButtonComponent);
    return CurtainButtonComponent;
}());

//# sourceMappingURL=churtain.template.component.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwitchComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__switch__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__extendedoutlet__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__switchrounddelay__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__switch_detailed_component__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__switchdetaileda__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__gradient_component__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__colorpicker_lib_color_picker_module__ = __webpack_require__(314);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var SwitchComponentModule = /** @class */ (function () {
    function SwitchComponentModule() {
    }
    SwitchComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__switch__["b" /* SwitchComponent */],
                __WEBPACK_IMPORTED_MODULE_4__switchrounddelay__["a" /* SwitchrounddelayComponent */],
                __WEBPACK_IMPORTED_MODULE_5__switch_detailed_component__["a" /* SwitchButtonDetailed */],
                __WEBPACK_IMPORTED_MODULE_6__switchdetaileda__["a" /* SwitchdetailedaComponent */],
                __WEBPACK_IMPORTED_MODULE_7__gradient_component__["a" /* GradientComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicModule */],
                __WEBPACK_IMPORTED_MODULE_8__colorpicker_lib_color_picker_module__["a" /* ColorPickerComponentModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__switch__["b" /* SwitchComponent */],
                __WEBPACK_IMPORTED_MODULE_4__switchrounddelay__["a" /* SwitchrounddelayComponent */],
                __WEBPACK_IMPORTED_MODULE_5__switch_detailed_component__["a" /* SwitchButtonDetailed */],
                __WEBPACK_IMPORTED_MODULE_6__switchdetaileda__["a" /* SwitchdetailedaComponent */],
                __WEBPACK_IMPORTED_MODULE_7__gradient_component__["a" /* GradientComponent */]
            ], providers: [__WEBPACK_IMPORTED_MODULE_3__extendedoutlet__["a" /* ExtendedOutlet */]]
        })
    ], SwitchComponentModule);
    return SwitchComponentModule;
}());

//# sourceMappingURL=switch.module.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwitchrounddelayComponent; });
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

/**
 * Generated class for the SwitchrounddelayComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var SwitchrounddelayComponent = /** @class */ (function () {
    function SwitchrounddelayComponent() {
    }
    Object.defineProperty(SwitchrounddelayComponent.prototype, "myroundstatus", {
        set: function (roundstatus) {
            this.round_switch_button_status = roundstatus;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], SwitchrounddelayComponent.prototype, "myroundstatus", null);
    SwitchrounddelayComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'button-round-delay',template:/*ion-inline-start:"C:\projects\zhijiatablet\smart_app_duer\app\src\components\switch\switchrounddelay.html"*/'<!-- 开关 按钮状态-->\n\n<span [ngSwitch]="round_switch_button_status">\n\n  <!--延时-->\n\n  <ng-template [ngSwitchCase]="\'in-login\'">\n\n    <button color="bright" ion-button outline icon-only class="ipad-button-switch  button-power-loading">\n\n\n\n    </button>\n\n  </ng-template>\n\n  <!--打开-->\n\n  <ng-template [ngSwitchCase]="\'in-open\'">\n\n    <button color="bright" ion-button outline activated class="ipad-button-switch active"></button>\n\n  </ng-template>\n\n  <!--关闭-->\n\n  <ng-template [ngSwitchCase]="\'in-close\'">\n\n    <button color="bright" ion-button outline icon-only class="ipad-button-switch"></button>\n\n  </ng-template>\n\n  <!--未联机-->\n\n  <ng-template [ngSwitchCase]="\'in-disconnect\'">\n\n    <button color="bright" ion-button outline icon-only class="ipad-button-switch"></button>\n\n  </ng-template>\n\n</span>\n\n\n\n<!-- 开关 按钮状态-->\n\n<!-- <span [ngSwitch]="round_switch_button_status">\n\n  <ng-template [ngSwitchCase]="\'in-login\'">\n\n    <button color="default" ion-button outline icon-only clear class="button-power  button-power-loading">\n\n                    <ion-icon name="ios-power"></ion-icon>\n\n                </button>\n\n  </ng-template>\n\n  <ng-template [ngSwitchCase]="\'in-open\'">\n\n    <button color="bright" ion-button outline activated class="ipad-button-switch active">\n\n                </button>\n\n  </ng-template>\n\n  <ng-template [ngSwitchCase]="\'in-close\'">\n\n    <button color="bright" outline ion-button icon-only class="ipad-button-switch">\n\n                </button>\n\n  </ng-template>\n\n  <ng-template [ngSwitchCase]="\'in-disconnect\'">\n\n    <button color="default" ion-button outline icon-only disabled class="button-power">\n\n                    <ion-icon name="ios-power"></ion-icon>\n\n                </button>\n\n  </ng-template>\n\n</span> -->'/*ion-inline-end:"C:\projects\zhijiatablet\smart_app_duer\app\src\components\switch\switchrounddelay.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], SwitchrounddelayComponent);
    return SwitchrounddelayComponent;
}());

//# sourceMappingURL=switchrounddelay.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwitchButtonDetailed; });
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

var SwitchButtonDetailed = /** @class */ (function () {
    //开关按钮样式状态
    function SwitchButtonDetailed() {
    }
    Object.defineProperty(SwitchButtonDetailed.prototype, "myroundstatus", {
        //type: number; 1//一开 2二开 3三开
        set: function (roundstatus) {
            this.round_switch_button_status = roundstatus;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SwitchButtonDetailed.prototype, "myname", {
        set: function (name) {
            this.name = name;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], SwitchButtonDetailed.prototype, "myroundstatus", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], SwitchButtonDetailed.prototype, "myname", null);
    SwitchButtonDetailed = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "switch-button-detailed",template:/*ion-inline-start:"C:\projects\zhijiatablet\smart_app_duer\app\src\components\switch\switch.detailed.component.html"*/'<!-- 开关 按钮状态-->\n\n\n\n<span [ngSwitch]="round_switch_button_status">\n\n  <!--延时-->\n\n  <ng-template [ngSwitchCase]="\'in-login\'">\n\n   <ion-col>\n\n                    <button color="bright" outline clear ion-button icon-only class="button-switch  button-switch-loading button-switch-lg">\n\n                        <ion-icon name="ios-power"></ion-icon>\n\n                    </button>\n\n                    <p>{{name}}</p>\n\n                </ion-col>\n\n  </ng-template>\n\n  <!--打开-->\n\n  <ng-template [ngSwitchCase]="\'in-open\'">\n\n     <ion-col>\n\n                    <button color="bright" ion-button outline activated class="button-switch button-switch-lg">\n\n                        <ion-icon name="ios-power"></ion-icon>\n\n                    </button>\n\n                    <p>{{name}}</p>\n\n                     <h3>状态:开启</h3>\n\n                </ion-col>\n\n  </ng-template>\n\n  <!--关闭-->\n\n  <ng-template [ngSwitchCase]="\'in-close\'">\n\n     <ion-col>\n\n                    <button color="bright" ion-button outline class="button-switch button-switch-lg">\n\n                        <ion-icon name="ios-power"></ion-icon>\n\n                    </button>\n\n                    <p>{{name}}</p>\n\n                     <h3>状态:关闭</h3>\n\n                </ion-col>\n\n  </ng-template>\n\n  <!--未联机-->\n\n  <ng-template [ngSwitchCase]="\'in-disconnect\'">\n\n     <ion-col>\n\n                    <button color="bright" ion-button outline disabled class="button-switch button-switch-lg">\n\n                        <ion-icon name="ios-power"></ion-icon>\n\n                    </button>\n\n                    <p>{{name}}</p>\n\n                  <h3>状态:离线</h3>\n\n                </ion-col>\n\n  </ng-template>\n\n</span>'/*ion-inline-end:"C:\projects\zhijiatablet\smart_app_duer\app\src\components\switch\switch.detailed.component.html"*/,
        })
        //开关按钮样式状态
    ], SwitchButtonDetailed);
    return SwitchButtonDetailed;
}());

//# sourceMappingURL=switch.detailed.component.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwitchdetailedaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__switch__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_channel_channel__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__extendedoutlet__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__interfaces_deviceconst__ = __webpack_require__(313);
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
 * Generated class for the SwitchdetailedaComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var SwitchdetailedaComponent = /** @class */ (function () {
    function SwitchdetailedaComponent(ch, extended, ref) {
        this.ch = ch;
        this.extended = extended;
        this.ref = ref;
        this.devname = "";
        this.model = new __WEBPACK_IMPORTED_MODULE_1__switch__["a" /* OutletModel */]();
        this.deviceState = null;
        this.updateDeviceGroup = null;
        this.subonline = null;
        this.swittypea = "powerswitch1";
        this.swittypeb = "powerswitch2";
        this.swittypec = "powerswitch3";
        this.index = 0;
        this.counterChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    Object.defineProperty(SwitchdetailedaComponent.prototype, "device", {
        //当前开关的所有属性
        set: function (deviceinfo) {
            this.deviceinfo = deviceinfo;
            if (this.deviceinfo === null)
                return;
            switch (this.deviceinfo.component) {
                case __WEBPACK_IMPORTED_MODULE_4__interfaces_deviceconst__["a" /* DeviceConst */].componentrf_powerswitch1:
                    this.swittype = "powerswitch1";
                    break;
                case __WEBPACK_IMPORTED_MODULE_4__interfaces_deviceconst__["a" /* DeviceConst */].componentrf_powerswitch2:
                    this.swittype = "powerswitch2";
                    break;
                case __WEBPACK_IMPORTED_MODULE_4__interfaces_deviceconst__["a" /* DeviceConst */].componentrf_powerswitch3:
                    this.swittype = "powerswitch3";
                    break;
            }
            this.extended.refresh(this.deviceinfo, this.model);
        },
        enumerable: true,
        configurable: true
    });
    SwitchdetailedaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ref.markForCheck();
        if (this.subonline === null)
            this.subonline = this.ch.sub("offline").subscribe(function (data) {
                if (data.data.device_id === _this.deviceinfo.device_id) {
                    console.log('设备离线offline');
                    _this.counterChange.emit({
                        title: "设备离线",
                        type: true
                    });
                    _this.ref.detectChanges();
                }
            });
        if (this.deviceState === null) {
            this.deviceState = this.ch.sub("deviceState").subscribe(function (data) {
                if (data.data.device_id === _this.deviceinfo.device_id) {
                    if (_this.deviceinfo.latest_staus === null)
                        _this.deviceinfo.latest_staus = __WEBPACK_IMPORTED_MODULE_1__switch__["c" /* outlet_status */];
                    _this.deviceinfo.latest_staus.port_on_off = data.data.services.port_on_off;
                    _this.deviceinfo.latest_staus.port_in_use = data.data.services.port_in_use;
                    _this.extended.refresh(_this.deviceinfo, _this.model);
                    var returnDevname = _this.extended.getOutletName(_this.deviceinfo, _this.index, true);
                    _this.counterChange.emit({
                        title: returnDevname,
                        type: true
                    });
                    _this.ref.detectChanges();
                }
            });
        }
        if (this.updateDeviceGroup === null) {
            this.updateDeviceGroup = this.ch.sub("updateDeviceGroup").subscribe(function (data) {
                if (data.data.device_id === _this.deviceinfo.device_id) {
                    _this.deviceinfo.group_devices = data.data.group_devices;
                    _this.deviceinfo.device_subinfo = data.data.device_subinfo;
                    _this.extended.refresh(_this.deviceinfo, _this.model);
                }
                _this.ref.detectChanges();
            });
        }
    };
    SwitchdetailedaComponent.prototype.ngOnDestroy = function () {
        this.ref.detach();
        this.subonline.unsubscribe();
        this.deviceState.unsubscribe();
        this.updateDeviceGroup.unsubscribe();
    };
    SwitchdetailedaComponent.prototype.click1 = function () {
        this.index = 0;
        this.extended.switchClick(this.deviceinfo, this.model, this.counterChange, this.index);
    };
    SwitchdetailedaComponent.prototype.click2 = function () {
        this.index = 1;
        this.extended.switchClick(this.deviceinfo, this.model, this.counterChange, this.index);
    };
    SwitchdetailedaComponent.prototype.click3 = function () {
        this.index = 2;
        this.extended.switchClick(this.deviceinfo, this.model, this.counterChange, this.index);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], SwitchdetailedaComponent.prototype, "device", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])('change'),
        __metadata("design:type", Object)
    ], SwitchdetailedaComponent.prototype, "counterChange", void 0);
    SwitchdetailedaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'switchdetailed',template:/*ion-inline-start:"C:\projects\zhijiatablet\smart_app_duer\app\src\components\switch\switchdetaileda.html"*/'<div *ngIf="swittype === swittypea" class="equipment-switch">\n\n  <ion-row center>\n\n    <ion-col>\n\n      <switch-button-detailed [myroundstatus]="model.buttonstatus1" [myname]="model.name1" (click)="click1();"></switch-button-detailed>\n\n    </ion-col>\n\n  </ion-row>\n\n</div>\n\n<div *ngIf="swittype === swittypeb"  class="equipment-switch">\n\n  <ion-row center>\n\n    <ion-col>\n\n      <switch-button-detailed [myroundstatus]="model.buttonstatus1" [myname]="model.name1" (click)="click1();"></switch-button-detailed>\n\n    </ion-col>\n\n    <ion-col>\n\n      <switch-button-detailed [myroundstatus]="model.buttonstatus2" [myname]="model.name2" (click)="click2();"></switch-button-detailed>\n\n    </ion-col>\n\n  </ion-row>\n\n</div>\n\n<div *ngIf="swittype === swittypec"  class="equipment-switch">\n\n  <ion-row center>\n\n    <ion-col>\n\n      <switch-button-detailed [myroundstatus]="model.buttonstatus1" [myname]="model.name1" (click)="click1();"></switch-button-detailed>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row center>\n\n    <ion-col>\n\n      <switch-button-detailed [myroundstatus]="model.buttonstatus2" [myname]="model.name2" (click)="click2();"></switch-button-detailed>\n\n    </ion-col>\n\n    <ion-col>\n\n      <switch-button-detailed [myroundstatus]="model.buttonstatus3" [myname]="model.name3" (click)="click3();"></switch-button-detailed>\n\n    </ion-col>\n\n  </ion-row>\n\n</div>'/*ion-inline-end:"C:\projects\zhijiatablet\smart_app_duer\app\src\components\switch\switchdetaileda.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_channel_channel__["a" /* ChannelProvider */],
            __WEBPACK_IMPORTED_MODULE_3__extendedoutlet__["a" /* ExtendedOutlet */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]])
    ], SwitchdetailedaComponent);
    return SwitchdetailedaComponent;
}());

//# sourceMappingURL=switchdetaileda.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GradientComponent; });
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

var GradientComponent = /** @class */ (function () {
    //开关按钮样式状态
    function GradientComponent() {
    }
    Object.defineProperty(GradientComponent.prototype, "mytype", {
        set: function (mytype) {
            this.type = mytype;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GradientComponent.prototype, "myvalue", {
        set: function (myvalue) {
            this.value = myvalue;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], GradientComponent.prototype, "mytype", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], GradientComponent.prototype, "myvalue", null);
    GradientComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "gradient-component",template:/*ion-inline-start:"C:\projects\zhijiatablet\smart_app_duer\app\src\components\switch\gradient.component.html"*/'<!-- 渐变隐藏-->\n\n<span [ngSwitch]="type">\n\n  <!--显示-->\n\n  <ng-template [ngSwitchCase]="\'show\'">\n\n   <div class="equipment-status-tips"><h3>{{value}}</h3></div>\n\n  </ng-template>\n\n  <!--渐变隐藏-->\n\n  <ng-template [ngSwitchCase]="\'hide\'">\n\n     <div class="equipment-status-tips equipment-status-tips-animate"><h3>{{value}}</h3></div>\n\n  </ng-template>\n\n  <!--关闭-->\n\n  <ng-template [ngSwitchCase]="\'null\'">\n\n    <div ><h3></h3></div>\n\n  </ng-template>\n\n</span>'/*ion-inline-end:"C:\projects\zhijiatablet\smart_app_duer\app\src\components\switch\gradient.component.html"*/,
        })
        //开关按钮样式状态
    ], GradientComponent);
    return GradientComponent;
}());

//# sourceMappingURL=gradient.component.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoorlockComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__doorlock__ = __webpack_require__(331);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DoorlockComponentModule = /** @class */ (function () {
    function DoorlockComponentModule() {
    }
    DoorlockComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__doorlock__["a" /* DoorlockComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__doorlock__["a" /* DoorlockComponent */]
            ]
        })
    ], DoorlockComponentModule);
    return DoorlockComponentModule;
}());

//# sourceMappingURL=doorlock.module.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoorlockComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_channel_channel__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__extended_extendedurlimg__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interfaces_deviceconst__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(44);
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
 * Generated class for the DoorlockComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var DoorlockComponent = /** @class */ (function () {
    function DoorlockComponent(navCtrl, ref, ch, extimg) {
        this.navCtrl = navCtrl;
        this.ref = ref;
        this.ch = ch;
        this.extimg = extimg;
        this.src = "";
        this.type = "";
        this.isgroup = false; //是否是组设备
        this.locklowpower = false; //锁是否低电量
    }
    DoorlockComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ref.markForCheck();
        this.lockLowPower = this.ch.sub("lockLowPower").subscribe(function (data) {
            if (data.data.device_id === _this.deviceinfo.device_id) {
                _this.locklowpower = data.data.services;
                _this.ref.detectChanges();
            }
        });
    };
    DoorlockComponent.prototype.ngOnDestroy = function () {
        this.ref.detach();
        this.lockLowPower.unsubscribe();
    };
    Object.defineProperty(DoorlockComponent.prototype, "device", {
        set: function (deviceinfo) {
            this.deviceinfo = deviceinfo;
            this.isgroup = this.deviceinfo.ingroup === 2;
            this.src = this.extimg.getlist_64(this.deviceinfo.product_id);
            this.deviceTypeJudgment(0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DoorlockComponent.prototype, "Type", {
        set: function (type) {
            this.type = type;
        },
        enumerable: true,
        configurable: true
    });
    DoorlockComponent.prototype.deviceTypeJudgment = function (operation) {
        switch (this.deviceinfo.product_id) {
            case __WEBPACK_IMPORTED_MODULE_3__interfaces_deviceconst__["a" /* DeviceConst */].DOOR:
                if (operation == 0)
                    this.onlinestatus = (this.deviceinfo.device_door_rf.magnet_device_id == null || this.deviceinfo.device_door_rf.magnet_device_id == "") ? "未绑定门磁" : "已绑定门磁";
                else if (operation == 1)
                    this.navCtrl.push('doorlock', { 'device_id': this.deviceinfo.device_id });
                break;
            case __WEBPACK_IMPORTED_MODULE_3__interfaces_deviceconst__["a" /* DeviceConst */].DOOR_MAGNET:
                if (operation == 0)
                    this.onlinestatus = "";
                else if (operation == 1)
                    this.navCtrl.push('doormagnet', { 'device_id': this.deviceinfo.device_id });
                break;
        }
    };
    DoorlockComponent.prototype.pushPage = function () {
        this.deviceTypeJudgment(1);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], DoorlockComponent.prototype, "device", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], DoorlockComponent.prototype, "Type", null);
    DoorlockComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'doorlock-device',template:/*ion-inline-start:"C:\projects\zhijiatablet\smart_app_duer\app\src\components\doorlock\doorlock.html"*/'<ion-item *ngIf="type===0">\n\n  <ion-avatar item-left (click)="pushPage()">\n\n    <img src="{{src}}" />\n\n    <span *ngIf="isgroup" class="equipment-item-action-groups"><ion-icon class="iconfont icon-fenlei"></ion-icon></span>\n\n  </ion-avatar>\n\n  <h2 (click)="pushPage()">{{deviceinfo.name}}</h2>\n\n  <p (click)="pushPage()">{{onlinestatus}}</p>\n\n  <div item-right *ngIf="locklowpower">\n\n    <span class="equipment-item-type">\n\n        <ion-icon name="ios-battery-dead"></ion-icon>\n\n        <p>锁低电量提示</p>\n\n    </span>\n\n  </div>\n\n</ion-item>\n\n<div *ngIf="type===1" class="equipment-home-item" (click)="pushPage()">\n\n  <div class="equipment-thumbnail">\n\n    <img src="{{src}}" />\n\n    <span *ngIf="isgroup" class="equipment-item-action-groups"><ion-icon class="iconfont icon-fenlei"></ion-icon></span>\n\n  </div>\n\n  <h2>{{deviceinfo.name}}</h2>\n\n  <p>{{onlinestatus}}</p>\n\n</div>'/*ion-inline-end:"C:\projects\zhijiatablet\smart_app_duer\app\src\components\doorlock\doorlock.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_1__providers_channel_channel__["a" /* ChannelProvider */],
            __WEBPACK_IMPORTED_MODULE_2__extended_extendedurlimg__["a" /* ExtendedUrlImg */]])
    ], DoorlockComponent);
    return DoorlockComponent;
}());

//# sourceMappingURL=doorlock.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemonstrationComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__demonstration__ = __webpack_require__(333);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DemonstrationComponentModule = /** @class */ (function () {
    function DemonstrationComponentModule() {
    }
    DemonstrationComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__demonstration__["a" /* DemonstrationComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__demonstration__["a" /* DemonstrationComponent */]
            ]
        })
    ], DemonstrationComponentModule);
    return DemonstrationComponentModule;
}());

//# sourceMappingURL=demonstration.module.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemonstrationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__extended_extendedurlimg__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interfaces_deviceconst__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_demoprovider_demoprovider__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_channel_channel__ = __webpack_require__(106);
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
 * Generated class for the DemonstrationComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var DemonstrationComponent = /** @class */ (function () {
    function DemonstrationComponent(navCtrl, extimg, demopr, ch, ref) {
        this.navCtrl = navCtrl;
        this.extimg = extimg;
        this.demopr = demopr;
        this.ch = ch;
        this.ref = ref;
        this.isgroup = false; //是否是组设备
        this.subonline = null;
        this.subdeviceState = null;
        this.updateDeviceName = null;
        this.demo_doorbell = __WEBPACK_IMPORTED_MODULE_2__interfaces_deviceconst__["a" /* DeviceConst */].DEMO_DOORBELL;
        this.isatus = false;
    }
    Object.defineProperty(DemonstrationComponent.prototype, "Type", {
        set: function (type) {
            this.type = type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DemonstrationComponent.prototype, "device", {
        //当前开关的所有属性
        set: function (deviceinfo) {
            this.deviceinfo = deviceinfo;
            this.deviceproduct = this.deviceinfo.product_id;
            this.isgroup = this.deviceinfo.ingroup === 2;
            this.switchDeviceTypeJudgment(0);
        },
        enumerable: true,
        configurable: true
    });
    DemonstrationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ref.markForCheck();
        if (this.subonline === null)
            this.subonline = this.ch.sub("online").subscribe(function (data) {
                if (data.data.device_id === _this.deviceinfo.device_id) {
                    _this.switchDeviceTypeJudgment(1, data.data.online);
                    _this.ref.detectChanges();
                }
            });
    };
    DemonstrationComponent.prototype.ngOnDestroy = function () {
        this.ref.detach();
        this.subonline.unsubscribe();
    };
    DemonstrationComponent.prototype.switchDeviceTypeJudgment = function (operation, data) {
        if (data === void 0) { data = null; }
        switch (this.deviceproduct) {
            case __WEBPACK_IMPORTED_MODULE_2__interfaces_deviceconst__["a" /* DeviceConst */].RF_GATEWAY_DEMO://网关
                switch (operation) {
                    case 0:
                        if (!this.deviceinfo.onlinestatus)
                            this.online = "设备离线";
                        else
                            this.online = "设备在线";
                        this.setImg(__WEBPACK_IMPORTED_MODULE_2__interfaces_deviceconst__["a" /* DeviceConst */].RF_GATEWAY);
                        break;
                    case 1:
                        if (data)
                            this.online = "设备在线";
                        else
                            this.online = "设备离线";
                        break;
                    case 2:
                        break;
                    case 3:
                        this.pushPage('demogateway');
                        break;
                }
                break;
            case __WEBPACK_IMPORTED_MODULE_2__interfaces_deviceconst__["a" /* DeviceConst */].DEMO_DOORBELL://门铃
                switch (operation) {
                    case 0:
                        this.setImg(__WEBPACK_IMPORTED_MODULE_2__interfaces_deviceconst__["a" /* DeviceConst */].DOORBELL);
                        break;
                    case 2:
                        break;
                    case 3:
                        this.pushPage('demodoorbell');
                        break;
                }
                break;
            case __WEBPACK_IMPORTED_MODULE_2__interfaces_deviceconst__["a" /* DeviceConst */].DEMO_MENCI://门磁
                switch (operation) {
                    case 0:
                        this.setImg(__WEBPACK_IMPORTED_MODULE_2__interfaces_deviceconst__["a" /* DeviceConst */].DOOR_MAGNET);
                        break;
                    case 2:
                        break;
                    case 3:
                        this.pushPage('demomenci');
                        break;
                }
                break;
            case __WEBPACK_IMPORTED_MODULE_2__interfaces_deviceconst__["a" /* DeviceConst */].DEMO_SENSOR://红外感应
                switch (operation) {
                    case 0:
                        this.setImg(__WEBPACK_IMPORTED_MODULE_2__interfaces_deviceconst__["a" /* DeviceConst */].IRSENSOR);
                        break;
                    case 2:
                        break;
                    case 3:
                        this.pushPage('demosensor');
                        break;
                }
                break;
            case __WEBPACK_IMPORTED_MODULE_2__interfaces_deviceconst__["a" /* DeviceConst */].DEMO_GAS://可燃气体
                switch (operation) {
                    case 0:
                        this.setImg(__WEBPACK_IMPORTED_MODULE_2__interfaces_deviceconst__["a" /* DeviceConst */].GAS_ALARM);
                        break;
                    case 2:
                        break;
                    case 3:
                        this.pushPage('demogas');
                        break;
                }
                break;
            case __WEBPACK_IMPORTED_MODULE_2__interfaces_deviceconst__["a" /* DeviceConst */].DEMO_LIGHTS://七彩灯
                switch (operation) {
                    case 0:
                        this.setImg(__WEBPACK_IMPORTED_MODULE_2__interfaces_deviceconst__["a" /* DeviceConst */].DEMO_LIGHTS);
                        break;
                    case 2:
                        break;
                    case 3:
                        this.pushPage('demolights');
                        break;
                }
                break;
            case __WEBPACK_IMPORTED_MODULE_2__interfaces_deviceconst__["a" /* DeviceConst */].DEMO_RELAY://模型继电器 开关
                switch (operation) {
                    case 0:
                        this.setImg(__WEBPACK_IMPORTED_MODULE_2__interfaces_deviceconst__["a" /* DeviceConst */].RF_POWERSWITCH_S13);
                        break;
                    case 2:
                        break;
                    case 3:
                        this.pushPage('rgbdemolight');
                        break;
                }
                break;
            case __WEBPACK_IMPORTED_MODULE_2__interfaces_deviceconst__["a" /* DeviceConst */].DEMO_RGB://DEMO_RGB
                switch (operation) {
                    case 0:
                        this.setImg(__WEBPACK_IMPORTED_MODULE_2__interfaces_deviceconst__["a" /* DeviceConst */].RF_RGB_01);
                        break;
                    case 2:
                        break;
                    case 3:
                        switch (this.deviceinfo.device_rgb.type) {
                            case 0://GRBW控制器
                                this.pushPage('demorgbw');
                                break;
                            case 3://双色RBG控制器
                                this.pushPage('demodoublewy');
                                break;
                            case 4://单色RBG控制器
                                this.pushPage('demosinglew');
                                break;
                        }
                        break;
                }
                break;
            case __WEBPACK_IMPORTED_MODULE_2__interfaces_deviceconst__["a" /* DeviceConst */].DEMO_MANIPULATOR://机械手
                switch (operation) {
                    case 0:
                        this.setImg(__WEBPACK_IMPORTED_MODULE_2__interfaces_deviceconst__["a" /* DeviceConst */].RF_VALVE);
                        break;
                    case 2:
                        break;
                    case 3:
                        this.pushPage('demomanipulator');
                        break;
                }
                break;
            case __WEBPACK_IMPORTED_MODULE_2__interfaces_deviceconst__["a" /* DeviceConst */].DEMO_CURTAIN://电动窗帘
                switch (operation) {
                    case 0:
                        this.setImg(__WEBPACK_IMPORTED_MODULE_2__interfaces_deviceconst__["a" /* DeviceConst */].CURTAIN);
                        break;
                    case 2:
                        break;
                    case 3:
                        this.pushPage('democurtain');
                        break;
                }
                break;
            case __WEBPACK_IMPORTED_MODULE_2__interfaces_deviceconst__["a" /* DeviceConst */].DEMO_LIGHT://双色灯
                switch (operation) {
                    case 0:
                        this.setImg(__WEBPACK_IMPORTED_MODULE_2__interfaces_deviceconst__["a" /* DeviceConst */].RF_POWERSWITCH_S13);
                        break;
                    case 2:
                        break;
                    case 3:
                        this.pushPage('demolight');
                        break;
                }
                break;
            case __WEBPACK_IMPORTED_MODULE_2__interfaces_deviceconst__["a" /* DeviceConst */].DEMO_LIGHTSDENG://双色灯饮水机
                switch (operation) {
                    case 0:
                        this.setImg(__WEBPACK_IMPORTED_MODULE_2__interfaces_deviceconst__["a" /* DeviceConst */].CIRCLE_OUTLET);
                        break;
                    case 2:
                        break;
                    case 3:
                        this.pushPage('demodrinking');
                        break;
                }
                break;
            case __WEBPACK_IMPORTED_MODULE_2__interfaces_deviceconst__["a" /* DeviceConst */].DEMO_SCREENMP3://串口MP3
                switch (operation) {
                    case 0:
                        this.setImg(__WEBPACK_IMPORTED_MODULE_2__interfaces_deviceconst__["a" /* DeviceConst */].DEMO_SCREENMP3);
                        break;
                    case 2:
                        break;
                    case 3:
                        this.pushPage('demoscreenmp3');
                        break;
                }
                break;
            case __WEBPACK_IMPORTED_MODULE_2__interfaces_deviceconst__["a" /* DeviceConst */].DEMO_NEWWIND://新风
                switch (operation) {
                    case 0:
                        this.setImg(__WEBPACK_IMPORTED_MODULE_2__interfaces_deviceconst__["a" /* DeviceConst */].DEMO_NEWWIND);
                        break;
                    case 2:
                        break;
                    case 3:
                        this.pushPage('demonewwind');
                        break;
                }
                break;
            case __WEBPACK_IMPORTED_MODULE_2__interfaces_deviceconst__["a" /* DeviceConst */].DEMO_AIR://空调
                switch (operation) {
                    case 0:
                        this.setImg(__WEBPACK_IMPORTED_MODULE_2__interfaces_deviceconst__["a" /* DeviceConst */].DEMO_AIR);
                        break;
                    case 2:
                        break;
                    case 3:
                        this.pushPage('demoair');
                        break;
                }
                break;
        }
    };
    DemonstrationComponent.prototype.setImg = function (name) {
        this.src = this.extimg.getlist_64(name);
    };
    DemonstrationComponent.prototype.pushPage = function (pageName) {
        this.navCtrl.push(pageName, { device_id: this.deviceinfo.device_id });
    };
    //转到详细页面
    DemonstrationComponent.prototype.pushDPage = function () {
        this.switchDeviceTypeJudgment(3);
    };
    //安门铃事件
    DemonstrationComponent.prototype.doorbellclick = function () {
        var _this = this;
        this.isatus = true;
        this.demopr.Send(this.deviceinfo.device_id, 0x21, "1").subscribe(function (data) {
        });
        setTimeout(function () {
            _this.isatus = false;
        }, 2500);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], DemonstrationComponent.prototype, "Type", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], DemonstrationComponent.prototype, "device", null);
    DemonstrationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'demonstration',template:/*ion-inline-start:"C:\projects\zhijiatablet\smart_app_duer\app\src\components\demonstration\demonstration.html"*/'<div *ngIf="type===0">\n\n  <ion-item>\n\n    <ion-avatar item-left (click)="pushDPage()">\n\n      <img src="{{src}}" />\n\n      <span *ngIf="isgroup" class="equipment-item-action-groups"><ion-icon class="iconfont icon-fenlei"></ion-icon></span>\n\n    </ion-avatar>\n\n    <ion-label>\n\n      <h2 (click)="pushDPage()">{{deviceinfo.name}}</h2>\n\n      <p (click)="pushDPage()">{{online}}</p>\n\n    </ion-label>\n\n    <div item-right *ngIf="deviceproduct===demo_doorbell">\n\n      <button ion-button outline icon-only [disabled]="isatus" class="button-power" (click)="doorbellclick()">\n\n                        <ion-icon class="iconfont icon-zhenling"></ion-icon>\n\n                    </button>\n\n    </div>\n\n  </ion-item>\n\n</div>\n\n<div *ngIf="type===1" class="equipment-home-item" (click)="pushDPage()">\n\n  <div class="equipment-thumbnail">\n\n    <img src="{{src}}" />\n\n    <span *ngIf="isgroup" class="equipment-item-action-groups"><ion-icon class="iconfont icon-fenlei"></ion-icon></span>\n\n  </div>\n\n  <h2>{{deviceinfo.name}}</h2>\n\n</div>'/*ion-inline-end:"C:\projects\zhijiatablet\smart_app_duer\app\src\components\demonstration\demonstration.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1__extended_extendedurlimg__["a" /* ExtendedUrlImg */],
            __WEBPACK_IMPORTED_MODULE_4__providers_demoprovider_demoprovider__["a" /* DemoproviderProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_channel_channel__["a" /* ChannelProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]])
    ], DemonstrationComponent);
    return DemonstrationComponent;
}());

//# sourceMappingURL=demonstration.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AirdetectorComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__airdetector__ = __webpack_require__(335);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AirdetectorComponentModule = /** @class */ (function () {
    function AirdetectorComponentModule() {
    }
    AirdetectorComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__airdetector__["a" /* AirdetectorComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__airdetector__["a" /* AirdetectorComponent */]
            ]
        })
    ], AirdetectorComponentModule);
    return AirdetectorComponentModule;
}());

//# sourceMappingURL=airdetector.module.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AirdetectorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__extended_extendedurlimg__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_channel_channel__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AirdetectorComponent = /** @class */ (function () {
    function AirdetectorComponent(navCtrl, extimg, ch, ref) {
        this.navCtrl = navCtrl;
        this.extimg = extimg;
        this.ch = ch;
        this.ref = ref;
        this.src = "";
        this.pm25 = "";
        this.type = "";
        this.subonline = null;
        this.airValueChange = null;
    }
    Object.defineProperty(AirdetectorComponent.prototype, "device", {
        //当前开关的所有属性
        set: function (deviceinfo) {
            this.deviceinfo = deviceinfo;
            if (!this.deviceinfo.onlinestatus) {
                this.pm25 = "设备离线";
            }
            else {
                if (this.deviceinfo.latest_staus != null) {
                    if (this.deviceinfo.latest_staus.param.pM25 != null)
                        this.pm25 = "PM2.5  " + this.deviceinfo.latest_staus.param.pM25 + "μg/m³";
                    else
                        this.pm25 = "设备在线";
                }
                else
                    this.pm25 = "设备在线";
            }
            this.src = this.extimg.getlist_64(this.deviceinfo.product_id);
        },
        enumerable: true,
        configurable: true
    });
    AirdetectorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ref.markForCheck();
        if (this.subonline === null)
            this.subonline = this.ch.sub("online").subscribe(function (data) {
                if (data.data.device_id === _this.deviceinfo.device_id) {
                    if (data.data.online) {
                        if (_this.deviceinfo.latest_staus.param.pM25 != null)
                            _this.pm25 = "PM2.5  " + _this.deviceinfo.latest_staus.param.pM25 + "μg/m³";
                        else
                            _this.pm25 = "设备在线";
                    }
                    else
                        _this.pm25 = "设备离线";
                    _this.ref.detectChanges();
                }
            });
        if (this.airValueChange === null)
            this.airValueChange = this.ch.sub("airValueChange").subscribe(function (data) {
                console.log(data);
                if (data.data.device_id === _this.deviceinfo.device_id && data.data.services.type === 216) {
                    _this.pm25 = "PM2.5  " + data.data.services.valve + "μg/m³";
                    _this.ref.detectChanges();
                }
            });
    };
    AirdetectorComponent.prototype.ngOnDestroy = function () {
        this.ref.detach();
        this.subonline.unsubscribe();
    };
    Object.defineProperty(AirdetectorComponent.prototype, "Type", {
        set: function (type) {
            this.type = type;
        },
        enumerable: true,
        configurable: true
    });
    AirdetectorComponent.prototype.pushDPage = function () {
        this.navCtrl.push('airdetector', { device_id: this.deviceinfo.device_id });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], AirdetectorComponent.prototype, "device", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], AirdetectorComponent.prototype, "Type", null);
    AirdetectorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'airdetector',template:/*ion-inline-start:"C:\projects\zhijiatablet\smart_app_duer\app\src\components\airdetector\airdetector.html"*/'<ion-item *ngIf="type===0">\n\n  <ion-avatar item-left (click)="pushDPage()">\n\n    <img src="{{src}}" />\n\n  </ion-avatar>\n\n  <h2 (click)="pushDPage()">{{deviceinfo.name}}</h2>\n\n  <p (click)="pushDPage()"> {{pm25}}</p>\n\n</ion-item>\n\n<div *ngIf="type===1" class="equipment-home-item" (click)="pushDPage()">\n\n  <div class="equipment-thumbnail">\n\n    <img src="{{src}}" />\n\n  </div>\n\n  <h2>{{deviceinfo.name}}</h2>\n\n  <p>{{pm25}}</p>\n\n</div>'/*ion-inline-end:"C:\projects\zhijiatablet\smart_app_duer\app\src\components\airdetector\airdetector.html"*/
        })
        //空气检测仪
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1__extended_extendedurlimg__["a" /* ExtendedUrlImg */],
            __WEBPACK_IMPORTED_MODULE_3__providers_channel_channel__["a" /* ChannelProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]])
    ], AirdetectorComponent);
    return AirdetectorComponent;
}());

//# sourceMappingURL=airdetector.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoncameraComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__demoncamera__ = __webpack_require__(337);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DemoncameraComponentModule = /** @class */ (function () {
    function DemoncameraComponentModule() {
    }
    DemoncameraComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__demoncamera__["a" /* DemoncameraComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__demoncamera__["a" /* DemoncameraComponent */]
            ]
        })
    ], DemoncameraComponentModule);
    return DemoncameraComponentModule;
}());

//# sourceMappingURL=demoncamera.module.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoncameraComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_lecheng_lecheng__ = __webpack_require__(221);
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

//import { DeviceConst } from "../../interfaces/deviceconst";


var DemoncameraComponent = /** @class */ (function () {
    function DemoncameraComponent(lechengService, 
        //private ch: ChannelProvider,
        ref, localDataService) {
        this.lechengService = lechengService;
        this.ref = ref;
        this.localDataService = localDataService;
        this.isgroup = false; //是否是组设备
        this.isload = false;
        this.userToken = "";
        this.title = "";
    }
    Object.defineProperty(DemoncameraComponent.prototype, "Type", {
        set: function (type) {
            this.type = type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DemoncameraComponent.prototype, "device", {
        //当前开关的所有属性
        set: function (deviceinfo) {
            this.deviceinfo = deviceinfo;
            this.deviceproduct = this.deviceinfo.product_id;
            this.isgroup = this.deviceinfo.ingroup === 2;
            this.title = this.deviceinfo.name;
        },
        enumerable: true,
        configurable: true
    });
    DemoncameraComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ref.markForCheck();
        this.isload = false;
        this.lechengService.GetDeviceToken(this.deviceinfo.device_id).subscribe(function (result) {
            if (result.error_code == 0) {
                _this.online = result.data.isOnline; //在线状态
                _this.userToken = result.data.userToken;
                _this.isload = true;
            }
            else {
                _this.localDataService.alert("提示", "初始化视频失败:" + result.error_msg);
            }
        }, function (error) {
            _this.localDataService.alert("提示", "初始化视频失败");
        });
    };
    DemoncameraComponent.prototype.OpenVideo = function () {
        var _this = this;
        if (!this.isload) {
            this.localDataService.alert("提示", "视频尚未初始化完成,请稍后");
            return;
        }
        var options = {
            user_token: this.localDataService.getToken(),
            device_id: this.deviceinfo.device_id,
            channle_id: '0',
            action: "play",
            fileId: "",
            recordID: "",
            type: 1,
            title: this.title
        };
        cordova.plugins.lcOpenSDK.openVideo(this.userToken, this.deviceinfo.sn, 1, options, function (result) {
            _this.openVideoSuccess(result);
        }, function (result) {
            _this.localDataService.alert("提示", "实时播放失败:" + result.error_msg);
        });
    };
    DemoncameraComponent.prototype.openVideoSuccess = function (code) {
    };
    DemoncameraComponent.prototype.ngOnDestroy = function () {
        this.ref.detach();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], DemoncameraComponent.prototype, "Type", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], DemoncameraComponent.prototype, "device", null);
    DemoncameraComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'demoncamera',template:/*ion-inline-start:"C:\projects\zhijiatablet\smart_app_duer\app\src\components\demoncamera\demoncamera.html"*/'<div class="ipad-switch">\n\n    <ion-row center class="ion-row-full align-items-center">\n\n        <ion-col text-center>\n\n            <button color="bright" outline ion-button icon-only class="ipad-button-camera" (click)="OpenVideo()"></button>\n\n            <p>{{title}}</p>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n</div>'/*ion-inline-end:"C:\projects\zhijiatablet\smart_app_duer\app\src\components\demoncamera\demoncamera.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_lecheng_lecheng__["a" /* LechengProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_2__providers_localdata_localdata__["a" /* LocaldataProvider */]])
    ], DemoncameraComponent);
    return DemoncameraComponent;
}());

//# sourceMappingURL=demoncamera.js.map

/***/ })

});
//# sourceMappingURL=0.js.map