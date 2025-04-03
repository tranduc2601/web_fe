
class Library {
    constructor() {
        this.books = []; 
    }
    addBook(id, title, author, year, price, isAvailable) {
        const book = {
            id: id,
            title: title,
            author: author,
            year: year,
            price: price,
            isAvailable: isAvailable
        };
        this.books.push(book);
        console.log(`Book "${title}" added successfully!`);
    }
    displayBooks() {
        if (this.books.length === 0) {
            console.log("No books in the library.");
            return;
        }
        console.log("\nList of Books:");
        this.books.forEach(book => {
            console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}, Year: ${book.year}, Price: ${book.price}, Available: ${book.isAvailable}`);
        });
    }
    searchBooks(criteria, value) {
        const results = this.books.filter(book => book[criteria].toString().toLowerCase().includes(value.toLowerCase()));
        if (results.length === 0) {
            console.log(`No books found for ${criteria}: ${value}`);
            return;
        }
        console.log(`\nSearch Results for ${criteria}: ${value}`);
        results.forEach(book => {
            console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}, Year: ${book.year}, Price: ${book.price}, Available: ${book.isAvailable}`);
        });
    }
    updateBorrowStatus(id, isAvailable) {
        const book = this.books.find(book => book.id === id);
        if (!book) {
            console.log(`Book with ID ${id} not found.`);
            return;
        }
        book.isAvailable = isAvailable;
        console.log(`Book with ID ${id} updated. Now Available: ${isAvailable}`);
    }
    deleteBook(id) {
        const index = this.books.findIndex(book => book.id === id);
        if (index === -1) {
            console.log(`Book with ID ${id} not found.`);
            return;
        }
        const deletedBook = this.books.splice(index, 1);
        console.log(`Book "${deletedBook[0].title}" with ID ${id} deleted.`);
    }
    sortBooksByPrice() {
        this.books.sort((a, b) => a.price - b.price);
        console.log("Books sorted by price (ascending):");
        this.displayBooks();
    }
}
const library = new Library();
library.addBook("B001", "The Alchemist", "Paulo Coelho", 1988, 15.99, true);
library.addBook("B002", "1984", "George Orwell", 1949, 12.50, false);
library.addBook("B003", "To Kill a Mockingbird", "Harper Lee", 1960, 10.99, true);
library.displayBooks();
library.searchBooks("author", "Orwell");
library.updateBorrowStatus("B002", true);
library.displayBooks();
library.deleteBook("B003");
library.displayBooks();
library.sortBooksByPrice();