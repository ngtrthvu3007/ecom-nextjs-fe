import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor, act } from "@testing-library/react";
import Footer from "../components/Footer/Footer.jsx";
screen.debug();

describe("Footer component", () => {
  it("renders correctly", () => {
    render(<Footer />);
    expect(
      screen.getByText(
        "Trang web này chỉ là sản phẩm cá nhân và mang tính chất tham khảo, không có giá trị thực tế. Vui lòng không sử dụng cho bất cứ mục đích thương mại nào. Cám ơn"
      )
    ).toBeDefined();
    expect(screen.getByText("About Me")).toBeDefined();
    expect(screen.getByText("Author: Nguyen Tran The Vu (Vincent)")).toBeDefined();
    expect(screen.getByText("Git:")).toBeDefined();
    expect(screen.getByText("Email:")).toBeDefined();
    expect(screen.getByRole("link", { name: "https://github.com/ngtrthvu3007" })).toBeDefined();
    expect(screen.getByRole("link", { name: "nguyentranthevu@gmail.com" })).toBeDefined();
  });
});
