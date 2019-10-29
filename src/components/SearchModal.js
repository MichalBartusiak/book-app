import React, { useState } from "react";
const SearchModal = ({ name, author, toggleModal }) => {
  return (
    <div className="search-modal">
      <div className="search-modal__content">
        <span
          onClick={toggleModal === false ? null : <SearchModal />}
          className="search-modal__content__close"
        >
          &times;
        </span>
        <h2 className="search-modal__title">{name}</h2>
        <h3 className="search-modal__author">{author}</h3>
      </div>
    </div>
  );
};

export default SearchModal;
