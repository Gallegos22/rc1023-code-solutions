const book1 = {
  title: 'Goodnight Punpun',
  author: 'Inio Asano',
  libraryID: 3353,
};
const { title, author, libraryID } = book1;
console.log(
  'The title of the book is ' +
    title +
    ',the author is ' +
    author +
    ' and the library id is ' +
    libraryID
);

const book2 = {
  title: 'Les Fleurs du mal',
  author: 'Charles Baudelaire',
  libraryID: 2345,
};
const { title: newName, author: otherName, libraryID: randomName } = book2;
console.log(
  'The title of the book is ' +
    newName +
    ', the author is ' +
    otherName +
    ' and the library id is ' +
    randomName
);

const library = [
  {
    title: 'The Road Ahead',
    author: 'Bill Gates',
    libraryID: 1254,
  },
  {
    title: 'Walter Isaacson',
    author: 'Steve Jobs',
    libraryID: 4264,
  },
  {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    libraryID: 3245,
  },
  {
    title: "Dead Dead Demon's De De De De Destruction",
    author: 'Inio Asano',
    libraryID: 1233,
  },
];
const [a, b, c] = library;

console.log('book3:', a);
console.log('book4', b);
console.log('book5', c);

const [, , , d] = library;

console.log('book6:', d);
