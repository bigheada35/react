import http from "./http-common";

const getAll = () => {
    return http.get("/rboard/list");
};

export{}
export default{
    getAll,
}
