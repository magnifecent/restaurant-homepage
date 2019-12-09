// Sets up html for the navbar
let navBar = document.createElement('nav');
function renderNavBar() {
  let logoDiv = document.createElement('div');
  // let logoImg = document.createElement('img');
  let mcDonaldsDiv = document.createElement('div');

  logoDiv.classList.add('logo');
  mcDonaldsDiv.textContent = 'McDonald\'s';
  // logoImg.height = 50;
  // logoImg.classList.add('logo-img');
  // logoImg.src = './img/logo.jpg';

  // logoDiv.appendChild(logoImg);
  logoDiv.appendChild(mcDonaldsDiv);
  navBar.appendChild(logoDiv);

  let homeTab = document.createElement('a');
  let menuTab = document.createElement('a');
  let contactTab = document.createElement('a');

  homeTab.textContent = 'Home';
  menuTab.textContent = 'Menu';
  contactTab.textContent = 'Contact';

  homeTab.classList.add('home');
  menuTab.classList.add('menu');
  contactTab.classList.add('contact');

  navBar.appendChild(homeTab);
  navBar.appendChild(menuTab);
  navBar.appendChild(contactTab);

  document.querySelector('body').insertBefore(navBar, document.querySelector('#content'));
}

export {renderNavBar, navBar};
