import axios from "axios";



export default axios.create({
  //baseURL: "http://146.56.137.240:8282/hjs",
  baseURL: "http://localhost:8282/ex/rest",
  //baseURL: "http://192.168.0.11:8282/ex/rest",
  headers: {
    "Content-type": "application/json",
  },
});

