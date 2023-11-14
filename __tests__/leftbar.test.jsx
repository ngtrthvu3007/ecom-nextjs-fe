import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; // for additional matchers like toBeInTheDocument
import LeftBar from "../components/Header/Navbar/LeftBar";

describe("LeftBar Component", () => {
  test("renders correctly with profile", () => {
    const profile = { name: "John Doe" };
    const { getByText } = render(<LeftBar visible={true} profile={profile} />);

    expect(getByText("John Doe")).toBeInTheDocument();
    // Add more assertions based on your component's expected behavior
  });

  test("renders correctly without profile", () => {
    const { getByText } = render(<LeftBar visible={true} />);

    expect(getByText("Đăng nhập")).toBeInTheDocument();
    expect(getByText("Đăng ký")).toBeInTheDocument();
    // Add more assertions based on your component's expected behavior
  });

  // Add more tests as needed, for example, to test the click events or other interactions
  test("clicking on Đăng nhập opens login modal", () => {
    const onOpenModalMock = jest.fn();
    const { getByText } = render(<LeftBar visible={true} onOpenModal={onOpenModalMock} />);

    fireEvent.click(getByText("Đăng nhập"));

    expect(onOpenModalMock).toHaveBeenCalledWith("login");
  });
});
