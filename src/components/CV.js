import React, { Component } from "react";
import PersonalInfo from "./PersonalInfo";
import Education from "./Education";
import Experience from "./Experience";
/**
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
        <Experience experienceArr={this.props.experienceArr}></Experience>
      </div>
    );
  }
} */

function CV(props) {
  return (
    <div className="cv">
      <PersonalInfo personalInfo={props.personalInfo}></PersonalInfo>
      <Education educationArr={props.educationArr}></Education>
      <Experience experienceArr={props.experienceArr}></Experience>
    </div>
  );
}

export default CV;
