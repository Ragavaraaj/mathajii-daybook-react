import React from 'react';
import { Container } from 'reactstrap'
import { Route , Switch} from 'react-router-dom'
import Menu from '../components/Menu/Menu'
import FormContainer from './SubContainer/FormContainer'
import WelcomeContainer from './SubContainer/WelcomeContainer'
import DayBookContainer from './SubContainer/DayBookContainer'
import './App.css';
import CustomSwipe from '../components/CustomSwipe/CustomSwipe';

class App extends React.Component {
  
  constructor(props){
    super(props)
    this.state={
      currentpage : 0
    }
  }

  currentpageHandler = (val) =>{
    this.setState({
      currentpage : val
    })
  }

   render() {
    return (
      <CustomSwipe push={this.props.history.push} index={this.state.currentpage} changepage={this.currentpageHandler}>
        <div className="App">
        <Container fluid>{console.log(this.props)}
          <Menu changepage={this.currentpageHandler}/>
          <Switch>
            <Route path="/buttons" component={FormContainer} />
            <Route path="/daybook" component={DayBookContainer} />
            <Route path="/" component={WelcomeContainer} />
          </Switch>
        </Container>
        </div>
      </CustomSwipe>
    );
  }
}

export default App;
