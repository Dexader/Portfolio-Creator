//Burger

let menuBtn = document.querySelector('.burger__button');
let menu = document.querySelector('.burger__body');
let body = document.querySelector('.body');

menuBtn.addEventListener('click', function () {
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
	body.classList.toggle('active');
});

let menuBurger = document.querySelector('.menu-burger');
const links = Array.from(menuBurger.children);

links.forEach((link) => {
	link.addEventListener('click', closeOnClick);
});

function closeOnClick() {
	menuBtn.classList.remove('active');
	menu.classList.remove('active');
	body.classList.remove('active');
}


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

//Slider testimonials

let slideIndex = 1;
showSlides(slideIndex);

function nextSlide() {
	showSlides(slideIndex += 1);
}

function previousSlide() {
	showSlides(slideIndex -= 1);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	let i;
	let slides = document.getElementsByClassName('testimonials__slide');

	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}

	for (let slide of slides) {
		slide.style.display = 'none';
	}
	slides[slideIndex - 1].style.display = 'flex';
}

//Modal

let modal = document.getElementById('modal');
let modalBtn = document.getElementById('item-modal');
let modalBtnM = document.getElementById('item-modal-m');
let modalBtnP = document.getElementById('item-modal-p');
let span = document.getElementsByClassName("close")[0];

modalBtn.onclick = function() {
	modal.style.display = 'block';
}

modalBtnM.onclick = function () {
	modal.style.display = 'block';
}

modalBtnP.onclick = function () {
	modal.style.display = 'block';
}

span.onclick = function() {
	modal.style.display = 'none';
}

window.onclick = function(e) {
	if (e.target == modal) {
		modal.style.display = 'none';
	}
}