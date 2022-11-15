import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PaginationControls from "./PaginationControls";

describe("PaginationControls", () => {
  test("WHEN the user is on the first page of the products page, THEN the previous/back button of the pagination control will be disabled", () => {
    const onPrev = jest.fn();
    render(
      <PaginationControls
        onNext={() => {}}
        onPrev={onPrev}
        page={1}
        totalPages={2}
      />
    );
    const previousButton = screen.getByRole("button", {
      name: "Previous page",
    });
    expect(previousButton).toBeDisabled();
    userEvent.click(previousButton);
    expect(onPrev).not.toHaveBeenCalled();
  });

  test("WHEN the user is on the second page of the main product page, THEN the previous/back button of the pagination control will be enabled.", () => {
    const setPage = (page) => page - 1;
    const onPrev = jest.fn();
    render(
      <PaginationControls
        onNext={() => {}}
        onPrev={onPrev}
        page={2}
        totalPages={2}
        setPage={setPage}
      />
    );
    const previousButton = screen.getByRole("button", {
      name: "Previous page",
    });
    expect(previousButton).not.toBeDisabled();
    userEvent.click(previousButton);
    expect(onPrev).toHaveBeenCalled();
  });

  test("WHEN the user is on the last page of the main product page, THEN next button of the pagination control will be disabled.", () => {
    const onNext = jest.fn();
    render(
      <PaginationControls
        onNext={onNext}
        onPrev={() => {}}
        page={2}
        totalPages={2}
      />
    );
    const nextButton = screen.getByRole("button", {
      name: "Next page",
    });
    expect(nextButton).toBeDisabled();
    userEvent.click(nextButton);
    expect(onNext).not.toHaveBeenCalled();
  });
});
