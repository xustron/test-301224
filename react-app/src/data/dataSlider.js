const settingsSlider = {
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  slidesPerView: 5,
  speed: 1100,
  navigation: {
    nextEl: ".xu-navigation__next",
    prevEl: ".xu-navigation__prev",
  },
  mousewheel: {
    invert: false,
  },
};

const dataSlider = [
  {
    title: "Амфора VI век",
    img: "/img/items/5.png",
    model: "amfora",
  },
  {
    title: "Шкатулка с пулями",
    img: "/img/items/1.png",
    model: "box",
  },
  { title: "Амфора XI век", img: "/img/items/2.png", model: "box" },
  { title: "Пушечные ядра", img: "/img/items/4.png", model: "box" },
  { title: "Солдатская шинель", img: "/img/items/3.png", model: "box" },
];

export { dataSlider, settingsSlider };
