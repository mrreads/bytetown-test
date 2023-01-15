let menuIsOpen = false;
const header = document.querySelector('.header');
const burger = document.querySelector('.header__icon.burger');

burger.addEventListener('click', () => {
    menuIsOpen = !menuIsOpen;
    header.dataset.opened = menuIsOpen;
});

document.body.addEventListener('click', (e) => {
    let clickOnNavigation = e.target.closest('.header nav');
    let clickOnBurger = e.target.closest('.header__icon.burger')
    if (!clickOnBurger && !clickOnNavigation)
    {
        menuIsOpen = false;
        header.dataset.opened = menuIsOpen;
    }
});