import './App.css';
import React from "react";

class App2 extends React.Component {
  render() {
    return<div className="Resume">
      <header className="Resume-header">
        <h1>Skills</h1>

        <div className="rounded-circle basic-cir"> 
          <h2>Basic Skills</h2>
        </div>
        <div className="rounded-circle html-cir">
            <p>HTML</p>
          </div>
          <div className="rounded-circle css-cir">
            <p>CSS</p>
          </div>
          <div className="rounded-circle js-cir">
            <p>Javascript</p>
          </div>
          <div className="rounded-circle java-cir">
            <p>Java</p>
          </div>
          <div className="rounded-circle cs-cir">
            <p>C++</p>
          </div>
          <div className="rounded-circle c-cir">
            <p>C</p>
          </div>

        <div className="project">
        <h1>Projects</h1>
        <ul className='list-group'>
            <li className="list-group-item list-group-item-action list-group-item-primary"><b>Hostel Management System :</b>
            <p>Language Used - HTML,CSS,Javascript,Java,MySQL</p></li>
            <li className="list-group-item list-group-item-action list-group-item-secondary"><b>Web Music Player :</b>
            <p>Language Used - HTML,CSS,Javascript</p></li>
            <li className="list-group-item list-group-item-action list-group-item-success"><b>Online Raw Food</b></li>
        </ul>
        </div>
      </header>
    </div>
  }
}

export default App2;