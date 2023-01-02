import { render } from '@testing-library/react';
import React, { Component } from 'react';
import Form from './components/Form';
import CV from './components/CV';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Form></Form>
      </div>
    );
  }
}

export default App;
