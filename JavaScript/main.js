
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches('.btn')) {
    var dropdowns = document.getElementsByClassName("nav-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function imgWindow() {
  window.open("image") 
}
