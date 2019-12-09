let github = 'https://github.com/AaronHe7';
let email = 'aaronhe07@gmail.com';

function renderContact() {
  let contactDiv = document.createElement('div');
  let titleDiv = document.createElement('h1');
  let creatorDiv = document.createElement('p');
  let githubDiv = document.createElement('p');
  let emailDiv = document.createElement('p');

  titleDiv.textContent = 'Contact';
  creatorDiv.textContent = 'Created by Aaron He';
  githubDiv.innerHTML = `Github: <a href="${github}">${github}</a>`;
  emailDiv.innerHTML = `Email: <a href="mailto:${email}">${email}</a>`;

  contactDiv.id = 'contact';
  contactDiv.appendChild(titleDiv);
  contactDiv.appendChild(creatorDiv);
  contactDiv.appendChild(githubDiv);
  contactDiv.appendChild(emailDiv);

  document.getElementById('content').appendChild(contactDiv);
}

export {renderContact}
