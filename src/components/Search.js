import React, { useState } from "react";
import axios from "axios";
import SearchModal from "./SearchModal";
const Search = () => {
  // hooks
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState({ items: [] });
  const [isModalActive, setModalActive] = useState(false);

  const handleSearchTerm = e => {
    setSearchTerm(e.target.value);
  };

  let API = `https://www.googleapis.com/books/v1/volumes`;
  const fetchBooks = async () => {
    const response = await axios.get(`${API}?q=${searchTerm}`);
    setBooks(response.data);
    // console.log(response.data);
  };
  const handleSubmit = e => {
    e.preventDefault();
    fetchBooks();
  };
  const handleModalOpen = () => {
    setModalActive(!isModalActive);
    // console.log(isModalActive);
  };

  return (
    <>
      {/* I know its bad idea to use form like that. */}
      <form onSubmit={handleSubmit} className="search">
        <h1 className="search__title">Search your books</h1>

        <input
          onChange={handleSearchTerm}
          value={searchTerm}
          className="search__input"
          type="search"
          placeholder="finances..."
        />
        <button className="search__button">Search</button>
        <ul className="results">
          {books.items.map((book, index) => {
            return (
              <li className="results__item" key={index}>
                <div className="results__item-img">
                  <img
                    src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
                    alt={book.volumeInfo.title}
                  />
                </div>
                <h3 className="results__item-title">{book.volumeInfo.title}</h3>
                <h4 className="results__item-author">
                  {book.volumeInfo.authors}
                </h4>
                <button
                  onClick={handleModalOpen}
                  className="results__item-button"
                >
                  More info
                </button>

                {/* Add favourite button */}
                {handleModalOpen === true ? (
                  <SearchModal
                    modalToggle={handleModalOpen}
                    name={book.volumeInfo.title}
                    author={book.volumeInfo.authors}
                  />
                ) : null}
              </li>
            );
          })}
          {handleModalOpen ? (
            <SearchModal
            // name={book.volumeInfo.title}
            // author={book.volumeInfo.authors}
            />
          ) : null}
        </ul>
      </form>
    </>
  );
};

export default Search;
