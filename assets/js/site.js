$(function() {
	// Initialize menu
	$('#main-nav').slicknav({
		label: '',
		afterOpen: function() {
			ga('send', 'event', 'Moible Menu', 'open');
		},
		afterClose: function() {
			ga('send', 'event', 'Moible Menu', 'close');
		}
	});

	// initialize any fancybox links
	$('.fancybox').fancybox();

	// Any fancybox opens via click -- track it
	$('.fancybox').click(function() {
		var url = $(this).attr("data-kdtrac-src").replace(/^#/, '');
		ga('send', 'pageview', url);
	});

	// Initialize Exit Intent Popup
	KDExitIntent.init({
		onExitIntent: function() {
			$.fancybox.open(
				{
					href : '#exit-raq'
				},
				{
					maxWidth: 550,
					afterShow: function() {
						ga('send', 'pageview', '/exit-intent-fancybox');
					},
					openEffect: 'elastic',
					closeEffect: 'elastic'
				}
			);
		}
	});

	// track external links
	$('a').click(function(){
		var url = $(this).attr('href');
		var txt = $(this).text();
		if (KDUtils.isExternal(url) && url !== "#") {
			ga('send', 'event', {
				eventCategory: 'Outbound Link',
				eventAction:  'click',
				eventLabel: url + ' - ' + txt,
				transport: 'beacon'
			});
		}
	});

	// track nav links
	var linkClicked = false;

	$('ul#main-nav li a').click(function(e) {
		e.preventDefault(); 
		setTimeout(clickLink, 500);
		linkClicked = false;
		var url = $(this).attr('href');
		var txt = $(this).text();

		trackNav('main-nav-desktop-click', url, txt);
	});

	$('ul.slicknav_nav li a').click(function(e) {
		e.preventDefault(); 
		setTimeout(clickLink, 500);
		linkClicked = false;
		var url = $(this).attr('href');
		var txt = $(this).text();

		trackNav('main-nav-mobile-click', url, txt);
	});

	function clickLink(url) {
		if (!linkClicked) {
			linkClicked = true;
			document.location = url;
		}
	}

	function trackNav(act, url, txt) {
		ga('send', 'event', {
			eventCategory: 'Navigation',
			eventAction:  act,
			eventLabel: url + ' - ' + txt,
			transport: 'beacon',
			hitCallback: function() {
				clickLink(url);
			}
		});
	}
});
