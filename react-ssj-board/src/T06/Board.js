import React from 'react';
import Header from './components/Header.js';
import BoardTablesList from './pages/BoardTablesList.js'

const Board = () => {
    
    return (
        <div>
            <Header></Header>
            <BoardTablesList></BoardTablesList>
        </div>
    );
};

export default Board;