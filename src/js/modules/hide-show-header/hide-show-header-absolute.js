let lastScroll = 0;
const header = document.querySelector('header');
const scrollPosition = () =>  window.pageYOffset || document.documentElement.scrollTop;
const isHeaderShadow = () => header.classList.contains('header--shadow')
const isHeaderHide = () => header.classList.contains('hide')


window.addEventListener('scroll', () => {
	if (scrollPosition() > lastScroll && !isHeaderHide()) {
		header.classList.add('hide');
		header.classList.remove('header--shadow');
	} else if (scrollPosition() < lastScroll && isHeaderHide()) {
		header.classList.add('header--shadow');
		header.classList.remove('hide');
	}
		
	if (scrollPosition() < header.offsetHeight && isHeaderShadow()) {
		header.classList.remove('header--shadow');
	}
	lastScroll = scrollPosition();
});
