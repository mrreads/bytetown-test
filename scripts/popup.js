import { gsap } from "gsap/dist/gsap";

const openButton = document.querySelector('.menu-items');
openButton.addEventListener('click', openPopup);

const closeButton = document.querySelector('.popup-form__close');
closeButton.addEventListener('click', closePopup);

function openPopup() {
    document.body.classList.add('disable-scroll');

    gsap.to('.popup', {
        opacity: 1,
        display: 'flex',
        zIndex: 100
    })
    gsap.to('.popup-form', {
        padding: 64,
        maxHeight: 600
    }, 0.5);
}

function closePopup() {
    document.body.classList.remove('disable-scroll');

    gsap.to('.popup-form', {
        padding: '0 64px',
        maxHeight: 0,
    })
    gsap.to('.popup', {
        opacity: 0,
        display: 'none'
    });
}