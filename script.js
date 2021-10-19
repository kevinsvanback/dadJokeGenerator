'use strict';

const jokeElement = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

getJokes();

// fetch .then() version
/* function getJokes() {
  const apiConfig = {
    headers: {
      'Accept': 'application/json'
    }
  }

  fetch('https://icanhazdadjoke.com/', apiConfig)
    .then(response => response.json())
    .then(data => jokeElement.innerHTML = data.joke)
} */

// fetch async/await version
async function getJokes() {
  const apiConfig = {
    headers: {
      'Accept': 'application/json'
    }
  }

  const response = await fetch('https://icanhazdadjoke.com/', apiConfig);
  const data = await response.json();
  jokeElement.innerHTML = data.joke;
}

jokeBtn.addEventListener('click', getJokes);