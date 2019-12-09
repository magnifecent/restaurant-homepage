import {renderMenu} from './menu.js';
import {renderNavBar, navBar} from './navbar.js';
import {renderHomePage} from './homepage.js';
import {renderContact} from './contact.js'

renderNavBar();
renderHomePage();

function clearElement(element) {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
}

// Changes pages when a tab is clicked
navBar.addEventListener('click', function(e) {
  let targetClass = e.target.classList[0];
  let parentClass = e.target.parentElement.classList[0];

  // Resolves issue with the child's class being taken instead of parent
  if (['home', 'logo', 'menu', 'contact'].includes(parentClass)) {
    targetClass = parentClass;
  }
  // console.log(targetClass);

  let contentDiv = document.getElementById('content');

  if (targetClass == 'home' || targetClass == 'logo') {
    clearElement(contentDiv);
    renderHomePage();
  } else if (targetClass == 'menu') {
    clearElement(contentDiv);
    renderMenu();
  } else if (targetClass == 'contact') {
    clearElement(contentDiv);
    renderContact();
  }
});
