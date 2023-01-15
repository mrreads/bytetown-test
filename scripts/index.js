import './header';
import './animations';

import ScrollBooster from 'scrollbooster';

const menuWrapper = new ScrollBooster({
    viewport: document.querySelector('.menu .menu-items'),
    content: document.querySelector('.menu .menu-items'),
    scrollMode: 'native',
    direction: 'horizontal',
    emulateScroll: true,
});

const menuScroll = document.querySelector('.menu .menu-next');
menuScroll.addEventListener('click', () => {
    let offset = menuWrapper.getState().position.x;
    menuWrapper.scrollTo({ x: offset + 400 });
});