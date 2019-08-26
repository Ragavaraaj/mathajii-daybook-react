import React from 'react';
import { Container } from 'reactstrap';
import Menu from '../components/Menu/Menu'
import './App.css';
import FormContainer from './FormContainer/FormContainer'


class App extends React.Component {
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
