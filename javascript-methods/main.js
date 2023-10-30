const number1 = 3;
const number2 = 5;
const number3 = 7;
const maximumValue = Math.max(number1, number2, number3);
console.log('maximumValue:', maximumValue);

const heroes = ['Flash', 'Batman', 'Spiderman', 'Iron-Man'];

let randomNumber = Math.random();

randomNumber = randomNumber * heroes.length;

const randomIndex = Math.floor(randomNumber);

console.log('randomIndex:', randomIndex);

const randomHero = heroes[randomIndex];

console.log('randomHero:', randomHero);

const library = [
  {
    title: 'The Rainbow Fish',
    author: 'Marcus Pfister',
  },
  {
    title: 'The Maze Runner',
    author: 'James Dashner',
  },
  {
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
  },
];

const lastBook = library.pop();

console.log('lastBook:', lastBook);

const firstBook = library.shift();

console.log('firstBook:', firstBook);

const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('library:', library);

const fullName = 'Eduardo Gallegos';

const firstAndLastName = fullName.split(' ');

console.log('firstAndLastName:', firstAndLastName);

const firstName = firstAndLastName[0];

const sayMyName = firstName.toUpperCase();

console.log('sayMyName:', sayMyName);
