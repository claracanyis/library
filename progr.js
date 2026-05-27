const myLibrary = [
  new Book('Fourth Wing', 'Rebecca Yarros', 512, true, 'Romantasy', 5),
  new Book('Piranesi', 'Susanna Clarke', 272, true, 'Fantasy', 5),
  new Book('Project Hail Mary', 'Andy Weir', 496, true, 'Science-fiction', 5),
  new Book('I am Malala', 'Malala Yousafzai', 288, true, 'Autobiographical', 5),
  new Book('Glucose Revolution', 'Jessie Inchauspé', 320, true, 'non-fiction', 5)
];

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

function addBookToLibrary(title, author, isbn, pages, isRead, rating = 0, comments = '') {
  const newBook = new Book(title, author, isbn, pages, isRead, rating, comments);
  myLibrary.push(newBook);
}



console.log(myLibrary);