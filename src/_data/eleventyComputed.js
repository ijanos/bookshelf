module.exports = {
    books: data => {
      return data.bookshelf.books;
    },
    comics: data => {
      return data.bookshelf.books.filter(book => book.tags.includes("comic"))
    }
};
