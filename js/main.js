var menu = document.querySelector('.main-menu'),
    menuIcon = document.querySelector('.menu-icon'),
    overlay = document.querySelector('.overlay');

/**
 * Swaps an existing node's class with another
 * @param  {Node} elem   [Node to be modified]
 * @param  {String} remove [Class to be removed]
 * @param  {String} add    [Class to be added]
 */
function swapClass(elem, remove, add) {
    elem.classList.remove(remove);
    elem.classList.add(add);
}

/**
 * Sequence of actions to close the menu
 */
function closeMenu() {
    swapClass(menu, 'menu-open', 'menu-close');
    swapClass(overlay, 'fade-in', 'fade-out');
}

/**
 * Handles closing the menu on clicking the overlay
 */
overlay.addEventListener('click', closeMenu)

/**
 * Handles opening and closing the menu via menu icon
 */
menuIcon.addEventListener('click', function() {
    if (menu.classList.contains('menu-close')) {
        swapClass(menu, 'menu-close', 'menu-open');
        swapClass(overlay, 'fade-out', 'fade-in');
    } else {
        closeMenu();
    }
});
