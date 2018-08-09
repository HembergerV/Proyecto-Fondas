var icon = document.getElementById("btn-menu");
var label = document.getElementsByClassName("icon-menu")[0];

label.addEventListener("click", function () {
    label.classList.toggle("icon-cancel");
    label.classList.toggle("icon-menu");

});
