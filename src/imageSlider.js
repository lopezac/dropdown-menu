import "./imgslider-style.css";

const imgSlider = () => {
  // const slider = document.querySelector(".slider");
  const images = document.querySelectorAll(".slider > .images > .img");
  const arrowBtns = document.querySelectorAll(".slider > .arrow-btns > div");
  const dotBtnsDiv = document.querySelector(".slider > .dot-btns");

  const start = () => {
    listenArrows();
    createDotBtns();
    listenDotBtns();
  };

  const createDotBtns = () => {
    for (let i = 0; i < images.length; i++) {
      const dotBtn = document.createElement("div");
      dotBtnsDiv.appendChild(dotBtn);
    }
    checkDot(getDotBtns()[0]);
  };

  const checkDot = (dot) => {
    dot.classList.toggle("checked");
  };

  const listenDotBtns = () => {
    const dotBtns = getDotBtns();
    for (let i = 0; i < dotBtns.length; i++) {
      const dotBtn = dotBtns[i];
      dotBtn.addEventListener("click", changeImg.bind(this, i));
    }
  };

  const changeImg = (idx, e) => {
    const dotBtn = e.target;
    const checkedDotBtn = getCheckedBtn();
    dotBtn.classList.toggle("checked");
    checkedDotBtn.classList.toggle("checked");

    const visibleImg = findVisibleImg();
    toggleVisible(visibleImg);
    const newVisibleImg = images[idx];
    toggleVisible(newVisibleImg);
  };

  const getDotBtns = () => {
    return dotBtnsDiv.querySelectorAll("div");
  };

  const getCheckedBtn = () => {
    const dotBtns = getDotBtns();
    for (const dotBtn of dotBtns) {
      if (dotBtn.classList.contains("checked")) return dotBtn;
    }
  };

  const listenArrows = () => {
    for (const arrowBtn of arrowBtns) {
      arrowBtn.addEventListener("click", slideImg.bind(this));
    }
  };

  const slideImg = (e) => {
    const arrow = e.target;
    const visibleImg = findVisibleImg();
    toggleVisible(visibleImg);
    const newVisibleImg = findNextImg(arrow, visibleImg);
    toggleVisible(newVisibleImg);

    const checkedDotBtn = getCheckedBtn();
    checkedDotBtn.classList.toggle("checked");
    const imageIdx = getImageIdx(newVisibleImg);
    const dotBtn = getDotBtns()[imageIdx];
    dotBtn.classList.toggle("checked");
  };

  const getImageIdx = (toFindImg) => {
    for (let i = 0; i < images.length; i++) {
      const img = images[i];
      if (img === toFindImg) return i;
    }
  };

  const findNextImg = (arrow, visibleImg) => {
    if (arrow.classList.contains("arrow-right")) {
      const nextElement = visibleImg.nextElementSibling;
      if (nextElement) return nextElement;
      else return images[0];
    } else {
      const previousElement = visibleImg.previousElementSibling;
      if (previousElement) return previousElement;
      else return images[images.length - 1];
    }
  };

  const toggleVisible = (img) => {
    img.classList.toggle("visible");
  };

  const findVisibleImg = () => {
    for (const img of images) {
      if (img.classList.contains("visible")) return img;
    }
  };

  start();
};

imgSlider();

export default imgSlider;
