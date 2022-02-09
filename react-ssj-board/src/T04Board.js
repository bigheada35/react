import React from 'react';
import Header from "./T04components/Header";
import BoardTablesList from './T04pages/BoardTablesList';
//import BoardTablesList from './T04pages/BoardTablesList-ssj';

import { Link, Route, Routes } from 'react-router-dom';
import BoardWrite from "./T04components/BoardWrite";
import Board from "./T04components/Board";

import BoardPaging from './T04pages/BoardListWithPaging';


const T04Board = () => {




    return (
        <div>
            
            <Header></Header>


            {/* <BoardTablesList></BoardTablesList> */}

            <Routes>
                {/* <Route path = "/" element ={ <BoardTablesList/> } /> */}
                <Route path = "/" element ={ <BoardPaging/> } />
                <Route path = "/write" element ={ <BoardWrite/> } />

                                {/* 주의 :  /board/:bid에서   : 사용 */}
                <Route path = "/board/:bid" element ={ <Board/> } />


            </Routes>




        </div>
    );
};



export default T04Board;