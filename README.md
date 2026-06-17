**BookVerse**
*A server for personal book library*

By **Uriel Adler**

BookVerse is a Node.js/Express application that serves as a personal book database. It allows you to manage a local library of books (using an in-memory Data Access Layer) and integrates with the external Open Library API to search for and download real book data from the internet.

### How to run:
**Step 1: Run -> npm install (or npm i)**
**Step 2: Start server -> npm start (or npm run dev)**
**NOTE: if no port is specified in the .env file, the server will start on port 5001 by default**

### Usage examples:
**Here are examples of how to interact with the BookVerse API. All endpoints are prefixed with `/api/books`(which will be shown with the ~ symbol).**

### GET Methods

**Get all books in the local library**
- **URL:** `~/`
- **Example Request:** `http://localhost:5001/api/books/`

**Get book by ID**
- **URL:** `~/:id`
- **Example Request:** `http://localhost:5001/api/books/OL82563W`

**External API Search**
- **URL:** `~/search/:query`
- **Example Request:** `http://localhost:5001/api/books/search/harrypotter`

**External API Search by ID and add to library**
- **URL:** `~/search/:bookname/:bookById`
- **Example Request:** `http://localhost:5001/api/books/search/batman/OL2897789W`

### POST Methods

**Add a book to the local library**
- **URL:** `~/`
- **Example Request:** `http://localhost:5001/api/books/`
- **Body (JSON):**
  ```json
  {
    "id": "1",
    "title": "The Hobbit",
    "author": "J.R.R. Tolkien"
  }
  ```

### PUT Methods

**Update a book in the local library**
- **URL:** `~/:id`
- **Example Request:** `http://localhost:5001/api/books/OL82563W`
- **Body (JSON):**
  ```json
  {
    "id": "OL82563W",
    "title": "Percy Jackson and the Olympians",
    "author": "Rick Riordan"
  }
  ```

### DELETE Methods

**Delete a book from the local library**
- **URL:** `~/:id`
- **Example Request:** `http://localhost:5001/api/books/OL82563W`
