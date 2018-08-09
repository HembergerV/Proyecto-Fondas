var menu = document.getElementById("header");
var altura = menu.offsetTop;

window.addEventListener("scroll", function () {
    if (window.pageYOffset > altura) {
        menu.classList.add("sticky");
        menu.classList.remove("contenedor");

    } else {
        menu.classList.add("contenedor");
        menu.classList.remove("sticky");
    }
});