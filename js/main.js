"use strict";

document.addEventListener("DOMContentLoaded", () => {
  // INITIALIZE AOS
  AOS.init({
    disable: window.innerWidth < 1199,
    duration: 600,
    once: false,
  });
  // INITIALIZE AOS

  // SWIPER CONTINUOUS
  const swiper = new Swiper(".swiper-continuous", {
    loop: true,
    spaceBetween: 100,
    autoplay: {
      delay: 0,
      disableOnInteraction: true,
    },
    slidesPerView: "auto",
    speed: 5000,
    grabCursor: false,
    mousewheelControl: false,
    keyboardControl: false,
    simulateTouch: false,
    allowTouchMove: false,
  });
  // SWIPER CONTINUOUS

  // SWIPER HERO
  const swiperHero = new Swiper(".swiper-hero", {
    loop: true,
    spaceBetween: false,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    speed: 800,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  // SWIPER HERO

  // SWIPER BRANDS
  const swiperBrands = new Swiper(".swiper-brands", {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 6,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    speed: 5000,
    grabCursor: false,
    mousewheelControl: false,
    keyboardControl: false,
    simulateTouch: false,
    allowTouchMove: false,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // when window width is >= 576px
      576: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      // when window width is >= 992px
      992: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      // when window width is >= 1200px
      1200: {
        slidesPerView: 6,
        spaceBetween: 20,
      },
    },
  });
  // SWIPER BRANDS

  // SWIPER REVIEWS
  const swiperReviews = new Swiper(".swiper-reviews", {
    spaceBetween: false,
    slidesPerView: 3,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
      draggable: true,
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: false,
      },
      // when window width is >= 576px
      576: {
        slidesPerView: 2,
        spaceBetween: false,
      },
      // when window width is >= 992px
      992: {
        slidesPerView: 3,
        spaceBetween: false,
      },
      // when window width is >= 2000px
      2000: {
        slidesPerView: 5,
        spaceBetween: false,
      },
    },
  });
  // SWIPER REVIEWS

  // HEADER SHOW/HIDE ON SCROLL
  const header = document.querySelector("header");
  let scrollTopValue = window.scrollY;
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200 && window.innerWidth > 1199) {
      if (scrollTopValue < window.scrollY) {
        header.classList.remove("shown");
      } else {
        header.classList.add("shown");
      }
      scrollTopValue = window.scrollY;
    }
  });
  // HEADER SHOW/HIDE ON SCROLL

  // SWIPER PRODUCTS
  const swiperProducts = new Swiper(".swiper-products", {
    spaceBetween: 20,
    slidesPerView: 4,
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
      draggable: true,
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // when window width is >= 576px
      576: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // when window width is >= 992px
      992: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      // when window width is >= 1200px
      1200: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });
  // SWIPER PRODUCTS

  // SCROLL TO TOP
  const scrollToTop = document.querySelector(".scroll-to-top");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 1200) {
      scrollToTop.classList.add("shown");
    } else {
      scrollToTop.classList.remove("shown");
    }
  });
  scrollToTop.addEventListener("click", () => {
    window.scrollTo(0, 0);
  });
  // SCROLL TO TOP

  // MOBILE NAV
  const navOpener = document.querySelector(".nav-opener");
  const navCloser = document.querySelector(".nav-closer");
  const navMobile = document.querySelector(".nav-mobile");
  navOpener.addEventListener("click", () => {
    navMobile.classList.add("shown");
    document.body.classList.add("navbar-shown");
  });
  navCloser.addEventListener("click", () => {
    navMobile.classList.remove("shown");
    document.body.classList.remove("navbar-shown");
  });
  // MOBILE NAV

  // SWIPER PRODUCT GALLERY
  const swiperProductThumbnails = new Swiper(".swiper-product-thumbnails", {
    spaceBetween: 10,
    slidesPerView: 5.5,
    freeMode: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  const swiperProductGallery = new Swiper(".swiper-product-gallery", {
    spaceBetween: false,
    thumbs: {
      swiper: swiperProductThumbnails,
    },
  });
  // SWIPER PRODUCT GALLERY

  // ELEVATE ZOOM
  $(".zoom-image").ezPlus({
    zoomType: "inner",
    cursor: "crosshair",
    easing: "ease-out",
  });
  // ELEVATE ZOOM

  // QUANTITY NUMBER SPINNER
  const btnDecreaseQuantity = document.querySelector(".btn-decrease-quantity");
  const btnIncreaseQuantity = document.querySelector(".btn-increase-quantity");
  const inputQunatity = document.querySelector(
    ".quantity-number-spinner input"
  );
  btnDecreaseQuantity.addEventListener("click", () => {
    if (inputQunatity.value > 1) {
      inputQunatity.value--;
    }
  });
  btnIncreaseQuantity.addEventListener("click", () => {
    inputQunatity.value++;
  });
  // QUANTITY NUMBER SPINNER
});
