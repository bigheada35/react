import axios from "axios";

export default axios.create({
    baseURL : "http://146.56.137.240:8282/hjs",
    header: {
        "Content-type" : "application/json",
    }
});