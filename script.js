const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

function displayBooks() {
  const libraryDiv = document.getElementById("library");
  libraryDiv.innerHTML = "";

  myLibrary.forEach((book, index) => {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book-card");
    bookDiv.dataset.index = index;

    const title = document.createElement("h2");
    title.textContent = book.title;

    const author = document.createElement("p");
    author.textContent = `by ${book.author}`;

    const pages = document.createElement("p");
    pages.textContent = `${book.pages} pages`;

    const readBtn = document.createElement("button");
    readBtn.textContent = book.read ? "Read" : "Not Read";
    readBtn.addEventListener("click", () => {
      book.read = !book.read;
      readBtn.textContent = book.read ? "Read" : "Not Read";
    });

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", () => {
      myLibrary.splice(index, 1);
      displayBooks();
    });

    bookDiv.appendChild(title);
    bookDiv.appendChild(author);
    bookDiv.appendChild(pages);
    bookDiv.appendChild(readBtn);
    bookDiv.appendChild(removeBtn);

    libraryDiv.appendChild(bookDiv);
  });
}

document.getElementById("new-book-btn").addEventListener("click", () => {
  document.getElementById("new-book-form").style.display = "block";
});

document.getElementById("book-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked;

  addBookToLibrary(title, author, pages, read);
  displayBooks();

  document.getElementById("new-book-form").style.display = "none";
});

// Manually add some books for testing
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, true);
addBookToLibrary(
  "Harry Potter and the Sorcerer's Stone",
  "J.K. Rowling",
  320,
  true
);
addBookToLibrary("1984", "George Orwell", 328, false);

displayBooks();
