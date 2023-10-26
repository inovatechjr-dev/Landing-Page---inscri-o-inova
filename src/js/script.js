// DROPLIST
function btnMenu() {
    document.getElementById("listDrop").classList.toggle("show");
    document.getElementById("flipSvg").classList.toggle("flipSvg");
}

window.onclick = function (event) {
    if (!event.target.matches('.menu')) {
        var dropdowns = document.getElementsByClassName("listDrop");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show') && openDropdown.classList.contains('flipSvg')) {
                openDropdown.classList.remove('show');
                openDropdown.classList.remove('flipSvg');
            }
        }
    }
}
// DROPLIST