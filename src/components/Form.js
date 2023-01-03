import React, { Component } from "react";
import CV from "./CV";

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
      educationArr: [this.makeEducationGroup],
    };

    this.handlePersonalInfoChange = this.handlePersonalInfoChange.bind(this);
    this.addName = this.addName.bind(this);
    this.makeEducationGroup = this.makeEducationGroup.bind(this);
  }

  // handles a change in the personal info section
  handlePersonalInfoChange(event) {
    console.log(this.state.personalInfo);
    let value = event.target.value;

    // set the new value by taking the previous state as a constructor.
    // set the personalInfo object to be the previous state's personalInfo,
    // in addition to the new value, event.target.name refers to the name
    // property of the input
    this.setState(prevState => ({
      personalInfo: { ...prevState.personalInfo,  [event.target.name]: value }
    }))

    console.log(this.state.personalInfo);
  }
  
  addName(event) {
    console.log("Add name button clicked");
    this.setState({
      count: this.state.count + 1,
    });
  }

  makeEducationGroup() {
    let obj = {
      name: "",
      from: "",
      to: "",
      degree : "",
      major: "",
      city: "",
      state: "",
    };
    return obj;
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
            {[...Array(this.state.count)].map((e, i) => {
              return (
                <div className="form-group">
                  <div className="form-row single">
                    <div className="form-input">
                      <label htmlFor={"school-name-" + i}>School Name</label>
                      <input
                        type="text"
                        name={"school-name-" + i}
                        id={"school-name-" + i}
                      ></input>
                    </div>
                  </div>
                  <div className="form-row pair">
                    <div className="form-input">
                      <label htmlFor={"school-From-" + i}>From</label>
                      <input
                        type="text"
                        name={"school-From-" + i}
                        id={"school-name-" + i}
                      ></input>
                    </div>
                    <div className="form-input">
                      <label htmlFor={"school-To-" + i}>To</label>
                      <input
                        type="text"
                        name={"school-To-" + i}
                        id={"school-To-" + i}
                      ></input>
                    </div>
                  </div>
                  <div className="form-row pair">
                    <div className="form-input">
                      <label htmlFor={"school-degree-" + i}>Degree</label>
                      <input
                        type="text"
                        name={"school-degree-" + i}
                        id={"school-degree-" + i}
                      ></input>
                    </div>
                    <div className="form-input">
                      <label htmlFor={"school-major-" + i}>Major</label>
                      <input
                        type="text"
                        name={"school-major-" + i}
                        id={"school-major-" + i}
                      ></input>
                    </div>
                  </div>
                  <div className="form-row pair">
                    <div className="form-input">
                      <label htmlFor={"school-city-" + i}>City</label>
                      <input
                        type="text"
                        name={"school-city-" + i}
                        id={"school-city-" + i}
                      ></input>
                    </div>
                    <div className="form-input">
                      <label htmlFor={"school-state-" + i}>State</label>
                      <input
                        type="text"
                        name={"school-state-" + i}
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
              onClick={this.addName}
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
