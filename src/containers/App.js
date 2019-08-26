import React from 'react';
import { Container } from 'reactstrap';
import { BrowserRouter , Route , Switch} from 'react-router-dom'
import Menu from '../components/Menu/Menu'
import FormContainer from './FormContainer/FormContainer'
import './App.css';

class App extends React.Component {
   render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Container fluid>
            <Menu />
            {/* <FormContainer /> */}
            <Switch>
              <Route path="/buttons" exact component={FormContainer} />    
            </Switch>
          </Container>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
