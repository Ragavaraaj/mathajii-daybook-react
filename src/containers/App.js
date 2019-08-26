import React from 'react';
import { Container } from 'reactstrap';
import { BrowserRouter , Route , Switch} from 'react-router-dom'
import Menu from '../components/Menu/Menu'
import FormContainer from './FormContainer/FormContainer'
import './App.css';
import WelcomeContainer from './FormContainer/WelcomeContainer';

class App extends React.Component {
   render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Container fluid>
            <Menu />
            <Switch>
              <Route path="/buttons" component={FormContainer} />
              <Route path="/" component={WelcomeContainer} />
            </Switch>
          </Container>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
