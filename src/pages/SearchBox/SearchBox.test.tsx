import { render, screen } from "@testing-library/react";

/** page */
import SearchBox from "./SearchBox";

test("should show SearchBox content", () => {
  render(<SearchBox />);
  const text = screen.getByText("SearchBox");
  expect(text).toBeInTheDocument();
});
