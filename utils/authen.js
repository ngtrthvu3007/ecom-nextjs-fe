"use client";

export const saveAccessToken = (access_token) => {
  localStorage.setItem("access_token", access_token);
};

export const clearAccessToken = async () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("user");
};
export const getAccessToken = () => localStorage.getItem("access_token") || "";

export const getProfileUser = () => {
  let result = null;
  if (typeof window !== "undefined") {
    result = localStorage.getItem("user");
    return result ? JSON.parse(result) : null;
  }
};
export const setProfileUser = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};
