(function() {
	'use strict';

	var KDExitIntent = {}; // New object

	// Any defaults the class may need
	var defaults = {
		cookieExp: 30,
		onExitIntent: function() {
			console.log ('No callback function defined');
		}
	};

	KDExitIntent.settings = {}; // Object to hold settings that will be created from defaults/options

	// This will be called to initialize certain things on document.ready where it is called
	KDExitIntent.init = function(options) {
		// Merge options passed in with default settings
		if (typeof options === 'object') {
			KDExitIntent.settings = $.extend(true, {}, defaults, options);
		} else {
			KDExitIntent.settings = defaults;
		}

		if (KDExitIntent.checkCookie()) {
			return;
		}

		KDExitIntent.loadEvents();
	}

	// Object for handling cookies, taken from QuirksMode
	// http://www.quirksmode.org/js/cookies.html
	KDExitIntent.cookieManager = {
		
		// Create a cookie
		create: function(name, value, days) {
			var expires = "";
			
			if(days) {
				var date = new Date();
				date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
				expires = "; expires=" + date.toGMTString();
			}
			
			document.cookie = name + "=" + value + expires + "; path=/";
		},
		
		// Get the value of a cookie
		get: function(name) {
			var nameEQ = name + "=";
			var ca = document.cookie.split(";");
			
			for(var i = 0; i < ca.length; i++) {
				var c = ca[i];
				while (c.charAt(0) == " ") c = c.substring(1, c.length);
				if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
			}
			
			return null;
		},
		
		// Delete a cookie
		erase: function(name) {
			this.create(name, "", -1);
		}
	};

	KDExitIntent.checkCookie = function() {
		// Handle cookie reset
		if (KDExitIntent.settings.cookieExp <= 0) {
			KDExitIntent.cookieManager.erase("kdexit_intent_shown");
			return false;
		}
		
		// If cookie is set to true
		if (KDExitIntent.cookieManager.get("kdexit_intent_shown") == "true") {
			return true;
		}
			
		// Otherwise, create the cookie and return false
		KDExitIntent.cookieManager.create("kdexit_intent_shown", "true", KDExitIntent.settings.cookieExp);
		
		return false;
	};

	// Load event listeners for the popup
	KDExitIntent.loadEvents = function() {
		// Track mouse movements
		document.addEventListener("mousemove", function(e) {
			// Get current scroll position
			var scroll = window.pageYOffset || document.documentElement.scrollTop;
			
			if ((e.pageY - scroll) < 7) {
				KDExitIntent.settings.onExitIntent();
			}
		});
	};
	
	// Expose ExitIntent object to window
	this.KDExitIntent = KDExitIntent;

}.call(this));