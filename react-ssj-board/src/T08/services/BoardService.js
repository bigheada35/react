import http from "./http-common"

const getAll = () =>{
    return http.get("/rboard/list")

}

const remove = (id) => {
    return http.delete(`/rboard/${id}`);
}

const write = (board) => {
    return http.post(`/rboard/`, board);
}

const get = (id) => {
    return http.get(`/rboard/${id}`);
}

const update = (id, board) => {
    return http.put(`/rboard/${id}`, board);

}

const getPagingList = (path= `/rboard/list2`) => {
    return http.get(path);
}

export{}
export deafult{
    getAll,
    remove,
    write,
    get,
    update,
    getPagingList,
}