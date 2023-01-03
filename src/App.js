import { render } from "@testing-library/react";
import React, { Component } from "react";
import Form from "./components/Form";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Form></Form>;
  }
}

export default App;
