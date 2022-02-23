$(function () {
	$('.desing__slider').slick({
		dots: false,
		slidesToShow: 4,
		variableWidth: true,
		prevArrow:
			'<img class="arrow arrow-left" src="images/arrow-l.svg" alt="" />',
		nextArrow:
			'<img class="arrow arrow-right" src="images/arrow-r.svg" alt="" />',
		responsive: [
			{
				breakpoint: 361,
				settings: {
					variableWidth: false,
					slidesToShow: 1,
				},
			},
		],
	})
})
