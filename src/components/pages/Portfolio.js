import React from 'react';

export default function Portfolio() {
  return (
    <div>
      <h1>Porfolio</h1>   
        <div className="card col-12 project1">
          <img id="profile-img" src={require('./images/tpg.png')} alt="project-img"></img>
          <div className="card-body">
            <h1 className="card-title">Team Profile Generator</h1>
            <p className="card-text">This is a Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person.
            To learn more about this project, <a href="https://github.com/ed2022/Team_Profile_Generator.git">click here.</a>
            </p>
          </div>
        </div>
        <div className="card col-12 project2">
          <img id="profile-img" src={require('./images/planit.jpg')} alt="project-img"></img>
          <div className="card-body">
            <h1 className="card-title">Planit</h1>
            <p className="card-text">So know we have gotten to know each other, here are some projects that I was apart of. I enjoy making things from scratch as well as build upon what has already been created.To learn more about this project,<a href="https://github.com/kelseykodes/PlanIt.git">click here.</a>To deploy the page, <a href="https://evening-earth-70019.herokuapp.com/">click here.</a> 
            </p>
          </div>
        </div>
        <div className="card col-12 project3">
          <img id="profile-img" src={require('./images/note.png')} alt="project-img"></img>
          <div className="card-body">
            <h1 className="card-title">Note Taker</h1>
            <p className="card-text about-mes">This applciation can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file. This application will be deployed on heroku.
            To learn more about this project, <a href="https://github.com/ed2022/Note_Taker.git">click here.</a> To deploy the page, <a href=" https://sheltered-waters-22281.herokuapp.com/">click here.</a> 
              </p>
          </div>
      </div>
    </div>
  );
}
