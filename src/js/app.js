// import './modules/isWebp.js';

// Расскоментировать, если нужен динамический адаптив
import './modules/dynamic-adaptiv.js';

// Расскоментировать если нужен бургер
// import './modules/burger.js';

// Спойлеры (аккардеоны)
	// import './modules/spollers/spollers-fls.js'; // (не знаю как сделать семантичным, но есть плюшки с breakpoint)

// Подключение swiper. Добавить css !
import './modules/swiper/slider.js'

// Прячет и показывает header при скролле 
import './modules/hide-show-header/hide-show-header-relative.js' //(скрывать и показывать относитльно высоты header)
// import './modules/hide-show-header/hide-show-header-absolute.js' //(скрывать и показывать сразу при прокрутке. Нужно добавлять тень для header с классом .header--shadow)

// Ф-я обрезки до указанного символа (Добавить в файл где нужна ф-я)
// import './modules/substring.js'

// Звёздный рейтинг. Добавить css !
  // Статичный рейтинг
	// import './modules/star-raiting/star-rating-static.js'
	// Динамичный рейтинг
	// import './modules/star-raiting/star-rating-dynamic.js'

/* InsertsectionObserver */
	// Расскоментировать если нужно давать активный класс в навигацию при скролле 
	// import './modules/observer/anchor-menu.js';

	// Расскааментировать для добавления анимации (класса) при скролле 
	// import './modules/observer/animation.js';

	// Расскааментировать для Lazy-load изображений при скролле 
	// import './modules/observer/lazy_loading.js';

	// Расскоментировать для автоплея и паузы видео при скролле
	// import './modules/observer/video-atoplay.js';

	// Расскаментировать для бесконечного скролла
	// import './modules/observer/infinity-scroll.js';
// FIXME:изменить функционал при клике на мобилке в меню (чтобы закрывалось и скролилось)

// JustValidate
import './modules/justValidate/justValidate.js';
import './modules/validate-form.js';

// Показать превью для загружаемой картинки
// Добавить файл scss для кастомной стилизации @import "../../js/modules/justValidate/justValidate.scss";
import './modules/form-file.js';
