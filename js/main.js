"use strict";

document.addEventListener("DOMContentLoaded", () => {
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
    },
  });
  // SWIPER REVIEWS

  // HEADER SHOW/HIDE ON SCROLL
  const header = document.querySelector("header");
  let scrollTopValue = window.scrollY;
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
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
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  });
  // SWIPER PRODUCTS

  // SCROLL TO TOP 
  const scrollToTop = document.querySelector(".scroll-to-top");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 1200) {
      scrollToTop.classList.add("shown")
    } else {
      scrollToTop.classList.remove("shown")
    }
  });
  scrollToTop.addEventListener("click", () => {
    window.scrollTo(0, 0)
  })
  // SCROLL TO TOP
});
