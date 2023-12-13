AOS.init();

const burger = document.querySelector('#burger');
const popup = document.querySelector('#popup');
const popupSlide = document.querySelector('#popupSlide');
const sliderItem = document.querySelectorAll('.our_requirements_content_item');
const sliderPhoto = document.querySelector('.our_requirements_img');
const body = document.body;
const casualLogo = document.querySelector('.logo-white');
const colorLogo = document.querySelector('.logo-color');

burger.addEventListener('click', burgerHandler);
popup.addEventListener('click', (e) => {
  burgerHandler(e);
});

sliderItem.forEach((e) => {
  e.addEventListener('click', () => {
    setImage(e, sliderItem);
  });
});

function burgerHandler(e) {
  if (popup.classList.contains('open')) {
    popup.classList.add('close');
    body.classList.remove('noscroll');
    popupSlide.classList.add('slideout');
    casualLogo.classList.remove('logo-hide');
    colorLogo.classList.add('logo-hide');
    setTimeout(() => {
      casualLogo.classList.remove('logo-hide');
      colorLogo.classList.add('logo-hide');
      // colorLogo.classList.remove('logo-hide');
      // casualLogo.classList.add('logo-hide');
    }, 270);
    setTimeout(() => {
      popup.classList.remove('close');
      popup.classList.remove('open');
      popupSlide.classList.remove('slideout');
      popupSlide.classList.remove('slidein');
    }, 270);
  } else {
    body.classList.add('noscroll');
    popup.classList.add('open');
    popupSlide.classList.add('slidein');
    setTimeout(() => {
      //   casualLogo.classList.remove('logo-hide');
      // colorLogo.classList.add('logo-hide');
      colorLogo.classList.remove('logo-hide');
      casualLogo.classList.add('logo-hide');
    }, 270);
  }
  burger.classList.toggle('active');
}

function scrollToNumbers() {
  document.querySelector('#numbers').scrollIntoView(true);
}
function scrollToSolutions() {
  document.querySelector('#solutions').scrollIntoView(true);
}
function scrollToProcess() {
  document.querySelector('#process').scrollIntoView(true);
}
function scrollToReviews() {
  document.querySelector('#reviews').scrollIntoView(true);
}
function scrollToTeam() {
  document.querySelector('#team').scrollIntoView(true);
}
function scrollToSub() {
  document.querySelector('#sub').scrollIntoView(true);
}
let copiedText = document.querySelectorAll('#trythis');
copiedText.forEach((elem) => elem.addEventListener('click', () => copyText(elem)));
console.log(colorLogo);

const picturesWrapper = document.querySelector('.mob_items_wrapper');

const fbslides = document.querySelectorAll('#fb');
const fbitems = document.querySelector('.mob_fb');

const ggslides = document.querySelectorAll('#gg');
const ggitems = document.querySelector('.mob_gg');

const emslides = document.querySelectorAll('#em');
const emitems = document.querySelector('.mob_em');

const lsslides = document.querySelectorAll('#ls');
const lsitems = document.querySelector('.mob_ls');

const seslides = document.querySelectorAll('#se');
const seitems = document.querySelector('.mob_se');

const fbsecondImg = document.querySelector('.snd_img');
const fbfirstImg = document.querySelector('.fst_img');

const ggsecondImg = document.querySelector('.ggsnd_img');
const ggfirstImg = document.querySelector('.ggfst_img');

const emsecondImg = document.querySelector('.em_img2');
const emfirstImg = document.querySelector('.em_img1');

const lssecondImg = document.querySelector('.lssnd_img');
const lsfirstImg = document.querySelector('.lsfst_img');

const sesecondImg = document.querySelector('.se_img2');
const sefirstImg = document.querySelector('.se_img1');

const seoBut = document.querySelector('.seo_but');
const fbBut = document.querySelector('.fb_but');
const lsBut = document.querySelector('.ls_but');
const ggBut = document.querySelector('.gg_but');
const emBut = document.querySelector('.em_but');

seoBut.addEventListener('click', () => {
  seoBut.classList.add('superactive');
  lsBut.classList.remove('superactive');
  ggBut.classList.remove('superactive');
  emBut.classList.remove('superactive');
  fbBut.classList.remove('superactive');

  ggitems.classList.remove('images_block_appear');
  ggitems.classList.add('display_none');

  lsitems.classList.remove('images_block_appear');
  lsitems.classList.add('display_none');

  fbitems.classList.remove('images_block_appear');
  fbitems.classList.add('display_none');

  emitems.classList.remove('images_block_appear');
  emitems.classList.add('display_none');

  seitems.classList.remove('display_none');
  setTimeout(() => {
    seitems.classList.add('images_block_appear');

    sesecondImg.classList.add('snd_move');
    sefirstImg.classList.add('fst_move');
  }, 10);
});
fbBut.addEventListener('click', () => {
  fbBut.classList.add('superactive');
  lsBut.classList.remove('superactive');
  ggBut.classList.remove('superactive');
  emBut.classList.remove('superactive');
  seoBut.classList.remove('superactive');

  ggitems.classList.remove('images_block_appear');
  ggitems.classList.add('display_none');

  lsitems.classList.remove('images_block_appear');
  lsitems.classList.add('display_none');

  seitems.classList.remove('images_block_appear');
  seitems.classList.add('display_none');

  emitems.classList.remove('images_block_appear');
  emitems.classList.add('display_none');

  fbitems.classList.remove('display_none');
  setTimeout(() => {
    fbitems.classList.add('images_block_appear');

    fbsecondImg.classList.add('snd_move');
    fbfirstImg.classList.add('fst_move');
  }, 10);
});
lsBut.addEventListener('click', () => {
  lsBut.classList.add('superactive');
  fbBut.classList.remove('superactive');
  ggBut.classList.remove('superactive');
  emBut.classList.remove('superactive');
  seoBut.classList.remove('superactive');

  ggitems.classList.remove('images_block_appear');
  ggitems.classList.add('display_none');

  seitems.classList.remove('images_block_appear');
  seitems.classList.add('display_none');

  fbitems.classList.remove('images_block_appear');
  fbitems.classList.add('display_none');

  emitems.classList.remove('images_block_appear');
  emitems.classList.add('display_none');

  lsitems.classList.remove('display_none');
  setTimeout(() => {
    lsitems.classList.add('images_block_appear');

    lssecondImg.classList.add('snd_move');
    lsfirstImg.classList.add('fst_move');
  }, 10);
});
emBut.addEventListener('click', () => {
  emBut.classList.add('superactive');
  fbBut.classList.remove('superactive');
  ggBut.classList.remove('superactive');
  lsBut.classList.remove('superactive');
  seoBut.classList.remove('superactive');

  ggitems.classList.remove('images_block_appear');
  ggitems.classList.add('display_none');

  seitems.classList.remove('images_block_appear');
  seitems.classList.add('display_none');

  fbitems.classList.remove('images_block_appear');
  fbitems.classList.add('display_none');

  lsitems.classList.remove('images_block_appear');
  lsitems.classList.add('display_none');

  emitems.classList.remove('display_none');
  setTimeout(() => {
    emitems.classList.add('images_block_appear');

    emsecondImg.classList.add('snd_move');
    emfirstImg.classList.add('fst_move');
  }, 10);
});
ggBut.addEventListener('click', () => {
  ggBut.classList.add('superactive');
  fbBut.classList.remove('superactive');
  emBut.classList.remove('superactive');
  lsBut.classList.remove('superactive');
  seoBut.classList.remove('superactive');

  emitems.classList.remove('images_block_appear');
  emitems.classList.add('display_none');

  seitems.classList.remove('images_block_appear');
  seitems.classList.add('display_none');

  fbitems.classList.remove('images_block_appear');
  fbitems.classList.add('display_none');

  lsitems.classList.remove('images_block_appear');
  lsitems.classList.add('display_none');

  ggitems.classList.remove('display_none');
  setTimeout(() => {
    ggitems.classList.add('images_block_appear');

    ggsecondImg.classList.add('snd_move');
    ggfirstImg.classList.add('fst_move');
  }, 10);
});

const allbut = document.querySelectorAll('.text_detecrot');
let int1ID;
let int2ID;
let int3ID;
let int4ID;
let int5ID;
let tim1ID;
let tim2ID;
let tim3ID;
let tim4ID;
let tim5ID;
tim1ID = setTimeout(() => {
  allbut[0].click();
  int1ID = setInterval(() => {
    allbut[0].click();
  }, 20000);
}, 0);

tim2ID = setTimeout(() => {
  allbut[1].click();
  int2ID = setInterval(() => {
    allbut[1].click();
  }, 20000);
}, 4000);

tim3ID = setTimeout(() => {
  allbut[2].click();
  int3ID = setInterval(() => {
    allbut[2].click();
  }, 20000);
}, 8000);

tim4ID = setTimeout(() => {
  allbut[3].click();
  int4ID = setInterval(() => {
    allbut[3].click();
  }, 20000);
}, 12000);

tim5ID = setTimeout(() => {
  allbut[4].click();
  int5ID = setInterval(() => {
    allbut[4].click();
  }, 20000);
}, 15999);

const detect = document.querySelector('.wrap_detectors');

detect.addEventListener('mousedown', () => {
  clearInterval(int1ID);
  clearInterval(int2ID);
  clearInterval(int3ID);
  clearInterval(int4ID);
  clearInterval(int5ID);
  clearTimeout(tim1ID);
  clearTimeout(tim2ID);
  clearTimeout(tim3ID);
  clearTimeout(tim4ID);
  clearTimeout(tim5ID);
});
