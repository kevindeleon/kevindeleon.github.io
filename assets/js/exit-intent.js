(function() {
	'use strict';

	var KDExitIntent = {}; // New object

	// Any defaults the class may need
	var defaults = {
		cookieExp: 30,
		hasFired: false,
		cookieName: 'kdexit_intent_shown',
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

		// If they've already been here, OR they've seen the overlay, then we won't even load event listeners
		if (checkCookie() === true || KDExitIntent.settings.hasFired === true) {
			return;
		}

		loadEvents();
	}

	// Object for handling cookies, taken from QuirksMode
	// http://www.quirksmode.org/js/cookies.html
	var cookieManager = {
		
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

	var checkCookie = function() {
		// If set to 0 or -1, then we'll never set the cookie (or really, just unset it every visit)
		if (KDExitIntent.settings.cookieExp <= 0) {
			cookieManager.erase(KDExitIntent.settings.cookieName);
			return false;
		}
		
		// If cookie is true, return true
		if (cookieManager.get(KDExitIntent.settings.cookieName) === "true") {
			return true;
		}
		
		return false;
	};

	// Load event listeners for exit intent
	var loadEvents = function() {
		// Track mouse movements
		document.addEventListener("mousemove", function(e) {
			// Get current scroll position
			var scroll = window.pageYOffset || document.documentElement.scrollTop;
			
			if ((e.pageY - scroll) < 7) {
				// If they haven't already seen it on this page
				if (KDExitIntent.settings.hasFired === false) {
					// Set this so we don't get multiple fires of our onExitIntent (Flickers, multiple tracks, etc)
					KDExitIntent.settings.hasFired = true;
					
					// Fire onExitIntent function
					KDExitIntent.settings.onExitIntent();

					// Exit Intent has happened -- set cookie so it doesn't happen again
					cookieManager.create(KDExitIntent.settings.cookieName, "true", KDExitIntent.settings.cookieExp);
				};				
			}
		});
	};
	
	// Expose ExitIntent object to window
	this.KDExitIntent = KDExitIntent;

}.call(this));