**BookVerse**
A server for personal book library

By: Oday Al-Fayoumi
ID: 202300671

    BookVerse is a Node.js/Express application that serves as a personal book database. It allows you to manage a local library of books (using an in-memory Data Access Layer) and integrates with the external Open Library API to search for and download real book data from the internet.

How to run:
Run -> npm install (or npm i)
Start server -> npm start (or npm run dev)
NOTE: if no port is specified in the .env file, the server will start on port 5001 by default

Usage examples:
Here are examples of how to interact with the BookVerse API. All endpoints are prefixed with `/api/books`(which will be shown with the ~ symbol).

Get:
-Get all books in the local library:
    url = ~/
    Example Request: `http://localhost:5001/api/books/`
-Get book by id:
    url = ~/:id 
    Example Request: `http://localhost:5001/api/books/OL82563W`
- External Api Search:
    url = ~/search/:query
    Example Request: `http://localhost:5001/api/books/search/harrypotter`

Post:
-Add book to local library:
    url = ~/ 
    Example Request: `http://localhost:5001/api/books/`
    Body: `{"id":"1","title":"The Hobbit","author":"J.R.R. Tolkien"}`
Put:
-Update a book in local library
    url = ~/:id
    Example Request: `http://localhost:5001/api/books/OL82563W` 
    Body: `{"id":"OL82563W","title":"Percy Jackson and the Olympians","author":"Rick Riordan"}`
Delete:
-Delete a book from local library
    url = ~/:id
    Example Request: `http://localhost:5001/api/books/OL82563W`


