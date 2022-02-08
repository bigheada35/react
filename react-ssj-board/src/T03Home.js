import React from 'react';
import {Link} from "react-router-dom";

const Home = () => {




    return (
        <div>
            <br/><br/><br/><br/>
            <main>
                <h2>Main 이미 있다.</h2>
                {/* <p> Main</p> */}
            </main>    

            <nav>
                <Link to = "/T03About">About</Link>
            </nav>


        </div>
    );
};

export default Home;



