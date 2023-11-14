"use client";

export const saveAccessToken = (access_token) => {
  sessionStorage.setItem("access_token", access_token);
};

export const clearAccessToken = async () => {
  sessionStorage.removeItem("access_token");
  sessionStorage.removeItem("user");
};
export const getAccessToken = () => sessionStorage.getItem("access_token") || "";

export const getProfileUser = () => {
  let result = null;
  if (typeof window !== "undefined") {
    result = sessionStorage.getItem("user");
    return result ? JSON.parse(result) : null;
  }
};
export const setProfileUser = (user) => {
  sessionStorage.setItem("user", JSON.stringify(user));
};
