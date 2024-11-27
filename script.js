const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const closIcon = document.getElementById('close-icon');
const navLink = document.querySelectorAll('.nav-link');

closIcon.addEventListener('click', () => {
	navMenu.classList.add('hidden');
});
hamburger.addEventListener('click', () => {
	navMenu.classList.remove('hidden');
});
navLink.forEach(link => {
	link.addEventListener('click', () => {
		navMenu.classList.add('hidden');
	});
});
