// file.test.js
import { saveAccessToken, clearAccessToken, getAccessToken, getProfileUser, setProfileUser } from "../utils/authen";

beforeEach(() => {
  jest.clearAllMocks();
});

const access_token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjp7InVzZXJfaWQiOiI2NTRmZWYzM2MxYmI3MzlhNmU5MTJkNzcifSwidG9rZW5fdHlwZSI6IkFjY2Vzc1Rva2VuIiwiaWF0IjoxNjk5OTc3NzkzLCJleHAiOjE3MDAyMzY5OTN9.NTRAgCY1Ag1hzgTfpI0-duZvjvmseliZKuW4xnt9wu8";
const user = {
  address: "457/28g dương bá trạc,p1 q8.( Nhà hàng hoàng Long)",
  createdAt: "2023-11-11T21:16:35.921Z",
  email: "admin@nextshop.com",
  isAdmin: true,
  name: "admin",
  phone: 564651350,
  updatedAt: "2023-11-11T21:16:35.921Z",
  _id: "654fef33c1bb739a6e912d77",
};

describe("saveAccessToken", () => {
  test("should save access token to sessionStorage", () => {
    saveAccessToken(access_token);
    expect(sessionStorage.setItem).toHaveBeenCalledWith("access_token", access_token);
  });
});

describe("clearAccessToken", () => {
  test("should remove access token and user from sessionStorage", async () => {
    sessionStorage.setItem("access_token", "access_token");
    sessionStorage.setItem("user", JSON.stringify(user));

    await clearAccessToken();

    expect(sessionStorage.removeItem).toHaveBeenCalledWith("access_token");
    expect(sessionStorage.removeItem).toHaveBeenCalledWith("user");
  });
});

describe("getAccessToken", () => {
  test("should return access token from sessionStorage", () => {
    sessionStorage.setItem("access_token", access_token);

    expect(getAccessToken()).toEqual(access_token);
  });

  test("should return an empty string if access token is not present", () => {
    sessionStorage.removeItem("access_token");

    expect(getAccessToken()).toEqual("");
  });
});

describe("getProfileUser", () => {
  test("should return user from sessionStorage", () => {
    sessionStorage.setItem("user", JSON.stringify(user));

    expect(getProfileUser()).toEqual(user);
  });

  test("should return null if user is not present in sessionStorage", () => {
    sessionStorage.removeItem("user");

    expect(getProfileUser()).toEqual(null);
  });
});

describe("setProfileUser", () => {
  test("should save user to sessionStorage", () => {
    setProfileUser(user);
    expect(sessionStorage.setItem).toHaveBeenCalledWith("user", JSON.stringify(user));
  });
});
