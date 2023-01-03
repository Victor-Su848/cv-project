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
      },
    };

    this.addName = this.addName.bind(this);
  }

  handleFirstNameChange(event) {
    this.setState({
      personalInfo: {
        firstName: event.target.value,
        lastName: this.state.personalInfo.lastName,
      },
    });
  }

  addName(event) {
    console.log("Add name button clicked");
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <main>
        <form>
          <div className="form-section">
            <div className="form-group">
              <div className="form-row pair">
                <div className="form-input">
                  <label htmlFor="first-name">First Name</label>
                  <input type="text" name="first-name" id="first-name"></input>
                </div>
                <div className="form-input">
                  <label htmlFor="last-name">Last Name</label>
                  <input type="text" name="last-name" id="last-name"></input>
                </div>
              </div>
              <div className="form-row pair">
                <div className="form-input">
                  <label htmlFor="phone-number">Phone Number</label>
                  <input
                    type="tel"
                    name="phone-number"
                    id="phone-number"
                  ></input>
                </div>
                <div className="form-input">
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" id="email"></input>
                </div>
              </div>
            </div>
          </div>

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
                </div>
              );
            })}
            <button className="add-remove-btn" type="button" onClick={this.addName}>
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
