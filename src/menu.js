// Creates a div with the menu item inside
function createMenuItem(name, price, calories, src) {
  let item = document.createElement('div');
  let title = document.createElement('h2');
  let priceDiv = document.createElement('div');
  let caloriesDiv = document.createElement('div');
  let image = document.createElement('img');
  item.appendChild(title);
  item.appendChild(image);
  item.appendChild(priceDiv);
  item.appendChild(caloriesDiv);
  item.classList.add('item');

  image.height = 150;
  image.alt = src;
  title.textContent = name;
  priceDiv.textContent = '$' + price;
  caloriesDiv.textContent = calories + ' calories';
  // Automatically assumes the image is in the img file and is a jpg type
  image.src = './img/' + src + '.jpg';

  return item;
}

function renderMenu() {
  // Takes items where are the arguments are stored in an array
  let menuItems = [
    ['Egg McMuffin', '3.00', 290, 'egg-mcmuffin'],
    ['Sausage McMuffin', '300', 370, 'sausage-mcmuffin'],
    ['Hamburger', '1.50', 200, 'hamburger'],
    ['Cheeseburger', '1.50', 200, 'cheeseburger'],
    ['Quarter Pounder', '6.00', 490, 'quarter-pounder'],
    ['McDouble', '2.00', 340, 'mcdouble'],
    ['Big Mac', '6.00', 540,'big-mac'],
    ['Medium Fries', '4.00', 350, "fries-medium"],
    ['Happy Meal', '5.00', 340, 'happy-meal'],
    ['Medium Soft Drink', '1.00', 190, 'coca-cola'],
    ['Medium Coffee', '1.00', 4, 'coffee'],
    ['Vanilla Cone', '2.00', 240, 'vanilla-cone'],
  ];

  // Creates a menu, and adds the items inside
  let menuDiv = document.createElement('div');
  menuDiv.id = 'menu';

  // Title
  let titleDiv = document.createElement('h1');
  titleDiv.textContent = 'Menu';
  document.getElementById('content').appendChild(titleDiv);

  for (let i = 0; i < menuItems.length; i++) {
    menuDiv.appendChild(createMenuItem(...menuItems[i]));
  }
  document.getElementById('content').appendChild(menuDiv);
}

export {renderMenu};
