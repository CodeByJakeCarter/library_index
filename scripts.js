const myLibrary = [];

function book(title, author, pages, boolean) {
  this.bookId = `book${++book.id}`;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = boolean;
}
book.id = 0;

function addBookToLibrary(book) {
  myLibrary.push(book);
  updateTable();
}

const theHobbit = new book("The Hobbit", "J.R.R. Tolkien", "295", true);
addBookToLibrary(theHobbit);

const book2 = new book("huh", "who", "WHAT", true);
addBookToLibrary(book2);

function updateTable() {
  const tableBody = document.querySelector("#bookTable tbody");
  tableBody.innerHTML = myLibrary
    .map(
      (book) =>
        `<tr class="${book.bookId}">
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.pages}</td>
    <td><input type="checkbox"></input></td>
    <td><button class="removeBtn" type='button'>Remove</button></td>
  </tr>`
    )
    .join("");

  document.querySelectorAll(".removeBtn").forEach((button) => {
    button.addEventListener("click", removeBook);
  });
}

function removeBook(event) {
  const button = event.target;
  const bookId = button.closest("tr").classList[0];

  const bookIndex = myLibrary.findIndex((book) => book.bookId === bookId);
  if (bookIndex != -1) {
    myLibrary.splice(bookIndex, 1);
    updateTable();
  }
}

const dialog = document.querySelector("#bookDialog");
const showBtn = document.querySelector("#showDialog");
const closeBtn = document.querySelector("#addBook");
const cancelBtn = document.querySelector("#cancelButton");

showBtn.addEventListener("click", () => {
  dialog.showModal();
});

closeBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const addTitle = document.getElementById("titleAdd");
  const addAuthor = document.getElementById("authorAdd");
  const addPages = document.getElementById("pagesAdd");
  const newBook = new book(addTitle.value, addAuthor.value, addPages.value);
  addBookToLibrary(newBook);
  dialog.close();
});

cancelBtn.addEventListener("click", () => {
  dialog.close();
});
