import React, { useEffect } from 'react';
import {useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import BoardDataService from "../services/BoardService.js"


const BoardTablesList = () => {

    const [boards, setBoards] = useState([]);

    useEffect(()=>{
        allBoards();
    },[]
    );

    const allBoards = () => {
        console.log('allBoard------');
        BoardDataService.getAll()
        .then( (response)=>{
            setBoards(response.data);
            console.log(response.data);
        })
        .catch((e)=>{
            console.log(e);
        })

    };

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
                                            //onClick={deleteBoard}
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


