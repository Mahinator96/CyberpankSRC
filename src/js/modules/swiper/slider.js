/* 
	Структура:
		<div class="swiper">
			<!-- Additional required wrapper -->
			<div class="swiper-wrapper">
				<!-- Slides -->
				<div class="swiper-slide">Slide 1</div>
				<div class="swiper-slide">Slide 2</div>
				<div class="swiper-slide">Slide 3</div>
				...
			</div>
			<!-- If we need pagination -->
			<div class="swiper-pagination"></div>

			<!-- If we need navigation buttons -->
			<div class="swiper-button-prev"></div>
			<div class="swiper-button-next"></div>

			<!-- If we need scrollbar -->
			<div class="swiper-scrollbar"></div>
		</div>
*/

// Подключение swiper 
import Swiper from 'swiper';
// Подключение дополнительных модулей
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
/* 
	Основные модули слайдера:
		Navigation, Pagination, Autoplay,
		EffectFade, Lazy, Manipulation
	*/

(function() {
	// const classSlider = '.hero__slider';

	const initSliders = () => { // Инициализация слайдеров
		if (document.querySelector(".hero__slider")) { // Проверка на наличие слайдера
			
			new Swiper(".hero__slider", { // Создание слайдера
				modules: [Navigation, Pagination, Autoplay],
				observer: true,
				observerParents: true,
				slidesPerView: 1,
				// spaceBetween: 72,
				autoHeight: true,
				speed: 800,
				// spaceBetween: '72px';

				// touchRatio: 0,
				// simulateTouch: false,
				loop: true,
				// preloadImages: false,
				// lazy: true,
				// effect: 'fade',
				// autoplay: 300,
				autoplay: {
					delay: 3000,
					disableOnInteraction: false,
				},
				/* 
				// Еффекты 
				effect: 'fade',
				autoplay: {
					delay: 3000,
					disableOnInteraction: false,
				},
				*/

				
				// Пагинация
				// pagination: {
				// 	el: '.reviews__bullets',
				// 	clickable: true,
				// },			

				/* 
				// Сколлбар
				scrollbar: {
					el: '.swiper-scrollbar',
					draggable: true,
				},
				*/

				// Кнопки влево-вправо
				// navigation: {
				// 	prevEl: '.reviews__arrow--left',
				// 	nextEl: '.reviews__arrow--right',
				// },

				/* 
				// Брейкпоинты
				breakpoints: {
					640: {
						slidesPerView: 1,
						spaceBetween: 0,
						autoHeight: true,
					},
					780: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					992: {
						slidesPerView: 3,
						spaceBetween: 20,
					},
					1268: {
						slidesPerView: 4,
						spaceBetween: 30,
					},
				},
				*/
			});
		}
	}

	initSliders();
}())