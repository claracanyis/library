const myLibrary = [];
const bookshelf = document.querySelector(".bookshelf");
const dialogAddBook = document.querySelector('#add-book');
const newBookForm = document.querySelector("#new-book-form");
const btnCloseDialog = document.querySelector('#close-dialog');
const btnAddBook = document.querySelector('#btn-add-book');


function Book(title, author, pages, isRead, genre, rating, cover) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor")
  }
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  this.genre = genre;
  this.rating = rating;
  this.cover = cover;
}

function addBookToLibrary(title, author, pages, isRead, rating = 0, cover = '', comments = '') {
  const newBook = new Book(title, author, pages, isRead, rating, cover, comments);
  myLibrary.unshift(newBook);
}

function addArrayToApp(array) {
  for (let book of myLibrary) {
    addBookToApp(book);
  }
}

function addBookToApp(book) {
  let newBook = document.createElement("div");
  newBook.className = 'book';

  if (book.cover != '') {
    let newCover = document.createElement("img");
    newCover.setAttribute('src', book.cover);
    newBook.appendChild(newCover);
  }

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

function clearBookshelf() {
  const books = document.querySelectorAll(".book");
  for (let book of books) {
    book.remove();
  } 
}

btnAddBook.addEventListener('click', function(event) {
  dialogAddBook.showModal();
})

btnCloseDialog.addEventListener('click', function(event) {
  dialogAddBook.close();
})

newBookForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);

  addBookToLibrary(
    formData.get("title"),
    formData.get("author"),
    formData.get("pages"),
    formData.get("read"),
    formData.get("genre"),
    formData.get("rating"),
    formData.get("cover")
  );
  
  clearBookshelf();
  addArrayToApp(myLibrary);
  dialogAddBook.close();
})

dialogAddBook.addEventListener('close', function(event) {
  newBookForm.reset();
})

addBookToLibrary('Fourth Wing', 'Rebecca Yarros', 512, true, 'Romantasy', 5, 'https://m.media-amazon.com/images/I/910CEJ3IFWL.jpg');
addBookToLibrary('Piranesi', 'Susanna Clarke', 272, true, 'Fantasy', 5, 'https://m.media-amazon.com/images/I/51-9a+EtpkL._SY445_SX342_ML2_.jpg');
addBookToLibrary('Project Hail Mary', 'Andy Weir', 496, true, 'Science-fiction', 5, 'https://m.media-amazon.com/images/I/51-1T3EnODL._SY445_SX342_ML2_.jpg');
addBookToLibrary('I am Malala', 'Malala Yousafzai', 288, true, 'Autobiographical', 5, 'https://m.media-amazon.com/images/I/41WIXL2+4+L._SY445_SX342_ML2_.jpg');
addBookToLibrary('Glucose Revolution', 'Jessie Inchauspé', 320, true, 'non-fiction', 5, 'https://m.media-amazon.com/images/I/41rvvtnv8YL._SY445_SX342_ML2_.jpg');

console.log(myLibrary);
addArrayToApp(myLibrary);