import http from "./http-common-ssj"


const getAll = () => {
    //return http.get("/rboard/list")
    return http.get("/board/list.json")
};

const remove = (id) => {
    //return http.delete(`/rboard/${id}`); // <---ESC 키 밑의  키임 , ${}는  ` `  안에 사용해야 한다. 
    return http.delete(`/board/${id}`);
}

export{}
export default{
    getAll,
    remove,
};