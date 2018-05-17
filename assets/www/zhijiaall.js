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
ZhijiaPlugin.prototype.playAudio = function(url,success, fail) {
	return cordova.exec(success, fail, "ZhijiaAllPlugin", "playAudio", [{url:url}]);
};
ZhijiaPlugin.prototype.stopAudio = function(success, fail) {
	return cordova.exec(success, fail, "ZhijiaAllPlugin", "stopAudio", [{}]);
};
ZhijiaPlugin.prototype.ttsStop = function(success, fail) {
	return cordova.exec(success, fail, "ZhijiaAllPlugin", "ttsStop", [{}]);
};
ZhijiaPlugin.prototype.duerBegin = function(success, fail) {
	return cordova.exec(success, fail, "ZhijiaAllPlugin", "duerBegin", [{}]);
};
window.zhijiaPlugin = new ZhijiaPlugin();
