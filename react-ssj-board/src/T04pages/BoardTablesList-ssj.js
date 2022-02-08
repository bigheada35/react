import React, { useEffect } from 'react';
import {useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
//import await from "await";
//import BoardDataService from "../T04services/BoardService.js"
import BoardDataService from "../T04services/BoardService-ssj.js"

const BoardTablesList = () => {


    const [boards, setBoards] = useState([]);

    useEffect( () => {
        //getBoards();
        allBoards();
    },[]    //빈배열[] 이 있는 경우는, 초기화 되었을때 1번만  랜더링 된다.     참고, []가 아예 없으면 랜더링 될때만다 바뀐다.
    );

//.then을 사용하면 async() 안쓰고, await안써도 된다.

    const getBoards = async() => { 


        const response = await axios.get("http://146.56.137.240:8282/hjs/rboard/list");//선생님 미국 서버
        //const response = axios.get("http://146.56.137.240:8282/hjs/rboard/list");//선생님 미국 서버
  
        //  
        //ssj list 
        //   server :  t01_ssj_json5_restful_ajax_list
        //  http://localhost:8282/ex/rest/board/list.json
        //

        console.log(response.data);
        setBoards(response.data);
    }

    const allBoards = () => {
        console.log('allBoard()------ssj-1----------');
        BoardDataService.getAll()
        .then((response)=>{//.then 은  성공하게 되면 의 뜻.
            setBoards(response.data);
            console.log(response.data);

        })
        .catch((e)=>{
            console.log(e);
        })
    };



    const deleteBoard = (e) => {
       
        const{ value, name} = e.target;
        //const bid = event.target.value;

        BoardDataService.remove(value)
        //BoardDataService.remove(bid)
        
        .then((response)=>{//.then 은  성공하게 되면 의 뜻.

            

            // BoardDataService.getAll()
            // .then((response)=>{//.then 은  성공하게 되면 의 뜻.
            //     setBoards(response.data);
            //     console.log(response.data);
    
            // })

        })
        .catch((e)=>{
            console.log(e);
        })


    }

    return (

        // sbAdmin에서 가지고 온것

        <div className="container mt-3">
        {/* // <!-- Begin Page Content --> */}
        <div className="container-fluid">
          {/* <!-- Page Heading --> */}
          <h1 className="h3 mb-2 text-gray-800">게시판</h1>
          <p className="mb-4">
            DataTables is a third party plugin that is used to generate the demo
            table below. For more information about DataTables, please visit the{' '}
            <a target="_blank" href="https://datatables.net">
              official DataTables documentation
            </a>
            .
          </p>
  
          {/* <!-- DataTales Example --> */}
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">
                DataTables Example
              </h6>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table
                  className="table table-bordered"
                  id="dataTable"
                  width="100%"
                  cellspacing="0"
                >
                  <thead>
                    <tr>
                      <th>번호</th>
                      <th>이름</th>
                      <th>제목</th>
                      <th>날짜</th>
                      <th>히트</th>
                      <th className="text-center">삭제</th>
                    </tr>
                  </thead>
                  <tbody>
                    {boards &&
                      boards.map((board) => (
                        <tr key={board.bid}>
                          <td>{board.bid}</td>
                          <td>{board.bname}</td>
  
                          <td>
                            <Link to={'/board/' + board.bid}>{board.btitle}</Link>
                          </td>
  
                          <td>{board.bdate}</td>
                          <td>{board.bhit}</td>
                          <td className="text-center">
                            <button
                              className="btn btn-success"
                              value={board.bid}
                              onClick={deleteBoard}
                            >
                              삭제
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              <hr />
              <Link to="/write">
                <button type="button" className="btn btn-primary">
                  글쓰기
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/*<!-- /.container-fluid --> */}
      </div>




    );
};





export default BoardTablesList;