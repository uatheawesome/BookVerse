
const createApiUrl = (query) => {
    return `https://openlibrary.org/search.json?q=${query}`
}

async function searchBooksInApiByID(bookname, bookById) {
    try {
        const url = createApiUrl(bookname);
        const response = await fetch(url);
        const books = await response.json();
        if (!books.docs) return null;
        const foundRawBook = books.docs.find(book => book.key.split("/").pop() === bookById);
        if (!foundRawBook) return null;
        return {
            id: foundRawBook.key.split("/").pop(),
            title: foundRawBook.title,
            author: foundRawBook.author_name ? foundRawBook.author_name[0] : "Unknown",
            ebook_access: foundRawBook.ebook_access ? foundRawBook.ebook_access : "None",
            year: foundRawBook.first_publish_year ? foundRawBook.first_publish_year : "Unknown",
            language: Array.isArray(foundRawBook.language) ? foundRawBook.language.slice(0, 10).join(", ") : "Unknown",
            coverImage: foundRawBook.cover_i ? `https://covers.openlibrary.org/b/id/${foundRawBook.cover_i}-M.jpg` : null
        };

    } catch (error) {
        console.error("Error in fetching books from external API by ID", error);
        return null;
    }
}

async function searchBooksInApi(bookName) {
    try {
        const url = createApiUrl(bookName);
        const response = await fetch(url);
        const books = await response.json();
        const first10books = books.docs.slice(0, 10);// limiting the response to 10 books
        console.log(first10books);
        const extractedBooks = first10books.map(book => {
            return {
                id: book.key.split("/").pop(),
                title: book.title,
                author: book.author_name ? book.author_name[0] : "Unknown",
                ebook_access: book.ebook_access ? book.ebook_access : "None",
                year: book.first_publish_year ? book.first_publish_year : "Unknown",
                language: Array.isArray(book.language) ? book.language.slice(0, 10).join(", ") : "Unknown",
                coverImage: book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : null
            }
        })
        return extractedBooks;
    }
    catch (error) {
        console.error("Error in fetching books from external API", error);
    }
}

export {
    searchBooksInApi,
    searchBooksInApiByID
}