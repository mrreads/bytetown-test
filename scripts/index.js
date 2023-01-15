import './header';
import './animations';
import './popup';

const menuWrapper = document.querySelector('.menu .menu-items');
const menuScroll = document.querySelector('.menu .menu-next');
menuScroll.addEventListener('click', () => menuWrapper.scrollLeft += 300);