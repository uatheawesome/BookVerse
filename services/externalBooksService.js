
const createApiUrl = (query) => {
    return `https://openlibrary.org/search.json?q=${query}`
}

async function searchBooksInApi(bookName) {
    try {
        const url = createApiUrl(bookName);
        const response = await fetch(url);
        const books = await response.json();
        return books.docs.slice(0, 10);// limiting the response to 10 books
    }
    catch (error) {
        console.error("Error in fetching books from external API", error);
    }
}

export {
    searchBooksInApi
}