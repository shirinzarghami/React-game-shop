import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "9f37ecd039784afcad8e677efd0945c9",
  },
});
