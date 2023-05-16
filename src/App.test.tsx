/** @format */

import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Myapp brand name", () => {
  render(<App />);
  const linkElement = screen.getByText(/Myapp/i);
  expect(linkElement).toBeInTheDocument();
});
