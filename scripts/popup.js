const htmlElement = document.querySelector("html");
const popupWrapperElement = document.querySelector(".popup-wrapper");
const popupElement = document.querySelector(".popup");
const directionButtonElement = document.querySelector("button.direction");
const closeButtonElement = document.querySelector("button.cross");

const closePopup = () => {
  htmlElement.classList.remove("popup-is-opened");
  popupWrapperElement.classList.remove("active");
};

directionButtonElement.addEventListener("click", () => {
  htmlElement.classList.add("popup-is-opened");
  popupWrapperElement.classList.add("active");
});

popupElement.addEventListener("click", (event) => {
  event.stopPropagation();
});

popupWrapperElement.addEventListener("click", closePopup);

closeButtonElement.addEventListener("click", closePopup);
