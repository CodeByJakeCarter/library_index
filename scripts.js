const myLibrary = [];

function book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    const data = title + " by " + author + ", " + pages + " pages, " + read;
    return data;
  };
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  return myLibrary;
}

const theHobbit = new book(
  "The Hobbit",
  "J.R.R. Tolkien",
  "295",
  "Not read yet."
);
addBookToLibrary(theHobbit);

const book2 = new book("huh", "who", "WHAT", "too long");
addBookToLibrary(book2);

document.querySelector("#bookTable tbody").innerHTML = myLibrary
  .map(
    (book) =>
      `<tr>
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.pages}</td>
    <td>${book.read}</td>
  </tr>`
  )
  .join("");
