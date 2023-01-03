import React, { Component } from "react";
import CV from "./CV";
import uniqid from "uniqid";
import { type } from "@testing-library/user-event/dist/type";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
      personalInfo: {
        firstName: "",
        lastName: "",
        phoneNum: "",
        email: "",
      },
      educationArr: [this.makeEducationGroup(), this.makeEducationGroup()],
    };

    this.handlePersonalInfoChange = this.handlePersonalInfoChange.bind(this);
    this.handleEducationChange = this.handleEducationChange.bind(this);
    this.addName = this.addName.bind(this);
    this.makeEducationGroup = this.makeEducationGroup.bind(this);
    this.addToEducationArr = this.addToEducationArr.bind(this);
  }

  // handles a change in the personal info section
  handlePersonalInfoChange(event) {
    console.log("handlePersonalInfoChange called.");
    let value = event.target.value; // asign value in input to variable

    // set the new value by taking the previous state as a constructor.
    // set the personalInfo object to be the previous state's personalInfo,
    // in addition to the new value, event.target.name refers to the name
    // property of the input
    this.setState(prevState => ({
      personalInfo: { ...prevState.personalInfo,  [event.target.name]: value }
    }))
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
      educationArr: tempArr
    })
    console.log(this.state.educationArr);
  }
  
  addName(event) {
    console.log("addName called.");
    this.setState({
      count: this.state.count + 1,
    });
  }

  // create and return an education group object
  makeEducationGroup() {
    console.log("makeEducationGroup called.");
    let obj = { // create object
      name: "",
      from: "",
      to: "",
      degree : "",
      major: "",
      city: "",
      state: "",
      id: uniqid()
    };
    return obj;
  }

  // add an education group object to educationArr
  addToEducationArr() {
    console.log("addToEducationArr called.")
    let obj = this.makeEducationGroup(); // create object using helper function

    this.setState(prevState => ({ // add the new object to educationArr
      educationArr: [...prevState.educationArr, obj]
  }));
  }

  render() {
    return (
      <main>
        <form>
          {/**Start of general information rendering */}
          <div className="form-section">
            <div className="form-group">
              <div className="form-row pair">
                <div className="form-input">
                  <label htmlFor="firstName">First Name</label>
                  <input onChange={this.handlePersonalInfoChange} type="text" name="firstName" id="first-name"></input>
                </div>
                <div className="form-input">
                  <label htmlFor="last-name">Last Name</label>
                  <input onChange={this.handlePersonalInfoChange} type="text" name="lastName" id="last-name"></input>
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
                  ></input>
                </div>
                <div className="form-input">
                  <label htmlFor="email">Email</label>
                  <input onChange={this.handlePersonalInfoChange} type="email" name="email" id="email"></input>
                </div>
              </div>
            </div>
          </div>

          {/**Start of education rendering */}
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
                      ></input>
                    </div>
                  </div>
                  <div className="form-row pair">
                    <div className="form-input">
                      <label htmlFor={"school-name-" + i}>From</label>
                      <input
                        onChange={this.handleEducationChange}
                        type="text"
                        name="from"
                        id={"school-name-" + i}
                      ></input>
                    </div>
                    <div className="form-input">
                      <label htmlFor={"school-To-" + i}>To</label>
                      <input
                        onChange={this.handleEducationChange}
                        type="text"
                        name="to"
                        id={"school-To-" + i}
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
                      ></input>
                    </div>
                    <div className="form-input">
                      <label htmlFor={"school-major-" + i}>Major</label>
                      <input
                        onChange={this.handleEducationChange}
                        type="text"
                        name="major"
                        id={"school-major-" + i}
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
                      ></input>
                    </div>
                    <div className="form-input">
                      <label htmlFor={"school-state-" + i}>State</label>
                      <input
                        onChange={this.handleEducationChange}
                        type="text"
                        name="state"
                        id={"school-state-" + i}
                      ></input>
                    </div>
                  </div>
                  <div className="form-row">
                    <button
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
        </form>
        <CV></CV>
      </main>
    );
  }
}

export default Form;
