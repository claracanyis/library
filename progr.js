const myLibrary = [];

function Book(title, author, pages, isRead, genre, rating) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor")
  }
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  this.genre = genre;
  this.rating = rating;
}

function addBookToLibrary(title, author, pages, isRead, rating = 0, comments = '') {
  const newBook = new Book(title, author, pages, isRead, rating, comments);
  myLibrary.push(newBook);
}

const bookshelf = document.querySelector(".bookshelf");

function addArrayToApp(array) {
  for (let book of myLibrary) {
    addBookToApp(book);
  }
}

function addBookToApp(book) {
  let newBook = document.createElement("div");
  newBook.className = 'book';

  let newTitle = document.createElement("p");
  newTitle.textContent = book.title;

  let newAuthor = document.createElement("p");
  newAuthor.textContent = 'by ' + book.author;

  let newPages = document.createElement("p");
  newPages.textContent = book.pages + ' pages';


  newBook.appendChild(newTitle);
  newBook.appendChild(newAuthor);
  newBook.appendChild(newPages);
  bookshelf.appendChild(newBook);
}

addBookToLibrary('Fourth Wing', 'Rebecca Yarros', 512, true, 'Romantasy', 5);
addBookToLibrary('Piranesi', 'Susanna Clarke', 272, true, 'Fantasy', 5);
addBookToLibrary('Project Hail Mary', 'Andy Weir', 496, true, 'Science-fiction', 5);
addBookToLibrary('I am Malala', 'Malala Yousafzai', 288, true, 'Autobiographical', 5);
addBookToLibrary('Glucose Revolution', 'Jessie Inchauspé', 320, true, 'non-fiction', 5);

console.log(myLibrary);
addArrayToApp(myLibrary);