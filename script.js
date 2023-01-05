//Burger

let menuBtn = document.querySelector('.burger__button');
let menu = document.querySelector('.burger__body');
let body = document.querySelector('.body');
menuBtn.addEventListener('click', function () {
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
	body.classList.toggle('active');
});

//Slider

new Swiper('.projects__slider', {

	navigation: {
		nextEl: '.slider__arrow-next',
		prevEl: '.slider__arrow-prev'
	},

	slidesPerView: 2.43,

	keyboard: {

		enabled: true,
		onlyInViewport: true,
		pageUpDown: true,

	},

	spaceBetween: 24,

	autoHeight: false,

	breakpoints: {

		320: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 2.43,
		}

	},

});