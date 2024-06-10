let lastScroll = 0;
const header = document.querySelector('header');
const scrollPosition = () =>  window.pageYOffset || document.documentElement.scrollTop;
const isHeaderHide = () => header.classList.contains('hide');

window.addEventListener('scroll', () => {
	if (scrollPosition() > header.offsetHeight && !isHeaderHide()) {
		header.classList.add('hide');
	}
	if (scrollPosition() < header.offsetHeight && isHeaderHide()) {
		header.classList.remove('hide');
	}

	lastScroll = scrollPosition();
});