document.addEventListener("DOMContentLoaded", function (event) {
	var contentElement = document.getElementById('content');

	// Below we are using fairly simplistic checks to determine
	// whether we are running inside a Cordova-based environment.
	// A more fine-grained check could also leverage other properties
	// such as the user agent string.
	var iosCordova = navigator.standalone === false;
	var androidCordova =  window._cordovaNative;
	if (iosCordova || androidCordova) {
		// Create a script element to be injected into the page that
		// points to the Cordova JavaScript found that is locally available
		// within the app package.
		var scriptElement = document.createElement('script');
		var headElement = document.getElementsByTagName('head')[0];
		// The exact URL differs a bit between platforms.
		if (iosCordova) {
			scriptElement.src = 'cdvfile://localhost/bundle/www/cordova.js';
		} else if (androidCordova) {
			// This requires that the cordova-plugin-file used has the support
			// for the assets filesystem.
			scriptElement.src = 'cdvfile://localhost/assets/www/cordova.js';
		}
		headElement.appendChild(scriptElement);
		var onDeviceReady = function () {
			var buttonElement = document.createElement('button');
			buttonElement.appendChild(document.createTextNode('Check Connection'));
			buttonElement.onclick = function () {
				checkConnection();
			};
			contentElement.appendChild(buttonElement);
		};
		document.addEventListener('deviceready', onDeviceReady, false);
	} else {
		var textElement = document.createTextNode('Nothing to see here. ');
		contentElement.appendChild(textElement);
		var linkElement = document.createElement('a');
		linkElement.href = 'https://github.com/vjrantal/manifoldjs-cordova-example';
		linkElement.appendChild(document.createTextNode('See here.'));
		contentElement.appendChild(linkElement);
	}
});

// Below copied from the readme at
// https://github.com/apache/cordova-plugin-network-information
var checkConnection = function () {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';

    alert('Connection type: ' + states[networkState]);
};