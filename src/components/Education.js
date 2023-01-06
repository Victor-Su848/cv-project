import React, { Component } from "react";

class Education extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="education-section">
        <h1>Education</h1>
        {this.props.educationArr.map((e, i) => {
          return (
          <div key={e.id} className="education">
            
            <div className="cv-row">
                <h3>{e.name}</h3>
                <p className="from-to">{e.from + " - " + e.to}</p>
            </div>
            <div className="cv-row">
                <p className="italicize">{e.degree + " in " + e.major}</p>
                <p className="italicize">{e.city + ", " + e.state}</p>
            </div>

          </div>
          );
        })}
      </div>
    );
  }
}

export default Education;
