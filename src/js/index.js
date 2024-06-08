import '../scss/style.scss'
import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'

const swiper = new Swiper('.swiper', {
  spaceBetween: 16,
  slidesPerView: 'auto',
  freeMode: true,
  modules: [Pagination],

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },

  breakpoints: {
    320: {
      enabled: true,
      spaceBetween: 16
    },

    768: {
      enabled: false,
      spaceBetween: 24
    },

    1120: {
      spaceBetween: 32,
      enabled: false
    }
  }
})

/* Обработчик кнопки "бренды". */

let btnShowMore = document.querySelector('.button-showmore')
let swiperMore = document.querySelector('.brands-wrapper')

btnShowMore.addEventListener('click', function () {
  if (btnShowMore.innerHTML !== 'Скрыть') {
    btnShowMore.innerHTML = 'Скрыть'
    btnShowMore.classList.add('button-showmore--hidden')
    swiperMore.classList.add('swiper-wrapper--visible')
  } else {
    btnShowMore.innerHTML = 'Показать все'
    btnShowMore.classList.remove('button-showmore--hidden')
    swiperMore.classList.remove('swiper-wrapper--visible')
  }
})

/* Обработчик кнопки "техника". */

let btnElectronics = document.querySelector('.electronics__btn')
let electronicsMore = document.querySelector('.electronics-wrapper')

btnElectronics.addEventListener('click', function () {
  if (btnElectronics.innerHTML !== 'Скрыть') {
    btnElectronics.innerHTML = 'Скрыть'
    btnElectronics.classList.add('electronics__btn--hidden')
    electronicsMore.classList.add('electronics-wrapper--visible')
  } else {
    btnElectronics.innerHTML = 'Показать все'
    btnElectronics.classList.remove('electronics__btn--hidden')
    electronicsMore.classList.remove('electronics-wrapper--visible')
  }
})

/* Обработчик "бургера" */

let burger = document.querySelector('.burger')
let menu = document.querySelector('.menu')
let burgerOff = document.querySelector('.burger-off')
let main = document.querySelector('.main')
let header = document.querySelector('.header')
let background = document.querySelector('.overlay')

burger.addEventListener('click', function () {
  menu.classList.add('menu-toggle')
  background.classList.add('overlay-show')
})

burgerOff.addEventListener('click', function () {
  menu.classList.remove('menu-toggle')
  background.classList.remove('overlay-show')
})

background.addEventListener('click', function () {
  menu.classList.remove('menu-toggle')
  background.classList.remove('overlay-show')
  feedback.classList.remove('active')
  callback.classList.remove('active')
})

/* Обработчик кнопки "Обратная связь" */

let feedbackBtn = document.querySelectorAll('.feedback')
let feedback = document.querySelector('.modal-feedback')
let feedbackBtnOff = document.querySelector('.feedback-form__btn-off')

feedbackBtn.forEach(function (button) {
  button.addEventListener('click', function () {
    menu.classList.remove('menu-toggle')
    background.classList.add('overlay-show')
    feedback.classList.add('active')
  })
})

feedbackBtnOff.addEventListener('click', function () {
  background.classList.remove('overlay-show')
  feedback.classList.remove('active')
})

/* Обработчик кнопки "Заказать звонок" */

let callbackBtn = document.querySelectorAll('.callback')
let callback = document.querySelector('.modal-callback')
let callbackBtnOff = document.querySelector('.callback-form__btn-off')

callbackBtn.forEach(function (button) {
  button.addEventListener('click', function () {
    menu.classList.remove('menu-toggle')
    background.classList.add('overlay-show')
    callback.classList.add('active')
  })
})

callbackBtnOff.addEventListener('click', function () {
  background.classList.remove('overlay-show')
  callback.classList.remove('active')
})

/* Читать далее */

let conteinerText = document.querySelector('.content__text-extra2')
let conteinerBtn = document.querySelector('.content__link')
let conteinerBtnExpand = document.querySelector('.link-image')

conteinerBtn.addEventListener('click', function () {
  if (conteinerBtn.innerHTML !== 'Скрыть') {
    conteinerBtn.innerHTML = 'Скрыть'
    conteinerText.classList.add('content__text--show')
  } else {
    conteinerBtn.innerHTML = 'Читать далее'
    conteinerText.classList.remove('content__text--show')
  }
})
