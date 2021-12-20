let hamburger = document.querySelector('.nav__icon');

hamburger.addEventListener('click',function(){
    let menu = document.querySelector('.nav__mobile-menu');

    menu.classList.toggle('show-element');
    let iconSource = hamburger.getAttribute('src');
    iconSource === 'images/icon-hamburger.svg' ? hamburger.src = 'images/icon-close.svg' : hamburger.src = 'images/icon-hamburger.svg';

    let navHeight = document.querySelector('.nav__wrapper').clientHeight;
    let setMenuHeight = window.innerHeight - navHeight;
    menu.classList.contains('show-element') ? menu.style.height = setMenuHeight + 'px' : menu.style.height = '0px';
})