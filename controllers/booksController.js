import * as booksDal from '../dal/booksDal.js';
import * as externalBooksService from '../services/externalBooksService.js';

//get
export const getAllBooks = (req, res) => {
    res.json(booksDal.getAllBooks());
}

//get by id
export const getBookById = (req, res) => {
    const id = req.params.id;
    res.json(booksDal.getBookById(id));
}

//post create
export const addBook = (req, res) => {
    const book = req.body;
    booksDal.addBook(book);
    res.json({ message: "Added successfully!" });
}
//put update
export const updateBook = (req, res) => {
    const id = req.params.id;
    const book = req.body;
    booksDal.updateBook(id, book);
    res.json({ message: "Updated successfully!" });
}
//delete
export const deleteBook = (req, res) => {
    const id = req.params.id;
    booksDal.removeBook(id);
    res.json({ message: "Deleted successfully!" });
};
//get external books
export const getExternalBooks = async (req, res) => {
    const query = req.params.query;
    try {
        const books = await externalBooksService.searchBooksInApi(query);
        res.json(books);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error fetching books" });
    }
}
