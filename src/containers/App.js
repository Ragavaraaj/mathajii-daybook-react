import React from 'react';
import { Container } from 'reactstrap'
import { BrowserRouter , Route , Switch} from 'react-router-dom'
import Menu from '../components/Menu/Menu'
import FormContainer from './SubContainer/FormContainer'
import WelcomeContainer from './SubContainer/WelcomeContainer'
import DayBookContainer from './SubContainer/DayBookContainer'
// import { LINK_DATA } from '../AppConst'
import './App.css';

// const containers = [ WelcomeContainer , FormContainer , DayBookContainer , null , null ]

// const Routes = () => LINK_DATA.reverse.map((el,index) => {
//   return <Route path={el.link} component={containers[index]} />
// })


class App extends React.Component {
   render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Container fluid>
            <Menu />
            <Switch>
              {/* <Routes /> */}
              <Route path="/buttons" component={FormContainer} />
              <Route path="/daybook" component={DayBookContainer} />
              <Route path="/" component={WelcomeContainer} />
            </Switch>
          </Container>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
