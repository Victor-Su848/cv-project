import React, { Component } from "react";

/** 
class Experience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="experience-section">
        <h1>Experience</h1>
        {this.props.experienceArr.map((e, i) => {
          return (
          <div key={e.id} className="experience">
            
            <div className="cv-row">
                <h3>{e.name}</h3>
                <p className="from-to">{e.from + " - " + e.to}</p>
            </div>
            <div className="cv-row">
                <p className="italicize">{e.position}</p>
                <p className="italicize">{e.city + ", " + e.state}</p>
            </div>
            <div className="cv-row">
                <p className="tasks">{e.tasks}</p>
            </div>
          </div>
          );
        })}
      </div>
    );
  }
} */

function Experience(props) {
  return (
    <div className="experience-section">
      <h1>Experience</h1>
      {props.experienceArr.map((e, i) => {
        return (
        <div key={e.id} className="experience">
          
          <div className="cv-row">
              <h3>{e.name}</h3>
              <p className="from-to">{e.from + " - " + e.to}</p>
          </div>
          <div className="cv-row">
              <p className="italicize">{e.position}</p>
              <p className="italicize">{e.city + ", " + e.state}</p>
          </div>
          <div className="cv-row">
              <p className="tasks">{e.tasks}</p>
          </div>
        </div>
        );
      })}
    </div>
  );
}

export default Experience;
