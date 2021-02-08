import React from 'react';
import ReactDOM from 'react-dom';
import logo from './Images/logo.png';
import "../Style/style.css";

function App(){
    return <div className="main">
        <div className="logo">
            <img src={logo} className="imgLogo"></img>
        </div>
        <div className="desp">
            <h2>Gaurav Singh</h2>
            <h2>Sisodiya</h2>
            <p>Mern Stack Fellow at <b><span id="desText">The Youth Project</span></b> ...</p>
        </div>
    </div>
}

export default App;