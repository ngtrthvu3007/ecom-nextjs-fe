// LoginModal.test.js
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LoginModal from "../components/Modal/loginModal";

const queryClient = new QueryClient();

// Mocking the context and other dependencies
jest.mock("../../app/contexts", () => ({
  AppContext: {
    Consumer: ({ children }) => children({ setIsAuthenticated: jest.fn(), setProfile: jest.fn() }),
  },
}));

jest.mock("@tanstack/react-query", () => ({
  ...jest.requireActual("@tanstack/react-query"),
  useMutation: jest.fn(),
}));

// Mocking other modules
jest.mock("../../apis/user.apis", () => ({
  loginUser: jest.fn(),
}));

jest.mock("../../utils/authen", () => ({
  setProfileUser: jest.fn(),
  saveAccessToken: jest.fn(),
}));

describe("LoginModal", () => {
  test("renders LoginModal component", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <LoginModal open={true} setOpen={jest.fn()} />
      </QueryClientProvider>
    );

    // Add your assertions based on the component's structure
    expect(screen.getByText("Đăng nhập")).toBeInTheDocument();
    // ... add more assertions based on your component structure
  });

  test("calls onSubmit and updates state on successful login", async () => {
    const setOpenMock = jest.fn();
    const setIsAuthenticatedMock = jest.fn();
    const setProfileMock = jest.fn();
    const loginUserMock = jest.fn().mockResolvedValue({
      result: {
        access_token: "mockAccessToken",
        user: { id: 1, name: "Test User" },
      },
    });

    useMutation.mockReturnValueOnce({ mutate: loginUserMock, isPending: false });

    render(
      <QueryClientProvider client={queryClient}>
        <LoginModal open={true} setOpen={setOpenMock} />
      </QueryClientProvider>
    );

    // Fill in the form and submit
    userEvent.type(screen.getByLabelText("Email"), "test@example.com");
    userEvent.type(screen.getByLabelText("Mật khẩu"), "password");
    fireEvent.click(screen.getByText("Đăng nhập"));

    // Wait for the login mutation to complete
    await waitFor(() => expect(loginUserMock).toHaveBeenCalled());

    // Assert that the necessary functions were called with the expected arguments
    expect(setProfileUser).toHaveBeenCalledWith({ id: 1, name: "Test User" });
    expect(saveAccessToken).toHaveBeenCalledWith("mockAccessToken");
    expect(setIsAuthenticatedMock).toHaveBeenCalledWith(true);
    expect(setProfileMock).toHaveBeenCalledWith({ id: 1, name: "Test User" });
    expect(setOpenMock).toHaveBeenCalledWith(false);
  });

  // Add more tests as needed for different scenarios, such as handling errors, form validation, etc.
});
