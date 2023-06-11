import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// CI=true npm run test ---- will run only the tests and not listen for the changes in the file

// CI=true npm run test -- --coverage will generate a test report in the browser

// npm run build -- will build an optimized bundle ready for production

// domain to use for surge: truculent-profit.surge.sh
