import Swiper, { Navigation, EffectFade } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/modules/effect-fade/effect-fade.min.css";

const swiperImage = new Swiper(".swiper.hero-image-swiper", {
  modules: [Navigation, EffectFade],
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  speed: 1000,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  loop: true,
});

swiperImage.init();

const swiperText = new Swiper(".swiper .hero-text-swiper", {
  modules: [Navigation, EffectFade],
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  speed: 1000,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  loop: true,
});

swiperText.init();
