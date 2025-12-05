import { render, screen } from "@testing-library/react";
import Status from "@/components/Status";

describe("Status component", () => {
  test("shows loading state", () => {
    render(<Status status="loading" />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  test("shows success state", () => {
    render(<Status status="success" />);
    expect(screen.getByText("Data Loaded")).toBeInTheDocument();
  });
});
