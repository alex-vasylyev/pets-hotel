
$('.activemenu').on('click', 'li', function () {
	$('.activemenu li.activepage').removeClass('activepage');
	$(this).addClass('activepage');
});