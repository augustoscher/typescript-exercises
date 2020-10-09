var logDetails = function (uuid, item) {
    console.log("uuid: " + uuid + " - item: " + item);
};
var logInfo = function (uuid, user) {
    console.log("uuid: " + uuid + " - user: " + user);
};
var renderPlatform = function (platform) {
    console.log("Platform is: " + platform);
};
logDetails(123, 'xunda');
logDetails('123', 'xunda');
logInfo(123, 'xunda');
logInfo('123', 'xunda');
// renderPlatform('ios'); Argument of type 'ios' is not assignable to Platform
renderPlatform('Linux');
