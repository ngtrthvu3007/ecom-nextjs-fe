import axios from "axios";
import { domain } from "@/constants";

const path = "products/";
export const getAllProducts = async (params) => {
  const data = await axios.get(`${domain}${path}`);
  return data.data.result;
};
