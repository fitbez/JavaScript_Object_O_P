// Constructor functions
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

// Instantiate an Object
const book1 = new Book("Book1", "John Doe", "2013");
const book2 = new Book("Book2", "Jane Doe", "2016");

console.log(book1.title);
console.log(book2.year);
