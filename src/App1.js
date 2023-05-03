import './App.css';
import React from "react";

class App1 extends React.Component {
  render() {
    return <div className="Resume">
      <header className="Resume-header">
        <h1>Career Objective</h1>
        <p>To Learn New Things,Sharp My knowledge and Skills While working for the organization.To Secure a challenging position in an organization to expand my learnings,knowledge and skills.Secure a responsible career opportunity to fully utilize my training and skills,while making a significant contribution to the success of the company.
        </p>
        <h1>Educational Details</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <td scope="col"></td>
              <th scope="col">Board</th>
              <th scope="col">School/University</th>
              <th scope="col">Percentage/CGPA</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">10th</th>
              <td>CBSE</td>
              <td>K.V Haldwani</td>
              <td>7.6</td>
            </tr>
            <tr>
              <th scope="row">12th</th>
              <td>CBSE</td>
              <td>Manas Academy</td>
              <td>63.4%</td>
            </tr>
            <tr>
              <th scope="row">Graduation</th>
              <td>BCA</td>
              <td>Kumaun University</td>
              <td>60.6%</td>
            </tr>
            <tr>
              <th scope="row">Post Graduation</th>
              <td>MCA</td>
              <td>Graphic Era Hill University</td>
              <td>77%</td>
            </tr>
          </tbody>
        </table>
      </header>
    </div>
  }
}

export default App1;
