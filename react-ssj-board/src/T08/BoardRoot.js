import React from 'react';
import { Routes } from 'react-router';
import BoardWrite from "./T08/components/BoardWrite";
import Board from "./T08/components/Board";
import BoardPaging from "./T08/pages/BoardListWithPaging";

const BoardRoot = () => {



    return (
        <div>

            <Header></Header>
            <Routes>
                <Route path = "/" element ={ <BoardTableList></BoardTableList>}></Route>
                <Route path = "/write" element = {<BoardPaging/>} />
                <Route path = "/board:bid" element = {<Board/>}/>
            
            <Routes/>
        </div>
    );
};

export default BoardRoot;




