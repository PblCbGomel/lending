const carousel = document.querySelector("[data-target='carousel']");
const leftButton = document.querySelector("[data-action='slideLeft']");
const rightButton = document.querySelector("[data-action='slideRight']");

const goodsInfo = [
  {
    imageSrc: "./assets/goods/img-1.png",
    name: "Канцелярские товары",
  },
  {
    imageSrc: "./assets/goods/img-2.png",
    name: "Товары для офиса",
  },
  {
    imageSrc: "./assets/goods/img-3.png",
    name: "Бумажно-беловые товары",
  },
  {
    imageSrc: "./assets/goods/img-4.png",
    name: "Товары для школы",
  },
  {
    imageSrc: "./assets/goods/img-5.png",
    name: "Товары для детского творчества",
  },
  {
    imageSrc: "./assets/goods/img-6.png",
    name: "Товары для художников",
  },
  {
    imageSrc: "./assets/goods/img-7.png",
    name: "Папки, портфели",
  },
  {
    imageSrc: "./assets/goods/img-8.png",
    name: "Элементы питания",
  },
  {
    imageSrc: "./assets/goods/img-9.png",
    name: "Сувенирная продукция",
  },
];

goodsInfo.forEach((info) => {
  const img = document.createElement("img");
  img.src = info.imageSrc;
  img.alt = info.name;

  const figcaption = document.createElement("figcaption");
  figcaption.innerHTML = info.name;

  const figure = document.createElement("figure");
  figure.classList.add("card-img");
  figure.appendChild(img);
  figure.appendChild(figcaption);

  const elem = document.createElement("li");
  elem.classList.add("card");
  elem.appendChild(figure);

  carousel.appendChild(elem);
});

const card = carousel.querySelector(".card");

const carouselWidth = carousel.offsetWidth;
const cardStyle = card.currentStyle || window.getComputedStyle(card);
const cardMarginRight = Number(cardStyle.marginRight.match(/\d+/g)[0]);

const cardCount = carousel.querySelectorAll(".card").length;
const cardWidth = card.offsetWidth;

let offsetCarousel = 0;
const maxX = -(
  (cardCount / 3) * carouselWidth +
  cardMarginRight * (cardCount / 3) -
  carouselWidth -
  cardMarginRight
);

leftButton.addEventListener("click", function () {
  if (offsetCarousel !== 0) {
    offsetCarousel += cardWidth + cardMarginRight;
  } else {
    offsetCarousel = maxX;
  }
  carousel.style.transform = `translateX(${offsetCarousel}px)`;
});

rightButton.addEventListener("click", function () {
  if (offsetCarousel !== maxX) {
    offsetCarousel -= cardWidth + cardMarginRight;
  } else {
    offsetCarousel = 0;
  }
  carousel.style.transform = `translateX(${offsetCarousel}px)`;
});
