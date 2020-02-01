
$('.activemenu').on('click', 'li', function () {
	$('.activemenu li.activepage').removeClass('activepage');s
	$(this).addClass('activepage');
});