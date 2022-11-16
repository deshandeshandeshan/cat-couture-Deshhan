import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "./PaginationControls.css";

const PaginationControls = ({ totalPages, currentPage, setCurrentPage }) => {
  const prevDisabled = currentPage > 1 ? false : true;
  const nextDisabled = currentPage < totalPages ? false : true;

  const onPrev = () => {
    if (!prevDisabled) {
      setCurrentPage(currentPage - 1);
    }
  };

  const onNext = () => {
    if (!nextDisabled) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="container">
      <div className="controls">
        <div>
          <button
            aria-label="Previous page"
            onClick={onPrev}
            disabled={prevDisabled}
          >
            <FontAwesomeIcon icon={faChevronLeft} size="2x" />
          </button>
        </div>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <div>
          <button
            aria-label="Next page"
            onClick={onNext}
            disabled={nextDisabled}
          >
            <FontAwesomeIcon icon={faChevronRight} size="2x" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaginationControls;
