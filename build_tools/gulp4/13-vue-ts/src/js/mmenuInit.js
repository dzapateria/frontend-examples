$(function() {

	new Mmenu("#menu", {
		navbars: [{
			content: [ 'searchfield' ]
		}],
		wrappers: [ 'bootstrap' ]}, {});

	$(".mh-head.Sticky").mhead({
		scroll: {
			hide: 200
		}
	});
	$(".mh-head:not(.Sticky)").mhead({
		scroll: false
	});

	$('body').on( 'click',
		'a[href^="#/"]',
		function() {
			alert( "Thank you for clicking, but that's a demo link." );
			return false;
		}
	);			});