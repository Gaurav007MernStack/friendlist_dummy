import React from 'react';
import ReactDOM from 'react-dom';
import "../Style/style.css";

function Details(){
    return <div className="detailParent">
        <div className="detailSide">
            <div className="info">
                <div className="infoHead">
                    <h2>Personal👇</h2>
                    <h4>Information</h4>
                    <p>MySelf Gaurav Singh as a Full Stack Developer</p>
                </div>
                
            </div>
            <div className="education">
                <div className="eduHead">
                    <h2>Education👇</h2>
                    <h4>2016-20 University</h4>
                    <p>M.A.I.E.T. Jaipur</p>
                    <h4>2016 College</h4>
                    <p>12th With PCM</p>
                </div>
            </div>
            <div className="hobbies">
                <div className="hobHead">
                    <h2>Hobbies👇</h2>
                    <ul>
                        <li>Music</li>
                        <li>Game</li>
                        <li>Travelling</li>
                        <li>Photography</li>   
                    </ul>
                </div>
            </div>
        </div>
        <div className="detailMain">
            <div className="skill">
                <div className="sklHead">
                <h2>Skills👇</h2>
                </div>
                <ul className="skillList">
                    <li className="listIcon">HTML</li>
                    <li className="listIcon">CSS</li>
                    <li className="listIcon">JAVA_SCRIPT</li>
                    <li className="listIcon">MONGO_DB</li>
                    <li className="listIcon">NODE_JS</li>
                    <li className="listIcon">REACT_JS</li>
                </ul>
            </div>
            <div className="project">
                <div className="prjHead">
                    <h2>Projects:👇</h2>
                </div>
                <div><a href="https://github.com/Gaurav007MernStack/WhatsApp-Clone">⚔️WhatsApp Web Clone</a></div>
                <div><a href="https://github.com/Gaurav007MernStack/Weather-App">⚔️Weather App</a></div>
                <div><a href="https://github.com/Gaurav007MernStack/Facebook-clone">⚔️FaceBook Clone</a></div>
                <div><a href="https://github.com/Gaurav007MernStack/Full-JavaScript-Game-">⚔️Car_Game Based On JS</a></div>
                <p href="https://github.com/Gaurav007MernStack?tab=repositories">👉  for more follow my GitHub Link:</p>
            </div>
        </div>
    </div>
}

export default Details;