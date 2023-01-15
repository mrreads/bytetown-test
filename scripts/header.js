let menuIsOpen = false;
const header = document.querySelector('.header');
const burger = document.querySelector('.header__icon.burger');
burger.addEventListener('click', () => {
    menuIsOpen = !menuIsOpen;
    header.dataset.opened = menuIsOpen;
});