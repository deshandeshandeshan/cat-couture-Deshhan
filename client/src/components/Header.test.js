import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import Header from "./Header";

const history = createMemoryHistory();

const setup = () => {
  render(
    <Router location={history.location} navigator={history}>
      <Header />
    </Router>
  );
};

describe("Header", () => {
  test("The header renders", () => {
    setup();
    expect(screen.getByText(/products/i)).toBeInTheDocument();
    expect(screen.getByText(/dashboard/i)).toBeInTheDocument();
    expect(screen.getByText(/cat couture/i)).toBeInTheDocument();
  });
});
