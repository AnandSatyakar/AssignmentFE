import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPageButtons = () => {
    const buttons = [];

    // Previous Button
    buttons.push(
      <button
        key="prev"
        className={`prev ${currentPage === 1 ? "disabled" : ""}`}
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
      >
        Previous
      </button>
    );

    // Always show the first page
    buttons.push(
      <button
        key={1}
        className={currentPage === 1 ? "active" : ""}
        onClick={() => onPageChange(1)}
      >
        1
      </button>
    );

    // Add ellipsis if current page is not near the first page
    if (currentPage > 3) {
      buttons.push(
        <span key="start-ellipsis" className="ellipsis">
          ...
        </span>
      );
    }

    // Add the current page if it's not the first or last
    if (currentPage > 1 && currentPage < totalPages) {
      buttons.push(
        <button
          key={currentPage}
          className="active"
          onClick={() => onPageChange(currentPage)}
        >
          {currentPage}
        </button>
      );
    }

    // Add ellipsis if current page is not near the last page
    if (currentPage < totalPages - 2) {
      buttons.push(
        <span key="end-ellipsis" className="ellipsis">
          ...
        </span>
      );
    }

    // Always show the last page
    if (totalPages > 1) {
      buttons.push(
        <button
          key={totalPages}
          className={currentPage === totalPages ? "active" : ""}
          onClick={() => onPageChange(totalPages)}
        >
          {totalPages}
        </button>
      );
    }

    // Next Button
    buttons.push(
      <button
        key="next"
        className={`next ${currentPage === totalPages ? "disabled" : ""}`}
        onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
      >
        Next
      </button>
    );

    return buttons;
  };

  return <div className="pagination">{getPageButtons()}</div>;
};

export default Pagination;
