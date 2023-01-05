import React, { Component } from "react";
import PersonalInfo from "./PersonalInfo";
import Education from "./Education";

class CV extends Component {
  constructor(props) {
    super(props);

    console.log("This is the prop " + props.personalInfo.firstName);
  }

  render() {
    return (
      <div className="cv">
        <PersonalInfo personalInfo={this.props.personalInfo}></PersonalInfo>
        <Education educationArr={this.props.educationArr}></Education>
      </div>
    );
  }
}

export default CV;
