const booksContainer = document.querySelector(".books-container");

const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  myLibrary.push(new Book(title, author, pages, read));
}

addBookToLibrary("1984", "George Orwell", 350, "Yes");
addBookToLibrary("NORWEGIAN WOOD", "Haruki Murakami", 389, "Yes");
addBookToLibrary("FRANKENSTEIN", "Mary Shelley", 352, "Yes");
addBookToLibrary("HARRY POTTER AND THE DEATHLY HALLOWS", "J. K. Rowling", 784, "No");
addBookToLibrary("FAHRENHEIT 451", "Ray Bradbury", 256, "Yes");
addBookToLibrary("THE OCTOBER COUNTRY", "Ray Bradbury", 320, "Yes");
addBookToLibrary("ALICE'S ADVENTURE IN WONDERLAND", "Lewis Carroll", 352, "No");

function createBook(title, author, pages, read) {
  const divBook = document.createElement("div");
  const divTitle = document.createElement("div");
  const bookData = document.createElement("ul");
  const authorLi = document.createElement("li");
  const pagesLi = document.createElement("li");
  const readLi = document.createElement("li");
  const spanAuthor = document.createElement("span");
  const spanPages = document.createElement("span");
  const spanRead = document.createElement("span");

  divBook.className = "book";
  divTitle.className = "title";
  bookData.className = "data";
  spanAuthor.className = "bold";
  spanPages.className = "bold";
  spanRead.className = "bold";

  booksContainer.appendChild(divBook);
  divBook.appendChild(divTitle);
  divBook.appendChild(bookData);
  bookData.appendChild(authorLi);
  bookData.appendChild(pagesLi);
  bookData.appendChild(readLi);

  divTitle.textContent = title;
  authorLi.innerHTML = "Author: ";
  pagesLi.textContent = "Pages: ";
  readLi.textContent = "Read: ";

  authorLi.appendChild(spanAuthor);
  pagesLi.appendChild(spanPages);
  readLi.appendChild(spanRead);

  spanAuthor.textContent = author;
  spanPages.textContent = pages;
  spanRead.textContent = read;
}

function updateBooks() {
  booksContainer.innerHTML = "";
  myLibrary.forEach( (book) => {
    createBook(book.title, book.author, book.pages, book.read);
  });
}

updateBooks();