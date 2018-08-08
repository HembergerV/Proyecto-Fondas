var icon;
var label;
icon = document.getElementById("btn-menu");
label = document.getElementsByClassName("icon-menu")[0];
label.addEventListener("click", function () {
    label.classList.toggle("icon-facebook");
    label.classList.toggle("icon-menu");

});
