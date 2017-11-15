var isMac = function() {
	return /macintosh|mac os x/i.test(navigator.userAgent);
}();
if(isMac) {
	document.write('<link rel="stylesheet" href="css/app/app-ios.css">');
}