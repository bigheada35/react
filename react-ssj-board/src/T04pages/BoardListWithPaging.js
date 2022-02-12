import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import BoardDataService from '../T04services/BoardService';




const BoardListWithPaging = () => {

  const [boards, setBoards] =  useState([]);// 리스트로 받아오므로 배열임
  const [paging, setPaging] = useState({}); // 객체로 받아옴


  useEffect(()=>{
    retrieveBoards();
  },[]); //1번만 

  const retrieveBoards = () => {
    BoardDataService.getPagingList()
      .then((response) => {
        setBoards(response.data.boards);
        setPaging(response.data.page);

        //console.log(response.data.boards);
        //console.log(response.data.page);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  //링크객체 : e
  const onClickPaging = (e) => {
    e.preventDefault(); // 이벤트 기본 동작 을 멈추기
    // "/rboard/list2" + "?pageNum=20"
    //console.log(e.target.pathname);// /rboard/list2
    //console.log(e.target.search);//?pageNum=20
    
    BoardDataService.getPagingList(e.target.pathname, e.target.search)
      .then((response) => {
        setBoards(response.data.boards);
        setPaging(response.data.page);

        console.log(response.data.boards);
        console.log(response.data.page);
      })
      .catch((e) => {
        console.log(e);
      });
  };


  const deleteBoard = (e) => {
    const { name, value } = e.target;

    console.log(name);
    console.log(value); 

    BoardDataService.remove(value)
      .then((response) => {
        //console.log(response.data);
        //console.log(value,boards.length);
        //삭제 하나씩 지우기
        //setBoards(boards.filter((board) => board.bid !== parseInt(value)));
        //삭제후 다시 서버에서 받아옴
        retrieveBoards();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  console.log(paging);
  return (
    <div className="container mt-3">
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


            <nav aria-label="Page navigation example">
              <ul class="pagination justify-content-center">

            {paging.pre === true && (
                //  ???? local host 3000 으로 link를  시도 하고 있는 지? 아닌지? 
                // 원래는 서버("http://146.56.137.240:8282/hjs", ) 에서 받아 오도록 되어야 하는데.
              <Link
                    className="page-link"
                to={
                  '/rboard/list2' +
                  '?pageNum=' +
                  (paging.startPage - 1) +
                  '&' +
                  'amount=' +
                  paging.cri.amount
                }
                onClick={onClickPaging}
              >
                {' '}
                이전{' '}
              </Link>
            )}

            {(() => {
              const row = [];
              for (let i = paging.startPage; i < paging.endPage; i++) {
                console.log(
                      "/rboard/list2" +
                        "?pageNum=" +
                    i +
                        "&" +
                        "amount=" +
                    paging.cri.amount,
                );
                row.push(
                      <li class="page-item" key={i}>
                  <Link
                          className="page-link"
                    to={
                      '/rboard/list2' +
                      '?pageNum=' +
                      i +
                      '&' +
                      'amount=' +
                      paging.cri.amount
                    }
                    onClick={onClickPaging}
                  >
                    {' '}
                    {i}
                   </Link>
                  </li>
                );
              }
              return row;
            })()}

            {paging.next === true && paging.endPage > 0 && (
                  <li class="page-item">
              <Link
                      className="page-link"
                to={
                  '/rboard/list2' +
                  '?pageNum=' +
                  (paging.endPage + 1) +
                  '&' +
                  'amount=' +
                  paging.cri.amount
                }
                onClick={onClickPaging}
              >
                {' '}
                다음{' '}
              </Link>
             </li>
            )}

              </ul>
            </nav>
            <div className="text-center">

            <hr />
            <Link to="/write">
              <button type="button" className="btn btn-primary">
                글쓰기
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>

    </div>
     // <!-- /.container-fluid -->
  );



};

export default BoardListWithPaging;

