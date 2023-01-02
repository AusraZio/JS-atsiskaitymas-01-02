/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';
const button = document.getElementById('btn');
const output = document.getElementById('output');

const displayUsers = (users) => {
  output.innerHTML = '';
  users.forEach(user => {
      const userCard = document.createElement('div');
      userCard.classList.add('user-card');
      
      const avatar = document.createElement('img');
      avatar.src = user.avatar_url;
      avatar.alt = `${user.login}'s avatar`;
      
      const loginLabel = document.createElement('p');
      loginLabel.textContent = 'Login:';
      
      const login = document.createElement('p');
      login.textContent = user.login;
      
      userCard.appendChild(avatar);
      userCard.appendChild(loginLabel);
      userCard.appendChild(login);
      output.appendChild(userCard);
  });
}

button.addEventListener('click', () => {
  fetch(ENDPOINT)
  .then(response => response.json())
  .then(displayUsers);
});