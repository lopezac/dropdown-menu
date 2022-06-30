import "./ddm-style.css";

const dropdownMenu = (menu, element, action = "click") => {
  const start = () => {
    toggleMenuVisibility(menu);
    element.addEventListener(action, toggleMenuVisibility.bind(this, menu));
    element.appendChild(menu);
  };

  const toggleMenuVisibility = (menu) => {
    menu.classList.toggle("hidden");
  };

  start();
};

const menu = document.querySelector(".menu");
const btn = document.querySelector(".menu-btn");

dropdownMenu(menu, btn, "click");

export default dropdownMenu;
