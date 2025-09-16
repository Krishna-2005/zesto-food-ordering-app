import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Cases", () => {
  test("Should load Contact Us Component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  test("Should load Button inside Contact Us Component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  it("Should load Placeholder text inside Contact Us Component", () => {
    render(<Contact />);

    const inputPlaceholder = screen.getByPlaceholderText("name");

    expect(inputPlaceholder).toBeInTheDocument();
  });

  it("Should load 2 Input Boxes inside Contact Us Component", () => {
    render(<Contact />);

    const textBox = screen.getAllByRole("textbox");

    expect(textBox.length).toBe(2);
  });
});
