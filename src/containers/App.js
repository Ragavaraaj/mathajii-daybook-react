import React from 'react';
import { Container } from 'reactstrap';
import Menu from '../components/Menu/Menu'
import './App.css';
import FormContainer from './FormContainer/FormContainer'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    }
  }

  render() {
    return (
      <div className="App">
        <Container fluid>
          <Menu />
          <FormContainer />
        </Container>
      </div>
    );
  }
}

export default App;
