import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from "redux";
import { BrowserRouter , Route } from 'react-router-dom';
import reducer from './redux-reducer/reducer';
import App from './containers/App'; 
import * as serviceWorker from './serviceWorker';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(reducer);

const jsx = (
    <BrowserRouter basename="/test/react/build/">
        <Provider store={store}>
                <Route component={App}/>
        </Provider>
    </BrowserRouter>
)

ReactDOM.render(jsx, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
