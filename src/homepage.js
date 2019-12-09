let note = 'This website is not affiliated with McDonald\'s. The purpose of this website is to highlight how webpack can be used to divide a project into many different components, and how anything that can be created in HTML can be generated using JavaScript.';
let restaurantDescription = 'McDonald\'s is a fast-food restaurant founded in 1940, in California. It is the world\'s largest restaurant chain in the world by revenue, with over 37 000 restaurants around the world. McDonald\'s is well known for its variety of food, such as hamburgers, fries, and drinks.'
function renderHomePage() {
  let homePageDiv = document.createElement('div');
  let titleDiv = document.createElement('h1');
  let noteDiv = document.createElement('p');
  let descriptionDiv = document.createElement('p');
  let homePageImg = document.createElement('img');

  titleDiv.textContent = 'Home';
  noteDiv.textContent = note;
  descriptionDiv.textContent = restaurantDescription;

  homePageDiv.classList.add('homepage');
  homePageImg.src = './img/mcdonalds.jpg';

  homePageDiv.appendChild(titleDiv);
  homePageDiv.appendChild(noteDiv);
  homePageDiv.appendChild(descriptionDiv);
  homePageDiv.appendChild(homePageImg);

  document.getElementById('content').appendChild(homePageDiv);
}

export {renderHomePage}
