var ZhijiaPlugin = function() {};
ZhijiaPlugin.prototype.getToken = function(success, fail) {
	return cordova.exec(success, fail, "ZhijiaAllPlugin", "getToken", [{}]);
};
ZhijiaPlugin.prototype.registerNotify = function(success, fail) {
	return cordova.exec(success, fail, "ZhijiaAllPlugin", "registerNotify", [{}]);
};
ZhijiaPlugin.prototype.start = function(success, fail) {
	return cordova.exec(success, fail, "ZhijiaAllPlugin", "start", [{}]);
};
ZhijiaPlugin.prototype.stop = function(success, fail) {
	return cordova.exec(success, fail, "ZhijiaAllPlugin", "stop", [{}]);
};
ZhijiaPlugin.prototype.ttsPlay = function(message,utteranceId,success, fail) {
	return cordova.exec(success, fail, "ZhijiaAllPlugin", "ttsPlay", [{text:message,utteranceId:utteranceId}]);
};
ZhijiaPlugin.prototype.ttsStop = function(success, fail) {
	return cordova.exec(success, fail, "ZhijiaAllPlugin", "ttsStop", [{}]);
};
window.zhijiaPlugin = new ZhijiaPlugin();
