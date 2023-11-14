// FieldForm.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import FieldForm from "../components/Modal/fieldForm"; // Điều chỉnh đường dẫn dựa trên cấu trúc dự án của bạn

describe("FieldForm", () => {
  test("renders FieldForm component with label, input, and asterisk", () => {
    const placeholder = "Enter value";
    render(<FieldForm name="testName" value="" onChange={() => {}} placeholder={placeholder} error="" />);

    // Assert that the label, input, and asterisk are rendered

    expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();
  });

  test("calls onChange callback when input value changes", () => {
    render(<FieldForm label="Test Label" name="testName" value="" placeholder="Enter value" error="" />);

    const inputElement = screen.getByRole("textbox");
    fireEvent.change(inputElement, { target: { value: "New Value" } });
  });

  test("displays error message when error prop is provided", () => {
    const error = "Test error message";
    render(
      <FieldForm
        label="Test Label"
        name="testName"
        value=""
        onChange={() => {}}
        placeholder="Enter value"
        error={error}
      />
    );

    // Assert that the error message is displayed
    expect(screen.getByText(error)).toBeInTheDocument();
  });
});
