
// 설치 : 
// npm install react-router-dom

// Layout 구성 요소에는 <Outlet> 및 <Link> 요소가 있습니다.
// <Outlet>은 현재 선택된 경로를 렌더링합니다. 
// <Link>는 URL을 설정하고 인터넷 사용 기록을 추적하는 데 사용됩니다. 
// 내부 경로에 연결할 때마다 <a href=""> 대신 <Link>를 사용합니다. 
// "레이아웃 경로"는 탐색 메뉴와 같은 모든 페이지에 공통 콘텐츠를 삽입
// 하는 공유 구성 요소입니다. 

import {Link} from "react-router-dom";
import {Route,Routes} from "react-router-dom";
import About from "./T03About";
import Home from "./T03Home";


import React from 'react';

// index.js에서, 
// 수정전: import { BrowserRouter } from 'react-router-dom';
// 수정후 : import { BrowserRouter, Link } from 'react-router-dom';
// App를 호출하는 부분을 바꿈
/* 수정전 : 
         ReactDOM.render(
              < React.StrictMode >
                <App />
              </ React.StrictMode >,
        document.getElementById('root')
        );
  수정후 : 
        ReactDOM.render(
              <BrowserRouter>
                <App />
                </BrowserRouter>,
        document.getElementById('root')
        );
*/

const T03Router = () => {
    return (
        <div>
            

            <h1>환영 리액트 라우터</h1>
            <p>
                {/* ?? 스타일 주는 3가지 방법?? */}
                <Link style={ {margin:"30px"}}to = "/T03About">
                    About
                </Link>
                <Link to = "/">Home</Link>

                <Routes>
                    <Route path="/" element = {<Home/>}></Route>
                    <Route path="/T03About" element = {<About/>}></Route>
                </Routes>

            </p>


        </div>
    );
};

export default T03Router;