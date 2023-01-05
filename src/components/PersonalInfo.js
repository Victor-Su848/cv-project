import React, { Component } from "react";

class PersonalInfo extends Component {
  constructor(props) {
    super(props);
  }

  logPersonalInfo() {
    console.log(this.props.personalInfo);
  }

  render() {
    return (
      <div className="personal-info">
        <h1>{this.props.personalInfo.firstName} {this.props.personalInfo.lastName}</h1>
        <h2><a href={"tel:" + this.props.personalInfo.phoneNum}>{this.props.personalInfo.phoneNum}</a> <a href={"mailto:" + this.props.personalInfo.email}>{this.props.personalInfo.email}</a></h2>
      </div>
    );
  }
}


export default PersonalInfo;
