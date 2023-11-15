import axios from "axios";
import { domain } from "@/constants";

const path = "products/";
export const getAllProducts = async () => {
  const data = await axios.get(`${domain}${path}`);
  return data.data.result;
};
export const getProductDetail = async (sku) => {
  const data = await axios.get(`${domain}${path}${sku}`);
  return data.data.product;
};
