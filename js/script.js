
const slider = tns({
	container: '.gallery-wrapper',
	items: 5,
    slideBy: '1',
    gutter: 35,
    center: true,
	nav: false,
	mouseDrag: false,
	autoplay: true,
	autoplayButtonOutput: false,
	autoplayTimeout: 5000,
    speed: 1000,
    autoWidth: true,
    viewportMax: true,
	controls: false
});

document.querySelector('.gallery__btn-prev').addEventListener('click', function () {
	slider.goTo('prev');
});
document.querySelector('.gallery__btn-next').addEventListener('click', function () {
	slider.goTo('next');
});

// /slider================================/ https://github.com/ganlanyuan/tiny-slider

const slider2 = tns({
	container: '.reviews-wrapper',
	items: 5,
    slideBy: '1',
    gutter: 35,
    center: true,
	nav: false,
	mouseDrag: false,
	autoplay: true,
	autoplayButtonOutput: false,
	autoplayTimeout: 5000,
    speed: 1000,
    autoWidth: true,
    viewportMax: true,
	controls: false
});

document.querySelector('.reviews__btn-prev').addEventListener('click', function () {
	slider2.goTo('prev');
});
document.querySelector('.reviews__btn-next').addEventListener('click', function () {
	slider2.goTo('next');
});


$(document).ready(function () {
	$(window).scroll(function() {
		if ($(this).scrollTop()> 1500) {
			$('.pageup').fadeIn('slow');
		}
		else {
			$('.pageup').fadeOut('slow');
		}
	});
	$("a[href^='#up']").click(function(){
                const _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
                return false;
    });
		$("a[href^='#wellcome']").click(function(){
                const _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
                return false;
    });
    // smooth scroll and pageup

	$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
		$(this)
			.addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
			.closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
	});
	// /tabs-switch query

	function toggleSlide(item) {
		$(item).each(function (i) {
			$(this).on('click', function (e) {
				e.preventDefault();
				$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
				$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
			})
		});
	};
	toggleSlide('.catalog-item__link');
	toggleSlide('.catalog-item__back');

	// catalog-item switch

		function valideForms(form) {
			$(form).validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 30
			},
			email: {
				required: true,
				email: true
			},
			ccomment: {
				required: true
			},
			checkbox: {
				required: true
			}
		},
		messages: {
			name: "Пожалуйста, введите свое имя, от 2 до 30 букв.",
			email: "Пожалуйста, введите корректный адрес электронной почты.",
			ccomment: "Пожалуйста, коротко опишите суть предложения.",
			checkbox: ""
			}
		});
	};
	valideForms('.feedback-form');
// validateform https://jqueryvalidation.org/documentation/

});