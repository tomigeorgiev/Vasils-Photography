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

let button = document.getElementById('searchBtn');
button.addEventListener("click", search);

function search() {
  let input = document.getElementById('search').textContent;
  let result = document.getElementById('result');

  switch (input) {
    case 'nature' || 'Nature':
      document.getElementById('cards').style.display = 'none';
      document.getElementById('cardsTag').style.display = 'none';
      result.textContent = 'Founded';
      console.log('found');
      break;
    case 'card' || 'cards' || 'Cards' || 'playing cards' || 'Playing cards':
      document.getElementById('nature').style.display = 'none';
      document.getElementById('natureTag').style.display = 'none';
      result.textContent = 'Founded';
      console.log('found');
      break;
    default:
      result.textContent = 'Not Found!';
      console.log('Not found yet');
      return;
      break;
  }
}

function nonExpand() {
  let out = document.getElementById('outer');
  out.textContent = 'No more images in this section';
  out.style.background = '#F5F5F5';
  out.style.fontFamily = 'var(--default-font-family)';
  out.style.fontSize = '18px';
  setInterval(() => { out.textContent = ''; }, 2000);
}

function soon() {
  let out = document.getElementById('out');
  out.textContent = 'Available soon';
  out.style.background = '#F5F5F5';
  out.style.fontFamily = 'var(--default-font-family)';
  out.style.fontSize = '18px';
  setInterval(() => { out.textContent = ''; }, 2000);
}