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

let searchButton = document.getElementById('searchBtn');
searchButton.addEventListener('click', search);

function search() {
  let input = document.getElementById('search');
  let searchBar = document.getElementById('searchBar');
  let p = document.createElement('p');

  let natureBox = document.getElementById('nature');
  p.style.display = "none";

  switch (input.value) {
    case "Cards":
      natureBox.style.display = "none";
      searchBar.appendChild(p);
      p.textContent = "Founded";
      setTimeout(() => {
        searchBar.removeChild(p);
      }, 2000);
      break;
    case "cards":
      natureBox.style.display = "none";
      searchBar.appendChild(p);
      p.textContent = "Founded";
      setTimeout(() => {
        searchBar.removeChild(p);
      }, 2000);
      break;
    case "Playing cards":
      natureBox.style.display = "none";
      searchBar.appendChild(p);
      p.textContent = "Founded";
      setTimeout(() => {
        searchBar.removeChild(p);
      }, 2000);
      break;
    case "card":
      natureBox.style.display = "none";
      searchBar.appendChild(p);
      p.textContent = "Founded";
      setTimeout(() => {
        searchBar.removeChild(p);
      }, 2000);
      break;
    case "playing cards":
      natureBox.style.display = "none";
      searchBar.appendChild(p);
      p.textContent = "Founded";
      setTimeout(() => {
        searchBar.removeChild(p);
      }, 2000);
      break;

    default:
      searchBar.appendChild(p);
      p.textContent = "Not Found"
      setTimeout(() => {
        searchBar.removeChild(p);
      }, 2000);
      break;
  }
}

function expand(sec) {
  let id = document.getElementById(`${sec}`);
  console.log(id);
}