buttonPet11.addEventListener("click", function (e) {
    windowPet11.classList.add('pop-up-open');
    windowPet11.classList.remove('hidden');
    windowPet11.classList.add('dark');
    document.body.classList.add('locks');
    windowClose2.classList.remove('hidden');
    windowClose2.classList.add('pop-up-icon-open');
});

windowClose2.addEventListener("click", function (e) {
    windowPet11.classList.remove('pop-up-open');
    windowPet11.classList.add('hidden');
    windowPet11.classList.remove('dark');
    document.body.classList.remove('locks');
    windowClose2.classList.add('hidden');
    windowClose2.classList.remove('pop-up-icon-open');
});


buttonPet22.addEventListener("click", function (e) {
    windowPet22.classList.add('pop-up-open');
    windowPet22.classList.remove('hidden');
    windowPet22.classList.add('dark');
    document.body.classList.add('locks');
    windowClose2.classList.remove('hidden');
    windowClose2.classList.add('pop-up-icon-open');
});

windowClose2.addEventListener("click", function (e) {
    windowPet22.classList.remove('pop-up-open');
    windowPet22.classList.add('hidden');
    windowPet22.classList.remove('dark');
    document.body.classList.remove('locks');
    windowClose2.classList.add('hidden');
    windowClose2.classList.remove('pop-up-icon-open');
});

buttonPet33.addEventListener("click", function (e) {
    windowPet33.classList.add('pop-up-open');
    windowPet33.classList.remove('hidden');
    windowPet33.classList.add('dark');
    document.body.classList.add('locks');
    windowClose2.classList.remove('hidden');
    windowClose2.classList.add('pop-up-icon-open');
});

windowClose2.addEventListener("click", function (e) {
    windowPet33.classList.remove('pop-up-open');
    windowPet33.classList.add('hidden');
    windowPet33.classList.remove('dark');
    document.body.classList.remove('locks');
    windowClose2.classList.add('hidden');
    windowClose2.classList.remove('pop-up-icon-open');
});

buttonPet44.addEventListener("click", function (e) {
    windowPet44.classList.add('pop-up-open');
    windowPet44.classList.remove('hidden');
    windowPet44.classList.add('dark');
    document.body.classList.add('locks');
    windowClose2.classList.remove('hidden');
    windowClose2.classList.add('pop-up-icon-open');
});

windowClose2.addEventListener("click", function (e) {
    windowPet44.classList.remove('pop-up-open');
    windowPet44.classList.add('hidden');
    windowPet44.classList.remove('dark');
    document.body.classList.remove('locks');
    windowClose2.classList.add('hidden');
    windowClose2.classList.remove('pop-up-icon-open');
});

buttonPet55.addEventListener("click", function (e) {
    windowPet66.classList.add('pop-up-open');
    windowPet66.classList.remove('hidden');
    windowPet66.classList.add('dark');
    document.body.classList.add('locks');
    windowClose2.classList.remove('hidden');
    windowClose2.classList.add('pop-up-icon-open');
});

windowClose2.addEventListener("click", function (e) {
    windowPet66.classList.remove('pop-up-open');
    windowPet66.classList.add('hidden');
    windowPet66.classList.remove('dark');
    document.body.classList.remove('locks');
    windowClose2.classList.add('hidden');
    windowClose2.classList.remove('pop-up-icon-open');
});

buttonPet66.addEventListener("click", function (e) {
    windowPet88.classList.add('pop-up-open');
    windowPet88.classList.remove('hidden');
    windowPet88.classList.add('dark');
    document.body.classList.add('locks');
    windowClose2.classList.remove('hidden');
    windowClose2.classList.add('pop-up-icon-open');
});

windowClose2.addEventListener("click", function (e) {
    windowPet88.classList.remove('pop-up-open');
    windowPet88.classList.add('hidden');
    windowPet88.classList.remove('dark');
    document.body.classList.remove('locks');
    windowClose2.classList.add('hidden');
    windowClose2.classList.remove('pop-up-icon-open');
});

buttonPet77.addEventListener("click", function (e) {
    windowPet55.classList.add('pop-up-open');
    windowPet55.classList.remove('hidden');
    windowPet55.classList.add('dark');
    document.body.classList.add('locks');
    windowClose2.classList.remove('hidden');
    windowClose2.classList.add('pop-up-icon-open');
});

windowClose2.addEventListener("click", function (e) {
    windowPet55.classList.remove('pop-up-open');
    windowPet55.classList.add('hidden');
    windowPet55.classList.remove('dark');
    document.body.classList.remove('locks');
    windowClose2.classList.add('hidden');
    windowClose2.classList.remove('pop-up-icon-open');
});

buttonPet88.addEventListener("click", function (e) {
    windowPet77.classList.add('pop-up-open');
    windowPet77.classList.remove('hidden');
    windowPet77.classList.add('dark');
    document.body.classList.add('locks');
    windowClose2.classList.remove('hidden');
    windowClose2.classList.add('pop-up-icon-open');
});

windowClose2.addEventListener("click", function (e) {
    windowPet77.classList.remove('pop-up-open');
    windowPet77.classList.add('hidden');
    windowPet77.classList.remove('dark');
    document.body.classList.remove('locks');
    windowClose2.classList.add('hidden');
    windowClose2.classList.remove('pop-up-icon-open');
});

//pagination

let paginationButtonRight = document.getElementById('pagination-but-R');
let paginationButtonLeft = document.getElementById('pagination-but-L');
let paginationButtonCentre = document.getElementById('pagination-but-1');


let paginationButtonLeftLeft = document.getElementById('pagination-but-LL');
let paginationButtonRightRight = document.getElementById('pagination-but-RR');

let pagePagination = document.querySelectorAll('.ourfriends__card__pet .blocks')

let paginationButtonLeftImg = document.getElementById('pagination-but-L-Img');
let paginationButtonLeftLeftImg = document.getElementById('pagination-but-LL-Img');

let paginationButtonRightImg = document.getElementById('pagination-but-R-Img');
let paginationButtonRightRightImg = document.getElementById('pagination-but-RR-Img');



paginationButtonRight.onclick = function () {
    let i = 0;
    pagePagination[i].style.display = 'none';
    i++;

    if(i >= pagePagination.length) {
        i = 0;
    }
    pagePagination[i].style.display = 'block';
    paginationButtonLeft.disabled = false;
    paginationButtonLeft.classList.add('but-active');
    paginationButtonLeft.classList.remove('but-inactive');
    paginationButtonLeftImg.src = 'assets/svg/leftblack.svg';
    paginationButtonLeftLeft.disabled = false;
    paginationButtonLeftLeft.classList.add('but-active');
    paginationButtonLeftLeft.classList.remove('but-inactive');
    paginationButtonLeftLeftImg.src = 'assets/svg/leftleftblack.svg';
    paginationButtonCentre.textContent = '2';
    paginationButtonRight.disabled = true;
    paginationButtonRightRight.disabled = true;
    paginationButtonRight.classList.toggle('but-inactive');
    paginationButtonRightRight.classList.toggle('but-inactive');
    paginationButtonRightImg.src = 'assets/svg/rightsilver.svg';
    paginationButtonRightRightImg.src = 'assets/svg/rightrightsilver.svg';
}

paginationButtonLeft.onclick = function () {
    let i = 1;
    pagePagination[i].style.display = 'none';
    i--;

    if(i < 0) {
        i = pagePagination.length - 1;
    }
    pagePagination[i].style.display = 'block';
    paginationButtonCentre.textContent = '1';
    paginationButtonLeft.disabled = true;
    paginationButtonLeftLeft.disabled = true;
    paginationButtonLeft.classList.toggle('but-inactive');
    paginationButtonLeftLeft.classList.toggle('but-inactive');
    paginationButtonLeftImg.src = 'assets/svg/leftsilver.svg';
    paginationButtonLeftLeftImg.src = 'assets/svg/leftleftsilver.svg';
    paginationButtonRight.disabled = false;
    paginationButtonRightRight.disabled = false;
    paginationButtonRight.classList.toggle('but-inactive');
    paginationButtonRightRight.classList.toggle('but-inactive');
    paginationButtonRightImg.src = 'assets/svg/rightblack.svg';
    paginationButtonRightRightImg.src = 'assets/svg/rightrightblack.svg';
}


paginationButtonRightRight.onclick = function () {
    let i = 0;
    pagePagination[i].style.display = 'none';
    i++;

    if(i >= pagePagination.length) {
        i = 0;
    }
    pagePagination[i].style.display = 'block';
    paginationButtonLeft.disabled = false;
    paginationButtonLeft.classList.add('but-active');
    paginationButtonLeft.classList.remove('but-inactive');
    paginationButtonLeftImg.src = 'assets/svg/leftblack.svg';
    paginationButtonLeftLeft.disabled = false;
    paginationButtonLeftLeft.classList.add('but-active');
    paginationButtonLeftLeft.classList.remove('but-inactive');
    paginationButtonLeftLeftImg.src = 'assets/svg/leftleftblack.svg';
    paginationButtonCentre.textContent = '2';
    paginationButtonRight.disabled = true;
    paginationButtonRightRight.disabled = true;
    paginationButtonRight.classList.toggle('but-inactive');
    paginationButtonRightRight.classList.toggle('but-inactive');
    paginationButtonRightImg.src = 'assets/svg/rightsilver.svg';
    paginationButtonRightRightImg.src = 'assets/svg/rightrightsilver.svg';
}

paginationButtonLeftLeft.onclick = function () {
    let i = 1;
    pagePagination[i].style.display = 'none';
    i--;

    if(i < 0) {
        i = pagePagination.length - 1;
    }
    pagePagination[i].style.display = 'block';
    paginationButtonCentre.textContent = '1';
    paginationButtonLeft.disabled = true;
    paginationButtonLeftLeft.disabled = true;
    paginationButtonLeft.classList.toggle('but-inactive');
    paginationButtonLeftLeft.classList.toggle('but-inactive');
    paginationButtonLeftImg.src = 'assets/svg/leftsilver.svg';
    paginationButtonLeftLeftImg.src = 'assets/svg/leftleftsilver.svg';
    paginationButtonRight.disabled = false;
    paginationButtonRightRight.disabled = false;
    paginationButtonRight.classList.toggle('but-inactive');
    paginationButtonRightRight.classList.toggle('but-inactive');
    paginationButtonRightImg.src = 'assets/svg/rightblack.svg';
    paginationButtonRightRightImg.src = 'assets/svg/rightrightblack.svg';
}

//pop-up add

const buttonPet111 = document.getElementById('Pet111');

const windowPet111 = document.getElementById('pet111window');

const windowClose22 = document.getElementById('closeIcon22');

buttonPet111.addEventListener("click", function (e) {
    windowPet111.classList.add('pop-up-open');
    windowPet111.classList.remove('hidden');
    windowPet111.classList.add('dark');
    document.body.classList.add('locks');
    windowClose22.classList.remove('hidden');
    windowClose22.classList.add('pop-up-icon-open');
});

windowClose22.addEventListener("click", function (e) {
    windowPet111.classList.remove('pop-up-open');
    windowPet111.classList.add('hidden');
    windowPet111.classList.remove('dark');
    document.body.classList.remove('locks');
    windowClose22.classList.add('hidden');
    windowClose22.classList.remove('pop-up-icon-open');
});

const buttonPet222 = document.getElementById('Pet222');

const windowPet222 = document.getElementById('pet222window');

buttonPet222.addEventListener("click", function (e) {
    windowPet222.classList.add('pop-up-open');
    windowPet222.classList.remove('hidden');
    windowPet222.classList.add('dark');
    document.body.classList.add('locks');
    windowClose22.classList.remove('hidden');
    windowClose22.classList.add('pop-up-icon-open');
});

windowClose22.addEventListener("click", function (e) {
    windowPet222.classList.remove('pop-up-open');
    windowPet222.classList.add('hidden');
    windowPet222.classList.remove('dark');
    document.body.classList.remove('locks');
    windowClose22.classList.add('hidden');
    windowClose22.classList.remove('pop-up-icon-open');
});

const buttonPet333 = document.getElementById('Pet333');

const windowPet333 = document.getElementById('pet333window');

buttonPet333.addEventListener("click", function (e) {
    windowPet333.classList.add('pop-up-open');
    windowPet333.classList.remove('hidden');
    windowPet333.classList.add('dark');
    document.body.classList.add('locks');
    windowClose22.classList.remove('hidden');
    windowClose22.classList.add('pop-up-icon-open');
});

windowClose22.addEventListener("click", function (e) {
    windowPet333.classList.remove('pop-up-open');
    windowPet333.classList.add('hidden');
    windowPet333.classList.remove('dark');
    document.body.classList.remove('locks');
    windowClose22.classList.add('hidden');
    windowClose22.classList.remove('pop-up-icon-open');
});

const buttonPet444 = document.getElementById('Pet444');

const windowPet444 = document.getElementById('pet444window');

buttonPet444.addEventListener("click", function (e) {
    windowPet444.classList.add('pop-up-open');
    windowPet444.classList.remove('hidden');
    windowPet444.classList.add('dark');
    document.body.classList.add('locks');
    windowClose22.classList.remove('hidden');
    windowClose22.classList.add('pop-up-icon-open');
});

windowClose22.addEventListener("click", function (e) {
    windowPet444.classList.remove('pop-up-open');
    windowPet444.classList.add('hidden');
    windowPet444.classList.remove('dark');
    document.body.classList.remove('locks');
    windowClose22.classList.add('hidden');
    windowClose22.classList.remove('pop-up-icon-open');
});


const buttonPet555 = document.getElementById('Pet555');

const windowPet555 = document.getElementById('pet555window');

buttonPet555.addEventListener("click", function (e) {
    windowPet666.classList.add('pop-up-open');
    windowPet666.classList.remove('hidden');
    windowPet666.classList.add('dark');
    document.body.classList.add('locks');
    windowClose22.classList.remove('hidden');
    windowClose22.classList.add('pop-up-icon-open');
});

windowClose22.addEventListener("click", function (e) {
    windowPet666.classList.remove('pop-up-open');
    windowPet666.classList.add('hidden');
    windowPet666.classList.remove('dark');
    document.body.classList.remove('locks');
    windowClose22.classList.add('hidden');
    windowClose22.classList.remove('pop-up-icon-open');
});

const buttonPet666 = document.getElementById('Pet666');

const windowPet666 = document.getElementById('pet666window');

buttonPet666.addEventListener("click", function (e) {
    windowPet888.classList.add('pop-up-open');
    windowPet888.classList.remove('hidden');
    windowPet888.classList.add('dark');
    document.body.classList.add('locks');
    windowClose22.classList.remove('hidden');
    windowClose22.classList.add('pop-up-icon-open');
});

windowClose22.addEventListener("click", function (e) {
    windowPet888.classList.remove('pop-up-open');
    windowPet888.classList.add('hidden');
    windowPet888.classList.remove('dark');
    document.body.classList.remove('locks');
    windowClose22.classList.add('hidden');
    windowClose22.classList.remove('pop-up-icon-open');
});

const buttonPet777 = document.getElementById('Pet777');

const windowPet777 = document.getElementById('pet777window');

const buttonPet888 = document.getElementById('Pet888');

const windowPet888 = document.getElementById('pet888window');

buttonPet777.addEventListener("click", function (e) {
    windowPet555.classList.add('pop-up-open');
    windowPet555.classList.remove('hidden');
    windowPet555.classList.add('dark');
    document.body.classList.add('locks');
    windowClose22.classList.remove('hidden');
    windowClose22.classList.add('pop-up-icon-open');
});

windowClose22.addEventListener("click", function (e) {
    windowPet555.classList.remove('pop-up-open');
    windowPet555.classList.add('hidden');
    windowPet555.classList.remove('dark');
    document.body.classList.remove('locks');
    windowClose22.classList.add('hidden');
    windowClose22.classList.remove('pop-up-icon-open');
});

buttonPet888.addEventListener("click", function (e) {
    windowPet777.classList.add('pop-up-open');
    windowPet777.classList.remove('hidden');
    windowPet777.classList.add('dark');
    document.body.classList.add('locks');
    windowClose22.classList.remove('hidden');
    windowClose22.classList.add('pop-up-icon-open');
});

windowClose22.addEventListener("click", function (e) {
    windowPet777.classList.remove('pop-up-open');
    windowPet777.classList.add('hidden');
    windowPet777.classList.remove('dark');
    document.body.classList.remove('locks');
    windowClose22.classList.add('hidden');
    windowClose22.classList.remove('pop-up-icon-open');
});
