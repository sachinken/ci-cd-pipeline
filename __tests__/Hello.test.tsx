import { render, screen } from "@testing-library/react";
import Hello from "@/components/Hello";

describe("Hello Component", () => {
  it("renders the correct greeting message", () => {
    render(<Hello name="World" />);

    const greeting = screen.getByText("Hello, World");

    expect(greeting).toBeInTheDocument();
  });
});
