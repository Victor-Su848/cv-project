import React, { Component } from "react";
import CV from "./CV";
import uniqid from "uniqid";
import { type } from "@testing-library/user-event/dist/type";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personalInfo: {
        // holds personal information
        firstName: "John",
        lastName: "Doe",
        phoneNum: "123-456-7890",
        email: "john.doe123@gmail.com",
      },
      educationArr: [
        // holds education objects
        {
          name: "Example School 2",
          from: "2025",
          to: "2023",
          degree: "Bachelors of Science",
          major: "Computer Science",
          city: "City 2",
          state: "State 2",
          id: uniqid(),
        },
        {
          name: "Example School 1",
          from: "2022",
          to: "2023",
          degree: "Bachelors of Science",
          major: "Computer Science",
          city: "City 1",
          state: "State 1",
          id: uniqid(),
        },
      ],
      experienceArr: [
        // holds experience objects
        {
          name: "Company 3",
          position: "Software Engineering Intern (:",
          from: "May 2023",
          to: "July 2023",
          city: "City 3",
          state: "State 3",
          tasks:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus mattis massa, in pretium mi hendrerit ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris iaculis tellus et libero congue dapibus. Curabitur id enim at tortor mattis ultrices vel id ipsum.",
          id: uniqid(),
        },
        {
          name: "Company 2",
          position: "Employee",
          from: "June 2022",
          to: "Jan 2023",
          city: "City 2",
          state: "State 2",
          tasks:
            "Cras sit amet facilisis dolor, sit amet suscipit metus. Integer libero magna, tincidunt eu pretium sed, rhoncus at mauris. Donec nec maximus libero. Maecenas pellentesque quis arcu id facilisis. Curabitur porta lorem odio, sed posuere neque ullamcorper in. Vivamus malesuada volutpat tellus sit amet egestas. Pellentesque porttitor gravida dictum. Integer sed neque vulputate sapien laoreet placerat venenatis eget purus. Praesent fringilla cursus enim at gravida. Etiam vel tempus neque, vitae molestie quam. Aliquam felis nisi, fringilla eget odio ac, ornare dignissim diam.",
          id: uniqid(),
        },
        {
          name: "Company 1",
          position: "Worker",
          from: "Feb 2021",
          to: "June 2022",
          city: "City 1",
          state: "State 1",
          tasks:
            "Pellentesque in eros non elit porttitor fringilla vitae eu massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec a pharetra quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet volutpat ligula. Cras leo justo, pharetra eget elit eget, aliquam convallis ex. Vivamus malesuada volutpat tellus sit amet egestas. Pellentesque porttitor gravida dictum. Integer sed neque vulputate sapien laoreet placerat venenatis eget purus. Praesent fringilla cursus enim at gravida.",
          id: uniqid(),
        },
      ],
    };

    this.handlePersonalInfoChange = this.handlePersonalInfoChange.bind(this);

    // binds functions for education section
    this.handleEducationChange = this.handleEducationChange.bind(this);
    this.removeEducationGroup = this.removeEducationGroup.bind(this);
    this.makeEducationGroup = this.makeEducationGroup.bind(this);
    this.addToEducationArr = this.addToEducationArr.bind(this);

    // binds functions for experience section
    this.handleExperienceChange = this.handleExperienceChange.bind(this);
    this.removeExperienceGroup = this.removeExperienceGroup.bind(this);
    this.makeExperienceGroup = this.makeExperienceGroup.bind(this);
    this.addToExperienceArr = this.addToExperienceArr.bind(this);
  }

  // handles a change in the personal info section
  handlePersonalInfoChange(event) {
    console.log("handlePersonalInfoChange called.");
    let value = event.target.value; // asign value in input to variable

    // set the new value by taking the previous state as a constructor.
    // set the personalInfo object to be the previous state's personalInfo,
    // in addition to the new value, event.target.name refers to the name
    // property of the input
    this.setState((prevState) => ({
      personalInfo: { ...prevState.personalInfo, [event.target.name]: value },
    }));
    console.log(this.state.personalInfo); // print personalInfo object
  }

  // handles a change in an education group
  handleEducationChange(event) {
    console.log("handleEducationChange called.");
    let value = event.target.value;
    let eventName = event.target.name;

    let indexChar = event.target.id.slice(-1);
    let indexNum = parseInt(indexChar);

    let tempArr = this.state.educationArr;
    tempArr[indexNum][eventName] = value;

    this.setState({
      educationArr: tempArr,
    });
    console.log(this.state.educationArr);
  }

  // removes an education group from educationArr
  removeEducationGroup(event) {
    let indexChar = event.target.id.slice(-1);
    let indexNum = parseInt(indexChar);

    let tempArr = this.state.educationArr;
    tempArr.splice(indexNum, 1);
    console.log(tempArr);

    this.setState({
      educationArr: tempArr,
    });
  }

  // create and return an education group object
  makeEducationGroup() {
    console.log("makeEducationGroup called.");
    let obj = {
      // create object
      name: "",
      from: "",
      to: "",
      degree: "",
      major: "",
      city: "",
      state: "",
      id: uniqid(),
    };
    return obj;
  }

  // add an education group object to educationArr
  addToEducationArr() {
    console.log("addToEducationArr called.");
    let obj = this.makeEducationGroup(); // create object using helper function

    this.setState((prevState) => ({
      // add the new object to educationArr
      educationArr: [...prevState.educationArr, obj],
    }));
  }

  // handles a change in an experience group
  handleExperienceChange(event) {
    console.log("handleExperienceChange called.");
    let value = event.target.value;
    let eventName = event.target.name;

    let indexChar = event.target.id.slice(-1);
    let indexNum = parseInt(indexChar);

    let tempArr = this.state.experienceArr;
    tempArr[indexNum][eventName] = value;

    this.setState({
      experienceArr: tempArr,
    });
    console.log(this.state.experienceArr);
  }

  // removes an education group from experienceArr
  removeExperienceGroup(event) {
    let indexChar = event.target.id.slice(-1);
    let indexNum = parseInt(indexChar);

    let tempArr = this.state.experienceArr;
    tempArr.splice(indexNum, 1);
    console.log(tempArr);

    this.setState({
      experienceArr: tempArr,
    });
  }

  // create and return an education group object
  makeExperienceGroup() {
    console.log("makeExperienceGroup called.");
    let obj = {
      // create object
      name: "",
      position: "",
      from: "",
      to: "",
      tasks: "",
      id: uniqid(),
    };
    return obj;
  }

  // add an experience group object to experienceArr
  addToExperienceArr() {
    console.log("addToExperienceArr called.");
    let obj = this.makeExperienceGroup(); // create object using helper function

    this.setState((prevState) => ({
      // add the new object to educationArr
      experienceArr: [...prevState.experienceArr, obj],
    }));
  }

  render() {
    return (
      <main>
        <form>
          <h1>Personal Information</h1>
          {/**Start of general information rendering */}
          <div className="form-section">
            <div className="form-group">
              <div className="form-row pair">
                <div className="form-input">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    onChange={this.handlePersonalInfoChange}
                    type="text"
                    name="firstName"
                    id="first-name"
                    value={this.state.personalInfo.firstName}
                  ></input>
                </div>
                <div className="form-input">
                  <label htmlFor="last-name">Last Name</label>
                  <input
                    onChange={this.handlePersonalInfoChange}
                    type="text"
                    name="lastName"
                    id="last-name"
                    value={this.state.personalInfo.lastName}
                  ></input>
                </div>
              </div>
              <div className="form-row pair">
                <div className="form-input">
                  <label htmlFor="phoneNum">Phone Number</label>
                  <input
                    onChange={this.handlePersonalInfoChange}
                    type="tel"
                    name="phoneNum"
                    id="phone-number"
                    value={this.state.personalInfo.phoneNum}
                  ></input>
                </div>
                <div className="form-input">
                  <label htmlFor="email">Email</label>
                  <input
                    onChange={this.handlePersonalInfoChange}
                    type="email"
                    name="email"
                    id="email"
                    value={this.state.personalInfo.email}
                  ></input>
                </div>
              </div>
            </div>
          </div>

          {/**Start of education rendering */}
          <h1>Education</h1>
          <div className="form-section">
            {this.state.educationArr.map((e, i) => {
              return (
                <div key={e.id} className="form-group">
                  <div className="form-row single">
                    <div className="form-input">
                      <label htmlFor={"school-name-" + i}>School Name</label>
                      <input
                        onChange={this.handleEducationChange}
                        type="text"
                        name="name"
                        id={"school-name-" + i}
                        value={e.name}
                      ></input>
                    </div>
                  </div>
                  <div className="form-row pair">
                    <div className="form-input">
                      <label htmlFor={"school-from-" + i}>From</label>
                      <input
                        onChange={this.handleEducationChange}
                        type="text"
                        name="from"
                        id={"school-from-" + i}
                        value={e.from}
                      ></input>
                    </div>
                    <div className="form-input">
                      <label htmlFor={"school-To-" + i}>To</label>
                      <input
                        onChange={this.handleEducationChange}
                        type="text"
                        name="to"
                        id={"school-To-" + i}
                        value={e.to}
                      ></input>
                    </div>
                  </div>
                  <div className="form-row pair">
                    <div className="form-input">
                      <label htmlFor={"school-degree-" + i}>Degree</label>
                      <input
                        onChange={this.handleEducationChange}
                        type="text"
                        name="degree"
                        id={"school-degree-" + i}
                        value={e.degree}
                      ></input>
                    </div>
                    <div className="form-input">
                      <label htmlFor={"school-major-" + i}>Major</label>
                      <input
                        onChange={this.handleEducationChange}
                        type="text"
                        name="major"
                        id={"school-major-" + i}
                        value={e.major}
                      ></input>
                    </div>
                  </div>
                  <div className="form-row pair">
                    <div className="form-input">
                      <label htmlFor={"school-city-" + i}>City</label>
                      <input
                        onChange={this.handleEducationChange}
                        type="text"
                        name="city"
                        id={"school-city-" + i}
                        value={e.city}
                      ></input>
                    </div>
                    <div className="form-input">
                      <label htmlFor={"school-state-" + i}>State</label>
                      <input
                        onChange={this.handleEducationChange}
                        type="text"
                        name="state"
                        id={"school-state-" + i}
                        value={e.state}
                      ></input>
                    </div>
                  </div>
                  <div className="form-row">
                    <button
                      onClick={this.removeEducationGroup}
                      id={"remove-btn-" + i}
                      className="add-remove-btn"
                      type="button"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
            <button
              className="add-remove-btn"
              type="button"
              onClick={this.addToEducationArr}
            >
              Add
            </button>
          </div>

          <h1>Experience</h1>
          {/**Start of experience rendering */}
          <div className="form-section">
            {this.state.experienceArr.map((e, i) => {
              return (
                <div key={e.id} className="form-group">
                  <div className="form-row pair">
                    <div className="form-input">
                      <label htmlFor={"company-name-" + i}>Company</label>
                      <input
                        onChange={this.handleExperienceChange}
                        type="text"
                        name="name"
                        id={"company-name-" + i}
                        value={e.name}
                      ></input>
                    </div>
                    <div className="form-input">
                      <label htmlFor={"company-To-" + i}>Position</label>
                      <input
                        onChange={this.handleExperienceChange}
                        type="text"
                        name="position"
                        id={"company-position-" + i}
                        value={e.position}
                      ></input>
                    </div>
                  </div>
                  <div className="form-row pair">
                    <div className="form-input">
                      <label htmlFor={"company-from-" + i}>From</label>
                      <input
                        onChange={this.handleExperienceChange}
                        type="text"
                        name="from"
                        id={"company-from-" + i}
                        value={e.from}
                      ></input>
                    </div>
                    <div className="form-input">
                      <label htmlFor={"company-to-" + i}>To</label>
                      <input
                        onChange={this.handleExperienceChange}
                        type="text"
                        name="to"
                        id={"company-to-" + i}
                        value={e.to}
                      ></input>
                    </div>
                  </div>
                  <div className="form-row pair">
                    <div className="form-input">
                      <label htmlFor={"experience-city-" + i}>City</label>
                      <input
                        onChange={this.handleExperienceChange}
                        type="text"
                        name="city"
                        id={"experience-city-" + i}
                        value={e.city}
                      ></input>
                    </div>
                    <div className="form-input">
                      <label htmlFor={"experience-state-" + i}>State</label>
                      <input
                        onChange={this.handleExperienceChange}
                        type="text"
                        name="state"
                        id={"experience-state-" + i}
                        value={e.state}
                      ></input>
                    </div>
                  </div>
                  <div className="form-row single">
                    <div className="form-input">
                      <label htmlFor={"company-tasks-" + i}>Tasks</label>
                      <input
                        onChange={this.handleExperienceChange}
                        type="text"
                        name="tasks"
                        id={"company-tasks-" + i}
                        value={e.tasks}
                      ></input>
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <button
                      onClick={this.removeExperienceGroup}
                      id={"remove-btn-" + i}
                      className="add-remove-btn"
                      type="button"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
            <button
              className="add-remove-btn"
              type="button"
              onClick={this.addToExperienceArr}
            >
              Add
            </button>
          </div>
        </form>
        <CV
          personalInfo={this.state.personalInfo}
          educationArr={this.state.educationArr}
          experienceArr={this.state.experienceArr}
        />
      </main>
    );
  }
}

export default Form;
