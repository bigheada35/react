import http from "./http-common-ssj"


const getAll = () => {
    //return http.get("/rboard/list")
    return http.get("/board/list.json")
};

const remove = (id) => {
    //return http.delete(`/rboard/${id}`); // <---ESC 키 밑의  키임 , ${}는  ` `  안에 사용해야 한다. 
    return http.delete(`/board/${id}`);
}

const write = (board) => {
    alert("get id 3 write");
    return http.post(`/rboard/`, board); //   /rboard/  : rboard 뒤에  꼭  / 있어야 함 
}
// json으로 보내 준다.
// 서버단에서는 @RequestBody 를 사용 해서 받아야 한다.
//
const get=(id) => {
    alert("get id 2");
    return http.get(`/rboard/${id}`);
};
const update=(id, board) => {
    alert("get id 3");
    //return http.put(`/rboard/${id}`, board);
    return http.put(`/board/${id}`, board);
};
//페이징용 - 리스트 와 페이징 정보를 같이 받아 온다.
//path에 값이 안들어 오면,  아래 써놓은 것이, 대입이 된다.
const getPagingList = (path='/rboard/list2', search='')=>{     
    return http.get(path + search);
}
export{}
export default{
    getAll,
    remove,
    write,
    get,
    update,
    getPagingList,
};