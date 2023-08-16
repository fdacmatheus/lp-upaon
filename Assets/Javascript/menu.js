function clickMenu() {
  if (nav.style.display == "block") {
    menu.style.display = "none";
    nav.style.display = "none";
    burguer.src = "./Assets/Img/Icons/menu-hamburguer.svg";
  } else {
    menu.style.display = "flex";
    menu.style.flexDirection = "column";
    nav.style.display = "block";
    burguer.src = "./Assets/Img/Icons/menu-close.svg";
  }
}
