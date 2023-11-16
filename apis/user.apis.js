import axios from "axios";
import { domain } from "@/constants";

const path = "users/";

export const registerUser = async (params) => {
  const { name, password, confirm_password, email, phone, address, isAdmin = true } = params;
  const payload = {
    name,
    password,
    confirm_password,
    email,
    phone,
    address,
    isAdmin,
  };

  const response = await axios.post(`${domain}${path}/register`, payload);
  return response.data;
};

export const loginUser = async (params) => {
  const { password, email } = params;
  const payload = { password, email };

  const response = await axios.post(`${domain}${path}/login `, payload);
  return response.data;
};

export const  updateProfile = async (params, token) => {
  const {name, address} = params;
  const payload = { name, address };

  const response = await axios.put(`${domain}${path}/update-my-profile `, payload, { headers: {
    'Authorization': `Bearer ${token}`
  }});
  return response.data;
}
