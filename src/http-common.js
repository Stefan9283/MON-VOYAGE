import axios from "axios";
export default axios.create({
  baseURL: "http://localhost:6968/",
  headers: {
    "Content-type": "application/json"
  }
});

