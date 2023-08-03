const mobileMenu = document.querySelector('.navigation');

const burgerMenu = document.querySelector('.hamburger');

const linkMenu1 = document.getElementById('tap_mobile1');
const linkMenu2 = document.getElementById('tap_mobile2');
const linkMenu3 = document.getElementById('tap_mobile3');
const linkMenu4 = document.getElementById('tap_mobile4');

const containerDark = document.querySelector('.container');

const buttonPet1 = document.getElementById('Pet1');

const windowPet1 = document.getElementById('pet1window');

const buttonPet11 = document.getElementById('Pet11');

const windowPet11 = document.getElementById('pet11window');

const windowClose = document.getElementById('closeIcon');
const windowClose2 = document.getElementById('closeIcon2');

const buttonPet2 = document.getElementById('Pet2');

const windowPet2 = document.getElementById('pet2window');

const buttonPet22 = document.getElementById('Pet22');

const windowPet22 = document.getElementById('pet22window');

const buttonPet3 = document.getElementById('Pet3');

const windowPet3 = document.getElementById('pet3window');

const buttonPet33 = document.getElementById('Pet33');

const windowPet33 = document.getElementById('pet33window');

const buttonPet4 = document.getElementById('Pet4');

const windowPet4 = document.getElementById('pet4window');

const buttonPet44 = document.getElementById('Pet44');

const windowPet44 = document.getElementById('pet44window');

const buttonPet5 = document.getElementById('Pet5');

const windowPet5 = document.getElementById('pet5window');

const buttonPet55 = document.getElementById('Pet55');

const windowPet55 = document.getElementById('pet55window');

const buttonPet6 = document.getElementById('Pet6');

const windowPet6 = document.getElementById('pet6window');

const buttonPet66 = document.getElementById('Pet66');

const windowPet66 = document.getElementById('pet66window');

const buttonPet7 = document.getElementById('Pet7');

const windowPet7 = document.getElementById('pet7window');

const buttonPet77 = document.getElementById('Pet77');

const windowPet77 = document.getElementById('pet77window');

const buttonPet8 = document.getElementById('Pet8');

const windowPet8 = document.getElementById('pet8window');

const buttonPet88 = document.getElementById('Pet88');

const windowPet88 = document.getElementById('pet88window');

const buttonPet9 = document.getElementById('Pet9');

const windowPet9 = document.getElementById('pet9window');




burgerMenu.addEventListener("click", function (e) {
    document.body.classList.toggle('lock');
    mobileMenu.classList.toggle('active');
    burgerMenu.classList.toggle('rotate');
    mobileMenu.classList.toggle('dark');
});

linkMenu1.addEventListener("click", function (e) {
    if(mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        burgerMenu.classList.remove('rotate');
        document.body.classList.remove('lock');
        mobileMenu.classList.remove('dark');
    }
})

linkMenu2.addEventListener("click", function (e) {
    if(mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        burgerMenu.classList.remove('rotate');
        document.body.classList.remove('lock');
        mobileMenu.classList.remove('dark');
    }
})

linkMenu3.addEventListener("click", function (e) {
    if(mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        burgerMenu.classList.remove('rotate');
        document.body.classList.remove('lock');
        mobileMenu.classList.remove('dark');
    }
})
linkMenu4.addEventListener("click", function (e) {
    if(mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        burgerMenu.classList.remove('rotate');
        document.body.classList.remove('lock');
        mobileMenu.classList.remove('dark');
    }
})



window.addEventListener('click', e => { 
    const target = e.target 
    if (!target.closest('.navigation') && !target.closest('.hamburger')) { 
      mobileMenu.classList.remove('active');
      burgerMenu.classList.remove('rotate');
      document.body.classList.remove('lock');
      mobileMenu.classList.remove('dark');
    }
  })


  //слайдер

let buttonLeft = document.getElementById('but-left');
let buttonRight = document.getElementById('but-right');

let cards = document.querySelectorAll('.ourfriends__card__pet .block');


let i = 0;

buttonLeft.onclick = function () {
    cards[i].style.display = 'none';
    i--;

    if(i < 0) {
        i = cards.length - 1;
    }
    cards[i].style.display = 'block';
}

buttonRight.onclick = function () {
    cards[i].style.display = 'none';
    i++;

    if(i >= cards.length) {
        i = 0;
    }
    cards[i].style.display = 'block';
    
}

/*pop-up*/

buttonPet1.addEventListener("click", function (e) {
    windowPet1.classList.add('pop-up-open');
    windowPet1.classList.remove('hidden');
    windowPet1.classList.add('dark');
    document.body.classList.add('locks');
    windowClose.classList.remove('hidden');
    windowClose.classList.add('pop-up-icon-open');
});

windowClose.addEventListener("click", function (e) {
    windowPet1.classList.remove('pop-up-open');
    windowPet1.classList.add('hidden');
    windowPet1.classList.remove('dark');
    document.body.classList.remove('locks');
    windowClose.classList.add('hidden');
    windowClose.classList.remove('pop-up-icon-open');
});


buttonPet2.addEventListener("click", function (e) {
    windowPet2.classList.add('pop-up-open');
    windowPet2.classList.remove('hidden');
    windowPet2.classList.add('dark');
    document.body.classList.add('locks');
    windowClose.classList.remove('hidden');
    windowClose.classList.add('pop-up-icon-open');
});

windowClose.addEventListener("click", function (e) {
    windowPet2.classList.remove('pop-up-open');
    windowPet2.classList.add('hidden');
    windowPet2.classList.remove('dark');
    document.body.classList.remove('locks');
    windowClose.classList.add('hidden');
    windowClose.classList.remove('pop-up-icon-open');
});

buttonPet3.addEventListener("click", function (e) {
    windowPet3.classList.add('pop-up-open');
    windowPet3.classList.remove('hidden');
    windowPet3.classList.add('dark');
    document.body.classList.add('locks');
    windowClose.classList.remove('hidden');
    windowClose.classList.add('pop-up-icon-open');
});

windowClose.addEventListener("click", function (e) {
    windowPet3.classList.remove('pop-up-open');
    windowPet3.classList.add('hidden');
    windowPet3.classList.remove('dark');
    document.body.classList.remove('locks');
    windowClose.classList.add('hidden');
    windowClose.classList.remove('pop-up-icon-open');
});

buttonPet4.addEventListener("click", function (e) {
    windowPet4.classList.add('pop-up-open');
    windowPet4.classList.remove('hidden');
    windowPet4.classList.add('dark');
    document.body.classList.add('locks');
    windowClose.classList.remove('hidden');
    windowClose.classList.add('pop-up-icon-open');
});

windowClose.addEventListener("click", function (e) {
    windowPet4.classList.remove('pop-up-open');
    windowPet4.classList.add('hidden');
    windowPet4.classList.remove('dark');
    document.body.classList.remove('locks');
    windowClose.classList.add('hidden');
    windowClose.classList.remove('pop-up-icon-open');
});

buttonPet5.addEventListener("click", function (e) {
    windowPet5.classList.add('pop-up-open');
    windowPet5.classList.remove('hidden');
    windowPet5.classList.add('dark');
    document.body.classList.add('locks');
    windowClose.classList.remove('hidden');
    windowClose.classList.add('pop-up-icon-open');
});

windowClose.addEventListener("click", function (e) {
    windowPet5.classList.remove('pop-up-open');
    windowPet5.classList.add('hidden');
    windowPet5.classList.remove('dark');
    document.body.classList.remove('locks');
    windowClose.classList.add('hidden');
    windowClose.classList.remove('pop-up-icon-open');
});

buttonPet6.addEventListener("click", function (e) {
    windowPet6.classList.add('pop-up-open');
    windowPet6.classList.remove('hidden');
    windowPet6.classList.add('dark');
    document.body.classList.add('locks');
    windowClose.classList.remove('hidden');
    windowClose.classList.add('pop-up-icon-open');
});

windowClose.addEventListener("click", function (e) {
    windowPet6.classList.remove('pop-up-open');
    windowPet6.classList.add('hidden');
    windowPet6.classList.remove('dark');
    document.body.classList.remove('locks');
    windowClose.classList.add('hidden');
    windowClose.classList.remove('pop-up-icon-open');
});

buttonPet7.addEventListener("click", function (e) {
    windowPet7.classList.add('pop-up-open');
    windowPet7.classList.remove('hidden');
    windowPet7.classList.add('dark');
    document.body.classList.add('locks');
    windowClose.classList.remove('hidden');
    windowClose.classList.add('pop-up-icon-open');
});

windowClose.addEventListener("click", function (e) {
    windowPet7.classList.remove('pop-up-open');
    windowPet7.classList.add('hidden');
    windowPet7.classList.remove('dark');
    document.body.classList.remove('locks');
    windowClose.classList.add('hidden');
    windowClose.classList.remove('pop-up-icon-open');
});

buttonPet8.addEventListener("click", function (e) {
    windowPet8.classList.add('pop-up-open');
    windowPet8.classList.remove('hidden');
    windowPet8.classList.add('dark');
    document.body.classList.add('locks');
    windowClose.classList.remove('hidden');
    windowClose.classList.add('pop-up-icon-open');
});

windowClose.addEventListener("click", function (e) {
    windowPet8.classList.remove('pop-up-open');
    windowPet8.classList.add('hidden');
    windowPet8.classList.remove('dark');
    document.body.classList.remove('locks');
    windowClose.classList.add('hidden');
    windowClose.classList.remove('pop-up-icon-open');
});

buttonPet9.addEventListener("click", function (e) {
    windowPet9.classList.add('pop-up-open');
    windowPet9.classList.remove('hidden');
    windowPet9.classList.add('dark');
    document.body.classList.add('locks');
    windowClose.classList.remove('hidden');
    windowClose.classList.add('pop-up-icon-open');
});

windowClose.addEventListener("click", function (e) {
    windowPet9.classList.remove('pop-up-open');
    windowPet9.classList.add('hidden');
    windowPet9.classList.remove('dark');
    document.body.classList.remove('locks');
    windowClose.classList.add('hidden');
    windowClose.classList.remove('pop-up-icon-open');
});


