import { render, waitFor, screen } from "@testing-library/react";
import NavigationBar from "../view";
import "@testing-library/jest-dom";
jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/",
      pathname: "/captured",
      query: "",
      asPath: "",
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null),
    };
  },
}));

it("renders without captured", async () => {
  const { getByText } = render(<NavigationBar />);
  expect(getByText("Captured")).toBeInTheDocument();
});