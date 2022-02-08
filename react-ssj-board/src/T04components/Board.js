import React from 'react';
import {useParams, Navigate} from "react-router-dom";
import { useState, useEffect } from 'react';
import BoardDataService from '../T04services/BoardService.js';

// 임시 테스트
//http://146.56.137.240:8282/hjs/rboard/5000


const Board = () => {

    const initialBoardState = {
        bid:null,
        bname:"",
        btitle:"",
        bcontent:"",
    }

    const {bid} = useParams();//route에서 받은 파람.



    const [board, setBoard] = useState(initialBoardState);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = (event)=>{

        const {name, value} = event.target;

        console.log(`${name} ${value} =========`);   // 템플릿 연산자
        setBoard({...board, [name]:value});
    }

    useEffect( ()=>{
        getBoard(bid);
    },[]
    );

    const getBoard = (id) => {

        BoardDataService.get(id)
        .then( (response) => {

            setBoard(response.data);

            console.log(response.data);
        })
        .catch( (e)=>{
            console.log(e);
        })


    };

    const initBoard = ()=> {
        let initialBoard = {
            bid: board.bid,
            bname: "이름",
            btitle: "제목",
            bcontent: "내용을 넣으시요",
        }
        setBoard(initBoard);
    };

    const updateBoard = () => {
        let data = {
            bid: board.bid,
            bname: board.bname,
            btitle: board.btitle,
            bcontent: board.bcontent,
        }

        BoardDataService.update(data.bid, data)
        .then( (response) => {
            setSubmitted(true);   //true가 되면 다시 한번 return 아랫 부분이 호출이 된다.??
            console.log(response.data);
        })
        .catch( (e)=>{
            console.log(e);
        })




    };

    return submitted ? (
        <Navigate to={{ pathname: '/' }} />
      ) : (
        <div>
          <div className="container mt-3">
            <div className="container">
              <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                  <h3 className="text-center">업데이트도 할수 있어요</h3>
                  <div className="card-body">
                    <div className="form-group">
                      <label> Type </label>
                      <select placeholder="type" className="form-control">
                        <option value="1">자유게시판</option>
                        {/* <option value="2">질문과 답변</option> */}
                      </select>
                    </div>
                    <div className="form-group">
                      <label> Board ID </label>
                      <input
                        type="text"
                        placeholder="bid"
                        name="bid"
                        className="form-control"
                        value={board.bid}
                      />
                    </div>
                    <div className="form-group">
                      <label> 이름 </label>
                      <input
                        type="text"
                        placeholder="bname"
                        name="bname"
                        className="form-control"
                        value={board.bname}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label> 제목 </label>
                      <input
                        placeholder="btitle"
                        name="btitle"
                        className="form-control"
                        value={board.btitle}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label> 내용 </label>
                      <textarea
                        placeholder="bcontent"
                        name="bcontent"
                        className="form-control"
                        rows="5"
                        value={board.bcontent}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="mt-3">
                      <button className="btn btn-success" onClick={updateBoard}>
                        Update
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={initBoard}
                        style={{ marginLeft: '10px' }}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );




};

export default Board;






