const addBookButton = document.querySelector("#add-button");
addBookButton.addEventListener("click", addBookToLibrary);

const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read === "yes" ? true : false; 
  Book.prototype.info = function() {
    const isRead = this.read === true ? "has been read" : "not read yet";
    return `${this.title} by ${this.author}, ${this.pages} pages, ${isRead}`;
  };
}

function addBookToLibrary() {
  const title = prompt("Title:");
  const author = prompt("Author:");
  const pages = prompt("Number of pages:");
  const read = prompt("Read?:");

  myLibrary.push(new Book(title, author, pages, read));
}

myLibrary.push(new Book("1984", "George Orwell", 350, "yes"));
myLibrary.push(new Book("Norwegian Wood", "Haruki Murakami", 389, "yes"));
myLibrary.push(new Book("Frankenstein", "Mary Shelley", 352, "yes"));
myLibrary.push(new Book("Harry Potter and the Deathly Hallows", "J. K. Rowling", 784, "no"));