const booksContainer = document.querySelector(".books-container");
const addButton = document.getElementById("add-button");
const editButton = document.getElementById("edit-button");
const helpButton = document.getElementById("help-button");
const submitButton = document.getElementById("submit");
const closeHelpButton = document.querySelector("#help-dialog button");
const addDialogBox = document.getElementById("add-dialog");
const helpDialogBox = document.getElementById("help-dialog");
const myLibrary = [];

function Book(title, author, pages, read) { /* book constructor */
  this.title = title.toUpperCase();
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toggleRead = function() {
  if (booksContainer.className == "books-container edit") {
    this.read = this.read == "Yes" ? this.read = "No" : this.read = "Yes";
  }
}

function addBookToLibrary(title, author, pages, read) {
  myLibrary.push(new Book(title, author, pages, read));
}

function createBook(title, author, pages, read, bookId) {
  const divBook = document.createElement("div");
  const divTitle = document.createElement("div");
  const bookData = document.createElement("ul");
  const authorLi = document.createElement("li");
  const pagesLi = document.createElement("li");
  const readLi = document.createElement("li");
  const spanAuthor = document.createElement("span");
  const spanPages = document.createElement("span");
  const spanRead = document.createElement("span");
  const deleteButton = document.createElement("div");

  divBook.className = "book";
  divTitle.className = "title";
  bookData.className = "data";
  spanAuthor.className = "bold";
  spanPages.className = "bold";
  spanRead.className = "bold";
  deleteButton.className = "delete-button";

  divBook.setAttribute("data-book-id", bookId);

  booksContainer.appendChild(divBook);
  divBook.appendChild(divTitle);
  divBook.appendChild(bookData);
  divBook.appendChild(deleteButton);
  bookData.appendChild(authorLi);
  bookData.appendChild(pagesLi);
  bookData.appendChild(readLi);

  divTitle.textContent = title;
  authorLi.textContent = "Author: ";
  pagesLi.textContent = "Pages: ";
  readLi.textContent = "Read: ";
  deleteButton.textContent = "✖";

  authorLi.appendChild(spanAuthor);
  pagesLi.appendChild(spanPages);
  readLi.appendChild(spanRead);

  spanAuthor.textContent = author;
  spanPages.textContent = pages;
  spanRead.textContent = read;

  deleteButton.addEventListener("click", () => {
    myLibrary.splice(bookId, 1);
    updateBooks();
  });

  spanRead.addEventListener("click", () => {
    myLibrary[bookId].toggleRead();
    updateBooks();
  });
}

function updateBooks() {
  booksContainer.innerHTML = "";
  myLibrary.forEach( (book, index) => {
    createBook(book.title, book.author, book.pages, book.read, index);
  });
}

addButton.addEventListener("click", () => {
  addDialogBox.showModal();
});

editButton.addEventListener("click", () => {
  booksContainer.className =
  booksContainer.className == "books-container" ? "books-container edit" : "books-container";
})

helpButton.addEventListener("click", () => {
  helpDialogBox.showModal();
})

closeHelpButton.addEventListener("click", () => helpDialogBox.close());

submitButton.addEventListener("click", () => {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").value;
  addBookToLibrary(title, author, pages, read);
  updateBooks();
});

addBookToLibrary("1984", "George Orwell", 350, "Yes");
addBookToLibrary("NORWEGIAN WOOD", "Haruki Murakami", 389, "Yes");
addBookToLibrary("FRANKENSTEIN", "Mary Shelley", 352, "Yes");
addBookToLibrary("HARRY POTTER AND THE DEATHLY HALLOWS", "J. K. Rowling", 784, "No");
addBookToLibrary("FAHRENHEIT 451", "Ray Bradbury", 256, "Yes");
addBookToLibrary("THE OCTOBER COUNTRY", "Ray Bradbury", 320, "Yes");
addBookToLibrary("ALICE'S ADVENTURE IN WONDERLAND", "Lewis Carroll", 352, "No");
updateBooks();
