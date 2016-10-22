var menu = document.querySelector('.main-menu'),
	menuIcon = document.querySelector('.menu-icon'),
	overlay = document.querySelector('.overlay');

function swapClass (elem, remove, add) {
	elem.classList.remove(remove);
	elem.classList.add(add);
}

function closeMenu () {
	swapClass(menu, 'menu-open', 'menu-close');
	swapClass(overlay, 'fade-in', 'fade-out');
}

overlay.addEventListener('click', function() {
	closeMenu()
})

menuIcon.addEventListener('click', function() {
    if (menu.classList.contains('menu-close')) {
        swapClass(menu, 'menu-close', 'menu-open');
        swapClass(overlay, 'fade-out', 'fade-in');
    } else {
    	closeMenu();
    }
});
