import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PaginationControls from "./PaginationControls";

describe("PaginationControls", () => {
  test("WHEN the user is on the first page of the products page, THEN the previous/back button of the pagination control will be disabled", () => {
    const setCurrentPage = jest.fn();
    render(
      <PaginationControls
        currentPage={1}
        totalPages={2}
        setCurrentPage={setCurrentPage}
      />
    );
    const previousButton = screen.getByRole("button", {
      name: "Previous page",
    });
    expect(previousButton).toBeDisabled();
    userEvent.click(previousButton);
    expect(setCurrentPage).not.toHaveBeenCalled();
  });

  test("WHEN the user is on the second page of the main product page, THEN the previous/back button of the pagination control will be enabled.", () => {
    const setCurrentPage = jest.fn();
    render(
      <PaginationControls
        currentPage={2}
        totalPages={2}
        setCurrentPage={setCurrentPage}
      />
    );
    const previousButton = screen.getByRole("button", {
      name: "Previous page",
    });
    expect(previousButton).not.toBeDisabled();
    userEvent.click(previousButton);
    expect(setCurrentPage).toHaveBeenCalled();
  });

  test("WHEN the user is on the last page of the main product page, THEN next button of the pagination control will be disabled.", () => {
    const setCurrentPage = jest.fn();
    render(
      <PaginationControls
        currentPage={2}
        totalPages={2}
        setCurrentPage={setCurrentPage}
      />
    );
    const nextButton = screen.getByRole("button", {
      name: "Next page",
    });
    expect(nextButton).toBeDisabled();
    userEvent.click(nextButton);
    expect(setCurrentPage).not.toHaveBeenCalled();
  });
});
