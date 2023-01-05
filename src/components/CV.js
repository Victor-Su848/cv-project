import React, { Component } from "react";
import PersonalInfo from "./PersonalInfo";

class CV extends Component {
  constructor(props) {
    super(props);

    console.log("This is the prop " + props.personalInfo.firstName);
  }

  render() {
    return (
      <div>
        <p>THIS IS THE CV {this.props.personalInfo.firstName}</p>
        <PersonalInfo personalInfo={this.props.personalInfo}></PersonalInfo>
      </div>
    );
  }
}

export default CV;
