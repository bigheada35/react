import React from 'react';
import {useParams, Navigate} from "react-router-dom";
import {useState, useEffect} from 'react';
import BoardDataService from '../services/BoardService.js'

const Board = () => {

    const initialBoardState = {
        bid:null,
        bname:"",
        btitle:"",
        bcontent:"",
    }
    const {bid} = useParams();
    const [board, setBoard] = useState(initialBoardState);
    const [submitted, setSubmitted] = useState(false);
    const handleInputChange = (event)=>{
        const {name, value} = event.target;
        setBoard({...board, [name]:value});
    }

    useEffect(()=>{
        getBoard(bid);
    },[]
    ) 
    const getBoard = (id)=>{
        BoardDataService.get(id)
        .then((response)=>{
            setBoard(response.data);
        })
        .catch((e)=>{
            console.log(e);
        })
    }
    const initBoard = ()=>{
        let initialBoard={
            bid : board.bid,
            bname : "이름",
            btitle : "제목",
            bcontent: "내용을 넣으시오",
        }
        setBoard(initBoard);
    }
    const updateBoard = ()=>{
        let data = {
            bid : board.bid,
            bname : board.bname,
            btitle : board.btitle,
            bcontent : board.bcontent,
        }
        BoardDataService.update(data.bid, data)
        .then((response)=>{
            setSubmitted(true);
        })
        .catch((e)=>{
            console.log(e);
        })
    }
    return (
        submitted ?(
            <Navigate to = {{pathname: '/'}} />
        ):(
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
        )



    );
};

export default Board;

