import React from 'react';
import Header from "./components/Headers";
import BoardTablesList from "./pages/BoardTablesList";
import {Link, Route, Routes} from "react-router-dom";
import BoardWrite from "./components/BoardWrite";
import Board from "./components/Board";


const BoardRoot = () => {



    return (
        <div>
            
            <Routes>
                <Route path = "/" element ={ <BoardTablesList/> } />
                <Route path = "/write" element ={ <BoardWrite/> } />

                                {/* 주의 :  /board/:bid에서   : 사용 */}
                <Route path = "/board/:bid" element ={ <Board/> } />


            </Routes>

        </div>
    );
};



export default BoardRoot;




