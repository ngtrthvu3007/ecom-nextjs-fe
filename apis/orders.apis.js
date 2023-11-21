import axios from "axios";
import { domain } from "@/constants";
const path = "orders/";

export const creatingOrder = async (body, token) => {
  const response = await axios.post(`${domain}${path}/create`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
