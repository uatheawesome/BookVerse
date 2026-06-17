const initialBook = {
    "id": "OL82563W",
    "title": "Harry Potter and the Philosopher's Stone",
    "author": "J. K. Rowling",
    "ebook_access": "borrowable",
    "year": 1997,
    "language": ["bul", "ukr", "por", "lat", "lav", "spa", "nor", "hin", "heb", "alb", "urd", "eng", "yid", "gla", "ltz", "gle"],
    "coverImage": "https://covers.openlibrary.org/b/id/15155833-M.jpg"
}
const Local_Library = [initialBook];



function getAllBooks() { return Local_Library; }
function getBookById(id) { return Local_Library.find(book => book.id === id) }
function addBook(book) { Local_Library.push(book); }
function removeBook(id) {
    let ind = -1;
    for (let i = 0; i < Local_Library.length; i++) {
        if (Local_Library[i].id === id) {
            ind = i;
            break;
        }
    }
    if (ind == -1)
        return false;
    Local_Library.splice(ind, 1);
    return true;
}
function updateBook(id, book) {
    let ind = -1;
    for (let i = 0; i < Local_Library.length; i++) {
        if (Local_Library[i].id === id) {
            ind = i;
            break;
        }
    }
    if (ind == -1)
        return false;
    Local_Library[ind] = book;
    return true;
}


export {
    getAllBooks,
    getBookById,
    addBook,
    removeBook,
    updateBook
};
