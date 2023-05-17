"use strict";
const book = {
    id: 1,
    title: 'Ready Player One',
    author: 'Ernest Cline'
};
const books = [];
function getBook() {
    return { id: 1, title: 'Ready Player One', author: 'Ernets Cline' };
}
const myBook = getBook();
function createBook(book) {
    return book;
}
const newBook = {
    id: 2,
    title: 'Donde esta Alaska',
    author: 'John Green',
    coAuthor: 'Snow'
};
createBook(newBook);
//# sourceMappingURL=interface.js.map