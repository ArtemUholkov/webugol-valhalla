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

const slider = document.querySelector('.mySwiperm');
// const sliderSlides = document.querySelectorAll('.main_slide');
// console.log(slider);

// slider.addEventListener('click', (e) => {
//   console.log(e.target);
//   if (e.target.classList.contains('main_slide')) {
//     sliderSlides.forEach((item) => {
//       item.classList.remove('swiper-slide-active');
//     });

//     e.target.classList.add('swiper-slide-active');
//   }
//   slider.update();
// });
// const fbslides = document.querySelectorAll('#fb');
// const fbitems = document.querySelector('.main_items_facebook');
// const picturesWrapper = document.querySelector('.main_items_wrapper');

// var swiper = new Swiper('.mySwiperm', {
//   slidesPerView: 'auto',
//   slidesOffsetBefore: 370,
//   loop: true,
//   autoplay: {
//     delay: 4000,
//   },

//   slideToClickedSlide: true,
//   initialSlide: 1,
//   spaceBetween: 80,
// });

// const thirdImg = document.querySelector('.trd_img');
// const secondImg = document.querySelector('.snd_img');
// const firstImg = document.querySelector('.fst_img');

// swiper.on('activeIndexChange', () => {
//   for (let i = 0; i < fbslides.length; i++) {
//     if (fbslides[i].classList.contains('swiper-slide-active')) {
//       fbitems.classList.add('images_block_appear');
//       thirdImg.classList.add('trd_move');
//       secondImg.classList.add('snd_move');
//       firstImg.classList.add('fst_move');
//       break;
//     } else {
//       fbitems.classList.remove('images_block_appear');
//       thirdImg.classList.remove('trd_move');
//       secondImg.classList.remove('snd_move');
//       firstImg.classList.remove('fst_move');
//     }
//   }
// });
