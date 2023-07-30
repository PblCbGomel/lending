const serviceData = [
  {
    name: "Черная и цветная печать",
    imageSrc: "./assets/services/img-1.png",
  },
  {
    name: "Ксерокопия",
    imageSrc: "./assets/services/img-2.png",
  },
  {
    name: "Сканирование",
    imageSrc: "./assets/services/img-3.png",
  },
  {
    name: "Ламинирование",
    imageSrc: "./assets/services/img-4.png",
  },
  {
    name: "Прошивка перфобиндером на пластиковую пружину",
    imageSrc: "./assets/services/img-5.png",
  },
  {
    name: "Запись информации на CD-R диск",
    imageSrc: "./assets/services/img-6.png",
  },
  {
    name: "Печать и прошивка дипломов ",
    imageSrc: "./assets/services/img-7.png",
  },
];

const serviceContainer = document.querySelector(".services-wrapper");

serviceData.forEach((card) => {
  const img = document.createElement("img");
  img.src = card.imageSrc;
  img.alt = card.name;
  img.classList.add("service-img");

  const figcaption = document.createElement("figcaption");
  figcaption.classList.add("service-figcaption");

  const spanFigcaption = document.createElement("h6");
  spanFigcaption.innerHTML = card.name;
  figcaption.appendChild(spanFigcaption);

  const figure = document.createElement("figure");
  figure.classList.add("service-card");
  figure.appendChild(img);
  figure.appendChild(figcaption);

  serviceContainer.appendChild(figure);
});
