const resultsDiv = document.getElementById('lib');

async function fetchBooks() {
    resultsDiv.innerHTML = "Loading your library...";
    try {
        const response = await fetch('/api/books/');
        const lib = await response.json();

        resultsDiv.innerHTML = "";

        if (lib.length === 0) {
            resultsDiv.innerHTML = "<p>Your library is empty.</p>";
            return;
        }

        lib.forEach(book => {
            const bookElement = document.createElement('div');
            const coverHtml = book.coverImage ? `<img src="${book.coverImage}" alt="Cover">` : '';

            bookElement.innerHTML = `
                <h3>${book.title} by ${book.author}</h3>
                <p>Published: ${book.year}</p>
                ${coverHtml}
                <br>
                <button onclick="deleteBook('${book.id}')">Delete from Library</button>
                <hr>
            `;
            resultsDiv.appendChild(bookElement);
        });
    } catch (error) {
        console.error("Error fetching library:", error);
        resultsDiv.innerHTML = "An error occurred while loading your library.";
    }
}

async function deleteBook(bookId) {
    try {
        const response = await fetch(`/api/books/${bookId}`, {
            method: 'DELETE'
        });
        if (response.ok) {
            fetchBooks();
        } else {
            console.error("Failed to delete book");
        }
    } catch (error) {
        console.error("Error deleting book:", error);
    }
}
fetchBooks();
