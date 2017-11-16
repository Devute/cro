/* =================================
===  OPEN COLOR MENU
=================================== */
$(document).ready(function () {
	$('#toggle-switcher').click(function () {
		if ($(this).hasClass('open')) {
			$(this).removeClass('open');
			$('#switch-style').animate({
				'left': '-220px'
			});
		} else {
			$(this).addClass('open');
			$('#switch-style').animate({
				'left': '0'
			});
		}
	});
});

$(window).load(function () {
	$('body').addClass('loaded');
});
