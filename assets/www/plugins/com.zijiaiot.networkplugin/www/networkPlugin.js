cordova.define("com.zijiaiot.networkplugin.netNetWorkModel", function(require, exports, module) {
var exec = require("cordova/exec");

function NetWorkModel() { };
//获取连接的wifi名称
NetWorkModel.prototype.ssidPlugin = function (success, fail) {
  exec(success, fail, 'onZIJIAIOTNetWork', 'fetchSsid');
}
//网关，红外 窗帘 小圆插 配网
NetWorkModel.prototype.networkPlugin = function (ssid,pwd,success,fail) {
  exec(success, fail, 'onZIJIAIOTNetWork', 'distributionNetwork', [ssid,pwd]);
}
//乐橙摄像头配网
NetWorkModel.prototype.networkLCPlugin = function (ssid,pwd,sn,success,fail) {
  exec(success, fail, 'onZIJIAIOTNetWork', 'distributionLCNetwork', [ssid,pwd,sn]);
}
var netNetWorkModel = new NetWorkModel();
module.exports = netNetWorkModel;
});
