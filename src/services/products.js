import axios from "axios";

export const getProducts = () => {
  const url = "https://fakestoreapi.com/products";
  return axios.get(url).then((res) => res.data);
};
