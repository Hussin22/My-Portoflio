const hamburger = document.querySelector('.Header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.Header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.Header .nav-bar .nav-list ul li a');
const Header = document.querySelector('.Header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		Header.style.backgroundColor = '#29323c';
	} else {
		Header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});