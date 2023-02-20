import React, { useState } from "react";
import CardIteam from "../components/atoms/CardIteam";

const Products = () => {
  const items = [...Array(30)];

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = items.slice(startIndex, endIndex);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="container">
      <div className="row row-sm-3 row-md-4 row-cols-lg-4">
        {currentItems.map(() => (
          <div className="col mt-3 tb-3">
            <CardIteam />
          </div>
        ))}
      </div>
      <div>
        {pageNumbers.map((pageNumber) => (
          <button
            className="m-auto"
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Products;
