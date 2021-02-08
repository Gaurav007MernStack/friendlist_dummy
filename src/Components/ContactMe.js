import React from 'react';
import ReactDOM from 'react-dom';
import "../Style/style.css";

function Contact(){
    return <div className="mainContact">
        <div className="headContact">
            <div className="headText"><div><b>👐Contact👐👉</b></div></div>
        </div>
        <div className="addContact">
            <div className="addImg"><b>Address🕵🏼‍♂️</b></div>
            <div className="addText">Jaipur</div>
        </div>
        <div className="noContact">
            <div className="noImg"><b>Contact-No📱</b></div>
            <div className="noText">9950411167</div>
        </div>
        <div className="emailContact">
            <div className="emailImg"><b>E-mail📧</b></div>
            <div className="emailText">singhgaurav1998gs@gmail.com</div>
        </div>
    </div>
}

export default Contact;