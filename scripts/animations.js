const animatedItemsUp = document.querySelectorAll(".animated-item-up");
const animatedItemsLeft = document.querySelectorAll(".animated-item-left");
const animatedItemsDown = document.querySelectorAll(".animated-item-down");
const animatedItemsRight = document.querySelectorAll(".animated-item-right");

window.addEventListener("scroll", onScrollUp);
window.addEventListener("scroll", onScrollLeft);
window.addEventListener("scroll", onScrollDown);
window.addEventListener("scroll", onScrollRight);

function onScrollUp() {
  animatedItemsUp.forEach((item) => {
    const itemHeight = item.offsetHeight;
    const itemOffset = offset(item).top;
    const animetedStart = 4;

    const animetedPoint =
      itemHeight > window.innerHeight
        ? window.innerHeight - window.innerHeight / animetedStart
        : window.innerHeight - itemHeight / animetedStart;

    if (
      pageYOffset > itemOffset - animetedPoint + 100 &&
      pageYOffset < itemOffset - itemHeight + 100
    ) {
      item.classList.add("active");
      item.classList.remove("inactive-up");
    } else {
      item.classList.remove("active");
      item.classList.add("inactive-up");
    }
  });
}

function onScrollLeft() {
  animatedItemsLeft.forEach((item) => {
    const itemHeight = item.offsetHeight;
    const itemOffset = offset(item).top;
    const animetedStart = 4;

    const animetedPoint =
      itemHeight > window.innerHeight
        ? window.innerHeight - window.innerHeight / animetedStart
        : window.innerHeight - itemHeight / animetedStart;

    if (pageYOffset > itemOffset - animetedPoint) {
      item.classList.add("active");
      item.classList.remove("inactive-left");
    } else {
      item.classList.remove("active");
      item.classList.add("inactive-left");
    }
  });
}

function onScrollDown() {
  animatedItemsDown.forEach((item) => {
    const itemHeight = item.offsetHeight;
    const itemOffset = offset(item).top;
    const animetedStart = 4;

    const animetedPoint =
      itemHeight > window.innerHeight
        ? window.innerHeight - window.innerHeight / animetedStart
        : window.innerHeight - itemHeight / animetedStart;

    if (
      pageYOffset > itemOffset - animetedPoint + 50 &&
      pageYOffset < itemOffset - itemHeight + 50
    ) {
      item.classList.add("active");
      item.classList.remove("inactive-down");
    }
  });
}

function onScrollRight() {
  animatedItemsRight.forEach((item) => {
    const itemHeight = item.offsetHeight;
    const itemOffset = offset(item).top;
    const animetedStart = 4;

    const animetedPoint =
      itemHeight > window.innerHeight
        ? window.innerHeight - window.innerHeight / animetedStart
        : window.innerHeight - itemHeight / animetedStart;

    if (pageYOffset > itemOffset - animetedPoint) {
      item.classList.add("active");
      item.classList.remove("inactive-right");
    } else {
      item.classList.remove("active");
      item.classList.add("inactive-right");
    }
  });
}

function offset(element) {
  const rect = element.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  return { top: scrollTop + rect.top, left: scrollLeft + rect.left };
}

onScrollUp();
onScrollLeft();
onScrollDown();
onScrollRight();
