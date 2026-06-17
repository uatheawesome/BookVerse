async function searchBooks() {
    const query = document.getElementById('searchInput').value;
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = "Loading...";

    try {
        const response = await fetch(`/api/books/search/${query}`);
        const booksArray = await response.json();
        resultsDiv.innerHTML = "";

        booksArray.forEach(book => {
            const bookElement = document.createElement('div');
            const coverHtml = book.coverImage ? `<img src="${book.coverImage}" alt="Cover">` : '';

            bookElement.innerHTML = `
                <h3>${book.title} by ${book.author}</h3>
                <p>Published: ${book.year}</p>
                ${coverHtml}
                <br>
                <button id="btn-${book.id}" class="color-button" onclick="addBook('${query}', '${book.id}')">Add to Library</button>
                <hr>
            `;
            resultsDiv.appendChild(bookElement);
        });

    } catch (error) {
        console.error("Error fetching data:", error);
        resultsDiv.innerHTML = "An error occurred while searching.";
    }
}

async function addBook(query, bookId) {
    try {
        const response = await fetch(`/api/books/search/${query}/${bookId}`);
        const result = await response.json();

        if (response.ok) {
            document.getElementById('resultMessage').innerHTML = "Book added successfully!";
            buttonGreen(bookId);
            setTimeout(() => clearresultMessage(bookId), 2000);
        } else {
            document.getElementById('resultMessage').innerHTML = "Failed: " + result.message;
            buttonRed(bookId);
            setTimeout(() => clearresultMessage(bookId), 2000);
        }
        console.log(result);
    } catch (error) {
        console.error("Error adding book:", error);
        document.getElementById('resultMessage').innerHTML = "An error occurred while adding the book.";
    }
}

function clearresultMessage(bookId) {
    document.getElementById('resultMessage').innerHTML = "";
    buttonDefaultColor(bookId);
}
function buttonGreen(bookId) {
    const button = document.getElementById(`btn-${bookId}`);
    if (button) button.style.backgroundColor = "green";
}
function buttonRed(bookId) {
    const button = document.getElementById(`btn-${bookId}`);
    if (button) button.style.backgroundColor = "red";
}
function buttonDefaultColor(bookId) {
    const button = document.getElementById(`btn-${bookId}`);
    if (button) button.style.backgroundColor = "#261b7c";
}